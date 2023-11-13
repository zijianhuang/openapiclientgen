import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** AcceleratorConfig represents a Hardware Accelerator request. */
	export interface AcceleratorConfig {

		/** The number of the accelerator cards exposed to an instance. */
		acceleratorCount?: string | null;

		/**
		 * The accelerator type resource name. List of supported accelerators
		 * [here](/compute/docs/gpus)
		 */
		acceleratorType?: string | null;
	}


	/**
	 * Configuration for the addons that can be automatically spun up in the
	 * cluster, enabling additional functionality.
	 */
	export interface AddonsConfig {

		/** Configuration options for the Cloud Run feature. */
		cloudRunConfig?: CloudRunConfig | null;

		/**
		 * Configuration options for the horizontal pod autoscaling feature, which
		 * increases or decreases the number of replica pods a replication controller
		 * has based on the resource usage of the existing pods.
		 */
		horizontalPodAutoscaling?: HorizontalPodAutoscaling | null;

		/**
		 * Configuration options for the HTTP (L7) load balancing controller addon,
		 * which makes it easy to set up HTTP load balancers for services in a cluster.
		 */
		httpLoadBalancing?: HttpLoadBalancing | null;

		/** Configuration for the Kubernetes Dashboard. */
		kubernetesDashboard?: KubernetesDashboard | null;

		/**
		 * Configuration for NetworkPolicy. This only tracks whether the addon
		 * is enabled or not on the Master, it does not track whether network policy
		 * is enabled for the nodes.
		 */
		networkPolicyConfig?: NetworkPolicyConfig | null;
	}


	/** Configuration options for the Cloud Run feature. */
	export interface CloudRunConfig {

		/** Whether Cloud Run addon is enabled for this cluster. */
		disabled?: boolean | null;
	}


	/**
	 * Configuration options for the horizontal pod autoscaling feature, which
	 * increases or decreases the number of replica pods a replication controller
	 * has based on the resource usage of the existing pods.
	 */
	export interface HorizontalPodAutoscaling {

		/**
		 * Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.
		 * When enabled, it ensures that metrics are collected into Stackdriver
		 * Monitoring.
		 */
		disabled?: boolean | null;
	}


	/**
	 * Configuration options for the HTTP (L7) load balancing controller addon,
	 * which makes it easy to set up HTTP load balancers for services in a cluster.
	 */
	export interface HttpLoadBalancing {

		/**
		 * Whether the HTTP Load Balancing controller is enabled in the cluster.
		 * When enabled, it runs a small pod in the cluster that manages the load
		 * balancers.
		 */
		disabled?: boolean | null;
	}


	/** Configuration for the Kubernetes Dashboard. */
	export interface KubernetesDashboard {

		/** Whether the Kubernetes Dashboard is enabled for this cluster. */
		disabled?: boolean | null;
	}


	/**
	 * Configuration for NetworkPolicy. This only tracks whether the addon
	 * is enabled or not on the Master, it does not track whether network policy
	 * is enabled for the nodes.
	 */
	export interface NetworkPolicyConfig {

		/** Whether NetworkPolicy is enabled for this cluster. */
		disabled?: boolean | null;
	}


	/** Configuration for returning group information from authenticators. */
	export interface AuthenticatorGroupsConfig {

		/**
		 * Whether this cluster should return group membership lookups
		 * during authentication using a group of security groups.
		 */
		enabled?: boolean | null;

		/**
		 * The name of the security group-of-groups to be used. Only relevant
		 * if enabled = true.
		 */
		securityGroup?: string | null;
	}


	/**
	 * AutoUpgradeOptions defines the set of options for the user to control how
	 * the Auto Upgrades will proceed.
	 */
	export interface AutoUpgradeOptions {

		/**
		 * [Output only] This field is set when upgrades are about to commence
		 * with the approximate start time for the upgrades, in
		 * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
		 */
		autoUpgradeStartTime?: string | null;

		/**
		 * [Output only] This field is set when upgrades are about to commence
		 * with the description of the upgrade.
		 */
		description?: string | null;
	}


	/**
	 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created
	 * by NAP.
	 */
	export interface AutoprovisioningNodePoolDefaults {

		/**
		 * NodeManagement defines the set of node management services turned on for the
		 * node pool.
		 */
		management?: NodeManagement | null;

		/**
		 * Scopes that are used by NAP when creating node pools. If oauth_scopes are
		 * specified, service_account should be empty.
		 */
		oauthScopes?: Array<string> | null;

		/**
		 * The Google Cloud Platform Service Account to be used by the node VMs. If
		 * service_account is specified, scopes should be empty.
		 */
		serviceAccount?: string | null;

		/**
		 * These upgrade settings control the level of parallelism and the level of
		 * disruption caused by an upgrade.
		 * maxUnavailable controls the number of nodes that can be simultaneously
		 * unavailable.
		 * maxSurge controls the number of additional nodes that can be added to the
		 * node pool temporarily for the time of the upgrade to increase the number of
		 * available nodes.
		 * (maxUnavailable + maxSurge) determines the level of parallelism (how many
		 * nodes are being upgraded at the same time).
		 * Note: upgrades inevitably introduce some disruption since workloads need to
		 * be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0,
		 * this holds true. (Disruption stays within the limits of
		 * PodDisruptionBudget, if it is configured.)
		 * Consider a hypothetical node pool with 5 nodes having maxSurge=2,
		 * maxUnavailable=1. This means the upgrade process upgrades 3 nodes
		 * simultaneously. It creates 2 additional (upgraded) nodes, then it brings
		 * down 3 old (not yet upgraded) nodes at the same time. This ensures that
		 * there are always at least 4 nodes available.
		 */
		upgradeSettings?: UpgradeSettings | null;
	}


	/**
	 * NodeManagement defines the set of node management services turned on for the
	 * node pool.
	 */
	export interface NodeManagement {

		/**
		 * A flag that specifies whether the node auto-repair is enabled for the node
		 * pool. If enabled, the nodes in this node pool will be monitored and, if
		 * they fail health checks too many times, an automatic repair action will be
		 * triggered.
		 */
		autoRepair?: boolean | null;

		/**
		 * A flag that specifies whether node auto-upgrade is enabled for the node
		 * pool. If enabled, node auto-upgrade helps keep the nodes in your node pool
		 * up to date with the latest release version of Kubernetes.
		 */
		autoUpgrade?: boolean | null;

		/**
		 * AutoUpgradeOptions defines the set of options for the user to control how
		 * the Auto Upgrades will proceed.
		 */
		upgradeOptions?: AutoUpgradeOptions | null;
	}


	/**
	 * These upgrade settings control the level of parallelism and the level of
	 * disruption caused by an upgrade.
	 * maxUnavailable controls the number of nodes that can be simultaneously
	 * unavailable.
	 * maxSurge controls the number of additional nodes that can be added to the
	 * node pool temporarily for the time of the upgrade to increase the number of
	 * available nodes.
	 * (maxUnavailable + maxSurge) determines the level of parallelism (how many
	 * nodes are being upgraded at the same time).
	 * Note: upgrades inevitably introduce some disruption since workloads need to
	 * be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0,
	 * this holds true. (Disruption stays within the limits of
	 * PodDisruptionBudget, if it is configured.)
	 * Consider a hypothetical node pool with 5 nodes having maxSurge=2,
	 * maxUnavailable=1. This means the upgrade process upgrades 3 nodes
	 * simultaneously. It creates 2 additional (upgraded) nodes, then it brings
	 * down 3 old (not yet upgraded) nodes at the same time. This ensures that
	 * there are always at least 4 nodes available.
	 */
	export interface UpgradeSettings {

		/**
		 * The maximum number of nodes that can be created beyond the current size
		 * of the node pool during the upgrade process.
		 */
		maxSurge?: number | null;

		/**
		 * The maximum number of nodes that can be simultaneously unavailable during
		 * the upgrade process. A node is considered available if its status is
		 * Ready.
		 */
		maxUnavailable?: number | null;
	}


	/** Parameters for using BigQuery as the destination of resource usage export. */
	export interface BigQueryDestination {

		/** The ID of a BigQuery Dataset. */
		datasetId?: string | null;
	}


	/** Configuration for Binary Authorization. */
	export interface BinaryAuthorization {

		/**
		 * Enable Binary Authorization for this cluster. If enabled, all container
		 * images will be validated by Binary Authorization.
		 */
		enabled?: boolean | null;
	}


	/** CancelOperationRequest cancels a single operation. */
	export interface CancelOperationRequest {

		/**
		 * The name (project, location, operation id) of the operation to cancel.
		 * Specified in the format 'projects/locations/operations/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The server-assigned `name` of the operation.
		 * This field has been deprecated and replaced by the name field.
		 */
		operationId?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the operation resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** CidrBlock contains an optional name and one CIDR block. */
	export interface CidrBlock {

		/** cidr_block must be specified in CIDR notation. */
		cidrBlock?: string | null;

		/** display_name is an optional field for users to identify CIDR blocks. */
		displayName?: string | null;
	}


	/** Configuration for client certificates on the cluster. */
	export interface ClientCertificateConfig {

		/** Issue a client certificate. */
		issueClientCertificate?: boolean | null;
	}


	/** A Google Kubernetes Engine cluster. */
	export interface Cluster {

		/**
		 * Configuration for the addons that can be automatically spun up in the
		 * cluster, enabling additional functionality.
		 */
		addonsConfig?: AddonsConfig | null;

		/** Configuration for returning group information from authenticators. */
		authenticatorGroupsConfig?: AuthenticatorGroupsConfig | null;

		/**
		 * ClusterAutoscaling contains global, per-cluster information
		 * required by Cluster Autoscaler to automatically adjust
		 * the size of the cluster and create/delete
		 * node pools based on the current needs.
		 */
		autoscaling?: ClusterAutoscaling | null;

		/** Configuration for Binary Authorization. */
		binaryAuthorization?: BinaryAuthorization | null;

		/**
		 * The IP address range of the container pods in this cluster, in
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `10.96.0.0/14`). Leave blank to have
		 * one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
		 */
		clusterIpv4Cidr?: string | null;

		/** Which conditions caused the current cluster state. */
		conditions?: Array<StatusCondition> | null;

		/**
		 * [Output only] The time the cluster was created, in
		 * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
		 */
		createTime?: string | null;

		/** [Output only] The current software version of the master endpoint. */
		currentMasterVersion?: string | null;

		/**
		 * [Output only]  The number of nodes currently in the cluster. Deprecated.
		 * Call Kubernetes API directly to retrieve node information.
		 */
		currentNodeCount?: number | null;

		/**
		 * [Output only] Deprecated, use
		 * [NodePools.version](/kubernetes-engine/docs/reference/rest/v1/projects.zones.clusters.nodePools)
		 * instead. The current version of the node software components. If they are
		 * currently at multiple versions because they're in the process of being
		 * upgraded, this reflects the minimum version of all nodes.
		 */
		currentNodeVersion?: string | null;

		/** Configuration of etcd encryption. */
		databaseEncryption?: DatabaseEncryption | null;

		/** Constraints applied to pods. */
		defaultMaxPodsConstraint?: MaxPodsConstraint | null;

		/** An optional description of this cluster. */
		description?: string | null;

		/**
		 * Kubernetes alpha features are enabled on this cluster. This includes alpha
		 * API groups (e.g. v1alpha1) and features that may not be production ready in
		 * the kubernetes version of the master and nodes.
		 * The cluster has no SLA for uptime and master/node upgrades are disabled.
		 * Alpha enabled clusters are automatically deleted thirty days after
		 * creation.
		 */
		enableKubernetesAlpha?: boolean | null;

		/** Enable the ability to use Cloud TPUs in this cluster. */
		enableTpu?: boolean | null;

		/**
		 * [Output only] The IP address of this cluster's master endpoint.
		 * The endpoint can be accessed from the internet at
		 * `https://username:password@endpoint/`.
		 * See the `masterAuth` property of this resource for username and
		 * password information.
		 */
		endpoint?: string | null;

		/**
		 * [Output only] The time the cluster will be automatically
		 * deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
		 */
		expireTime?: string | null;

		/**
		 * The initial Kubernetes version for this cluster.  Valid versions are those
		 * found in validMasterVersions returned by getServerConfig.  The version can
		 * be upgraded over time; such upgrades are reflected in
		 * currentMasterVersion and currentNodeVersion.
		 * Users may specify either explicit versions offered by
		 * Kubernetes Engine or version aliases, which have the following behavior:
		 * - "latest": picks the highest valid Kubernetes version
		 * - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
		 * - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
		 * - "1.X.Y-gke.N": picks an explicit Kubernetes version
		 * - "","-": picks the default Kubernetes version
		 */
		initialClusterVersion?: string | null;

		/**
		 * The number of nodes to create in this cluster. You must ensure that your
		 * Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
		 * is sufficient for this number of instances. You must also have available
		 * firewall and routes quota.
		 * For requests, this field should only be used in lieu of a
		 * "node_pool" object, since this configuration (along with the
		 * "node_config") will be used to create a "NodePool" object with an
		 * auto-generated name. Do not use this and a node_pool at the same time.
		 * This field is deprecated, use node_pool.initial_node_count instead.
		 */
		initialNodeCount?: number | null;

		/** Deprecated. Use node_pools.instance_group_urls. */
		instanceGroupUrls?: Array<string> | null;

		/** Configuration for controlling how IPs are allocated in the cluster. */
		ipAllocationPolicy?: IPAllocationPolicy | null;

		/** The fingerprint of the set of labels for this cluster. */
		labelFingerprint?: string | null;

		/**
		 * Configuration for the legacy Attribute Based Access Control authorization
		 * mode.
		 */
		legacyAbac?: LegacyAbac | null;

		/**
		 * [Output only] The name of the Google Compute Engine
		 * [zone](/compute/docs/regions-zones/regions-zones#available) or
		 * [region](/compute/docs/regions-zones/regions-zones#available) in which
		 * the cluster resides.
		 */
		location?: string | null;

		/**
		 * The list of Google Compute Engine
		 * [zones](/compute/docs/zones#available) in which the cluster's nodes
		 * should be located.
		 */
		locations?: Array<string> | null;

		/**
		 * The logging service the cluster should use to write logs.
		 * Currently available options:
		 * * `logging.googleapis.com/kubernetes` - The Cloud Logging
		 * service with a Kubernetes-native resource model
		 * * `logging.googleapis.com` - The legacy Cloud Logging service (no longer
		 * available as of GKE 1.15).
		 * * `none` - no logs will be exported from the cluster.
		 * If left as an empty string,`logging.googleapis.com/kubernetes` will be
		 * used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
		 */
		loggingService?: string | null;

		/** MaintenancePolicy defines the maintenance policy to be used for the cluster. */
		maintenancePolicy?: MaintenancePolicy | null;

		/**
		 * The authentication information for accessing the master endpoint.
		 * Authentication can be done using HTTP basic auth or using client
		 * certificates.
		 */
		masterAuth?: MasterAuth | null;

		/**
		 * Configuration options for the master authorized networks feature. Enabled
		 * master authorized networks will disallow all external traffic to access
		 * Kubernetes master through HTTPS except traffic from the given CIDR blocks,
		 * Google Compute Engine Public IPs and Google Prod IPs.
		 */
		masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig | null;

		/**
		 * The monitoring service the cluster should use to write metrics.
		 * Currently available options:
		 * * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring
		 * service with a Kubernetes-native resource model
		 * * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no
		 * longer available as of GKE 1.15).
		 * * `none` - No metrics will be exported from the cluster.
		 * If left as an empty string,`monitoring.googleapis.com/kubernetes` will be
		 * used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
		 */
		monitoringService?: string | null;

		/**
		 * The name of this cluster. The name must be unique within this project
		 * and location (e.g. zone or region), and can be up to 40 characters with
		 * the following restrictions:
		 * * Lowercase letters, numbers, and hyphens only.
		 * * Must start with a letter.
		 * * Must end with a number or a letter.
		 */
		name?: string | null;

		/**
		 * The name of the Google Compute Engine
		 * [network](/compute/docs/networks-and-firewalls#networks) to which the
		 * cluster is connected. If left unspecified, the `default` network
		 * will be used.
		 */
		network?: string | null;

		/** NetworkConfig reports the relative names of network & subnetwork. */
		networkConfig?: NetworkConfig | null;

		/**
		 * Configuration options for the NetworkPolicy feature.
		 * https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
		 */
		networkPolicy?: NetworkPolicy | null;

		/** Parameters that describe the nodes in a cluster. */
		nodeConfig?: NodeConfig | null;

		/**
		 * [Output only] The size of the address space on each node for hosting
		 * containers. This is provisioned from within the `container_ipv4_cidr`
		 * range. This field will only be set when cluster is in route-based network
		 * mode.
		 */
		nodeIpv4CidrSize?: number | null;

		/**
		 * The node pools associated with this cluster.
		 * This field should not be set if "node_config" or "initial_node_count" are
		 * specified.
		 */
		nodePools?: Array<NodePool> | null;

		/** Configuration options for private clusters. */
		privateClusterConfig?: PrivateClusterConfig | null;

		/**
		 * The resource labels for the cluster to use to annotate any related
		 * Google Compute Engine resources.
		 */
		resourceLabels?: {[id: string]: string } | null;

		/** Configuration for exporting cluster resource usages. */
		resourceUsageExportConfig?: ResourceUsageExportConfig | null;

		/** [Output only] Server-defined URL for the resource. */
		selfLink?: string | null;

		/**
		 * [Output only] The IP address range of the Kubernetes services in
		 * this cluster, in
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `1.2.3.4/29`). Service addresses are
		 * typically put in the last `/16` from the container CIDR.
		 */
		servicesIpv4Cidr?: string | null;

		/** Configuration of Shielded Nodes feature. */
		shieldedNodes?: ShieldedNodes | null;

		/** [Output only] The current status of this cluster. */
		status?: ClusterStatus | null;

		/**
		 * [Output only] Additional information about the current status of this
		 * cluster, if available.
		 */
		statusMessage?: string | null;

		/**
		 * The name of the Google Compute Engine
		 * [subnetwork](/compute/docs/subnetworks) to which the
		 * cluster is connected.
		 */
		subnetwork?: string | null;

		/**
		 * [Output only] The IP address range of the Cloud TPUs in this cluster, in
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `1.2.3.4/29`).
		 */
		tpuIpv4CidrBlock?: string | null;

		/**
		 * VerticalPodAutoscaling contains global, per-cluster information
		 * required by Vertical Pod Autoscaler to automatically adjust
		 * the resources of pods controlled by it.
		 */
		verticalPodAutoscaling?: VerticalPodAutoscaling | null;

		/**
		 * Configuration for the use of Kubernetes Service Accounts in GCP IAM
		 * policies.
		 */
		workloadIdentityConfig?: WorkloadIdentityConfig | null;

		/**
		 * [Output only] The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field is deprecated, use location instead.
		 */
		zone?: string | null;
	}


	/**
	 * ClusterAutoscaling contains global, per-cluster information
	 * required by Cluster Autoscaler to automatically adjust
	 * the size of the cluster and create/delete
	 * node pools based on the current needs.
	 */
	export interface ClusterAutoscaling {

		/**
		 * The list of Google Compute Engine [zones](/compute/docs/zones#available)
		 * in which the NodePool's nodes can be created by NAP.
		 */
		autoprovisioningLocations?: Array<string> | null;

		/**
		 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created
		 * by NAP.
		 */
		autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults | null;

		/** Enables automatic node pool creation and deletion. */
		enableNodeAutoprovisioning?: boolean | null;

		/**
		 * Contains global constraints regarding minimum and maximum
		 * amount of resources in the cluster.
		 */
		resourceLimits?: Array<ResourceLimit> | null;
	}


	/**
	 * Contains information about amount of some resource in the cluster.
	 * For memory, value should be in GB.
	 */
	export interface ResourceLimit {

		/** Maximum amount of the resource in the cluster. */
		maximum?: string | null;

		/** Minimum amount of the resource in the cluster. */
		minimum?: string | null;

		/** Resource name "cpu", "memory" or gpu-specific string. */
		resourceType?: string | null;
	}


	/**
	 * StatusCondition describes why a cluster or a node pool has a certain status
	 * (e.g., ERROR or DEGRADED).
	 */
	export interface StatusCondition {

		/** Machine-friendly representation of the condition */
		code?: StatusConditionCode | null;

		/** Human-friendly representation of the condition */
		message?: string | null;
	}

	export enum StatusConditionCode { UNKNOWN = 0, GCE_STOCKOUT = 1, GKE_SERVICE_ACCOUNT_DELETED = 2, GCE_QUOTA_EXCEEDED = 3, SET_BY_OPERATOR = 4, CLOUD_KMS_KEY_ERROR = 5 }


	/** Configuration of etcd encryption. */
	export interface DatabaseEncryption {

		/**
		 * Name of CloudKMS key to use for the encryption of secrets in etcd.
		 * Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key
		 */
		keyName?: string | null;

		/** Denotes the state of etcd encryption. */
		state?: DatabaseEncryptionState | null;
	}

	export enum DatabaseEncryptionState { UNKNOWN = 0, ENCRYPTED = 1, DECRYPTED = 2 }


	/** Constraints applied to pods. */
	export interface MaxPodsConstraint {

		/** Constraint enforced on the max num of pods per node. */
		maxPodsPerNode?: string | null;
	}


	/** Configuration for controlling how IPs are allocated in the cluster. */
	export interface IPAllocationPolicy {

		/** This field is deprecated, use cluster_ipv4_cidr_block. */
		clusterIpv4Cidr?: string | null;

		/**
		 * The IP address range for the cluster pod IPs. If this field is set, then
		 * `cluster.cluster_ipv4_cidr` must be left blank.
		 * This field is only applicable when `use_ip_aliases` is true.
		 * Set to blank to have a range chosen with the default size.
		 * Set to /netmask (e.g. `/14`) to have a range chosen with a specific
		 * netmask.
		 * Set to a
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
		 * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
		 * to use.
		 */
		clusterIpv4CidrBlock?: string | null;

		/**
		 * The name of the secondary range to be used for the cluster CIDR
		 * block.  The secondary range will be used for pod IP
		 * addresses. This must be an existing secondary range associated
		 * with the cluster subnetwork.
		 * This field is only applicable with use_ip_aliases is true and
		 * create_subnetwork is false.
		 */
		clusterSecondaryRangeName?: string | null;

		/**
		 * Whether a new subnetwork will be created automatically for the cluster.
		 * This field is only applicable when `use_ip_aliases` is true.
		 */
		createSubnetwork?: boolean | null;

		/** This field is deprecated, use node_ipv4_cidr_block. */
		nodeIpv4Cidr?: string | null;

		/**
		 * The IP address range of the instance IPs in this cluster.
		 * This is applicable only if `create_subnetwork` is true.
		 * Set to blank to have a range chosen with the default size.
		 * Set to /netmask (e.g. `/14`) to have a range chosen with a specific
		 * netmask.
		 * Set to a
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
		 * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
		 * to use.
		 */
		nodeIpv4CidrBlock?: string | null;

		/** This field is deprecated, use services_ipv4_cidr_block. */
		servicesIpv4Cidr?: string | null;

		/**
		 * The IP address range of the services IPs in this cluster. If blank, a range
		 * will be automatically chosen with the default size.
		 * This field is only applicable when `use_ip_aliases` is true.
		 * Set to blank to have a range chosen with the default size.
		 * Set to /netmask (e.g. `/14`) to have a range chosen with a specific
		 * netmask.
		 * Set to a
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
		 * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
		 * to use.
		 */
		servicesIpv4CidrBlock?: string | null;

		/**
		 * The name of the secondary range to be used as for the services
		 * CIDR block.  The secondary range will be used for service
		 * ClusterIPs. This must be an existing secondary range associated
		 * with the cluster subnetwork.
		 * This field is only applicable with use_ip_aliases is true and
		 * create_subnetwork is false.
		 */
		servicesSecondaryRangeName?: string | null;

		/**
		 * A custom subnetwork name to be used if `create_subnetwork` is true.  If
		 * this field is empty, then an automatic name will be chosen for the new
		 * subnetwork.
		 */
		subnetworkName?: string | null;

		/**
		 * The IP address range of the Cloud TPUs in this cluster. If unspecified, a
		 * range will be automatically chosen with the default size.
		 * This field is only applicable when `use_ip_aliases` is true.
		 * If unspecified, the range will use the default size.
		 * Set to /netmask (e.g. `/14`) to have a range chosen with a specific
		 * netmask.
		 * Set to a
		 * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
		 * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
		 * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
		 * to use.
		 */
		tpuIpv4CidrBlock?: string | null;

		/** Whether alias IPs will be used for pod IPs in the cluster. */
		useIpAliases?: boolean | null;
	}


	/**
	 * Configuration for the legacy Attribute Based Access Control authorization
	 * mode.
	 */
	export interface LegacyAbac {

		/**
		 * Whether the ABAC authorizer is enabled for this cluster. When enabled,
		 * identities in the system, including service accounts, nodes, and
		 * controllers, will have statically granted permissions beyond those
		 * provided by the RBAC configuration or IAM.
		 */
		enabled?: boolean | null;
	}


	/** MaintenancePolicy defines the maintenance policy to be used for the cluster. */
	export interface MaintenancePolicy {

		/**
		 * A hash identifying the version of this policy, so that updates to fields of
		 * the policy won't accidentally undo intermediate changes (and so that users
		 * of the API unaware of some fields won't accidentally remove other fields).
		 * Make a <code>get()</code> request to the cluster to get the current
		 * resource version and include it with requests to set the policy.
		 */
		resourceVersion?: string | null;

		/** MaintenanceWindow defines the maintenance window to be used for the cluster. */
		window?: MaintenanceWindow | null;
	}


	/** MaintenanceWindow defines the maintenance window to be used for the cluster. */
	export interface MaintenanceWindow {

		/** Time window specified for daily maintenance operations. */
		dailyMaintenanceWindow?: DailyMaintenanceWindow | null;

		/**
		 * Exceptions to maintenance window. Non-emergency maintenance should not
		 * occur in these windows.
		 */
		maintenanceExclusions?: {[id: string]: TimeWindow } | null;

		/** Represents an arbitrary window of time that recurs. */
		recurringWindow?: RecurringTimeWindow | null;
	}


	/** Time window specified for daily maintenance operations. */
	export interface DailyMaintenanceWindow {

		/**
		 * [Output only] Duration of the time window, automatically chosen to be
		 * smallest possible in the given scenario.
		 * Duration will be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt)
		 * format "PTnHnMnS".
		 */
		duration?: string | null;

		/**
		 * Time within the maintenance window to start the maintenance operations.
		 * Time format should be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt)
		 * format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.
		 */
		startTime?: string | null;
	}


	/** Represents an arbitrary window of time. */
	export interface TimeWindow {

		/**
		 * The time that the window ends. The end time should take place after the
		 * start time.
		 */
		endTime?: string | null;

		/** The time that the window first starts. */
		startTime?: string | null;
	}


	/** Represents an arbitrary window of time that recurs. */
	export interface RecurringTimeWindow {

		/**
		 * An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
		 * this window reccurs. They go on for the span of time between the start and
		 * end time.
		 * For example, to have something repeat every weekday, you'd use:
		 * <code>FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR</code>
		 * To repeat some window daily (equivalent to the DailyMaintenanceWindow):
		 * <code>FREQ=DAILY</code>
		 * For the first weekend of every month:
		 * <code>FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU</code>
		 * This specifies how frequently the window starts. Eg, if you wanted to have
		 * a 9-5 UTC-4 window every weekday, you'd use something like:
		 * <code>
		 * start time = 2019-01-01T09:00:00-0400
		 * end time = 2019-01-01T17:00:00-0400
		 * recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR
		 * </code>
		 * Windows can span multiple days. Eg, to make the window encompass every
		 * weekend from midnight Saturday till the last minute of Sunday UTC:
		 * <code>
		 * start time = 2019-01-05T00:00:00Z
		 * end time = 2019-01-07T23:59:00Z
		 * recurrence = FREQ=WEEKLY;BYDAY=SA
		 * </code>
		 * Note the start and end time's specific dates are largely arbitrary except
		 * to specify duration of the window and when it first starts.
		 * The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.
		 */
		recurrence?: string | null;

		/** Represents an arbitrary window of time. */
		window?: TimeWindow | null;
	}


	/**
	 * The authentication information for accessing the master endpoint.
	 * Authentication can be done using HTTP basic auth or using client
	 * certificates.
	 */
	export interface MasterAuth {

		/**
		 * [Output only] Base64-encoded public certificate used by clients to
		 * authenticate to the cluster endpoint.
		 */
		clientCertificate?: string | null;

		/** Configuration for client certificates on the cluster. */
		clientCertificateConfig?: ClientCertificateConfig | null;

		/**
		 * [Output only] Base64-encoded private key used by clients to authenticate
		 * to the cluster endpoint.
		 */
		clientKey?: string | null;

		/**
		 * [Output only] Base64-encoded public certificate that is the root of
		 * trust for the cluster.
		 */
		clusterCaCertificate?: string | null;

		/**
		 * The password to use for HTTP basic authentication to the master endpoint.
		 * Because the master endpoint is open to the Internet, you should create a
		 * strong password.  If a password is provided for cluster creation, username
		 * must be non-empty.
		 */
		password?: string | null;

		/**
		 * The username to use for HTTP basic authentication to the master endpoint.
		 * For clusters v1.6.0 and later, basic authentication can be disabled by
		 * leaving username unspecified (or setting it to the empty string).
		 */
		username?: string | null;
	}


	/**
	 * Configuration options for the master authorized networks feature. Enabled
	 * master authorized networks will disallow all external traffic to access
	 * Kubernetes master through HTTPS except traffic from the given CIDR blocks,
	 * Google Compute Engine Public IPs and Google Prod IPs.
	 */
	export interface MasterAuthorizedNetworksConfig {

		/**
		 * cidr_blocks define up to 50 external networks that could access
		 * Kubernetes master through HTTPS.
		 */
		cidrBlocks?: Array<CidrBlock> | null;

		/** Whether or not master authorized networks is enabled. */
		enabled?: boolean | null;
	}


	/** NetworkConfig reports the relative names of network & subnetwork. */
	export interface NetworkConfig {

		/**
		 * Whether Intra-node visibility is enabled for this cluster.
		 * This makes same node pod to pod traffic visible for VPC network.
		 */
		enableIntraNodeVisibility?: boolean | null;

		/**
		 * Output only. The relative name of the Google Compute Engine
		 * network(/compute/docs/networks-and-firewalls#networks) to which
		 * the cluster is connected.
		 * Example: projects/my-project/global/networks/my-network
		 */
		network?: string | null;

		/**
		 * Output only. The relative name of the Google Compute Engine
		 * [subnetwork](/compute/docs/vpc) to which the cluster is connected.
		 * Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
		 */
		subnetwork?: string | null;
	}


	/**
	 * Configuration options for the NetworkPolicy feature.
	 * https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
	 */
	export interface NetworkPolicy {

		/** Whether network policy is enabled on the cluster. */
		enabled?: boolean | null;

		/** The selected network policy provider. */
		provider?: NetworkPolicyProvider | null;
	}

	export enum NetworkPolicyProvider { PROVIDER_UNSPECIFIED = 0, CALICO = 1 }


	/** Parameters that describe the nodes in a cluster. */
	export interface NodeConfig {

		/**
		 * A list of hardware accelerators to be attached to each node.
		 * See https://cloud.google.com/compute/docs/gpus for more information about
		 * support for GPUs.
		 */
		accelerators?: Array<AcceleratorConfig> | null;

		/**
		 * Size of the disk attached to each node, specified in GB.
		 * The smallest allowed disk size is 10GB.
		 * If unspecified, the default disk size is 100GB.
		 */
		diskSizeGb?: number | null;

		/**
		 * Type of the disk attached to each node (e.g. 'pd-standard' or 'pd-ssd')
		 * If unspecified, the default disk type is 'pd-standard'
		 */
		diskType?: string | null;

		/**
		 * The image type to use for this node. Note that for a given image type,
		 * the latest version of it will be used.
		 */
		imageType?: string | null;

		/**
		 * The map of Kubernetes labels (key/value pairs) to be applied to each node.
		 * These will added in addition to any default label(s) that
		 * Kubernetes may apply to the node.
		 * In case of conflict in label keys, the applied set may differ depending on
		 * the Kubernetes version -- it's best to assume the behavior is undefined
		 * and conflicts should be avoided.
		 * For more information, including usage and the valid values, see:
		 * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * The number of local SSD disks to be attached to the node.
		 * The limit for this value is dependent upon the maximum number of
		 * disks available on a machine per zone. See:
		 * https://cloud.google.com/compute/docs/disks/local-ssd
		 * for more information.
		 */
		localSsdCount?: number | null;

		/**
		 * The name of a Google Compute Engine [machine
		 * type](/compute/docs/machine-types) (e.g.
		 * `n1-standard-1`).
		 * If unspecified, the default machine type is
		 * `n1-standard-1`.
		 */
		machineType?: string | null;

		/**
		 * The metadata key/value pairs assigned to instances in the cluster.
		 * Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes
		 * in length. These are reflected as part of a URL in the metadata server.
		 * Additionally, to avoid ambiguity, keys must not conflict with any other
		 * metadata keys for the project or be one of the reserved keys:
		 * "cluster-location"
		 * "cluster-name"
		 * "cluster-uid"
		 * "configure-sh"
		 * "containerd-configure-sh"
		 * "enable-os-login"
		 * "gci-ensure-gke-docker"
		 * "gci-metrics-enabled"
		 * "gci-update-strategy"
		 * "instance-template"
		 * "kube-env"
		 * "startup-script"
		 * "user-data"
		 * "disable-address-manager"
		 * "windows-startup-script-ps1"
		 * "common-psm1"
		 * "k8s-node-setup-psm1"
		 * "install-ssh-psm1"
		 * "user-profile-psm1"
		 * "serial-port-logging-enable"
		 * Values are free-form strings, and only have meaning as interpreted by
		 * the image running in the instance. The only restriction placed on them is
		 * that each value's size must be less than or equal to 32 KB.
		 * The total size of all keys and values must be less than 512 KB.
		 */
		metadata?: {[id: string]: string } | null;

		/**
		 * Minimum CPU platform to be used by this instance. The instance may be
		 * scheduled on the specified or newer CPU platform. Applicable values are the
		 * friendly names of CPU platforms, such as
		 * <code>minCpuPlatform: &quot;Intel Haswell&quot;</code> or
		 * <code>minCpuPlatform: &quot;Intel Sandy Bridge&quot;</code>. For more
		 * information, read [how to specify min CPU
		 * platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
		 */
		minCpuPlatform?: string | null;

		/**
		 * The set of Google API scopes to be made available on all of the
		 * node VMs under the "default" service account.
		 * The following scopes are recommended, but not required, and by default are
		 * not included:
		 * * `https://www.googleapis.com/auth/compute` is required for mounting
		 * persistent storage on your nodes.
		 * * `https://www.googleapis.com/auth/devstorage.read_only` is required for
		 * communicating with **gcr.io**
		 * (the [Google Container Registry](/container-registry/)).
		 * If unspecified, no scopes are added, unless Cloud Logging or Cloud
		 * Monitoring are enabled, in which case their required scopes will be added.
		 */
		oauthScopes?: Array<string> | null;

		/**
		 * Whether the nodes are created as preemptible VM instances. See:
		 * https://cloud.google.com/compute/docs/instances/preemptible for more
		 * information about preemptible VM instances.
		 */
		preemptible?: boolean | null;

		/**
		 * [ReservationAffinity](/compute/docs/instances/reserving-zonal-resources) is
		 * the configuration of desired reservation which instances could take
		 * capacity from.
		 */
		reservationAffinity?: ReservationAffinity | null;

		/** SandboxConfig contains configurations of the sandbox to use for the node. */
		sandboxConfig?: SandboxConfig | null;

		/**
		 * The Google Cloud Platform Service Account to be used by the node VMs.
		 * Specify the email address of the Service Account; otherwise, if no Service
		 * Account is specified, the "default" service account is used.
		 */
		serviceAccount?: string | null;

		/** A set of Shielded Instance options. */
		shieldedInstanceConfig?: ShieldedInstanceConfig | null;

		/**
		 * The list of instance tags applied to all nodes. Tags are used to identify
		 * valid sources or targets for network firewalls and are specified by
		 * the client during cluster or node pool creation. Each tag within the list
		 * must comply with RFC1035.
		 */
		tags?: Array<string> | null;

		/**
		 * List of kubernetes taints to be applied to each node.
		 * For more information, including usage and the valid values, see:
		 * https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
		 */
		taints?: Array<NodeTaint> | null;

		/**
		 * WorkloadMetadataConfig defines the metadata configuration to expose to
		 * workloads on the node pool.
		 */
		workloadMetadataConfig?: WorkloadMetadataConfig | null;
	}


	/**
	 * [ReservationAffinity](/compute/docs/instances/reserving-zonal-resources) is
	 * the configuration of desired reservation which instances could take
	 * capacity from.
	 */
	export interface ReservationAffinity {

		/** Corresponds to the type of reservation consumption. */
		consumeReservationType?: ReservationAffinityConsumeReservationType | null;

		/**
		 * Corresponds to the label key of a reservation resource. To target a
		 * SPECIFIC_RESERVATION by name, specify "googleapis.com/reservation-name" as
		 * the key and specify the name of your reservation as its value.
		 */
		key?: string | null;

		/** Corresponds to the label value(s) of reservation resource(s). */
		values?: Array<string> | null;
	}

	export enum ReservationAffinityConsumeReservationType { UNSPECIFIED = 0, NO_RESERVATION = 1, ANY_RESERVATION = 2, SPECIFIC_RESERVATION = 3 }


	/** SandboxConfig contains configurations of the sandbox to use for the node. */
	export interface SandboxConfig {

		/** Type of the sandbox to use for the node. */
		type?: SandboxConfigType | null;
	}

	export enum SandboxConfigType { UNSPECIFIED = 0, GVISOR = 1 }


	/** A set of Shielded Instance options. */
	export interface ShieldedInstanceConfig {

		/**
		 * Defines whether the instance has integrity monitoring enabled.
		 * Enables monitoring and attestation of the boot integrity of the instance.
		 * The attestation is performed against the integrity policy baseline. This
		 * baseline is initially derived from the implicitly trusted boot image when
		 * the instance is created.
		 */
		enableIntegrityMonitoring?: boolean | null;

		/**
		 * Defines whether the instance has Secure Boot enabled.
		 * Secure Boot helps ensure that the system only runs authentic software by
		 * verifying the digital signature of all boot components, and halting the
		 * boot process if signature verification fails.
		 */
		enableSecureBoot?: boolean | null;
	}


	/**
	 * Kubernetes taint is comprised of three fields: key, value, and effect. Effect
	 * can only be one of three types:  NoSchedule, PreferNoSchedule or NoExecute.
	 * For more information, including usage and the valid values, see:
	 * https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
	 */
	export interface NodeTaint {

		/** Effect for taint. */
		effect?: NodeTaintEffect | null;

		/** Key for taint. */
		key?: string | null;

		/** Value for taint. */
		value?: string | null;
	}

	export enum NodeTaintEffect { EFFECT_UNSPECIFIED = 0, NO_SCHEDULE = 1, PREFER_NO_SCHEDULE = 2, NO_EXECUTE = 3 }


	/**
	 * WorkloadMetadataConfig defines the metadata configuration to expose to
	 * workloads on the node pool.
	 */
	export interface WorkloadMetadataConfig {

		/**
		 * Mode is the configuration for how to expose metadata to workloads running
		 * on the node pool.
		 */
		mode?: WorkloadMetadataConfigMode | null;
	}

	export enum WorkloadMetadataConfigMode { MODE_UNSPECIFIED = 0, GCE_METADATA = 1, GKE_METADATA = 2 }


	/**
	 * NodePool contains the name and configuration for a cluster's node pool.
	 * Node pools are a set of nodes (i.e. VM's), with a common configuration and
	 * specification, under the control of the cluster master. They may have a set
	 * of Kubernetes labels applied to them, which may be used to reference them
	 * during pod scheduling. They may also be resized up or down, to accommodate
	 * the workload.
	 */
	export interface NodePool {

		/**
		 * NodePoolAutoscaling contains information required by cluster autoscaler to
		 * adjust the size of the node pool to the current cluster usage.
		 */
		autoscaling?: NodePoolAutoscaling | null;

		/** Which conditions caused the current node pool state. */
		conditions?: Array<StatusCondition> | null;

		/** Parameters that describe the nodes in a cluster. */
		config?: NodeConfig | null;

		/**
		 * The initial node count for the pool. You must ensure that your
		 * Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
		 * is sufficient for this number of instances. You must also have available
		 * firewall and routes quota.
		 */
		initialNodeCount?: number | null;

		/**
		 * [Output only] The resource URLs of the [managed instance
		 * groups](/compute/docs/instance-groups/creating-groups-of-managed-instances)
		 * associated with this node pool.
		 */
		instanceGroupUrls?: Array<string> | null;

		/**
		 * The list of Google Compute Engine [zones](/compute/docs/zones#available)
		 * in which the NodePool's nodes should be located.
		 */
		locations?: Array<string> | null;

		/**
		 * NodeManagement defines the set of node management services turned on for the
		 * node pool.
		 */
		management?: NodeManagement | null;

		/** Constraints applied to pods. */
		maxPodsConstraint?: MaxPodsConstraint | null;

		/** The name of the node pool. */
		name?: string | null;

		/** [Output only] The pod CIDR block size per node in this node pool. */
		podIpv4CidrSize?: number | null;

		/** [Output only] Server-defined URL for the resource. */
		selfLink?: string | null;

		/** [Output only] The status of the nodes in this pool instance. */
		status?: NodePoolStatus | null;

		/**
		 * [Output only] Additional information about the current status of this
		 * node pool instance, if available.
		 */
		statusMessage?: string | null;

		/**
		 * These upgrade settings control the level of parallelism and the level of
		 * disruption caused by an upgrade.
		 * maxUnavailable controls the number of nodes that can be simultaneously
		 * unavailable.
		 * maxSurge controls the number of additional nodes that can be added to the
		 * node pool temporarily for the time of the upgrade to increase the number of
		 * available nodes.
		 * (maxUnavailable + maxSurge) determines the level of parallelism (how many
		 * nodes are being upgraded at the same time).
		 * Note: upgrades inevitably introduce some disruption since workloads need to
		 * be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0,
		 * this holds true. (Disruption stays within the limits of
		 * PodDisruptionBudget, if it is configured.)
		 * Consider a hypothetical node pool with 5 nodes having maxSurge=2,
		 * maxUnavailable=1. This means the upgrade process upgrades 3 nodes
		 * simultaneously. It creates 2 additional (upgraded) nodes, then it brings
		 * down 3 old (not yet upgraded) nodes at the same time. This ensures that
		 * there are always at least 4 nodes available.
		 */
		upgradeSettings?: UpgradeSettings | null;

		/** The version of the Kubernetes of this node. */
		version?: string | null;
	}


	/**
	 * NodePoolAutoscaling contains information required by cluster autoscaler to
	 * adjust the size of the node pool to the current cluster usage.
	 */
	export interface NodePoolAutoscaling {

		/** Can this node pool be deleted automatically. */
		autoprovisioned?: boolean | null;

		/** Is autoscaling enabled for this node pool. */
		enabled?: boolean | null;

		/**
		 * Maximum number of nodes in the NodePool. Must be >= min_node_count. There
		 * has to enough quota to scale up the cluster.
		 */
		maxNodeCount?: number | null;

		/**
		 * Minimum number of nodes in the NodePool. Must be >= 1 and <=
		 * max_node_count.
		 */
		minNodeCount?: number | null;
	}

	export enum NodePoolStatus { STATUS_UNSPECIFIED = 0, PROVISIONING = 1, RUNNING = 2, RUNNING_WITH_ERROR = 3, RECONCILING = 4, STOPPING = 5, ERROR = 6 }


	/** Configuration options for private clusters. */
	export interface PrivateClusterConfig {

		/** Whether the master's internal IP address is used as the cluster endpoint. */
		enablePrivateEndpoint?: boolean | null;

		/**
		 * Whether nodes have internal IP addresses only. If enabled, all nodes are
		 * given only RFC 1918 private addresses and communicate with the master via
		 * private networking.
		 */
		enablePrivateNodes?: boolean | null;

		/**
		 * The IP range in CIDR notation to use for the hosted master network. This
		 * range will be used for assigning internal IP addresses to the master or
		 * set of masters, as well as the ILB VIP. This range must not overlap with
		 * any other ranges in use within the cluster's network.
		 */
		masterIpv4CidrBlock?: string | null;

		/** Output only. The peering name in the customer VPC used by this cluster. */
		peeringName?: string | null;

		/** Output only. The internal IP address of this cluster's master endpoint. */
		privateEndpoint?: string | null;

		/** Output only. The external IP address of this cluster's master endpoint. */
		publicEndpoint?: string | null;
	}


	/** Configuration for exporting cluster resource usages. */
	export interface ResourceUsageExportConfig {

		/** Parameters for using BigQuery as the destination of resource usage export. */
		bigqueryDestination?: BigQueryDestination | null;

		/** Parameters for controlling consumption metering. */
		consumptionMeteringConfig?: ConsumptionMeteringConfig | null;

		/**
		 * Whether to enable network egress metering for this cluster. If enabled, a
		 * daemonset will be created in the cluster to meter network egress traffic.
		 */
		enableNetworkEgressMetering?: boolean | null;
	}


	/** Parameters for controlling consumption metering. */
	export interface ConsumptionMeteringConfig {

		/**
		 * Whether to enable consumption metering for this cluster. If enabled, a
		 * second BigQuery table will be created to hold resource consumption
		 * records.
		 */
		enabled?: boolean | null;
	}


	/** Configuration of Shielded Nodes feature. */
	export interface ShieldedNodes {

		/** Whether Shielded Nodes features are enabled on all nodes in this cluster. */
		enabled?: boolean | null;
	}

	export enum ClusterStatus { STATUS_UNSPECIFIED = 0, PROVISIONING = 1, RUNNING = 2, RECONCILING = 3, STOPPING = 4, ERROR = 5, DEGRADED = 6 }


	/**
	 * VerticalPodAutoscaling contains global, per-cluster information
	 * required by Vertical Pod Autoscaler to automatically adjust
	 * the resources of pods controlled by it.
	 */
	export interface VerticalPodAutoscaling {

		/** Enables vertical pod autoscaling. */
		enabled?: boolean | null;
	}


	/**
	 * Configuration for the use of Kubernetes Service Accounts in GCP IAM
	 * policies.
	 */
	export interface WorkloadIdentityConfig {

		/** The workload pool to attach all Kubernetes service accounts to. */
		workloadPool?: string | null;
	}


	/**
	 * ClusterUpdate describes an update to the cluster. Exactly one update can
	 * be applied to a cluster with each request, so at most one field can be
	 * provided.
	 */
	export interface ClusterUpdate {

		/**
		 * Configuration for the addons that can be automatically spun up in the
		 * cluster, enabling additional functionality.
		 */
		desiredAddonsConfig?: AddonsConfig | null;

		/** Configuration for Binary Authorization. */
		desiredBinaryAuthorization?: BinaryAuthorization | null;

		/**
		 * ClusterAutoscaling contains global, per-cluster information
		 * required by Cluster Autoscaler to automatically adjust
		 * the size of the cluster and create/delete
		 * node pools based on the current needs.
		 */
		desiredClusterAutoscaling?: ClusterAutoscaling | null;

		/** Configuration of etcd encryption. */
		desiredDatabaseEncryption?: DatabaseEncryption | null;

		/**
		 * The desired image type for the node pool.
		 * NOTE: Set the "desired_node_pool" field as well.
		 */
		desiredImageType?: string | null;

		/**
		 * IntraNodeVisibilityConfig contains the desired config of the intra-node
		 * visibility on this cluster.
		 */
		desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig | null;

		/**
		 * The desired list of Google Compute Engine
		 * [zones](/compute/docs/zones#available) in which the cluster's nodes
		 * should be located. Changing the locations a cluster is in will result
		 * in nodes being either created or removed from the cluster, depending on
		 * whether locations are being added or removed.
		 * This list must always include the cluster's primary zone.
		 */
		desiredLocations?: Array<string> | null;

		/**
		 * The logging service the cluster should use to write logs.
		 * Currently available options:
		 * * `logging.googleapis.com/kubernetes` - The Cloud Logging
		 * service with a Kubernetes-native resource model
		 * * `logging.googleapis.com` - The legacy Cloud Logging service (no longer
		 * available as of GKE 1.15).
		 * * `none` - no logs will be exported from the cluster.
		 * If left as an empty string,`logging.googleapis.com/kubernetes` will be
		 * used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
		 */
		desiredLoggingService?: string | null;

		/**
		 * Configuration options for the master authorized networks feature. Enabled
		 * master authorized networks will disallow all external traffic to access
		 * Kubernetes master through HTTPS except traffic from the given CIDR blocks,
		 * Google Compute Engine Public IPs and Google Prod IPs.
		 */
		desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig | null;

		/**
		 * The Kubernetes version to change the master to.
		 * Users may specify either explicit versions offered by
		 * Kubernetes Engine or version aliases, which have the following behavior:
		 * - "latest": picks the highest valid Kubernetes version
		 * - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
		 * - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
		 * - "1.X.Y-gke.N": picks an explicit Kubernetes version
		 * - "-": picks the default Kubernetes version
		 */
		desiredMasterVersion?: string | null;

		/**
		 * The monitoring service the cluster should use to write metrics.
		 * Currently available options:
		 * * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring
		 * service with a Kubernetes-native resource model
		 * * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no
		 * longer available as of GKE 1.15).
		 * * `none` - No metrics will be exported from the cluster.
		 * If left as an empty string,`monitoring.googleapis.com/kubernetes` will be
		 * used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
		 */
		desiredMonitoringService?: string | null;

		/**
		 * NodePoolAutoscaling contains information required by cluster autoscaler to
		 * adjust the size of the node pool to the current cluster usage.
		 */
		desiredNodePoolAutoscaling?: NodePoolAutoscaling | null;

		/**
		 * The node pool to be upgraded. This field is mandatory if
		 * "desired_node_version", "desired_image_family" or
		 * "desired_node_pool_autoscaling" is specified and there is more than one
		 * node pool on the cluster.
		 */
		desiredNodePoolId?: string | null;

		/**
		 * The Kubernetes version to change the nodes to (typically an
		 * upgrade).
		 * Users may specify either explicit versions offered by
		 * Kubernetes Engine or version aliases, which have the following behavior:
		 * - "latest": picks the highest valid Kubernetes version
		 * - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
		 * - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
		 * - "1.X.Y-gke.N": picks an explicit Kubernetes version
		 * - "-": picks the Kubernetes master version
		 */
		desiredNodeVersion?: string | null;

		/** Configuration for exporting cluster resource usages. */
		desiredResourceUsageExportConfig?: ResourceUsageExportConfig | null;

		/** Configuration of Shielded Nodes feature. */
		desiredShieldedNodes?: ShieldedNodes | null;

		/**
		 * VerticalPodAutoscaling contains global, per-cluster information
		 * required by Vertical Pod Autoscaler to automatically adjust
		 * the resources of pods controlled by it.
		 */
		desiredVerticalPodAutoscaling?: VerticalPodAutoscaling | null;

		/**
		 * Configuration for the use of Kubernetes Service Accounts in GCP IAM
		 * policies.
		 */
		desiredWorkloadIdentityConfig?: WorkloadIdentityConfig | null;
	}


	/**
	 * IntraNodeVisibilityConfig contains the desired config of the intra-node
	 * visibility on this cluster.
	 */
	export interface IntraNodeVisibilityConfig {

		/** Enables intra node visibility for this cluster. */
		enabled?: boolean | null;
	}


	/** CompleteIPRotationRequest moves the cluster master back into single-IP mode. */
	export interface CompleteIPRotationRequest {

		/**
		 * Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster id) of the cluster to complete IP
		 * rotation. Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** CreateClusterRequest creates a cluster. */
	export interface CreateClusterRequest {

		/** A Google Kubernetes Engine cluster. */
		cluster?: Cluster | null;

		/**
		 * The parent (project and location) where the cluster will be created.
		 * Specified in the format 'projects/locations/*'.
		 */
		parent?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the parent field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the parent field.
		 */
		zone?: string | null;
	}


	/** CreateNodePoolRequest creates a node pool for a cluster. */
	export interface CreateNodePoolRequest {

		/**
		 * Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the parent field.
		 */
		clusterId?: string | null;

		/**
		 * NodePool contains the name and configuration for a cluster's node pool.
		 * Node pools are a set of nodes (i.e. VM's), with a common configuration and
		 * specification, under the control of the cluster master. They may have a set
		 * of Kubernetes labels applied to them, which may be used to reference them
		 * during pod scheduling. They may also be resized up or down, to accommodate
		 * the workload.
		 */
		nodePool?: NodePool | null;

		/**
		 * The parent (project, location, cluster id) where the node pool will be
		 * created. Specified in the format
		 * 'projects/locations/clusters/*'.
		 */
		parent?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the parent field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the parent field.
		 */
		zone?: string | null;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517 */
	export interface GetJSONWebKeysResponse {

		/** RFC-2616: cache control support */
		cacheHeader?: HttpCacheControlResponseHeader | null;

		/**
		 * The public component of the keys used by the cluster to sign token
		 * requests.
		 */
		keys?: Array<Jwk> | null;
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


	/**
	 * GetOpenIDConfigResponse is an OIDC discovery document for the cluster.
	 * See the OpenID Connect Discovery 1.0 specification for details.
	 */
	export interface GetOpenIDConfigResponse {

		/** RFC-2616: cache control support */
		cacheHeader?: HttpCacheControlResponseHeader | null;

		/** Supported claims. */
		claims_supported?: Array<string> | null;

		/** Supported grant types. */
		grant_types?: Array<string> | null;

		/** supported ID Token signing Algorithms. */
		id_token_signing_alg_values_supported?: Array<string> | null;

		/** OIDC Issuer. */
		issuer?: string | null;

		/** JSON Web Key uri. */
		jwks_uri?: string | null;

		/** Supported response types. */
		response_types_supported?: Array<string> | null;

		/** Supported subject types. */
		subject_types_supported?: Array<string> | null;
	}


	/** ListClustersResponse is the result of ListClustersRequest. */
	export interface ListClustersResponse {

		/**
		 * A list of clusters in the project in the specified zone, or
		 * across all ones.
		 */
		clusters?: Array<Cluster> | null;

		/**
		 * If any zones are listed here, the list of clusters returned
		 * may be missing those zones.
		 */
		missingZones?: Array<string> | null;
	}


	/** ListNodePoolsResponse is the result of ListNodePoolsRequest. */
	export interface ListNodePoolsResponse {

		/** A list of node pools for a cluster. */
		nodePools?: Array<NodePool> | null;
	}


	/** ListOperationsResponse is the result of ListOperationsRequest. */
	export interface ListOperationsResponse {

		/**
		 * If any zones are listed here, the list of operations returned
		 * may be missing the operations from those zones.
		 */
		missingZones?: Array<string> | null;

		/** A list of operations in the project in the specified zone. */
		operations?: Array<Operation> | null;
	}


	/**
	 * This operation resource represents operations that may have happened or are
	 * happening on the cluster. All fields are output only.
	 */
	export interface Operation {

		/** Which conditions caused the current cluster state. */
		clusterConditions?: Array<StatusCondition> | null;

		/** Detailed operation progress, if available. */
		detail?: string | null;

		/**
		 * [Output only] The time the operation completed, in
		 * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
		 */
		endTime?: string | null;

		/**
		 * [Output only] The name of the Google Compute Engine
		 * [zone](/compute/docs/regions-zones/regions-zones#available) or
		 * [region](/compute/docs/regions-zones/regions-zones#available) in which
		 * the cluster resides.
		 */
		location?: string | null;

		/** The server-assigned ID for the operation. */
		name?: string | null;

		/** Which conditions caused the current node pool state. */
		nodepoolConditions?: Array<StatusCondition> | null;

		/** The operation type. */
		operationType?: OperationOperationType | null;

		/** Information about operation (or operation stage) progress. */
		progress?: OperationProgress | null;

		/** Server-defined URL for the resource. */
		selfLink?: string | null;

		/**
		 * [Output only] The time the operation started, in
		 * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
		 */
		startTime?: string | null;

		/** The current status of the operation. */
		status?: OperationProgressStatus | null;

		/** Output only. If an error has occurred, a textual description of the error. */
		statusMessage?: string | null;

		/** Server-defined URL for the target of the operation. */
		targetLink?: string | null;

		/**
		 * The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the operation
		 * is taking place.
		 * This field is deprecated, use location instead.
		 */
		zone?: string | null;
	}

	export enum OperationOperationType { TYPE_UNSPECIFIED = 0, CREATE_CLUSTER = 1, DELETE_CLUSTER = 2, UPGRADE_MASTER = 3, UPGRADE_NODES = 4, REPAIR_CLUSTER = 5, UPDATE_CLUSTER = 6, CREATE_NODE_POOL = 7, DELETE_NODE_POOL = 8, SET_NODE_POOL_MANAGEMENT = 9, AUTO_REPAIR_NODES = 10, AUTO_UPGRADE_NODES = 11, SET_LABELS = 12, SET_MASTER_AUTH = 13, SET_NODE_POOL_SIZE = 14, SET_NETWORK_POLICY = 15, SET_MAINTENANCE_POLICY = 16 }


	/** Information about operation (or operation stage) progress. */
	export interface OperationProgress {

		/**
		 * Progress metric bundle, for example:
		 * metrics: [{name: "nodes done",     int_value: 15},
		 * {name: "nodes total",    int_value: 32}]
		 * or
		 * metrics: [{name: "progress",       double_value: 0.56},
		 * {name: "progress scale", double_value: 1.0}]
		 */
		metrics?: Array<Metric> | null;

		/**
		 * A non-parameterized string describing an operation stage.
		 * Unset for single-stage operations.
		 */
		name?: string | null;

		/** Substages of an operation or a stage. */
		stages?: Array<OperationProgress> | null;

		/**
		 * Status of an operation stage.
		 * Unset for single-stage operations.
		 */
		status?: OperationProgressStatus | null;
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

	export enum OperationProgressStatus { STATUS_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, DONE = 3, ABORTING = 4 }


	/**
	 * ListUsableSubnetworksResponse is the response of
	 * ListUsableSubnetworksRequest.
	 */
	export interface ListUsableSubnetworksResponse {

		/**
		 * This token allows you to get the next page of results for list requests.
		 * If the number of results is larger than `page_size`, use the
		 * `next_page_token` as a value for the query parameter `page_token` in the
		 * next request. The value will become empty when there are no more pages.
		 */
		nextPageToken?: string | null;

		/** A list of usable subnetworks in the specified network project. */
		subnetworks?: Array<UsableSubnetwork> | null;
	}


	/**
	 * UsableSubnetwork resource returns the subnetwork name, its associated network
	 * and the primary CIDR range.
	 */
	export interface UsableSubnetwork {

		/** The range of internal addresses that are owned by this subnetwork. */
		ipCidrRange?: string | null;

		/**
		 * Network Name.
		 * Example: projects/my-project/global/networks/my-network
		 */
		network?: string | null;

		/** Secondary IP ranges. */
		secondaryIpRanges?: Array<UsableSubnetworkSecondaryRange> | null;

		/**
		 * A human readable status message representing the reasons for cases where
		 * the caller cannot use the secondary ranges under the subnet. For example if
		 * the secondary_ip_ranges is empty due to a permission issue, an insufficient
		 * permission message will be given by status_message.
		 */
		statusMessage?: string | null;

		/**
		 * Subnetwork Name.
		 * Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
		 */
		subnetwork?: string | null;
	}


	/** Secondary IP range of a usable subnetwork. */
	export interface UsableSubnetworkSecondaryRange {

		/** The range of IP addresses belonging to this subnetwork secondary range. */
		ipCidrRange?: string | null;

		/**
		 * The name associated with this subnetwork secondary range, used when adding
		 * an alias IP range to a VM instance.
		 */
		rangeName?: string | null;

		/** This field is to determine the status of the secondary range programmably. */
		status?: UsableSubnetworkSecondaryRangeStatus | null;
	}

	export enum UsableSubnetworkSecondaryRangeStatus { UNKNOWN = 0, UNUSED = 1, IN_USE_SERVICE = 2, IN_USE_SHAREABLE_POD = 3, IN_USE_MANAGED_POD = 4 }


	/**
	 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed
	 * NodePool upgrade. This will be an no-op if the last upgrade successfully
	 * completed.
	 */
	export interface RollbackNodePoolUpgradeRequest {

		/**
		 * Deprecated. The name of the cluster to rollback.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster, node pool id) of the node poll to
		 * rollback upgrade.
		 * Specified in the format 'projects/locations/clusters/nodePools/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The name of the node pool to rollback.
		 * This field has been deprecated and replaced by the name field.
		 */
		nodePoolId?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** Kubernetes Engine service configuration. */
	export interface ServerConfig {

		/** Version of Kubernetes the service deploys by default. */
		defaultClusterVersion?: string | null;

		/** Default image type. */
		defaultImageType?: string | null;

		/** List of valid image types. */
		validImageTypes?: Array<string> | null;

		/** List of valid master versions. */
		validMasterVersions?: Array<string> | null;

		/** List of valid node upgrade target versions. */
		validNodeVersions?: Array<string> | null;
	}


	/** SetAddonsConfigRequest sets the addons associated with the cluster. */
	export interface SetAddonsConfigRequest {

		/**
		 * Configuration for the addons that can be automatically spun up in the
		 * cluster, enabling additional functionality.
		 */
		addonsConfig?: AddonsConfig | null;

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster) of the cluster to set addons.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/**
	 * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container
	 * Engine cluster, which will in turn set them for Google Compute Engine
	 * resources used by that cluster
	 */
	export interface SetLabelsRequest {

		/**
		 * Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * Required. The fingerprint of the previous set of labels for this resource,
		 * used to detect conflicts. The fingerprint is initially generated by
		 * Kubernetes Engine and changes after every request to modify or update
		 * labels. You must always provide an up-to-date fingerprint hash when
		 * updating or changing labels. Make a <code>get()</code> request to the
		 * resource to get the latest fingerprint.
		 */
		labelFingerprint?: string | null;

		/**
		 * The name (project, location, cluster id) of the cluster to set labels.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/** Required. The labels to set for that cluster. */
		resourceLabels?: {[id: string]: string } | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/**
	 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for
	 * a cluster.
	 */
	export interface SetLegacyAbacRequest {

		/**
		 * Deprecated. The name of the cluster to update.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/** Required. Whether ABAC authorization will be enabled in the cluster. */
		enabled?: boolean | null;

		/**
		 * The name (project, location, cluster id) of the cluster to set legacy abac.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** SetLocationsRequest sets the locations of the cluster. */
	export interface SetLocationsRequest {

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * Required. The desired list of Google Compute Engine
		 * [zones](/compute/docs/zones#available) in which the cluster's nodes
		 * should be located. Changing the locations a cluster is in will result
		 * in nodes being either created or removed from the cluster, depending on
		 * whether locations are being added or removed.
		 * This list must always include the cluster's primary zone.
		 */
		locations?: Array<string> | null;

		/**
		 * The name (project, location, cluster) of the cluster to set locations.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** SetLoggingServiceRequest sets the logging service of a cluster. */
	export interface SetLoggingServiceRequest {

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * Required. The logging service the cluster should use to write logs.
		 * Currently available options:
		 * * `logging.googleapis.com/kubernetes` - The Cloud Logging
		 * service with a Kubernetes-native resource model
		 * * `logging.googleapis.com` - The legacy Cloud Logging service (no longer
		 * available as of GKE 1.15).
		 * * `none` - no logs will be exported from the cluster.
		 * If left as an empty string,`logging.googleapis.com/kubernetes` will be
		 * used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
		 */
		loggingService?: string | null;

		/**
		 * The name (project, location, cluster) of the cluster to set logging.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** SetMaintenancePolicyRequest sets the maintenance policy for a cluster. */
	export interface SetMaintenancePolicyRequest {

		/** Required. The name of the cluster to update. */
		clusterId?: string | null;

		/** MaintenancePolicy defines the maintenance policy to be used for the cluster. */
		maintenancePolicy?: MaintenancePolicy | null;

		/**
		 * The name (project, location, cluster id) of the cluster to set maintenance
		 * policy.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Required. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 */
		projectId?: string | null;

		/**
		 * Required. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 */
		zone?: string | null;
	}


	/** SetMasterAuthRequest updates the admin password of a cluster. */
	export interface SetMasterAuthRequest {

		/** Required. The exact form of action to be taken on the master auth. */
		action?: SetMasterAuthRequestAction | null;

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster) of the cluster to set auth.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * The authentication information for accessing the master endpoint.
		 * Authentication can be done using HTTP basic auth or using client
		 * certificates.
		 */
		update?: MasterAuth | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}

	export enum SetMasterAuthRequestAction { UNKNOWN = 0, SET_PASSWORD = 1, GENERATE_PASSWORD = 2, SET_USERNAME = 3 }


	/** SetMonitoringServiceRequest sets the monitoring service of a cluster. */
	export interface SetMonitoringServiceRequest {

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * Required. The monitoring service the cluster should use to write metrics.
		 * Currently available options:
		 * * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring
		 * service with a Kubernetes-native resource model
		 * * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no
		 * longer available as of GKE 1.15).
		 * * `none` - No metrics will be exported from the cluster.
		 * If left as an empty string,`monitoring.googleapis.com/kubernetes` will be
		 * used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
		 */
		monitoringService?: string | null;

		/**
		 * The name (project, location, cluster) of the cluster to set monitoring.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** SetNetworkPolicyRequest enables/disables network policy for a cluster. */
	export interface SetNetworkPolicyRequest {

		/**
		 * Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster id) of the cluster to set networking
		 * policy. Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Configuration options for the NetworkPolicy feature.
		 * https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
		 */
		networkPolicy?: NetworkPolicy | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool. */
	export interface SetNodePoolAutoscalingRequest {

		/**
		 * NodePoolAutoscaling contains information required by cluster autoscaler to
		 * adjust the size of the node pool to the current cluster usage.
		 */
		autoscaling?: NodePoolAutoscaling | null;

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster, node pool) of the node pool to set
		 * autoscaler settings. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The name of the node pool to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		nodePoolId?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/**
	 * SetNodePoolManagementRequest sets the node management properties of a node
	 * pool.
	 */
	export interface SetNodePoolManagementRequest {

		/**
		 * Deprecated. The name of the cluster to update.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * NodeManagement defines the set of node management services turned on for the
		 * node pool.
		 */
		management?: NodeManagement | null;

		/**
		 * The name (project, location, cluster, node pool id) of the node pool to set
		 * management properties. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The name of the node pool to update.
		 * This field has been deprecated and replaced by the name field.
		 */
		nodePoolId?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/**
	 * SetNodePoolSizeRequest sets the size a node
	 * pool.
	 */
	export interface SetNodePoolSizeRequest {

		/**
		 * Deprecated. The name of the cluster to update.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster, node pool id) of the node pool to set
		 * size.
		 * Specified in the format 'projects/locations/clusters/nodePools/*'.
		 */
		name?: string | null;

		/** Required. The desired node count for the pool. */
		nodeCount?: number | null;

		/**
		 * Deprecated. The name of the node pool to update.
		 * This field has been deprecated and replaced by the name field.
		 */
		nodePoolId?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/**
	 * StartIPRotationRequest creates a new IP for the cluster and then performs
	 * a node upgrade on each node pool to point to the new IP.
	 */
	export interface StartIPRotationRequest {

		/**
		 * Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster id) of the cluster to start IP
		 * rotation. Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/** Whether to rotate credentials during IP rotation. */
		rotateCredentials?: boolean | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** UpdateClusterRequest updates the settings of a cluster. */
	export interface UpdateClusterRequest {

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * The name (project, location, cluster) of the cluster to update.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * ClusterUpdate describes an update to the cluster. Exactly one update can
		 * be applied to a cluster with each request, so at most one field can be
		 * provided.
		 */
		update?: ClusterUpdate | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** UpdateMasterRequest updates the master of the cluster. */
	export interface UpdateMasterRequest {

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/**
		 * Required. The Kubernetes version to change the master to.
		 * Users may specify either explicit versions offered by Kubernetes Engine or
		 * version aliases, which have the following behavior:
		 * - "latest": picks the highest valid Kubernetes version
		 * - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
		 * - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
		 * - "1.X.Y-gke.N": picks an explicit Kubernetes version
		 * - "-": picks the default Kubernetes version
		 */
		masterVersion?: string | null;

		/**
		 * The name (project, location, cluster) of the cluster to update.
		 * Specified in the format 'projects/locations/clusters/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}


	/** UpdateNodePoolRequests update a node pool's image and/or version. */
	export interface UpdateNodePoolRequest {

		/**
		 * Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		clusterId?: string | null;

		/** Required. The desired image type for the node pool. */
		imageType?: string | null;

		/**
		 * The desired list of Google Compute Engine
		 * [zones](/compute/docs/zones#available) in which the node pool's nodes
		 * should be located. Changing the locations for a node pool will result
		 * in nodes being either created or removed from the node pool, depending
		 * on whether locations are being added or removed.
		 */
		locations?: Array<string> | null;

		/**
		 * The name (project, location, cluster, node pool) of the node pool to
		 * update. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 */
		name?: string | null;

		/**
		 * Deprecated. The name of the node pool to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 */
		nodePoolId?: string | null;

		/**
		 * Required. The Kubernetes version to change the nodes to (typically an
		 * upgrade).
		 * Users may specify either explicit versions offered by Kubernetes Engine or
		 * version aliases, which have the following behavior:
		 * - "latest": picks the highest valid Kubernetes version
		 * - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
		 * - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
		 * - "1.X.Y-gke.N": picks an explicit Kubernetes version
		 * - "-": picks the Kubernetes master version
		 */
		nodeVersion?: string | null;

		/**
		 * Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 */
		projectId?: string | null;

		/**
		 * These upgrade settings control the level of parallelism and the level of
		 * disruption caused by an upgrade.
		 * maxUnavailable controls the number of nodes that can be simultaneously
		 * unavailable.
		 * maxSurge controls the number of additional nodes that can be added to the
		 * node pool temporarily for the time of the upgrade to increase the number of
		 * available nodes.
		 * (maxUnavailable + maxSurge) determines the level of parallelism (how many
		 * nodes are being upgraded at the same time).
		 * Note: upgrades inevitably introduce some disruption since workloads need to
		 * be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0,
		 * this holds true. (Disruption stays within the limits of
		 * PodDisruptionBudget, if it is configured.)
		 * Consider a hypothetical node pool with 5 nodes having maxSurge=2,
		 * maxUnavailable=1. This means the upgrade process upgrades 3 nodes
		 * simultaneously. It creates 2 additional (upgraded) nodes, then it brings
		 * down 3 old (not yet upgraded) nodes at the same time. This ensures that
		 * there are always at least 4 nodes available.
		 */
		upgradeSettings?: UpgradeSettings | null;

		/**
		 * WorkloadMetadataConfig defines the metadata configuration to expose to
		 * workloads on the node pool.
		 */
		workloadMetadataConfig?: WorkloadMetadataConfig | null;

		/**
		 * Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 */
		zone?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all clusters owned by a project in either the specified zone or all
		 * zones.
		 * Get v1/projects/{projectId}/zones/{zone}/clusters
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides, or "-" for all zones.
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} parent The parent (project and location) where the clusters will be listed.
		 * Specified in the format 'projects/locations/*'.
		 * Location "-" matches all zones and all regions.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_list(projectId: string, zone: string, parent: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters&parent=' + (parent == null ? '' : encodeURIComponent(parent)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a cluster, consisting of the specified number and type of Google
		 * Compute Engine instances.
		 * By default, the cluster is created in the project's
		 * [default network](/compute/docs/networks-and-firewalls#networks).
		 * One firewall is added for the cluster. After cluster creation,
		 * the Kubelet creates routes for each node to allow the containers
		 * on that node to communicate with all other instances in the
		 * cluster.
		 * Finally, an entry is added to the project's global metadata indicating
		 * which CIDR range the cluster is using.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the parent field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_create(projectId: string, zone: string, requestBody: CreateClusterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the cluster, including the Kubernetes endpoint and all worker
		 * nodes.
		 * Firewalls and routes that were configured during cluster creation
		 * are also deleted.
		 * Other Google Compute Engine resources that might be in use by the cluster,
		 * such as load balancer resources, are not deleted if they weren't present
		 * when the cluster was initially created.
		 * Delete v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to delete.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster) of the cluster to delete.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_delete(projectId: string, zone: string, clusterId: string, name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the details of a specific cluster.
		 * Get v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to retrieve.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster) of the cluster to retrieve.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_get(projectId: string, zone: string, clusterId: string, name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the settings of a specific cluster.
		 * Put v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_update(projectId: string, zone: string, clusterId: string, requestBody: UpdateClusterRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the addons for a specific cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_addons(projectId: string, zone: string, clusterId: string, requestBody: SetAddonsConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/addons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables or disables the ABAC authorization mechanism on a cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to update.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_legacyAbac(projectId: string, zone: string, clusterId: string, requestBody: SetLegacyAbacRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/legacyAbac', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the locations for a specific cluster.
		 * Deprecated. Use
		 * [projects.locations.clusters.update](/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update)
		 * instead.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_locations(projectId: string, zone: string, clusterId: string, requestBody: SetLocationsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/locations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the logging service for a specific cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_logging(projectId: string, zone: string, clusterId: string, requestBody: SetLoggingServiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the master for a specific cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_master(projectId: string, zone: string, clusterId: string, requestBody: UpdateMasterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the monitoring service for a specific cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_monitoring(projectId: string, zone: string, clusterId: string, requestBody: SetMonitoringServiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/monitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the node pools for a cluster.
		 * Get v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} parent The parent (project, location, cluster id) where the node pools will be
		 * listed. Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_list(projectId: string, zone: string, clusterId: string, parent: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools&parent=' + (parent == null ? '' : encodeURIComponent(parent)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a node pool for a cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the parent field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_create(projectId: string, zone: string, clusterId: string, requestBody: CreateNodePoolRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a node pool from a cluster.
		 * Delete v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool to delete.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to
		 * delete. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_delete(projectId: string, zone: string, clusterId: string, nodePoolId: string, name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the requested node pool.
		 * Get v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to
		 * get. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_get(projectId: string, zone: string, clusterId: string, nodePoolId: string, name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the autoscaling settings for the specified node pool.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_autoscaling(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: SetNodePoolAutoscalingRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/autoscaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the NodeManagement options for a node pool.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to update.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool to update.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_setManagement(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: SetNodePoolManagementRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/setManagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the size for a specific node pool.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to update.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool to update.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_setSize(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: SetNodePoolSizeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/setSize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the version and/or image type for the specified node pool.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_update(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: UpdateNodePoolRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rolls back a previously Aborted or Failed NodePool upgrade.
		 * This makes no changes if the last upgrade successfully completed.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to rollback.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool to rollback.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_nodePools_rollback(projectId: string, zone: string, clusterId: string, nodePoolId: string, requestBody: RollbackNodePoolUpgradeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/nodePools/' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets labels on a cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_resourceLabels(projectId: string, zone: string, clusterId: string, requestBody: SetLabelsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '/resourceLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Completes master IP rotation.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_completeIpRotation(projectId: string, zone: string, clusterId: string, requestBody: CompleteIPRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':completeIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the maintenance policy for a cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy
		 * @param {string} projectId Required. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * @param {string} zone Required. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * @param {string} clusterId Required. The name of the cluster to update.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_setMaintenancePolicy(projectId: string, zone: string, clusterId: string, requestBody: SetMaintenancePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':setMaintenancePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets master auth materials. Currently supports changing the admin password
		 * or a specific cluster, either via password generation or explicitly setting
		 * the password.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster to upgrade.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_setMasterAuth(projectId: string, zone: string, clusterId: string, requestBody: SetMasterAuthRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':setMasterAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables or disables Network Policy for a cluster.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_setNetworkPolicy(projectId: string, zone: string, clusterId: string, requestBody: SetNetworkPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':setNetworkPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts master IP rotation.
		 * Post v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_clusters_startIpRotation(projectId: string, zone: string, clusterId: string, requestBody: StartIPRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/clusters/' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + ':startIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all operations in a project in a specific zone or all zones.
		 * Get v1/projects/{projectId}/zones/{zone}/operations
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) to return operations for, or `-` for
		 * all zones. This field has been deprecated and replaced by the parent field.
		 * @param {string} parent The parent (project and location) where the operations will be listed.
		 * Specified in the format 'projects/locations/*'.
		 * Location "-" matches all zones and all regions.
		 * @return {void} Successful response
		 */
		Container_projects_zones_operations_list(projectId: string, zone: string, parent: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/operations&parent=' + (parent == null ? '' : encodeURIComponent(parent)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified operation.
		 * Get v1/projects/{projectId}/zones/{zone}/operations/{operationId}
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} operationId Deprecated. The server-assigned `name` of the operation.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project, location, operation id) of the operation to get.
		 * Specified in the format 'projects/locations/operations/*'.
		 * @return {void} Successful response
		 */
		Container_projects_zones_operations_get(projectId: string, zone: string, operationId: string, name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels the specified operation.
		 * Post v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the operation resides.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} operationId Deprecated. The server-assigned `name` of the operation.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_zones_operations_cancel(projectId: string, zone: string, operationId: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns configuration info about the Google Kubernetes Engine service.
		 * Get v1/projects/{projectId}/zones/{zone}/serverconfig
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) to return operations for.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} name The name (project and location) of the server config to get,
		 * specified in the format 'projects/locations/*'.
		 * @return {void} Successful response
		 */
		Container_projects_zones_getServerconfig(projectId: string, zone: string, name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/serverconfig&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a node pool from a cluster.
		 * Delete v1/{name}
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to
		 * delete. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool to delete.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_delete(name: string, clusterId: string | null | undefined, nodePoolId: string | null | undefined, projectId: string | null | undefined, zone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&nodePoolId=' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the requested node pool.
		 * Get v1/{name}
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to
		 * get. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} nodePoolId Deprecated. The name of the node pool.
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_get(name: string, clusterId: string | null | undefined, nodePoolId: string | null | undefined, projectId: string | null | undefined, zone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&nodePoolId=' + (nodePoolId == null ? '' : encodeURIComponent(nodePoolId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the version and/or image type for the specified node pool.
		 * Put v1/{name}
		 * @param {string} name The name (project, location, cluster, node pool) of the node pool to
		 * update. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_update(name: string, requestBody: UpdateNodePoolRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns configuration info about the Google Kubernetes Engine service.
		 * Get v1/{name}/serverConfig
		 * @param {string} name The name (project and location) of the server config to get,
		 * specified in the format 'projects/locations/*'.
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the name field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) to return operations for.
		 * This field has been deprecated and replaced by the name field.
		 * @return {void} Successful response
		 */
		Container_projects_locations_getServerConfig(name: string, projectId: string | null | undefined, zone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/serverConfig&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels the specified operation.
		 * Post v1/{name}:cancel
		 * @param {string} name The name (project, location, operation id) of the operation to cancel.
		 * Specified in the format 'projects/locations/operations/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Completes master IP rotation.
		 * Post v1/{name}:completeIpRotation
		 * @param {string} name The name (project, location, cluster id) of the cluster to complete IP
		 * rotation. Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_completeIpRotation(name: string, requestBody: CompleteIPRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':completeIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rolls back a previously Aborted or Failed NodePool upgrade.
		 * This makes no changes if the last upgrade successfully completed.
		 * Post v1/{name}:rollback
		 * @param {string} name The name (project, location, cluster, node pool id) of the node poll to
		 * rollback upgrade.
		 * Specified in the format 'projects/locations/clusters/nodePools/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_rollback(name: string, requestBody: RollbackNodePoolUpgradeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the addons for a specific cluster.
		 * Post v1/{name}:setAddons
		 * @param {string} name The name (project, location, cluster) of the cluster to set addons.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setAddons(name: string, requestBody: SetAddonsConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setAddons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the autoscaling settings for the specified node pool.
		 * Post v1/{name}:setAutoscaling
		 * @param {string} name The name (project, location, cluster, node pool) of the node pool to set
		 * autoscaler settings. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_setAutoscaling(name: string, requestBody: SetNodePoolAutoscalingRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setAutoscaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables or disables the ABAC authorization mechanism on a cluster.
		 * Post v1/{name}:setLegacyAbac
		 * @param {string} name The name (project, location, cluster id) of the cluster to set legacy abac.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setLegacyAbac(name: string, requestBody: SetLegacyAbacRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setLegacyAbac', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the locations for a specific cluster.
		 * Deprecated. Use
		 * [projects.locations.clusters.update](/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update)
		 * instead.
		 * Post v1/{name}:setLocations
		 * @param {string} name The name (project, location, cluster) of the cluster to set locations.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setLocations(name: string, requestBody: SetLocationsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setLocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the logging service for a specific cluster.
		 * Post v1/{name}:setLogging
		 * @param {string} name The name (project, location, cluster) of the cluster to set logging.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setLogging(name: string, requestBody: SetLoggingServiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the maintenance policy for a cluster.
		 * Post v1/{name}:setMaintenancePolicy
		 * @param {string} name The name (project, location, cluster id) of the cluster to set maintenance
		 * policy.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setMaintenancePolicy(name: string, requestBody: SetMaintenancePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setMaintenancePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the NodeManagement options for a node pool.
		 * Post v1/{name}:setManagement
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to set
		 * management properties. Specified in the format
		 * 'projects/locations/clusters/nodePools/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_setManagement(name: string, requestBody: SetNodePoolManagementRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setManagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets master auth materials. Currently supports changing the admin password
		 * or a specific cluster, either via password generation or explicitly setting
		 * the password.
		 * Post v1/{name}:setMasterAuth
		 * @param {string} name The name (project, location, cluster) of the cluster to set auth.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setMasterAuth(name: string, requestBody: SetMasterAuthRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setMasterAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the monitoring service for a specific cluster.
		 * Post v1/{name}:setMonitoring
		 * @param {string} name The name (project, location, cluster) of the cluster to set monitoring.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setMonitoring(name: string, requestBody: SetMonitoringServiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setMonitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables or disables Network Policy for a cluster.
		 * Post v1/{name}:setNetworkPolicy
		 * @param {string} name The name (project, location, cluster id) of the cluster to set networking
		 * policy. Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setNetworkPolicy(name: string, requestBody: SetNetworkPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setNetworkPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets labels on a cluster.
		 * Post v1/{name}:setResourceLabels
		 * @param {string} name The name (project, location, cluster id) of the cluster to set labels.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_setResourceLabels(name: string, requestBody: SetLabelsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setResourceLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the size for a specific node pool.
		 * Post v1/{name}:setSize
		 * @param {string} name The name (project, location, cluster, node pool id) of the node pool to set
		 * size.
		 * Specified in the format 'projects/locations/clusters/nodePools/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_setSize(name: string, requestBody: SetNodePoolSizeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setSize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts master IP rotation.
		 * Post v1/{name}:startIpRotation
		 * @param {string} name The name (project, location, cluster id) of the cluster to start IP
		 * rotation. Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_startIpRotation(name: string, requestBody: StartIPRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':startIpRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the master for a specific cluster.
		 * Post v1/{name}:updateMaster
		 * @param {string} name The name (project, location, cluster) of the cluster to update.
		 * Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_updateMaster(name: string, requestBody: UpdateMasterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':updateMaster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the OIDC discovery document for the cluster.
		 * See the
		 * [OpenID Connect Discovery 1.0
		 * specification](https://openid.net/specs/openid-connect-discovery-1_0.html)
		 * for details.
		 * This API is not yet intended for general use, and is not available for all
		 * clusters.
		 * Get v1/{parent}/.well-known/openid-configuration
		 * @param {string} parent The cluster (project, location, cluster id) to get the discovery document
		 * for. Specified in the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_well_known_getOpenid_configuration(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/.well-known/openid-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists subnetworks that are usable for creating clusters in a project.
		 * Get v1/{parent}/aggregated/usableSubnetworks
		 * @param {string} parent The parent project where subnetworks are usable.
		 * Specified in the format 'projects/*'.
		 * @param {string} filter Filtering currently only supports equality on the networkProjectId and must
		 * be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId`
		 * is the project which owns the listed subnetworks. This defaults to the
		 * parent project ID.
		 * @param {number} pageSize The max number of results per page that should be returned. If the number
		 * of available results is larger than `page_size`, a `next_page_token` is
		 * returned which can be used to get the next page of results in subsequent
		 * requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
		 * @param {string} pageToken Specifies a page token to use. Set this to the nextPageToken returned by
		 * previous list requests to get the next page of results.
		 * @return {void} Successful response
		 */
		Container_projects_aggregated_usableSubnetworks_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/aggregated/usableSubnetworks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all clusters owned by a project in either the specified zone or all
		 * zones.
		 * Get v1/{parent}/clusters
		 * @param {string} parent The parent (project and location) where the clusters will be listed.
		 * Specified in the format 'projects/locations/*'.
		 * Location "-" matches all zones and all regions.
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides, or "-" for all zones.
		 * This field has been deprecated and replaced by the parent field.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_list(parent: string, projectId: string | null | undefined, zone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a cluster, consisting of the specified number and type of Google
		 * Compute Engine instances.
		 * By default, the cluster is created in the project's
		 * [default network](/compute/docs/networks-and-firewalls#networks).
		 * One firewall is added for the cluster. After cluster creation,
		 * the Kubelet creates routes for each node to allow the containers
		 * on that node to communicate with all other instances in the
		 * cluster.
		 * Finally, an entry is added to the project's global metadata indicating
		 * which CIDR range the cluster is using.
		 * Post v1/{parent}/clusters
		 * @param {string} parent The parent (project and location) where the cluster will be created.
		 * Specified in the format 'projects/locations/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_create(parent: string, requestBody: CreateClusterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the public component of the cluster signing keys in
		 * JSON Web Key format.
		 * This API is not yet intended for general use, and is not available for all
		 * clusters.
		 * Get v1/{parent}/jwks
		 * @param {string} parent The cluster (project, location, cluster id) to get keys for. Specified in
		 * the format 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_getJwks(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jwks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the node pools for a cluster.
		 * Get v1/{parent}/nodePools
		 * @param {string} parent The parent (project, location, cluster id) where the node pools will be
		 * listed. Specified in the format 'projects/locations/clusters/*'.
		 * @param {string} clusterId Deprecated. The name of the cluster.
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://developers.google.com/console/help/new/#projectnumber).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) in which the cluster
		 * resides.
		 * This field has been deprecated and replaced by the parent field.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_list(parent: string, clusterId: string | null | undefined, projectId: string | null | undefined, zone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodePools&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a node pool for a cluster.
		 * Post v1/{parent}/nodePools
		 * @param {string} parent The parent (project, location, cluster id) where the node pool will be
		 * created. Specified in the format
		 * 'projects/locations/clusters/*'.
		 * @return {void} Successful response
		 */
		Container_projects_locations_clusters_nodePools_create(parent: string, requestBody: CreateNodePoolRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodePools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all operations in a project in a specific zone or all zones.
		 * Get v1/{parent}/operations
		 * @param {string} parent The parent (project and location) where the operations will be listed.
		 * Specified in the format 'projects/locations/*'.
		 * Location "-" matches all zones and all regions.
		 * @param {string} projectId Deprecated. The Google Developers Console [project ID or project
		 * number](https://support.google.com/cloud/answer/6158840).
		 * This field has been deprecated and replaced by the parent field.
		 * @param {string} zone Deprecated. The name of the Google Compute Engine
		 * [zone](/compute/docs/zones#available) to return operations for, or `-` for
		 * all zones. This field has been deprecated and replaced by the parent field.
		 * @return {void} Successful response
		 */
		Container_projects_locations_operations_list(parent: string, projectId: string | null | undefined, zone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/operations&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&zone=' + (zone == null ? '' : encodeURIComponent(zone)), { observe: 'response', responseType: 'text' });
		}
	}

}

