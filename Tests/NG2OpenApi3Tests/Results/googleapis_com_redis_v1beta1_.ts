import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CertChain {

		/** The certificates that form the CA chain, from leaf to root order. */
		certificates?: Array<string>;
	}
	export interface CertChainFormProperties {
	}
	export function CreateCertChainFormGroup() {
		return new FormGroup<CertChainFormProperties>({
		});

	}


	/** Redis cluster certificate authority */
	export interface CertificateAuthority {
		managedServerCa?: ManagedCertificateAuthority;

		/** Identifier. Unique name of the resource in this scope including project, location and cluster using the form: `projects/{project}/locations/{location}/clusters/{cluster}/certificateAuthority` */
		name?: string | null;
	}

	/** Redis cluster certificate authority */
	export interface CertificateAuthorityFormProperties {

		/** Identifier. Unique name of the resource in this scope including project, location and cluster using the form: `projects/{project}/locations/{location}/clusters/{cluster}/certificateAuthority` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCertificateAuthorityFormGroup() {
		return new FormGroup<CertificateAuthorityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedCertificateAuthority {

		/** The PEM encoded CA certificate chains for redis managed server authentication */
		caCerts?: Array<CertChain>;
	}
	export interface ManagedCertificateAuthorityFormProperties {
	}
	export function CreateManagedCertificateAuthorityFormGroup() {
		return new FormGroup<ManagedCertificateAuthorityFormProperties>({
		});

	}


	/** A cluster instance. */
	export interface Cluster {

		/** Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. */
		authorizationMode?: ClusterAuthorizationMode | null;

		/** Output only. The timestamp associated with the cluster creation request. */
		createTime?: string | null;

		/** Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported. */
		discoveryEndpoints?: Array<DiscoveryEndpoint>;

		/** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` */
		name?: string | null;

		/** Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported. */
		pscConfigs?: Array<PscConfig>;

		/** Output only. PSC connections for discovery of the cluster topology and accessing the cluster. */
		pscConnections?: Array<PscConnection>;

		/**
		 * Optional. The number of replica nodes per shard.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount?: number | null;

		/**
		 * Required. Number of shards for the Redis cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shardCount?: number | null;

		/**
		 * Output only. Redis memory size in GB for the entire cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeGb?: number | null;

		/** Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED */
		state?: ClusterState | null;

		/** Represents additional information about the state of the cluster. */
		stateInfo?: StateInfo;

		/** Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster. */
		transitEncryptionMode?: ClusterTransitEncryptionMode | null;

		/** Output only. System assigned, unique identifier for the cluster. */
		uid?: string | null;
	}

	/** A cluster instance. */
	export interface ClusterFormProperties {

		/** Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. */
		authorizationMode: FormControl<ClusterAuthorizationMode | null | undefined>,

		/** Output only. The timestamp associated with the cluster creation request. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` */
		name: FormControl<string | null | undefined>,

		/**
		 * Optional. The number of replica nodes per shard.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount: FormControl<number | null | undefined>,

		/**
		 * Required. Number of shards for the Redis cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shardCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Redis memory size in GB for the entire cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeGb: FormControl<number | null | undefined>,

		/** Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED */
		state: FormControl<ClusterState | null | undefined>,

		/** Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster. */
		transitEncryptionMode: FormControl<ClusterTransitEncryptionMode | null | undefined>,

		/** Output only. System assigned, unique identifier for the cluster. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			authorizationMode: new FormControl<ClusterAuthorizationMode | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			shardCount: new FormControl<number | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<ClusterState | null | undefined>(undefined),
			transitEncryptionMode: new FormControl<ClusterTransitEncryptionMode | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterAuthorizationMode { AUTH_MODE_UNSPECIFIED = 'AUTH_MODE_UNSPECIFIED', AUTH_MODE_IAM_AUTH = 'AUTH_MODE_IAM_AUTH', AUTH_MODE_DISABLED = 'AUTH_MODE_DISABLED' }


	/** Endpoints on each network, for Redis clients to connect to the cluster. */
	export interface DiscoveryEndpoint {

		/** Output only. Address of the exposed Redis endpoint used by clients to connect to the service. The address could be either IP or hostname. */
		address?: string | null;

		/**
		 * Output only. The port number of the exposed Redis endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;
		pscConfig?: PscConfig;
	}

	/** Endpoints on each network, for Redis clients to connect to the cluster. */
	export interface DiscoveryEndpointFormProperties {

		/** Output only. Address of the exposed Redis endpoint used by clients to connect to the service. The address could be either IP or hostname. */
		address: FormControl<string | null | undefined>,

		/**
		 * Output only. The port number of the exposed Redis endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,
	}
	export function CreateDiscoveryEndpointFormGroup() {
		return new FormGroup<DiscoveryEndpointFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PscConfig {

		/** Required. The network where the IP address of the discovery endpoint will be reserved, in the form of projects/{network_project}/global/networks/{network_id}. */
		network?: string | null;
	}
	export interface PscConfigFormProperties {

		/** Required. The network where the IP address of the discovery endpoint will be reserved, in the form of projects/{network_project}/global/networks/{network_id}. */
		network: FormControl<string | null | undefined>,
	}
	export function CreatePscConfigFormGroup() {
		return new FormGroup<PscConfigFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of consumer resources in a PSC connection. */
	export interface PscConnection {

		/** Output only. The IP allocated on the consumer network for the PSC forwarding rule. */
		address?: string | null;

		/** Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}. */
		forwardingRule?: string | null;

		/** The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. */
		network?: string | null;

		/** Output only. The consumer project_id where the forwarding rule is created from. */
		projectId?: string | null;

		/** Output only. The PSC connection id of the forwarding rule connected to the service attachment. */
		pscConnectionId?: string | null;
	}

	/** Details of consumer resources in a PSC connection. */
	export interface PscConnectionFormProperties {

		/** Output only. The IP allocated on the consumer network for the PSC forwarding rule. */
		address: FormControl<string | null | undefined>,

		/** Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}. */
		forwardingRule: FormControl<string | null | undefined>,

		/** The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. */
		network: FormControl<string | null | undefined>,

		/** Output only. The consumer project_id where the forwarding rule is created from. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The PSC connection id of the forwarding rule connected to the service attachment. */
		pscConnectionId: FormControl<string | null | undefined>,
	}
	export function CreatePscConnectionFormGroup() {
		return new FormGroup<PscConnectionFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			forwardingRule: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			pscConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING' }


	/** Represents additional information about the state of the cluster. */
	export interface StateInfo {

		/** Represents information about an updating cluster. */
		updateInfo?: UpdateInfo;
	}

	/** Represents additional information about the state of the cluster. */
	export interface StateInfoFormProperties {
	}
	export function CreateStateInfoFormGroup() {
		return new FormGroup<StateInfoFormProperties>({
		});

	}


	/** Represents information about an updating cluster. */
	export interface UpdateInfo {

		/**
		 * Target number of replica nodes per shard.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetReplicaCount?: number | null;

		/**
		 * Target number of shards for redis cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetShardCount?: number | null;
	}

	/** Represents information about an updating cluster. */
	export interface UpdateInfoFormProperties {

		/**
		 * Target number of replica nodes per shard.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetReplicaCount: FormControl<number | null | undefined>,

		/**
		 * Target number of shards for redis cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetShardCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateInfoFormGroup() {
		return new FormGroup<UpdateInfoFormProperties>({
			targetReplicaCount: new FormControl<number | null | undefined>(undefined),
			targetShardCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ClusterTransitEncryptionMode { TRANSIT_ENCRYPTION_MODE_UNSPECIFIED = 'TRANSIT_ENCRYPTION_MODE_UNSPECIFIED', TRANSIT_ENCRYPTION_MODE_DISABLED = 'TRANSIT_ENCRYPTION_MODE_DISABLED', TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION = 'TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION' }


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


	/** Request for Export. */
	export interface ExportInstanceRequest {

		/** The output content */
		outputConfig?: OutputConfig;
	}

	/** Request for Export. */
	export interface ExportInstanceRequestFormProperties {
	}
	export function CreateExportInstanceRequestFormGroup() {
		return new FormGroup<ExportInstanceRequestFormProperties>({
		});

	}


	/** The output content */
	export interface OutputConfig {

		/** The Cloud Storage location for the output content */
		gcsDestination?: GcsDestination;
	}

	/** The output content */
	export interface OutputConfigFormProperties {
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
		});

	}


	/** The Cloud Storage location for the output content */
	export interface GcsDestination {

		/** Required. Data destination URI (e.g. 'gs://my_bucket/my_object'). Existing files will be overwritten. */
		uri?: string | null;
	}

	/** The Cloud Storage location for the output content */
	export interface GcsDestinationFormProperties {

		/** Required. Data destination URI (e.g. 'gs://my_bucket/my_object'). Existing files will be overwritten. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for Failover. */
	export interface FailoverInstanceRequest {

		/** Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default. */
		dataProtectionMode?: FailoverInstanceRequestDataProtectionMode | null;
	}

	/** Request for Failover. */
	export interface FailoverInstanceRequestFormProperties {

		/** Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default. */
		dataProtectionMode: FormControl<FailoverInstanceRequestDataProtectionMode | null | undefined>,
	}
	export function CreateFailoverInstanceRequestFormGroup() {
		return new FormGroup<FailoverInstanceRequestFormProperties>({
			dataProtectionMode: new FormControl<FailoverInstanceRequestDataProtectionMode | null | undefined>(undefined),
		});

	}

	export enum FailoverInstanceRequestDataProtectionMode { DATA_PROTECTION_MODE_UNSPECIFIED = 'DATA_PROTECTION_MODE_UNSPECIFIED', LIMITED_DATA_LOSS = 'LIMITED_DATA_LOSS', FORCE_DATA_LOSS = 'FORCE_DATA_LOSS' }


	/** The Cloud Storage location for the input content */
	export interface GcsSource {

		/** Required. Source data URI. (e.g. 'gs://my_bucket/my_object'). */
		uri?: string | null;
	}

	/** The Cloud Storage location for the input content */
	export interface GcsSourceFormProperties {

		/** Required. Source data URI. (e.g. 'gs://my_bucket/my_object'). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsSourceFormGroup() {
		return new FormGroup<GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudCommonOperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudCommonOperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudCommonOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudCommonOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This location metadata represents additional configuration options for a given location where a Redis instance may be created. All fields are output only. It is returned as content of the `google.cloud.location.Location.metadata` field. */
	export interface GoogleCloudRedisV1beta1LocationMetadata {

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
		availableZones?: {[id: string]: GoogleCloudRedisV1beta1ZoneMetadata };
	}

	/** This location metadata represents additional configuration options for a given location where a Redis instance may be created. All fields are output only. It is returned as content of the `google.cloud.location.Location.metadata` field. */
	export interface GoogleCloudRedisV1beta1LocationMetadataFormProperties {

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
		availableZones: FormControl<{[id: string]: GoogleCloudRedisV1beta1ZoneMetadata } | null | undefined>,
	}
	export function CreateGoogleCloudRedisV1beta1LocationMetadataFormGroup() {
		return new FormGroup<GoogleCloudRedisV1beta1LocationMetadataFormProperties>({
			availableZones: new FormControl<{[id: string]: GoogleCloudRedisV1beta1ZoneMetadata } | null | undefined>(undefined),
		});

	}


	/** Defines specific information for a particular zone. Currently empty and reserved for future use only. */
	export interface GoogleCloudRedisV1beta1ZoneMetadata {
	}

	/** Defines specific information for a particular zone. Currently empty and reserved for future use only. */
	export interface GoogleCloudRedisV1beta1ZoneMetadataFormProperties {
	}
	export function CreateGoogleCloudRedisV1beta1ZoneMetadataFormGroup() {
		return new FormGroup<GoogleCloudRedisV1beta1ZoneMetadataFormProperties>({
		});

	}


	/** Request for Import. */
	export interface ImportInstanceRequest {

		/** The input content */
		inputConfig?: InputConfig;
	}

	/** Request for Import. */
	export interface ImportInstanceRequestFormProperties {
	}
	export function CreateImportInstanceRequestFormGroup() {
		return new FormGroup<ImportInstanceRequestFormProperties>({
		});

	}


	/** The input content */
	export interface InputConfig {

		/** The Cloud Storage location for the input content */
		gcsSource?: GcsSource;
	}

	/** The input content */
	export interface InputConfigFormProperties {
	}
	export function CreateInputConfigFormGroup() {
		return new FormGroup<InputConfigFormProperties>({
		});

	}


	/** A Memorystore for Redis instance. */
	export interface Instance {

		/** Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service. */
		alternativeLocationId?: string | null;

		/** Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled. */
		authEnabled?: boolean | null;

		/** Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used. */
		authorizedNetwork?: string | null;

		/** Optional. The available maintenance versions that an instance could update to. */
		availableMaintenanceVersions?: Array<string>;

		/** Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING. */
		connectMode?: InstanceConnectMode | null;

		/** Output only. The time the instance was created. */
		createTime?: string | null;

		/** Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance. */
		currentLocationId?: string | null;

		/** Optional. The KMS key reference that the customer provides when trying to create the instance. */
		customerManagedKey?: string | null;

		/** An arbitrary and optional user-provided name for the instance. */
		displayName?: string | null;

		/** Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service. */
		host?: string | null;

		/** Resource labels to represent user provided metadata */
		labels?: {[id: string]: string };

		/** Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone. */
		locationId?: string | null;

		/** Maintenance policy for an instance. */
		maintenancePolicy?: MaintenancePolicy;

		/** Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated. */
		maintenanceSchedule?: MaintenanceSchedule;

		/** Optional. The self service update maintenance version. The version is date based such as "20210712_00_00". */
		maintenanceVersion?: string | null;

		/**
		 * Required. Redis memory size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memorySizeGb?: number | null;

		/** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details. */
		name?: string | null;

		/** Output only. Info per node. */
		nodes?: Array<NodeInfo>;

		/** Configuration of the persistence functionality. */
		persistenceConfig?: PersistenceConfig;

		/** Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation. */
		persistenceIamIdentity?: string | null;

		/**
		 * Output only. The port number of the exposed Redis endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'. */
		readEndpoint?: string | null;

		/**
		 * Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		readEndpointPort?: number | null;

		/** Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED. */
		readReplicasMode?: InstanceReadReplicasMode | null;

		/** Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries */
		redisConfigs?: {[id: string]: string };

		/** Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility */
		redisVersion?: string | null;

		/**
		 * Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount?: number | null;

		/** Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28. */
		reservedIpRange?: string | null;

		/** Optional. Output only. Reserved for future use. Zone Isolation compliance state of the instance. Field name and documentation is obfuscated according to go/per-resource-zi-bit-semantics. */
		satisfiesPzi?: boolean | null;

		/** Optional. Output only. Reserved for future use. Zone Separation compliance state of the instance. Field name and documentation is obfuscated according to go/zs-resource-status. */
		satisfiesPzs?: boolean | null;

		/** Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto". */
		secondaryIpRange?: string | null;

		/** Output only. List of server CA certificates for the instance. */
		serverCaCerts?: Array<TlsCertificate>;

		/** Output only. The current state of this instance. */
		state?: InstanceState | null;

		/** Output only. Additional information about the current status of this instance, if available. */
		statusMessage?: string | null;

		/** Optional. reasons that causes instance in "SUSPENDED" state. */
		suspensionReasons?: Array<string>;

		/** Required. The service tier of the instance. */
		tier?: InstanceTier | null;

		/** Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance. */
		transitEncryptionMode?: InstanceTransitEncryptionMode | null;
	}

	/** A Memorystore for Redis instance. */
	export interface InstanceFormProperties {

		/** Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service. */
		alternativeLocationId: FormControl<string | null | undefined>,

		/** Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled. */
		authEnabled: FormControl<boolean | null | undefined>,

		/** Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used. */
		authorizedNetwork: FormControl<string | null | undefined>,

		/** Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING. */
		connectMode: FormControl<InstanceConnectMode | null | undefined>,

		/** Output only. The time the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance. */
		currentLocationId: FormControl<string | null | undefined>,

		/** Optional. The KMS key reference that the customer provides when trying to create the instance. */
		customerManagedKey: FormControl<string | null | undefined>,

		/** An arbitrary and optional user-provided name for the instance. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service. */
		host: FormControl<string | null | undefined>,

		/** Resource labels to represent user provided metadata */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone. */
		locationId: FormControl<string | null | undefined>,

		/** Optional. The self service update maintenance version. The version is date based such as "20210712_00_00". */
		maintenanceVersion: FormControl<string | null | undefined>,

		/**
		 * Required. Redis memory size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memorySizeGb: FormControl<number | null | undefined>,

		/** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details. */
		name: FormControl<string | null | undefined>,

		/** Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation. */
		persistenceIamIdentity: FormControl<string | null | undefined>,

		/**
		 * Output only. The port number of the exposed Redis endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'. */
		readEndpoint: FormControl<string | null | undefined>,

		/**
		 * Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		readEndpointPort: FormControl<number | null | undefined>,

		/** Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED. */
		readReplicasMode: FormControl<InstanceReadReplicasMode | null | undefined>,

		/** Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries */
		redisConfigs: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility */
		redisVersion: FormControl<string | null | undefined>,

		/**
		 * Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount: FormControl<number | null | undefined>,

		/** Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28. */
		reservedIpRange: FormControl<string | null | undefined>,

		/** Optional. Output only. Reserved for future use. Zone Isolation compliance state of the instance. Field name and documentation is obfuscated according to go/per-resource-zi-bit-semantics. */
		satisfiesPzi: FormControl<boolean | null | undefined>,

		/** Optional. Output only. Reserved for future use. Zone Separation compliance state of the instance. Field name and documentation is obfuscated according to go/zs-resource-status. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto". */
		secondaryIpRange: FormControl<string | null | undefined>,

		/** Output only. The current state of this instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. Additional information about the current status of this instance, if available. */
		statusMessage: FormControl<string | null | undefined>,

		/** Required. The service tier of the instance. */
		tier: FormControl<InstanceTier | null | undefined>,

		/** Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance. */
		transitEncryptionMode: FormControl<InstanceTransitEncryptionMode | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			alternativeLocationId: new FormControl<string | null | undefined>(undefined),
			authEnabled: new FormControl<boolean | null | undefined>(undefined),
			authorizedNetwork: new FormControl<string | null | undefined>(undefined),
			connectMode: new FormControl<InstanceConnectMode | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			currentLocationId: new FormControl<string | null | undefined>(undefined),
			customerManagedKey: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			maintenanceVersion: new FormControl<string | null | undefined>(undefined),
			memorySizeGb: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			persistenceIamIdentity: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			readEndpoint: new FormControl<string | null | undefined>(undefined),
			readEndpointPort: new FormControl<number | null | undefined>(undefined),
			readReplicasMode: new FormControl<InstanceReadReplicasMode | null | undefined>(undefined),
			redisConfigs: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			redisVersion: new FormControl<string | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			reservedIpRange: new FormControl<string | null | undefined>(undefined),
			satisfiesPzi: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			secondaryIpRange: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<InstanceTier | null | undefined>(undefined),
			transitEncryptionMode: new FormControl<InstanceTransitEncryptionMode | null | undefined>(undefined),
		});

	}

	export enum InstanceConnectMode { CONNECT_MODE_UNSPECIFIED = 'CONNECT_MODE_UNSPECIFIED', DIRECT_PEERING = 'DIRECT_PEERING', PRIVATE_SERVICE_ACCESS = 'PRIVATE_SERVICE_ACCESS' }


	/** Maintenance policy for an instance. */
	export interface MaintenancePolicy {

		/** Output only. The time when the policy was created. */
		createTime?: string | null;

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description?: string | null;

		/** Output only. The time when the policy was last updated. */
		updateTime?: string | null;

		/** Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one. */
		weeklyMaintenanceWindow?: Array<WeeklyMaintenanceWindow>;
	}

	/** Maintenance policy for an instance. */
	export interface MaintenancePolicyFormProperties {

		/** Output only. The time when the policy was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description: FormControl<string | null | undefined>,

		/** Output only. The time when the policy was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenancePolicyFormGroup() {
		return new FormGroup<MaintenancePolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window. */
	export interface WeeklyMaintenanceWindow {

		/** Required. The day of week that maintenance updates occur. */
		day?: WeeklyMaintenanceWindowDay | null;

		/** Output only. Duration of the maintenance window. The current window is fixed at 1 hour. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window. */
	export interface WeeklyMaintenanceWindowFormProperties {

		/** Required. The day of week that maintenance updates occur. */
		day: FormControl<WeeklyMaintenanceWindowDay | null | undefined>,

		/** Output only. Duration of the maintenance window. The current window is fixed at 1 hour. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateWeeklyMaintenanceWindowFormGroup() {
		return new FormGroup<WeeklyMaintenanceWindowFormProperties>({
			day: new FormControl<WeeklyMaintenanceWindowDay | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WeeklyMaintenanceWindowDay { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated. */
	export interface MaintenanceSchedule {

		/** If the scheduled maintenance can be rescheduled, default is true. */
		canReschedule?: boolean | null;

		/** Output only. The end time of any upcoming scheduled maintenance for this instance. */
		endTime?: string | null;

		/** Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule. */
		scheduleDeadlineTime?: string | null;

		/** Output only. The start time of any upcoming scheduled maintenance for this instance. */
		startTime?: string | null;
	}

	/** Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated. */
	export interface MaintenanceScheduleFormProperties {

		/** If the scheduled maintenance can be rescheduled, default is true. */
		canReschedule: FormControl<boolean | null | undefined>,

		/** Output only. The end time of any upcoming scheduled maintenance for this instance. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule. */
		scheduleDeadlineTime: FormControl<string | null | undefined>,

		/** Output only. The start time of any upcoming scheduled maintenance for this instance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceScheduleFormGroup() {
		return new FormGroup<MaintenanceScheduleFormProperties>({
			canReschedule: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			scheduleDeadlineTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node specific properties. */
	export interface NodeInfo {

		/** Output only. Node identifying string. e.g. 'node-0', 'node-1' */
		id?: string | null;

		/** Output only. Location of the node. */
		zone?: string | null;
	}

	/** Node specific properties. */
	export interface NodeInfoFormProperties {

		/** Output only. Node identifying string. e.g. 'node-0', 'node-1' */
		id: FormControl<string | null | undefined>,

		/** Output only. Location of the node. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateNodeInfoFormGroup() {
		return new FormGroup<NodeInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of the persistence functionality. */
	export interface PersistenceConfig {

		/** Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. */
		persistenceMode?: PersistenceConfigPersistenceMode | null;

		/** Output only. The next time that a snapshot attempt is scheduled to occur. */
		rdbNextSnapshotTime?: string | null;

		/** Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default. */
		rdbSnapshotPeriod?: PersistenceConfigRdbSnapshotPeriod | null;

		/** Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used. */
		rdbSnapshotStartTime?: string | null;
	}

	/** Configuration of the persistence functionality. */
	export interface PersistenceConfigFormProperties {

		/** Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. */
		persistenceMode: FormControl<PersistenceConfigPersistenceMode | null | undefined>,

		/** Output only. The next time that a snapshot attempt is scheduled to occur. */
		rdbNextSnapshotTime: FormControl<string | null | undefined>,

		/** Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default. */
		rdbSnapshotPeriod: FormControl<PersistenceConfigRdbSnapshotPeriod | null | undefined>,

		/** Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used. */
		rdbSnapshotStartTime: FormControl<string | null | undefined>,
	}
	export function CreatePersistenceConfigFormGroup() {
		return new FormGroup<PersistenceConfigFormProperties>({
			persistenceMode: new FormControl<PersistenceConfigPersistenceMode | null | undefined>(undefined),
			rdbNextSnapshotTime: new FormControl<string | null | undefined>(undefined),
			rdbSnapshotPeriod: new FormControl<PersistenceConfigRdbSnapshotPeriod | null | undefined>(undefined),
			rdbSnapshotStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PersistenceConfigPersistenceMode { PERSISTENCE_MODE_UNSPECIFIED = 'PERSISTENCE_MODE_UNSPECIFIED', DISABLED = 'DISABLED', RDB = 'RDB' }

	export enum PersistenceConfigRdbSnapshotPeriod { SNAPSHOT_PERIOD_UNSPECIFIED = 'SNAPSHOT_PERIOD_UNSPECIFIED', ONE_HOUR = 'ONE_HOUR', SIX_HOURS = 'SIX_HOURS', TWELVE_HOURS = 'TWELVE_HOURS', TWENTY_FOUR_HOURS = 'TWENTY_FOUR_HOURS' }

	export enum InstanceReadReplicasMode { READ_REPLICAS_MODE_UNSPECIFIED = 'READ_REPLICAS_MODE_UNSPECIFIED', READ_REPLICAS_DISABLED = 'READ_REPLICAS_DISABLED', READ_REPLICAS_ENABLED = 'READ_REPLICAS_ENABLED' }


	/** TlsCertificate Resource */
	export interface TlsCertificate {

		/** PEM representation. */
		cert?: string | null;

		/** Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`. */
		createTime?: string | null;

		/** Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`. */
		expireTime?: string | null;

		/** Serial number, as extracted from the certificate. */
		serialNumber?: string | null;

		/** Sha1 Fingerprint of the certificate. */
		sha1Fingerprint?: string | null;
	}

	/** TlsCertificate Resource */
	export interface TlsCertificateFormProperties {

		/** PEM representation. */
		cert: FormControl<string | null | undefined>,

		/** Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`. */
		expireTime: FormControl<string | null | undefined>,

		/** Serial number, as extracted from the certificate. */
		serialNumber: FormControl<string | null | undefined>,

		/** Sha1 Fingerprint of the certificate. */
		sha1Fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateTlsCertificateFormGroup() {
		return new FormGroup<TlsCertificateFormProperties>({
			cert: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			sha1Fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', UPDATING = 'UPDATING', DELETING = 'DELETING', REPAIRING = 'REPAIRING', MAINTENANCE = 'MAINTENANCE', IMPORTING = 'IMPORTING', FAILING_OVER = 'FAILING_OVER' }

	export enum InstanceTier { TIER_UNSPECIFIED = 'TIER_UNSPECIFIED', BASIC = 'BASIC', STANDARD_HA = 'STANDARD_HA' }

	export enum InstanceTransitEncryptionMode { TRANSIT_ENCRYPTION_MODE_UNSPECIFIED = 'TRANSIT_ENCRYPTION_MODE_UNSPECIFIED', SERVER_AUTHENTICATION = 'SERVER_AUTHENTICATION', DISABLED = 'DISABLED' }


	/** Instance AUTH string details. */
	export interface InstanceAuthString {

		/** AUTH string set on the instance. */
		authString?: string | null;
	}

	/** Instance AUTH string details. */
	export interface InstanceAuthStringFormProperties {

		/** AUTH string set on the instance. */
		authString: FormControl<string | null | undefined>,
	}
	export function CreateInstanceAuthStringFormGroup() {
		return new FormGroup<InstanceAuthStringFormProperties>({
			authString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListClusters. */
	export interface ListClustersResponse {

		/** A list of Redis clusters in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the `name` field set to a value of the form `projects/{project_id}/locations/{location_id}/clusters/`- and the `status` field set to ERROR and `status_message` field set to "location not available for ListClusters". */
		clusters?: Array<Cluster>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListClusters. */
	export interface ListClustersResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListInstances. */
	export interface ListInstancesResponse {

		/** A list of Redis instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the `name` field set to a value of the form `projects/{project_id}/locations/{location_id}/instances/`- and the `status` field set to ERROR and `status_message` field set to "location not available for ListInstances". */
		instances?: Array<Instance>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListInstances. */
	export interface ListInstancesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
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

		/** Resource ID for the region. For example: "us-east1". */
		locationId?: string | null;

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
		metadata?: {[id: string]: any };

		/** Full resource name for the region. For example: "projects/example-project/locations/us-east1". */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource ID for the region. For example: "us-east1". */
		locationId: FormControl<string | null | undefined>,

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Full resource name for the region. For example: "projects/example-project/locations/us-east1". */
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

		/** { `createTime`: The time the operation was created. `endTime`: The time the operation finished running. `target`: Server-defined resource path for the target of the operation. `verb`: Name of the verb executed by the operation. `statusDetail`: Human-readable status of the operation, if any. `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. `apiVersion`: API version used to start the operation. } */
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

		/** { `createTime`: The time the operation was created. `endTime`: The time the operation finished running. `target`: Server-defined resource path for the target of the operation. `verb`: Name of the verb executed by the operation. `statusDetail`: Human-readable status of the operation, if any. `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. `apiVersion`: API version used to start the operation. } */
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

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** Pre-defined metadata fields. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Pre-defined metadata fields. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation metadata returned by the CLH during resource state reconciliation. */
	export interface ReconciliationOperationMetadata {

		/** DEPRECATED. Use exclusive_action instead. */
		deleteResource?: boolean | null;

		/** Excluisive action returned by the CLH. */
		exclusiveAction?: ReconciliationOperationMetadataExclusiveAction | null;
	}

	/** Operation metadata returned by the CLH during resource state reconciliation. */
	export interface ReconciliationOperationMetadataFormProperties {

		/** DEPRECATED. Use exclusive_action instead. */
		deleteResource: FormControl<boolean | null | undefined>,

		/** Excluisive action returned by the CLH. */
		exclusiveAction: FormControl<ReconciliationOperationMetadataExclusiveAction | null | undefined>,
	}
	export function CreateReconciliationOperationMetadataFormGroup() {
		return new FormGroup<ReconciliationOperationMetadataFormProperties>({
			deleteResource: new FormControl<boolean | null | undefined>(undefined),
			exclusiveAction: new FormControl<ReconciliationOperationMetadataExclusiveAction | null | undefined>(undefined),
		});

	}

	export enum ReconciliationOperationMetadataExclusiveAction { UNKNOWN_REPAIR_ACTION = 'UNKNOWN_REPAIR_ACTION', DELETE = 'DELETE', RETRY = 'RETRY' }


	/** Request for RescheduleMaintenance. */
	export interface RescheduleMaintenanceRequest {

		/** Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well. */
		rescheduleType?: RescheduleMaintenanceRequestRescheduleType | null;

		/** Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`. */
		scheduleTime?: string | null;
	}

	/** Request for RescheduleMaintenance. */
	export interface RescheduleMaintenanceRequestFormProperties {

		/** Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well. */
		rescheduleType: FormControl<RescheduleMaintenanceRequestRescheduleType | null | undefined>,

		/** Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`. */
		scheduleTime: FormControl<string | null | undefined>,
	}
	export function CreateRescheduleMaintenanceRequestFormGroup() {
		return new FormGroup<RescheduleMaintenanceRequestFormProperties>({
			rescheduleType: new FormControl<RescheduleMaintenanceRequestRescheduleType | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RescheduleMaintenanceRequestRescheduleType { RESCHEDULE_TYPE_UNSPECIFIED = 'RESCHEDULE_TYPE_UNSPECIFIED', IMMEDIATE = 'IMMEDIATE', NEXT_AVAILABLE_WINDOW = 'NEXT_AVAILABLE_WINDOW', SPECIFIC_TIME = 'SPECIFIC_TIME' }


	/** Request for UpgradeInstance. */
	export interface UpgradeInstanceRequest {

		/** Required. Specifies the target version of Redis software to upgrade to. */
		redisVersion?: string | null;
	}

	/** Request for UpgradeInstance. */
	export interface UpgradeInstanceRequestFormProperties {

		/** Required. Specifies the target version of Redis software to upgrade to. */
		redisVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeInstanceRequestFormGroup() {
		return new FormGroup<UpgradeInstanceRequestFormProperties>({
			redisVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} requestId Idempotent request UUID.
		 * @return {Empty} Successful response
		 */
		Redis_projects_locations_operations_delete(name: string, requestId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
		 * Patch v1beta1/{name}
		 * @param {string} name Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.
		 * @param {string} updateMask Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance: * `displayName` * `labels` * `memorySizeGb` * `redisConfig` * `replica_count`
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_instances_patch(name: string, updateMask: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
		 * Get v1beta1/{name}/authString
		 * @param {string} name Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
		 * @return {InstanceAuthString} Successful response
		 */
		Redis_projects_locations_instances_getAuthString(name: string): Observable<InstanceAuthString> {
			return this.http.get<InstanceAuthString>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/authString', {});
		}

		/**
		 * Gets the details of certificate authority information for Redis cluster.
		 * Get v1beta1/{name}/certificateAuthority
		 * @param {string} name Required. Redis cluster certificate authority resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}/certificateAuthority` where `location_id` refers to a GCP region.
		 * @return {CertificateAuthority} Successful response
		 */
		Redis_projects_locations_clusters_getCertificateAuthority(name: string): Observable<CertificateAuthority> {
			return this.http.get<CertificateAuthority>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/certificateAuthority', {});
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Redis_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Redis_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1beta1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Redis_projects_locations_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
		 * Post v1beta1/{name}:export
		 * @param {string} name Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_instances_export(name: string, requestBody: ExportInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
		 * Post v1beta1/{name}:failover
		 * @param {string} name Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_instances_failover(name: string, requestBody: FailoverInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':failover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
		 * Post v1beta1/{name}:import
		 * @param {string} name Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_instances_import(name: string, requestBody: ImportInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reschedule maintenance for a given instance in a given project and location.
		 * Post v1beta1/{name}:rescheduleMaintenance
		 * @param {string} name Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_instances_rescheduleMaintenance(name: string, requestBody: RescheduleMaintenanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':rescheduleMaintenance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upgrades Redis instance to the newer Redis version specified in the request.
		 * Post v1beta1/{name}:upgrade
		 * @param {string} name Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_instances_upgrade(name: string, requestBody: UpgradeInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':upgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
		 * Get v1beta1/{parent}/clusters
		 * @param {string} parent Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
		 * @param {number} pageSize The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The `next_page_token` value returned from a previous ListClusters request, if any.
		 * @return {ListClustersResponse} Successful response
		 */
		Redis_projects_locations_clusters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
		 * Post v1beta1/{parent}/clusters
		 * @param {string} parent Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
		 * @param {string} clusterId Required. The logical name of the Redis cluster in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the customer project / location
		 * @param {string} requestId Idempotent request UUID.
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_clusters_create(parent: string, clusterId: string | null | undefined, requestId: string | null | undefined, requestBody: Cluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
		 * Get v1beta1/{parent}/instances
		 * @param {string} parent Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
		 * @param {number} pageSize The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The `next_page_token` value returned from a previous ListInstances request, if any.
		 * @return {ListInstancesResponse} Successful response
		 */
		Redis_projects_locations_instances_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
		 * Post v1beta1/{parent}/instances
		 * @param {string} parent Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
		 * @param {string} instanceId Required. The logical name of the Redis instance in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location
		 * @return {Operation} Successful response
		 */
		Redis_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

