import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/). */
	export interface AcceleratorConfig {

		/** The number of the accelerator cards of this type exposed to this instance. */
		acceleratorCount?: number | null;

		/** Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 nvidia-tesla-k80Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80. */
		acceleratorTypeUri?: string | null;
	}

	/** Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/). */
	export interface AcceleratorConfigFormProperties {

		/** The number of the accelerator cards of this type exposed to this instance. */
		acceleratorCount: FormControl<number | null | undefined>,

		/** Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 nvidia-tesla-k80Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80. */
		acceleratorTypeUri: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorConfigFormGroup() {
		return new FormGroup<AcceleratorConfigFormProperties>({
			acceleratorCount: new FormControl<number | null | undefined>(undefined),
			acceleratorTypeUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Autoscaling Policy config associated with the cluster. */
	export interface AutoscalingConfig {

		/** Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region. */
		policyUri?: string | null;
	}

	/** Autoscaling Policy config associated with the cluster. */
	export interface AutoscalingConfigFormProperties {

		/** Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region. */
		policyUri: FormControl<string | null | undefined>,
	}
	export function CreateAutoscalingConfigFormGroup() {
		return new FormGroup<AutoscalingConfigFormProperties>({
			policyUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an autoscaling policy for Dataproc cluster autoscaler. */
	export interface AutoscalingPolicy {

		/** Basic algorithm for autoscaling. */
		basicAlgorithm?: BasicAutoscalingAlgorithm;

		/** Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
		id?: string | null;

		/** Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy. */
		labels?: {[id: string]: string };

		/** Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
		name?: string | null;

		/** Configuration for the size bounds of an instance group, including its proportional size to other groups. */
		secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;

		/** Configuration for the size bounds of an instance group, including its proportional size to other groups. */
		workerConfig?: InstanceGroupAutoscalingPolicyConfig;
	}

	/** Describes an autoscaling policy for Dataproc cluster autoscaler. */
	export interface AutoscalingPolicyFormProperties {

		/** Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
		id: FormControl<string | null | undefined>,

		/** Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an autoscaling policy. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAutoscalingPolicyFormGroup() {
		return new FormGroup<AutoscalingPolicyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic algorithm for autoscaling. */
	export interface BasicAutoscalingAlgorithm {

		/** Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m. */
		cooldownPeriod?: string | null;

		/** Basic autoscaling configurations for Spark Standalone. */
		sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig;

		/** Basic autoscaling configurations for YARN. */
		yarnConfig?: BasicYarnAutoscalingConfig;
	}

	/** Basic algorithm for autoscaling. */
	export interface BasicAutoscalingAlgorithmFormProperties {

		/** Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m. */
		cooldownPeriod: FormControl<string | null | undefined>,
	}
	export function CreateBasicAutoscalingAlgorithmFormGroup() {
		return new FormGroup<BasicAutoscalingAlgorithmFormProperties>({
			cooldownPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic autoscaling configurations for Spark Standalone. */
	export interface SparkStandaloneAutoscalingConfig {

		/** Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling operations.Bounds: 0s, 1d. */
		gracefulDecommissionTimeout?: string | null;

		/** Optional. Remove only idle workers when scaling down cluster */
		removeOnlyIdleWorkers?: boolean | null;

		/** Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0 will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0. */
		scaleDownFactor?: number | null;

		/** Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleDownMinWorkerFraction?: number | null;

		/** Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0. */
		scaleUpFactor?: number | null;

		/** Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleUpMinWorkerFraction?: number | null;
	}

	/** Basic autoscaling configurations for Spark Standalone. */
	export interface SparkStandaloneAutoscalingConfigFormProperties {

		/** Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling operations.Bounds: 0s, 1d. */
		gracefulDecommissionTimeout: FormControl<string | null | undefined>,

		/** Optional. Remove only idle workers when scaling down cluster */
		removeOnlyIdleWorkers: FormControl<boolean | null | undefined>,

		/** Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0 will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0. */
		scaleDownFactor: FormControl<number | null | undefined>,

		/** Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleDownMinWorkerFraction: FormControl<number | null | undefined>,

		/** Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0. */
		scaleUpFactor: FormControl<number | null | undefined>,

		/** Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleUpMinWorkerFraction: FormControl<number | null | undefined>,
	}
	export function CreateSparkStandaloneAutoscalingConfigFormGroup() {
		return new FormGroup<SparkStandaloneAutoscalingConfigFormProperties>({
			gracefulDecommissionTimeout: new FormControl<string | null | undefined>(undefined),
			removeOnlyIdleWorkers: new FormControl<boolean | null | undefined>(undefined),
			scaleDownFactor: new FormControl<number | null | undefined>(undefined),
			scaleDownMinWorkerFraction: new FormControl<number | null | undefined>(undefined),
			scaleUpFactor: new FormControl<number | null | undefined>(undefined),
			scaleUpMinWorkerFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Basic autoscaling configurations for YARN. */
	export interface BasicYarnAutoscalingConfig {

		/** Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d. */
		gracefulDecommissionTimeout?: string | null;

		/** Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. */
		scaleDownFactor?: number | null;

		/** Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleDownMinWorkerFraction?: number | null;

		/** Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. */
		scaleUpFactor?: number | null;

		/** Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleUpMinWorkerFraction?: number | null;
	}

	/** Basic autoscaling configurations for YARN. */
	export interface BasicYarnAutoscalingConfigFormProperties {

		/** Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d. */
		gracefulDecommissionTimeout: FormControl<string | null | undefined>,

		/** Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. */
		scaleDownFactor: FormControl<number | null | undefined>,

		/** Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleDownMinWorkerFraction: FormControl<number | null | undefined>,

		/** Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. */
		scaleUpFactor: FormControl<number | null | undefined>,

		/** Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleUpMinWorkerFraction: FormControl<number | null | undefined>,
	}
	export function CreateBasicYarnAutoscalingConfigFormGroup() {
		return new FormGroup<BasicYarnAutoscalingConfigFormProperties>({
			gracefulDecommissionTimeout: new FormControl<string | null | undefined>(undefined),
			scaleDownFactor: new FormControl<number | null | undefined>(undefined),
			scaleDownMinWorkerFraction: new FormControl<number | null | undefined>(undefined),
			scaleUpFactor: new FormControl<number | null | undefined>(undefined),
			scaleUpMinWorkerFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for the size bounds of an instance group, including its proportional size to other groups. */
	export interface InstanceGroupAutoscalingPolicyConfig {

		/** Required. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Secondary workers - Bounds: [min_instances, ). Default: 0. */
		maxInstances?: number | null;

		/** Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0. */
		minInstances?: number | null;

		/** Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers. */
		weight?: number | null;
	}

	/** Configuration for the size bounds of an instance group, including its proportional size to other groups. */
	export interface InstanceGroupAutoscalingPolicyConfigFormProperties {

		/** Required. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Secondary workers - Bounds: [min_instances, ). Default: 0. */
		maxInstances: FormControl<number | null | undefined>,

		/** Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0. */
		minInstances: FormControl<number | null | undefined>,

		/** Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers. */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateInstanceGroupAutoscalingPolicyConfigFormGroup() {
		return new FormGroup<InstanceGroupAutoscalingPolicyConfigFormProperties>({
			maxInstances: new FormControl<number | null | undefined>(undefined),
			minInstances: new FormControl<number | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Node group identification and configuration information. */
	export interface AuxiliaryNodeGroup {

		/** Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource. */
		nodeGroup?: NodeGroup;

		/** Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters. */
		nodeGroupId?: string | null;
	}

	/** Node group identification and configuration information. */
	export interface AuxiliaryNodeGroupFormProperties {

		/** Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters. */
		nodeGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAuxiliaryNodeGroupFormGroup() {
		return new FormGroup<AuxiliaryNodeGroupFormProperties>({
			nodeGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource. */
	export interface NodeGroup {

		/** Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn. */
		labels?: {[id: string]: string };

		/** The Node group resource name (https://aip.dev/122). */
		name?: string | null;

		/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
		nodeGroupConfig?: InstanceGroupConfig;

		/** Required. Node group roles. */
		roles?: Array<string>;
	}

	/** Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource. */
	export interface NodeGroupFormProperties {

		/** Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The Node group resource name (https://aip.dev/122). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNodeGroupFormGroup() {
		return new FormGroup<NodeGroupFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
	export interface InstanceGroupConfig {

		/** Optional. The Compute Engine accelerator configuration for these instances. */
		accelerators?: Array<AcceleratorConfig>;

		/** Specifies the config of disk options for a group of VM instances. */
		diskConfig?: DiskConfig;

		/** Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default. */
		imageUri?: string | null;

		/** Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. */
		instanceFlexibilityPolicy?: InstanceFlexibilityPolicy;

		/** Output only. The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group. */
		instanceNames?: Array<string>;

		/** Output only. List of references to Compute Engine instances. */
		instanceReferences?: Array<InstanceReference>;

		/** Output only. Specifies that this instance group contains preemptible instances. */
		isPreemptible?: boolean | null;

		/** Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2. */
		machineTypeUri?: string | null;

		/** Specifies the resources used to actively manage an instance group. */
		managedGroupConfig?: ManagedGroupConfig;

		/** Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
		minCpuPlatform?: string | null;

		/** Optional. The minimum number of primary worker instances to create. If min_num_instances is set, cluster creation will succeed if the number of primary workers created is at least equal to the min_num_instances number.Example: Cluster creation request with num_instances = 5 and min_num_instances = 3: If 4 VMs are created and 1 instance fails, the failed VM is deleted. The cluster is resized to 4 instances and placed in a RUNNING state. If 2 instances are created and 3 instances fail, the cluster in placed in an ERROR state. The failed VMs are not deleted. */
		minNumInstances?: number | null;

		/** Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to 3. For standard cluster master_config groups, must be set to 1. */
		numInstances?: number | null;

		/** Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE. */
		preemptibility?: InstanceGroupConfigPreemptibility | null;

		/** Configuration to handle the startup of instances during cluster create and update process. */
		startupConfig?: StartupConfig;
	}

	/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
	export interface InstanceGroupConfigFormProperties {

		/** Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default. */
		imageUri: FormControl<string | null | undefined>,

		/** Output only. Specifies that this instance group contains preemptible instances. */
		isPreemptible: FormControl<boolean | null | undefined>,

		/** Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2. */
		machineTypeUri: FormControl<string | null | undefined>,

		/** Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
		minCpuPlatform: FormControl<string | null | undefined>,

		/** Optional. The minimum number of primary worker instances to create. If min_num_instances is set, cluster creation will succeed if the number of primary workers created is at least equal to the min_num_instances number.Example: Cluster creation request with num_instances = 5 and min_num_instances = 3: If 4 VMs are created and 1 instance fails, the failed VM is deleted. The cluster is resized to 4 instances and placed in a RUNNING state. If 2 instances are created and 3 instances fail, the cluster in placed in an ERROR state. The failed VMs are not deleted. */
		minNumInstances: FormControl<number | null | undefined>,

		/** Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to 3. For standard cluster master_config groups, must be set to 1. */
		numInstances: FormControl<number | null | undefined>,

		/** Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE. */
		preemptibility: FormControl<InstanceGroupConfigPreemptibility | null | undefined>,
	}
	export function CreateInstanceGroupConfigFormGroup() {
		return new FormGroup<InstanceGroupConfigFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
			isPreemptible: new FormControl<boolean | null | undefined>(undefined),
			machineTypeUri: new FormControl<string | null | undefined>(undefined),
			minCpuPlatform: new FormControl<string | null | undefined>(undefined),
			minNumInstances: new FormControl<number | null | undefined>(undefined),
			numInstances: new FormControl<number | null | undefined>(undefined),
			preemptibility: new FormControl<InstanceGroupConfigPreemptibility | null | undefined>(undefined),
		});

	}


	/** Specifies the config of disk options for a group of VM instances. */
	export interface DiskConfig {

		/** Optional. Size in GB of the boot disk (default is 500GB). */
		bootDiskSizeGb?: number | null;

		/** Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types). */
		bootDiskType?: string | null;

		/** Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance). */
		localSsdInterface?: string | null;

		/** Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected. */
		numLocalSsds?: number | null;
	}

	/** Specifies the config of disk options for a group of VM instances. */
	export interface DiskConfigFormProperties {

		/** Optional. Size in GB of the boot disk (default is 500GB). */
		bootDiskSizeGb: FormControl<number | null | undefined>,

		/** Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types). */
		bootDiskType: FormControl<string | null | undefined>,

		/** Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance). */
		localSsdInterface: FormControl<string | null | undefined>,

		/** Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected. */
		numLocalSsds: FormControl<number | null | undefined>,
	}
	export function CreateDiskConfigFormGroup() {
		return new FormGroup<DiskConfigFormProperties>({
			bootDiskSizeGb: new FormControl<number | null | undefined>(undefined),
			bootDiskType: new FormControl<string | null | undefined>(undefined),
			localSsdInterface: new FormControl<string | null | undefined>(undefined),
			numLocalSsds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. */
	export interface InstanceFlexibilityPolicy {

		/** Optional. List of instance selection options that the group will use when creating new VMs. */
		instanceSelectionList?: Array<InstanceSelection>;

		/** Output only. A list of instance selection results in the group. */
		instanceSelectionResults?: Array<InstanceSelectionResult>;
	}

	/** Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. */
	export interface InstanceFlexibilityPolicyFormProperties {
	}
	export function CreateInstanceFlexibilityPolicyFormGroup() {
		return new FormGroup<InstanceFlexibilityPolicyFormProperties>({
		});

	}


	/** Defines machines types and a rank to which the machines types belong. */
	export interface InstanceSelection {

		/** Optional. Full machine-type names, e.g. "n1-standard-16". */
		machineTypes?: Array<string>;

		/** Optional. Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference. */
		rank?: number | null;
	}

	/** Defines machines types and a rank to which the machines types belong. */
	export interface InstanceSelectionFormProperties {

		/** Optional. Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference. */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateInstanceSelectionFormGroup() {
		return new FormGroup<InstanceSelectionFormProperties>({
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a mapping from machine types to the number of VMs that are created with each machine type. */
	export interface InstanceSelectionResult {

		/** Output only. Full machine-type names, e.g. "n1-standard-16". */
		machineType?: string | null;

		/** Output only. Number of VM provisioned with the machine_type. */
		vmCount?: number | null;
	}

	/** Defines a mapping from machine types to the number of VMs that are created with each machine type. */
	export interface InstanceSelectionResultFormProperties {

		/** Output only. Full machine-type names, e.g. "n1-standard-16". */
		machineType: FormControl<string | null | undefined>,

		/** Output only. Number of VM provisioned with the machine_type. */
		vmCount: FormControl<number | null | undefined>,
	}
	export function CreateInstanceSelectionResultFormGroup() {
		return new FormGroup<InstanceSelectionResultFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
			vmCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A reference to a Compute Engine instance. */
	export interface InstanceReference {

		/** The unique identifier of the Compute Engine instance. */
		instanceId?: string | null;

		/** The user-friendly name of the Compute Engine instance. */
		instanceName?: string | null;

		/** The public ECIES key used for sharing data with this instance. */
		publicEciesKey?: string | null;

		/** The public RSA key used for sharing data with this instance. */
		publicKey?: string | null;
	}

	/** A reference to a Compute Engine instance. */
	export interface InstanceReferenceFormProperties {

		/** The unique identifier of the Compute Engine instance. */
		instanceId: FormControl<string | null | undefined>,

		/** The user-friendly name of the Compute Engine instance. */
		instanceName: FormControl<string | null | undefined>,

		/** The public ECIES key used for sharing data with this instance. */
		publicEciesKey: FormControl<string | null | undefined>,

		/** The public RSA key used for sharing data with this instance. */
		publicKey: FormControl<string | null | undefined>,
	}
	export function CreateInstanceReferenceFormGroup() {
		return new FormGroup<InstanceReferenceFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			instanceName: new FormControl<string | null | undefined>(undefined),
			publicEciesKey: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the resources used to actively manage an instance group. */
	export interface ManagedGroupConfig {

		/** Output only. The name of the Instance Group Manager for this group. */
		instanceGroupManagerName?: string | null;

		/** Output only. The partial URI to the instance group manager for this group. E.g. projects/my-project/regions/us-central1/instanceGroupManagers/my-igm. */
		instanceGroupManagerUri?: string | null;

		/** Output only. The name of the Instance Template used for the Managed Instance Group. */
		instanceTemplateName?: string | null;
	}

	/** Specifies the resources used to actively manage an instance group. */
	export interface ManagedGroupConfigFormProperties {

		/** Output only. The name of the Instance Group Manager for this group. */
		instanceGroupManagerName: FormControl<string | null | undefined>,

		/** Output only. The partial URI to the instance group manager for this group. E.g. projects/my-project/regions/us-central1/instanceGroupManagers/my-igm. */
		instanceGroupManagerUri: FormControl<string | null | undefined>,

		/** Output only. The name of the Instance Template used for the Managed Instance Group. */
		instanceTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateManagedGroupConfigFormGroup() {
		return new FormGroup<ManagedGroupConfigFormProperties>({
			instanceGroupManagerName: new FormControl<string | null | undefined>(undefined),
			instanceGroupManagerUri: new FormControl<string | null | undefined>(undefined),
			instanceTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceGroupConfigPreemptibility { PREEMPTIBILITY_UNSPECIFIED = 'PREEMPTIBILITY_UNSPECIFIED', NON_PREEMPTIBLE = 'NON_PREEMPTIBLE', PREEMPTIBLE = 'PREEMPTIBLE', SPOT = 'SPOT' }


	/** Configuration to handle the startup of instances during cluster create and update process. */
	export interface StartupConfig {

		/** Optional. The config setting to enable cluster creation/ updation to be successful only after required_registration_fraction of instances are up and running. This configuration is applicable to only secondary workers for now. The cluster will fail if required_registration_fraction of instances are not available. This will include instance creation, agent registration, and service registration (if enabled). */
		requiredRegistrationFraction?: number | null;
	}

	/** Configuration to handle the startup of instances during cluster create and update process. */
	export interface StartupConfigFormProperties {

		/** Optional. The config setting to enable cluster creation/ updation to be successful only after required_registration_fraction of instances are up and running. This configuration is applicable to only secondary workers for now. The cluster will fail if required_registration_fraction of instances are not available. This will include instance creation, agent registration, and service registration (if enabled). */
		requiredRegistrationFraction: FormControl<number | null | undefined>,
	}
	export function CreateStartupConfigFormGroup() {
		return new FormGroup<StartupConfigFormProperties>({
			requiredRegistrationFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Auxiliary services configuration for a Cluster. */
	export interface AuxiliaryServicesConfig {

		/** Specifies a Metastore configuration. */
		metastoreConfig?: MetastoreConfig;

		/** Spark History Server configuration for the workload. */
		sparkHistoryServerConfig?: SparkHistoryServerConfig;
	}

	/** Auxiliary services configuration for a Cluster. */
	export interface AuxiliaryServicesConfigFormProperties {
	}
	export function CreateAuxiliaryServicesConfigFormGroup() {
		return new FormGroup<AuxiliaryServicesConfigFormProperties>({
		});

	}


	/** Specifies a Metastore configuration. */
	export interface MetastoreConfig {

		/** Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name] */
		dataprocMetastoreService?: string | null;
	}

	/** Specifies a Metastore configuration. */
	export interface MetastoreConfigFormProperties {

		/** Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name] */
		dataprocMetastoreService: FormControl<string | null | undefined>,
	}
	export function CreateMetastoreConfigFormGroup() {
		return new FormGroup<MetastoreConfigFormProperties>({
			dataprocMetastoreService: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Spark History Server configuration for the workload. */
	export interface SparkHistoryServerConfig {

		/** Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name] */
		dataprocCluster?: string | null;
	}

	/** Spark History Server configuration for the workload. */
	export interface SparkHistoryServerConfigFormProperties {

		/** Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name] */
		dataprocCluster: FormControl<string | null | undefined>,
	}
	export function CreateSparkHistoryServerConfigFormGroup() {
		return new FormGroup<SparkHistoryServerConfigFormProperties>({
			dataprocCluster: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a batch workload in the service. */
	export interface Batch {

		/** Output only. The time when the batch was created. */
		createTime?: string | null;

		/** Output only. The email address of the user who created the batch. */
		creator?: string | null;

		/** Environment configuration for a workload. */
		environmentConfig?: EnvironmentConfig;

		/** Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch. */
		labels?: {[id: string]: string };

		/** Output only. The resource name of the batch. */
		name?: string | null;

		/** Output only. The resource name of the operation associated with this batch. */
		operation?: string | null;

		/** A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload. */
		pysparkBatch?: PySparkBatch;

		/** Runtime configuration for a workload. */
		runtimeConfig?: RuntimeConfig;

		/** Runtime information about workload execution. */
		runtimeInfo?: RuntimeInfo;

		/** A configuration for running an Apache Spark (https://spark.apache.org/) batch workload. */
		sparkBatch?: SparkBatch;

		/** A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload. */
		sparkRBatch?: SparkRBatch;

		/** A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload. */
		sparkSqlBatch?: SparkSqlBatch;

		/** Output only. The state of the batch. */
		state?: BatchState | null;

		/** Output only. Historical state information for the batch. */
		stateHistory?: Array<StateHistory>;

		/** Output only. Batch state details, such as a failure description if the state is FAILED. */
		stateMessage?: string | null;

		/** Output only. The time when the batch entered a current state. */
		stateTime?: string | null;

		/** Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch. */
		uuid?: string | null;
	}

	/** A representation of a batch workload in the service. */
	export interface BatchFormProperties {

		/** Output only. The time when the batch was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The email address of the user who created the batch. */
		creator: FormControl<string | null | undefined>,

		/** Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name of the batch. */
		name: FormControl<string | null | undefined>,

		/** Output only. The resource name of the operation associated with this batch. */
		operation: FormControl<string | null | undefined>,

		/** Output only. The state of the batch. */
		state: FormControl<BatchState | null | undefined>,

		/** Output only. Batch state details, such as a failure description if the state is FAILED. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The time when the batch entered a current state. */
		stateTime: FormControl<string | null | undefined>,

		/** Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateBatchFormGroup() {
		return new FormGroup<BatchFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BatchState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			stateTime: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Environment configuration for a workload. */
	export interface EnvironmentConfig {

		/** Execution configuration for a workload. */
		executionConfig?: ExecutionConfig;

		/** Auxiliary services configuration for a workload. */
		peripheralsConfig?: PeripheralsConfig;
	}

	/** Environment configuration for a workload. */
	export interface EnvironmentConfigFormProperties {
	}
	export function CreateEnvironmentConfigFormGroup() {
		return new FormGroup<EnvironmentConfigFormProperties>({
		});

	}


	/** Execution configuration for a workload. */
	export interface ExecutionConfig {

		/** Optional. Applies to sessions only. The duration to keep the session alive while it's idling. Exceeding this threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 1 hour if not set. If both ttl and idle_ttl are specified for an interactive session, the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. */
		idleTtl?: string | null;

		/** Optional. The Cloud KMS key to use for encryption. */
		kmsKey?: string | null;

		/** Optional. Tags used for network traffic control. */
		networkTags?: Array<string>;

		/** Optional. Network URI to connect workload to. */
		networkUri?: string | null;

		/** Optional. Service account that used to execute workload. */
		serviceAccount?: string | null;

		/** Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running, and then create and manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		stagingBucket?: string | null;

		/** Optional. Subnetwork URI to connect workload to. */
		subnetworkUri?: string | null;

		/** Optional. The duration after which the workload will be terminated, specified as the JSON representation for Duration (https://protobuf.dev/programming-guides/proto3/#json). When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it exits naturally (or run forever without exiting). If ttl is not specified for an interactive session, it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours. Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. */
		ttl?: string | null;
	}

	/** Execution configuration for a workload. */
	export interface ExecutionConfigFormProperties {

		/** Optional. Applies to sessions only. The duration to keep the session alive while it's idling. Exceeding this threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 1 hour if not set. If both ttl and idle_ttl are specified for an interactive session, the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. */
		idleTtl: FormControl<string | null | undefined>,

		/** Optional. The Cloud KMS key to use for encryption. */
		kmsKey: FormControl<string | null | undefined>,

		/** Optional. Network URI to connect workload to. */
		networkUri: FormControl<string | null | undefined>,

		/** Optional. Service account that used to execute workload. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running, and then create and manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		stagingBucket: FormControl<string | null | undefined>,

		/** Optional. Subnetwork URI to connect workload to. */
		subnetworkUri: FormControl<string | null | undefined>,

		/** Optional. The duration after which the workload will be terminated, specified as the JSON representation for Duration (https://protobuf.dev/programming-guides/proto3/#json). When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it exits naturally (or run forever without exiting). If ttl is not specified for an interactive session, it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours. Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateExecutionConfigFormGroup() {
		return new FormGroup<ExecutionConfigFormProperties>({
			idleTtl: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			stagingBucket: new FormControl<string | null | undefined>(undefined),
			subnetworkUri: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Auxiliary services configuration for a workload. */
	export interface PeripheralsConfig {

		/** Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id] */
		metastoreService?: string | null;

		/** Spark History Server configuration for the workload. */
		sparkHistoryServerConfig?: SparkHistoryServerConfig;
	}

	/** Auxiliary services configuration for a workload. */
	export interface PeripheralsConfigFormProperties {

		/** Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id] */
		metastoreService: FormControl<string | null | undefined>,
	}
	export function CreatePeripheralsConfigFormGroup() {
		return new FormGroup<PeripheralsConfigFormProperties>({
			metastoreService: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload. */
	export interface PySparkBatch {

		/** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. */
		args?: Array<string>;

		/** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
		fileUris?: Array<string>;

		/** Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. */
		jarFileUris?: Array<string>;

		/** Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. */
		mainPythonFileUri?: string | null;

		/** Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. */
		pythonFileUris?: Array<string>;
	}

	/** A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload. */
	export interface PySparkBatchFormProperties {

		/** Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. */
		mainPythonFileUri: FormControl<string | null | undefined>,
	}
	export function CreatePySparkBatchFormGroup() {
		return new FormGroup<PySparkBatchFormProperties>({
			mainPythonFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Runtime configuration for a workload. */
	export interface RuntimeConfig {

		/** Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used. */
		containerImage?: string | null;

		/** Optional. A mapping of property names to values, which are used to configure workload execution. */
		properties?: {[id: string]: string };

		/** Configuration for dependency repositories */
		repositoryConfig?: RepositoryConfig;

		/** Optional. Version of the batch runtime. */
		version?: string | null;
	}

	/** Runtime configuration for a workload. */
	export interface RuntimeConfigFormProperties {

		/** Optional. Optional custom container image for the job runtime environment. If not specified, a default container image will be used. */
		containerImage: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values, which are used to configure workload execution. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Version of the batch runtime. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeConfigFormGroup() {
		return new FormGroup<RuntimeConfigFormProperties>({
			containerImage: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for dependency repositories */
	export interface RepositoryConfig {

		/** Configuration for PyPi repository */
		pypiRepositoryConfig?: PyPiRepositoryConfig;
	}

	/** Configuration for dependency repositories */
	export interface RepositoryConfigFormProperties {
	}
	export function CreateRepositoryConfigFormGroup() {
		return new FormGroup<RepositoryConfigFormProperties>({
		});

	}


	/** Configuration for PyPi repository */
	export interface PyPiRepositoryConfig {

		/** Optional. PyPi repository address */
		pypiRepository?: string | null;
	}

	/** Configuration for PyPi repository */
	export interface PyPiRepositoryConfigFormProperties {

		/** Optional. PyPi repository address */
		pypiRepository: FormControl<string | null | undefined>,
	}
	export function CreatePyPiRepositoryConfigFormGroup() {
		return new FormGroup<PyPiRepositoryConfigFormProperties>({
			pypiRepository: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Runtime information about workload execution. */
	export interface RuntimeInfo {

		/** Usage metrics represent approximate total resources consumed by a workload. */
		approximateUsage?: UsageMetrics;

		/** The usage snapshot represents the resources consumed by a workload at a specified time. */
		currentUsage?: UsageSnapshot;

		/** Output only. A URI pointing to the location of the diagnostics tarball. */
		diagnosticOutputUri?: string | null;

		/** Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs. */
		endpoints?: {[id: string]: string };

		/** Output only. A URI pointing to the location of the stdout and stderr of the workload. */
		outputUri?: string | null;
	}

	/** Runtime information about workload execution. */
	export interface RuntimeInfoFormProperties {

		/** Output only. A URI pointing to the location of the diagnostics tarball. */
		diagnosticOutputUri: FormControl<string | null | undefined>,

		/** Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs. */
		endpoints: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. A URI pointing to the location of the stdout and stderr of the workload. */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeInfoFormGroup() {
		return new FormGroup<RuntimeInfoFormProperties>({
			diagnosticOutputUri: new FormControl<string | null | undefined>(undefined),
			endpoints: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Usage metrics represent approximate total resources consumed by a workload. */
	export interface UsageMetrics {

		/** Optional. Accelerator type being used, if any */
		acceleratorType?: string | null;

		/** Optional. Accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliAcceleratorSeconds?: string | null;

		/** Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliDcuSeconds?: string | null;

		/** Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		shuffleStorageGbSeconds?: string | null;
	}

	/** Usage metrics represent approximate total resources consumed by a workload. */
	export interface UsageMetricsFormProperties {

		/** Optional. Accelerator type being used, if any */
		acceleratorType: FormControl<string | null | undefined>,

		/** Optional. Accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliAcceleratorSeconds: FormControl<string | null | undefined>,

		/** Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliDcuSeconds: FormControl<string | null | undefined>,

		/** Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		shuffleStorageGbSeconds: FormControl<string | null | undefined>,
	}
	export function CreateUsageMetricsFormGroup() {
		return new FormGroup<UsageMetricsFormProperties>({
			acceleratorType: new FormControl<string | null | undefined>(undefined),
			milliAcceleratorSeconds: new FormControl<string | null | undefined>(undefined),
			milliDcuSeconds: new FormControl<string | null | undefined>(undefined),
			shuffleStorageGbSeconds: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The usage snapshot represents the resources consumed by a workload at a specified time. */
	export interface UsageSnapshot {

		/** Optional. Accelerator type being used, if any */
		acceleratorType?: string | null;

		/** Optional. Milli (one-thousandth) accelerator. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
		milliAccelerator?: string | null;

		/** Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliDcu?: string | null;

		/** Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) charged at premium tier (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliDcuPremium?: string | null;

		/** Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
		shuffleStorageGb?: string | null;

		/** Optional. Shuffle Storage in gigabytes (GB) charged at premium tier. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
		shuffleStorageGbPremium?: string | null;

		/** Optional. The timestamp of the usage snapshot. */
		snapshotTime?: string | null;
	}

	/** The usage snapshot represents the resources consumed by a workload at a specified time. */
	export interface UsageSnapshotFormProperties {

		/** Optional. Accelerator type being used, if any */
		acceleratorType: FormControl<string | null | undefined>,

		/** Optional. Milli (one-thousandth) accelerator. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
		milliAccelerator: FormControl<string | null | undefined>,

		/** Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliDcu: FormControl<string | null | undefined>,

		/** Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) charged at premium tier (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). */
		milliDcuPremium: FormControl<string | null | undefined>,

		/** Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
		shuffleStorageGb: FormControl<string | null | undefined>,

		/** Optional. Shuffle Storage in gigabytes (GB) charged at premium tier. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) */
		shuffleStorageGbPremium: FormControl<string | null | undefined>,

		/** Optional. The timestamp of the usage snapshot. */
		snapshotTime: FormControl<string | null | undefined>,
	}
	export function CreateUsageSnapshotFormGroup() {
		return new FormGroup<UsageSnapshotFormProperties>({
			acceleratorType: new FormControl<string | null | undefined>(undefined),
			milliAccelerator: new FormControl<string | null | undefined>(undefined),
			milliDcu: new FormControl<string | null | undefined>(undefined),
			milliDcuPremium: new FormControl<string | null | undefined>(undefined),
			shuffleStorageGb: new FormControl<string | null | undefined>(undefined),
			shuffleStorageGbPremium: new FormControl<string | null | undefined>(undefined),
			snapshotTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration for running an Apache Spark (https://spark.apache.org/) batch workload. */
	export interface SparkBatch {

		/** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. */
		args?: Array<string>;

		/** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
		fileUris?: Array<string>;

		/** Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. */
		jarFileUris?: Array<string>;

		/** Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or specified in jar_file_uris. */
		mainClass?: string | null;

		/** Optional. The HCFS URI of the jar file that contains the main class. */
		mainJarFileUri?: string | null;
	}

	/** A configuration for running an Apache Spark (https://spark.apache.org/) batch workload. */
	export interface SparkBatchFormProperties {

		/** Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or specified in jar_file_uris. */
		mainClass: FormControl<string | null | undefined>,

		/** Optional. The HCFS URI of the jar file that contains the main class. */
		mainJarFileUri: FormControl<string | null | undefined>,
	}
	export function CreateSparkBatchFormGroup() {
		return new FormGroup<SparkBatchFormProperties>({
			mainClass: new FormControl<string | null | undefined>(undefined),
			mainJarFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload. */
	export interface SparkRBatch {

		/** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. */
		args?: Array<string>;

		/** Optional. HCFS URIs of files to be placed in the working directory of each executor. */
		fileUris?: Array<string>;

		/** Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file. */
		mainRFileUri?: string | null;
	}

	/** A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload. */
	export interface SparkRBatchFormProperties {

		/** Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file. */
		mainRFileUri: FormControl<string | null | undefined>,
	}
	export function CreateSparkRBatchFormGroup() {
		return new FormGroup<SparkRBatchFormProperties>({
			mainRFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload. */
	export interface SparkSqlBatch {

		/** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
		jarFileUris?: Array<string>;

		/** Required. The HCFS URI of the script that contains Spark SQL queries to execute. */
		queryFileUri?: string | null;

		/** Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
		queryVariables?: {[id: string]: string };
	}

	/** A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload. */
	export interface SparkSqlBatchFormProperties {

		/** Required. The HCFS URI of the script that contains Spark SQL queries to execute. */
		queryFileUri: FormControl<string | null | undefined>,

		/** Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
		queryVariables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSparkSqlBatchFormGroup() {
		return new FormGroup<SparkSqlBatchFormProperties>({
			queryFileUri: new FormControl<string | null | undefined>(undefined),
			queryVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum BatchState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', RUNNING = 'RUNNING', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Historical state information. */
	export interface StateHistory {

		/** Output only. The state of the batch at this point in history. */
		state?: BatchState | null;

		/** Output only. Details about the state at this point in history. */
		stateMessage?: string | null;

		/** Output only. The time when the batch entered the historical state. */
		stateStartTime?: string | null;
	}

	/** Historical state information. */
	export interface StateHistoryFormProperties {

		/** Output only. The state of the batch at this point in history. */
		state: FormControl<BatchState | null | undefined>,

		/** Output only. Details about the state at this point in history. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The time when the batch entered the historical state. */
		stateStartTime: FormControl<string | null | undefined>,
	}
	export function CreateStateHistoryFormGroup() {
		return new FormGroup<StateHistoryFormProperties>({
			state: new FormControl<BatchState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			stateStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing the Batch operation. */
	export interface BatchOperationMetadata {

		/** Name of the batch for the operation. */
		batch?: string | null;

		/** Batch UUID for the operation. */
		batchUuid?: string | null;

		/** The time when the operation was created. */
		createTime?: string | null;

		/** Short description of the operation. */
		description?: string | null;

		/** The time when the operation finished. */
		doneTime?: string | null;

		/** Labels associated with the operation. */
		labels?: {[id: string]: string };

		/** The operation type. */
		operationType?: BatchOperationMetadataOperationType | null;

		/** Warnings encountered during operation execution. */
		warnings?: Array<string>;
	}

	/** Metadata describing the Batch operation. */
	export interface BatchOperationMetadataFormProperties {

		/** Name of the batch for the operation. */
		batch: FormControl<string | null | undefined>,

		/** Batch UUID for the operation. */
		batchUuid: FormControl<string | null | undefined>,

		/** The time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Short description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The time when the operation finished. */
		doneTime: FormControl<string | null | undefined>,

		/** Labels associated with the operation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The operation type. */
		operationType: FormControl<BatchOperationMetadataOperationType | null | undefined>,
	}
	export function CreateBatchOperationMetadataFormGroup() {
		return new FormGroup<BatchOperationMetadataFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined),
			batchUuid: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			doneTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationType: new FormControl<BatchOperationMetadataOperationType | null | undefined>(undefined),
		});

	}

	export enum BatchOperationMetadataOperationType { BATCH_OPERATION_TYPE_UNSPECIFIED = 'BATCH_OPERATION_TYPE_UNSPECIFIED', BATCH = 'BATCH' }


	/** Associates members, or principals, with a role. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}: All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*: All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}: A workload identity pool group. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*: All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: Deleted single identity in a workforce identity pool. For example, deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value. */
		members?: Array<string>;

		/** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner. */
		role?: string | null;
	}

	/** Associates members, or principals, with a role. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to cancel a job. */
	export interface CancelJobRequest {
	}

	/** A request to cancel a job. */
	export interface CancelJobRequestFormProperties {
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
		});

	}


	/** Describes the identifying information, config, and status of a Dataproc cluster */
	export interface Cluster {

		/** Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused. */
		clusterName?: string | null;

		/** Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster. */
		clusterUuid?: string | null;

		/** The cluster config. */
		config?: ClusterConfig;

		/** Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
		labels?: {[id: string]: string };

		/** Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
		metrics?: ClusterMetrics;

		/** Required. The Google Cloud Platform project ID that the cluster belongs to. */
		projectId?: string | null;

		/** The status of a cluster and its instances. */
		status?: ClusterStatus;

		/** Output only. The previous cluster status. */
		statusHistory?: Array<ClusterStatus>;

		/** The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). */
		virtualClusterConfig?: VirtualClusterConfig;
	}

	/** Describes the identifying information, config, and status of a Dataproc cluster */
	export interface ClusterFormProperties {

		/** Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused. */
		clusterName: FormControl<string | null | undefined>,

		/** Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The Google Cloud Platform project ID that the cluster belongs to. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The cluster config. */
	export interface ClusterConfig {

		/** Autoscaling Policy config associated with the cluster. */
		autoscalingConfig?: AutoscalingConfig;

		/** Optional. The node group settings. */
		auxiliaryNodeGroups?: Array<AuxiliaryNodeGroup>;

		/** Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		configBucket?: string | null;

		/** Dataproc metric config. */
		dataprocMetricConfig?: DataprocMetricConfig;

		/** Encryption settings for the cluster. */
		encryptionConfig?: EncryptionConfig;

		/** Endpoint config for this cluster */
		endpointConfig?: EndpointConfig;

		/** Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. */
		gceClusterConfig?: GceClusterConfig;

		/** The cluster's GKE config. */
		gkeClusterConfig?: GkeClusterConfig;

		/** Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi */
		initializationActions?: Array<NodeInitializationAction>;

		/** Specifies the cluster auto-delete schedule configuration. */
		lifecycleConfig?: LifecycleConfig;

		/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
		masterConfig?: InstanceGroupConfig;

		/** Specifies a Metastore configuration. */
		metastoreConfig?: MetastoreConfig;

		/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
		secondaryWorkerConfig?: InstanceGroupConfig;

		/** Security related configuration, including encryption, Kerberos, etc. */
		securityConfig?: SecurityConfig;

		/** Specifies the selection and config of software inside the cluster. */
		softwareConfig?: SoftwareConfig;

		/** Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		tempBucket?: string | null;

		/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
		workerConfig?: InstanceGroupConfig;
	}

	/** The cluster config. */
	export interface ClusterConfigFormProperties {

		/** Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		configBucket: FormControl<string | null | undefined>,

		/** Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		tempBucket: FormControl<string | null | undefined>,
	}
	export function CreateClusterConfigFormGroup() {
		return new FormGroup<ClusterConfigFormProperties>({
			configBucket: new FormControl<string | null | undefined>(undefined),
			tempBucket: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataproc metric config. */
	export interface DataprocMetricConfig {

		/** Required. Metrics sources to enable. */
		metrics?: Array<Metric>;
	}

	/** Dataproc metric config. */
	export interface DataprocMetricConfigFormProperties {
	}
	export function CreateDataprocMetricConfigFormGroup() {
		return new FormGroup<DataprocMetricConfigFormProperties>({
		});

	}


	/** A Dataproc custom metric. */
	export interface Metric {

		/** Optional. Specify one or more Custom metrics (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) to collect for the metric course (for the SPARK metric source (any Spark metric (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified).Provide metrics in the following format: METRIC_SOURCE: INSTANCE:GROUP:METRIC Use camelcase as appropriate.Examples: yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used Notes: Only the specified overridden metrics are collected for the metric source. For example, if one or more spark:executive metrics are listed as metric overrides, other SPARK metrics are not collected. The collection of the metrics for other enabled custom metric sources is unaffected. For example, if both SPARK andd YARN metric sources are enabled, and overrides are provided for Spark metrics only, all YARN metrics are collected. */
		metricOverrides?: Array<string>;

		/** Required. A standard set of metrics is collected unless metricOverrides are specified for the metric source (see Custom metrics (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) for more information). */
		metricSource?: MetricMetricSource | null;
	}

	/** A Dataproc custom metric. */
	export interface MetricFormProperties {

		/** Required. A standard set of metrics is collected unless metricOverrides are specified for the metric source (see Custom metrics (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) for more information). */
		metricSource: FormControl<MetricMetricSource | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			metricSource: new FormControl<MetricMetricSource | null | undefined>(undefined),
		});

	}

	export enum MetricMetricSource { METRIC_SOURCE_UNSPECIFIED = 'METRIC_SOURCE_UNSPECIFIED', MONITORING_AGENT_DEFAULTS = 'MONITORING_AGENT_DEFAULTS', HDFS = 'HDFS', SPARK = 'SPARK', YARN = 'YARN', SPARK_HISTORY_SERVER = 'SPARK_HISTORY_SERVER', HIVESERVER2 = 'HIVESERVER2', HIVEMETASTORE = 'HIVEMETASTORE', FLINK = 'FLINK' }


	/** Encryption settings for the cluster. */
	export interface EncryptionConfig {

		/** Optional. The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster. See Use CMEK with cluster data (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data) for more information. */
		gcePdKmsKeyName?: string | null;

		/** Optional. The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption. See Use CMEK with cluster data (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data) for more information.When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries */
		kmsKey?: string | null;
	}

	/** Encryption settings for the cluster. */
	export interface EncryptionConfigFormProperties {

		/** Optional. The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster. See Use CMEK with cluster data (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data) for more information. */
		gcePdKmsKeyName: FormControl<string | null | undefined>,

		/** Optional. The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption. See Use CMEK with cluster data (https://cloud.google.com//dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_cluster_data) for more information.When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries */
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			gcePdKmsKeyName: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Endpoint config for this cluster */
	export interface EndpointConfig {

		/** Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false. */
		enableHttpPortAccess?: boolean | null;

		/** Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true. */
		httpPorts?: {[id: string]: string };
	}

	/** Endpoint config for this cluster */
	export interface EndpointConfigFormProperties {

		/** Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false. */
		enableHttpPortAccess: FormControl<boolean | null | undefined>,

		/** Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true. */
		httpPorts: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEndpointConfigFormGroup() {
		return new FormGroup<EndpointConfigFormProperties>({
			enableHttpPortAccess: new FormControl<boolean | null | undefined>(undefined),
			httpPorts: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. */
	export interface GceClusterConfig {

		/** Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs) */
		confidentialInstanceConfig?: ConfidentialInstanceConfig;

		/** Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses. */
		internalIpOnly?: boolean | null;

		/** Optional. The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
		metadata?: {[id: string]: string };

		/** Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default projects/[project_id]/global/networks/default default */
		networkUri?: string | null;

		/** Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource. */
		nodeGroupAffinity?: NodeGroupAffinity;

		/** Optional. The type of IPv6 access for a cluster. */
		privateIpv6GoogleAccess?: GceClusterConfigPrivateIpv6GoogleAccess | null;

		/** Reservation Affinity for consuming Zonal reservation. */
		reservationAffinity?: ReservationAffinity;

		/** Optional. The Dataproc service account (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see VM Data Plane identity (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. */
		serviceAccount?: string | null;

		/** Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full_control */
		serviceAccountScopes?: Array<string>;

		/** Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm). */
		shieldedInstanceConfig?: ShieldedInstanceConfig;

		/** Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/[region]/subnetworks/sub0 projects/[project_id]/regions/[region]/subnetworks/sub0 sub0 */
		subnetworkUri?: string | null;

		/** The Compute Engine tags to add to all instances (see Tagging instances (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). */
		tags?: Array<string>;

		/** Optional. The Compute Engine zone where the Dataproc cluster will be located. If omitted, the service will pick a zone in the cluster's Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] [zone] */
		zoneUri?: string | null;
	}

	/** Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. */
	export interface GceClusterConfigFormProperties {

		/** Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses. */
		internalIpOnly: FormControl<boolean | null | undefined>,

		/** Optional. The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default projects/[project_id]/global/networks/default default */
		networkUri: FormControl<string | null | undefined>,

		/** Optional. The type of IPv6 access for a cluster. */
		privateIpv6GoogleAccess: FormControl<GceClusterConfigPrivateIpv6GoogleAccess | null | undefined>,

		/** Optional. The Dataproc service account (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see VM Data Plane identity (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/[region]/subnetworks/sub0 projects/[project_id]/regions/[region]/subnetworks/sub0 sub0 */
		subnetworkUri: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine zone where the Dataproc cluster will be located. If omitted, the service will pick a zone in the cluster's Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] [zone] */
		zoneUri: FormControl<string | null | undefined>,
	}
	export function CreateGceClusterConfigFormGroup() {
		return new FormGroup<GceClusterConfigFormProperties>({
			internalIpOnly: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			privateIpv6GoogleAccess: new FormControl<GceClusterConfigPrivateIpv6GoogleAccess | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			subnetworkUri: new FormControl<string | null | undefined>(undefined),
			zoneUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs) */
	export interface ConfidentialInstanceConfig {

		/** Optional. Defines whether the instance should have confidential compute enabled. */
		enableConfidentialCompute?: boolean | null;
	}

	/** Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs) */
	export interface ConfidentialInstanceConfigFormProperties {

		/** Optional. Defines whether the instance should have confidential compute enabled. */
		enableConfidentialCompute: FormControl<boolean | null | undefined>,
	}
	export function CreateConfidentialInstanceConfigFormGroup() {
		return new FormGroup<ConfidentialInstanceConfigFormProperties>({
			enableConfidentialCompute: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource. */
	export interface NodeGroupAffinity {

		/** Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1 */
		nodeGroupUri?: string | null;
	}

	/** Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource. */
	export interface NodeGroupAffinityFormProperties {

		/** Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1 */
		nodeGroupUri: FormControl<string | null | undefined>,
	}
	export function CreateNodeGroupAffinityFormGroup() {
		return new FormGroup<NodeGroupAffinityFormProperties>({
			nodeGroupUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GceClusterConfigPrivateIpv6GoogleAccess { PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = 'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED', INHERIT_FROM_SUBNETWORK = 'INHERIT_FROM_SUBNETWORK', OUTBOUND = 'OUTBOUND', BIDIRECTIONAL = 'BIDIRECTIONAL' }


	/** Reservation Affinity for consuming Zonal reservation. */
	export interface ReservationAffinity {

		/** Optional. Type of reservation to consume */
		consumeReservationType?: ReservationAffinityConsumeReservationType | null;

		/** Optional. Corresponds to the label key of reservation resource. */
		key?: string | null;

		/** Optional. Corresponds to the label values of reservation resource. */
		values?: Array<string>;
	}

	/** Reservation Affinity for consuming Zonal reservation. */
	export interface ReservationAffinityFormProperties {

		/** Optional. Type of reservation to consume */
		consumeReservationType: FormControl<ReservationAffinityConsumeReservationType | null | undefined>,

		/** Optional. Corresponds to the label key of reservation resource. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateReservationAffinityFormGroup() {
		return new FormGroup<ReservationAffinityFormProperties>({
			consumeReservationType: new FormControl<ReservationAffinityConsumeReservationType | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReservationAffinityConsumeReservationType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', NO_RESERVATION = 'NO_RESERVATION', ANY_RESERVATION = 'ANY_RESERVATION', SPECIFIC_RESERVATION = 'SPECIFIC_RESERVATION' }


	/** Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm). */
	export interface ShieldedInstanceConfig {

		/** Optional. Defines whether instances have integrity monitoring enabled. */
		enableIntegrityMonitoring?: boolean | null;

		/** Optional. Defines whether instances have Secure Boot enabled. */
		enableSecureBoot?: boolean | null;

		/** Optional. Defines whether instances have the vTPM enabled. */
		enableVtpm?: boolean | null;
	}

	/** Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm). */
	export interface ShieldedInstanceConfigFormProperties {

		/** Optional. Defines whether instances have integrity monitoring enabled. */
		enableIntegrityMonitoring: FormControl<boolean | null | undefined>,

		/** Optional. Defines whether instances have Secure Boot enabled. */
		enableSecureBoot: FormControl<boolean | null | undefined>,

		/** Optional. Defines whether instances have the vTPM enabled. */
		enableVtpm: FormControl<boolean | null | undefined>,
	}
	export function CreateShieldedInstanceConfigFormGroup() {
		return new FormGroup<ShieldedInstanceConfigFormProperties>({
			enableIntegrityMonitoring: new FormControl<boolean | null | undefined>(undefined),
			enableSecureBoot: new FormControl<boolean | null | undefined>(undefined),
			enableVtpm: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The cluster's GKE config. */
	export interface GkeClusterConfig {

		/** Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}' */
		gkeClusterTarget?: string | null;

		/** Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster. */
		namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget;

		/** Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings. */
		nodePoolTarget?: Array<GkeNodePoolTarget>;
	}

	/** The cluster's GKE config. */
	export interface GkeClusterConfigFormProperties {

		/** Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}' */
		gkeClusterTarget: FormControl<string | null | undefined>,
	}
	export function CreateGkeClusterConfigFormGroup() {
		return new FormGroup<GkeClusterConfigFormProperties>({
			gkeClusterTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster. */
	export interface NamespacedGkeDeploymentTarget {

		/** Optional. A namespace within the GKE cluster to deploy into. */
		clusterNamespace?: string | null;

		/** Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}' */
		targetGkeCluster?: string | null;
	}

	/** Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster. */
	export interface NamespacedGkeDeploymentTargetFormProperties {

		/** Optional. A namespace within the GKE cluster to deploy into. */
		clusterNamespace: FormControl<string | null | undefined>,

		/** Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}' */
		targetGkeCluster: FormControl<string | null | undefined>,
	}
	export function CreateNamespacedGkeDeploymentTargetFormGroup() {
		return new FormGroup<NamespacedGkeDeploymentTargetFormProperties>({
			clusterNamespace: new FormControl<string | null | undefined>(undefined),
			targetGkeCluster: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GKE node pools that Dataproc workloads run on. */
	export interface GkeNodePoolTarget {

		/** Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}' */
		nodePool?: string | null;

		/** The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster). */
		nodePoolConfig?: GkeNodePoolConfig;

		/** Required. The roles associated with the GKE node pool. */
		roles?: Array<string>;
	}

	/** GKE node pools that Dataproc workloads run on. */
	export interface GkeNodePoolTargetFormProperties {

		/** Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}' */
		nodePool: FormControl<string | null | undefined>,
	}
	export function CreateGkeNodePoolTargetFormGroup() {
		return new FormGroup<GkeNodePoolTargetFormProperties>({
			nodePool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster). */
	export interface GkeNodePoolConfig {

		/** GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage. */
		autoscaling?: GkeNodePoolAutoscalingConfig;

		/** Parameters that describe cluster nodes. */
		config?: GkeNodeConfig;

		/** Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the zone. */
		locations?: Array<string>;
	}

	/** The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster). */
	export interface GkeNodePoolConfigFormProperties {
	}
	export function CreateGkeNodePoolConfigFormGroup() {
		return new FormGroup<GkeNodePoolConfigFormProperties>({
		});

	}


	/** GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage. */
	export interface GkeNodePoolAutoscalingConfig {

		/** The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note: Quota must be sufficient to scale up the cluster. */
		maxNodeCount?: number | null;

		/** The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count. */
		minNodeCount?: number | null;
	}

	/** GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage. */
	export interface GkeNodePoolAutoscalingConfigFormProperties {

		/** The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note: Quota must be sufficient to scale up the cluster. */
		maxNodeCount: FormControl<number | null | undefined>,

		/** The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count. */
		minNodeCount: FormControl<number | null | undefined>,
	}
	export function CreateGkeNodePoolAutoscalingConfigFormGroup() {
		return new FormGroup<GkeNodePoolAutoscalingConfigFormProperties>({
			maxNodeCount: new FormControl<number | null | undefined>(undefined),
			minNodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Parameters that describe cluster nodes. */
	export interface GkeNodeConfig {

		/** Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to attach to each node. */
		accelerators?: Array<GkeNodePoolAcceleratorConfig>;

		/** Optional. The Customer Managed Encryption Key (CMEK) (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} */
		bootDiskKmsKey?: string | null;

		/** Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd)). */
		localSsdCount?: number | null;

		/** Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types). */
		machineType?: string | null;

		/** Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge". */
		minCpuPlatform?: string | null;

		/** Optional. Whether the nodes are created as legacy preemptible VM instances (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
		preemptible?: boolean | null;

		/** Optional. Whether the nodes are created as Spot VM instances (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
		spot?: boolean | null;
	}

	/** Parameters that describe cluster nodes. */
	export interface GkeNodeConfigFormProperties {

		/** Optional. The Customer Managed Encryption Key (CMEK) (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} */
		bootDiskKmsKey: FormControl<string | null | undefined>,

		/** Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd)). */
		localSsdCount: FormControl<number | null | undefined>,

		/** Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types). */
		machineType: FormControl<string | null | undefined>,

		/** Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge". */
		minCpuPlatform: FormControl<string | null | undefined>,

		/** Optional. Whether the nodes are created as legacy preemptible VM instances (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
		preemptible: FormControl<boolean | null | undefined>,

		/** Optional. Whether the nodes are created as Spot VM instances (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role). */
		spot: FormControl<boolean | null | undefined>,
	}
	export function CreateGkeNodeConfigFormGroup() {
		return new FormGroup<GkeNodeConfigFormProperties>({
			bootDiskKmsKey: new FormControl<string | null | undefined>(undefined),
			localSsdCount: new FormControl<number | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			minCpuPlatform: new FormControl<string | null | undefined>(undefined),
			preemptible: new FormControl<boolean | null | undefined>(undefined),
			spot: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool. */
	export interface GkeNodePoolAcceleratorConfig {

		/** The number of accelerator cards exposed to an instance. */
		acceleratorCount?: string | null;

		/** The accelerator type resource namename (see GPUs on Compute Engine). */
		acceleratorType?: string | null;

		/** Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
		gpuPartitionSize?: string | null;
	}

	/** A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool. */
	export interface GkeNodePoolAcceleratorConfigFormProperties {

		/** The number of accelerator cards exposed to an instance. */
		acceleratorCount: FormControl<string | null | undefined>,

		/** The accelerator type resource namename (see GPUs on Compute Engine). */
		acceleratorType: FormControl<string | null | undefined>,

		/** Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning). */
		gpuPartitionSize: FormControl<string | null | undefined>,
	}
	export function CreateGkeNodePoolAcceleratorConfigFormGroup() {
		return new FormGroup<GkeNodePoolAcceleratorConfigFormProperties>({
			acceleratorCount: new FormControl<string | null | undefined>(undefined),
			acceleratorType: new FormControl<string | null | undefined>(undefined),
			gpuPartitionSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an executable to run on a fully configured node and a timeout period for executable completion. */
	export interface NodeInitializationAction {

		/** Required. Cloud Storage URI of executable file. */
		executableFile?: string | null;

		/** Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period. */
		executionTimeout?: string | null;
	}

	/** Specifies an executable to run on a fully configured node and a timeout period for executable completion. */
	export interface NodeInitializationActionFormProperties {

		/** Required. Cloud Storage URI of executable file. */
		executableFile: FormControl<string | null | undefined>,

		/** Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period. */
		executionTimeout: FormControl<string | null | undefined>,
	}
	export function CreateNodeInitializationActionFormGroup() {
		return new FormGroup<NodeInitializationActionFormProperties>({
			executableFile: new FormControl<string | null | undefined>(undefined),
			executionTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the cluster auto-delete schedule configuration. */
	export interface LifecycleConfig {

		/** Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		autoDeleteTime?: string | null;

		/** Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		autoDeleteTtl?: string | null;

		/** Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		idleDeleteTtl?: string | null;

		/** Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		idleStartTime?: string | null;
	}

	/** Specifies the cluster auto-delete schedule configuration. */
	export interface LifecycleConfigFormProperties {

		/** Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		autoDeleteTime: FormControl<string | null | undefined>,

		/** Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		autoDeleteTtl: FormControl<string | null | undefined>,

		/** Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		idleDeleteTtl: FormControl<string | null | undefined>,

		/** Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		idleStartTime: FormControl<string | null | undefined>,
	}
	export function CreateLifecycleConfigFormGroup() {
		return new FormGroup<LifecycleConfigFormProperties>({
			autoDeleteTime: new FormControl<string | null | undefined>(undefined),
			autoDeleteTtl: new FormControl<string | null | undefined>(undefined),
			idleDeleteTtl: new FormControl<string | null | undefined>(undefined),
			idleStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security related configuration, including encryption, Kerberos, etc. */
	export interface SecurityConfig {

		/** Identity related configuration, including service account based secure multi-tenancy user mappings. */
		identityConfig?: IdentityConfig;

		/** Specifies Kerberos related configuration. */
		kerberosConfig?: KerberosConfig;
	}

	/** Security related configuration, including encryption, Kerberos, etc. */
	export interface SecurityConfigFormProperties {
	}
	export function CreateSecurityConfigFormGroup() {
		return new FormGroup<SecurityConfigFormProperties>({
		});

	}


	/** Identity related configuration, including service account based secure multi-tenancy user mappings. */
	export interface IdentityConfig {

		/** Required. Map of user to service account. */
		userServiceAccountMapping?: {[id: string]: string };
	}

	/** Identity related configuration, including service account based secure multi-tenancy user mappings. */
	export interface IdentityConfigFormProperties {

		/** Required. Map of user to service account. */
		userServiceAccountMapping: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateIdentityConfigFormGroup() {
		return new FormGroup<IdentityConfigFormProperties>({
			userServiceAccountMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Specifies Kerberos related configuration. */
	export interface KerberosConfig {

		/** Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
		crossRealmTrustAdminServer?: string | null;

		/** Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
		crossRealmTrustKdc?: string | null;

		/** Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. */
		crossRealmTrustRealm?: string | null;

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship. */
		crossRealmTrustSharedPasswordUri?: string | null;

		/** Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster. */
		enableKerberos?: boolean | null;

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. */
		kdcDbKeyUri?: string | null;

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc. */
		keyPasswordUri?: string | null;

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc. */
		keystorePasswordUri?: string | null;

		/** Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
		keystoreUri?: string | null;

		/** Optional. The URI of the KMS key used to encrypt sensitive files. */
		kmsKeyUri?: string | null;

		/** Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. */
		realm?: string | null;

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password. */
		rootPrincipalPasswordUri?: string | null;

		/** Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used. */
		tgtLifetimeHours?: number | null;

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc. */
		truststorePasswordUri?: string | null;

		/** Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
		truststoreUri?: string | null;
	}

	/** Specifies Kerberos related configuration. */
	export interface KerberosConfigFormProperties {

		/** Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
		crossRealmTrustAdminServer: FormControl<string | null | undefined>,

		/** Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
		crossRealmTrustKdc: FormControl<string | null | undefined>,

		/** Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. */
		crossRealmTrustRealm: FormControl<string | null | undefined>,

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship. */
		crossRealmTrustSharedPasswordUri: FormControl<string | null | undefined>,

		/** Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster. */
		enableKerberos: FormControl<boolean | null | undefined>,

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. */
		kdcDbKeyUri: FormControl<string | null | undefined>,

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc. */
		keyPasswordUri: FormControl<string | null | undefined>,

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc. */
		keystorePasswordUri: FormControl<string | null | undefined>,

		/** Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
		keystoreUri: FormControl<string | null | undefined>,

		/** Optional. The URI of the KMS key used to encrypt sensitive files. */
		kmsKeyUri: FormControl<string | null | undefined>,

		/** Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. */
		realm: FormControl<string | null | undefined>,

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password. */
		rootPrincipalPasswordUri: FormControl<string | null | undefined>,

		/** Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used. */
		tgtLifetimeHours: FormControl<number | null | undefined>,

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc. */
		truststorePasswordUri: FormControl<string | null | undefined>,

		/** Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
		truststoreUri: FormControl<string | null | undefined>,
	}
	export function CreateKerberosConfigFormGroup() {
		return new FormGroup<KerberosConfigFormProperties>({
			crossRealmTrustAdminServer: new FormControl<string | null | undefined>(undefined),
			crossRealmTrustKdc: new FormControl<string | null | undefined>(undefined),
			crossRealmTrustRealm: new FormControl<string | null | undefined>(undefined),
			crossRealmTrustSharedPasswordUri: new FormControl<string | null | undefined>(undefined),
			enableKerberos: new FormControl<boolean | null | undefined>(undefined),
			kdcDbKeyUri: new FormControl<string | null | undefined>(undefined),
			keyPasswordUri: new FormControl<string | null | undefined>(undefined),
			keystorePasswordUri: new FormControl<string | null | undefined>(undefined),
			keystoreUri: new FormControl<string | null | undefined>(undefined),
			kmsKeyUri: new FormControl<string | null | undefined>(undefined),
			realm: new FormControl<string | null | undefined>(undefined),
			rootPrincipalPasswordUri: new FormControl<string | null | undefined>(undefined),
			tgtLifetimeHours: new FormControl<number | null | undefined>(undefined),
			truststorePasswordUri: new FormControl<string | null | undefined>(undefined),
			truststoreUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the selection and config of software inside the cluster. */
	export interface SoftwareConfig {

		/** Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version. */
		imageVersion?: string | null;

		/** Optional. The set of components to activate on the cluster. */
		optionalComponents?: Array<string>;

		/** Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
		properties?: {[id: string]: string };
	}

	/** Specifies the selection and config of software inside the cluster. */
	export interface SoftwareConfigFormProperties {

		/** Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version. */
		imageVersion: FormControl<string | null | undefined>,

		/** Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSoftwareConfigFormGroup() {
		return new FormGroup<SoftwareConfigFormProperties>({
			imageVersion: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
	export interface ClusterMetrics {

		/** The HDFS metrics. */
		hdfsMetrics?: {[id: string]: string };

		/** YARN metrics. */
		yarnMetrics?: {[id: string]: string };
	}

	/** Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
	export interface ClusterMetricsFormProperties {

		/** The HDFS metrics. */
		hdfsMetrics: FormControl<{[id: string]: string } | null | undefined>,

		/** YARN metrics. */
		yarnMetrics: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateClusterMetricsFormGroup() {
		return new FormGroup<ClusterMetricsFormProperties>({
			hdfsMetrics: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			yarnMetrics: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The status of a cluster and its instances. */
	export interface ClusterStatus {

		/** Optional. Output only. Details of cluster's state. */
		detail?: string | null;

		/** Output only. The cluster's state. */
		state?: ClusterStatusState | null;

		/** Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		stateStartTime?: string | null;

		/** Output only. Additional state information that includes status reported by the agent. */
		substate?: ClusterStatusSubstate | null;
	}

	/** The status of a cluster and its instances. */
	export interface ClusterStatusFormProperties {

		/** Optional. Output only. Details of cluster's state. */
		detail: FormControl<string | null | undefined>,

		/** Output only. The cluster's state. */
		state: FormControl<ClusterStatusState | null | undefined>,

		/** Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		stateStartTime: FormControl<string | null | undefined>,

		/** Output only. Additional state information that includes status reported by the agent. */
		substate: FormControl<ClusterStatusSubstate | null | undefined>,
	}
	export function CreateClusterStatusFormGroup() {
		return new FormGroup<ClusterStatusFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ClusterStatusState | null | undefined>(undefined),
			stateStartTime: new FormControl<string | null | undefined>(undefined),
			substate: new FormControl<ClusterStatusSubstate | null | undefined>(undefined),
		});

	}

	export enum ClusterStatusState { UNKNOWN = 'UNKNOWN', CREATING = 'CREATING', RUNNING = 'RUNNING', ERROR = 'ERROR', ERROR_DUE_TO_UPDATE = 'ERROR_DUE_TO_UPDATE', DELETING = 'DELETING', UPDATING = 'UPDATING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', STARTING = 'STARTING', REPAIRING = 'REPAIRING' }

	export enum ClusterStatusSubstate { UNSPECIFIED = 'UNSPECIFIED', UNHEALTHY = 'UNHEALTHY', STALE_STATUS = 'STALE_STATUS' }


	/** The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). */
	export interface VirtualClusterConfig {

		/** Auxiliary services configuration for a Cluster. */
		auxiliaryServicesConfig?: AuxiliaryServicesConfig;

		/** The configuration for running the Dataproc cluster on Kubernetes. */
		kubernetesClusterConfig?: KubernetesClusterConfig;

		/** Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		stagingBucket?: string | null;
	}

	/** The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). */
	export interface VirtualClusterConfigFormProperties {

		/** Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. */
		stagingBucket: FormControl<string | null | undefined>,
	}
	export function CreateVirtualClusterConfigFormGroup() {
		return new FormGroup<VirtualClusterConfigFormProperties>({
			stagingBucket: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for running the Dataproc cluster on Kubernetes. */
	export interface KubernetesClusterConfig {

		/** The cluster's GKE config. */
		gkeClusterConfig?: GkeClusterConfig;

		/** Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used. */
		kubernetesNamespace?: string | null;

		/** The software configuration for this Dataproc cluster running on Kubernetes. */
		kubernetesSoftwareConfig?: KubernetesSoftwareConfig;
	}

	/** The configuration for running the Dataproc cluster on Kubernetes. */
	export interface KubernetesClusterConfigFormProperties {

		/** Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used. */
		kubernetesNamespace: FormControl<string | null | undefined>,
	}
	export function CreateKubernetesClusterConfigFormGroup() {
		return new FormGroup<KubernetesClusterConfigFormProperties>({
			kubernetesNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The software configuration for this Dataproc cluster running on Kubernetes. */
	export interface KubernetesSoftwareConfig {

		/** The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified. */
		componentVersion?: {[id: string]: string };

		/** The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
		properties?: {[id: string]: string };
	}

	/** The software configuration for this Dataproc cluster running on Kubernetes. */
	export interface KubernetesSoftwareConfigFormProperties {

		/** The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified. */
		componentVersion: FormControl<{[id: string]: string } | null | undefined>,

		/** The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateKubernetesSoftwareConfigFormGroup() {
		return new FormGroup<KubernetesSoftwareConfigFormProperties>({
			componentVersion: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The cluster operation triggered by a workflow. */
	export interface ClusterOperation {

		/** Output only. Indicates the operation is done. */
		done?: boolean | null;

		/** Output only. Error, if operation failed. */
		error?: string | null;

		/** Output only. The id of the cluster operation. */
		operationId?: string | null;
	}

	/** The cluster operation triggered by a workflow. */
	export interface ClusterOperationFormProperties {

		/** Output only. Indicates the operation is done. */
		done: FormControl<boolean | null | undefined>,

		/** Output only. Error, if operation failed. */
		error: FormControl<string | null | undefined>,

		/** Output only. The id of the cluster operation. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationFormGroup() {
		return new FormGroup<ClusterOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing the operation. */
	export interface ClusterOperationMetadata {

		/** Output only. Child operation ids */
		childOperationIds?: Array<string>;

		/** Output only. Name of the cluster for the operation. */
		clusterName?: string | null;

		/** Output only. Cluster UUID for the operation. */
		clusterUuid?: string | null;

		/** Output only. Short description of operation. */
		description?: string | null;

		/** Output only. Labels associated with the operation */
		labels?: {[id: string]: string };

		/** Output only. The operation type. */
		operationType?: string | null;

		/** The status of the operation. */
		status?: ClusterOperationStatus;

		/** Output only. The previous operation status. */
		statusHistory?: Array<ClusterOperationStatus>;

		/** Output only. Errors encountered during operation execution. */
		warnings?: Array<string>;
	}

	/** Metadata describing the operation. */
	export interface ClusterOperationMetadataFormProperties {

		/** Output only. Name of the cluster for the operation. */
		clusterName: FormControl<string | null | undefined>,

		/** Output only. Cluster UUID for the operation. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Output only. Short description of operation. */
		description: FormControl<string | null | undefined>,

		/** Output only. Labels associated with the operation */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The operation type. */
		operationType: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationMetadataFormGroup() {
		return new FormGroup<ClusterOperationMetadataFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the operation. */
	export interface ClusterOperationStatus {

		/** Output only. A message containing any operation metadata details. */
		details?: string | null;

		/** Output only. A message containing the detailed operation state. */
		innerState?: string | null;

		/** Output only. A message containing the operation state. */
		state?: ClusterOperationStatusState | null;

		/** Output only. The time this state was entered. */
		stateStartTime?: string | null;
	}

	/** The status of the operation. */
	export interface ClusterOperationStatusFormProperties {

		/** Output only. A message containing any operation metadata details. */
		details: FormControl<string | null | undefined>,

		/** Output only. A message containing the detailed operation state. */
		innerState: FormControl<string | null | undefined>,

		/** Output only. A message containing the operation state. */
		state: FormControl<ClusterOperationStatusState | null | undefined>,

		/** Output only. The time this state was entered. */
		stateStartTime: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationStatusFormGroup() {
		return new FormGroup<ClusterOperationStatusFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			innerState: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ClusterOperationStatusState | null | undefined>(undefined),
			stateStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterOperationStatusState { UNKNOWN = 'UNKNOWN', PENDING = 'PENDING', RUNNING = 'RUNNING', DONE = 'DONE' }


	/** A selector that chooses target cluster for jobs based on metadata. */
	export interface ClusterSelector {

		/** Required. The cluster labels. Cluster must have all labels to match. */
		clusterLabels?: {[id: string]: string };

		/** Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used. */
		zone?: string | null;
	}

	/** A selector that chooses target cluster for jobs based on metadata. */
	export interface ClusterSelectorFormProperties {

		/** Required. The cluster labels. Cluster must have all labels to match. */
		clusterLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateClusterSelectorFormGroup() {
		return new FormGroup<ClusterSelectorFormProperties>({
			clusterLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to collect cluster diagnostic information. */
	export interface DiagnoseClusterRequest {

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		diagnosisInterval?: Interval;

		/** Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job} */
		job?: string | null;

		/** Optional. Specifies a list of jobs on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job} */
		jobs?: Array<string>;

		/** Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of the bucket */
		tarballAccess?: DiagnoseClusterRequestTarballAccess | null;

		/** Optional. (Optional) The output Cloud Storage directory for the diagnostic tarball. If not specified, a task-specific directory in the cluster's staging bucket will be used. */
		tarballGcsDir?: string | null;

		/** Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed. */
		yarnApplicationId?: string | null;

		/** Optional. Specifies a list of yarn applications on which diagnosis is to be performed. */
		yarnApplicationIds?: Array<string>;
	}

	/** A request to collect cluster diagnostic information. */
	export interface DiagnoseClusterRequestFormProperties {

		/** Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format: projects/{project}/regions/{region}/jobs/{job} */
		job: FormControl<string | null | undefined>,

		/** Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of the bucket */
		tarballAccess: FormControl<DiagnoseClusterRequestTarballAccess | null | undefined>,

		/** Optional. (Optional) The output Cloud Storage directory for the diagnostic tarball. If not specified, a task-specific directory in the cluster's staging bucket will be used. */
		tarballGcsDir: FormControl<string | null | undefined>,

		/** Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed. */
		yarnApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateDiagnoseClusterRequestFormGroup() {
		return new FormGroup<DiagnoseClusterRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined),
			tarballAccess: new FormControl<DiagnoseClusterRequestTarballAccess | null | undefined>(undefined),
			tarballGcsDir: new FormControl<string | null | undefined>(undefined),
			yarnApplicationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface Interval {

		/** Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end. */
		endTime?: string | null;

		/** Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime?: string | null;
	}

	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface IntervalFormProperties {

		/** Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateIntervalFormGroup() {
		return new FormGroup<IntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiagnoseClusterRequestTarballAccess { TARBALL_ACCESS_UNSPECIFIED = 'TARBALL_ACCESS_UNSPECIFIED', GOOGLE_CLOUD_SUPPORT = 'GOOGLE_CLOUD_SUPPORT', GOOGLE_DATAPROC_DIAGNOSE = 'GOOGLE_DATAPROC_DIAGNOSE' }


	/** The location of diagnostic output. */
	export interface DiagnoseClusterResults {

		/** Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics. */
		outputUri?: string | null;
	}

	/** The location of diagnostic output. */
	export interface DiagnoseClusterResultsFormProperties {

		/** Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics. */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateDiagnoseClusterResultsFormGroup() {
		return new FormGroup<DiagnoseClusterResultsFormProperties>({
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Driver scheduling configuration. */
	export interface DriverSchedulingConfig {

		/** Required. The amount of memory in MB the driver is requesting. */
		memoryMb?: number | null;

		/** Required. The number of vCPUs the driver is requesting. */
		vcores?: number | null;
	}

	/** Driver scheduling configuration. */
	export interface DriverSchedulingConfigFormProperties {

		/** Required. The amount of memory in MB the driver is requesting. */
		memoryMb: FormControl<number | null | undefined>,

		/** Required. The number of vCPUs the driver is requesting. */
		vcores: FormControl<number | null | undefined>,
	}
	export function CreateDriverSchedulingConfigFormGroup() {
		return new FormGroup<DriverSchedulingConfigFormProperties>({
			memoryMb: new FormControl<number | null | undefined>(undefined),
			vcores: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A Dataproc job for running Apache Flink applications on YARN. */
	export interface FlinkJob {

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision might occur that causes an incorrect job submission. */
		args?: Array<string>;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Flink driver and tasks. */
		jarFileUris?: Array<string>;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jarFileUris. */
		mainClass?: string | null;

		/** The HCFS URI of the jar file that contains the main class. */
		mainJarFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure Flink. Properties that conflict with values set by the Dataproc API might beoverwritten. Can include properties set in/etc/flink/conf/flink-defaults.conf and classes in user code. */
		properties?: {[id: string]: string };

		/** Optional. HCFS URI of the savepoint, which contains the last saved progress for starting the current job. */
		savepointUri?: string | null;
	}

	/** A Dataproc job for running Apache Flink applications on YARN. */
	export interface FlinkJobFormProperties {

		/** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jarFileUris. */
		mainClass: FormControl<string | null | undefined>,

		/** The HCFS URI of the jar file that contains the main class. */
		mainJarFileUri: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values, used to configure Flink. Properties that conflict with values set by the Dataproc API might beoverwritten. Can include properties set in/etc/flink/conf/flink-defaults.conf and classes in user code. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. HCFS URI of the savepoint, which contains the last saved progress for starting the current job. */
		savepointUri: FormControl<string | null | undefined>,
	}
	export function CreateFlinkJobFormGroup() {
		return new FormGroup<FlinkJobFormProperties>({
			mainClass: new FormControl<string | null | undefined>(undefined),
			mainJarFileUri: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			savepointUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The runtime logging config of the job. */
	export interface LoggingConfig {

		/** The per-package log levels for the driver. This can include "root" package name to configure rootLogger. Examples: - 'com.google = FATAL' - 'root = INFO' - 'org.apache = DEBUG' */
		driverLogLevels?: {[id: string]: LoggingConfigDriverLogLevels };
	}

	/** The runtime logging config of the job. */
	export interface LoggingConfigFormProperties {

		/** The per-package log levels for the driver. This can include "root" package name to configure rootLogger. Examples: - 'com.google = FATAL' - 'root = INFO' - 'org.apache = DEBUG' */
		driverLogLevels: FormControl<{[id: string]: LoggingConfigDriverLogLevels } | null | undefined>,
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
			driverLogLevels: new FormControl<{[id: string]: LoggingConfigDriverLogLevels } | null | undefined>(undefined),
		});

	}

	export enum LoggingConfigDriverLogLevels { LEVEL_UNSPECIFIED = 'LEVEL_UNSPECIFIED', ALL = 'ALL', TRACE = 'TRACE', DEBUG = 'DEBUG', INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR', FATAL = 'FATAL', OFF = 'OFF' }


	/** Request message for GetIamPolicy method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for GetIamPolicy method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Encryption settings for encrypting workflow template job arguments. */
	export interface GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig {

		/** Optional. The Cloud KMS key name to use for encrypting workflow template job arguments.When this this key is provided, the following workflow template job arguments (https://cloud.google.com/dataproc/docs/concepts/workflows/use-workflows#adding_jobs_to_a_template), if present, are CMEK encrypted (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_workflow_template_data): FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries */
		kmsKey?: string | null;
	}

	/** Encryption settings for encrypting workflow template job arguments. */
	export interface GoogleCloudDataprocV1WorkflowTemplateEncryptionConfigFormProperties {

		/** Optional. The Cloud KMS key name to use for encrypting workflow template job arguments.When this this key is provided, the following workflow template job arguments (https://cloud.google.com/dataproc/docs/concepts/workflows/use-workflows#adding_jobs_to_a_template), if present, are CMEK encrypted (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_workflow_template_data): FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries */
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataprocV1WorkflowTemplateEncryptionConfigFormGroup() {
		return new FormGroup<GoogleCloudDataprocV1WorkflowTemplateEncryptionConfigFormProperties>({
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html). */
	export interface HadoopJob {

		/** Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip. */
		archiveUris?: Array<string>;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision might occur that causes an incorrect job submission. */
		args?: Array<string>;

		/** Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks. */
		fileUris?: Array<string>;

		/** Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks. */
		jarFileUris?: Array<string>;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris. */
		mainClass?: string | null;

		/** The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar' */
		mainJarFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code. */
		properties?: {[id: string]: string };
	}

	/** A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html). */
	export interface HadoopJobFormProperties {

		/** The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris. */
		mainClass: FormControl<string | null | undefined>,

		/** The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar' */
		mainJarFileUri: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateHadoopJobFormGroup() {
		return new FormGroup<HadoopJobFormProperties>({
			mainClass: new FormControl<string | null | undefined>(undefined),
			mainJarFileUri: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
	export interface HiveJob {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure?: boolean | null;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs. */
		jarFileUris?: Array<string>;

		/** Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code. */
		properties?: {[id: string]: string };

		/** The HCFS URI of the script that contains Hive queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList;

		/** Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). */
		scriptVariables?: {[id: string]: string };
	}

	/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
	export interface HiveJobFormProperties {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure: FormControl<boolean | null | undefined>,

		/** Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The HCFS URI of the script that contains Hive queries. */
		queryFileUri: FormControl<string | null | undefined>,

		/** Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). */
		scriptVariables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateHiveJobFormGroup() {
		return new FormGroup<HiveJobFormProperties>({
			continueOnFailure: new FormControl<boolean | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryFileUri: new FormControl<string | null | undefined>(undefined),
			scriptVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A list of queries to run on a cluster. */
	export interface QueryList {

		/** Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } */
		queries?: Array<string>;
	}

	/** A list of queries to run on a cluster. */
	export interface QueryListFormProperties {
	}
	export function CreateQueryListFormGroup() {
		return new FormGroup<QueryListFormProperties>({
		});

	}


	/** A request to inject credentials into a cluster. */
	export interface InjectCredentialsRequest {

		/** Required. The cluster UUID. */
		clusterUuid?: string | null;

		/** Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs. */
		credentialsCiphertext?: string | null;
	}

	/** A request to inject credentials into a cluster. */
	export interface InjectCredentialsRequestFormProperties {

		/** Required. The cluster UUID. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs. */
		credentialsCiphertext: FormControl<string | null | undefined>,
	}
	export function CreateInjectCredentialsRequestFormGroup() {
		return new FormGroup<InjectCredentialsRequestFormProperties>({
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			credentialsCiphertext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to instantiate a workflow template. */
	export interface InstantiateWorkflowTemplateRequest {

		/** Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters. */
		parameters?: {[id: string]: string };

		/** Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;

		/** Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template. */
		version?: number | null;
	}

	/** A request to instantiate a workflow template. */
	export interface InstantiateWorkflowTemplateRequestFormProperties {

		/** Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId: FormControl<string | null | undefined>,

		/** Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateInstantiateWorkflowTemplateRequestFormGroup() {
		return new FormGroup<InstantiateWorkflowTemplateRequestFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Dataproc job resource. */
	export interface Job {

		/** Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled. */
		done?: boolean | null;

		/** Output only. If present, the location of miscellaneous control files which can be used as part of job setup and handling. If not present, control files might be placed in the same location as driver_output_uri. */
		driverControlFilesUri?: string | null;

		/** Output only. A URI pointing to the location of the stdout of the job's driver program. */
		driverOutputResourceUri?: string | null;

		/** Driver scheduling configuration. */
		driverSchedulingConfig?: DriverSchedulingConfig;

		/** A Dataproc job for running Apache Flink applications on YARN. */
		flinkJob?: FlinkJob;

		/** A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html). */
		hadoopJob?: HadoopJob;

		/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
		hiveJob?: HiveJob;

		/** Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that might be reused over time. */
		jobUuid?: string | null;

		/** Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job. */
		labels?: {[id: string]: string };

		/** A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN. */
		pigJob?: PigJob;

		/** Dataproc job config. */
		placement?: JobPlacement;

		/** A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster. */
		prestoJob?: PrestoJob;

		/** A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN. */
		pysparkJob?: PySparkJob;

		/** Encapsulates the full scoping used to reference a job. */
		reference?: JobReference;

		/** Job scheduling options. */
		scheduling?: JobScheduling;

		/** A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN. */
		sparkJob?: SparkJob;

		/** A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN. */
		sparkRJob?: SparkRJob;

		/** A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries. */
		sparkSqlJob?: SparkSqlJob;

		/** Dataproc job status. */
		status?: JobStatus;

		/** Output only. The previous job status. */
		statusHistory?: Array<JobStatus>;

		/** A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster. */
		trinoJob?: TrinoJob;

		/** Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It might be changed before final release. */
		yarnApplications?: Array<YarnApplication>;
	}

	/** A Dataproc job resource. */
	export interface JobFormProperties {

		/** Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled. */
		done: FormControl<boolean | null | undefined>,

		/** Output only. If present, the location of miscellaneous control files which can be used as part of job setup and handling. If not present, control files might be placed in the same location as driver_output_uri. */
		driverControlFilesUri: FormControl<string | null | undefined>,

		/** Output only. A URI pointing to the location of the stdout of the job's driver program. */
		driverOutputResourceUri: FormControl<string | null | undefined>,

		/** Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that might be reused over time. */
		jobUuid: FormControl<string | null | undefined>,

		/** Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			driverControlFilesUri: new FormControl<string | null | undefined>(undefined),
			driverOutputResourceUri: new FormControl<string | null | undefined>(undefined),
			jobUuid: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN. */
	export interface PigJob {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure?: boolean | null;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs. */
		jarFileUris?: Array<string>;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code. */
		properties?: {[id: string]: string };

		/** The HCFS URI of the script that contains the Pig queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList;

		/** Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]). */
		scriptVariables?: {[id: string]: string };
	}

	/** A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN. */
	export interface PigJobFormProperties {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure: FormControl<boolean | null | undefined>,

		/** Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The HCFS URI of the script that contains the Pig queries. */
		queryFileUri: FormControl<string | null | undefined>,

		/** Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]). */
		scriptVariables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePigJobFormGroup() {
		return new FormGroup<PigJobFormProperties>({
			continueOnFailure: new FormControl<boolean | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryFileUri: new FormControl<string | null | undefined>(undefined),
			scriptVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Dataproc job config. */
	export interface JobPlacement {

		/** Optional. Cluster labels to identify a cluster where the job will be submitted. */
		clusterLabels?: {[id: string]: string };

		/** Required. The name of the cluster where the job will be submitted. */
		clusterName?: string | null;

		/** Output only. A cluster UUID generated by the Dataproc service when the job is submitted. */
		clusterUuid?: string | null;
	}

	/** Dataproc job config. */
	export interface JobPlacementFormProperties {

		/** Optional. Cluster labels to identify a cluster where the job will be submitted. */
		clusterLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The name of the cluster where the job will be submitted. */
		clusterName: FormControl<string | null | undefined>,

		/** Output only. A cluster UUID generated by the Dataproc service when the job is submitted. */
		clusterUuid: FormControl<string | null | undefined>,
	}
	export function CreateJobPlacementFormGroup() {
		return new FormGroup<JobPlacementFormProperties>({
			clusterLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterUuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster. */
	export interface PrestoJob {

		/** Optional. Presto client tags to attach to this query */
		clientTags?: Array<string>;

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure?: boolean | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats */
		outputFormat?: string | null;

		/** Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI */
		properties?: {[id: string]: string };

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList;
	}

	/** A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster. */
	export interface PrestoJobFormProperties {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure: FormControl<boolean | null | undefined>,

		/** Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats */
		outputFormat: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri: FormControl<string | null | undefined>,
	}
	export function CreatePrestoJobFormGroup() {
		return new FormGroup<PrestoJobFormProperties>({
			continueOnFailure: new FormControl<boolean | null | undefined>(undefined),
			outputFormat: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN. */
	export interface PySparkJob {

		/** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
		args?: Array<string>;

		/** Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
		fileUris?: Array<string>;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. */
		jarFileUris?: Array<string>;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. */
		mainPythonFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties?: {[id: string]: string };

		/** Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. */
		pythonFileUris?: Array<string>;
	}

	/** A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN. */
	export interface PySparkJobFormProperties {

		/** Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. */
		mainPythonFileUri: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePySparkJobFormGroup() {
		return new FormGroup<PySparkJobFormProperties>({
			mainPythonFileUri: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Encapsulates the full scoping used to reference a job. */
	export interface JobReference {

		/** Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server. */
		jobId?: string | null;

		/** Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID. */
		projectId?: string | null;
	}

	/** Encapsulates the full scoping used to reference a job. */
	export interface JobReferenceFormProperties {

		/** Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server. */
		jobId: FormControl<string | null | undefined>,

		/** Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateJobReferenceFormGroup() {
		return new FormGroup<JobReferenceFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job scheduling options. */
	export interface JobScheduling {

		/** Optional. Maximum number of times per hour a driver can be restarted as a result of driver exiting with non-zero code before job is reported failed.A job might be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). */
		maxFailuresPerHour?: number | null;

		/** Optional. Maximum total number of times a driver can be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). */
		maxFailuresTotal?: number | null;
	}

	/** Job scheduling options. */
	export interface JobSchedulingFormProperties {

		/** Optional. Maximum number of times per hour a driver can be restarted as a result of driver exiting with non-zero code before job is reported failed.A job might be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). */
		maxFailuresPerHour: FormControl<number | null | undefined>,

		/** Optional. Maximum total number of times a driver can be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). */
		maxFailuresTotal: FormControl<number | null | undefined>,
	}
	export function CreateJobSchedulingFormGroup() {
		return new FormGroup<JobSchedulingFormProperties>({
			maxFailuresPerHour: new FormControl<number | null | undefined>(undefined),
			maxFailuresTotal: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN. */
	export interface SparkJob {

		/** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
		args?: Array<string>;

		/** Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
		fileUris?: Array<string>;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. */
		jarFileUris?: Array<string>;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in SparkJob.jar_file_uris. */
		mainClass?: string | null;

		/** The HCFS URI of the jar file that contains the main class. */
		mainJarFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties?: {[id: string]: string };
	}

	/** A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN. */
	export interface SparkJobFormProperties {

		/** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in SparkJob.jar_file_uris. */
		mainClass: FormControl<string | null | undefined>,

		/** The HCFS URI of the jar file that contains the main class. */
		mainJarFileUri: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSparkJobFormGroup() {
		return new FormGroup<SparkJobFormProperties>({
			mainClass: new FormControl<string | null | undefined>(undefined),
			mainJarFileUri: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN. */
	export interface SparkRJob {

		/** Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
		args?: Array<string>;

		/** Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. */
		fileUris?: Array<string>;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** Required. The HCFS URI of the main R file to use as the driver. Must be a .R file. */
		mainRFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties?: {[id: string]: string };
	}

	/** A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN. */
	export interface SparkRJobFormProperties {

		/** Required. The HCFS URI of the main R file to use as the driver. Must be a .R file. */
		mainRFileUri: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSparkRJobFormGroup() {
		return new FormGroup<SparkRJobFormProperties>({
			mainRFileUri: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries. */
	export interface SparkSqlJob {

		/** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
		jarFileUris?: Array<string>;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API might be overwritten. */
		properties?: {[id: string]: string };

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList;

		/** Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
		scriptVariables?: {[id: string]: string };
	}

	/** A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries. */
	export interface SparkSqlJobFormProperties {

		/** Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API might be overwritten. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri: FormControl<string | null | undefined>,

		/** Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
		scriptVariables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSparkSqlJobFormGroup() {
		return new FormGroup<SparkSqlJobFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryFileUri: new FormControl<string | null | undefined>(undefined),
			scriptVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Dataproc job status. */
	export interface JobStatus {

		/** Optional. Output only. Job state details, such as an error description if the state is ERROR. */
		details?: string | null;

		/** Output only. A state message specifying the overall job state. */
		state?: JobStatusState | null;

		/** Output only. The time when this state was entered. */
		stateStartTime?: string | null;

		/** Output only. Additional state information, which includes status reported by the agent. */
		substate?: JobStatusSubstate | null;
	}

	/** Dataproc job status. */
	export interface JobStatusFormProperties {

		/** Optional. Output only. Job state details, such as an error description if the state is ERROR. */
		details: FormControl<string | null | undefined>,

		/** Output only. A state message specifying the overall job state. */
		state: FormControl<JobStatusState | null | undefined>,

		/** Output only. The time when this state was entered. */
		stateStartTime: FormControl<string | null | undefined>,

		/** Output only. Additional state information, which includes status reported by the agent. */
		substate: FormControl<JobStatusSubstate | null | undefined>,
	}
	export function CreateJobStatusFormGroup() {
		return new FormGroup<JobStatusFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<JobStatusState | null | undefined>(undefined),
			stateStartTime: new FormControl<string | null | undefined>(undefined),
			substate: new FormControl<JobStatusSubstate | null | undefined>(undefined),
		});

	}

	export enum JobStatusState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', SETUP_DONE = 'SETUP_DONE', RUNNING = 'RUNNING', CANCEL_PENDING = 'CANCEL_PENDING', CANCEL_STARTED = 'CANCEL_STARTED', CANCELLED = 'CANCELLED', DONE = 'DONE', ERROR = 'ERROR', ATTEMPT_FAILURE = 'ATTEMPT_FAILURE' }

	export enum JobStatusSubstate { UNSPECIFIED = 'UNSPECIFIED', SUBMITTED = 'SUBMITTED', QUEUED = 'QUEUED', STALE_STATUS = 'STALE_STATUS' }


	/** A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster. */
	export interface TrinoJob {

		/** Optional. Trino client tags to attach to this query */
		clientTags?: Array<string>;

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure?: boolean | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig;

		/** Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats */
		outputFormat?: string | null;

		/** Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI */
		properties?: {[id: string]: string };

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList;
	}

	/** A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster. */
	export interface TrinoJobFormProperties {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure: FormControl<boolean | null | undefined>,

		/** Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats */
		outputFormat: FormControl<string | null | undefined>,

		/** Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri: FormControl<string | null | undefined>,
	}
	export function CreateTrinoJobFormGroup() {
		return new FormGroup<TrinoJobFormProperties>({
			continueOnFailure: new FormControl<boolean | null | undefined>(undefined),
			outputFormat: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
	export interface YarnApplication {

		/** Required. The application name. */
		name?: string | null;

		/** Required. The numerical progress of the application, from 1 to 100. */
		progress?: number | null;

		/** Required. The application state. */
		state?: YarnApplicationState | null;

		/** Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access. */
		trackingUrl?: string | null;
	}

	/** A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
	export interface YarnApplicationFormProperties {

		/** Required. The application name. */
		name: FormControl<string | null | undefined>,

		/** Required. The numerical progress of the application, from 1 to 100. */
		progress: FormControl<number | null | undefined>,

		/** Required. The application state. */
		state: FormControl<YarnApplicationState | null | undefined>,

		/** Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateYarnApplicationFormGroup() {
		return new FormGroup<YarnApplicationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<YarnApplicationState | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum YarnApplicationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', NEW = 'NEW', NEW_SAVING = 'NEW_SAVING', SUBMITTED = 'SUBMITTED', ACCEPTED = 'ACCEPTED', RUNNING = 'RUNNING', FINISHED = 'FINISHED', FAILED = 'FAILED', KILLED = 'KILLED' }


	/** Job Operation metadata. */
	export interface JobMetadata {

		/** Output only. The job id. */
		jobId?: string | null;

		/** Output only. Operation type. */
		operationType?: string | null;

		/** Output only. Job submission time. */
		startTime?: string | null;

		/** Dataproc job status. */
		status?: JobStatus;
	}

	/** Job Operation metadata. */
	export interface JobMetadataFormProperties {

		/** Output only. The job id. */
		jobId: FormControl<string | null | undefined>,

		/** Output only. Operation type. */
		operationType: FormControl<string | null | undefined>,

		/** Output only. Job submission time. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateJobMetadataFormGroup() {
		return new FormGroup<JobMetadataFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Jupyter configuration for an interactive session. */
	export interface JupyterConfig {

		/** Optional. Display name, shown in the Jupyter kernelspec card. */
		displayName?: string | null;

		/** Optional. Kernel */
		kernel?: JupyterConfigKernel | null;
	}

	/** Jupyter configuration for an interactive session. */
	export interface JupyterConfigFormProperties {

		/** Optional. Display name, shown in the Jupyter kernelspec card. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Kernel */
		kernel: FormControl<JupyterConfigKernel | null | undefined>,
	}
	export function CreateJupyterConfigFormGroup() {
		return new FormGroup<JupyterConfigFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			kernel: new FormControl<JupyterConfigKernel | null | undefined>(undefined),
		});

	}

	export enum JupyterConfigKernel { KERNEL_UNSPECIFIED = 'KERNEL_UNSPECIFIED', PYTHON = 'PYTHON', SCALA = 'SCALA' }


	/** A response to a request to list autoscaling policies in a project. */
	export interface ListAutoscalingPoliciesResponse {

		/** Output only. This token is included in the response if there are more results to fetch. */
		nextPageToken?: string | null;

		/** Output only. Autoscaling policies list. */
		policies?: Array<AutoscalingPolicy>;
	}

	/** A response to a request to list autoscaling policies in a project. */
	export interface ListAutoscalingPoliciesResponseFormProperties {

		/** Output only. This token is included in the response if there are more results to fetch. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutoscalingPoliciesResponseFormGroup() {
		return new FormGroup<ListAutoscalingPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of batch workloads. */
	export interface ListBatchesResponse {

		/** Output only. The batches from the specified collection. */
		batches?: Array<Batch>;

		/** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. List of Batches that could not be included in the response. Attempting to get one of these resources may indicate why it was not included in the list response. */
		unreachable?: Array<string>;
	}

	/** A list of batch workloads. */
	export interface ListBatchesResponseFormProperties {

		/** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBatchesResponseFormGroup() {
		return new FormGroup<ListBatchesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of all clusters in a project. */
	export interface ListClustersResponse {

		/** Output only. The clusters in the project. */
		clusters?: Array<Cluster>;

		/** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest. */
		nextPageToken?: string | null;
	}

	/** The list of all clusters in a project. */
	export interface ListClustersResponseFormProperties {

		/** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of jobs in a project. */
	export interface ListJobsResponse {

		/** Output only. Jobs list. */
		jobs?: Array<Job>;

		/** Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest. */
		nextPageToken?: string | null;

		/** Output only. List of jobs with kms_key-encrypted parameters that could not be decrypted. A response to a jobs.get request may indicate the reason for the decryption failure for a specific job. */
		unreachable?: Array<string>;
	}

	/** A list of jobs in a project. */
	export interface ListJobsResponseFormProperties {

		/** Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
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


	/** A list of session templates. */
	export interface ListSessionTemplatesResponse {

		/** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. Session template list */
		sessionTemplates?: Array<SessionTemplate>;
	}

	/** A list of session templates. */
	export interface ListSessionTemplatesResponseFormProperties {

		/** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionTemplatesResponseFormGroup() {
		return new FormGroup<ListSessionTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a session template. */
	export interface SessionTemplate {

		/** Output only. The time when the template was created. */
		createTime?: string | null;

		/** Output only. The email address of the user who created the template. */
		creator?: string | null;

		/** Optional. Brief description of the template. */
		description?: string | null;

		/** Environment configuration for a workload. */
		environmentConfig?: EnvironmentConfig;

		/** Jupyter configuration for an interactive session. */
		jupyterSession?: JupyterConfig;

		/** Optional. Labels to associate with sessions created using this template. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. */
		labels?: {[id: string]: string };

		/** Required. The resource name of the session template. */
		name?: string | null;

		/** Runtime configuration for a workload. */
		runtimeConfig?: RuntimeConfig;

		/** Output only. The time the template was last updated. */
		updateTime?: string | null;

		/** Output only. A session template UUID (Unique Universal Identifier). The service generates this value when it creates the session template. */
		uuid?: string | null;
	}

	/** A representation of a session template. */
	export interface SessionTemplateFormProperties {

		/** Output only. The time when the template was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The email address of the user who created the template. */
		creator: FormControl<string | null | undefined>,

		/** Optional. Brief description of the template. */
		description: FormControl<string | null | undefined>,

		/** Optional. Labels to associate with sessions created using this template. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The resource name of the session template. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time the template was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. A session template UUID (Unique Universal Identifier). The service generates this value when it creates the session template. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateSessionTemplateFormGroup() {
		return new FormGroup<SessionTemplateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of interactive sessions. */
	export interface ListSessionsResponse {

		/** A token, which can be sent as page_token, to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. The sessions from the specified collection. */
		sessions?: Array<Session>;
	}

	/** A list of interactive sessions. */
	export interface ListSessionsResponseFormProperties {

		/** A token, which can be sent as page_token, to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsResponseFormGroup() {
		return new FormGroup<ListSessionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a session. */
	export interface Session {

		/** Output only. The time when the session was created. */
		createTime?: string | null;

		/** Output only. The email address of the user who created the session. */
		creator?: string | null;

		/** Environment configuration for a workload. */
		environmentConfig?: EnvironmentConfig;

		/** Jupyter configuration for an interactive session. */
		jupyterSession?: JupyterConfig;

		/** Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. */
		labels?: {[id: string]: string };

		/** Required. The resource name of the session. */
		name?: string | null;

		/** Runtime configuration for a workload. */
		runtimeConfig?: RuntimeConfig;

		/** Runtime information about workload execution. */
		runtimeInfo?: RuntimeInfo;

		/** Optional. The session template used by the session.Only resource names, including project ID and location, are valid.Example: * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id]The template must be in the same project and Dataproc region as the session. */
		sessionTemplate?: string | null;

		/** Output only. A state of the session. */
		state?: SessionState | null;

		/** Output only. Historical state information for the session. */
		stateHistory?: Array<SessionStateHistory>;

		/** Output only. Session state details, such as the failure description if the state is FAILED. */
		stateMessage?: string | null;

		/** Output only. The time when the session entered the current state. */
		stateTime?: string | null;

		/** Optional. The email address of the user who owns the session. */
		user?: string | null;

		/** Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the session. */
		uuid?: string | null;
	}

	/** A representation of a session. */
	export interface SessionFormProperties {

		/** Output only. The time when the session was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The email address of the user who created the session. */
		creator: FormControl<string | null | undefined>,

		/** Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The resource name of the session. */
		name: FormControl<string | null | undefined>,

		/** Optional. The session template used by the session.Only resource names, including project ID and location, are valid.Example: * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id]The template must be in the same project and Dataproc region as the session. */
		sessionTemplate: FormControl<string | null | undefined>,

		/** Output only. A state of the session. */
		state: FormControl<SessionState | null | undefined>,

		/** Output only. Session state details, such as the failure description if the state is FAILED. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The time when the session entered the current state. */
		stateTime: FormControl<string | null | undefined>,

		/** Optional. The email address of the user who owns the session. */
		user: FormControl<string | null | undefined>,

		/** Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the session. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sessionTemplate: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SessionState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			stateTime: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', FAILED = 'FAILED' }


	/** Historical state information. */
	export interface SessionStateHistory {

		/** Output only. The state of the session at this point in the session history. */
		state?: SessionState | null;

		/** Output only. Details about the state at this point in the session history. */
		stateMessage?: string | null;

		/** Output only. The time when the session entered the historical state. */
		stateStartTime?: string | null;
	}

	/** Historical state information. */
	export interface SessionStateHistoryFormProperties {

		/** Output only. The state of the session at this point in the session history. */
		state: FormControl<SessionState | null | undefined>,

		/** Output only. Details about the state at this point in the session history. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The time when the session entered the historical state. */
		stateStartTime: FormControl<string | null | undefined>,
	}
	export function CreateSessionStateHistoryFormGroup() {
		return new FormGroup<SessionStateHistoryFormProperties>({
			state: new FormControl<SessionState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			stateStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to a request to list workflow templates in a project. */
	export interface ListWorkflowTemplatesResponse {

		/** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest. */
		nextPageToken?: string | null;

		/** Output only. WorkflowTemplates list. */
		templates?: Array<WorkflowTemplate>;

		/** Output only. List of workflow templates that could not be included in the response. Attempting to get one of these resources may indicate why it was not included in the list response. */
		unreachable?: Array<string>;
	}

	/** A response to a request to list workflow templates in a project. */
	export interface ListWorkflowTemplatesResponseFormProperties {

		/** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowTemplatesResponseFormGroup() {
		return new FormGroup<ListWorkflowTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Dataproc workflow template resource. */
	export interface WorkflowTemplate {

		/** Output only. The time template was created. */
		createTime?: string | null;

		/** Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted. */
		dagTimeout?: string | null;

		/** Encryption settings for encrypting workflow template job arguments. */
		encryptionConfig?: GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig;
		id?: string | null;

		/** Required. The Directed Acyclic Graph of Jobs to submit. */
		jobs?: Array<OrderedJob>;

		/** Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template. */
		labels?: {[id: string]: string };

		/** Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
		name?: string | null;

		/** Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated. */
		parameters?: Array<TemplateParameter>;

		/** Specifies workflow execution target.Either managed_cluster or cluster_selector is required. */
		placement?: WorkflowTemplatePlacement;

		/** Output only. The time template was last updated. */
		updateTime?: string | null;

		/** Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request. */
		version?: number | null;
	}

	/** A Dataproc workflow template resource. */
	export interface WorkflowTemplateFormProperties {

		/** Output only. The time template was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes ("600s") to 24 hours ("86400s"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted. */
		dagTimeout: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. The time template was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowTemplateFormGroup() {
		return new FormGroup<WorkflowTemplateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dagTimeout: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A job executed by the workflow. */
	export interface OrderedJob {

		/** A Dataproc job for running Apache Flink applications on YARN. */
		flinkJob?: FlinkJob;

		/** A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html). */
		hadoopJob?: HadoopJob;

		/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
		hiveJob?: HiveJob;

		/** Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job. */
		labels?: {[id: string]: string };

		/** A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN. */
		pigJob?: PigJob;

		/** Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow. */
		prerequisiteStepIds?: Array<string>;

		/** A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster. */
		prestoJob?: PrestoJob;

		/** A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN. */
		pysparkJob?: PySparkJob;

		/** Job scheduling options. */
		scheduling?: JobScheduling;

		/** A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN. */
		sparkJob?: SparkJob;

		/** A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN. */
		sparkRJob?: SparkRJob;

		/** A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries. */
		sparkSqlJob?: SparkSqlJob;

		/** Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
		stepId?: string | null;

		/** A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster. */
		trinoJob?: TrinoJob;
	}

	/** A job executed by the workflow. */
	export interface OrderedJobFormProperties {

		/** Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreateOrderedJobFormGroup() {
		return new FormGroup<OrderedJobFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector) */
	export interface TemplateParameter {

		/** Optional. Brief description of the parameter. Must not exceed 1024 characters. */
		description?: string | null;

		/** Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax: Values in maps can be referenced by key: labels'key' placement.clusterSelector.clusterLabels'key' placement.managedCluster.labels'key' placement.clusterSelector.clusterLabels'key' jobs'step-id'.labels'key' Jobs in the jobs list can be referenced by step-id: jobs'step-id'.hadoopJob.mainJarFileUri jobs'step-id'.hiveJob.queryFileUri jobs'step-id'.pySparkJob.mainPythonFileUri jobs'step-id'.hadoopJob.jarFileUris0 jobs'step-id'.hadoopJob.archiveUris0 jobs'step-id'.hadoopJob.fileUris0 jobs'step-id'.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a zero-based index: jobs'step-id'.sparkJob.args0 Other examples: jobs'step-id'.hadoopJob.properties'key' jobs'step-id'.hadoopJob.args0 jobs'step-id'.hiveJob.scriptVariables'key' jobs'step-id'.hadoopJob.mainJarFileUri placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: placement.clusterSelector.clusterLabels jobs'step-id'.sparkJob.args */
		fields?: Array<string>;

		/** Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters. */
		name?: string | null;

		/** Configuration for parameter validation. */
		validation?: ParameterValidation;
	}

	/** A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector) */
	export interface TemplateParameterFormProperties {

		/** Optional. Brief description of the parameter. Must not exceed 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateParameterFormGroup() {
		return new FormGroup<TemplateParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for parameter validation. */
	export interface ParameterValidation {

		/** Validation based on regular expressions. */
		regex?: RegexValidation;

		/** Validation based on a list of allowed values. */
		values?: ValueValidation;
	}

	/** Configuration for parameter validation. */
	export interface ParameterValidationFormProperties {
	}
	export function CreateParameterValidationFormGroup() {
		return new FormGroup<ParameterValidationFormProperties>({
		});

	}


	/** Validation based on regular expressions. */
	export interface RegexValidation {

		/** Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient). */
		regexes?: Array<string>;
	}

	/** Validation based on regular expressions. */
	export interface RegexValidationFormProperties {
	}
	export function CreateRegexValidationFormGroup() {
		return new FormGroup<RegexValidationFormProperties>({
		});

	}


	/** Validation based on a list of allowed values. */
	export interface ValueValidation {

		/** Required. List of allowed values for the parameter. */
		values?: Array<string>;
	}

	/** Validation based on a list of allowed values. */
	export interface ValueValidationFormProperties {
	}
	export function CreateValueValidationFormGroup() {
		return new FormGroup<ValueValidationFormProperties>({
		});

	}


	/** Specifies workflow execution target.Either managed_cluster or cluster_selector is required. */
	export interface WorkflowTemplatePlacement {

		/** A selector that chooses target cluster for jobs based on metadata. */
		clusterSelector?: ClusterSelector;

		/** Cluster that is managed by the workflow. */
		managedCluster?: ManagedCluster;
	}

	/** Specifies workflow execution target.Either managed_cluster or cluster_selector is required. */
	export interface WorkflowTemplatePlacementFormProperties {
	}
	export function CreateWorkflowTemplatePlacementFormGroup() {
		return new FormGroup<WorkflowTemplatePlacementFormProperties>({
		});

	}


	/** Cluster that is managed by the workflow. */
	export interface ManagedCluster {

		/** Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters. */
		clusterName?: string | null;

		/** The cluster config. */
		config?: ClusterConfig;

		/** Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster. */
		labels?: {[id: string]: string };
	}

	/** Cluster that is managed by the workflow. */
	export interface ManagedClusterFormProperties {

		/** Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters. */
		clusterName: FormControl<string | null | undefined>,

		/** Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateManagedClusterFormGroup() {
		return new FormGroup<ManagedClusterFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Metadata describing the node group operation. */
	export interface NodeGroupOperationMetadata {

		/** Output only. Cluster UUID associated with the node group operation. */
		clusterUuid?: string | null;

		/** Output only. Short description of operation. */
		description?: string | null;

		/** Output only. Labels associated with the operation. */
		labels?: {[id: string]: string };

		/** Output only. Node group ID for the operation. */
		nodeGroupId?: string | null;

		/** The operation type. */
		operationType?: NodeGroupOperationMetadataOperationType | null;

		/** The status of the operation. */
		status?: ClusterOperationStatus;

		/** Output only. The previous operation status. */
		statusHistory?: Array<ClusterOperationStatus>;

		/** Output only. Errors encountered during operation execution. */
		warnings?: Array<string>;
	}

	/** Metadata describing the node group operation. */
	export interface NodeGroupOperationMetadataFormProperties {

		/** Output only. Cluster UUID associated with the node group operation. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Output only. Short description of operation. */
		description: FormControl<string | null | undefined>,

		/** Output only. Labels associated with the operation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Node group ID for the operation. */
		nodeGroupId: FormControl<string | null | undefined>,

		/** The operation type. */
		operationType: FormControl<NodeGroupOperationMetadataOperationType | null | undefined>,
	}
	export function CreateNodeGroupOperationMetadataFormGroup() {
		return new FormGroup<NodeGroupOperationMetadataFormProperties>({
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			nodeGroupId: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<NodeGroupOperationMetadataOperationType | null | undefined>(undefined),
		});

	}

	export enum NodeGroupOperationMetadataOperationType { NODE_GROUP_OPERATION_TYPE_UNSPECIFIED = 'NODE_GROUP_OPERATION_TYPE_UNSPECIFIED', CREATE = 'CREATE', UPDATE = 'UPDATE', DELETE = 'DELETE', RESIZE = 'RESIZE', REPAIR = 'REPAIR' }


	/** indicating a list of workers of same type */
	export interface NodePool {

		/** Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding pool id. */
		id?: string | null;

		/** Name of instances to be repaired. These instances must belong to specified node pool. */
		instanceNames?: Array<string>;

		/** Required. Repair action to take on specified resources of the node pool. */
		repairAction?: NodePoolRepairAction | null;
	}

	/** indicating a list of workers of same type */
	export interface NodePoolFormProperties {

		/** Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding pool id. */
		id: FormControl<string | null | undefined>,

		/** Required. Repair action to take on specified resources of the node pool. */
		repairAction: FormControl<NodePoolRepairAction | null | undefined>,
	}
	export function CreateNodePoolFormGroup() {
		return new FormGroup<NodePoolFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			repairAction: new FormControl<NodePoolRepairAction | null | undefined>(undefined),
		});

	}

	export enum NodePoolRepairAction { REPAIR_ACTION_UNSPECIFIED = 'REPAIR_ACTION_UNSPECIFIED', DELETE = 'DELETE' }


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy. */
		bindings?: Array<Binding>;

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A request to repair a cluster. */
	export interface RepairClusterRequest {

		/** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
		clusterUuid?: string | null;

		/** Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+. */
		gracefulDecommissionTimeout?: string | null;

		/** Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this request. i.e. Multiple entries for the same node pool id are not allowed. */
		nodePools?: Array<NodePool>;

		/** Optional. operation id of the parent operation sending the repair request */
		parentOperationId?: string | null;

		/** Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;
	}

	/** A request to repair a cluster. */
	export interface RepairClusterRequestFormProperties {

		/** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+. */
		gracefulDecommissionTimeout: FormControl<string | null | undefined>,

		/** Optional. operation id of the parent operation sending the repair request */
		parentOperationId: FormControl<string | null | undefined>,

		/** Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRepairClusterRequestFormGroup() {
		return new FormGroup<RepairClusterRequestFormProperties>({
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			gracefulDecommissionTimeout: new FormControl<string | null | undefined>(undefined),
			parentOperationId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to resize a node group. */
	export interface ResizeNodeGroupRequest {

		/** Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning) allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher. */
		gracefulDecommissionTimeout?: string | null;

		/** Optional. operation id of the parent operation sending the resize request */
		parentOperationId?: string | null;

		/** Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;

		/** Required. The number of running instances for the node group to maintain. The group adds or removes instances to maintain the number of instances specified by this parameter. */
		size?: number | null;
	}

	/** A request to resize a node group. */
	export interface ResizeNodeGroupRequestFormProperties {

		/** Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning) allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher. */
		gracefulDecommissionTimeout: FormControl<string | null | undefined>,

		/** Optional. operation id of the parent operation sending the resize request */
		parentOperationId: FormControl<string | null | undefined>,

		/** Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId: FormControl<string | null | undefined>,

		/** Required. The number of running instances for the node group to maintain. The group adds or removes instances to maintain the number of instances specified by this parameter. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateResizeNodeGroupRequestFormGroup() {
		return new FormGroup<ResizeNodeGroupRequestFormProperties>({
			gracefulDecommissionTimeout: new FormControl<string | null | undefined>(undefined),
			parentOperationId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata describing the Session operation. */
	export interface SessionOperationMetadata {

		/** The time when the operation was created. */
		createTime?: string | null;

		/** Short description of the operation. */
		description?: string | null;

		/** The time when the operation was finished. */
		doneTime?: string | null;

		/** Labels associated with the operation. */
		labels?: {[id: string]: string };

		/** The operation type. */
		operationType?: SessionOperationMetadataOperationType | null;

		/** Name of the session for the operation. */
		session?: string | null;

		/** Session UUID for the operation. */
		sessionUuid?: string | null;

		/** Warnings encountered during operation execution. */
		warnings?: Array<string>;
	}

	/** Metadata describing the Session operation. */
	export interface SessionOperationMetadataFormProperties {

		/** The time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Short description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The time when the operation was finished. */
		doneTime: FormControl<string | null | undefined>,

		/** Labels associated with the operation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The operation type. */
		operationType: FormControl<SessionOperationMetadataOperationType | null | undefined>,

		/** Name of the session for the operation. */
		session: FormControl<string | null | undefined>,

		/** Session UUID for the operation. */
		sessionUuid: FormControl<string | null | undefined>,
	}
	export function CreateSessionOperationMetadataFormGroup() {
		return new FormGroup<SessionOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			doneTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationType: new FormControl<SessionOperationMetadataOperationType | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
			sessionUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionOperationMetadataOperationType { SESSION_OPERATION_TYPE_UNSPECIFIED = 'SESSION_OPERATION_TYPE_UNSPECIFIED', CREATE = 'CREATE', TERMINATE = 'TERMINATE', DELETE = 'DELETE' }


	/** Request message for SetIamPolicy method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for SetIamPolicy method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** A request to start a cluster. */
	export interface StartClusterRequest {

		/** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
		clusterUuid?: string | null;

		/** Optional. A unique ID used to identify the request. If the server receives two StartClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;
	}

	/** A request to start a cluster. */
	export interface StartClusterRequestFormProperties {

		/** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Optional. A unique ID used to identify the request. If the server receives two StartClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateStartClusterRequestFormGroup() {
		return new FormGroup<StartClusterRequestFormProperties>({
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to stop a cluster. */
	export interface StopClusterRequest {

		/** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
		clusterUuid?: string | null;

		/** Optional. A unique ID used to identify the request. If the server receives two StopClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;
	}

	/** A request to stop a cluster. */
	export interface StopClusterRequestFormProperties {

		/** Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Optional. A unique ID used to identify the request. If the server receives two StopClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateStopClusterRequestFormGroup() {
		return new FormGroup<StopClusterRequestFormProperties>({
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to submit a job. */
	export interface SubmitJobRequest {

		/** A Dataproc job resource. */
		job?: Job;

		/** Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;
	}

	/** A request to submit a job. */
	export interface SubmitJobRequestFormProperties {

		/** Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateSubmitJobRequestFormGroup() {
		return new FormGroup<SubmitJobRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to terminate an interactive session. */
	export interface TerminateSessionRequest {

		/** Optional. A unique ID used to identify the request. If the service receives two TerminateSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.TerminateSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;
	}

	/** A request to terminate an interactive session. */
	export interface TerminateSessionRequestFormProperties {

		/** Optional. A unique ID used to identify the request. If the service receives two TerminateSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.TerminateSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateSessionRequestFormGroup() {
		return new FormGroup<TerminateSessionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for TestIamPermissions method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for TestIamPermissions method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for TestIamPermissions method. */
	export interface TestIamPermissionsResponse {

		/** A subset of TestPermissionsRequest.permissions that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for TestIamPermissions method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** The workflow graph. */
	export interface WorkflowGraph {

		/** Output only. The workflow nodes. */
		nodes?: Array<WorkflowNode>;
	}

	/** The workflow graph. */
	export interface WorkflowGraphFormProperties {
	}
	export function CreateWorkflowGraphFormGroup() {
		return new FormGroup<WorkflowGraphFormProperties>({
		});

	}


	/** The workflow node. */
	export interface WorkflowNode {

		/** Output only. The error detail. */
		error?: string | null;

		/** Output only. The job id; populated after the node enters RUNNING state. */
		jobId?: string | null;

		/** Output only. Node's prerequisite nodes. */
		prerequisiteStepIds?: Array<string>;

		/** Output only. The node state. */
		state?: WorkflowNodeState | null;

		/** Output only. The name of the node. */
		stepId?: string | null;
	}

	/** The workflow node. */
	export interface WorkflowNodeFormProperties {

		/** Output only. The error detail. */
		error: FormControl<string | null | undefined>,

		/** Output only. The job id; populated after the node enters RUNNING state. */
		jobId: FormControl<string | null | undefined>,

		/** Output only. The node state. */
		state: FormControl<WorkflowNodeState | null | undefined>,

		/** Output only. The name of the node. */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowNodeFormGroup() {
		return new FormGroup<WorkflowNodeFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkflowNodeState | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkflowNodeState { NODE_STATE_UNSPECIFIED = 'NODE_STATE_UNSPECIFIED', BLOCKED = 'BLOCKED', RUNNABLE = 'RUNNABLE', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** A Dataproc workflow template resource. */
	export interface WorkflowMetadata {

		/** Output only. The name of the target cluster. */
		clusterName?: string | null;

		/** Output only. The UUID of target cluster. */
		clusterUuid?: string | null;

		/** The cluster operation triggered by a workflow. */
		createCluster?: ClusterOperation;

		/** Output only. DAG end time, only set for workflows with dag_timeout when DAG ends. */
		dagEndTime?: string | null;

		/** Output only. DAG start time, only set for workflows with dag_timeout when DAG begins. */
		dagStartTime?: string | null;

		/** Output only. The timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		dagTimeout?: string | null;

		/** The cluster operation triggered by a workflow. */
		deleteCluster?: ClusterOperation;

		/** Output only. Workflow end time. */
		endTime?: string | null;

		/** The workflow graph. */
		graph?: WorkflowGraph;

		/** Map from parameter names to values that were used for those parameters. */
		parameters?: {[id: string]: string };

		/** Output only. Workflow start time. */
		startTime?: string | null;

		/** Output only. The workflow state. */
		state?: ClusterOperationStatusState | null;

		/** Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
		template?: string | null;

		/** Output only. The version of template at the time of workflow instantiation. */
		version?: number | null;
	}

	/** A Dataproc workflow template resource. */
	export interface WorkflowMetadataFormProperties {

		/** Output only. The name of the target cluster. */
		clusterName: FormControl<string | null | undefined>,

		/** Output only. The UUID of target cluster. */
		clusterUuid: FormControl<string | null | undefined>,

		/** Output only. DAG end time, only set for workflows with dag_timeout when DAG ends. */
		dagEndTime: FormControl<string | null | undefined>,

		/** Output only. DAG start time, only set for workflows with dag_timeout when DAG begins. */
		dagStartTime: FormControl<string | null | undefined>,

		/** Output only. The timeout duration for the DAG of jobs, expressed in seconds (see JSON representation of duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		dagTimeout: FormControl<string | null | undefined>,

		/** Output only. Workflow end time. */
		endTime: FormControl<string | null | undefined>,

		/** Map from parameter names to values that were used for those parameters. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Workflow start time. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The workflow state. */
		state: FormControl<ClusterOperationStatusState | null | undefined>,

		/** Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id} */
		template: FormControl<string | null | undefined>,

		/** Output only. The version of template at the time of workflow instantiation. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowMetadataFormGroup() {
		return new FormGroup<WorkflowMetadataFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterUuid: new FormControl<string | null | undefined>(undefined),
			dagEndTime: new FormControl<string | null | undefined>(undefined),
			dagStartTime: new FormControl<string | null | undefined>(undefined),
			dagTimeout: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ClusterOperationStatusState | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all regions/{region}/clusters in a project alphabetically.
		 * Get v1/projects/{projectId}/regions/{region}/clusters
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} filter Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
		 * @param {number} pageSize Optional. The standard List page size.
		 * @param {string} pageToken Optional. The standard List page token.
		 * @return {ListClustersResponse} Successful response
		 */
		Dataproc_projects_regions_clusters_list(projectId: string, region: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
		 * Post v1/projects/{projectId}/regions/{region}/clusters
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {Dataproc_projects_regions_clusters_createActionOnFailedPrimaryWorkers} actionOnFailedPrimaryWorkers Optional. Failure action when primary worker creation fails.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_create(projectId: string, region: string, actionOnFailedPrimaryWorkers: Dataproc_projects_regions_clusters_createActionOnFailedPrimaryWorkers | null | undefined, requestId: string | null | undefined, requestBody: Cluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters&actionOnFailedPrimaryWorkers=' + actionOnFailedPrimaryWorkers + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
		 * Delete v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @param {string} clusterUuid Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
		 * @param {string} gracefulTerminationTimeout Optional. The graceful termination timeout for the deletion of the cluster. Indicate the time the request will wait to complete the running jobs on the cluster before its forceful deletion. Default value is 0 indicating that the user has not enabled the graceful termination. Value can be between 60 second and 6 Hours, in case the graceful termination is enabled. (There is no separate flag to check the enabling or disabling of graceful termination, it can be checked by the values in the field).
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_delete(projectId: string, region: string, clusterName: string, clusterUuid: string | null | undefined, gracefulTerminationTimeout: string | null | undefined, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&clusterUuid=' + (clusterUuid == null ? '' : encodeURIComponent(clusterUuid)) + '&gracefulTerminationTimeout=' + (gracefulTerminationTimeout == null ? '' : encodeURIComponent(gracefulTerminationTimeout)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the resource representation for a cluster in a project.
		 * Get v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @return {Cluster} Successful response
		 */
		Dataproc_projects_regions_clusters_get(projectId: string, region: string, clusterName: string): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)), {});
		}

		/**
		 * Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
		 * Patch v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @param {string} gracefulDecommissionTimeout Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @param {string} updateMask Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies 
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_patch(projectId: string, region: string, clusterName: string, gracefulDecommissionTimeout: string | null | undefined, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: Cluster): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&gracefulDecommissionTimeout=' + (gracefulDecommissionTimeout == null ? '' : encodeURIComponent(gracefulDecommissionTimeout)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
		 * Post v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_diagnose(projectId: string, region: string, clusterName: string, requestBody: DiagnoseClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + ':diagnose', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Repairs a cluster.
		 * Post v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_repair(projectId: string, region: string, clusterName: string, requestBody: RepairClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + ':repair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a cluster in a project.
		 * Post v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_start(projectId: string, region: string, clusterName: string, requestBody: StartClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a cluster in a project.
		 * Post v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_stop(projectId: string, region: string, clusterName: string, requestBody: StopClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists regions/{region}/jobs in a project.
		 * Get v1/projects/{projectId}/regions/{region}/jobs
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
		 * @param {string} filter Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
		 * @param {Dataproc_projects_regions_jobs_listJobStateMatcher} jobStateMatcher Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.
		 * @param {number} pageSize Optional. The number of results to return in each response.
		 * @param {string} pageToken Optional. The page token, returned by a previous call, to request the next page of results.
		 * @return {ListJobsResponse} Successful response
		 */
		Dataproc_projects_regions_jobs_list(projectId: string, region: string, clusterName: string | null | undefined, filter: string | null | undefined, jobStateMatcher: Dataproc_projects_regions_jobs_listJobStateMatcher | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs&clusterName=' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&jobStateMatcher=' + jobStateMatcher + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
		 * Delete v1/projects/{projectId}/regions/{region}/jobs/{jobId}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @return {Empty} Successful response
		 */
		Dataproc_projects_regions_jobs_delete(projectId: string, region: string, jobId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Gets the resource representation for a job in a project.
		 * Get v1/projects/{projectId}/regions/{region}/jobs/{jobId}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @return {Job} Successful response
		 */
		Dataproc_projects_regions_jobs_get(projectId: string, region: string, jobId: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Updates a job in a project.
		 * Patch v1/projects/{projectId}/regions/{region}/jobs/{jobId}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @param {string} updateMask Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated.
		 * @return {Job} Successful response
		 */
		Dataproc_projects_regions_jobs_patch(projectId: string, region: string, jobId: string, updateMask: string | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.patch<Job>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
		 * Post v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @return {Job} Successful response
		 */
		Dataproc_projects_regions_jobs_cancel(projectId: string, region: string, jobId: string, requestBody: CancelJobRequest): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submits a job to a cluster.
		 * Post v1/projects/{projectId}/regions/{region}/jobs:submit
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @return {Job} Successful response
		 */
		Dataproc_projects_regions_jobs_submit(projectId: string, region: string, requestBody: SubmitJobRequest): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs:submit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submits job to a cluster.
		 * Post v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_jobs_submitAsOperation(projectId: string, region: string, requestBody: SubmitJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs:submitAsOperation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workflow template. It does not cancel in-progress workflows.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @param {number} version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
		 * @return {Empty} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_delete(name: string, version: number | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&version=' + version, {});
		}

		/**
		 * Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @param {number} version Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {WorkflowTemplate} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_get(name: string, version: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<WorkflowTemplate> {
			return this.http.get<WorkflowTemplate>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&version=' + version + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates the session template synchronously.
		 * Patch v1/{name}
		 * @param {string} name Required. The resource name of the session template.
		 * @return {SessionTemplate} Successful response
		 */
		Dataproc_projects_locations_sessionTemplates_patch(name: string, requestBody: SessionTemplate): Observable<SessionTemplate> {
			return this.http.patch<SessionTemplate>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
		 * Put v1/{name}
		 * @param {string} name Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @return {WorkflowTemplate} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_update(name: string, requestBody: WorkflowTemplate): Observable<WorkflowTemplate> {
			return this.http.put<WorkflowTemplate>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Dataproc_projects_regions_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
		 * Post v1/{name}:instantiate
		 * @param {string} name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_instantiate(name: string, requestBody: InstantiateWorkflowTemplateRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':instantiate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
		 * Post v1/{name}:resize
		 * @param {string} name Required. The name of the node group to resize. Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup}
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_nodeGroups_resize(name: string, requestBody: ResizeNodeGroupRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Terminates the interactive session.
		 * Post v1/{name}:terminate
		 * @param {string} name Required. The name of the session resource to terminate.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_locations_sessions_terminate(name: string, requestBody: TerminateSessionRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':terminate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists autoscaling policies in the project.
		 * Get v1/{parent}/autoscalingPolicies
		 * @param {string} parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
		 * @param {number} pageSize Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
		 * @param {string} pageToken Optional. The page token, returned by a previous call, to request the next page of results.
		 * @return {ListAutoscalingPoliciesResponse} Successful response
		 */
		Dataproc_projects_regions_autoscalingPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAutoscalingPoliciesResponse> {
			return this.http.get<ListAutoscalingPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/autoscalingPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates new autoscaling policy.
		 * Post v1/{parent}/autoscalingPolicies
		 * @param {string} parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}
		 * @return {AutoscalingPolicy} Successful response
		 */
		Dataproc_projects_regions_autoscalingPolicies_create(parent: string, requestBody: AutoscalingPolicy): Observable<AutoscalingPolicy> {
			return this.http.post<AutoscalingPolicy>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/autoscalingPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists batch workloads.
		 * Get v1/{parent}/batches
		 * @param {string} parent Required. The parent, which owns this collection of batches.
		 * @param {string} filter Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields are batch_id, batch_uuid, state, and create_time.e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons.
		 * @param {string} orderBy Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000.
		 * @param {string} pageToken Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page.
		 * @return {ListBatchesResponse} Successful response
		 */
		Dataproc_projects_locations_batches_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBatchesResponse> {
			return this.http.get<ListBatchesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/batches&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a batch workload that executes asynchronously.
		 * Post v1/{parent}/batches
		 * @param {string} parent Required. The parent resource where this batch will be created.
		 * @param {string} batchId Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateBatchRequest)s with the same request_id, the second request is ignored and the Operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_locations_batches_create(parent: string, batchId: string | null | undefined, requestId: string | null | undefined, requestBody: Batch): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/batches&batchId=' + (batchId == null ? '' : encodeURIComponent(batchId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
		 * Post v1/{parent}/nodeGroups
		 * @param {string} parent Required. The parent resource where this node group will be created. Format: projects/{project}/regions/{region}/clusters/{cluster}
		 * @param {string} nodeGroupId Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
		 * @param {string} parentOperationId Optional. operation id of the parent operation sending the create request
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_nodeGroups_create(parent: string, nodeGroupId: string | null | undefined, parentOperationId: string | null | undefined, requestId: string | null | undefined, requestBody: NodeGroup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodeGroups&nodeGroupId=' + (nodeGroupId == null ? '' : encodeURIComponent(nodeGroupId)) + '&parentOperationId=' + (parentOperationId == null ? '' : encodeURIComponent(parentOperationId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists session templates.
		 * Get v1/{parent}/sessionTemplates
		 * @param {string} parent Required. The parent that owns this collection of session templates.
		 * @param {string} filter Optional. A filter for the session templates to return in the response. Filters are case sensitive and have the following syntax:field = value AND field = value ...
		 * @param {number} pageSize Optional. The maximum number of sessions to return in each response. The service may return fewer than this value.
		 * @param {string} pageToken Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page.
		 * @return {ListSessionTemplatesResponse} Successful response
		 */
		Dataproc_projects_locations_sessionTemplates_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSessionTemplatesResponse> {
			return this.http.get<ListSessionTemplatesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sessionTemplates&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a session template synchronously.
		 * Post v1/{parent}/sessionTemplates
		 * @param {string} parent Required. The parent resource where this session template will be created.
		 * @return {SessionTemplate} Successful response
		 */
		Dataproc_projects_locations_sessionTemplates_create(parent: string, requestBody: SessionTemplate): Observable<SessionTemplate> {
			return this.http.post<SessionTemplate>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sessionTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists interactive sessions.
		 * Get v1/{parent}/sessions
		 * @param {string} parent Required. The parent, which owns this collection of sessions.
		 * @param {string} filter Optional. A filter for the sessions to return in the response.A filter is a logical expression constraining the values of various fields in each session resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND, OR). Supported fields are session_id, session_uuid, state, and create_time.Example: state = ACTIVE and create_time < "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state that were created before 2023-01-01.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparators.
		 * @param {number} pageSize Optional. The maximum number of sessions to return in each response. The service may return fewer than this value.
		 * @param {string} pageToken Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page.
		 * @return {ListSessionsResponse} Successful response
		 */
		Dataproc_projects_locations_sessions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSessionsResponse> {
			return this.http.get<ListSessionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sessions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an interactive session asynchronously.
		 * Post v1/{parent}/sessions
		 * @param {string} parent Required. The parent resource where this session will be created.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the service receives two CreateSessionRequests (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateSessionRequest)s with the same ID, the second request is ignored, and the first Session is created and stored in the backend.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @param {string} sessionId Required. The ID to use for the session, which becomes the final component of the session's resource name.This value must be 4-63 characters. Valid characters are /a-z-/.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_locations_sessions_create(parent: string, requestId: string | null | undefined, sessionId: string | null | undefined, requestBody: Session): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sessions&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&sessionId=' + (sessionId == null ? '' : encodeURIComponent(sessionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists workflows that match the specified filter in the request.
		 * Get v1/{parent}/workflowTemplates
		 * @param {string} parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
		 * @param {number} pageSize Optional. The maximum number of results to return in each response.
		 * @param {string} pageToken Optional. The page token, returned by a previous call, to request the next page of results.
		 * @return {ListWorkflowTemplatesResponse} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkflowTemplatesResponse> {
			return this.http.get<ListWorkflowTemplatesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowTemplates&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates new workflow template.
		 * Post v1/{parent}/workflowTemplates
		 * @param {string} parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}
		 * @return {WorkflowTemplate} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_create(parent: string, requestBody: WorkflowTemplate): Observable<WorkflowTemplate> {
			return this.http.post<WorkflowTemplate>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
		 * Post v1/{parent}/workflowTemplates:instantiateInline
		 * @param {string} parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location}
		 * @param {string} requestId Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_instantiateInline(parent: string, requestId: string | null | undefined, requestBody: WorkflowTemplate): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowTemplates:instantiateInline&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
		 * Post v1/{project}/{region}/{cluster}:injectCredentials
		 * @param {string} project Required. The ID of the Google Cloud Platform project the cluster belongs to, of the form projects/.
		 * @param {string} region Required. The region containing the cluster, of the form regions/.
		 * @param {string} cluster Required. The cluster, in the form clusters/.
		 * @return {Operation} Successful response
		 */
		Dataproc_projects_regions_clusters_injectCredentials(project: string, region: string, cluster: string, requestBody: InjectCredentialsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/' + (region == null ? '' : encodeURIComponent(region)) + '/' + (cluster == null ? '' : encodeURIComponent(cluster)) + ':injectCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Dataproc_projects_regions_clusters_createActionOnFailedPrimaryWorkers { FAILURE_ACTION_UNSPECIFIED = 'FAILURE_ACTION_UNSPECIFIED', NO_ACTION = 'NO_ACTION', DELETE = 'DELETE' }

	export enum Dataproc_projects_regions_jobs_listJobStateMatcher { ALL = 'ALL', ACTIVE = 'ACTIVE', NON_ACTIVE = 'NON_ACTIVE' }

}

