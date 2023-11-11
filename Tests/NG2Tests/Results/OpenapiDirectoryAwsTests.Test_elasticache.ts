import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations. */
	export interface TagListMessage {
		TagList?: Array<Tag> | null;
	}


	/** A cost allocation Tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. A tag with a null Value is permitted. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	export interface CacheClusterNotFoundFault {
	}

	export interface SnapshotNotFoundFault {
	}

	export interface TagQuotaPerResourceExceeded {
	}

	export interface InvalidARNFault {
	}

	export interface AuthorizeCacheSecurityGroupIngressResult {

		/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul> */
		CacheSecurityGroup?: CacheSecurityGroup | null;
	}


	/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul> */
	export interface CacheSecurityGroup {
		OwnerId?: string | null;
		CacheSecurityGroupName?: string | null;
		Description?: string | null;
		EC2SecurityGroups?: Array<EC2SecurityGroup> | null;
		ARN?: string | null;
	}


	/** Provides ownership and status information for an Amazon EC2 security group. */
	export interface EC2SecurityGroup {
		Status?: string | null;
		EC2SecurityGroupName?: string | null;
		EC2SecurityGroupOwnerId?: string | null;
	}

	export interface CacheSecurityGroupNotFoundFault {
	}

	export interface InvalidCacheSecurityGroupStateFault {
	}

	export interface AuthorizationAlreadyExistsFault {
	}

	export interface InvalidParameterValueException {
	}

	export interface InvalidParameterCombinationException {
	}

	export interface UpdateActionResultsMessage {
		ProcessedUpdateActions?: Array<ProcessedUpdateAction> | null;
		UnprocessedUpdateActions?: Array<UnprocessedUpdateAction> | null;
	}


	/** Update action that has been processed for the corresponding apply/stop request */
	export interface ProcessedUpdateAction {
		ReplicationGroupId?: string | null;
		CacheClusterId?: string | null;
		ServiceUpdateName?: string | null;
		UpdateActionStatus?: ProcessedUpdateActionUpdateActionStatus | null;
	}

	export enum ProcessedUpdateActionUpdateActionStatus { not_applied = 0, waiting_to_start = 1, in_progress = 2, stopping = 3, stopped = 4, complete = 5, scheduling = 6, scheduled = 7, not_applicable = 8 }


	/** Update action that has failed to be processed for the corresponding apply/stop request */
	export interface UnprocessedUpdateAction {
		ReplicationGroupId?: string | null;
		CacheClusterId?: string | null;
		ServiceUpdateName?: string | null;
		ErrorType?: string | null;
		ErrorMessage?: string | null;
	}

	export interface ServiceUpdateNotFoundFault {
	}

	export interface CompleteMigrationResponse {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}


	/** Contains all of the attributes of a specific Redis replication group. */
	export interface ReplicationGroup {
		ReplicationGroupId?: string | null;
		Description?: string | null;

		/** The name of the Global Datastore and role of this replication group in the Global Datastore. */
		GlobalReplicationGroupInfo?: GlobalReplicationGroupInfo | null;
		Status?: string | null;

		/** The settings to be applied to the Redis replication group, either immediately or during the next maintenance window. */
		PendingModifiedValues?: ReplicationGroupPendingModifiedValues | null;
		MemberClusters?: Array<string> | null;
		NodeGroups?: Array<NodeGroup> | null;
		SnapshottingClusterId?: string | null;
		AutomaticFailover?: ReplicationGroupAutomaticFailover | null;
		MultiAZ?: ReplicationGroupPendingModifiedValuesAutomaticFailoverStatus | null;

		/** Represents the information required for client programs to connect to a cache node. */
		ConfigurationEndpoint?: Endpoint | null;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string | null;
		ClusterEnabled?: boolean | null;
		CacheNodeType?: string | null;
		AuthTokenEnabled?: boolean | null;
		AuthTokenLastModifiedDate?: Date | null;
		TransitEncryptionEnabled?: boolean | null;
		AtRestEncryptionEnabled?: boolean | null;
		KmsKeyId?: string | null;
		ARN?: string | null;
	}


	/** The name of the Global Datastore and role of this replication group in the Global Datastore. */
	export interface GlobalReplicationGroupInfo {
		GlobalReplicationGroupId?: string | null;
		GlobalReplicationGroupMemberRole?: string | null;
	}


	/** The settings to be applied to the Redis replication group, either immediately or during the next maintenance window. */
	export interface ReplicationGroupPendingModifiedValues {
		PrimaryClusterId?: string | null;
		AutomaticFailoverStatus?: ReplicationGroupPendingModifiedValuesAutomaticFailoverStatus | null;

		/** The status of an online resharding operation. */
		Resharding?: ReshardingStatus | null;
		AuthTokenStatus?: ReplicationGroupPendingModifiedValuesAuthTokenStatus | null;
	}

	export enum ReplicationGroupPendingModifiedValuesAutomaticFailoverStatus { enabled = 0, disabled = 1 }


	/** The status of an online resharding operation. */
	export interface ReshardingStatus {

		/** Represents the progress of an online resharding operation. */
		SlotMigration?: SlotMigration | null;
	}


	/** Represents the progress of an online resharding operation. */
	export interface SlotMigration {
		ProgressPercentage?: number | null;
	}

	export enum ReplicationGroupPendingModifiedValuesAuthTokenStatus { SETTING = 0, ROTATING = 1 }


	/** Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes. */
	export interface NodeGroup {
		NodeGroupId?: string | null;
		Status?: string | null;

		/** Represents the information required for client programs to connect to a cache node. */
		PrimaryEndpoint?: Endpoint | null;

		/** Represents the information required for client programs to connect to a cache node. */
		ReaderEndpoint?: Endpoint | null;
		Slots?: string | null;
		NodeGroupMembers?: Array<NodeGroupMember> | null;
	}


	/** Represents the information required for client programs to connect to a cache node. */
	export interface Endpoint {
		Address?: string | null;
		Port?: number | null;
	}


	/** Represents a single node within a node group (shard). */
	export interface NodeGroupMember {
		CacheClusterId?: string | null;
		CacheNodeId?: string | null;

		/** Represents the information required for client programs to connect to a cache node. */
		ReadEndpoint?: Endpoint | null;
		PreferredAvailabilityZone?: string | null;
		CurrentRole?: string | null;
	}

	export enum ReplicationGroupAutomaticFailover { enabled = 0, disabled = 1, enabling = 2, disabling = 3 }

	export interface ReplicationGroupNotFoundFault {
	}

	export interface InvalidReplicationGroupStateFault {
	}

	export interface ReplicationGroupNotUnderMigrationFault {
	}

	export interface CopySnapshotResult {

		/** Represents a copy of an entire Redis cluster as of the time when the snapshot was taken. */
		Snapshot?: Snapshot | null;
	}


	/** Represents a copy of an entire Redis cluster as of the time when the snapshot was taken. */
	export interface Snapshot {
		SnapshotName?: string | null;
		ReplicationGroupId?: string | null;
		ReplicationGroupDescription?: string | null;
		CacheClusterId?: string | null;
		SnapshotStatus?: string | null;
		SnapshotSource?: string | null;
		CacheNodeType?: string | null;
		Engine?: string | null;
		EngineVersion?: string | null;
		NumCacheNodes?: number | null;
		PreferredAvailabilityZone?: string | null;
		CacheClusterCreateTime?: Date | null;
		PreferredMaintenanceWindow?: string | null;
		TopicArn?: string | null;
		Port?: number | null;
		CacheParameterGroupName?: string | null;
		CacheSubnetGroupName?: string | null;
		VpcId?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string | null;
		NumNodeGroups?: number | null;
		AutomaticFailover?: ReplicationGroupAutomaticFailover | null;
		NodeSnapshots?: Array<NodeSnapshot> | null;
		KmsKeyId?: string | null;
		ARN?: string | null;
	}


	/** Represents an individual cache node in a snapshot of a cluster. */
	export interface NodeSnapshot {
		CacheClusterId?: string | null;
		NodeGroupId?: string | null;
		CacheNodeId?: string | null;

		/** Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>. */
		NodeGroupConfiguration?: NodeGroupConfiguration | null;
		CacheSize?: string | null;
		CacheNodeCreateTime?: Date | null;
		SnapshotCreateTime?: Date | null;
	}


	/** Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>. */
	export interface NodeGroupConfiguration {
		NodeGroupId?: string | null;
		Slots?: string | null;
		ReplicaCount?: number | null;
		PrimaryAvailabilityZone?: string | null;
		ReplicaAvailabilityZones?: Array<string> | null;
	}

	export interface SnapshotAlreadyExistsFault {
	}

	export interface SnapshotQuotaExceededFault {
	}

	export interface InvalidSnapshotStateFault {
	}

	export interface CreateCacheClusterResult {

		/** Contains all of the attributes of a specific cluster. */
		CacheCluster?: CacheCluster | null;
	}


	/** Contains all of the attributes of a specific cluster. */
	export interface CacheCluster {
		CacheClusterId?: string | null;

		/** Represents the information required for client programs to connect to a cache node. */
		ConfigurationEndpoint?: Endpoint | null;
		ClientDownloadLandingPage?: string | null;
		CacheNodeType?: string | null;
		Engine?: string | null;
		EngineVersion?: string | null;
		CacheClusterStatus?: string | null;
		NumCacheNodes?: number | null;
		PreferredAvailabilityZone?: string | null;
		CacheClusterCreateTime?: Date | null;
		PreferredMaintenanceWindow?: string | null;

		/** A group of settings that are applied to the cluster in the future, or that are currently being applied. */
		PendingModifiedValues?: PendingModifiedValues | null;

		/** Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). */
		NotificationConfiguration?: NotificationConfiguration | null;
		CacheSecurityGroups?: Array<CacheSecurityGroupMembership> | null;

		/** Status of the cache parameter group. */
		CacheParameterGroup?: CacheParameterGroupStatus | null;
		CacheSubnetGroupName?: string | null;
		CacheNodes?: Array<CacheNode> | null;
		AutoMinorVersionUpgrade?: boolean | null;
		SecurityGroups?: Array<SecurityGroupMembership> | null;
		ReplicationGroupId?: string | null;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string | null;
		AuthTokenEnabled?: boolean | null;
		AuthTokenLastModifiedDate?: Date | null;
		TransitEncryptionEnabled?: boolean | null;
		AtRestEncryptionEnabled?: boolean | null;
		ARN?: string | null;
	}


	/** A group of settings that are applied to the cluster in the future, or that are currently being applied. */
	export interface PendingModifiedValues {
		NumCacheNodes?: number | null;
		CacheNodeIdsToRemove?: Array<string> | null;
		EngineVersion?: string | null;
		CacheNodeType?: string | null;
		AuthTokenStatus?: ReplicationGroupPendingModifiedValuesAuthTokenStatus | null;
	}


	/** Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). */
	export interface NotificationConfiguration {
		TopicArn?: string | null;
		TopicStatus?: string | null;
	}


	/** Represents a cluster's status within a particular cache security group. */
	export interface CacheSecurityGroupMembership {
		CacheSecurityGroupName?: string | null;
		Status?: string | null;
	}


	/** Status of the cache parameter group. */
	export interface CacheParameterGroupStatus {
		CacheParameterGroupName?: string | null;
		ParameterApplyStatus?: string | null;
		CacheNodeIdsToReboot?: Array<string> | null;
	}


	/** <p>Represents an individual cache node within a cluster. Each cache node runs its own instance of the cluster's protocol-compliant caching software - either Memcached or Redis.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul> */
	export interface CacheNode {
		CacheNodeId?: string | null;
		CacheNodeStatus?: string | null;
		CacheNodeCreateTime?: Date | null;

		/** Represents the information required for client programs to connect to a cache node. */
		Endpoint?: Endpoint | null;
		ParameterGroupStatus?: string | null;
		SourceCacheNodeId?: string | null;
		CustomerAvailabilityZone?: string | null;
	}


	/** Represents a single cache security group and its status. */
	export interface SecurityGroupMembership {
		SecurityGroupId?: string | null;
		Status?: string | null;
	}

	export interface CacheClusterAlreadyExistsFault {
	}

	export interface InsufficientCacheClusterCapacityFault {
	}

	export interface CacheSubnetGroupNotFoundFault {
	}

	export interface ClusterQuotaForCustomerExceededFault {
	}

	export interface NodeQuotaForClusterExceededFault {
	}

	export interface NodeQuotaForCustomerExceededFault {
	}

	export interface CacheParameterGroupNotFoundFault {
	}

	export interface InvalidVPCNetworkStateFault {
	}

	export interface CreateCacheParameterGroupResult {

		/** Represents the output of a <code>CreateCacheParameterGroup</code> operation. */
		CacheParameterGroup?: CacheParameterGroup | null;
	}


	/** Represents the output of a <code>CreateCacheParameterGroup</code> operation. */
	export interface CacheParameterGroup {
		CacheParameterGroupName?: string | null;
		CacheParameterGroupFamily?: string | null;
		Description?: string | null;
		IsGlobal?: boolean | null;
		ARN?: string | null;
	}

	export interface CacheParameterGroupQuotaExceededFault {
	}

	export interface CacheParameterGroupAlreadyExistsFault {
	}

	export interface InvalidCacheParameterGroupStateFault {
	}

	export interface CreateCacheSecurityGroupResult {

		/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul> */
		CacheSecurityGroup?: CacheSecurityGroup | null;
	}

	export interface CacheSecurityGroupAlreadyExistsFault {
	}

	export interface CacheSecurityGroupQuotaExceededFault {
	}

	export interface CreateCacheSubnetGroupResult {

		/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul> */
		CacheSubnetGroup?: CacheSubnetGroup | null;
	}


	/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul> */
	export interface CacheSubnetGroup {
		CacheSubnetGroupName?: string | null;
		CacheSubnetGroupDescription?: string | null;
		VpcId?: string | null;
		Subnets?: Array<Subnet> | null;
		ARN?: string | null;
	}


	/** Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache. */
	export interface Subnet {
		SubnetIdentifier?: string | null;

		/** Describes an Availability Zone in which the cluster is launched. */
		SubnetAvailabilityZone?: AvailabilityZone | null;
	}


	/** Describes an Availability Zone in which the cluster is launched. */
	export interface AvailabilityZone {
		Name?: string | null;
	}

	export interface CacheSubnetGroupAlreadyExistsFault {
	}

	export interface CacheSubnetGroupQuotaExceededFault {
	}

	export interface CacheSubnetQuotaExceededFault {
	}

	export interface InvalidSubnet {
	}

	export interface CreateGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}


	/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
	export interface GlobalReplicationGroup {
		GlobalReplicationGroupId?: string | null;
		GlobalReplicationGroupDescription?: string | null;
		Status?: string | null;
		CacheNodeType?: string | null;
		Engine?: string | null;
		EngineVersion?: string | null;
		Members?: Array<GlobalReplicationGroupMember> | null;
		ClusterEnabled?: boolean | null;
		GlobalNodeGroups?: Array<GlobalNodeGroup> | null;
		AuthTokenEnabled?: boolean | null;
		TransitEncryptionEnabled?: boolean | null;
		AtRestEncryptionEnabled?: boolean | null;
		ARN?: string | null;
	}


	/** A member of a Global Datastore. It contains the Replication Group Id, the AWS region and the role of the replication group.  */
	export interface GlobalReplicationGroupMember {
		ReplicationGroupId?: string | null;
		ReplicationGroupRegion?: string | null;
		Role?: string | null;
		AutomaticFailover?: ReplicationGroupAutomaticFailover | null;
		Status?: string | null;
	}


	/** Indicates the slot configuration and global identifier for a slice group. */
	export interface GlobalNodeGroup {
		GlobalNodeGroupId?: string | null;
		Slots?: string | null;
	}

	export interface GlobalReplicationGroupAlreadyExistsFault {
	}

	export interface ServiceLinkedRoleNotFoundFault {
	}

	export interface CreateReplicationGroupResult {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}

	export interface InvalidCacheClusterStateFault {
	}

	export interface ReplicationGroupAlreadyExistsFault {
	}

	export interface NodeGroupsPerReplicationGroupQuotaExceededFault {
	}

	export interface GlobalReplicationGroupNotFoundFault {
	}

	export interface InvalidGlobalReplicationGroupStateFault {
	}

	export interface CreateSnapshotResult {

		/** Represents a copy of an entire Redis cluster as of the time when the snapshot was taken. */
		Snapshot?: Snapshot | null;
	}

	export interface SnapshotFeatureNotSupportedFault {
	}

	export interface DecreaseNodeGroupsInGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}

	export interface DecreaseReplicaCountResult {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}


	/** Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones.  */
	export interface ConfigureShard {
		NodeGroupId: string;
		NewReplicaCount: number;
		PreferredAvailabilityZones?: Array<string> | null;
	}

	export interface NoOperationFault {
	}

	export interface DeleteCacheClusterResult {

		/** Contains all of the attributes of a specific cluster. */
		CacheCluster?: CacheCluster | null;
	}

	export interface CacheSubnetGroupInUse {
	}

	export interface DeleteGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}

	export interface DeleteReplicationGroupResult {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}

	export interface DeleteSnapshotResult {

		/** Represents a copy of an entire Redis cluster as of the time when the snapshot was taken. */
		Snapshot?: Snapshot | null;
	}


	/** Represents the output of a <code>DescribeCacheClusters</code> operation. */
	export interface CacheClusterMessage {
		Marker?: string | null;
		CacheClusters?: Array<CacheCluster> | null;
	}


	/** Represents the output of a <a>DescribeCacheEngineVersions</a> operation. */
	export interface CacheEngineVersionMessage {
		Marker?: string | null;
		CacheEngineVersions?: Array<CacheEngineVersion> | null;
	}


	/** Provides all of the details about a particular cache engine version. */
	export interface CacheEngineVersion {
		Engine?: string | null;
		EngineVersion?: string | null;
		CacheParameterGroupFamily?: string | null;
		CacheEngineDescription?: string | null;
		CacheEngineVersionDescription?: string | null;
	}


	/** Represents the output of a <code>DescribeCacheParameterGroups</code> operation. */
	export interface CacheParameterGroupsMessage {
		Marker?: string | null;
		CacheParameterGroups?: Array<CacheParameterGroup> | null;
	}


	/** Represents the output of a <code>DescribeCacheParameters</code> operation. */
	export interface CacheParameterGroupDetails {
		Marker?: string | null;
		Parameters?: Array<Parameter> | null;
		CacheNodeTypeSpecificParameters?: Array<CacheNodeTypeSpecificParameter> | null;
	}


	/** Describes an individual setting that controls some aspect of ElastiCache behavior. */
	export interface Parameter {
		ParameterName?: string | null;
		ParameterValue?: string | null;
		Description?: string | null;
		Source?: string | null;
		DataType?: string | null;
		AllowedValues?: string | null;
		IsModifiable?: boolean | null;
		MinimumEngineVersion?: string | null;
		ChangeType?: ParameterChangeType | null;
	}

	export enum ParameterChangeType { immediate = 0, requires_reboot = 1 }


	/** A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type. */
	export interface CacheNodeTypeSpecificParameter {
		ParameterName?: string | null;
		Description?: string | null;
		Source?: string | null;
		DataType?: string | null;
		AllowedValues?: string | null;
		IsModifiable?: boolean | null;
		MinimumEngineVersion?: string | null;
		CacheNodeTypeSpecificValues?: Array<CacheNodeTypeSpecificValue> | null;
		ChangeType?: CacheNodeTypeSpecificParameterChangeType | null;
	}


	/** A value that applies only to a certain cache node type. */
	export interface CacheNodeTypeSpecificValue {
		CacheNodeType?: string | null;
		Value?: string | null;
	}

	export enum CacheNodeTypeSpecificParameterChangeType { immediate = 0, requires_reboot = 1 }


	/** Represents the output of a <code>DescribeCacheSecurityGroups</code> operation. */
	export interface CacheSecurityGroupMessage {
		Marker?: string | null;
		CacheSecurityGroups?: Array<CacheSecurityGroup> | null;
	}


	/** Represents the output of a <code>DescribeCacheSubnetGroups</code> operation. */
	export interface CacheSubnetGroupMessage {
		Marker?: string | null;
		CacheSubnetGroups?: Array<CacheSubnetGroup> | null;
	}

	export interface DescribeEngineDefaultParametersResult {

		/** Represents the output of a <code>DescribeEngineDefaultParameters</code> operation. */
		EngineDefaults?: EngineDefaults | null;
	}


	/** Represents the output of a <code>DescribeEngineDefaultParameters</code> operation. */
	export interface EngineDefaults {
		CacheParameterGroupFamily?: string | null;
		Marker?: string | null;
		Parameters?: Array<Parameter> | null;
		CacheNodeTypeSpecificParameters?: Array<CacheNodeTypeSpecificParameter> | null;
	}


	/** Represents the output of a <code>DescribeEvents</code> operation. */
	export interface EventsMessage {
		Marker?: string | null;
		Events?: Array<Event> | null;
	}


	/** Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node. */
	export interface Event {
		SourceIdentifier?: string | null;
		SourceType?: EventSourceType | null;
		Message?: string | null;
		Date?: Date | null;
	}

	export enum EventSourceType { cache_cluster = 0, cache_parameter_group = 1, cache_security_group = 2, cache_subnet_group = 3, replication_group = 4 }

	export interface DescribeGlobalReplicationGroupsResult {
		Marker?: string | null;
		GlobalReplicationGroups?: Array<GlobalReplicationGroup> | null;
	}


	/** Represents the output of a <code>DescribeReplicationGroups</code> operation. */
	export interface ReplicationGroupMessage {
		Marker?: string | null;
		ReplicationGroups?: Array<ReplicationGroup> | null;
	}


	/** Represents the output of a <code>DescribeReservedCacheNodes</code> operation. */
	export interface ReservedCacheNodeMessage {
		Marker?: string | null;
		ReservedCacheNodes?: Array<ReservedCacheNode> | null;
	}


	/** Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation. */
	export interface ReservedCacheNode {
		ReservedCacheNodeId?: string | null;
		ReservedCacheNodesOfferingId?: string | null;
		CacheNodeType?: string | null;
		StartTime?: Date | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CacheNodeCount?: number | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		State?: string | null;
		RecurringCharges?: Array<RecurringCharge> | null;
		ReservationARN?: string | null;
	}


	/** Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string | null;
	}

	export interface ReservedCacheNodeNotFoundFault {
	}


	/** Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation. */
	export interface ReservedCacheNodesOfferingMessage {
		Marker?: string | null;
		ReservedCacheNodesOfferings?: Array<ReservedCacheNodesOffering> | null;
	}


	/** Describes all of the attributes of a reserved cache node offering. */
	export interface ReservedCacheNodesOffering {
		ReservedCacheNodesOfferingId?: string | null;
		CacheNodeType?: string | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		RecurringCharges?: Array<RecurringCharge> | null;
	}

	export interface ReservedCacheNodesOfferingNotFoundFault {
	}

	export interface ServiceUpdatesMessage {
		Marker?: string | null;
		ServiceUpdates?: Array<ServiceUpdate> | null;
	}


	/** An update that you can apply to your Redis clusters. */
	export interface ServiceUpdate {
		ServiceUpdateName?: string | null;
		ServiceUpdateReleaseDate?: Date | null;
		ServiceUpdateEndDate?: Date | null;
		ServiceUpdateSeverity?: ServiceUpdateServiceUpdateSeverity | null;
		ServiceUpdateRecommendedApplyByDate?: Date | null;
		ServiceUpdateStatus?: ServiceUpdateServiceUpdateStatus | null;
		ServiceUpdateDescription?: string | null;
		ServiceUpdateType?: ServiceUpdateServiceUpdateType | null;
		Engine?: string | null;
		EngineVersion?: string | null;
		AutoUpdateAfterRecommendedApplyByDate?: boolean | null;
		EstimatedUpdateTime?: string | null;
	}

	export enum ServiceUpdateServiceUpdateSeverity { critical = 0, important = 1, medium = 2, low = 3 }

	export enum ServiceUpdateServiceUpdateStatus { available = 0, cancelled = 1, expired = 2 }

	export enum ServiceUpdateServiceUpdateType { security_update = 0 }

	export enum ServiceUpdateStatus { available = 0, cancelled = 1, expired = 2 }


	/** Represents the output of a <code>DescribeSnapshots</code> operation. */
	export interface DescribeSnapshotsListMessage {
		Marker?: string | null;
		Snapshots?: Array<Snapshot> | null;
	}

	export interface UpdateActionsMessage {
		Marker?: string | null;
		UpdateActions?: Array<UpdateAction> | null;
	}


	/** The status of the service update for a specific replication group */
	export interface UpdateAction {
		ReplicationGroupId?: string | null;
		CacheClusterId?: string | null;
		ServiceUpdateName?: string | null;
		ServiceUpdateReleaseDate?: Date | null;
		ServiceUpdateSeverity?: ServiceUpdateServiceUpdateSeverity | null;
		ServiceUpdateStatus?: ServiceUpdateServiceUpdateStatus | null;
		ServiceUpdateRecommendedApplyByDate?: Date | null;
		ServiceUpdateType?: UpdateActionServiceUpdateType | null;
		UpdateActionAvailableDate?: Date | null;
		UpdateActionStatus?: UpdateActionUpdateActionStatus | null;
		NodesUpdated?: string | null;
		UpdateActionStatusModifiedDate?: Date | null;
		SlaMet?: UpdateActionSlaMet | null;
		NodeGroupUpdateStatus?: Array<NodeGroupUpdateStatus> | null;
		CacheNodeUpdateStatus?: Array<CacheNodeUpdateStatus> | null;
		EstimatedUpdateTime?: string | null;
		Engine?: string | null;
	}

	export enum UpdateActionServiceUpdateType { security_update = 0 }

	export enum UpdateActionUpdateActionStatus { not_applied = 0, waiting_to_start = 1, in_progress = 2, stopping = 3, stopped = 4, complete = 5, scheduling = 6, scheduled = 7, not_applicable = 8 }

	export enum UpdateActionSlaMet { yes = 0, no = 1, n_a = 2 }


	/** The status of the service update on the node group  */
	export interface NodeGroupUpdateStatus {
		NodeGroupId?: string | null;
		NodeGroupMemberUpdateStatus?: Array<NodeGroupMemberUpdateStatus> | null;
	}


	/** The status of the service update on the node group member  */
	export interface NodeGroupMemberUpdateStatus {
		CacheClusterId?: string | null;
		CacheNodeId?: string | null;
		NodeUpdateStatus?: NodeGroupMemberUpdateStatusNodeUpdateStatus | null;
		NodeDeletionDate?: Date | null;
		NodeUpdateStartDate?: Date | null;
		NodeUpdateEndDate?: Date | null;
		NodeUpdateInitiatedBy?: NodeGroupMemberUpdateStatusNodeUpdateInitiatedBy | null;
		NodeUpdateInitiatedDate?: Date | null;
		NodeUpdateStatusModifiedDate?: Date | null;
	}

	export enum NodeGroupMemberUpdateStatusNodeUpdateStatus { not_applied = 0, waiting_to_start = 1, in_progress = 2, stopping = 3, stopped = 4, complete = 5 }

	export enum NodeGroupMemberUpdateStatusNodeUpdateInitiatedBy { system = 0, customer = 1 }


	/** The status of the service update on the cache node */
	export interface CacheNodeUpdateStatus {
		CacheNodeId?: string | null;
		NodeUpdateStatus?: CacheNodeUpdateStatusNodeUpdateStatus | null;
		NodeDeletionDate?: Date | null;
		NodeUpdateStartDate?: Date | null;
		NodeUpdateEndDate?: Date | null;
		NodeUpdateInitiatedBy?: NodeGroupMemberUpdateStatusNodeUpdateInitiatedBy | null;
		NodeUpdateInitiatedDate?: Date | null;
		NodeUpdateStatusModifiedDate?: Date | null;
	}

	export enum CacheNodeUpdateStatusNodeUpdateStatus { not_applied = 0, waiting_to_start = 1, in_progress = 2, stopping = 3, stopped = 4, complete = 5 }

	export enum UpdateActionStatus { not_applied = 0, waiting_to_start = 1, in_progress = 2, stopping = 3, stopped = 4, complete = 5, scheduling = 6, scheduled = 7, not_applicable = 8 }

	export interface DisassociateGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}

	export interface FailoverGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}

	export interface IncreaseNodeGroupsInGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}


	/** A list of the replication groups  */
	export interface RegionalConfiguration {
		ReplicationGroupId: string;
		ReplicationGroupRegion: string;
		ReshardingConfiguration: Array<ReshardingConfiguration>;
	}


	/** A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster. */
	export interface ReshardingConfiguration {
		NodeGroupId?: string | null;
		PreferredAvailabilityZones?: Array<string> | null;
	}

	export interface IncreaseReplicaCountResult {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}

	export interface InvalidKMSKeyFault {
	}


	/** Represents the allowed node types you can use to modify your cluster or replication group. */
	export interface AllowedNodeTypeModificationsMessage {
		ScaleUpModifications?: Array<string> | null;
		ScaleDownModifications?: Array<string> | null;
	}

	export interface ModifyCacheClusterResult {

		/** Contains all of the attributes of a specific cluster. */
		CacheCluster?: CacheCluster | null;
	}


	/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul> */
	export interface CacheParameterGroupNameMessage {
		CacheParameterGroupName?: string | null;
	}


	/** Describes a name-value pair that is used to update the value of a parameter. */
	export interface ParameterNameValue {
		ParameterName?: string | null;
		ParameterValue?: string | null;
	}

	export interface ModifyCacheSubnetGroupResult {

		/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul> */
		CacheSubnetGroup?: CacheSubnetGroup | null;
	}

	export interface SubnetInUse {
	}

	export interface ModifyGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}

	export interface ModifyReplicationGroupResult {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}

	export interface ModifyReplicationGroupShardConfigurationResult {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}

	export interface PurchaseReservedCacheNodesOfferingResult {

		/** Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation. */
		ReservedCacheNode?: ReservedCacheNode | null;
	}

	export interface ReservedCacheNodeAlreadyExistsFault {
	}

	export interface ReservedCacheNodeQuotaExceededFault {
	}

	export interface RebalanceSlotsInGlobalReplicationGroupResult {

		/** <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different AWS region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global Datastore, which is what you use to associate a secondary cluster.</p> </li> </ul> */
		GlobalReplicationGroup?: GlobalReplicationGroup | null;
	}

	export interface RebootCacheClusterResult {

		/** Contains all of the attributes of a specific cluster. */
		CacheCluster?: CacheCluster | null;
	}

	export interface TagNotFoundFault {
	}

	export interface RevokeCacheSecurityGroupIngressResult {

		/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul> */
		CacheSecurityGroup?: CacheSecurityGroup | null;
	}

	export interface AuthorizationNotFoundFault {
	}

	export interface StartMigrationResponse {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}


	/** The endpoint from which data should be migrated. */
	export interface CustomerNodeEndpoint {
		Address?: string | null;
		Port?: number | null;
	}

	export interface ReplicationGroupAlreadyUnderMigrationFault {
	}

	export interface TestFailoverResult {

		/** Contains all of the attributes of a specific Redis replication group. */
		ReplicationGroup?: ReplicationGroup | null;
	}

	export interface APICallRateForCustomerExceededFault {
	}

	export interface NodeGroupNotFoundFault {
	}

	export interface TestFailoverNotAvailableFault {
	}

	export enum AZMode { single_az = 0, cross_az = 1 }


	/** Represents the input of an AddTagsToResource operation. */
	export interface AddTagsToResourceMessage {
		ResourceName: string;
		Tags: Array<Tag>;
	}

	export enum AuthTokenUpdateStatus { SETTING = 0, ROTATING = 1 }

	export enum AuthTokenUpdateStrategyType { SET = 0, ROTATE = 1 }


	/** Represents the input of an AuthorizeCacheSecurityGroupIngress operation. */
	export interface AuthorizeCacheSecurityGroupIngressMessage {
		CacheSecurityGroupName: string;
		EC2SecurityGroupName: string;
		EC2SecurityGroupOwnerId: string;
	}

	export enum AutomaticFailoverStatus { enabled = 0, disabled = 1, enabling = 2, disabling = 3 }

	export interface BatchApplyUpdateActionMessage {
		ReplicationGroupIds?: Array<string> | null;
		CacheClusterIds?: Array<string> | null;
		ServiceUpdateName: string;
	}

	export interface BatchStopUpdateActionMessage {
		ReplicationGroupIds?: Array<string> | null;
		CacheClusterIds?: Array<string> | null;
		ServiceUpdateName: string;
	}

	export enum ChangeType { immediate = 0, requires_reboot = 1 }

	export enum NodeUpdateStatus { not_applied = 0, waiting_to_start = 1, in_progress = 2, stopping = 3, stopped = 4, complete = 5 }

	export enum NodeUpdateInitiatedBy { system = 0, customer = 1 }

	export interface CompleteMigrationMessage {
		ReplicationGroupId: string;
		Force?: boolean | null;
	}


	/** Represents the input of a <code>CopySnapshotMessage</code> operation. */
	export interface CopySnapshotMessage {
		SourceSnapshotName: string;
		TargetSnapshotName: string;
		TargetBucket?: string | null;
		KmsKeyId?: string | null;
	}


	/** Represents the input of a CreateCacheCluster operation. */
	export interface CreateCacheClusterMessage {
		CacheClusterId: string;
		ReplicationGroupId?: string | null;
		AZMode?: CreateCacheClusterMessageAZMode | null;
		PreferredAvailabilityZone?: string | null;
		PreferredAvailabilityZones?: Array<string> | null;
		NumCacheNodes?: number | null;
		CacheNodeType?: string | null;
		Engine?: string | null;
		EngineVersion?: string | null;
		CacheParameterGroupName?: string | null;
		CacheSubnetGroupName?: string | null;
		CacheSecurityGroupNames?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
		Tags?: Array<Tag> | null;
		SnapshotArns?: Array<string> | null;
		SnapshotName?: string | null;
		PreferredMaintenanceWindow?: string | null;
		Port?: number | null;
		NotificationTopicArn?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string | null;
		AuthToken?: string | null;
	}

	export enum CreateCacheClusterMessageAZMode { single_az = 0, cross_az = 1 }


	/** Represents the input of a <code>CreateCacheParameterGroup</code> operation. */
	export interface CreateCacheParameterGroupMessage {
		CacheParameterGroupName: string;
		CacheParameterGroupFamily: string;
		Description: string;
	}


	/** Represents the input of a <code>CreateCacheSecurityGroup</code> operation. */
	export interface CreateCacheSecurityGroupMessage {
		CacheSecurityGroupName: string;
		Description: string;
	}


	/** Represents the input of a <code>CreateCacheSubnetGroup</code> operation. */
	export interface CreateCacheSubnetGroupMessage {
		CacheSubnetGroupName: string;
		CacheSubnetGroupDescription: string;
		SubnetIds: Array<string>;
	}

	export interface CreateGlobalReplicationGroupMessage {
		GlobalReplicationGroupIdSuffix: string;
		GlobalReplicationGroupDescription?: string | null;
		PrimaryReplicationGroupId: string;
	}


	/** Represents the input of a <code>CreateReplicationGroup</code> operation. */
	export interface CreateReplicationGroupMessage {
		ReplicationGroupId: string;
		ReplicationGroupDescription: string;
		GlobalReplicationGroupId?: string | null;
		PrimaryClusterId?: string | null;
		AutomaticFailoverEnabled?: boolean | null;
		MultiAZEnabled?: boolean | null;
		NumCacheClusters?: number | null;
		PreferredCacheClusterAZs?: Array<string> | null;
		NumNodeGroups?: number | null;
		ReplicasPerNodeGroup?: number | null;
		NodeGroupConfiguration?: Array<NodeGroupConfiguration> | null;
		CacheNodeType?: string | null;
		Engine?: string | null;
		EngineVersion?: string | null;
		CacheParameterGroupName?: string | null;
		CacheSubnetGroupName?: string | null;
		CacheSecurityGroupNames?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
		Tags?: Array<Tag> | null;
		SnapshotArns?: Array<string> | null;
		SnapshotName?: string | null;
		PreferredMaintenanceWindow?: string | null;
		Port?: number | null;
		NotificationTopicArn?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string | null;
		AuthToken?: string | null;
		TransitEncryptionEnabled?: boolean | null;
		AtRestEncryptionEnabled?: boolean | null;
		KmsKeyId?: string | null;
	}


	/** Represents the input of a <code>CreateSnapshot</code> operation. */
	export interface CreateSnapshotMessage {
		ReplicationGroupId?: string | null;
		CacheClusterId?: string | null;
		SnapshotName: string;
		KmsKeyId?: string | null;
	}

	export interface DecreaseNodeGroupsInGlobalReplicationGroupMessage {
		GlobalReplicationGroupId: string;
		NodeGroupCount: number;
		GlobalNodeGroupsToRemove?: Array<string> | null;
		GlobalNodeGroupsToRetain?: Array<string> | null;
		ApplyImmediately: boolean;
	}

	export interface DecreaseReplicaCountMessage {
		ReplicationGroupId: string;
		NewReplicaCount?: number | null;
		ReplicaConfiguration?: Array<ConfigureShard> | null;
		ReplicasToRemove?: Array<string> | null;
		ApplyImmediately: boolean;
	}


	/** Represents the input of a <code>DeleteCacheCluster</code> operation. */
	export interface DeleteCacheClusterMessage {
		CacheClusterId: string;
		FinalSnapshotIdentifier?: string | null;
	}


	/** Represents the input of a <code>DeleteCacheParameterGroup</code> operation. */
	export interface DeleteCacheParameterGroupMessage {
		CacheParameterGroupName: string;
	}


	/** Represents the input of a <code>DeleteCacheSecurityGroup</code> operation. */
	export interface DeleteCacheSecurityGroupMessage {
		CacheSecurityGroupName: string;
	}


	/** Represents the input of a <code>DeleteCacheSubnetGroup</code> operation. */
	export interface DeleteCacheSubnetGroupMessage {
		CacheSubnetGroupName: string;
	}

	export interface DeleteGlobalReplicationGroupMessage {
		GlobalReplicationGroupId: string;
		RetainPrimaryReplicationGroup: boolean;
	}


	/** Represents the input of a <code>DeleteReplicationGroup</code> operation. */
	export interface DeleteReplicationGroupMessage {
		ReplicationGroupId: string;
		RetainPrimaryCluster?: boolean | null;
		FinalSnapshotIdentifier?: string | null;
	}


	/** Represents the input of a <code>DeleteSnapshot</code> operation. */
	export interface DeleteSnapshotMessage {
		SnapshotName: string;
	}


	/** Represents the input of a <code>DescribeCacheClusters</code> operation. */
	export interface DescribeCacheClustersMessage {
		CacheClusterId?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		ShowCacheNodeInfo?: boolean | null;
		ShowCacheClustersNotInReplicationGroups?: boolean | null;
	}


	/** Represents the input of a <code>DescribeCacheEngineVersions</code> operation. */
	export interface DescribeCacheEngineVersionsMessage {
		Engine?: string | null;
		EngineVersion?: string | null;
		CacheParameterGroupFamily?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		DefaultOnly?: boolean | null;
	}


	/** Represents the input of a <code>DescribeCacheParameterGroups</code> operation. */
	export interface DescribeCacheParameterGroupsMessage {
		CacheParameterGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Represents the input of a <code>DescribeCacheParameters</code> operation. */
	export interface DescribeCacheParametersMessage {
		CacheParameterGroupName: string;
		Source?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Represents the input of a <code>DescribeCacheSecurityGroups</code> operation. */
	export interface DescribeCacheSecurityGroupsMessage {
		CacheSecurityGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Represents the input of a <code>DescribeCacheSubnetGroups</code> operation. */
	export interface DescribeCacheSubnetGroupsMessage {
		CacheSubnetGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Represents the input of a <code>DescribeEngineDefaultParameters</code> operation. */
	export interface DescribeEngineDefaultParametersMessage {
		CacheParameterGroupFamily: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	export enum SourceType { cache_cluster = 0, cache_parameter_group = 1, cache_security_group = 2, cache_subnet_group = 3, replication_group = 4 }


	/** Represents the input of a <code>DescribeEvents</code> operation. */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string | null;
		SourceType?: DescribeEventsMessageSourceType | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Duration?: number | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	export enum DescribeEventsMessageSourceType { cache_cluster = 0, cache_parameter_group = 1, cache_security_group = 2, cache_subnet_group = 3, replication_group = 4 }

	export interface DescribeGlobalReplicationGroupsMessage {
		GlobalReplicationGroupId?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		ShowMemberInfo?: boolean | null;
	}


	/** Represents the input of a <code>DescribeReplicationGroups</code> operation. */
	export interface DescribeReplicationGroupsMessage {
		ReplicationGroupId?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Represents the input of a <code>DescribeReservedCacheNodes</code> operation. */
	export interface DescribeReservedCacheNodesMessage {
		ReservedCacheNodeId?: string | null;
		ReservedCacheNodesOfferingId?: string | null;
		CacheNodeType?: string | null;
		Duration?: string | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation. */
	export interface DescribeReservedCacheNodesOfferingsMessage {
		ReservedCacheNodesOfferingId?: string | null;
		CacheNodeType?: string | null;
		Duration?: string | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	export interface DescribeServiceUpdatesMessage {
		ServiceUpdateName?: string | null;
		ServiceUpdateStatus?: Array<ServiceUpdateStatus> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Represents the input of a <code>DescribeSnapshotsMessage</code> operation. */
	export interface DescribeSnapshotsMessage {
		ReplicationGroupId?: string | null;
		CacheClusterId?: string | null;
		SnapshotName?: string | null;
		SnapshotSource?: string | null;
		Marker?: string | null;
		MaxRecords?: number | null;
		ShowNodeGroupConfig?: boolean | null;
	}


	/** Filters update actions from the service updates that are in available status during the time range. */
	export interface TimeRangeFilter {
		StartTime?: Date | null;
		EndTime?: Date | null;
	}

	export interface DescribeUpdateActionsMessage {
		ServiceUpdateName?: string | null;
		ReplicationGroupIds?: Array<string> | null;
		CacheClusterIds?: Array<string> | null;
		Engine?: string | null;
		ServiceUpdateStatus?: Array<ServiceUpdateStatus> | null;

		/** Filters update actions from the service updates that are in available status during the time range. */
		ServiceUpdateTimeRange?: TimeRangeFilter | null;
		UpdateActionStatus?: Array<UpdateActionStatus> | null;
		ShowNodeLevelUpdateStatus?: boolean | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	export interface DisassociateGlobalReplicationGroupMessage {
		GlobalReplicationGroupId: string;
		ReplicationGroupId: string;
		ReplicationGroupRegion: string;
	}

	export interface FailoverGlobalReplicationGroupMessage {
		GlobalReplicationGroupId: string;
		PrimaryRegion: string;
		PrimaryReplicationGroupId: string;
	}

	export interface IncreaseNodeGroupsInGlobalReplicationGroupMessage {
		GlobalReplicationGroupId: string;
		NodeGroupCount: number;
		RegionalConfigurations?: Array<RegionalConfiguration> | null;
		ApplyImmediately: boolean;
	}

	export interface IncreaseReplicaCountMessage {
		ReplicationGroupId: string;
		NewReplicaCount?: number | null;
		ReplicaConfiguration?: Array<ConfigureShard> | null;
		ApplyImmediately: boolean;
	}


	/** The input parameters for the <code>ListAllowedNodeTypeModifications</code> operation. */
	export interface ListAllowedNodeTypeModificationsMessage {
		CacheClusterId?: string | null;
		ReplicationGroupId?: string | null;
	}


	/** The input parameters for the <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceMessage {
		ResourceName: string;
	}


	/** Represents the input of a <code>ModifyCacheCluster</code> operation. */
	export interface ModifyCacheClusterMessage {
		CacheClusterId: string;
		NumCacheNodes?: number | null;
		CacheNodeIdsToRemove?: Array<string> | null;
		AZMode?: ModifyCacheClusterMessageAZMode | null;
		NewAvailabilityZones?: Array<string> | null;
		CacheSecurityGroupNames?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
		PreferredMaintenanceWindow?: string | null;
		NotificationTopicArn?: string | null;
		CacheParameterGroupName?: string | null;
		NotificationTopicStatus?: string | null;
		ApplyImmediately?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string | null;
		CacheNodeType?: string | null;
		AuthToken?: string | null;
		AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | null;
	}

	export enum ModifyCacheClusterMessageAZMode { single_az = 0, cross_az = 1 }


	/** Represents the input of a <code>ModifyCacheParameterGroup</code> operation. */
	export interface ModifyCacheParameterGroupMessage {
		CacheParameterGroupName: string;
		ParameterNameValues: Array<ParameterNameValue>;
	}


	/** Represents the input of a <code>ModifyCacheSubnetGroup</code> operation. */
	export interface ModifyCacheSubnetGroupMessage {
		CacheSubnetGroupName: string;
		CacheSubnetGroupDescription?: string | null;
		SubnetIds?: Array<string> | null;
	}

	export interface ModifyGlobalReplicationGroupMessage {
		GlobalReplicationGroupId: string;
		ApplyImmediately: boolean;
		CacheNodeType?: string | null;
		EngineVersion?: string | null;
		GlobalReplicationGroupDescription?: string | null;
		AutomaticFailoverEnabled?: boolean | null;
	}


	/** Represents the input of a <code>ModifyReplicationGroups</code> operation. */
	export interface ModifyReplicationGroupMessage {
		ReplicationGroupId: string;
		ReplicationGroupDescription?: string | null;
		PrimaryClusterId?: string | null;
		SnapshottingClusterId?: string | null;
		AutomaticFailoverEnabled?: boolean | null;
		MultiAZEnabled?: boolean | null;
		NodeGroupId?: string | null;
		CacheSecurityGroupNames?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
		PreferredMaintenanceWindow?: string | null;
		NotificationTopicArn?: string | null;
		CacheParameterGroupName?: string | null;
		NotificationTopicStatus?: string | null;
		ApplyImmediately?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string | null;
		CacheNodeType?: string | null;
		AuthToken?: string | null;
		AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | null;
	}


	/** Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation. */
	export interface ModifyReplicationGroupShardConfigurationMessage {
		ReplicationGroupId: string;
		NodeGroupCount: number;
		ApplyImmediately: boolean;
		ReshardingConfiguration?: Array<ReshardingConfiguration> | null;
		NodeGroupsToRemove?: Array<string> | null;
		NodeGroupsToRetain?: Array<string> | null;
	}

	export enum MultiAZStatus { enabled = 0, disabled = 1 }

	export enum PendingAutomaticFailoverStatus { enabled = 0, disabled = 1 }


	/** Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation. */
	export interface PurchaseReservedCacheNodesOfferingMessage {
		ReservedCacheNodesOfferingId: string;
		ReservedCacheNodeId?: string | null;
		CacheNodeCount?: number | null;
	}

	export interface RebalanceSlotsInGlobalReplicationGroupMessage {
		GlobalReplicationGroupId: string;
		ApplyImmediately: boolean;
	}


	/** Represents the input of a <code>RebootCacheCluster</code> operation. */
	export interface RebootCacheClusterMessage {
		CacheClusterId: string;
		CacheNodeIdsToReboot: Array<string>;
	}


	/** Represents the input of a <code>RemoveTagsFromResource</code> operation. */
	export interface RemoveTagsFromResourceMessage {
		ResourceName: string;
		TagKeys: Array<string>;
	}


	/** Represents the input of a <code>ResetCacheParameterGroup</code> operation. */
	export interface ResetCacheParameterGroupMessage {
		CacheParameterGroupName: string;
		ResetAllParameters?: boolean | null;
		ParameterNameValues?: Array<ParameterNameValue> | null;
	}


	/** Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation. */
	export interface RevokeCacheSecurityGroupIngressMessage {
		CacheSecurityGroupName: string;
		EC2SecurityGroupName: string;
		EC2SecurityGroupOwnerId: string;
	}

	export enum ServiceUpdateSeverity { critical = 0, important = 1, medium = 2, low = 3 }

	export enum ServiceUpdateType { security_update = 0 }

	export enum SlaMet { yes = 0, no = 1, n_a = 2 }

	export interface StartMigrationMessage {
		ReplicationGroupId: string;
		CustomerNodeEndpointList: Array<CustomerNodeEndpoint>;
	}

	export interface TestFailoverMessage {
		ReplicationGroupId: string;
		NodeGroupId: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds up to 50 cost allocation tags to the named resource. A cost allocation tag is a key-value pair where the key and value are case-sensitive. You can use cost allocation tags to categorize and track your AWS costs.</p> <p> When you apply tags to your ElastiCache resources, AWS generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>
		 * Get #Action=AddTagsToResource
		 * @param {string} ResourceName <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>. ElastiCache resources are <i>cluster</i> and <i>snapshot</i>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
		 * @param {Array<Tag>} Tags A list of cost allocation tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value.
		 * @return {void} Success
		 */
		GET_AddTagsToResource(ResourceName: string, Tags: Array<Tag>, Action: GET_AddTagsToResourceAction, Version: GET_AddTagsToResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddTagsToResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
		 * Get #Action=AuthorizeCacheSecurityGroupIngress
		 * @param {string} CacheSecurityGroupName The cache security group that allows network ingress.
		 * @param {string} EC2SecurityGroupName The Amazon EC2 security group to be authorized for ingress to the cache security group.
		 * @param {string} EC2SecurityGroupOwnerId The AWS account number of the Amazon EC2 security group owner. Note that this is not the same thing as an AWS access key ID - you must provide a valid AWS account number for this parameter.
		 * @return {void} Success
		 */
		GET_AuthorizeCacheSecurityGroupIngress(CacheSecurityGroupName: string, EC2SecurityGroupName: string, EC2SecurityGroupOwnerId: string, Action: GET_AuthorizeCacheSecurityGroupIngressAction, Version: GET_AuthorizeCacheSecurityGroupIngressVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AuthorizeCacheSecurityGroupIngress?CacheSecurityGroupName=' + (CacheSecurityGroupName == null ? '' : encodeURIComponent(CacheSecurityGroupName)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
		 * Get #Action=BatchApplyUpdateAction
		 * @param {Array<string>} ReplicationGroupIds The replication group IDs
		 * @param {Array<string>} CacheClusterIds The cache cluster IDs
		 * @param {string} ServiceUpdateName The unique ID of the service update
		 * @return {void} Success
		 */
		GET_BatchApplyUpdateAction(ReplicationGroupIds: Array<string>, CacheClusterIds: Array<string>, ServiceUpdateName: string, Action: GET_BatchApplyUpdateActionAction, Version: GET_BatchApplyUpdateActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchApplyUpdateAction?' + ReplicationGroupIds.map(z => `ReplicationGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + CacheClusterIds.map(z => `CacheClusterIds=${encodeURIComponent(z)}`).join('&') + '&ServiceUpdateName=' + (ServiceUpdateName == null ? '' : encodeURIComponent(ServiceUpdateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
		 * Get #Action=BatchStopUpdateAction
		 * @param {Array<string>} ReplicationGroupIds The replication group IDs
		 * @param {Array<string>} CacheClusterIds The cache cluster IDs
		 * @param {string} ServiceUpdateName The unique ID of the service update
		 * @return {void} Success
		 */
		GET_BatchStopUpdateAction(ReplicationGroupIds: Array<string>, CacheClusterIds: Array<string>, ServiceUpdateName: string, Action: GET_BatchStopUpdateActionAction, Version: GET_BatchStopUpdateActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchStopUpdateAction?' + ReplicationGroupIds.map(z => `ReplicationGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + CacheClusterIds.map(z => `CacheClusterIds=${encodeURIComponent(z)}`).join('&') + '&ServiceUpdateName=' + (ServiceUpdateName == null ? '' : encodeURIComponent(ServiceUpdateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete the migration of data.
		 * Get #Action=CompleteMigration
		 * @param {string} ReplicationGroupId The ID of the replication group to which data is being migrated.
		 * @param {boolean} Force Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.
		 * @return {void} Success
		 */
		GET_CompleteMigration(ReplicationGroupId: string, Force: boolean, Action: GET_CompleteMigrationAction, Version: GET_CompleteMigrationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CompleteMigration?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&Force=' + Force + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>
		 * Get #Action=CopySnapshot
		 * @param {string} SourceSnapshotName The name of an existing snapshot from which to make a copy.
		 * @param {string} TargetSnapshotName A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot, therefore this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.
		 * @param {string} TargetBucket <p>The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access.</p> <p>When using this parameter to export a snapshot, be sure Amazon ElastiCache has the needed permissions to this S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the <i>Amazon ElastiCache User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Snapshots.Exporting.html">Exporting a Snapshot</a> in the <i>Amazon ElastiCache User Guide</i>.</p>
		 * @param {string} KmsKeyId The ID of the KMS key used to encrypt the target snapshot.
		 * @return {void} Success
		 */
		GET_CopySnapshot(SourceSnapshotName: string, TargetSnapshotName: string, TargetBucket: string, KmsKeyId: string, Action: GET_CopySnapshotAction, Version: GET_CopySnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopySnapshot?SourceSnapshotName=' + (SourceSnapshotName == null ? '' : encodeURIComponent(SourceSnapshotName)) + '&TargetSnapshotName=' + (TargetSnapshotName == null ? '' : encodeURIComponent(TargetSnapshotName)) + '&TargetBucket=' + (TargetBucket == null ? '' : encodeURIComponent(TargetBucket)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
		 * Get #Action=CreateCacheCluster
		 * @param {string} CacheClusterId <p>The node group (shard) identifier. This parameter is stored as a lowercase string.</p> <p> <b>Constraints:</b> </p> <ul> <li> <p>A name must contain from 1 to 50 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {string} ReplicationGroupId <p>The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.</p> <p>If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>
		 * @param {GET_CreateCacheClusterAZMode} AZMode <p>Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.</p> <p>This parameter is only supported for Memcached clusters.</p> <p>If the <code>AZMode</code> and <code>PreferredAvailabilityZones</code> are not specified, ElastiCache assumes <code>single-az</code> mode.</p>
		 * @param {string} PreferredAvailabilityZone <p>The EC2 Availability Zone in which the cluster is created.</p> <p>All nodes belonging to this Memcached cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use <code>PreferredAvailabilityZones</code>.</p> <p>Default: System chosen Availability Zone.</p>
		 * @param {Array<string>} PreferredAvailabilityZones <p>A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.</p> <p>This option is only supported on Memcached.</p> <note> <p>If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheNodes</code>.</p> </note> <p>If you want all the nodes in the same Availability Zone, use <code>PreferredAvailabilityZone</code> instead, or repeat the Availability Zone multiple times in the list.</p> <p>Default: System chosen Availability Zones.</p>
		 * @param {number} NumCacheNodes <p>The initial number of cache nodes that the cluster has.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.</p> <p>If you need more than 20 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at <a href="http://aws.amazon.com/contact-us/elasticache-node-limit-request/">http://aws.amazon.com/contact-us/elasticache-node-limit-request/</a>.</p>
		 * @param {string} CacheNodeType <p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
		 * @param {string} Engine <p>The name of the cache engine to be used for this cluster.</p> <p>Valid values for this parameter are: <code>memcached</code> | <code>redis</code> </p>
		 * @param {string} EngineVersion <p>The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>
		 * @param {string} CacheParameterGroupName The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has <code>cluster-enabled='yes'</code> when creating a cluster.
		 * @param {string} CacheSubnetGroupName <p>The name of the subnet group to be used for the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p> <important> <p>If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>
		 * @param {Array<string>} CacheSecurityGroupNames <p>A list of security group names to associate with this cluster.</p> <p>Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
		 * @param {Array<string>} SecurityGroupIds <p>One or more VPC security groups associated with the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
		 * @param {Array<Tag>} Tags A list of cost allocation tags to be added to this resource.
		 * @param {Array<string>} SnapshotArns <p>A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>
		 * @param {string} SnapshotName <p>The name of a Redis snapshot from which to restore data into the new node group (shard). The snapshot status changes to <code>restoring</code> while the new node group (shard) is being created.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>
		 * @param {string} PreferredMaintenanceWindow <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for <code>ddd</code> are:</p> <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>
		 * @param {number} Port The port number on which each of the cache nodes accepts connections.
		 * @param {string} NotificationTopicArn <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>
		 * @param {boolean} AutoMinorVersionUpgrade This parameter is currently disabled.
		 * @param {number} SnapshotRetentionLimit <p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot taken today is retained for 5 days before being deleted.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Default: 0 (i.e., automatic backups are disabled for this cache cluster).</p>
		 * @param {string} SnapshotWindow <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>
		 * @param {string} AuthToken <p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>
		 * @return {void} Success
		 */
		GET_CreateCacheCluster(CacheClusterId: string, ReplicationGroupId: string, AZMode: GET_CreateCacheClusterAZMode, PreferredAvailabilityZone: string, PreferredAvailabilityZones: Array<string>, NumCacheNodes: number, CacheNodeType: string, Engine: string, EngineVersion: string, CacheParameterGroupName: string, CacheSubnetGroupName: string, CacheSecurityGroupNames: Array<string>, SecurityGroupIds: Array<string>, Tags: Array<Tag>, SnapshotArns: Array<string>, SnapshotName: string, PreferredMaintenanceWindow: string, Port: number, NotificationTopicArn: string, AutoMinorVersionUpgrade: boolean, SnapshotRetentionLimit: number, SnapshotWindow: string, AuthToken: string, Action: GET_CreateCacheClusterAction, Version: GET_CreateCacheClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateCacheCluster?CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&AZMode=' + AZMode + '&PreferredAvailabilityZone=' + (PreferredAvailabilityZone == null ? '' : encodeURIComponent(PreferredAvailabilityZone)) + '&' + PreferredAvailabilityZones.map(z => `PreferredAvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&NumCacheNodes=' + NumCacheNodes + '&CacheNodeType=' + (CacheNodeType == null ? '' : encodeURIComponent(CacheNodeType)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&CacheSubnetGroupName=' + (CacheSubnetGroupName == null ? '' : encodeURIComponent(CacheSubnetGroupName)) + '&' + CacheSecurityGroupNames.map(z => `CacheSecurityGroupNames=${encodeURIComponent(z)}`).join('&') + '&' + SecurityGroupIds.map(z => `SecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&' + SnapshotArns.map(z => `SnapshotArns=${encodeURIComponent(z)}`).join('&') + '&SnapshotName=' + (SnapshotName == null ? '' : encodeURIComponent(SnapshotName)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&Port=' + Port + '&NotificationTopicArn=' + (NotificationTopicArn == null ? '' : encodeURIComponent(NotificationTopicArn)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&SnapshotRetentionLimit=' + SnapshotRetentionLimit + '&SnapshotWindow=' + (SnapshotWindow == null ? '' : encodeURIComponent(SnapshotWindow)) + '&AuthToken=' + (AuthToken == null ? '' : encodeURIComponent(AuthToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>
		 * Get #Action=CreateCacheParameterGroup
		 * @param {string} CacheParameterGroupName A user-specified name for the cache parameter group.
		 * @param {string} CacheParameterGroupFamily <p>The name of the cache parameter group family that the cache parameter group can be used with.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | </p>
		 * @param {string} Description A user-specified description for the cache parameter group.
		 * @return {void} Success
		 */
		GET_CreateCacheParameterGroup(CacheParameterGroupName: string, CacheParameterGroupFamily: string, Description: string, Action: GET_CreateCacheParameterGroupAction, Version: GET_CreateCacheParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateCacheParameterGroup?CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&CacheParameterGroupFamily=' + (CacheParameterGroupFamily == null ? '' : encodeURIComponent(CacheParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
		 * Get #Action=CreateCacheSecurityGroup
		 * @param {string} CacheSecurityGroupName <p>A name for the cache security group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default".</p> <p>Example: <code>mysecuritygroup</code> </p>
		 * @param {string} Description A description for the cache security group.
		 * @return {void} Success
		 */
		GET_CreateCacheSecurityGroup(CacheSecurityGroupName: string, Description: string, Action: GET_CreateCacheSecurityGroupAction, Version: GET_CreateCacheSecurityGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateCacheSecurityGroup?CacheSecurityGroupName=' + (CacheSecurityGroupName == null ? '' : encodeURIComponent(CacheSecurityGroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
		 * Get #Action=CreateCacheSubnetGroup
		 * @param {string} CacheSubnetGroupName <p>A name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>
		 * @param {string} CacheSubnetGroupDescription A description for the cache subnet group.
		 * @param {Array<string>} SubnetIds A list of VPC subnet IDs for the cache subnet group.
		 * @return {void} Success
		 */
		GET_CreateCacheSubnetGroup(CacheSubnetGroupName: string, CacheSubnetGroupDescription: string, SubnetIds: Array<string>, Action: GET_CreateCacheSubnetGroupAction, Version: GET_CreateCacheSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateCacheSubnetGroup?CacheSubnetGroupName=' + (CacheSubnetGroupName == null ? '' : encodeURIComponent(CacheSubnetGroupName)) + '&CacheSubnetGroupDescription=' + (CacheSubnetGroupDescription == null ? '' : encodeURIComponent(CacheSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="/AmazonElastiCache/latest/red-ug/Redis-Global-Clusters.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global Datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
		 * Get #Action=CreateGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupIdSuffix The suffix name of a Global Datastore. The suffix guarantees uniqueness of the Global Datastore name across multiple regions.
		 * @param {string} GlobalReplicationGroupDescription Provides details of the Global Datastore
		 * @param {string} PrimaryReplicationGroupId The name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.
		 * @return {void} Success
		 */
		GET_CreateGlobalReplicationGroup(GlobalReplicationGroupIdSuffix: string, GlobalReplicationGroupDescription: string, PrimaryReplicationGroupId: string, Action: GET_CreateGlobalReplicationGroupAction, Version: GET_CreateGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateGlobalReplicationGroup?GlobalReplicationGroupIdSuffix=' + (GlobalReplicationGroupIdSuffix == null ? '' : encodeURIComponent(GlobalReplicationGroupIdSuffix)) + '&GlobalReplicationGroupDescription=' + (GlobalReplicationGroupDescription == null ? '' : encodeURIComponent(GlobalReplicationGroupDescription)) + '&PrimaryReplicationGroupId=' + (PrimaryReplicationGroupId == null ? '' : encodeURIComponent(PrimaryReplicationGroupId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global Datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis (cluster mode enabled) replication group is a collection of 1 to 90 node groups (shards). Each node group (shard) has one read/write primary node and up to 5 read-only replica nodes. Writes to the primary are asynchronously propagated to the replicas. Redis (cluster mode enabled) replication groups partition the data across node groups (shards).</p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. You cannot alter a Redis (cluster mode enabled) replication group after it has been created. However, if you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' enhanced backup and restore. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-restoring.html">Restoring From a Backup with Cluster Resizing</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>
		 * Get #Action=CreateReplicationGroup
		 * @param {string} ReplicationGroupId <p>The replication group identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>A name must contain from 1 to 40 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {string} ReplicationGroupDescription A user-created description for the replication group.
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {string} PrimaryClusterId <p>The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of <code>available</code>.</p> <p>This parameter is not required if <code>NumCacheClusters</code>, <code>NumNodeGroups</code>, or <code>ReplicasPerNodeGroup</code> is specified.</p>
		 * @param {boolean} AutomaticFailoverEnabled <p>Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.</p> <p>If <code>true</code>, Multi-AZ is enabled for this replication group. If <code>false</code>, Multi-AZ is disabled for this replication group.</p> <p> <code>AutomaticFailoverEnabled</code> must be enabled for Redis (cluster mode enabled) replication groups.</p> <p>Default: false</p> <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p> <ul> <li> <p>Redis versions earlier than 2.8.6.</p> </li> <li> <p>Redis (cluster mode disabled): T1 node types.</p> </li> <li> <p>Redis (cluster mode enabled): T1 node types.</p> </li> </ul>
		 * @param {number} NumCacheClusters <p>The number of nodes in the cluster.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>ReplicasPerNodeGroup</code> instead.</p> <p>If <code>AutomaticFailoverEnabled</code> is <code>true</code>, the value of this parameter must be at least 2. If <code>AutomaticFailoverEnabled</code> is <code>false</code> you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6.</p> <p>The maximum permitted value for <code>NumCacheClusters</code> is 6 (1 primary plus 5 replicas).</p>
		 * @param {Array<string>} PreferredCacheClusterAZs <p>A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>NodeGroupConfiguration</code> instead.</p> <note> <p>If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheClusters</code>.</p> </note> <p>Default: system chosen Availability Zones.</p>
		 * @param {number} NumNodeGroups <p>An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.</p> <p>Default: 1</p>
		 * @param {number} ReplicasPerNodeGroup An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
		 * @param {Array<NodeGroupConfiguration>} NodeGroupConfiguration <p>A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>, and <code>Slots</code>.</p> <p>If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Redis (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.</p>
		 * @param {string} CacheNodeType <p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
		 * @param {string} Engine The name of the cache engine to be used for the clusters in this replication group.
		 * @param {string} EngineVersion <p>The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the <code>DescribeCacheEngineVersions</code> operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>) in the <i>ElastiCache User Guide</i>, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>
		 * @param {string} CacheParameterGroupName <p>The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.</p> <note> <p>If you are restoring to an engine version that is different than the original, you must specify the default version of that version. For example, <code>CacheParameterGroupName=default.redis4.0</code>.</p> </note> <p>If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name. </p> <ul> <li> <p>To create a Redis (cluster mode disabled) replication group, use <code>CacheParameterGroupName=default.redis3.2</code>.</p> </li> <li> <p>To create a Redis (cluster mode enabled) replication group, use <code>CacheParameterGroupName=default.redis3.2.cluster.on</code>.</p> </li> </ul>
		 * @param {string} CacheSubnetGroupName <p>The name of the cache subnet group to be used for the replication group.</p> <important> <p>If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>
		 * @param {Array<string>} CacheSecurityGroupNames A list of cache security group names to associate with this replication group.
		 * @param {Array<string>} SecurityGroupIds <p>One or more Amazon VPC security groups associated with this replication group.</p> <p>Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).</p>
		 * @param {Array<Tag>} Tags A list of cost allocation tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=<code>myKey</code>, Value=<code>myKeyValue</code>. You can include multiple tags as shown following: Key=<code>myKey</code>, Value=<code>myKeyValue</code> Key=<code>mySecondKey</code>, Value=<code>mySecondKeyValue</code>.
		 * @param {Array<string>} SnapshotArns <p>A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter <i>NumNodeGroups</i> or the number of node groups configured by <i>NodeGroupConfiguration</i> regardless of the number of ARNs specified here.</p> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>
		 * @param {string} SnapshotName The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to <code>restoring</code> while the new replication group is being created.
		 * @param {string} PreferredMaintenanceWindow <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for <code>ddd</code> are:</p> <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>
		 * @param {number} Port The port number on which each member of the replication group accepts connections.
		 * @param {string} NotificationTopicArn <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>
		 * @param {boolean} AutoMinorVersionUpgrade This parameter is currently disabled.
		 * @param {number} SnapshotRetentionLimit <p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p>Default: 0 (i.e., automatic backups are disabled for this cluster).</p>
		 * @param {string} SnapshotWindow <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>
		 * @param {string} AuthToken <p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p> <code>AuthToken</code> can be specified only on replication groups where <code>TransitEncryptionEnabled</code> is <code>true</code>.</p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>
		 * @param {boolean} TransitEncryptionEnabled <p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p>You cannot modify the value of <code>TransitEncryptionEnabled</code> after the cluster is created. To enable in-transit encryption on a cluster you must set <code>TransitEncryptionEnabled</code> to <code>true</code> when you create a cluster.</p> <p>This parameter is valid only if the <code>Engine</code> parameter is <code>redis</code>, the <code>EngineVersion</code> parameter is <code>3.2.6</code>, <code>4.x</code> or later, and the cluster is being created in an Amazon VPC.</p> <p>If you enable in-transit encryption, you must also specify a value for <code>CacheSubnetGroup</code>.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important>
		 * @param {boolean} AtRestEncryptionEnabled <p>A flag that enables encryption at rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication group is created. To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create the replication group. </p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>
		 * @param {string} KmsKeyId The ID of the KMS key used to encrypt the disk in the cluster.
		 * @return {void} Success
		 */
		GET_CreateReplicationGroup(ReplicationGroupId: string, ReplicationGroupDescription: string, GlobalReplicationGroupId: string, PrimaryClusterId: string, AutomaticFailoverEnabled: boolean, MultiAZEnabled: boolean, NumCacheClusters: number, PreferredCacheClusterAZs: Array<string>, NumNodeGroups: number, ReplicasPerNodeGroup: number, NodeGroupConfiguration: Array<NodeGroupConfiguration>, CacheNodeType: string, Engine: string, EngineVersion: string, CacheParameterGroupName: string, CacheSubnetGroupName: string, CacheSecurityGroupNames: Array<string>, SecurityGroupIds: Array<string>, Tags: Array<Tag>, SnapshotArns: Array<string>, SnapshotName: string, PreferredMaintenanceWindow: string, Port: number, NotificationTopicArn: string, AutoMinorVersionUpgrade: boolean, SnapshotRetentionLimit: number, SnapshotWindow: string, AuthToken: string, TransitEncryptionEnabled: boolean, AtRestEncryptionEnabled: boolean, KmsKeyId: string, Action: GET_CreateReplicationGroupAction, Version: GET_CreateReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateReplicationGroup?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&ReplicationGroupDescription=' + (ReplicationGroupDescription == null ? '' : encodeURIComponent(ReplicationGroupDescription)) + '&GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&PrimaryClusterId=' + (PrimaryClusterId == null ? '' : encodeURIComponent(PrimaryClusterId)) + '&AutomaticFailoverEnabled=' + AutomaticFailoverEnabled + '&MultiAZEnabled=' + MultiAZEnabled + '&NumCacheClusters=' + NumCacheClusters + '&' + PreferredCacheClusterAZs.map(z => `PreferredCacheClusterAZs=${encodeURIComponent(z)}`).join('&') + '&NumNodeGroups=' + NumNodeGroups + '&ReplicasPerNodeGroup=' + ReplicasPerNodeGroup + '&' + NodeGroupConfiguration.map(z => `NodeGroupConfiguration=${z}`).join('&') + '&CacheNodeType=' + (CacheNodeType == null ? '' : encodeURIComponent(CacheNodeType)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&CacheSubnetGroupName=' + (CacheSubnetGroupName == null ? '' : encodeURIComponent(CacheSubnetGroupName)) + '&' + CacheSecurityGroupNames.map(z => `CacheSecurityGroupNames=${encodeURIComponent(z)}`).join('&') + '&' + SecurityGroupIds.map(z => `SecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&' + SnapshotArns.map(z => `SnapshotArns=${encodeURIComponent(z)}`).join('&') + '&SnapshotName=' + (SnapshotName == null ? '' : encodeURIComponent(SnapshotName)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&Port=' + Port + '&NotificationTopicArn=' + (NotificationTopicArn == null ? '' : encodeURIComponent(NotificationTopicArn)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&SnapshotRetentionLimit=' + SnapshotRetentionLimit + '&SnapshotWindow=' + (SnapshotWindow == null ? '' : encodeURIComponent(SnapshotWindow)) + '&AuthToken=' + (AuthToken == null ? '' : encodeURIComponent(AuthToken)) + '&TransitEncryptionEnabled=' + TransitEncryptionEnabled + '&AtRestEncryptionEnabled=' + AtRestEncryptionEnabled + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>
		 * Get #Action=CreateSnapshot
		 * @param {string} ReplicationGroupId The identifier of an existing replication group. The snapshot is created from this replication group.
		 * @param {string} CacheClusterId The identifier of an existing cluster. The snapshot is created from this cluster.
		 * @param {string} SnapshotName A name for the snapshot being created.
		 * @param {string} KmsKeyId The ID of the KMS key used to encrypt the snapshot.
		 * @return {void} Success
		 */
		GET_CreateSnapshot(ReplicationGroupId: string, CacheClusterId: string, SnapshotName: string, KmsKeyId: string, Action: GET_CreateSnapshotAction, Version: GET_CreateSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateSnapshot?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&SnapshotName=' + (SnapshotName == null ? '' : encodeURIComponent(SnapshotName)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Decreases the number of node groups in a Global Datastore
		 * Get #Action=DecreaseNodeGroupsInGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {number} NodeGroupCount The number of node groups (shards) that results from the modification of the shard configuration
		 * @param {Array<string>} GlobalNodeGroupsToRemove If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. NodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache for Redis will attempt to remove all node groups listed by NodeGroupsToRemove from the cluster. 
		 * @param {Array<string>} GlobalNodeGroupsToRetain If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. NodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache for Redis will attempt to remove all node groups listed by NodeGroupsToRemove from the cluster. 
		 * @param {boolean} ApplyImmediately Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is true. 
		 * @return {void} Success
		 */
		GET_DecreaseNodeGroupsInGlobalReplicationGroup(GlobalReplicationGroupId: string, NodeGroupCount: number, GlobalNodeGroupsToRemove: Array<string>, GlobalNodeGroupsToRetain: Array<string>, ApplyImmediately: boolean, Action: GET_DecreaseNodeGroupsInGlobalReplicationGroupAction, Version: GET_DecreaseNodeGroupsInGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DecreaseNodeGroupsInGlobalReplicationGroup?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&NodeGroupCount=' + NodeGroupCount + '&' + GlobalNodeGroupsToRemove.map(z => `GlobalNodeGroupsToRemove=${encodeURIComponent(z)}`).join('&') + '&' + GlobalNodeGroupsToRetain.map(z => `GlobalNodeGroupsToRetain=${encodeURIComponent(z)}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
		 * Get #Action=DecreaseReplicaCount
		 * @param {string} ReplicationGroupId The id of the replication group from which you want to remove replica nodes.
		 * @param {number} NewReplicaCount <p>The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ with Automatic Failover is enabled: 1</p> </li> <li> <p>If Multi-AZ with Automatic Failover is not enabled: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>
		 * @param {Array<ConfigureShard>} ReplicaConfiguration A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.
		 * @param {Array<string>} ReplicasToRemove A list of the node ids to remove from the replication group or node group (shard).
		 * @param {boolean} ApplyImmediately If <code>True</code>, the number of replica nodes is decreased immediately. <code>ApplyImmediately=False</code> is not currently supported.
		 * @return {void} Success
		 */
		GET_DecreaseReplicaCount(ReplicationGroupId: string, NewReplicaCount: number, ReplicaConfiguration: Array<ConfigureShard>, ReplicasToRemove: Array<string>, ApplyImmediately: boolean, Action: GET_DecreaseReplicaCountAction, Version: GET_DecreaseReplicaCountVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DecreaseReplicaCount?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&NewReplicaCount=' + NewReplicaCount + '&' + ReplicaConfiguration.map(z => `ReplicaConfiguration=${z}`).join('&') + '&' + ReplicasToRemove.map(z => `ReplicasToRemove=${encodeURIComponent(z)}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
		 * Get #Action=DeleteCacheCluster
		 * @param {string} CacheClusterId The cluster identifier for the cluster to be deleted. This parameter is not case sensitive.
		 * @param {string} FinalSnapshotIdentifier The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.
		 * @return {void} Success
		 */
		GET_DeleteCacheCluster(CacheClusterId: string, FinalSnapshotIdentifier: string, Action: GET_DeleteCacheClusterAction, Version: GET_DeleteCacheClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteCacheCluster?CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&FinalSnapshotIdentifier=' + (FinalSnapshotIdentifier == null ? '' : encodeURIComponent(FinalSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters.
		 * Get #Action=DeleteCacheParameterGroup
		 * @param {string} CacheParameterGroupName <p>The name of the cache parameter group to delete.</p> <note> <p>The specified cache security group must not be associated with any clusters.</p> </note>
		 * @return {void} Success
		 */
		GET_DeleteCacheParameterGroup(CacheParameterGroupName: string, Action: GET_DeleteCacheParameterGroupAction, Version: GET_DeleteCacheParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteCacheParameterGroup?CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
		 * Get #Action=DeleteCacheSecurityGroup
		 * @param {string} CacheSecurityGroupName <p>The name of the cache security group to delete.</p> <note> <p>You cannot delete the default security group.</p> </note>
		 * @return {void} Success
		 */
		GET_DeleteCacheSecurityGroup(CacheSecurityGroupName: string, Action: GET_DeleteCacheSecurityGroupAction, Version: GET_DeleteCacheSecurityGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteCacheSecurityGroup?CacheSecurityGroupName=' + (CacheSecurityGroupName == null ? '' : encodeURIComponent(CacheSecurityGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a cache subnet group if it is associated with any clusters.</p> </note>
		 * Get #Action=DeleteCacheSubnetGroup
		 * @param {string} CacheSubnetGroupName <p>The name of the cache subnet group to delete.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
		 * @return {void} Success
		 */
		GET_DeleteCacheSubnetGroup(CacheSubnetGroupName: string, Action: GET_DeleteCacheSubnetGroupAction, Version: GET_DeleteCacheSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteCacheSubnetGroup?CacheSubnetGroupName=' + (CacheSubnetGroupName == null ? '' : encodeURIComponent(CacheSubnetGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deleting a Global Datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global Datastore.</p> </li> <li> <p>Once the Global Datastore contains only the primary cluster, you can use DeleteGlobalReplicationGroup API to delete the Global Datastore while retainining the primary cluster using Retain…= true.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
		 * Get #Action=DeleteGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {boolean} RetainPrimaryReplicationGroup The primary replication group is retained as a standalone replication group. 
		 * @return {void} Success
		 */
		GET_DeleteGlobalReplicationGroup(GlobalReplicationGroupId: string, RetainPrimaryReplicationGroup: boolean, Action: GET_DeleteGlobalReplicationGroupAction, Version: GET_DeleteGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteGlobalReplicationGroup?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&RetainPrimaryReplicationGroup=' + RetainPrimaryReplicationGroup + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
		 * Get #Action=DeleteReplicationGroup
		 * @param {string} ReplicationGroupId The identifier for the cluster to be deleted. This parameter is not case sensitive.
		 * @param {boolean} RetainPrimaryCluster If set to <code>true</code>, all of the read replicas are deleted, but the primary node is retained.
		 * @param {string} FinalSnapshotIdentifier The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.
		 * @return {void} Success
		 */
		GET_DeleteReplicationGroup(ReplicationGroupId: string, RetainPrimaryCluster: boolean, FinalSnapshotIdentifier: string, Action: GET_DeleteReplicationGroupAction, Version: GET_DeleteReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteReplicationGroup?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&RetainPrimaryCluster=' + RetainPrimaryCluster + '&FinalSnapshotIdentifier=' + (FinalSnapshotIdentifier == null ? '' : encodeURIComponent(FinalSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
		 * Get #Action=DeleteSnapshot
		 * @param {string} SnapshotName The name of the snapshot to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteSnapshot(SnapshotName: string, Action: GET_DeleteSnapshotAction, Version: GET_DeleteSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSnapshot?SnapshotName=' + (SnapshotName == null ? '' : encodeURIComponent(SnapshotName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
		 * Get #Action=DescribeCacheClusters
		 * @param {string} CacheClusterId The user-supplied cluster identifier. If this parameter is specified, only information about that specific cluster is returned. This parameter isn't case sensitive.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {boolean} ShowCacheNodeInfo An optional flag that can be included in the <code>DescribeCacheCluster</code> request to retrieve information about the individual cache nodes.
		 * @param {boolean} ShowCacheClustersNotInReplicationGroups An optional flag that can be included in the <code>DescribeCacheCluster</code> request to show only nodes (API/CLI: clusters) that are not members of a replication group. In practice, this mean Memcached and single node Redis clusters.
		 * @return {void} Success
		 */
		GET_DescribeCacheClusters(CacheClusterId: string, MaxRecords: number, Marker: string, ShowCacheNodeInfo: boolean, ShowCacheClustersNotInReplicationGroups: boolean, Action: GET_DescribeCacheClustersAction, Version: GET_DescribeCacheClustersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeCacheClusters?CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&ShowCacheNodeInfo=' + ShowCacheNodeInfo + '&ShowCacheClustersNotInReplicationGroups=' + ShowCacheClustersNotInReplicationGroups + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available cache engines and their versions.
		 * Get #Action=DescribeCacheEngineVersions
		 * @param {string} Engine The cache engine to return. Valid values: <code>memcached</code> | <code>redis</code> 
		 * @param {string} EngineVersion <p>The cache engine version to return.</p> <p>Example: <code>1.4.14</code> </p>
		 * @param {string} CacheParameterGroupFamily <p>The name of a specific cache parameter group family to return details for.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {boolean} DefaultOnly If <code>true</code>, specifies that only the default version of the specified engine or engine and major version combination is to be returned.
		 * @return {void} Success
		 */
		GET_DescribeCacheEngineVersions(Engine: string, EngineVersion: string, CacheParameterGroupFamily: string, MaxRecords: number, Marker: string, DefaultOnly: boolean, Action: GET_DescribeCacheEngineVersionsAction, Version: GET_DescribeCacheEngineVersionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeCacheEngineVersions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&CacheParameterGroupFamily=' + (CacheParameterGroupFamily == null ? '' : encodeURIComponent(CacheParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&DefaultOnly=' + DefaultOnly + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
		 * Get #Action=DescribeCacheParameterGroups
		 * @param {string} CacheParameterGroupName The name of a specific cache parameter group to return details for.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeCacheParameterGroups(CacheParameterGroupName: string, MaxRecords: number, Marker: string, Action: GET_DescribeCacheParameterGroupsAction, Version: GET_DescribeCacheParameterGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeCacheParameterGroups?CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the detailed parameter list for a particular cache parameter group.
		 * Get #Action=DescribeCacheParameters
		 * @param {string} CacheParameterGroupName The name of a specific cache parameter group to return details for.
		 * @param {string} Source <p>The parameter types to return.</p> <p>Valid values: <code>user</code> | <code>system</code> | <code>engine-default</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeCacheParameters(CacheParameterGroupName: string, Source: string, MaxRecords: number, Marker: string, Action: GET_DescribeCacheParametersAction, Version: GET_DescribeCacheParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeCacheParameters?CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup
		 * Get #Action=DescribeCacheSecurityGroups
		 * @param {string} CacheSecurityGroupName The name of the cache security group to return details for.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeCacheSecurityGroups(CacheSecurityGroupName: string, MaxRecords: number, Marker: string, Action: GET_DescribeCacheSecurityGroupsAction, Version: GET_DescribeCacheSecurityGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeCacheSecurityGroups?CacheSecurityGroupName=' + (CacheSecurityGroupName == null ? '' : encodeURIComponent(CacheSecurityGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
		 * Get #Action=DescribeCacheSubnetGroups
		 * @param {string} CacheSubnetGroupName The name of the cache subnet group to return details for.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeCacheSubnetGroups(CacheSubnetGroupName: string, MaxRecords: number, Marker: string, Action: GET_DescribeCacheSubnetGroupsAction, Version: GET_DescribeCacheSubnetGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeCacheSubnetGroups?CacheSubnetGroupName=' + (CacheSubnetGroupName == null ? '' : encodeURIComponent(CacheSubnetGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default engine and system parameter information for the specified cache engine.
		 * Get #Action=DescribeEngineDefaultParameters
		 * @param {string} CacheParameterGroupFamily <p>The name of the cache parameter group family.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | </p>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultParameters(CacheParameterGroupFamily: string, MaxRecords: number, Marker: string, Action: GET_DescribeEngineDefaultParametersAction, Version: GET_DescribeEngineDefaultParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEngineDefaultParameters?CacheParameterGroupFamily=' + (CacheParameterGroupFamily == null ? '' : encodeURIComponent(CacheParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
		 * Get #Action=DescribeEvents
		 * @param {string} SourceIdentifier The identifier of the event source for which events are returned. If not specified, all sources are included in the response.
		 * @param {GET_DescribeEventsSourceType} SourceType The event source to retrieve events for. If no value is specified, all events are returned.
		 * @param {Date} StartTime <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
		 * @param {Date} EndTime <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
		 * @param {number} Duration The number of minutes worth of events to retrieve.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string, SourceType: GET_DescribeEventsSourceType, StartTime: Date, EndTime: Date, Duration: number, MaxRecords: number, Marker: string, Action: GET_DescribeEventsAction, Version: GET_DescribeEventsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Duration=' + Duration + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a particular global replication group. If no identifier is specified, returns information about all Global Datastores.
		 * Get #Action=DescribeGlobalReplicationGroups
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {number} MaxRecords The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. 
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {boolean} ShowMemberInfo Returns the list of members that comprise the Global Datastore.
		 * @return {void} Success
		 */
		GET_DescribeGlobalReplicationGroups(GlobalReplicationGroupId: string, MaxRecords: number, Marker: string, ShowMemberInfo: boolean, Action: GET_DescribeGlobalReplicationGroupsAction, Version: GET_DescribeGlobalReplicationGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeGlobalReplicationGroups?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&ShowMemberInfo=' + ShowMemberInfo + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
		 * Get #Action=DescribeReplicationGroups
		 * @param {string} ReplicationGroupId <p>The identifier for the replication group to be described. This parameter is not case sensitive.</p> <p>If you do not specify this parameter, information about all replication groups is returned.</p>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeReplicationGroups(ReplicationGroupId: string, MaxRecords: number, Marker: string, Action: GET_DescribeReplicationGroupsAction, Version: GET_DescribeReplicationGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReplicationGroups?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
		 * Get #Action=DescribeReservedCacheNodes
		 * @param {string} ReservedCacheNodeId The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.
		 * @param {string} ReservedCacheNodesOfferingId The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.
		 * @param {string} CacheNodeType <p>The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
		 * @param {string} Duration <p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>
		 * @param {string} ProductDescription The product description filter value. Use this parameter to show only those reservations matching the specified product description.
		 * @param {string} OfferingType <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeReservedCacheNodes(ReservedCacheNodeId: string, ReservedCacheNodesOfferingId: string, CacheNodeType: string, Duration: string, ProductDescription: string, OfferingType: string, MaxRecords: number, Marker: string, Action: GET_DescribeReservedCacheNodesAction, Version: GET_DescribeReservedCacheNodesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReservedCacheNodes?ReservedCacheNodeId=' + (ReservedCacheNodeId == null ? '' : encodeURIComponent(ReservedCacheNodeId)) + '&ReservedCacheNodesOfferingId=' + (ReservedCacheNodesOfferingId == null ? '' : encodeURIComponent(ReservedCacheNodesOfferingId)) + '&CacheNodeType=' + (CacheNodeType == null ? '' : encodeURIComponent(CacheNodeType)) + '&Duration=' + (Duration == null ? '' : encodeURIComponent(Duration)) + '&ProductDescription=' + (ProductDescription == null ? '' : encodeURIComponent(ProductDescription)) + '&OfferingType=' + (OfferingType == null ? '' : encodeURIComponent(OfferingType)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists available reserved cache node offerings.
		 * Get #Action=DescribeReservedCacheNodesOfferings
		 * @param {string} ReservedCacheNodesOfferingId <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>
		 * @param {string} CacheNodeType <p>The cache node type filter value. Use this parameter to show only the available offerings matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
		 * @param {string} Duration <p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>
		 * @param {string} ProductDescription The product description filter value. Use this parameter to show only the available offerings matching the specified product description.
		 * @param {string} OfferingType <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeReservedCacheNodesOfferings(ReservedCacheNodesOfferingId: string, CacheNodeType: string, Duration: string, ProductDescription: string, OfferingType: string, MaxRecords: number, Marker: string, Action: GET_DescribeReservedCacheNodesOfferingsAction, Version: GET_DescribeReservedCacheNodesOfferingsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReservedCacheNodesOfferings?ReservedCacheNodesOfferingId=' + (ReservedCacheNodesOfferingId == null ? '' : encodeURIComponent(ReservedCacheNodesOfferingId)) + '&CacheNodeType=' + (CacheNodeType == null ? '' : encodeURIComponent(CacheNodeType)) + '&Duration=' + (Duration == null ? '' : encodeURIComponent(Duration)) + '&ProductDescription=' + (ProductDescription == null ? '' : encodeURIComponent(ProductDescription)) + '&OfferingType=' + (OfferingType == null ? '' : encodeURIComponent(OfferingType)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns details of the service updates
		 * Get #Action=DescribeServiceUpdates
		 * @param {string} ServiceUpdateName The unique ID of the service update
		 * @param {Array<ServiceUpdateStatus>} ServiceUpdateStatus The status of the service update
		 * @param {number} MaxRecords The maximum number of records to include in the response
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeServiceUpdates(ServiceUpdateName: string, ServiceUpdateStatus: Array<ServiceUpdateStatus>, MaxRecords: number, Marker: string, Action: GET_DescribeServiceUpdatesAction, Version: GET_DescribeServiceUpdatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeServiceUpdates?ServiceUpdateName=' + (ServiceUpdateName == null ? '' : encodeURIComponent(ServiceUpdateName)) + '&' + ServiceUpdateStatus.map(z => `ServiceUpdateStatus=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
		 * Get #Action=DescribeSnapshots
		 * @param {string} ReplicationGroupId A user-supplied replication group identifier. If this parameter is specified, only snapshots associated with that specific replication group are described.
		 * @param {string} CacheClusterId A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.
		 * @param {string} SnapshotName A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.
		 * @param {string} SnapshotSource If set to <code>system</code>, the output shows snapshots that were automatically created by ElastiCache. If set to <code>user</code> the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 50</p> <p>Constraints: minimum 20; maximum 50.</p>
		 * @param {boolean} ShowNodeGroupConfig A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.
		 * @return {void} Success
		 */
		GET_DescribeSnapshots(ReplicationGroupId: string, CacheClusterId: string, SnapshotName: string, SnapshotSource: string, Marker: string, MaxRecords: number, ShowNodeGroupConfig: boolean, Action: GET_DescribeSnapshotsAction, Version: GET_DescribeSnapshotsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeSnapshots?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&SnapshotName=' + (SnapshotName == null ? '' : encodeURIComponent(SnapshotName)) + '&SnapshotSource=' + (SnapshotSource == null ? '' : encodeURIComponent(SnapshotSource)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&ShowNodeGroupConfig=' + ShowNodeGroupConfig + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns details of the update actions
		 * Get #Action=DescribeUpdateActions
		 * @param {string} ServiceUpdateName The unique ID of the service update
		 * @param {Array<string>} ReplicationGroupIds The replication group IDs
		 * @param {Array<string>} CacheClusterIds The cache cluster IDs
		 * @param {string} Engine The Elasticache engine to which the update applies. Either Redis or Memcached 
		 * @param {Array<ServiceUpdateStatus>} ServiceUpdateStatus The status of the service update
		 * @param {GET_DescribeUpdateActionsServiceUpdateTimeRange} ServiceUpdateTimeRange The range of time specified to search for service updates that are in available status
		 * @param {Array<UpdateActionStatus>} UpdateActionStatus The status of the update action.
		 * @param {boolean} ShowNodeLevelUpdateStatus Dictates whether to include node level update status in the response 
		 * @param {number} MaxRecords The maximum number of records to include in the response
		 * @param {string} Marker An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeUpdateActions(ServiceUpdateName: string, ReplicationGroupIds: Array<string>, CacheClusterIds: Array<string>, Engine: string, ServiceUpdateStatus: Array<ServiceUpdateStatus>, ServiceUpdateTimeRange: GET_DescribeUpdateActionsServiceUpdateTimeRange, UpdateActionStatus: Array<UpdateActionStatus>, ShowNodeLevelUpdateStatus: boolean, MaxRecords: number, Marker: string, Action: GET_DescribeUpdateActionsAction, Version: GET_DescribeUpdateActionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeUpdateActions?ServiceUpdateName=' + (ServiceUpdateName == null ? '' : encodeURIComponent(ServiceUpdateName)) + '&' + ReplicationGroupIds.map(z => `ReplicationGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + CacheClusterIds.map(z => `CacheClusterIds=${encodeURIComponent(z)}`).join('&') + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&' + ServiceUpdateStatus.map(z => `ServiceUpdateStatus=${z}`).join('&') + '&ServiceUpdateTimeRange=' + ServiceUpdateTimeRange + '&' + UpdateActionStatus.map(z => `UpdateActionStatus=${z}`).join('&') + '&ShowNodeLevelUpdateStatus=' + ShowNodeLevelUpdateStatus + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a secondary cluster from the Global Datastore using the Global Datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that AWS region.
		 * Get #Action=DisassociateGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {string} ReplicationGroupId The name of the secondary cluster you wish to remove from the Global Datastore
		 * @param {string} ReplicationGroupRegion The AWS region of secondary cluster you wish to remove from the Global Datastore
		 * @return {void} Success
		 */
		GET_DisassociateGlobalReplicationGroup(GlobalReplicationGroupId: string, ReplicationGroupId: string, ReplicationGroupRegion: string, Action: GET_DisassociateGlobalReplicationGroupAction, Version: GET_DisassociateGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisassociateGlobalReplicationGroup?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&ReplicationGroupRegion=' + (ReplicationGroupRegion == null ? '' : encodeURIComponent(ReplicationGroupRegion)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Used to failover the primary region to a selected secondary region. The selected secondary region will be come primary, and all other clusters will become secondary.
		 * Get #Action=FailoverGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {string} PrimaryRegion The AWS region of the primary cluster of the Global Datastore
		 * @param {string} PrimaryReplicationGroupId The name of the primary replication group
		 * @return {void} Success
		 */
		GET_FailoverGlobalReplicationGroup(GlobalReplicationGroupId: string, PrimaryRegion: string, PrimaryReplicationGroupId: string, Action: GET_FailoverGlobalReplicationGroupAction, Version: GET_FailoverGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=FailoverGlobalReplicationGroup?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&PrimaryRegion=' + (PrimaryRegion == null ? '' : encodeURIComponent(PrimaryRegion)) + '&PrimaryReplicationGroupId=' + (PrimaryReplicationGroupId == null ? '' : encodeURIComponent(PrimaryReplicationGroupId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Increase the number of node groups in the Global Datastore
		 * Get #Action=IncreaseNodeGroupsInGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {number} NodeGroupCount The number of node groups you wish to add
		 * @param {Array<RegionalConfiguration>} RegionalConfigurations Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore
		 * @param {boolean} ApplyImmediately Indicates that the process begins immediately. At present, the only permitted value for this parameter is true.
		 * @return {void} Success
		 */
		GET_IncreaseNodeGroupsInGlobalReplicationGroup(GlobalReplicationGroupId: string, NodeGroupCount: number, RegionalConfigurations: Array<RegionalConfiguration>, ApplyImmediately: boolean, Action: GET_IncreaseNodeGroupsInGlobalReplicationGroupAction, Version: GET_IncreaseNodeGroupsInGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=IncreaseNodeGroupsInGlobalReplicationGroup?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&NodeGroupCount=' + NodeGroupCount + '&' + RegionalConfigurations.map(z => `RegionalConfigurations=${z}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Dynamically increases the number of replics in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
		 * Get #Action=IncreaseReplicaCount
		 * @param {string} ReplicationGroupId The id of the replication group to which you want to add replica nodes.
		 * @param {number} NewReplicaCount The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.
		 * @param {Array<ConfigureShard>} ReplicaConfiguration A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.
		 * @param {boolean} ApplyImmediately If <code>True</code>, the number of replica nodes is increased immediately. <code>ApplyImmediately=False</code> is not currently supported.
		 * @return {void} Success
		 */
		GET_IncreaseReplicaCount(ReplicationGroupId: string, NewReplicaCount: number, ReplicaConfiguration: Array<ConfigureShard>, ApplyImmediately: boolean, Action: GET_IncreaseReplicaCountAction, Version: GET_IncreaseReplicaCountVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=IncreaseReplicaCount?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&NewReplicaCount=' + NewReplicaCount + '&' + ReplicaConfiguration.map(z => `ReplicaConfiguration=${z}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
		 * Get #Action=ListAllowedNodeTypeModifications
		 * @param {string} CacheClusterId <p>The name of the cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>
		 * @param {string} ReplicationGroupId <p>The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>
		 * @return {void} Success
		 */
		GET_ListAllowedNodeTypeModifications(CacheClusterId: string, ReplicationGroupId: string, Action: GET_ListAllowedNodeTypeModificationsAction, Version: GET_ListAllowedNodeTypeModificationsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAllowedNodeTypeModifications?CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all cost allocation tags currently on the named resource. A <code>cost allocation tag</code> is a key-value pair where the key is case-sensitive and the value is optional. You can use cost allocation tags to categorize and track your AWS costs.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p> <p>You can have a maximum of 50 cost allocation tags on an ElastiCache resource. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Monitoring Costs with Tags</a>.</p>
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceName <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceName: string, Action: GET_ListTagsForResourceAction, Version: GET_ListTagsForResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
		 * Get #Action=ModifyCacheCluster
		 * @param {string} CacheClusterId The cluster identifier. This value is stored as a lowercase string.
		 * @param {number} NumCacheNodes <p>The number of cache nodes that the cluster should have. If the value for <code>NumCacheNodes</code> is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), more nodes are added. If the value is less than the number of existing cache nodes, nodes are removed. If the value is equal to the number of current cache nodes, any pending add or remove requests are canceled.</p> <p>If you are removing cache nodes, you must use the <code>CacheNodeIdsToRemove</code> parameter to provide the IDs of the specific cache nodes to remove.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.</p> <note> <p>Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see <code>ApplyImmediately</code>).</p> <p>A pending operation to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending operation to add nodes. The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending operations to modify the number of cache nodes in a cluster, use the <code>ModifyCacheCluster</code> request and set <code>NumCacheNodes</code> equal to the number of cache nodes currently in the cluster.</p> </note>
		 * @param {Array<string>} CacheNodeIdsToRemove <p>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when <code>NumCacheNodes</code> is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of <code>NumCacheNodes</code> in the request.</p> <p>For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this <code>ModifyCacheCluster</code> call is 5, you must list 2 (7 - 5) cache node IDs to remove.</p>
		 * @param {GET_ModifyCacheClusterAZMode} AZMode <p>Specifies whether the new nodes in this Memcached cluster are all created in a single Availability Zone or created across multiple Availability Zones.</p> <p>Valid values: <code>single-az</code> | <code>cross-az</code>.</p> <p>This option is only supported for Memcached clusters.</p> <note> <p>You cannot specify <code>single-az</code> if the Memcached cluster already has cache nodes in different Availability Zones. If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.</p> <p>Only newly created nodes are located in different Availability Zones. </p> </note>
		 * @param {Array<string>} NewAvailabilityZones <p>The list of Availability Zones where the new Memcached cache nodes are created.</p> <p>This parameter is only valid when <code>NumCacheNodes</code> in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request.</p> <p>This option is only supported on Memcached clusters.</p> <p>Scenarios:</p> <ul> <li> <p> <b>Scenario 1:</b> You have 3 active nodes and wish to add 2 nodes. Specify <code>NumCacheNodes=5</code> (3 + 2) and optionally specify two Availability Zones for the two new nodes.</p> </li> <li> <p> <b>Scenario 2:</b> You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify <code>NumCacheNodes=6</code> ((3 + 2) + 1) and optionally specify an Availability Zone for the new node.</p> </li> <li> <p> <b>Scenario 3:</b> You want to cancel all pending operations. Specify <code>NumCacheNodes=3</code> to cancel all pending operations.</p> </li> </ul> <p>The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting <code>NumCacheNodes</code> to the number of current nodes.</p> <p>If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the <b>Availability Zone Considerations</b> section of <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html">Cache Node Considerations for Memcached</a>.</p> <p> <b>Impact of new add/remove requests upon pending requests</b> </p> <ul> <li> <p>Scenario-1</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-2</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-3</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending create.</p> </li> </ul> </li> <li> <p>Scenario-4</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create is added to the pending create.</p> <important> <p> <b>Important:</b> If the new create request is <b>Apply Immediately - Yes</b>, all creates are performed immediately. If the new create request is <b>Apply Immediately - No</b>, all creates are pending.</p> </important> </li> </ul> </li> </ul>
		 * @param {Array<string>} CacheSecurityGroupNames <p>A list of cache security group names to authorize on this cluster. This change is asynchronously applied as soon as possible.</p> <p>You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".</p>
		 * @param {Array<string>} SecurityGroupIds <p>Specifies the VPC Security Groups associated with the cluster.</p> <p>This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).</p>
		 * @param {string} PreferredMaintenanceWindow <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>
		 * @param {string} NotificationTopicArn <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the cluster owner.</p> </note>
		 * @param {string} CacheParameterGroupName The name of the cache parameter group to apply to this cluster. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.
		 * @param {string} NotificationTopicStatus <p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> | <code>inactive</code> </p>
		 * @param {boolean} ApplyImmediately <p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster.</p> <p>If <code>false</code>, changes to the cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <important> <p>If you perform a <code>ModifyCacheCluster</code> before a pending modification is applied, the pending modification is replaced by the newer modification.</p> </important> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>
		 * @param {string} EngineVersion <p>The upgraded version of the cache engine to be run on the cache nodes.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version. </p>
		 * @param {boolean} AutoMinorVersionUpgrade This parameter is currently disabled.
		 * @param {number} SnapshotRetentionLimit <p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <note> <p>If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p> </note>
		 * @param {string} SnapshotWindow The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster. 
		 * @param {string} CacheNodeType A valid cache node type that you want to scale this cluster up to.
		 * @param {string} AuthToken <p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update</code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>
		 * @param {AuthTokenUpdateStrategyType} AuthTokenUpdateStrategy <p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>
		 * @return {void} Success
		 */
		GET_ModifyCacheCluster(CacheClusterId: string, NumCacheNodes: number, CacheNodeIdsToRemove: Array<string>, AZMode: GET_ModifyCacheClusterAZMode, NewAvailabilityZones: Array<string>, CacheSecurityGroupNames: Array<string>, SecurityGroupIds: Array<string>, PreferredMaintenanceWindow: string, NotificationTopicArn: string, CacheParameterGroupName: string, NotificationTopicStatus: string, ApplyImmediately: boolean, EngineVersion: string, AutoMinorVersionUpgrade: boolean, SnapshotRetentionLimit: number, SnapshotWindow: string, CacheNodeType: string, AuthToken: string, AuthTokenUpdateStrategy: AuthTokenUpdateStrategyType, Action: GET_ModifyCacheClusterAction, Version: GET_ModifyCacheClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyCacheCluster?CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&NumCacheNodes=' + NumCacheNodes + '&' + CacheNodeIdsToRemove.map(z => `CacheNodeIdsToRemove=${encodeURIComponent(z)}`).join('&') + '&AZMode=' + AZMode + '&' + NewAvailabilityZones.map(z => `NewAvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&' + CacheSecurityGroupNames.map(z => `CacheSecurityGroupNames=${encodeURIComponent(z)}`).join('&') + '&' + SecurityGroupIds.map(z => `SecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&NotificationTopicArn=' + (NotificationTopicArn == null ? '' : encodeURIComponent(NotificationTopicArn)) + '&CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&NotificationTopicStatus=' + (NotificationTopicStatus == null ? '' : encodeURIComponent(NotificationTopicStatus)) + '&ApplyImmediately=' + ApplyImmediately + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&SnapshotRetentionLimit=' + SnapshotRetentionLimit + '&SnapshotWindow=' + (SnapshotWindow == null ? '' : encodeURIComponent(SnapshotWindow)) + '&CacheNodeType=' + (CacheNodeType == null ? '' : encodeURIComponent(CacheNodeType)) + '&AuthToken=' + (AuthToken == null ? '' : encodeURIComponent(AuthToken)) + '&AuthTokenUpdateStrategy=' + AuthTokenUpdateStrategy + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
		 * Get #Action=ModifyCacheParameterGroup
		 * @param {string} CacheParameterGroupName The name of the cache parameter group to modify.
		 * @param {Array<ParameterNameValue>} ParameterNameValues An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.
		 * @return {void} Success
		 */
		GET_ModifyCacheParameterGroup(CacheParameterGroupName: string, ParameterNameValues: Array<ParameterNameValue>, Action: GET_ModifyCacheParameterGroupAction, Version: GET_ModifyCacheParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyCacheParameterGroup?CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&' + ParameterNameValues.map(z => `ParameterNameValues=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing cache subnet group.
		 * Get #Action=ModifyCacheSubnetGroup
		 * @param {string} CacheSubnetGroupName <p>The name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>
		 * @param {string} CacheSubnetGroupDescription A description of the cache subnet group.
		 * @param {Array<string>} SubnetIds The EC2 subnet IDs for the cache subnet group.
		 * @return {void} Success
		 */
		GET_ModifyCacheSubnetGroup(CacheSubnetGroupName: string, CacheSubnetGroupDescription: string, SubnetIds: Array<string>, Action: GET_ModifyCacheSubnetGroupAction, Version: GET_ModifyCacheSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyCacheSubnetGroup?CacheSubnetGroupName=' + (CacheSubnetGroupName == null ? '' : encodeURIComponent(CacheSubnetGroupName)) + '&CacheSubnetGroupDescription=' + (CacheSubnetGroupDescription == null ? '' : encodeURIComponent(CacheSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the settings for a Global Datastore.
		 * Get #Action=ModifyGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {boolean} ApplyImmediately This parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible. Modifications to Global Replication Groups cannot be requested to be applied in PreferredMaintenceWindow. 
		 * @param {string} CacheNodeType A valid cache node type that you want to scale this Global Datastore to.
		 * @param {string} EngineVersion The upgraded version of the cache engine to be run on the clusters in the Global Datastore. 
		 * @param {string} GlobalReplicationGroupDescription A description of the Global Datastore
		 * @param {boolean} AutomaticFailoverEnabled Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure. 
		 * @return {void} Success
		 */
		GET_ModifyGlobalReplicationGroup(GlobalReplicationGroupId: string, ApplyImmediately: boolean, CacheNodeType: string, EngineVersion: string, GlobalReplicationGroupDescription: string, AutomaticFailoverEnabled: boolean, Action: GET_ModifyGlobalReplicationGroupAction, Version: GET_ModifyGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyGlobalReplicationGroup?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&ApplyImmediately=' + ApplyImmediately + '&CacheNodeType=' + (CacheNodeType == null ? '' : encodeURIComponent(CacheNodeType)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&GlobalReplicationGroupDescription=' + (GlobalReplicationGroupDescription == null ? '' : encodeURIComponent(GlobalReplicationGroupDescription)) + '&AutomaticFailoverEnabled=' + AutomaticFailoverEnabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>
		 * Get #Action=ModifyReplicationGroup
		 * @param {string} ReplicationGroupId The identifier of the replication group to modify.
		 * @param {string} ReplicationGroupDescription A description for the replication group. Maximum length is 255 characters.
		 * @param {string} PrimaryClusterId For replication groups with a single primary, if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group are read replicas.
		 * @param {string} SnapshottingClusterId The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.
		 * @param {boolean} AutomaticFailoverEnabled <p>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.</p> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p> <ul> <li> <p>Redis versions earlier than 2.8.6.</p> </li> <li> <p>Redis (cluster mode disabled): T1 node types.</p> </li> <li> <p>Redis (cluster mode enabled): T1 node types.</p> </li> </ul>
		 * @param {string} NodeGroupId Deprecated. This parameter is not used.
		 * @param {Array<string>} CacheSecurityGroupNames <p>A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible.</p> <p>This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be <code>Default</code>.</p>
		 * @param {Array<string>} SecurityGroupIds <p>Specifies the VPC Security Groups associated with the clusters in the replication group.</p> <p>This parameter can be used only with replication group containing clusters running in an Amazon Virtual Private Cloud (Amazon VPC).</p>
		 * @param {string} PreferredMaintenanceWindow <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>
		 * @param {string} NotificationTopicArn <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the replication group owner. </p> </note>
		 * @param {string} CacheParameterGroupName The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.
		 * @param {string} NotificationTopicStatus <p>The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> | <code>inactive</code> </p>
		 * @param {boolean} ApplyImmediately <p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the replication group.</p> <p>If <code>false</code>, changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>
		 * @param {string} EngineVersion <p>The upgraded version of the cache engine to be run on the clusters in the replication group.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version. </p>
		 * @param {boolean} AutoMinorVersionUpgrade This parameter is currently disabled.
		 * @param {number} SnapshotRetentionLimit <p>The number of days for which ElastiCache retains automatic node group (shard) snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p> <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>
		 * @param {string} SnapshotWindow <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of the node group (shard) specified by <code>SnapshottingClusterId</code>.</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>
		 * @param {string} CacheNodeType A valid cache node type that you want to scale this replication group to.
		 * @param {string} AuthToken <p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update-strategy </code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>
		 * @param {AuthTokenUpdateStrategyType} AuthTokenUpdateStrategy <p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>
		 * @return {void} Success
		 */
		GET_ModifyReplicationGroup(ReplicationGroupId: string, ReplicationGroupDescription: string, PrimaryClusterId: string, SnapshottingClusterId: string, AutomaticFailoverEnabled: boolean, MultiAZEnabled: boolean, NodeGroupId: string, CacheSecurityGroupNames: Array<string>, SecurityGroupIds: Array<string>, PreferredMaintenanceWindow: string, NotificationTopicArn: string, CacheParameterGroupName: string, NotificationTopicStatus: string, ApplyImmediately: boolean, EngineVersion: string, AutoMinorVersionUpgrade: boolean, SnapshotRetentionLimit: number, SnapshotWindow: string, CacheNodeType: string, AuthToken: string, AuthTokenUpdateStrategy: AuthTokenUpdateStrategyType, Action: GET_ModifyReplicationGroupAction, Version: GET_ModifyReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyReplicationGroup?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&ReplicationGroupDescription=' + (ReplicationGroupDescription == null ? '' : encodeURIComponent(ReplicationGroupDescription)) + '&PrimaryClusterId=' + (PrimaryClusterId == null ? '' : encodeURIComponent(PrimaryClusterId)) + '&SnapshottingClusterId=' + (SnapshottingClusterId == null ? '' : encodeURIComponent(SnapshottingClusterId)) + '&AutomaticFailoverEnabled=' + AutomaticFailoverEnabled + '&MultiAZEnabled=' + MultiAZEnabled + '&NodeGroupId=' + (NodeGroupId == null ? '' : encodeURIComponent(NodeGroupId)) + '&' + CacheSecurityGroupNames.map(z => `CacheSecurityGroupNames=${encodeURIComponent(z)}`).join('&') + '&' + SecurityGroupIds.map(z => `SecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&NotificationTopicArn=' + (NotificationTopicArn == null ? '' : encodeURIComponent(NotificationTopicArn)) + '&CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&NotificationTopicStatus=' + (NotificationTopicStatus == null ? '' : encodeURIComponent(NotificationTopicStatus)) + '&ApplyImmediately=' + ApplyImmediately + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&SnapshotRetentionLimit=' + SnapshotRetentionLimit + '&SnapshotWindow=' + (SnapshotWindow == null ? '' : encodeURIComponent(SnapshotWindow)) + '&CacheNodeType=' + (CacheNodeType == null ? '' : encodeURIComponent(CacheNodeType)) + '&AuthToken=' + (AuthToken == null ? '' : encodeURIComponent(AuthToken)) + '&AuthTokenUpdateStrategy=' + AuthTokenUpdateStrategy + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among exisiting shards.
		 * Get #Action=ModifyReplicationGroupShardConfiguration
		 * @param {string} ReplicationGroupId The name of the Redis (cluster mode enabled) cluster (replication group) on which the shards are to be configured.
		 * @param {number} NodeGroupCount The number of node groups (shards) that results from the modification of the shard configuration.
		 * @param {boolean} ApplyImmediately <p>Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is <code>true</code>.</p> <p>Value: true</p>
		 * @param {Array<ReshardingConfiguration>} ReshardingConfiguration <p>Specifies the preferred availability zones for each node group in the cluster. If the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards), you can use this parameter to specify the preferred availability zones of the cluster's shards. If you omit this parameter ElastiCache selects availability zones for you.</p> <p>You can specify this parameter only if the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards).</p>
		 * @param {Array<string>} NodeGroupsToRemove <p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRemove</code> is a list of <code>NodeGroupId</code>s to remove from the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups listed by <code>NodeGroupsToRemove</code> from the cluster.</p>
		 * @param {Array<string>} NodeGroupsToRetain <p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRetain</code> is a list of <code>NodeGroupId</code>s to retain in the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups except those listed by <code>NodeGroupsToRetain</code> from the cluster.</p>
		 * @return {void} Success
		 */
		GET_ModifyReplicationGroupShardConfiguration(ReplicationGroupId: string, NodeGroupCount: number, ApplyImmediately: boolean, ReshardingConfiguration: Array<ReshardingConfiguration>, NodeGroupsToRemove: Array<string>, NodeGroupsToRetain: Array<string>, Action: GET_ModifyReplicationGroupShardConfigurationAction, Version: GET_ModifyReplicationGroupShardConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyReplicationGroupShardConfiguration?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&NodeGroupCount=' + NodeGroupCount + '&ApplyImmediately=' + ApplyImmediately + '&' + ReshardingConfiguration.map(z => `ReshardingConfiguration=${z}`).join('&') + '&' + NodeGroupsToRemove.map(z => `NodeGroupsToRemove=${encodeURIComponent(z)}`).join('&') + '&' + NodeGroupsToRetain.map(z => `NodeGroupsToRetain=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to purchase a reserved cache node offering.
		 * Get #Action=PurchaseReservedCacheNodesOffering
		 * @param {string} ReservedCacheNodesOfferingId <p>The ID of the reserved cache node offering to purchase.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>
		 * @param {string} ReservedCacheNodeId <p>A customer-specified identifier to track this reservation.</p> <note> <p>The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation. If this parameter is not specified, ElastiCache automatically generates an identifier for the reservation.</p> </note> <p>Example: myreservationID</p>
		 * @param {number} CacheNodeCount <p>The number of cache node instances to reserve.</p> <p>Default: <code>1</code> </p>
		 * @return {void} Success
		 */
		GET_PurchaseReservedCacheNodesOffering(ReservedCacheNodesOfferingId: string, ReservedCacheNodeId: string, CacheNodeCount: number, Action: GET_PurchaseReservedCacheNodesOfferingAction, Version: GET_PurchaseReservedCacheNodesOfferingVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PurchaseReservedCacheNodesOffering?ReservedCacheNodesOfferingId=' + (ReservedCacheNodesOfferingId == null ? '' : encodeURIComponent(ReservedCacheNodesOfferingId)) + '&ReservedCacheNodeId=' + (ReservedCacheNodeId == null ? '' : encodeURIComponent(ReservedCacheNodeId)) + '&CacheNodeCount=' + CacheNodeCount + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Redistribute slots to ensure uniform distribution across existing shards in the cluster.
		 * Get #Action=RebalanceSlotsInGlobalReplicationGroup
		 * @param {string} GlobalReplicationGroupId The name of the Global Datastore
		 * @param {boolean} ApplyImmediately If <code>True</code>, redistribution is applied immediately.
		 * @return {void} Success
		 */
		GET_RebalanceSlotsInGlobalReplicationGroup(GlobalReplicationGroupId: string, ApplyImmediately: boolean, Action: GET_RebalanceSlotsInGlobalReplicationGroupAction, Version: GET_RebalanceSlotsInGlobalReplicationGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebalanceSlotsInGlobalReplicationGroup?GlobalReplicationGroupId=' + (GlobalReplicationGroupId == null ? '' : encodeURIComponent(GlobalReplicationGroupId)) + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
		 * Get #Action=RebootCacheCluster
		 * @param {string} CacheClusterId The cluster identifier. This parameter is stored as a lowercase string.
		 * @param {Array<string>} CacheNodeIdsToReboot A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.
		 * @return {void} Success
		 */
		GET_RebootCacheCluster(CacheClusterId: string, CacheNodeIdsToReboot: Array<string>, Action: GET_RebootCacheClusterAction, Version: GET_RebootCacheClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebootCacheCluster?CacheClusterId=' + (CacheClusterId == null ? '' : encodeURIComponent(CacheClusterId)) + '&' + CacheNodeIdsToReboot.map(z => `CacheNodeIdsToReboot=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the tags identified by the <code>TagKeys</code> list from the named resource.
		 * Get #Action=RemoveTagsFromResource
		 * @param {string} ResourceName <p>The Amazon Resource Name (ARN) of the resource from which you want the tags removed, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
		 * @param {Array<string>} TagKeys A list of <code>TagKeys</code> identifying the tags you want removed from the named resource.
		 * @return {void} Success
		 */
		GET_RemoveTagsFromResource(ResourceName: string, TagKeys: Array<string>, Action: GET_RemoveTagsFromResourceAction, Version: GET_RemoveTagsFromResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveTagsFromResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.
		 * Get #Action=ResetCacheParameterGroup
		 * @param {string} CacheParameterGroupName The name of the cache parameter group to reset.
		 * @param {boolean} ResetAllParameters <p>If <code>true</code>, all parameters in the cache parameter group are reset to their default values. If <code>false</code>, only the parameters listed by <code>ParameterNameValues</code> are reset to their default values.</p> <p>Valid values: <code>true</code> | <code>false</code> </p>
		 * @param {Array<ParameterNameValue>} ParameterNameValues An array of parameter names to reset to their default values. If <code>ResetAllParameters</code> is <code>true</code>, do not use <code>ParameterNameValues</code>. If <code>ResetAllParameters</code> is <code>false</code>, you must specify the name of at least one parameter to reset.
		 * @return {void} Success
		 */
		GET_ResetCacheParameterGroup(CacheParameterGroupName: string, ResetAllParameters: boolean, ParameterNameValues: Array<ParameterNameValue>, Action: GET_ResetCacheParameterGroupAction, Version: GET_ResetCacheParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetCacheParameterGroup?CacheParameterGroupName=' + (CacheParameterGroupName == null ? '' : encodeURIComponent(CacheParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + ParameterNameValues.map(z => `ParameterNameValues=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
		 * Get #Action=RevokeCacheSecurityGroupIngress
		 * @param {string} CacheSecurityGroupName The name of the cache security group to revoke ingress from.
		 * @param {string} EC2SecurityGroupName The name of the Amazon EC2 security group to revoke access from.
		 * @param {string} EC2SecurityGroupOwnerId The AWS account number of the Amazon EC2 security group owner. Note that this is not the same thing as an AWS access key ID - you must provide a valid AWS account number for this parameter.
		 * @return {void} Success
		 */
		GET_RevokeCacheSecurityGroupIngress(CacheSecurityGroupName: string, EC2SecurityGroupName: string, EC2SecurityGroupOwnerId: string, Action: GET_RevokeCacheSecurityGroupIngressAction, Version: GET_RevokeCacheSecurityGroupIngressVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RevokeCacheSecurityGroupIngress?CacheSecurityGroupName=' + (CacheSecurityGroupName == null ? '' : encodeURIComponent(CacheSecurityGroupName)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start the migration of data.
		 * Get #Action=StartMigration
		 * @param {string} ReplicationGroupId The ID of the replication group to which data should be migrated.
		 * @param {Array<CustomerNodeEndpoint>} CustomerNodeEndpointList List of endpoints from which data should be migrated. For Redis (cluster mode disabled), list should have only one element.
		 * @return {void} Success
		 */
		GET_StartMigration(ReplicationGroupId: string, CustomerNodeEndpointList: Array<CustomerNodeEndpoint>, Action: GET_StartMigrationAction, Version: GET_StartMigrationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StartMigration?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&' + CustomerNodeEndpointList.map(z => `CustomerNodeEndpointList=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and AWS CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the AWS CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from master node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ with Automatic Failover</a> in the <i>ElastiCache User Guide</i>.</p>
		 * Get #Action=TestFailover
		 * @param {string} ReplicationGroupId The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.
		 * @param {string} NodeGroupId The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 5 node groups in any rolling 24-hour period.
		 * @return {void} Success
		 */
		GET_TestFailover(ReplicationGroupId: string, NodeGroupId: string, Action: GET_TestFailoverAction, Version: GET_TestFailoverVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TestFailover?ReplicationGroupId=' + (ReplicationGroupId == null ? '' : encodeURIComponent(ReplicationGroupId)) + '&NodeGroupId=' + (NodeGroupId == null ? '' : encodeURIComponent(NodeGroupId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddTagsToResourceAction { AddTagsToResource = 0 }

	export enum GET_AddTagsToResourceVersion { _2015_02_02 = 0 }

	export enum POST_AddTagsToResourceVersion { _2015_02_02 = 0 }

	export enum GET_AuthorizeCacheSecurityGroupIngressAction { AuthorizeCacheSecurityGroupIngress = 0 }

	export enum GET_AuthorizeCacheSecurityGroupIngressVersion { _2015_02_02 = 0 }

	export enum POST_AuthorizeCacheSecurityGroupIngressVersion { _2015_02_02 = 0 }

	export enum GET_BatchApplyUpdateActionAction { BatchApplyUpdateAction = 0 }

	export enum GET_BatchApplyUpdateActionVersion { _2015_02_02 = 0 }

	export enum POST_BatchApplyUpdateActionVersion { _2015_02_02 = 0 }

	export enum GET_BatchStopUpdateActionAction { BatchStopUpdateAction = 0 }

	export enum GET_BatchStopUpdateActionVersion { _2015_02_02 = 0 }

	export enum POST_BatchStopUpdateActionVersion { _2015_02_02 = 0 }

	export enum GET_CompleteMigrationAction { CompleteMigration = 0 }

	export enum GET_CompleteMigrationVersion { _2015_02_02 = 0 }

	export enum POST_CompleteMigrationVersion { _2015_02_02 = 0 }

	export enum GET_CopySnapshotAction { CopySnapshot = 0 }

	export enum GET_CopySnapshotVersion { _2015_02_02 = 0 }

	export enum POST_CopySnapshotVersion { _2015_02_02 = 0 }

	export enum GET_CreateCacheClusterAZMode { single_az = 0, cross_az = 1 }

	export enum GET_CreateCacheClusterAction { CreateCacheCluster = 0 }

	export enum GET_CreateCacheClusterVersion { _2015_02_02 = 0 }

	export enum POST_CreateCacheClusterVersion { _2015_02_02 = 0 }

	export enum GET_CreateCacheParameterGroupAction { CreateCacheParameterGroup = 0 }

	export enum GET_CreateCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum POST_CreateCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum GET_CreateCacheSecurityGroupAction { CreateCacheSecurityGroup = 0 }

	export enum GET_CreateCacheSecurityGroupVersion { _2015_02_02 = 0 }

	export enum POST_CreateCacheSecurityGroupVersion { _2015_02_02 = 0 }

	export enum GET_CreateCacheSubnetGroupAction { CreateCacheSubnetGroup = 0 }

	export enum GET_CreateCacheSubnetGroupVersion { _2015_02_02 = 0 }

	export enum POST_CreateCacheSubnetGroupVersion { _2015_02_02 = 0 }

	export enum GET_CreateGlobalReplicationGroupAction { CreateGlobalReplicationGroup = 0 }

	export enum GET_CreateGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_CreateGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_CreateReplicationGroupAction { CreateReplicationGroup = 0 }

	export enum GET_CreateReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_CreateReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_CreateSnapshotAction { CreateSnapshot = 0 }

	export enum GET_CreateSnapshotVersion { _2015_02_02 = 0 }

	export enum POST_CreateSnapshotVersion { _2015_02_02 = 0 }

	export enum GET_DecreaseNodeGroupsInGlobalReplicationGroupAction { DecreaseNodeGroupsInGlobalReplicationGroup = 0 }

	export enum GET_DecreaseNodeGroupsInGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_DecreaseNodeGroupsInGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_DecreaseReplicaCountAction { DecreaseReplicaCount = 0 }

	export enum GET_DecreaseReplicaCountVersion { _2015_02_02 = 0 }

	export enum POST_DecreaseReplicaCountVersion { _2015_02_02 = 0 }

	export enum GET_DeleteCacheClusterAction { DeleteCacheCluster = 0 }

	export enum GET_DeleteCacheClusterVersion { _2015_02_02 = 0 }

	export enum POST_DeleteCacheClusterVersion { _2015_02_02 = 0 }

	export enum GET_DeleteCacheParameterGroupAction { DeleteCacheParameterGroup = 0 }

	export enum GET_DeleteCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum POST_DeleteCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum GET_DeleteCacheSecurityGroupAction { DeleteCacheSecurityGroup = 0 }

	export enum GET_DeleteCacheSecurityGroupVersion { _2015_02_02 = 0 }

	export enum POST_DeleteCacheSecurityGroupVersion { _2015_02_02 = 0 }

	export enum GET_DeleteCacheSubnetGroupAction { DeleteCacheSubnetGroup = 0 }

	export enum GET_DeleteCacheSubnetGroupVersion { _2015_02_02 = 0 }

	export enum POST_DeleteCacheSubnetGroupVersion { _2015_02_02 = 0 }

	export enum GET_DeleteGlobalReplicationGroupAction { DeleteGlobalReplicationGroup = 0 }

	export enum GET_DeleteGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_DeleteGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_DeleteReplicationGroupAction { DeleteReplicationGroup = 0 }

	export enum GET_DeleteReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_DeleteReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_DeleteSnapshotAction { DeleteSnapshot = 0 }

	export enum GET_DeleteSnapshotVersion { _2015_02_02 = 0 }

	export enum POST_DeleteSnapshotVersion { _2015_02_02 = 0 }

	export enum GET_DescribeCacheClustersAction { DescribeCacheClusters = 0 }

	export enum GET_DescribeCacheClustersVersion { _2015_02_02 = 0 }

	export enum POST_DescribeCacheClustersVersion { _2015_02_02 = 0 }

	export enum GET_DescribeCacheEngineVersionsAction { DescribeCacheEngineVersions = 0 }

	export enum GET_DescribeCacheEngineVersionsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeCacheEngineVersionsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeCacheParameterGroupsAction { DescribeCacheParameterGroups = 0 }

	export enum GET_DescribeCacheParameterGroupsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeCacheParameterGroupsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeCacheParametersAction { DescribeCacheParameters = 0 }

	export enum GET_DescribeCacheParametersVersion { _2015_02_02 = 0 }

	export enum POST_DescribeCacheParametersVersion { _2015_02_02 = 0 }

	export enum GET_DescribeCacheSecurityGroupsAction { DescribeCacheSecurityGroups = 0 }

	export enum GET_DescribeCacheSecurityGroupsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeCacheSecurityGroupsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeCacheSubnetGroupsAction { DescribeCacheSubnetGroups = 0 }

	export enum GET_DescribeCacheSubnetGroupsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeCacheSubnetGroupsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeEngineDefaultParametersAction { DescribeEngineDefaultParameters = 0 }

	export enum GET_DescribeEngineDefaultParametersVersion { _2015_02_02 = 0 }

	export enum POST_DescribeEngineDefaultParametersVersion { _2015_02_02 = 0 }

	export enum GET_DescribeEventsSourceType { cache_cluster = 0, cache_parameter_group = 1, cache_security_group = 2, cache_subnet_group = 3, replication_group = 4 }

	export enum GET_DescribeEventsAction { DescribeEvents = 0 }

	export enum GET_DescribeEventsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeEventsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeGlobalReplicationGroupsAction { DescribeGlobalReplicationGroups = 0 }

	export enum GET_DescribeGlobalReplicationGroupsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeGlobalReplicationGroupsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeReplicationGroupsAction { DescribeReplicationGroups = 0 }

	export enum GET_DescribeReplicationGroupsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeReplicationGroupsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeReservedCacheNodesAction { DescribeReservedCacheNodes = 0 }

	export enum GET_DescribeReservedCacheNodesVersion { _2015_02_02 = 0 }

	export enum POST_DescribeReservedCacheNodesVersion { _2015_02_02 = 0 }

	export enum GET_DescribeReservedCacheNodesOfferingsAction { DescribeReservedCacheNodesOfferings = 0 }

	export enum GET_DescribeReservedCacheNodesOfferingsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeReservedCacheNodesOfferingsVersion { _2015_02_02 = 0 }

	export enum GET_DescribeServiceUpdatesAction { DescribeServiceUpdates = 0 }

	export enum GET_DescribeServiceUpdatesVersion { _2015_02_02 = 0 }

	export enum POST_DescribeServiceUpdatesVersion { _2015_02_02 = 0 }

	export enum GET_DescribeSnapshotsAction { DescribeSnapshots = 0 }

	export enum GET_DescribeSnapshotsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeSnapshotsVersion { _2015_02_02 = 0 }

	export interface GET_DescribeUpdateActionsServiceUpdateTimeRange {
		StartTime?: Date | null;
		EndTime?: Date | null;
	}

	export enum GET_DescribeUpdateActionsAction { DescribeUpdateActions = 0 }

	export enum GET_DescribeUpdateActionsVersion { _2015_02_02 = 0 }

	export enum POST_DescribeUpdateActionsVersion { _2015_02_02 = 0 }

	export enum GET_DisassociateGlobalReplicationGroupAction { DisassociateGlobalReplicationGroup = 0 }

	export enum GET_DisassociateGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_DisassociateGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_FailoverGlobalReplicationGroupAction { FailoverGlobalReplicationGroup = 0 }

	export enum GET_FailoverGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_FailoverGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_IncreaseNodeGroupsInGlobalReplicationGroupAction { IncreaseNodeGroupsInGlobalReplicationGroup = 0 }

	export enum GET_IncreaseNodeGroupsInGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_IncreaseNodeGroupsInGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_IncreaseReplicaCountAction { IncreaseReplicaCount = 0 }

	export enum GET_IncreaseReplicaCountVersion { _2015_02_02 = 0 }

	export enum POST_IncreaseReplicaCountVersion { _2015_02_02 = 0 }

	export enum GET_ListAllowedNodeTypeModificationsAction { ListAllowedNodeTypeModifications = 0 }

	export enum GET_ListAllowedNodeTypeModificationsVersion { _2015_02_02 = 0 }

	export enum POST_ListAllowedNodeTypeModificationsVersion { _2015_02_02 = 0 }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 0 }

	export enum GET_ListTagsForResourceVersion { _2015_02_02 = 0 }

	export enum POST_ListTagsForResourceVersion { _2015_02_02 = 0 }

	export enum GET_ModifyCacheClusterAZMode { single_az = 0, cross_az = 1 }

	export enum GET_ModifyCacheClusterAction { ModifyCacheCluster = 0 }

	export enum GET_ModifyCacheClusterVersion { _2015_02_02 = 0 }

	export enum POST_ModifyCacheClusterVersion { _2015_02_02 = 0 }

	export enum GET_ModifyCacheParameterGroupAction { ModifyCacheParameterGroup = 0 }

	export enum GET_ModifyCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum POST_ModifyCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum GET_ModifyCacheSubnetGroupAction { ModifyCacheSubnetGroup = 0 }

	export enum GET_ModifyCacheSubnetGroupVersion { _2015_02_02 = 0 }

	export enum POST_ModifyCacheSubnetGroupVersion { _2015_02_02 = 0 }

	export enum GET_ModifyGlobalReplicationGroupAction { ModifyGlobalReplicationGroup = 0 }

	export enum GET_ModifyGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_ModifyGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_ModifyReplicationGroupAction { ModifyReplicationGroup = 0 }

	export enum GET_ModifyReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_ModifyReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_ModifyReplicationGroupShardConfigurationAction { ModifyReplicationGroupShardConfiguration = 0 }

	export enum GET_ModifyReplicationGroupShardConfigurationVersion { _2015_02_02 = 0 }

	export enum POST_ModifyReplicationGroupShardConfigurationVersion { _2015_02_02 = 0 }

	export enum GET_PurchaseReservedCacheNodesOfferingAction { PurchaseReservedCacheNodesOffering = 0 }

	export enum GET_PurchaseReservedCacheNodesOfferingVersion { _2015_02_02 = 0 }

	export enum POST_PurchaseReservedCacheNodesOfferingVersion { _2015_02_02 = 0 }

	export enum GET_RebalanceSlotsInGlobalReplicationGroupAction { RebalanceSlotsInGlobalReplicationGroup = 0 }

	export enum GET_RebalanceSlotsInGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum POST_RebalanceSlotsInGlobalReplicationGroupVersion { _2015_02_02 = 0 }

	export enum GET_RebootCacheClusterAction { RebootCacheCluster = 0 }

	export enum GET_RebootCacheClusterVersion { _2015_02_02 = 0 }

	export enum POST_RebootCacheClusterVersion { _2015_02_02 = 0 }

	export enum GET_RemoveTagsFromResourceAction { RemoveTagsFromResource = 0 }

	export enum GET_RemoveTagsFromResourceVersion { _2015_02_02 = 0 }

	export enum POST_RemoveTagsFromResourceVersion { _2015_02_02 = 0 }

	export enum GET_ResetCacheParameterGroupAction { ResetCacheParameterGroup = 0 }

	export enum GET_ResetCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum POST_ResetCacheParameterGroupVersion { _2015_02_02 = 0 }

	export enum GET_RevokeCacheSecurityGroupIngressAction { RevokeCacheSecurityGroupIngress = 0 }

	export enum GET_RevokeCacheSecurityGroupIngressVersion { _2015_02_02 = 0 }

	export enum POST_RevokeCacheSecurityGroupIngressVersion { _2015_02_02 = 0 }

	export enum GET_StartMigrationAction { StartMigration = 0 }

	export enum GET_StartMigrationVersion { _2015_02_02 = 0 }

	export enum POST_StartMigrationVersion { _2015_02_02 = 0 }

	export enum GET_TestFailoverAction { TestFailover = 0 }

	export enum GET_TestFailoverVersion { _2015_02_02 = 0 }

	export enum POST_TestFailoverVersion { _2015_02_02 = 0 }

}

