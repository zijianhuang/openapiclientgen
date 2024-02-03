import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddInstanceFleetOutput {
		ClusterId?: string;
		InstanceFleetId?: string;
		ClusterArn?: string;
	}
	export interface AddInstanceFleetOutputFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		InstanceFleetId: FormControl<string | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateAddInstanceFleetOutputFormGroup() {
		return new FormGroup<AddInstanceFleetOutputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			InstanceFleetId: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddInstanceFleetInput {

		/** Required */
		ClusterId: string;

		/** Required */
		InstanceFleet: InstanceFleetConfig;
	}
	export interface AddInstanceFleetInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateAddInstanceFleetInputFormGroup() {
		return new FormGroup<AddInstanceFleetInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetConfig {
		Name?: string;

		/** Required */
		InstanceFleetType: InstanceFleetType;
		TargetOnDemandCapacity?: number | null;
		TargetSpotCapacity?: number | null;
		InstanceTypeConfigs?: Array<InstanceTypeConfig>;
		LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
		ResizeSpecifications?: InstanceFleetResizingSpecifications;
	}

	/** <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetConfigFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Required */
		InstanceFleetType: FormControl<InstanceFleetType | null | undefined>,
		TargetOnDemandCapacity: FormControl<number | null | undefined>,
		TargetSpotCapacity: FormControl<number | null | undefined>,
	}
	export function CreateInstanceFleetConfigFormGroup() {
		return new FormGroup<InstanceFleetConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceFleetType: new FormControl<InstanceFleetType | null | undefined>(undefined, [Validators.required]),
			TargetOnDemandCapacity: new FormControl<number | null | undefined>(undefined),
			TargetSpotCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceFleetType { MASTER = 'MASTER', CORE = 'CORE', TASK = 'TASK' }


	/** <p>An instance type configuration for each instance type in an instance fleet, which determines the Amazon EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceTypeConfig {

		/** Required */
		InstanceType: string;
		WeightedCapacity?: number | null;
		BidPrice?: string;
		BidPriceAsPercentageOfOnDemandPrice?: number | null;
		EbsConfiguration?: EbsConfiguration;
		Configurations?: Array<Configuration>;
		CustomAmiId?: string;
	}

	/** <p>An instance type configuration for each instance type in an instance fleet, which determines the Amazon EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance Fleets</a>. Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceTypeConfigFormProperties {

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		WeightedCapacity: FormControl<number | null | undefined>,
		BidPrice: FormControl<string | null | undefined>,
		BidPriceAsPercentageOfOnDemandPrice: FormControl<number | null | undefined>,
		CustomAmiId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceTypeConfigFormGroup() {
		return new FormGroup<InstanceTypeConfigFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WeightedCapacity: new FormControl<number | null | undefined>(undefined),
			BidPrice: new FormControl<string | null | undefined>(undefined),
			BidPriceAsPercentageOfOnDemandPrice: new FormControl<number | null | undefined>(undefined),
			CustomAmiId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon EBS configuration of a cluster instance. */
	export interface EbsConfiguration {
		EbsBlockDeviceConfigs?: Array<EbsBlockDeviceConfig>;
		EbsOptimized?: boolean | null;
	}

	/** The Amazon EBS configuration of a cluster instance. */
	export interface EbsConfigurationFormProperties {
		EbsOptimized: FormControl<boolean | null | undefined>,
	}
	export function CreateEbsConfigurationFormGroup() {
		return new FormGroup<EbsConfigurationFormProperties>({
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration of requested EBS block device associated with the instance group with count of volumes that are associated to every instance. */
	export interface EbsBlockDeviceConfig {

		/** Required */
		VolumeSpecification: VolumeSpecification;
		VolumesPerInstance?: number | null;
	}

	/** Configuration of requested EBS block device associated with the instance group with count of volumes that are associated to every instance. */
	export interface EbsBlockDeviceConfigFormProperties {
		VolumesPerInstance: FormControl<number | null | undefined>,
	}
	export function CreateEbsBlockDeviceConfigFormGroup() {
		return new FormGroup<EbsBlockDeviceConfigFormProperties>({
			VolumesPerInstance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster. */
	export interface VolumeSpecification {

		/** Required */
		VolumeType: string;
		Iops?: number | null;

		/** Required */
		SizeInGB: number;
		Throughput?: number | null;
	}

	/** EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster. */
	export interface VolumeSpecificationFormProperties {

		/** Required */
		VolumeType: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,

		/** Required */
		SizeInGB: FormControl<number | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
	}
	export function CreateVolumeSpecificationFormGroup() {
		return new FormGroup<VolumeSpecificationFormProperties>({
			VolumeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Iops: new FormControl<number | null | undefined>(undefined),
			SizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Throughput: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> */
	export interface Configuration {
		Classification?: string;
		Configurations?: Array<Configuration>;
		Properties?: StringMap;
	}

	/** <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> */
	export interface ConfigurationFormProperties {
		Classification: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			Classification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}


	/** <p>The launch specification for Spot Instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot instance allocation strategies are available in Amazon EMR releases 5.12.1 and later.</p> </note> */
	export interface InstanceFleetProvisioningSpecifications {
		SpotSpecification?: SpotProvisioningSpecification;
		OnDemandSpecification?: OnDemandProvisioningSpecification;
	}

	/** <p>The launch specification for Spot Instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot instance allocation strategies are available in Amazon EMR releases 5.12.1 and later.</p> </note> */
	export interface InstanceFleetProvisioningSpecificationsFormProperties {
	}
	export function CreateInstanceFleetProvisioningSpecificationsFormGroup() {
		return new FormGroup<InstanceFleetProvisioningSpecificationsFormProperties>({
		});

	}


	/** <p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR releases 5.12.1 and later.</p> </note> <note> <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. </p> </note> */
	export interface SpotProvisioningSpecification {

		/** Required */
		TimeoutDurationMinutes: number;

		/** Required */
		TimeoutAction: SpotProvisioningTimeoutAction;
		BlockDurationMinutes?: number | null;
		AllocationStrategy?: SpotProvisioningAllocationStrategy;
	}

	/** <p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR releases 5.12.1 and later.</p> </note> <note> <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. </p> </note> */
	export interface SpotProvisioningSpecificationFormProperties {

		/** Required */
		TimeoutDurationMinutes: FormControl<number | null | undefined>,

		/** Required */
		TimeoutAction: FormControl<SpotProvisioningTimeoutAction | null | undefined>,
		BlockDurationMinutes: FormControl<number | null | undefined>,
		AllocationStrategy: FormControl<SpotProvisioningAllocationStrategy | null | undefined>,
	}
	export function CreateSpotProvisioningSpecificationFormGroup() {
		return new FormGroup<SpotProvisioningSpecificationFormProperties>({
			TimeoutDurationMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TimeoutAction: new FormControl<SpotProvisioningTimeoutAction | null | undefined>(undefined, [Validators.required]),
			BlockDurationMinutes: new FormControl<number | null | undefined>(undefined),
			AllocationStrategy: new FormControl<SpotProvisioningAllocationStrategy | null | undefined>(undefined),
		});

	}

	export enum SpotProvisioningTimeoutAction { SWITCH_TO_ON_DEMAND = 'SWITCH_TO_ON_DEMAND', TERMINATE_CLUSTER = 'TERMINATE_CLUSTER' }

	export enum SpotProvisioningAllocationStrategy { 'capacity-optimized' = 'capacity-optimized', 'price-capacity-optimized' = 'price-capacity-optimized', 'lowest-price' = 'lowest-price', diversified = 'diversified' }


	/** <p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.</p> </note> */
	export interface OnDemandProvisioningSpecification {

		/** Required */
		AllocationStrategy: OnDemandProvisioningAllocationStrategy;
		CapacityReservationOptions?: OnDemandCapacityReservationOptions;
	}

	/** <p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.</p> </note> */
	export interface OnDemandProvisioningSpecificationFormProperties {

		/** Required */
		AllocationStrategy: FormControl<OnDemandProvisioningAllocationStrategy | null | undefined>,
	}
	export function CreateOnDemandProvisioningSpecificationFormGroup() {
		return new FormGroup<OnDemandProvisioningSpecificationFormProperties>({
			AllocationStrategy: new FormControl<OnDemandProvisioningAllocationStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OnDemandProvisioningAllocationStrategy { 'lowest-price' = 'lowest-price' }


	/** Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity. */
	export interface OnDemandCapacityReservationOptions {
		UsageStrategy?: OnDemandCapacityReservationUsageStrategy;
		CapacityReservationPreference?: OnDemandCapacityReservationPreference;
		CapacityReservationResourceGroupArn?: string;
	}

	/** Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity. */
	export interface OnDemandCapacityReservationOptionsFormProperties {
		UsageStrategy: FormControl<OnDemandCapacityReservationUsageStrategy | null | undefined>,
		CapacityReservationPreference: FormControl<OnDemandCapacityReservationPreference | null | undefined>,
		CapacityReservationResourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateOnDemandCapacityReservationOptionsFormGroup() {
		return new FormGroup<OnDemandCapacityReservationOptionsFormProperties>({
			UsageStrategy: new FormControl<OnDemandCapacityReservationUsageStrategy | null | undefined>(undefined),
			CapacityReservationPreference: new FormControl<OnDemandCapacityReservationPreference | null | undefined>(undefined),
			CapacityReservationResourceGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OnDemandCapacityReservationUsageStrategy { 'use-capacity-reservations-first' = 'use-capacity-reservations-first' }

	export enum OnDemandCapacityReservationPreference { open = 'open', none = 'none' }


	/** The resize specification for On-Demand and Spot Instances in the fleet. */
	export interface InstanceFleetResizingSpecifications {
		SpotResizeSpecification?: SpotResizingSpecification;
		OnDemandResizeSpecification?: OnDemandResizingSpecification;
	}

	/** The resize specification for On-Demand and Spot Instances in the fleet. */
	export interface InstanceFleetResizingSpecificationsFormProperties {
	}
	export function CreateInstanceFleetResizingSpecificationsFormGroup() {
		return new FormGroup<InstanceFleetResizingSpecificationsFormProperties>({
		});

	}


	/** The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period.  */
	export interface SpotResizingSpecification {

		/** Required */
		TimeoutDurationMinutes: number;
	}

	/** The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period.  */
	export interface SpotResizingSpecificationFormProperties {

		/** Required */
		TimeoutDurationMinutes: FormControl<number | null | undefined>,
	}
	export function CreateSpotResizingSpecificationFormGroup() {
		return new FormGroup<SpotResizingSpecificationFormProperties>({
			TimeoutDurationMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period.  */
	export interface OnDemandResizingSpecification {

		/** Required */
		TimeoutDurationMinutes: number;
	}

	/** The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period.  */
	export interface OnDemandResizingSpecificationFormProperties {

		/** Required */
		TimeoutDurationMinutes: FormControl<number | null | undefined>,
	}
	export function CreateOnDemandResizingSpecificationFormGroup() {
		return new FormGroup<OnDemandResizingSpecificationFormProperties>({
			TimeoutDurationMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}


	/** Output from an AddInstanceGroups call. */
	export interface AddInstanceGroupsOutput {
		JobFlowId?: string;
		InstanceGroupIds?: Array<string>;
		ClusterArn?: string;
	}

	/** Output from an AddInstanceGroups call. */
	export interface AddInstanceGroupsOutputFormProperties {
		JobFlowId: FormControl<string | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateAddInstanceGroupsOutputFormGroup() {
		return new FormGroup<AddInstanceGroupsOutputFormProperties>({
			JobFlowId: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to an AddInstanceGroups call. */
	export interface AddInstanceGroupsInput {

		/** Required */
		InstanceGroups: Array<InstanceGroupConfig>;

		/** Required */
		JobFlowId: string;
	}

	/** Input to an AddInstanceGroups call. */
	export interface AddInstanceGroupsInputFormProperties {

		/** Required */
		JobFlowId: FormControl<string | null | undefined>,
	}
	export function CreateAddInstanceGroupsInputFormGroup() {
		return new FormGroup<AddInstanceGroupsInputFormProperties>({
			JobFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration defining a new instance group. */
	export interface InstanceGroupConfig {
		Name?: string;
		Market?: MarketType;

		/** Required */
		InstanceRole: InstanceFleetType;
		BidPrice?: string;

		/** Required */
		InstanceType: string;

		/** Required */
		InstanceCount: number;
		Configurations?: Array<Configuration>;
		EbsConfiguration?: EbsConfiguration;
		AutoScalingPolicy?: AutoScalingPolicy;
		CustomAmiId?: string;
	}

	/** Configuration defining a new instance group. */
	export interface InstanceGroupConfigFormProperties {
		Name: FormControl<string | null | undefined>,
		Market: FormControl<MarketType | null | undefined>,

		/** Required */
		InstanceRole: FormControl<InstanceFleetType | null | undefined>,
		BidPrice: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,

		/** Required */
		InstanceCount: FormControl<number | null | undefined>,
		CustomAmiId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceGroupConfigFormGroup() {
		return new FormGroup<InstanceGroupConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Market: new FormControl<MarketType | null | undefined>(undefined),
			InstanceRole: new FormControl<InstanceFleetType | null | undefined>(undefined, [Validators.required]),
			BidPrice: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CustomAmiId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MarketType { ON_DEMAND = 'ON_DEMAND', SPOT = 'SPOT' }


	/** An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
	export interface AutoScalingPolicy {

		/** Required */
		Constraints: ScalingConstraints;

		/** Required */
		Rules: Array<ScalingRule>;
	}

	/** An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
	export interface AutoScalingPolicyFormProperties {
	}
	export function CreateAutoScalingPolicyFormGroup() {
		return new FormGroup<AutoScalingPolicyFormProperties>({
		});

	}


	/** The upper and lower Amazon EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits. */
	export interface ScalingConstraints {

		/** Required */
		MinCapacity: number;

		/** Required */
		MaxCapacity: number;
	}

	/** The upper and lower Amazon EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits. */
	export interface ScalingConstraintsFormProperties {

		/** Required */
		MinCapacity: FormControl<number | null | undefined>,

		/** Required */
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateScalingConstraintsFormGroup() {
		return new FormGroup<ScalingConstraintsFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how Amazon EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules. */
	export interface ScalingRule {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Action: ScalingAction;

		/** Required */
		Trigger: ScalingTrigger;
	}

	/** A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how Amazon EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules. */
	export interface ScalingRuleFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateScalingRuleFormGroup() {
		return new FormGroup<ScalingRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment. */
	export interface ScalingAction {
		Market?: MarketType;

		/** Required */
		SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
	}

	/** The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment. */
	export interface ScalingActionFormProperties {
		Market: FormControl<MarketType | null | undefined>,
	}
	export function CreateScalingActionFormGroup() {
		return new FormGroup<ScalingActionFormProperties>({
			Market: new FormControl<MarketType | null | undefined>(undefined),
		});

	}


	/** An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of Amazon EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied. */
	export interface SimpleScalingPolicyConfiguration {
		AdjustmentType?: AdjustmentType;

		/** Required */
		ScalingAdjustment: number;
		CoolDown?: number | null;
	}

	/** An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of Amazon EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied. */
	export interface SimpleScalingPolicyConfigurationFormProperties {
		AdjustmentType: FormControl<AdjustmentType | null | undefined>,

		/** Required */
		ScalingAdjustment: FormControl<number | null | undefined>,
		CoolDown: FormControl<number | null | undefined>,
	}
	export function CreateSimpleScalingPolicyConfigurationFormGroup() {
		return new FormGroup<SimpleScalingPolicyConfigurationFormProperties>({
			AdjustmentType: new FormControl<AdjustmentType | null | undefined>(undefined),
			ScalingAdjustment: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CoolDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AdjustmentType { CHANGE_IN_CAPACITY = 'CHANGE_IN_CAPACITY', PERCENT_CHANGE_IN_CAPACITY = 'PERCENT_CHANGE_IN_CAPACITY', EXACT_CAPACITY = 'EXACT_CAPACITY' }


	/** The conditions that trigger an automatic scaling activity. */
	export interface ScalingTrigger {

		/** Required */
		CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
	}

	/** The conditions that trigger an automatic scaling activity. */
	export interface ScalingTriggerFormProperties {
	}
	export function CreateScalingTriggerFormGroup() {
		return new FormGroup<ScalingTriggerFormProperties>({
		});

	}


	/** The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins. */
	export interface CloudWatchAlarmDefinition {

		/** Required */
		ComparisonOperator: ComparisonOperator;
		EvaluationPeriods?: number | null;

		/** Required */
		MetricName: string;
		Namespace?: string;

		/** Required */
		Period: number;
		Statistic?: Statistic;

		/** Required */
		Threshold: number;
		Unit?: Unit;
		Dimensions?: Array<MetricDimension>;
	}

	/** The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins. */
	export interface CloudWatchAlarmDefinitionFormProperties {

		/** Required */
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
		EvaluationPeriods: FormControl<number | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,

		/** Required */
		Period: FormControl<number | null | undefined>,
		Statistic: FormControl<Statistic | null | undefined>,

		/** Required */
		Threshold: FormControl<number | null | undefined>,
		Unit: FormControl<Unit | null | undefined>,
	}
	export function CreateCloudWatchAlarmDefinitionFormGroup() {
		return new FormGroup<CloudWatchAlarmDefinitionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined, [Validators.required]),
			EvaluationPeriods: new FormControl<number | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Namespace: new FormControl<string | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Statistic: new FormControl<Statistic | null | undefined>(undefined),
			Threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<Unit | null | undefined>(undefined),
		});

	}

	export enum ComparisonOperator { GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL', GREATER_THAN = 'GREATER_THAN', LESS_THAN = 'LESS_THAN', LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL' }

	export enum Statistic { SAMPLE_COUNT = 'SAMPLE_COUNT', AVERAGE = 'AVERAGE', SUM = 'SUM', MINIMUM = 'MINIMUM', MAXIMUM = 'MAXIMUM' }

	export enum Unit { NONE = 'NONE', SECONDS = 'SECONDS', MICRO_SECONDS = 'MICRO_SECONDS', MILLI_SECONDS = 'MILLI_SECONDS', BYTES = 'BYTES', KILO_BYTES = 'KILO_BYTES', MEGA_BYTES = 'MEGA_BYTES', GIGA_BYTES = 'GIGA_BYTES', TERA_BYTES = 'TERA_BYTES', BITS = 'BITS', KILO_BITS = 'KILO_BITS', MEGA_BITS = 'MEGA_BITS', GIGA_BITS = 'GIGA_BITS', TERA_BITS = 'TERA_BITS', PERCENT = 'PERCENT', COUNT = 'COUNT', BYTES_PER_SECOND = 'BYTES_PER_SECOND', KILO_BYTES_PER_SECOND = 'KILO_BYTES_PER_SECOND', MEGA_BYTES_PER_SECOND = 'MEGA_BYTES_PER_SECOND', GIGA_BYTES_PER_SECOND = 'GIGA_BYTES_PER_SECOND', TERA_BYTES_PER_SECOND = 'TERA_BYTES_PER_SECOND', BITS_PER_SECOND = 'BITS_PER_SECOND', KILO_BITS_PER_SECOND = 'KILO_BITS_PER_SECOND', MEGA_BITS_PER_SECOND = 'MEGA_BITS_PER_SECOND', GIGA_BITS_PER_SECOND = 'GIGA_BITS_PER_SECOND', TERA_BITS_PER_SECOND = 'TERA_BITS_PER_SECOND', COUNT_PER_SECOND = 'COUNT_PER_SECOND' }


	/** A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available. */
	export interface MetricDimension {
		Key?: string;
		Value?: string;
	}

	/** A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available. */
	export interface MetricDimensionFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}


	/**  The output for the <a>AddJobFlowSteps</a> operation.  */
	export interface AddJobFlowStepsOutput {
		StepIds?: Array<string>;
	}

	/**  The output for the <a>AddJobFlowSteps</a> operation.  */
	export interface AddJobFlowStepsOutputFormProperties {
	}
	export function CreateAddJobFlowStepsOutputFormGroup() {
		return new FormGroup<AddJobFlowStepsOutputFormProperties>({
		});

	}


	/**  The input argument to the <a>AddJobFlowSteps</a> operation.  */
	export interface AddJobFlowStepsInput {

		/** Required */
		JobFlowId: string;

		/** Required */
		Steps: Array<StepConfig>;
		ExecutionRoleArn?: string;
	}

	/**  The input argument to the <a>AddJobFlowSteps</a> operation.  */
	export interface AddJobFlowStepsInputFormProperties {

		/** Required */
		JobFlowId: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAddJobFlowStepsInputFormGroup() {
		return new FormGroup<AddJobFlowStepsInputFormProperties>({
			JobFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification for a cluster (job flow) step. */
	export interface StepConfig {

		/** Required */
		Name: string;
		ActionOnFailure?: ActionOnFailure;

		/** Required */
		HadoopJarStep: HadoopJarStepConfig;
	}

	/** Specification for a cluster (job flow) step. */
	export interface StepConfigFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ActionOnFailure: FormControl<ActionOnFailure | null | undefined>,
	}
	export function CreateStepConfigFormGroup() {
		return new FormGroup<StepConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActionOnFailure: new FormControl<ActionOnFailure | null | undefined>(undefined),
		});

	}

	export enum ActionOnFailure { TERMINATE_JOB_FLOW = 'TERMINATE_JOB_FLOW', TERMINATE_CLUSTER = 'TERMINATE_CLUSTER', CANCEL_AND_WAIT = 'CANCEL_AND_WAIT', CONTINUE = 'CONTINUE' }


	/** A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
	export interface HadoopJarStepConfig {
		Properties?: Array<KeyValue>;

		/** Required */
		Jar: string;
		MainClass?: string;
		Args?: Array<string>;
	}

	/** A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
	export interface HadoopJarStepConfigFormProperties {

		/** Required */
		Jar: FormControl<string | null | undefined>,
		MainClass: FormControl<string | null | undefined>,
	}
	export function CreateHadoopJarStepConfigFormGroup() {
		return new FormGroup<HadoopJarStepConfigFormProperties>({
			Jar: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MainClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair. */
	export interface KeyValue {
		Key?: string;
		Value?: string;
	}

	/** A key-value pair. */
	export interface KeyValueFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValueFormGroup() {
		return new FormGroup<KeyValueFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This output indicates the result of adding tags to a resource. */
	export interface AddTagsOutput {
	}

	/** This output indicates the result of adding tags to a resource. */
	export interface AddTagsOutputFormProperties {
	}
	export function CreateAddTagsOutputFormGroup() {
		return new FormGroup<AddTagsOutputFormProperties>({
		});

	}


	/** This input identifies an Amazon EMR resource and a list of tags to attach. */
	export interface AddTagsInput {

		/** Required */
		ResourceId: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** This input identifies an Amazon EMR resource and a list of tags to attach. */
	export interface AddTagsInputFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsInputFormGroup() {
		return new FormGroup<AddTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.  */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.  */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The output for the <a>CancelSteps</a> operation.  */
	export interface CancelStepsOutput {
		CancelStepsInfoList?: Array<CancelStepsInfo>;
	}

	/**  The output for the <a>CancelSteps</a> operation.  */
	export interface CancelStepsOutputFormProperties {
	}
	export function CreateCancelStepsOutputFormGroup() {
		return new FormGroup<CancelStepsOutputFormProperties>({
		});

	}


	/** Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0. */
	export interface CancelStepsInfo {
		StepId?: string;
		Status?: CancelStepsRequestStatus;
		Reason?: string;
	}

	/** Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0. */
	export interface CancelStepsInfoFormProperties {
		StepId: FormControl<string | null | undefined>,
		Status: FormControl<CancelStepsRequestStatus | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateCancelStepsInfoFormGroup() {
		return new FormGroup<CancelStepsInfoFormProperties>({
			StepId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CancelStepsRequestStatus | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CancelStepsRequestStatus { SUBMITTED = 'SUBMITTED', FAILED = 'FAILED' }


	/** The input argument to the <a>CancelSteps</a> operation. */
	export interface CancelStepsInput {

		/** Required */
		ClusterId: string;

		/** Required */
		StepIds: Array<string>;
		StepCancellationOption?: StepCancellationOption;
	}

	/** The input argument to the <a>CancelSteps</a> operation. */
	export interface CancelStepsInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		StepCancellationOption: FormControl<StepCancellationOption | null | undefined>,
	}
	export function CreateCancelStepsInputFormGroup() {
		return new FormGroup<CancelStepsInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StepCancellationOption: new FormControl<StepCancellationOption | null | undefined>(undefined),
		});

	}

	export enum StepCancellationOption { SEND_INTERRUPT = 'SEND_INTERRUPT', TERMINATE_PROCESS = 'TERMINATE_PROCESS' }

	export interface CreateSecurityConfigurationOutput {

		/** Required */
		Name: string;

		/** Required */
		CreationDateTime: Date;
	}
	export interface CreateSecurityConfigurationOutputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		CreationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSecurityConfigurationOutputFormGroup() {
		return new FormGroup<CreateSecurityConfigurationOutputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSecurityConfigurationInput {

		/** Required */
		Name: string;

		/** Required */
		SecurityConfiguration: string;
	}
	export interface CreateSecurityConfigurationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SecurityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityConfigurationInputFormGroup() {
		return new FormGroup<CreateSecurityConfigurationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStudioOutput {
		StudioId?: string;
		Url?: string;
	}
	export interface CreateStudioOutputFormProperties {
		StudioId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateCreateStudioOutputFormGroup() {
		return new FormGroup<CreateStudioOutputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStudioInput {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		AuthMode: AuthMode;

		/** Required */
		VpcId: string;

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		ServiceRole: string;
		UserRole?: string;

		/** Required */
		WorkspaceSecurityGroupId: string;

		/** Required */
		EngineSecurityGroupId: string;

		/** Required */
		DefaultS3Location: string;
		IdpAuthUrl?: string;
		IdpRelayStateParameterName?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateStudioInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		AuthMode: FormControl<AuthMode | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,

		/** Required */
		ServiceRole: FormControl<string | null | undefined>,
		UserRole: FormControl<string | null | undefined>,

		/** Required */
		WorkspaceSecurityGroupId: FormControl<string | null | undefined>,

		/** Required */
		EngineSecurityGroupId: FormControl<string | null | undefined>,

		/** Required */
		DefaultS3Location: FormControl<string | null | undefined>,
		IdpAuthUrl: FormControl<string | null | undefined>,
		IdpRelayStateParameterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateStudioInputFormGroup() {
		return new FormGroup<CreateStudioInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AuthMode: new FormControl<AuthMode | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserRole: new FormControl<string | null | undefined>(undefined),
			WorkspaceSecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineSecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultS3Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdpAuthUrl: new FormControl<string | null | undefined>(undefined),
			IdpRelayStateParameterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthMode { SSO = 'SSO', IAM = 'IAM' }

	export interface CreateStudioSessionMappingInput {

		/** Required */
		StudioId: string;
		IdentityId?: string;
		IdentityName?: string;

		/** Required */
		IdentityType: IdentityType;

		/** Required */
		SessionPolicyArn: string;
	}
	export interface CreateStudioSessionMappingInputFormProperties {

		/** Required */
		StudioId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,

		/** Required */
		IdentityType: FormControl<IdentityType | null | undefined>,

		/** Required */
		SessionPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStudioSessionMappingInputFormGroup() {
		return new FormGroup<CreateStudioSessionMappingInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined, [Validators.required]),
			SessionPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IdentityType { USER = 'USER', GROUP = 'GROUP' }

	export interface DeleteSecurityConfigurationOutput {
	}
	export interface DeleteSecurityConfigurationOutputFormProperties {
	}
	export function CreateDeleteSecurityConfigurationOutputFormGroup() {
		return new FormGroup<DeleteSecurityConfigurationOutputFormProperties>({
		});

	}

	export interface DeleteSecurityConfigurationInput {

		/** Required */
		Name: string;
	}
	export interface DeleteSecurityConfigurationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSecurityConfigurationInputFormGroup() {
		return new FormGroup<DeleteSecurityConfigurationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteStudioInput {

		/** Required */
		StudioId: string;
	}
	export interface DeleteStudioInputFormProperties {

		/** Required */
		StudioId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStudioInputFormGroup() {
		return new FormGroup<DeleteStudioInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteStudioSessionMappingInput {

		/** Required */
		StudioId: string;
		IdentityId?: string;
		IdentityName?: string;

		/** Required */
		IdentityType: IdentityType;
	}
	export interface DeleteStudioSessionMappingInputFormProperties {

		/** Required */
		StudioId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,

		/** Required */
		IdentityType: FormControl<IdentityType | null | undefined>,
	}
	export function CreateDeleteStudioSessionMappingInputFormGroup() {
		return new FormGroup<DeleteStudioSessionMappingInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This output contains the description of the cluster. */
	export interface DescribeClusterOutput {
		Cluster?: Cluster;
	}

	/** This output contains the description of the cluster. */
	export interface DescribeClusterOutputFormProperties {
	}
	export function CreateDescribeClusterOutputFormGroup() {
		return new FormGroup<DescribeClusterOutputFormProperties>({
		});

	}


	/** The detailed description of the cluster. */
	export interface Cluster {
		Id?: string;
		Name?: string;
		Status?: ClusterStatus;
		Ec2InstanceAttributes?: Ec2InstanceAttributes;
		InstanceCollectionType?: InstanceCollectionType;
		LogUri?: string;
		LogEncryptionKmsKeyId?: string;
		RequestedAmiVersion?: string;
		RunningAmiVersion?: string;
		ReleaseLabel?: string;
		AutoTerminate?: boolean | null;
		TerminationProtected?: boolean | null;
		VisibleToAllUsers?: boolean | null;
		Applications?: Array<Application>;
		Tags?: Array<Tag>;
		ServiceRole?: string;
		NormalizedInstanceHours?: number | null;
		MasterPublicDnsName?: string;
		Configurations?: Array<Configuration>;
		SecurityConfiguration?: string;
		AutoScalingRole?: string;
		ScaleDownBehavior?: ScaleDownBehavior;
		CustomAmiId?: string;
		EbsRootVolumeSize?: number | null;
		RepoUpgradeOnBoot?: RepoUpgradeOnBoot;
		KerberosAttributes?: KerberosAttributes;
		ClusterArn?: string;
		OutpostArn?: string;
		StepConcurrencyLevel?: number | null;
		PlacementGroups?: Array<PlacementGroupConfig>;
		OSReleaseLabel?: string;
	}

	/** The detailed description of the cluster. */
	export interface ClusterFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		InstanceCollectionType: FormControl<InstanceCollectionType | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		LogEncryptionKmsKeyId: FormControl<string | null | undefined>,
		RequestedAmiVersion: FormControl<string | null | undefined>,
		RunningAmiVersion: FormControl<string | null | undefined>,
		ReleaseLabel: FormControl<string | null | undefined>,
		AutoTerminate: FormControl<boolean | null | undefined>,
		TerminationProtected: FormControl<boolean | null | undefined>,
		VisibleToAllUsers: FormControl<boolean | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		NormalizedInstanceHours: FormControl<number | null | undefined>,
		MasterPublicDnsName: FormControl<string | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		AutoScalingRole: FormControl<string | null | undefined>,
		ScaleDownBehavior: FormControl<ScaleDownBehavior | null | undefined>,
		CustomAmiId: FormControl<string | null | undefined>,
		EbsRootVolumeSize: FormControl<number | null | undefined>,
		RepoUpgradeOnBoot: FormControl<RepoUpgradeOnBoot | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
		OutpostArn: FormControl<string | null | undefined>,
		StepConcurrencyLevel: FormControl<number | null | undefined>,
		OSReleaseLabel: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceCollectionType: new FormControl<InstanceCollectionType | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			LogEncryptionKmsKeyId: new FormControl<string | null | undefined>(undefined),
			RequestedAmiVersion: new FormControl<string | null | undefined>(undefined),
			RunningAmiVersion: new FormControl<string | null | undefined>(undefined),
			ReleaseLabel: new FormControl<string | null | undefined>(undefined),
			AutoTerminate: new FormControl<boolean | null | undefined>(undefined),
			TerminationProtected: new FormControl<boolean | null | undefined>(undefined),
			VisibleToAllUsers: new FormControl<boolean | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			NormalizedInstanceHours: new FormControl<number | null | undefined>(undefined),
			MasterPublicDnsName: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			AutoScalingRole: new FormControl<string | null | undefined>(undefined),
			ScaleDownBehavior: new FormControl<ScaleDownBehavior | null | undefined>(undefined),
			CustomAmiId: new FormControl<string | null | undefined>(undefined),
			EbsRootVolumeSize: new FormControl<number | null | undefined>(undefined),
			RepoUpgradeOnBoot: new FormControl<RepoUpgradeOnBoot | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined),
			StepConcurrencyLevel: new FormControl<number | null | undefined>(undefined),
			OSReleaseLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed status of the cluster. */
	export interface ClusterStatus {
		State?: ClusterState;
		StateChangeReason?: ClusterStateChangeReason;
		Timeline?: ClusterTimeline;
		ErrorDetails?: Array<ErrorDetail>;
	}

	/** The detailed status of the cluster. */
	export interface ClusterStatusFormProperties {
		State: FormControl<ClusterState | null | undefined>,
	}
	export function CreateClusterStatusFormGroup() {
		return new FormGroup<ClusterStatusFormProperties>({
			State: new FormControl<ClusterState | null | undefined>(undefined),
		});

	}

	export enum ClusterState { STARTING = 'STARTING', BOOTSTRAPPING = 'BOOTSTRAPPING', RUNNING = 'RUNNING', WAITING = 'WAITING', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', TERMINATED_WITH_ERRORS = 'TERMINATED_WITH_ERRORS' }


	/** The reason that the cluster changed to its current state. */
	export interface ClusterStateChangeReason {
		Code?: ClusterStateChangeReasonCode;
		Message?: string;
	}

	/** The reason that the cluster changed to its current state. */
	export interface ClusterStateChangeReasonFormProperties {
		Code: FormControl<ClusterStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateClusterStateChangeReasonFormGroup() {
		return new FormGroup<ClusterStateChangeReasonFormProperties>({
			Code: new FormControl<ClusterStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterStateChangeReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR', VALIDATION_ERROR = 'VALIDATION_ERROR', INSTANCE_FAILURE = 'INSTANCE_FAILURE', INSTANCE_FLEET_TIMEOUT = 'INSTANCE_FLEET_TIMEOUT', BOOTSTRAP_FAILURE = 'BOOTSTRAP_FAILURE', USER_REQUEST = 'USER_REQUEST', STEP_FAILURE = 'STEP_FAILURE', ALL_STEPS_COMPLETED = 'ALL_STEPS_COMPLETED' }


	/** Represents the timeline of the cluster's lifecycle. */
	export interface ClusterTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}

	/** Represents the timeline of the cluster's lifecycle. */
	export interface ClusterTimelineFormProperties {
		CreationDateTime: FormControl<Date | null | undefined>,
		ReadyDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateClusterTimelineFormGroup() {
		return new FormGroup<ClusterTimelineFormProperties>({
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadyDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A tuple that provides information about an error that caused a cluster to terminate. */
	export interface ErrorDetail {
		ErrorCode?: string;
		ErrorData?: Array<StringMap>;
		ErrorMessage?: string;
	}

	/** A tuple that provides information about an error that caused a cluster to terminate. */
	export interface ErrorDetailFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the Amazon EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on. */
	export interface Ec2InstanceAttributes {
		Ec2KeyName?: string;
		Ec2SubnetId?: string;
		RequestedEc2SubnetIds?: Array<string>;
		Ec2AvailabilityZone?: string;
		RequestedEc2AvailabilityZones?: Array<string>;
		IamInstanceProfile?: string;
		EmrManagedMasterSecurityGroup?: string;
		EmrManagedSlaveSecurityGroup?: string;
		ServiceAccessSecurityGroup?: string;
		AdditionalMasterSecurityGroups?: Array<string>;
		AdditionalSlaveSecurityGroups?: Array<string>;
	}

	/** Provides information about the Amazon EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on. */
	export interface Ec2InstanceAttributesFormProperties {
		Ec2KeyName: FormControl<string | null | undefined>,
		Ec2SubnetId: FormControl<string | null | undefined>,
		Ec2AvailabilityZone: FormControl<string | null | undefined>,
		IamInstanceProfile: FormControl<string | null | undefined>,
		EmrManagedMasterSecurityGroup: FormControl<string | null | undefined>,
		EmrManagedSlaveSecurityGroup: FormControl<string | null | undefined>,
		ServiceAccessSecurityGroup: FormControl<string | null | undefined>,
	}
	export function CreateEc2InstanceAttributesFormGroup() {
		return new FormGroup<Ec2InstanceAttributesFormProperties>({
			Ec2KeyName: new FormControl<string | null | undefined>(undefined),
			Ec2SubnetId: new FormControl<string | null | undefined>(undefined),
			Ec2AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			IamInstanceProfile: new FormControl<string | null | undefined>(undefined),
			EmrManagedMasterSecurityGroup: new FormControl<string | null | undefined>(undefined),
			EmrManagedSlaveSecurityGroup: new FormControl<string | null | undefined>(undefined),
			ServiceAccessSecurityGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceCollectionType { INSTANCE_FLEET = 'INSTANCE_FLEET', INSTANCE_GROUP = 'INSTANCE_GROUP' }


	/** <p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p> */
	export interface Application {
		Name?: string;
		Version?: string;
		Args?: Array<string>;
		AdditionalInfo?: StringMap;
	}

	/** <p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p> */
	export interface ApplicationFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScaleDownBehavior { TERMINATE_AT_INSTANCE_HOUR = 'TERMINATE_AT_INSTANCE_HOUR', TERMINATE_AT_TASK_COMPLETION = 'TERMINATE_AT_TASK_COMPLETION' }

	export enum RepoUpgradeOnBoot { SECURITY = 'SECURITY', NONE = 'NONE' }


	/** Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>. */
	export interface KerberosAttributes {

		/** Required */
		Realm: string;

		/** Required */
		KdcAdminPassword: string;
		CrossRealmTrustPrincipalPassword?: string;
		ADDomainJoinUser?: string;
		ADDomainJoinPassword?: string;
	}

	/** Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>. */
	export interface KerberosAttributesFormProperties {

		/** Required */
		Realm: FormControl<string | null | undefined>,

		/** Required */
		KdcAdminPassword: FormControl<string | null | undefined>,
		CrossRealmTrustPrincipalPassword: FormControl<string | null | undefined>,
		ADDomainJoinUser: FormControl<string | null | undefined>,
		ADDomainJoinPassword: FormControl<string | null | undefined>,
	}
	export function CreateKerberosAttributesFormGroup() {
		return new FormGroup<KerberosAttributesFormProperties>({
			Realm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KdcAdminPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CrossRealmTrustPrincipalPassword: new FormControl<string | null | undefined>(undefined),
			ADDomainJoinUser: new FormControl<string | null | undefined>(undefined),
			ADDomainJoinPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the Amazon EMR role.</p> */
	export interface PlacementGroupConfig {

		/** Required */
		InstanceRole: InstanceFleetType;
		PlacementStrategy?: PlacementGroupStrategy;
	}

	/** <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the Amazon EMR role.</p> */
	export interface PlacementGroupConfigFormProperties {

		/** Required */
		InstanceRole: FormControl<InstanceFleetType | null | undefined>,
		PlacementStrategy: FormControl<PlacementGroupStrategy | null | undefined>,
	}
	export function CreatePlacementGroupConfigFormGroup() {
		return new FormGroup<PlacementGroupConfigFormProperties>({
			InstanceRole: new FormControl<InstanceFleetType | null | undefined>(undefined, [Validators.required]),
			PlacementStrategy: new FormControl<PlacementGroupStrategy | null | undefined>(undefined),
		});

	}

	export enum PlacementGroupStrategy { SPREAD = 'SPREAD', PARTITION = 'PARTITION', CLUSTER = 'CLUSTER', NONE = 'NONE' }


	/** This input determines which cluster to describe. */
	export interface DescribeClusterInput {

		/** Required */
		ClusterId: string;
	}

	/** This input determines which cluster to describe. */
	export interface DescribeClusterInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterInputFormGroup() {
		return new FormGroup<DescribeClusterInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The output for the <a>DescribeJobFlows</a> operation.  */
	export interface DescribeJobFlowsOutput {
		JobFlows?: Array<JobFlowDetail>;
	}

	/**  The output for the <a>DescribeJobFlows</a> operation.  */
	export interface DescribeJobFlowsOutputFormProperties {
	}
	export function CreateDescribeJobFlowsOutputFormGroup() {
		return new FormGroup<DescribeJobFlowsOutputFormProperties>({
		});

	}


	/** A description of a cluster (job flow). */
	export interface JobFlowDetail {

		/** Required */
		JobFlowId: string;

		/** Required */
		Name: string;
		LogUri?: string;
		LogEncryptionKmsKeyId?: string;
		AmiVersion?: string;

		/** Required */
		ExecutionStatusDetail: JobFlowExecutionStatusDetail;

		/** Required */
		Instances: JobFlowInstancesDetail;
		Steps?: Array<StepDetail>;
		BootstrapActions?: Array<BootstrapActionDetail>;
		SupportedProducts?: Array<string>;
		VisibleToAllUsers?: boolean | null;
		JobFlowRole?: string;
		ServiceRole?: string;
		AutoScalingRole?: string;
		ScaleDownBehavior?: ScaleDownBehavior;
	}

	/** A description of a cluster (job flow). */
	export interface JobFlowDetailFormProperties {

		/** Required */
		JobFlowId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		LogEncryptionKmsKeyId: FormControl<string | null | undefined>,
		AmiVersion: FormControl<string | null | undefined>,
		VisibleToAllUsers: FormControl<boolean | null | undefined>,
		JobFlowRole: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		AutoScalingRole: FormControl<string | null | undefined>,
		ScaleDownBehavior: FormControl<ScaleDownBehavior | null | undefined>,
	}
	export function CreateJobFlowDetailFormGroup() {
		return new FormGroup<JobFlowDetailFormProperties>({
			JobFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogUri: new FormControl<string | null | undefined>(undefined),
			LogEncryptionKmsKeyId: new FormControl<string | null | undefined>(undefined),
			AmiVersion: new FormControl<string | null | undefined>(undefined),
			VisibleToAllUsers: new FormControl<boolean | null | undefined>(undefined),
			JobFlowRole: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			AutoScalingRole: new FormControl<string | null | undefined>(undefined),
			ScaleDownBehavior: new FormControl<ScaleDownBehavior | null | undefined>(undefined),
		});

	}


	/** Describes the status of the cluster (job flow). */
	export interface JobFlowExecutionStatusDetail {

		/** Required */
		State: JobFlowExecutionState;

		/** Required */
		CreationDateTime: Date;
		StartDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
		LastStateChangeReason?: string;
	}

	/** Describes the status of the cluster (job flow). */
	export interface JobFlowExecutionStatusDetailFormProperties {

		/** Required */
		State: FormControl<JobFlowExecutionState | null | undefined>,

		/** Required */
		CreationDateTime: FormControl<Date | null | undefined>,
		StartDateTime: FormControl<Date | null | undefined>,
		ReadyDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
		LastStateChangeReason: FormControl<string | null | undefined>,
	}
	export function CreateJobFlowExecutionStatusDetailFormGroup() {
		return new FormGroup<JobFlowExecutionStatusDetailFormProperties>({
			State: new FormControl<JobFlowExecutionState | null | undefined>(undefined, [Validators.required]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadyDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
			LastStateChangeReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of instance. */
	export enum JobFlowExecutionState { STARTING = 'STARTING', BOOTSTRAPPING = 'BOOTSTRAPPING', RUNNING = 'RUNNING', WAITING = 'WAITING', SHUTTING_DOWN = 'SHUTTING_DOWN', TERMINATED = 'TERMINATED', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** Specify the type of Amazon EC2 instances that the cluster (job flow) runs on. */
	export interface JobFlowInstancesDetail {

		/** Required */
		MasterInstanceType: string;
		MasterPublicDnsName?: string;
		MasterInstanceId?: string;

		/** Required */
		SlaveInstanceType: string;

		/** Required */
		InstanceCount: number;
		InstanceGroups?: Array<InstanceGroupDetail>;
		NormalizedInstanceHours?: number | null;
		Ec2KeyName?: string;
		Ec2SubnetId?: string;
		Placement?: PlacementType;
		KeepJobFlowAliveWhenNoSteps?: boolean | null;
		TerminationProtected?: boolean | null;
		HadoopVersion?: string;
	}

	/** Specify the type of Amazon EC2 instances that the cluster (job flow) runs on. */
	export interface JobFlowInstancesDetailFormProperties {

		/** Required */
		MasterInstanceType: FormControl<string | null | undefined>,
		MasterPublicDnsName: FormControl<string | null | undefined>,
		MasterInstanceId: FormControl<string | null | undefined>,

		/** Required */
		SlaveInstanceType: FormControl<string | null | undefined>,

		/** Required */
		InstanceCount: FormControl<number | null | undefined>,
		NormalizedInstanceHours: FormControl<number | null | undefined>,
		Ec2KeyName: FormControl<string | null | undefined>,
		Ec2SubnetId: FormControl<string | null | undefined>,
		KeepJobFlowAliveWhenNoSteps: FormControl<boolean | null | undefined>,
		TerminationProtected: FormControl<boolean | null | undefined>,
		HadoopVersion: FormControl<string | null | undefined>,
	}
	export function CreateJobFlowInstancesDetailFormGroup() {
		return new FormGroup<JobFlowInstancesDetailFormProperties>({
			MasterInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MasterPublicDnsName: new FormControl<string | null | undefined>(undefined),
			MasterInstanceId: new FormControl<string | null | undefined>(undefined),
			SlaveInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NormalizedInstanceHours: new FormControl<number | null | undefined>(undefined),
			Ec2KeyName: new FormControl<string | null | undefined>(undefined),
			Ec2SubnetId: new FormControl<string | null | undefined>(undefined),
			KeepJobFlowAliveWhenNoSteps: new FormControl<boolean | null | undefined>(undefined),
			TerminationProtected: new FormControl<boolean | null | undefined>(undefined),
			HadoopVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information about an instance group. */
	export interface InstanceGroupDetail {
		InstanceGroupId?: string;
		Name?: string;

		/** Required */
		Market: MarketType;

		/** Required */
		InstanceRole: InstanceFleetType;
		BidPrice?: string;

		/** Required */
		InstanceType: string;

		/** Required */
		InstanceRequestCount: number;

		/** Required */
		InstanceRunningCount: number;

		/** Required */
		State: InstanceGroupState;
		LastStateChangeReason?: string;

		/** Required */
		CreationDateTime: Date;
		StartDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
		CustomAmiId?: string;
	}

	/** Detailed information about an instance group. */
	export interface InstanceGroupDetailFormProperties {
		InstanceGroupId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		Market: FormControl<MarketType | null | undefined>,

		/** Required */
		InstanceRole: FormControl<InstanceFleetType | null | undefined>,
		BidPrice: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,

		/** Required */
		InstanceRequestCount: FormControl<number | null | undefined>,

		/** Required */
		InstanceRunningCount: FormControl<number | null | undefined>,

		/** Required */
		State: FormControl<InstanceGroupState | null | undefined>,
		LastStateChangeReason: FormControl<string | null | undefined>,

		/** Required */
		CreationDateTime: FormControl<Date | null | undefined>,
		StartDateTime: FormControl<Date | null | undefined>,
		ReadyDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
		CustomAmiId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceGroupDetailFormGroup() {
		return new FormGroup<InstanceGroupDetailFormProperties>({
			InstanceGroupId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Market: new FormControl<MarketType | null | undefined>(undefined, [Validators.required]),
			InstanceRole: new FormControl<InstanceFleetType | null | undefined>(undefined, [Validators.required]),
			BidPrice: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceRequestCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			InstanceRunningCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<InstanceGroupState | null | undefined>(undefined, [Validators.required]),
			LastStateChangeReason: new FormControl<string | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadyDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
			CustomAmiId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceGroupState { PROVISIONING = 'PROVISIONING', BOOTSTRAPPING = 'BOOTSTRAPPING', RUNNING = 'RUNNING', RECONFIGURING = 'RECONFIGURING', RESIZING = 'RESIZING', SUSPENDED = 'SUSPENDED', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', ARRESTED = 'ARRESTED', SHUTTING_DOWN = 'SHUTTING_DOWN', ENDED = 'ENDED' }


	/** The Amazon EC2 Availability Zone configuration of the cluster (job flow). */
	export interface PlacementType {
		AvailabilityZone?: string;
		AvailabilityZones?: Array<string>;
	}

	/** The Amazon EC2 Availability Zone configuration of the cluster (job flow). */
	export interface PlacementTypeFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreatePlacementTypeFormGroup() {
		return new FormGroup<PlacementTypeFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Combines the execution state and configuration of a step. */
	export interface StepDetail {

		/** Required */
		StepConfig: StepConfig;

		/** Required */
		ExecutionStatusDetail: StepExecutionStatusDetail;
	}

	/** Combines the execution state and configuration of a step. */
	export interface StepDetailFormProperties {
	}
	export function CreateStepDetailFormGroup() {
		return new FormGroup<StepDetailFormProperties>({
		});

	}


	/** The execution state of a step. */
	export interface StepExecutionStatusDetail {

		/** Required */
		State: StepExecutionState;

		/** Required */
		CreationDateTime: Date;
		StartDateTime?: Date;
		EndDateTime?: Date;
		LastStateChangeReason?: string;
	}

	/** The execution state of a step. */
	export interface StepExecutionStatusDetailFormProperties {

		/** Required */
		State: FormControl<StepExecutionState | null | undefined>,

		/** Required */
		CreationDateTime: FormControl<Date | null | undefined>,
		StartDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
		LastStateChangeReason: FormControl<string | null | undefined>,
	}
	export function CreateStepExecutionStatusDetailFormGroup() {
		return new FormGroup<StepExecutionStatusDetailFormProperties>({
			State: new FormControl<StepExecutionState | null | undefined>(undefined, [Validators.required]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
			LastStateChangeReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StepExecutionState { PENDING = 'PENDING', RUNNING = 'RUNNING', CONTINUE = 'CONTINUE', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED', FAILED = 'FAILED', INTERRUPTED = 'INTERRUPTED' }


	/** Reports the configuration of a bootstrap action in a cluster (job flow). */
	export interface BootstrapActionDetail {
		BootstrapActionConfig?: BootstrapActionConfig;
	}

	/** Reports the configuration of a bootstrap action in a cluster (job flow). */
	export interface BootstrapActionDetailFormProperties {
	}
	export function CreateBootstrapActionDetailFormGroup() {
		return new FormGroup<BootstrapActionDetailFormProperties>({
		});

	}


	/** Configuration of a bootstrap action. */
	export interface BootstrapActionConfig {

		/** Required */
		Name: string;

		/** Required */
		ScriptBootstrapAction: ScriptBootstrapActionConfig;
	}

	/** Configuration of a bootstrap action. */
	export interface BootstrapActionConfigFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateBootstrapActionConfigFormGroup() {
		return new FormGroup<BootstrapActionConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration of the script to run during a bootstrap action. */
	export interface ScriptBootstrapActionConfig {

		/** Required */
		Path: string;
		Args?: Array<string>;
	}

	/** Configuration of the script to run during a bootstrap action. */
	export interface ScriptBootstrapActionConfigFormProperties {

		/** Required */
		Path: FormControl<string | null | undefined>,
	}
	export function CreateScriptBootstrapActionConfigFormGroup() {
		return new FormGroup<ScriptBootstrapActionConfigFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The input for the <a>DescribeJobFlows</a> operation.  */
	export interface DescribeJobFlowsInput {
		CreatedAfter?: Date;
		CreatedBefore?: Date;
		JobFlowIds?: Array<string>;
		JobFlowStates?: Array<JobFlowExecutionState>;
	}

	/**  The input for the <a>DescribeJobFlows</a> operation.  */
	export interface DescribeJobFlowsInputFormProperties {
		CreatedAfter: FormControl<Date | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeJobFlowsInputFormGroup() {
		return new FormGroup<DescribeJobFlowsInputFormProperties>({
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeNotebookExecutionOutput {
		NotebookExecution?: NotebookExecution;
	}
	export interface DescribeNotebookExecutionOutputFormProperties {
	}
	export function CreateDescribeNotebookExecutionOutputFormGroup() {
		return new FormGroup<DescribeNotebookExecutionOutputFormProperties>({
		});

	}


	/** A notebook execution. An execution is a specific instance that an Amazon EMR Notebook is run using the <code>StartNotebookExecution</code> action. */
	export interface NotebookExecution {
		NotebookExecutionId?: string;
		EditorId?: string;
		ExecutionEngine?: ExecutionEngineConfig;
		NotebookExecutionName?: string;
		NotebookParams?: string;
		Status?: NotebookExecutionStatus;
		StartTime?: Date;
		EndTime?: Date;
		Arn?: string;
		OutputNotebookURI?: string;
		LastStateChangeReason?: string;
		NotebookInstanceSecurityGroupId?: string;
		Tags?: Array<Tag>;
		NotebookS3Location?: NotebookS3LocationForOutput;
		OutputNotebookS3Location?: OutputNotebookS3LocationForOutput;
		OutputNotebookFormat?: OutputNotebookFormat;
		EnvironmentVariables?: EnvironmentVariablesMap;
	}

	/** A notebook execution. An execution is a specific instance that an Amazon EMR Notebook is run using the <code>StartNotebookExecution</code> action. */
	export interface NotebookExecutionFormProperties {
		NotebookExecutionId: FormControl<string | null | undefined>,
		EditorId: FormControl<string | null | undefined>,
		NotebookExecutionName: FormControl<string | null | undefined>,
		NotebookParams: FormControl<string | null | undefined>,
		Status: FormControl<NotebookExecutionStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		OutputNotebookURI: FormControl<string | null | undefined>,
		LastStateChangeReason: FormControl<string | null | undefined>,
		NotebookInstanceSecurityGroupId: FormControl<string | null | undefined>,
		OutputNotebookFormat: FormControl<OutputNotebookFormat | null | undefined>,
	}
	export function CreateNotebookExecutionFormGroup() {
		return new FormGroup<NotebookExecutionFormProperties>({
			NotebookExecutionId: new FormControl<string | null | undefined>(undefined),
			EditorId: new FormControl<string | null | undefined>(undefined),
			NotebookExecutionName: new FormControl<string | null | undefined>(undefined),
			NotebookParams: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NotebookExecutionStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			OutputNotebookURI: new FormControl<string | null | undefined>(undefined),
			LastStateChangeReason: new FormControl<string | null | undefined>(undefined),
			NotebookInstanceSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			OutputNotebookFormat: new FormControl<OutputNotebookFormat | null | undefined>(undefined),
		});

	}


	/** Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an Amazon EMR cluster. */
	export interface ExecutionEngineConfig {

		/** Required */
		Id: string;
		Type?: ExecutionEngineType;
		MasterInstanceSecurityGroupId?: string;
		ExecutionRoleArn?: string;
	}

	/** Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an Amazon EMR cluster. */
	export interface ExecutionEngineConfigFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Type: FormControl<ExecutionEngineType | null | undefined>,
		MasterInstanceSecurityGroupId: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateExecutionEngineConfigFormGroup() {
		return new FormGroup<ExecutionEngineConfigFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ExecutionEngineType | null | undefined>(undefined),
			MasterInstanceSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionEngineType { EMR = 'EMR' }

	export enum NotebookExecutionStatus { START_PENDING = 'START_PENDING', STARTING = 'STARTING', RUNNING = 'RUNNING', FINISHING = 'FINISHING', FINISHED = 'FINISHED', FAILING = 'FAILING', FAILED = 'FAILED', STOP_PENDING = 'STOP_PENDING', STOPPING = 'STOPPING', STOPPED = 'STOPPED' }


	/** The Amazon S3 location that stores the notebook execution input. */
	export interface NotebookS3LocationForOutput {
		Bucket?: string;
		Key?: string;
	}

	/** The Amazon S3 location that stores the notebook execution input. */
	export interface NotebookS3LocationForOutputFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateNotebookS3LocationForOutputFormGroup() {
		return new FormGroup<NotebookS3LocationForOutputFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 location that stores the notebook execution output. */
	export interface OutputNotebookS3LocationForOutput {
		Bucket?: string;
		Key?: string;
	}

	/** The Amazon S3 location that stores the notebook execution output. */
	export interface OutputNotebookS3LocationForOutputFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateOutputNotebookS3LocationForOutputFormGroup() {
		return new FormGroup<OutputNotebookS3LocationForOutputFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OutputNotebookFormat { HTML = 'HTML' }

	export interface EnvironmentVariablesMap {
	}
	export interface EnvironmentVariablesMapFormProperties {
	}
	export function CreateEnvironmentVariablesMapFormGroup() {
		return new FormGroup<EnvironmentVariablesMapFormProperties>({
		});

	}

	export interface DescribeNotebookExecutionInput {

		/** Required */
		NotebookExecutionId: string;
	}
	export interface DescribeNotebookExecutionInputFormProperties {

		/** Required */
		NotebookExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotebookExecutionInputFormGroup() {
		return new FormGroup<DescribeNotebookExecutionInputFormProperties>({
			NotebookExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeReleaseLabelOutput {
		ReleaseLabel?: string;
		Applications?: Array<SimplifiedApplication>;
		NextToken?: string;
		AvailableOSReleases?: Array<OSRelease>;
	}
	export interface DescribeReleaseLabelOutputFormProperties {
		ReleaseLabel: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReleaseLabelOutputFormGroup() {
		return new FormGroup<DescribeReleaseLabelOutputFormProperties>({
			ReleaseLabel: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The returned release label application names or versions. */
	export interface SimplifiedApplication {
		Name?: string;
		Version?: string;
	}

	/** The returned release label application names or versions. */
	export interface SimplifiedApplicationFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateSimplifiedApplicationFormGroup() {
		return new FormGroup<SimplifiedApplicationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Linux release specified for a cluster in the RunJobFlow request. */
	export interface OSRelease {
		Label?: string;
	}

	/** The Amazon Linux release specified for a cluster in the RunJobFlow request. */
	export interface OSReleaseFormProperties {
		Label: FormControl<string | null | undefined>,
	}
	export function CreateOSReleaseFormGroup() {
		return new FormGroup<OSReleaseFormProperties>({
			Label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReleaseLabelInput {
		ReleaseLabel?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeReleaseLabelInputFormProperties {
		ReleaseLabel: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeReleaseLabelInputFormGroup() {
		return new FormGroup<DescribeReleaseLabelInputFormProperties>({
			ReleaseLabel: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeSecurityConfigurationOutput {
		Name?: string;
		SecurityConfiguration?: string;
		CreationDateTime?: Date;
	}
	export interface DescribeSecurityConfigurationOutputFormProperties {
		Name: FormControl<string | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeSecurityConfigurationOutputFormGroup() {
		return new FormGroup<DescribeSecurityConfigurationOutputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeSecurityConfigurationInput {

		/** Required */
		Name: string;
	}
	export interface DescribeSecurityConfigurationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSecurityConfigurationInputFormGroup() {
		return new FormGroup<DescribeSecurityConfigurationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This output contains the description of the cluster step. */
	export interface DescribeStepOutput {
		Step?: Step;
	}

	/** This output contains the description of the cluster step. */
	export interface DescribeStepOutputFormProperties {
	}
	export function CreateDescribeStepOutputFormGroup() {
		return new FormGroup<DescribeStepOutputFormProperties>({
		});

	}


	/** This represents a step in a cluster. */
	export interface Step {
		Id?: string;
		Name?: string;
		Config?: HadoopStepConfig;
		ActionOnFailure?: ActionOnFailure;
		Status?: StepStatus;
		ExecutionRoleArn?: string;
	}

	/** This represents a step in a cluster. */
	export interface StepFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ActionOnFailure: FormControl<ActionOnFailure | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ActionOnFailure: new FormControl<ActionOnFailure | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
	export interface HadoopStepConfig {
		Jar?: string;
		Properties?: StringMap;
		MainClass?: string;
		Args?: Array<string>;
	}

	/** A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail. */
	export interface HadoopStepConfigFormProperties {
		Jar: FormControl<string | null | undefined>,
		MainClass: FormControl<string | null | undefined>,
	}
	export function CreateHadoopStepConfigFormGroup() {
		return new FormGroup<HadoopStepConfigFormProperties>({
			Jar: new FormControl<string | null | undefined>(undefined),
			MainClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The execution status details of the cluster step. */
	export interface StepStatus {
		State?: StepState;
		StateChangeReason?: StepStateChangeReason;
		FailureDetails?: FailureDetails;
		Timeline?: StepTimeline;
	}

	/** The execution status details of the cluster step. */
	export interface StepStatusFormProperties {
		State: FormControl<StepState | null | undefined>,
	}
	export function CreateStepStatusFormGroup() {
		return new FormGroup<StepStatusFormProperties>({
			State: new FormControl<StepState | null | undefined>(undefined),
		});

	}

	export enum StepState { PENDING = 'PENDING', CANCEL_PENDING = 'CANCEL_PENDING', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED', FAILED = 'FAILED', INTERRUPTED = 'INTERRUPTED' }


	/** The details of the step state change reason. */
	export interface StepStateChangeReason {
		Code?: StepStateChangeReasonCode;
		Message?: string;
	}

	/** The details of the step state change reason. */
	export interface StepStateChangeReasonFormProperties {
		Code: FormControl<StepStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateStepStateChangeReasonFormGroup() {
		return new FormGroup<StepStateChangeReasonFormProperties>({
			Code: new FormControl<StepStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StepStateChangeReasonCode { NONE = 'NONE' }


	/** The details of the step failure. The service attempts to detect the root cause for many common failures. */
	export interface FailureDetails {
		Reason?: string;
		Message?: string;
		LogFile?: string;
	}

	/** The details of the step failure. The service attempts to detect the root cause for many common failures. */
	export interface FailureDetailsFormProperties {
		Reason: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		LogFile: FormControl<string | null | undefined>,
	}
	export function CreateFailureDetailsFormGroup() {
		return new FormGroup<FailureDetailsFormProperties>({
			Reason: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			LogFile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The timeline of the cluster step lifecycle. */
	export interface StepTimeline {
		CreationDateTime?: Date;
		StartDateTime?: Date;
		EndDateTime?: Date;
	}

	/** The timeline of the cluster step lifecycle. */
	export interface StepTimelineFormProperties {
		CreationDateTime: FormControl<Date | null | undefined>,
		StartDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateStepTimelineFormGroup() {
		return new FormGroup<StepTimelineFormProperties>({
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** This input determines which step to describe. */
	export interface DescribeStepInput {

		/** Required */
		ClusterId: string;

		/** Required */
		StepId: string;
	}

	/** This input determines which step to describe. */
	export interface DescribeStepInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,

		/** Required */
		StepId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStepInputFormGroup() {
		return new FormGroup<DescribeStepInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StepId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStudioOutput {
		Studio?: Studio;
	}
	export interface DescribeStudioOutputFormProperties {
	}
	export function CreateDescribeStudioOutputFormGroup() {
		return new FormGroup<DescribeStudioOutputFormProperties>({
		});

	}


	/** Details for an Amazon EMR Studio including ID, creation time, name, and so on. */
	export interface Studio {
		StudioId?: string;
		StudioArn?: string;
		Name?: string;
		Description?: string;
		AuthMode?: AuthMode;
		VpcId?: string;
		SubnetIds?: Array<string>;
		ServiceRole?: string;
		UserRole?: string;
		WorkspaceSecurityGroupId?: string;
		EngineSecurityGroupId?: string;
		Url?: string;
		CreationTime?: Date;
		DefaultS3Location?: string;
		IdpAuthUrl?: string;
		IdpRelayStateParameterName?: string;
		Tags?: Array<Tag>;
	}

	/** Details for an Amazon EMR Studio including ID, creation time, name, and so on. */
	export interface StudioFormProperties {
		StudioId: FormControl<string | null | undefined>,
		StudioArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AuthMode: FormControl<AuthMode | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		UserRole: FormControl<string | null | undefined>,
		WorkspaceSecurityGroupId: FormControl<string | null | undefined>,
		EngineSecurityGroupId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		DefaultS3Location: FormControl<string | null | undefined>,
		IdpAuthUrl: FormControl<string | null | undefined>,
		IdpRelayStateParameterName: FormControl<string | null | undefined>,
	}
	export function CreateStudioFormGroup() {
		return new FormGroup<StudioFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined),
			StudioArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AuthMode: new FormControl<AuthMode | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			UserRole: new FormControl<string | null | undefined>(undefined),
			WorkspaceSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			EngineSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DefaultS3Location: new FormControl<string | null | undefined>(undefined),
			IdpAuthUrl: new FormControl<string | null | undefined>(undefined),
			IdpRelayStateParameterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStudioInput {

		/** Required */
		StudioId: string;
	}
	export interface DescribeStudioInputFormProperties {

		/** Required */
		StudioId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStudioInputFormGroup() {
		return new FormGroup<DescribeStudioInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAutoTerminationPolicyOutput {
		AutoTerminationPolicy?: AutoTerminationPolicy;
	}
	export interface GetAutoTerminationPolicyOutputFormProperties {
	}
	export function CreateGetAutoTerminationPolicyOutputFormGroup() {
		return new FormGroup<GetAutoTerminationPolicyOutputFormProperties>({
		});

	}


	/** An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>. */
	export interface AutoTerminationPolicy {
		IdleTimeout?: number | null;
	}

	/** An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>. */
	export interface AutoTerminationPolicyFormProperties {
		IdleTimeout: FormControl<number | null | undefined>,
	}
	export function CreateAutoTerminationPolicyFormGroup() {
		return new FormGroup<AutoTerminationPolicyFormProperties>({
			IdleTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAutoTerminationPolicyInput {

		/** Required */
		ClusterId: string;
	}
	export interface GetAutoTerminationPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateGetAutoTerminationPolicyInputFormGroup() {
		return new FormGroup<GetAutoTerminationPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlockPublicAccessConfigurationOutput {

		/** Required */
		BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;

		/** Required */
		BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata;
	}
	export interface GetBlockPublicAccessConfigurationOutputFormProperties {
	}
	export function CreateGetBlockPublicAccessConfigurationOutputFormGroup() {
		return new FormGroup<GetBlockPublicAccessConfigurationOutputFormProperties>({
		});

	}


	/** A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>. */
	export interface BlockPublicAccessConfiguration {

		/** Required */
		BlockPublicSecurityGroupRules: boolean;
		PermittedPublicSecurityGroupRuleRanges?: Array<PortRange>;
	}

	/** A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>. */
	export interface BlockPublicAccessConfigurationFormProperties {

		/** Required */
		BlockPublicSecurityGroupRules: FormControl<boolean | null | undefined>,
	}
	export function CreateBlockPublicAccessConfigurationFormGroup() {
		return new FormGroup<BlockPublicAccessConfigurationFormProperties>({
			BlockPublicSecurityGroupRules: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>. */
	export interface PortRange {

		/** Required */
		MinRange: number;
		MaxRange?: number | null;
	}

	/** A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>. */
	export interface PortRangeFormProperties {

		/** Required */
		MinRange: FormControl<number | null | undefined>,
		MaxRange: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFormGroup() {
		return new FormGroup<PortRangeFormProperties>({
			MinRange: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxRange: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata. */
	export interface BlockPublicAccessConfigurationMetadata {

		/** Required */
		CreationDateTime: Date;

		/** Required */
		CreatedByArn: string;
	}

	/** Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata. */
	export interface BlockPublicAccessConfigurationMetadataFormProperties {

		/** Required */
		CreationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		CreatedByArn: FormControl<string | null | undefined>,
	}
	export function CreateBlockPublicAccessConfigurationMetadataFormGroup() {
		return new FormGroup<BlockPublicAccessConfigurationMetadataFormProperties>({
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreatedByArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlockPublicAccessConfigurationInput {
	}
	export interface GetBlockPublicAccessConfigurationInputFormProperties {
	}
	export function CreateGetBlockPublicAccessConfigurationInputFormGroup() {
		return new FormGroup<GetBlockPublicAccessConfigurationInputFormProperties>({
		});

	}

	export interface GetClusterSessionCredentialsOutput {
		Credentials?: Credentials;
		ExpiresAt?: Date;
	}
	export interface GetClusterSessionCredentialsOutputFormProperties {
		ExpiresAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetClusterSessionCredentialsOutputFormGroup() {
		return new FormGroup<GetClusterSessionCredentialsOutputFormProperties>({
			ExpiresAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The credentials that you can use to connect to cluster endpoints. Credentials consist of a username and a password. */
	export interface Credentials {
		UsernamePassword?: UsernamePassword;
	}

	/** The credentials that you can use to connect to cluster endpoints. Credentials consist of a username and a password. */
	export interface CredentialsFormProperties {
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
		});

	}


	/** The username and password that you use to connect to cluster endpoints. */
	export interface UsernamePassword {
		Username?: string;
		Password?: string;
	}

	/** The username and password that you use to connect to cluster endpoints. */
	export interface UsernamePasswordFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateUsernamePasswordFormGroup() {
		return new FormGroup<UsernamePasswordFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetClusterSessionCredentialsInput {

		/** Required */
		ClusterId: string;

		/** Required */
		ExecutionRoleArn: string;
	}
	export interface GetClusterSessionCredentialsInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetClusterSessionCredentialsInputFormGroup() {
		return new FormGroup<GetClusterSessionCredentialsInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetManagedScalingPolicyOutput {
		ManagedScalingPolicy?: ManagedScalingPolicy;
	}
	export interface GetManagedScalingPolicyOutputFormProperties {
	}
	export function CreateGetManagedScalingPolicyOutputFormGroup() {
		return new FormGroup<GetManagedScalingPolicyOutputFormProperties>({
		});

	}


	/**  Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.  */
	export interface ManagedScalingPolicy {
		ComputeLimits?: ComputeLimits;
	}

	/**  Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.  */
	export interface ManagedScalingPolicyFormProperties {
	}
	export function CreateManagedScalingPolicyFormGroup() {
		return new FormGroup<ManagedScalingPolicyFormProperties>({
		});

	}


	/**  The Amazon EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.  */
	export interface ComputeLimits {

		/** Required */
		UnitType: ComputeLimitsUnitType;

		/** Required */
		MinimumCapacityUnits: number;

		/** Required */
		MaximumCapacityUnits: number;
		MaximumOnDemandCapacityUnits?: number | null;
		MaximumCoreCapacityUnits?: number | null;
	}

	/**  The Amazon EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.  */
	export interface ComputeLimitsFormProperties {

		/** Required */
		UnitType: FormControl<ComputeLimitsUnitType | null | undefined>,

		/** Required */
		MinimumCapacityUnits: FormControl<number | null | undefined>,

		/** Required */
		MaximumCapacityUnits: FormControl<number | null | undefined>,
		MaximumOnDemandCapacityUnits: FormControl<number | null | undefined>,
		MaximumCoreCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateComputeLimitsFormGroup() {
		return new FormGroup<ComputeLimitsFormProperties>({
			UnitType: new FormControl<ComputeLimitsUnitType | null | undefined>(undefined, [Validators.required]),
			MinimumCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaximumCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaximumOnDemandCapacityUnits: new FormControl<number | null | undefined>(undefined),
			MaximumCoreCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ComputeLimitsUnitType { InstanceFleetUnits = 'InstanceFleetUnits', Instances = 'Instances', VCPU = 'VCPU' }

	export interface GetManagedScalingPolicyInput {

		/** Required */
		ClusterId: string;
	}
	export interface GetManagedScalingPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateGetManagedScalingPolicyInputFormGroup() {
		return new FormGroup<GetManagedScalingPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStudioSessionMappingOutput {
		SessionMapping?: SessionMappingDetail;
	}
	export interface GetStudioSessionMappingOutputFormProperties {
	}
	export function CreateGetStudioSessionMappingOutputFormGroup() {
		return new FormGroup<GetStudioSessionMappingOutputFormProperties>({
		});

	}


	/** Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on. */
	export interface SessionMappingDetail {
		StudioId?: string;
		IdentityId?: string;
		IdentityName?: string;
		IdentityType?: IdentityType;
		SessionPolicyArn?: string;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}

	/** Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on. */
	export interface SessionMappingDetailFormProperties {
		StudioId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,
		IdentityType: FormControl<IdentityType | null | undefined>,
		SessionPolicyArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateSessionMappingDetailFormGroup() {
		return new FormGroup<SessionMappingDetailFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			SessionPolicyArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetStudioSessionMappingInput {

		/** Required */
		StudioId: string;
		IdentityId?: string;
		IdentityName?: string;

		/** Required */
		IdentityType: IdentityType;
	}
	export interface GetStudioSessionMappingInputFormProperties {

		/** Required */
		StudioId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,

		/** Required */
		IdentityType: FormControl<IdentityType | null | undefined>,
	}
	export function CreateGetStudioSessionMappingInputFormGroup() {
		return new FormGroup<GetStudioSessionMappingInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This output contains the bootstrap actions detail. */
	export interface ListBootstrapActionsOutput {
		BootstrapActions?: Array<Command>;
		Marker?: string;
	}

	/** This output contains the bootstrap actions detail. */
	export interface ListBootstrapActionsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListBootstrapActionsOutputFormGroup() {
		return new FormGroup<ListBootstrapActionsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity describing an executable that runs on a cluster. */
	export interface Command {
		Name?: string;
		ScriptPath?: string;
		Args?: Array<string>;
	}

	/** An entity describing an executable that runs on a cluster. */
	export interface CommandFormProperties {
		Name: FormControl<string | null | undefined>,
		ScriptPath: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ScriptPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This input determines which bootstrap actions to retrieve. */
	export interface ListBootstrapActionsInput {

		/** Required */
		ClusterId: string;
		Marker?: string;
	}

	/** This input determines which bootstrap actions to retrieve. */
	export interface ListBootstrapActionsInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListBootstrapActionsInputFormGroup() {
		return new FormGroup<ListBootstrapActionsInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status. */
	export interface ListClustersOutput {
		Clusters?: Array<ClusterSummary>;
		Marker?: string;
	}

	/** This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status. */
	export interface ListClustersOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListClustersOutputFormGroup() {
		return new FormGroup<ListClustersOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary description of the cluster. */
	export interface ClusterSummary {
		Id?: string;
		Name?: string;
		Status?: ClusterStatus;
		NormalizedInstanceHours?: number | null;
		ClusterArn?: string;
		OutpostArn?: string;
	}

	/** The summary description of the cluster. */
	export interface ClusterSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NormalizedInstanceHours: FormControl<number | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
		OutpostArn: FormControl<string | null | undefined>,
	}
	export function CreateClusterSummaryFormGroup() {
		return new FormGroup<ClusterSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NormalizedInstanceHours: new FormControl<number | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This input determines how the ListClusters action filters the list of clusters that it returns. */
	export interface ListClustersInput {
		CreatedAfter?: Date;
		CreatedBefore?: Date;
		ClusterStates?: Array<ClusterState>;
		Marker?: string;
	}

	/** This input determines how the ListClusters action filters the list of clusters that it returns. */
	export interface ListClustersInputFormProperties {
		CreatedAfter: FormControl<Date | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListClustersInputFormGroup() {
		return new FormGroup<ListClustersInputFormProperties>({
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstanceFleetsOutput {
		InstanceFleets?: Array<InstanceFleet>;
		Marker?: string;
	}
	export interface ListInstanceFleetsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceFleetsOutputFormGroup() {
		return new FormGroup<ListInstanceFleetsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes an instance fleet, which is a group of Amazon EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleet {
		Id?: string;
		Name?: string;
		Status?: InstanceFleetStatus;
		InstanceFleetType?: InstanceFleetType;
		TargetOnDemandCapacity?: number | null;
		TargetSpotCapacity?: number | null;
		ProvisionedOnDemandCapacity?: number | null;
		ProvisionedSpotCapacity?: number | null;
		InstanceTypeSpecifications?: Array<InstanceTypeSpecification>;
		LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
		ResizeSpecifications?: InstanceFleetResizingSpecifications;
	}

	/** <p>Describes an instance fleet, which is a group of Amazon EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		InstanceFleetType: FormControl<InstanceFleetType | null | undefined>,
		TargetOnDemandCapacity: FormControl<number | null | undefined>,
		TargetSpotCapacity: FormControl<number | null | undefined>,
		ProvisionedOnDemandCapacity: FormControl<number | null | undefined>,
		ProvisionedSpotCapacity: FormControl<number | null | undefined>,
	}
	export function CreateInstanceFleetFormGroup() {
		return new FormGroup<InstanceFleetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceFleetType: new FormControl<InstanceFleetType | null | undefined>(undefined),
			TargetOnDemandCapacity: new FormControl<number | null | undefined>(undefined),
			TargetSpotCapacity: new FormControl<number | null | undefined>(undefined),
			ProvisionedOnDemandCapacity: new FormControl<number | null | undefined>(undefined),
			ProvisionedSpotCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetStatus {
		State?: InstanceFleetState;
		StateChangeReason?: InstanceFleetStateChangeReason;
		Timeline?: InstanceFleetTimeline;
	}

	/** <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetStatusFormProperties {
		State: FormControl<InstanceFleetState | null | undefined>,
	}
	export function CreateInstanceFleetStatusFormGroup() {
		return new FormGroup<InstanceFleetStatusFormProperties>({
			State: new FormControl<InstanceFleetState | null | undefined>(undefined),
		});

	}

	export enum InstanceFleetState { PROVISIONING = 'PROVISIONING', BOOTSTRAPPING = 'BOOTSTRAPPING', RUNNING = 'RUNNING', RESIZING = 'RESIZING', SUSPENDED = 'SUSPENDED', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED' }


	/** <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetStateChangeReason {
		Code?: InstanceFleetStateChangeReasonCode;
		Message?: string;
	}

	/** <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetStateChangeReasonFormProperties {
		Code: FormControl<InstanceFleetStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFleetStateChangeReasonFormGroup() {
		return new FormGroup<InstanceFleetStateChangeReasonFormProperties>({
			Code: new FormControl<InstanceFleetStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceFleetStateChangeReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR', VALIDATION_ERROR = 'VALIDATION_ERROR', INSTANCE_FAILURE = 'INSTANCE_FAILURE', CLUSTER_TERMINATED = 'CLUSTER_TERMINATED' }


	/** <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}

	/** <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetTimelineFormProperties {
		CreationDateTime: FormControl<Date | null | undefined>,
		ReadyDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceFleetTimelineFormGroup() {
		return new FormGroup<InstanceFleetTimelineFormProperties>({
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadyDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceTypeSpecification {
		InstanceType?: string;
		WeightedCapacity?: number | null;
		BidPrice?: string;
		BidPriceAsPercentageOfOnDemandPrice?: number | null;
		Configurations?: Array<Configuration>;
		EbsBlockDevices?: Array<EbsBlockDevice>;
		EbsOptimized?: boolean | null;
		CustomAmiId?: string;
	}

	/** <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceTypeSpecificationFormProperties {
		InstanceType: FormControl<string | null | undefined>,
		WeightedCapacity: FormControl<number | null | undefined>,
		BidPrice: FormControl<string | null | undefined>,
		BidPriceAsPercentageOfOnDemandPrice: FormControl<number | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		CustomAmiId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceTypeSpecificationFormGroup() {
		return new FormGroup<InstanceTypeSpecificationFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
			WeightedCapacity: new FormControl<number | null | undefined>(undefined),
			BidPrice: new FormControl<string | null | undefined>(undefined),
			BidPriceAsPercentageOfOnDemandPrice: new FormControl<number | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			CustomAmiId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of requested EBS block device associated with the instance group. */
	export interface EbsBlockDevice {
		VolumeSpecification?: VolumeSpecification;
		Device?: string;
	}

	/** Configuration of requested EBS block device associated with the instance group. */
	export interface EbsBlockDeviceFormProperties {
		Device: FormControl<string | null | undefined>,
	}
	export function CreateEbsBlockDeviceFormGroup() {
		return new FormGroup<EbsBlockDeviceFormProperties>({
			Device: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstanceFleetsInput {

		/** Required */
		ClusterId: string;
		Marker?: string;
	}
	export interface ListInstanceFleetsInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceFleetsInputFormGroup() {
		return new FormGroup<ListInstanceFleetsInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This input determines which instance groups to retrieve. */
	export interface ListInstanceGroupsOutput {
		InstanceGroups?: Array<InstanceGroup>;
		Marker?: string;
	}

	/** This input determines which instance groups to retrieve. */
	export interface ListInstanceGroupsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceGroupsOutputFormGroup() {
		return new FormGroup<ListInstanceGroupsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS. */
	export interface InstanceGroup {
		Id?: string;
		Name?: string;
		Market?: MarketType;
		InstanceGroupType?: InstanceFleetType;
		BidPrice?: string;
		InstanceType?: string;
		RequestedInstanceCount?: number | null;
		RunningInstanceCount?: number | null;
		Status?: InstanceGroupStatus;
		Configurations?: Array<Configuration>;
		ConfigurationsVersion?: number | null;
		LastSuccessfullyAppliedConfigurations?: Array<Configuration>;
		LastSuccessfullyAppliedConfigurationsVersion?: number | null;
		EbsBlockDevices?: Array<EbsBlockDevice>;
		EbsOptimized?: boolean | null;
		ShrinkPolicy?: ShrinkPolicy;
		AutoScalingPolicy?: AutoScalingPolicyDescription;
		CustomAmiId?: string;
	}

	/** This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS. */
	export interface InstanceGroupFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Market: FormControl<MarketType | null | undefined>,
		InstanceGroupType: FormControl<InstanceFleetType | null | undefined>,
		BidPrice: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		RequestedInstanceCount: FormControl<number | null | undefined>,
		RunningInstanceCount: FormControl<number | null | undefined>,
		ConfigurationsVersion: FormControl<number | null | undefined>,
		LastSuccessfullyAppliedConfigurationsVersion: FormControl<number | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		CustomAmiId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceGroupFormGroup() {
		return new FormGroup<InstanceGroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Market: new FormControl<MarketType | null | undefined>(undefined),
			InstanceGroupType: new FormControl<InstanceFleetType | null | undefined>(undefined),
			BidPrice: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			RequestedInstanceCount: new FormControl<number | null | undefined>(undefined),
			RunningInstanceCount: new FormControl<number | null | undefined>(undefined),
			ConfigurationsVersion: new FormControl<number | null | undefined>(undefined),
			LastSuccessfullyAppliedConfigurationsVersion: new FormControl<number | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			CustomAmiId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the instance group status. */
	export interface InstanceGroupStatus {
		State?: InstanceGroupState;
		StateChangeReason?: InstanceGroupStateChangeReason;
		Timeline?: InstanceGroupTimeline;
	}

	/** The details of the instance group status. */
	export interface InstanceGroupStatusFormProperties {
		State: FormControl<InstanceGroupState | null | undefined>,
	}
	export function CreateInstanceGroupStatusFormGroup() {
		return new FormGroup<InstanceGroupStatusFormProperties>({
			State: new FormControl<InstanceGroupState | null | undefined>(undefined),
		});

	}


	/** The status change reason details for the instance group. */
	export interface InstanceGroupStateChangeReason {
		Code?: InstanceFleetStateChangeReasonCode;
		Message?: string;
	}

	/** The status change reason details for the instance group. */
	export interface InstanceGroupStateChangeReasonFormProperties {
		Code: FormControl<InstanceFleetStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInstanceGroupStateChangeReasonFormGroup() {
		return new FormGroup<InstanceGroupStateChangeReasonFormProperties>({
			Code: new FormControl<InstanceFleetStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The timeline of the instance group lifecycle. */
	export interface InstanceGroupTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}

	/** The timeline of the instance group lifecycle. */
	export interface InstanceGroupTimelineFormProperties {
		CreationDateTime: FormControl<Date | null | undefined>,
		ReadyDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceGroupTimelineFormGroup() {
		return new FormGroup<InstanceGroupTimelineFormProperties>({
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadyDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking. */
	export interface ShrinkPolicy {
		DecommissionTimeout?: number | null;
		InstanceResizePolicy?: InstanceResizePolicy;
	}

	/** Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking. */
	export interface ShrinkPolicyFormProperties {
		DecommissionTimeout: FormControl<number | null | undefined>,
	}
	export function CreateShrinkPolicyFormGroup() {
		return new FormGroup<ShrinkPolicyFormProperties>({
			DecommissionTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group. */
	export interface InstanceResizePolicy {
		InstancesToTerminate?: Array<string>;
		InstancesToProtect?: Array<string>;
		InstanceTerminationTimeout?: number | null;
	}

	/** Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group. */
	export interface InstanceResizePolicyFormProperties {
		InstanceTerminationTimeout: FormControl<number | null | undefined>,
	}
	export function CreateInstanceResizePolicyFormGroup() {
		return new FormGroup<InstanceResizePolicyFormProperties>({
			InstanceTerminationTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
	export interface AutoScalingPolicyDescription {
		Status?: AutoScalingPolicyStatus;
		Constraints?: ScalingConstraints;
		Rules?: Array<ScalingRule>;
	}

	/** An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>. */
	export interface AutoScalingPolicyDescriptionFormProperties {
	}
	export function CreateAutoScalingPolicyDescriptionFormGroup() {
		return new FormGroup<AutoScalingPolicyDescriptionFormProperties>({
		});

	}


	/** The status of an automatic scaling policy.  */
	export interface AutoScalingPolicyStatus {
		State?: AutoScalingPolicyState;
		StateChangeReason?: AutoScalingPolicyStateChangeReason;
	}

	/** The status of an automatic scaling policy.  */
	export interface AutoScalingPolicyStatusFormProperties {
		State: FormControl<AutoScalingPolicyState | null | undefined>,
	}
	export function CreateAutoScalingPolicyStatusFormGroup() {
		return new FormGroup<AutoScalingPolicyStatusFormProperties>({
			State: new FormControl<AutoScalingPolicyState | null | undefined>(undefined),
		});

	}

	export enum AutoScalingPolicyState { PENDING = 'PENDING', ATTACHING = 'ATTACHING', ATTACHED = 'ATTACHED', DETACHING = 'DETACHING', DETACHED = 'DETACHED', FAILED = 'FAILED' }


	/** The reason for an <a>AutoScalingPolicyStatus</a> change. */
	export interface AutoScalingPolicyStateChangeReason {
		Code?: AutoScalingPolicyStateChangeReasonCode;
		Message?: string;
	}

	/** The reason for an <a>AutoScalingPolicyStatus</a> change. */
	export interface AutoScalingPolicyStateChangeReasonFormProperties {
		Code: FormControl<AutoScalingPolicyStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingPolicyStateChangeReasonFormGroup() {
		return new FormGroup<AutoScalingPolicyStateChangeReasonFormProperties>({
			Code: new FormControl<AutoScalingPolicyStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutoScalingPolicyStateChangeReasonCode { USER_REQUEST = 'USER_REQUEST', PROVISION_FAILURE = 'PROVISION_FAILURE', CLEANUP_FAILURE = 'CLEANUP_FAILURE' }


	/** This input determines which instance groups to retrieve. */
	export interface ListInstanceGroupsInput {

		/** Required */
		ClusterId: string;
		Marker?: string;
	}

	/** This input determines which instance groups to retrieve. */
	export interface ListInstanceGroupsInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceGroupsInputFormGroup() {
		return new FormGroup<ListInstanceGroupsInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This output contains the list of instances. */
	export interface ListInstancesOutput {
		Instances?: Array<Instance>;
		Marker?: string;
	}

	/** This output contains the list of instances. */
	export interface ListInstancesOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesOutputFormGroup() {
		return new FormGroup<ListInstancesOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an Amazon EC2 instance provisioned as part of cluster. */
	export interface Instance {
		Id?: string;
		Ec2InstanceId?: string;
		PublicDnsName?: string;
		PublicIpAddress?: string;
		PrivateDnsName?: string;
		PrivateIpAddress?: string;
		Status?: InstanceStatus;
		InstanceGroupId?: string;
		InstanceFleetId?: string;
		Market?: MarketType;
		InstanceType?: string;
		EbsVolumes?: Array<EbsVolume>;
	}

	/** Represents an Amazon EC2 instance provisioned as part of cluster. */
	export interface InstanceFormProperties {
		Id: FormControl<string | null | undefined>,
		Ec2InstanceId: FormControl<string | null | undefined>,
		PublicDnsName: FormControl<string | null | undefined>,
		PublicIpAddress: FormControl<string | null | undefined>,
		PrivateDnsName: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
		InstanceGroupId: FormControl<string | null | undefined>,
		InstanceFleetId: FormControl<string | null | undefined>,
		Market: FormControl<MarketType | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Ec2InstanceId: new FormControl<string | null | undefined>(undefined),
			PublicDnsName: new FormControl<string | null | undefined>(undefined),
			PublicIpAddress: new FormControl<string | null | undefined>(undefined),
			PrivateDnsName: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			InstanceGroupId: new FormControl<string | null | undefined>(undefined),
			InstanceFleetId: new FormControl<string | null | undefined>(undefined),
			Market: new FormControl<MarketType | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The instance status details. */
	export interface InstanceStatus {
		State?: InstanceState;
		StateChangeReason?: InstanceStateChangeReason;
		Timeline?: InstanceTimeline;
	}

	/** The instance status details. */
	export interface InstanceStatusFormProperties {
		State: FormControl<InstanceState | null | undefined>,
	}
	export function CreateInstanceStatusFormGroup() {
		return new FormGroup<InstanceStatusFormProperties>({
			State: new FormControl<InstanceState | null | undefined>(undefined),
		});

	}

	export enum InstanceState { AWAITING_FULFILLMENT = 'AWAITING_FULFILLMENT', PROVISIONING = 'PROVISIONING', BOOTSTRAPPING = 'BOOTSTRAPPING', RUNNING = 'RUNNING', TERMINATED = 'TERMINATED' }


	/** The details of the status change reason for the instance. */
	export interface InstanceStateChangeReason {
		Code?: InstanceStateChangeReasonCode;
		Message?: string;
	}

	/** The details of the status change reason for the instance. */
	export interface InstanceStateChangeReasonFormProperties {
		Code: FormControl<InstanceStateChangeReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInstanceStateChangeReasonFormGroup() {
		return new FormGroup<InstanceStateChangeReasonFormProperties>({
			Code: new FormControl<InstanceStateChangeReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceStateChangeReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR', VALIDATION_ERROR = 'VALIDATION_ERROR', INSTANCE_FAILURE = 'INSTANCE_FAILURE', BOOTSTRAP_FAILURE = 'BOOTSTRAP_FAILURE', CLUSTER_TERMINATED = 'CLUSTER_TERMINATED' }


	/** The timeline of the instance lifecycle. */
	export interface InstanceTimeline {
		CreationDateTime?: Date;
		ReadyDateTime?: Date;
		EndDateTime?: Date;
	}

	/** The timeline of the instance lifecycle. */
	export interface InstanceTimelineFormProperties {
		CreationDateTime: FormControl<Date | null | undefined>,
		ReadyDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceTimelineFormGroup() {
		return new FormGroup<InstanceTimelineFormProperties>({
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			ReadyDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** EBS block device that's attached to an Amazon EC2 instance. */
	export interface EbsVolume {
		Device?: string;
		VolumeId?: string;
	}

	/** EBS block device that's attached to an Amazon EC2 instance. */
	export interface EbsVolumeFormProperties {
		Device: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,
	}
	export function CreateEbsVolumeFormGroup() {
		return new FormGroup<EbsVolumeFormProperties>({
			Device: new FormControl<string | null | undefined>(undefined),
			VolumeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This input determines which instances to list. */
	export interface ListInstancesInput {

		/** Required */
		ClusterId: string;
		InstanceGroupId?: string;
		InstanceGroupTypes?: Array<InstanceGroupType>;
		InstanceFleetId?: string;
		InstanceFleetType?: InstanceFleetType;
		InstanceStates?: Array<InstanceState>;
		Marker?: string;
	}

	/** This input determines which instances to list. */
	export interface ListInstancesInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		InstanceGroupId: FormControl<string | null | undefined>,
		InstanceFleetId: FormControl<string | null | undefined>,
		InstanceFleetType: FormControl<InstanceFleetType | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesInputFormGroup() {
		return new FormGroup<ListInstancesInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceGroupId: new FormControl<string | null | undefined>(undefined),
			InstanceFleetId: new FormControl<string | null | undefined>(undefined),
			InstanceFleetType: new FormControl<InstanceFleetType | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceGroupType { MASTER = 'MASTER', CORE = 'CORE', TASK = 'TASK' }

	export interface ListNotebookExecutionsOutput {
		NotebookExecutions?: Array<NotebookExecutionSummary>;
		Marker?: string;
	}
	export interface ListNotebookExecutionsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookExecutionsOutputFormGroup() {
		return new FormGroup<ListNotebookExecutionsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution. */
	export interface NotebookExecutionSummary {
		NotebookExecutionId?: string;
		EditorId?: string;
		NotebookExecutionName?: string;
		Status?: NotebookExecutionStatus;
		StartTime?: Date;
		EndTime?: Date;
		NotebookS3Location?: NotebookS3LocationForOutput;
		ExecutionEngineId?: string;
	}

	/** Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution. */
	export interface NotebookExecutionSummaryFormProperties {
		NotebookExecutionId: FormControl<string | null | undefined>,
		EditorId: FormControl<string | null | undefined>,
		NotebookExecutionName: FormControl<string | null | undefined>,
		Status: FormControl<NotebookExecutionStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		ExecutionEngineId: FormControl<string | null | undefined>,
	}
	export function CreateNotebookExecutionSummaryFormGroup() {
		return new FormGroup<NotebookExecutionSummaryFormProperties>({
			NotebookExecutionId: new FormControl<string | null | undefined>(undefined),
			EditorId: new FormControl<string | null | undefined>(undefined),
			NotebookExecutionName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NotebookExecutionStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionEngineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNotebookExecutionsInput {
		EditorId?: string;
		Status?: NotebookExecutionStatus;
		From?: Date;
		To?: Date;
		Marker?: string;
		ExecutionEngineId?: string;
	}
	export interface ListNotebookExecutionsInputFormProperties {
		EditorId: FormControl<string | null | undefined>,
		Status: FormControl<NotebookExecutionStatus | null | undefined>,
		From: FormControl<Date | null | undefined>,
		To: FormControl<Date | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		ExecutionEngineId: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookExecutionsInputFormGroup() {
		return new FormGroup<ListNotebookExecutionsInputFormProperties>({
			EditorId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NotebookExecutionStatus | null | undefined>(undefined),
			From: new FormControl<Date | null | undefined>(undefined),
			To: new FormControl<Date | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			ExecutionEngineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReleaseLabelsOutput {
		ReleaseLabels?: Array<string>;
		NextToken?: string;
	}
	export interface ListReleaseLabelsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReleaseLabelsOutputFormGroup() {
		return new FormGroup<ListReleaseLabelsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReleaseLabelsInput {
		Filters?: ReleaseLabelFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListReleaseLabelsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReleaseLabelsInputFormGroup() {
		return new FormGroup<ListReleaseLabelsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The release label filters by application or version prefix. */
	export interface ReleaseLabelFilter {
		Prefix?: string;
		Application?: string;
	}

	/** The release label filters by application or version prefix. */
	export interface ReleaseLabelFilterFormProperties {
		Prefix: FormControl<string | null | undefined>,
		Application: FormControl<string | null | undefined>,
	}
	export function CreateReleaseLabelFilterFormGroup() {
		return new FormGroup<ReleaseLabelFilterFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined),
			Application: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSecurityConfigurationsOutput {
		SecurityConfigurations?: Array<SecurityConfigurationSummary>;
		Marker?: string;
	}
	export interface ListSecurityConfigurationsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityConfigurationsOutputFormGroup() {
		return new FormGroup<ListSecurityConfigurationsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The creation date and time, and name, of a security configuration. */
	export interface SecurityConfigurationSummary {
		Name?: string;
		CreationDateTime?: Date;
	}

	/** The creation date and time, and name, of a security configuration. */
	export interface SecurityConfigurationSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSecurityConfigurationSummaryFormGroup() {
		return new FormGroup<SecurityConfigurationSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSecurityConfigurationsInput {
		Marker?: string;
	}
	export interface ListSecurityConfigurationsInputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityConfigurationsInputFormGroup() {
		return new FormGroup<ListSecurityConfigurationsInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list. */
	export interface ListStepsOutput {
		Steps?: Array<StepSummary>;
		Marker?: string;
	}

	/** This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list. */
	export interface ListStepsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListStepsOutputFormGroup() {
		return new FormGroup<ListStepsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the cluster step. */
	export interface StepSummary {
		Id?: string;
		Name?: string;
		Config?: HadoopStepConfig;
		ActionOnFailure?: ActionOnFailure;
		Status?: StepStatus;
	}

	/** The summary of the cluster step. */
	export interface StepSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ActionOnFailure: FormControl<ActionOnFailure | null | undefined>,
	}
	export function CreateStepSummaryFormGroup() {
		return new FormGroup<StepSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ActionOnFailure: new FormControl<ActionOnFailure | null | undefined>(undefined),
		});

	}


	/** This input determines which steps to list. */
	export interface ListStepsInput {

		/** Required */
		ClusterId: string;
		StepStates?: Array<StepState>;
		StepIds?: Array<string>;
		Marker?: string;
	}

	/** This input determines which steps to list. */
	export interface ListStepsInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListStepsInputFormGroup() {
		return new FormGroup<ListStepsInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStudioSessionMappingsOutput {
		SessionMappings?: Array<SessionMappingSummary>;
		Marker?: string;
	}
	export interface ListStudioSessionMappingsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListStudioSessionMappingsOutputFormGroup() {
		return new FormGroup<ListStudioSessionMappingsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified. */
	export interface SessionMappingSummary {
		StudioId?: string;
		IdentityId?: string;
		IdentityName?: string;
		IdentityType?: IdentityType;
		SessionPolicyArn?: string;
		CreationTime?: Date;
	}

	/** Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified. */
	export interface SessionMappingSummaryFormProperties {
		StudioId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,
		IdentityType: FormControl<IdentityType | null | undefined>,
		SessionPolicyArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateSessionMappingSummaryFormGroup() {
		return new FormGroup<SessionMappingSummaryFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			SessionPolicyArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStudioSessionMappingsInput {
		StudioId?: string;
		IdentityType?: IdentityType;
		Marker?: string;
	}
	export interface ListStudioSessionMappingsInputFormProperties {
		StudioId: FormControl<string | null | undefined>,
		IdentityType: FormControl<IdentityType | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListStudioSessionMappingsInputFormGroup() {
		return new FormGroup<ListStudioSessionMappingsInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined),
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStudiosOutput {
		Studios?: Array<StudioSummary>;
		Marker?: string;
	}
	export interface ListStudiosOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListStudiosOutputFormGroup() {
		return new FormGroup<ListStudiosOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio. */
	export interface StudioSummary {
		StudioId?: string;
		Name?: string;
		VpcId?: string;
		Description?: string;
		Url?: string;
		AuthMode?: AuthMode;
		CreationTime?: Date;
	}

	/** Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio. */
	export interface StudioSummaryFormProperties {
		StudioId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		AuthMode: FormControl<AuthMode | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateStudioSummaryFormGroup() {
		return new FormGroup<StudioSummaryFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			AuthMode: new FormControl<AuthMode | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStudiosInput {
		Marker?: string;
	}
	export interface ListStudiosInputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListStudiosInputFormGroup() {
		return new FormGroup<ListStudiosInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSupportedInstanceTypesOutput {
		SupportedInstanceTypes?: Array<SupportedInstanceType>;
		Marker?: string;
	}
	export interface ListSupportedInstanceTypesOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListSupportedInstanceTypesOutputFormGroup() {
		return new FormGroup<ListSupportedInstanceTypesOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An instance type that the specified Amazon EMR release supports. */
	export interface SupportedInstanceType {
		Type?: string;
		MemoryGB?: number;
		StorageGB?: number | null;
		VCPU?: number | null;
		Is64BitsOnly?: boolean | null;
		InstanceFamilyId?: string;
		EbsOptimizedAvailable?: boolean | null;
		EbsOptimizedByDefault?: boolean | null;
		NumberOfDisks?: number | null;
		EbsStorageOnly?: boolean | null;
		Architecture?: string;
	}

	/** An instance type that the specified Amazon EMR release supports. */
	export interface SupportedInstanceTypeFormProperties {
		Type: FormControl<string | null | undefined>,
		MemoryGB: FormControl<number | null | undefined>,
		StorageGB: FormControl<number | null | undefined>,
		VCPU: FormControl<number | null | undefined>,
		Is64BitsOnly: FormControl<boolean | null | undefined>,
		InstanceFamilyId: FormControl<string | null | undefined>,
		EbsOptimizedAvailable: FormControl<boolean | null | undefined>,
		EbsOptimizedByDefault: FormControl<boolean | null | undefined>,
		NumberOfDisks: FormControl<number | null | undefined>,
		EbsStorageOnly: FormControl<boolean | null | undefined>,
		Architecture: FormControl<string | null | undefined>,
	}
	export function CreateSupportedInstanceTypeFormGroup() {
		return new FormGroup<SupportedInstanceTypeFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			MemoryGB: new FormControl<number | null | undefined>(undefined),
			StorageGB: new FormControl<number | null | undefined>(undefined),
			VCPU: new FormControl<number | null | undefined>(undefined),
			Is64BitsOnly: new FormControl<boolean | null | undefined>(undefined),
			InstanceFamilyId: new FormControl<string | null | undefined>(undefined),
			EbsOptimizedAvailable: new FormControl<boolean | null | undefined>(undefined),
			EbsOptimizedByDefault: new FormControl<boolean | null | undefined>(undefined),
			NumberOfDisks: new FormControl<number | null | undefined>(undefined),
			EbsStorageOnly: new FormControl<boolean | null | undefined>(undefined),
			Architecture: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSupportedInstanceTypesInput {

		/** Required */
		ReleaseLabel: string;
		Marker?: string;
	}
	export interface ListSupportedInstanceTypesInputFormProperties {

		/** Required */
		ReleaseLabel: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListSupportedInstanceTypesInputFormGroup() {
		return new FormGroup<ListSupportedInstanceTypesInputFormProperties>({
			ReleaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyClusterOutput {
		StepConcurrencyLevel?: number | null;
	}
	export interface ModifyClusterOutputFormProperties {
		StepConcurrencyLevel: FormControl<number | null | undefined>,
	}
	export function CreateModifyClusterOutputFormGroup() {
		return new FormGroup<ModifyClusterOutputFormProperties>({
			StepConcurrencyLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ModifyClusterInput {

		/** Required */
		ClusterId: string;
		StepConcurrencyLevel?: number | null;
	}
	export interface ModifyClusterInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		StepConcurrencyLevel: FormControl<number | null | undefined>,
	}
	export function CreateModifyClusterInputFormGroup() {
		return new FormGroup<ModifyClusterInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StepConcurrencyLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ModifyInstanceFleetInput {

		/** Required */
		ClusterId: string;

		/** Required */
		InstanceFleet: InstanceFleetModifyConfig;
	}
	export interface ModifyInstanceFleetInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateModifyInstanceFleetInputFormGroup() {
		return new FormGroup<ModifyInstanceFleetInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetModifyConfig {

		/** Required */
		InstanceFleetId: string;
		TargetOnDemandCapacity?: number | null;
		TargetSpotCapacity?: number | null;
		ResizeSpecifications?: InstanceFleetResizingSpecifications;
	}

	/** <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note> */
	export interface InstanceFleetModifyConfigFormProperties {

		/** Required */
		InstanceFleetId: FormControl<string | null | undefined>,
		TargetOnDemandCapacity: FormControl<number | null | undefined>,
		TargetSpotCapacity: FormControl<number | null | undefined>,
	}
	export function CreateInstanceFleetModifyConfigFormGroup() {
		return new FormGroup<InstanceFleetModifyConfigFormProperties>({
			InstanceFleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetOnDemandCapacity: new FormControl<number | null | undefined>(undefined),
			TargetSpotCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Change the size of some instance groups. */
	export interface ModifyInstanceGroupsInput {
		ClusterId?: string;
		InstanceGroups?: Array<InstanceGroupModifyConfig>;
	}

	/** Change the size of some instance groups. */
	export interface ModifyInstanceGroupsInputFormProperties {
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateModifyInstanceGroupsInputFormGroup() {
		return new FormGroup<ModifyInstanceGroupsInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Modify the size or configurations of an instance group. */
	export interface InstanceGroupModifyConfig {

		/** Required */
		InstanceGroupId: string;
		InstanceCount?: number | null;
		EC2InstanceIdsToTerminate?: Array<string>;
		ShrinkPolicy?: ShrinkPolicy;
		ReconfigurationType?: ReconfigurationType;
		Configurations?: Array<Configuration>;
	}

	/** Modify the size or configurations of an instance group. */
	export interface InstanceGroupModifyConfigFormProperties {

		/** Required */
		InstanceGroupId: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		ReconfigurationType: FormControl<ReconfigurationType | null | undefined>,
	}
	export function CreateInstanceGroupModifyConfigFormGroup() {
		return new FormGroup<InstanceGroupModifyConfigFormProperties>({
			InstanceGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			ReconfigurationType: new FormControl<ReconfigurationType | null | undefined>(undefined),
		});

	}

	export enum ReconfigurationType { OVERWRITE = 'OVERWRITE', MERGE = 'MERGE' }

	export interface PutAutoScalingPolicyOutput {
		ClusterId?: string;
		InstanceGroupId?: string;
		AutoScalingPolicy?: AutoScalingPolicyDescription;
		ClusterArn?: string;
	}
	export interface PutAutoScalingPolicyOutputFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		InstanceGroupId: FormControl<string | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
	}
	export function CreatePutAutoScalingPolicyOutputFormGroup() {
		return new FormGroup<PutAutoScalingPolicyOutputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			InstanceGroupId: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAutoScalingPolicyInput {

		/** Required */
		ClusterId: string;

		/** Required */
		InstanceGroupId: string;

		/** Required */
		AutoScalingPolicy: AutoScalingPolicy;
	}
	export interface PutAutoScalingPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,

		/** Required */
		InstanceGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePutAutoScalingPolicyInputFormGroup() {
		return new FormGroup<PutAutoScalingPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAutoTerminationPolicyOutput {
	}
	export interface PutAutoTerminationPolicyOutputFormProperties {
	}
	export function CreatePutAutoTerminationPolicyOutputFormGroup() {
		return new FormGroup<PutAutoTerminationPolicyOutputFormProperties>({
		});

	}

	export interface PutAutoTerminationPolicyInput {

		/** Required */
		ClusterId: string;
		AutoTerminationPolicy?: AutoTerminationPolicy;
	}
	export interface PutAutoTerminationPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreatePutAutoTerminationPolicyInputFormGroup() {
		return new FormGroup<PutAutoTerminationPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutBlockPublicAccessConfigurationOutput {
	}
	export interface PutBlockPublicAccessConfigurationOutputFormProperties {
	}
	export function CreatePutBlockPublicAccessConfigurationOutputFormGroup() {
		return new FormGroup<PutBlockPublicAccessConfigurationOutputFormProperties>({
		});

	}

	export interface PutBlockPublicAccessConfigurationInput {

		/** Required */
		BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;
	}
	export interface PutBlockPublicAccessConfigurationInputFormProperties {
	}
	export function CreatePutBlockPublicAccessConfigurationInputFormGroup() {
		return new FormGroup<PutBlockPublicAccessConfigurationInputFormProperties>({
		});

	}

	export interface PutManagedScalingPolicyOutput {
	}
	export interface PutManagedScalingPolicyOutputFormProperties {
	}
	export function CreatePutManagedScalingPolicyOutputFormGroup() {
		return new FormGroup<PutManagedScalingPolicyOutputFormProperties>({
		});

	}

	export interface PutManagedScalingPolicyInput {

		/** Required */
		ClusterId: string;

		/** Required */
		ManagedScalingPolicy: ManagedScalingPolicy;
	}
	export interface PutManagedScalingPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreatePutManagedScalingPolicyInputFormGroup() {
		return new FormGroup<PutManagedScalingPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveAutoScalingPolicyOutput {
	}
	export interface RemoveAutoScalingPolicyOutputFormProperties {
	}
	export function CreateRemoveAutoScalingPolicyOutputFormGroup() {
		return new FormGroup<RemoveAutoScalingPolicyOutputFormProperties>({
		});

	}

	export interface RemoveAutoScalingPolicyInput {

		/** Required */
		ClusterId: string;

		/** Required */
		InstanceGroupId: string;
	}
	export interface RemoveAutoScalingPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,

		/** Required */
		InstanceGroupId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAutoScalingPolicyInputFormGroup() {
		return new FormGroup<RemoveAutoScalingPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveAutoTerminationPolicyOutput {
	}
	export interface RemoveAutoTerminationPolicyOutputFormProperties {
	}
	export function CreateRemoveAutoTerminationPolicyOutputFormGroup() {
		return new FormGroup<RemoveAutoTerminationPolicyOutputFormProperties>({
		});

	}

	export interface RemoveAutoTerminationPolicyInput {

		/** Required */
		ClusterId: string;
	}
	export interface RemoveAutoTerminationPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAutoTerminationPolicyInputFormGroup() {
		return new FormGroup<RemoveAutoTerminationPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveManagedScalingPolicyOutput {
	}
	export interface RemoveManagedScalingPolicyOutputFormProperties {
	}
	export function CreateRemoveManagedScalingPolicyOutputFormGroup() {
		return new FormGroup<RemoveManagedScalingPolicyOutputFormProperties>({
		});

	}

	export interface RemoveManagedScalingPolicyInput {

		/** Required */
		ClusterId: string;
	}
	export interface RemoveManagedScalingPolicyInputFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveManagedScalingPolicyInputFormGroup() {
		return new FormGroup<RemoveManagedScalingPolicyInputFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This output indicates the result of removing tags from the resource. */
	export interface RemoveTagsOutput {
	}

	/** This output indicates the result of removing tags from the resource. */
	export interface RemoveTagsOutputFormProperties {
	}
	export function CreateRemoveTagsOutputFormGroup() {
		return new FormGroup<RemoveTagsOutputFormProperties>({
		});

	}


	/** This input identifies an Amazon EMR resource and a list of tags to remove. */
	export interface RemoveTagsInput {

		/** Required */
		ResourceId: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** This input identifies an Amazon EMR resource and a list of tags to remove. */
	export interface RemoveTagsInputFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsInputFormGroup() {
		return new FormGroup<RemoveTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The result of the <a>RunJobFlow</a> operation.  */
	export interface RunJobFlowOutput {
		JobFlowId?: string;
		ClusterArn?: string;
	}

	/**  The result of the <a>RunJobFlow</a> operation.  */
	export interface RunJobFlowOutputFormProperties {
		JobFlowId: FormControl<string | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateRunJobFlowOutputFormGroup() {
		return new FormGroup<RunJobFlowOutputFormProperties>({
			JobFlowId: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Input to the <a>RunJobFlow</a> operation.  */
	export interface RunJobFlowInput {

		/** Required */
		Name: string;
		LogUri?: string;
		LogEncryptionKmsKeyId?: string;
		AdditionalInfo?: string;
		AmiVersion?: string;
		ReleaseLabel?: string;

		/** Required */
		Instances: JobFlowInstancesConfig;
		Steps?: Array<StepConfig>;
		BootstrapActions?: Array<BootstrapActionConfig>;
		SupportedProducts?: Array<string>;
		NewSupportedProducts?: Array<SupportedProductConfig>;
		Applications?: Array<Application>;
		Configurations?: Array<Configuration>;
		VisibleToAllUsers?: boolean | null;
		JobFlowRole?: string;
		ServiceRole?: string;
		Tags?: Array<Tag>;
		SecurityConfiguration?: string;
		AutoScalingRole?: string;
		ScaleDownBehavior?: ScaleDownBehavior;
		CustomAmiId?: string;
		EbsRootVolumeSize?: number | null;
		RepoUpgradeOnBoot?: RepoUpgradeOnBoot;
		KerberosAttributes?: KerberosAttributes;
		StepConcurrencyLevel?: number | null;
		ManagedScalingPolicy?: ManagedScalingPolicy;
		PlacementGroupConfigs?: Array<PlacementGroupConfig>;

		/** An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>. */
		AutoTerminationPolicy?: AutoTerminationPolicy;
		OSReleaseLabel?: string;
	}

	/**  Input to the <a>RunJobFlow</a> operation.  */
	export interface RunJobFlowInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		LogEncryptionKmsKeyId: FormControl<string | null | undefined>,
		AdditionalInfo: FormControl<string | null | undefined>,
		AmiVersion: FormControl<string | null | undefined>,
		ReleaseLabel: FormControl<string | null | undefined>,
		VisibleToAllUsers: FormControl<boolean | null | undefined>,
		JobFlowRole: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		SecurityConfiguration: FormControl<string | null | undefined>,
		AutoScalingRole: FormControl<string | null | undefined>,
		ScaleDownBehavior: FormControl<ScaleDownBehavior | null | undefined>,
		CustomAmiId: FormControl<string | null | undefined>,
		EbsRootVolumeSize: FormControl<number | null | undefined>,
		RepoUpgradeOnBoot: FormControl<RepoUpgradeOnBoot | null | undefined>,
		StepConcurrencyLevel: FormControl<number | null | undefined>,
		OSReleaseLabel: FormControl<string | null | undefined>,
	}
	export function CreateRunJobFlowInputFormGroup() {
		return new FormGroup<RunJobFlowInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogUri: new FormControl<string | null | undefined>(undefined),
			LogEncryptionKmsKeyId: new FormControl<string | null | undefined>(undefined),
			AdditionalInfo: new FormControl<string | null | undefined>(undefined),
			AmiVersion: new FormControl<string | null | undefined>(undefined),
			ReleaseLabel: new FormControl<string | null | undefined>(undefined),
			VisibleToAllUsers: new FormControl<boolean | null | undefined>(undefined),
			JobFlowRole: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			SecurityConfiguration: new FormControl<string | null | undefined>(undefined),
			AutoScalingRole: new FormControl<string | null | undefined>(undefined),
			ScaleDownBehavior: new FormControl<ScaleDownBehavior | null | undefined>(undefined),
			CustomAmiId: new FormControl<string | null | undefined>(undefined),
			EbsRootVolumeSize: new FormControl<number | null | undefined>(undefined),
			RepoUpgradeOnBoot: new FormControl<RepoUpgradeOnBoot | null | undefined>(undefined),
			StepConcurrencyLevel: new FormControl<number | null | undefined>(undefined),
			OSReleaseLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration. */
	export interface JobFlowInstancesConfig {
		MasterInstanceType?: string;
		SlaveInstanceType?: string;
		InstanceCount?: number | null;
		InstanceGroups?: Array<InstanceGroupConfig>;
		InstanceFleets?: Array<InstanceFleetConfig>;
		Ec2KeyName?: string;
		Placement?: PlacementType;
		KeepJobFlowAliveWhenNoSteps?: boolean | null;
		TerminationProtected?: boolean | null;
		HadoopVersion?: string;
		Ec2SubnetId?: string;
		Ec2SubnetIds?: Array<string>;
		EmrManagedMasterSecurityGroup?: string;
		EmrManagedSlaveSecurityGroup?: string;
		ServiceAccessSecurityGroup?: string;
		AdditionalMasterSecurityGroups?: Array<string>;
		AdditionalSlaveSecurityGroups?: Array<string>;
	}

	/** A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration. */
	export interface JobFlowInstancesConfigFormProperties {
		MasterInstanceType: FormControl<string | null | undefined>,
		SlaveInstanceType: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		Ec2KeyName: FormControl<string | null | undefined>,
		KeepJobFlowAliveWhenNoSteps: FormControl<boolean | null | undefined>,
		TerminationProtected: FormControl<boolean | null | undefined>,
		HadoopVersion: FormControl<string | null | undefined>,
		Ec2SubnetId: FormControl<string | null | undefined>,
		EmrManagedMasterSecurityGroup: FormControl<string | null | undefined>,
		EmrManagedSlaveSecurityGroup: FormControl<string | null | undefined>,
		ServiceAccessSecurityGroup: FormControl<string | null | undefined>,
	}
	export function CreateJobFlowInstancesConfigFormGroup() {
		return new FormGroup<JobFlowInstancesConfigFormProperties>({
			MasterInstanceType: new FormControl<string | null | undefined>(undefined),
			SlaveInstanceType: new FormControl<string | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			Ec2KeyName: new FormControl<string | null | undefined>(undefined),
			KeepJobFlowAliveWhenNoSteps: new FormControl<boolean | null | undefined>(undefined),
			TerminationProtected: new FormControl<boolean | null | undefined>(undefined),
			HadoopVersion: new FormControl<string | null | undefined>(undefined),
			Ec2SubnetId: new FormControl<string | null | undefined>(undefined),
			EmrManagedMasterSecurityGroup: new FormControl<string | null | undefined>(undefined),
			EmrManagedSlaveSecurityGroup: new FormControl<string | null | undefined>(undefined),
			ServiceAccessSecurityGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of supported product configurations that allow user-supplied arguments. Amazon EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments. */
	export interface SupportedProductConfig {
		Name?: string;
		Args?: Array<string>;
	}

	/** The list of supported product configurations that allow user-supplied arguments. Amazon EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments. */
	export interface SupportedProductConfigFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSupportedProductConfigFormGroup() {
		return new FormGroup<SupportedProductConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The input argument to the <a>TerminationProtection</a> operation.  */
	export interface SetTerminationProtectionInput {

		/** Required */
		JobFlowIds: Array<string>;

		/** Required */
		TerminationProtected: boolean;
	}

	/**  The input argument to the <a>TerminationProtection</a> operation.  */
	export interface SetTerminationProtectionInputFormProperties {

		/** Required */
		TerminationProtected: FormControl<boolean | null | undefined>,
	}
	export function CreateSetTerminationProtectionInputFormGroup() {
		return new FormGroup<SetTerminationProtectionInputFormProperties>({
			TerminationProtected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input to the SetVisibleToAllUsers action. */
	export interface SetVisibleToAllUsersInput {

		/** Required */
		JobFlowIds: Array<string>;

		/** Required */
		VisibleToAllUsers: boolean;
	}

	/** The input to the SetVisibleToAllUsers action. */
	export interface SetVisibleToAllUsersInputFormProperties {

		/** Required */
		VisibleToAllUsers: FormControl<boolean | null | undefined>,
	}
	export function CreateSetVisibleToAllUsersInputFormGroup() {
		return new FormGroup<SetVisibleToAllUsersInputFormProperties>({
			VisibleToAllUsers: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartNotebookExecutionOutput {
		NotebookExecutionId?: string;
	}
	export interface StartNotebookExecutionOutputFormProperties {
		NotebookExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartNotebookExecutionOutputFormGroup() {
		return new FormGroup<StartNotebookExecutionOutputFormProperties>({
			NotebookExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartNotebookExecutionInput {
		EditorId?: string;
		RelativePath?: string;
		NotebookExecutionName?: string;
		NotebookParams?: string;

		/** Required */
		ExecutionEngine: ExecutionEngineConfig;

		/** Required */
		ServiceRole: string;
		NotebookInstanceSecurityGroupId?: string;
		Tags?: Array<Tag>;
		NotebookS3Location?: NotebookS3LocationFromInput;
		OutputNotebookS3Location?: OutputNotebookS3LocationFromInput;
		OutputNotebookFormat?: OutputNotebookFormat;
		EnvironmentVariables?: EnvironmentVariablesMap;
	}
	export interface StartNotebookExecutionInputFormProperties {
		EditorId: FormControl<string | null | undefined>,
		RelativePath: FormControl<string | null | undefined>,
		NotebookExecutionName: FormControl<string | null | undefined>,
		NotebookParams: FormControl<string | null | undefined>,

		/** Required */
		ServiceRole: FormControl<string | null | undefined>,
		NotebookInstanceSecurityGroupId: FormControl<string | null | undefined>,
		OutputNotebookFormat: FormControl<OutputNotebookFormat | null | undefined>,
	}
	export function CreateStartNotebookExecutionInputFormGroup() {
		return new FormGroup<StartNotebookExecutionInputFormProperties>({
			EditorId: new FormControl<string | null | undefined>(undefined),
			RelativePath: new FormControl<string | null | undefined>(undefined),
			NotebookExecutionName: new FormControl<string | null | undefined>(undefined),
			NotebookParams: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NotebookInstanceSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			OutputNotebookFormat: new FormControl<OutputNotebookFormat | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 location that stores the notebook execution input. */
	export interface NotebookS3LocationFromInput {
		Bucket?: string;
		Key?: string;
	}

	/** The Amazon S3 location that stores the notebook execution input. */
	export interface NotebookS3LocationFromInputFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateNotebookS3LocationFromInputFormGroup() {
		return new FormGroup<NotebookS3LocationFromInputFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 location that stores the notebook execution output. */
	export interface OutputNotebookS3LocationFromInput {
		Bucket?: string;
		Key?: string;
	}

	/** The Amazon S3 location that stores the notebook execution output. */
	export interface OutputNotebookS3LocationFromInputFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateOutputNotebookS3LocationFromInputFormGroup() {
		return new FormGroup<OutputNotebookS3LocationFromInputFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopNotebookExecutionInput {

		/** Required */
		NotebookExecutionId: string;
	}
	export interface StopNotebookExecutionInputFormProperties {

		/** Required */
		NotebookExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStopNotebookExecutionInputFormGroup() {
		return new FormGroup<StopNotebookExecutionInputFormProperties>({
			NotebookExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Input to the <a>TerminateJobFlows</a> operation.  */
	export interface TerminateJobFlowsInput {

		/** Required */
		JobFlowIds: Array<string>;
	}

	/**  Input to the <a>TerminateJobFlows</a> operation.  */
	export interface TerminateJobFlowsInputFormProperties {
	}
	export function CreateTerminateJobFlowsInputFormGroup() {
		return new FormGroup<TerminateJobFlowsInputFormProperties>({
		});

	}

	export interface UpdateStudioInput {

		/** Required */
		StudioId: string;
		Name?: string;
		Description?: string;
		SubnetIds?: Array<string>;
		DefaultS3Location?: string;
	}
	export interface UpdateStudioInputFormProperties {

		/** Required */
		StudioId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DefaultS3Location: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStudioInputFormGroup() {
		return new FormGroup<UpdateStudioInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultS3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStudioSessionMappingInput {

		/** Required */
		StudioId: string;
		IdentityId?: string;
		IdentityName?: string;

		/** Required */
		IdentityType: IdentityType;

		/** Required */
		SessionPolicyArn: string;
	}
	export interface UpdateStudioSessionMappingInputFormProperties {

		/** Required */
		StudioId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,

		/** Required */
		IdentityType: FormControl<IdentityType | null | undefined>,

		/** Required */
		SessionPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStudioSessionMappingInputFormGroup() {
		return new FormGroup<UpdateStudioSessionMappingInputFormProperties>({
			StudioId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined, [Validators.required]),
			SessionPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstanceRoleType { MASTER = 'MASTER', CORE = 'CORE', TASK = 'TASK' }

	export enum InstanceGroupStateChangeReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR', VALIDATION_ERROR = 'VALIDATION_ERROR', INSTANCE_FAILURE = 'INSTANCE_FAILURE', CLUSTER_TERMINATED = 'CLUSTER_TERMINATED' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x.</p> </note>
		 * Post #X-Amz-Target=ElasticMapReduce.AddInstanceFleet
		 * @return {AddInstanceFleetOutput} Success
		 */
		AddInstanceFleet(requestBody: AddInstanceFleetInput): Observable<AddInstanceFleetOutput> {
			return this.http.post<AddInstanceFleetOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.AddInstanceFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more instance groups to a running cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.AddInstanceGroups
		 * @return {AddInstanceGroupsOutput} Success
		 */
		AddInstanceGroups(requestBody: AddInstanceGroupsInput): Observable<AddInstanceGroupsOutput> {
			return this.http.post<AddInstanceGroupsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.AddInstanceGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>
		 * Post #X-Amz-Target=ElasticMapReduce.AddJobFlowSteps
		 * @return {AddJobFlowStepsOutput} Success
		 */
		AddJobFlowSteps(requestBody: AddJobFlowStepsInput): Observable<AddJobFlowStepsOutput> {
			return this.http.post<AddJobFlowStepsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.
		 * Post #X-Amz-Target=ElasticMapReduce.AddTags
		 * @return {AddTagsOutput} Success
		 */
		AddTags(requestBody: AddTagsInput): Observable<AddTagsOutput> {
			return this.http.post<AddTagsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.AddTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR releases 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state.
		 * Post #X-Amz-Target=ElasticMapReduce.CancelSteps
		 * @return {CancelStepsOutput} Success
		 */
		CancelSteps(requestBody: CancelStepsInput): Observable<CancelStepsOutput> {
			return this.http.post<CancelStepsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.CancelSteps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a security configuration, which is stored in the service and can be specified when a cluster is created.
		 * Post #X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration
		 * @return {CreateSecurityConfigurationOutput} Success
		 */
		CreateSecurityConfiguration(requestBody: CreateSecurityConfigurationInput): Observable<CreateSecurityConfigurationOutput> {
			return this.http.post<CreateSecurityConfigurationOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Amazon EMR Studio.
		 * Post #X-Amz-Target=ElasticMapReduce.CreateStudio
		 * @return {CreateStudioOutput} Success
		 */
		CreateStudio(requestBody: CreateStudioInput): Observable<CreateStudioOutput> {
			return this.http.post<CreateStudioOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.CreateStudio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.
		 * Post #X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping
		 * @return {void} Success
		 */
		CreateStudioSessionMapping(requestBody: CreateStudioSessionMappingInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a security configuration.
		 * Post #X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration
		 * @return {DeleteSecurityConfigurationOutput} Success
		 */
		DeleteSecurityConfiguration(requestBody: DeleteSecurityConfigurationInput): Observable<DeleteSecurityConfigurationOutput> {
			return this.http.post<DeleteSecurityConfigurationOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an Amazon EMR Studio from the Studio metadata store.
		 * Post #X-Amz-Target=ElasticMapReduce.DeleteStudio
		 * @return {void} Success
		 */
		DeleteStudio(requestBody: DeleteStudioInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DeleteStudio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a user or group from an Amazon EMR Studio.
		 * Post #X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping
		 * @return {void} Success
		 */
		DeleteStudioSessionMapping(requestBody: DeleteStudioSessionMappingInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.
		 * Post #X-Amz-Target=ElasticMapReduce.DescribeCluster
		 * @return {DescribeClusterOutput} Success
		 */
		DescribeCluster(requestBody: DescribeClusterInput): Observable<DescribeClusterOutput> {
			return this.http.post<DescribeClusterOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DescribeCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
		 * Post #X-Amz-Target=ElasticMapReduce.DescribeJobFlows
		 * @return {DescribeJobFlowsOutput} Success
		 */
		DescribeJobFlows(requestBody: DescribeJobFlowsInput): Observable<DescribeJobFlowsOutput> {
			return this.http.post<DescribeJobFlowsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DescribeJobFlows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details of a notebook execution.
		 * Post #X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution
		 * @return {DescribeNotebookExecutionOutput} Success
		 */
		DescribeNotebookExecution(requestBody: DescribeNotebookExecutionInput): Observable<DescribeNotebookExecutionOutput> {
			return this.http.post<DescribeNotebookExecutionOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides Amazon EMR release label details, such as the releases available the Region where the API request is run, and the available applications for a specific Amazon EMR release label. Can also list Amazon EMR releases that support a specified version of Spark.
		 * Post #X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel
		 * @return {DescribeReleaseLabelOutput} Success
		 */
		DescribeReleaseLabel(requestBody: DescribeReleaseLabelInput): Observable<DescribeReleaseLabelOutput> {
			return this.http.post<DescribeReleaseLabelOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details of a security configuration by returning the configuration JSON.
		 * Post #X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration
		 * @return {DescribeSecurityConfigurationOutput} Success
		 */
		DescribeSecurityConfiguration(requestBody: DescribeSecurityConfigurationInput): Observable<DescribeSecurityConfigurationOutput> {
			return this.http.post<DescribeSecurityConfigurationOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides more detail about the cluster step.
		 * Post #X-Amz-Target=ElasticMapReduce.DescribeStep
		 * @return {DescribeStepOutput} Success
		 */
		DescribeStep(requestBody: DescribeStepInput): Observable<DescribeStepOutput> {
			return this.http.post<DescribeStepOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DescribeStep', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.
		 * Post #X-Amz-Target=ElasticMapReduce.DescribeStudio
		 * @return {DescribeStudioOutput} Success
		 */
		DescribeStudio(requestBody: DescribeStudioInput): Observable<DescribeStudioOutput> {
			return this.http.post<DescribeStudioOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.DescribeStudio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the auto-termination policy for an Amazon EMR cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy
		 * @return {GetAutoTerminationPolicyOutput} Success
		 */
		GetAutoTerminationPolicy(requestBody: GetAutoTerminationPolicyInput): Observable<GetAutoTerminationPolicyOutput> {
			return this.http.post<GetAutoTerminationPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
		 * Post #X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration
		 * @return {GetBlockPublicAccessConfigurationOutput} Success
		 */
		GetBlockPublicAccessConfiguration(requestBody: GetBlockPublicAccessConfigurationInput): Observable<GetBlockPublicAccessConfigurationOutput> {
			return this.http.post<GetBlockPublicAccessConfigurationOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.
		 * Post #X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials
		 * @return {GetClusterSessionCredentialsOutput} Success
		 */
		GetClusterSessionCredentials(requestBody: GetClusterSessionCredentialsInput): Observable<GetClusterSessionCredentialsOutput> {
			return this.http.post<GetClusterSessionCredentialsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches the attached managed scaling policy for an Amazon EMR cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy
		 * @return {GetManagedScalingPolicyOutput} Success
		 */
		GetManagedScalingPolicy(requestBody: GetManagedScalingPolicyInput): Observable<GetManagedScalingPolicyOutput> {
			return this.http.post<GetManagedScalingPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).
		 * Post #X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping
		 * @return {GetStudioSessionMappingOutput} Success
		 */
		GetStudioSessionMapping(requestBody: GetStudioSessionMappingInput): Observable<GetStudioSessionMappingOutput> {
			return this.http.post<GetStudioSessionMappingOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about the bootstrap actions associated with a cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.ListBootstrapActions
		 * @param {string} Marker Pagination token
		 * @return {ListBootstrapActionsOutput} Success
		 */
		ListBootstrapActions(Marker: string | null | undefined, requestBody: ListBootstrapActionsInput): Observable<ListBootstrapActionsOutput> {
			return this.http.post<ListBootstrapActionsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListBootstrapActions?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.
		 * Post #X-Amz-Target=ElasticMapReduce.ListClusters
		 * @param {string} Marker Pagination token
		 * @return {ListClustersOutput} Success
		 */
		ListClusters(Marker: string | null | undefined, requestBody: ListClustersInput): Observable<ListClustersOutput> {
			return this.http.post<ListClustersOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListClusters?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note>
		 * Post #X-Amz-Target=ElasticMapReduce.ListInstanceFleets
		 * @param {string} Marker Pagination token
		 * @return {ListInstanceFleetsOutput} Success
		 */
		ListInstanceFleets(Marker: string | null | undefined, requestBody: ListInstanceFleetsInput): Observable<ListInstanceFleetsOutput> {
			return this.http.post<ListInstanceFleetsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListInstanceFleets?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides all available details about the instance groups in a cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.ListInstanceGroups
		 * @param {string} Marker Pagination token
		 * @return {ListInstanceGroupsOutput} Success
		 */
		ListInstanceGroups(Marker: string | null | undefined, requestBody: ListInstanceGroupsInput): Observable<ListInstanceGroupsOutput> {
			return this.http.post<ListInstanceGroupsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListInstanceGroups?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information for all active Amazon EC2 instances and Amazon EC2 instances terminated in the last 30 days, up to a maximum of 2,000. Amazon EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.
		 * Post #X-Amz-Target=ElasticMapReduce.ListInstances
		 * @param {string} Marker Pagination token
		 * @return {ListInstancesOutput} Success
		 */
		ListInstances(Marker: string | null | undefined, requestBody: ListInstancesInput): Observable<ListInstancesOutput> {
			return this.http.post<ListInstancesOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListInstances?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecutions</code> calls.
		 * Post #X-Amz-Target=ElasticMapReduce.ListNotebookExecutions
		 * @param {string} Marker Pagination token
		 * @return {ListNotebookExecutionsOutput} Success
		 */
		ListNotebookExecutions(Marker: string | null | undefined, requestBody: ListNotebookExecutionsInput): Observable<ListNotebookExecutionsOutput> {
			return this.http.post<ListNotebookExecutionsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves release labels of Amazon EMR services in the Region where the API is called.
		 * Post #X-Amz-Target=ElasticMapReduce.ListReleaseLabels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReleaseLabelsOutput} Success
		 */
		ListReleaseLabels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListReleaseLabelsInput): Observable<ListReleaseLabelsOutput> {
			return this.http.post<ListReleaseLabelsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListReleaseLabels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.
		 * Post #X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations
		 * @param {string} Marker Pagination token
		 * @return {ListSecurityConfigurationsOutput} Success
		 */
		ListSecurityConfigurations(Marker: string | null | undefined, requestBody: ListSecurityConfigurationsInput): Observable<ListSecurityConfigurationsOutput> {
			return this.http.post<ListSecurityConfigurationsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.
		 * Post #X-Amz-Target=ElasticMapReduce.ListSteps
		 * @param {string} Marker Pagination token
		 * @return {ListStepsOutput} Success
		 */
		ListSteps(Marker: string | null | undefined, requestBody: ListStepsInput): Observable<ListStepsOutput> {
			return this.http.post<ListStepsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListSteps?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.
		 * Post #X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings
		 * @param {string} Marker Pagination token
		 * @return {ListStudioSessionMappingsOutput} Success
		 */
		ListStudioSessionMappings(Marker: string | null | undefined, requestBody: ListStudioSessionMappingsInput): Observable<ListStudioSessionMappingsOutput> {
			return this.http.post<ListStudioSessionMappingsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.
		 * Post #X-Amz-Target=ElasticMapReduce.ListStudios
		 * @param {string} Marker Pagination token
		 * @return {ListStudiosOutput} Success
		 */
		ListStudios(Marker: string | null | undefined, requestBody: ListStudiosInput): Observable<ListStudiosOutput> {
			return this.http.post<ListStudiosOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListStudios?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of the instance types that Amazon EMR supports. You can filter the list by Amazon Web Services Region and Amazon EMR release.
		 * Post #X-Amz-Target=ElasticMapReduce.ListSupportedInstanceTypes
		 * @param {string} Marker Pagination token
		 * @return {ListSupportedInstanceTypesOutput} Success
		 */
		ListSupportedInstanceTypes(Marker: string | null | undefined, requestBody: ListSupportedInstanceTypesInput): Observable<ListSupportedInstanceTypesOutput> {
			return this.http.post<ListSupportedInstanceTypesOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ListSupportedInstanceTypes?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.
		 * Post #X-Amz-Target=ElasticMapReduce.ModifyCluster
		 * @return {ModifyClusterOutput} Success
		 */
		ModifyCluster(requestBody: ModifyClusterInput): Observable<ModifyClusterOutput> {
			return this.http.post<ModifyClusterOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ModifyCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.</p> </note>
		 * Post #X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet
		 * @return {void} Success
		 */
		ModifyInstanceFleet(requestBody: ModifyInstanceFleetInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.
		 * Post #X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups
		 * @return {void} Success
		 */
		ModifyInstanceGroups(requestBody: ModifyInstanceGroupsInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric.
		 * Post #X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy
		 * @return {PutAutoScalingPolicyOutput} Success
		 */
		PutAutoScalingPolicy(requestBody: PutAutoScalingPolicyInput): Observable<PutAutoScalingPolicyOutput> {
			return this.http.post<PutAutoScalingPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>Auto-termination is supported in Amazon EMR releases 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>
		 * Post #X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy
		 * @return {PutAutoTerminationPolicyOutput} Success
		 */
		PutAutoTerminationPolicy(requestBody: PutAutoTerminationPolicyInput): Observable<PutAutoTerminationPolicyOutput> {
			return this.http.post<PutAutoTerminationPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
		 * Post #X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration
		 * @return {PutBlockPublicAccessConfigurationOutput} Success
		 */
		PutBlockPublicAccessConfiguration(requestBody: PutBlockPublicAccessConfigurationInput): Observable<PutBlockPublicAccessConfigurationOutput> {
			return this.http.post<PutBlockPublicAccessConfigurationOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as Amazon EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
		 * Post #X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy
		 * @return {PutManagedScalingPolicyOutput} Success
		 */
		PutManagedScalingPolicy(requestBody: PutManagedScalingPolicyInput): Observable<PutManagedScalingPolicyOutput> {
			return this.http.post<PutManagedScalingPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an automatic scaling policy from a specified instance group within an Amazon EMR cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy
		 * @return {RemoveAutoScalingPolicyOutput} Success
		 */
		RemoveAutoScalingPolicy(requestBody: RemoveAutoScalingPolicyInput): Observable<RemoveAutoScalingPolicyOutput> {
			return this.http.post<RemoveAutoScalingPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an auto-termination policy from an Amazon EMR cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy
		 * @return {RemoveAutoTerminationPolicyOutput} Success
		 */
		RemoveAutoTerminationPolicy(requestBody: RemoveAutoTerminationPolicyInput): Observable<RemoveAutoTerminationPolicyOutput> {
			return this.http.post<RemoveAutoTerminationPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a managed scaling policy from a specified Amazon EMR cluster.
		 * Post #X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy
		 * @return {RemoveManagedScalingPolicyOutput} Success
		 */
		RemoveManagedScalingPolicy(requestBody: RemoveManagedScalingPolicyInput): Observable<RemoveManagedScalingPolicyOutput> {
			return this.http.post<RemoveManagedScalingPolicyOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>
		 * Post #X-Amz-Target=ElasticMapReduce.RemoveTags
		 * @return {RemoveTagsOutput} Success
		 */
		RemoveTags(requestBody: RemoveTagsInput): Observable<RemoveTagsOutput> {
			return this.http.post<RemoveTagsOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.RemoveTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>
		 * Post #X-Amz-Target=ElasticMapReduce.RunJobFlow
		 * @return {RunJobFlowOutput} Success
		 */
		RunJobFlow(requestBody: RunJobFlowInput): Observable<RunJobFlowOutput> {
			return this.http.post<RunJobFlowOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.RunJobFlow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>SetTerminationProtection locks a cluster (job flow) so the Amazon EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all Amazon EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
		 * Post #X-Amz-Target=ElasticMapReduce.SetTerminationProtection
		 * @return {void} Success
		 */
		SetTerminationProtection(requestBody: SetTerminationProtectionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.SetTerminationProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-IAM.html">Identity and Access Management for Amazon EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an Amazon EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform Amazon EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_IAM_emr-with-IAM.html#security_set_visible_to_all_users">Understanding the Amazon EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMR Management Guide</i>.</p>
		 * Post #X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers
		 * @return {void} Success
		 */
		SetVisibleToAllUsers(requestBody: SetVisibleToAllUsersInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a notebook execution.
		 * Post #X-Amz-Target=ElasticMapReduce.StartNotebookExecution
		 * @return {StartNotebookExecutionOutput} Success
		 */
		StartNotebookExecution(requestBody: StartNotebookExecutionInput): Observable<StartNotebookExecutionOutput> {
			return this.http.post<StartNotebookExecutionOutput>(this.baseUri + '#X-Amz-Target=ElasticMapReduce.StartNotebookExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a notebook execution.
		 * Post #X-Amz-Target=ElasticMapReduce.StopNotebookExecution
		 * @return {void} Success
		 */
		StopNotebookExecution(requestBody: StopNotebookExecutionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.StopNotebookExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the Amazon EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>
		 * Post #X-Amz-Target=ElasticMapReduce.TerminateJobFlows
		 * @return {void} Success
		 */
		TerminateJobFlows(requestBody: TerminateJobFlowsInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.TerminateJobFlows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.
		 * Post #X-Amz-Target=ElasticMapReduce.UpdateStudio
		 * @return {void} Success
		 */
		UpdateStudio(requestBody: UpdateStudioInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.UpdateStudio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the session policy attached to the user or group for the specified Amazon EMR Studio.
		 * Post #X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping
		 * @return {void} Success
		 */
		UpdateStudioSessionMapping(requestBody: UpdateStudioSessionMappingInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AddInstanceFleetX_Amz_Target { 'ElasticMapReduce.AddInstanceFleet' = 'ElasticMapReduce.AddInstanceFleet' }

	export enum AddInstanceGroupsX_Amz_Target { 'ElasticMapReduce.AddInstanceGroups' = 'ElasticMapReduce.AddInstanceGroups' }

	export enum AddJobFlowStepsX_Amz_Target { 'ElasticMapReduce.AddJobFlowSteps' = 'ElasticMapReduce.AddJobFlowSteps' }

	export enum AddTagsX_Amz_Target { 'ElasticMapReduce.AddTags' = 'ElasticMapReduce.AddTags' }

	export enum CancelStepsX_Amz_Target { 'ElasticMapReduce.CancelSteps' = 'ElasticMapReduce.CancelSteps' }

	export enum CreateSecurityConfigurationX_Amz_Target { 'ElasticMapReduce.CreateSecurityConfiguration' = 'ElasticMapReduce.CreateSecurityConfiguration' }

	export enum CreateStudioX_Amz_Target { 'ElasticMapReduce.CreateStudio' = 'ElasticMapReduce.CreateStudio' }

	export enum CreateStudioSessionMappingX_Amz_Target { 'ElasticMapReduce.CreateStudioSessionMapping' = 'ElasticMapReduce.CreateStudioSessionMapping' }

	export enum DeleteSecurityConfigurationX_Amz_Target { 'ElasticMapReduce.DeleteSecurityConfiguration' = 'ElasticMapReduce.DeleteSecurityConfiguration' }

	export enum DeleteStudioX_Amz_Target { 'ElasticMapReduce.DeleteStudio' = 'ElasticMapReduce.DeleteStudio' }

	export enum DeleteStudioSessionMappingX_Amz_Target { 'ElasticMapReduce.DeleteStudioSessionMapping' = 'ElasticMapReduce.DeleteStudioSessionMapping' }

	export enum DescribeClusterX_Amz_Target { 'ElasticMapReduce.DescribeCluster' = 'ElasticMapReduce.DescribeCluster' }

	export enum DescribeJobFlowsX_Amz_Target { 'ElasticMapReduce.DescribeJobFlows' = 'ElasticMapReduce.DescribeJobFlows' }

	export enum DescribeNotebookExecutionX_Amz_Target { 'ElasticMapReduce.DescribeNotebookExecution' = 'ElasticMapReduce.DescribeNotebookExecution' }

	export enum DescribeReleaseLabelX_Amz_Target { 'ElasticMapReduce.DescribeReleaseLabel' = 'ElasticMapReduce.DescribeReleaseLabel' }

	export enum DescribeSecurityConfigurationX_Amz_Target { 'ElasticMapReduce.DescribeSecurityConfiguration' = 'ElasticMapReduce.DescribeSecurityConfiguration' }

	export enum DescribeStepX_Amz_Target { 'ElasticMapReduce.DescribeStep' = 'ElasticMapReduce.DescribeStep' }

	export enum DescribeStudioX_Amz_Target { 'ElasticMapReduce.DescribeStudio' = 'ElasticMapReduce.DescribeStudio' }

	export enum GetAutoTerminationPolicyX_Amz_Target { 'ElasticMapReduce.GetAutoTerminationPolicy' = 'ElasticMapReduce.GetAutoTerminationPolicy' }

	export enum GetBlockPublicAccessConfigurationX_Amz_Target { 'ElasticMapReduce.GetBlockPublicAccessConfiguration' = 'ElasticMapReduce.GetBlockPublicAccessConfiguration' }

	export enum GetClusterSessionCredentialsX_Amz_Target { 'ElasticMapReduce.GetClusterSessionCredentials' = 'ElasticMapReduce.GetClusterSessionCredentials' }

	export enum GetManagedScalingPolicyX_Amz_Target { 'ElasticMapReduce.GetManagedScalingPolicy' = 'ElasticMapReduce.GetManagedScalingPolicy' }

	export enum GetStudioSessionMappingX_Amz_Target { 'ElasticMapReduce.GetStudioSessionMapping' = 'ElasticMapReduce.GetStudioSessionMapping' }

	export enum ListBootstrapActionsX_Amz_Target { 'ElasticMapReduce.ListBootstrapActions' = 'ElasticMapReduce.ListBootstrapActions' }

	export enum ListClustersX_Amz_Target { 'ElasticMapReduce.ListClusters' = 'ElasticMapReduce.ListClusters' }

	export enum ListInstanceFleetsX_Amz_Target { 'ElasticMapReduce.ListInstanceFleets' = 'ElasticMapReduce.ListInstanceFleets' }

	export enum ListInstanceGroupsX_Amz_Target { 'ElasticMapReduce.ListInstanceGroups' = 'ElasticMapReduce.ListInstanceGroups' }

	export enum ListInstancesX_Amz_Target { 'ElasticMapReduce.ListInstances' = 'ElasticMapReduce.ListInstances' }

	export enum ListNotebookExecutionsX_Amz_Target { 'ElasticMapReduce.ListNotebookExecutions' = 'ElasticMapReduce.ListNotebookExecutions' }

	export enum ListReleaseLabelsX_Amz_Target { 'ElasticMapReduce.ListReleaseLabels' = 'ElasticMapReduce.ListReleaseLabels' }

	export enum ListSecurityConfigurationsX_Amz_Target { 'ElasticMapReduce.ListSecurityConfigurations' = 'ElasticMapReduce.ListSecurityConfigurations' }

	export enum ListStepsX_Amz_Target { 'ElasticMapReduce.ListSteps' = 'ElasticMapReduce.ListSteps' }

	export enum ListStudioSessionMappingsX_Amz_Target { 'ElasticMapReduce.ListStudioSessionMappings' = 'ElasticMapReduce.ListStudioSessionMappings' }

	export enum ListStudiosX_Amz_Target { 'ElasticMapReduce.ListStudios' = 'ElasticMapReduce.ListStudios' }

	export enum ListSupportedInstanceTypesX_Amz_Target { 'ElasticMapReduce.ListSupportedInstanceTypes' = 'ElasticMapReduce.ListSupportedInstanceTypes' }

	export enum ModifyClusterX_Amz_Target { 'ElasticMapReduce.ModifyCluster' = 'ElasticMapReduce.ModifyCluster' }

	export enum ModifyInstanceFleetX_Amz_Target { 'ElasticMapReduce.ModifyInstanceFleet' = 'ElasticMapReduce.ModifyInstanceFleet' }

	export enum ModifyInstanceGroupsX_Amz_Target { 'ElasticMapReduce.ModifyInstanceGroups' = 'ElasticMapReduce.ModifyInstanceGroups' }

	export enum PutAutoScalingPolicyX_Amz_Target { 'ElasticMapReduce.PutAutoScalingPolicy' = 'ElasticMapReduce.PutAutoScalingPolicy' }

	export enum PutAutoTerminationPolicyX_Amz_Target { 'ElasticMapReduce.PutAutoTerminationPolicy' = 'ElasticMapReduce.PutAutoTerminationPolicy' }

	export enum PutBlockPublicAccessConfigurationX_Amz_Target { 'ElasticMapReduce.PutBlockPublicAccessConfiguration' = 'ElasticMapReduce.PutBlockPublicAccessConfiguration' }

	export enum PutManagedScalingPolicyX_Amz_Target { 'ElasticMapReduce.PutManagedScalingPolicy' = 'ElasticMapReduce.PutManagedScalingPolicy' }

	export enum RemoveAutoScalingPolicyX_Amz_Target { 'ElasticMapReduce.RemoveAutoScalingPolicy' = 'ElasticMapReduce.RemoveAutoScalingPolicy' }

	export enum RemoveAutoTerminationPolicyX_Amz_Target { 'ElasticMapReduce.RemoveAutoTerminationPolicy' = 'ElasticMapReduce.RemoveAutoTerminationPolicy' }

	export enum RemoveManagedScalingPolicyX_Amz_Target { 'ElasticMapReduce.RemoveManagedScalingPolicy' = 'ElasticMapReduce.RemoveManagedScalingPolicy' }

	export enum RemoveTagsX_Amz_Target { 'ElasticMapReduce.RemoveTags' = 'ElasticMapReduce.RemoveTags' }

	export enum RunJobFlowX_Amz_Target { 'ElasticMapReduce.RunJobFlow' = 'ElasticMapReduce.RunJobFlow' }

	export enum SetTerminationProtectionX_Amz_Target { 'ElasticMapReduce.SetTerminationProtection' = 'ElasticMapReduce.SetTerminationProtection' }

	export enum SetVisibleToAllUsersX_Amz_Target { 'ElasticMapReduce.SetVisibleToAllUsers' = 'ElasticMapReduce.SetVisibleToAllUsers' }

	export enum StartNotebookExecutionX_Amz_Target { 'ElasticMapReduce.StartNotebookExecution' = 'ElasticMapReduce.StartNotebookExecution' }

	export enum StopNotebookExecutionX_Amz_Target { 'ElasticMapReduce.StopNotebookExecution' = 'ElasticMapReduce.StopNotebookExecution' }

	export enum TerminateJobFlowsX_Amz_Target { 'ElasticMapReduce.TerminateJobFlows' = 'ElasticMapReduce.TerminateJobFlows' }

	export enum UpdateStudioX_Amz_Target { 'ElasticMapReduce.UpdateStudio' = 'ElasticMapReduce.UpdateStudio' }

	export enum UpdateStudioSessionMappingX_Amz_Target { 'ElasticMapReduce.UpdateStudioSessionMapping' = 'ElasticMapReduce.UpdateStudioSessionMapping' }

}

