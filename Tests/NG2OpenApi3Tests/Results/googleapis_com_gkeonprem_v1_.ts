import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster. */
	export interface Authorization {

		/** For VMware and bare metal user clusters, users will be granted the cluster-admin role on the cluster, which provides full administrative access to the cluster. For bare metal admin clusters, users will be granted the cluster-view role, which limits users to read-only access. */
		adminUsers?: Array<ClusterUser>;
	}

	/** Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster. */
	export interface AuthorizationFormProperties {
	}
	export function CreateAuthorizationFormGroup() {
		return new FormGroup<AuthorizationFormProperties>({
		});

	}


	/** ClusterUser configures user principals for an RBAC policy. */
	export interface ClusterUser {

		/** Required. The name of the user, e.g. `my-gcp-id@gmail.com`. */
		username?: string | null;
	}

	/** ClusterUser configures user principals for an RBAC policy. */
	export interface ClusterUserFormProperties {

		/** Required. The name of the user, e.g. `my-gcp-id@gmail.com`. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateClusterUserFormGroup() {
		return new FormGroup<ClusterUserFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminApiServerArgument represents an arg name->value pair. Only a subset of customized flags are supported. Please refer to the API server documentation below to know the exact format: https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/ */
	export interface BareMetalAdminApiServerArgument {

		/** Required. The argument name as it appears on the API Server command line please make sure to remove the leading dashes. */
		argument?: string | null;

		/** Required. The value of the arg as it will be passed to the API Server command line. */
		value?: string | null;
	}

	/** BareMetalAdminApiServerArgument represents an arg name->value pair. Only a subset of customized flags are supported. Please refer to the API server documentation below to know the exact format: https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/ */
	export interface BareMetalAdminApiServerArgumentFormProperties {

		/** Required. The argument name as it appears on the API Server command line please make sure to remove the leading dashes. */
		argument: FormControl<string | null | undefined>,

		/** Required. The value of the arg as it will be passed to the API Server command line. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalAdminApiServerArgumentFormGroup() {
		return new FormGroup<BareMetalAdminApiServerArgumentFormProperties>({
			argument: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource that represents a bare metal admin cluster. LINT.IfChange */
	export interface BareMetalAdminCluster {

		/** Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** The Anthos clusters on bare metal version for the bare metal admin cluster. */
		bareMetalVersion?: string | null;

		/** Configuration for Binary Authorization. */
		binaryAuthorization?: BinaryAuthorization;

		/** BareMetalAdminClusterOperationsConfig specifies the admin cluster's observability infrastructure. */
		clusterOperations?: BareMetalAdminClusterOperationsConfig;

		/** BareMetalAdminControlPlaneConfig specifies the control plane configuration. */
		controlPlane?: BareMetalAdminControlPlaneConfig;

		/** Output only. The time at which this bare metal admin cluster was created. */
		createTime?: string | null;

		/** Output only. The time at which this bare metal admin cluster was deleted. If the resource is not deleted, this must be empty */
		deleteTime?: string | null;

		/** A human readable description of this bare metal admin cluster. */
		description?: string | null;

		/** Output only. The IP address name of bare metal admin cluster's API server. */
		endpoint?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag?: string | null;

		/** Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and manage multi-cluster capabilities and apply consistent policies across your systems. See [Anthos Fleets](`https://cloud.google.com/anthos/multicluster-management/fleets`) for more details on Anthos multi-cluster capabilities using Fleets. ## */
		fleet?: Fleet;

		/** BareMetalAdminLoadBalancerConfig specifies the load balancer configuration. */
		loadBalancer?: BareMetalAdminLoadBalancerConfig;

		/** Output only. The object name of the bare metal cluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
		localName?: string | null;

		/** BareMetalAdminMaintenanceConfig specifies configurations to put bare metal Admin cluster CRs nodes in and out of maintenance. */
		maintenanceConfig?: BareMetalAdminMaintenanceConfig;

		/** BareMetalAdminMaintenanceStatus represents the maintenance status for bare metal Admin cluster CR's nodes. */
		maintenanceStatus?: BareMetalAdminMaintenanceStatus;

		/** Immutable. The bare metal admin cluster resource name. */
		name?: string | null;

		/** BareMetalAdminNetworkConfig specifies the cluster network configuration. */
		networkConfig?: BareMetalAdminNetworkConfig;

		/** Specifies the node access related settings for the bare metal admin cluster. */
		nodeAccessConfig?: BareMetalAdminNodeAccessConfig;

		/** BareMetalAdminWorkloadNodeConfig specifies the workload node configurations. */
		nodeConfig?: BareMetalAdminWorkloadNodeConfig;

		/** Specifies operating system operation settings for cluster provisioning. */
		osEnvironmentConfig?: BareMetalAdminOsEnvironmentConfig;

		/** BareMetalAdminProxyConfig specifies the cluster proxy configuration. */
		proxy?: BareMetalAdminProxyConfig;

		/** Output only. If set, there are currently changes in flight to the bare metal Admin Cluster. */
		reconciling?: boolean | null;

		/** Specifies the security related settings for the bare metal admin cluster. */
		securityConfig?: BareMetalAdminSecurityConfig;

		/** Output only. The current state of the bare metal admin cluster. */
		state?: BareMetalAdminClusterState | null;

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;

		/** BareMetalAdminStorageConfig specifies the cluster storage configuration. */
		storage?: BareMetalAdminStorageConfig;

		/** Output only. The unique identifier of the bare metal admin cluster. */
		uid?: string | null;

		/** Output only. The time at which this bare metal admin cluster was last updated. */
		updateTime?: string | null;

		/** ValidationCheck represents the result of preflight check. */
		validationCheck?: ValidationCheck;
	}

	/** Resource that represents a bare metal admin cluster. LINT.IfChange */
	export interface BareMetalAdminClusterFormProperties {

		/** Annotations on the bare metal admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** The Anthos clusters on bare metal version for the bare metal admin cluster. */
		bareMetalVersion: FormControl<string | null | undefined>,

		/** Output only. The time at which this bare metal admin cluster was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which this bare metal admin cluster was deleted. If the resource is not deleted, this must be empty */
		deleteTime: FormControl<string | null | undefined>,

		/** A human readable description of this bare metal admin cluster. */
		description: FormControl<string | null | undefined>,

		/** Output only. The IP address name of bare metal admin cluster's API server. */
		endpoint: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The object name of the bare metal cluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
		localName: FormControl<string | null | undefined>,

		/** Immutable. The bare metal admin cluster resource name. */
		name: FormControl<string | null | undefined>,

		/** Output only. If set, there are currently changes in flight to the bare metal Admin Cluster. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current state of the bare metal admin cluster. */
		state: FormControl<BareMetalAdminClusterState | null | undefined>,

		/** Output only. The unique identifier of the bare metal admin cluster. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time at which this bare metal admin cluster was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalAdminClusterFormGroup() {
		return new FormGroup<BareMetalAdminClusterFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			bareMetalVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			localName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BareMetalAdminClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for Binary Authorization. */
	export interface BinaryAuthorization {

		/** Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. */
		evaluationMode?: BinaryAuthorizationEvaluationMode | null;
	}

	/** Configuration for Binary Authorization. */
	export interface BinaryAuthorizationFormProperties {

		/** Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. */
		evaluationMode: FormControl<BinaryAuthorizationEvaluationMode | null | undefined>,
	}
	export function CreateBinaryAuthorizationFormGroup() {
		return new FormGroup<BinaryAuthorizationFormProperties>({
			evaluationMode: new FormControl<BinaryAuthorizationEvaluationMode | null | undefined>(undefined),
		});

	}

	export enum BinaryAuthorizationEvaluationMode { EVALUATION_MODE_UNSPECIFIED = 0, DISABLED = 1, PROJECT_SINGLETON_POLICY_ENFORCE = 2 }


	/** BareMetalAdminClusterOperationsConfig specifies the admin cluster's observability infrastructure. */
	export interface BareMetalAdminClusterOperationsConfig {

		/** Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). */
		enableApplicationLogs?: boolean | null;
	}

	/** BareMetalAdminClusterOperationsConfig specifies the admin cluster's observability infrastructure. */
	export interface BareMetalAdminClusterOperationsConfigFormProperties {

		/** Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). */
		enableApplicationLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalAdminClusterOperationsConfigFormGroup() {
		return new FormGroup<BareMetalAdminClusterOperationsConfigFormProperties>({
			enableApplicationLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminControlPlaneConfig specifies the control plane configuration. */
	export interface BareMetalAdminControlPlaneConfig {

		/** Customizes the default API server args. Only a subset of customized flags are supported. Please refer to the API server documentation below to know the exact format: https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/ */
		apiServerArgs?: Array<BareMetalAdminApiServerArgument>;

		/** BareMetalAdminControlPlaneNodePoolConfig specifies the control plane node pool configuration. We have a control plane specific node pool config so that we can flexible about supporting control plane specific fields in the future. */
		controlPlaneNodePoolConfig?: BareMetalAdminControlPlaneNodePoolConfig;
	}

	/** BareMetalAdminControlPlaneConfig specifies the control plane configuration. */
	export interface BareMetalAdminControlPlaneConfigFormProperties {
	}
	export function CreateBareMetalAdminControlPlaneConfigFormGroup() {
		return new FormGroup<BareMetalAdminControlPlaneConfigFormProperties>({
		});

	}


	/** BareMetalAdminControlPlaneNodePoolConfig specifies the control plane node pool configuration. We have a control plane specific node pool config so that we can flexible about supporting control plane specific fields in the future. */
	export interface BareMetalAdminControlPlaneNodePoolConfig {

		/** BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool. */
		nodePoolConfig?: BareMetalNodePoolConfig;
	}

	/** BareMetalAdminControlPlaneNodePoolConfig specifies the control plane node pool configuration. We have a control plane specific node pool config so that we can flexible about supporting control plane specific fields in the future. */
	export interface BareMetalAdminControlPlaneNodePoolConfigFormProperties {
	}
	export function CreateBareMetalAdminControlPlaneNodePoolConfigFormGroup() {
		return new FormGroup<BareMetalAdminControlPlaneNodePoolConfigFormProperties>({
		});

	}


	/** BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool. */
	export interface BareMetalNodePoolConfig {

		/** KubeletConfig defines the modifiable kubelet configurations for bare metal machines. Note: this list includes fields supported in GKE (see https://cloud.google.com/kubernetes-engine/docs/how-to/node-system-config#kubelet-options). */
		kubeletConfig?: BareMetalKubeletConfig;

		/** The labels assigned to nodes of this node pool. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		labels?: {[id: string]: string };

		/** Required. The list of machine addresses in the bare metal node pool. */
		nodeConfigs?: Array<BareMetalNodeConfig>;

		/** Specifies the nodes operating system (default: LINUX). */
		operatingSystem?: BareMetalNodePoolConfigOperatingSystem | null;

		/** The initial taints assigned to nodes of this node pool. */
		taints?: Array<NodeTaint>;
	}

	/** BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool. */
	export interface BareMetalNodePoolConfigFormProperties {

		/** The labels assigned to nodes of this node pool. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the nodes operating system (default: LINUX). */
		operatingSystem: FormControl<BareMetalNodePoolConfigOperatingSystem | null | undefined>,
	}
	export function CreateBareMetalNodePoolConfigFormGroup() {
		return new FormGroup<BareMetalNodePoolConfigFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operatingSystem: new FormControl<BareMetalNodePoolConfigOperatingSystem | null | undefined>(undefined),
		});

	}


	/** KubeletConfig defines the modifiable kubelet configurations for bare metal machines. Note: this list includes fields supported in GKE (see https://cloud.google.com/kubernetes-engine/docs/how-to/node-system-config#kubelet-options). */
	export interface BareMetalKubeletConfig {

		/** The maximum size of bursty pulls, temporarily allows pulls to burst to this number, while still not exceeding registry_pull_qps. The value must not be a negative number. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 10. */
		registryBurst?: number | null;

		/** The limit of registry pulls per second. Setting this value to 0 means no limit. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 5. */
		registryPullQps?: number | null;

		/** Prevents the Kubelet from pulling multiple images at a time. We recommend *not* changing the default value on nodes that run docker daemon with version < 1.9 or an Another Union File System (Aufs) storage backend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has more details. */
		serializeImagePullsDisabled?: boolean | null;
	}

	/** KubeletConfig defines the modifiable kubelet configurations for bare metal machines. Note: this list includes fields supported in GKE (see https://cloud.google.com/kubernetes-engine/docs/how-to/node-system-config#kubelet-options). */
	export interface BareMetalKubeletConfigFormProperties {

		/** The maximum size of bursty pulls, temporarily allows pulls to burst to this number, while still not exceeding registry_pull_qps. The value must not be a negative number. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 10. */
		registryBurst: FormControl<number | null | undefined>,

		/** The limit of registry pulls per second. Setting this value to 0 means no limit. Updating this field may impact scalability by changing the amount of traffic produced by image pulls. Defaults to 5. */
		registryPullQps: FormControl<number | null | undefined>,

		/** Prevents the Kubelet from pulling multiple images at a time. We recommend *not* changing the default value on nodes that run docker daemon with version < 1.9 or an Another Union File System (Aufs) storage backend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has more details. */
		serializeImagePullsDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalKubeletConfigFormGroup() {
		return new FormGroup<BareMetalKubeletConfigFormProperties>({
			registryBurst: new FormControl<number | null | undefined>(undefined),
			registryPullQps: new FormControl<number | null | undefined>(undefined),
			serializeImagePullsDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** BareMetalNodeConfig lists machine addresses to access Nodes. */
	export interface BareMetalNodeConfig {

		/** The labels assigned to this node. An object containing a list of key/value pairs. The labels here, unioned with the labels set on BareMetalNodePoolConfig are the set of labels that will be applied to the node. If there are any conflicts, the BareMetalNodeConfig labels take precedence. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		labels?: {[id: string]: string };

		/** The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1 */
		nodeIp?: string | null;
	}

	/** BareMetalNodeConfig lists machine addresses to access Nodes. */
	export interface BareMetalNodeConfigFormProperties {

		/** The labels assigned to this node. An object containing a list of key/value pairs. The labels here, unioned with the labels set on BareMetalNodePoolConfig are the set of labels that will be applied to the node. If there are any conflicts, the BareMetalNodeConfig labels take precedence. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1 */
		nodeIp: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalNodeConfigFormGroup() {
		return new FormGroup<BareMetalNodeConfigFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			nodeIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BareMetalNodePoolConfigOperatingSystem { OPERATING_SYSTEM_UNSPECIFIED = 0, LINUX = 1 }


	/** NodeTaint applied to every Kubernetes node in a node pool. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. Node taints are permanent. */
	export interface NodeTaint {

		/** The taint effect. */
		effect?: NodeTaintEffect | null;

		/** Key associated with the effect. */
		key?: string | null;

		/** Value associated with the effect. */
		value?: string | null;
	}

	/** NodeTaint applied to every Kubernetes node in a node pool. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. Node taints are permanent. */
	export interface NodeTaintFormProperties {

		/** The taint effect. */
		effect: FormControl<NodeTaintEffect | null | undefined>,

		/** Key associated with the effect. */
		key: FormControl<string | null | undefined>,

		/** Value associated with the effect. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNodeTaintFormGroup() {
		return new FormGroup<NodeTaintFormProperties>({
			effect: new FormControl<NodeTaintEffect | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeTaintEffect { EFFECT_UNSPECIFIED = 0, NO_SCHEDULE = 1, PREFER_NO_SCHEDULE = 2, NO_EXECUTE = 3 }


	/** Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and manage multi-cluster capabilities and apply consistent policies across your systems. See [Anthos Fleets](`https://cloud.google.com/anthos/multicluster-management/fleets`) for more details on Anthos multi-cluster capabilities using Fleets. ## */
	export interface Fleet {

		/** Output only. The name of the managed fleet Membership resource associated to this cluster. Membership names are formatted as `projects//locations//memberships/`. */
		membership?: string | null;
	}

	/** Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and manage multi-cluster capabilities and apply consistent policies across your systems. See [Anthos Fleets](`https://cloud.google.com/anthos/multicluster-management/fleets`) for more details on Anthos multi-cluster capabilities using Fleets. ## */
	export interface FleetFormProperties {

		/** Output only. The name of the managed fleet Membership resource associated to this cluster. Membership names are formatted as `projects//locations//memberships/`. */
		membership: FormControl<string | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			membership: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminLoadBalancerConfig specifies the load balancer configuration. */
	export interface BareMetalAdminLoadBalancerConfig {

		/** BareMetalAdminManualLbConfig represents configuration parameters for a manual load balancer. */
		manualLbConfig?: BareMetalAdminManualLbConfig;

		/** BareMetalAdminPortConfig is the specification of load balancer ports. */
		portConfig?: BareMetalAdminPortConfig;

		/** BareMetalAdminVipConfig for bare metal load balancer configurations. */
		vipConfig?: BareMetalAdminVipConfig;
	}

	/** BareMetalAdminLoadBalancerConfig specifies the load balancer configuration. */
	export interface BareMetalAdminLoadBalancerConfigFormProperties {
	}
	export function CreateBareMetalAdminLoadBalancerConfigFormGroup() {
		return new FormGroup<BareMetalAdminLoadBalancerConfigFormProperties>({
		});

	}


	/** BareMetalAdminManualLbConfig represents configuration parameters for a manual load balancer. */
	export interface BareMetalAdminManualLbConfig {

		/** Whether manual load balancing is enabled. */
		enabled?: boolean | null;
	}

	/** BareMetalAdminManualLbConfig represents configuration parameters for a manual load balancer. */
	export interface BareMetalAdminManualLbConfigFormProperties {

		/** Whether manual load balancing is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalAdminManualLbConfigFormGroup() {
		return new FormGroup<BareMetalAdminManualLbConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminPortConfig is the specification of load balancer ports. */
	export interface BareMetalAdminPortConfig {

		/** The port that control plane hosted load balancers will listen on. */
		controlPlaneLoadBalancerPort?: number | null;
	}

	/** BareMetalAdminPortConfig is the specification of load balancer ports. */
	export interface BareMetalAdminPortConfigFormProperties {

		/** The port that control plane hosted load balancers will listen on. */
		controlPlaneLoadBalancerPort: FormControl<number | null | undefined>,
	}
	export function CreateBareMetalAdminPortConfigFormGroup() {
		return new FormGroup<BareMetalAdminPortConfigFormProperties>({
			controlPlaneLoadBalancerPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminVipConfig for bare metal load balancer configurations. */
	export interface BareMetalAdminVipConfig {

		/** The VIP which you previously set aside for the Kubernetes API of this bare metal admin cluster. */
		controlPlaneVip?: string | null;
	}

	/** BareMetalAdminVipConfig for bare metal load balancer configurations. */
	export interface BareMetalAdminVipConfigFormProperties {

		/** The VIP which you previously set aside for the Kubernetes API of this bare metal admin cluster. */
		controlPlaneVip: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalAdminVipConfigFormGroup() {
		return new FormGroup<BareMetalAdminVipConfigFormProperties>({
			controlPlaneVip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminMaintenanceConfig specifies configurations to put bare metal Admin cluster CRs nodes in and out of maintenance. */
	export interface BareMetalAdminMaintenanceConfig {

		/** Required. All IPv4 address from these ranges will be placed into maintenance mode. Nodes in maintenance mode will be cordoned and drained. When both of these are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set on the node resource. */
		maintenanceAddressCidrBlocks?: Array<string>;
	}

	/** BareMetalAdminMaintenanceConfig specifies configurations to put bare metal Admin cluster CRs nodes in and out of maintenance. */
	export interface BareMetalAdminMaintenanceConfigFormProperties {
	}
	export function CreateBareMetalAdminMaintenanceConfigFormGroup() {
		return new FormGroup<BareMetalAdminMaintenanceConfigFormProperties>({
		});

	}


	/** BareMetalAdminMaintenanceStatus represents the maintenance status for bare metal Admin cluster CR's nodes. */
	export interface BareMetalAdminMaintenanceStatus {

		/** BareMetalAdminMachineDrainStatus represents the status of bare metal node machines that are undergoing drain operations. */
		machineDrainStatus?: BareMetalAdminMachineDrainStatus;
	}

	/** BareMetalAdminMaintenanceStatus represents the maintenance status for bare metal Admin cluster CR's nodes. */
	export interface BareMetalAdminMaintenanceStatusFormProperties {
	}
	export function CreateBareMetalAdminMaintenanceStatusFormGroup() {
		return new FormGroup<BareMetalAdminMaintenanceStatusFormProperties>({
		});

	}


	/** BareMetalAdminMachineDrainStatus represents the status of bare metal node machines that are undergoing drain operations. */
	export interface BareMetalAdminMachineDrainStatus {

		/** The list of drained machines. */
		drainedMachines?: Array<BareMetalAdminDrainedMachine>;

		/** The list of draning machines. */
		drainingMachines?: Array<BareMetalAdminDrainingMachine>;
	}

	/** BareMetalAdminMachineDrainStatus represents the status of bare metal node machines that are undergoing drain operations. */
	export interface BareMetalAdminMachineDrainStatusFormProperties {
	}
	export function CreateBareMetalAdminMachineDrainStatusFormGroup() {
		return new FormGroup<BareMetalAdminMachineDrainStatusFormProperties>({
		});

	}


	/** BareMetalAdminDrainedMachine represents the machines that are drained. */
	export interface BareMetalAdminDrainedMachine {

		/** Drained machine IP address. */
		nodeIp?: string | null;
	}

	/** BareMetalAdminDrainedMachine represents the machines that are drained. */
	export interface BareMetalAdminDrainedMachineFormProperties {

		/** Drained machine IP address. */
		nodeIp: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalAdminDrainedMachineFormGroup() {
		return new FormGroup<BareMetalAdminDrainedMachineFormProperties>({
			nodeIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminDrainingMachine represents the machines that are currently draining. */
	export interface BareMetalAdminDrainingMachine {

		/** Draining machine IP address. */
		nodeIp?: string | null;

		/** The count of pods yet to drain. */
		podCount?: number | null;
	}

	/** BareMetalAdminDrainingMachine represents the machines that are currently draining. */
	export interface BareMetalAdminDrainingMachineFormProperties {

		/** Draining machine IP address. */
		nodeIp: FormControl<string | null | undefined>,

		/** The count of pods yet to drain. */
		podCount: FormControl<number | null | undefined>,
	}
	export function CreateBareMetalAdminDrainingMachineFormGroup() {
		return new FormGroup<BareMetalAdminDrainingMachineFormProperties>({
			nodeIp: new FormControl<string | null | undefined>(undefined),
			podCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminNetworkConfig specifies the cluster network configuration. */
	export interface BareMetalAdminNetworkConfig {

		/** BareMetalAdminIslandModeCidrConfig specifies the cluster CIDR configuration while running in island mode. */
		islandModeCidr?: BareMetalAdminIslandModeCidrConfig;
	}

	/** BareMetalAdminNetworkConfig specifies the cluster network configuration. */
	export interface BareMetalAdminNetworkConfigFormProperties {
	}
	export function CreateBareMetalAdminNetworkConfigFormGroup() {
		return new FormGroup<BareMetalAdminNetworkConfigFormProperties>({
		});

	}


	/** BareMetalAdminIslandModeCidrConfig specifies the cluster CIDR configuration while running in island mode. */
	export interface BareMetalAdminIslandModeCidrConfig {

		/** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. */
		podAddressCidrBlocks?: Array<string>;

		/** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. */
		serviceAddressCidrBlocks?: Array<string>;
	}

	/** BareMetalAdminIslandModeCidrConfig specifies the cluster CIDR configuration while running in island mode. */
	export interface BareMetalAdminIslandModeCidrConfigFormProperties {
	}
	export function CreateBareMetalAdminIslandModeCidrConfigFormGroup() {
		return new FormGroup<BareMetalAdminIslandModeCidrConfigFormProperties>({
		});

	}


	/** Specifies the node access related settings for the bare metal admin cluster. */
	export interface BareMetalAdminNodeAccessConfig {

		/** Required. LoginUser is the user name used to access node machines. It defaults to "root" if not set. */
		loginUser?: string | null;
	}

	/** Specifies the node access related settings for the bare metal admin cluster. */
	export interface BareMetalAdminNodeAccessConfigFormProperties {

		/** Required. LoginUser is the user name used to access node machines. It defaults to "root" if not set. */
		loginUser: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalAdminNodeAccessConfigFormGroup() {
		return new FormGroup<BareMetalAdminNodeAccessConfigFormProperties>({
			loginUser: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminWorkloadNodeConfig specifies the workload node configurations. */
	export interface BareMetalAdminWorkloadNodeConfig {

		/** The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. By default 110 Pods are created per Node. Upper bound is 250 for both HA and non-HA admin cluster. Lower bound is 64 for non-HA admin cluster and 32 for HA admin cluster. */
		maxPodsPerNode?: string | null;
	}

	/** BareMetalAdminWorkloadNodeConfig specifies the workload node configurations. */
	export interface BareMetalAdminWorkloadNodeConfigFormProperties {

		/** The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. By default 110 Pods are created per Node. Upper bound is 250 for both HA and non-HA admin cluster. Lower bound is 64 for non-HA admin cluster and 32 for HA admin cluster. */
		maxPodsPerNode: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalAdminWorkloadNodeConfigFormGroup() {
		return new FormGroup<BareMetalAdminWorkloadNodeConfigFormProperties>({
			maxPodsPerNode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies operating system operation settings for cluster provisioning. */
	export interface BareMetalAdminOsEnvironmentConfig {

		/** Whether the package repo should be added when initializing bare metal machines. */
		packageRepoExcluded?: boolean | null;
	}

	/** Specifies operating system operation settings for cluster provisioning. */
	export interface BareMetalAdminOsEnvironmentConfigFormProperties {

		/** Whether the package repo should be added when initializing bare metal machines. */
		packageRepoExcluded: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalAdminOsEnvironmentConfigFormGroup() {
		return new FormGroup<BareMetalAdminOsEnvironmentConfigFormProperties>({
			packageRepoExcluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** BareMetalAdminProxyConfig specifies the cluster proxy configuration. */
	export interface BareMetalAdminProxyConfig {

		/** A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"]. */
		noProxy?: Array<string>;

		/** Required. Specifies the address of your proxy server. Examples: `http://domain` WARNING: Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server. */
		uri?: string | null;
	}

	/** BareMetalAdminProxyConfig specifies the cluster proxy configuration. */
	export interface BareMetalAdminProxyConfigFormProperties {

		/** Required. Specifies the address of your proxy server. Examples: `http://domain` WARNING: Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalAdminProxyConfigFormGroup() {
		return new FormGroup<BareMetalAdminProxyConfigFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the security related settings for the bare metal admin cluster. */
	export interface BareMetalAdminSecurityConfig {

		/** Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster. */
		authorization?: Authorization;
	}

	/** Specifies the security related settings for the bare metal admin cluster. */
	export interface BareMetalAdminSecurityConfigFormProperties {
	}
	export function CreateBareMetalAdminSecurityConfigFormGroup() {
		return new FormGroup<BareMetalAdminSecurityConfigFormProperties>({
		});

	}

	export enum BareMetalAdminClusterState { STATE_UNSPECIFIED = 0, PROVISIONING = 1, RUNNING = 2, RECONCILING = 3, STOPPING = 4, ERROR = 5, DEGRADED = 6 }


	/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
	export interface ResourceStatus {

		/** ResourceCondition provide a standard mechanism for higher-level status reporting from controller. */
		conditions?: Array<ResourceCondition>;

		/** Human-friendly representation of the error message from controller. The error message can be temporary as the controller controller creates a cluster or node pool. If the error message persists for a longer period of time, it can be used to surface error message to indicate real problems requiring user intervention. */
		errorMessage?: string | null;
	}

	/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
	export interface ResourceStatusFormProperties {

		/** Human-friendly representation of the error message from controller. The error message can be temporary as the controller controller creates a cluster or node pool. If the error message persists for a longer period of time, it can be used to surface error message to indicate real problems requiring user intervention. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateResourceStatusFormGroup() {
		return new FormGroup<ResourceStatusFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceCondition provides a standard mechanism for higher-level status reporting from controller. */
	export interface ResourceCondition {

		/** Last time the condition transit from one status to another. */
		lastTransitionTime?: string | null;

		/** Human-readable message indicating details about last transition. */
		message?: string | null;

		/** Machine-readable message indicating details about last transition. */
		reason?: string | null;

		/** state of the condition. */
		state?: ResourceConditionState | null;

		/** Type of the condition. (e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady) */
		type?: string | null;
	}

	/** ResourceCondition provides a standard mechanism for higher-level status reporting from controller. */
	export interface ResourceConditionFormProperties {

		/** Last time the condition transit from one status to another. */
		lastTransitionTime: FormControl<string | null | undefined>,

		/** Human-readable message indicating details about last transition. */
		message: FormControl<string | null | undefined>,

		/** Machine-readable message indicating details about last transition. */
		reason: FormControl<string | null | undefined>,

		/** state of the condition. */
		state: FormControl<ResourceConditionState | null | undefined>,

		/** Type of the condition. (e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceConditionFormGroup() {
		return new FormGroup<ResourceConditionFormProperties>({
			lastTransitionTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ResourceConditionState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceConditionState { STATE_UNSPECIFIED = 0, STATE_TRUE = 1, STATE_FALSE = 2, STATE_UNKNOWN = 3 }


	/** BareMetalAdminStorageConfig specifies the cluster storage configuration. */
	export interface BareMetalAdminStorageConfig {

		/** Specifies the configs for local persistent volumes (PVs). */
		lvpNodeMountsConfig?: BareMetalLvpConfig;

		/** Specifies the configs for local persistent volumes under a shared file system. */
		lvpShareConfig?: BareMetalLvpShareConfig;
	}

	/** BareMetalAdminStorageConfig specifies the cluster storage configuration. */
	export interface BareMetalAdminStorageConfigFormProperties {
	}
	export function CreateBareMetalAdminStorageConfigFormGroup() {
		return new FormGroup<BareMetalAdminStorageConfigFormProperties>({
		});

	}


	/** Specifies the configs for local persistent volumes (PVs). */
	export interface BareMetalLvpConfig {

		/** Required. The host machine path. */
		path?: string | null;

		/** Required. The StorageClass name that PVs will be created with. */
		storageClass?: string | null;
	}

	/** Specifies the configs for local persistent volumes (PVs). */
	export interface BareMetalLvpConfigFormProperties {

		/** Required. The host machine path. */
		path: FormControl<string | null | undefined>,

		/** Required. The StorageClass name that PVs will be created with. */
		storageClass: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalLvpConfigFormGroup() {
		return new FormGroup<BareMetalLvpConfigFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			storageClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configs for local persistent volumes under a shared file system. */
	export interface BareMetalLvpShareConfig {

		/** Specifies the configs for local persistent volumes (PVs). */
		lvpConfig?: BareMetalLvpConfig;

		/** The number of subdirectories to create under path. */
		sharedPathPvCount?: number | null;
	}

	/** Specifies the configs for local persistent volumes under a shared file system. */
	export interface BareMetalLvpShareConfigFormProperties {

		/** The number of subdirectories to create under path. */
		sharedPathPvCount: FormControl<number | null | undefined>,
	}
	export function CreateBareMetalLvpShareConfigFormGroup() {
		return new FormGroup<BareMetalLvpShareConfigFormProperties>({
			sharedPathPvCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ValidationCheck represents the result of preflight check. */
	export interface ValidationCheck {

		/** Options used for the validation check */
		option?: ValidationCheckOption | null;

		/** Output only. The scenario when the preflight checks were run. */
		scenario?: ValidationCheckScenario | null;

		/** ValidationCheckStatus defines the detailed validation check status. */
		status?: ValidationCheckStatus;
	}

	/** ValidationCheck represents the result of preflight check. */
	export interface ValidationCheckFormProperties {

		/** Options used for the validation check */
		option: FormControl<ValidationCheckOption | null | undefined>,

		/** Output only. The scenario when the preflight checks were run. */
		scenario: FormControl<ValidationCheckScenario | null | undefined>,
	}
	export function CreateValidationCheckFormGroup() {
		return new FormGroup<ValidationCheckFormProperties>({
			option: new FormControl<ValidationCheckOption | null | undefined>(undefined),
			scenario: new FormControl<ValidationCheckScenario | null | undefined>(undefined),
		});

	}

	export enum ValidationCheckOption { OPTIONS_UNSPECIFIED = 0, SKIP_VALIDATION_CHECK_BLOCKING = 1, SKIP_VALIDATION_ALL = 2 }

	export enum ValidationCheckScenario { SCENARIO_UNSPECIFIED = 0, CREATE = 1, UPDATE = 2 }


	/** ValidationCheckStatus defines the detailed validation check status. */
	export interface ValidationCheckStatus {

		/** Individual checks which failed as part of the Preflight check execution. */
		result?: Array<ValidationCheckResult>;
	}

	/** ValidationCheckStatus defines the detailed validation check status. */
	export interface ValidationCheckStatusFormProperties {
	}
	export function CreateValidationCheckStatusFormGroup() {
		return new FormGroup<ValidationCheckStatusFormProperties>({
		});

	}


	/** ValidationCheckResult defines the details about the validation check. */
	export interface ValidationCheckResult {

		/** The category of the validation. */
		category?: string | null;

		/** The description of the validation check. */
		description?: string | null;

		/** Detailed failure information, which might be unformatted. */
		details?: string | null;

		/** A human-readable message of the check failure. */
		reason?: string | null;

		/** The validation check state. */
		state?: ValidationCheckResultState | null;
	}

	/** ValidationCheckResult defines the details about the validation check. */
	export interface ValidationCheckResultFormProperties {

		/** The category of the validation. */
		category: FormControl<string | null | undefined>,

		/** The description of the validation check. */
		description: FormControl<string | null | undefined>,

		/** Detailed failure information, which might be unformatted. */
		details: FormControl<string | null | undefined>,

		/** A human-readable message of the check failure. */
		reason: FormControl<string | null | undefined>,

		/** The validation check state. */
		state: FormControl<ValidationCheckResultState | null | undefined>,
	}
	export function CreateValidationCheckResultFormGroup() {
		return new FormGroup<ValidationCheckResultFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ValidationCheckResultState | null | undefined>(undefined),
		});

	}

	export enum ValidationCheckResultState { STATE_UNKNOWN = 0, STATE_FAILURE = 1, STATE_SKIPPED = 2, STATE_FATAL = 3, STATE_WARNING = 4 }


	/** Represents an arg name->value pair. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/). */
	export interface BareMetalApiServerArgument {

		/** Required. The argument name as it appears on the API Server command line, make sure to remove the leading dashes. */
		argument?: string | null;

		/** Required. The value of the arg as it will be passed to the API Server command line. */
		value?: string | null;
	}

	/** Represents an arg name->value pair. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/). */
	export interface BareMetalApiServerArgumentFormProperties {

		/** Required. The argument name as it appears on the API Server command line, make sure to remove the leading dashes. */
		argument: FormControl<string | null | undefined>,

		/** Required. The value of the arg as it will be passed to the API Server command line. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalApiServerArgumentFormGroup() {
		return new FormGroup<BareMetalApiServerArgumentFormProperties>({
			argument: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalBgpLbConfig represents configuration parameters for a Border Gateway Protocol (BGP) load balancer. */
	export interface BareMetalBgpLbConfig {

		/** Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. */
		addressPools?: Array<BareMetalLoadBalancerAddressPool>;

		/** Required. BGP autonomous system number (ASN) of the cluster. This field can be updated after cluster creation. */
		asn?: string | null;

		/** Required. The list of BGP peers that the cluster will connect to. At least one peer must be configured for each control plane node. Control plane nodes will connect to these peers to advertise the control plane VIP. The Services load balancer also uses these peers by default. This field can be updated after cluster creation. */
		bgpPeerConfigs?: Array<BareMetalBgpPeerConfig>;

		/** Specifies the load balancer's node pool configuration. */
		loadBalancerNodePoolConfig?: BareMetalLoadBalancerNodePoolConfig;
	}

	/** BareMetalBgpLbConfig represents configuration parameters for a Border Gateway Protocol (BGP) load balancer. */
	export interface BareMetalBgpLbConfigFormProperties {

		/** Required. BGP autonomous system number (ASN) of the cluster. This field can be updated after cluster creation. */
		asn: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalBgpLbConfigFormGroup() {
		return new FormGroup<BareMetalBgpLbConfigFormProperties>({
			asn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an IP pool used by the load balancer. */
	export interface BareMetalLoadBalancerAddressPool {

		/** Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5). */
		addresses?: Array<string>;

		/** If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. */
		avoidBuggyIps?: boolean | null;

		/** If true, prevent IP addresses from being automatically assigned. */
		manualAssign?: boolean | null;

		/** Required. The name of the address pool. */
		pool?: string | null;
	}

	/** Represents an IP pool used by the load balancer. */
	export interface BareMetalLoadBalancerAddressPoolFormProperties {

		/** If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. */
		avoidBuggyIps: FormControl<boolean | null | undefined>,

		/** If true, prevent IP addresses from being automatically assigned. */
		manualAssign: FormControl<boolean | null | undefined>,

		/** Required. The name of the address pool. */
		pool: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalLoadBalancerAddressPoolFormGroup() {
		return new FormGroup<BareMetalLoadBalancerAddressPoolFormProperties>({
			avoidBuggyIps: new FormControl<boolean | null | undefined>(undefined),
			manualAssign: new FormControl<boolean | null | undefined>(undefined),
			pool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalBgpPeerConfig represents configuration parameters for a Border Gateway Protocol (BGP) peer. */
	export interface BareMetalBgpPeerConfig {

		/** Required. BGP autonomous system number (ASN) for the network that contains the external peer device. */
		asn?: string | null;

		/** The IP address of the control plane node that connects to the external peer. If you don't specify any control plane nodes, all control plane nodes can connect to the external peer. If you specify one or more IP addresses, only the nodes specified participate in peering sessions. */
		controlPlaneNodes?: Array<string>;

		/** Required. The IP address of the external peer device. */
		ipAddress?: string | null;
	}

	/** BareMetalBgpPeerConfig represents configuration parameters for a Border Gateway Protocol (BGP) peer. */
	export interface BareMetalBgpPeerConfigFormProperties {

		/** Required. BGP autonomous system number (ASN) for the network that contains the external peer device. */
		asn: FormControl<string | null | undefined>,

		/** Required. The IP address of the external peer device. */
		ipAddress: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalBgpPeerConfigFormGroup() {
		return new FormGroup<BareMetalBgpPeerConfigFormProperties>({
			asn: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the load balancer's node pool configuration. */
	export interface BareMetalLoadBalancerNodePoolConfig {

		/** BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool. */
		nodePoolConfig?: BareMetalNodePoolConfig;
	}

	/** Specifies the load balancer's node pool configuration. */
	export interface BareMetalLoadBalancerNodePoolConfigFormProperties {
	}
	export function CreateBareMetalLoadBalancerNodePoolConfigFormGroup() {
		return new FormGroup<BareMetalLoadBalancerNodePoolConfigFormProperties>({
		});

	}


	/** Resource that represents a bare metal user cluster. LINT.IfChange */
	export interface BareMetalCluster {

		/** Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. */
		adminClusterMembership?: string | null;

		/** Output only. The resource name of the bare metal admin cluster managing this user cluster. */
		adminClusterName?: string | null;

		/** Annotations on the bare metal user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** Required. The Anthos clusters on bare metal version for your user cluster. */
		bareMetalVersion?: string | null;

		/** Configuration for Binary Authorization. */
		binaryAuthorization?: BinaryAuthorization;

		/** Specifies the bare metal user cluster's observability infrastructure. */
		clusterOperations?: BareMetalClusterOperationsConfig;

		/** Specifies the control plane configuration. */
		controlPlane?: BareMetalControlPlaneConfig;

		/** Output only. The time when the bare metal user cluster was created. */
		createTime?: string | null;

		/** Output only. The time when the bare metal user cluster was deleted. If the resource is not deleted, this must be empty */
		deleteTime?: string | null;

		/** A human readable description of this bare metal user cluster. */
		description?: string | null;

		/** Output only. The IP address of the bare metal user cluster's API server. */
		endpoint?: string | null;

		/** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag?: string | null;

		/** Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and manage multi-cluster capabilities and apply consistent policies across your systems. See [Anthos Fleets](`https://cloud.google.com/anthos/multicluster-management/fleets`) for more details on Anthos multi-cluster capabilities using Fleets. ## */
		fleet?: Fleet;

		/** Specifies the load balancer configuration. */
		loadBalancer?: BareMetalLoadBalancerConfig;

		/** Output only. The object name of the bare metal user cluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the name in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. When the local name and cluster name differ, the local name is used in the admin cluster controller logs. You use the cluster name when accessing the cluster using bmctl and kubectl. */
		localName?: string | null;

		/** Specifies configurations to put bare metal nodes in and out of maintenance. */
		maintenanceConfig?: BareMetalMaintenanceConfig;

		/** Represents the maintenance status of the bare metal user cluster. */
		maintenanceStatus?: BareMetalMaintenanceStatus;

		/** Immutable. The bare metal user cluster resource name. */
		name?: string | null;

		/** Specifies the cluster network configuration. */
		networkConfig?: BareMetalNetworkConfig;

		/** Specifies the node access related settings for the bare metal user cluster. */
		nodeAccessConfig?: BareMetalNodeAccessConfig;

		/** Specifies the workload node configurations. */
		nodeConfig?: BareMetalWorkloadNodeConfig;

		/** Specifies operating system settings for cluster provisioning. */
		osEnvironmentConfig?: BareMetalOsEnvironmentConfig;

		/** Specifies the cluster proxy configuration. */
		proxy?: BareMetalProxyConfig;

		/** Output only. If set, there are currently changes in flight to the bare metal user cluster. */
		reconciling?: boolean | null;

		/** Specifies the security related settings for the bare metal user cluster. */
		securityConfig?: BareMetalSecurityConfig;

		/** Output only. The current state of the bare metal user cluster. */
		state?: BareMetalAdminClusterState | null;

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;

		/** BareMetalStorageConfig specifies the cluster storage configuration. */
		storage?: BareMetalStorageConfig;

		/** Output only. The unique identifier of the bare metal user cluster. */
		uid?: string | null;

		/** Output only. The time when the bare metal user cluster was last updated. */
		updateTime?: string | null;

		/** BareMetalClusterUpgradePolicy defines the cluster upgrade policy. */
		upgradePolicy?: BareMetalClusterUpgradePolicy;

		/** ValidationCheck represents the result of preflight check. */
		validationCheck?: ValidationCheck;
	}

	/** Resource that represents a bare metal user cluster. LINT.IfChange */
	export interface BareMetalClusterFormProperties {

		/** Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. */
		adminClusterMembership: FormControl<string | null | undefined>,

		/** Output only. The resource name of the bare metal admin cluster managing this user cluster. */
		adminClusterName: FormControl<string | null | undefined>,

		/** Annotations on the bare metal user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The Anthos clusters on bare metal version for your user cluster. */
		bareMetalVersion: FormControl<string | null | undefined>,

		/** Output only. The time when the bare metal user cluster was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time when the bare metal user cluster was deleted. If the resource is not deleted, this must be empty */
		deleteTime: FormControl<string | null | undefined>,

		/** A human readable description of this bare metal user cluster. */
		description: FormControl<string | null | undefined>,

		/** Output only. The IP address of the bare metal user cluster's API server. */
		endpoint: FormControl<string | null | undefined>,

		/** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The object name of the bare metal user cluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the name in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. When the local name and cluster name differ, the local name is used in the admin cluster controller logs. You use the cluster name when accessing the cluster using bmctl and kubectl. */
		localName: FormControl<string | null | undefined>,

		/** Immutable. The bare metal user cluster resource name. */
		name: FormControl<string | null | undefined>,

		/** Output only. If set, there are currently changes in flight to the bare metal user cluster. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current state of the bare metal user cluster. */
		state: FormControl<BareMetalAdminClusterState | null | undefined>,

		/** Output only. The unique identifier of the bare metal user cluster. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the bare metal user cluster was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalClusterFormGroup() {
		return new FormGroup<BareMetalClusterFormProperties>({
			adminClusterMembership: new FormControl<string | null | undefined>(undefined),
			adminClusterName: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			bareMetalVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			localName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BareMetalAdminClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the bare metal user cluster's observability infrastructure. */
	export interface BareMetalClusterOperationsConfig {

		/** Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). */
		enableApplicationLogs?: boolean | null;
	}

	/** Specifies the bare metal user cluster's observability infrastructure. */
	export interface BareMetalClusterOperationsConfigFormProperties {

		/** Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics). */
		enableApplicationLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalClusterOperationsConfigFormGroup() {
		return new FormGroup<BareMetalClusterOperationsConfigFormProperties>({
			enableApplicationLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the control plane configuration. */
	export interface BareMetalControlPlaneConfig {

		/** Customizes the default API server args. Only a subset of customized flags are supported. For the exact format, refer to the [API server documentation](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/). */
		apiServerArgs?: Array<BareMetalApiServerArgument>;

		/** Specifies the control plane node pool configuration. */
		controlPlaneNodePoolConfig?: BareMetalControlPlaneNodePoolConfig;
	}

	/** Specifies the control plane configuration. */
	export interface BareMetalControlPlaneConfigFormProperties {
	}
	export function CreateBareMetalControlPlaneConfigFormGroup() {
		return new FormGroup<BareMetalControlPlaneConfigFormProperties>({
		});

	}


	/** Specifies the control plane node pool configuration. */
	export interface BareMetalControlPlaneNodePoolConfig {

		/** BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool. */
		nodePoolConfig?: BareMetalNodePoolConfig;
	}

	/** Specifies the control plane node pool configuration. */
	export interface BareMetalControlPlaneNodePoolConfigFormProperties {
	}
	export function CreateBareMetalControlPlaneNodePoolConfigFormGroup() {
		return new FormGroup<BareMetalControlPlaneNodePoolConfigFormProperties>({
		});

	}


	/** Specifies the load balancer configuration. */
	export interface BareMetalLoadBalancerConfig {

		/** BareMetalBgpLbConfig represents configuration parameters for a Border Gateway Protocol (BGP) load balancer. */
		bgpLbConfig?: BareMetalBgpLbConfig;

		/** Represents configuration parameters for a manual load balancer. */
		manualLbConfig?: BareMetalManualLbConfig;

		/** Represents configuration parameters for a MetalLB load balancer. */
		metalLbConfig?: BareMetalMetalLbConfig;

		/** Specifies load balancer ports for the bare metal user cluster. */
		portConfig?: BareMetalPortConfig;

		/** Specifies the VIP config for the bare metal load balancer. */
		vipConfig?: BareMetalVipConfig;
	}

	/** Specifies the load balancer configuration. */
	export interface BareMetalLoadBalancerConfigFormProperties {
	}
	export function CreateBareMetalLoadBalancerConfigFormGroup() {
		return new FormGroup<BareMetalLoadBalancerConfigFormProperties>({
		});

	}


	/** Represents configuration parameters for a manual load balancer. */
	export interface BareMetalManualLbConfig {

		/** Whether manual load balancing is enabled. */
		enabled?: boolean | null;
	}

	/** Represents configuration parameters for a manual load balancer. */
	export interface BareMetalManualLbConfigFormProperties {

		/** Whether manual load balancing is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalManualLbConfigFormGroup() {
		return new FormGroup<BareMetalManualLbConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents configuration parameters for a MetalLB load balancer. */
	export interface BareMetalMetalLbConfig {

		/** Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. */
		addressPools?: Array<BareMetalLoadBalancerAddressPool>;

		/** Specifies the load balancer's node pool configuration. */
		loadBalancerNodePoolConfig?: BareMetalLoadBalancerNodePoolConfig;
	}

	/** Represents configuration parameters for a MetalLB load balancer. */
	export interface BareMetalMetalLbConfigFormProperties {
	}
	export function CreateBareMetalMetalLbConfigFormGroup() {
		return new FormGroup<BareMetalMetalLbConfigFormProperties>({
		});

	}


	/** Specifies load balancer ports for the bare metal user cluster. */
	export interface BareMetalPortConfig {

		/** The port that control plane hosted load balancers will listen on. */
		controlPlaneLoadBalancerPort?: number | null;
	}

	/** Specifies load balancer ports for the bare metal user cluster. */
	export interface BareMetalPortConfigFormProperties {

		/** The port that control plane hosted load balancers will listen on. */
		controlPlaneLoadBalancerPort: FormControl<number | null | undefined>,
	}
	export function CreateBareMetalPortConfigFormGroup() {
		return new FormGroup<BareMetalPortConfigFormProperties>({
			controlPlaneLoadBalancerPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the VIP config for the bare metal load balancer. */
	export interface BareMetalVipConfig {

		/** The VIP which you previously set aside for the Kubernetes API of this bare metal user cluster. */
		controlPlaneVip?: string | null;

		/** The VIP which you previously set aside for ingress traffic into this bare metal user cluster. */
		ingressVip?: string | null;
	}

	/** Specifies the VIP config for the bare metal load balancer. */
	export interface BareMetalVipConfigFormProperties {

		/** The VIP which you previously set aside for the Kubernetes API of this bare metal user cluster. */
		controlPlaneVip: FormControl<string | null | undefined>,

		/** The VIP which you previously set aside for ingress traffic into this bare metal user cluster. */
		ingressVip: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalVipConfigFormGroup() {
		return new FormGroup<BareMetalVipConfigFormProperties>({
			controlPlaneVip: new FormControl<string | null | undefined>(undefined),
			ingressVip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies configurations to put bare metal nodes in and out of maintenance. */
	export interface BareMetalMaintenanceConfig {

		/** Required. All IPv4 address from these ranges will be placed into maintenance mode. Nodes in maintenance mode will be cordoned and drained. When both of these are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set on the node resource. */
		maintenanceAddressCidrBlocks?: Array<string>;
	}

	/** Specifies configurations to put bare metal nodes in and out of maintenance. */
	export interface BareMetalMaintenanceConfigFormProperties {
	}
	export function CreateBareMetalMaintenanceConfigFormGroup() {
		return new FormGroup<BareMetalMaintenanceConfigFormProperties>({
		});

	}


	/** Represents the maintenance status of the bare metal user cluster. */
	export interface BareMetalMaintenanceStatus {

		/** Represents the status of node machines that are undergoing drain operations. */
		machineDrainStatus?: BareMetalMachineDrainStatus;
	}

	/** Represents the maintenance status of the bare metal user cluster. */
	export interface BareMetalMaintenanceStatusFormProperties {
	}
	export function CreateBareMetalMaintenanceStatusFormGroup() {
		return new FormGroup<BareMetalMaintenanceStatusFormProperties>({
		});

	}


	/** Represents the status of node machines that are undergoing drain operations. */
	export interface BareMetalMachineDrainStatus {

		/** The list of drained machines. */
		drainedMachines?: Array<BareMetalDrainedMachine>;

		/** The list of draning machines. */
		drainingMachines?: Array<BareMetalDrainingMachine>;
	}

	/** Represents the status of node machines that are undergoing drain operations. */
	export interface BareMetalMachineDrainStatusFormProperties {
	}
	export function CreateBareMetalMachineDrainStatusFormGroup() {
		return new FormGroup<BareMetalMachineDrainStatusFormProperties>({
		});

	}


	/** Represents a machine that is currently drained. */
	export interface BareMetalDrainedMachine {

		/** Drained machine IP address. */
		nodeIp?: string | null;
	}

	/** Represents a machine that is currently drained. */
	export interface BareMetalDrainedMachineFormProperties {

		/** Drained machine IP address. */
		nodeIp: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalDrainedMachineFormGroup() {
		return new FormGroup<BareMetalDrainedMachineFormProperties>({
			nodeIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a machine that is currently draining. */
	export interface BareMetalDrainingMachine {

		/** Draining machine IP address. */
		nodeIp?: string | null;

		/** The count of pods yet to drain. */
		podCount?: number | null;
	}

	/** Represents a machine that is currently draining. */
	export interface BareMetalDrainingMachineFormProperties {

		/** Draining machine IP address. */
		nodeIp: FormControl<string | null | undefined>,

		/** The count of pods yet to drain. */
		podCount: FormControl<number | null | undefined>,
	}
	export function CreateBareMetalDrainingMachineFormGroup() {
		return new FormGroup<BareMetalDrainingMachineFormProperties>({
			nodeIp: new FormControl<string | null | undefined>(undefined),
			podCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the cluster network configuration. */
	export interface BareMetalNetworkConfig {

		/** Enables the use of advanced Anthos networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway. Setting configuration for advanced networking features will automatically set this flag. */
		advancedNetworking?: boolean | null;

		/** Specifies the cluster CIDR configuration while running in island mode. */
		islandModeCidr?: BareMetalIslandModeCidrConfig;

		/** Specifies the multiple networking interfaces cluster configuration. */
		multipleNetworkInterfacesConfig?: BareMetalMultipleNetworkInterfacesConfig;

		/** Specifies the SR-IOV networking operator config. */
		srIovConfig?: BareMetalSrIovConfig;
	}

	/** Specifies the cluster network configuration. */
	export interface BareMetalNetworkConfigFormProperties {

		/** Enables the use of advanced Anthos networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway. Setting configuration for advanced networking features will automatically set this flag. */
		advancedNetworking: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalNetworkConfigFormGroup() {
		return new FormGroup<BareMetalNetworkConfigFormProperties>({
			advancedNetworking: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the cluster CIDR configuration while running in island mode. */
	export interface BareMetalIslandModeCidrConfig {

		/** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. */
		podAddressCidrBlocks?: Array<string>;

		/** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field is mutable after creation starting with version 1.15. */
		serviceAddressCidrBlocks?: Array<string>;
	}

	/** Specifies the cluster CIDR configuration while running in island mode. */
	export interface BareMetalIslandModeCidrConfigFormProperties {
	}
	export function CreateBareMetalIslandModeCidrConfigFormGroup() {
		return new FormGroup<BareMetalIslandModeCidrConfigFormProperties>({
		});

	}


	/** Specifies the multiple networking interfaces cluster configuration. */
	export interface BareMetalMultipleNetworkInterfacesConfig {

		/** Whether to enable multiple network interfaces for your pods. When set network_config.advanced_networking is automatically set to true. */
		enabled?: boolean | null;
	}

	/** Specifies the multiple networking interfaces cluster configuration. */
	export interface BareMetalMultipleNetworkInterfacesConfigFormProperties {

		/** Whether to enable multiple network interfaces for your pods. When set network_config.advanced_networking is automatically set to true. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalMultipleNetworkInterfacesConfigFormGroup() {
		return new FormGroup<BareMetalMultipleNetworkInterfacesConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the SR-IOV networking operator config. */
	export interface BareMetalSrIovConfig {

		/** Whether to install the SR-IOV operator. */
		enabled?: boolean | null;
	}

	/** Specifies the SR-IOV networking operator config. */
	export interface BareMetalSrIovConfigFormProperties {

		/** Whether to install the SR-IOV operator. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalSrIovConfigFormGroup() {
		return new FormGroup<BareMetalSrIovConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the node access related settings for the bare metal user cluster. */
	export interface BareMetalNodeAccessConfig {

		/** LoginUser is the user name used to access node machines. It defaults to "root" if not set. */
		loginUser?: string | null;
	}

	/** Specifies the node access related settings for the bare metal user cluster. */
	export interface BareMetalNodeAccessConfigFormProperties {

		/** LoginUser is the user name used to access node machines. It defaults to "root" if not set. */
		loginUser: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalNodeAccessConfigFormGroup() {
		return new FormGroup<BareMetalNodeAccessConfigFormProperties>({
			loginUser: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the workload node configurations. */
	export interface BareMetalWorkloadNodeConfig {

		/** Specifies which container runtime will be used. */
		containerRuntime?: BareMetalWorkloadNodeConfigContainerRuntime | null;

		/** The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. */
		maxPodsPerNode?: string | null;
	}

	/** Specifies the workload node configurations. */
	export interface BareMetalWorkloadNodeConfigFormProperties {

		/** Specifies which container runtime will be used. */
		containerRuntime: FormControl<BareMetalWorkloadNodeConfigContainerRuntime | null | undefined>,

		/** The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. */
		maxPodsPerNode: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalWorkloadNodeConfigFormGroup() {
		return new FormGroup<BareMetalWorkloadNodeConfigFormProperties>({
			containerRuntime: new FormControl<BareMetalWorkloadNodeConfigContainerRuntime | null | undefined>(undefined),
			maxPodsPerNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BareMetalWorkloadNodeConfigContainerRuntime { CONTAINER_RUNTIME_UNSPECIFIED = 0, CONTAINERD = 1 }


	/** Specifies operating system settings for cluster provisioning. */
	export interface BareMetalOsEnvironmentConfig {

		/** Whether the package repo should not be included when initializing bare metal machines. */
		packageRepoExcluded?: boolean | null;
	}

	/** Specifies operating system settings for cluster provisioning. */
	export interface BareMetalOsEnvironmentConfigFormProperties {

		/** Whether the package repo should not be included when initializing bare metal machines. */
		packageRepoExcluded: FormControl<boolean | null | undefined>,
	}
	export function CreateBareMetalOsEnvironmentConfigFormGroup() {
		return new FormGroup<BareMetalOsEnvironmentConfigFormProperties>({
			packageRepoExcluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the cluster proxy configuration. */
	export interface BareMetalProxyConfig {

		/** A list of IPs, hostnames, and domains that should skip the proxy. Examples: ["127.0.0.1", "example.com", ".corp", "localhost"]. */
		noProxy?: Array<string>;

		/** Required. Specifies the address of your proxy server. Examples: `http://domain` Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server. */
		uri?: string | null;
	}

	/** Specifies the cluster proxy configuration. */
	export interface BareMetalProxyConfigFormProperties {

		/** Required. Specifies the address of your proxy server. Examples: `http://domain` Do not provide credentials in the format `http://(username:password@)domain` these will be rejected by the server. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalProxyConfigFormGroup() {
		return new FormGroup<BareMetalProxyConfigFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the security related settings for the bare metal user cluster. */
	export interface BareMetalSecurityConfig {

		/** Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster. */
		authorization?: Authorization;
	}

	/** Specifies the security related settings for the bare metal user cluster. */
	export interface BareMetalSecurityConfigFormProperties {
	}
	export function CreateBareMetalSecurityConfigFormGroup() {
		return new FormGroup<BareMetalSecurityConfigFormProperties>({
		});

	}


	/** BareMetalStorageConfig specifies the cluster storage configuration. */
	export interface BareMetalStorageConfig {

		/** Specifies the configs for local persistent volumes (PVs). */
		lvpNodeMountsConfig?: BareMetalLvpConfig;

		/** Specifies the configs for local persistent volumes under a shared file system. */
		lvpShareConfig?: BareMetalLvpShareConfig;
	}

	/** BareMetalStorageConfig specifies the cluster storage configuration. */
	export interface BareMetalStorageConfigFormProperties {
	}
	export function CreateBareMetalStorageConfigFormGroup() {
		return new FormGroup<BareMetalStorageConfigFormProperties>({
		});

	}


	/** BareMetalClusterUpgradePolicy defines the cluster upgrade policy. */
	export interface BareMetalClusterUpgradePolicy {

		/** Specifies which upgrade policy to use. */
		policy?: BareMetalClusterUpgradePolicyPolicy | null;
	}

	/** BareMetalClusterUpgradePolicy defines the cluster upgrade policy. */
	export interface BareMetalClusterUpgradePolicyFormProperties {

		/** Specifies which upgrade policy to use. */
		policy: FormControl<BareMetalClusterUpgradePolicyPolicy | null | undefined>,
	}
	export function CreateBareMetalClusterUpgradePolicyFormGroup() {
		return new FormGroup<BareMetalClusterUpgradePolicyFormProperties>({
			policy: new FormControl<BareMetalClusterUpgradePolicyPolicy | null | undefined>(undefined),
		});

	}

	export enum BareMetalClusterUpgradePolicyPolicy { NODE_POOL_POLICY_UNSPECIFIED = 0, SERIAL = 1, CONCURRENT = 2 }


	/** Resource that represents a bare metal node pool. */
	export interface BareMetalNodePool {

		/** Annotations on the bare metal node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** Output only. The time at which this bare metal node pool was created. */
		createTime?: string | null;

		/** Output only. The time at which this bare metal node pool was deleted. If the resource is not deleted, this must be empty */
		deleteTime?: string | null;

		/** The display name for the bare metal node pool. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag?: string | null;

		/** Immutable. The bare metal node pool resource name. */
		name?: string | null;

		/** BareMetalNodePoolConfig describes the configuration of all nodes within a given bare metal node pool. */
		nodePoolConfig?: BareMetalNodePoolConfig;

		/** Output only. If set, there are currently changes in flight to the bare metal node pool. */
		reconciling?: boolean | null;

		/** Output only. The current state of the bare metal node pool. */
		state?: BareMetalAdminClusterState | null;

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;

		/** Output only. The unique identifier of the bare metal node pool. */
		uid?: string | null;

		/** Output only. The time at which this bare metal node pool was last updated. */
		updateTime?: string | null;

		/** BareMetalNodePoolUpgradePolicy defines the node pool upgrade policy. */
		upgradePolicy?: BareMetalNodePoolUpgradePolicy;
	}

	/** Resource that represents a bare metal node pool. */
	export interface BareMetalNodePoolFormProperties {

		/** Annotations on the bare metal node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The time at which this bare metal node pool was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which this bare metal node pool was deleted. If the resource is not deleted, this must be empty */
		deleteTime: FormControl<string | null | undefined>,

		/** The display name for the bare metal node pool. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. The bare metal node pool resource name. */
		name: FormControl<string | null | undefined>,

		/** Output only. If set, there are currently changes in flight to the bare metal node pool. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current state of the bare metal node pool. */
		state: FormControl<BareMetalAdminClusterState | null | undefined>,

		/** Output only. The unique identifier of the bare metal node pool. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time at which this bare metal node pool was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalNodePoolFormGroup() {
		return new FormGroup<BareMetalNodePoolFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BareMetalAdminClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BareMetalNodePoolUpgradePolicy defines the node pool upgrade policy. */
	export interface BareMetalNodePoolUpgradePolicy {

		/** BareMetalParallelUpgradeConfig defines the parallel upgrade settings for worker node pools. */
		parallelUpgradeConfig?: BareMetalParallelUpgradeConfig;
	}

	/** BareMetalNodePoolUpgradePolicy defines the node pool upgrade policy. */
	export interface BareMetalNodePoolUpgradePolicyFormProperties {
	}
	export function CreateBareMetalNodePoolUpgradePolicyFormGroup() {
		return new FormGroup<BareMetalNodePoolUpgradePolicyFormProperties>({
		});

	}


	/** BareMetalParallelUpgradeConfig defines the parallel upgrade settings for worker node pools. */
	export interface BareMetalParallelUpgradeConfig {

		/** The maximum number of nodes that can be upgraded at once. */
		concurrentNodes?: number | null;

		/** The minimum number of nodes that should be healthy and available during an upgrade. If set to the default value of 0, it is possible that none of the nodes will be available during an upgrade. */
		minimumAvailableNodes?: number | null;
	}

	/** BareMetalParallelUpgradeConfig defines the parallel upgrade settings for worker node pools. */
	export interface BareMetalParallelUpgradeConfigFormProperties {

		/** The maximum number of nodes that can be upgraded at once. */
		concurrentNodes: FormControl<number | null | undefined>,

		/** The minimum number of nodes that should be healthy and available during an upgrade. If set to the default value of 0, it is possible that none of the nodes will be available during an upgrade. */
		minimumAvailableNodes: FormControl<number | null | undefined>,
	}
	export function CreateBareMetalParallelUpgradeConfigFormGroup() {
		return new FormGroup<BareMetalParallelUpgradeConfigFormProperties>({
			concurrentNodes: new FormControl<number | null | undefined>(undefined),
			minimumAvailableNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about a specific Anthos on bare metal version. */
	export interface BareMetalVersionInfo {

		/** The list of upgrade dependencies for this version. */
		dependencies?: Array<UpgradeDependency>;

		/** If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster, version skew policy, etc) must be upgraded before this version can be installed or upgraded to. */
		hasDependencies?: boolean | null;

		/** Version number e.g. 1.13.1. */
		version?: string | null;
	}

	/** Contains information about a specific Anthos on bare metal version. */
	export interface BareMetalVersionInfoFormProperties {

		/** If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster, version skew policy, etc) must be upgraded before this version can be installed or upgraded to. */
		hasDependencies: FormControl<boolean | null | undefined>,

		/** Version number e.g. 1.13.1. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateBareMetalVersionInfoFormGroup() {
		return new FormGroup<BareMetalVersionInfoFormProperties>({
			hasDependencies: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpgradeDependency represents a dependency when upgrading a resource. */
	export interface UpgradeDependency {

		/** Current version of the dependency e.g. 1.15.0. */
		currentVersion?: string | null;

		/** Membership names are formatted as `projects//locations//memberships/`. */
		membership?: string | null;

		/** Resource name of the dependency. */
		resourceName?: string | null;

		/** Target version of the dependency e.g. 1.16.1. This is the version the dependency needs to be upgraded to before a resource can be upgraded. */
		targetVersion?: string | null;
	}

	/** UpgradeDependency represents a dependency when upgrading a resource. */
	export interface UpgradeDependencyFormProperties {

		/** Current version of the dependency e.g. 1.15.0. */
		currentVersion: FormControl<string | null | undefined>,

		/** Membership names are formatted as `projects//locations//memberships/`. */
		membership: FormControl<string | null | undefined>,

		/** Resource name of the dependency. */
		resourceName: FormControl<string | null | undefined>,

		/** Target version of the dependency e.g. 1.16.1. This is the version the dependency needs to be upgraded to before a resource can be upgraded. */
		targetVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeDependencyFormGroup() {
		return new FormGroup<UpgradeDependencyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined),
			membership: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			targetVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
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

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
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


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
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


	/** Message for enrolling an existing bare metal admin cluster to the GKE on-prem API. */
	export interface EnrollBareMetalAdminClusterRequest {

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		bareMetalAdminClusterId?: string | null;

		/** Required. This is the full resource name of this admin cluster's fleet membership. */
		membership?: string | null;
	}

	/** Message for enrolling an existing bare metal admin cluster to the GKE on-prem API. */
	export interface EnrollBareMetalAdminClusterRequestFormProperties {

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		bareMetalAdminClusterId: FormControl<string | null | undefined>,

		/** Required. This is the full resource name of this admin cluster's fleet membership. */
		membership: FormControl<string | null | undefined>,
	}
	export function CreateEnrollBareMetalAdminClusterRequestFormGroup() {
		return new FormGroup<EnrollBareMetalAdminClusterRequestFormProperties>({
			bareMetalAdminClusterId: new FormControl<string | null | undefined>(undefined),
			membership: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for enrolling an existing bare metal cluster to the Anthos On-Prem API. */
	export interface EnrollBareMetalClusterRequest {

		/** Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
		adminClusterMembership?: string | null;

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all bare metal clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		bareMetalClusterId?: string | null;

		/** Optional. The object name of the bare metal cluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the bare_metal_cluster_id. Otherwise, it must match the object name of the bare metal cluster custom resource. It is not modifiable outside / beyond the enrollment operation. */
		localName?: string | null;
	}

	/** Message for enrolling an existing bare metal cluster to the Anthos On-Prem API. */
	export interface EnrollBareMetalClusterRequestFormProperties {

		/** Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
		adminClusterMembership: FormControl<string | null | undefined>,

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all bare metal clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		bareMetalClusterId: FormControl<string | null | undefined>,

		/** Optional. The object name of the bare metal cluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the bare_metal_cluster_id. Otherwise, it must match the object name of the bare metal cluster custom resource. It is not modifiable outside / beyond the enrollment operation. */
		localName: FormControl<string | null | undefined>,
	}
	export function CreateEnrollBareMetalClusterRequestFormGroup() {
		return new FormGroup<EnrollBareMetalClusterRequestFormProperties>({
			adminClusterMembership: new FormControl<string | null | undefined>(undefined),
			bareMetalClusterId: new FormControl<string | null | undefined>(undefined),
			localName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for enrolling an existing bare metal node pool to the GKE on-prem API. */
	export interface EnrollBareMetalNodePoolRequest {

		/** User provided OnePlatform identifier that is used as part of the resource name. (https://tools.ietf.org/html/rfc1123) format. */
		bareMetalNodePoolId?: string | null;

		/** If set, only validate the request, but do not actually enroll the node pool. */
		validateOnly?: boolean | null;
	}

	/** Message for enrolling an existing bare metal node pool to the GKE on-prem API. */
	export interface EnrollBareMetalNodePoolRequestFormProperties {

		/** User provided OnePlatform identifier that is used as part of the resource name. (https://tools.ietf.org/html/rfc1123) format. */
		bareMetalNodePoolId: FormControl<string | null | undefined>,

		/** If set, only validate the request, but do not actually enroll the node pool. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateEnrollBareMetalNodePoolRequestFormGroup() {
		return new FormGroup<EnrollBareMetalNodePoolRequestFormProperties>({
			bareMetalNodePoolId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message for enrolling an existing VMware admin cluster to the GKE on-prem API. */
	export interface EnrollVmwareAdminClusterRequest {

		/** Required. This is the full resource name of this admin cluster's fleet membership. */
		membership?: string | null;

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		vmwareAdminClusterId?: string | null;
	}

	/** Message for enrolling an existing VMware admin cluster to the GKE on-prem API. */
	export interface EnrollVmwareAdminClusterRequestFormProperties {

		/** Required. This is the full resource name of this admin cluster's fleet membership. */
		membership: FormControl<string | null | undefined>,

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		vmwareAdminClusterId: FormControl<string | null | undefined>,
	}
	export function CreateEnrollVmwareAdminClusterRequestFormGroup() {
		return new FormGroup<EnrollVmwareAdminClusterRequestFormProperties>({
			membership: new FormControl<string | null | undefined>(undefined),
			vmwareAdminClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for enrolling an existing VMware cluster to the Anthos On-Prem API. */
	export interface EnrollVmwareClusterRequest {

		/** Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
		adminClusterMembership?: string | null;

		/** Optional. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the vmware_cluster_id. Otherwise, it must match the object name of the VMware OnPremUserCluster custom resource. It is not modifiable outside / beyond the enrollment operation. */
		localName?: string | null;

		/** Validate the request without actually doing any updates. */
		validateOnly?: boolean | null;

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		vmwareClusterId?: string | null;
	}

	/** Message for enrolling an existing VMware cluster to the Anthos On-Prem API. */
	export interface EnrollVmwareClusterRequestFormProperties {

		/** Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
		adminClusterMembership: FormControl<string | null | undefined>,

		/** Optional. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the vmware_cluster_id. Otherwise, it must match the object name of the VMware OnPremUserCluster custom resource. It is not modifiable outside / beyond the enrollment operation. */
		localName: FormControl<string | null | undefined>,

		/** Validate the request without actually doing any updates. */
		validateOnly: FormControl<boolean | null | undefined>,

		/** User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. */
		vmwareClusterId: FormControl<string | null | undefined>,
	}
	export function CreateEnrollVmwareClusterRequestFormGroup() {
		return new FormGroup<EnrollVmwareClusterRequestFormProperties>({
			adminClusterMembership: new FormControl<string | null | undefined>(undefined),
			localName: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
			vmwareClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for enrolling a VMware node pool. */
	export interface EnrollVmwareNodePoolRequest {

		/** The target node pool id to be enrolled. */
		vmwareNodePoolId?: string | null;
	}

	/** Message for enrolling a VMware node pool. */
	export interface EnrollVmwareNodePoolRequestFormProperties {

		/** The target node pool id to be enrolled. */
		vmwareNodePoolId: FormControl<string | null | undefined>,
	}
	export function CreateEnrollVmwareNodePoolRequestFormGroup() {
		return new FormGroup<EnrollVmwareNodePoolRequestFormProperties>({
			vmwareNodePoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing bare metal admin clusters. */
	export interface ListBareMetalAdminClustersResponse {

		/** The list of bare metal admin cluster. */
		bareMetalAdminClusters?: Array<BareMetalAdminCluster>;

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing bare metal admin clusters. */
	export interface ListBareMetalAdminClustersResponseFormProperties {

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBareMetalAdminClustersResponseFormGroup() {
		return new FormGroup<ListBareMetalAdminClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing bare metal Clusters. */
	export interface ListBareMetalClustersResponse {

		/** The list of bare metal Clusters. */
		bareMetalClusters?: Array<BareMetalCluster>;

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing bare metal Clusters. */
	export interface ListBareMetalClustersResponseFormProperties {

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBareMetalClustersResponseFormGroup() {
		return new FormGroup<ListBareMetalClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing bare metal node pools. */
	export interface ListBareMetalNodePoolsResponse {

		/** The node pools from the specified parent resource. */
		bareMetalNodePools?: Array<BareMetalNodePool>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing bare metal node pools. */
	export interface ListBareMetalNodePoolsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBareMetalNodePoolsResponseFormGroup() {
		return new FormGroup<ListBareMetalNodePoolsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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


	/** Response message for listing VMware admin clusters. */
	export interface ListVmwareAdminClustersResponse {

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** The list of VMware admin cluster. */
		vmwareAdminClusters?: Array<VmwareAdminCluster>;
	}

	/** Response message for listing VMware admin clusters. */
	export interface ListVmwareAdminClustersResponseFormProperties {

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVmwareAdminClustersResponseFormGroup() {
		return new FormGroup<ListVmwareAdminClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource that represents a VMware admin cluster. */
	export interface VmwareAdminCluster {

		/** VmwareAdminAddonNodeConfig contains add-on node configurations for VMware admin cluster. */
		addonNode?: VmwareAdminAddonNodeConfig;

		/** Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** Specifies anti affinity group config for the VMware user cluster. */
		antiAffinityGroups?: VmwareAAGConfig;

		/** VmwareAdminAuthorizationConfig represents configuration for admin cluster authorization. */
		authorization?: VmwareAdminAuthorizationConfig;

		/** Specifies config to enable/disable auto repair. The cluster-health-controller is deployed only if Enabled is true. */
		autoRepairConfig?: VmwareAutoRepairConfig;

		/** The bootstrap cluster this VMware admin cluster belongs to. */
		bootstrapClusterMembership?: string | null;

		/** VmwareAdminControlPlaneNodeConfig contains control plane node configuration for VMware admin cluster. */
		controlPlaneNode?: VmwareAdminControlPlaneNodeConfig;

		/** Output only. The time at which VMware admin cluster was created. */
		createTime?: string | null;

		/** A human readable description of this VMware admin cluster. */
		description?: string | null;

		/** Output only. The DNS name of VMware admin cluster's API server. */
		endpoint?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag?: string | null;

		/** Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and manage multi-cluster capabilities and apply consistent policies across your systems. See [Anthos Fleets](`https://cloud.google.com/anthos/multicluster-management/fleets`) for more details on Anthos multi-cluster capabilities using Fleets. ## */
		fleet?: Fleet;

		/** The OS image type for the VMware admin cluster. */
		imageType?: string | null;

		/** VmwareAdminLoadBalancerConfig contains load balancer configuration for VMware admin cluster. */
		loadBalancer?: VmwareAdminLoadBalancerConfig;

		/** Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
		localName?: string | null;

		/** Immutable. The VMware admin cluster resource name. */
		name?: string | null;

		/** VmwareAdminNetworkConfig contains network configuration for VMware admin cluster. */
		networkConfig?: VmwareAdminNetworkConfig;

		/** The Anthos clusters on the VMware version for the admin cluster. */
		onPremVersion?: string | null;

		/** VmwarePlatformConfig represents configuration for the VMware platform. */
		platformConfig?: VmwarePlatformConfig;

		/** VmwareAdminPreparedSecretsConfig represents configuration for admin cluster prepared secrets. */
		preparedSecrets?: VmwareAdminPreparedSecretsConfig;

		/** Output only. If set, there are currently changes in flight to the VMware admin cluster. */
		reconciling?: boolean | null;

		/** Output only. The current state of VMware admin cluster. */
		state?: BareMetalAdminClusterState | null;

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;

		/** Output only. The unique identifier of the VMware admin cluster. */
		uid?: string | null;

		/** Output only. The time at which VMware admin cluster was last updated. */
		updateTime?: string | null;

		/** VmwareAdminVCenterConfig contains VCenter configuration for VMware admin cluster. */
		vcenter?: VmwareAdminVCenterConfig;
	}

	/** Resource that represents a VMware admin cluster. */
	export interface VmwareAdminClusterFormProperties {

		/** Annotations on the VMware admin cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** The bootstrap cluster this VMware admin cluster belongs to. */
		bootstrapClusterMembership: FormControl<string | null | undefined>,

		/** Output only. The time at which VMware admin cluster was created. */
		createTime: FormControl<string | null | undefined>,

		/** A human readable description of this VMware admin cluster. */
		description: FormControl<string | null | undefined>,

		/** Output only. The DNS name of VMware admin cluster's API server. */
		endpoint: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,

		/** The OS image type for the VMware admin cluster. */
		imageType: FormControl<string | null | undefined>,

		/** Output only. The object name of the VMware OnPremAdminCluster custom resource. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
		localName: FormControl<string | null | undefined>,

		/** Immutable. The VMware admin cluster resource name. */
		name: FormControl<string | null | undefined>,

		/** The Anthos clusters on the VMware version for the admin cluster. */
		onPremVersion: FormControl<string | null | undefined>,

		/** Output only. If set, there are currently changes in flight to the VMware admin cluster. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current state of VMware admin cluster. */
		state: FormControl<BareMetalAdminClusterState | null | undefined>,

		/** Output only. The unique identifier of the VMware admin cluster. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time at which VMware admin cluster was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAdminClusterFormGroup() {
		return new FormGroup<VmwareAdminClusterFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			bootstrapClusterMembership: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
			localName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onPremVersion: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BareMetalAdminClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareAdminAddonNodeConfig contains add-on node configurations for VMware admin cluster. */
	export interface VmwareAdminAddonNodeConfig {

		/** Represents auto resizing configurations for the VMware user cluster. */
		autoResizeConfig?: VmwareAutoResizeConfig;
	}

	/** VmwareAdminAddonNodeConfig contains add-on node configurations for VMware admin cluster. */
	export interface VmwareAdminAddonNodeConfigFormProperties {
	}
	export function CreateVmwareAdminAddonNodeConfigFormGroup() {
		return new FormGroup<VmwareAdminAddonNodeConfigFormProperties>({
		});

	}


	/** Represents auto resizing configurations for the VMware user cluster. */
	export interface VmwareAutoResizeConfig {

		/** Whether to enable controle plane node auto resizing. */
		enabled?: boolean | null;
	}

	/** Represents auto resizing configurations for the VMware user cluster. */
	export interface VmwareAutoResizeConfigFormProperties {

		/** Whether to enable controle plane node auto resizing. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareAutoResizeConfigFormGroup() {
		return new FormGroup<VmwareAutoResizeConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies anti affinity group config for the VMware user cluster. */
	export interface VmwareAAGConfig {

		/** Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. */
		aagConfigDisabled?: boolean | null;
	}

	/** Specifies anti affinity group config for the VMware user cluster. */
	export interface VmwareAAGConfigFormProperties {

		/** Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. */
		aagConfigDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareAAGConfigFormGroup() {
		return new FormGroup<VmwareAAGConfigFormProperties>({
			aagConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** VmwareAdminAuthorizationConfig represents configuration for admin cluster authorization. */
	export interface VmwareAdminAuthorizationConfig {

		/** For VMware admin clusters, users will be granted the cluster-viewer role on the cluster. */
		viewerUsers?: Array<ClusterUser>;
	}

	/** VmwareAdminAuthorizationConfig represents configuration for admin cluster authorization. */
	export interface VmwareAdminAuthorizationConfigFormProperties {
	}
	export function CreateVmwareAdminAuthorizationConfigFormGroup() {
		return new FormGroup<VmwareAdminAuthorizationConfigFormProperties>({
		});

	}


	/** Specifies config to enable/disable auto repair. The cluster-health-controller is deployed only if Enabled is true. */
	export interface VmwareAutoRepairConfig {

		/** Whether auto repair is enabled. */
		enabled?: boolean | null;
	}

	/** Specifies config to enable/disable auto repair. The cluster-health-controller is deployed only if Enabled is true. */
	export interface VmwareAutoRepairConfigFormProperties {

		/** Whether auto repair is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareAutoRepairConfigFormGroup() {
		return new FormGroup<VmwareAutoRepairConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** VmwareAdminControlPlaneNodeConfig contains control plane node configuration for VMware admin cluster. */
	export interface VmwareAdminControlPlaneNodeConfig {

		/** The number of vCPUs for the control-plane node of the admin cluster. */
		cpus?: string | null;

		/** The number of mebibytes of memory for the control-plane node of the admin cluster. */
		memory?: string | null;

		/** The number of control plane nodes for this VMware admin cluster. (default: 1 replica). */
		replicas?: string | null;
	}

	/** VmwareAdminControlPlaneNodeConfig contains control plane node configuration for VMware admin cluster. */
	export interface VmwareAdminControlPlaneNodeConfigFormProperties {

		/** The number of vCPUs for the control-plane node of the admin cluster. */
		cpus: FormControl<string | null | undefined>,

		/** The number of mebibytes of memory for the control-plane node of the admin cluster. */
		memory: FormControl<string | null | undefined>,

		/** The number of control plane nodes for this VMware admin cluster. (default: 1 replica). */
		replicas: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAdminControlPlaneNodeConfigFormGroup() {
		return new FormGroup<VmwareAdminControlPlaneNodeConfigFormProperties>({
			cpus: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			replicas: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareAdminLoadBalancerConfig contains load balancer configuration for VMware admin cluster. */
	export interface VmwareAdminLoadBalancerConfig {

		/** VmwareAdminF5BigIpConfig represents configuration parameters for an F5 BIG-IP load balancer. */
		f5Config?: VmwareAdminF5BigIpConfig;
		manualLbConfig?: VmwareAdminManualLbConfig;

		/** VmwareAdminMetalLbConfig represents configuration parameters for a MetalLB load balancer. For admin clusters, currently no configurations is needed. */
		metalLbConfig?: VmwareAdminMetalLbConfig;

		/** VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'. */
		seesawConfig?: VmwareAdminSeesawConfig;

		/** VmwareAdminVipConfig for VMware load balancer configurations. */
		vipConfig?: VmwareAdminVipConfig;
	}

	/** VmwareAdminLoadBalancerConfig contains load balancer configuration for VMware admin cluster. */
	export interface VmwareAdminLoadBalancerConfigFormProperties {
	}
	export function CreateVmwareAdminLoadBalancerConfigFormGroup() {
		return new FormGroup<VmwareAdminLoadBalancerConfigFormProperties>({
		});

	}


	/** VmwareAdminF5BigIpConfig represents configuration parameters for an F5 BIG-IP load balancer. */
	export interface VmwareAdminF5BigIpConfig {

		/** The load balancer's IP address. */
		address?: string | null;

		/** The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'. */
		partition?: string | null;

		/** The pool name. Only necessary, if using SNAT. */
		snatPool?: string | null;
	}

	/** VmwareAdminF5BigIpConfig represents configuration parameters for an F5 BIG-IP load balancer. */
	export interface VmwareAdminF5BigIpConfigFormProperties {

		/** The load balancer's IP address. */
		address: FormControl<string | null | undefined>,

		/** The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'. */
		partition: FormControl<string | null | undefined>,

		/** The pool name. Only necessary, if using SNAT. */
		snatPool: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAdminF5BigIpConfigFormGroup() {
		return new FormGroup<VmwareAdminF5BigIpConfigFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			partition: new FormControl<string | null | undefined>(undefined),
			snatPool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VmwareAdminManualLbConfig {

		/** NodePort for add-ons server in the admin cluster. */
		addonsNodePort?: number | null;

		/** NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). */
		controlPlaneNodePort?: number | null;

		/** NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). */
		ingressHttpNodePort?: number | null;

		/** NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). */
		ingressHttpsNodePort?: number | null;

		/** NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). */
		konnectivityServerNodePort?: number | null;
	}
	export interface VmwareAdminManualLbConfigFormProperties {

		/** NodePort for add-ons server in the admin cluster. */
		addonsNodePort: FormControl<number | null | undefined>,

		/** NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). */
		controlPlaneNodePort: FormControl<number | null | undefined>,

		/** NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). */
		ingressHttpNodePort: FormControl<number | null | undefined>,

		/** NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). */
		ingressHttpsNodePort: FormControl<number | null | undefined>,

		/** NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). */
		konnectivityServerNodePort: FormControl<number | null | undefined>,
	}
	export function CreateVmwareAdminManualLbConfigFormGroup() {
		return new FormGroup<VmwareAdminManualLbConfigFormProperties>({
			addonsNodePort: new FormControl<number | null | undefined>(undefined),
			controlPlaneNodePort: new FormControl<number | null | undefined>(undefined),
			ingressHttpNodePort: new FormControl<number | null | undefined>(undefined),
			ingressHttpsNodePort: new FormControl<number | null | undefined>(undefined),
			konnectivityServerNodePort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** VmwareAdminMetalLbConfig represents configuration parameters for a MetalLB load balancer. For admin clusters, currently no configurations is needed. */
	export interface VmwareAdminMetalLbConfig {
	}

	/** VmwareAdminMetalLbConfig represents configuration parameters for a MetalLB load balancer. For admin clusters, currently no configurations is needed. */
	export interface VmwareAdminMetalLbConfigFormProperties {
	}
	export function CreateVmwareAdminMetalLbConfigFormGroup() {
		return new FormGroup<VmwareAdminMetalLbConfigFormProperties>({
		});

	}


	/** VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'. */
	export interface VmwareAdminSeesawConfig {

		/** Enable two load balancer VMs to achieve a highly-available Seesaw load balancer. */
		enableHa?: boolean | null;

		/** In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name]. */
		group?: string | null;

		/** The IP Blocks to be used by the Seesaw load balancer */
		ipBlocks?: Array<VmwareIpBlock>;

		/** MasterIP is the IP announced by the master of Seesaw group. */
		masterIp?: string | null;

		/** Name to be used by Stackdriver. */
		stackdriverName?: string | null;

		/** Names of the VMs created for this Seesaw group. */
		vms?: Array<string>;
	}

	/** VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'. */
	export interface VmwareAdminSeesawConfigFormProperties {

		/** Enable two load balancer VMs to achieve a highly-available Seesaw load balancer. */
		enableHa: FormControl<boolean | null | undefined>,

		/** In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name]. */
		group: FormControl<string | null | undefined>,

		/** MasterIP is the IP announced by the master of Seesaw group. */
		masterIp: FormControl<string | null | undefined>,

		/** Name to be used by Stackdriver. */
		stackdriverName: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAdminSeesawConfigFormGroup() {
		return new FormGroup<VmwareAdminSeesawConfigFormProperties>({
			enableHa: new FormControl<boolean | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			masterIp: new FormControl<string | null | undefined>(undefined),
			stackdriverName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of IP addresses to assign to nodes. */
	export interface VmwareIpBlock {

		/** The network gateway used by the VMware user cluster. */
		gateway?: string | null;

		/** The node's network configurations used by the VMware user cluster. */
		ips?: Array<VmwareHostIp>;

		/** The netmask used by the VMware user cluster. */
		netmask?: string | null;
	}

	/** Represents a collection of IP addresses to assign to nodes. */
	export interface VmwareIpBlockFormProperties {

		/** The network gateway used by the VMware user cluster. */
		gateway: FormControl<string | null | undefined>,

		/** The netmask used by the VMware user cluster. */
		netmask: FormControl<string | null | undefined>,
	}
	export function CreateVmwareIpBlockFormGroup() {
		return new FormGroup<VmwareIpBlockFormProperties>({
			gateway: new FormControl<string | null | undefined>(undefined),
			netmask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents VMware user cluster node's network configuration. */
	export interface VmwareHostIp {

		/** Hostname of the machine. VM's name will be used if this field is empty. */
		hostname?: string | null;

		/** IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). */
		ip?: string | null;
	}

	/** Represents VMware user cluster node's network configuration. */
	export interface VmwareHostIpFormProperties {

		/** Hostname of the machine. VM's name will be used if this field is empty. */
		hostname: FormControl<string | null | undefined>,

		/** IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateVmwareHostIpFormGroup() {
		return new FormGroup<VmwareHostIpFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareAdminVipConfig for VMware load balancer configurations. */
	export interface VmwareAdminVipConfig {

		/** The VIP to configure the load balancer for add-ons. */
		addonsVip?: string | null;

		/** The VIP which you previously set aside for the Kubernetes API of the admin cluster. */
		controlPlaneVip?: string | null;
	}

	/** VmwareAdminVipConfig for VMware load balancer configurations. */
	export interface VmwareAdminVipConfigFormProperties {

		/** The VIP to configure the load balancer for add-ons. */
		addonsVip: FormControl<string | null | undefined>,

		/** The VIP which you previously set aside for the Kubernetes API of the admin cluster. */
		controlPlaneVip: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAdminVipConfigFormGroup() {
		return new FormGroup<VmwareAdminVipConfigFormProperties>({
			addonsVip: new FormControl<string | null | undefined>(undefined),
			controlPlaneVip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareAdminNetworkConfig contains network configuration for VMware admin cluster. */
	export interface VmwareAdminNetworkConfig {

		/** Represents the network configuration required for the VMware user clusters with DHCP IP configurations. */
		dhcpIpConfig?: VmwareDhcpIpConfig;

		/** Specifies HA admin control plane config. */
		haControlPlaneConfig?: VmwareAdminHAControlPlaneConfig;

		/** Represents the common parameters for all the hosts irrespective of their IP address. */
		hostConfig?: VmwareHostConfig;

		/** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
		podAddressCidrBlocks?: Array<string>;

		/** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
		serviceAddressCidrBlocks?: Array<string>;

		/** Represents the network configuration required for the VMware user clusters with Static IP configurations. */
		staticIpConfig?: VmwareStaticIpConfig;

		/** vcenter_network specifies vCenter network name. */
		vcenterNetwork?: string | null;
	}

	/** VmwareAdminNetworkConfig contains network configuration for VMware admin cluster. */
	export interface VmwareAdminNetworkConfigFormProperties {

		/** vcenter_network specifies vCenter network name. */
		vcenterNetwork: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAdminNetworkConfigFormGroup() {
		return new FormGroup<VmwareAdminNetworkConfigFormProperties>({
			vcenterNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the network configuration required for the VMware user clusters with DHCP IP configurations. */
	export interface VmwareDhcpIpConfig {

		/** enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. */
		enabled?: boolean | null;
	}

	/** Represents the network configuration required for the VMware user clusters with DHCP IP configurations. */
	export interface VmwareDhcpIpConfigFormProperties {

		/** enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareDhcpIpConfigFormGroup() {
		return new FormGroup<VmwareDhcpIpConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies HA admin control plane config. */
	export interface VmwareAdminHAControlPlaneConfig {

		/** Represents a collection of IP addresses to assign to nodes. */
		controlPlaneIpBlock?: VmwareIpBlock;
	}

	/** Specifies HA admin control plane config. */
	export interface VmwareAdminHAControlPlaneConfigFormProperties {
	}
	export function CreateVmwareAdminHAControlPlaneConfigFormGroup() {
		return new FormGroup<VmwareAdminHAControlPlaneConfigFormProperties>({
		});

	}


	/** Represents the common parameters for all the hosts irrespective of their IP address. */
	export interface VmwareHostConfig {

		/** DNS search domains. */
		dnsSearchDomains?: Array<string>;

		/** DNS servers. */
		dnsServers?: Array<string>;

		/** NTP servers. */
		ntpServers?: Array<string>;
	}

	/** Represents the common parameters for all the hosts irrespective of their IP address. */
	export interface VmwareHostConfigFormProperties {
	}
	export function CreateVmwareHostConfigFormGroup() {
		return new FormGroup<VmwareHostConfigFormProperties>({
		});

	}


	/** Represents the network configuration required for the VMware user clusters with Static IP configurations. */
	export interface VmwareStaticIpConfig {

		/** Represents the configuration values for static IP allocation to nodes. */
		ipBlocks?: Array<VmwareIpBlock>;
	}

	/** Represents the network configuration required for the VMware user clusters with Static IP configurations. */
	export interface VmwareStaticIpConfigFormProperties {
	}
	export function CreateVmwareStaticIpConfigFormGroup() {
		return new FormGroup<VmwareStaticIpConfigFormProperties>({
		});

	}


	/** VmwarePlatformConfig represents configuration for the VMware platform. */
	export interface VmwarePlatformConfig {

		/** Output only. The list of bundles installed in the admin cluster. */
		bundles?: Array<VmwareBundleConfig>;

		/** Output only. The platform version e.g. 1.13.2. */
		platformVersion?: string | null;

		/** Input only. The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. */
		requiredPlatformVersion?: string | null;

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;
	}

	/** VmwarePlatformConfig represents configuration for the VMware platform. */
	export interface VmwarePlatformConfigFormProperties {

		/** Output only. The platform version e.g. 1.13.2. */
		platformVersion: FormControl<string | null | undefined>,

		/** Input only. The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. */
		requiredPlatformVersion: FormControl<string | null | undefined>,
	}
	export function CreateVmwarePlatformConfigFormGroup() {
		return new FormGroup<VmwarePlatformConfigFormProperties>({
			platformVersion: new FormControl<string | null | undefined>(undefined),
			requiredPlatformVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareBundleConfig represents configuration for the bundle. */
	export interface VmwareBundleConfig {

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;

		/** The version of the bundle. */
		version?: string | null;
	}

	/** VmwareBundleConfig represents configuration for the bundle. */
	export interface VmwareBundleConfigFormProperties {

		/** The version of the bundle. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVmwareBundleConfigFormGroup() {
		return new FormGroup<VmwareBundleConfigFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareAdminPreparedSecretsConfig represents configuration for admin cluster prepared secrets. */
	export interface VmwareAdminPreparedSecretsConfig {

		/** Whether prepared secrets is enabled. */
		enabled?: boolean | null;
	}

	/** VmwareAdminPreparedSecretsConfig represents configuration for admin cluster prepared secrets. */
	export interface VmwareAdminPreparedSecretsConfigFormProperties {

		/** Whether prepared secrets is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareAdminPreparedSecretsConfigFormGroup() {
		return new FormGroup<VmwareAdminPreparedSecretsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** VmwareAdminVCenterConfig contains VCenter configuration for VMware admin cluster. */
	export interface VmwareAdminVCenterConfig {

		/** The vCenter IP address. */
		address?: string | null;

		/** Contains the vCenter CA certificate public key for SSL verification. */
		caCertData?: string | null;

		/** The name of the vCenter cluster for the admin cluster. */
		cluster?: string | null;

		/** The name of the virtual machine disk (VMDK) for the admin cluster. */
		dataDisk?: string | null;

		/** The name of the vCenter datacenter for the admin cluster. */
		datacenter?: string | null;

		/** The name of the vCenter datastore for the admin cluster. */
		datastore?: string | null;

		/** The name of the vCenter folder for the admin cluster. */
		folder?: string | null;

		/** The name of the vCenter resource pool for the admin cluster. */
		resourcePool?: string | null;

		/** The name of the vCenter storage policy for the user cluster. */
		storagePolicyName?: string | null;
	}

	/** VmwareAdminVCenterConfig contains VCenter configuration for VMware admin cluster. */
	export interface VmwareAdminVCenterConfigFormProperties {

		/** The vCenter IP address. */
		address: FormControl<string | null | undefined>,

		/** Contains the vCenter CA certificate public key for SSL verification. */
		caCertData: FormControl<string | null | undefined>,

		/** The name of the vCenter cluster for the admin cluster. */
		cluster: FormControl<string | null | undefined>,

		/** The name of the virtual machine disk (VMDK) for the admin cluster. */
		dataDisk: FormControl<string | null | undefined>,

		/** The name of the vCenter datacenter for the admin cluster. */
		datacenter: FormControl<string | null | undefined>,

		/** The name of the vCenter datastore for the admin cluster. */
		datastore: FormControl<string | null | undefined>,

		/** The name of the vCenter folder for the admin cluster. */
		folder: FormControl<string | null | undefined>,

		/** The name of the vCenter resource pool for the admin cluster. */
		resourcePool: FormControl<string | null | undefined>,

		/** The name of the vCenter storage policy for the user cluster. */
		storagePolicyName: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAdminVCenterConfigFormGroup() {
		return new FormGroup<VmwareAdminVCenterConfigFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			caCertData: new FormControl<string | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
			dataDisk: new FormControl<string | null | undefined>(undefined),
			datacenter: new FormControl<string | null | undefined>(undefined),
			datastore: new FormControl<string | null | undefined>(undefined),
			folder: new FormControl<string | null | undefined>(undefined),
			resourcePool: new FormControl<string | null | undefined>(undefined),
			storagePolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing VMware Clusters. */
	export interface ListVmwareClustersResponse {

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** The list of VMware Cluster. */
		vmwareClusters?: Array<VmwareCluster>;
	}

	/** Response message for listing VMware Clusters. */
	export interface ListVmwareClustersResponseFormProperties {

		/** A token identifying a page of results the server should return. If the token is not empty this means that more results are available and should be retrieved by repeating the request with the provided page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVmwareClustersResponseFormGroup() {
		return new FormGroup<ListVmwareClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource that represents a VMware user cluster. ## */
	export interface VmwareCluster {

		/** Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
		adminClusterMembership?: string | null;

		/** Output only. The resource name of the VMware admin cluster hosting this user cluster. */
		adminClusterName?: string | null;

		/** Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** Specifies anti affinity group config for the VMware user cluster. */
		antiAffinityGroups?: VmwareAAGConfig;

		/** Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster. */
		authorization?: Authorization;

		/** Specifies config to enable/disable auto repair. The cluster-health-controller is deployed only if Enabled is true. */
		autoRepairConfig?: VmwareAutoRepairConfig;

		/** Specifies control plane node config for the VMware user cluster. */
		controlPlaneNode?: VmwareControlPlaneNodeConfig;

		/** Output only. The time at which VMware user cluster was created. */
		createTime?: string | null;

		/** Contains configurations for Dataplane V2, which is optimized dataplane for Kubernetes networking. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2 */
		dataplaneV2?: VmwareDataplaneV2Config;

		/** Output only. The time at which VMware user cluster was deleted. */
		deleteTime?: string | null;

		/** A human readable description of this VMware user cluster. */
		description?: string | null;

		/** Disable bundled ingress. */
		disableBundledIngress?: boolean | null;

		/** Enable control plane V2. Default to false. */
		enableControlPlaneV2?: boolean | null;

		/** Output only. The DNS name of VMware user cluster's API server. */
		endpoint?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag?: string | null;

		/** Fleet related configuration. Fleets are a Google Cloud concept for logically organizing clusters, letting you use and manage multi-cluster capabilities and apply consistent policies across your systems. See [Anthos Fleets](`https://cloud.google.com/anthos/multicluster-management/fleets`) for more details on Anthos multi-cluster capabilities using Fleets. ## */
		fleet?: Fleet;

		/** Specifies the locad balancer config for the VMware user cluster. */
		loadBalancer?: VmwareLoadBalancerConfig;

		/** Output only. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
		localName?: string | null;

		/** Immutable. The VMware user cluster resource name. */
		name?: string | null;

		/** Specifies network config for the VMware user cluster. */
		networkConfig?: VmwareNetworkConfig;

		/** Required. The Anthos clusters on the VMware version for your user cluster. */
		onPremVersion?: string | null;

		/** Output only. If set, there are currently changes in flight to the VMware user cluster. */
		reconciling?: boolean | null;

		/** Output only. The current state of VMware user cluster. */
		state?: BareMetalAdminClusterState | null;

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;

		/** Specifies vSphere CSI components deployment config in the VMware user cluster. */
		storage?: VmwareStorageConfig;

		/** Output only. The unique identifier of the VMware user cluster. */
		uid?: string | null;

		/** Output only. The time at which VMware user cluster was last updated. */
		updateTime?: string | null;

		/** VmwareClusterUpgradePolicy defines the cluster upgrade policy. */
		upgradePolicy?: VmwareClusterUpgradePolicy;

		/** ValidationCheck represents the result of preflight check. */
		validationCheck?: ValidationCheck;

		/** Represents configuration for the VMware VCenter for the user cluster. */
		vcenter?: VmwareVCenterConfig;

		/** Enable VM tracking. */
		vmTrackingEnabled?: boolean | null;
	}

	/** Resource that represents a VMware user cluster. ## */
	export interface VmwareClusterFormProperties {

		/** Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster's fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. */
		adminClusterMembership: FormControl<string | null | undefined>,

		/** Output only. The resource name of the VMware admin cluster hosting this user cluster. */
		adminClusterName: FormControl<string | null | undefined>,

		/** Annotations on the VMware user cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The time at which VMware user cluster was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which VMware user cluster was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** A human readable description of this VMware user cluster. */
		description: FormControl<string | null | undefined>,

		/** Disable bundled ingress. */
		disableBundledIngress: FormControl<boolean | null | undefined>,

		/** Enable control plane V2. Default to false. */
		enableControlPlaneV2: FormControl<boolean | null | undefined>,

		/** Output only. The DNS name of VMware user cluster's API server. */
		endpoint: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting names when enrolling existing clusters to the API. When used as a part of cluster enrollment, this field will differ from the ID in the resource name. For new clusters, this field will match the user provided cluster name and be visible in the last component of the resource name. It is not modifiable. All users should use this name to access their cluster using gkectl or kubectl and should expect to see the local name when viewing admin cluster controller logs. */
		localName: FormControl<string | null | undefined>,

		/** Immutable. The VMware user cluster resource name. */
		name: FormControl<string | null | undefined>,

		/** Required. The Anthos clusters on the VMware version for your user cluster. */
		onPremVersion: FormControl<string | null | undefined>,

		/** Output only. If set, there are currently changes in flight to the VMware user cluster. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current state of VMware user cluster. */
		state: FormControl<BareMetalAdminClusterState | null | undefined>,

		/** Output only. The unique identifier of the VMware user cluster. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time at which VMware user cluster was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Enable VM tracking. */
		vmTrackingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareClusterFormGroup() {
		return new FormGroup<VmwareClusterFormProperties>({
			adminClusterMembership: new FormControl<string | null | undefined>(undefined),
			adminClusterName: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disableBundledIngress: new FormControl<boolean | null | undefined>(undefined),
			enableControlPlaneV2: new FormControl<boolean | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			localName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onPremVersion: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BareMetalAdminClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vmTrackingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies control plane node config for the VMware user cluster. */
	export interface VmwareControlPlaneNodeConfig {

		/** Represents auto resizing configurations for the VMware user cluster. */
		autoResizeConfig?: VmwareAutoResizeConfig;

		/** The number of CPUs for each admin cluster node that serve as control planes for this VMware user cluster. (default: 4 CPUs) */
		cpus?: string | null;

		/** The megabytes of memory for each admin cluster node that serves as a control plane for this VMware user cluster (default: 8192 MB memory). */
		memory?: string | null;

		/** The number of control plane nodes for this VMware user cluster. (default: 1 replica). */
		replicas?: string | null;

		/** Specifies control plane node config. */
		vsphereConfig?: VmwareControlPlaneVsphereConfig;
	}

	/** Specifies control plane node config for the VMware user cluster. */
	export interface VmwareControlPlaneNodeConfigFormProperties {

		/** The number of CPUs for each admin cluster node that serve as control planes for this VMware user cluster. (default: 4 CPUs) */
		cpus: FormControl<string | null | undefined>,

		/** The megabytes of memory for each admin cluster node that serves as a control plane for this VMware user cluster (default: 8192 MB memory). */
		memory: FormControl<string | null | undefined>,

		/** The number of control plane nodes for this VMware user cluster. (default: 1 replica). */
		replicas: FormControl<string | null | undefined>,
	}
	export function CreateVmwareControlPlaneNodeConfigFormGroup() {
		return new FormGroup<VmwareControlPlaneNodeConfigFormProperties>({
			cpus: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			replicas: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies control plane node config. */
	export interface VmwareControlPlaneVsphereConfig {

		/** The Vsphere datastore used by the control plane Node. */
		datastore?: string | null;

		/** The Vsphere storage policy used by the control plane Node. */
		storagePolicyName?: string | null;
	}

	/** Specifies control plane node config. */
	export interface VmwareControlPlaneVsphereConfigFormProperties {

		/** The Vsphere datastore used by the control plane Node. */
		datastore: FormControl<string | null | undefined>,

		/** The Vsphere storage policy used by the control plane Node. */
		storagePolicyName: FormControl<string | null | undefined>,
	}
	export function CreateVmwareControlPlaneVsphereConfigFormGroup() {
		return new FormGroup<VmwareControlPlaneVsphereConfigFormProperties>({
			datastore: new FormControl<string | null | undefined>(undefined),
			storagePolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains configurations for Dataplane V2, which is optimized dataplane for Kubernetes networking. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2 */
	export interface VmwareDataplaneV2Config {

		/** Enable advanced networking which requires dataplane_v2_enabled to be set true. */
		advancedNetworking?: boolean | null;

		/** Enables Dataplane V2. */
		dataplaneV2Enabled?: boolean | null;

		/** Enable Dataplane V2 for clusters with Windows nodes. */
		windowsDataplaneV2Enabled?: boolean | null;
	}

	/** Contains configurations for Dataplane V2, which is optimized dataplane for Kubernetes networking. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2 */
	export interface VmwareDataplaneV2ConfigFormProperties {

		/** Enable advanced networking which requires dataplane_v2_enabled to be set true. */
		advancedNetworking: FormControl<boolean | null | undefined>,

		/** Enables Dataplane V2. */
		dataplaneV2Enabled: FormControl<boolean | null | undefined>,

		/** Enable Dataplane V2 for clusters with Windows nodes. */
		windowsDataplaneV2Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareDataplaneV2ConfigFormGroup() {
		return new FormGroup<VmwareDataplaneV2ConfigFormProperties>({
			advancedNetworking: new FormControl<boolean | null | undefined>(undefined),
			dataplaneV2Enabled: new FormControl<boolean | null | undefined>(undefined),
			windowsDataplaneV2Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the locad balancer config for the VMware user cluster. */
	export interface VmwareLoadBalancerConfig {

		/** Represents configuration parameters for an F5 BIG-IP load balancer. */
		f5Config?: VmwareF5BigIpConfig;

		/** Represents configuration parameters for an already existing manual load balancer. Given the nature of manual load balancers it is expected that said load balancer will be fully managed by users. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update ManualLB configurations it can only bind a pre-existing configuration to a new VMware user cluster. */
		manualLbConfig?: VmwareManualLbConfig;

		/** Represents configuration parameters for the MetalLB load balancer. */
		metalLbConfig?: VmwareMetalLbConfig;

		/** VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'. */
		seesawConfig?: VmwareSeesawConfig;

		/** Specifies the VIP config for the VMware user cluster load balancer. */
		vipConfig?: VmwareVipConfig;
	}

	/** Specifies the locad balancer config for the VMware user cluster. */
	export interface VmwareLoadBalancerConfigFormProperties {
	}
	export function CreateVmwareLoadBalancerConfigFormGroup() {
		return new FormGroup<VmwareLoadBalancerConfigFormProperties>({
		});

	}


	/** Represents configuration parameters for an F5 BIG-IP load balancer. */
	export interface VmwareF5BigIpConfig {

		/** The load balancer's IP address. */
		address?: string | null;

		/** The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'. */
		partition?: string | null;

		/** The pool name. Only necessary, if using SNAT. */
		snatPool?: string | null;
	}

	/** Represents configuration parameters for an F5 BIG-IP load balancer. */
	export interface VmwareF5BigIpConfigFormProperties {

		/** The load balancer's IP address. */
		address: FormControl<string | null | undefined>,

		/** The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: 'my-f5-admin-partition'. */
		partition: FormControl<string | null | undefined>,

		/** The pool name. Only necessary, if using SNAT. */
		snatPool: FormControl<string | null | undefined>,
	}
	export function CreateVmwareF5BigIpConfigFormGroup() {
		return new FormGroup<VmwareF5BigIpConfigFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			partition: new FormControl<string | null | undefined>(undefined),
			snatPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents configuration parameters for an already existing manual load balancer. Given the nature of manual load balancers it is expected that said load balancer will be fully managed by users. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update ManualLB configurations it can only bind a pre-existing configuration to a new VMware user cluster. */
	export interface VmwareManualLbConfig {

		/** NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). */
		controlPlaneNodePort?: number | null;

		/** NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). */
		ingressHttpNodePort?: number | null;

		/** NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). */
		ingressHttpsNodePort?: number | null;

		/** NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). */
		konnectivityServerNodePort?: number | null;
	}

	/** Represents configuration parameters for an already existing manual load balancer. Given the nature of manual load balancers it is expected that said load balancer will be fully managed by users. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update ManualLB configurations it can only bind a pre-existing configuration to a new VMware user cluster. */
	export interface VmwareManualLbConfigFormProperties {

		/** NodePort for control plane service. The Kubernetes API server in the admin cluster is implemented as a Service of type NodePort (ex. 30968). */
		controlPlaneNodePort: FormControl<number | null | undefined>,

		/** NodePort for ingress service's http. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 32527). */
		ingressHttpNodePort: FormControl<number | null | undefined>,

		/** NodePort for ingress service's https. The ingress service in the admin cluster is implemented as a Service of type NodePort (ex. 30139). */
		ingressHttpsNodePort: FormControl<number | null | undefined>,

		/** NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). */
		konnectivityServerNodePort: FormControl<number | null | undefined>,
	}
	export function CreateVmwareManualLbConfigFormGroup() {
		return new FormGroup<VmwareManualLbConfigFormProperties>({
			controlPlaneNodePort: new FormControl<number | null | undefined>(undefined),
			ingressHttpNodePort: new FormControl<number | null | undefined>(undefined),
			ingressHttpsNodePort: new FormControl<number | null | undefined>(undefined),
			konnectivityServerNodePort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents configuration parameters for the MetalLB load balancer. */
	export interface VmwareMetalLbConfig {

		/** Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. */
		addressPools?: Array<VmwareAddressPool>;
	}

	/** Represents configuration parameters for the MetalLB load balancer. */
	export interface VmwareMetalLbConfigFormProperties {
	}
	export function CreateVmwareMetalLbConfigFormGroup() {
		return new FormGroup<VmwareMetalLbConfigFormProperties>({
		});

	}


	/** Represents an IP pool used by the load balancer. */
	export interface VmwareAddressPool {

		/** Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5). */
		addresses?: Array<string>;

		/** If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. */
		avoidBuggyIps?: boolean | null;

		/** If true, prevent IP addresses from being automatically assigned. */
		manualAssign?: boolean | null;

		/** Required. The name of the address pool. */
		pool?: string | null;
	}

	/** Represents an IP pool used by the load balancer. */
	export interface VmwareAddressPoolFormProperties {

		/** If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. */
		avoidBuggyIps: FormControl<boolean | null | undefined>,

		/** If true, prevent IP addresses from being automatically assigned. */
		manualAssign: FormControl<boolean | null | undefined>,

		/** Required. The name of the address pool. */
		pool: FormControl<string | null | undefined>,
	}
	export function CreateVmwareAddressPoolFormGroup() {
		return new FormGroup<VmwareAddressPoolFormProperties>({
			avoidBuggyIps: new FormControl<boolean | null | undefined>(undefined),
			manualAssign: new FormControl<boolean | null | undefined>(undefined),
			pool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'. */
	export interface VmwareSeesawConfig {

		/** Enable two load balancer VMs to achieve a highly-available Seesaw load balancer. */
		enableHa?: boolean | null;

		/** Required. In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name]. */
		group?: string | null;

		/** Required. The IP Blocks to be used by the Seesaw load balancer */
		ipBlocks?: Array<VmwareIpBlock>;

		/** Required. MasterIP is the IP announced by the master of Seesaw group. */
		masterIp?: string | null;

		/** Name to be used by Stackdriver. */
		stackdriverName?: string | null;

		/** Names of the VMs created for this Seesaw group. */
		vms?: Array<string>;
	}

	/** VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'. */
	export interface VmwareSeesawConfigFormProperties {

		/** Enable two load balancer VMs to achieve a highly-available Seesaw load balancer. */
		enableHa: FormControl<boolean | null | undefined>,

		/** Required. In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name]. */
		group: FormControl<string | null | undefined>,

		/** Required. MasterIP is the IP announced by the master of Seesaw group. */
		masterIp: FormControl<string | null | undefined>,

		/** Name to be used by Stackdriver. */
		stackdriverName: FormControl<string | null | undefined>,
	}
	export function CreateVmwareSeesawConfigFormGroup() {
		return new FormGroup<VmwareSeesawConfigFormProperties>({
			enableHa: new FormControl<boolean | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			masterIp: new FormControl<string | null | undefined>(undefined),
			stackdriverName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the VIP config for the VMware user cluster load balancer. */
	export interface VmwareVipConfig {

		/** The VIP which you previously set aside for the Kubernetes API of this cluster. */
		controlPlaneVip?: string | null;

		/** The VIP which you previously set aside for ingress traffic into this cluster. */
		ingressVip?: string | null;
	}

	/** Specifies the VIP config for the VMware user cluster load balancer. */
	export interface VmwareVipConfigFormProperties {

		/** The VIP which you previously set aside for the Kubernetes API of this cluster. */
		controlPlaneVip: FormControl<string | null | undefined>,

		/** The VIP which you previously set aside for ingress traffic into this cluster. */
		ingressVip: FormControl<string | null | undefined>,
	}
	export function CreateVmwareVipConfigFormGroup() {
		return new FormGroup<VmwareVipConfigFormProperties>({
			controlPlaneVip: new FormControl<string | null | undefined>(undefined),
			ingressVip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies network config for the VMware user cluster. */
	export interface VmwareNetworkConfig {

		/** Specifies control plane V2 config. */
		controlPlaneV2Config?: VmwareControlPlaneV2Config;

		/** Represents the network configuration required for the VMware user clusters with DHCP IP configurations. */
		dhcpIpConfig?: VmwareDhcpIpConfig;

		/** Represents the common parameters for all the hosts irrespective of their IP address. */
		hostConfig?: VmwareHostConfig;

		/** Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
		podAddressCidrBlocks?: Array<string>;

		/** Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. */
		serviceAddressCidrBlocks?: Array<string>;

		/** Represents the network configuration required for the VMware user clusters with Static IP configurations. */
		staticIpConfig?: VmwareStaticIpConfig;

		/** Output only. vcenter_network specifies vCenter network name. Inherited from the admin cluster. */
		vcenterNetwork?: string | null;
	}

	/** Specifies network config for the VMware user cluster. */
	export interface VmwareNetworkConfigFormProperties {

		/** Output only. vcenter_network specifies vCenter network name. Inherited from the admin cluster. */
		vcenterNetwork: FormControl<string | null | undefined>,
	}
	export function CreateVmwareNetworkConfigFormGroup() {
		return new FormGroup<VmwareNetworkConfigFormProperties>({
			vcenterNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies control plane V2 config. */
	export interface VmwareControlPlaneV2Config {

		/** Represents a collection of IP addresses to assign to nodes. */
		controlPlaneIpBlock?: VmwareIpBlock;
	}

	/** Specifies control plane V2 config. */
	export interface VmwareControlPlaneV2ConfigFormProperties {
	}
	export function CreateVmwareControlPlaneV2ConfigFormGroup() {
		return new FormGroup<VmwareControlPlaneV2ConfigFormProperties>({
		});

	}


	/** Specifies vSphere CSI components deployment config in the VMware user cluster. */
	export interface VmwareStorageConfig {

		/** Whether or not to deploy vSphere CSI components in the VMware user cluster. Enabled by default. */
		vsphereCsiDisabled?: boolean | null;
	}

	/** Specifies vSphere CSI components deployment config in the VMware user cluster. */
	export interface VmwareStorageConfigFormProperties {

		/** Whether or not to deploy vSphere CSI components in the VMware user cluster. Enabled by default. */
		vsphereCsiDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareStorageConfigFormGroup() {
		return new FormGroup<VmwareStorageConfigFormProperties>({
			vsphereCsiDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** VmwareClusterUpgradePolicy defines the cluster upgrade policy. */
	export interface VmwareClusterUpgradePolicy {

		/** Controls whether the upgrade applies to the control plane only. */
		controlPlaneOnly?: boolean | null;
	}

	/** VmwareClusterUpgradePolicy defines the cluster upgrade policy. */
	export interface VmwareClusterUpgradePolicyFormProperties {

		/** Controls whether the upgrade applies to the control plane only. */
		controlPlaneOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateVmwareClusterUpgradePolicyFormGroup() {
		return new FormGroup<VmwareClusterUpgradePolicyFormProperties>({
			controlPlaneOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents configuration for the VMware VCenter for the user cluster. */
	export interface VmwareVCenterConfig {

		/** Output only. The vCenter IP address. */
		address?: string | null;

		/** Contains the vCenter CA certificate public key for SSL verification. */
		caCertData?: string | null;

		/** The name of the vCenter cluster for the user cluster. */
		cluster?: string | null;

		/** The name of the vCenter datacenter for the user cluster. */
		datacenter?: string | null;

		/** The name of the vCenter datastore for the user cluster. */
		datastore?: string | null;

		/** The name of the vCenter folder for the user cluster. */
		folder?: string | null;

		/** The name of the vCenter resource pool for the user cluster. */
		resourcePool?: string | null;

		/** The name of the vCenter storage policy for the user cluster. */
		storagePolicyName?: string | null;
	}

	/** Represents configuration for the VMware VCenter for the user cluster. */
	export interface VmwareVCenterConfigFormProperties {

		/** Output only. The vCenter IP address. */
		address: FormControl<string | null | undefined>,

		/** Contains the vCenter CA certificate public key for SSL verification. */
		caCertData: FormControl<string | null | undefined>,

		/** The name of the vCenter cluster for the user cluster. */
		cluster: FormControl<string | null | undefined>,

		/** The name of the vCenter datacenter for the user cluster. */
		datacenter: FormControl<string | null | undefined>,

		/** The name of the vCenter datastore for the user cluster. */
		datastore: FormControl<string | null | undefined>,

		/** The name of the vCenter folder for the user cluster. */
		folder: FormControl<string | null | undefined>,

		/** The name of the vCenter resource pool for the user cluster. */
		resourcePool: FormControl<string | null | undefined>,

		/** The name of the vCenter storage policy for the user cluster. */
		storagePolicyName: FormControl<string | null | undefined>,
	}
	export function CreateVmwareVCenterConfigFormGroup() {
		return new FormGroup<VmwareVCenterConfigFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			caCertData: new FormControl<string | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
			datacenter: new FormControl<string | null | undefined>(undefined),
			datastore: new FormControl<string | null | undefined>(undefined),
			folder: new FormControl<string | null | undefined>(undefined),
			resourcePool: new FormControl<string | null | undefined>(undefined),
			storagePolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing VMware node pools. */
	export interface ListVmwareNodePoolsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** The node pools from the specified parent resource. */
		vmwareNodePools?: Array<VmwareNodePool>;
	}

	/** Response message for listing VMware node pools. */
	export interface ListVmwareNodePoolsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVmwareNodePoolsResponseFormGroup() {
		return new FormGroup<ListVmwareNodePoolsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource VmwareNodePool represents a VMware node pool. ## */
	export interface VmwareNodePool {

		/** Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** Parameters that describe the configuration of all nodes within a given node pool. */
		config?: VmwareNodeConfig;

		/** Output only. The time at which this node pool was created. */
		createTime?: string | null;

		/** Output only. The time at which this node pool was deleted. If the resource is not deleted, this must be empty */
		deleteTime?: string | null;

		/** The display name for the node pool. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag?: string | null;

		/** Immutable. The resource name of this node pool. */
		name?: string | null;

		/** NodePoolAutoscaling config for the NodePool to allow for the kubernetes to scale NodePool. */
		nodePoolAutoscaling?: VmwareNodePoolAutoscalingConfig;

		/** Anthos version for the node pool. Defaults to the user cluster version. */
		onPremVersion?: string | null;

		/** Output only. If set, there are currently changes in flight to the node pool. */
		reconciling?: boolean | null;

		/** Output only. The current state of the node pool. */
		state?: BareMetalAdminClusterState | null;

		/** ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED). */
		status?: ResourceStatus;

		/** Output only. The unique identifier of the node pool. */
		uid?: string | null;

		/** Output only. The time at which this node pool was last updated. */
		updateTime?: string | null;
	}

	/** Resource VmwareNodePool represents a VMware node pool. ## */
	export interface VmwareNodePoolFormProperties {

		/** Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The time at which this node pool was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which this node pool was deleted. If the resource is not deleted, this must be empty */
		deleteTime: FormControl<string | null | undefined>,

		/** The display name for the node pool. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Allows clients to perform consistent read-modify-writes through optimistic concurrency control. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. The resource name of this node pool. */
		name: FormControl<string | null | undefined>,

		/** Anthos version for the node pool. Defaults to the user cluster version. */
		onPremVersion: FormControl<string | null | undefined>,

		/** Output only. If set, there are currently changes in flight to the node pool. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current state of the node pool. */
		state: FormControl<BareMetalAdminClusterState | null | undefined>,

		/** Output only. The unique identifier of the node pool. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time at which this node pool was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateVmwareNodePoolFormGroup() {
		return new FormGroup<VmwareNodePoolFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onPremVersion: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BareMetalAdminClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters that describe the configuration of all nodes within a given node pool. */
	export interface VmwareNodeConfig {

		/** VMware disk size to be used during creation. */
		bootDiskSizeGb?: string | null;

		/** The number of CPUs for each node in the node pool. */
		cpus?: string | null;

		/** Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. */
		enableLoadBalancer?: boolean | null;

		/** The OS image name in vCenter, only valid when using Windows. */
		image?: string | null;

		/** Required. The OS image to be used for each node in a node pool. Currently `cos`, `ubuntu`, `ubuntu_containerd` and `windows` are supported. */
		imageType?: string | null;

		/** The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ */
		labels?: {[id: string]: string };

		/** The megabytes of memory for each node in the node pool. */
		memoryMb?: string | null;

		/** The number of nodes in the node pool. */
		replicas?: string | null;

		/** The initial taints assigned to nodes of this node pool. */
		taints?: Array<NodeTaint>;

		/** VmwareVsphereConfig represents configuration for the VMware VCenter for node pool. */
		vsphereConfig?: VmwareVsphereConfig;
	}

	/** Parameters that describe the configuration of all nodes within a given node pool. */
	export interface VmwareNodeConfigFormProperties {

		/** VMware disk size to be used during creation. */
		bootDiskSizeGb: FormControl<string | null | undefined>,

		/** The number of CPUs for each node in the node pool. */
		cpus: FormControl<string | null | undefined>,

		/** Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. */
		enableLoadBalancer: FormControl<boolean | null | undefined>,

		/** The OS image name in vCenter, only valid when using Windows. */
		image: FormControl<string | null | undefined>,

		/** Required. The OS image to be used for each node in a node pool. Currently `cos`, `ubuntu`, `ubuntu_containerd` and `windows` are supported. */
		imageType: FormControl<string | null | undefined>,

		/** The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The megabytes of memory for each node in the node pool. */
		memoryMb: FormControl<string | null | undefined>,

		/** The number of nodes in the node pool. */
		replicas: FormControl<string | null | undefined>,
	}
	export function CreateVmwareNodeConfigFormGroup() {
		return new FormGroup<VmwareNodeConfigFormProperties>({
			bootDiskSizeGb: new FormControl<string | null | undefined>(undefined),
			cpus: new FormControl<string | null | undefined>(undefined),
			enableLoadBalancer: new FormControl<boolean | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			memoryMb: new FormControl<string | null | undefined>(undefined),
			replicas: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareVsphereConfig represents configuration for the VMware VCenter for node pool. */
	export interface VmwareVsphereConfig {

		/** The name of the vCenter datastore. Inherited from the user cluster. */
		datastore?: string | null;

		/** Vsphere host groups to apply to all VMs in the node pool */
		hostGroups?: Array<string>;

		/** Tags to apply to VMs. */
		tags?: Array<VmwareVsphereTag>;
	}

	/** VmwareVsphereConfig represents configuration for the VMware VCenter for node pool. */
	export interface VmwareVsphereConfigFormProperties {

		/** The name of the vCenter datastore. Inherited from the user cluster. */
		datastore: FormControl<string | null | undefined>,
	}
	export function CreateVmwareVsphereConfigFormGroup() {
		return new FormGroup<VmwareVsphereConfigFormProperties>({
			datastore: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareVsphereTag describes a vSphere tag to be placed on VMs in the node pool. For more information, see https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-E8E854DD-AA97-4E0C-8419-CE84F93C4058.html */
	export interface VmwareVsphereTag {

		/** The Vsphere tag category. */
		category?: string | null;

		/** The Vsphere tag name. */
		tag?: string | null;
	}

	/** VmwareVsphereTag describes a vSphere tag to be placed on VMs in the node pool. For more information, see https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-E8E854DD-AA97-4E0C-8419-CE84F93C4058.html */
	export interface VmwareVsphereTagFormProperties {

		/** The Vsphere tag category. */
		category: FormControl<string | null | undefined>,

		/** The Vsphere tag name. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateVmwareVsphereTagFormGroup() {
		return new FormGroup<VmwareVsphereTagFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NodePoolAutoscaling config for the NodePool to allow for the kubernetes to scale NodePool. */
	export interface VmwareNodePoolAutoscalingConfig {

		/** Maximum number of replicas in the NodePool. */
		maxReplicas?: number | null;

		/** Minimum number of replicas in the NodePool. */
		minReplicas?: number | null;
	}

	/** NodePoolAutoscaling config for the NodePool to allow for the kubernetes to scale NodePool. */
	export interface VmwareNodePoolAutoscalingConfigFormProperties {

		/** Maximum number of replicas in the NodePool. */
		maxReplicas: FormControl<number | null | undefined>,

		/** Minimum number of replicas in the NodePool. */
		minReplicas: FormControl<number | null | undefined>,
	}
	export function CreateVmwareNodePoolAutoscalingConfigFormGroup() {
		return new FormGroup<VmwareNodePoolAutoscalingConfigFormProperties>({
			maxReplicas: new FormControl<number | null | undefined>(undefined),
			minReplicas: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Progress metric is (string, int|float|string) pair. */
	export interface Metric {

		/** For metrics with floating point value. */
		doubleValue?: number | null;

		/** For metrics with integer value. */
		intValue?: string | null;

		/** Required. The metric name. */
		metric?: MetricMetric | null;

		/** For metrics with custom values (ratios, visual progress, etc.). */
		stringValue?: string | null;
	}

	/** Progress metric is (string, int|float|string) pair. */
	export interface MetricFormProperties {

		/** For metrics with floating point value. */
		doubleValue: FormControl<number | null | undefined>,

		/** For metrics with integer value. */
		intValue: FormControl<string | null | undefined>,

		/** Required. The metric name. */
		metric: FormControl<MetricMetric | null | undefined>,

		/** For metrics with custom values (ratios, visual progress, etc.). */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			metric: new FormControl<MetricMetric | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetricMetric { METRIC_ID_UNSPECIFIED = 0, NODES_TOTAL = 1, NODES_DRAINING = 2, NODES_UPGRADING = 3, NODES_PENDING_UPGRADE = 4, NODES_UPGRADED = 5, NODES_FAILED = 6, NODES_HEALTHY = 7, NODES_RECONCILING = 8, NODES_IN_MAINTENANCE = 9, PREFLIGHTS_COMPLETED = 10, PREFLIGHTS_RUNNING = 11, PREFLIGHTS_FAILED = 12, PREFLIGHTS_TOTAL = 13 }


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Denotes if the local managing cluster's control plane is currently disconnected. This is expected to occur temporarily during self-managed cluster upgrades. */
		controlPlaneDisconnected?: boolean | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Information about operation progress. LINT.IfChange */
		progress?: OperationProgress;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have [Operation.error] value with a [google.rpc.Status.code] of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Type of operation being executed. */
		type?: OperationMetadataType | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Denotes if the local managing cluster's control plane is currently disconnected. This is expected to occur temporarily during self-managed cluster upgrades. */
		controlPlaneDisconnected: FormControl<boolean | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have [Operation.error] value with a [google.rpc.Status.code] of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Type of operation being executed. */
		type: FormControl<OperationMetadataType | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			controlPlaneDisconnected: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OperationMetadataType | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about operation progress. LINT.IfChange */
	export interface OperationProgress {

		/** The stages of the operation. */
		stages?: Array<OperationStage>;
	}

	/** Information about operation progress. LINT.IfChange */
	export interface OperationProgressFormProperties {
	}
	export function CreateOperationProgressFormGroup() {
		return new FormGroup<OperationProgressFormProperties>({
		});

	}


	/** Information about a particular stage of an operation. */
	export interface OperationStage {

		/** Time the stage ended. */
		endTime?: string | null;

		/** Progress metric bundle. */
		metrics?: Array<Metric>;

		/** The high-level stage of the operation. */
		stage?: OperationStageStage | null;

		/** Time the stage started. */
		startTime?: string | null;

		/** Output only. State of the stage. */
		state?: OperationStageState | null;
	}

	/** Information about a particular stage of an operation. */
	export interface OperationStageFormProperties {

		/** Time the stage ended. */
		endTime: FormControl<string | null | undefined>,

		/** The high-level stage of the operation. */
		stage: FormControl<OperationStageStage | null | undefined>,

		/** Time the stage started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. State of the stage. */
		state: FormControl<OperationStageState | null | undefined>,
	}
	export function CreateOperationStageFormGroup() {
		return new FormGroup<OperationStageFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<OperationStageStage | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<OperationStageState | null | undefined>(undefined),
		});

	}

	export enum OperationStageStage { STAGE_UNSPECIFIED = 0, PREFLIGHT_CHECK = 1, CONFIGURE = 2, DEPLOY = 3, HEALTH_CHECK = 4, UPDATE = 5 }

	export enum OperationStageState { STATE_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, SUCCEEDED = 3, FAILED = 4 }

	export enum OperationMetadataType { OPERATION_TYPE_UNSPECIFIED = 0, CREATE = 1, DELETE = 2, UPDATE = 3, UPGRADE = 4, PLATFORM_UPGRADE = 5 }


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for querying bare metal admin cluster version config. */
	export interface QueryBareMetalAdminVersionConfigResponse {

		/** List of available versions to install or to upgrade to. */
		versions?: Array<BareMetalVersionInfo>;
	}

	/** Response message for querying bare metal admin cluster version config. */
	export interface QueryBareMetalAdminVersionConfigResponseFormProperties {
	}
	export function CreateQueryBareMetalAdminVersionConfigResponseFormGroup() {
		return new FormGroup<QueryBareMetalAdminVersionConfigResponseFormProperties>({
		});

	}


	/** Response message for querying bare metal admin cluster version config. */
	export interface QueryBareMetalVersionConfigResponse {

		/** List of available versions to install or to upgrade to. */
		versions?: Array<BareMetalVersionInfo>;
	}

	/** Response message for querying bare metal admin cluster version config. */
	export interface QueryBareMetalVersionConfigResponseFormProperties {
	}
	export function CreateQueryBareMetalVersionConfigResponseFormGroup() {
		return new FormGroup<QueryBareMetalVersionConfigResponseFormProperties>({
		});

	}


	/** Response message for querying VMware user cluster version config. */
	export interface QueryVmwareVersionConfigResponse {

		/** List of available versions to install or to upgrade to. */
		versions?: Array<VmwareVersionInfo>;
	}

	/** Response message for querying VMware user cluster version config. */
	export interface QueryVmwareVersionConfigResponseFormProperties {
	}
	export function CreateQueryVmwareVersionConfigResponseFormGroup() {
		return new FormGroup<QueryVmwareVersionConfigResponseFormProperties>({
		});

	}


	/** Contains information about a specific Anthos on VMware version. */
	export interface VmwareVersionInfo {

		/** The list of upgrade dependencies for this version. */
		dependencies?: Array<UpgradeDependency>;

		/** If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster) must be upgraded before this version can be installed or upgraded to. */
		hasDependencies?: boolean | null;

		/** If set, the version is installed in the admin cluster. Otherwise, the version bundle must be downloaded and installed before a user cluster can be created at or upgraded to this version. */
		isInstalled?: boolean | null;

		/** Version number e.g. 1.13.1-gke.1000. */
		version?: string | null;
	}

	/** Contains information about a specific Anthos on VMware version. */
	export interface VmwareVersionInfoFormProperties {

		/** If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster) must be upgraded before this version can be installed or upgraded to. */
		hasDependencies: FormControl<boolean | null | undefined>,

		/** If set, the version is installed in the admin cluster. Otherwise, the version bundle must be downloaded and installed before a user cluster can be created at or upgraded to this version. */
		isInstalled: FormControl<boolean | null | undefined>,

		/** Version number e.g. 1.13.1-gke.1000. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVmwareVersionInfoFormGroup() {
		return new FormGroup<VmwareVersionInfoFormProperties>({
			hasDependencies: new FormControl<boolean | null | undefined>(undefined),
			isInstalled: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a single VMware node pool.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the node pool to delete. Format: projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool}
		 * @param {boolean} allowMissing If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
		 * @param {string} etag The current etag of the VmwareNodePool. If an etag is provided and does not match the current etag of the node pool, deletion will be blocked and an ABORTED error will be returned.
		 * @param {boolean} ignoreErrors If set to true, the deletion of a VMware node pool resource will succeed even if errors occur during deletion. This parameter can be used when you want to delete GCP's node pool resource and you've already deleted the on-prem admin cluster that hosted your node pool. WARNING: Using this parameter when your user cluster still exists may result in a deleted GCP node pool but an existing on-prem node pool.
		 * @param {boolean} validateOnly If set, only validate the request, but do not actually delete the node pool.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_delete(name: string, allowMissing: boolean | null | undefined, etag: string | null | undefined, ignoreErrors: boolean | null | undefined, validateOnly: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&ignoreErrors=' + ignoreErrors + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_getView} view View for VMware node pool. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_get(name: string, view: Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_getView | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates the parameters of a single VMware node pool.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The resource name of this node pool.
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the VMwareNodePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all populated fields in the VMwareNodePool message will be updated. Empty fields will be ignored unless a field mask is used.
		 * @param {boolean} validateOnly Validate the request without actually doing any updates.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_patch(name: string, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: VmwareNodePool): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Gkeonprem_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Gkeonprem_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unenrolls a VMware node pool to Anthos On-Prem API
		 * Delete v1/{name}:unenroll
		 * @param {string} name Required. The name of the node pool to unenroll. Format: projects/{project}/locations/{location}/vmwareClusters/{cluster}/vmwareNodePools/{nodepool}
		 * @param {boolean} allowMissing If set to true, and the VMware node pool is not found, the request will succeed but no action will be taken on the server and return a completed LRO.
		 * @param {string} etag The current etag of the VMware node pool. If an etag is provided and does not match the current etag of node pool, deletion will be blocked and an ABORTED error will be returned.
		 * @param {boolean} validateOnly If set, only validate the request, but do not actually unenroll the node pool.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_unenroll(name: string, allowMissing: boolean | null | undefined, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':unenroll&allowMissing=' + allowMissing + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Lists bare metal admin clusters in a given project and location.
		 * Get v1/{parent}/bareMetalAdminClusters
		 * @param {string} parent Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {Gkeonprem_projects_locations_bareMetalAdminClusters_listView} view View for bare metal admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details.
		 * @return {ListBareMetalAdminClustersResponse} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalAdminClusters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Gkeonprem_projects_locations_bareMetalAdminClusters_listView | null | undefined): Observable<ListBareMetalAdminClustersResponse> {
			return this.http.get<ListBareMetalAdminClustersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalAdminClusters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment
		 * Post v1/{parent}/bareMetalAdminClusters
		 * @param {string} parent Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}"
		 * @param {string} bareMetalAdminClusterId Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/
		 * @param {boolean} validateOnly Validate the request without actually doing any updates.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalAdminClusters_create(parent: string, bareMetalAdminClusterId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: BareMetalAdminCluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalAdminClusters&bareMetalAdminClusterId=' + (bareMetalAdminClusterId == null ? '' : encodeURIComponent(bareMetalAdminClusterId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
		 * Post v1/{parent}/bareMetalAdminClusters:enroll
		 * @param {string} parent Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}"
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalAdminClusters_enroll(parent: string, requestBody: EnrollBareMetalAdminClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalAdminClusters:enroll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries the bare metal admin cluster version config.
		 * Post v1/{parent}/bareMetalAdminClusters:queryVersionConfig
		 * @param {string} parent Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}"
		 * @param {string} upgradeConfig_clusterName The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}"
		 * @return {QueryBareMetalAdminVersionConfigResponse} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalAdminClusters_queryVersionConfig(parent: string, upgradeConfig_clusterName: string | null | undefined): Observable<QueryBareMetalAdminVersionConfigResponse> {
			return this.http.post<QueryBareMetalAdminVersionConfigResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalAdminClusters:queryVersionConfig&upgradeConfig_clusterName=' + (upgradeConfig_clusterName == null ? '' : encodeURIComponent(upgradeConfig_clusterName)), null, {});
		}

		/**
		 * Lists bare metal clusters in a given project and location.
		 * Get v1/{parent}/bareMetalClusters
		 * @param {string} parent Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
		 * @param {string} filter A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {Gkeonprem_projects_locations_bareMetalAdminClusters_listView} view View for bare metal Clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
		 * @return {ListBareMetalClustersResponse} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalClusters_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Gkeonprem_projects_locations_bareMetalAdminClusters_listView | null | undefined): Observable<ListBareMetalClustersResponse> {
			return this.http.get<ListBareMetalClustersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalClusters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new bare metal cluster in a given project and location.
		 * Post v1/{parent}/bareMetalClusters
		 * @param {string} parent Required. The parent of the project and location where the cluster is created in. Format: "projects/{project}/locations/{location}"
		 * @param {string} bareMetalClusterId Required. User provided identifier that is used as part of the resource name; must conform to RFC-1034 and additionally restrict to lower-cased letters. This comes out roughly to: /^a-z+[a-z0-9]$/
		 * @param {boolean} validateOnly Validate the request without actually doing any updates.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalClusters_create(parent: string, bareMetalClusterId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: BareMetalCluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalClusters&bareMetalClusterId=' + (bareMetalClusterId == null ? '' : encodeURIComponent(bareMetalClusterId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
		 * Post v1/{parent}/bareMetalClusters:enroll
		 * @param {string} parent Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}"
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalClusters_enroll(parent: string, requestBody: EnrollBareMetalClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalClusters:enroll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries the bare metal user cluster version config.
		 * Post v1/{parent}/bareMetalClusters:queryVersionConfig
		 * @param {string} parent Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}"
		 * @param {string} createConfig_adminClusterMembership The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project}/locations/{location}/memberships/{membership}"
		 * @param {string} createConfig_adminClusterName The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/bareMetalAdminClusters/{bare_metal_admin_cluster}"
		 * @param {string} upgradeConfig_clusterName The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project}/locations/{location}/bareMetalClusters/{bare_metal_cluster}"
		 * @return {QueryBareMetalVersionConfigResponse} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalClusters_queryVersionConfig(parent: string, createConfig_adminClusterMembership: string | null | undefined, createConfig_adminClusterName: string | null | undefined, upgradeConfig_clusterName: string | null | undefined): Observable<QueryBareMetalVersionConfigResponse> {
			return this.http.post<QueryBareMetalVersionConfigResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalClusters:queryVersionConfig&createConfig_adminClusterMembership=' + (createConfig_adminClusterMembership == null ? '' : encodeURIComponent(createConfig_adminClusterMembership)) + '&createConfig_adminClusterName=' + (createConfig_adminClusterName == null ? '' : encodeURIComponent(createConfig_adminClusterName)) + '&upgradeConfig_clusterName=' + (upgradeConfig_clusterName == null ? '' : encodeURIComponent(upgradeConfig_clusterName)), null, {});
		}

		/**
		 * Lists bare metal node pools in a given project, location and bare metal cluster.
		 * Get v1/{parent}/bareMetalNodePools
		 * @param {string} parent Required. The parent, which owns this collection of node pools. Format: projects/{project}/locations/{location}/bareMetalClusters/{bareMetalCluster}
		 * @param {number} pageSize The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListBareMetalNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBareMetalNodePools` must match the call that provided the page token.
		 * @param {Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_getView} view View for bare metal node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
		 * @return {ListBareMetalNodePoolsResponse} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalClusters_bareMetalNodePools_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_getView | null | undefined): Observable<ListBareMetalNodePoolsResponse> {
			return this.http.get<ListBareMetalNodePoolsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalNodePools&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new bare metal node pool in a given project, location and Bare Metal cluster.
		 * Post v1/{parent}/bareMetalNodePools
		 * @param {string} parent Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/bareMetalClusters/{cluster}
		 * @param {string} bareMetalNodePoolId The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 63 characters, and valid characters are /a-z-/. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i).
		 * @param {boolean} validateOnly If set, only validate the request, but do not actually create the node pool.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalClusters_bareMetalNodePools_create(parent: string, bareMetalNodePoolId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: BareMetalNodePool): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalNodePools&bareMetalNodePoolId=' + (bareMetalNodePoolId == null ? '' : encodeURIComponent(bareMetalNodePoolId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.
		 * Post v1/{parent}/bareMetalNodePools:enroll
		 * @param {string} parent Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/bareMetalClusters/{cluster}
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_bareMetalClusters_bareMetalNodePools_enroll(parent: string, requestBody: EnrollBareMetalNodePoolRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bareMetalNodePools:enroll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists VMware admin clusters in a given project and location.
		 * Get v1/{parent}/vmwareAdminClusters
		 * @param {string} parent Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {Gkeonprem_projects_locations_bareMetalAdminClusters_listView} view View for VMware admin clusters. When `BASIC` is specified, only the admin cluster resource name and membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete admin cluster configuration details.
		 * @return {ListVmwareAdminClustersResponse} Successful response
		 */
		Gkeonprem_projects_locations_vmwareAdminClusters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Gkeonprem_projects_locations_bareMetalAdminClusters_listView | null | undefined): Observable<ListVmwareAdminClustersResponse> {
			return this.http.get<ListVmwareAdminClustersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareAdminClusters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
		 * Post v1/{parent}/vmwareAdminClusters:enroll
		 * @param {string} parent Required. The parent of the project and location where the cluster is enrolled in. Format: "projects/{project}/locations/{location}"
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareAdminClusters_enroll(parent: string, requestBody: EnrollVmwareAdminClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareAdminClusters:enroll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists VMware Clusters in a given project and location.
		 * Get v1/{parent}/vmwareClusters
		 * @param {string} parent Required. The parent of the project and location where the clusters are listed in. Format: "projects/{project}/locations/{location}"
		 * @param {string} filter A resource filtering expression following https://google.aip.dev/160. When non-empty, only resource's whose attributes field matches the filter are returned.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, at most 50 clusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {Gkeonprem_projects_locations_bareMetalAdminClusters_listView} view View for VMware clusters. When `BASIC` is specified, only the cluster resource name and admin cluster membership are returned. The default/unset value `CLUSTER_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete cluster configuration details.
		 * @return {ListVmwareClustersResponse} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Gkeonprem_projects_locations_bareMetalAdminClusters_listView | null | undefined): Observable<ListVmwareClustersResponse> {
			return this.http.get<ListVmwareClustersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareClusters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new VMware user cluster in a given project and location.
		 * Post v1/{parent}/vmwareClusters
		 * @param {string} parent Required. The parent of the project and location where this cluster is created in. Format: "projects/{project}/locations/{location}"
		 * @param {boolean} validateOnly Validate the request without actually doing any updates.
		 * @param {string} vmwareClusterId User provided identifier that is used as part of the resource name; This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_create(parent: string, validateOnly: boolean | null | undefined, vmwareClusterId: string | null | undefined, requestBody: VmwareCluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareClusters&validateOnly=' + validateOnly + '&vmwareClusterId=' + (vmwareClusterId == null ? '' : encodeURIComponent(vmwareClusterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
		 * Post v1/{parent}/vmwareClusters:enroll
		 * @param {string} parent Required. The parent of the project and location where the cluster is Enrolled in. Format: "projects/{project}/locations/{location}"
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_enroll(parent: string, requestBody: EnrollVmwareClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareClusters:enroll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries the VMware user cluster version config.
		 * Post v1/{parent}/vmwareClusters:queryVersionConfig
		 * @param {string} parent Required. The parent of the project and location to query for version config. Format: "projects/{project}/locations/{location}"
		 * @param {string} createConfig_adminClusterMembership The admin cluster membership. This is the full resource name of the admin cluster's fleet membership. Format: "projects/{project}/locations/{location}/memberships/{membership}"
		 * @param {string} createConfig_adminClusterName The admin cluster resource name. This is the full resource name of the admin cluster resource. Format: "projects/{project}/locations/{location}/vmwareAdminClusters/{vmware_admin_cluster}"
		 * @param {string} upgradeConfig_clusterName The user cluster resource name. This is the full resource name of the user cluster resource. Format: "projects/{project}/locations/{location}/vmwareClusters/{vmware_cluster}"
		 * @return {QueryVmwareVersionConfigResponse} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_queryVersionConfig(parent: string, createConfig_adminClusterMembership: string | null | undefined, createConfig_adminClusterName: string | null | undefined, upgradeConfig_clusterName: string | null | undefined): Observable<QueryVmwareVersionConfigResponse> {
			return this.http.post<QueryVmwareVersionConfigResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareClusters:queryVersionConfig&createConfig_adminClusterMembership=' + (createConfig_adminClusterMembership == null ? '' : encodeURIComponent(createConfig_adminClusterMembership)) + '&createConfig_adminClusterName=' + (createConfig_adminClusterName == null ? '' : encodeURIComponent(createConfig_adminClusterName)) + '&upgradeConfig_clusterName=' + (upgradeConfig_clusterName == null ? '' : encodeURIComponent(upgradeConfig_clusterName)), null, {});
		}

		/**
		 * Lists VMware node pools in a given project, location and VMWare cluster.
		 * Get v1/{parent}/vmwareNodePools
		 * @param {string} parent Required. The parent, which owns this collection of node pools. Format: projects/{project}/locations/{location}/vmwareClusters/{vmwareCluster}
		 * @param {number} pageSize The maximum number of node pools to return. The service may return fewer than this value. If unspecified, at most 50 node pools will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListVmwareNodePools` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVmwareNodePools` must match the call that provided the page token.
		 * @param {Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_getView} view View for VMware node pools. When `BASIC` is specified, only the node pool resource name is returned. The default/unset value `NODE_POOL_VIEW_UNSPECIFIED` is the same as `FULL', which returns the complete node pool configuration details.
		 * @return {ListVmwareNodePoolsResponse} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_getView | null | undefined): Observable<ListVmwareNodePoolsResponse> {
			return this.http.get<ListVmwareNodePoolsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareNodePools&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new VMware node pool in a given project, location and VMWare cluster.
		 * Post v1/{parent}/vmwareNodePools
		 * @param {string} parent Required. The parent resource where this node pool will be created. projects/{project}/locations/{location}/vmwareClusters/{cluster}
		 * @param {boolean} validateOnly If set, only validate the request, but do not actually create the node pool.
		 * @param {string} vmwareNodePoolId The ID to use for the node pool, which will become the final component of the node pool's resource name. This value must be up to 40 characters and follow RFC-1123 (https://tools.ietf.org/html/rfc1123) format. The value must not be permitted to be a UUID (or UUID-like: anything matching /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i).
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_create(parent: string, validateOnly: boolean | null | undefined, vmwareNodePoolId: string | null | undefined, requestBody: VmwareNodePool): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareNodePools&validateOnly=' + validateOnly + '&vmwareNodePoolId=' + (vmwareNodePoolId == null ? '' : encodeURIComponent(vmwareNodePoolId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enrolls a VMware node pool to Anthos On-Prem API
		 * Post v1/{parent}/vmwareNodePools:enroll
		 * @param {string} parent Required. The parent resource where the node pool is enrolled in.
		 * @return {Operation} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_enroll(parent: string, requestBody: EnrollVmwareNodePoolRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareNodePools:enroll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Gkeonprem_projects_locations_vmwareClusters_vmwareNodePools_operations_getView { NODE_POOL_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

	export enum Gkeonprem_projects_locations_bareMetalAdminClusters_listView { CLUSTER_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

