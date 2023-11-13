import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/). */
	export interface AcceleratorConfig {

		/** The number of the accelerator cards of this type exposed to this instance. */
		acceleratorCount?: number | null;

		/**
		 * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes).Examples:
		 * https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80
		 * projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80
		 * nvidia-tesla-k80Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80.
		 */
		acceleratorTypeUri?: string | null;
	}


	/** Autoscaling Policy config associated with the cluster. */
	export interface AutoscalingConfig {

		/**
		 * Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples:
		 * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]
		 * projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region.
		 */
		policyUri?: string | null;
	}


	/** Describes an autoscaling policy for Dataproc cluster autoscaler. */
	export interface AutoscalingPolicy {

		/** Basic algorithm for autoscaling. */
		basicAlgorithm?: BasicAutoscalingAlgorithm | null;

		/** Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
		id?: string | null;

		/**
		 * Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
		 * For projects.locations.autoscalingPolicies, the resource name of the  policy has the following format:  projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
		 */
		name?: string | null;

		/** Configuration for the size bounds of an instance group, including its proportional size to other groups. */
		secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig | null;

		/** Configuration for the size bounds of an instance group, including its proportional size to other groups. */
		workerConfig?: InstanceGroupAutoscalingPolicyConfig | null;
	}


	/** Basic algorithm for autoscaling. */
	export interface BasicAutoscalingAlgorithm {

		/** Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m. */
		cooldownPeriod?: string | null;

		/** Basic autoscaling configurations for YARN. */
		yarnConfig?: BasicYarnAutoscalingConfig | null;
	}


	/** Basic autoscaling configurations for YARN. */
	export interface BasicYarnAutoscalingConfig {

		/** Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d. */
		gracefulDecommissionTimeout?: string | null;

		/** Required. Fraction of average pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job.Bounds: 0.0, 1.0. */
		scaleDownFactor?: number | null;

		/** Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleDownMinWorkerFraction?: number | null;

		/** Required. Fraction of average pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0. */
		scaleUpFactor?: number | null;

		/** Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. */
		scaleUpMinWorkerFraction?: number | null;
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


	/** Associates members with a role. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
		 */
		condition?: Expr | null;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource. members can have the following values:
		 * allUsers: A special identifier that represents anyone who is  on the internet; with or without a Google account.
		 * allAuthenticatedUsers: A special identifier that represents anyone  who is authenticated with a Google account or a service account.
		 * user:{emailid}: An email address that represents a specific Google  account. For example, alice@example.com .
		 * serviceAccount:{emailid}: An email address that represents a service  account. For example, my-other-app@appspot.gserviceaccount.com.
		 * group:{emailid}: An email address that represents a Google group.  For example, admins@example.com.
		 * deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique  identifier) representing a user that has been recently deleted. For  example, alice@example.com?uid=123456789012345678901. If the user is  recovered, this value reverts to user:{emailid} and the recovered user  retains the role in the binding.
		 * deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus  unique identifier) representing a service account that has been recently  deleted. For example,  my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901.  If the service account is undeleted, this value reverts to  serviceAccount:{emailid} and the undeleted service account retains the  role in the binding.
		 * deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique  identifier) representing a Google group that has been recently  deleted. For example, admins@example.com?uid=123456789012345678901. If  the group is recovered, this value reverts to group:{emailid} and the  recovered group retains the role in the binding.
		 * domain:{domain}: The G Suite domain (primary) that represents all the  users of that domain. For example, google.com or example.com.
		 */
		members?: Array<string> | null;

		/** Role that is assigned to members. For example, roles/viewer, roles/editor, or roles/owner. */
		role?: string | null;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison):
	 * title: "Summary size limit"
	 * description: "Determines if a summary is less than 100 chars"
	 * expression: "document.summary.size() < 100"
	 * Example (Equality):
	 * title: "Requestor is owner"
	 * description: "Determines if requestor is the document owner"
	 * expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 * title: "Public documents"
	 * description: "Determine whether the document should be publicly visible"
	 * expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 * title: "Notification string"
	 * description: "Create a notification string with a timestamp."
	 * expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
	 */
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


	/** A request to cancel a job. */
	export interface CancelJobRequest {
	}


	/** Describes the identifying information, config, and status of a cluster of Compute Engine instances. */
	export interface Cluster {

		/** Required. The cluster name. Cluster names within a project must be unique. Names of deleted clusters can be reused. */
		clusterName?: string | null;

		/** Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster. */
		clusterUuid?: string | null;

		/** The cluster config. */
		config?: ClusterConfig | null;

		/** Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
		labels?: {[id: string]: string } | null;

		/** Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
		metrics?: ClusterMetrics | null;

		/** Required. The Google Cloud Platform project ID that the cluster belongs to. */
		projectId?: string | null;

		/** The status of a cluster and its instances. */
		status?: ClusterStatus | null;

		/** Output only. The previous cluster status. */
		statusHistory?: Array<ClusterStatus> | null;
	}


	/** The cluster config. */
	export interface ClusterConfig {

		/** Autoscaling Policy config associated with the cluster. */
		autoscalingConfig?: AutoscalingConfig | null;

		/** Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging bucket (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). */
		configBucket?: string | null;

		/** Encryption settings for the cluster. */
		encryptionConfig?: EncryptionConfig | null;

		/** Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. */
		gceClusterConfig?: GceClusterConfig | null;

		/**
		 * Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget):
		 * ROLE=$(curl -H Metadata-Flavor:Google
		 * http://metadata/computeMetadata/v1/instance/attributes/dataproc-role)
		 * if [[ "${ROLE}" == 'Master' ]]; then
		 * ... master specific actions ...
		 * else
		 * ... worker specific actions ...
		 * fi
		 */
		initializationActions?: Array<NodeInitializationAction> | null;

		/** Specifies the cluster auto-delete schedule configuration. */
		lifecycleConfig?: LifecycleConfig | null;

		/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
		masterConfig?: InstanceGroupConfig | null;

		/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
		secondaryWorkerConfig?: InstanceGroupConfig | null;

		/** Security related configuration, including Kerberos. */
		securityConfig?: SecurityConfig | null;

		/** Specifies the selection and config of software inside the cluster. */
		softwareConfig?: SoftwareConfig | null;

		/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
		workerConfig?: InstanceGroupConfig | null;
	}


	/** Encryption settings for the cluster. */
	export interface EncryptionConfig {

		/** Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster. */
		gcePdKmsKeyName?: string | null;
	}


	/** Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. */
	export interface GceClusterConfig {

		/** Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses. */
		internalIpOnly?: boolean | null;

		/** The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
		metadata?: {[id: string]: string } | null;

		/**
		 * Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are valid. Examples:
		 * https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default
		 * projects/[project_id]/regions/global/default
		 * default
		 */
		networkUri?: string | null;

		/** Reservation Affinity for consuming Zonal reservation. */
		reservationAffinity?: ReservationAffinity | null;

		/** Optional. The Dataproc service account (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_cloud_dataproc) (also see VM Data Plane identity (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. */
		serviceAccount?: string | null;

		/**
		 * Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included:
		 * https://www.googleapis.com/auth/cloud.useraccounts.readonly
		 * https://www.googleapis.com/auth/devstorage.read_write
		 * https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided:
		 * https://www.googleapis.com/auth/bigquery
		 * https://www.googleapis.com/auth/bigtable.admin.table
		 * https://www.googleapis.com/auth/bigtable.data
		 * https://www.googleapis.com/auth/devstorage.full_control
		 */
		serviceAccountScopes?: Array<string> | null;

		/**
		 * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples:
		 * https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0
		 * projects/[project_id]/regions/us-east1/subnetworks/sub0
		 * sub0
		 */
		subnetworkUri?: string | null;

		/** The Compute Engine tags to add to all instances (see Tagging instances (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). */
		tags?: Array<string> | null;

		/**
		 * Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples:
		 * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]
		 * projects/[project_id]/zones/[zone]
		 * us-central1-f
		 */
		zoneUri?: string | null;
	}


	/** Reservation Affinity for consuming Zonal reservation. */
	export interface ReservationAffinity {

		/** Optional. Type of reservation to consume */
		consumeReservationType?: ReservationAffinityConsumeReservationType | null;

		/** Optional. Corresponds to the label key of reservation resource. */
		key?: string | null;

		/** Optional. Corresponds to the label values of reservation resource. */
		values?: Array<string> | null;
	}

	export enum ReservationAffinityConsumeReservationType { TYPE_UNSPECIFIED = 0, NO_RESERVATION = 1, ANY_RESERVATION = 2, SPECIFIC_RESERVATION = 3 }


	/** Specifies an executable to run on a fully configured node and a timeout period for executable completion. */
	export interface NodeInitializationAction {

		/** Required. Cloud Storage URI of executable file. */
		executableFile?: string | null;

		/** Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period. */
		executionTimeout?: string | null;
	}


	/** Specifies the cluster auto-delete schedule configuration. */
	export interface LifecycleConfig {

		/** Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		autoDeleteTime?: string | null;

		/** Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		autoDeleteTtl?: string | null;

		/** Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json). */
		idleDeleteTtl?: string | null;

		/** Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). */
		idleStartTime?: string | null;
	}


	/** The config settings for Compute Engine resources in an instance group, such as a master or worker group. */
	export interface InstanceGroupConfig {

		/** Optional. The Compute Engine accelerator configuration for these instances. */
		accelerators?: Array<AcceleratorConfig> | null;

		/** Specifies the config of disk options for a group of VM instances. */
		diskConfig?: DiskConfig | null;

		/**
		 * Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples:
		 * https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id]
		 * projects/[project_id]/global/images/[image-id]
		 * image-idImage family examples. Dataproc will use the most recent image from the family:
		 * https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name]
		 * projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default.
		 */
		imageUri?: string | null;

		/** Output only. The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group. */
		instanceNames?: Array<string> | null;

		/** Output only. Specifies that this instance group contains preemptible instances. */
		isPreemptible?: boolean | null;

		/**
		 * Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples:
		 * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
		 * projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
		 * n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2.
		 */
		machineTypeUri?: string | null;

		/** Specifies the resources used to actively manage an instance group. */
		managedGroupConfig?: ManagedGroupConfig | null;

		/** Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -&gt; Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu). */
		minCpuPlatform?: string | null;

		/** Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1. */
		numInstances?: number | null;

		/** Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE. */
		preemptibility?: InstanceGroupConfigPreemptibility | null;
	}


	/** Specifies the config of disk options for a group of VM instances. */
	export interface DiskConfig {

		/** Optional. Size in GB of the boot disk (default is 500GB). */
		bootDiskSizeGb?: number | null;

		/** Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive). */
		bootDiskType?: string | null;

		/** Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries. */
		numLocalSsds?: number | null;
	}


	/** Specifies the resources used to actively manage an instance group. */
	export interface ManagedGroupConfig {

		/** Output only. The name of the Instance Group Manager for this group. */
		instanceGroupManagerName?: string | null;

		/** Output only. The name of the Instance Template used for the Managed Instance Group. */
		instanceTemplateName?: string | null;
	}

	export enum InstanceGroupConfigPreemptibility { PREEMPTIBILITY_UNSPECIFIED = 0, NON_PREEMPTIBLE = 1, PREEMPTIBLE = 2 }


	/** Security related configuration, including Kerberos. */
	export interface SecurityConfig {

		/** Specifies Kerberos related configuration. */
		kerberosConfig?: KerberosConfig | null;
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

		/** Required. The uri of the KMS key used to encrypt various sensitive files. */
		kmsKeyUri?: string | null;

		/** Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. */
		realm?: string | null;

		/** Required. The Cloud Storage URI of a KMS encrypted file containing the root principal password. */
		rootPrincipalPasswordUri?: string | null;

		/** Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used. */
		tgtLifetimeHours?: number | null;

		/** Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc. */
		truststorePasswordUri?: string | null;

		/** Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
		truststoreUri?: string | null;
	}


	/** Specifies the selection and config of software inside the cluster. */
	export interface SoftwareConfig {

		/** Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_cloud_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version. */
		imageVersion?: string | null;

		/** Optional. The set of components to activate on the cluster. */
		optionalComponents?: Array<string> | null;

		/**
		 * Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings:
		 * capacity-scheduler: capacity-scheduler.xml
		 * core: core-site.xml
		 * distcp: distcp-default.xml
		 * hdfs: hdfs-site.xml
		 * hive: hive-site.xml
		 * mapred: mapred-site.xml
		 * pig: pig.properties
		 * spark: spark-defaults.conf
		 * yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
		 */
		properties?: {[id: string]: string } | null;
	}


	/** Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
	export interface ClusterMetrics {

		/** The HDFS metrics. */
		hdfsMetrics?: {[id: string]: string } | null;

		/** The YARN metrics. */
		yarnMetrics?: {[id: string]: string } | null;
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

	export enum ClusterStatusState { UNKNOWN = 0, CREATING = 1, RUNNING = 2, ERROR = 3, DELETING = 4, UPDATING = 5 }

	export enum ClusterStatusSubstate { UNSPECIFIED = 0, UNHEALTHY = 1, STALE_STATUS = 2 }


	/** The cluster operation triggered by a workflow. */
	export interface ClusterOperation {

		/** Output only. Indicates the operation is done. */
		done?: boolean | null;

		/** Output only. Error, if operation failed. */
		error?: string | null;

		/** Output only. The id of the cluster operation. */
		operationId?: string | null;
	}


	/** Metadata describing the operation. */
	export interface ClusterOperationMetadata {

		/** Output only. Name of the cluster for the operation. */
		clusterName?: string | null;

		/** Output only. Cluster UUID for the operation. */
		clusterUuid?: string | null;

		/** Output only. Short description of operation. */
		description?: string | null;

		/** Output only. Labels associated with the operation */
		labels?: {[id: string]: string } | null;

		/** Output only. The operation type. */
		operationType?: string | null;

		/** The status of the operation. */
		status?: ClusterOperationStatus | null;

		/** Output only. The previous operation status. */
		statusHistory?: Array<ClusterOperationStatus> | null;

		/** Output only. Errors encountered during operation execution. */
		warnings?: Array<string> | null;
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

	export enum ClusterOperationStatusState { UNKNOWN = 0, PENDING = 1, RUNNING = 2, DONE = 3 }


	/** A selector that chooses target cluster for jobs based on metadata. */
	export interface ClusterSelector {

		/** Required. The cluster labels. Cluster must have all labels to match. */
		clusterLabels?: {[id: string]: string } | null;

		/** Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used. */
		zone?: string | null;
	}


	/** A request to collect cluster diagnostic information. */
	export interface DiagnoseClusterRequest {
	}


	/** The location of diagnostic output. */
	export interface DiagnoseClusterResults {

		/** Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics. */
		outputUri?: string | null;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
	 * service Foo {
	 *   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 * }
	 * The JSON representation for Empty is empty JSON object {}.
	 */
	export interface Empty {
	}


	/** Request message for GetIamPolicy method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions | null;
	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/** Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. */
		requestedPolicyVersion?: number | null;
	}


	/** A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html). */
	export interface HadoopJob {

		/** Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip. */
		archiveUris?: Array<string> | null;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
		args?: Array<string> | null;

		/** Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks. */
		fileUris?: Array<string> | null;

		/** Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks. */
		jarFileUris?: Array<string> | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig | null;

		/** The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris. */
		mainClass?: string | null;

		/** The HCFS URI of the jar file containing the main class. Examples:  'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar'  'hdfs:/tmp/test-samples/custom-wordcount.jar'  'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar' */
		mainJarFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code. */
		properties?: {[id: string]: string } | null;
	}


	/** The runtime logging config of the job. */
	export interface LoggingConfig {

		/** The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples:  'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG' */
		driverLogLevels?: {[id: string]: LoggingConfigDriverLogLevels } | null;
	}

	export enum LoggingConfigDriverLogLevels { LEVEL_UNSPECIFIED = 0, ALL = 1, TRACE = 2, DEBUG = 3, INFO = 4, WARN = 5, ERROR = 6, FATAL = 7, OFF = 8 }


	/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
	export interface HiveJob {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure?: boolean | null;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs. */
		jarFileUris?: Array<string> | null;

		/** Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code. */
		properties?: {[id: string]: string } | null;

		/** The HCFS URI of the script that contains Hive queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList | null;

		/** Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";). */
		scriptVariables?: {[id: string]: string } | null;
	}


	/** A list of queries to run on a cluster. */
	export interface QueryList {

		/**
		 * Required. The queries to execute. You do not need to terminate a query with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of an Cloud Dataproc API snippet that uses a QueryList to specify a HiveJob:
		 * "hiveJob": {
		 * "queryList": {
		 * "queries": [
		 * "query1",
		 * "query2",
		 * "query3;query4",
		 * ]
		 * }
		 * }
		 */
		queries?: Array<string> | null;
	}


	/** A request to instantiate a workflow template. */
	export interface InstantiateWorkflowTemplateRequest {

		/** Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 100 characters. */
		parameters?: {[id: string]: string } | null;

		/** Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;

		/** Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template. */
		version?: number | null;
	}


	/** A Dataproc job resource. */
	export interface Job {

		/** Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled. */
		done?: boolean | null;

		/** Output only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri. */
		driverControlFilesUri?: string | null;

		/** Output only. A URI pointing to the location of the stdout of the job's driver program. */
		driverOutputResourceUri?: string | null;

		/** A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html). */
		hadoopJob?: HadoopJob | null;

		/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
		hiveJob?: HiveJob | null;

		/** Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that may be reused over time. */
		jobUuid?: string | null;

		/** Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job. */
		labels?: {[id: string]: string } | null;

		/** A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN. */
		pigJob?: PigJob | null;

		/** Dataproc job config. */
		placement?: JobPlacement | null;

		/** A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster. */
		prestoJob?: PrestoJob | null;

		/** A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN. */
		pysparkJob?: PySparkJob | null;

		/** Encapsulates the full scoping used to reference a job. */
		reference?: JobReference | null;

		/** Job scheduling options. */
		scheduling?: JobScheduling | null;

		/** A Dataproc job for running Apache Spark (http://spark.apache.org/) applications on YARN. */
		sparkJob?: SparkJob | null;

		/** A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN. */
		sparkRJob?: SparkRJob | null;

		/** A Dataproc job for running Apache Spark SQL (http://spark.apache.org/sql/) queries. */
		sparkSqlJob?: SparkSqlJob | null;

		/** Dataproc job status. */
		status?: JobStatus | null;

		/** Output only. The previous job status. */
		statusHistory?: Array<JobStatus> | null;

		/** Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
		yarnApplications?: Array<YarnApplication> | null;
	}


	/** A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN. */
	export interface PigJob {

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure?: boolean | null;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs. */
		jarFileUris?: Array<string> | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig | null;

		/** Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code. */
		properties?: {[id: string]: string } | null;

		/** The HCFS URI of the script that contains the Pig queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList | null;

		/** Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]). */
		scriptVariables?: {[id: string]: string } | null;
	}


	/** Dataproc job config. */
	export interface JobPlacement {

		/** Required. The name of the cluster where the job will be submitted. */
		clusterName?: string | null;

		/** Output only. A cluster UUID generated by the Dataproc service when the job is submitted. */
		clusterUuid?: string | null;
	}


	/** A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster. */
	export interface PrestoJob {

		/** Optional. Presto client tags to attach to this query */
		clientTags?: Array<string> | null;

		/** Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. */
		continueOnFailure?: boolean | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig | null;

		/** Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats */
		outputFormat?: string | null;

		/** Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI */
		properties?: {[id: string]: string } | null;

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList | null;
	}


	/** A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN. */
	export interface PySparkJob {

		/** Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string> | null;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
		args?: Array<string> | null;

		/** Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks. */
		fileUris?: Array<string> | null;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. */
		jarFileUris?: Array<string> | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig | null;

		/** Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. */
		mainPythonFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties?: {[id: string]: string } | null;

		/** Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. */
		pythonFileUris?: Array<string> | null;
	}


	/** Encapsulates the full scoping used to reference a job. */
	export interface JobReference {

		/** Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server. */
		jobId?: string | null;

		/** Required. The ID of the Google Cloud Platform project that the job belongs to. */
		projectId?: string | null;
	}


	/** Job scheduling options. */
	export interface JobScheduling {

		/** Optional. Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed.A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window.Maximum value is 10. */
		maxFailuresPerHour?: number | null;
	}


	/** A Dataproc job for running Apache Spark (http://spark.apache.org/) applications on YARN. */
	export interface SparkJob {

		/** Optional. HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string> | null;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
		args?: Array<string> | null;

		/** Optional. HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks. */
		fileUris?: Array<string> | null;

		/** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. */
		jarFileUris?: Array<string> | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig | null;

		/** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. */
		mainClass?: string | null;

		/** The HCFS URI of the jar file that contains the main class. */
		mainJarFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties?: {[id: string]: string } | null;
	}


	/** A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN. */
	export interface SparkRJob {

		/** Optional. HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string> | null;

		/** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. */
		args?: Array<string> | null;

		/** Optional. HCFS URIs of files to be copied to the working directory of R drivers and distributed tasks. Useful for naively parallel tasks. */
		fileUris?: Array<string> | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig | null;

		/** Required. The HCFS URI of the main R file to use as the driver. Must be a .R file. */
		mainRFileUri?: string | null;

		/** Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. */
		properties?: {[id: string]: string } | null;
	}


	/** A Dataproc job for running Apache Spark SQL (http://spark.apache.org/sql/) queries. */
	export interface SparkSqlJob {

		/** Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. */
		jarFileUris?: Array<string> | null;

		/** The runtime logging config of the job. */
		loggingConfig?: LoggingConfig | null;

		/** Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten. */
		properties?: {[id: string]: string } | null;

		/** The HCFS URI of the script that contains SQL queries. */
		queryFileUri?: string | null;

		/** A list of queries to run on a cluster. */
		queryList?: QueryList | null;

		/** Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). */
		scriptVariables?: {[id: string]: string } | null;
	}


	/** Dataproc job status. */
	export interface JobStatus {

		/** Optional. Output only. Job state details, such as an error description if the state is <code>ERROR</code>. */
		details?: string | null;

		/** Output only. A state message specifying the overall job state. */
		state?: JobStatusState | null;

		/** Output only. The time when this state was entered. */
		stateStartTime?: string | null;

		/** Output only. Additional state information, which includes status reported by the agent. */
		substate?: JobStatusSubstate | null;
	}

	export enum JobStatusState { STATE_UNSPECIFIED = 0, PENDING = 1, SETUP_DONE = 2, RUNNING = 3, CANCEL_PENDING = 4, CANCEL_STARTED = 5, CANCELLED = 6, DONE = 7, ERROR = 8, ATTEMPT_FAILURE = 9 }

	export enum JobStatusSubstate { UNSPECIFIED = 0, SUBMITTED = 1, QUEUED = 2, STALE_STATUS = 3 }


	/** A YARN application created by a job. Application information is a subset of <code>org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto</code>.Beta Feature: This report is available for testing purposes only. It may be changed before final release. */
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

	export enum YarnApplicationState { STATE_UNSPECIFIED = 0, NEW = 1, NEW_SAVING = 2, SUBMITTED = 3, ACCEPTED = 4, RUNNING = 5, FINISHED = 6, FAILED = 7, KILLED = 8 }


	/** Job Operation metadata. */
	export interface JobMetadata {

		/** Output only. The job id. */
		jobId?: string | null;

		/** Output only. Operation type. */
		operationType?: string | null;

		/** Output only. Job submission time. */
		startTime?: string | null;

		/** Dataproc job status. */
		status?: JobStatus | null;
	}


	/** A response to a request to list autoscaling policies in a project. */
	export interface ListAutoscalingPoliciesResponse {

		/** Output only. This token is included in the response if there are more results to fetch. */
		nextPageToken?: string | null;

		/** Output only. Autoscaling policies list. */
		policies?: Array<AutoscalingPolicy> | null;
	}


	/** The list of all clusters in a project. */
	export interface ListClustersResponse {

		/** Output only. The clusters in the project. */
		clusters?: Array<Cluster> | null;

		/** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest. */
		nextPageToken?: string | null;
	}


	/** A list of jobs in a project. */
	export interface ListJobsResponse {

		/** Output only. Jobs list. */
		jobs?: Array<Job> | null;

		/** Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent <code>ListJobsRequest</code>. */
		nextPageToken?: string | null;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation> | null;
	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status | null;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any } | null;

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any } | null;
	}


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string> | null;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}


	/** A response to a request to list workflow templates in a project. */
	export interface ListWorkflowTemplatesResponse {

		/** Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent <code>ListWorkflowTemplatesRequest</code>. */
		nextPageToken?: string | null;

		/** Output only. WorkflowTemplates list. */
		templates?: Array<WorkflowTemplate> | null;
	}


	/** A Dataproc workflow template resource. */
	export interface WorkflowTemplate {

		/** Output only. The time template was created. */
		createTime?: string | null;
		id?: string | null;

		/** Required. The Directed Acyclic Graph of Jobs to submit. */
		jobs?: Array<OrderedJob> | null;

		/** Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template. */
		labels?: {[id: string]: string } | null;

		/**
		 * Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
		 * For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 */
		name?: string | null;

		/** Optional. emplate parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated. */
		parameters?: Array<TemplateParameter> | null;

		/** Specifies workflow execution target.Either managed_cluster or cluster_selector is required. */
		placement?: WorkflowTemplatePlacement | null;

		/** Output only. The time template was last updated. */
		updateTime?: string | null;

		/** Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request. */
		version?: number | null;
	}


	/** A job executed by the workflow. */
	export interface OrderedJob {

		/** A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html). */
		hadoopJob?: HadoopJob | null;

		/** A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN. */
		hiveJob?: HiveJob | null;

		/** Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job. */
		labels?: {[id: string]: string } | null;

		/** A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN. */
		pigJob?: PigJob | null;

		/** Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow. */
		prerequisiteStepIds?: Array<string> | null;

		/** A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster. */
		prestoJob?: PrestoJob | null;

		/** A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN. */
		pysparkJob?: PySparkJob | null;

		/** Job scheduling options. */
		scheduling?: JobScheduling | null;

		/** A Dataproc job for running Apache Spark (http://spark.apache.org/) applications on YARN. */
		sparkJob?: SparkJob | null;

		/** A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN. */
		sparkRJob?: SparkRJob | null;

		/** A Dataproc job for running Apache Spark SQL (http://spark.apache.org/sql/) queries. */
		sparkSqlJob?: SparkSqlJob | null;

		/** Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. */
		stepId?: string | null;
	}


	/** A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector) */
	export interface TemplateParameter {

		/** Optional. Brief description of the parameter. Must not exceed 1024 characters. */
		description?: string | null;

		/**
		 * Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax:
		 * Values in maps can be referenced by key:
		 * labels'key'
		 * placement.clusterSelector.clusterLabels'key'
		 * placement.managedCluster.labels'key'
		 * placement.clusterSelector.clusterLabels'key'
		 * jobs'step-id'.labels'key'
		 * Jobs in the jobs list can be referenced by step-id:
		 * jobs'step-id'.hadoopJob.mainJarFileUri
		 * jobs'step-id'.hiveJob.queryFileUri
		 * jobs'step-id'.pySparkJob.mainPythonFileUri
		 * jobs'step-id'.hadoopJob.jarFileUris0
		 * jobs'step-id'.hadoopJob.archiveUris0
		 * jobs'step-id'.hadoopJob.fileUris0
		 * jobs'step-id'.pySparkJob.pythonFileUris0
		 * Items in repeated fields can be referenced by a zero-based index:
		 * jobs'step-id'.sparkJob.args0
		 * Other examples:
		 * jobs'step-id'.hadoopJob.properties'key'
		 * jobs'step-id'.hadoopJob.args0
		 * jobs'step-id'.hiveJob.scriptVariables'key'
		 * jobs'step-id'.hadoopJob.mainJarFileUri
		 * placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid:
		 * placement.clusterSelector.clusterLabels
		 * jobs'step-id'.sparkJob.args
		 */
		fields?: Array<string> | null;

		/** Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters. */
		name?: string | null;

		/** Configuration for parameter validation. */
		validation?: ParameterValidation | null;
	}


	/** Configuration for parameter validation. */
	export interface ParameterValidation {

		/** Validation based on regular expressions. */
		regex?: RegexValidation | null;

		/** Validation based on a list of allowed values. */
		values?: ValueValidation | null;
	}


	/** Validation based on regular expressions. */
	export interface RegexValidation {

		/** Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient). */
		regexes?: Array<string> | null;
	}


	/** Validation based on a list of allowed values. */
	export interface ValueValidation {

		/** Required. List of allowed values for the parameter. */
		values?: Array<string> | null;
	}


	/** Specifies workflow execution target.Either managed_cluster or cluster_selector is required. */
	export interface WorkflowTemplatePlacement {

		/** A selector that chooses target cluster for jobs based on metadata. */
		clusterSelector?: ClusterSelector | null;

		/** Cluster that is managed by the workflow. */
		managedCluster?: ManagedCluster | null;
	}


	/** Cluster that is managed by the workflow. */
	export interface ManagedCluster {

		/** Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters. */
		clusterName?: string | null;

		/** The cluster config. */
		config?: ClusterConfig | null;

		/** Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster. */
		labels?: {[id: string]: string } | null;
	}


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members to a single role. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.Optionally, a binding can specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both.JSON example:
	 * {
	 *   "bindings": [
	 *     {
	 *       "role": "roles/resourcemanager.organizationAdmin",
	 *       "members": [
	 *         "user:mike@example.com",
	 *         "group:admins@example.com",
	 *         "domain:google.com",
	 *         "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *       ]
	 *     },
	 *     {
	 *       "role": "roles/resourcemanager.organizationViewer",
	 *       "members": ["user:eve@example.com"],
	 *       "condition": {
	 *         "title": "expirable access",
	 *         "description": "Does not grant access after Sep 2020",
	 *         "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *       }
	 *     }
	 *   ],
	 *   "etag": "BwWWja0YfJA=",
	 *   "version": 3
	 * }
	 * YAML example:
	 * bindings:
	 * - members:
	 *   - user:mike@example.com
	 *   - group:admins@example.com
	 *   - domain:google.com
	 *   - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *   role: roles/resourcemanager.organizationAdmin
	 * - members:
	 *   - user:eve@example.com
	 *   role: roles/resourcemanager.organizationViewer
	 *   condition:
	 *     title: expirable access
	 *     description: Does not grant access after Sep 2020
	 *     expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 * - etag: BwWWja0YfJA=
	 * - version: 3
	 * For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/** Associates a list of members to a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one member. */
		bindings?: Array<Binding> | null;

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations:
		 * Getting a policy that includes a conditional role binding
		 * Adding a conditional role binding to a policy
		 * Changing a conditional role binding in a policy
		 * Removing any role binding, with or without a condition, from a policy  that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
		 */
		version?: number | null;
	}


	/** Request message for SetIamPolicy method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members to a single role. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.Optionally, a binding can specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both.JSON example:
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * YAML example:
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy | null;
	}


	/** A request to submit a job. */
	export interface SubmitJobRequest {

		/** A Dataproc job resource. */
		job?: Job | null;

		/** Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest requests with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
		requestId?: string | null;
	}


	/** Request message for TestIamPermissions method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the resource. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string> | null;
	}


	/** Response message for TestIamPermissions method. */
	export interface TestIamPermissionsResponse {

		/** A subset of TestPermissionsRequest.permissions that the caller is allowed. */
		permissions?: Array<string> | null;
	}


	/** The workflow graph. */
	export interface WorkflowGraph {

		/** Output only. The workflow nodes. */
		nodes?: Array<WorkflowNode> | null;
	}


	/** The workflow node. */
	export interface WorkflowNode {

		/** Output only. The error detail. */
		error?: string | null;

		/** Output only. The job id; populated after the node enters RUNNING state. */
		jobId?: string | null;

		/** Output only. Node's prerequisite nodes. */
		prerequisiteStepIds?: Array<string> | null;

		/** Output only. The node state. */
		state?: WorkflowNodeState | null;

		/** Output only. The name of the node. */
		stepId?: string | null;
	}

	export enum WorkflowNodeState { NODE_STATE_UNSPECIFIED = 0, BLOCKED = 1, RUNNABLE = 2, RUNNING = 3, COMPLETED = 4, FAILED = 5 }


	/** A Dataproc workflow template resource. */
	export interface WorkflowMetadata {

		/** Output only. The name of the target cluster. */
		clusterName?: string | null;

		/** Output only. The UUID of target cluster. */
		clusterUuid?: string | null;

		/** The cluster operation triggered by a workflow. */
		createCluster?: ClusterOperation | null;

		/** The cluster operation triggered by a workflow. */
		deleteCluster?: ClusterOperation | null;

		/** Output only. Workflow end time. */
		endTime?: string | null;

		/** The workflow graph. */
		graph?: WorkflowGraph | null;

		/** Map from parameter names to values that were used for those parameters. */
		parameters?: {[id: string]: string } | null;

		/** Output only. Workflow start time. */
		startTime?: string | null;

		/** Output only. The workflow state. */
		state?: ClusterOperationStatusState | null;

		/**
		 * Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
		 * For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 */
		template?: string | null;

		/** Output only. The version of template at the time of workflow instantiation. */
		version?: number | null;
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
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_clusters_list(projectId: string, region: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
		 * Post v1/projects/{projectId}/regions/{region}/clusters
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} requestId Optional. A unique id used to identify the request. If the server receives two CreateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_clusters_create(projectId: string, region: string, requestId: string | null | undefined, requestBody: Cluster): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
		 * Delete v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @param {string} clusterUuid Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
		 * @param {string} requestId Optional. A unique id used to identify the request. If the server receives two DeleteClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_clusters_delete(projectId: string, region: string, clusterName: string, clusterUuid: string | null | undefined, requestId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&clusterUuid=' + (clusterUuid == null ? '' : encodeURIComponent(clusterUuid)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the resource representation for a cluster in a project.
		 * Get v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_clusters_get(projectId: string, region: string, clusterName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
		 * Patch v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @param {string} gracefulDecommissionTimeout Optional. Timeout for graceful YARN decomissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.
		 * @param {string} requestId Optional. A unique id used to identify the request. If the server receives two UpdateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @param {string} updateMask Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows:
		 * {
		 *   "config":{
		 *     "workerConfig":{
		 *       "numInstances":"5"
		 *     }
		 *   }
		 * }
		 * Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows:
		 * {
		 *   "config":{
		 *     "secondaryWorkerConfig":{
		 *       "numInstances":"5"
		 *     }
		 *   }
		 * }
		 * <strong>Note:</strong> Currently, only the following fields can be updated:<table>  <tbody>  <tr>  <td><strong>Mask</strong></td>  <td><strong>Purpose</strong></td>  </tr>  <tr>  <td><strong><em>labels</em></strong></td>  <td>Update labels</td>  </tr>  <tr>  <td><strong><em>config.worker_config.num_instances</em></strong></td>  <td>Resize primary worker group</td>  </tr>  <tr>  <td><strong><em>config.secondary_worker_config.num_instances</em></strong></td>  <td>Resize secondary worker group</td>  </tr>  <tr>  <td>config.autoscaling_config.policy_uri</td><td>Use, stop using, or  change autoscaling policies</td>  </tr>  </tbody>  </table>
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_clusters_patch(projectId: string, region: string, clusterName: string, gracefulDecommissionTimeout: string | null | undefined, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: Cluster): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&gracefulDecommissionTimeout=' + (gracefulDecommissionTimeout == null ? '' : encodeURIComponent(gracefulDecommissionTimeout)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
		 * Post v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} clusterName Required. The cluster name.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_clusters_diagnose(projectId: string, region: string, clusterName: string, requestBody: DiagnoseClusterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + ':diagnose', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_jobs_list(projectId: string, region: string, clusterName: string | null | undefined, filter: string | null | undefined, jobStateMatcher: Dataproc_projects_regions_jobs_listJobStateMatcher | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs&clusterName=' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&jobStateMatcher=' + jobStateMatcher + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
		 * Delete v1/projects/{projectId}/regions/{region}/jobs/{jobId}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_jobs_delete(projectId: string, region: string, jobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the resource representation for a job in a project.
		 * Get v1/projects/{projectId}/regions/{region}/jobs/{jobId}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_jobs_get(projectId: string, region: string, jobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a job in a project.
		 * Patch v1/projects/{projectId}/regions/{region}/jobs/{jobId}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @param {string} updateMask Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_jobs_patch(projectId: string, region: string, jobId: string, updateMask: string | null | undefined, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
		 * Post v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @param {string} jobId Required. The job ID.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_jobs_cancel(projectId: string, region: string, jobId: string, requestBody: CancelJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Submits a job to a cluster.
		 * Post v1/projects/{projectId}/regions/{region}/jobs:submit
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_jobs_submit(projectId: string, region: string, requestBody: SubmitJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs:submit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Submits job to a cluster.
		 * Post v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation
		 * @param {string} projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
		 * @param {string} region Required. The Dataproc region in which to handle the request.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_jobs_submitAsOperation(projectId: string, region: string, requestBody: SubmitJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/regions/' + (region == null ? '' : encodeURIComponent(region)) + '/jobs:submitAsOperation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a workflow template. It does not cancel in-progress workflows.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates.delete, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
		 * For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @param {number} version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_delete(name: string, version: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&version=' + version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
		 * For projects.locations.workflowTemplates.get, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @param {number} version Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_get(name: string, version: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&version=' + version + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
		 * Put v1/{name}
		 * @param {string} name Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
		 * For projects.locations.workflowTemplates, the resource name of the  template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_update(name: string, requestBody: WorkflowTemplate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
		 * Post v1/{name}:instantiate
		 * @param {string} name Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format:  projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
		 * For projects.locations.workflowTemplates.instantiate, the resource name  of the template has the following format:  projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_instantiate(name: string, requestBody: InstantiateWorkflowTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':instantiate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists autoscaling policies in the project.
		 * Get v1/{parent}/autoscalingPolicies
		 * @param {string} parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.autoscalingPolicies.list, the resource name  of the region has the following format:  projects/{project_id}/regions/{region}
		 * For projects.locations.autoscalingPolicies.list, the resource name  of the location has the following format:  projects/{project_id}/locations/{location}
		 * @param {number} pageSize Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
		 * @param {string} pageToken Optional. The page token, returned by a previous call, to request the next page of results.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_autoscalingPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/autoscalingPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates new autoscaling policy.
		 * Post v1/{parent}/autoscalingPolicies
		 * @param {string} parent Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.autoscalingPolicies.create, the resource name  of the region has the following format:  projects/{project_id}/regions/{region}
		 * For projects.locations.autoscalingPolicies.create, the resource name  of the location has the following format:  projects/{project_id}/locations/{location}
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_autoscalingPolicies_create(parent: string, requestBody: AutoscalingPolicy): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/autoscalingPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists workflows that match the specified filter in the request.
		 * Get v1/{parent}/workflowTemplates
		 * @param {string} parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates,list, the resource  name of the region has the following format:  projects/{project_id}/regions/{region}
		 * For projects.locations.workflowTemplates.list, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
		 * @param {number} pageSize Optional. The maximum number of results to return in each response.
		 * @param {string} pageToken Optional. The page token, returned by a previous call, to request the next page of results.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowTemplates&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates new workflow template.
		 * Post v1/{parent}/workflowTemplates
		 * @param {string} parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates,create, the resource name of the  region has the following format:  projects/{project_id}/regions/{region}
		 * For projects.locations.workflowTemplates.create, the resource name of  the location has the following format:  projects/{project_id}/locations/{location}
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_create(parent: string, requestBody: WorkflowTemplate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
		 * Post v1/{parent}/workflowTemplates:instantiateInline
		 * @param {string} parent Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names.
		 * For projects.regions.workflowTemplates,instantiateinline, the resource  name of the region has the following format:  projects/{project_id}/regions/{region}
		 * For projects.locations.workflowTemplates.instantiateinline, the  resource name of the location has the following format:  projects/{project_id}/locations/{location}
		 * @param {string} requestId Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_instantiateInline(parent: string, requestId: string | null | undefined, requestBody: WorkflowTemplate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowTemplates:instantiateInline&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy.Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Dataproc_projects_regions_workflowTemplates_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Dataproc_projects_regions_jobs_listJobStateMatcher { ALL = 0, ACTIVE = 1, NON_ACTIVE = 2 }

}

