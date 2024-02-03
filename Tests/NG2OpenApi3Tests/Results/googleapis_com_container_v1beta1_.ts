import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** AcceleratorConfig represents a Hardware Accelerator request. */
	export interface AcceleratorConfig {

		/** The number of the accelerator cards exposed to an instance. */
		acceleratorCount?: string | null;

		/** The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus) */
		acceleratorType?: string | null;

		/** GPUDriverInstallationConfig specifies the version of GPU driver to be auto installed. */
		gpuDriverInstallationConfig?: GPUDriverInstallationConfig;

		/** Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
		gpuPartitionSize?: string | null;

		/** GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators. */
		gpuSharingConfig?: GPUSharingConfig;

		/** The number of time-shared GPU resources to expose for each physical GPU. */
		maxTimeSharedClientsPerGpu?: string | null;
	}

	/** AcceleratorConfig represents a Hardware Accelerator request. */
	export interface AcceleratorConfigFormProperties {

		/** The number of the accelerator cards exposed to an instance. */
		acceleratorCount: FormControl<string | null | undefined>,

		/** The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus) */
		acceleratorType: FormControl<string | null | undefined>,

		/** Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
		gpuPartitionSize: FormControl<string | null | undefined>,

		/** The number of time-shared GPU resources to expose for each physical GPU. */
		maxTimeSharedClientsPerGpu: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorConfigFormGroup() {
		return new FormGroup<AcceleratorConfigFormProperties>({
			acceleratorCount: new FormControl<string | null | undefined>(undefined),
			acceleratorType: new FormControl<string | null | undefined>(undefined),
			gpuPartitionSize: new FormControl<string | null | undefined>(undefined),
			maxTimeSharedClientsPerGpu: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GPUDriverInstallationConfig specifies the version of GPU driver to be auto installed. */
	export interface GPUDriverInstallationConfig {

		/** Mode for how the GPU driver is installed. */
		gpuDriverVersion?: GPUDriverInstallationConfigGpuDriverVersion | null;
	}

	/** GPUDriverInstallationConfig specifies the version of GPU driver to be auto installed. */
	export interface GPUDriverInstallationConfigFormProperties {

		/** Mode for how the GPU driver is installed. */
		gpuDriverVersion: FormControl<GPUDriverInstallationConfigGpuDriverVersion | null | undefined>,
	}
	export function CreateGPUDriverInstallationConfigFormGroup() {
		return new FormGroup<GPUDriverInstallationConfigFormProperties>({
			gpuDriverVersion: new FormControl<GPUDriverInstallationConfigGpuDriverVersion | null | undefined>(undefined),
		});

	}

	export enum GPUDriverInstallationConfigGpuDriverVersion { GPU_DRIVER_VERSION_UNSPECIFIED = 'GPU_DRIVER_VERSION_UNSPECIFIED', INSTALLATION_DISABLED = 'INSTALLATION_DISABLED', DEFAULT = 'DEFAULT', LATEST = 'LATEST' }


	/** GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators. */
	export interface GPUSharingConfig {

		/** The type of GPU sharing strategy to enable on the GPU node. */
		gpuSharingStrategy?: GPUSharingConfigGpuSharingStrategy | null;

		/** The max number of containers that can share a physical GPU. */
		maxSharedClientsPerGpu?: string | null;
	}

	/** GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators. */
	export interface GPUSharingConfigFormProperties {

		/** The type of GPU sharing strategy to enable on the GPU node. */
		gpuSharingStrategy: FormControl<GPUSharingConfigGpuSharingStrategy | null | undefined>,

		/** The max number of containers that can share a physical GPU. */
		maxSharedClientsPerGpu: FormControl<string | null | undefined>,
	}
	export function CreateGPUSharingConfigFormGroup() {
		return new FormGroup<GPUSharingConfigFormProperties>({
			gpuSharingStrategy: new FormControl<GPUSharingConfigGpuSharingStrategy | null | undefined>(undefined),
			maxSharedClientsPerGpu: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GPUSharingConfigGpuSharingStrategy { GPU_SHARING_STRATEGY_UNSPECIFIED = 'GPU_SHARING_STRATEGY_UNSPECIFIED', TIME_SHARING = 'TIME_SHARING' }


	/** AdditionalNodeNetworkConfig is the configuration for additional node networks within the NodeNetworkConfig message */
	export interface AdditionalNodeNetworkConfig {

		/** Name of the VPC where the additional interface belongs */
		network?: string | null;

		/** Name of the subnetwork where the additional interface belongs */
		subnetwork?: string | null;
	}

	/** AdditionalNodeNetworkConfig is the configuration for additional node networks within the NodeNetworkConfig message */
	export interface AdditionalNodeNetworkConfigFormProperties {

		/** Name of the VPC where the additional interface belongs */
		network: FormControl<string | null | undefined>,

		/** Name of the subnetwork where the additional interface belongs */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalNodeNetworkConfigFormGroup() {
		return new FormGroup<AdditionalNodeNetworkConfigFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AdditionalPodNetworkConfig is the configuration for additional pod networks within the NodeNetworkConfig message */
	export interface AdditionalPodNetworkConfig {

		/** Constraints applied to pods. */
		maxPodsPerNode?: MaxPodsConstraint;

		/** The name of the secondary range on the subnet which provides IP address for this pod range */
		secondaryPodRange?: string | null;

		/** Name of the subnetwork where the additional pod network belongs */
		subnetwork?: string | null;
	}

	/** AdditionalPodNetworkConfig is the configuration for additional pod networks within the NodeNetworkConfig message */
	export interface AdditionalPodNetworkConfigFormProperties {

		/** The name of the secondary range on the subnet which provides IP address for this pod range */
		secondaryPodRange: FormControl<string | null | undefined>,

		/** Name of the subnetwork where the additional pod network belongs */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalPodNetworkConfigFormGroup() {
		return new FormGroup<AdditionalPodNetworkConfigFormProperties>({
			secondaryPodRange: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Constraints applied to pods. */
	export interface MaxPodsConstraint {

		/** Constraint enforced on the max num of pods per node. */
		maxPodsPerNode?: string | null;
	}

	/** Constraints applied to pods. */
	export interface MaxPodsConstraintFormProperties {

		/** Constraint enforced on the max num of pods per node. */
		maxPodsPerNode: FormControl<string | null | undefined>,
	}
	export function CreateMaxPodsConstraintFormGroup() {
		return new FormGroup<MaxPodsConstraintFormProperties>({
			maxPodsPerNode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message. */
	export interface AdditionalPodRangesConfig {

		/** Output only. [Output only] Information for additional pod range. */
		podRangeInfo?: Array<RangeInfo>;

		/** Name for pod secondary ipv4 range which has the actual range defined ahead. */
		podRangeNames?: Array<string>;
	}

	/** AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message. */
	export interface AdditionalPodRangesConfigFormProperties {
	}
	export function CreateAdditionalPodRangesConfigFormGroup() {
		return new FormGroup<AdditionalPodRangesConfigFormProperties>({
		});

	}


	/** RangeInfo contains the range name and the range utilization by this cluster. */
	export interface RangeInfo {

		/** Output only. [Output only] Name of a range. */
		rangeName?: string | null;

		/** Output only. [Output only] The utilization of the range. */
		utilization?: number | null;
	}

	/** RangeInfo contains the range name and the range utilization by this cluster. */
	export interface RangeInfoFormProperties {

		/** Output only. [Output only] Name of a range. */
		rangeName: FormControl<string | null | undefined>,

		/** Output only. [Output only] The utilization of the range. */
		utilization: FormControl<number | null | undefined>,
	}
	export function CreateRangeInfoFormGroup() {
		return new FormGroup<RangeInfoFormProperties>({
			rangeName: new FormControl<string | null | undefined>(undefined),
			utilization: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality. */
	export interface AddonsConfig {

		/** Configuration options for the Cloud Run feature. */
		cloudRunConfig?: CloudRunConfig;

		/** Configuration options for the Config Connector add-on. */
		configConnectorConfig?: ConfigConnectorConfig;

		/** Configuration for NodeLocal DNSCache */
		dnsCacheConfig?: DnsCacheConfig;

		/** Configuration for the Compute Engine PD CSI driver. */
		gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;

		/** Configuration for the GCP Filestore CSI driver. */
		gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;

		/** Configuration for the Cloud Storage Fuse CSI driver. */
		gcsFuseCsiDriverConfig?: GcsFuseCsiDriverConfig;

		/** Configuration for the Backup for GKE Agent. */
		gkeBackupAgentConfig?: GkeBackupAgentConfig;

		/** Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. */
		horizontalPodAutoscaling?: HorizontalPodAutoscaling;

		/** Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. */
		httpLoadBalancing?: HttpLoadBalancing;

		/** Configuration options for Istio addon. */
		istioConfig?: IstioConfig;

		/** Configuration options for the KALM addon. */
		kalmConfig?: KalmConfig;

		/** Configuration for the Kubernetes Dashboard. */
		kubernetesDashboard?: KubernetesDashboard;

		/** Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. */
		networkPolicyConfig?: NetworkPolicyConfig;
	}

	/** Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality. */
	export interface AddonsConfigFormProperties {
	}
	export function CreateAddonsConfigFormGroup() {
		return new FormGroup<AddonsConfigFormProperties>({
		});

	}


	/** Configuration options for the Cloud Run feature. */
	export interface CloudRunConfig {

		/** Whether Cloud Run addon is enabled for this cluster. */
		disabled?: boolean | null;

		/** Which load balancer type is installed for Cloud Run. */
		loadBalancerType?: CloudRunConfigLoadBalancerType | null;
	}

	/** Configuration options for the Cloud Run feature. */
	export interface CloudRunConfigFormProperties {

		/** Whether Cloud Run addon is enabled for this cluster. */
		disabled: FormControl<boolean | null | undefined>,

		/** Which load balancer type is installed for Cloud Run. */
		loadBalancerType: FormControl<CloudRunConfigLoadBalancerType | null | undefined>,
	}
	export function CreateCloudRunConfigFormGroup() {
		return new FormGroup<CloudRunConfigFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			loadBalancerType: new FormControl<CloudRunConfigLoadBalancerType | null | undefined>(undefined),
		});

	}

	export enum CloudRunConfigLoadBalancerType { LOAD_BALANCER_TYPE_UNSPECIFIED = 'LOAD_BALANCER_TYPE_UNSPECIFIED', LOAD_BALANCER_TYPE_EXTERNAL = 'LOAD_BALANCER_TYPE_EXTERNAL', LOAD_BALANCER_TYPE_INTERNAL = 'LOAD_BALANCER_TYPE_INTERNAL' }


	/** Configuration options for the Config Connector add-on. */
	export interface ConfigConnectorConfig {

		/** Whether Cloud Connector is enabled for this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration options for the Config Connector add-on. */
	export interface ConfigConnectorConfigFormProperties {

		/** Whether Cloud Connector is enabled for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigConnectorConfigFormGroup() {
		return new FormGroup<ConfigConnectorConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for NodeLocal DNSCache */
	export interface DnsCacheConfig {

		/** Whether NodeLocal DNSCache is enabled for this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration for NodeLocal DNSCache */
	export interface DnsCacheConfigFormProperties {

		/** Whether NodeLocal DNSCache is enabled for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDnsCacheConfigFormGroup() {
		return new FormGroup<DnsCacheConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the Compute Engine PD CSI driver. */
	export interface GcePersistentDiskCsiDriverConfig {

		/** Whether the Compute Engine PD CSI driver is enabled for this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration for the Compute Engine PD CSI driver. */
	export interface GcePersistentDiskCsiDriverConfigFormProperties {

		/** Whether the Compute Engine PD CSI driver is enabled for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGcePersistentDiskCsiDriverConfigFormGroup() {
		return new FormGroup<GcePersistentDiskCsiDriverConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the GCP Filestore CSI driver. */
	export interface GcpFilestoreCsiDriverConfig {

		/** Whether the GCP Filestore CSI driver is enabled for this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration for the GCP Filestore CSI driver. */
	export interface GcpFilestoreCsiDriverConfigFormProperties {

		/** Whether the GCP Filestore CSI driver is enabled for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGcpFilestoreCsiDriverConfigFormGroup() {
		return new FormGroup<GcpFilestoreCsiDriverConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the Cloud Storage Fuse CSI driver. */
	export interface GcsFuseCsiDriverConfig {

		/** Whether the Cloud Storage Fuse CSI driver is enabled for this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration for the Cloud Storage Fuse CSI driver. */
	export interface GcsFuseCsiDriverConfigFormProperties {

		/** Whether the Cloud Storage Fuse CSI driver is enabled for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGcsFuseCsiDriverConfigFormGroup() {
		return new FormGroup<GcsFuseCsiDriverConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the Backup for GKE Agent. */
	export interface GkeBackupAgentConfig {

		/** Whether the Backup for GKE agent is enabled for this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration for the Backup for GKE Agent. */
	export interface GkeBackupAgentConfigFormProperties {

		/** Whether the Backup for GKE agent is enabled for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGkeBackupAgentConfigFormGroup() {
		return new FormGroup<GkeBackupAgentConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. */
	export interface HorizontalPodAutoscaling {

		/** Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring. */
		disabled?: boolean | null;
	}

	/** Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. */
	export interface HorizontalPodAutoscalingFormProperties {

		/** Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateHorizontalPodAutoscalingFormGroup() {
		return new FormGroup<HorizontalPodAutoscalingFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. */
	export interface HttpLoadBalancing {

		/** Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers. */
		disabled?: boolean | null;
	}

	/** Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. */
	export interface HttpLoadBalancingFormProperties {

		/** Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateHttpLoadBalancingFormGroup() {
		return new FormGroup<HttpLoadBalancingFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration options for Istio addon. */
	export interface IstioConfig {

		/** The specified Istio auth mode, either none, or mutual TLS. */
		auth?: IstioConfigAuth | null;

		/** Whether Istio is enabled for this cluster. */
		disabled?: boolean | null;
	}

	/** Configuration options for Istio addon. */
	export interface IstioConfigFormProperties {

		/** The specified Istio auth mode, either none, or mutual TLS. */
		auth: FormControl<IstioConfigAuth | null | undefined>,

		/** Whether Istio is enabled for this cluster. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIstioConfigFormGroup() {
		return new FormGroup<IstioConfigFormProperties>({
			auth: new FormControl<IstioConfigAuth | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum IstioConfigAuth { AUTH_NONE = 'AUTH_NONE', AUTH_MUTUAL_TLS = 'AUTH_MUTUAL_TLS' }


	/** Configuration options for the KALM addon. */
	export interface KalmConfig {

		/** Whether KALM is enabled for this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration options for the KALM addon. */
	export interface KalmConfigFormProperties {

		/** Whether KALM is enabled for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateKalmConfigFormGroup() {
		return new FormGroup<KalmConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the Kubernetes Dashboard. */
	export interface KubernetesDashboard {

		/** Whether the Kubernetes Dashboard is enabled for this cluster. */
		disabled?: boolean | null;
	}

	/** Configuration for the Kubernetes Dashboard. */
	export interface KubernetesDashboardFormProperties {

		/** Whether the Kubernetes Dashboard is enabled for this cluster. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateKubernetesDashboardFormGroup() {
		return new FormGroup<KubernetesDashboardFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. */
	export interface NetworkPolicyConfig {

		/** Whether NetworkPolicy is enabled for this cluster. */
		disabled?: boolean | null;
	}

	/** Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. */
	export interface NetworkPolicyConfigFormProperties {

		/** Whether NetworkPolicy is enabled for this cluster. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworkPolicyConfigFormGroup() {
		return new FormGroup<NetworkPolicyConfigFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** AdvancedDatapathObservabilityConfig specifies configuration of observability features of advanced datapath. */
	export interface AdvancedDatapathObservabilityConfig {

		/** Expose flow metrics on nodes */
		enableMetrics?: boolean | null;

		/** Enable Relay component */
		enableRelay?: boolean | null;

		/** Method used to make Relay available */
		relayMode?: AdvancedDatapathObservabilityConfigRelayMode | null;
	}

	/** AdvancedDatapathObservabilityConfig specifies configuration of observability features of advanced datapath. */
	export interface AdvancedDatapathObservabilityConfigFormProperties {

		/** Expose flow metrics on nodes */
		enableMetrics: FormControl<boolean | null | undefined>,

		/** Enable Relay component */
		enableRelay: FormControl<boolean | null | undefined>,

		/** Method used to make Relay available */
		relayMode: FormControl<AdvancedDatapathObservabilityConfigRelayMode | null | undefined>,
	}
	export function CreateAdvancedDatapathObservabilityConfigFormGroup() {
		return new FormGroup<AdvancedDatapathObservabilityConfigFormProperties>({
			enableMetrics: new FormControl<boolean | null | undefined>(undefined),
			enableRelay: new FormControl<boolean | null | undefined>(undefined),
			relayMode: new FormControl<AdvancedDatapathObservabilityConfigRelayMode | null | undefined>(undefined),
		});

	}

	export enum AdvancedDatapathObservabilityConfigRelayMode { RELAY_MODE_UNSPECIFIED = 'RELAY_MODE_UNSPECIFIED', DISABLED = 'DISABLED', INTERNAL_VPC_LB = 'INTERNAL_VPC_LB', EXTERNAL_LB = 'EXTERNAL_LB' }


	/** Specifies options for controlling advanced machine features. */
	export interface AdvancedMachineFeatures {

		/** The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
		threadsPerCore?: string | null;
	}

	/** Specifies options for controlling advanced machine features. */
	export interface AdvancedMachineFeaturesFormProperties {

		/** The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
		threadsPerCore: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedMachineFeaturesFormGroup() {
		return new FormGroup<AdvancedMachineFeaturesFormProperties>({
			threadsPerCore: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for returning group information from authenticators. */
	export interface AuthenticatorGroupsConfig {

		/** Whether this cluster should return group membership lookups during authentication using a group of security groups. */
		enabled?: boolean | null;

		/** The name of the security group-of-groups to be used. Only relevant if enabled = true. */
		securityGroup?: string | null;
	}

	/** Configuration for returning group information from authenticators. */
	export interface AuthenticatorGroupsConfigFormProperties {

		/** Whether this cluster should return group membership lookups during authentication using a group of security groups. */
		enabled: FormControl<boolean | null | undefined>,

		/** The name of the security group-of-groups to be used. Only relevant if enabled = true. */
		securityGroup: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticatorGroupsConfigFormGroup() {
		return new FormGroup<AuthenticatorGroupsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			securityGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed. */
	export interface AutoUpgradeOptions {

		/** [Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		autoUpgradeStartTime?: string | null;

		/** [Output only] This field is set when upgrades are about to commence with the description of the upgrade. */
		description?: string | null;
	}

	/** AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed. */
	export interface AutoUpgradeOptionsFormProperties {

		/** [Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		autoUpgradeStartTime: FormControl<string | null | undefined>,

		/** [Output only] This field is set when upgrades are about to commence with the description of the upgrade. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateAutoUpgradeOptionsFormGroup() {
		return new FormGroup<AutoUpgradeOptionsFormProperties>({
			autoUpgradeStartTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Autopilot is the configuration for Autopilot settings on the cluster. */
	export interface Autopilot {

		/** AutopilotConversionStatus represents conversion status. */
		conversionStatus?: AutopilotConversionStatus;

		/** Enable Autopilot */
		enabled?: boolean | null;

		/** WorkloadPolicyConfig is the configuration of workload policy for autopilot clusters. */
		workloadPolicyConfig?: WorkloadPolicyConfig;
	}

	/** Autopilot is the configuration for Autopilot settings on the cluster. */
	export interface AutopilotFormProperties {

		/** Enable Autopilot */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAutopilotFormGroup() {
		return new FormGroup<AutopilotFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** AutopilotConversionStatus represents conversion status. */
	export interface AutopilotConversionStatus {

		/** Output only. The current state of the conversion. */
		state?: AutopilotConversionStatusState | null;
	}

	/** AutopilotConversionStatus represents conversion status. */
	export interface AutopilotConversionStatusFormProperties {

		/** Output only. The current state of the conversion. */
		state: FormControl<AutopilotConversionStatusState | null | undefined>,
	}
	export function CreateAutopilotConversionStatusFormGroup() {
		return new FormGroup<AutopilotConversionStatusFormProperties>({
			state: new FormControl<AutopilotConversionStatusState | null | undefined>(undefined),
		});

	}

	export enum AutopilotConversionStatusState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', DONE = 'DONE' }


	/** WorkloadPolicyConfig is the configuration of workload policy for autopilot clusters. */
	export interface WorkloadPolicyConfig {

		/** If true, workloads can use NET_ADMIN capability. */
		allowNetAdmin?: boolean | null;
	}

	/** WorkloadPolicyConfig is the configuration of workload policy for autopilot clusters. */
	export interface WorkloadPolicyConfigFormProperties {

		/** If true, workloads can use NET_ADMIN capability. */
		allowNetAdmin: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkloadPolicyConfigFormGroup() {
		return new FormGroup<WorkloadPolicyConfigFormProperties>({
			allowNetAdmin: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** AutopilotCompatibilityIssue contains information about a specific compatibility issue with Autopilot mode. */
	export interface AutopilotCompatibilityIssue {

		/** The constraint type of the issue. */
		constraintType?: string | null;

		/** The description of the issue. */
		description?: string | null;

		/** A URL to a public documnetation, which addresses resolving this issue. */
		documentationUrl?: string | null;

		/** The incompatibility type of this issue. */
		incompatibilityType?: AutopilotCompatibilityIssueIncompatibilityType | null;

		/** The last time when this issue was observed. */
		lastObservation?: string | null;

		/** The name of the resources which are subject to this issue. */
		subjects?: Array<string>;
	}

	/** AutopilotCompatibilityIssue contains information about a specific compatibility issue with Autopilot mode. */
	export interface AutopilotCompatibilityIssueFormProperties {

		/** The constraint type of the issue. */
		constraintType: FormControl<string | null | undefined>,

		/** The description of the issue. */
		description: FormControl<string | null | undefined>,

		/** A URL to a public documnetation, which addresses resolving this issue. */
		documentationUrl: FormControl<string | null | undefined>,

		/** The incompatibility type of this issue. */
		incompatibilityType: FormControl<AutopilotCompatibilityIssueIncompatibilityType | null | undefined>,

		/** The last time when this issue was observed. */
		lastObservation: FormControl<string | null | undefined>,
	}
	export function CreateAutopilotCompatibilityIssueFormGroup() {
		return new FormGroup<AutopilotCompatibilityIssueFormProperties>({
			constraintType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentationUrl: new FormControl<string | null | undefined>(undefined),
			incompatibilityType: new FormControl<AutopilotCompatibilityIssueIncompatibilityType | null | undefined>(undefined),
			lastObservation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutopilotCompatibilityIssueIncompatibilityType { UNSPECIFIED = 'UNSPECIFIED', INCOMPATIBILITY = 'INCOMPATIBILITY', ADDITIONAL_CONFIG_REQUIRED = 'ADDITIONAL_CONFIG_REQUIRED', PASSED_WITH_OPTIONAL_CONFIG = 'PASSED_WITH_OPTIONAL_CONFIG' }


	/** AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. */
	export interface AutoprovisioningNodePoolDefaults {

		/** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
		bootDiskKmsKey?: string | null;

		/** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
		diskSizeGb?: number | null;

		/** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
		diskType?: string | null;

		/** The image type to use for NAP created node. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
		imageType?: string | null;

		/** Enable or disable Kubelet read only port. */
		insecureKubeletReadonlyPortEnabled?: boolean | null;

		/** NodeManagement defines the set of node management services turned on for the node pool. */
		management?: NodeManagement;

		/** Deprecated. Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: Intel Haswell or minCpuPlatform: Intel Sandy Bridge. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). This field is deprecated, min_cpu_platform should be specified using `cloud.google.com/requested-min-cpu-platform` label selector on the pod. To unset the min cpu platform field pass "automatic" as field value. */
		minCpuPlatform?: string | null;

		/** The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added. */
		oauthScopes?: Array<string>;

		/** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
		serviceAccount?: string | null;

		/** A set of Shielded Instance options. */
		shieldedInstanceConfig?: ShieldedInstanceConfig;

		/** These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted. */
		upgradeSettings?: UpgradeSettings;
	}

	/** AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. */
	export interface AutoprovisioningNodePoolDefaultsFormProperties {

		/** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
		bootDiskKmsKey: FormControl<string | null | undefined>,

		/** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
		diskSizeGb: FormControl<number | null | undefined>,

		/** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
		diskType: FormControl<string | null | undefined>,

		/** The image type to use for NAP created node. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
		imageType: FormControl<string | null | undefined>,

		/** Enable or disable Kubelet read only port. */
		insecureKubeletReadonlyPortEnabled: FormControl<boolean | null | undefined>,

		/** Deprecated. Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: Intel Haswell or minCpuPlatform: Intel Sandy Bridge. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). This field is deprecated, min_cpu_platform should be specified using `cloud.google.com/requested-min-cpu-platform` label selector on the pod. To unset the min cpu platform field pass "automatic" as field value. */
		minCpuPlatform: FormControl<string | null | undefined>,

		/** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateAutoprovisioningNodePoolDefaultsFormGroup() {
		return new FormGroup<AutoprovisioningNodePoolDefaultsFormProperties>({
			bootDiskKmsKey: new FormControl<string | null | undefined>(undefined),
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			diskType: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
			insecureKubeletReadonlyPortEnabled: new FormControl<boolean | null | undefined>(undefined),
			minCpuPlatform: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NodeManagement defines the set of node management services turned on for the node pool. */
	export interface NodeManagement {

		/** Whether the nodes will be automatically repaired. */
		autoRepair?: boolean | null;

		/** Whether the nodes will be automatically upgraded. */
		autoUpgrade?: boolean | null;

		/** AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed. */
		upgradeOptions?: AutoUpgradeOptions;
	}

	/** NodeManagement defines the set of node management services turned on for the node pool. */
	export interface NodeManagementFormProperties {

		/** Whether the nodes will be automatically repaired. */
		autoRepair: FormControl<boolean | null | undefined>,

		/** Whether the nodes will be automatically upgraded. */
		autoUpgrade: FormControl<boolean | null | undefined>,
	}
	export function CreateNodeManagementFormGroup() {
		return new FormGroup<NodeManagementFormProperties>({
			autoRepair: new FormControl<boolean | null | undefined>(undefined),
			autoUpgrade: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A set of Shielded Instance options. */
	export interface ShieldedInstanceConfig {

		/** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. */
		enableIntegrityMonitoring?: boolean | null;

		/** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. */
		enableSecureBoot?: boolean | null;
	}

	/** A set of Shielded Instance options. */
	export interface ShieldedInstanceConfigFormProperties {

		/** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. */
		enableIntegrityMonitoring: FormControl<boolean | null | undefined>,

		/** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. */
		enableSecureBoot: FormControl<boolean | null | undefined>,
	}
	export function CreateShieldedInstanceConfigFormGroup() {
		return new FormGroup<ShieldedInstanceConfigFormProperties>({
			enableIntegrityMonitoring: new FormControl<boolean | null | undefined>(undefined),
			enableSecureBoot: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted. */
	export interface UpgradeSettings {

		/** Settings for blue-green upgrade. */
		blueGreenSettings?: BlueGreenSettings;

		/** The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. */
		maxSurge?: number | null;

		/** The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready. */
		maxUnavailable?: number | null;

		/** Update strategy of the node pool. */
		strategy?: UpgradeSettingsStrategy | null;
	}

	/** These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted. */
	export interface UpgradeSettingsFormProperties {

		/** The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. */
		maxSurge: FormControl<number | null | undefined>,

		/** The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready. */
		maxUnavailable: FormControl<number | null | undefined>,

		/** Update strategy of the node pool. */
		strategy: FormControl<UpgradeSettingsStrategy | null | undefined>,
	}
	export function CreateUpgradeSettingsFormGroup() {
		return new FormGroup<UpgradeSettingsFormProperties>({
			maxSurge: new FormControl<number | null | undefined>(undefined),
			maxUnavailable: new FormControl<number | null | undefined>(undefined),
			strategy: new FormControl<UpgradeSettingsStrategy | null | undefined>(undefined),
		});

	}


	/** Settings for blue-green upgrade. */
	export interface BlueGreenSettings {

		/** Autoscaled rollout policy uses cluster autoscaler during blue-green upgrades to scale both the green and blue pools. */
		autoscaledRolloutPolicy?: AutoscaledRolloutPolicy;

		/** Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. */
		nodePoolSoakDuration?: string | null;

		/** Standard rollout policy is the default policy for blue-green. */
		standardRolloutPolicy?: StandardRolloutPolicy;
	}

	/** Settings for blue-green upgrade. */
	export interface BlueGreenSettingsFormProperties {

		/** Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. */
		nodePoolSoakDuration: FormControl<string | null | undefined>,
	}
	export function CreateBlueGreenSettingsFormGroup() {
		return new FormGroup<BlueGreenSettingsFormProperties>({
			nodePoolSoakDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Autoscaled rollout policy uses cluster autoscaler during blue-green upgrades to scale both the green and blue pools. */
	export interface AutoscaledRolloutPolicy {
	}

	/** Autoscaled rollout policy uses cluster autoscaler during blue-green upgrades to scale both the green and blue pools. */
	export interface AutoscaledRolloutPolicyFormProperties {
	}
	export function CreateAutoscaledRolloutPolicyFormGroup() {
		return new FormGroup<AutoscaledRolloutPolicyFormProperties>({
		});

	}


	/** Standard rollout policy is the default policy for blue-green. */
	export interface StandardRolloutPolicy {

		/** Number of blue nodes to drain in a batch. */
		batchNodeCount?: number | null;

		/** Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0]. */
		batchPercentage?: number | null;

		/** Soak time after each batch gets drained. Default to zero. */
		batchSoakDuration?: string | null;
	}

	/** Standard rollout policy is the default policy for blue-green. */
	export interface StandardRolloutPolicyFormProperties {

		/** Number of blue nodes to drain in a batch. */
		batchNodeCount: FormControl<number | null | undefined>,

		/** Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0]. */
		batchPercentage: FormControl<number | null | undefined>,

		/** Soak time after each batch gets drained. Default to zero. */
		batchSoakDuration: FormControl<string | null | undefined>,
	}
	export function CreateStandardRolloutPolicyFormGroup() {
		return new FormGroup<StandardRolloutPolicyFormProperties>({
			batchNodeCount: new FormControl<number | null | undefined>(undefined),
			batchPercentage: new FormControl<number | null | undefined>(undefined),
			batchSoakDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpgradeSettingsStrategy { NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED = 'NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED', BLUE_GREEN = 'BLUE_GREEN', SURGE = 'SURGE' }


	/** Deprecated. */
	export interface AvailableVersion {

		/** Reason for availability. */
		reason?: string | null;

		/** Kubernetes version. */
		version?: string | null;
	}

	/** Deprecated. */
	export interface AvailableVersionFormProperties {

		/** Reason for availability. */
		reason: FormControl<string | null | undefined>,

		/** Kubernetes version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAvailableVersionFormGroup() {
		return new FormGroup<AvailableVersionFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Best effort provisioning. */
	export interface BestEffortProvisioning {

		/** When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes */
		enabled?: boolean | null;

		/** Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved. */
		minProvisionNodes?: number | null;
	}

	/** Best effort provisioning. */
	export interface BestEffortProvisioningFormProperties {

		/** When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes */
		enabled: FormControl<boolean | null | undefined>,

		/** Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved. */
		minProvisionNodes: FormControl<number | null | undefined>,
	}
	export function CreateBestEffortProvisioningFormGroup() {
		return new FormGroup<BestEffortProvisioningFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			minProvisionNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Parameters for using BigQuery as the destination of resource usage export. */
	export interface BigQueryDestination {

		/** The ID of a BigQuery Dataset. */
		datasetId?: string | null;
	}

	/** Parameters for using BigQuery as the destination of resource usage export. */
	export interface BigQueryDestinationFormProperties {

		/** The ID of a BigQuery Dataset. */
		datasetId: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDestinationFormGroup() {
		return new FormGroup<BigQueryDestinationFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for Binary Authorization. */
	export interface BinaryAuthorization {

		/** This field is deprecated. Leave this unset and instead configure BinaryAuthorization using evaluation_mode. If evaluation_mode is set to anything other than EVALUATION_MODE_UNSPECIFIED, this field is ignored. */
		enabled?: boolean | null;

		/** Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. */
		evaluationMode?: BinaryAuthorizationEvaluationMode | null;

		/** Optional. Binauthz policies that apply to this cluster. */
		policyBindings?: Array<PolicyBinding>;
	}

	/** Configuration for Binary Authorization. */
	export interface BinaryAuthorizationFormProperties {

		/** This field is deprecated. Leave this unset and instead configure BinaryAuthorization using evaluation_mode. If evaluation_mode is set to anything other than EVALUATION_MODE_UNSPECIFIED, this field is ignored. */
		enabled: FormControl<boolean | null | undefined>,

		/** Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. */
		evaluationMode: FormControl<BinaryAuthorizationEvaluationMode | null | undefined>,
	}
	export function CreateBinaryAuthorizationFormGroup() {
		return new FormGroup<BinaryAuthorizationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			evaluationMode: new FormControl<BinaryAuthorizationEvaluationMode | null | undefined>(undefined),
		});

	}

	export enum BinaryAuthorizationEvaluationMode { EVALUATION_MODE_UNSPECIFIED = 'EVALUATION_MODE_UNSPECIFIED', DISABLED = 'DISABLED', PROJECT_SINGLETON_POLICY_ENFORCE = 'PROJECT_SINGLETON_POLICY_ENFORCE', POLICY_BINDINGS = 'POLICY_BINDINGS', POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE = 'POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE' }


	/** Binauthz policy that applies to this cluster. */
	export interface PolicyBinding {

		/** The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`. */
		name?: string | null;
	}

	/** Binauthz policy that applies to this cluster. */
	export interface PolicyBindingFormProperties {

		/** The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyBindingFormGroup() {
		return new FormGroup<PolicyBindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information relevant to blue-green upgrade. */
	export interface BlueGreenInfo {

		/** The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with blue pool. */
		blueInstanceGroupUrls?: Array<string>;

		/** Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		bluePoolDeletionStartTime?: string | null;

		/** The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with green pool. */
		greenInstanceGroupUrls?: Array<string>;

		/** Version of green pool. */
		greenPoolVersion?: string | null;

		/** Current blue-green upgrade phase. */
		phase?: BlueGreenInfoPhase | null;
	}

	/** Information relevant to blue-green upgrade. */
	export interface BlueGreenInfoFormProperties {

		/** Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		bluePoolDeletionStartTime: FormControl<string | null | undefined>,

		/** Version of green pool. */
		greenPoolVersion: FormControl<string | null | undefined>,

		/** Current blue-green upgrade phase. */
		phase: FormControl<BlueGreenInfoPhase | null | undefined>,
	}
	export function CreateBlueGreenInfoFormGroup() {
		return new FormGroup<BlueGreenInfoFormProperties>({
			bluePoolDeletionStartTime: new FormControl<string | null | undefined>(undefined),
			greenPoolVersion: new FormControl<string | null | undefined>(undefined),
			phase: new FormControl<BlueGreenInfoPhase | null | undefined>(undefined),
		});

	}

	export enum BlueGreenInfoPhase { PHASE_UNSPECIFIED = 'PHASE_UNSPECIFIED', UPDATE_STARTED = 'UPDATE_STARTED', CREATING_GREEN_POOL = 'CREATING_GREEN_POOL', CORDONING_BLUE_POOL = 'CORDONING_BLUE_POOL', WAITING_TO_DRAIN_BLUE_POOL = 'WAITING_TO_DRAIN_BLUE_POOL', DRAINING_BLUE_POOL = 'DRAINING_BLUE_POOL', NODE_POOL_SOAKING = 'NODE_POOL_SOAKING', DELETING_BLUE_POOL = 'DELETING_BLUE_POOL', ROLLBACK_STARTED = 'ROLLBACK_STARTED' }


	/** CancelOperationRequest cancels a single operation. */
	export interface CancelOperationRequest {

		/** The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/locations/operations/*`. */
		name?: string | null;

		/** Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
		operationId?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** CancelOperationRequest cancels a single operation. */
	export interface CancelOperationRequestFormProperties {

		/** The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/locations/operations/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field. */
		operationId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CheckAutopilotCompatibilityResponse has a list of compatibility issues. */
	export interface CheckAutopilotCompatibilityResponse {

		/** The list of issues for the given operation. */
		issues?: Array<AutopilotCompatibilityIssue>;

		/** The summary of the autopilot compatibility response. */
		summary?: string | null;
	}

	/** CheckAutopilotCompatibilityResponse has a list of compatibility issues. */
	export interface CheckAutopilotCompatibilityResponseFormProperties {

		/** The summary of the autopilot compatibility response. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateCheckAutopilotCompatibilityResponseFormGroup() {
		return new FormGroup<CheckAutopilotCompatibilityResponseFormProperties>({
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CidrBlock contains an optional name and one CIDR block. */
	export interface CidrBlock {

		/** cidr_block must be specified in CIDR notation. */
		cidrBlock?: string | null;

		/** display_name is an optional field for users to identify CIDR blocks. */
		displayName?: string | null;
	}

	/** CidrBlock contains an optional name and one CIDR block. */
	export interface CidrBlockFormProperties {

		/** cidr_block must be specified in CIDR notation. */
		cidrBlock: FormControl<string | null | undefined>,

		/** display_name is an optional field for users to identify CIDR blocks. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCidrBlockFormGroup() {
		return new FormGroup<CidrBlockFormProperties>({
			cidrBlock: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for client certificates on the cluster. */
	export interface ClientCertificateConfig {

		/** Issue a client certificate. */
		issueClientCertificate?: boolean | null;
	}

	/** Configuration for client certificates on the cluster. */
	export interface ClientCertificateConfigFormProperties {

		/** Issue a client certificate. */
		issueClientCertificate: FormControl<boolean | null | undefined>,
	}
	export function CreateClientCertificateConfigFormGroup() {
		return new FormGroup<ClientCertificateConfigFormProperties>({
			issueClientCertificate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A Google Kubernetes Engine cluster. */
	export interface Cluster {

		/** Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality. */
		addonsConfig?: AddonsConfig;

		/** Configuration for returning group information from authenticators. */
		authenticatorGroupsConfig?: AuthenticatorGroupsConfig;

		/** Autopilot is the configuration for Autopilot settings on the cluster. */
		autopilot?: Autopilot;

		/** ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs. */
		autoscaling?: ClusterAutoscaling;

		/** Configuration for Binary Authorization. */
		binaryAuthorization?: BinaryAuthorization;

		/** The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`. */
		clusterIpv4Cidr?: string | null;

		/** Telemetry integration for the cluster. */
		clusterTelemetry?: ClusterTelemetry;

		/** Which conditions caused the current cluster state. */
		conditions?: Array<StatusCondition>;

		/** ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs. */
		confidentialNodes?: ConfidentialNodes;

		/** Configuration for fine-grained cost management feature. */
		costManagementConfig?: CostManagementConfig;

		/** [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		createTime?: string | null;

		/** [Output only] The current software version of the master endpoint. */
		currentMasterVersion?: string | null;

		/** [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information. */
		currentNodeCount?: number | null;

		/** [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes. */
		currentNodeVersion?: string | null;

		/** Configuration of etcd encryption. */
		databaseEncryption?: DatabaseEncryption;

		/** Constraints applied to pods. */
		defaultMaxPodsConstraint?: MaxPodsConstraint;

		/** An optional description of this cluster. */
		description?: string | null;

		/** Kubernetes open source beta apis enabled on the cluster. */
		enableK8sBetaApis?: K8sBetaAPIConfig;

		/** Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation. */
		enableKubernetesAlpha?: boolean | null;

		/** Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead. */
		enableTpu?: boolean | null;

		/** [Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information. */
		endpoint?: string | null;

		/** EnterpriseConfig is the cluster enterprise configuration. */
		enterpriseConfig?: EnterpriseConfig;

		/** This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		expireTime?: string | null;

		/** Fleet is the fleet configuration for the cluster. */
		fleet?: Fleet;

		/** Output only. Unique id for the cluster. */
		id?: string | null;

		/** IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API */
		identityServiceConfig?: IdentityServiceConfig;

		/** The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version */
		initialClusterVersion?: string | null;

		/** The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead. */
		initialNodeCount?: number | null;

		/** Deprecated. Use node_pools.instance_group_urls. */
		instanceGroupUrls?: Array<string>;

		/** Configuration for controlling how IPs are allocated in the cluster. */
		ipAllocationPolicy?: IPAllocationPolicy;

		/** The fingerprint of the set of labels for this cluster. */
		labelFingerprint?: string | null;

		/** Configuration for the legacy Attribute Based Access Control authorization mode. */
		legacyAbac?: LegacyAbac;

		/** [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
		location?: string | null;

		/** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed. */
		locations?: Array<string>;

		/** LoggingConfig is cluster logging configuration. */
		loggingConfig?: LoggingConfig;

		/** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
		loggingService?: string | null;

		/** MaintenancePolicy defines the maintenance policy to be used for the cluster. */
		maintenancePolicy?: MaintenancePolicy;

		/** Master is the configuration for components on master. */
		master?: Master;

		/** The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates. */
		masterAuth?: MasterAuth;

		/** Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs. */
		masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

		/** The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead. */
		masterIpv4CidrBlock?: string | null;

		/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
		meshCertificates?: MeshCertificates;

		/** MonitoringConfig is cluster monitoring configuration. */
		monitoringConfig?: MonitoringConfig;

		/** The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
		monitoringService?: string | null;

		/** The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter. */
		name?: string | null;

		/** The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name. */
		network?: string | null;

		/** NetworkConfig reports the relative names of network & subnetwork. */
		networkConfig?: NetworkConfig;

		/** Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/ */
		networkPolicy?: NetworkPolicy;

		/** Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead. */
		nodeConfig?: NodeConfig;

		/** [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode. */
		nodeIpv4CidrSize?: number | null;

		/** node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters */
		nodePoolAutoConfig?: NodePoolAutoConfig;

		/** Subset of Nodepool message that has defaults. */
		nodePoolDefaults?: NodePoolDefaults;

		/** The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified. */
		nodePools?: Array<NodePool>;

		/** NotificationConfig is the configuration of notifications. */
		notificationConfig?: NotificationConfig;

		/** ParentProductConfig is the configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of a GKE cluster and take the ownership of the cluster. */
		parentProductConfig?: ParentProductConfig;

		/** Configuration for the PodSecurityPolicy feature. */
		podSecurityPolicyConfig?: PodSecurityPolicyConfig;

		/** If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead. */
		privateCluster?: boolean | null;

		/** Configuration options for private clusters. */
		privateClusterConfig?: PrivateClusterConfig;

		/** ProtectConfig defines the flags needed to enable/disable features for the Protect API. */
		protectConfig?: ProtectConfig;

		/** ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled. */
		releaseChannel?: ReleaseChannel;

		/** The resource labels for the cluster to use to annotate any related Google Compute Engine resources. */
		resourceLabels?: {[id: string]: string };

		/** Configuration for exporting cluster resource usages. */
		resourceUsageExportConfig?: ResourceUsageExportConfig;

		/** SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API. */
		securityPostureConfig?: SecurityPostureConfig;

		/** [Output only] Server-defined URL for the resource. */
		selfLink?: string | null;

		/** [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR. */
		servicesIpv4Cidr?: string | null;

		/** Configuration of Shielded Nodes feature. */
		shieldedNodes?: ShieldedNodes;

		/** [Output only] The current status of this cluster. */
		status?: ClusterStatus | null;

		/** [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available. */
		statusMessage?: string | null;

		/** The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name. */
		subnetwork?: string | null;

		/** Configuration for Cloud TPU. */
		tpuConfig?: TpuConfig;

		/** [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). */
		tpuIpv4CidrBlock?: string | null;

		/** VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it. */
		verticalPodAutoscaling?: VerticalPodAutoscaling;

		/** Configuration for direct-path (via ALTS) with workload identity. */
		workloadAltsConfig?: WorkloadALTSConfig;

		/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
		workloadCertificates?: WorkloadCertificates;

		/** Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. */
		workloadIdentityConfig?: WorkloadIdentityConfig;

		/** [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead. */
		zone?: string | null;
	}

	/** A Google Kubernetes Engine cluster. */
	export interface ClusterFormProperties {

		/** The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`. */
		clusterIpv4Cidr: FormControl<string | null | undefined>,

		/** [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		createTime: FormControl<string | null | undefined>,

		/** [Output only] The current software version of the master endpoint. */
		currentMasterVersion: FormControl<string | null | undefined>,

		/** [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information. */
		currentNodeCount: FormControl<number | null | undefined>,

		/** [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes. */
		currentNodeVersion: FormControl<string | null | undefined>,

		/** An optional description of this cluster. */
		description: FormControl<string | null | undefined>,

		/** Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation. */
		enableKubernetesAlpha: FormControl<boolean | null | undefined>,

		/** Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead. */
		enableTpu: FormControl<boolean | null | undefined>,

		/** [Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information. */
		endpoint: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. Unique id for the cluster. */
		id: FormControl<string | null | undefined>,

		/** The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version */
		initialClusterVersion: FormControl<string | null | undefined>,

		/** The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead. */
		initialNodeCount: FormControl<number | null | undefined>,

		/** The fingerprint of the set of labels for this cluster. */
		labelFingerprint: FormControl<string | null | undefined>,

		/** [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
		location: FormControl<string | null | undefined>,

		/** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
		loggingService: FormControl<string | null | undefined>,

		/** The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead. */
		masterIpv4CidrBlock: FormControl<string | null | undefined>,

		/** The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
		monitoringService: FormControl<string | null | undefined>,

		/** The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter. */
		name: FormControl<string | null | undefined>,

		/** The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name. */
		network: FormControl<string | null | undefined>,

		/** [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode. */
		nodeIpv4CidrSize: FormControl<number | null | undefined>,

		/** If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead. */
		privateCluster: FormControl<boolean | null | undefined>,

		/** The resource labels for the cluster to use to annotate any related Google Compute Engine resources. */
		resourceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** [Output only] Server-defined URL for the resource. */
		selfLink: FormControl<string | null | undefined>,

		/** [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR. */
		servicesIpv4Cidr: FormControl<string | null | undefined>,

		/** [Output only] The current status of this cluster. */
		status: FormControl<ClusterStatus | null | undefined>,

		/** [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available. */
		statusMessage: FormControl<string | null | undefined>,

		/** The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name. */
		subnetwork: FormControl<string | null | undefined>,

		/** [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). */
		tpuIpv4CidrBlock: FormControl<string | null | undefined>,

		/** [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			clusterIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			currentMasterVersion: new FormControl<string | null | undefined>(undefined),
			currentNodeCount: new FormControl<number | null | undefined>(undefined),
			currentNodeVersion: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enableKubernetesAlpha: new FormControl<boolean | null | undefined>(undefined),
			enableTpu: new FormControl<boolean | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initialClusterVersion: new FormControl<string | null | undefined>(undefined),
			initialNodeCount: new FormControl<number | null | undefined>(undefined),
			labelFingerprint: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			loggingService: new FormControl<string | null | undefined>(undefined),
			masterIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			monitoringService: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			nodeIpv4CidrSize: new FormControl<number | null | undefined>(undefined),
			privateCluster: new FormControl<boolean | null | undefined>(undefined),
			resourceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			servicesIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ClusterStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			tpuIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs. */
	export interface ClusterAutoscaling {

		/** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP. */
		autoprovisioningLocations?: Array<string>;

		/** AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. */
		autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;

		/** Defines autoscaling behaviour. */
		autoscalingProfile?: ClusterAutoscalingAutoscalingProfile | null;

		/** Enables automatic node pool creation and deletion. */
		enableNodeAutoprovisioning?: boolean | null;

		/** Contains global constraints regarding minimum and maximum amount of resources in the cluster. */
		resourceLimits?: Array<ResourceLimit>;
	}

	/** ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs. */
	export interface ClusterAutoscalingFormProperties {

		/** Defines autoscaling behaviour. */
		autoscalingProfile: FormControl<ClusterAutoscalingAutoscalingProfile | null | undefined>,

		/** Enables automatic node pool creation and deletion. */
		enableNodeAutoprovisioning: FormControl<boolean | null | undefined>,
	}
	export function CreateClusterAutoscalingFormGroup() {
		return new FormGroup<ClusterAutoscalingFormProperties>({
			autoscalingProfile: new FormControl<ClusterAutoscalingAutoscalingProfile | null | undefined>(undefined),
			enableNodeAutoprovisioning: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ClusterAutoscalingAutoscalingProfile { PROFILE_UNSPECIFIED = 'PROFILE_UNSPECIFIED', OPTIMIZE_UTILIZATION = 'OPTIMIZE_UTILIZATION', BALANCED = 'BALANCED' }


	/** Contains information about amount of some resource in the cluster. For memory, value should be in GB. */
	export interface ResourceLimit {

		/** Maximum amount of the resource in the cluster. */
		maximum?: string | null;

		/** Minimum amount of the resource in the cluster. */
		minimum?: string | null;

		/** Resource name "cpu", "memory" or gpu-specific string. */
		resourceType?: string | null;
	}

	/** Contains information about amount of some resource in the cluster. For memory, value should be in GB. */
	export interface ResourceLimitFormProperties {

		/** Maximum amount of the resource in the cluster. */
		maximum: FormControl<string | null | undefined>,

		/** Minimum amount of the resource in the cluster. */
		minimum: FormControl<string | null | undefined>,

		/** Resource name "cpu", "memory" or gpu-specific string. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceLimitFormGroup() {
		return new FormGroup<ResourceLimitFormProperties>({
			maximum: new FormControl<string | null | undefined>(undefined),
			minimum: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Telemetry integration for the cluster. */
	export interface ClusterTelemetry {

		/** Type of the integration. */
		type?: ClusterTelemetryType | null;
	}

	/** Telemetry integration for the cluster. */
	export interface ClusterTelemetryFormProperties {

		/** Type of the integration. */
		type: FormControl<ClusterTelemetryType | null | undefined>,
	}
	export function CreateClusterTelemetryFormGroup() {
		return new FormGroup<ClusterTelemetryFormProperties>({
			type: new FormControl<ClusterTelemetryType | null | undefined>(undefined),
		});

	}

	export enum ClusterTelemetryType { UNSPECIFIED = 'UNSPECIFIED', DISABLED = 'DISABLED', ENABLED = 'ENABLED', SYSTEM_ONLY = 'SYSTEM_ONLY' }


	/** StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED). */
	export interface StatusCondition {

		/** Canonical code of the condition. */
		canonicalCode?: StatusConditionCanonicalCode | null;

		/** Machine-friendly representation of the condition Deprecated. Use canonical_code instead. */
		code?: StatusConditionCode | null;

		/** Human-friendly representation of the condition */
		message?: string | null;
	}

	/** StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED). */
	export interface StatusConditionFormProperties {

		/** Canonical code of the condition. */
		canonicalCode: FormControl<StatusConditionCanonicalCode | null | undefined>,

		/** Machine-friendly representation of the condition Deprecated. Use canonical_code instead. */
		code: FormControl<StatusConditionCode | null | undefined>,

		/** Human-friendly representation of the condition */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusConditionFormGroup() {
		return new FormGroup<StatusConditionFormProperties>({
			canonicalCode: new FormControl<StatusConditionCanonicalCode | null | undefined>(undefined),
			code: new FormControl<StatusConditionCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StatusConditionCanonicalCode { OK = 'OK', CANCELLED = 'CANCELLED', UNKNOWN = 'UNKNOWN', INVALID_ARGUMENT = 'INVALID_ARGUMENT', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', NOT_FOUND = 'NOT_FOUND', ALREADY_EXISTS = 'ALREADY_EXISTS', PERMISSION_DENIED = 'PERMISSION_DENIED', UNAUTHENTICATED = 'UNAUTHENTICATED', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', FAILED_PRECONDITION = 'FAILED_PRECONDITION', ABORTED = 'ABORTED', OUT_OF_RANGE = 'OUT_OF_RANGE', UNIMPLEMENTED = 'UNIMPLEMENTED', INTERNAL = 'INTERNAL', UNAVAILABLE = 'UNAVAILABLE', DATA_LOSS = 'DATA_LOSS' }

	export enum StatusConditionCode { UNKNOWN = 'UNKNOWN', GCE_STOCKOUT = 'GCE_STOCKOUT', GKE_SERVICE_ACCOUNT_DELETED = 'GKE_SERVICE_ACCOUNT_DELETED', GCE_QUOTA_EXCEEDED = 'GCE_QUOTA_EXCEEDED', SET_BY_OPERATOR = 'SET_BY_OPERATOR', CLOUD_KMS_KEY_ERROR = 'CLOUD_KMS_KEY_ERROR', CA_EXPIRING = 'CA_EXPIRING' }


	/** ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs. */
	export interface ConfidentialNodes {

		/** Whether Confidential Nodes feature is enabled. */
		enabled?: boolean | null;
	}

	/** ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs. */
	export interface ConfidentialNodesFormProperties {

		/** Whether Confidential Nodes feature is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateConfidentialNodesFormGroup() {
		return new FormGroup<ConfidentialNodesFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for fine-grained cost management feature. */
	export interface CostManagementConfig {

		/** Whether the feature is enabled or not. */
		enabled?: boolean | null;
	}

	/** Configuration for fine-grained cost management feature. */
	export interface CostManagementConfigFormProperties {

		/** Whether the feature is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCostManagementConfigFormGroup() {
		return new FormGroup<CostManagementConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration of etcd encryption. */
	export interface DatabaseEncryption {

		/** Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key */
		keyName?: string | null;

		/** The desired state of etcd encryption. */
		state?: DatabaseEncryptionState | null;
	}

	/** Configuration of etcd encryption. */
	export interface DatabaseEncryptionFormProperties {

		/** Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key */
		keyName: FormControl<string | null | undefined>,

		/** The desired state of etcd encryption. */
		state: FormControl<DatabaseEncryptionState | null | undefined>,
	}
	export function CreateDatabaseEncryptionFormGroup() {
		return new FormGroup<DatabaseEncryptionFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DatabaseEncryptionState | null | undefined>(undefined),
		});

	}

	export enum DatabaseEncryptionState { UNKNOWN = 'UNKNOWN', ENCRYPTED = 'ENCRYPTED', DECRYPTED = 'DECRYPTED' }


	/** Kubernetes open source beta apis enabled on the cluster. */
	export interface K8sBetaAPIConfig {

		/** api name, e.g. storage.k8s.io/v1beta1/csistoragecapacities. */
		enabledApis?: Array<string>;
	}

	/** Kubernetes open source beta apis enabled on the cluster. */
	export interface K8sBetaAPIConfigFormProperties {
	}
	export function CreateK8sBetaAPIConfigFormGroup() {
		return new FormGroup<K8sBetaAPIConfigFormProperties>({
		});

	}


	/** EnterpriseConfig is the cluster enterprise configuration. */
	export interface EnterpriseConfig {

		/** Output only. [Output only] cluster_tier specifies the premium tier of the cluster. */
		clusterTier?: EnterpriseConfigClusterTier | null;
	}

	/** EnterpriseConfig is the cluster enterprise configuration. */
	export interface EnterpriseConfigFormProperties {

		/** Output only. [Output only] cluster_tier specifies the premium tier of the cluster. */
		clusterTier: FormControl<EnterpriseConfigClusterTier | null | undefined>,
	}
	export function CreateEnterpriseConfigFormGroup() {
		return new FormGroup<EnterpriseConfigFormProperties>({
			clusterTier: new FormControl<EnterpriseConfigClusterTier | null | undefined>(undefined),
		});

	}

	export enum EnterpriseConfigClusterTier { CLUSTER_TIER_UNSPECIFIED = 'CLUSTER_TIER_UNSPECIFIED', STANDARD = 'STANDARD', ENTERPRISE = 'ENTERPRISE' }


	/** Fleet is the fleet configuration for the cluster. */
	export interface Fleet {

		/** [Output only] The full resource name of the registered fleet membership of the cluster, in the format `//gkehub.googleapis.com/projects/locations/memberships/*`. */
		membership?: string | null;

		/** [Output only] Whether the cluster has been registered through the fleet API. */
		preRegistered?: boolean | null;

		/** The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered. */
		project?: string | null;
	}

	/** Fleet is the fleet configuration for the cluster. */
	export interface FleetFormProperties {

		/** [Output only] The full resource name of the registered fleet membership of the cluster, in the format `//gkehub.googleapis.com/projects/locations/memberships/*`. */
		membership: FormControl<string | null | undefined>,

		/** [Output only] Whether the cluster has been registered through the fleet API. */
		preRegistered: FormControl<boolean | null | undefined>,

		/** The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			membership: new FormControl<string | null | undefined>(undefined),
			preRegistered: new FormControl<boolean | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API */
	export interface IdentityServiceConfig {

		/** Whether to enable the Identity Service component */
		enabled?: boolean | null;
	}

	/** IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API */
	export interface IdentityServiceConfigFormProperties {

		/** Whether to enable the Identity Service component */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentityServiceConfigFormGroup() {
		return new FormGroup<IdentityServiceConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for controlling how IPs are allocated in the cluster. */
	export interface IPAllocationPolicy {

		/** AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message. */
		additionalPodRangesConfig?: AdditionalPodRangesConfig;

		/** If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified. */
		allowRouteOverlap?: boolean | null;

		/** This field is deprecated, use cluster_ipv4_cidr_block. */
		clusterIpv4Cidr?: string | null;

		/** The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
		clusterIpv4CidrBlock?: string | null;

		/** The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
		clusterSecondaryRangeName?: string | null;

		/** Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true. */
		createSubnetwork?: boolean | null;

		/** Output only. [Output only] The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
		defaultPodIpv4RangeUtilization?: number | null;

		/** The ipv6 access type (internal or external) when create_subnetwork is true */
		ipv6AccessType?: IPAllocationPolicyIpv6AccessType | null;

		/** This field is deprecated, use node_ipv4_cidr_block. */
		nodeIpv4Cidr?: string | null;

		/** The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
		nodeIpv4CidrBlock?: string | null;

		/** [PRIVATE FIELD] Config for pod CIDR size overprovisioning. */
		podCidrOverprovisionConfig?: PodCIDROverprovisionConfig;

		/** This field is deprecated, use services_ipv4_cidr_block. */
		servicesIpv4Cidr?: string | null;

		/** The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
		servicesIpv4CidrBlock?: string | null;

		/** Output only. [Output only] The services IPv6 CIDR block for the cluster. */
		servicesIpv6CidrBlock?: string | null;

		/** The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
		servicesSecondaryRangeName?: string | null;

		/** IP stack type */
		stackType?: IPAllocationPolicyStackType | null;

		/** Output only. [Output only] The subnet's IPv6 CIDR block used by nodes and pods. */
		subnetIpv6CidrBlock?: string | null;

		/** A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork. */
		subnetworkName?: string | null;

		/** The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead. */
		tpuIpv4CidrBlock?: string | null;

		/** Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
		useIpAliases?: boolean | null;

		/** Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
		useRoutes?: boolean | null;
	}

	/** Configuration for controlling how IPs are allocated in the cluster. */
	export interface IPAllocationPolicyFormProperties {

		/** If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified. */
		allowRouteOverlap: FormControl<boolean | null | undefined>,

		/** This field is deprecated, use cluster_ipv4_cidr_block. */
		clusterIpv4Cidr: FormControl<string | null | undefined>,

		/** The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
		clusterIpv4CidrBlock: FormControl<string | null | undefined>,

		/** The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
		clusterSecondaryRangeName: FormControl<string | null | undefined>,

		/** Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true. */
		createSubnetwork: FormControl<boolean | null | undefined>,

		/** Output only. [Output only] The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
		defaultPodIpv4RangeUtilization: FormControl<number | null | undefined>,

		/** The ipv6 access type (internal or external) when create_subnetwork is true */
		ipv6AccessType: FormControl<IPAllocationPolicyIpv6AccessType | null | undefined>,

		/** This field is deprecated, use node_ipv4_cidr_block. */
		nodeIpv4Cidr: FormControl<string | null | undefined>,

		/** The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
		nodeIpv4CidrBlock: FormControl<string | null | undefined>,

		/** This field is deprecated, use services_ipv4_cidr_block. */
		servicesIpv4Cidr: FormControl<string | null | undefined>,

		/** The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. */
		servicesIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Output only. [Output only] The services IPv6 CIDR block for the cluster. */
		servicesIpv6CidrBlock: FormControl<string | null | undefined>,

		/** The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false. */
		servicesSecondaryRangeName: FormControl<string | null | undefined>,

		/** IP stack type */
		stackType: FormControl<IPAllocationPolicyStackType | null | undefined>,

		/** Output only. [Output only] The subnet's IPv6 CIDR block used by nodes and pods. */
		subnetIpv6CidrBlock: FormControl<string | null | undefined>,

		/** A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork. */
		subnetworkName: FormControl<string | null | undefined>,

		/** The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead. */
		tpuIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
		useIpAliases: FormControl<boolean | null | undefined>,

		/** Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode */
		useRoutes: FormControl<boolean | null | undefined>,
	}
	export function CreateIPAllocationPolicyFormGroup() {
		return new FormGroup<IPAllocationPolicyFormProperties>({
			allowRouteOverlap: new FormControl<boolean | null | undefined>(undefined),
			clusterIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			clusterIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			clusterSecondaryRangeName: new FormControl<string | null | undefined>(undefined),
			createSubnetwork: new FormControl<boolean | null | undefined>(undefined),
			defaultPodIpv4RangeUtilization: new FormControl<number | null | undefined>(undefined),
			ipv6AccessType: new FormControl<IPAllocationPolicyIpv6AccessType | null | undefined>(undefined),
			nodeIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			nodeIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			servicesIpv4Cidr: new FormControl<string | null | undefined>(undefined),
			servicesIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			servicesIpv6CidrBlock: new FormControl<string | null | undefined>(undefined),
			servicesSecondaryRangeName: new FormControl<string | null | undefined>(undefined),
			stackType: new FormControl<IPAllocationPolicyStackType | null | undefined>(undefined),
			subnetIpv6CidrBlock: new FormControl<string | null | undefined>(undefined),
			subnetworkName: new FormControl<string | null | undefined>(undefined),
			tpuIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			useIpAliases: new FormControl<boolean | null | undefined>(undefined),
			useRoutes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum IPAllocationPolicyIpv6AccessType { IPV6_ACCESS_TYPE_UNSPECIFIED = 'IPV6_ACCESS_TYPE_UNSPECIFIED', INTERNAL = 'INTERNAL', EXTERNAL = 'EXTERNAL' }


	/** [PRIVATE FIELD] Config for pod CIDR size overprovisioning. */
	export interface PodCIDROverprovisionConfig {

		/** Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default. */
		disable?: boolean | null;
	}

	/** [PRIVATE FIELD] Config for pod CIDR size overprovisioning. */
	export interface PodCIDROverprovisionConfigFormProperties {

		/** Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default. */
		disable: FormControl<boolean | null | undefined>,
	}
	export function CreatePodCIDROverprovisionConfigFormGroup() {
		return new FormGroup<PodCIDROverprovisionConfigFormProperties>({
			disable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum IPAllocationPolicyStackType { STACK_TYPE_UNSPECIFIED = 'STACK_TYPE_UNSPECIFIED', IPV4 = 'IPV4', IPV4_IPV6 = 'IPV4_IPV6' }


	/** Configuration for the legacy Attribute Based Access Control authorization mode. */
	export interface LegacyAbac {

		/** Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. */
		enabled?: boolean | null;
	}

	/** Configuration for the legacy Attribute Based Access Control authorization mode. */
	export interface LegacyAbacFormProperties {

		/** Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLegacyAbacFormGroup() {
		return new FormGroup<LegacyAbacFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** LoggingConfig is cluster logging configuration. */
	export interface LoggingConfig {

		/** LoggingComponentConfig is cluster logging component configuration. */
		componentConfig?: LoggingComponentConfig;
	}

	/** LoggingConfig is cluster logging configuration. */
	export interface LoggingConfigFormProperties {
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
		});

	}


	/** LoggingComponentConfig is cluster logging component configuration. */
	export interface LoggingComponentConfig {

		/** Select components to collect logs. An empty set would disable all logging. */
		enableComponents?: Array<string>;
	}

	/** LoggingComponentConfig is cluster logging component configuration. */
	export interface LoggingComponentConfigFormProperties {
	}
	export function CreateLoggingComponentConfigFormGroup() {
		return new FormGroup<LoggingComponentConfigFormProperties>({
		});

	}


	/** MaintenancePolicy defines the maintenance policy to be used for the cluster. */
	export interface MaintenancePolicy {

		/** A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy. */
		resourceVersion?: string | null;

		/** MaintenanceWindow defines the maintenance window to be used for the cluster. */
		window?: MaintenanceWindow;
	}

	/** MaintenancePolicy defines the maintenance policy to be used for the cluster. */
	export interface MaintenancePolicyFormProperties {

		/** A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy. */
		resourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateMaintenancePolicyFormGroup() {
		return new FormGroup<MaintenancePolicyFormProperties>({
			resourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MaintenanceWindow defines the maintenance window to be used for the cluster. */
	export interface MaintenanceWindow {

		/** Time window specified for daily maintenance operations. */
		dailyMaintenanceWindow?: DailyMaintenanceWindow;

		/** Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. */
		maintenanceExclusions?: {[id: string]: TimeWindow };

		/** Represents an arbitrary window of time that recurs. */
		recurringWindow?: RecurringTimeWindow;
	}

	/** MaintenanceWindow defines the maintenance window to be used for the cluster. */
	export interface MaintenanceWindowFormProperties {

		/** Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. */
		maintenanceExclusions: FormControl<{[id: string]: TimeWindow } | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			maintenanceExclusions: new FormControl<{[id: string]: TimeWindow } | null | undefined>(undefined),
		});

	}


	/** Time window specified for daily maintenance operations. */
	export interface DailyMaintenanceWindow {

		/** [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario. */
		duration?: string | null;

		/** Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT. */
		startTime?: string | null;
	}

	/** Time window specified for daily maintenance operations. */
	export interface DailyMaintenanceWindowFormProperties {

		/** [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario. */
		duration: FormControl<string | null | undefined>,

		/** Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateDailyMaintenanceWindowFormGroup() {
		return new FormGroup<DailyMaintenanceWindowFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an arbitrary window of time. */
	export interface TimeWindow {

		/** The time that the window ends. The end time should take place after the start time. */
		endTime?: string | null;

		/** Represents the Maintenance exclusion option. */
		maintenanceExclusionOptions?: MaintenanceExclusionOptions;

		/** The time that the window first starts. */
		startTime?: string | null;
	}

	/** Represents an arbitrary window of time. */
	export interface TimeWindowFormProperties {

		/** The time that the window ends. The end time should take place after the start time. */
		endTime: FormControl<string | null | undefined>,

		/** The time that the window first starts. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the Maintenance exclusion option. */
	export interface MaintenanceExclusionOptions {

		/** Scope specifies the upgrade scope which upgrades are blocked by the exclusion. */
		scope?: MaintenanceExclusionOptionsScope | null;
	}

	/** Represents the Maintenance exclusion option. */
	export interface MaintenanceExclusionOptionsFormProperties {

		/** Scope specifies the upgrade scope which upgrades are blocked by the exclusion. */
		scope: FormControl<MaintenanceExclusionOptionsScope | null | undefined>,
	}
	export function CreateMaintenanceExclusionOptionsFormGroup() {
		return new FormGroup<MaintenanceExclusionOptionsFormProperties>({
			scope: new FormControl<MaintenanceExclusionOptionsScope | null | undefined>(undefined),
		});

	}

	export enum MaintenanceExclusionOptionsScope { NO_UPGRADES = 'NO_UPGRADES', NO_MINOR_UPGRADES = 'NO_MINOR_UPGRADES', NO_MINOR_OR_NODE_UPGRADES = 'NO_MINOR_OR_NODE_UPGRADES' }


	/** Represents an arbitrary window of time that recurs. */
	export interface RecurringTimeWindow {

		/** An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported. */
		recurrence?: string | null;

		/** Represents an arbitrary window of time. */
		window?: TimeWindow;
	}

	/** Represents an arbitrary window of time that recurs. */
	export interface RecurringTimeWindowFormProperties {

		/** An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported. */
		recurrence: FormControl<string | null | undefined>,
	}
	export function CreateRecurringTimeWindowFormGroup() {
		return new FormGroup<RecurringTimeWindowFormProperties>({
			recurrence: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Master is the configuration for components on master. */
	export interface Master {
	}

	/** Master is the configuration for components on master. */
	export interface MasterFormProperties {
	}
	export function CreateMasterFormGroup() {
		return new FormGroup<MasterFormProperties>({
		});

	}


	/** The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates. */
	export interface MasterAuth {

		/** [Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint. */
		clientCertificate?: string | null;

		/** Configuration for client certificates on the cluster. */
		clientCertificateConfig?: ClientCertificateConfig;

		/** [Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint. */
		clientKey?: string | null;
		clusterCaCertificate?: string | null;

		/** The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
		password?: string | null;

		/** The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
		username?: string | null;
	}

	/** The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates. */
	export interface MasterAuthFormProperties {

		/** [Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint. */
		clientCertificate: FormControl<string | null | undefined>,

		/** [Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint. */
		clientKey: FormControl<string | null | undefined>,
		clusterCaCertificate: FormControl<string | null | undefined>,

		/** The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
		password: FormControl<string | null | undefined>,

		/** The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMasterAuthFormGroup() {
		return new FormGroup<MasterAuthFormProperties>({
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			clusterCaCertificate: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs. */
	export interface MasterAuthorizedNetworksConfig {

		/** cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS. */
		cidrBlocks?: Array<CidrBlock>;

		/** Whether or not master authorized networks is enabled. */
		enabled?: boolean | null;

		/** Whether master is accessbile via Google Compute Engine Public IP addresses. */
		gcpPublicCidrsAccessEnabled?: boolean | null;
	}

	/** Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs. */
	export interface MasterAuthorizedNetworksConfigFormProperties {

		/** Whether or not master authorized networks is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Whether master is accessbile via Google Compute Engine Public IP addresses. */
		gcpPublicCidrsAccessEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMasterAuthorizedNetworksConfigFormGroup() {
		return new FormGroup<MasterAuthorizedNetworksConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			gcpPublicCidrsAccessEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
	export interface MeshCertificates {

		/** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
		enableCertificates?: boolean | null;
	}

	/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
	export interface MeshCertificatesFormProperties {

		/** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
		enableCertificates: FormControl<boolean | null | undefined>,
	}
	export function CreateMeshCertificatesFormGroup() {
		return new FormGroup<MeshCertificatesFormProperties>({
			enableCertificates: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** MonitoringConfig is cluster monitoring configuration. */
	export interface MonitoringConfig {

		/** AdvancedDatapathObservabilityConfig specifies configuration of observability features of advanced datapath. */
		advancedDatapathObservabilityConfig?: AdvancedDatapathObservabilityConfig;

		/** MonitoringComponentConfig is cluster monitoring component configuration. */
		componentConfig?: MonitoringComponentConfig;

		/** ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus. */
		managedPrometheusConfig?: ManagedPrometheusConfig;
	}

	/** MonitoringConfig is cluster monitoring configuration. */
	export interface MonitoringConfigFormProperties {
	}
	export function CreateMonitoringConfigFormGroup() {
		return new FormGroup<MonitoringConfigFormProperties>({
		});

	}


	/** MonitoringComponentConfig is cluster monitoring component configuration. */
	export interface MonitoringComponentConfig {

		/** Select components to collect metrics. An empty set would disable all monitoring. */
		enableComponents?: Array<string>;
	}

	/** MonitoringComponentConfig is cluster monitoring component configuration. */
	export interface MonitoringComponentConfigFormProperties {
	}
	export function CreateMonitoringComponentConfigFormGroup() {
		return new FormGroup<MonitoringComponentConfigFormProperties>({
		});

	}


	/** ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus. */
	export interface ManagedPrometheusConfig {

		/** Enable Managed Collection. */
		enabled?: boolean | null;
	}

	/** ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus. */
	export interface ManagedPrometheusConfigFormProperties {

		/** Enable Managed Collection. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateManagedPrometheusConfigFormGroup() {
		return new FormGroup<ManagedPrometheusConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** NetworkConfig reports the relative names of network & subnetwork. */
	export interface NetworkConfig {

		/** The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation. */
		datapathProvider?: NetworkConfigDatapathProvider | null;

		/** DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster. */
		defaultSnatStatus?: DefaultSnatStatus;

		/** DNSConfig contains the desired set of options for configuring clusterDNS. */
		dnsConfig?: DNSConfig;

		/** Whether FQDN Network Policy is enabled on this cluster. */
		enableFqdnNetworkPolicy?: boolean | null;

		/** Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network. */
		enableIntraNodeVisibility?: boolean | null;

		/** Whether L4ILB Subsetting is enabled for this cluster. */
		enableL4ilbSubsetting?: boolean | null;

		/** Whether multi-networking is enabled for this cluster. */
		enableMultiNetworking?: boolean | null;

		/** GatewayAPIConfig contains the desired config of Gateway API on this cluster. */
		gatewayApiConfig?: GatewayAPIConfig;

		/** Specify the details of in-transit encryption. */
		inTransitEncryptionConfig?: NetworkConfigInTransitEncryptionConfig | null;

		/** Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network */
		network?: string | null;

		/** Configuration of all network bandwidth tiers */
		networkPerformanceConfig?: ClusterNetworkPerformanceConfig;

		/** The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4) */
		privateIpv6GoogleAccess?: NetworkConfigPrivateIpv6GoogleAccess | null;

		/** Config to block services with externalIPs field. */
		serviceExternalIpsConfig?: ServiceExternalIPsConfig;

		/** Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
		subnetwork?: string | null;
	}

	/** NetworkConfig reports the relative names of network & subnetwork. */
	export interface NetworkConfigFormProperties {

		/** The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation. */
		datapathProvider: FormControl<NetworkConfigDatapathProvider | null | undefined>,

		/** Whether FQDN Network Policy is enabled on this cluster. */
		enableFqdnNetworkPolicy: FormControl<boolean | null | undefined>,

		/** Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network. */
		enableIntraNodeVisibility: FormControl<boolean | null | undefined>,

		/** Whether L4ILB Subsetting is enabled for this cluster. */
		enableL4ilbSubsetting: FormControl<boolean | null | undefined>,

		/** Whether multi-networking is enabled for this cluster. */
		enableMultiNetworking: FormControl<boolean | null | undefined>,

		/** Specify the details of in-transit encryption. */
		inTransitEncryptionConfig: FormControl<NetworkConfigInTransitEncryptionConfig | null | undefined>,

		/** Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network */
		network: FormControl<string | null | undefined>,

		/** The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4) */
		privateIpv6GoogleAccess: FormControl<NetworkConfigPrivateIpv6GoogleAccess | null | undefined>,

		/** Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			datapathProvider: new FormControl<NetworkConfigDatapathProvider | null | undefined>(undefined),
			enableFqdnNetworkPolicy: new FormControl<boolean | null | undefined>(undefined),
			enableIntraNodeVisibility: new FormControl<boolean | null | undefined>(undefined),
			enableL4ilbSubsetting: new FormControl<boolean | null | undefined>(undefined),
			enableMultiNetworking: new FormControl<boolean | null | undefined>(undefined),
			inTransitEncryptionConfig: new FormControl<NetworkConfigInTransitEncryptionConfig | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			privateIpv6GoogleAccess: new FormControl<NetworkConfigPrivateIpv6GoogleAccess | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigDatapathProvider { DATAPATH_PROVIDER_UNSPECIFIED = 'DATAPATH_PROVIDER_UNSPECIFIED', LEGACY_DATAPATH = 'LEGACY_DATAPATH', ADVANCED_DATAPATH = 'ADVANCED_DATAPATH' }


	/** DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster. */
	export interface DefaultSnatStatus {

		/** Disables cluster default sNAT rules. */
		disabled?: boolean | null;
	}

	/** DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster. */
	export interface DefaultSnatStatusFormProperties {

		/** Disables cluster default sNAT rules. */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultSnatStatusFormGroup() {
		return new FormGroup<DefaultSnatStatusFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** DNSConfig contains the desired set of options for configuring clusterDNS. */
	export interface DNSConfig {

		/** cluster_dns indicates which in-cluster DNS provider should be used. */
		clusterDns?: DNSConfigClusterDns | null;

		/** cluster_dns_domain is the suffix used for all cluster service records. */
		clusterDnsDomain?: string | null;

		/** cluster_dns_scope indicates the scope of access to cluster DNS records. */
		clusterDnsScope?: DNSConfigClusterDnsScope | null;
	}

	/** DNSConfig contains the desired set of options for configuring clusterDNS. */
	export interface DNSConfigFormProperties {

		/** cluster_dns indicates which in-cluster DNS provider should be used. */
		clusterDns: FormControl<DNSConfigClusterDns | null | undefined>,

		/** cluster_dns_domain is the suffix used for all cluster service records. */
		clusterDnsDomain: FormControl<string | null | undefined>,

		/** cluster_dns_scope indicates the scope of access to cluster DNS records. */
		clusterDnsScope: FormControl<DNSConfigClusterDnsScope | null | undefined>,
	}
	export function CreateDNSConfigFormGroup() {
		return new FormGroup<DNSConfigFormProperties>({
			clusterDns: new FormControl<DNSConfigClusterDns | null | undefined>(undefined),
			clusterDnsDomain: new FormControl<string | null | undefined>(undefined),
			clusterDnsScope: new FormControl<DNSConfigClusterDnsScope | null | undefined>(undefined),
		});

	}

	export enum DNSConfigClusterDns { PROVIDER_UNSPECIFIED = 'PROVIDER_UNSPECIFIED', PLATFORM_DEFAULT = 'PLATFORM_DEFAULT', CLOUD_DNS = 'CLOUD_DNS', KUBE_DNS = 'KUBE_DNS' }

	export enum DNSConfigClusterDnsScope { DNS_SCOPE_UNSPECIFIED = 'DNS_SCOPE_UNSPECIFIED', CLUSTER_SCOPE = 'CLUSTER_SCOPE', VPC_SCOPE = 'VPC_SCOPE' }


	/** GatewayAPIConfig contains the desired config of Gateway API on this cluster. */
	export interface GatewayAPIConfig {

		/** The Gateway API release channel to use for Gateway API. */
		channel?: GatewayAPIConfigChannel | null;
	}

	/** GatewayAPIConfig contains the desired config of Gateway API on this cluster. */
	export interface GatewayAPIConfigFormProperties {

		/** The Gateway API release channel to use for Gateway API. */
		channel: FormControl<GatewayAPIConfigChannel | null | undefined>,
	}
	export function CreateGatewayAPIConfigFormGroup() {
		return new FormGroup<GatewayAPIConfigFormProperties>({
			channel: new FormControl<GatewayAPIConfigChannel | null | undefined>(undefined),
		});

	}

	export enum GatewayAPIConfigChannel { CHANNEL_UNSPECIFIED = 'CHANNEL_UNSPECIFIED', CHANNEL_DISABLED = 'CHANNEL_DISABLED', CHANNEL_EXPERIMENTAL = 'CHANNEL_EXPERIMENTAL', CHANNEL_STANDARD = 'CHANNEL_STANDARD' }

	export enum NetworkConfigInTransitEncryptionConfig { IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED = 'IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED', IN_TRANSIT_ENCRYPTION_DISABLED = 'IN_TRANSIT_ENCRYPTION_DISABLED', IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT = 'IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT' }


	/** Configuration of all network bandwidth tiers */
	export interface ClusterNetworkPerformanceConfig {

		/** Specifies the total network bandwidth tier for the NodePool. */
		totalEgressBandwidthTier?: ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null;
	}

	/** Configuration of all network bandwidth tiers */
	export interface ClusterNetworkPerformanceConfigFormProperties {

		/** Specifies the total network bandwidth tier for the NodePool. */
		totalEgressBandwidthTier: FormControl<ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null | undefined>,
	}
	export function CreateClusterNetworkPerformanceConfigFormGroup() {
		return new FormGroup<ClusterNetworkPerformanceConfigFormProperties>({
			totalEgressBandwidthTier: new FormControl<ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null | undefined>(undefined),
		});

	}

	export enum ClusterNetworkPerformanceConfigTotalEgressBandwidthTier { TIER_UNSPECIFIED = 'TIER_UNSPECIFIED', TIER_1 = 'TIER_1' }

	export enum NetworkConfigPrivateIpv6GoogleAccess { PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = 'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED', PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED = 'PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED', PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE = 'PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE', PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL = 'PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL' }


	/** Config to block services with externalIPs field. */
	export interface ServiceExternalIPsConfig {

		/** Whether Services with ExternalIPs field are allowed or not. */
		enabled?: boolean | null;
	}

	/** Config to block services with externalIPs field. */
	export interface ServiceExternalIPsConfigFormProperties {

		/** Whether Services with ExternalIPs field are allowed or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceExternalIPsConfigFormGroup() {
		return new FormGroup<ServiceExternalIPsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/ */
	export interface NetworkPolicy {

		/** Whether network policy is enabled on the cluster. */
		enabled?: boolean | null;

		/** The selected network policy provider. */
		provider?: NetworkPolicyProvider | null;
	}

	/** Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/ */
	export interface NetworkPolicyFormProperties {

		/** Whether network policy is enabled on the cluster. */
		enabled: FormControl<boolean | null | undefined>,

		/** The selected network policy provider. */
		provider: FormControl<NetworkPolicyProvider | null | undefined>,
	}
	export function CreateNetworkPolicyFormGroup() {
		return new FormGroup<NetworkPolicyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			provider: new FormControl<NetworkPolicyProvider | null | undefined>(undefined),
		});

	}

	export enum NetworkPolicyProvider { PROVIDER_UNSPECIFIED = 'PROVIDER_UNSPECIFIED', CALICO = 'CALICO' }


	/** Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead. */
	export interface NodeConfig {

		/** A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs. */
		accelerators?: Array<AcceleratorConfig>;

		/** Specifies options for controlling advanced machine features. */
		advancedMachineFeatures?: AdvancedMachineFeatures;

		/** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
		bootDiskKmsKey?: string | null;

		/** ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs. */
		confidentialNodes?: ConfidentialNodes;

		/** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
		diskSizeGb?: number | null;

		/** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
		diskType?: string | null;

		/** Optional. Enable confidential storage on Hyperdisk. boot_disk_kms_key is required when enable_confidential_storage is true. This is only available for private preview. */
		enableConfidentialStorage?: boolean | null;

		/** EphemeralStorageConfig contains configuration for the ephemeral storage filesystem. */
		ephemeralStorageConfig?: EphemeralStorageConfig;

		/** EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs. */
		ephemeralStorageLocalSsdConfig?: EphemeralStorageLocalSsdConfig;

		/** Configuration of Fast Socket feature. */
		fastSocket?: FastSocket;

		/** GcfsConfig contains configurations of Google Container File System. */
		gcfsConfig?: GcfsConfig;

		/** Configuration of gVNIC feature. */
		gvnic?: VirtualNIC;

		/** HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on. */
		hostMaintenancePolicy?: HostMaintenancePolicy;

		/** The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
		imageType?: string | null;

		/** Node kubelet configs. */
		kubeletConfig?: NodeKubeletConfig;

		/** The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ */
		labels?: {[id: string]: string };

		/** Parameters that can be configured on Linux nodes. */
		linuxNodeConfig?: LinuxNodeConfig;

		/** LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs */
		localNvmeSsdBlockConfig?: LocalNvmeSsdBlockConfig;

		/** The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. */
		localSsdCount?: number | null;

		/** NodePoolLoggingConfig specifies logging configuration for nodepools. */
		loggingConfig?: NodePoolLoggingConfig;

		/** The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`. */
		machineType?: string | null;

		/** The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB. */
		metadata?: {[id: string]: string };

		/** Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). */
		minCpuPlatform?: string | null;

		/** Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes). */
		nodeGroup?: string | null;

		/** The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added. */
		oauthScopes?: Array<string>;

		/** Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances. */
		preemptible?: boolean | null;

		/** [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from. */
		reservationAffinity?: ReservationAffinity;

		/** The resource labels for the node pool to use to annotate any related Google Compute Engine resources. */
		resourceLabels?: {[id: string]: string };

		/** A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. */
		resourceManagerTags?: ResourceManagerTags;

		/** SandboxConfig contains configurations of the sandbox to use for the node. */
		sandboxConfig?: SandboxConfig;

		/** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
		serviceAccount?: string | null;

		/** A set of Shielded Instance options. */
		shieldedInstanceConfig?: ShieldedInstanceConfig;

		/** SoleTenantConfig contains the NodeAffinities to specify what shared sole tenant node groups should back the node pool. */
		soleTenantConfig?: SoleTenantConfig;

		/** Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. */
		spot?: boolean | null;

		/** The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035. */
		tags?: Array<string>;

		/** List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ */
		taints?: Array<NodeTaint>;

		/** Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings */
		windowsNodeConfig?: WindowsNodeConfig;

		/** WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool. */
		workloadMetadataConfig?: WorkloadMetadataConfig;
	}

	/** Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead. */
	export interface NodeConfigFormProperties {

		/** The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption */
		bootDiskKmsKey: FormControl<string | null | undefined>,

		/** Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB. */
		diskSizeGb: FormControl<number | null | undefined>,

		/** Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' */
		diskType: FormControl<string | null | undefined>,

		/** Optional. Enable confidential storage on Hyperdisk. boot_disk_kms_key is required when enable_confidential_storage is true. This is only available for private preview. */
		enableConfidentialStorage: FormControl<boolean | null | undefined>,

		/** The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
		imageType: FormControl<string | null | undefined>,

		/** The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. */
		localSsdCount: FormControl<number | null | undefined>,

		/** The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`. */
		machineType: FormControl<string | null | undefined>,

		/** The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). */
		minCpuPlatform: FormControl<string | null | undefined>,

		/** Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes). */
		nodeGroup: FormControl<string | null | undefined>,

		/** Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances. */
		preemptible: FormControl<boolean | null | undefined>,

		/** The resource labels for the node pool to use to annotate any related Google Compute Engine resources. */
		resourceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. */
		spot: FormControl<boolean | null | undefined>,
	}
	export function CreateNodeConfigFormGroup() {
		return new FormGroup<NodeConfigFormProperties>({
			bootDiskKmsKey: new FormControl<string | null | undefined>(undefined),
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			diskType: new FormControl<string | null | undefined>(undefined),
			enableConfidentialStorage: new FormControl<boolean | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			localSsdCount: new FormControl<number | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			minCpuPlatform: new FormControl<string | null | undefined>(undefined),
			nodeGroup: new FormControl<string | null | undefined>(undefined),
			preemptible: new FormControl<boolean | null | undefined>(undefined),
			resourceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			spot: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** EphemeralStorageConfig contains configuration for the ephemeral storage filesystem. */
	export interface EphemeralStorageConfig {

		/** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
		localSsdCount?: number | null;
	}

	/** EphemeralStorageConfig contains configuration for the ephemeral storage filesystem. */
	export interface EphemeralStorageConfigFormProperties {

		/** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
		localSsdCount: FormControl<number | null | undefined>,
	}
	export function CreateEphemeralStorageConfigFormGroup() {
		return new FormGroup<EphemeralStorageConfigFormProperties>({
			localSsdCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs. */
	export interface EphemeralStorageLocalSsdConfig {

		/** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
		localSsdCount?: number | null;
	}

	/** EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs. */
	export interface EphemeralStorageLocalSsdConfigFormProperties {

		/** Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
		localSsdCount: FormControl<number | null | undefined>,
	}
	export function CreateEphemeralStorageLocalSsdConfigFormGroup() {
		return new FormGroup<EphemeralStorageLocalSsdConfigFormProperties>({
			localSsdCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration of Fast Socket feature. */
	export interface FastSocket {

		/** Whether Fast Socket features are enabled in the node pool. */
		enabled?: boolean | null;
	}

	/** Configuration of Fast Socket feature. */
	export interface FastSocketFormProperties {

		/** Whether Fast Socket features are enabled in the node pool. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateFastSocketFormGroup() {
		return new FormGroup<FastSocketFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** GcfsConfig contains configurations of Google Container File System. */
	export interface GcfsConfig {

		/** Whether to use GCFS. */
		enabled?: boolean | null;
	}

	/** GcfsConfig contains configurations of Google Container File System. */
	export interface GcfsConfigFormProperties {

		/** Whether to use GCFS. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGcfsConfigFormGroup() {
		return new FormGroup<GcfsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration of gVNIC feature. */
	export interface VirtualNIC {

		/** Whether gVNIC features are enabled in the node pool. */
		enabled?: boolean | null;
	}

	/** Configuration of gVNIC feature. */
	export interface VirtualNICFormProperties {

		/** Whether gVNIC features are enabled in the node pool. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualNICFormGroup() {
		return new FormGroup<VirtualNICFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on. */
	export interface HostMaintenancePolicy {

		/** Specifies the frequency of planned maintenance events. */
		maintenanceInterval?: HostMaintenancePolicyMaintenanceInterval | null;

		/** Strategy that will trigger maintenance on behalf of the customer. */
		opportunisticMaintenanceStrategy?: OpportunisticMaintenanceStrategy;
	}

	/** HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on. */
	export interface HostMaintenancePolicyFormProperties {

		/** Specifies the frequency of planned maintenance events. */
		maintenanceInterval: FormControl<HostMaintenancePolicyMaintenanceInterval | null | undefined>,
	}
	export function CreateHostMaintenancePolicyFormGroup() {
		return new FormGroup<HostMaintenancePolicyFormProperties>({
			maintenanceInterval: new FormControl<HostMaintenancePolicyMaintenanceInterval | null | undefined>(undefined),
		});

	}

	export enum HostMaintenancePolicyMaintenanceInterval { MAINTENANCE_INTERVAL_UNSPECIFIED = 'MAINTENANCE_INTERVAL_UNSPECIFIED', AS_NEEDED = 'AS_NEEDED', PERIODIC = 'PERIODIC' }


	/** Strategy that will trigger maintenance on behalf of the customer. */
	export interface OpportunisticMaintenanceStrategy {

		/** The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all `PERIODIC` maintenance is set 28 days in advance). */
		maintenanceAvailabilityWindow?: string | null;

		/** The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value. */
		minNodesPerPool?: string | null;

		/** The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance. */
		nodeIdleTimeWindow?: string | null;
	}

	/** Strategy that will trigger maintenance on behalf of the customer. */
	export interface OpportunisticMaintenanceStrategyFormProperties {

		/** The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all `PERIODIC` maintenance is set 28 days in advance). */
		maintenanceAvailabilityWindow: FormControl<string | null | undefined>,

		/** The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value. */
		minNodesPerPool: FormControl<string | null | undefined>,

		/** The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance. */
		nodeIdleTimeWindow: FormControl<string | null | undefined>,
	}
	export function CreateOpportunisticMaintenanceStrategyFormGroup() {
		return new FormGroup<OpportunisticMaintenanceStrategyFormProperties>({
			maintenanceAvailabilityWindow: new FormControl<string | null | undefined>(undefined),
			minNodesPerPool: new FormControl<string | null | undefined>(undefined),
			nodeIdleTimeWindow: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node kubelet configs. */
	export interface NodeKubeletConfig {

		/** Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified. */
		cpuCfsQuota?: boolean | null;

		/** Set the CPU CFS quota period value 'cpu.cfs_period_us'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration. */
		cpuCfsQuotaPeriod?: string | null;

		/** Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified. */
		cpuManagerPolicy?: string | null;

		/** Enable or disable Kubelet read only port. */
		insecureKubeletReadonlyPortEnabled?: boolean | null;

		/** Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304. */
		podPidsLimit?: string | null;
	}

	/** Node kubelet configs. */
	export interface NodeKubeletConfigFormProperties {

		/** Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified. */
		cpuCfsQuota: FormControl<boolean | null | undefined>,

		/** Set the CPU CFS quota period value 'cpu.cfs_period_us'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration. */
		cpuCfsQuotaPeriod: FormControl<string | null | undefined>,

		/** Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified. */
		cpuManagerPolicy: FormControl<string | null | undefined>,

		/** Enable or disable Kubelet read only port. */
		insecureKubeletReadonlyPortEnabled: FormControl<boolean | null | undefined>,

		/** Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304. */
		podPidsLimit: FormControl<string | null | undefined>,
	}
	export function CreateNodeKubeletConfigFormGroup() {
		return new FormGroup<NodeKubeletConfigFormProperties>({
			cpuCfsQuota: new FormControl<boolean | null | undefined>(undefined),
			cpuCfsQuotaPeriod: new FormControl<string | null | undefined>(undefined),
			cpuManagerPolicy: new FormControl<string | null | undefined>(undefined),
			insecureKubeletReadonlyPortEnabled: new FormControl<boolean | null | undefined>(undefined),
			podPidsLimit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters that can be configured on Linux nodes. */
	export interface LinuxNodeConfig {

		/** cgroup_mode specifies the cgroup mode to be used on the node. */
		cgroupMode?: LinuxNodeConfigCgroupMode | null;

		/** The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse */
		sysctls?: {[id: string]: string };
	}

	/** Parameters that can be configured on Linux nodes. */
	export interface LinuxNodeConfigFormProperties {

		/** cgroup_mode specifies the cgroup mode to be used on the node. */
		cgroupMode: FormControl<LinuxNodeConfigCgroupMode | null | undefined>,

		/** The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse */
		sysctls: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLinuxNodeConfigFormGroup() {
		return new FormGroup<LinuxNodeConfigFormProperties>({
			cgroupMode: new FormControl<LinuxNodeConfigCgroupMode | null | undefined>(undefined),
			sysctls: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum LinuxNodeConfigCgroupMode { CGROUP_MODE_UNSPECIFIED = 'CGROUP_MODE_UNSPECIFIED', CGROUP_MODE_V1 = 'CGROUP_MODE_V1', CGROUP_MODE_V2 = 'CGROUP_MODE_V2' }


	/** LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs */
	export interface LocalNvmeSsdBlockConfig {

		/** Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
		localSsdCount?: number | null;
	}

	/** LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs */
	export interface LocalNvmeSsdBlockConfigFormProperties {

		/** Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. */
		localSsdCount: FormControl<number | null | undefined>,
	}
	export function CreateLocalNvmeSsdBlockConfigFormGroup() {
		return new FormGroup<LocalNvmeSsdBlockConfigFormProperties>({
			localSsdCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** NodePoolLoggingConfig specifies logging configuration for nodepools. */
	export interface NodePoolLoggingConfig {

		/** LoggingVariantConfig specifies the behaviour of the logging component. */
		variantConfig?: LoggingVariantConfig;
	}

	/** NodePoolLoggingConfig specifies logging configuration for nodepools. */
	export interface NodePoolLoggingConfigFormProperties {
	}
	export function CreateNodePoolLoggingConfigFormGroup() {
		return new FormGroup<NodePoolLoggingConfigFormProperties>({
		});

	}


	/** LoggingVariantConfig specifies the behaviour of the logging component. */
	export interface LoggingVariantConfig {

		/** Logging variant deployed on nodes. */
		variant?: LoggingVariantConfigVariant | null;
	}

	/** LoggingVariantConfig specifies the behaviour of the logging component. */
	export interface LoggingVariantConfigFormProperties {

		/** Logging variant deployed on nodes. */
		variant: FormControl<LoggingVariantConfigVariant | null | undefined>,
	}
	export function CreateLoggingVariantConfigFormGroup() {
		return new FormGroup<LoggingVariantConfigFormProperties>({
			variant: new FormControl<LoggingVariantConfigVariant | null | undefined>(undefined),
		});

	}

	export enum LoggingVariantConfigVariant { VARIANT_UNSPECIFIED = 'VARIANT_UNSPECIFIED', DEFAULT = 'DEFAULT', MAX_THROUGHPUT = 'MAX_THROUGHPUT' }


	/** [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from. */
	export interface ReservationAffinity {

		/** Corresponds to the type of reservation consumption. */
		consumeReservationType?: ReservationAffinityConsumeReservationType | null;

		/** Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value. */
		key?: string | null;

		/** Corresponds to the label value(s) of reservation resource(s). */
		values?: Array<string>;
	}

	/** [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from. */
	export interface ReservationAffinityFormProperties {

		/** Corresponds to the type of reservation consumption. */
		consumeReservationType: FormControl<ReservationAffinityConsumeReservationType | null | undefined>,

		/** Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateReservationAffinityFormGroup() {
		return new FormGroup<ReservationAffinityFormProperties>({
			consumeReservationType: new FormControl<ReservationAffinityConsumeReservationType | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReservationAffinityConsumeReservationType { UNSPECIFIED = 'UNSPECIFIED', NO_RESERVATION = 'NO_RESERVATION', ANY_RESERVATION = 'ANY_RESERVATION', SPECIFIC_RESERVATION = 'SPECIFIC_RESERVATION' }


	/** A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. */
	export interface ResourceManagerTags {

		/** Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}` */
		tags?: {[id: string]: string };
	}

	/** A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. */
	export interface ResourceManagerTagsFormProperties {

		/** Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}` */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceManagerTagsFormGroup() {
		return new FormGroup<ResourceManagerTagsFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** SandboxConfig contains configurations of the sandbox to use for the node. */
	export interface SandboxConfig {

		/** Type of the sandbox to use for the node (e.g. 'gvisor') */
		sandboxType?: string | null;

		/** Type of the sandbox to use for the node. */
		type?: SandboxConfigType | null;
	}

	/** SandboxConfig contains configurations of the sandbox to use for the node. */
	export interface SandboxConfigFormProperties {

		/** Type of the sandbox to use for the node (e.g. 'gvisor') */
		sandboxType: FormControl<string | null | undefined>,

		/** Type of the sandbox to use for the node. */
		type: FormControl<SandboxConfigType | null | undefined>,
	}
	export function CreateSandboxConfigFormGroup() {
		return new FormGroup<SandboxConfigFormProperties>({
			sandboxType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SandboxConfigType | null | undefined>(undefined),
		});

	}

	export enum SandboxConfigType { UNSPECIFIED = 'UNSPECIFIED', GVISOR = 'GVISOR' }


	/** SoleTenantConfig contains the NodeAffinities to specify what shared sole tenant node groups should back the node pool. */
	export interface SoleTenantConfig {

		/** NodeAffinities used to match to a shared sole tenant node group. */
		nodeAffinities?: Array<NodeAffinity>;
	}

	/** SoleTenantConfig contains the NodeAffinities to specify what shared sole tenant node groups should back the node pool. */
	export interface SoleTenantConfigFormProperties {
	}
	export function CreateSoleTenantConfigFormGroup() {
		return new FormGroup<SoleTenantConfigFormProperties>({
		});

	}


	/** Specifies the NodeAffinity key, values, and affinity operator according to [shared sole tenant node group affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity). */
	export interface NodeAffinity {

		/** Key for NodeAffinity. */
		key?: string | null;

		/** Operator for NodeAffinity. */
		operator?: NodeAffinityOperator | null;

		/** Values for NodeAffinity. */
		values?: Array<string>;
	}

	/** Specifies the NodeAffinity key, values, and affinity operator according to [shared sole tenant node group affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity). */
	export interface NodeAffinityFormProperties {

		/** Key for NodeAffinity. */
		key: FormControl<string | null | undefined>,

		/** Operator for NodeAffinity. */
		operator: FormControl<NodeAffinityOperator | null | undefined>,
	}
	export function CreateNodeAffinityFormGroup() {
		return new FormGroup<NodeAffinityFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<NodeAffinityOperator | null | undefined>(undefined),
		});

	}

	export enum NodeAffinityOperator { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', IN = 'IN', NOT_IN = 'NOT_IN' }


	/** Kubernetes taint is composed of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values. */
	export interface NodeTaint {

		/** Effect for taint. */
		effect?: NodeTaintEffect | null;

		/** Key for taint. */
		key?: string | null;

		/** Value for taint. */
		value?: string | null;
	}

	/** Kubernetes taint is composed of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values. */
	export interface NodeTaintFormProperties {

		/** Effect for taint. */
		effect: FormControl<NodeTaintEffect | null | undefined>,

		/** Key for taint. */
		key: FormControl<string | null | undefined>,

		/** Value for taint. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNodeTaintFormGroup() {
		return new FormGroup<NodeTaintFormProperties>({
			effect: new FormControl<NodeTaintEffect | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeTaintEffect { EFFECT_UNSPECIFIED = 'EFFECT_UNSPECIFIED', NO_SCHEDULE = 'NO_SCHEDULE', PREFER_NO_SCHEDULE = 'PREFER_NO_SCHEDULE', NO_EXECUTE = 'NO_EXECUTE' }


	/** Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings */
	export interface WindowsNodeConfig {

		/** OSVersion specifies the Windows node config to be used on the node */
		osVersion?: WindowsNodeConfigOsVersion | null;
	}

	/** Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings */
	export interface WindowsNodeConfigFormProperties {

		/** OSVersion specifies the Windows node config to be used on the node */
		osVersion: FormControl<WindowsNodeConfigOsVersion | null | undefined>,
	}
	export function CreateWindowsNodeConfigFormGroup() {
		return new FormGroup<WindowsNodeConfigFormProperties>({
			osVersion: new FormControl<WindowsNodeConfigOsVersion | null | undefined>(undefined),
		});

	}

	export enum WindowsNodeConfigOsVersion { OS_VERSION_UNSPECIFIED = 'OS_VERSION_UNSPECIFIED', OS_VERSION_LTSC2019 = 'OS_VERSION_LTSC2019', OS_VERSION_LTSC2022 = 'OS_VERSION_LTSC2022' }


	/** WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool. */
	export interface WorkloadMetadataConfig {

		/** Mode is the configuration for how to expose metadata to workloads running on the node pool. */
		mode?: WorkloadMetadataConfigMode | null;

		/** NodeMetadata is the configuration for how to expose metadata to the workloads running on the node. */
		nodeMetadata?: WorkloadMetadataConfigNodeMetadata | null;
	}

	/** WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool. */
	export interface WorkloadMetadataConfigFormProperties {

		/** Mode is the configuration for how to expose metadata to workloads running on the node pool. */
		mode: FormControl<WorkloadMetadataConfigMode | null | undefined>,

		/** NodeMetadata is the configuration for how to expose metadata to the workloads running on the node. */
		nodeMetadata: FormControl<WorkloadMetadataConfigNodeMetadata | null | undefined>,
	}
	export function CreateWorkloadMetadataConfigFormGroup() {
		return new FormGroup<WorkloadMetadataConfigFormProperties>({
			mode: new FormControl<WorkloadMetadataConfigMode | null | undefined>(undefined),
			nodeMetadata: new FormControl<WorkloadMetadataConfigNodeMetadata | null | undefined>(undefined),
		});

	}

	export enum WorkloadMetadataConfigMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', GCE_METADATA = 'GCE_METADATA', GKE_METADATA = 'GKE_METADATA' }

	export enum WorkloadMetadataConfigNodeMetadata { UNSPECIFIED = 'UNSPECIFIED', SECURE = 'SECURE', EXPOSE = 'EXPOSE', GKE_METADATA_SERVER = 'GKE_METADATA_SERVER' }


	/** node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters */
	export interface NodePoolAutoConfig {

		/** Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)). */
		networkTags?: NetworkTags;

		/** A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. */
		resourceManagerTags?: ResourceManagerTags;
	}

	/** node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters */
	export interface NodePoolAutoConfigFormProperties {
	}
	export function CreateNodePoolAutoConfigFormGroup() {
		return new FormGroup<NodePoolAutoConfigFormProperties>({
		});

	}


	/** Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)). */
	export interface NetworkTags {

		/** List of network tags. */
		tags?: Array<string>;
	}

	/** Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)). */
	export interface NetworkTagsFormProperties {
	}
	export function CreateNetworkTagsFormGroup() {
		return new FormGroup<NetworkTagsFormProperties>({
		});

	}


	/** Subset of Nodepool message that has defaults. */
	export interface NodePoolDefaults {

		/** Subset of NodeConfig message that has defaults. */
		nodeConfigDefaults?: NodeConfigDefaults;
	}

	/** Subset of Nodepool message that has defaults. */
	export interface NodePoolDefaultsFormProperties {
	}
	export function CreateNodePoolDefaultsFormGroup() {
		return new FormGroup<NodePoolDefaultsFormProperties>({
		});

	}


	/** Subset of NodeConfig message that has defaults. */
	export interface NodeConfigDefaults {

		/** GcfsConfig contains configurations of Google Container File System. */
		gcfsConfig?: GcfsConfig;

		/** HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on. */
		hostMaintenancePolicy?: HostMaintenancePolicy;

		/** NodePoolLoggingConfig specifies logging configuration for nodepools. */
		loggingConfig?: NodePoolLoggingConfig;
	}

	/** Subset of NodeConfig message that has defaults. */
	export interface NodeConfigDefaultsFormProperties {
	}
	export function CreateNodeConfigDefaultsFormGroup() {
		return new FormGroup<NodeConfigDefaultsFormProperties>({
		});

	}


	/** NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. */
	export interface NodePool {

		/** NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. */
		autoscaling?: NodePoolAutoscaling;

		/** Best effort provisioning. */
		bestEffortProvisioning?: BestEffortProvisioning;

		/** Which conditions caused the current node pool state. */
		conditions?: Array<StatusCondition>;

		/** Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead. */
		config?: NodeConfig;

		/** This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. */
		initialNodeCount?: number | null;

		/** [Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources. */
		instanceGroupUrls?: Array<string>;

		/** The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed. */
		locations?: Array<string>;

		/** NodeManagement defines the set of node management services turned on for the node pool. */
		management?: NodeManagement;

		/** Constraints applied to pods. */
		maxPodsConstraint?: MaxPodsConstraint;

		/** The name of the node pool. */
		name?: string | null;

		/** Parameters for node pool-level network config. */
		networkConfig?: NodeNetworkConfig;

		/** PlacementPolicy defines the placement policy used by the node pool. */
		placementPolicy?: PlacementPolicy;

		/** [Output only] The pod CIDR block size per node in this node pool. */
		podIpv4CidrSize?: number | null;

		/** QueuedProvisioning defines the queued provisioning used by the node pool. */
		queuedProvisioning?: QueuedProvisioning;

		/** [Output only] Server-defined URL for the resource. */
		selfLink?: string | null;

		/** [Output only] The status of the nodes in this pool instance. */
		status?: NodePoolStatus | null;

		/** [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available. */
		statusMessage?: string | null;

		/** UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade. */
		updateInfo?: UpdateInfo;

		/** These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted. */
		upgradeSettings?: UpgradeSettings;

		/** The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version). */
		version?: string | null;
	}

	/** NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. */
	export interface NodePoolFormProperties {

		/** This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. */
		initialNodeCount: FormControl<number | null | undefined>,

		/** The name of the node pool. */
		name: FormControl<string | null | undefined>,

		/** [Output only] The pod CIDR block size per node in this node pool. */
		podIpv4CidrSize: FormControl<number | null | undefined>,

		/** [Output only] Server-defined URL for the resource. */
		selfLink: FormControl<string | null | undefined>,

		/** [Output only] The status of the nodes in this pool instance. */
		status: FormControl<NodePoolStatus | null | undefined>,

		/** [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available. */
		statusMessage: FormControl<string | null | undefined>,

		/** The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateNodePoolFormGroup() {
		return new FormGroup<NodePoolFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			initialNodeCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			podIpv4CidrSize: new FormControl<number | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NodePoolStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. */
	export interface NodePoolAutoscaling {

		/** Can this node pool be deleted automatically. */
		autoprovisioned?: boolean | null;

		/** Is autoscaling enabled for this node pool. */
		enabled?: boolean | null;

		/** Location policy used when scaling up a nodepool. */
		locationPolicy?: NodePoolAutoscalingLocationPolicy | null;

		/** Maximum number of nodes for one location in the NodePool. Must be >= min_node_count. There has to be enough quota to scale up the cluster. */
		maxNodeCount?: number | null;

		/** Minimum number of nodes for one location in the NodePool. Must be >= 1 and <= max_node_count. */
		minNodeCount?: number | null;

		/** Maximum number of nodes in the node pool. Must be greater than total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
		totalMaxNodeCount?: number | null;

		/** Minimum number of nodes in the node pool. Must be greater than 1 less than total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
		totalMinNodeCount?: number | null;
	}

	/** NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. */
	export interface NodePoolAutoscalingFormProperties {

		/** Can this node pool be deleted automatically. */
		autoprovisioned: FormControl<boolean | null | undefined>,

		/** Is autoscaling enabled for this node pool. */
		enabled: FormControl<boolean | null | undefined>,

		/** Location policy used when scaling up a nodepool. */
		locationPolicy: FormControl<NodePoolAutoscalingLocationPolicy | null | undefined>,

		/** Maximum number of nodes for one location in the NodePool. Must be >= min_node_count. There has to be enough quota to scale up the cluster. */
		maxNodeCount: FormControl<number | null | undefined>,

		/** Minimum number of nodes for one location in the NodePool. Must be >= 1 and <= max_node_count. */
		minNodeCount: FormControl<number | null | undefined>,

		/** Maximum number of nodes in the node pool. Must be greater than total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
		totalMaxNodeCount: FormControl<number | null | undefined>,

		/** Minimum number of nodes in the node pool. Must be greater than 1 less than total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields. */
		totalMinNodeCount: FormControl<number | null | undefined>,
	}
	export function CreateNodePoolAutoscalingFormGroup() {
		return new FormGroup<NodePoolAutoscalingFormProperties>({
			autoprovisioned: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			locationPolicy: new FormControl<NodePoolAutoscalingLocationPolicy | null | undefined>(undefined),
			maxNodeCount: new FormControl<number | null | undefined>(undefined),
			minNodeCount: new FormControl<number | null | undefined>(undefined),
			totalMaxNodeCount: new FormControl<number | null | undefined>(undefined),
			totalMinNodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NodePoolAutoscalingLocationPolicy { LOCATION_POLICY_UNSPECIFIED = 'LOCATION_POLICY_UNSPECIFIED', BALANCED = 'BALANCED', ANY = 'ANY' }


	/** Parameters for node pool-level network config. */
	export interface NodeNetworkConfig {

		/** We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface */
		additionalNodeNetworkConfigs?: Array<AdditionalNodeNetworkConfig>;

		/** We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node */
		additionalPodNetworkConfigs?: Array<AdditionalPodNetworkConfig>;

		/** Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified. If neither `create_pod_range` or `pod_range` are specified, the cluster-level default (`ip_allocation_policy.cluster_ipv4_cidr_block`) is used. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
		createPodRange?: boolean | null;

		/** Whether nodes have internal IP addresses only. If enable_private_nodes is not specified, then the value is derived from cluster.privateClusterConfig.enablePrivateNodes */
		enablePrivateNodes?: boolean | null;

		/** Configuration of all network bandwidth tiers */
		networkPerformanceConfig?: NetworkPerformanceConfig;

		/** [PRIVATE FIELD] Config for pod CIDR size overprovisioning. */
		podCidrOverprovisionConfig?: PodCIDROverprovisionConfig;

		/** The IP address range for pod IPs in this node pool. Only applicable if `create_pod_range` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) to pick a specific range to use. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
		podIpv4CidrBlock?: string | null;

		/** Output only. [Output only] The utilization of the IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
		podIpv4RangeUtilization?: number | null;

		/** The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
		podRange?: string | null;
	}

	/** Parameters for node pool-level network config. */
	export interface NodeNetworkConfigFormProperties {

		/** Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified. If neither `create_pod_range` or `pod_range` are specified, the cluster-level default (`ip_allocation_policy.cluster_ipv4_cidr_block`) is used. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
		createPodRange: FormControl<boolean | null | undefined>,

		/** Whether nodes have internal IP addresses only. If enable_private_nodes is not specified, then the value is derived from cluster.privateClusterConfig.enablePrivateNodes */
		enablePrivateNodes: FormControl<boolean | null | undefined>,

		/** The IP address range for pod IPs in this node pool. Only applicable if `create_pod_range` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) to pick a specific range to use. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
		podIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Output only. [Output only] The utilization of the IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode. */
		podIpv4RangeUtilization: FormControl<number | null | undefined>,

		/** The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created. */
		podRange: FormControl<string | null | undefined>,
	}
	export function CreateNodeNetworkConfigFormGroup() {
		return new FormGroup<NodeNetworkConfigFormProperties>({
			createPodRange: new FormControl<boolean | null | undefined>(undefined),
			enablePrivateNodes: new FormControl<boolean | null | undefined>(undefined),
			podIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			podIpv4RangeUtilization: new FormControl<number | null | undefined>(undefined),
			podRange: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of all network bandwidth tiers */
	export interface NetworkPerformanceConfig {

		/** Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses. */
		externalIpEgressBandwidthTier?: ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null;

		/** Specifies the total network bandwidth tier for the NodePool. */
		totalEgressBandwidthTier?: ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null;
	}

	/** Configuration of all network bandwidth tiers */
	export interface NetworkPerformanceConfigFormProperties {

		/** Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses. */
		externalIpEgressBandwidthTier: FormControl<ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null | undefined>,

		/** Specifies the total network bandwidth tier for the NodePool. */
		totalEgressBandwidthTier: FormControl<ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null | undefined>,
	}
	export function CreateNetworkPerformanceConfigFormGroup() {
		return new FormGroup<NetworkPerformanceConfigFormProperties>({
			externalIpEgressBandwidthTier: new FormControl<ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null | undefined>(undefined),
			totalEgressBandwidthTier: new FormControl<ClusterNetworkPerformanceConfigTotalEgressBandwidthTier | null | undefined>(undefined),
		});

	}


	/** PlacementPolicy defines the placement policy used by the node pool. */
	export interface PlacementPolicy {

		/** If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned. */
		policyName?: string | null;

		/** TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies */
		tpuTopology?: string | null;

		/** The type of placement. */
		type?: PlacementPolicyType | null;
	}

	/** PlacementPolicy defines the placement policy used by the node pool. */
	export interface PlacementPolicyFormProperties {

		/** If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned. */
		policyName: FormControl<string | null | undefined>,

		/** TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies */
		tpuTopology: FormControl<string | null | undefined>,

		/** The type of placement. */
		type: FormControl<PlacementPolicyType | null | undefined>,
	}
	export function CreatePlacementPolicyFormGroup() {
		return new FormGroup<PlacementPolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			tpuTopology: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlacementPolicyType | null | undefined>(undefined),
		});

	}

	export enum PlacementPolicyType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', COMPACT = 'COMPACT' }


	/** QueuedProvisioning defines the queued provisioning used by the node pool. */
	export interface QueuedProvisioning {

		/** Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API. */
		enabled?: boolean | null;
	}

	/** QueuedProvisioning defines the queued provisioning used by the node pool. */
	export interface QueuedProvisioningFormProperties {

		/** Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateQueuedProvisioningFormGroup() {
		return new FormGroup<QueuedProvisioningFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum NodePoolStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', PROVISIONING = 'PROVISIONING', RUNNING = 'RUNNING', RUNNING_WITH_ERROR = 'RUNNING_WITH_ERROR', RECONCILING = 'RECONCILING', STOPPING = 'STOPPING', ERROR = 'ERROR' }


	/** UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade. */
	export interface UpdateInfo {

		/** Information relevant to blue-green upgrade. */
		blueGreenInfo?: BlueGreenInfo;
	}

	/** UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade. */
	export interface UpdateInfoFormProperties {
	}
	export function CreateUpdateInfoFormGroup() {
		return new FormGroup<UpdateInfoFormProperties>({
		});

	}


	/** NotificationConfig is the configuration of notifications. */
	export interface NotificationConfig {

		/** Pub/Sub specific notification config. */
		pubsub?: PubSub;
	}

	/** NotificationConfig is the configuration of notifications. */
	export interface NotificationConfigFormProperties {
	}
	export function CreateNotificationConfigFormGroup() {
		return new FormGroup<NotificationConfigFormProperties>({
		});

	}


	/** Pub/Sub specific notification config. */
	export interface PubSub {

		/** Enable notifications for Pub/Sub. */
		enabled?: boolean | null;

		/** Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent */
		filter?: Filter;

		/** The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`. */
		topic?: string | null;
	}

	/** Pub/Sub specific notification config. */
	export interface PubSubFormProperties {

		/** Enable notifications for Pub/Sub. */
		enabled: FormControl<boolean | null | undefined>,

		/** The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubSubFormGroup() {
		return new FormGroup<PubSubFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent */
	export interface Filter {

		/** Event types to allowlist. */
		eventType?: Array<string>;
	}

	/** Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent */
	export interface FilterFormProperties {
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
		});

	}


	/** ParentProductConfig is the configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of a GKE cluster and take the ownership of the cluster. */
	export interface ParentProductConfig {

		/** Labels contain the configuration of the parent product. */
		labels?: {[id: string]: string };

		/** Name of the parent product associated with the cluster. */
		productName?: string | null;
	}

	/** ParentProductConfig is the configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of a GKE cluster and take the ownership of the cluster. */
	export interface ParentProductConfigFormProperties {

		/** Labels contain the configuration of the parent product. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Name of the parent product associated with the cluster. */
		productName: FormControl<string | null | undefined>,
	}
	export function CreateParentProductConfigFormGroup() {
		return new FormGroup<ParentProductConfigFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the PodSecurityPolicy feature. */
	export interface PodSecurityPolicyConfig {

		/** Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. */
		enabled?: boolean | null;
	}

	/** Configuration for the PodSecurityPolicy feature. */
	export interface PodSecurityPolicyConfigFormProperties {

		/** Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePodSecurityPolicyConfigFormGroup() {
		return new FormGroup<PodSecurityPolicyConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration options for private clusters. */
	export interface PrivateClusterConfig {

		/** Whether the master's internal IP address is used as the cluster endpoint. */
		enablePrivateEndpoint?: boolean | null;

		/** Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking. */
		enablePrivateNodes?: boolean | null;

		/** Configuration for controlling master global access settings. */
		masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;

		/** The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network. */
		masterIpv4CidrBlock?: string | null;

		/** Output only. The peering name in the customer VPC used by this cluster. */
		peeringName?: string | null;

		/** Output only. The internal IP address of this cluster's master endpoint. */
		privateEndpoint?: string | null;

		/** Subnet to provision the master's private endpoint during cluster creation. Specified in projects/regions/subnetworks/* format. */
		privateEndpointSubnetwork?: string | null;

		/** Output only. The external IP address of this cluster's master endpoint. */
		publicEndpoint?: string | null;
	}

	/** Configuration options for private clusters. */
	export interface PrivateClusterConfigFormProperties {

		/** Whether the master's internal IP address is used as the cluster endpoint. */
		enablePrivateEndpoint: FormControl<boolean | null | undefined>,

		/** Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking. */
		enablePrivateNodes: FormControl<boolean | null | undefined>,

		/** The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network. */
		masterIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Output only. The peering name in the customer VPC used by this cluster. */
		peeringName: FormControl<string | null | undefined>,

		/** Output only. The internal IP address of this cluster's master endpoint. */
		privateEndpoint: FormControl<string | null | undefined>,

		/** Subnet to provision the master's private endpoint during cluster creation. Specified in projects/regions/subnetworks/* format. */
		privateEndpointSubnetwork: FormControl<string | null | undefined>,

		/** Output only. The external IP address of this cluster's master endpoint. */
		publicEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePrivateClusterConfigFormGroup() {
		return new FormGroup<PrivateClusterConfigFormProperties>({
			enablePrivateEndpoint: new FormControl<boolean | null | undefined>(undefined),
			enablePrivateNodes: new FormControl<boolean | null | undefined>(undefined),
			masterIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			peeringName: new FormControl<string | null | undefined>(undefined),
			privateEndpoint: new FormControl<string | null | undefined>(undefined),
			privateEndpointSubnetwork: new FormControl<string | null | undefined>(undefined),
			publicEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for controlling master global access settings. */
	export interface PrivateClusterMasterGlobalAccessConfig {

		/** Whenever master is accessible globally or not. */
		enabled?: boolean | null;
	}

	/** Configuration for controlling master global access settings. */
	export interface PrivateClusterMasterGlobalAccessConfigFormProperties {

		/** Whenever master is accessible globally or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePrivateClusterMasterGlobalAccessConfigFormGroup() {
		return new FormGroup<PrivateClusterMasterGlobalAccessConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** ProtectConfig defines the flags needed to enable/disable features for the Protect API. */
	export interface ProtectConfig {

		/** WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster. */
		workloadConfig?: WorkloadConfig;

		/** Sets which mode to use for Protect workload vulnerability scanning feature. */
		workloadVulnerabilityMode?: ProtectConfigWorkloadVulnerabilityMode | null;
	}

	/** ProtectConfig defines the flags needed to enable/disable features for the Protect API. */
	export interface ProtectConfigFormProperties {

		/** Sets which mode to use for Protect workload vulnerability scanning feature. */
		workloadVulnerabilityMode: FormControl<ProtectConfigWorkloadVulnerabilityMode | null | undefined>,
	}
	export function CreateProtectConfigFormGroup() {
		return new FormGroup<ProtectConfigFormProperties>({
			workloadVulnerabilityMode: new FormControl<ProtectConfigWorkloadVulnerabilityMode | null | undefined>(undefined),
		});

	}


	/** WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster. */
	export interface WorkloadConfig {

		/** Sets which mode of auditing should be used for the cluster's workloads. */
		auditMode?: WorkloadConfigAuditMode | null;
	}

	/** WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster. */
	export interface WorkloadConfigFormProperties {

		/** Sets which mode of auditing should be used for the cluster's workloads. */
		auditMode: FormControl<WorkloadConfigAuditMode | null | undefined>,
	}
	export function CreateWorkloadConfigFormGroup() {
		return new FormGroup<WorkloadConfigFormProperties>({
			auditMode: new FormControl<WorkloadConfigAuditMode | null | undefined>(undefined),
		});

	}

	export enum WorkloadConfigAuditMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', DISABLED = 'DISABLED', BASIC = 'BASIC', BASELINE = 'BASELINE', RESTRICTED = 'RESTRICTED' }

	export enum ProtectConfigWorkloadVulnerabilityMode { WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED = 'WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED', DISABLED = 'DISABLED', BASIC = 'BASIC' }


	/** ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled. */
	export interface ReleaseChannel {

		/** channel specifies which release channel the cluster is subscribed to. */
		channel?: ReleaseChannelChannel | null;
	}

	/** ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled. */
	export interface ReleaseChannelFormProperties {

		/** channel specifies which release channel the cluster is subscribed to. */
		channel: FormControl<ReleaseChannelChannel | null | undefined>,
	}
	export function CreateReleaseChannelFormGroup() {
		return new FormGroup<ReleaseChannelFormProperties>({
			channel: new FormControl<ReleaseChannelChannel | null | undefined>(undefined),
		});

	}

	export enum ReleaseChannelChannel { UNSPECIFIED = 'UNSPECIFIED', RAPID = 'RAPID', REGULAR = 'REGULAR', STABLE = 'STABLE' }


	/** Configuration for exporting cluster resource usages. */
	export interface ResourceUsageExportConfig {

		/** Parameters for using BigQuery as the destination of resource usage export. */
		bigqueryDestination?: BigQueryDestination;

		/** Parameters for controlling consumption metering. */
		consumptionMeteringConfig?: ConsumptionMeteringConfig;

		/** Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. */
		enableNetworkEgressMetering?: boolean | null;
	}

	/** Configuration for exporting cluster resource usages. */
	export interface ResourceUsageExportConfigFormProperties {

		/** Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. */
		enableNetworkEgressMetering: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceUsageExportConfigFormGroup() {
		return new FormGroup<ResourceUsageExportConfigFormProperties>({
			enableNetworkEgressMetering: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Parameters for controlling consumption metering. */
	export interface ConsumptionMeteringConfig {

		/** Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records. */
		enabled?: boolean | null;
	}

	/** Parameters for controlling consumption metering. */
	export interface ConsumptionMeteringConfigFormProperties {

		/** Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateConsumptionMeteringConfigFormGroup() {
		return new FormGroup<ConsumptionMeteringConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API. */
	export interface SecurityPostureConfig {

		/** Sets which mode to use for Security Posture features. */
		mode?: SecurityPostureConfigMode | null;

		/** Sets which mode to use for vulnerability scanning. */
		vulnerabilityMode?: SecurityPostureConfigVulnerabilityMode | null;
	}

	/** SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API. */
	export interface SecurityPostureConfigFormProperties {

		/** Sets which mode to use for Security Posture features. */
		mode: FormControl<SecurityPostureConfigMode | null | undefined>,

		/** Sets which mode to use for vulnerability scanning. */
		vulnerabilityMode: FormControl<SecurityPostureConfigVulnerabilityMode | null | undefined>,
	}
	export function CreateSecurityPostureConfigFormGroup() {
		return new FormGroup<SecurityPostureConfigFormProperties>({
			mode: new FormControl<SecurityPostureConfigMode | null | undefined>(undefined),
			vulnerabilityMode: new FormControl<SecurityPostureConfigVulnerabilityMode | null | undefined>(undefined),
		});

	}

	export enum SecurityPostureConfigMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', DISABLED = 'DISABLED', BASIC = 'BASIC' }

	export enum SecurityPostureConfigVulnerabilityMode { VULNERABILITY_MODE_UNSPECIFIED = 'VULNERABILITY_MODE_UNSPECIFIED', VULNERABILITY_DISABLED = 'VULNERABILITY_DISABLED', VULNERABILITY_BASIC = 'VULNERABILITY_BASIC', VULNERABILITY_ENTERPRISE = 'VULNERABILITY_ENTERPRISE' }


	/** Configuration of Shielded Nodes feature. */
	export interface ShieldedNodes {

		/** Whether Shielded Nodes features are enabled on all nodes in this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration of Shielded Nodes feature. */
	export interface ShieldedNodesFormProperties {

		/** Whether Shielded Nodes features are enabled on all nodes in this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateShieldedNodesFormGroup() {
		return new FormGroup<ShieldedNodesFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ClusterStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', PROVISIONING = 'PROVISIONING', RUNNING = 'RUNNING', RECONCILING = 'RECONCILING', STOPPING = 'STOPPING', ERROR = 'ERROR', DEGRADED = 'DEGRADED' }


	/** Configuration for Cloud TPU. */
	export interface TpuConfig {

		/** Whether Cloud TPU integration is enabled or not. */
		enabled?: boolean | null;

		/** IPv4 CIDR block reserved for Cloud TPU in the VPC. */
		ipv4CidrBlock?: string | null;

		/** Whether to use service networking for Cloud TPU or not. */
		useServiceNetworking?: boolean | null;
	}

	/** Configuration for Cloud TPU. */
	export interface TpuConfigFormProperties {

		/** Whether Cloud TPU integration is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/** IPv4 CIDR block reserved for Cloud TPU in the VPC. */
		ipv4CidrBlock: FormControl<string | null | undefined>,

		/** Whether to use service networking for Cloud TPU or not. */
		useServiceNetworking: FormControl<boolean | null | undefined>,
	}
	export function CreateTpuConfigFormGroup() {
		return new FormGroup<TpuConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			ipv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			useServiceNetworking: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it. */
	export interface VerticalPodAutoscaling {

		/** Enables vertical pod autoscaling. */
		enabled?: boolean | null;
	}

	/** VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it. */
	export interface VerticalPodAutoscalingFormProperties {

		/** Enables vertical pod autoscaling. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVerticalPodAutoscalingFormGroup() {
		return new FormGroup<VerticalPodAutoscalingFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for direct-path (via ALTS) with workload identity. */
	export interface WorkloadALTSConfig {

		/** enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty). */
		enableAlts?: boolean | null;
	}

	/** Configuration for direct-path (via ALTS) with workload identity. */
	export interface WorkloadALTSConfigFormProperties {

		/** enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty). */
		enableAlts: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkloadALTSConfigFormGroup() {
		return new FormGroup<WorkloadALTSConfigFormProperties>({
			enableAlts: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
	export interface WorkloadCertificates {

		/** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
		enableCertificates?: boolean | null;
	}

	/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
	export interface WorkloadCertificatesFormProperties {

		/** enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). */
		enableCertificates: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkloadCertificatesFormGroup() {
		return new FormGroup<WorkloadCertificatesFormProperties>({
			enableCertificates: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. */
	export interface WorkloadIdentityConfig {

		/** IAM Identity Namespace to attach all Kubernetes Service Accounts to. */
		identityNamespace?: string | null;

		/** identity provider is the third party identity provider. */
		identityProvider?: string | null;

		/** The workload pool to attach all Kubernetes service accounts to. */
		workloadPool?: string | null;
	}

	/** Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. */
	export interface WorkloadIdentityConfigFormProperties {

		/** IAM Identity Namespace to attach all Kubernetes Service Accounts to. */
		identityNamespace: FormControl<string | null | undefined>,

		/** identity provider is the third party identity provider. */
		identityProvider: FormControl<string | null | undefined>,

		/** The workload pool to attach all Kubernetes service accounts to. */
		workloadPool: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadIdentityConfigFormGroup() {
		return new FormGroup<WorkloadIdentityConfigFormProperties>({
			identityNamespace: new FormControl<string | null | undefined>(undefined),
			identityProvider: new FormControl<string | null | undefined>(undefined),
			workloadPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided. */
	export interface ClusterUpdate {

		/** AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message. */
		additionalPodRangesConfig?: AdditionalPodRangesConfig;

		/** Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality. */
		desiredAddonsConfig?: AddonsConfig;

		/** Configuration for returning group information from authenticators. */
		desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig;

		/** WorkloadPolicyConfig is the configuration of workload policy for autopilot clusters. */
		desiredAutopilotWorkloadPolicyConfig?: WorkloadPolicyConfig;

		/** Configuration for Binary Authorization. */
		desiredBinaryAuthorization?: BinaryAuthorization;

		/** ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs. */
		desiredClusterAutoscaling?: ClusterAutoscaling;

		/** Telemetry integration for the cluster. */
		desiredClusterTelemetry?: ClusterTelemetry;

		/** Configuration for fine-grained cost management feature. */
		desiredCostManagementConfig?: CostManagementConfig;

		/** Configuration of etcd encryption. */
		desiredDatabaseEncryption?: DatabaseEncryption;

		/** The desired datapath provider for the cluster. */
		desiredDatapathProvider?: NetworkConfigDatapathProvider | null;

		/** DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster. */
		desiredDefaultSnatStatus?: DefaultSnatStatus;

		/** DNSConfig contains the desired set of options for configuring clusterDNS. */
		desiredDnsConfig?: DNSConfig;

		/** Enable/Disable FQDN Network Policy for the cluster. */
		desiredEnableFqdnNetworkPolicy?: boolean | null;

		/** Enable/Disable private endpoint for the cluster's master. */
		desiredEnablePrivateEndpoint?: boolean | null;

		/** Fleet is the fleet configuration for the cluster. */
		desiredFleet?: Fleet;

		/** GatewayAPIConfig contains the desired config of Gateway API on this cluster. */
		desiredGatewayApiConfig?: GatewayAPIConfig;

		/** GcfsConfig contains configurations of Google Container File System. */
		desiredGcfsConfig?: GcfsConfig;

		/** HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on. */
		desiredHostMaintenancePolicy?: HostMaintenancePolicy;

		/** IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API */
		desiredIdentityServiceConfig?: IdentityServiceConfig;

		/** The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well. */
		desiredImageType?: string | null;

		/** Specify the details of in-transit encryption. */
		desiredInTransitEncryptionConfig?: NetworkConfigInTransitEncryptionConfig | null;

		/** IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster. */
		desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig;

		/** Kubernetes open source beta apis enabled on the cluster. */
		desiredK8sBetaApis?: K8sBetaAPIConfig;

		/** ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster. */
		desiredL4ilbSubsettingConfig?: ILBSubsettingConfig;

		/** The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed. */
		desiredLocations?: Array<string>;

		/** LoggingConfig is cluster logging configuration. */
		desiredLoggingConfig?: LoggingConfig;

		/** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
		desiredLoggingService?: string | null;

		/** Master is the configuration for components on master. */
		desiredMaster?: Master;

		/** Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs. */
		desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

		/** The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
		desiredMasterVersion?: string | null;

		/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
		desiredMeshCertificates?: MeshCertificates;

		/** MonitoringConfig is cluster monitoring configuration. */
		desiredMonitoringConfig?: MonitoringConfig;

		/** The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
		desiredMonitoringService?: string | null;

		/** Configuration of all network bandwidth tiers */
		desiredNetworkPerformanceConfig?: ClusterNetworkPerformanceConfig;

		/** Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)). */
		desiredNodePoolAutoConfigNetworkTags?: NetworkTags;

		/** A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. */
		desiredNodePoolAutoConfigResourceManagerTags?: ResourceManagerTags;

		/** NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. */
		desiredNodePoolAutoscaling?: NodePoolAutoscaling;

		/** The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster. */
		desiredNodePoolId?: string | null;

		/** NodePoolLoggingConfig specifies logging configuration for nodepools. */
		desiredNodePoolLoggingConfig?: NodePoolLoggingConfig;

		/** The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
		desiredNodeVersion?: string | null;

		/** NotificationConfig is the configuration of notifications. */
		desiredNotificationConfig?: NotificationConfig;

		/** ParentProductConfig is the configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of a GKE cluster and take the ownership of the cluster. */
		desiredParentProductConfig?: ParentProductConfig;

		/** Configuration for the PodSecurityPolicy feature. */
		desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig;

		/** Configuration options for private clusters. */
		desiredPrivateClusterConfig?: PrivateClusterConfig;

		/** The desired state of IPv6 connectivity to Google Services. */
		desiredPrivateIpv6GoogleAccess?: NetworkConfigPrivateIpv6GoogleAccess | null;

		/** ProtectConfig defines the flags needed to enable/disable features for the Protect API. */
		desiredProtectConfig?: ProtectConfig;

		/** ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled. */
		desiredReleaseChannel?: ReleaseChannel;

		/** Configuration for exporting cluster resource usages. */
		desiredResourceUsageExportConfig?: ResourceUsageExportConfig;

		/** SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API. */
		desiredSecurityPostureConfig?: SecurityPostureConfig;

		/** Config to block services with externalIPs field. */
		desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig;

		/** Configuration of Shielded Nodes feature. */
		desiredShieldedNodes?: ShieldedNodes;

		/** The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type. */
		desiredStackType?: IPAllocationPolicyStackType | null;

		/** Configuration for Cloud TPU. */
		desiredTpuConfig?: TpuConfig;

		/** VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it. */
		desiredVerticalPodAutoscaling?: VerticalPodAutoscaling;

		/** Configuration for direct-path (via ALTS) with workload identity. */
		desiredWorkloadAltsConfig?: WorkloadALTSConfig;

		/** Configuration for issuance of mTLS keys and certificates to Kubernetes pods. */
		desiredWorkloadCertificates?: WorkloadCertificates;

		/** Configuration for the use of Kubernetes Service Accounts in GCP IAM policies. */
		desiredWorkloadIdentityConfig?: WorkloadIdentityConfig;

		/** Kubernetes open source beta apis enabled on the cluster. */
		enableK8sBetaApis?: K8sBetaAPIConfig;

		/** The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned. */
		etag?: string | null;

		/** AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message. */
		removedAdditionalPodRangesConfig?: AdditionalPodRangesConfig;
	}

	/** ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided. */
	export interface ClusterUpdateFormProperties {

		/** The desired datapath provider for the cluster. */
		desiredDatapathProvider: FormControl<NetworkConfigDatapathProvider | null | undefined>,

		/** Enable/Disable FQDN Network Policy for the cluster. */
		desiredEnableFqdnNetworkPolicy: FormControl<boolean | null | undefined>,

		/** Enable/Disable private endpoint for the cluster's master. */
		desiredEnablePrivateEndpoint: FormControl<boolean | null | undefined>,

		/** The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well. */
		desiredImageType: FormControl<string | null | undefined>,

		/** Specify the details of in-transit encryption. */
		desiredInTransitEncryptionConfig: FormControl<NetworkConfigInTransitEncryptionConfig | null | undefined>,

		/** The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
		desiredLoggingService: FormControl<string | null | undefined>,

		/** The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
		desiredMasterVersion: FormControl<string | null | undefined>,

		/** The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
		desiredMonitoringService: FormControl<string | null | undefined>,

		/** The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster. */
		desiredNodePoolId: FormControl<string | null | undefined>,

		/** The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
		desiredNodeVersion: FormControl<string | null | undefined>,

		/** The desired state of IPv6 connectivity to Google Services. */
		desiredPrivateIpv6GoogleAccess: FormControl<NetworkConfigPrivateIpv6GoogleAccess | null | undefined>,

		/** The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type. */
		desiredStackType: FormControl<IPAllocationPolicyStackType | null | undefined>,

		/** The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateClusterUpdateFormGroup() {
		return new FormGroup<ClusterUpdateFormProperties>({
			desiredDatapathProvider: new FormControl<NetworkConfigDatapathProvider | null | undefined>(undefined),
			desiredEnableFqdnNetworkPolicy: new FormControl<boolean | null | undefined>(undefined),
			desiredEnablePrivateEndpoint: new FormControl<boolean | null | undefined>(undefined),
			desiredImageType: new FormControl<string | null | undefined>(undefined),
			desiredInTransitEncryptionConfig: new FormControl<NetworkConfigInTransitEncryptionConfig | null | undefined>(undefined),
			desiredLoggingService: new FormControl<string | null | undefined>(undefined),
			desiredMasterVersion: new FormControl<string | null | undefined>(undefined),
			desiredMonitoringService: new FormControl<string | null | undefined>(undefined),
			desiredNodePoolId: new FormControl<string | null | undefined>(undefined),
			desiredNodeVersion: new FormControl<string | null | undefined>(undefined),
			desiredPrivateIpv6GoogleAccess: new FormControl<NetworkConfigPrivateIpv6GoogleAccess | null | undefined>(undefined),
			desiredStackType: new FormControl<IPAllocationPolicyStackType | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster. */
	export interface IntraNodeVisibilityConfig {

		/** Enables intra node visibility for this cluster. */
		enabled?: boolean | null;
	}

	/** IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster. */
	export interface IntraNodeVisibilityConfigFormProperties {

		/** Enables intra node visibility for this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIntraNodeVisibilityConfigFormGroup() {
		return new FormGroup<IntraNodeVisibilityConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster. */
	export interface ILBSubsettingConfig {

		/** Enables l4 ILB subsetting for this cluster */
		enabled?: boolean | null;
	}

	/** ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster. */
	export interface ILBSubsettingConfigFormProperties {

		/** Enables l4 ILB subsetting for this cluster */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateILBSubsettingConfigFormGroup() {
		return new FormGroup<ILBSubsettingConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** CompleteIPRotationRequest moves the cluster master back into single-IP mode. */
	export interface CompleteIPRotationRequest {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** CompleteIPRotationRequest moves the cluster master back into single-IP mode. */
	export interface CompleteIPRotationRequestFormProperties {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateCompleteIPRotationRequestFormGroup() {
		return new FormGroup<CompleteIPRotationRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CompleteNodePoolUpgradeRequest sets the name of target node pool to complete upgrade. */
	export interface CompleteNodePoolUpgradeRequest {
	}

	/** CompleteNodePoolUpgradeRequest sets the name of target node pool to complete upgrade. */
	export interface CompleteNodePoolUpgradeRequestFormProperties {
	}
	export function CreateCompleteNodePoolUpgradeRequestFormGroup() {
		return new FormGroup<CompleteNodePoolUpgradeRequestFormProperties>({
		});

	}


	/** CreateClusterRequest creates a cluster. */
	export interface CreateClusterRequest {

		/** A Google Kubernetes Engine cluster. */
		cluster?: Cluster;

		/** The parent (project and location) where the cluster will be created. Specified in the format `projects/locations/*`. */
		parent?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
		zone?: string | null;
	}

	/** CreateClusterRequest creates a cluster. */
	export interface CreateClusterRequestFormProperties {

		/** The parent (project and location) where the cluster will be created. Specified in the format `projects/locations/*`. */
		parent: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateNodePoolRequest creates a node pool for a cluster. */
	export interface CreateNodePoolRequest {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
		clusterId?: string | null;

		/** NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. */
		nodePool?: NodePool;

		/** The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/locations/clusters/*`. */
		parent?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
		zone?: string | null;
	}

	/** CreateNodePoolRequest creates a node pool for a cluster. */
	export interface CreateNodePoolRequestFormProperties {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field. */
		clusterId: FormControl<string | null | undefined>,

		/** The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/locations/clusters/*`. */
		parent: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodePoolRequestFormGroup() {
		return new FormGroup<CreateNodePoolRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517 */
	export interface GetJSONWebKeysResponse {

		/** RFC-2616: cache control support */
		cacheHeader?: HttpCacheControlResponseHeader;

		/** The public component of the keys used by the cluster to sign token requests. */
		keys?: Array<Jwk>;
	}

	/** GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517 */
	export interface GetJSONWebKeysResponseFormProperties {
	}
	export function CreateGetJSONWebKeysResponseFormGroup() {
		return new FormGroup<GetJSONWebKeysResponseFormProperties>({
		});

	}


	/** RFC-2616: cache control support */
	export interface HttpCacheControlResponseHeader {

		/** 14.6 response cache age, in seconds since the response is generated */
		age?: string | null;

		/** 14.9 request and response directives */
		directive?: string | null;

		/** 14.21 response cache expires, in RFC 1123 date format */
		expires?: string | null;
	}

	/** RFC-2616: cache control support */
	export interface HttpCacheControlResponseHeaderFormProperties {

		/** 14.6 response cache age, in seconds since the response is generated */
		age: FormControl<string | null | undefined>,

		/** 14.9 request and response directives */
		directive: FormControl<string | null | undefined>,

		/** 14.21 response cache expires, in RFC 1123 date format */
		expires: FormControl<string | null | undefined>,
	}
	export function CreateHttpCacheControlResponseHeaderFormGroup() {
		return new FormGroup<HttpCacheControlResponseHeaderFormProperties>({
			age: new FormControl<string | null | undefined>(undefined),
			directive: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Jwk is a JSON Web Key as specified in RFC 7517 */
	export interface Jwk {

		/** Algorithm. */
		alg?: string | null;

		/** Used for ECDSA keys. */
		crv?: string | null;

		/** Used for RSA keys. */
		e?: string | null;

		/** Key ID. */
		kid?: string | null;

		/** Key Type. */
		kty?: string | null;

		/** Used for RSA keys. */
		n?: string | null;

		/** Permitted uses for the public keys. */
		use?: string | null;

		/** Used for ECDSA keys. */
		x?: string | null;

		/** Used for ECDSA keys. */
		y?: string | null;
	}

	/** Jwk is a JSON Web Key as specified in RFC 7517 */
	export interface JwkFormProperties {

		/** Algorithm. */
		alg: FormControl<string | null | undefined>,

		/** Used for ECDSA keys. */
		crv: FormControl<string | null | undefined>,

		/** Used for RSA keys. */
		e: FormControl<string | null | undefined>,

		/** Key ID. */
		kid: FormControl<string | null | undefined>,

		/** Key Type. */
		kty: FormControl<string | null | undefined>,

		/** Used for RSA keys. */
		n: FormControl<string | null | undefined>,

		/** Permitted uses for the public keys. */
		use: FormControl<string | null | undefined>,

		/** Used for ECDSA keys. */
		x: FormControl<string | null | undefined>,

		/** Used for ECDSA keys. */
		y: FormControl<string | null | undefined>,
	}
	export function CreateJwkFormGroup() {
		return new FormGroup<JwkFormProperties>({
			alg: new FormControl<string | null | undefined>(undefined),
			crv: new FormControl<string | null | undefined>(undefined),
			e: new FormControl<string | null | undefined>(undefined),
			kid: new FormControl<string | null | undefined>(undefined),
			kty: new FormControl<string | null | undefined>(undefined),
			n: new FormControl<string | null | undefined>(undefined),
			use: new FormControl<string | null | undefined>(undefined),
			x: new FormControl<string | null | undefined>(undefined),
			y: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details. */
	export interface GetOpenIDConfigResponse {

		/** RFC-2616: cache control support */
		cacheHeader?: HttpCacheControlResponseHeader;

		/** Supported claims. */
		claims_supported?: Array<string>;

		/** Supported grant types. */
		grant_types?: Array<string>;

		/** supported ID Token signing Algorithms. */
		id_token_signing_alg_values_supported?: Array<string>;

		/** OIDC Issuer. */
		issuer?: string | null;

		/** JSON Web Key uri. */
		jwks_uri?: string | null;

		/** Supported response types. */
		response_types_supported?: Array<string>;

		/** Supported subject types. */
		subject_types_supported?: Array<string>;
	}

	/** GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details. */
	export interface GetOpenIDConfigResponseFormProperties {

		/** OIDC Issuer. */
		issuer: FormControl<string | null | undefined>,

		/** JSON Web Key uri. */
		jwks_uri: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIDConfigResponseFormGroup() {
		return new FormGroup<GetOpenIDConfigResponseFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
			jwks_uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListClustersResponse is the result of ListClustersRequest. */
	export interface ListClustersResponse {

		/** A list of clusters in the project in the specified zone, or across all ones. */
		clusters?: Array<Cluster>;

		/** If any zones are listed here, the list of clusters returned may be missing those zones. */
		missingZones?: Array<string>;
	}

	/** ListClustersResponse is the result of ListClustersRequest. */
	export interface ListClustersResponseFormProperties {
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
		});

	}


	/** ListLocationsResponse returns the list of all GKE locations and their recommendation state. */
	export interface ListLocationsResponse {

		/** A full list of GKE locations. */
		locations?: Array<Location>;

		/** Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse). */
		nextPageToken?: string | null;
	}

	/** ListLocationsResponse returns the list of all GKE locations and their recommendation state. */
	export interface ListLocationsResponseFormProperties {

		/** Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse). */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location returns the location name, and if the location is recommended for GKE cluster scheduling. */
	export interface Location {

		/** Contains the name of the resource requested. Specified in the format `projects/locations/*`. */
		name?: string | null;

		/** Whether the location is recommended for GKE cluster scheduling. */
		recommended?: boolean | null;

		/** Contains the type of location this Location is for. Regional or Zonal. */
		type?: LocationType | null;
	}

	/** Location returns the location name, and if the location is recommended for GKE cluster scheduling. */
	export interface LocationFormProperties {

		/** Contains the name of the resource requested. Specified in the format `projects/locations/*`. */
		name: FormControl<string | null | undefined>,

		/** Whether the location is recommended for GKE cluster scheduling. */
		recommended: FormControl<boolean | null | undefined>,

		/** Contains the type of location this Location is for. Regional or Zonal. */
		type: FormControl<LocationType | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			recommended: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<LocationType | null | undefined>(undefined),
		});

	}

	export enum LocationType { LOCATION_TYPE_UNSPECIFIED = 'LOCATION_TYPE_UNSPECIFIED', ZONE = 'ZONE', REGION = 'REGION' }


	/** ListNodePoolsResponse is the result of ListNodePoolsRequest. */
	export interface ListNodePoolsResponse {

		/** A list of node pools for a cluster. */
		nodePools?: Array<NodePool>;
	}

	/** ListNodePoolsResponse is the result of ListNodePoolsRequest. */
	export interface ListNodePoolsResponseFormProperties {
	}
	export function CreateListNodePoolsResponseFormGroup() {
		return new FormGroup<ListNodePoolsResponseFormProperties>({
		});

	}


	/** ListOperationsResponse is the result of ListOperationsRequest. */
	export interface ListOperationsResponse {

		/** If any zones are listed here, the list of operations returned may be missing the operations from those zones. */
		missingZones?: Array<string>;

		/** A list of operations in the project in the specified zone. */
		operations?: Array<Operation>;
	}

	/** ListOperationsResponse is the result of ListOperationsRequest. */
	export interface ListOperationsResponseFormProperties {
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
		});

	}


	/** This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only. */
	export interface Operation {

		/** Which conditions caused the current cluster state. Deprecated. Use field error instead. */
		clusterConditions?: Array<StatusCondition>;

		/** Detailed operation progress, if available. */
		detail?: string | null;

		/** [Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		endTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
		location?: string | null;

		/** The server-assigned ID for the operation. */
		name?: string | null;

		/** Which conditions caused the current node pool state. Deprecated. Use field error instead. */
		nodepoolConditions?: Array<StatusCondition>;

		/** The operation type. */
		operationType?: OperationOperationType | null;

		/** Information about operation (or operation stage) progress. */
		progress?: OperationProgress;

		/** Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`. */
		selfLink?: string | null;

		/** [Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		startTime?: string | null;

		/** The current status of the operation. */
		status?: OperationProgressStatus | null;

		/** Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead. */
		statusMessage?: string | null;

		/** Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node` */
		targetLink?: string | null;

		/** The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead. */
		zone?: string | null;
	}

	/** This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only. */
	export interface OperationFormProperties {

		/** Detailed operation progress, if available. */
		detail: FormControl<string | null | undefined>,

		/** [Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		endTime: FormControl<string | null | undefined>,

		/** [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. */
		location: FormControl<string | null | undefined>,

		/** The server-assigned ID for the operation. */
		name: FormControl<string | null | undefined>,

		/** The operation type. */
		operationType: FormControl<OperationOperationType | null | undefined>,

		/** Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`. */
		selfLink: FormControl<string | null | undefined>,

		/** [Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		startTime: FormControl<string | null | undefined>,

		/** The current status of the operation. */
		status: FormControl<OperationProgressStatus | null | undefined>,

		/** Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead. */
		statusMessage: FormControl<string | null | undefined>,

		/** Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node` */
		targetLink: FormControl<string | null | undefined>,

		/** The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<OperationOperationType | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationProgressStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			targetLink: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
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

	export enum OperationOperationType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', CREATE_CLUSTER = 'CREATE_CLUSTER', DELETE_CLUSTER = 'DELETE_CLUSTER', UPGRADE_MASTER = 'UPGRADE_MASTER', UPGRADE_NODES = 'UPGRADE_NODES', REPAIR_CLUSTER = 'REPAIR_CLUSTER', UPDATE_CLUSTER = 'UPDATE_CLUSTER', CREATE_NODE_POOL = 'CREATE_NODE_POOL', DELETE_NODE_POOL = 'DELETE_NODE_POOL', SET_NODE_POOL_MANAGEMENT = 'SET_NODE_POOL_MANAGEMENT', AUTO_REPAIR_NODES = 'AUTO_REPAIR_NODES', AUTO_UPGRADE_NODES = 'AUTO_UPGRADE_NODES', SET_LABELS = 'SET_LABELS', SET_MASTER_AUTH = 'SET_MASTER_AUTH', SET_NODE_POOL_SIZE = 'SET_NODE_POOL_SIZE', SET_NETWORK_POLICY = 'SET_NETWORK_POLICY', SET_MAINTENANCE_POLICY = 'SET_MAINTENANCE_POLICY', RESIZE_CLUSTER = 'RESIZE_CLUSTER', FLEET_FEATURE_UPGRADE = 'FLEET_FEATURE_UPGRADE' }


	/** Information about operation (or operation stage) progress. */
	export interface OperationProgress {

		/** Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}] */
		metrics?: Array<Metric>;

		/** A non-parameterized string describing an operation stage. Unset for single-stage operations. */
		name?: string | null;

		/** Substages of an operation or a stage. */
		stages?: Array<OperationProgress>;

		/** Status of an operation stage. Unset for single-stage operations. */
		status?: OperationProgressStatus | null;
	}

	/** Information about operation (or operation stage) progress. */
	export interface OperationProgressFormProperties {

		/** A non-parameterized string describing an operation stage. Unset for single-stage operations. */
		name: FormControl<string | null | undefined>,

		/** Status of an operation stage. Unset for single-stage operations. */
		status: FormControl<OperationProgressStatus | null | undefined>,
	}
	export function CreateOperationProgressFormGroup() {
		return new FormGroup<OperationProgressFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationProgressStatus | null | undefined>(undefined),
		});

	}


	/** Progress metric is (string, int|float|string) pair. */
	export interface Metric {

		/** For metrics with floating point value. */
		doubleValue?: number | null;

		/** For metrics with integer value. */
		intValue?: string | null;

		/** Required. Metric name, e.g., "nodes total", "percent done". */
		name?: string | null;

		/** For metrics with custom values (ratios, visual progress, etc.). */
		stringValue?: string | null;
	}

	/** Progress metric is (string, int|float|string) pair. */
	export interface MetricFormProperties {

		/** For metrics with floating point value. */
		doubleValue: FormControl<number | null | undefined>,

		/** For metrics with integer value. */
		intValue: FormControl<string | null | undefined>,

		/** Required. Metric name, e.g., "nodes total", "percent done". */
		name: FormControl<string | null | undefined>,

		/** For metrics with custom values (ratios, visual progress, etc.). */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationProgressStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', PENDING = 'PENDING', RUNNING = 'RUNNING', DONE = 'DONE', ABORTING = 'ABORTING' }


	/** ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest. */
	export interface ListUsableSubnetworksResponse {

		/** This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages. */
		nextPageToken?: string | null;

		/** A list of usable subnetworks in the specified network project. */
		subnetworks?: Array<UsableSubnetwork>;
	}

	/** ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest. */
	export interface ListUsableSubnetworksResponseFormProperties {

		/** This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsableSubnetworksResponseFormGroup() {
		return new FormGroup<ListUsableSubnetworksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range. */
	export interface UsableSubnetwork {

		/** The range of internal addresses that are owned by this subnetwork. */
		ipCidrRange?: string | null;

		/** Network Name. Example: projects/my-project/global/networks/my-network */
		network?: string | null;

		/** Secondary IP ranges. */
		secondaryIpRanges?: Array<UsableSubnetworkSecondaryRange>;

		/** A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message. */
		statusMessage?: string | null;

		/** Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
		subnetwork?: string | null;
	}

	/** UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range. */
	export interface UsableSubnetworkFormProperties {

		/** The range of internal addresses that are owned by this subnetwork. */
		ipCidrRange: FormControl<string | null | undefined>,

		/** Network Name. Example: projects/my-project/global/networks/my-network */
		network: FormControl<string | null | undefined>,

		/** A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message. */
		statusMessage: FormControl<string | null | undefined>,

		/** Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateUsableSubnetworkFormGroup() {
		return new FormGroup<UsableSubnetworkFormProperties>({
			ipCidrRange: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Secondary IP range of a usable subnetwork. */
	export interface UsableSubnetworkSecondaryRange {

		/** The range of IP addresses belonging to this subnetwork secondary range. */
		ipCidrRange?: string | null;

		/** The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. */
		rangeName?: string | null;

		/** This field is to determine the status of the secondary range programmably. */
		status?: UsableSubnetworkSecondaryRangeStatus | null;
	}

	/** Secondary IP range of a usable subnetwork. */
	export interface UsableSubnetworkSecondaryRangeFormProperties {

		/** The range of IP addresses belonging to this subnetwork secondary range. */
		ipCidrRange: FormControl<string | null | undefined>,

		/** The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. */
		rangeName: FormControl<string | null | undefined>,

		/** This field is to determine the status of the secondary range programmably. */
		status: FormControl<UsableSubnetworkSecondaryRangeStatus | null | undefined>,
	}
	export function CreateUsableSubnetworkSecondaryRangeFormGroup() {
		return new FormGroup<UsableSubnetworkSecondaryRangeFormProperties>({
			ipCidrRange: new FormControl<string | null | undefined>(undefined),
			rangeName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UsableSubnetworkSecondaryRangeStatus | null | undefined>(undefined),
		});

	}

	export enum UsableSubnetworkSecondaryRangeStatus { UNKNOWN = 'UNKNOWN', UNUSED = 'UNUSED', IN_USE_SERVICE = 'IN_USE_SERVICE', IN_USE_SHAREABLE_POD = 'IN_USE_SHAREABLE_POD', IN_USE_MANAGED_POD = 'IN_USE_MANAGED_POD' }


	/** Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels). */
	export interface NodeLabels {

		/** Map of node label keys and node label values. */
		labels?: {[id: string]: string };
	}

	/** Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels). */
	export interface NodeLabelsFormProperties {

		/** Map of node label keys and node label values. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateNodeLabelsFormGroup() {
		return new FormGroup<NodeLabelsFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration). */
	export interface NodeTaints {

		/** List of node taints. */
		taints?: Array<NodeTaint>;
	}

	/** Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration). */
	export interface NodeTaintsFormProperties {
	}
	export function CreateNodeTaintsFormGroup() {
		return new FormGroup<NodeTaintsFormProperties>({
		});

	}


	/** ReleaseChannelConfig exposes configuration for a release channel. */
	export interface ReleaseChannelConfig {

		/** Deprecated. This field has been deprecated and replaced with the valid_versions field. */
		availableVersions?: Array<AvailableVersion>;

		/** The release channel this configuration applies to. */
		channel?: ReleaseChannelChannel | null;

		/** The default version for newly created clusters on the channel. */
		defaultVersion?: string | null;

		/** List of valid versions for the channel. */
		validVersions?: Array<string>;
	}

	/** ReleaseChannelConfig exposes configuration for a release channel. */
	export interface ReleaseChannelConfigFormProperties {

		/** The release channel this configuration applies to. */
		channel: FormControl<ReleaseChannelChannel | null | undefined>,

		/** The default version for newly created clusters on the channel. */
		defaultVersion: FormControl<string | null | undefined>,
	}
	export function CreateReleaseChannelConfigFormGroup() {
		return new FormGroup<ReleaseChannelConfigFormProperties>({
			channel: new FormControl<ReleaseChannelChannel | null | undefined>(undefined),
			defaultVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels). */
	export interface ResourceLabels {

		/** Map of node label keys and node label values. */
		labels?: {[id: string]: string };
	}

	/** Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels). */
	export interface ResourceLabelsFormProperties {

		/** Map of node label keys and node label values. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceLabelsFormGroup() {
		return new FormGroup<ResourceLabelsFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed. */
	export interface RollbackNodePoolUpgradeRequest {

		/** Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name?: string | null;

		/** Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. */
		nodePoolId?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Option for rollback to ignore the PodDisruptionBudget. Default value is false. */
		respectPdb?: boolean | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed. */
	export interface RollbackNodePoolUpgradeRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. */
		nodePoolId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Option for rollback to ignore the PodDisruptionBudget. Default value is false. */
		respectPdb: FormControl<boolean | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateRollbackNodePoolUpgradeRequestFormGroup() {
		return new FormGroup<RollbackNodePoolUpgradeRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodePoolId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			respectPdb: new FormControl<boolean | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SecurityBulletinEvent is a notification sent to customers when a security bulletin has been posted that they are vulnerable to. */
	export interface SecurityBulletinEvent {

		/** The GKE minor versions affected by this vulnerability. */
		affectedSupportedMinors?: Array<string>;

		/** A brief description of the bulletin. See the bulletin pointed to by the bulletin_uri field for an expanded description. */
		briefDescription?: string | null;

		/** The ID of the bulletin corresponding to the vulnerability. */
		bulletinId?: string | null;

		/** The URI link to the bulletin on the website for more information. */
		bulletinUri?: string | null;

		/** The CVEs associated with this bulletin. */
		cveIds?: Array<string>;

		/** If this field is specified, it means there are manual steps that the user must take to make their clusters safe. */
		manualStepsRequired?: boolean | null;

		/** The GKE versions where this vulnerability is patched. */
		patchedVersions?: Array<string>;

		/** The resource type (node/control plane) that has the vulnerability. Multiple notifications (1 notification per resource type) will be sent for a vulnerability that affects > 1 resource type. */
		resourceTypeAffected?: string | null;

		/** The severity of this bulletin as it relates to GKE. */
		severity?: string | null;

		/** This represents a version selected from the patched_versions field that the cluster receiving this notification should most likely want to upgrade to based on its current version. Note that if this notification is being received by a given cluster, it means that this version is currently available as an upgrade target in that cluster's location. */
		suggestedUpgradeTarget?: string | null;
	}

	/** SecurityBulletinEvent is a notification sent to customers when a security bulletin has been posted that they are vulnerable to. */
	export interface SecurityBulletinEventFormProperties {

		/** A brief description of the bulletin. See the bulletin pointed to by the bulletin_uri field for an expanded description. */
		briefDescription: FormControl<string | null | undefined>,

		/** The ID of the bulletin corresponding to the vulnerability. */
		bulletinId: FormControl<string | null | undefined>,

		/** The URI link to the bulletin on the website for more information. */
		bulletinUri: FormControl<string | null | undefined>,

		/** If this field is specified, it means there are manual steps that the user must take to make their clusters safe. */
		manualStepsRequired: FormControl<boolean | null | undefined>,

		/** The resource type (node/control plane) that has the vulnerability. Multiple notifications (1 notification per resource type) will be sent for a vulnerability that affects > 1 resource type. */
		resourceTypeAffected: FormControl<string | null | undefined>,

		/** The severity of this bulletin as it relates to GKE. */
		severity: FormControl<string | null | undefined>,

		/** This represents a version selected from the patched_versions field that the cluster receiving this notification should most likely want to upgrade to based on its current version. Note that if this notification is being received by a given cluster, it means that this version is currently available as an upgrade target in that cluster's location. */
		suggestedUpgradeTarget: FormControl<string | null | undefined>,
	}
	export function CreateSecurityBulletinEventFormGroup() {
		return new FormGroup<SecurityBulletinEventFormProperties>({
			briefDescription: new FormControl<string | null | undefined>(undefined),
			bulletinId: new FormControl<string | null | undefined>(undefined),
			bulletinUri: new FormControl<string | null | undefined>(undefined),
			manualStepsRequired: new FormControl<boolean | null | undefined>(undefined),
			resourceTypeAffected: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			suggestedUpgradeTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Kubernetes Engine service configuration. */
	export interface ServerConfig {

		/** List of release channel configurations. */
		channels?: Array<ReleaseChannelConfig>;

		/** Version of Kubernetes the service deploys by default. */
		defaultClusterVersion?: string | null;

		/** Default image type. */
		defaultImageType?: string | null;

		/** List of valid image types. */
		validImageTypes?: Array<string>;

		/** List of valid master versions, in descending order. */
		validMasterVersions?: Array<string>;

		/** List of valid node upgrade target versions, in descending order. */
		validNodeVersions?: Array<string>;

		/** Maps of Kubernetes version and supported Windows server versions. */
		windowsVersionMaps?: {[id: string]: WindowsVersions };
	}

	/** Kubernetes Engine service configuration. */
	export interface ServerConfigFormProperties {

		/** Version of Kubernetes the service deploys by default. */
		defaultClusterVersion: FormControl<string | null | undefined>,

		/** Default image type. */
		defaultImageType: FormControl<string | null | undefined>,

		/** Maps of Kubernetes version and supported Windows server versions. */
		windowsVersionMaps: FormControl<{[id: string]: WindowsVersions } | null | undefined>,
	}
	export function CreateServerConfigFormGroup() {
		return new FormGroup<ServerConfigFormProperties>({
			defaultClusterVersion: new FormControl<string | null | undefined>(undefined),
			defaultImageType: new FormControl<string | null | undefined>(undefined),
			windowsVersionMaps: new FormControl<{[id: string]: WindowsVersions } | null | undefined>(undefined),
		});

	}


	/** Windows server versions. */
	export interface WindowsVersions {

		/** List of Windows server versions. */
		windowsVersions?: Array<WindowsVersion>;
	}

	/** Windows server versions. */
	export interface WindowsVersionsFormProperties {
	}
	export function CreateWindowsVersionsFormGroup() {
		return new FormGroup<WindowsVersionsFormProperties>({
		});

	}


	/** Windows server version. */
	export interface WindowsVersion {

		/** Windows server image type */
		imageType?: string | null;

		/** Windows server build number */
		osVersion?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		supportEndDate?: Date;
	}

	/** Windows server version. */
	export interface WindowsVersionFormProperties {

		/** Windows server image type */
		imageType: FormControl<string | null | undefined>,

		/** Windows server build number */
		osVersion: FormControl<string | null | undefined>,
	}
	export function CreateWindowsVersionFormGroup() {
		return new FormGroup<WindowsVersionFormProperties>({
			imageType: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetAddonsRequest sets the addons associated with the cluster. */
	export interface SetAddonsConfigRequest {

		/** Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality. */
		addonsConfig?: AddonsConfig;

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetAddonsRequest sets the addons associated with the cluster. */
	export interface SetAddonsConfigRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetAddonsConfigRequestFormGroup() {
		return new FormGroup<SetAddonsConfigRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster */
	export interface SetLabelsRequest {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint. */
		labelFingerprint?: string | null;

		/** The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. The labels to set for that cluster. */
		resourceLabels?: {[id: string]: string };

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster */
	export interface SetLabelsRequestFormProperties {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint. */
		labelFingerprint: FormControl<string | null | undefined>,

		/** The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. The labels to set for that cluster. */
		resourceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetLabelsRequestFormGroup() {
		return new FormGroup<SetLabelsRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			labelFingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			resourceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster. */
	export interface SetLegacyAbacRequest {

		/** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** Required. Whether ABAC authorization will be enabled in the cluster. */
		enabled?: boolean | null;

		/** The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster. */
	export interface SetLegacyAbacRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** Required. Whether ABAC authorization will be enabled in the cluster. */
		enabled: FormControl<boolean | null | undefined>,

		/** The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetLegacyAbacRequestFormGroup() {
		return new FormGroup<SetLegacyAbacRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetLocationsRequest sets the locations of the cluster. */
	export interface SetLocationsRequest {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone. */
		locations?: Array<string>;

		/** The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetLocationsRequest sets the locations of the cluster. */
	export interface SetLocationsRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetLocationsRequestFormGroup() {
		return new FormGroup<SetLocationsRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetLoggingServiceRequest sets the logging service of a cluster. */
	export interface SetLoggingServiceRequest {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
		loggingService?: string | null;

		/** The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetLoggingServiceRequest sets the logging service of a cluster. */
	export interface SetLoggingServiceRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions. */
		loggingService: FormControl<string | null | undefined>,

		/** The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetLoggingServiceRequestFormGroup() {
		return new FormGroup<SetLoggingServiceRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			loggingService: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetMaintenancePolicyRequest sets the maintenance policy for a cluster. */
	export interface SetMaintenancePolicyRequest {

		/** Required. The name of the cluster to update. */
		clusterId?: string | null;

		/** MaintenancePolicy defines the maintenance policy to be used for the cluster. */
		maintenancePolicy?: MaintenancePolicy;

		/** The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). */
		projectId?: string | null;

		/** Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. */
		zone?: string | null;
	}

	/** SetMaintenancePolicyRequest sets the maintenance policy for a cluster. */
	export interface SetMaintenancePolicyRequestFormProperties {

		/** Required. The name of the cluster to update. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). */
		projectId: FormControl<string | null | undefined>,

		/** Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetMaintenancePolicyRequestFormGroup() {
		return new FormGroup<SetMaintenancePolicyRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetMasterAuthRequest updates the admin password of a cluster. */
	export interface SetMasterAuthRequest {

		/** Required. The exact form of action to be taken on the master auth. */
		action?: SetMasterAuthRequestAction | null;

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates. */
		update?: MasterAuth;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetMasterAuthRequest updates the admin password of a cluster. */
	export interface SetMasterAuthRequestFormProperties {

		/** Required. The exact form of action to be taken on the master auth. */
		action: FormControl<SetMasterAuthRequestAction | null | undefined>,

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetMasterAuthRequestFormGroup() {
		return new FormGroup<SetMasterAuthRequestFormProperties>({
			action: new FormControl<SetMasterAuthRequestAction | null | undefined>(undefined),
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SetMasterAuthRequestAction { UNKNOWN = 'UNKNOWN', SET_PASSWORD = 'SET_PASSWORD', GENERATE_PASSWORD = 'GENERATE_PASSWORD', SET_USERNAME = 'SET_USERNAME' }


	/** SetMonitoringServiceRequest sets the monitoring service of a cluster. */
	export interface SetMonitoringServiceRequest {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
		monitoringService?: string | null;

		/** The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetMonitoringServiceRequest sets the monitoring service of a cluster. */
	export interface SetMonitoringServiceRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions. */
		monitoringService: FormControl<string | null | undefined>,

		/** The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetMonitoringServiceRequestFormGroup() {
		return new FormGroup<SetMonitoringServiceRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			monitoringService: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetNetworkPolicyRequest enables/disables network policy for a cluster. */
	export interface SetNetworkPolicyRequest {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/ */
		networkPolicy?: NetworkPolicy;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetNetworkPolicyRequest enables/disables network policy for a cluster. */
	export interface SetNetworkPolicyRequestFormProperties {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetNetworkPolicyRequestFormGroup() {
		return new FormGroup<SetNetworkPolicyRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool. */
	export interface SetNodePoolAutoscalingRequest {

		/** NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. */
		autoscaling?: NodePoolAutoscaling;

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name?: string | null;

		/** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
		nodePoolId?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool. */
	export interface SetNodePoolAutoscalingRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
		nodePoolId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetNodePoolAutoscalingRequestFormGroup() {
		return new FormGroup<SetNodePoolAutoscalingRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodePoolId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetNodePoolManagementRequest sets the node management properties of a node pool. */
	export interface SetNodePoolManagementRequest {

		/** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** NodeManagement defines the set of node management services turned on for the node pool. */
		management?: NodeManagement;

		/** The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name?: string | null;

		/** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
		nodePoolId?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetNodePoolManagementRequest sets the node management properties of a node pool. */
	export interface SetNodePoolManagementRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
		nodePoolId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetNodePoolManagementRequestFormGroup() {
		return new FormGroup<SetNodePoolManagementRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodePoolId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetNodePoolSizeRequest sets the size of a node pool. */
	export interface SetNodePoolSizeRequest {

		/** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name?: string | null;

		/** Required. The desired node count for the pool. */
		nodeCount?: number | null;

		/** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
		nodePoolId?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetNodePoolSizeRequest sets the size of a node pool. */
	export interface SetNodePoolSizeRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. The desired node count for the pool. */
		nodeCount: FormControl<number | null | undefined>,

		/** Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field. */
		nodePoolId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSetNodePoolSizeRequestFormGroup() {
		return new FormGroup<SetNodePoolSizeRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			nodePoolId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP. */
	export interface StartIPRotationRequest {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Whether to rotate credentials during IP rotation. */
		rotateCredentials?: boolean | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP. */
	export interface StartIPRotationRequestFormProperties {

		/** Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Whether to rotate credentials during IP rotation. */
		rotateCredentials: FormControl<boolean | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateStartIPRotationRequestFormGroup() {
		return new FormGroup<StartIPRotationRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			rotateCredentials: new FormControl<boolean | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateClusterRequest updates the settings of a cluster. */
	export interface UpdateClusterRequest {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided. */
		update?: ClusterUpdate;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** UpdateClusterRequest updates the settings of a cluster. */
	export interface UpdateClusterRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterRequestFormGroup() {
		return new FormGroup<UpdateClusterRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateMasterRequest updates the master of the cluster. */
	export interface UpdateMasterRequest {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
		masterVersion?: string | null;

		/** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/locations/clusters/*`. */
		name?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** UpdateMasterRequest updates the master of the cluster. */
	export interface UpdateMasterRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version */
		masterVersion: FormControl<string | null | undefined>,

		/** The name (project, location, cluster) of the cluster to update. Specified in the format `projects/locations/clusters/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMasterRequestFormGroup() {
		return new FormGroup<UpdateMasterRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			masterVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SetNodePoolVersionRequest updates the version of a node pool. */
	export interface UpdateNodePoolRequest {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId?: string | null;

		/** ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs. */
		confidentialNodes?: ConfidentialNodes;

		/** Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size. */
		diskSizeGb?: string | null;

		/** Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type. */
		diskType?: string | null;

		/** The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned. */
		etag?: string | null;

		/** Configuration of Fast Socket feature. */
		fastSocket?: FastSocket;

		/** GcfsConfig contains configurations of Google Container File System. */
		gcfsConfig?: GcfsConfig;

		/** Configuration of gVNIC feature. */
		gvnic?: VirtualNIC;

		/** Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
		imageType?: string | null;

		/** Node kubelet configs. */
		kubeletConfig?: NodeKubeletConfig;

		/** Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels). */
		labels?: NodeLabels;

		/** Parameters that can be configured on Linux nodes. */
		linuxNodeConfig?: LinuxNodeConfig;

		/** The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed. */
		locations?: Array<string>;

		/** NodePoolLoggingConfig specifies logging configuration for nodepools. */
		loggingConfig?: NodePoolLoggingConfig;

		/** Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type. */
		machineType?: string | null;

		/** The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name?: string | null;

		/** Parameters for node pool-level network config. */
		nodeNetworkConfig?: NodeNetworkConfig;

		/** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
		nodePoolId?: string | null;

		/** Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
		nodeVersion?: string | null;

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId?: string | null;

		/** Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels). */
		resourceLabels?: ResourceLabels;

		/** A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values. */
		resourceManagerTags?: ResourceManagerTags;

		/** Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)). */
		tags?: NetworkTags;

		/** Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration). */
		taints?: NodeTaints;

		/** These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted. */
		upgradeSettings?: UpgradeSettings;

		/** Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings */
		windowsNodeConfig?: WindowsNodeConfig;

		/** WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool. */
		workloadMetadataConfig?: WorkloadMetadataConfig;

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone?: string | null;
	}

	/** SetNodePoolVersionRequest updates the version of a node pool. */
	export interface UpdateNodePoolRequestFormProperties {

		/** Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field. */
		clusterId: FormControl<string | null | undefined>,

		/** Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type. */
		diskType: FormControl<string | null | undefined>,

		/** The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned. */
		etag: FormControl<string | null | undefined>,

		/** Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types. */
		imageType: FormControl<string | null | undefined>,

		/** Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type. */
		machineType: FormControl<string | null | undefined>,

		/** The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/locations/clusters/nodePools/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field. */
		nodePoolId: FormControl<string | null | undefined>,

		/** Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version */
		nodeVersion: FormControl<string | null | undefined>,

		/** Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. */
		projectId: FormControl<string | null | undefined>,

		/** Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodePoolRequestFormGroup() {
		return new FormGroup<UpdateNodePoolRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodePoolId: new FormControl<string | null | undefined>(undefined),
			nodeVersion: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpgradeAvailableEvent is a notification sent to customers when a new available version is released. */
	export interface UpgradeAvailableEvent {

		/** ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled. */
		releaseChannel?: ReleaseChannel;

		/** Optional relative path to the resource. For example, the relative path of the node pool. */
		resource?: string | null;

		/** The resource type of the release version. */
		resourceType?: UpgradeAvailableEventResourceType | null;

		/** The release version available for upgrade. */
		version?: string | null;

		/** Windows server versions. */
		windowsVersions?: WindowsVersions;
	}

	/** UpgradeAvailableEvent is a notification sent to customers when a new available version is released. */
	export interface UpgradeAvailableEventFormProperties {

		/** Optional relative path to the resource. For example, the relative path of the node pool. */
		resource: FormControl<string | null | undefined>,

		/** The resource type of the release version. */
		resourceType: FormControl<UpgradeAvailableEventResourceType | null | undefined>,

		/** The release version available for upgrade. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeAvailableEventFormGroup() {
		return new FormGroup<UpgradeAvailableEventFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<UpgradeAvailableEventResourceType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpgradeAvailableEventResourceType { UPGRADE_RESOURCE_TYPE_UNSPECIFIED = 'UPGRADE_RESOURCE_TYPE_UNSPECIFIED', MASTER = 'MASTER', NODE_POOL = 'NODE_POOL' }


	/** UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading. */
	export interface UpgradeEvent {

		/** The current version before the upgrade. */
		currentVersion?: string | null;

		/** The operation associated with this upgrade. */
		operation?: string | null;

		/** The time when the operation was started. */
		operationStartTime?: string | null;

		/** Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool. */
		resource?: string | null;

		/** The resource type that is upgrading. */
		resourceType?: UpgradeAvailableEventResourceType | null;

		/** The target version for the upgrade. */
		targetVersion?: string | null;
	}

	/** UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading. */
	export interface UpgradeEventFormProperties {

		/** The current version before the upgrade. */
		currentVersion: FormControl<string | null | undefined>,

		/** The operation associated with this upgrade. */
		operation: FormControl<string | null | undefined>,

		/** The time when the operation was started. */
		operationStartTime: FormControl<string | null | undefined>,

		/** Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool. */
		resource: FormControl<string | null | undefined>,

		/** The resource type that is upgrading. */
		resourceType: FormControl<UpgradeAvailableEventResourceType | null | undefined>,

		/** The target version for the upgrade. */
		targetVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeEventFormGroup() {
		return new FormGroup<UpgradeEventFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			operationStartTime: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<UpgradeAvailableEventResourceType | null | undefined>(undefined),
			targetVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all clusters owned by a project in either the specified zone or all zones.
		 * Get v1beta1/projects/{projectId}/zones/{zone}/clusters
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
		 * @param {string} parent The parent (project and location) where the clusters will be listed. Specified in the format `projects/locations/*`. Location "-" matches all zones and all regions.
		 * @return {ListClustersResponse} Successful response
		 */
		Container_projects_zones_clusters_list(projectId: string, zone: string, parent: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_create(projectId: string, zone: string, requestBody: CreateClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
		 * Delete v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_delete(projectId: string, zone: string, clusterId: string, name: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the details for a specific cluster.
		 * Get v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/locations/clusters/*`.
		 * @return {Cluster} Successful response
		 */
		Container_projects_zones_clusters_get(projectId: string, zone: string, clusterId: string, name: string | null | undefined): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the settings for a specific cluster.
		 * Put v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_update(projectId: string, zone: string, clusterId: string, requestBody: UpdateClusterRequest): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the addons for a specific cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_addons(projectId: string, zone: string, clusterId: string, requestBody: SetAddonsConfigRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/addons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or disables the ABAC authorization mechanism on a cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_legacyAbac(projectId: string, zone: string, clusterId: string, requestBody: SetLegacyAbacRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/legacyAbac', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_locations(projectId: string, zone: string, clusterId: string, requestBody: SetLocationsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/locations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the logging service for a specific cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_logging(projectId: string, zone: string, clusterId: string, requestBody: SetLoggingServiceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the master for a specific cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_master(projectId: string, zone: string, clusterId: string, requestBody: UpdateMasterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the monitoring service for a specific cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_monitoring(projectId: string, zone: string, clusterId: string, requestBody: SetMonitoringServiceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/monitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the node pools for a cluster.
		 * Get v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
		 * @param {string} parent The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/locations/clusters/*`.
		 * @return {ListNodePoolsResponse} Successful response
		 */
		Container_projects_zones_clusters_nodePools_list(projectId: string, zone: string, clusterId: string, parent: string | null | undefined): Observable<ListNodePoolsResponse> {
			return this.http.get<ListNodePoolsResponse>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates a node pool for a cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_nodePools_create(projectId: string, zone: string, clusterId: string, requestBody: CreateNodePoolRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a node pool from a cluster.
		 * Delete v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_nodePools_delete(projectId: string, zone: string, clusterId: string, nodePoolId: string, name: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves the requested node pool.
		 * Get v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {NodePool} Successful response
		 */
		Container_projects_zones_clusters_nodePools_get(projectId: string, zone: string, clusterId: string, nodePoolId: string, name: string | null | undefined): Observable<NodePool> {
			return this.http.get<NodePool>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Sets the autoscaling settings of a specific node pool.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_nodePools_autoscaling(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: SetNodePoolAutoscalingRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/autoscaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the NodeManagement options for a node pool.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_nodePools_setManagement(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: SetNodePoolManagementRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/setManagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_nodePools_setSize(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: SetNodePoolSizeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/setSize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the version and/or image type of a specific node pool.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_nodePools_update(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: UpdateNodePoolRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_nodePools_rollback(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: RollbackNodePoolUpgradeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets labels on a cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_resourceLabels(projectId: string, zone: string, clusterId: string, requestBody: SetLabelsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/resourceLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Completes master IP rotation.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_completeIpRotation(projectId: string, zone: string, clusterId: string, requestBody: CompleteIPRotationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':completeIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the maintenance policy for a cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy
		 * @param {string} projectId Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
		 * @param {string} zone Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.
		 * @param {string} clusterId Required. The name of the cluster to update.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_setMaintenancePolicy(projectId: string, zone: string, clusterId: string, requestBody: SetMaintenancePolicyRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':setMaintenancePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_setMasterAuth(projectId: string, zone: string, clusterId: string, requestBody: SetMasterAuthRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':setMasterAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or disables Network Policy for a cluster.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_setNetworkPolicy(projectId: string, zone: string, clusterId: string, requestBody: SetNetworkPolicyRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':setNetworkPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts master IP rotation.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_clusters_startIpRotation(projectId: string, zone: string, clusterId: string, requestBody: StartIPRotationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':startIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all operations in a project in the specified zone or all zones.
		 * Get v1beta1/projects/{projectId}/zones/{zone}/operations
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
		 * @param {string} parent The parent (project and location) where the operations will be listed. Specified in the format `projects/locations/*`. Location "-" matches all zones and all regions.
		 * @return {ListOperationsResponse} Successful response
		 */
		Container_projects_zones_operations_list(projectId: string, zone: string, parent: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/operations&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Gets the specified operation.
		 * Get v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @param {string} operationId Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, operation id) of the operation to get. Specified in the format `projects/locations/operations/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_zones_operations_get(projectId: string, zone: string, operationId: string, name: string | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Cancels the specified operation.
		 * Post v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
		 * @param {string} operationId Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
		 * @return {Empty} Successful response
		 */
		Container_projects_zones_operations_cancel(projectId: string, zone: string, operationId: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration info about the Google Kubernetes Engine service.
		 * Get v1beta1/projects/{projectId}/zones/{zone}/serverconfig
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project and location) of the server config to get, specified in the format `projects/locations/*`.
		 * @return {ServerConfig} Successful response
		 */
		Container_projects_zones_getServerconfig(projectId: string, zone: string, name: string | null | undefined): Observable<ServerConfig> {
			return this.http.get<ServerConfig>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/serverconfig&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Deletes a node pool from a cluster.
		 * Delete v1beta1/{name}
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_nodePools_delete(name: string, clusterId: string | null | undefined, nodePoolId: string | null | undefined, projectId: string | null | undefined, zone: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&nodePoolId=' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), {});
		}

		/**
		 * Gets the specified operation.
		 * Get v1beta1/{name}
		 * @param {string} name The name (project, location, operation id) of the operation to get. Specified in the format `projects/locations/operations/*`.
		 * @param {string} operationId Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_operations_get(name: string, operationId: string | null | undefined, projectId: string | null | undefined, zone: string | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&operationId=' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), {});
		}

		/**
		 * Updates the version and/or image type of a specific node pool.
		 * Put v1beta1/{name}
		 * @param {string} name The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_nodePools_update(name: string, requestBody: UpdateNodePoolRequest): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration info about the Google Kubernetes Engine service.
		 * Get v1beta1/{name}/serverConfig
		 * @param {string} name The name (project and location) of the server config to get, specified in the format `projects/locations/*`.
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
		 * @return {ServerConfig} Successful response
		 */
		Container_projects_locations_getServerConfig(name: string, projectId: string | null | undefined, zone: string | null | undefined): Observable<ServerConfig> {
			return this.http.get<ServerConfig>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/serverConfig&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), {});
		}

		/**
		 * Cancels the specified operation.
		 * Post v1beta1/{name}:cancel
		 * @param {string} name The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/locations/operations/*`.
		 * @return {Empty} Successful response
		 */
		Container_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.
		 * Get v1beta1/{name}:checkAutopilotCompatibility
		 * @param {string} name The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/locations/clusters/*`.
		 * @return {CheckAutopilotCompatibilityResponse} Successful response
		 */
		Container_projects_locations_clusters_checkAutopilotCompatibility(name: string): Observable<CheckAutopilotCompatibilityResponse> {
			return this.http.get<CheckAutopilotCompatibilityResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':checkAutopilotCompatibility', {});
		}

		/**
		 * Completes master IP rotation.
		 * Post v1beta1/{name}:completeIpRotation
		 * @param {string} name The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_completeIpRotation(name: string, requestBody: CompleteIPRotationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':completeIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
		 * Post v1beta1/{name}:completeUpgrade
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to complete upgrade. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {Empty} Successful response
		 */
		Container_projects_locations_clusters_nodePools_completeUpgrade(name: string, requestBody: CompleteNodePoolUpgradeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':completeUpgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
		 * Post v1beta1/{name}:rollback
		 * @param {string} name The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_nodePools_rollback(name: string, requestBody: RollbackNodePoolUpgradeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the addons for a specific cluster.
		 * Post v1beta1/{name}:setAddons
		 * @param {string} name The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setAddons(name: string, requestBody: SetAddonsConfigRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setAddons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the autoscaling settings of a specific node pool.
		 * Post v1beta1/{name}:setAutoscaling
		 * @param {string} name The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_nodePools_setAutoscaling(name: string, requestBody: SetNodePoolAutoscalingRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setAutoscaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or disables the ABAC authorization mechanism on a cluster.
		 * Post v1beta1/{name}:setLegacyAbac
		 * @param {string} name The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setLegacyAbac(name: string, requestBody: SetLegacyAbacRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setLegacyAbac', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
		 * Post v1beta1/{name}:setLocations
		 * @param {string} name The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setLocations(name: string, requestBody: SetLocationsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setLocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the logging service for a specific cluster.
		 * Post v1beta1/{name}:setLogging
		 * @param {string} name The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setLogging(name: string, requestBody: SetLoggingServiceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the maintenance policy for a cluster.
		 * Post v1beta1/{name}:setMaintenancePolicy
		 * @param {string} name The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setMaintenancePolicy(name: string, requestBody: SetMaintenancePolicyRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setMaintenancePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the NodeManagement options for a node pool.
		 * Post v1beta1/{name}:setManagement
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_nodePools_setManagement(name: string, requestBody: SetNodePoolManagementRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setManagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
		 * Post v1beta1/{name}:setMasterAuth
		 * @param {string} name The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setMasterAuth(name: string, requestBody: SetMasterAuthRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setMasterAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the monitoring service for a specific cluster.
		 * Post v1beta1/{name}:setMonitoring
		 * @param {string} name The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setMonitoring(name: string, requestBody: SetMonitoringServiceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setMonitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or disables Network Policy for a cluster.
		 * Post v1beta1/{name}:setNetworkPolicy
		 * @param {string} name The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setNetworkPolicy(name: string, requestBody: SetNetworkPolicyRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setNetworkPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets labels on a cluster.
		 * Post v1beta1/{name}:setResourceLabels
		 * @param {string} name The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_setResourceLabels(name: string, requestBody: SetLabelsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setResourceLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
		 * Post v1beta1/{name}:setSize
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/locations/clusters/nodePools/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_nodePools_setSize(name: string, requestBody: SetNodePoolSizeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':setSize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts master IP rotation.
		 * Post v1beta1/{name}:startIpRotation
		 * @param {string} name The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_startIpRotation(name: string, requestBody: StartIPRotationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':startIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the master for a specific cluster.
		 * Post v1beta1/{name}:updateMaster
		 * @param {string} name The name (project, location, cluster) of the cluster to update. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_updateMaster(name: string, requestBody: UpdateMasterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':updateMaster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
		 * Get v1beta1/{parent}/.well-known/openid-configuration
		 * @param {string} parent The cluster (project, location, cluster name) to get the discovery document for. Specified in the format `projects/locations/clusters/*`.
		 * @return {GetOpenIDConfigResponse} Successful response
		 */
		Container_projects_locations_clusters_well_known_getOpenid_configuration(parent: string): Observable<GetOpenIDConfigResponse> {
			return this.http.get<GetOpenIDConfigResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/.well-known/openid-configuration', {});
		}

		/**
		 * Lists subnetworks that can be used for creating clusters in a project.
		 * Get v1beta1/{parent}/aggregated/usableSubnetworks
		 * @param {string} parent Required. The parent project where subnetworks are usable. Specified in the format `projects/*`.
		 * @param {string} filter Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
		 * @param {number} pageSize The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
		 * @param {string} pageToken Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
		 * @return {ListUsableSubnetworksResponse} Successful response
		 */
		Container_projects_aggregated_usableSubnetworks_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUsableSubnetworksResponse> {
			return this.http.get<ListUsableSubnetworksResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/aggregated/usableSubnetworks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all clusters owned by a project in either the specified zone or all zones.
		 * Get v1beta1/{parent}/clusters
		 * @param {string} parent The parent (project and location) where the clusters will be listed. Specified in the format `projects/locations/*`. Location "-" matches all zones and all regions.
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
		 * @return {ListClustersResponse} Successful response
		 */
		Container_projects_locations_clusters_list(parent: string, projectId: string | null | undefined, zone: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), {});
		}

		/**
		 * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
		 * Post v1beta1/{parent}/clusters
		 * @param {string} parent The parent (project and location) where the cluster will be created. Specified in the format `projects/locations/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_create(parent: string, requestBody: CreateClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
		 * Get v1beta1/{parent}/jwks
		 * @param {string} parent The cluster (project, location, cluster name) to get keys for. Specified in the format `projects/locations/clusters/*`.
		 * @return {GetJSONWebKeysResponse} Successful response
		 */
		Container_projects_locations_clusters_getJwks(parent: string): Observable<GetJSONWebKeysResponse> {
			return this.http.get<GetJSONWebKeysResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jwks', {});
		}

		/**
		 * Fetches locations that offer Google Kubernetes Engine.
		 * Get v1beta1/{parent}/locations
		 * @param {string} parent Required. Contains the name of the resource requested. Specified in the format `projects/*`.
		 * @return {ListLocationsResponse} Successful response
		 */
		Container_projects_locations_list(parent: string): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations', {});
		}

		/**
		 * Lists the node pools for a cluster.
		 * Get v1beta1/{parent}/nodePools
		 * @param {string} parent The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/locations/clusters/*`.
		 * @param {string} clusterId Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
		 * @return {ListNodePoolsResponse} Successful response
		 */
		Container_projects_locations_clusters_nodePools_list(parent: string, clusterId: string | null | undefined, projectId: string | null | undefined, zone: string | null | undefined): Observable<ListNodePoolsResponse> {
			return this.http.get<ListNodePoolsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodePools&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), {});
		}

		/**
		 * Creates a node pool for a cluster.
		 * Post v1beta1/{parent}/nodePools
		 * @param {string} parent The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/locations/clusters/*`.
		 * @return {Operation} Successful response
		 */
		Container_projects_locations_clusters_nodePools_create(parent: string, requestBody: CreateNodePoolRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodePools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all operations in a project in the specified zone or all zones.
		 * Get v1beta1/{parent}/operations
		 * @param {string} parent The parent (project and location) where the operations will be listed. Specified in the format `projects/locations/*`. Location "-" matches all zones and all regions.
		 * @param {string} projectId Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
		 * @return {ListOperationsResponse} Successful response
		 */
		Container_projects_locations_operations_list(parent: string, projectId: string | null | undefined, zone: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/operations&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), {});
		}
	}

}

