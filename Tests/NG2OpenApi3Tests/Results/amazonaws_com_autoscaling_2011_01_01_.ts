import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ResourceContentionFault {
	}
	export interface ResourceContentionFaultFormProperties {
	}
	export function CreateResourceContentionFaultFormGroup() {
		return new FormGroup<ResourceContentionFaultFormProperties>({
		});

	}

	export interface ServiceLinkedRoleFailure {
	}
	export interface ServiceLinkedRoleFailureFormProperties {
	}
	export function CreateServiceLinkedRoleFailureFormGroup() {
		return new FormGroup<ServiceLinkedRoleFailureFormProperties>({
		});

	}

	export interface AttachLoadBalancerTargetGroupsResultType {
	}
	export interface AttachLoadBalancerTargetGroupsResultTypeFormProperties {
	}
	export function CreateAttachLoadBalancerTargetGroupsResultTypeFormGroup() {
		return new FormGroup<AttachLoadBalancerTargetGroupsResultTypeFormProperties>({
		});

	}

	export interface AttachLoadBalancersResultType {
	}
	export interface AttachLoadBalancersResultTypeFormProperties {
	}
	export function CreateAttachLoadBalancersResultTypeFormGroup() {
		return new FormGroup<AttachLoadBalancersResultTypeFormProperties>({
		});

	}

	export interface AttachTrafficSourcesResultType {
	}
	export interface AttachTrafficSourcesResultTypeFormProperties {
	}
	export function CreateAttachTrafficSourcesResultTypeFormGroup() {
		return new FormGroup<AttachTrafficSourcesResultTypeFormProperties>({
		});

	}


	/** Identifying information for a traffic source. */
	export interface TrafficSourceIdentifier {

		/** Required */
		Identifier: string;
		Type?: string;
	}

	/** Identifying information for a traffic source. */
	export interface TrafficSourceIdentifierFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateTrafficSourceIdentifierFormGroup() {
		return new FormGroup<TrafficSourceIdentifierFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteScheduledActionAnswer {
		FailedScheduledActions?: Array<FailedScheduledUpdateGroupActionRequest>;
	}
	export interface BatchDeleteScheduledActionAnswerFormProperties {
	}
	export function CreateBatchDeleteScheduledActionAnswerFormGroup() {
		return new FormGroup<BatchDeleteScheduledActionAnswerFormProperties>({
		});

	}


	/** Describes a scheduled action that could not be created, updated, or deleted. */
	export interface FailedScheduledUpdateGroupActionRequest {

		/** Required */
		ScheduledActionName: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes a scheduled action that could not be created, updated, or deleted. */
	export interface FailedScheduledUpdateGroupActionRequestFormProperties {

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedScheduledUpdateGroupActionRequestFormGroup() {
		return new FormGroup<FailedScheduledUpdateGroupActionRequestFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPutScheduledUpdateGroupActionAnswer {
		FailedScheduledUpdateGroupActions?: Array<FailedScheduledUpdateGroupActionRequest>;
	}
	export interface BatchPutScheduledUpdateGroupActionAnswerFormProperties {
	}
	export function CreateBatchPutScheduledUpdateGroupActionAnswerFormGroup() {
		return new FormGroup<BatchPutScheduledUpdateGroupActionAnswerFormProperties>({
		});

	}


	/** Describes information used for one or more scheduled scaling action updates in a <a>BatchPutScheduledUpdateGroupAction</a> operation. */
	export interface ScheduledUpdateGroupActionRequest {

		/** Required */
		ScheduledActionName: string;
		StartTime?: Date;
		EndTime?: Date;
		Recurrence?: string;
		MinSize?: number | null;
		MaxSize?: number | null;
		DesiredCapacity?: number | null;
		TimeZone?: string;
	}

	/** Describes information used for one or more scheduled scaling action updates in a <a>BatchPutScheduledUpdateGroupAction</a> operation. */
	export interface ScheduledUpdateGroupActionRequestFormProperties {

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Recurrence: FormControl<string | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		MaxSize: FormControl<number | null | undefined>,
		DesiredCapacity: FormControl<number | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateScheduledUpdateGroupActionRequestFormGroup() {
		return new FormGroup<ScheduledUpdateGroupActionRequestFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Recurrence: new FormControl<string | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			MaxSize: new FormControl<number | null | undefined>(undefined),
			DesiredCapacity: new FormControl<number | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AlreadyExistsFault {
	}
	export interface AlreadyExistsFaultFormProperties {
	}
	export function CreateAlreadyExistsFaultFormGroup() {
		return new FormGroup<AlreadyExistsFaultFormProperties>({
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

	export interface CancelInstanceRefreshAnswer {
		InstanceRefreshId?: string;
	}
	export interface CancelInstanceRefreshAnswerFormProperties {
		InstanceRefreshId: FormControl<string | null | undefined>,
	}
	export function CreateCancelInstanceRefreshAnswerFormGroup() {
		return new FormGroup<CancelInstanceRefreshAnswerFormProperties>({
			InstanceRefreshId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActiveInstanceRefreshNotFoundFault {
	}
	export interface ActiveInstanceRefreshNotFoundFaultFormProperties {
	}
	export function CreateActiveInstanceRefreshNotFoundFaultFormGroup() {
		return new FormGroup<ActiveInstanceRefreshNotFoundFaultFormProperties>({
		});

	}

	export interface CompleteLifecycleActionAnswer {
	}
	export interface CompleteLifecycleActionAnswerFormProperties {
	}
	export function CreateCompleteLifecycleActionAnswerFormGroup() {
		return new FormGroup<CompleteLifecycleActionAnswerFormProperties>({
		});

	}


	/** Use this structure to specify the launch templates and instance types (overrides) for a mixed instances policy. */
	export interface LaunchTemplate {
		LaunchTemplateSpecification?: LaunchTemplateSpecification;
		Overrides?: Array<LaunchTemplateOverrides>;
	}

	/** Use this structure to specify the launch templates and instance types (overrides) for a mixed instances policy. */
	export interface LaunchTemplateFormProperties {
	}
	export function CreateLaunchTemplateFormGroup() {
		return new FormGroup<LaunchTemplateFormProperties>({
		});

	}


	/** Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. */
	export interface LaunchTemplateSpecification {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}

	/** Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. */
	export interface LaunchTemplateSpecificationFormProperties {
		LaunchTemplateId: FormControl<string | null | undefined>,
		LaunchTemplateName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateLaunchTemplateSpecificationFormGroup() {
		return new FormGroup<LaunchTemplateSpecificationFormProperties>({
			LaunchTemplateId: new FormControl<string | null | undefined>(undefined),
			LaunchTemplateName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed instances policy:</p> <ul> <li> <p>Override the instance type that is specified in the launch template.</p> </li> <li> <p>Use multiple instance types.</p> </li> </ul> <p>Specify the instance types that you want, or define your instance requirements instead and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements. This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when fulfilling Spot and On-Demand capacities. You can view which instance types are matched before you apply the instance requirements to your Auto Scaling group.</p> <p>After you define your instance requirements, you don't have to keep updating these settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance requirements of the Auto Scaling group to determine whether a new EC2 instance type can be used.</p> */
	export interface LaunchTemplateOverrides {
		InstanceType?: string;
		WeightedCapacity?: string;
		LaunchTemplateSpecification?: LaunchTemplateSpecification;
		InstanceRequirements?: InstanceRequirements;
	}

	/** <p>Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed instances policy:</p> <ul> <li> <p>Override the instance type that is specified in the launch template.</p> </li> <li> <p>Use multiple instance types.</p> </li> </ul> <p>Specify the instance types that you want, or define your instance requirements instead and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements. This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when fulfilling Spot and On-Demand capacities. You can view which instance types are matched before you apply the instance requirements to your Auto Scaling group.</p> <p>After you define your instance requirements, you don't have to keep updating these settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance requirements of the Auto Scaling group to determine whether a new EC2 instance type can be used.</p> */
	export interface LaunchTemplateOverridesFormProperties {
		InstanceType: FormControl<string | null | undefined>,
		WeightedCapacity: FormControl<string | null | undefined>,
	}
	export function CreateLaunchTemplateOverridesFormGroup() {
		return new FormGroup<LaunchTemplateOverridesFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
			WeightedCapacity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The attributes for the instance types for a mixed instances policy. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.</p> <p>When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.</p> <p>To limit the list of instance types from which Amazon EC2 Auto Scaling can identify matching instance types, you can use one of the following parameters, but not both in the same request:</p> <ul> <li> <p> <code>AllowedInstanceTypes</code> - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.</p> </li> <li> <p> <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list, even if they match your specified attributes.</p> </li> </ul> <note> <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes are optional. Any unspecified optional attribute is set to its default.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For help determining which instance types match your attributes before you apply them to your Auto Scaling group, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> */
	export interface InstanceRequirements {

		/** Required */
		VCpuCount: VCpuCountRequest;

		/** Required */
		MemoryMiB: MemoryMiBRequest;
		CpuManufacturers?: Array<CpuManufacturer>;
		MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
		ExcludedInstanceTypes?: Array<string>;
		InstanceGenerations?: Array<InstanceGeneration>;
		SpotMaxPricePercentageOverLowestPrice?: number | null;
		OnDemandMaxPricePercentageOverLowestPrice?: number | null;
		BareMetal?: BareMetal;
		BurstablePerformance?: BareMetal;
		RequireHibernateSupport?: boolean | null;
		NetworkInterfaceCount?: NetworkInterfaceCountRequest;
		LocalStorage?: BareMetal;
		LocalStorageTypes?: Array<LocalStorageType>;
		TotalLocalStorageGB?: TotalLocalStorageGBRequest;
		BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
		AcceleratorTypes?: Array<AcceleratorType>;
		AcceleratorCount?: AcceleratorCountRequest;
		AcceleratorManufacturers?: Array<AcceleratorManufacturer>;
		AcceleratorNames?: Array<AcceleratorName>;
		AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
		NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
		AllowedInstanceTypes?: Array<string>;
	}

	/** <p>The attributes for the instance types for a mixed instances policy. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.</p> <p>When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.</p> <p>To limit the list of instance types from which Amazon EC2 Auto Scaling can identify matching instance types, you can use one of the following parameters, but not both in the same request:</p> <ul> <li> <p> <code>AllowedInstanceTypes</code> - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.</p> </li> <li> <p> <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list, even if they match your specified attributes.</p> </li> </ul> <note> <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes are optional. Any unspecified optional attribute is set to its default.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For help determining which instance types match your attributes before you apply them to your Auto Scaling group, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> */
	export interface InstanceRequirementsFormProperties {
		SpotMaxPricePercentageOverLowestPrice: FormControl<number | null | undefined>,
		OnDemandMaxPricePercentageOverLowestPrice: FormControl<number | null | undefined>,
		BareMetal: FormControl<BareMetal | null | undefined>,
		BurstablePerformance: FormControl<BareMetal | null | undefined>,
		RequireHibernateSupport: FormControl<boolean | null | undefined>,
		LocalStorage: FormControl<BareMetal | null | undefined>,
	}
	export function CreateInstanceRequirementsFormGroup() {
		return new FormGroup<InstanceRequirementsFormProperties>({
			SpotMaxPricePercentageOverLowestPrice: new FormControl<number | null | undefined>(undefined),
			OnDemandMaxPricePercentageOverLowestPrice: new FormControl<number | null | undefined>(undefined),
			BareMetal: new FormControl<BareMetal | null | undefined>(undefined),
			BurstablePerformance: new FormControl<BareMetal | null | undefined>(undefined),
			RequireHibernateSupport: new FormControl<boolean | null | undefined>(undefined),
			LocalStorage: new FormControl<BareMetal | null | undefined>(undefined),
		});

	}


	/** Specifies the minimum and maximum for the <code>VCpuCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface VCpuCountRequest {

		/** Required */
		Min: number;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>VCpuCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface VCpuCountRequestFormProperties {

		/** Required */
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateVCpuCountRequestFormGroup() {
		return new FormGroup<VCpuCountRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the minimum and maximum for the <code>MemoryMiB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface MemoryMiBRequest {

		/** Required */
		Min: number;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>MemoryMiB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface MemoryMiBRequestFormProperties {

		/** Required */
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateMemoryMiBRequestFormGroup() {
		return new FormGroup<MemoryMiBRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CpuManufacturer { intel = 'intel', amd = 'amd', 'amazon-web-services' = 'amazon-web-services' }


	/** Specifies the minimum and maximum for the <code>MemoryGiBPerVCpu</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface MemoryGiBPerVCpuRequest {
		Min?: number | null;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>MemoryGiBPerVCpu</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface MemoryGiBPerVCpuRequestFormProperties {
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateMemoryGiBPerVCpuRequestFormGroup() {
		return new FormGroup<MemoryGiBPerVCpuRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceGeneration { current = 'current', previous = 'previous' }

	export enum BareMetal { included = 'included', excluded = 'excluded', required = 'required' }


	/** Specifies the minimum and maximum for the <code>NetworkInterfaceCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface NetworkInterfaceCountRequest {
		Min?: number | null;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>NetworkInterfaceCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface NetworkInterfaceCountRequestFormProperties {
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateNetworkInterfaceCountRequestFormGroup() {
		return new FormGroup<NetworkInterfaceCountRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LocalStorageType { hdd = 'hdd', ssd = 'ssd' }


	/** Specifies the minimum and maximum for the <code>TotalLocalStorageGB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface TotalLocalStorageGBRequest {
		Min?: number | null;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>TotalLocalStorageGB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface TotalLocalStorageGBRequestFormProperties {
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateTotalLocalStorageGBRequestFormGroup() {
		return new FormGroup<TotalLocalStorageGBRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the minimum and maximum for the <code>BaselineEbsBandwidthMbps</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface BaselineEbsBandwidthMbpsRequest {
		Min?: number | null;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>BaselineEbsBandwidthMbps</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface BaselineEbsBandwidthMbpsRequestFormProperties {
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateBaselineEbsBandwidthMbpsRequestFormGroup() {
		return new FormGroup<BaselineEbsBandwidthMbpsRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AcceleratorType { gpu = 'gpu', fpga = 'fpga', inference = 'inference' }


	/** Specifies the minimum and maximum for the <code>AcceleratorCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface AcceleratorCountRequest {
		Min?: number | null;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>AcceleratorCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface AcceleratorCountRequestFormProperties {
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateAcceleratorCountRequestFormGroup() {
		return new FormGroup<AcceleratorCountRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AcceleratorManufacturer { nvidia = 'nvidia', amd = 'amd', 'amazon-web-services' = 'amazon-web-services', xilinx = 'xilinx' }

	export enum AcceleratorName { a100 = 'a100', v100 = 'v100', k80 = 'k80', t4 = 't4', m60 = 'm60', 'radeon-pro-v520' = 'radeon-pro-v520', vu9p = 'vu9p' }


	/** Specifies the minimum and maximum for the <code>AcceleratorTotalMemoryMiB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface AcceleratorTotalMemoryMiBRequest {
		Min?: number | null;
		Max?: number | null;
	}

	/** Specifies the minimum and maximum for the <code>AcceleratorTotalMemoryMiB</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group. */
	export interface AcceleratorTotalMemoryMiBRequestFormProperties {
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateAcceleratorTotalMemoryMiBRequestFormGroup() {
		return new FormGroup<AcceleratorTotalMemoryMiBRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Specifies the minimum and maximum for the <code>NetworkBandwidthGbps</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p> <note> <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note> */
	export interface NetworkBandwidthGbpsRequest {
		Min?: number | null;
		Max?: number | null;
	}

	/** <p>Specifies the minimum and maximum for the <code>NetworkBandwidthGbps</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p> <note> <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note> */
	export interface NetworkBandwidthGbpsRequestFormProperties {
		Min: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateNetworkBandwidthGbpsRequestFormGroup() {
		return new FormGroup<NetworkBandwidthGbpsRequestFormProperties>({
			Min: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use this structure to specify the distribution of On-Demand Instances and Spot Instances and the allocation strategies used to fulfill On-Demand and Spot capacities for a mixed instances policy. */
	export interface InstancesDistribution {
		OnDemandAllocationStrategy?: string;
		OnDemandBaseCapacity?: number | null;
		OnDemandPercentageAboveBaseCapacity?: number | null;
		SpotAllocationStrategy?: string;
		SpotInstancePools?: number | null;
		SpotMaxPrice?: string;
	}

	/** Use this structure to specify the distribution of On-Demand Instances and Spot Instances and the allocation strategies used to fulfill On-Demand and Spot capacities for a mixed instances policy. */
	export interface InstancesDistributionFormProperties {
		OnDemandAllocationStrategy: FormControl<string | null | undefined>,
		OnDemandBaseCapacity: FormControl<number | null | undefined>,
		OnDemandPercentageAboveBaseCapacity: FormControl<number | null | undefined>,
		SpotAllocationStrategy: FormControl<string | null | undefined>,
		SpotInstancePools: FormControl<number | null | undefined>,
		SpotMaxPrice: FormControl<string | null | undefined>,
	}
	export function CreateInstancesDistributionFormGroup() {
		return new FormGroup<InstancesDistributionFormProperties>({
			OnDemandAllocationStrategy: new FormControl<string | null | undefined>(undefined),
			OnDemandBaseCapacity: new FormControl<number | null | undefined>(undefined),
			OnDemandPercentageAboveBaseCapacity: new FormControl<number | null | undefined>(undefined),
			SpotAllocationStrategy: new FormControl<string | null | undefined>(undefined),
			SpotInstancePools: new FormControl<number | null | undefined>(undefined),
			SpotMaxPrice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes information used to specify a lifecycle hook for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface LifecycleHookSpecification {

		/** Required */
		LifecycleHookName: string;

		/** Required */
		LifecycleTransition: string;
		NotificationMetadata?: string;
		HeartbeatTimeout?: number | null;
		DefaultResult?: string;
		NotificationTargetARN?: string;
		RoleARN?: string;
	}

	/** <p>Describes information used to specify a lifecycle hook for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface LifecycleHookSpecificationFormProperties {

		/** Required */
		LifecycleHookName: FormControl<string | null | undefined>,

		/** Required */
		LifecycleTransition: FormControl<string | null | undefined>,
		NotificationMetadata: FormControl<string | null | undefined>,
		HeartbeatTimeout: FormControl<number | null | undefined>,
		DefaultResult: FormControl<string | null | undefined>,
		NotificationTargetARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateLifecycleHookSpecificationFormGroup() {
		return new FormGroup<LifecycleHookSpecificationFormProperties>({
			LifecycleHookName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifecycleTransition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NotificationMetadata: new FormControl<string | null | undefined>(undefined),
			HeartbeatTimeout: new FormControl<number | null | undefined>(undefined),
			DefaultResult: new FormControl<string | null | undefined>(undefined),
			NotificationTargetARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a tag for an Auto Scaling group. */
	export interface Tag {
		ResourceId?: string;
		ResourceType?: string;

		/** Required */
		Key: string;
		Value?: string;
		PropagateAtLaunch?: boolean | null;
	}

	/** Describes a tag for an Auto Scaling group. */
	export interface TagFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		PropagateAtLaunch: FormControl<boolean | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
			PropagateAtLaunch: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a block device mapping. */
	export interface BlockDeviceMapping {
		VirtualName?: string;

		/** Required */
		DeviceName: string;
		Ebs?: Ebs;
		NoDevice?: boolean | null;
	}

	/** Describes a block device mapping. */
	export interface BlockDeviceMappingFormProperties {
		VirtualName: FormControl<string | null | undefined>,

		/** Required */
		DeviceName: FormControl<string | null | undefined>,
		NoDevice: FormControl<boolean | null | undefined>,
	}
	export function CreateBlockDeviceMappingFormGroup() {
		return new FormGroup<BlockDeviceMappingFormProperties>({
			VirtualName: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NoDevice: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes information used to set up an Amazon EBS volume specified in a block device mapping. */
	export interface Ebs {
		SnapshotId?: string;
		VolumeSize?: number | null;
		VolumeType?: string;
		DeleteOnTermination?: boolean | null;
		Iops?: number | null;
		Encrypted?: boolean | null;
		Throughput?: number | null;
	}

	/** Describes information used to set up an Amazon EBS volume specified in a block device mapping. */
	export interface EbsFormProperties {
		SnapshotId: FormControl<string | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		DeleteOnTermination: FormControl<boolean | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
	}
	export function CreateEbsFormGroup() {
		return new FormGroup<EbsFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			Throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceMetadataHttpTokensState { optional = 'optional', required = 'required' }

	export enum InstanceMetadataEndpointState { disabled = 'disabled', enabled = 'enabled' }

	export interface ResourceInUseFault {
	}
	export interface ResourceInUseFaultFormProperties {
	}
	export function CreateResourceInUseFaultFormGroup() {
		return new FormGroup<ResourceInUseFaultFormProperties>({
		});

	}

	export interface ScalingActivityInProgressFault {
	}
	export interface ScalingActivityInProgressFaultFormProperties {
	}
	export function CreateScalingActivityInProgressFaultFormGroup() {
		return new FormGroup<ScalingActivityInProgressFaultFormProperties>({
		});

	}

	export interface DeleteLifecycleHookAnswer {
	}
	export interface DeleteLifecycleHookAnswerFormProperties {
	}
	export function CreateDeleteLifecycleHookAnswerFormGroup() {
		return new FormGroup<DeleteLifecycleHookAnswerFormProperties>({
		});

	}

	export interface DeleteWarmPoolAnswer {
	}
	export interface DeleteWarmPoolAnswerFormProperties {
	}
	export function CreateDeleteWarmPoolAnswerFormGroup() {
		return new FormGroup<DeleteWarmPoolAnswerFormProperties>({
		});

	}

	export interface DescribeAccountLimitsAnswer {
		MaxNumberOfAutoScalingGroups?: number | null;
		MaxNumberOfLaunchConfigurations?: number | null;
		NumberOfAutoScalingGroups?: number | null;
		NumberOfLaunchConfigurations?: number | null;
	}
	export interface DescribeAccountLimitsAnswerFormProperties {
		MaxNumberOfAutoScalingGroups: FormControl<number | null | undefined>,
		MaxNumberOfLaunchConfigurations: FormControl<number | null | undefined>,
		NumberOfAutoScalingGroups: FormControl<number | null | undefined>,
		NumberOfLaunchConfigurations: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccountLimitsAnswerFormGroup() {
		return new FormGroup<DescribeAccountLimitsAnswerFormProperties>({
			MaxNumberOfAutoScalingGroups: new FormControl<number | null | undefined>(undefined),
			MaxNumberOfLaunchConfigurations: new FormControl<number | null | undefined>(undefined),
			NumberOfAutoScalingGroups: new FormControl<number | null | undefined>(undefined),
			NumberOfLaunchConfigurations: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAdjustmentTypesAnswer {
		AdjustmentTypes?: Array<AdjustmentType>;
	}
	export interface DescribeAdjustmentTypesAnswerFormProperties {
	}
	export function CreateDescribeAdjustmentTypesAnswerFormGroup() {
		return new FormGroup<DescribeAdjustmentTypesAnswerFormProperties>({
		});

	}


	/** Describes a policy adjustment type. */
	export interface AdjustmentType {
		AdjustmentType1?: string;
	}

	/** Describes a policy adjustment type. */
	export interface AdjustmentTypeFormProperties {
		AdjustmentType1: FormControl<string | null | undefined>,
	}
	export function CreateAdjustmentTypeFormGroup() {
		return new FormGroup<AdjustmentTypeFormProperties>({
			AdjustmentType1: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutoScalingGroupsType {

		/** Required */
		AutoScalingGroups: Array<AutoScalingGroup>;
		NextToken?: string;
	}
	export interface AutoScalingGroupsTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingGroupsTypeFormGroup() {
		return new FormGroup<AutoScalingGroupsTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Auto Scaling group. */
	export interface AutoScalingGroup {

		/** Required */
		AutoScalingGroupName: string;
		AutoScalingGroupARN?: string;
		LaunchConfigurationName?: string;
		LaunchTemplate?: LaunchTemplateSpecification;
		MixedInstancesPolicy?: MixedInstancesPolicy;

		/** Required */
		MinSize: number;

		/** Required */
		MaxSize: number;

		/** Required */
		DesiredCapacity: number;
		PredictedCapacity?: number | null;

		/** Required */
		DefaultCooldown: number;

		/** Required */
		AvailabilityZones: Array<string>;
		LoadBalancerNames?: Array<string>;
		TargetGroupARNs?: Array<string>;

		/** Required */
		HealthCheckType: string;
		HealthCheckGracePeriod?: number | null;
		Instances?: Array<Instance>;

		/** Required */
		CreatedTime: Date;
		SuspendedProcesses?: Array<SuspendedProcess>;
		PlacementGroup?: string;
		VPCZoneIdentifier?: string;
		EnabledMetrics?: Array<EnabledMetric>;
		Status?: string;
		Tags?: Array<TagDescription>;
		TerminationPolicies?: Array<string>;
		NewInstancesProtectedFromScaleIn?: boolean | null;
		ServiceLinkedRoleARN?: string;
		MaxInstanceLifetime?: number | null;
		CapacityRebalance?: boolean | null;
		WarmPoolConfiguration?: WarmPoolConfiguration;
		WarmPoolSize?: number | null;
		Context?: string;
		DesiredCapacityType?: string;
		DefaultInstanceWarmup?: number | null;
		TrafficSources?: Array<TrafficSourceIdentifier>;
	}

	/** Describes an Auto Scaling group. */
	export interface AutoScalingGroupFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		AutoScalingGroupARN: FormControl<string | null | undefined>,
		LaunchConfigurationName: FormControl<string | null | undefined>,

		/** Required */
		MinSize: FormControl<number | null | undefined>,

		/** Required */
		MaxSize: FormControl<number | null | undefined>,

		/** Required */
		DesiredCapacity: FormControl<number | null | undefined>,
		PredictedCapacity: FormControl<number | null | undefined>,

		/** Required */
		DefaultCooldown: FormControl<number | null | undefined>,

		/** Required */
		HealthCheckType: FormControl<string | null | undefined>,
		HealthCheckGracePeriod: FormControl<number | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,
		PlacementGroup: FormControl<string | null | undefined>,
		VPCZoneIdentifier: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		NewInstancesProtectedFromScaleIn: FormControl<boolean | null | undefined>,
		ServiceLinkedRoleARN: FormControl<string | null | undefined>,
		MaxInstanceLifetime: FormControl<number | null | undefined>,
		CapacityRebalance: FormControl<boolean | null | undefined>,
		WarmPoolSize: FormControl<number | null | undefined>,
		Context: FormControl<string | null | undefined>,
		DesiredCapacityType: FormControl<string | null | undefined>,
		DefaultInstanceWarmup: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingGroupFormGroup() {
		return new FormGroup<AutoScalingGroupFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingGroupARN: new FormControl<string | null | undefined>(undefined),
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DesiredCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PredictedCapacity: new FormControl<number | null | undefined>(undefined),
			DefaultCooldown: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			HealthCheckType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HealthCheckGracePeriod: new FormControl<number | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			PlacementGroup: new FormControl<string | null | undefined>(undefined),
			VPCZoneIdentifier: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			NewInstancesProtectedFromScaleIn: new FormControl<boolean | null | undefined>(undefined),
			ServiceLinkedRoleARN: new FormControl<string | null | undefined>(undefined),
			MaxInstanceLifetime: new FormControl<number | null | undefined>(undefined),
			CapacityRebalance: new FormControl<boolean | null | undefined>(undefined),
			WarmPoolSize: new FormControl<number | null | undefined>(undefined),
			Context: new FormControl<string | null | undefined>(undefined),
			DesiredCapacityType: new FormControl<string | null | undefined>(undefined),
			DefaultInstanceWarmup: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Use this structure to launch multiple instance types and On-Demand Instances and Spot Instances within a single Auto Scaling group.</p> <p>A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch instances and help optimize your costs. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface MixedInstancesPolicy {
		LaunchTemplate?: LaunchTemplate;
		InstancesDistribution?: InstancesDistribution;
	}

	/** <p>Use this structure to launch multiple instance types and On-Demand Instances and Spot Instances within a single Auto Scaling group.</p> <p>A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch instances and help optimize your costs. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface MixedInstancesPolicyFormProperties {
	}
	export function CreateMixedInstancesPolicyFormGroup() {
		return new FormGroup<MixedInstancesPolicyFormProperties>({
		});

	}


	/** Describes an EC2 instance. */
	export interface Instance {

		/** Required */
		InstanceId: string;
		InstanceType?: string;

		/** Required */
		AvailabilityZone: string;

		/** Required */
		LifecycleState: LifecycleState;

		/** Required */
		HealthStatus: string;
		LaunchConfigurationName?: string;
		LaunchTemplate?: LaunchTemplateSpecification;

		/** Required */
		ProtectedFromScaleIn: boolean;
		WeightedCapacity?: string;
	}

	/** Describes an EC2 instance. */
	export interface InstanceFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,

		/** Required */
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Required */
		LifecycleState: FormControl<LifecycleState | null | undefined>,

		/** Required */
		HealthStatus: FormControl<string | null | undefined>,
		LaunchConfigurationName: FormControl<string | null | undefined>,

		/** Required */
		ProtectedFromScaleIn: FormControl<boolean | null | undefined>,
		WeightedCapacity: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifecycleState: new FormControl<LifecycleState | null | undefined>(undefined, [Validators.required]),
			HealthStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined),
			ProtectedFromScaleIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WeightedCapacity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LifecycleState { Pending = 'Pending', 'Pending:Wait' = 'Pending:Wait', 'Pending:Proceed' = 'Pending:Proceed', Quarantined = 'Quarantined', InService = 'InService', Terminating = 'Terminating', 'Terminating:Wait' = 'Terminating:Wait', 'Terminating:Proceed' = 'Terminating:Proceed', Terminated = 'Terminated', Detaching = 'Detaching', Detached = 'Detached', EnteringStandby = 'EnteringStandby', Standby = 'Standby', 'Warmed:Pending' = 'Warmed:Pending', 'Warmed:Pending:Wait' = 'Warmed:Pending:Wait', 'Warmed:Pending:Proceed' = 'Warmed:Pending:Proceed', 'Warmed:Terminating' = 'Warmed:Terminating', 'Warmed:Terminating:Wait' = 'Warmed:Terminating:Wait', 'Warmed:Terminating:Proceed' = 'Warmed:Terminating:Proceed', 'Warmed:Terminated' = 'Warmed:Terminated', 'Warmed:Stopped' = 'Warmed:Stopped', 'Warmed:Running' = 'Warmed:Running', 'Warmed:Hibernated' = 'Warmed:Hibernated' }


	/** <p>Describes an auto scaling process that has been suspended.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface SuspendedProcess {
		ProcessName?: string;
		SuspensionReason?: string;
	}

	/** <p>Describes an auto scaling process that has been suspended.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface SuspendedProcessFormProperties {
		ProcessName: FormControl<string | null | undefined>,
		SuspensionReason: FormControl<string | null | undefined>,
	}
	export function CreateSuspendedProcessFormGroup() {
		return new FormGroup<SuspendedProcessFormProperties>({
			ProcessName: new FormControl<string | null | undefined>(undefined),
			SuspensionReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an enabled Auto Scaling group metric. */
	export interface EnabledMetric {
		Metric?: string;
		Granularity?: string;
	}

	/** Describes an enabled Auto Scaling group metric. */
	export interface EnabledMetricFormProperties {
		Metric: FormControl<string | null | undefined>,
		Granularity: FormControl<string | null | undefined>,
	}
	export function CreateEnabledMetricFormGroup() {
		return new FormGroup<EnabledMetricFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined),
			Granularity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a tag for an Auto Scaling group. */
	export interface TagDescription {
		ResourceId?: string;
		ResourceType?: string;
		Key?: string;
		Value?: string;
		PropagateAtLaunch?: boolean | null;
	}

	/** Describes a tag for an Auto Scaling group. */
	export interface TagDescriptionFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		PropagateAtLaunch: FormControl<boolean | null | undefined>,
	}
	export function CreateTagDescriptionFormGroup() {
		return new FormGroup<TagDescriptionFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			PropagateAtLaunch: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a warm pool configuration.  */
	export interface WarmPoolConfiguration {
		MaxGroupPreparedCapacity?: number | null;
		MinSize?: number | null;
		PoolState?: WarmPoolState;
		Status?: WarmPoolStatus;
		InstanceReusePolicy?: InstanceReusePolicy;
	}

	/** Describes a warm pool configuration.  */
	export interface WarmPoolConfigurationFormProperties {
		MaxGroupPreparedCapacity: FormControl<number | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		PoolState: FormControl<WarmPoolState | null | undefined>,
		Status: FormControl<WarmPoolStatus | null | undefined>,
	}
	export function CreateWarmPoolConfigurationFormGroup() {
		return new FormGroup<WarmPoolConfigurationFormProperties>({
			MaxGroupPreparedCapacity: new FormControl<number | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			PoolState: new FormControl<WarmPoolState | null | undefined>(undefined),
			Status: new FormControl<WarmPoolStatus | null | undefined>(undefined),
		});

	}

	export enum WarmPoolState { Stopped = 'Stopped', Running = 'Running', Hibernated = 'Hibernated' }

	export enum WarmPoolStatus { PendingDelete = 'PendingDelete' }


	/** <p>Describes an instance reuse policy for a warm pool. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface InstanceReusePolicy {
		ReuseOnScaleIn?: boolean | null;
	}

	/** <p>Describes an instance reuse policy for a warm pool. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface InstanceReusePolicyFormProperties {
		ReuseOnScaleIn: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceReusePolicyFormGroup() {
		return new FormGroup<InstanceReusePolicyFormProperties>({
			ReuseOnScaleIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes a filter that is used to return a more specific list of results from a describe operation.</p> <p>If you specify multiple filters, the filters are automatically logically joined with an <code>AND</code>, and the request returns only the results that match all of the specified filters. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	/** <p>Describes a filter that is used to return a more specific list of results from a describe operation.</p> <p>If you specify multiple filters, the filters are automatically logically joined with an <code>AND</code>, and the request returns only the results that match all of the specified filters. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface FilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNextToken {
	}
	export interface InvalidNextTokenFormProperties {
	}
	export function CreateInvalidNextTokenFormGroup() {
		return new FormGroup<InvalidNextTokenFormProperties>({
		});

	}

	export interface AutoScalingInstancesType {
		AutoScalingInstances?: Array<AutoScalingInstanceDetails>;
		NextToken?: string;
	}
	export interface AutoScalingInstancesTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingInstancesTypeFormGroup() {
		return new FormGroup<AutoScalingInstancesTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an EC2 instance associated with an Auto Scaling group. */
	export interface AutoScalingInstanceDetails {

		/** Required */
		InstanceId: string;
		InstanceType?: string;

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		AvailabilityZone: string;

		/** Required */
		LifecycleState: string;

		/** Required */
		HealthStatus: string;
		LaunchConfigurationName?: string;
		LaunchTemplate?: LaunchTemplateSpecification;

		/** Required */
		ProtectedFromScaleIn: boolean;
		WeightedCapacity?: string;
	}

	/** Describes an EC2 instance associated with an Auto Scaling group. */
	export interface AutoScalingInstanceDetailsFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Required */
		LifecycleState: FormControl<string | null | undefined>,

		/** Required */
		HealthStatus: FormControl<string | null | undefined>,
		LaunchConfigurationName: FormControl<string | null | undefined>,

		/** Required */
		ProtectedFromScaleIn: FormControl<boolean | null | undefined>,
		WeightedCapacity: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingInstanceDetailsFormGroup() {
		return new FormGroup<AutoScalingInstanceDetailsFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifecycleState: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HealthStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined),
			ProtectedFromScaleIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WeightedCapacity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAutoScalingNotificationTypesAnswer {
		AutoScalingNotificationTypes?: Array<string>;
	}
	export interface DescribeAutoScalingNotificationTypesAnswerFormProperties {
	}
	export function CreateDescribeAutoScalingNotificationTypesAnswerFormGroup() {
		return new FormGroup<DescribeAutoScalingNotificationTypesAnswerFormProperties>({
		});

	}

	export interface DescribeInstanceRefreshesAnswer {
		InstanceRefreshes?: Array<InstanceRefresh>;
		NextToken?: string;
	}
	export interface DescribeInstanceRefreshesAnswerFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceRefreshesAnswerFormGroup() {
		return new FormGroup<DescribeInstanceRefreshesAnswerFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an instance refresh for an Auto Scaling group.  */
	export interface InstanceRefresh {
		InstanceRefreshId?: string;
		AutoScalingGroupName?: string;
		Status?: InstanceRefreshStatus;
		StatusReason?: string;
		StartTime?: Date;
		EndTime?: Date;
		PercentageComplete?: number | null;
		InstancesToUpdate?: number | null;
		ProgressDetails?: InstanceRefreshProgressDetails;
		Preferences?: RefreshPreferences;
		DesiredConfiguration?: DesiredConfiguration;
		RollbackDetails?: RollbackDetails;
	}

	/** Describes an instance refresh for an Auto Scaling group.  */
	export interface InstanceRefreshFormProperties {
		InstanceRefreshId: FormControl<string | null | undefined>,
		AutoScalingGroupName: FormControl<string | null | undefined>,
		Status: FormControl<InstanceRefreshStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		PercentageComplete: FormControl<number | null | undefined>,
		InstancesToUpdate: FormControl<number | null | undefined>,
	}
	export function CreateInstanceRefreshFormGroup() {
		return new FormGroup<InstanceRefreshFormProperties>({
			InstanceRefreshId: new FormControl<string | null | undefined>(undefined),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InstanceRefreshStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			PercentageComplete: new FormControl<number | null | undefined>(undefined),
			InstancesToUpdate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceRefreshStatus { Pending = 'Pending', InProgress = 'InProgress', Successful = 'Successful', Failed = 'Failed', Cancelling = 'Cancelling', Cancelled = 'Cancelled', RollbackInProgress = 'RollbackInProgress', RollbackFailed = 'RollbackFailed', RollbackSuccessful = 'RollbackSuccessful' }


	/** Reports progress on replacing instances in an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool). */
	export interface InstanceRefreshProgressDetails {
		LivePoolProgress?: InstanceRefreshLivePoolProgress;
		WarmPoolProgress?: InstanceRefreshWarmPoolProgress;
	}

	/** Reports progress on replacing instances in an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool). */
	export interface InstanceRefreshProgressDetailsFormProperties {
	}
	export function CreateInstanceRefreshProgressDetailsFormGroup() {
		return new FormGroup<InstanceRefreshProgressDetailsFormProperties>({
		});

	}


	/** Reports progress on replacing instances that are in the Auto Scaling group. */
	export interface InstanceRefreshLivePoolProgress {
		PercentageComplete?: number | null;
		InstancesToUpdate?: number | null;
	}

	/** Reports progress on replacing instances that are in the Auto Scaling group. */
	export interface InstanceRefreshLivePoolProgressFormProperties {
		PercentageComplete: FormControl<number | null | undefined>,
		InstancesToUpdate: FormControl<number | null | undefined>,
	}
	export function CreateInstanceRefreshLivePoolProgressFormGroup() {
		return new FormGroup<InstanceRefreshLivePoolProgressFormProperties>({
			PercentageComplete: new FormControl<number | null | undefined>(undefined),
			InstancesToUpdate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Reports progress on replacing instances that are in the warm pool. */
	export interface InstanceRefreshWarmPoolProgress {
		PercentageComplete?: number | null;
		InstancesToUpdate?: number | null;
	}

	/** Reports progress on replacing instances that are in the warm pool. */
	export interface InstanceRefreshWarmPoolProgressFormProperties {
		PercentageComplete: FormControl<number | null | undefined>,
		InstancesToUpdate: FormControl<number | null | undefined>,
	}
	export function CreateInstanceRefreshWarmPoolProgressFormGroup() {
		return new FormGroup<InstanceRefreshWarmPoolProgressFormProperties>({
			PercentageComplete: new FormControl<number | null | undefined>(undefined),
			InstancesToUpdate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the preferences for an instance refresh. */
	export interface RefreshPreferences {
		MinHealthyPercentage?: number | null;
		InstanceWarmup?: number | null;
		CheckpointPercentages?: Array<number> | null;
		CheckpointDelay?: number | null;
		SkipMatching?: boolean | null;
		AutoRollback?: boolean | null;
		ScaleInProtectedInstances?: ScaleInProtectedInstances;
		StandbyInstances?: StandbyInstances;
		AlarmSpecification?: AlarmSpecification;
	}

	/** Describes the preferences for an instance refresh. */
	export interface RefreshPreferencesFormProperties {
		MinHealthyPercentage: FormControl<number | null | undefined>,
		InstanceWarmup: FormControl<number | null | undefined>,
		CheckpointDelay: FormControl<number | null | undefined>,
		SkipMatching: FormControl<boolean | null | undefined>,
		AutoRollback: FormControl<boolean | null | undefined>,
		ScaleInProtectedInstances: FormControl<ScaleInProtectedInstances | null | undefined>,
		StandbyInstances: FormControl<StandbyInstances | null | undefined>,
	}
	export function CreateRefreshPreferencesFormGroup() {
		return new FormGroup<RefreshPreferencesFormProperties>({
			MinHealthyPercentage: new FormControl<number | null | undefined>(undefined),
			InstanceWarmup: new FormControl<number | null | undefined>(undefined),
			CheckpointDelay: new FormControl<number | null | undefined>(undefined),
			SkipMatching: new FormControl<boolean | null | undefined>(undefined),
			AutoRollback: new FormControl<boolean | null | undefined>(undefined),
			ScaleInProtectedInstances: new FormControl<ScaleInProtectedInstances | null | undefined>(undefined),
			StandbyInstances: new FormControl<StandbyInstances | null | undefined>(undefined),
		});

	}

	export enum ScaleInProtectedInstances { Refresh = 'Refresh', Ignore = 'Ignore', Wait = 'Wait' }

	export enum StandbyInstances { Terminate = 'Terminate', Ignore = 'Ignore', Wait = 'Wait' }


	/** Specifies the CloudWatch alarm specification to use in an instance refresh. */
	export interface AlarmSpecification {
		Alarms?: Array<string>;
	}

	/** Specifies the CloudWatch alarm specification to use in an instance refresh. */
	export interface AlarmSpecificationFormProperties {
	}
	export function CreateAlarmSpecificationFormGroup() {
		return new FormGroup<AlarmSpecificationFormProperties>({
		});

	}


	/** <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p> */
	export interface DesiredConfiguration {
		LaunchTemplate?: LaunchTemplateSpecification;
		MixedInstancesPolicy?: MixedInstancesPolicy;
	}

	/** <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p> */
	export interface DesiredConfigurationFormProperties {
	}
	export function CreateDesiredConfigurationFormGroup() {
		return new FormGroup<DesiredConfigurationFormProperties>({
		});

	}


	/** Details about an instance refresh rollback. */
	export interface RollbackDetails {
		RollbackReason?: string;
		RollbackStartTime?: Date;
		PercentageCompleteOnRollback?: number | null;
		InstancesToUpdateOnRollback?: number | null;
		ProgressDetailsOnRollback?: InstanceRefreshProgressDetails;
	}

	/** Details about an instance refresh rollback. */
	export interface RollbackDetailsFormProperties {
		RollbackReason: FormControl<string | null | undefined>,
		RollbackStartTime: FormControl<Date | null | undefined>,
		PercentageCompleteOnRollback: FormControl<number | null | undefined>,
		InstancesToUpdateOnRollback: FormControl<number | null | undefined>,
	}
	export function CreateRollbackDetailsFormGroup() {
		return new FormGroup<RollbackDetailsFormProperties>({
			RollbackReason: new FormControl<string | null | undefined>(undefined),
			RollbackStartTime: new FormControl<Date | null | undefined>(undefined),
			PercentageCompleteOnRollback: new FormControl<number | null | undefined>(undefined),
			InstancesToUpdateOnRollback: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LaunchConfigurationsType {

		/** Required */
		LaunchConfigurations: Array<LaunchConfiguration>;
		NextToken?: string;
	}
	export interface LaunchConfigurationsTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLaunchConfigurationsTypeFormGroup() {
		return new FormGroup<LaunchConfigurationsTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a launch configuration. */
	export interface LaunchConfiguration {

		/** Required */
		LaunchConfigurationName: string;
		LaunchConfigurationARN?: string;

		/** Required */
		ImageId: string;
		KeyName?: string;
		SecurityGroups?: Array<string>;
		ClassicLinkVPCId?: string;
		ClassicLinkVPCSecurityGroups?: Array<string>;
		UserData?: string;

		/** Required */
		InstanceType: string;
		KernelId?: string;
		RamdiskId?: string;
		BlockDeviceMappings?: Array<BlockDeviceMapping>;
		InstanceMonitoring?: InstanceMonitoring;
		SpotPrice?: string;
		IamInstanceProfile?: string;

		/** Required */
		CreatedTime: Date;
		EbsOptimized?: boolean | null;
		AssociatePublicIpAddress?: boolean | null;
		PlacementTenancy?: string;
		MetadataOptions?: InstanceMetadataOptions;
	}

	/** Describes a launch configuration. */
	export interface LaunchConfigurationFormProperties {

		/** Required */
		LaunchConfigurationName: FormControl<string | null | undefined>,
		LaunchConfigurationARN: FormControl<string | null | undefined>,

		/** Required */
		ImageId: FormControl<string | null | undefined>,
		KeyName: FormControl<string | null | undefined>,
		ClassicLinkVPCId: FormControl<string | null | undefined>,
		UserData: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		KernelId: FormControl<string | null | undefined>,
		RamdiskId: FormControl<string | null | undefined>,
		SpotPrice: FormControl<string | null | undefined>,
		IamInstanceProfile: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		AssociatePublicIpAddress: FormControl<boolean | null | undefined>,
		PlacementTenancy: FormControl<string | null | undefined>,
	}
	export function CreateLaunchConfigurationFormGroup() {
		return new FormGroup<LaunchConfigurationFormProperties>({
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LaunchConfigurationARN: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyName: new FormControl<string | null | undefined>(undefined),
			ClassicLinkVPCId: new FormControl<string | null | undefined>(undefined),
			UserData: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KernelId: new FormControl<string | null | undefined>(undefined),
			RamdiskId: new FormControl<string | null | undefined>(undefined),
			SpotPrice: new FormControl<string | null | undefined>(undefined),
			IamInstanceProfile: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			AssociatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			PlacementTenancy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes whether detailed monitoring is enabled for the Auto Scaling instances. */
	export interface InstanceMonitoring {
		Enabled?: boolean | null;
	}

	/** Describes whether detailed monitoring is enabled for the Auto Scaling instances. */
	export interface InstanceMonitoringFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceMonitoringFormGroup() {
		return new FormGroup<InstanceMonitoringFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. */
	export interface InstanceMetadataOptions {
		HttpTokens?: InstanceMetadataHttpTokensState;
		HttpPutResponseHopLimit?: number | null;
		HttpEndpoint?: InstanceMetadataEndpointState;
	}

	/** The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. */
	export interface InstanceMetadataOptionsFormProperties {
		HttpTokens: FormControl<InstanceMetadataHttpTokensState | null | undefined>,
		HttpPutResponseHopLimit: FormControl<number | null | undefined>,
		HttpEndpoint: FormControl<InstanceMetadataEndpointState | null | undefined>,
	}
	export function CreateInstanceMetadataOptionsFormGroup() {
		return new FormGroup<InstanceMetadataOptionsFormProperties>({
			HttpTokens: new FormControl<InstanceMetadataHttpTokensState | null | undefined>(undefined),
			HttpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
			HttpEndpoint: new FormControl<InstanceMetadataEndpointState | null | undefined>(undefined),
		});

	}

	export interface DescribeLifecycleHookTypesAnswer {
		LifecycleHookTypes?: Array<string>;
	}
	export interface DescribeLifecycleHookTypesAnswerFormProperties {
	}
	export function CreateDescribeLifecycleHookTypesAnswerFormGroup() {
		return new FormGroup<DescribeLifecycleHookTypesAnswerFormProperties>({
		});

	}

	export interface DescribeLifecycleHooksAnswer {
		LifecycleHooks?: Array<LifecycleHook>;
	}
	export interface DescribeLifecycleHooksAnswerFormProperties {
	}
	export function CreateDescribeLifecycleHooksAnswerFormGroup() {
		return new FormGroup<DescribeLifecycleHooksAnswerFormProperties>({
		});

	}


	/** Describes a lifecycle hook. A lifecycle hook lets you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs. */
	export interface LifecycleHook {
		LifecycleHookName?: string;
		AutoScalingGroupName?: string;
		LifecycleTransition?: string;
		NotificationTargetARN?: string;
		RoleARN?: string;
		NotificationMetadata?: string;
		HeartbeatTimeout?: number | null;
		GlobalTimeout?: number | null;
		DefaultResult?: string;
	}

	/** Describes a lifecycle hook. A lifecycle hook lets you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs. */
	export interface LifecycleHookFormProperties {
		LifecycleHookName: FormControl<string | null | undefined>,
		AutoScalingGroupName: FormControl<string | null | undefined>,
		LifecycleTransition: FormControl<string | null | undefined>,
		NotificationTargetARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		NotificationMetadata: FormControl<string | null | undefined>,
		HeartbeatTimeout: FormControl<number | null | undefined>,
		GlobalTimeout: FormControl<number | null | undefined>,
		DefaultResult: FormControl<string | null | undefined>,
	}
	export function CreateLifecycleHookFormGroup() {
		return new FormGroup<LifecycleHookFormProperties>({
			LifecycleHookName: new FormControl<string | null | undefined>(undefined),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			LifecycleTransition: new FormControl<string | null | undefined>(undefined),
			NotificationTargetARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			NotificationMetadata: new FormControl<string | null | undefined>(undefined),
			HeartbeatTimeout: new FormControl<number | null | undefined>(undefined),
			GlobalTimeout: new FormControl<number | null | undefined>(undefined),
			DefaultResult: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLoadBalancerTargetGroupsResponse {
		LoadBalancerTargetGroups?: Array<LoadBalancerTargetGroupState>;
		NextToken?: string;
	}
	export interface DescribeLoadBalancerTargetGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoadBalancerTargetGroupsResponseFormGroup() {
		return new FormGroup<DescribeLoadBalancerTargetGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the state of a target group. */
	export interface LoadBalancerTargetGroupState {
		LoadBalancerTargetGroupARN?: string;
		State?: string;
	}

	/** Describes the state of a target group. */
	export interface LoadBalancerTargetGroupStateFormProperties {
		LoadBalancerTargetGroupARN: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerTargetGroupStateFormGroup() {
		return new FormGroup<LoadBalancerTargetGroupStateFormProperties>({
			LoadBalancerTargetGroupARN: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLoadBalancersResponse {
		LoadBalancers?: Array<LoadBalancerState>;
		NextToken?: string;
	}
	export interface DescribeLoadBalancersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoadBalancersResponseFormGroup() {
		return new FormGroup<DescribeLoadBalancersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the state of a Classic Load Balancer. */
	export interface LoadBalancerState {
		LoadBalancerName?: string;
		State?: string;
	}

	/** Describes the state of a Classic Load Balancer. */
	export interface LoadBalancerStateFormProperties {
		LoadBalancerName: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerStateFormGroup() {
		return new FormGroup<LoadBalancerStateFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetricCollectionTypesAnswer {
		Metrics?: Array<MetricCollectionType>;
		Granularities?: Array<MetricGranularityType>;
	}
	export interface DescribeMetricCollectionTypesAnswerFormProperties {
	}
	export function CreateDescribeMetricCollectionTypesAnswerFormGroup() {
		return new FormGroup<DescribeMetricCollectionTypesAnswerFormProperties>({
		});

	}


	/** Describes a metric. */
	export interface MetricCollectionType {
		Metric?: string;
	}

	/** Describes a metric. */
	export interface MetricCollectionTypeFormProperties {
		Metric: FormControl<string | null | undefined>,
	}
	export function CreateMetricCollectionTypeFormGroup() {
		return new FormGroup<MetricCollectionTypeFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a granularity of a metric. */
	export interface MetricGranularityType {
		Granularity?: string;
	}

	/** Describes a granularity of a metric. */
	export interface MetricGranularityTypeFormProperties {
		Granularity: FormControl<string | null | undefined>,
	}
	export function CreateMetricGranularityTypeFormGroup() {
		return new FormGroup<MetricGranularityTypeFormProperties>({
			Granularity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationConfigurationsAnswer {

		/** Required */
		NotificationConfigurations: Array<NotificationConfiguration>;
		NextToken?: string;
	}
	export interface DescribeNotificationConfigurationsAnswerFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationConfigurationsAnswerFormGroup() {
		return new FormGroup<DescribeNotificationConfigurationsAnswerFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a notification. */
	export interface NotificationConfiguration {
		AutoScalingGroupName?: string;
		TopicARN?: string;
		NotificationType?: string;
	}

	/** Describes a notification. */
	export interface NotificationConfigurationFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,
		TopicARN: FormControl<string | null | undefined>,
		NotificationType: FormControl<string | null | undefined>,
	}
	export function CreateNotificationConfigurationFormGroup() {
		return new FormGroup<NotificationConfigurationFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			TopicARN: new FormControl<string | null | undefined>(undefined),
			NotificationType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoliciesType {
		ScalingPolicies?: Array<ScalingPolicy>;
		NextToken?: string;
	}
	export interface PoliciesTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreatePoliciesTypeFormGroup() {
		return new FormGroup<PoliciesTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a scaling policy. */
	export interface ScalingPolicy {
		AutoScalingGroupName?: string;
		PolicyName?: string;
		PolicyARN?: string;
		PolicyType?: string;
		AdjustmentType?: string;
		MinAdjustmentStep?: number | null;
		MinAdjustmentMagnitude?: number | null;
		ScalingAdjustment?: number | null;
		Cooldown?: number | null;
		StepAdjustments?: Array<StepAdjustment>;
		MetricAggregationType?: string;
		EstimatedInstanceWarmup?: number | null;
		Alarms?: Array<Alarm>;
		TargetTrackingConfiguration?: TargetTrackingConfiguration;
		Enabled?: boolean | null;
		PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
	}

	/** Describes a scaling policy. */
	export interface ScalingPolicyFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyARN: FormControl<string | null | undefined>,
		PolicyType: FormControl<string | null | undefined>,
		AdjustmentType: FormControl<string | null | undefined>,
		MinAdjustmentStep: FormControl<number | null | undefined>,
		MinAdjustmentMagnitude: FormControl<number | null | undefined>,
		ScalingAdjustment: FormControl<number | null | undefined>,
		Cooldown: FormControl<number | null | undefined>,
		MetricAggregationType: FormControl<string | null | undefined>,
		EstimatedInstanceWarmup: FormControl<number | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateScalingPolicyFormGroup() {
		return new FormGroup<ScalingPolicyFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyARN: new FormControl<string | null | undefined>(undefined),
			PolicyType: new FormControl<string | null | undefined>(undefined),
			AdjustmentType: new FormControl<string | null | undefined>(undefined),
			MinAdjustmentStep: new FormControl<number | null | undefined>(undefined),
			MinAdjustmentMagnitude: new FormControl<number | null | undefined>(undefined),
			ScalingAdjustment: new FormControl<number | null | undefined>(undefined),
			Cooldown: new FormControl<number | null | undefined>(undefined),
			MetricAggregationType: new FormControl<string | null | undefined>(undefined),
			EstimatedInstanceWarmup: new FormControl<number | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes information used to create a step adjustment for a step scaling policy.</p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most, one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most, one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps">Step adjustments</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface StepAdjustment {
		MetricIntervalLowerBound?: number | null;
		MetricIntervalUpperBound?: number | null;

		/** Required */
		ScalingAdjustment: number;
	}

	/** <p>Describes information used to create a step adjustment for a step scaling policy.</p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most, one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most, one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps">Step adjustments</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
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


	/** Describes an alarm. */
	export interface Alarm {
		AlarmName?: string;
		AlarmARN?: string;
	}

	/** Describes an alarm. */
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


	/** Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling. */
	export interface TargetTrackingConfiguration {
		PredefinedMetricSpecification?: PredefinedMetricSpecification;
		CustomizedMetricSpecification?: CustomizedMetricSpecification;

		/** Required */
		TargetValue: number;
		DisableScaleIn?: boolean | null;
	}

	/** Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling. */
	export interface TargetTrackingConfigurationFormProperties {

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
		DisableScaleIn: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetTrackingConfigurationFormGroup() {
		return new FormGroup<TargetTrackingConfigurationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DisableScaleIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling. */
	export interface PredefinedMetricSpecification {

		/** Required */
		PredefinedMetricType: MetricType;
		ResourceLabel?: string;
	}

	/** Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling. */
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

	export enum MetricType { ASGAverageCPUUtilization = 'ASGAverageCPUUtilization', ASGAverageNetworkIn = 'ASGAverageNetworkIn', ASGAverageNetworkOut = 'ASGAverageNetworkOut', ALBRequestCountPerTarget = 'ALBRequestCountPerTarget' }


	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required property from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a>.</p> <note> <p>Each individual service provides information about the metrics, namespace, and dimensions they use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </note> */
	export interface CustomizedMetricSpecification {
		MetricName?: string;
		Namespace?: string;
		Dimensions?: Array<MetricDimension>;
		Statistic?: MetricStatistic;
		Unit?: string;
		Metrics?: Array<TargetTrackingMetricDataQuery>;
	}

	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required property from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a>.</p> <note> <p>Each individual service provides information about the metrics, namespace, and dimensions they use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </note> */
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


	/** Describes the dimension of a metric. */
	export interface MetricDimension {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Describes the dimension of a metric. */
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


	/** The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp. */
	export interface TargetTrackingMetricDataQuery {

		/** Required */
		Id: string;
		Expression?: string;
		MetricStat?: TargetTrackingMetricStat;
		Label?: string;
		ReturnData?: boolean | null;
	}

	/** The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp. */
	export interface TargetTrackingMetricDataQueryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		ReturnData: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetTrackingMetricDataQueryFormGroup() {
		return new FormGroup<TargetTrackingMetricDataQueryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			ReturnData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>This structure defines the CloudWatch metric to return, along with the statistic and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p> */
	export interface TargetTrackingMetricStat {

		/** Required */
		Metric: Metric;

		/** Required */
		Stat: string;
		Unit?: string;
	}

	/** <p>This structure defines the CloudWatch metric to return, along with the statistic and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p> */
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


	/** Represents a specific metric.  */
	export interface Metric {

		/** Required */
		Namespace: string;

		/** Required */
		MetricName: string;
		Dimensions?: Array<MetricDimension>;
	}

	/** Represents a specific metric.  */
	export interface MetricFormProperties {

		/** Required */
		Namespace: FormControl<string | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling. */
	export interface PredictiveScalingConfiguration {

		/** Required */
		MetricSpecifications: Array<PredictiveScalingMetricSpecification>;
		Mode?: PredictiveScalingMode;
		SchedulingBufferTime?: number | null;
		MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior;
		MaxCapacityBuffer?: number | null;
	}

	/** Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling. */
	export interface PredictiveScalingConfigurationFormProperties {
		Mode: FormControl<PredictiveScalingMode | null | undefined>,
		SchedulingBufferTime: FormControl<number | null | undefined>,
		MaxCapacityBreachBehavior: FormControl<PredictiveScalingMaxCapacityBreachBehavior | null | undefined>,
		MaxCapacityBuffer: FormControl<number | null | undefined>,
	}
	export function CreatePredictiveScalingConfigurationFormGroup() {
		return new FormGroup<PredictiveScalingConfigurationFormProperties>({
			Mode: new FormControl<PredictiveScalingMode | null | undefined>(undefined),
			SchedulingBufferTime: new FormControl<number | null | undefined>(undefined),
			MaxCapacityBreachBehavior: new FormControl<PredictiveScalingMaxCapacityBreachBehavior | null | undefined>(undefined),
			MaxCapacityBuffer: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>This structure specifies the metrics and target utilization settings for a predictive scaling policy. </p> <p>You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.</p> <p>Example</p> <ul> <li> <p>You create a predictive scaling policy and specify <code>ALBRequestCount</code> as the value for the metric pair and <code>1000.0</code> as the target value. For this type of metric, you must provide the metric dimension for the corresponding target group, so you also provide a resource label for the Application Load Balancer target group that is attached to your Auto Scaling group.</p> </li> <li> <p>The number of requests the target group receives per minute provides the load metric, and the request count averaged between the members of the target group provides the scaling metric. In CloudWatch, this refers to the <code>RequestCount</code> and <code>RequestCountPerTarget</code> metrics, respectively.</p> </li> <li> <p>For optimal use of predictive scaling, you adhere to the best practice of using a dynamic scaling policy to automatically scale between the minimum capacity and maximum capacity in response to real-time changes in resource utilization.</p> </li> <li> <p>Amazon EC2 Auto Scaling consumes data points for the load metric over the last 14 days and creates an hourly load forecast for predictive scaling. (A minimum of 24 hours of data is required.)</p> </li> <li> <p>After creating the load forecast, Amazon EC2 Auto Scaling determines when to reduce or increase the capacity of your Auto Scaling group in each hour of the forecast period so that the average number of requests received by each instance is as close to 1000 requests per minute as possible at all times.</p> </li> </ul> <p>For information about using custom metrics with predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface PredictiveScalingMetricSpecification {

		/** Required */
		TargetValue: number;
		PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair;
		PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric;
		PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric;
		CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric;
		CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric;
		CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric;
	}

	/** <p>This structure specifies the metrics and target utilization settings for a predictive scaling policy. </p> <p>You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.</p> <p>Example</p> <ul> <li> <p>You create a predictive scaling policy and specify <code>ALBRequestCount</code> as the value for the metric pair and <code>1000.0</code> as the target value. For this type of metric, you must provide the metric dimension for the corresponding target group, so you also provide a resource label for the Application Load Balancer target group that is attached to your Auto Scaling group.</p> </li> <li> <p>The number of requests the target group receives per minute provides the load metric, and the request count averaged between the members of the target group provides the scaling metric. In CloudWatch, this refers to the <code>RequestCount</code> and <code>RequestCountPerTarget</code> metrics, respectively.</p> </li> <li> <p>For optimal use of predictive scaling, you adhere to the best practice of using a dynamic scaling policy to automatically scale between the minimum capacity and maximum capacity in response to real-time changes in resource utilization.</p> </li> <li> <p>Amazon EC2 Auto Scaling consumes data points for the load metric over the last 14 days and creates an hourly load forecast for predictive scaling. (A minimum of 24 hours of data is required.)</p> </li> <li> <p>After creating the load forecast, Amazon EC2 Auto Scaling determines when to reduce or increase the capacity of your Auto Scaling group in each hour of the forecast period so that the average number of requests received by each instance is as close to 1000 requests per minute as possible at all times.</p> </li> </ul> <p>For information about using custom metrics with predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface PredictiveScalingMetricSpecificationFormProperties {

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
	}
	export function CreatePredictiveScalingMetricSpecificationFormGroup() {
		return new FormGroup<PredictiveScalingMetricSpecificationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a metric pair for a predictive scaling policy.  */
	export interface PredictiveScalingPredefinedMetricPair {

		/** Required */
		PredefinedMetricType: PredefinedMetricPairType;
		ResourceLabel?: string;
	}

	/** Represents a metric pair for a predictive scaling policy.  */
	export interface PredictiveScalingPredefinedMetricPairFormProperties {

		/** Required */
		PredefinedMetricType: FormControl<PredefinedMetricPairType | null | undefined>,
		ResourceLabel: FormControl<string | null | undefined>,
	}
	export function CreatePredictiveScalingPredefinedMetricPairFormGroup() {
		return new FormGroup<PredictiveScalingPredefinedMetricPairFormProperties>({
			PredefinedMetricType: new FormControl<PredefinedMetricPairType | null | undefined>(undefined, [Validators.required]),
			ResourceLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PredefinedMetricPairType { ASGCPUUtilization = 'ASGCPUUtilization', ASGNetworkIn = 'ASGNetworkIn', ASGNetworkOut = 'ASGNetworkOut', ALBRequestCount = 'ALBRequestCount' }


	/** <p>Describes a scaling metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p> */
	export interface PredictiveScalingPredefinedScalingMetric {

		/** Required */
		PredefinedMetricType: MetricType;
		ResourceLabel?: string;
	}

	/** <p>Describes a scaling metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p> */
	export interface PredictiveScalingPredefinedScalingMetricFormProperties {

		/** Required */
		PredefinedMetricType: FormControl<MetricType | null | undefined>,
		ResourceLabel: FormControl<string | null | undefined>,
	}
	export function CreatePredictiveScalingPredefinedScalingMetricFormGroup() {
		return new FormGroup<PredictiveScalingPredefinedScalingMetricFormProperties>({
			PredefinedMetricType: new FormControl<MetricType | null | undefined>(undefined, [Validators.required]),
			ResourceLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a load metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p> */
	export interface PredictiveScalingPredefinedLoadMetric {

		/** Required */
		PredefinedMetricType: PredefinedLoadMetricType;
		ResourceLabel?: string;
	}

	/** <p>Describes a load metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p> */
	export interface PredictiveScalingPredefinedLoadMetricFormProperties {

		/** Required */
		PredefinedMetricType: FormControl<PredefinedLoadMetricType | null | undefined>,
		ResourceLabel: FormControl<string | null | undefined>,
	}
	export function CreatePredictiveScalingPredefinedLoadMetricFormGroup() {
		return new FormGroup<PredictiveScalingPredefinedLoadMetricFormProperties>({
			PredefinedMetricType: new FormControl<PredefinedLoadMetricType | null | undefined>(undefined, [Validators.required]),
			ResourceLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PredefinedLoadMetricType { ASGTotalCPUUtilization = 'ASGTotalCPUUtilization', ASGTotalNetworkIn = 'ASGTotalNetworkIn', ASGTotalNetworkOut = 'ASGTotalNetworkOut', ALBTargetGroupRequestCount = 'ALBTargetGroupRequestCount' }


	/** Describes a custom scaling metric for a predictive scaling policy. */
	export interface PredictiveScalingCustomizedScalingMetric {

		/** Required */
		MetricDataQueries: Array<MetricDataQuery>;
	}

	/** Describes a custom scaling metric for a predictive scaling policy. */
	export interface PredictiveScalingCustomizedScalingMetricFormProperties {
	}
	export function CreatePredictiveScalingCustomizedScalingMetricFormGroup() {
		return new FormGroup<PredictiveScalingCustomizedScalingMetricFormProperties>({
		});

	}


	/** <p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface MetricDataQuery {

		/** Required */
		Id: string;
		Expression?: string;
		MetricStat?: MetricStat;
		Label?: string;
		ReturnData?: boolean | null;
	}

	/** <p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface MetricDataQueryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		ReturnData: FormControl<boolean | null | undefined>,
	}
	export function CreateMetricDataQueryFormGroup() {
		return new FormGroup<MetricDataQueryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			ReturnData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p> */
	export interface MetricStat {

		/** Required */
		Metric: Metric;

		/** Required */
		Stat: string;
		Unit?: string;
	}

	/** <p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p> */
	export interface MetricStatFormProperties {

		/** Required */
		Stat: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateMetricStatFormGroup() {
		return new FormGroup<MetricStatFormProperties>({
			Stat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a custom load metric for a predictive scaling policy. */
	export interface PredictiveScalingCustomizedLoadMetric {

		/** Required */
		MetricDataQueries: Array<MetricDataQuery>;
	}

	/** Describes a custom load metric for a predictive scaling policy. */
	export interface PredictiveScalingCustomizedLoadMetricFormProperties {
	}
	export function CreatePredictiveScalingCustomizedLoadMetricFormGroup() {
		return new FormGroup<PredictiveScalingCustomizedLoadMetricFormProperties>({
		});

	}


	/** Describes a customized capacity metric for a predictive scaling policy. */
	export interface PredictiveScalingCustomizedCapacityMetric {

		/** Required */
		MetricDataQueries: Array<MetricDataQuery>;
	}

	/** Describes a customized capacity metric for a predictive scaling policy. */
	export interface PredictiveScalingCustomizedCapacityMetricFormProperties {
	}
	export function CreatePredictiveScalingCustomizedCapacityMetricFormGroup() {
		return new FormGroup<PredictiveScalingCustomizedCapacityMetricFormProperties>({
		});

	}

	export enum PredictiveScalingMode { ForecastAndScale = 'ForecastAndScale', ForecastOnly = 'ForecastOnly' }

	export enum PredictiveScalingMaxCapacityBreachBehavior { HonorMaxCapacity = 'HonorMaxCapacity', IncreaseMaxCapacity = 'IncreaseMaxCapacity' }

	export interface ActivitiesType {

		/** Required */
		Activities: Array<Activity>;
		NextToken?: string;
	}
	export interface ActivitiesTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateActivitiesTypeFormGroup() {
		return new FormGroup<ActivitiesTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance. */
	export interface Activity {

		/** Required */
		ActivityId: string;

		/** Required */
		AutoScalingGroupName: string;
		Description?: string;

		/** Required */
		Cause: string;

		/** Required */
		StartTime: Date;
		EndTime?: Date;

		/** Required */
		StatusCode: ScalingActivityStatusCode;
		StatusMessage?: string;
		Progress?: number | null;
		Details?: string;
		AutoScalingGroupState?: string;
		AutoScalingGroupARN?: string;
	}

	/** Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance. */
	export interface ActivityFormProperties {

		/** Required */
		ActivityId: FormControl<string | null | undefined>,

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Cause: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		StatusCode: FormControl<ScalingActivityStatusCode | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		Progress: FormControl<number | null | undefined>,
		Details: FormControl<string | null | undefined>,
		AutoScalingGroupState: FormControl<string | null | undefined>,
		AutoScalingGroupARN: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			ActivityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Cause: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			StatusCode: new FormControl<ScalingActivityStatusCode | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			Progress: new FormControl<number | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined),
			AutoScalingGroupState: new FormControl<string | null | undefined>(undefined),
			AutoScalingGroupARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScalingActivityStatusCode { PendingSpotBidPlacement = 'PendingSpotBidPlacement', WaitingForSpotInstanceRequestId = 'WaitingForSpotInstanceRequestId', WaitingForSpotInstanceId = 'WaitingForSpotInstanceId', WaitingForInstanceId = 'WaitingForInstanceId', PreInService = 'PreInService', InProgress = 'InProgress', WaitingForELBConnectionDraining = 'WaitingForELBConnectionDraining', MidLifecycleAction = 'MidLifecycleAction', WaitingForInstanceWarmup = 'WaitingForInstanceWarmup', Successful = 'Successful', Failed = 'Failed', Cancelled = 'Cancelled', WaitingForConnectionDraining = 'WaitingForConnectionDraining' }

	export interface ProcessesType {
		Processes?: Array<ProcessType>;
	}
	export interface ProcessesTypeFormProperties {
	}
	export function CreateProcessesTypeFormGroup() {
		return new FormGroup<ProcessesTypeFormProperties>({
		});

	}


	/** <p>Describes a process type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface ProcessType {

		/** Required */
		ProcessName: string;
	}

	/** <p>Describes a process type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface ProcessTypeFormProperties {

		/** Required */
		ProcessName: FormControl<string | null | undefined>,
	}
	export function CreateProcessTypeFormGroup() {
		return new FormGroup<ProcessTypeFormProperties>({
			ProcessName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScheduledActionsType {
		ScheduledUpdateGroupActions?: Array<ScheduledUpdateGroupAction>;
		NextToken?: string;
	}
	export interface ScheduledActionsTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateScheduledActionsTypeFormGroup() {
		return new FormGroup<ScheduledActionsTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		MinSize?: number | null;
		MaxSize?: number | null;
		DesiredCapacity?: number | null;
		TimeZone?: string;
	}

	/** Describes a scheduled scaling action. */
	export interface ScheduledUpdateGroupActionFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,
		ScheduledActionName: FormControl<string | null | undefined>,
		ScheduledActionARN: FormControl<string | null | undefined>,
		Time: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Recurrence: FormControl<string | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		MaxSize: FormControl<number | null | undefined>,
		DesiredCapacity: FormControl<number | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateScheduledUpdateGroupActionFormGroup() {
		return new FormGroup<ScheduledUpdateGroupActionFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			ScheduledActionName: new FormControl<string | null | undefined>(undefined),
			ScheduledActionARN: new FormControl<string | null | undefined>(undefined),
			Time: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Recurrence: new FormControl<string | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			MaxSize: new FormControl<number | null | undefined>(undefined),
			DesiredCapacity: new FormControl<number | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagsType {
		Tags?: Array<TagDescription>;
		NextToken?: string;
	}
	export interface TagsTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateTagsTypeFormGroup() {
		return new FormGroup<TagsTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTerminationPolicyTypesAnswer {
		TerminationPolicyTypes?: Array<string>;
	}
	export interface DescribeTerminationPolicyTypesAnswerFormProperties {
	}
	export function CreateDescribeTerminationPolicyTypesAnswerFormGroup() {
		return new FormGroup<DescribeTerminationPolicyTypesAnswerFormProperties>({
		});

	}

	export interface DescribeTrafficSourcesResponse {
		TrafficSources?: Array<TrafficSourceState>;
		NextToken?: string;
	}
	export interface DescribeTrafficSourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrafficSourcesResponseFormGroup() {
		return new FormGroup<DescribeTrafficSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the state of a traffic source. */
	export interface TrafficSourceState {
		TrafficSource?: string;
		State?: string;
		Identifier?: string;
		Type?: string;
	}

	/** Describes the state of a traffic source. */
	export interface TrafficSourceStateFormProperties {
		TrafficSource: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateTrafficSourceStateFormGroup() {
		return new FormGroup<TrafficSourceStateFormProperties>({
			TrafficSource: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWarmPoolAnswer {
		WarmPoolConfiguration?: WarmPoolConfiguration;
		Instances?: Array<Instance>;
		NextToken?: string;
	}
	export interface DescribeWarmPoolAnswerFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWarmPoolAnswerFormGroup() {
		return new FormGroup<DescribeWarmPoolAnswerFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachInstancesAnswer {
		Activities?: Array<Activity>;
	}
	export interface DetachInstancesAnswerFormProperties {
	}
	export function CreateDetachInstancesAnswerFormGroup() {
		return new FormGroup<DetachInstancesAnswerFormProperties>({
		});

	}

	export interface DetachLoadBalancerTargetGroupsResultType {
	}
	export interface DetachLoadBalancerTargetGroupsResultTypeFormProperties {
	}
	export function CreateDetachLoadBalancerTargetGroupsResultTypeFormGroup() {
		return new FormGroup<DetachLoadBalancerTargetGroupsResultTypeFormProperties>({
		});

	}

	export interface DetachLoadBalancersResultType {
	}
	export interface DetachLoadBalancersResultTypeFormProperties {
	}
	export function CreateDetachLoadBalancersResultTypeFormGroup() {
		return new FormGroup<DetachLoadBalancersResultTypeFormProperties>({
		});

	}

	export interface DetachTrafficSourcesResultType {
	}
	export interface DetachTrafficSourcesResultTypeFormProperties {
	}
	export function CreateDetachTrafficSourcesResultTypeFormGroup() {
		return new FormGroup<DetachTrafficSourcesResultTypeFormProperties>({
		});

	}

	export interface EnterStandbyAnswer {
		Activities?: Array<Activity>;
	}
	export interface EnterStandbyAnswerFormProperties {
	}
	export function CreateEnterStandbyAnswerFormGroup() {
		return new FormGroup<EnterStandbyAnswerFormProperties>({
		});

	}

	export interface ExitStandbyAnswer {
		Activities?: Array<Activity>;
	}
	export interface ExitStandbyAnswerFormProperties {
	}
	export function CreateExitStandbyAnswerFormGroup() {
		return new FormGroup<ExitStandbyAnswerFormProperties>({
		});

	}

	export interface GetPredictiveScalingForecastAnswer {

		/** Required */
		LoadForecast: Array<LoadForecast>;

		/** Required */
		CapacityForecast: CapacityForecast;

		/** Required */
		UpdateTime: Date;
	}
	export interface GetPredictiveScalingForecastAnswerFormProperties {

		/** Required */
		UpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetPredictiveScalingForecastAnswerFormGroup() {
		return new FormGroup<GetPredictiveScalingForecastAnswerFormProperties>({
			UpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification.  */
	export interface LoadForecast {

		/** Required */
		Timestamps: Array<string>;

		/** Required */
		Values: Array<number>;

		/** Required */
		MetricSpecification: PredictiveScalingMetricSpecification;
	}

	/** A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification.  */
	export interface LoadForecastFormProperties {
	}
	export function CreateLoadForecastFormGroup() {
		return new FormGroup<LoadForecastFormProperties>({
		});

	}


	/** A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points.  */
	export interface CapacityForecast {

		/** Required */
		Timestamps: Array<string>;

		/** Required */
		Values: Array<number>;
	}

	/** A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points.  */
	export interface CapacityForecastFormProperties {
	}
	export function CreateCapacityForecastFormGroup() {
		return new FormGroup<CapacityForecastFormProperties>({
		});

	}

	export interface PutLifecycleHookAnswer {
	}
	export interface PutLifecycleHookAnswerFormProperties {
	}
	export function CreatePutLifecycleHookAnswerFormGroup() {
		return new FormGroup<PutLifecycleHookAnswerFormProperties>({
		});

	}


	/** Contains the output of PutScalingPolicy. */
	export interface PolicyARNType {
		PolicyARN?: string;
		Alarms?: Array<Alarm>;
	}

	/** Contains the output of PutScalingPolicy. */
	export interface PolicyARNTypeFormProperties {
		PolicyARN: FormControl<string | null | undefined>,
	}
	export function CreatePolicyARNTypeFormGroup() {
		return new FormGroup<PolicyARNTypeFormProperties>({
			PolicyARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutWarmPoolAnswer {
	}
	export interface PutWarmPoolAnswerFormProperties {
	}
	export function CreatePutWarmPoolAnswerFormGroup() {
		return new FormGroup<PutWarmPoolAnswerFormProperties>({
		});

	}

	export interface RecordLifecycleActionHeartbeatAnswer {
	}
	export interface RecordLifecycleActionHeartbeatAnswerFormProperties {
	}
	export function CreateRecordLifecycleActionHeartbeatAnswerFormGroup() {
		return new FormGroup<RecordLifecycleActionHeartbeatAnswerFormProperties>({
		});

	}

	export interface RollbackInstanceRefreshAnswer {
		InstanceRefreshId?: string;
	}
	export interface RollbackInstanceRefreshAnswerFormProperties {
		InstanceRefreshId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackInstanceRefreshAnswerFormGroup() {
		return new FormGroup<RollbackInstanceRefreshAnswerFormProperties>({
			InstanceRefreshId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IrreversibleInstanceRefreshFault {
	}
	export interface IrreversibleInstanceRefreshFaultFormProperties {
	}
	export function CreateIrreversibleInstanceRefreshFaultFormGroup() {
		return new FormGroup<IrreversibleInstanceRefreshFaultFormProperties>({
		});

	}

	export interface SetInstanceProtectionAnswer {
	}
	export interface SetInstanceProtectionAnswerFormProperties {
	}
	export function CreateSetInstanceProtectionAnswerFormGroup() {
		return new FormGroup<SetInstanceProtectionAnswerFormProperties>({
		});

	}

	export interface StartInstanceRefreshAnswer {
		InstanceRefreshId?: string;
	}
	export interface StartInstanceRefreshAnswerFormProperties {
		InstanceRefreshId: FormControl<string | null | undefined>,
	}
	export function CreateStartInstanceRefreshAnswerFormGroup() {
		return new FormGroup<StartInstanceRefreshAnswerFormProperties>({
			InstanceRefreshId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstanceRefreshInProgressFault {
	}
	export interface InstanceRefreshInProgressFaultFormProperties {
	}
	export function CreateInstanceRefreshInProgressFaultFormGroup() {
		return new FormGroup<InstanceRefreshInProgressFaultFormProperties>({
		});

	}

	export interface ActivityType {
		Activity?: Activity;
	}
	export interface ActivityTypeFormProperties {
	}
	export function CreateActivityTypeFormGroup() {
		return new FormGroup<ActivityTypeFormProperties>({
		});

	}

	export interface AttachInstancesQuery {
		InstanceIds?: Array<string>;

		/** Required */
		AutoScalingGroupName: string;
	}
	export interface AttachInstancesQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateAttachInstancesQueryFormGroup() {
		return new FormGroup<AttachInstancesQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachLoadBalancerTargetGroupsType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		TargetGroupARNs: Array<string>;
	}
	export interface AttachLoadBalancerTargetGroupsTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateAttachLoadBalancerTargetGroupsTypeFormGroup() {
		return new FormGroup<AttachLoadBalancerTargetGroupsTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachLoadBalancersType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		LoadBalancerNames: Array<string>;
	}
	export interface AttachLoadBalancersTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateAttachLoadBalancersTypeFormGroup() {
		return new FormGroup<AttachLoadBalancersTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachTrafficSourcesType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		TrafficSources: Array<TrafficSourceIdentifier>;
	}
	export interface AttachTrafficSourcesTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateAttachTrafficSourcesTypeFormGroup() {
		return new FormGroup<AttachTrafficSourcesTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutoScalingGroupNamesType {
		AutoScalingGroupNames?: Array<string>;
		NextToken?: string;
		MaxRecords?: number | null;
		Filters?: Array<Filter>;
	}
	export interface AutoScalingGroupNamesTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingGroupNamesTypeFormGroup() {
		return new FormGroup<AutoScalingGroupNamesTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteScheduledActionType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		ScheduledActionNames: Array<string>;
	}
	export interface BatchDeleteScheduledActionTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteScheduledActionTypeFormGroup() {
		return new FormGroup<BatchDeleteScheduledActionTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchPutScheduledUpdateGroupActionType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		ScheduledUpdateGroupActions: Array<ScheduledUpdateGroupActionRequest>;
	}
	export interface BatchPutScheduledUpdateGroupActionTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutScheduledUpdateGroupActionTypeFormGroup() {
		return new FormGroup<BatchPutScheduledUpdateGroupActionTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BurstablePerformance { included = 'included', excluded = 'excluded', required = 'required' }

	export interface CancelInstanceRefreshType {

		/** Required */
		AutoScalingGroupName: string;
	}
	export interface CancelInstanceRefreshTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCancelInstanceRefreshTypeFormGroup() {
		return new FormGroup<CancelInstanceRefreshTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CompleteLifecycleActionType {

		/** Required */
		LifecycleHookName: string;

		/** Required */
		AutoScalingGroupName: string;
		LifecycleActionToken?: string;

		/** Required */
		LifecycleActionResult: string;
		InstanceId?: string;
	}
	export interface CompleteLifecycleActionTypeFormProperties {

		/** Required */
		LifecycleHookName: FormControl<string | null | undefined>,

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		LifecycleActionToken: FormControl<string | null | undefined>,

		/** Required */
		LifecycleActionResult: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateCompleteLifecycleActionTypeFormGroup() {
		return new FormGroup<CompleteLifecycleActionTypeFormProperties>({
			LifecycleHookName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifecycleActionToken: new FormControl<string | null | undefined>(undefined),
			LifecycleActionResult: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAutoScalingGroupType {

		/** Required */
		AutoScalingGroupName: string;
		LaunchConfigurationName?: string;
		LaunchTemplate?: LaunchTemplateSpecification;
		MixedInstancesPolicy?: MixedInstancesPolicy;
		InstanceId?: string;

		/** Required */
		MinSize: number;

		/** Required */
		MaxSize: number;
		DesiredCapacity?: number | null;
		DefaultCooldown?: number | null;
		AvailabilityZones?: Array<string>;
		LoadBalancerNames?: Array<string>;
		TargetGroupARNs?: Array<string>;
		HealthCheckType?: string;
		HealthCheckGracePeriod?: number | null;
		PlacementGroup?: string;
		VPCZoneIdentifier?: string;
		TerminationPolicies?: Array<string>;
		NewInstancesProtectedFromScaleIn?: boolean | null;
		CapacityRebalance?: boolean | null;
		LifecycleHookSpecificationList?: Array<LifecycleHookSpecification>;
		Tags?: Array<Tag>;
		ServiceLinkedRoleARN?: string;
		MaxInstanceLifetime?: number | null;
		Context?: string;
		DesiredCapacityType?: string;
		DefaultInstanceWarmup?: number | null;
		TrafficSources?: Array<TrafficSourceIdentifier>;
	}
	export interface CreateAutoScalingGroupTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		LaunchConfigurationName: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		MinSize: FormControl<number | null | undefined>,

		/** Required */
		MaxSize: FormControl<number | null | undefined>,
		DesiredCapacity: FormControl<number | null | undefined>,
		DefaultCooldown: FormControl<number | null | undefined>,
		HealthCheckType: FormControl<string | null | undefined>,
		HealthCheckGracePeriod: FormControl<number | null | undefined>,
		PlacementGroup: FormControl<string | null | undefined>,
		VPCZoneIdentifier: FormControl<string | null | undefined>,
		NewInstancesProtectedFromScaleIn: FormControl<boolean | null | undefined>,
		CapacityRebalance: FormControl<boolean | null | undefined>,
		ServiceLinkedRoleARN: FormControl<string | null | undefined>,
		MaxInstanceLifetime: FormControl<number | null | undefined>,
		Context: FormControl<string | null | undefined>,
		DesiredCapacityType: FormControl<string | null | undefined>,
		DefaultInstanceWarmup: FormControl<number | null | undefined>,
	}
	export function CreateCreateAutoScalingGroupTypeFormGroup() {
		return new FormGroup<CreateAutoScalingGroupTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DesiredCapacity: new FormControl<number | null | undefined>(undefined),
			DefaultCooldown: new FormControl<number | null | undefined>(undefined),
			HealthCheckType: new FormControl<string | null | undefined>(undefined),
			HealthCheckGracePeriod: new FormControl<number | null | undefined>(undefined),
			PlacementGroup: new FormControl<string | null | undefined>(undefined),
			VPCZoneIdentifier: new FormControl<string | null | undefined>(undefined),
			NewInstancesProtectedFromScaleIn: new FormControl<boolean | null | undefined>(undefined),
			CapacityRebalance: new FormControl<boolean | null | undefined>(undefined),
			ServiceLinkedRoleARN: new FormControl<string | null | undefined>(undefined),
			MaxInstanceLifetime: new FormControl<number | null | undefined>(undefined),
			Context: new FormControl<string | null | undefined>(undefined),
			DesiredCapacityType: new FormControl<string | null | undefined>(undefined),
			DefaultInstanceWarmup: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchConfigurationType {

		/** Required */
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
		InstanceMonitoring?: InstanceMonitoring;
		SpotPrice?: string;
		IamInstanceProfile?: string;
		EbsOptimized?: boolean | null;
		AssociatePublicIpAddress?: boolean | null;
		PlacementTenancy?: string;
		MetadataOptions?: InstanceMetadataOptions;
	}
	export interface CreateLaunchConfigurationTypeFormProperties {

		/** Required */
		LaunchConfigurationName: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		KeyName: FormControl<string | null | undefined>,
		ClassicLinkVPCId: FormControl<string | null | undefined>,
		UserData: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		KernelId: FormControl<string | null | undefined>,
		RamdiskId: FormControl<string | null | undefined>,
		SpotPrice: FormControl<string | null | undefined>,
		IamInstanceProfile: FormControl<string | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		AssociatePublicIpAddress: FormControl<boolean | null | undefined>,
		PlacementTenancy: FormControl<string | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTypeFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTypeFormProperties>({
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageId: new FormControl<string | null | undefined>(undefined),
			KeyName: new FormControl<string | null | undefined>(undefined),
			ClassicLinkVPCId: new FormControl<string | null | undefined>(undefined),
			UserData: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			KernelId: new FormControl<string | null | undefined>(undefined),
			RamdiskId: new FormControl<string | null | undefined>(undefined),
			SpotPrice: new FormControl<string | null | undefined>(undefined),
			IamInstanceProfile: new FormControl<string | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			AssociatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			PlacementTenancy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOrUpdateTagsType {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface CreateOrUpdateTagsTypeFormProperties {
	}
	export function CreateCreateOrUpdateTagsTypeFormGroup() {
		return new FormGroup<CreateOrUpdateTagsTypeFormProperties>({
		});

	}

	export interface DeleteAutoScalingGroupType {

		/** Required */
		AutoScalingGroupName: string;
		ForceDelete?: boolean | null;
	}
	export interface DeleteAutoScalingGroupTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		ForceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteAutoScalingGroupTypeFormGroup() {
		return new FormGroup<DeleteAutoScalingGroupTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteLifecycleHookType {

		/** Required */
		LifecycleHookName: string;

		/** Required */
		AutoScalingGroupName: string;
	}
	export interface DeleteLifecycleHookTypeFormProperties {

		/** Required */
		LifecycleHookName: FormControl<string | null | undefined>,

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLifecycleHookTypeFormGroup() {
		return new FormGroup<DeleteLifecycleHookTypeFormProperties>({
			LifecycleHookName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteNotificationConfigurationType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		TopicARN: string;
	}
	export interface DeleteNotificationConfigurationTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		TopicARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotificationConfigurationTypeFormGroup() {
		return new FormGroup<DeleteNotificationConfigurationTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TopicARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePolicyType {
		AutoScalingGroupName?: string;

		/** Required */
		PolicyName: string;
	}
	export interface DeletePolicyTypeFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyTypeFormGroup() {
		return new FormGroup<DeletePolicyTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteScheduledActionType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		ScheduledActionName: string;
	}
	export interface DeleteScheduledActionTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteScheduledActionTypeFormGroup() {
		return new FormGroup<DeleteScheduledActionTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTagsType {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface DeleteTagsTypeFormProperties {
	}
	export function CreateDeleteTagsTypeFormGroup() {
		return new FormGroup<DeleteTagsTypeFormProperties>({
		});

	}

	export interface DeleteWarmPoolType {

		/** Required */
		AutoScalingGroupName: string;
		ForceDelete?: boolean | null;
	}
	export interface DeleteWarmPoolTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		ForceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteWarmPoolTypeFormGroup() {
		return new FormGroup<DeleteWarmPoolTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeAutoScalingInstancesType {
		InstanceIds?: Array<string>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeAutoScalingInstancesTypeFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutoScalingInstancesTypeFormGroup() {
		return new FormGroup<DescribeAutoScalingInstancesTypeFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceRefreshesType {

		/** Required */
		AutoScalingGroupName: string;
		InstanceRefreshIds?: Array<string>;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeInstanceRefreshesTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInstanceRefreshesTypeFormGroup() {
		return new FormGroup<DescribeInstanceRefreshesTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeLifecycleHooksType {

		/** Required */
		AutoScalingGroupName: string;
		LifecycleHookNames?: Array<string>;
	}
	export interface DescribeLifecycleHooksTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLifecycleHooksTypeFormGroup() {
		return new FormGroup<DescribeLifecycleHooksTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLoadBalancerTargetGroupsRequest {

		/** Required */
		AutoScalingGroupName: string;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeLoadBalancerTargetGroupsRequestFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLoadBalancerTargetGroupsRequestFormGroup() {
		return new FormGroup<DescribeLoadBalancerTargetGroupsRequestFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeLoadBalancersRequest {

		/** Required */
		AutoScalingGroupName: string;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeLoadBalancersRequestFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLoadBalancersRequestFormGroup() {
		return new FormGroup<DescribeLoadBalancersRequestFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationConfigurationsType {
		AutoScalingGroupNames?: Array<string>;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeNotificationConfigurationsTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeNotificationConfigurationsTypeFormGroup() {
		return new FormGroup<DescribeNotificationConfigurationsTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribePoliciesType {
		AutoScalingGroupName?: string;
		PolicyNames?: Array<string>;
		PolicyTypes?: Array<string>;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribePoliciesTypeFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribePoliciesTypeFormGroup() {
		return new FormGroup<DescribePoliciesTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeScalingActivitiesType {
		ActivityIds?: Array<string>;
		AutoScalingGroupName?: string;
		IncludeDeletedGroups?: boolean | null;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeScalingActivitiesTypeFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,
		IncludeDeletedGroups: FormControl<boolean | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingActivitiesTypeFormGroup() {
		return new FormGroup<DescribeScalingActivitiesTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			IncludeDeletedGroups: new FormControl<boolean | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeScheduledActionsType {
		AutoScalingGroupName?: string;
		ScheduledActionNames?: Array<string>;
		StartTime?: Date;
		EndTime?: Date;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeScheduledActionsTypeFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeScheduledActionsTypeFormGroup() {
		return new FormGroup<DescribeScheduledActionsTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsType {
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeTagsTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTagsTypeFormGroup() {
		return new FormGroup<DescribeTagsTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeTrafficSourcesRequest {

		/** Required */
		AutoScalingGroupName: string;
		TrafficSourceType?: string;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface DescribeTrafficSourcesRequestFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		TrafficSourceType: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTrafficSourcesRequestFormGroup() {
		return new FormGroup<DescribeTrafficSourcesRequestFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrafficSourceType: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeWarmPoolType {

		/** Required */
		AutoScalingGroupName: string;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface DescribeWarmPoolTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWarmPoolTypeFormGroup() {
		return new FormGroup<DescribeWarmPoolTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachInstancesQuery {
		InstanceIds?: Array<string>;

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		ShouldDecrementDesiredCapacity: boolean;
	}
	export interface DetachInstancesQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		ShouldDecrementDesiredCapacity: FormControl<boolean | null | undefined>,
	}
	export function CreateDetachInstancesQueryFormGroup() {
		return new FormGroup<DetachInstancesQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShouldDecrementDesiredCapacity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachLoadBalancerTargetGroupsType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		TargetGroupARNs: Array<string>;
	}
	export interface DetachLoadBalancerTargetGroupsTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDetachLoadBalancerTargetGroupsTypeFormGroup() {
		return new FormGroup<DetachLoadBalancerTargetGroupsTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachLoadBalancersType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		LoadBalancerNames: Array<string>;
	}
	export interface DetachLoadBalancersTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDetachLoadBalancersTypeFormGroup() {
		return new FormGroup<DetachLoadBalancersTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachTrafficSourcesType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		TrafficSources: Array<TrafficSourceIdentifier>;
	}
	export interface DetachTrafficSourcesTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDetachTrafficSourcesTypeFormGroup() {
		return new FormGroup<DetachTrafficSourcesTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableMetricsCollectionQuery {

		/** Required */
		AutoScalingGroupName: string;
		Metrics?: Array<string>;
	}
	export interface DisableMetricsCollectionQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDisableMetricsCollectionQueryFormGroup() {
		return new FormGroup<DisableMetricsCollectionQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableMetricsCollectionQuery {

		/** Required */
		AutoScalingGroupName: string;
		Metrics?: Array<string>;

		/** Required */
		Granularity: string;
	}
	export interface EnableMetricsCollectionQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		Granularity: FormControl<string | null | undefined>,
	}
	export function CreateEnableMetricsCollectionQueryFormGroup() {
		return new FormGroup<EnableMetricsCollectionQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Granularity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnterStandbyQuery {
		InstanceIds?: Array<string>;

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		ShouldDecrementDesiredCapacity: boolean;
	}
	export interface EnterStandbyQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		ShouldDecrementDesiredCapacity: FormControl<boolean | null | undefined>,
	}
	export function CreateEnterStandbyQueryFormGroup() {
		return new FormGroup<EnterStandbyQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShouldDecrementDesiredCapacity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExecutePolicyType {
		AutoScalingGroupName?: string;

		/** Required */
		PolicyName: string;
		HonorCooldown?: boolean | null;
		MetricValue?: number | null;
		BreachThreshold?: number | null;
	}
	export interface ExecutePolicyTypeFormProperties {
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
		HonorCooldown: FormControl<boolean | null | undefined>,
		MetricValue: FormControl<number | null | undefined>,
		BreachThreshold: FormControl<number | null | undefined>,
	}
	export function CreateExecutePolicyTypeFormGroup() {
		return new FormGroup<ExecutePolicyTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HonorCooldown: new FormControl<boolean | null | undefined>(undefined),
			MetricValue: new FormControl<number | null | undefined>(undefined),
			BreachThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExitStandbyQuery {
		InstanceIds?: Array<string>;

		/** Required */
		AutoScalingGroupName: string;
	}
	export interface ExitStandbyQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateExitStandbyQueryFormGroup() {
		return new FormGroup<ExitStandbyQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPredictiveScalingForecastType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		PolicyName: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
	}
	export interface GetPredictiveScalingForecastTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetPredictiveScalingForecastTypeFormGroup() {
		return new FormGroup<GetPredictiveScalingForecastTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LocalStorage { included = 'included', excluded = 'excluded', required = 'required' }

	export interface LaunchConfigurationNameType {

		/** Required */
		LaunchConfigurationName: string;
	}
	export interface LaunchConfigurationNameTypeFormProperties {

		/** Required */
		LaunchConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateLaunchConfigurationNameTypeFormGroup() {
		return new FormGroup<LaunchConfigurationNameTypeFormProperties>({
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LaunchConfigurationNamesType {
		LaunchConfigurationNames?: Array<string>;
		NextToken?: string;
		MaxRecords?: number | null;
	}
	export interface LaunchConfigurationNamesTypeFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateLaunchConfigurationNamesTypeFormGroup() {
		return new FormGroup<LaunchConfigurationNamesTypeFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PredefinedScalingMetricType { ASGAverageCPUUtilization = 'ASGAverageCPUUtilization', ASGAverageNetworkIn = 'ASGAverageNetworkIn', ASGAverageNetworkOut = 'ASGAverageNetworkOut', ALBRequestCountPerTarget = 'ALBRequestCountPerTarget' }

	export interface PutLifecycleHookType {

		/** Required */
		LifecycleHookName: string;

		/** Required */
		AutoScalingGroupName: string;
		LifecycleTransition?: string;
		RoleARN?: string;
		NotificationTargetARN?: string;
		NotificationMetadata?: string;
		HeartbeatTimeout?: number | null;
		DefaultResult?: string;
	}
	export interface PutLifecycleHookTypeFormProperties {

		/** Required */
		LifecycleHookName: FormControl<string | null | undefined>,

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		LifecycleTransition: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		NotificationTargetARN: FormControl<string | null | undefined>,
		NotificationMetadata: FormControl<string | null | undefined>,
		HeartbeatTimeout: FormControl<number | null | undefined>,
		DefaultResult: FormControl<string | null | undefined>,
	}
	export function CreatePutLifecycleHookTypeFormGroup() {
		return new FormGroup<PutLifecycleHookTypeFormProperties>({
			LifecycleHookName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifecycleTransition: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			NotificationTargetARN: new FormControl<string | null | undefined>(undefined),
			NotificationMetadata: new FormControl<string | null | undefined>(undefined),
			HeartbeatTimeout: new FormControl<number | null | undefined>(undefined),
			DefaultResult: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutNotificationConfigurationType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		TopicARN: string;

		/** Required */
		NotificationTypes: Array<string>;
	}
	export interface PutNotificationConfigurationTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		TopicARN: FormControl<string | null | undefined>,
	}
	export function CreatePutNotificationConfigurationTypeFormGroup() {
		return new FormGroup<PutNotificationConfigurationTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TopicARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutScalingPolicyType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		PolicyName: string;
		PolicyType?: string;
		AdjustmentType?: string;
		MinAdjustmentStep?: number | null;
		MinAdjustmentMagnitude?: number | null;
		ScalingAdjustment?: number | null;
		Cooldown?: number | null;
		MetricAggregationType?: string;
		StepAdjustments?: Array<StepAdjustment>;
		EstimatedInstanceWarmup?: number | null;
		TargetTrackingConfiguration?: TargetTrackingConfiguration;
		Enabled?: boolean | null;
		PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
	}
	export interface PutScalingPolicyTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
		PolicyType: FormControl<string | null | undefined>,
		AdjustmentType: FormControl<string | null | undefined>,
		MinAdjustmentStep: FormControl<number | null | undefined>,
		MinAdjustmentMagnitude: FormControl<number | null | undefined>,
		ScalingAdjustment: FormControl<number | null | undefined>,
		Cooldown: FormControl<number | null | undefined>,
		MetricAggregationType: FormControl<string | null | undefined>,
		EstimatedInstanceWarmup: FormControl<number | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutScalingPolicyTypeFormGroup() {
		return new FormGroup<PutScalingPolicyTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyType: new FormControl<string | null | undefined>(undefined),
			AdjustmentType: new FormControl<string | null | undefined>(undefined),
			MinAdjustmentStep: new FormControl<number | null | undefined>(undefined),
			MinAdjustmentMagnitude: new FormControl<number | null | undefined>(undefined),
			ScalingAdjustment: new FormControl<number | null | undefined>(undefined),
			Cooldown: new FormControl<number | null | undefined>(undefined),
			MetricAggregationType: new FormControl<string | null | undefined>(undefined),
			EstimatedInstanceWarmup: new FormControl<number | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutScheduledUpdateGroupActionType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		ScheduledActionName: string;
		Time?: Date;
		StartTime?: Date;
		EndTime?: Date;
		Recurrence?: string;
		MinSize?: number | null;
		MaxSize?: number | null;
		DesiredCapacity?: number | null;
		TimeZone?: string;
	}
	export interface PutScheduledUpdateGroupActionTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,
		Time: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Recurrence: FormControl<string | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		MaxSize: FormControl<number | null | undefined>,
		DesiredCapacity: FormControl<number | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreatePutScheduledUpdateGroupActionTypeFormGroup() {
		return new FormGroup<PutScheduledUpdateGroupActionTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Time: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Recurrence: new FormControl<string | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			MaxSize: new FormControl<number | null | undefined>(undefined),
			DesiredCapacity: new FormControl<number | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutWarmPoolType {

		/** Required */
		AutoScalingGroupName: string;
		MaxGroupPreparedCapacity?: number | null;
		MinSize?: number | null;
		PoolState?: WarmPoolState;
		InstanceReusePolicy?: InstanceReusePolicy;
	}
	export interface PutWarmPoolTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		MaxGroupPreparedCapacity: FormControl<number | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		PoolState: FormControl<WarmPoolState | null | undefined>,
	}
	export function CreatePutWarmPoolTypeFormGroup() {
		return new FormGroup<PutWarmPoolTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxGroupPreparedCapacity: new FormControl<number | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			PoolState: new FormControl<WarmPoolState | null | undefined>(undefined),
		});

	}

	export interface RecordLifecycleActionHeartbeatType {

		/** Required */
		LifecycleHookName: string;

		/** Required */
		AutoScalingGroupName: string;
		LifecycleActionToken?: string;
		InstanceId?: string;
	}
	export interface RecordLifecycleActionHeartbeatTypeFormProperties {

		/** Required */
		LifecycleHookName: FormControl<string | null | undefined>,

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		LifecycleActionToken: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateRecordLifecycleActionHeartbeatTypeFormGroup() {
		return new FormGroup<RecordLifecycleActionHeartbeatTypeFormProperties>({
			LifecycleHookName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifecycleActionToken: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RefreshStrategy { Rolling = 'Rolling' }

	export interface RollbackInstanceRefreshType {

		/** Required */
		AutoScalingGroupName: string;
	}
	export interface RollbackInstanceRefreshTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateRollbackInstanceRefreshTypeFormGroup() {
		return new FormGroup<RollbackInstanceRefreshTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScalingProcessQuery {

		/** Required */
		AutoScalingGroupName: string;
		ScalingProcesses?: Array<string>;
	}
	export interface ScalingProcessQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateScalingProcessQueryFormGroup() {
		return new FormGroup<ScalingProcessQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetDesiredCapacityType {

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		DesiredCapacity: number;
		HonorCooldown?: boolean | null;
	}
	export interface SetDesiredCapacityTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		DesiredCapacity: FormControl<number | null | undefined>,
		HonorCooldown: FormControl<boolean | null | undefined>,
	}
	export function CreateSetDesiredCapacityTypeFormGroup() {
		return new FormGroup<SetDesiredCapacityTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DesiredCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			HonorCooldown: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SetInstanceHealthQuery {

		/** Required */
		InstanceId: string;

		/** Required */
		HealthStatus: string;
		ShouldRespectGracePeriod?: boolean | null;
	}
	export interface SetInstanceHealthQueryFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		HealthStatus: FormControl<string | null | undefined>,
		ShouldRespectGracePeriod: FormControl<boolean | null | undefined>,
	}
	export function CreateSetInstanceHealthQueryFormGroup() {
		return new FormGroup<SetInstanceHealthQueryFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HealthStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShouldRespectGracePeriod: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SetInstanceProtectionQuery {

		/** Required */
		InstanceIds: Array<string>;

		/** Required */
		AutoScalingGroupName: string;

		/** Required */
		ProtectedFromScaleIn: boolean;
	}
	export interface SetInstanceProtectionQueryFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,

		/** Required */
		ProtectedFromScaleIn: FormControl<boolean | null | undefined>,
	}
	export function CreateSetInstanceProtectionQueryFormGroup() {
		return new FormGroup<SetInstanceProtectionQueryFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProtectedFromScaleIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartInstanceRefreshType {

		/** Required */
		AutoScalingGroupName: string;
		Strategy?: RefreshStrategy;
		DesiredConfiguration?: DesiredConfiguration;
		Preferences?: RefreshPreferences;
	}
	export interface StartInstanceRefreshTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		Strategy: FormControl<RefreshStrategy | null | undefined>,
	}
	export function CreateStartInstanceRefreshTypeFormGroup() {
		return new FormGroup<StartInstanceRefreshTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Strategy: new FormControl<RefreshStrategy | null | undefined>(undefined),
		});

	}

	export interface TerminateInstanceInAutoScalingGroupType {

		/** Required */
		InstanceId: string;

		/** Required */
		ShouldDecrementDesiredCapacity: boolean;
	}
	export interface TerminateInstanceInAutoScalingGroupTypeFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ShouldDecrementDesiredCapacity: FormControl<boolean | null | undefined>,
	}
	export function CreateTerminateInstanceInAutoScalingGroupTypeFormGroup() {
		return new FormGroup<TerminateInstanceInAutoScalingGroupTypeFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShouldDecrementDesiredCapacity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAutoScalingGroupType {

		/** Required */
		AutoScalingGroupName: string;
		LaunchConfigurationName?: string;
		LaunchTemplate?: LaunchTemplateSpecification;
		MixedInstancesPolicy?: MixedInstancesPolicy;
		MinSize?: number | null;
		MaxSize?: number | null;
		DesiredCapacity?: number | null;
		DefaultCooldown?: number | null;
		AvailabilityZones?: Array<string>;
		HealthCheckType?: string;
		HealthCheckGracePeriod?: number | null;
		PlacementGroup?: string;
		VPCZoneIdentifier?: string;
		TerminationPolicies?: Array<string>;
		NewInstancesProtectedFromScaleIn?: boolean | null;
		ServiceLinkedRoleARN?: string;
		MaxInstanceLifetime?: number | null;
		CapacityRebalance?: boolean | null;
		Context?: string;
		DesiredCapacityType?: string;
		DefaultInstanceWarmup?: number | null;
	}
	export interface UpdateAutoScalingGroupTypeFormProperties {

		/** Required */
		AutoScalingGroupName: FormControl<string | null | undefined>,
		LaunchConfigurationName: FormControl<string | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		MaxSize: FormControl<number | null | undefined>,
		DesiredCapacity: FormControl<number | null | undefined>,
		DefaultCooldown: FormControl<number | null | undefined>,
		HealthCheckType: FormControl<string | null | undefined>,
		HealthCheckGracePeriod: FormControl<number | null | undefined>,
		PlacementGroup: FormControl<string | null | undefined>,
		VPCZoneIdentifier: FormControl<string | null | undefined>,
		NewInstancesProtectedFromScaleIn: FormControl<boolean | null | undefined>,
		ServiceLinkedRoleARN: FormControl<string | null | undefined>,
		MaxInstanceLifetime: FormControl<number | null | undefined>,
		CapacityRebalance: FormControl<boolean | null | undefined>,
		Context: FormControl<string | null | undefined>,
		DesiredCapacityType: FormControl<string | null | undefined>,
		DefaultInstanceWarmup: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAutoScalingGroupTypeFormGroup() {
		return new FormGroup<UpdateAutoScalingGroupTypeFormProperties>({
			AutoScalingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LaunchConfigurationName: new FormControl<string | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			MaxSize: new FormControl<number | null | undefined>(undefined),
			DesiredCapacity: new FormControl<number | null | undefined>(undefined),
			DefaultCooldown: new FormControl<number | null | undefined>(undefined),
			HealthCheckType: new FormControl<string | null | undefined>(undefined),
			HealthCheckGracePeriod: new FormControl<number | null | undefined>(undefined),
			PlacementGroup: new FormControl<string | null | undefined>(undefined),
			VPCZoneIdentifier: new FormControl<string | null | undefined>(undefined),
			NewInstancesProtectedFromScaleIn: new FormControl<boolean | null | undefined>(undefined),
			ServiceLinkedRoleARN: new FormControl<string | null | undefined>(undefined),
			MaxInstanceLifetime: new FormControl<number | null | undefined>(undefined),
			CapacityRebalance: new FormControl<boolean | null | undefined>(undefined),
			Context: new FormControl<string | null | undefined>(undefined),
			DesiredCapacityType: new FormControl<string | null | undefined>(undefined),
			DefaultInstanceWarmup: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=AttachInstances
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_AttachInstances(InstanceIds: Array<string> | null | undefined, AutoScalingGroupName: string, Action: GET_AttachInstancesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachInstances?' + InstanceIds?.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
		 * Get #Action=AttachLoadBalancerTargetGroups
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} TargetGroupARNs The Amazon Resource Names (ARNs) of the target groups. You can specify up to 10 target groups. To get the ARN of a target group, use the Elastic Load Balancing <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.
		 * @return {void} Success
		 */
		GET_AttachLoadBalancerTargetGroups(AutoScalingGroupName: string, TargetGroupARNs: Array<string>, Action: GET_AttachLoadBalancerTargetGroupsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachLoadBalancerTargetGroups?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + TargetGroupARNs.map(z => `TargetGroupARNs=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This API operation is superseded by <a>AttachTrafficSources</a>, which can attach multiple traffic sources types. We recommend using <code>AttachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>AttachLoadBalancers</code>. You can use both the original <code>AttachLoadBalancers</code> API operation and <code>AttachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach a load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=AttachLoadBalancers
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} LoadBalancerNames The names of the load balancers. You can specify up to 10 load balancers.
		 * @return {void} Success
		 */
		GET_AttachLoadBalancers(AutoScalingGroupName: string, LoadBalancerNames: Array<string>, Action: GET_AttachLoadBalancersAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachLoadBalancers?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches one or more traffic sources to the specified Auto Scaling group.</p> <p>You can use any of the following as traffic sources for an Auto Scaling group:</p> <ul> <li> <p>Application Load Balancer</p> </li> <li> <p>Classic Load Balancer</p> </li> <li> <p>Gateway Load Balancer</p> </li> <li> <p>Network Load Balancer</p> </li> <li> <p>VPC Lattice</p> </li> </ul> <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling group. </p> <p>After the operation completes, use the <a>DescribeTrafficSources</a> API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the <a>DetachTrafficSources</a> API.</p>
		 * Get #Action=AttachTrafficSources
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<TrafficSourceIdentifier>} TrafficSources The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources.
		 * @return {void} Success
		 */
		GET_AttachTrafficSources(AutoScalingGroupName: string, TrafficSources: Array<TrafficSourceIdentifier>, Action: GET_AttachTrafficSourcesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachTrafficSources?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + TrafficSources.map(z => `TrafficSources=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes one or more scheduled actions for the specified Auto Scaling group.
		 * Get #Action=BatchDeleteScheduledAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} ScheduledActionNames The names of the scheduled actions to delete. The maximum number allowed is 50. 
		 * @return {void} Success
		 */
		GET_BatchDeleteScheduledAction(AutoScalingGroupName: string, ScheduledActionNames: Array<string>, Action: GET_BatchDeleteScheduledActionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchDeleteScheduledAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScheduledActionNames.map(z => `ScheduledActionNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates one or more scheduled scaling actions for an Auto Scaling group.
		 * Get #Action=BatchPutScheduledUpdateGroupAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<ScheduledUpdateGroupActionRequest>} ScheduledUpdateGroupActions One or more scheduled actions. The maximum number allowed is 50.
		 * @return {void} Success
		 */
		GET_BatchPutScheduledUpdateGroupAction(AutoScalingGroupName: string, ScheduledUpdateGroupActions: Array<ScheduledUpdateGroupActionRequest>, Action: GET_BatchPutScheduledUpdateGroupActionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchPutScheduledUpdateGroupAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScheduledUpdateGroupActions.map(z => `ScheduledUpdateGroupActions=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error occurs.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>When you cancel an instance refresh, this does not roll back any changes that it made. Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>
		 * Get #Action=CancelInstanceRefresh
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_CancelInstanceRefresh(AutoScalingGroupName: string, Action: GET_CancelInstanceRefreshAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CancelInstanceRefresh?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/completing-lifecycle-hooks.html">Complete a lifecycle action</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=CompleteLifecycleAction
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 *     Min length: 1    Max length: 255
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 1600
		 * @param {string} LifecycleActionToken A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook.
		 *     Min length: 36    Max length: 36
		 * @param {string} LifecycleActionResult The action for the group to take. You can specify either <code>CONTINUE</code> or <code>ABANDON</code>.
		 * @param {string} InstanceId The ID of the instance.
		 *     Min length: 1    Max length: 19
		 * @return {void} Success
		 */
		GET_CompleteLifecycleAction(LifecycleHookName: string, AutoScalingGroupName: string, LifecycleActionToken: string | null | undefined, LifecycleActionResult: string, InstanceId: string | null | undefined, Action: GET_CompleteLifecycleActionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CompleteLifecycleAction?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LifecycleActionToken=' + (LifecycleActionToken == null ? '' : encodeURIComponent(LifecycleActionToken)) + '&LifecycleActionResult=' + (LifecycleActionResult == null ? '' : encodeURIComponent(LifecycleActionResult)) + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>
		 * Get #Action=CreateAutoScalingGroup
		 * @param {string} AutoScalingGroupName <p>The name of the Auto Scaling group. This name must be unique per Region per account.</p> <p>The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.</p> <note> <p>You cannot use a colon (:) in the name.</p> </note>
		 *     Min length: 1    Max length: 255
		 * @param {string} LaunchConfigurationName <p>The name of the launch configuration to use to launch instances. </p> <p>Conditional: You must specify either a launch template (<code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>) or a launch configuration (<code>LaunchConfigurationName</code> or <code>InstanceId</code>).</p>
		 *     Min length: 1    Max length: 255
		 * @param {GET_CreateAutoScalingGroupLaunchTemplate} LaunchTemplate <p>Information used to specify the launch template and version to use to launch instances. </p> <p>Conditional: You must specify either a launch template (<code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>) or a launch configuration (<code>LaunchConfigurationName</code> or <code>InstanceId</code>).</p> <note> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a launch template for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>
		 * @param {GET_CreateAutoScalingGroupMixedInstancesPolicy} MixedInstancesPolicy The mixed instances policy. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {string} InstanceId The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> API operation. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html">Creating an Auto Scaling group using an EC2 instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 *     Min length: 1    Max length: 19
		 * @param {number} MinSize The minimum size of the group.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxSize <p>The maximum size of the group.</p> <note> <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above <code>MaxSize</code> to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).</p> </note>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} DesiredCapacity The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} DefaultCooldown <p> <i>Only needed if you use simple scaling policies.</i> </p> <p>The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Default: <code>300</code> seconds</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} AvailabilityZones A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the <code>VPCZoneIdentifier</code> property, or for attaching a network interface when an existing network interface ID is specified in a launch template.
		 * @param {Array<string>} LoadBalancerNames A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the <code>TargetGroupARNs</code> property instead.
		 * @param {Array<string>} TargetGroupARNs The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {string} HealthCheckType <p>A comma-separated value string of one or more health check types.</p> <p>The valid values are <code>EC2</code>, <code>ELB</code>, and <code>VPC_LATTICE</code>. <code>EC2</code> is the default health check and cannot be disabled. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Only specify <code>EC2</code> if you must clear a value that was previously set.</p>
		 *     Min length: 1    Max length: 32
		 * @param {number} HealthCheckGracePeriod <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the <code>InService</code> state. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html">Set the health check grace period for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Default: <code>0</code> seconds</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} PlacementGroup <p>The name of the placement group into which to launch your instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <note> <p>A <i>cluster</i> placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group. </p> </note>
		 *     Min length: 1    Max length: 255
		 * @param {string} VPCZoneIdentifier A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify must reside in those Availability Zones.
		 *     Min length: 1    Max length: 2047
		 * @param {Array<string>} TerminationPolicies <p>A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid values: <code>Default</code> | <code>AllocationStrategy</code> | <code>ClosestToNextInstanceHour</code> | <code>NewestInstance</code> | <code>OldestInstance</code> | <code>OldestLaunchConfiguration</code> | <code>OldestLaunchTemplate</code> | <code>arn:aws:lambda:region:account-id:function:my-function:my-alias</code> </p>
		 * @param {boolean} NewInstancesProtectedFromScaleIn Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {boolean} CapacityRebalance Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html">Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions</a> in the in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {Array<LifecycleHookSpecification>} LifecycleHookSpecificationList One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.
		 * @param {Array<Tag>} Tags One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {string} ServiceLinkedRoleARN The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named <code>AWSServiceRoleForAutoScaling</code>, which it creates if it does not exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-linked roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 *     Min length: 1    Max length: 1600
		 * @param {number} MaxInstanceLifetime The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling instances based on maximum instance lifetime</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Context Reserved.
		 * @param {string} DesiredCapacityType <p>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports <code>DesiredCapacityType</code> for attribute-based instance type selection only. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>By default, Amazon EC2 Auto Scaling specifies <code>units</code>, which translates into number of instances.</p> <p>Valid values: <code>units</code> | <code>vcpu</code> | <code>memory-mib</code> </p>
		 *     Min length: 1    Max length: 255
		 * @param {number} DefaultInstanceWarmup <p>The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the <code>InService</code> state. </p> <p>During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html">Set the default instance warmup for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <important> <p>To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, <i>even if it is set to 0 seconds</i>. To remove a value that you previously set, include the property but specify <code>-1</code> for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of <code>0</code> or other nominal value.</p> </important> <p>Default: None </p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<TrafficSourceIdentifier>} TrafficSources The list of traffic sources to attach to this Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Classic Load Balancer, Application Load Balancer, Gateway Load Balancer, Network Load Balancer, and VPC Lattice.
		 * @return {void} Success
		 */
		GET_CreateAutoScalingGroup(AutoScalingGroupName: string, LaunchConfigurationName: string | null | undefined, LaunchTemplate: GET_CreateAutoScalingGroupLaunchTemplate | null | undefined, MixedInstancesPolicy: GET_CreateAutoScalingGroupMixedInstancesPolicy | null | undefined, InstanceId: string | null | undefined, MinSize: number, MaxSize: number, DesiredCapacity: number | null | undefined, DefaultCooldown: number | null | undefined, AvailabilityZones: Array<string> | null | undefined, LoadBalancerNames: Array<string> | null | undefined, TargetGroupARNs: Array<string> | null | undefined, HealthCheckType: string | null | undefined, HealthCheckGracePeriod: number | null | undefined, PlacementGroup: string | null | undefined, VPCZoneIdentifier: string | null | undefined, TerminationPolicies: Array<string> | null | undefined, NewInstancesProtectedFromScaleIn: boolean | null | undefined, CapacityRebalance: boolean | null | undefined, LifecycleHookSpecificationList: Array<LifecycleHookSpecification> | null | undefined, Tags: Array<Tag> | null | undefined, ServiceLinkedRoleARN: string | null | undefined, MaxInstanceLifetime: number | null | undefined, Context: string | null | undefined, DesiredCapacityType: string | null | undefined, DefaultInstanceWarmup: number | null | undefined, TrafficSources: Array<TrafficSourceIdentifier> | null | undefined, Action: GET_CreateAutoScalingGroupAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateAutoScalingGroup?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&LaunchTemplate=' + LaunchTemplate + '&MixedInstancesPolicy=' + MixedInstancesPolicy + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MinSize=' + MinSize + '&MaxSize=' + MaxSize + '&DesiredCapacity=' + DesiredCapacity + '&DefaultCooldown=' + DefaultCooldown + '&' + AvailabilityZones?.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&' + LoadBalancerNames?.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&' + TargetGroupARNs?.map(z => `TargetGroupARNs=${encodeURIComponent(z)}`).join('&') + '&HealthCheckType=' + (HealthCheckType == null ? '' : encodeURIComponent(HealthCheckType)) + '&HealthCheckGracePeriod=' + HealthCheckGracePeriod + '&PlacementGroup=' + (PlacementGroup == null ? '' : encodeURIComponent(PlacementGroup)) + '&VPCZoneIdentifier=' + (VPCZoneIdentifier == null ? '' : encodeURIComponent(VPCZoneIdentifier)) + '&' + TerminationPolicies?.map(z => `TerminationPolicies=${encodeURIComponent(z)}`).join('&') + '&NewInstancesProtectedFromScaleIn=' + NewInstancesProtectedFromScaleIn + '&CapacityRebalance=' + CapacityRebalance + '&' + LifecycleHookSpecificationList?.map(z => `LifecycleHookSpecificationList=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ServiceLinkedRoleARN=' + (ServiceLinkedRoleARN == null ? '' : encodeURIComponent(ServiceLinkedRoleARN)) + '&MaxInstanceLifetime=' + MaxInstanceLifetime + '&Context=' + (Context == null ? '' : encodeURIComponent(Context)) + '&DesiredCapacityType=' + (DesiredCapacityType == null ? '' : encodeURIComponent(DesiredCapacityType)) + '&DefaultInstanceWarmup=' + DefaultInstanceWarmup + '&' + TrafficSources?.map(z => `TrafficSources=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </note>
		 * Get #Action=CreateLaunchConfiguration
		 * @param {string} LaunchConfigurationName The name of the launch configuration. This name must be unique per Region per account.
		 *     Min length: 1    Max length: 255
		 * @param {string} ImageId <p>The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux AMI</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>If you specify <code>InstanceId</code>, an <code>ImageId</code> is not required.</p>
		 *     Min length: 1    Max length: 255
		 * @param {string} KeyName The name of the key pair. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Linux instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} SecurityGroups A list that contains the security group IDs to assign to the instances in the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Control traffic to resources using security groups</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
		 * @param {string} ClassicLinkVPCId Available for backward compatibility.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} ClassicLinkVPCSecurityGroups Available for backward compatibility.
		 * @param {string} UserData The user data to make available to the launched EC2 instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html">Instance metadata and user data</a> (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
		 *     Max length: 21847
		 * @param {string} InstanceId <p>The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping.</p> <p>To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-lc-with-instanceID.html">Creating a launch configuration using an EC2 instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 *     Min length: 1    Max length: 19
		 * @param {string} InstanceType <p>Specifies the instance type of the EC2 instance. For information about available instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available instance types</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>If you specify <code>InstanceId</code>, an <code>InstanceType</code> is not required.</p>
		 *     Min length: 1    Max length: 255
		 * @param {string} KernelId <p>The ID of the kernel associated with the AMI.</p> <note> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">User provided kernels</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note>
		 *     Min length: 1    Max length: 255
		 * @param {string} RamdiskId <p>The ID of the RAM disk to select.</p> <note> <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">User provided kernels</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note>
		 *     Min length: 1    Max length: 255
		 * @param {Array<BlockDeviceMapping>} BlockDeviceMappings The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device mappings</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
		 * @param {GET_CreateLaunchConfigurationInstanceMonitoring} InstanceMonitoring <p>Controls whether instances in this group are launched with detailed (<code>true</code>) or basic (<code>false</code>) monitoring.</p> <p>The default value is <code>true</code> (enabled).</p> <important> <p>When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/latest/userguide/enable-as-instance-metrics.html">Configure Monitoring for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </important>
		 * @param {string} SpotPrice <p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-template-spot-instances.html">Request Spot Instances for fault-tolerant and flexible applications</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid Range: Minimum value of 0.001</p> <note> <p>When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.</p> </note>
		 *     Min length: 1    Max length: 255
		 * @param {string} IamInstanceProfile The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM role for applications that run on Amazon EC2 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 *     Min length: 1    Max length: 1600
		 * @param {boolean} EbsOptimized <p>Specifies whether the launch configuration is optimized for EBS I/O (<code>true</code>) or not (<code>false</code>). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>The default value is <code>false</code>.</p>
		 * @param {boolean} AssociatePublicIpAddress <p>Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet.</p> <p>If you specify <code>true</code>, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling instances in a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you specify this property, you must specify at least one subnet for <code>VPCZoneIdentifier</code> when you create your group.</p>
		 * @param {string} PlacementTenancy <p>The tenancy of the instance, either <code>default</code> or <code>dedicated</code>. An instance with <code>dedicated</code> tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to <code>default</code>), you must set the value of this property to <code>dedicated</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-dedicated-instances.html">Configuring instance tenancy with Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you specify <code>PlacementTenancy</code>, you must specify at least one subnet for <code>VPCZoneIdentifier</code> when you create your group.</p> <p>Valid values: <code>default</code> | <code>dedicated</code> </p>
		 *     Min length: 1    Max length: 64
		 * @param {GET_CreateLaunchConfigurationMetadataOptions} MetadataOptions The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @return {void} Success
		 */
		GET_CreateLaunchConfiguration(LaunchConfigurationName: string, ImageId: string | null | undefined, KeyName: string | null | undefined, SecurityGroups: Array<string> | null | undefined, ClassicLinkVPCId: string | null | undefined, ClassicLinkVPCSecurityGroups: Array<string> | null | undefined, UserData: string | null | undefined, InstanceId: string | null | undefined, InstanceType: string | null | undefined, KernelId: string | null | undefined, RamdiskId: string | null | undefined, BlockDeviceMappings: Array<BlockDeviceMapping> | null | undefined, InstanceMonitoring: GET_CreateLaunchConfigurationInstanceMonitoring | null | undefined, SpotPrice: string | null | undefined, IamInstanceProfile: string | null | undefined, EbsOptimized: boolean | null | undefined, AssociatePublicIpAddress: boolean | null | undefined, PlacementTenancy: string | null | undefined, MetadataOptions: GET_CreateLaunchConfigurationMetadataOptions | null | undefined, Action: GET_CreateLaunchConfigurationAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLaunchConfiguration?LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&ImageId=' + (ImageId == null ? '' : encodeURIComponent(ImageId)) + '&KeyName=' + (KeyName == null ? '' : encodeURIComponent(KeyName)) + '&' + SecurityGroups?.map(z => `SecurityGroups=${encodeURIComponent(z)}`).join('&') + '&ClassicLinkVPCId=' + (ClassicLinkVPCId == null ? '' : encodeURIComponent(ClassicLinkVPCId)) + '&' + ClassicLinkVPCSecurityGroups?.map(z => `ClassicLinkVPCSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&UserData=' + (UserData == null ? '' : encodeURIComponent(UserData)) + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&InstanceType=' + (InstanceType == null ? '' : encodeURIComponent(InstanceType)) + '&KernelId=' + (KernelId == null ? '' : encodeURIComponent(KernelId)) + '&RamdiskId=' + (RamdiskId == null ? '' : encodeURIComponent(RamdiskId)) + '&' + BlockDeviceMappings?.map(z => `BlockDeviceMappings=${z}`).join('&') + '&InstanceMonitoring=' + InstanceMonitoring + '&SpotPrice=' + (SpotPrice == null ? '' : encodeURIComponent(SpotPrice)) + '&IamInstanceProfile=' + (IamInstanceProfile == null ? '' : encodeURIComponent(IamInstanceProfile)) + '&EbsOptimized=' + EbsOptimized + '&AssociatePublicIpAddress=' + AssociatePublicIpAddress + '&PlacementTenancy=' + (PlacementTenancy == null ? '' : encodeURIComponent(PlacementTenancy)) + '&MetadataOptions=' + MetadataOptions + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=CreateOrUpdateTags
		 * @param {Array<Tag>} Tags One or more tags.
		 * @return {void} Success
		 */
		GET_CreateOrUpdateTags(Tags: Array<Tag>, Action: GET_CreateOrUpdateTagsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateOrUpdateTags?' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p> <p>If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DeleteAutoScalingGroup
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {boolean} ForceDelete Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This action also deletes any outstanding lifecycle actions associated with the group.
		 * @return {void} Success
		 */
		GET_DeleteAutoScalingGroup(AutoScalingGroupName: string, ForceDelete: boolean | null | undefined, Action: GET_DeleteAutoScalingGroupAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAutoScalingGroup?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ForceDelete=' + ForceDelete + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
		 * Get #Action=DeleteLaunchConfiguration
		 * @param {string} LaunchConfigurationName The name of the launch configuration.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_DeleteLaunchConfiguration(LaunchConfigurationName: string, Action: GET_DeleteLaunchConfigurationAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLaunchConfiguration?LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
		 * Get #Action=DeleteLifecycleHook
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 *     Min length: 1    Max length: 255
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_DeleteLifecycleHook(LifecycleHookName: string, AutoScalingGroupName: string, Action: GET_DeleteLifecycleHookAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLifecycleHook?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified notification.
		 * Get #Action=DeleteNotificationConfiguration
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} TopicARN The Amazon Resource Name (ARN) of the Amazon SNS topic.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_DeleteNotificationConfiguration(AutoScalingGroupName: string, TopicARN: string, Action: GET_DeleteNotificationConfigurationAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteNotificationConfiguration?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&TopicARN=' + (TopicARN == null ? '' : encodeURIComponent(TopicARN)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DeletePolicy
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} PolicyName The name or Amazon Resource Name (ARN) of the policy.
		 *     Min length: 1    Max length: 1600
		 * @return {void} Success
		 */
		GET_DeletePolicy(AutoScalingGroupName: string | null | undefined, PolicyName: string, Action: GET_DeletePolicyAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePolicy?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified scheduled action.
		 * Get #Action=DeleteScheduledAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} ScheduledActionName The name of the action to delete.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_DeleteScheduledAction(AutoScalingGroupName: string, ScheduledActionName: string, Action: GET_DeleteScheduledActionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteScheduledAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified tags.
		 * Get #Action=DeleteTags
		 * @param {Array<Tag>} Tags One or more tags.
		 * @return {void} Success
		 */
		GET_DeleteTags(Tags: Array<Tag>, Action: GET_DeleteTagsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteTags?' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DeleteWarmPool
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {boolean} ForceDelete Specifies that the warm pool is to be deleted along with all of its associated instances, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances.
		 * @return {void} Success
		 */
		GET_DeleteWarmPool(AutoScalingGroupName: string, ForceDelete: boolean | null | undefined, Action: GET_DeleteWarmPoolAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteWarmPool?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ForceDelete=' + ForceDelete + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DescribeAccountLimits
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(Action: GET_DescribeAccountLimitsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountLimits?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Post #Action=DescribeAccountLimits
		 * @return {void} Success
		 */
		POST_DescribeAccountLimits(Action: GET_DescribeAccountLimitsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeAccountLimits?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
		 * Get #Action=DescribeAdjustmentTypes
		 * @return {void} Success
		 */
		GET_DescribeAdjustmentTypes(Action: GET_DescribeAdjustmentTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAdjustmentTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
		 * Post #Action=DescribeAdjustmentTypes
		 * @return {void} Success
		 */
		POST_DescribeAdjustmentTypes(Action: GET_DescribeAdjustmentTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeAdjustmentTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups. </p> <p>This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
		 * Get #Action=DescribeAutoScalingGroups
		 * @param {Array<string>} AutoScalingGroupNames <p>The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can optionally increase this limit using the <code>MaxRecords</code> property.</p> <p>If you omit this property, all Auto Scaling groups are described.</p>
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<Filter>} Filters One or more filters to limit the results based on specific tags. 
		 * @return {void} Success
		 */
		GET_DescribeAutoScalingGroups(AutoScalingGroupNames: Array<string> | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Filters: Array<Filter> | null | undefined, Action: GET_DescribeAutoScalingGroupsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAutoScalingGroups?' + AutoScalingGroupNames?.map(z => `AutoScalingGroupNames=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&' + Filters?.map(z => `Filters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the Auto Scaling instances in the account and Region.
		 * Get #Action=DescribeAutoScalingInstances
		 * @param {Array<string>} InstanceIds <p>The IDs of the instances. If you omit this property, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 items.</p>
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>50</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @return {void} Success
		 */
		GET_DescribeAutoScalingInstances(InstanceIds: Array<string> | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeAutoScalingInstancesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAutoScalingInstances?' + InstanceIds?.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the notification types that are supported by Amazon EC2 Auto Scaling.
		 * Get #Action=DescribeAutoScalingNotificationTypes
		 * @return {void} Success
		 */
		GET_DescribeAutoScalingNotificationTypes(Action: GET_DescribeAutoScalingNotificationTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAutoScalingNotificationTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the notification types that are supported by Amazon EC2 Auto Scaling.
		 * Post #Action=DescribeAutoScalingNotificationTypes
		 * @return {void} Success
		 */
		POST_DescribeAutoScalingNotificationTypes(Action: GET_DescribeAutoScalingNotificationTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeAutoScalingNotificationTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh.</p>
		 * Get #Action=DescribeInstanceRefreshes
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} InstanceRefreshIds One or more instance refresh IDs.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeInstanceRefreshes(AutoScalingGroupName: string, InstanceRefreshIds: Array<string> | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeInstanceRefreshesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeInstanceRefreshes?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + InstanceRefreshIds?.map(z => `InstanceRefreshIds=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the launch configurations in the account and Region.
		 * Get #Action=DescribeLaunchConfigurations
		 * @param {Array<string>} LaunchConfigurationNames <p>The launch configuration names. If you omit this property, all launch configurations are described.</p> <p>Array Members: Maximum number of 50 items.</p>
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeLaunchConfigurations(LaunchConfigurationNames: Array<string> | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeLaunchConfigurationsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLaunchConfigurations?' + LaunchConfigurationNames?.map(z => `LaunchConfigurationNames=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
		 * Get #Action=DescribeLifecycleHookTypes
		 * @return {void} Success
		 */
		GET_DescribeLifecycleHookTypes(Action: GET_DescribeLifecycleHookTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLifecycleHookTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
		 * Post #Action=DescribeLifecycleHookTypes
		 * @return {void} Success
		 */
		POST_DescribeLifecycleHookTypes(Action: GET_DescribeLifecycleHookTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeLifecycleHookTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the lifecycle hooks for the specified Auto Scaling group.
		 * Get #Action=DescribeLifecycleHooks
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} LifecycleHookNames The names of one or more lifecycle hooks. If you omit this property, all lifecycle hooks are described.
		 *     Maximum items: 50
		 * @return {void} Success
		 */
		GET_DescribeLifecycleHooks(AutoScalingGroupName: string, LifecycleHookNames: Array<string> | null | undefined, Action: GET_DescribeLifecycleHooksAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLifecycleHooks?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + LifecycleHookNames?.map(z => `LifecycleHookNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You can use both the original <code>DescribeLoadBalancerTargetGroups</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p> <p>To determine the attachment status of the target group, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p> <note> <p>You can use this operation to describe target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>
		 * Get #Action=DescribeLoadBalancerTargetGroups
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerTargetGroups(AutoScalingGroupName: string, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeLoadBalancerTargetGroupsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancerTargetGroups?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This API operation is superseded by <a>DescribeTrafficSources</a>, which can describe multiple traffic sources types. We recommend using <code>DescribeTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DescribeLoadBalancers</code>. You can use both the original <code>DescribeLoadBalancers</code> API operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the attachment status of the load balancer, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
		 * Get #Action=DescribeLoadBalancers
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancers(AutoScalingGroupName: string, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeLoadBalancersAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancers?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.
		 * Get #Action=DescribeMetricCollectionTypes
		 * @return {void} Success
		 */
		GET_DescribeMetricCollectionTypes(Action: GET_DescribeMetricCollectionTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeMetricCollectionTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.
		 * Post #Action=DescribeMetricCollectionTypes
		 * @return {void} Success
		 */
		POST_DescribeMetricCollectionTypes(Action: GET_DescribeMetricCollectionTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeMetricCollectionTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.
		 * Get #Action=DescribeNotificationConfigurations
		 * @param {Array<string>} AutoScalingGroupNames The name of the Auto Scaling group.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeNotificationConfigurations(AutoScalingGroupNames: Array<string> | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeNotificationConfigurationsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeNotificationConfigurations?' + AutoScalingGroupNames?.map(z => `AutoScalingGroupNames=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the scaling policies in the account and Region.
		 * Get #Action=DescribePolicies
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} PolicyNames <p>The names of one or more policies. If you omit this property, all policies are described. If a group name is provided, the results are limited to that group. If you specify an unknown policy name, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 items.</p>
		 * @param {Array<string>} PolicyTypes One or more policy types. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, <code>TargetTrackingScaling</code>, and <code>PredictiveScaling</code>.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to be returned with each call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribePolicies(AutoScalingGroupName: string | null | undefined, PolicyNames: Array<string> | null | undefined, PolicyTypes: Array<string> | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribePoliciesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePolicies?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + PolicyNames?.map(z => `PolicyNames=${encodeURIComponent(z)}`).join('&') + '&' + PolicyTypes?.map(z => `PolicyTypes=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
		 * Get #Action=DescribeScalingActivities
		 * @param {Array<string>} ActivityIds <p>The activity IDs of the desired scaling activities. If you omit this property, all activities for the past six weeks are described. If unknown activities are requested, they are ignored with no error. If you specify an Auto Scaling group, the results are limited to that group.</p> <p>Array Members: Maximum number of 50 IDs.</p>
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {boolean} IncludeDeletedGroups Indicates whether to include scaling activity from deleted Auto Scaling groups.
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @return {void} Success
		 */
		GET_DescribeScalingActivities(ActivityIds: Array<string> | null | undefined, AutoScalingGroupName: string | null | undefined, IncludeDeletedGroups: boolean | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeScalingActivitiesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScalingActivities?' + ActivityIds?.map(z => `ActivityIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&IncludeDeletedGroups=' + IncludeDeletedGroups + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
		 * Get #Action=DescribeScalingProcessTypes
		 * @return {void} Success
		 */
		GET_DescribeScalingProcessTypes(Action: GET_DescribeScalingProcessTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScalingProcessTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
		 * Post #Action=DescribeScalingProcessTypes
		 * @return {void} Success
		 */
		POST_DescribeScalingProcessTypes(Action: GET_DescribeScalingProcessTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeScalingProcessTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
		 * Get #Action=DescribeScheduledActions
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} ScheduledActionNames <p>The names of one or more scheduled actions. If you omit this property, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.</p> <p>Array Members: Maximum number of 50 actions.</p>
		 * @param {Date} StartTime The earliest scheduled start time to return. If scheduled action names are provided, this property is ignored.
		 * @param {Date} EndTime The latest scheduled start time to return. If scheduled action names are provided, this property is ignored.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeScheduledActions(AutoScalingGroupName: string | null | undefined, ScheduledActionNames: Array<string> | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeScheduledActionsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScheduledActions?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScheduledActionNames?.map(z => `ScheduledActionNames=${encodeURIComponent(z)}`).join('&') + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DescribeTags
		 * @param {Array<Filter>} Filters One or more filters to scope the tags to return. The maximum number of filters per filter type (for example, <code>auto-scaling-group</code>) is 1000.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeTags(Filters: Array<Filter> | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeTagsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTags?' + Filters?.map(z => `Filters=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DescribeTerminationPolicyTypes
		 * @return {void} Success
		 */
		GET_DescribeTerminationPolicyTypes(Action: GET_DescribeTerminationPolicyTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTerminationPolicyTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Post #Action=DescribeTerminationPolicyTypes
		 * @return {void} Success
		 */
		POST_DescribeTerminationPolicyTypes(Action: GET_DescribeTerminationPolicyTypesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeTerminationPolicyTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the traffic sources for the specified Auto Scaling group.</p> <p>You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type.</p> <p>If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group. </p>
		 * Get #Action=DescribeTrafficSources
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} TrafficSourceType <p>The traffic source type that you want to describe.</p> <p>The following lists the valid values:</p> <ul> <li> <p> <code>elb</code> if the traffic source is a Classic Load Balancer.</p> </li> <li> <p> <code>elbv2</code> if the traffic source is a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer.</p> </li> <li> <p> <code>vpc-lattice</code> if the traffic source is VPC Lattice.</p> </li> </ul>
		 *     Min length: 1    Max length: 255
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The maximum value is <code>50</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribeTrafficSources(AutoScalingGroupName: string, TrafficSourceType: string | null | undefined, NextToken: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeTrafficSourcesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTrafficSources?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&TrafficSourceType=' + (TrafficSourceType == null ? '' : encodeURIComponent(TrafficSourceType)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DescribeWarmPool
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {number} MaxRecords The maximum number of instances to return with this call. The maximum value is <code>50</code>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} NextToken The token for the next set of instances to return. (You received this token from a previous call.)
		 * @return {void} Success
		 */
		GET_DescribeWarmPool(AutoScalingGroupName: string, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeWarmPoolAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeWarmPool?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DetachInstances
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {boolean} ShouldDecrementDesiredCapacity Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.
		 * @return {void} Success
		 */
		GET_DetachInstances(InstanceIds: Array<string> | null | undefined, AutoScalingGroupName: string, ShouldDecrementDesiredCapacity: boolean, Action: GET_DetachInstancesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachInstances?' + InstanceIds?.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ShouldDecrementDesiredCapacity=' + ShouldDecrementDesiredCapacity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more target groups from the specified Auto Scaling group.</p> <p>When you detach a target group, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the <a>DescribeLoadBalancerTargetGroups</a> API call. The instances remain running.</p> <note> <p>You can use this operation to detach target groups that were attached by using <a>AttachLoadBalancerTargetGroups</a>, but not for target groups that were attached by using <a>AttachTrafficSources</a>.</p> </note>
		 * Get #Action=DetachLoadBalancerTargetGroups
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} TargetGroupARNs The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.
		 * @return {void} Success
		 */
		GET_DetachLoadBalancerTargetGroups(AutoScalingGroupName: string, TargetGroupARNs: Array<string>, Action: GET_DetachLoadBalancerTargetGroupsAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachLoadBalancerTargetGroups?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + TargetGroupARNs.map(z => `TargetGroupARNs=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This API operation is superseded by <a>DetachTrafficSources</a>, which can detach multiple traffic sources types. We recommend using <code>DetachTrafficSources</code> to simplify how you manage traffic sources. However, we continue to support <code>DetachLoadBalancers</code>. You can use both the original <code>DetachLoadBalancers</code> API operation and <code>DetachTrafficSources</code> on the same Auto Scaling group.</p> </note> <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
		 * Get #Action=DetachLoadBalancers
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} LoadBalancerNames The names of the load balancers. You can specify up to 10 load balancers.
		 * @return {void} Success
		 */
		GET_DetachLoadBalancers(AutoScalingGroupName: string, LoadBalancerNames: Array<string>, Action: GET_DetachLoadBalancersAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachLoadBalancers?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detaches one or more traffic sources from the specified Auto Scaling group.</p> <p>When you detach a traffic source, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>
		 * Get #Action=DetachTrafficSources
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<TrafficSourceIdentifier>} TrafficSources The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources.
		 * @return {void} Success
		 */
		GET_DetachTrafficSources(AutoScalingGroupName: string, TrafficSources: Array<TrafficSourceIdentifier>, Action: GET_DetachTrafficSourcesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachTrafficSources?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + TrafficSources.map(z => `TrafficSources=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables group metrics collection for the specified Auto Scaling group.
		 * Get #Action=DisableMetricsCollection
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} Metrics <p>Identifies the metrics to disable.</p> <p>You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>GroupMinSize</code> </p> </li> <li> <p> <code>GroupMaxSize</code> </p> </li> <li> <p> <code>GroupDesiredCapacity</code> </p> </li> <li> <p> <code>GroupInServiceInstances</code> </p> </li> <li> <p> <code>GroupPendingInstances</code> </p> </li> <li> <p> <code>GroupStandbyInstances</code> </p> </li> <li> <p> <code>GroupTerminatingInstances</code> </p> </li> <li> <p> <code>GroupTotalInstances</code> </p> </li> <li> <p> <code>GroupInServiceCapacity</code> </p> </li> <li> <p> <code>GroupPendingCapacity</code> </p> </li> <li> <p> <code>GroupStandbyCapacity</code> </p> </li> <li> <p> <code>GroupTerminatingCapacity</code> </p> </li> <li> <p> <code>GroupTotalCapacity</code> </p> </li> <li> <p> <code>WarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>WarmPoolWarmedCapacity</code> </p> </li> <li> <p> <code>WarmPoolPendingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTerminatingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTotalCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolTotalCapacity</code> </p> </li> </ul> <p>If you omit this property, all metrics are disabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#as-group-metrics">Auto Scaling group metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_DisableMetricsCollection(AutoScalingGroupName: string, Metrics: Array<string> | null | undefined, Action: GET_DisableMetricsCollectionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisableMetricsCollection?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + Metrics?.map(z => `Metrics=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables group metrics collection for the specified Auto Scaling group.</p> <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=EnableMetricsCollection
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} Metrics <p>Identifies the metrics to enable.</p> <p>You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>GroupMinSize</code> </p> </li> <li> <p> <code>GroupMaxSize</code> </p> </li> <li> <p> <code>GroupDesiredCapacity</code> </p> </li> <li> <p> <code>GroupInServiceInstances</code> </p> </li> <li> <p> <code>GroupPendingInstances</code> </p> </li> <li> <p> <code>GroupStandbyInstances</code> </p> </li> <li> <p> <code>GroupTerminatingInstances</code> </p> </li> <li> <p> <code>GroupTotalInstances</code> </p> </li> <li> <p> <code>GroupInServiceCapacity</code> </p> </li> <li> <p> <code>GroupPendingCapacity</code> </p> </li> <li> <p> <code>GroupStandbyCapacity</code> </p> </li> <li> <p> <code>GroupTerminatingCapacity</code> </p> </li> <li> <p> <code>GroupTotalCapacity</code> </p> </li> <li> <p> <code>WarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>WarmPoolWarmedCapacity</code> </p> </li> <li> <p> <code>WarmPoolPendingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTerminatingCapacity</code> </p> </li> <li> <p> <code>WarmPoolTotalCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolDesiredCapacity</code> </p> </li> <li> <p> <code>GroupAndWarmPoolTotalCapacity</code> </p> </li> </ul> <p>If you specify <code>Granularity</code> and don't specify any metrics, all metrics are enabled.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#as-group-metrics">Auto Scaling group metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {string} Granularity The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is <code>1Minute</code>.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_EnableMetricsCollection(AutoScalingGroupName: string, Metrics: Array<string> | null | undefined, Granularity: string, Action: GET_EnableMetricsCollectionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableMetricsCollection?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + Metrics?.map(z => `Metrics=${encodeURIComponent(z)}`).join('&') + '&Granularity=' + (Granularity == null ? '' : encodeURIComponent(Granularity)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=EnterStandby
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {boolean} ShouldDecrementDesiredCapacity Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to <code>Standby</code> mode.
		 * @return {void} Success
		 */
		GET_EnterStandby(InstanceIds: Array<string> | null | undefined, AutoScalingGroupName: string, ShouldDecrementDesiredCapacity: boolean, Action: GET_EnterStandbyAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnterStandby?' + InstanceIds?.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ShouldDecrementDesiredCapacity=' + ShouldDecrementDesiredCapacity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Executes the specified policy. This can be useful for testing the design of your scaling policy.
		 * Get #Action=ExecutePolicy
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} PolicyName The name or ARN of the policy.
		 *     Min length: 1    Max length: 1600
		 * @param {boolean} HonorCooldown <p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy.</p> <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {number} MetricValue <p>The metric value to compare to <code>BreachThreshold</code>. This enables you to execute a policy of type <code>StepScaling</code> and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59.</p> <p>If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error.</p> <p>Required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>
		 *     Type: double
		 * @param {number} BreachThreshold <p>The breach threshold for the alarm.</p> <p>Required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>
		 *     Type: double
		 * @return {void} Success
		 */
		GET_ExecutePolicy(AutoScalingGroupName: string | null | undefined, PolicyName: string, HonorCooldown: boolean | null | undefined, MetricValue: number | null | undefined, BreachThreshold: number | null | undefined, Action: GET_ExecutePolicyAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ExecutePolicy?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&HonorCooldown=' + HonorCooldown + '&MetricValue=' + MetricValue + '&BreachThreshold=' + BreachThreshold + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=ExitStandby
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_ExitStandby(InstanceIds: Array<string> | null | undefined, AutoScalingGroupName: string, Action: GET_ExitStandbyAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ExitStandby?' + InstanceIds?.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=GetPredictiveScalingForecast
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} PolicyName The name of the policy.
		 *     Min length: 1    Max length: 255
		 * @param {Date} StartTime The inclusive start time of the time range for the forecast data to get. At most, the date and time can be one year before the current date and time.
		 * @param {Date} EndTime <p>The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is 30 days. </p> <p>Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. Amazon EC2 Auto Scaling only issues forecasts for periods of two days in advance.</p>
		 * @return {void} Success
		 */
		GET_GetPredictiveScalingForecast(AutoScalingGroupName: string, PolicyName: string, StartTime: Date, EndTime: Date, Action: GET_GetPredictiveScalingForecastAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetPredictiveScalingForecast?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
		 * Get #Action=PutLifecycleHook
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 *     Min length: 1    Max length: 255
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} LifecycleTransition <p>The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.</p> <ul> <li> <p>To create a lifecycle hook for scale-out events, specify <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>.</p> </li> <li> <p>To create a lifecycle hook for scale-in events, specify <code>autoscaling:EC2_INSTANCE_TERMINATING</code>.</p> </li> </ul> <p>Required for new lifecycle hooks, but optional when updating existing hooks.</p>
		 * @param {string} RoleARN <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target.</p> <p>Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue. Required for new lifecycle hooks, but optional when updating existing hooks.</p>
		 *     Min length: 1    Max length: 255
		 * @param {string} NotificationTargetARN <p>The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in a wait state for the lifecycle hook. You can specify either an Amazon SNS topic or an Amazon SQS queue.</p> <p>If you specify an empty string, this overrides the current ARN.</p> <p>This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic.</p> <p>When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: <code>"Event": "autoscaling:TEST_NOTIFICATION"</code>.</p>
		 *     Min length: 0    Max length: 255
		 * @param {string} NotificationMetadata Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
		 *     Min length: 1    Max length: 1023
		 * @param {number} HeartbeatTimeout The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from <code>30</code> to <code>7200</code> seconds. The default value is <code>3600</code> seconds (1 hour).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} DefaultResult <p>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is <code>ABANDON</code>.</p> <p>Valid values: <code>CONTINUE</code> | <code>ABANDON</code> </p>
		 * @return {void} Success
		 */
		GET_PutLifecycleHook(LifecycleHookName: string, AutoScalingGroupName: string, LifecycleTransition: string | null | undefined, RoleARN: string | null | undefined, NotificationTargetARN: string | null | undefined, NotificationMetadata: string | null | undefined, HeartbeatTimeout: number | null | undefined, DefaultResult: string | null | undefined, Action: GET_PutLifecycleHookAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutLifecycleHook?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LifecycleTransition=' + (LifecycleTransition == null ? '' : encodeURIComponent(LifecycleTransition)) + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&NotificationTargetARN=' + (NotificationTargetARN == null ? '' : encodeURIComponent(NotificationTargetARN)) + '&NotificationMetadata=' + (NotificationMetadata == null ? '' : encodeURIComponent(NotificationMetadata)) + '&HeartbeatTimeout=' + HeartbeatTimeout + '&DefaultResult=' + (DefaultResult == null ? '' : encodeURIComponent(DefaultResult)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>
		 * Get #Action=PutNotificationConfiguration
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} TopicARN The Amazon Resource Name (ARN) of the Amazon SNS topic.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} NotificationTypes The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the <a>DescribeAutoScalingNotificationTypes</a> API.
		 * @return {void} Success
		 */
		GET_PutNotificationConfiguration(AutoScalingGroupName: string, TopicARN: string, NotificationTypes: Array<string>, Action: GET_PutNotificationConfigurationAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutNotificationConfiguration?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&TopicARN=' + (TopicARN == null ? '' : encodeURIComponent(TopicARN)) + '&' + NotificationTypes.map(z => `NotificationTypes=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>
		 * Get #Action=PutScalingPolicy
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} PolicyName The name of the policy.
		 *     Min length: 1    Max length: 255
		 * @param {string} PolicyType <p>One of the following policy types: </p> <ul> <li> <p> <code>TargetTrackingScaling</code> </p> </li> <li> <p> <code>StepScaling</code> </p> </li> <li> <p> <code>SimpleScaling</code> (default)</p> </li> <li> <p> <code>PredictiveScaling</code> </p> </li> </ul>
		 *     Min length: 1    Max length: 64
		 * @param {string} AdjustmentType <p>Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p> <p>Required if the policy type is <code>StepScaling</code> or <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling adjustment types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 *     Min length: 1    Max length: 255
		 * @param {number} MinAdjustmentStep Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code> instead.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MinAdjustmentMagnitude <p>The minimum value to scale by when the adjustment type is <code>PercentChangeInCapacity</code>. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a <code>MinAdjustmentMagnitude</code> of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.</p> <p>Valid only if the policy type is <code>StepScaling</code> or <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling adjustment types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>Some Auto Scaling groups use instance weights. In this case, set the <code>MinAdjustmentMagnitude</code> to a value that is at least as large as your largest instance weight.</p> </note>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} ScalingAdjustment <p>The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a non-negative value.</p> <p>Required if the policy type is <code>SimpleScaling</code>. (Not used with any other policy type.) </p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} Cooldown <p>A cooldown period, in seconds, that applies to a specific simple scaling policy. When a cooldown period is specified here, it overrides the default cooldown.</p> <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Default: None</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} MetricAggregationType <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the value is treated as <code>Average</code>.</p> <p>Valid only if the policy type is <code>StepScaling</code>.</p>
		 *     Min length: 1    Max length: 32
		 * @param {Array<StepAdjustment>} StepAdjustments <p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p> <p>Required if the policy type is <code>StepScaling</code>. (Not used with any other policy type.) </p>
		 * @param {number} EstimatedInstanceWarmup <p> <i>Not needed if the default instance warmup is defined for the group.</i> </p> <p>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This warm-up period applies to instances launched due to a specific target tracking or step scaling policy. When a warm-up period is specified here, it overrides the default instance warmup.</p> <p>Valid only if the policy type is <code>TargetTrackingScaling</code> or <code>StepScaling</code>.</p> <note> <p>The default is to use the value for the default instance warmup defined for the group. If default instance warmup is null, then <code>EstimatedInstanceWarmup</code> falls back to the value of default cooldown.</p> </note>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GET_PutScalingPolicyTargetTrackingConfiguration} TargetTrackingConfiguration <p>A target tracking scaling policy. Provides support for predefined or custom metrics.</p> <p>The following predefined metrics are available:</p> <ul> <li> <p> <code>ASGAverageCPUUtilization</code> </p> </li> <li> <p> <code>ASGAverageNetworkIn</code> </p> </li> <li> <p> <code>ASGAverageNetworkOut</code> </p> </li> <li> <p> <code>ALBRequestCountPerTarget</code> </p> </li> </ul> <p>If you specify <code>ALBRequestCountPerTarget</code> for the metric, you must specify the <code>ResourceLabel</code> property with the <code>PredefinedMetricSpecification</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_TargetTrackingConfiguration.html">TargetTrackingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p> <p>Required if the policy type is <code>TargetTrackingScaling</code>.</p>
		 * @param {boolean} Enabled Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enable-disable-scaling-policy.html">Disabling a scaling policy for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {GET_PutScalingPolicyPredictiveScalingConfiguration} PredictiveScalingConfiguration <p>A predictive scaling policy. Provides support for predefined and custom metrics.</p> <p>Predefined metrics include CPU utilization, network in/out, and the Application Load Balancer request count.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredictiveScalingConfiguration.html">PredictiveScalingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p> <p>Required if the policy type is <code>PredictiveScaling</code>.</p>
		 * @return {void} Success
		 */
		GET_PutScalingPolicy(AutoScalingGroupName: string, PolicyName: string, PolicyType: string | null | undefined, AdjustmentType: string | null | undefined, MinAdjustmentStep: number | null | undefined, MinAdjustmentMagnitude: number | null | undefined, ScalingAdjustment: number | null | undefined, Cooldown: number | null | undefined, MetricAggregationType: string | null | undefined, StepAdjustments: Array<StepAdjustment> | null | undefined, EstimatedInstanceWarmup: number | null | undefined, TargetTrackingConfiguration: GET_PutScalingPolicyTargetTrackingConfiguration | null | undefined, Enabled: boolean | null | undefined, PredictiveScalingConfiguration: GET_PutScalingPolicyPredictiveScalingConfiguration | null | undefined, Action: GET_PutScalingPolicyAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutScalingPolicy?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&PolicyType=' + (PolicyType == null ? '' : encodeURIComponent(PolicyType)) + '&AdjustmentType=' + (AdjustmentType == null ? '' : encodeURIComponent(AdjustmentType)) + '&MinAdjustmentStep=' + MinAdjustmentStep + '&MinAdjustmentMagnitude=' + MinAdjustmentMagnitude + '&ScalingAdjustment=' + ScalingAdjustment + '&Cooldown=' + Cooldown + '&MetricAggregationType=' + (MetricAggregationType == null ? '' : encodeURIComponent(MetricAggregationType)) + '&' + StepAdjustments?.map(z => `StepAdjustments=${z}`).join('&') + '&EstimatedInstanceWarmup=' + EstimatedInstanceWarmup + '&TargetTrackingConfiguration=' + TargetTrackingConfiguration + '&Enabled=' + Enabled + '&PredictiveScalingConfiguration=' + PredictiveScalingConfiguration + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>
		 * Get #Action=PutScheduledUpdateGroupAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} ScheduledActionName The name of this scaling action.
		 *     Min length: 1    Max length: 255
		 * @param {Date} Time This property is no longer used.
		 * @param {Date} StartTime <p>The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, <code>"2021-06-01T00:00:00Z"</code>).</p> <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.</p>
		 * @param {Date} EndTime The date and time for the recurring schedule to end, in UTC. For example, <code>"2021-06-01T00:00:00Z"</code>.
		 * @param {string} Recurrence <p>The recurring schedule for this action. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p> <p>When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action starts and stops.</p> <p>Cron expressions use Universal Coordinated Time (UTC) by default.</p>
		 *     Min length: 1    Max length: 255
		 * @param {number} MinSize The minimum size of the Auto Scaling group.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxSize The maximum size of the Auto Scaling group.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} DesiredCapacity <p>The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions. </p> <note> <p>You must specify at least one of the following properties: <code>MaxSize</code>, <code>MinSize</code>, or <code>DesiredCapacity</code>. </p> </note>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} TimeZone <p>Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default. </p> <p>Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For more information, see <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">https://en.wikipedia.org/wiki/List_of_tz_database_time_zones</a>.</p>
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_PutScheduledUpdateGroupAction(AutoScalingGroupName: string, ScheduledActionName: string, Time: Date | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Recurrence: string | null | undefined, MinSize: number | null | undefined, MaxSize: number | null | undefined, DesiredCapacity: number | null | undefined, TimeZone: string | null | undefined, Action: GET_PutScheduledUpdateGroupActionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutScheduledUpdateGroupAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&Time=' + Time?.toISOString() + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Recurrence=' + (Recurrence == null ? '' : encodeURIComponent(Recurrence)) + '&MinSize=' + MinSize + '&MaxSize=' + MaxSize + '&DesiredCapacity=' + DesiredCapacity + '&TimeZone=' + (TimeZone == null ? '' : encodeURIComponent(TimeZone)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>
		 * Get #Action=PutWarmPool
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {number} MaxGroupPreparedCapacity <p>Specifies the maximum number of instances that are allowed to be in the warm pool or in any state except <code>Terminated</code> for the Auto Scaling group. This is an optional property. Specify it only if you do not want the warm pool size to be determined by the difference between the group's maximum capacity and its desired capacity. </p> <important> <p>If a value for <code>MaxGroupPreparedCapacity</code> is not specified, Amazon EC2 Auto Scaling launches and maintains the difference between the group's maximum capacity and its desired capacity. If you specify a value for <code>MaxGroupPreparedCapacity</code>, Amazon EC2 Auto Scaling uses the difference between the <code>MaxGroupPreparedCapacity</code> and the desired capacity instead. </p> <p>The size of the warm pool is dynamic. Only when <code>MaxGroupPreparedCapacity</code> and <code>MinSize</code> are set to the same value does the warm pool have an absolute size.</p> </important> <p>If the desired capacity of the Auto Scaling group is higher than the <code>MaxGroupPreparedCapacity</code>, the capacity of the warm pool is 0, unless you specify a value for <code>MinSize</code>. To remove a value that you previously set, include the property but specify -1 for the value. </p>
		 *     Minimum: -1
		 * @param {number} MinSize Specifies the minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.
		 *     Minimum: 0
		 * @param {WarmPoolState} PoolState Sets the instance state to transition to after the lifecycle actions are complete. Default is <code>Stopped</code>.
		 * @param {GET_PutWarmPoolInstanceReusePolicy} InstanceReusePolicy Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.
		 * @return {void} Success
		 */
		GET_PutWarmPool(AutoScalingGroupName: string, MaxGroupPreparedCapacity: number | null | undefined, MinSize: number | null | undefined, PoolState: WarmPoolState | null | undefined, InstanceReusePolicy: GET_PutWarmPoolInstanceReusePolicy | null | undefined, Action: GET_PutWarmPoolAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutWarmPool?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&MaxGroupPreparedCapacity=' + MaxGroupPreparedCapacity + '&MinSize=' + MinSize + '&PoolState=' + PoolState + '&InstanceReusePolicy=' + InstanceReusePolicy + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, send a callback by using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=RecordLifecycleActionHeartbeat
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 *     Min length: 1    Max length: 255
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 1600
		 * @param {string} LifecycleActionToken A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook.
		 *     Min length: 36    Max length: 36
		 * @param {string} InstanceId The ID of the instance.
		 *     Min length: 1    Max length: 19
		 * @return {void} Success
		 */
		GET_RecordLifecycleActionHeartbeat(LifecycleHookName: string, AutoScalingGroupName: string, LifecycleActionToken: string | null | undefined, InstanceId: string | null | undefined, Action: GET_RecordLifecycleActionHeartbeatAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RecordLifecycleActionHeartbeat?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LifecycleActionToken=' + (LifecycleActionToken == null ? '' : encodeURIComponent(LifecycleActionToken)) + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=ResumeProcesses
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} ScalingProcesses <p>One or more of the following processes:</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>InstanceRefresh</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> </ul> <p>If you omit this property, all processes are specified.</p>
		 * @return {void} Success
		 */
		GET_ResumeProcesses(AutoScalingGroupName: string, ScalingProcesses: Array<string> | null | undefined, Action: GET_ResumeProcessesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResumeProcesses?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScalingProcesses?.map(z => `ScalingProcesses=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>A rollback is not supported in the following situations: </p> <ul> <li> <p>There is no desired configuration specified for the instance refresh.</p> </li> <li> <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the <code>ImageId</code> property.</p> </li> <li> <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or <code>$Default</code> version.</p> </li> </ul> <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>
		 * Get #Action=RollbackInstanceRefresh
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_RollbackInstanceRefresh(AutoScalingGroupName: string, Action: GET_RollbackInstanceRefreshAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RollbackInstanceRefresh?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=SetDesiredCapacity
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {number} DesiredCapacity The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} HonorCooldown Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.
		 * @return {void} Success
		 */
		GET_SetDesiredCapacity(AutoScalingGroupName: string, DesiredCapacity: number, HonorCooldown: boolean | null | undefined, Action: GET_SetDesiredCapacityAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetDesiredCapacity?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&DesiredCapacity=' + DesiredCapacity + '&HonorCooldown=' + HonorCooldown + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=SetInstanceHealth
		 * @param {string} InstanceId The ID of the instance.
		 *     Min length: 1    Max length: 19
		 * @param {string} HealthStatus The health status of the instance. Set to <code>Healthy</code> to have the instance remain in service. Set to <code>Unhealthy</code> to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.
		 *     Min length: 1    Max length: 32
		 * @param {boolean} ShouldRespectGracePeriod <p>If the Auto Scaling group of the specified instance has a <code>HealthCheckGracePeriod</code> specified for the group, by default, this call respects the grace period. Set this to <code>False</code>, to have the call not respect the grace period associated with the group.</p> <p>For more information about the health check grace period, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html">CreateAutoScalingGroup</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_SetInstanceHealth(InstanceId: string, HealthStatus: string, ShouldRespectGracePeriod: boolean | null | undefined, Action: GET_SetInstanceHealthAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetInstanceHealth?InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&HealthStatus=' + (HealthStatus == null ? '' : encodeURIComponent(HealthStatus)) + '&ShouldRespectGracePeriod=' + ShouldRespectGracePeriod + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>
		 * Get #Action=SetInstanceProtection
		 * @param {Array<string>} InstanceIds One or more instance IDs. You can specify up to 50 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {boolean} ProtectedFromScaleIn Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
		 * @return {void} Success
		 */
		GET_SetInstanceProtection(InstanceIds: Array<string>, AutoScalingGroupName: string, ProtectedFromScaleIn: boolean, Action: GET_SetInstanceProtectionAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetInstanceProtection?' + InstanceIds.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ProtectedFromScaleIn=' + ProtectedFromScaleIn + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Starts an instance refresh. During an instance refresh, Amazon EC2 Auto Scaling performs a rolling update of instances in an Auto Scaling group. Instances are terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh that is in progress, use the <a>CancelInstanceRefresh</a> API. </p> <p>An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in <code>Standby</code> state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the <a>DescribeScalingActivities</a> API.</p> <p>If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the <code>AutoRollback</code> property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the <a>RollbackInstanceRefresh</a> API. </p>
		 * Get #Action=StartInstanceRefresh
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {RefreshStrategy} Strategy The strategy to use for the instance refresh. The only valid value is <code>Rolling</code>.
		 * @param {GET_StartInstanceRefreshDesiredConfiguration} DesiredConfiguration <p>The desired configuration. For example, the desired configuration can specify a new launch template or a new version of the current launch template.</p> <p>Once the instance refresh succeeds, Amazon EC2 Auto Scaling updates the settings of the Auto Scaling group to reflect the new desired configuration. </p> <note> <p>When you specify a new launch template or a new version of the current launch template for your desired configuration, consider enabling the <code>SkipMatching</code> property in preferences. If it's enabled, Amazon EC2 Auto Scaling skips replacing instances that already use the specified launch template and instance types. This can help you reduce the number of replacements that are required to apply updates. </p> </note>
		 * @param {GET_StartInstanceRefreshPreferences} Preferences <p>Sets your preferences for the instance refresh so that it performs as expected when you start it. Includes the instance warmup time, the minimum healthy percentage, and the behaviors that you want Amazon EC2 Auto Scaling to use if instances that are in <code>Standby</code> state or protected from scale in are found. You can also choose to enable additional features, such as the following:</p> <ul> <li> <p>Auto rollback</p> </li> <li> <p>Checkpoints</p> </li> <li> <p>CloudWatch alarms</p> </li> <li> <p>Skip matching</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_StartInstanceRefresh(AutoScalingGroupName: string, Strategy: RefreshStrategy | null | undefined, DesiredConfiguration: GET_StartInstanceRefreshDesiredConfiguration | null | undefined, Preferences: GET_StartInstanceRefreshPreferences | null | undefined, Action: GET_StartInstanceRefreshAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StartInstanceRefresh?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Strategy=' + Strategy + '&DesiredConfiguration=' + DesiredConfiguration + '&Preferences=' + Preferences + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
		 * Get #Action=SuspendProcesses
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {Array<string>} ScalingProcesses <p>One or more of the following processes:</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>InstanceRefresh</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> </ul> <p>If you omit this property, all processes are specified.</p>
		 * @return {void} Success
		 */
		GET_SuspendProcesses(AutoScalingGroupName: string, ScalingProcesses: Array<string> | null | undefined, Action: GET_SuspendProcessesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SuspendProcesses?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScalingProcesses?.map(z => `ScalingProcesses=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=TerminateInstanceInAutoScalingGroup
		 * @param {string} InstanceId The ID of the instance.
		 *     Min length: 1    Max length: 19
		 * @param {boolean} ShouldDecrementDesiredCapacity Indicates whether terminating the instance also decrements the size of the Auto Scaling group.
		 * @return {void} Success
		 */
		GET_TerminateInstanceInAutoScalingGroup(InstanceId: string, ShouldDecrementDesiredCapacity: boolean, Action: GET_TerminateInstanceInAutoScalingGroupAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TerminateInstanceInAutoScalingGroup?InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&ShouldDecrementDesiredCapacity=' + ShouldDecrementDesiredCapacity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which properties have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>
		 * Get #Action=UpdateAutoScalingGroup
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} LaunchConfigurationName The name of the launch configuration. If you specify <code>LaunchConfigurationName</code> in your update request, you can't specify <code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>.
		 *     Min length: 1    Max length: 255
		 * @param {GET_UpdateAutoScalingGroupLaunchTemplate} LaunchTemplate The launch template and version to use to specify the updates. If you specify <code>LaunchTemplate</code> in your update request, you can't specify <code>LaunchConfigurationName</code> or <code>MixedInstancesPolicy</code>.
		 * @param {GET_UpdateAutoScalingGroupMixedInstancesPolicy} MixedInstancesPolicy The mixed instances policy. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {number} MinSize The minimum size of the Auto Scaling group.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} MaxSize <p>The maximum size of the Auto Scaling group.</p> <note> <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above <code>MaxSize</code> to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).</p> </note>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} DesiredCapacity The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} DefaultCooldown <p> <i>Only needed if you use simple scaling policies.</i> </p> <p>The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} AvailabilityZones One or more Availability Zones for the group.
		 * @param {string} HealthCheckType <p>A comma-separated value string of one or more health check types.</p> <p>The valid values are <code>EC2</code>, <code>ELB</code>, and <code>VPC_LATTICE</code>. <code>EC2</code> is the default health check and cannot be disabled. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Only specify <code>EC2</code> if you must clear a value that was previously set.</p>
		 *     Min length: 1    Max length: 32
		 * @param {number} HealthCheckGracePeriod The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the <code>InService</code> state. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html">Set the health check grace period for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} PlacementGroup <p>The name of an existing placement group into which to launch your instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <note> <p>A <i>cluster</i> placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group. </p> </note>
		 *     Min length: 1    Max length: 255
		 * @param {string} VPCZoneIdentifier A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify must reside in those Availability Zones.
		 *     Min length: 1    Max length: 2047
		 * @param {Array<string>} TerminationPolicies <p>A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with Amazon EC2 Auto Scaling termination policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid values: <code>Default</code> | <code>AllocationStrategy</code> | <code>ClosestToNextInstanceHour</code> | <code>NewestInstance</code> | <code>OldestInstance</code> | <code>OldestLaunchConfiguration</code> | <code>OldestLaunchTemplate</code> | <code>arn:aws:lambda:region:account-id:function:my-function:my-alias</code> </p>
		 * @param {boolean} NewInstancesProtectedFromScaleIn Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {string} ServiceLinkedRoleARN The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-linked roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 *     Min length: 1    Max length: 1600
		 * @param {number} MaxInstanceLifetime The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). To clear a previously set value, specify a new value of 0. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling instances based on maximum instance lifetime</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} CapacityRebalance Enables or disables Capacity Rebalancing. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html">Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {string} Context Reserved.
		 * @param {string} DesiredCapacityType <p>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports <code>DesiredCapacityType</code> for attribute-based instance type selection only. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>By default, Amazon EC2 Auto Scaling specifies <code>units</code>, which translates into number of instances.</p> <p>Valid values: <code>units</code> | <code>vcpu</code> | <code>memory-mib</code> </p>
		 *     Min length: 1    Max length: 255
		 * @param {number} DefaultInstanceWarmup <p>The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the <code>InService</code> state. </p> <p>During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html">Set the default instance warmup for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <important> <p>To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, <i>even if it is set to 0 seconds</i>. To remove a value that you previously set, include the property but specify <code>-1</code> for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of <code>0</code> or other nominal value.</p> </important>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_UpdateAutoScalingGroup(AutoScalingGroupName: string, LaunchConfigurationName: string | null | undefined, LaunchTemplate: GET_UpdateAutoScalingGroupLaunchTemplate | null | undefined, MixedInstancesPolicy: GET_UpdateAutoScalingGroupMixedInstancesPolicy | null | undefined, MinSize: number | null | undefined, MaxSize: number | null | undefined, DesiredCapacity: number | null | undefined, DefaultCooldown: number | null | undefined, AvailabilityZones: Array<string> | null | undefined, HealthCheckType: string | null | undefined, HealthCheckGracePeriod: number | null | undefined, PlacementGroup: string | null | undefined, VPCZoneIdentifier: string | null | undefined, TerminationPolicies: Array<string> | null | undefined, NewInstancesProtectedFromScaleIn: boolean | null | undefined, ServiceLinkedRoleARN: string | null | undefined, MaxInstanceLifetime: number | null | undefined, CapacityRebalance: boolean | null | undefined, Context: string | null | undefined, DesiredCapacityType: string | null | undefined, DefaultInstanceWarmup: number | null | undefined, Action: GET_UpdateAutoScalingGroupAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAutoScalingGroup?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&LaunchTemplate=' + LaunchTemplate + '&MixedInstancesPolicy=' + MixedInstancesPolicy + '&MinSize=' + MinSize + '&MaxSize=' + MaxSize + '&DesiredCapacity=' + DesiredCapacity + '&DefaultCooldown=' + DefaultCooldown + '&' + AvailabilityZones?.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&HealthCheckType=' + (HealthCheckType == null ? '' : encodeURIComponent(HealthCheckType)) + '&HealthCheckGracePeriod=' + HealthCheckGracePeriod + '&PlacementGroup=' + (PlacementGroup == null ? '' : encodeURIComponent(PlacementGroup)) + '&VPCZoneIdentifier=' + (VPCZoneIdentifier == null ? '' : encodeURIComponent(VPCZoneIdentifier)) + '&' + TerminationPolicies?.map(z => `TerminationPolicies=${encodeURIComponent(z)}`).join('&') + '&NewInstancesProtectedFromScaleIn=' + NewInstancesProtectedFromScaleIn + '&ServiceLinkedRoleARN=' + (ServiceLinkedRoleARN == null ? '' : encodeURIComponent(ServiceLinkedRoleARN)) + '&MaxInstanceLifetime=' + MaxInstanceLifetime + '&CapacityRebalance=' + CapacityRebalance + '&Context=' + (Context == null ? '' : encodeURIComponent(Context)) + '&DesiredCapacityType=' + (DesiredCapacityType == null ? '' : encodeURIComponent(DesiredCapacityType)) + '&DefaultInstanceWarmup=' + DefaultInstanceWarmup + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AttachInstancesAction { AttachInstances = 'AttachInstances' }

	export enum GET_AttachInstancesVersion { '2011-01-01' = '2011-01-01' }

	export enum GET_AttachLoadBalancerTargetGroupsAction { AttachLoadBalancerTargetGroups = 'AttachLoadBalancerTargetGroups' }

	export enum GET_AttachLoadBalancersAction { AttachLoadBalancers = 'AttachLoadBalancers' }

	export enum GET_AttachTrafficSourcesAction { AttachTrafficSources = 'AttachTrafficSources' }

	export enum GET_BatchDeleteScheduledActionAction { BatchDeleteScheduledAction = 'BatchDeleteScheduledAction' }

	export enum GET_BatchPutScheduledUpdateGroupActionAction { BatchPutScheduledUpdateGroupAction = 'BatchPutScheduledUpdateGroupAction' }

	export enum GET_CancelInstanceRefreshAction { CancelInstanceRefresh = 'CancelInstanceRefresh' }

	export enum GET_CompleteLifecycleActionAction { CompleteLifecycleAction = 'CompleteLifecycleAction' }

	export interface GET_CreateAutoScalingGroupLaunchTemplate {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}
	export interface GET_CreateAutoScalingGroupLaunchTemplateFormProperties {
		LaunchTemplateId: FormControl<string | null | undefined>,
		LaunchTemplateName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateAutoScalingGroupLaunchTemplateFormGroup() {
		return new FormGroup<GET_CreateAutoScalingGroupLaunchTemplateFormProperties>({
			LaunchTemplateId: new FormControl<string | null | undefined>(undefined),
			LaunchTemplateName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_CreateAutoScalingGroupMixedInstancesPolicy {
		LaunchTemplate?: LaunchTemplate;
		InstancesDistribution?: InstancesDistribution;
	}
	export interface GET_CreateAutoScalingGroupMixedInstancesPolicyFormProperties {
	}
	export function CreateGET_CreateAutoScalingGroupMixedInstancesPolicyFormGroup() {
		return new FormGroup<GET_CreateAutoScalingGroupMixedInstancesPolicyFormProperties>({
		});

	}

	export enum GET_CreateAutoScalingGroupAction { CreateAutoScalingGroup = 'CreateAutoScalingGroup' }

	export interface GET_CreateLaunchConfigurationInstanceMonitoring {
		Enabled?: boolean | null;
	}
	export interface GET_CreateLaunchConfigurationInstanceMonitoringFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_CreateLaunchConfigurationInstanceMonitoringFormGroup() {
		return new FormGroup<GET_CreateLaunchConfigurationInstanceMonitoringFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GET_CreateLaunchConfigurationMetadataOptions {
		HttpTokens?: InstanceMetadataHttpTokensState;
		HttpPutResponseHopLimit?: number | null;
		HttpEndpoint?: InstanceMetadataEndpointState;
	}
	export interface GET_CreateLaunchConfigurationMetadataOptionsFormProperties {
		HttpTokens: FormControl<InstanceMetadataHttpTokensState | null | undefined>,
		HttpPutResponseHopLimit: FormControl<number | null | undefined>,
		HttpEndpoint: FormControl<InstanceMetadataEndpointState | null | undefined>,
	}
	export function CreateGET_CreateLaunchConfigurationMetadataOptionsFormGroup() {
		return new FormGroup<GET_CreateLaunchConfigurationMetadataOptionsFormProperties>({
			HttpTokens: new FormControl<InstanceMetadataHttpTokensState | null | undefined>(undefined),
			HttpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
			HttpEndpoint: new FormControl<InstanceMetadataEndpointState | null | undefined>(undefined),
		});

	}

	export enum GET_CreateLaunchConfigurationAction { CreateLaunchConfiguration = 'CreateLaunchConfiguration' }

	export enum GET_CreateOrUpdateTagsAction { CreateOrUpdateTags = 'CreateOrUpdateTags' }

	export enum GET_DeleteAutoScalingGroupAction { DeleteAutoScalingGroup = 'DeleteAutoScalingGroup' }

	export enum GET_DeleteLaunchConfigurationAction { DeleteLaunchConfiguration = 'DeleteLaunchConfiguration' }

	export enum GET_DeleteLifecycleHookAction { DeleteLifecycleHook = 'DeleteLifecycleHook' }

	export enum GET_DeleteNotificationConfigurationAction { DeleteNotificationConfiguration = 'DeleteNotificationConfiguration' }

	export enum GET_DeletePolicyAction { DeletePolicy = 'DeletePolicy' }

	export enum GET_DeleteScheduledActionAction { DeleteScheduledAction = 'DeleteScheduledAction' }

	export enum GET_DeleteTagsAction { DeleteTags = 'DeleteTags' }

	export enum GET_DeleteWarmPoolAction { DeleteWarmPool = 'DeleteWarmPool' }

	export enum GET_DescribeAccountLimitsAction { DescribeAccountLimits = 'DescribeAccountLimits' }

	export enum GET_DescribeAdjustmentTypesAction { DescribeAdjustmentTypes = 'DescribeAdjustmentTypes' }

	export enum GET_DescribeAutoScalingGroupsAction { DescribeAutoScalingGroups = 'DescribeAutoScalingGroups' }

	export enum GET_DescribeAutoScalingInstancesAction { DescribeAutoScalingInstances = 'DescribeAutoScalingInstances' }

	export enum GET_DescribeAutoScalingNotificationTypesAction { DescribeAutoScalingNotificationTypes = 'DescribeAutoScalingNotificationTypes' }

	export enum GET_DescribeInstanceRefreshesAction { DescribeInstanceRefreshes = 'DescribeInstanceRefreshes' }

	export enum GET_DescribeLaunchConfigurationsAction { DescribeLaunchConfigurations = 'DescribeLaunchConfigurations' }

	export enum GET_DescribeLifecycleHookTypesAction { DescribeLifecycleHookTypes = 'DescribeLifecycleHookTypes' }

	export enum GET_DescribeLifecycleHooksAction { DescribeLifecycleHooks = 'DescribeLifecycleHooks' }

	export enum GET_DescribeLoadBalancerTargetGroupsAction { DescribeLoadBalancerTargetGroups = 'DescribeLoadBalancerTargetGroups' }

	export enum GET_DescribeLoadBalancersAction { DescribeLoadBalancers = 'DescribeLoadBalancers' }

	export enum GET_DescribeMetricCollectionTypesAction { DescribeMetricCollectionTypes = 'DescribeMetricCollectionTypes' }

	export enum GET_DescribeNotificationConfigurationsAction { DescribeNotificationConfigurations = 'DescribeNotificationConfigurations' }

	export enum GET_DescribePoliciesAction { DescribePolicies = 'DescribePolicies' }

	export enum GET_DescribeScalingActivitiesAction { DescribeScalingActivities = 'DescribeScalingActivities' }

	export enum GET_DescribeScalingProcessTypesAction { DescribeScalingProcessTypes = 'DescribeScalingProcessTypes' }

	export enum GET_DescribeScheduledActionsAction { DescribeScheduledActions = 'DescribeScheduledActions' }

	export enum GET_DescribeTagsAction { DescribeTags = 'DescribeTags' }

	export enum GET_DescribeTerminationPolicyTypesAction { DescribeTerminationPolicyTypes = 'DescribeTerminationPolicyTypes' }

	export enum GET_DescribeTrafficSourcesAction { DescribeTrafficSources = 'DescribeTrafficSources' }

	export enum GET_DescribeWarmPoolAction { DescribeWarmPool = 'DescribeWarmPool' }

	export enum GET_DetachInstancesAction { DetachInstances = 'DetachInstances' }

	export enum GET_DetachLoadBalancerTargetGroupsAction { DetachLoadBalancerTargetGroups = 'DetachLoadBalancerTargetGroups' }

	export enum GET_DetachLoadBalancersAction { DetachLoadBalancers = 'DetachLoadBalancers' }

	export enum GET_DetachTrafficSourcesAction { DetachTrafficSources = 'DetachTrafficSources' }

	export enum GET_DisableMetricsCollectionAction { DisableMetricsCollection = 'DisableMetricsCollection' }

	export enum GET_EnableMetricsCollectionAction { EnableMetricsCollection = 'EnableMetricsCollection' }

	export enum GET_EnterStandbyAction { EnterStandby = 'EnterStandby' }

	export enum GET_ExecutePolicyAction { ExecutePolicy = 'ExecutePolicy' }

	export enum GET_ExitStandbyAction { ExitStandby = 'ExitStandby' }

	export enum GET_GetPredictiveScalingForecastAction { GetPredictiveScalingForecast = 'GetPredictiveScalingForecast' }

	export enum GET_PutLifecycleHookAction { PutLifecycleHook = 'PutLifecycleHook' }

	export enum GET_PutNotificationConfigurationAction { PutNotificationConfiguration = 'PutNotificationConfiguration' }

	export interface GET_PutScalingPolicyTargetTrackingConfiguration {
		PredefinedMetricSpecification?: PredefinedMetricSpecification;
		CustomizedMetricSpecification?: CustomizedMetricSpecification;

		/** Required */
		TargetValue: number;
		DisableScaleIn?: boolean | null;
	}
	export interface GET_PutScalingPolicyTargetTrackingConfigurationFormProperties {

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
		DisableScaleIn: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_PutScalingPolicyTargetTrackingConfigurationFormGroup() {
		return new FormGroup<GET_PutScalingPolicyTargetTrackingConfigurationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DisableScaleIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GET_PutScalingPolicyPredictiveScalingConfiguration {

		/** Required */
		MetricSpecifications: Array<PredictiveScalingMetricSpecification>;
		Mode?: PredictiveScalingMode;
		SchedulingBufferTime?: number | null;
		MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior;
		MaxCapacityBuffer?: number | null;
	}
	export interface GET_PutScalingPolicyPredictiveScalingConfigurationFormProperties {
		Mode: FormControl<PredictiveScalingMode | null | undefined>,
		SchedulingBufferTime: FormControl<number | null | undefined>,
		MaxCapacityBreachBehavior: FormControl<PredictiveScalingMaxCapacityBreachBehavior | null | undefined>,
		MaxCapacityBuffer: FormControl<number | null | undefined>,
	}
	export function CreateGET_PutScalingPolicyPredictiveScalingConfigurationFormGroup() {
		return new FormGroup<GET_PutScalingPolicyPredictiveScalingConfigurationFormProperties>({
			Mode: new FormControl<PredictiveScalingMode | null | undefined>(undefined),
			SchedulingBufferTime: new FormControl<number | null | undefined>(undefined),
			MaxCapacityBreachBehavior: new FormControl<PredictiveScalingMaxCapacityBreachBehavior | null | undefined>(undefined),
			MaxCapacityBuffer: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_PutScalingPolicyAction { PutScalingPolicy = 'PutScalingPolicy' }

	export enum GET_PutScheduledUpdateGroupActionAction { PutScheduledUpdateGroupAction = 'PutScheduledUpdateGroupAction' }

	export interface GET_PutWarmPoolInstanceReusePolicy {
		ReuseOnScaleIn?: boolean | null;
	}
	export interface GET_PutWarmPoolInstanceReusePolicyFormProperties {
		ReuseOnScaleIn: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_PutWarmPoolInstanceReusePolicyFormGroup() {
		return new FormGroup<GET_PutWarmPoolInstanceReusePolicyFormProperties>({
			ReuseOnScaleIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_PutWarmPoolAction { PutWarmPool = 'PutWarmPool' }

	export enum GET_RecordLifecycleActionHeartbeatAction { RecordLifecycleActionHeartbeat = 'RecordLifecycleActionHeartbeat' }

	export enum GET_ResumeProcessesAction { ResumeProcesses = 'ResumeProcesses' }

	export enum GET_RollbackInstanceRefreshAction { RollbackInstanceRefresh = 'RollbackInstanceRefresh' }

	export enum GET_SetDesiredCapacityAction { SetDesiredCapacity = 'SetDesiredCapacity' }

	export enum GET_SetInstanceHealthAction { SetInstanceHealth = 'SetInstanceHealth' }

	export enum GET_SetInstanceProtectionAction { SetInstanceProtection = 'SetInstanceProtection' }

	export interface GET_StartInstanceRefreshDesiredConfiguration {
		LaunchTemplate?: LaunchTemplateSpecification;
		MixedInstancesPolicy?: MixedInstancesPolicy;
	}
	export interface GET_StartInstanceRefreshDesiredConfigurationFormProperties {
	}
	export function CreateGET_StartInstanceRefreshDesiredConfigurationFormGroup() {
		return new FormGroup<GET_StartInstanceRefreshDesiredConfigurationFormProperties>({
		});

	}

	export interface GET_StartInstanceRefreshPreferences {
		MinHealthyPercentage?: number | null;
		InstanceWarmup?: number | null;
		CheckpointPercentages?: Array<number> | null;
		CheckpointDelay?: number | null;
		SkipMatching?: boolean | null;
		AutoRollback?: boolean | null;
		ScaleInProtectedInstances?: ScaleInProtectedInstances;
		StandbyInstances?: StandbyInstances;
		AlarmSpecification?: AlarmSpecification;
	}
	export interface GET_StartInstanceRefreshPreferencesFormProperties {
		MinHealthyPercentage: FormControl<number | null | undefined>,
		InstanceWarmup: FormControl<number | null | undefined>,
		CheckpointDelay: FormControl<number | null | undefined>,
		SkipMatching: FormControl<boolean | null | undefined>,
		AutoRollback: FormControl<boolean | null | undefined>,
		ScaleInProtectedInstances: FormControl<ScaleInProtectedInstances | null | undefined>,
		StandbyInstances: FormControl<StandbyInstances | null | undefined>,
	}
	export function CreateGET_StartInstanceRefreshPreferencesFormGroup() {
		return new FormGroup<GET_StartInstanceRefreshPreferencesFormProperties>({
			MinHealthyPercentage: new FormControl<number | null | undefined>(undefined),
			InstanceWarmup: new FormControl<number | null | undefined>(undefined),
			CheckpointDelay: new FormControl<number | null | undefined>(undefined),
			SkipMatching: new FormControl<boolean | null | undefined>(undefined),
			AutoRollback: new FormControl<boolean | null | undefined>(undefined),
			ScaleInProtectedInstances: new FormControl<ScaleInProtectedInstances | null | undefined>(undefined),
			StandbyInstances: new FormControl<StandbyInstances | null | undefined>(undefined),
		});

	}

	export enum GET_StartInstanceRefreshAction { StartInstanceRefresh = 'StartInstanceRefresh' }

	export enum GET_SuspendProcessesAction { SuspendProcesses = 'SuspendProcesses' }

	export enum GET_TerminateInstanceInAutoScalingGroupAction { TerminateInstanceInAutoScalingGroup = 'TerminateInstanceInAutoScalingGroup' }

	export interface GET_UpdateAutoScalingGroupLaunchTemplate {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}
	export interface GET_UpdateAutoScalingGroupLaunchTemplateFormProperties {
		LaunchTemplateId: FormControl<string | null | undefined>,
		LaunchTemplateName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGET_UpdateAutoScalingGroupLaunchTemplateFormGroup() {
		return new FormGroup<GET_UpdateAutoScalingGroupLaunchTemplateFormProperties>({
			LaunchTemplateId: new FormControl<string | null | undefined>(undefined),
			LaunchTemplateName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_UpdateAutoScalingGroupMixedInstancesPolicy {
		LaunchTemplate?: LaunchTemplate;
		InstancesDistribution?: InstancesDistribution;
	}
	export interface GET_UpdateAutoScalingGroupMixedInstancesPolicyFormProperties {
	}
	export function CreateGET_UpdateAutoScalingGroupMixedInstancesPolicyFormGroup() {
		return new FormGroup<GET_UpdateAutoScalingGroupMixedInstancesPolicyFormProperties>({
		});

	}

	export enum GET_UpdateAutoScalingGroupAction { UpdateAutoScalingGroup = 'UpdateAutoScalingGroup' }

}

