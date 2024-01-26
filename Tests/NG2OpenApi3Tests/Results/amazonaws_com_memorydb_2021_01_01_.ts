import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchUpdateClusterResponse {
		ProcessedClusters?: Array<Cluster>;
		UnprocessedClusters?: Array<UnprocessedCluster>;
	}
	export interface BatchUpdateClusterResponseFormProperties {
	}
	export function CreateBatchUpdateClusterResponseFormGroup() {
		return new FormGroup<BatchUpdateClusterResponseFormProperties>({
		});

	}


	/** Contains all of the attributes of a specific cluster. */
	export interface Cluster {
		Name?: string;
		Description?: string;
		Status?: string;
		PendingUpdates?: ClusterPendingUpdates;
		NumberOfShards?: number | null;
		Shards?: Array<Shard>;
		AvailabilityMode?: AZStatus;
		ClusterEndpoint?: Endpoint;
		NodeType?: string;
		EngineVersion?: string;
		EnginePatchVersion?: string;
		ParameterGroupName?: string;
		ParameterGroupStatus?: string;
		SecurityGroups?: Array<SecurityGroupMembership>;
		SubnetGroupName?: string;
		TLSEnabled?: boolean | null;
		KmsKeyId?: string;
		ARN?: string;
		SnsTopicArn?: string;
		SnsTopicStatus?: string;
		SnapshotRetentionLimit?: number | null;
		MaintenanceWindow?: string;
		SnapshotWindow?: string;
		ACLName?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		DataTiering?: DataTieringStatus;
	}

	/** Contains all of the attributes of a specific cluster. */
	export interface ClusterFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		NumberOfShards: FormControl<number | null | undefined>,
		AvailabilityMode: FormControl<AZStatus | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		EnginePatchVersion: FormControl<string | null | undefined>,
		ParameterGroupName: FormControl<string | null | undefined>,
		ParameterGroupStatus: FormControl<string | null | undefined>,
		SubnetGroupName: FormControl<string | null | undefined>,
		TLSEnabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SnsTopicStatus: FormControl<string | null | undefined>,
		SnapshotRetentionLimit: FormControl<number | null | undefined>,
		MaintenanceWindow: FormControl<string | null | undefined>,
		SnapshotWindow: FormControl<string | null | undefined>,
		ACLName: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		DataTiering: FormControl<DataTieringStatus | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			NumberOfShards: new FormControl<number | null | undefined>(undefined),
			AvailabilityMode: new FormControl<AZStatus | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			EnginePatchVersion: new FormControl<string | null | undefined>(undefined),
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterGroupStatus: new FormControl<string | null | undefined>(undefined),
			SubnetGroupName: new FormControl<string | null | undefined>(undefined),
			TLSEnabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicStatus: new FormControl<string | null | undefined>(undefined),
			SnapshotRetentionLimit: new FormControl<number | null | undefined>(undefined),
			MaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			SnapshotWindow: new FormControl<string | null | undefined>(undefined),
			ACLName: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			DataTiering: new FormControl<DataTieringStatus | null | undefined>(undefined),
		});

	}


	/** A list of updates being applied to the cluster */
	export interface ClusterPendingUpdates {
		Resharding?: ReshardingStatus;
		ACLs?: ACLsUpdateStatus;
		ServiceUpdates?: Array<PendingModifiedServiceUpdate>;
	}

	/** A list of updates being applied to the cluster */
	export interface ClusterPendingUpdatesFormProperties {
	}
	export function CreateClusterPendingUpdatesFormGroup() {
		return new FormGroup<ClusterPendingUpdatesFormProperties>({
		});

	}


	/** The status of the online resharding */
	export interface ReshardingStatus {
		SlotMigration?: SlotMigration;
	}

	/** The status of the online resharding */
	export interface ReshardingStatusFormProperties {
	}
	export function CreateReshardingStatusFormGroup() {
		return new FormGroup<ReshardingStatusFormProperties>({
		});

	}


	/** Represents the progress of an online resharding operation. */
	export interface SlotMigration {
		ProgressPercentage?: number | null;
	}

	/** Represents the progress of an online resharding operation. */
	export interface SlotMigrationFormProperties {
		ProgressPercentage: FormControl<number | null | undefined>,
	}
	export function CreateSlotMigrationFormGroup() {
		return new FormGroup<SlotMigrationFormProperties>({
			ProgressPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The status of the ACL update */
	export interface ACLsUpdateStatus {
		ACLToApply?: string;
	}

	/** The status of the ACL update */
	export interface ACLsUpdateStatusFormProperties {
		ACLToApply: FormControl<string | null | undefined>,
	}
	export function CreateACLsUpdateStatusFormGroup() {
		return new FormGroup<ACLsUpdateStatusFormProperties>({
			ACLToApply: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update action that has yet to be processed for the corresponding apply/stop request */
	export interface PendingModifiedServiceUpdate {
		ServiceUpdateName?: string;
		Status?: ServiceUpdateStatus;
	}

	/** Update action that has yet to be processed for the corresponding apply/stop request */
	export interface PendingModifiedServiceUpdateFormProperties {
		ServiceUpdateName: FormControl<string | null | undefined>,
		Status: FormControl<ServiceUpdateStatus | null | undefined>,
	}
	export function CreatePendingModifiedServiceUpdateFormGroup() {
		return new FormGroup<PendingModifiedServiceUpdateFormProperties>({
			ServiceUpdateName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ServiceUpdateStatus | null | undefined>(undefined),
		});

	}

	export enum ServiceUpdateStatus { available = 0, 'in-progress' = 1, complete = 2, scheduled = 3 }


	/** Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes. */
	export interface Shard {
		Name?: string;
		Status?: string;
		Slots?: string;
		Nodes?: Array<Node>;
		NumberOfNodes?: number | null;
	}

	/** Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes. */
	export interface ShardFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Slots: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
	}
	export function CreateShardFormGroup() {
		return new FormGroup<ShardFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Slots: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software. */
	export interface Node {
		Name?: string;
		Status?: string;
		AvailabilityZone?: string;
		CreateTime?: Date;
		Endpoint?: Endpoint;
	}

	/** Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software. */
	export interface NodeFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the information required for client programs to connect to the cluster and its nodes. */
	export interface Endpoint {
		Address?: string;
		Port?: number | null;
	}

	/** Represents the information required for client programs to connect to the cluster and its nodes. */
	export interface EndpointFormProperties {
		Address: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AZStatus { singleaz = 0, multiaz = 1 }


	/** Represents a single security group and its status. */
	export interface SecurityGroupMembership {
		SecurityGroupId?: string;
		Status?: string;
	}

	/** Represents a single security group and its status. */
	export interface SecurityGroupMembershipFormProperties {
		SecurityGroupId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateSecurityGroupMembershipFormGroup() {
		return new FormGroup<SecurityGroupMembershipFormProperties>({
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataTieringStatus { true = 0, false = 1 }


	/** A cluster whose updates have failed */
	export interface UnprocessedCluster {
		ClusterName?: string;
		ErrorType?: string;
		ErrorMessage?: string;
	}

	/** A cluster whose updates have failed */
	export interface UnprocessedClusterFormProperties {
		ClusterName: FormControl<string | null | undefined>,
		ErrorType: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedClusterFormGroup() {
		return new FormGroup<UnprocessedClusterFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined),
			ErrorType: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateClusterRequest {

		/** Required */
		ClusterNames: Array<string>;
		ServiceUpdate?: ServiceUpdateRequest;
	}
	export interface BatchUpdateClusterRequestFormProperties {
	}
	export function CreateBatchUpdateClusterRequestFormGroup() {
		return new FormGroup<BatchUpdateClusterRequestFormProperties>({
		});

	}


	/** A request to apply a service update */
	export interface ServiceUpdateRequest {
		ServiceUpdateNameToApply?: string;
	}

	/** A request to apply a service update */
	export interface ServiceUpdateRequestFormProperties {
		ServiceUpdateNameToApply: FormControl<string | null | undefined>,
	}
	export function CreateServiceUpdateRequestFormGroup() {
		return new FormGroup<ServiceUpdateRequestFormProperties>({
			ServiceUpdateNameToApply: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceUpdateNotFoundFault {
	}
	export interface ServiceUpdateNotFoundFaultFormProperties {
	}
	export function CreateServiceUpdateNotFoundFaultFormGroup() {
		return new FormGroup<ServiceUpdateNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface CopySnapshotResponse {
		Snapshot?: Snapshot;
	}
	export interface CopySnapshotResponseFormProperties {
	}
	export function CreateCopySnapshotResponseFormGroup() {
		return new FormGroup<CopySnapshotResponseFormProperties>({
		});

	}


	/** Represents a copy of an entire cluster as of the time when the snapshot was taken. */
	export interface Snapshot {
		Name?: string;
		Status?: string;
		Source?: string;
		KmsKeyId?: string;
		ARN?: string;
		ClusterConfiguration?: ClusterConfiguration;
		DataTiering?: DataTieringStatus;
	}

	/** Represents a copy of an entire cluster as of the time when the snapshot was taken. */
	export interface SnapshotFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		DataTiering: FormControl<DataTieringStatus | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			DataTiering: new FormControl<DataTieringStatus | null | undefined>(undefined),
		});

	}


	/** A list of cluster configuration options.  */
	export interface ClusterConfiguration {
		Name?: string;
		Description?: string;
		NodeType?: string;
		EngineVersion?: string;
		MaintenanceWindow?: string;
		TopicArn?: string;
		Port?: number | null;
		ParameterGroupName?: string;
		SubnetGroupName?: string;
		VpcId?: string;
		SnapshotRetentionLimit?: number | null;
		SnapshotWindow?: string;
		NumShards?: number | null;
		Shards?: Array<ShardDetail>;
	}

	/** A list of cluster configuration options.  */
	export interface ClusterConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		MaintenanceWindow: FormControl<string | null | undefined>,
		TopicArn: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ParameterGroupName: FormControl<string | null | undefined>,
		SubnetGroupName: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SnapshotRetentionLimit: FormControl<number | null | undefined>,
		SnapshotWindow: FormControl<string | null | undefined>,
		NumShards: FormControl<number | null | undefined>,
	}
	export function CreateClusterConfigurationFormGroup() {
		return new FormGroup<ClusterConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			MaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			TopicArn: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			SubnetGroupName: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SnapshotRetentionLimit: new FormControl<number | null | undefined>(undefined),
			SnapshotWindow: new FormControl<string | null | undefined>(undefined),
			NumShards: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides details of a shard in a snapshot */
	export interface ShardDetail {
		Name?: string;
		Configuration?: ShardConfiguration;
		Size?: string;
		SnapshotCreationTime?: Date;
	}

	/** Provides details of a shard in a snapshot */
	export interface ShardDetailFormProperties {
		Name: FormControl<string | null | undefined>,
		Size: FormControl<string | null | undefined>,
		SnapshotCreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateShardDetailFormGroup() {
		return new FormGroup<ShardDetailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			SnapshotCreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount. */
	export interface ShardConfiguration {
		Slots?: string;
		ReplicaCount?: number | null;
	}

	/** Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount. */
	export interface ShardConfigurationFormProperties {
		Slots: FormControl<string | null | undefined>,
		ReplicaCount: FormControl<number | null | undefined>,
	}
	export function CreateShardConfigurationFormGroup() {
		return new FormGroup<ShardConfigurationFormProperties>({
			Slots: new FormControl<string | null | undefined>(undefined),
			ReplicaCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CopySnapshotRequest {

		/** Required */
		SourceSnapshotName: string;

		/** Required */
		TargetSnapshotName: string;
		TargetBucket?: string;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
	}
	export interface CopySnapshotRequestFormProperties {

		/** Required */
		SourceSnapshotName: FormControl<string | null | undefined>,

		/** Required */
		TargetSnapshotName: FormControl<string | null | undefined>,
		TargetBucket: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCopySnapshotRequestFormGroup() {
		return new FormGroup<CopySnapshotRequestFormProperties>({
			SourceSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetBucket: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html">Tagging your MemoryDB resources</a>  */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html">Tagging your MemoryDB resources</a>  */
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

	export interface SnapshotAlreadyExistsFault {
	}
	export interface SnapshotAlreadyExistsFaultFormProperties {
	}
	export function CreateSnapshotAlreadyExistsFaultFormGroup() {
		return new FormGroup<SnapshotAlreadyExistsFaultFormProperties>({
		});

	}

	export interface SnapshotNotFoundFault {
	}
	export interface SnapshotNotFoundFaultFormProperties {
	}
	export function CreateSnapshotNotFoundFaultFormGroup() {
		return new FormGroup<SnapshotNotFoundFaultFormProperties>({
		});

	}

	export interface SnapshotQuotaExceededFault {
	}
	export interface SnapshotQuotaExceededFaultFormProperties {
	}
	export function CreateSnapshotQuotaExceededFaultFormGroup() {
		return new FormGroup<SnapshotQuotaExceededFaultFormProperties>({
		});

	}

	export interface InvalidSnapshotStateFault {
	}
	export interface InvalidSnapshotStateFaultFormProperties {
	}
	export function CreateInvalidSnapshotStateFaultFormGroup() {
		return new FormGroup<InvalidSnapshotStateFaultFormProperties>({
		});

	}

	export interface ServiceLinkedRoleNotFoundFault {
	}
	export interface ServiceLinkedRoleNotFoundFaultFormProperties {
	}
	export function CreateServiceLinkedRoleNotFoundFaultFormGroup() {
		return new FormGroup<ServiceLinkedRoleNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
		});

	}

	export interface TagQuotaPerResourceExceeded {
	}
	export interface TagQuotaPerResourceExceededFormProperties {
	}
	export function CreateTagQuotaPerResourceExceededFormGroup() {
		return new FormGroup<TagQuotaPerResourceExceededFormProperties>({
		});

	}

	export interface CreateACLResponse {
		ACL?: ACL;
	}
	export interface CreateACLResponseFormProperties {
	}
	export function CreateCreateACLResponseFormGroup() {
		return new FormGroup<CreateACLResponseFormProperties>({
		});

	}


	/** An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters. */
	export interface ACL {
		Name?: string;
		Status?: string;
		UserNames?: Array<string>;
		MinimumEngineVersion?: string;
		PendingChanges?: ACLPendingChanges;
		Clusters?: Array<string>;
		ARN?: string;
	}

	/** An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters. */
	export interface ACLFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		MinimumEngineVersion: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateACLFormGroup() {
		return new FormGroup<ACLFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			MinimumEngineVersion: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the updates being applied to the ACL. */
	export interface ACLPendingChanges {
		UserNamesToRemove?: Array<string>;
		UserNamesToAdd?: Array<string>;
	}

	/** Returns the updates being applied to the ACL. */
	export interface ACLPendingChangesFormProperties {
	}
	export function CreateACLPendingChangesFormGroup() {
		return new FormGroup<ACLPendingChangesFormProperties>({
		});

	}

	export interface CreateACLRequest {

		/** Required */
		ACLName: string;
		UserNames?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateACLRequestFormProperties {

		/** Required */
		ACLName: FormControl<string | null | undefined>,
	}
	export function CreateCreateACLRequestFormGroup() {
		return new FormGroup<CreateACLRequestFormProperties>({
			ACLName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserNotFoundFault {
	}
	export interface UserNotFoundFaultFormProperties {
	}
	export function CreateUserNotFoundFaultFormGroup() {
		return new FormGroup<UserNotFoundFaultFormProperties>({
		});

	}

	export interface DuplicateUserNameFault {
	}
	export interface DuplicateUserNameFaultFormProperties {
	}
	export function CreateDuplicateUserNameFaultFormGroup() {
		return new FormGroup<DuplicateUserNameFaultFormProperties>({
		});

	}

	export interface ACLAlreadyExistsFault {
	}
	export interface ACLAlreadyExistsFaultFormProperties {
	}
	export function CreateACLAlreadyExistsFaultFormGroup() {
		return new FormGroup<ACLAlreadyExistsFaultFormProperties>({
		});

	}

	export interface DefaultUserRequired {
	}
	export interface DefaultUserRequiredFormProperties {
	}
	export function CreateDefaultUserRequiredFormGroup() {
		return new FormGroup<DefaultUserRequiredFormProperties>({
		});

	}

	export interface ACLQuotaExceededFault {
	}
	export interface ACLQuotaExceededFaultFormProperties {
	}
	export function CreateACLQuotaExceededFaultFormGroup() {
		return new FormGroup<ACLQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateClusterResponse {
		Cluster?: Cluster;
	}
	export interface CreateClusterResponseFormProperties {
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
		});

	}

	export interface CreateClusterRequest {

		/** Required */
		ClusterName: string;

		/** Required */
		NodeType: string;
		ParameterGroupName?: string;
		Description?: string;
		NumShards?: number | null;
		NumReplicasPerShard?: number | null;
		SubnetGroupName?: string;
		SecurityGroupIds?: Array<string>;
		MaintenanceWindow?: string;
		Port?: number | null;
		SnsTopicArn?: string;
		TLSEnabled?: boolean | null;
		KmsKeyId?: string;
		SnapshotArns?: Array<string>;
		SnapshotName?: string;
		SnapshotRetentionLimit?: number | null;
		Tags?: Array<Tag>;
		SnapshotWindow?: string;

		/** Required */
		ACLName: string;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		DataTiering?: boolean | null;
	}
	export interface CreateClusterRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,

		/** Required */
		NodeType: FormControl<string | null | undefined>,
		ParameterGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		NumShards: FormControl<number | null | undefined>,
		NumReplicasPerShard: FormControl<number | null | undefined>,
		SubnetGroupName: FormControl<string | null | undefined>,
		MaintenanceWindow: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		TLSEnabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		SnapshotName: FormControl<string | null | undefined>,
		SnapshotRetentionLimit: FormControl<number | null | undefined>,
		SnapshotWindow: FormControl<string | null | undefined>,

		/** Required */
		ACLName: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		DataTiering: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			NumShards: new FormControl<number | null | undefined>(undefined),
			NumReplicasPerShard: new FormControl<number | null | undefined>(undefined),
			SubnetGroupName: new FormControl<string | null | undefined>(undefined),
			MaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			TLSEnabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			SnapshotName: new FormControl<string | null | undefined>(undefined),
			SnapshotRetentionLimit: new FormControl<number | null | undefined>(undefined),
			SnapshotWindow: new FormControl<string | null | undefined>(undefined),
			ACLName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			DataTiering: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ClusterAlreadyExistsFault {
	}
	export interface ClusterAlreadyExistsFaultFormProperties {
	}
	export function CreateClusterAlreadyExistsFaultFormGroup() {
		return new FormGroup<ClusterAlreadyExistsFaultFormProperties>({
		});

	}

	export interface SubnetGroupNotFoundFault {
	}
	export interface SubnetGroupNotFoundFaultFormProperties {
	}
	export function CreateSubnetGroupNotFoundFaultFormGroup() {
		return new FormGroup<SubnetGroupNotFoundFaultFormProperties>({
		});

	}

	export interface ClusterQuotaForCustomerExceededFault {
	}
	export interface ClusterQuotaForCustomerExceededFaultFormProperties {
	}
	export function CreateClusterQuotaForCustomerExceededFaultFormGroup() {
		return new FormGroup<ClusterQuotaForCustomerExceededFaultFormProperties>({
		});

	}

	export interface NodeQuotaForClusterExceededFault {
	}
	export interface NodeQuotaForClusterExceededFaultFormProperties {
	}
	export function CreateNodeQuotaForClusterExceededFaultFormGroup() {
		return new FormGroup<NodeQuotaForClusterExceededFaultFormProperties>({
		});

	}

	export interface NodeQuotaForCustomerExceededFault {
	}
	export interface NodeQuotaForCustomerExceededFaultFormProperties {
	}
	export function CreateNodeQuotaForCustomerExceededFaultFormGroup() {
		return new FormGroup<NodeQuotaForCustomerExceededFaultFormProperties>({
		});

	}

	export interface ParameterGroupNotFoundFault {
	}
	export interface ParameterGroupNotFoundFaultFormProperties {
	}
	export function CreateParameterGroupNotFoundFaultFormGroup() {
		return new FormGroup<ParameterGroupNotFoundFaultFormProperties>({
		});

	}

	export interface InsufficientClusterCapacityFault {
	}
	export interface InsufficientClusterCapacityFaultFormProperties {
	}
	export function CreateInsufficientClusterCapacityFaultFormGroup() {
		return new FormGroup<InsufficientClusterCapacityFaultFormProperties>({
		});

	}

	export interface InvalidVPCNetworkStateFault {
	}
	export interface InvalidVPCNetworkStateFaultFormProperties {
	}
	export function CreateInvalidVPCNetworkStateFaultFormGroup() {
		return new FormGroup<InvalidVPCNetworkStateFaultFormProperties>({
		});

	}

	export interface ShardsPerClusterQuotaExceededFault {
	}
	export interface ShardsPerClusterQuotaExceededFaultFormProperties {
	}
	export function CreateShardsPerClusterQuotaExceededFaultFormGroup() {
		return new FormGroup<ShardsPerClusterQuotaExceededFaultFormProperties>({
		});

	}

	export interface InvalidCredentialsException {
	}
	export interface InvalidCredentialsExceptionFormProperties {
	}
	export function CreateInvalidCredentialsExceptionFormGroup() {
		return new FormGroup<InvalidCredentialsExceptionFormProperties>({
		});

	}

	export interface ACLNotFoundFault {
	}
	export interface ACLNotFoundFaultFormProperties {
	}
	export function CreateACLNotFoundFaultFormGroup() {
		return new FormGroup<ACLNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidACLStateFault {
	}
	export interface InvalidACLStateFaultFormProperties {
	}
	export function CreateInvalidACLStateFaultFormGroup() {
		return new FormGroup<InvalidACLStateFaultFormProperties>({
		});

	}

	export interface CreateParameterGroupResponse {
		ParameterGroup?: ParameterGroup;
	}
	export interface CreateParameterGroupResponseFormProperties {
	}
	export function CreateCreateParameterGroupResponseFormGroup() {
		return new FormGroup<CreateParameterGroupResponseFormProperties>({
		});

	}


	/** Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup. */
	export interface ParameterGroup {
		Name?: string;
		Family?: string;
		Description?: string;
		ARN?: string;
	}

	/** Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup. */
	export interface ParameterGroupFormProperties {
		Name: FormControl<string | null | undefined>,
		Family: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateParameterGroupFormGroup() {
		return new FormGroup<ParameterGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Family: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateParameterGroupRequest {

		/** Required */
		ParameterGroupName: string;

		/** Required */
		Family: string;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateParameterGroupRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,

		/** Required */
		Family: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateParameterGroupRequestFormGroup() {
		return new FormGroup<CreateParameterGroupRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Family: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParameterGroupQuotaExceededFault {
	}
	export interface ParameterGroupQuotaExceededFaultFormProperties {
	}
	export function CreateParameterGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<ParameterGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface ParameterGroupAlreadyExistsFault {
	}
	export interface ParameterGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateParameterGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<ParameterGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InvalidParameterGroupStateFault {
	}
	export interface InvalidParameterGroupStateFaultFormProperties {
	}
	export function CreateInvalidParameterGroupStateFaultFormGroup() {
		return new FormGroup<InvalidParameterGroupStateFaultFormProperties>({
		});

	}

	export interface CreateSnapshotResponse {
		Snapshot?: Snapshot;
	}
	export interface CreateSnapshotResponseFormProperties {
	}
	export function CreateCreateSnapshotResponseFormGroup() {
		return new FormGroup<CreateSnapshotResponseFormProperties>({
		});

	}

	export interface CreateSnapshotRequest {

		/** Required */
		ClusterName: string;

		/** Required */
		SnapshotName: string;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateSnapshotRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotRequestFormGroup() {
		return new FormGroup<CreateSnapshotRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterNotFoundFault {
	}
	export interface ClusterNotFoundFaultFormProperties {
	}
	export function CreateClusterNotFoundFaultFormGroup() {
		return new FormGroup<ClusterNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidClusterStateFault {
	}
	export interface InvalidClusterStateFaultFormProperties {
	}
	export function CreateInvalidClusterStateFaultFormGroup() {
		return new FormGroup<InvalidClusterStateFaultFormProperties>({
		});

	}

	export interface CreateSubnetGroupResponse {
		SubnetGroup?: SubnetGroup;
	}
	export interface CreateSubnetGroupResponseFormProperties {
	}
	export function CreateCreateSubnetGroupResponseFormGroup() {
		return new FormGroup<CreateSubnetGroupResponseFormProperties>({
		});

	}


	/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p>CreateSubnetGroup</p> </li> <li> <p>UpdateSubnetGroup</p> </li> </ul> <p>A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.</p> */
	export interface SubnetGroup {
		Name?: string;
		Description?: string;
		VpcId?: string;
		Subnets?: Array<Subnet>;
		ARN?: string;
	}

	/** <p>Represents the output of one of the following operations:</p> <ul> <li> <p>CreateSubnetGroup</p> </li> <li> <p>UpdateSubnetGroup</p> </li> </ul> <p>A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.</p> */
	export interface SubnetGroupFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateSubnetGroupFormGroup() {
		return new FormGroup<SubnetGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB. */
	export interface Subnet {
		Identifier?: string;
		AvailabilityZone?: AvailabilityZone;
	}

	/** Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB. */
	export interface SubnetFormProperties {
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz). */
	export interface AvailabilityZone {
		Name?: string;
	}

	/** Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz). */
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSubnetGroupRequest {

		/** Required */
		SubnetGroupName: string;
		Description?: string;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateSubnetGroupRequestFormProperties {

		/** Required */
		SubnetGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubnetGroupRequestFormGroup() {
		return new FormGroup<CreateSubnetGroupRequestFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubnetGroupAlreadyExistsFault {
	}
	export interface SubnetGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateSubnetGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<SubnetGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface SubnetGroupQuotaExceededFault {
	}
	export interface SubnetGroupQuotaExceededFaultFormProperties {
	}
	export function CreateSubnetGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<SubnetGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface SubnetQuotaExceededFault {
	}
	export interface SubnetQuotaExceededFaultFormProperties {
	}
	export function CreateSubnetQuotaExceededFaultFormGroup() {
		return new FormGroup<SubnetQuotaExceededFaultFormProperties>({
		});

	}

	export interface InvalidSubnet {
	}
	export interface InvalidSubnetFormProperties {
	}
	export function CreateInvalidSubnetFormGroup() {
		return new FormGroup<InvalidSubnetFormProperties>({
		});

	}

	export interface SubnetNotAllowedFault {
	}
	export interface SubnetNotAllowedFaultFormProperties {
	}
	export function CreateSubnetNotAllowedFaultFormGroup() {
		return new FormGroup<SubnetNotAllowedFaultFormProperties>({
		});

	}

	export interface CreateUserResponse {
		User?: User;
	}
	export interface CreateUserResponseFormProperties {
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
		});

	}


	/** You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters. */
	export interface User {
		Name?: string;
		Status?: string;
		AccessString?: string;
		ACLNames?: Array<string>;
		MinimumEngineVersion?: string;
		Authentication?: Authentication;
		ARN?: string;
	}

	/** You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters. */
	export interface UserFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		AccessString: FormControl<string | null | undefined>,
		MinimumEngineVersion: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			AccessString: new FormControl<string | null | undefined>(undefined),
			MinimumEngineVersion: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses. */
	export interface Authentication {
		Type?: AuthenticationType;
		PasswordCount?: number | null;
	}

	/** Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses. */
	export interface AuthenticationFormProperties {
		Type: FormControl<AuthenticationType | null | undefined>,
		PasswordCount: FormControl<number | null | undefined>,
	}
	export function CreateAuthenticationFormGroup() {
		return new FormGroup<AuthenticationFormProperties>({
			Type: new FormControl<AuthenticationType | null | undefined>(undefined),
			PasswordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AuthenticationType { password = 0, 'no-password' = 1, iam = 2 }

	export interface CreateUserRequest {

		/** Required */
		UserName: string;

		/** Required */
		AuthenticationMode: AuthenticationMode;

		/** Required */
		AccessString: string;
		Tags?: Array<Tag>;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		AccessString: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses. */
	export interface AuthenticationMode {
		Type?: InputAuthenticationType;
		Passwords?: Array<string>;
	}

	/** Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses. */
	export interface AuthenticationModeFormProperties {
		Type: FormControl<InputAuthenticationType | null | undefined>,
	}
	export function CreateAuthenticationModeFormGroup() {
		return new FormGroup<AuthenticationModeFormProperties>({
			Type: new FormControl<InputAuthenticationType | null | undefined>(undefined),
		});

	}

	export enum InputAuthenticationType { password = 0, iam = 1 }

	export interface UserAlreadyExistsFault {
	}
	export interface UserAlreadyExistsFaultFormProperties {
	}
	export function CreateUserAlreadyExistsFaultFormGroup() {
		return new FormGroup<UserAlreadyExistsFaultFormProperties>({
		});

	}

	export interface UserQuotaExceededFault {
	}
	export interface UserQuotaExceededFaultFormProperties {
	}
	export function CreateUserQuotaExceededFaultFormGroup() {
		return new FormGroup<UserQuotaExceededFaultFormProperties>({
		});

	}

	export interface DeleteACLResponse {
		ACL?: ACL;
	}
	export interface DeleteACLResponseFormProperties {
	}
	export function CreateDeleteACLResponseFormGroup() {
		return new FormGroup<DeleteACLResponseFormProperties>({
		});

	}

	export interface DeleteACLRequest {

		/** Required */
		ACLName: string;
	}
	export interface DeleteACLRequestFormProperties {

		/** Required */
		ACLName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteACLRequestFormGroup() {
		return new FormGroup<DeleteACLRequestFormProperties>({
			ACLName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterResponse {
		Cluster?: Cluster;
	}
	export interface DeleteClusterResponseFormProperties {
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
		});

	}

	export interface DeleteClusterRequest {

		/** Required */
		ClusterName: string;
		FinalSnapshotName?: string;
	}
	export interface DeleteClusterRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
		FinalSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FinalSnapshotName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteParameterGroupResponse {
		ParameterGroup?: ParameterGroup;
	}
	export interface DeleteParameterGroupResponseFormProperties {
	}
	export function CreateDeleteParameterGroupResponseFormGroup() {
		return new FormGroup<DeleteParameterGroupResponseFormProperties>({
		});

	}

	export interface DeleteParameterGroupRequest {

		/** Required */
		ParameterGroupName: string;
	}
	export interface DeleteParameterGroupRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteParameterGroupRequestFormGroup() {
		return new FormGroup<DeleteParameterGroupRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSnapshotResponse {
		Snapshot?: Snapshot;
	}
	export interface DeleteSnapshotResponseFormProperties {
	}
	export function CreateDeleteSnapshotResponseFormGroup() {
		return new FormGroup<DeleteSnapshotResponseFormProperties>({
		});

	}

	export interface DeleteSnapshotRequest {

		/** Required */
		SnapshotName: string;
	}
	export interface DeleteSnapshotRequestFormProperties {

		/** Required */
		SnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotRequestFormGroup() {
		return new FormGroup<DeleteSnapshotRequestFormProperties>({
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSubnetGroupResponse {
		SubnetGroup?: SubnetGroup;
	}
	export interface DeleteSubnetGroupResponseFormProperties {
	}
	export function CreateDeleteSubnetGroupResponseFormGroup() {
		return new FormGroup<DeleteSubnetGroupResponseFormProperties>({
		});

	}

	export interface DeleteSubnetGroupRequest {

		/** Required */
		SubnetGroupName: string;
	}
	export interface DeleteSubnetGroupRequestFormProperties {

		/** Required */
		SubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSubnetGroupRequestFormGroup() {
		return new FormGroup<DeleteSubnetGroupRequestFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubnetGroupInUseFault {
	}
	export interface SubnetGroupInUseFaultFormProperties {
	}
	export function CreateSubnetGroupInUseFaultFormGroup() {
		return new FormGroup<SubnetGroupInUseFaultFormProperties>({
		});

	}

	export interface DeleteUserResponse {
		User?: User;
	}
	export interface DeleteUserResponseFormProperties {
	}
	export function CreateDeleteUserResponseFormGroup() {
		return new FormGroup<DeleteUserResponseFormProperties>({
		});

	}

	export interface DeleteUserRequest {

		/** Required */
		UserName: string;
	}
	export interface DeleteUserRequestFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidUserStateFault {
	}
	export interface InvalidUserStateFaultFormProperties {
	}
	export function CreateInvalidUserStateFaultFormGroup() {
		return new FormGroup<InvalidUserStateFaultFormProperties>({
		});

	}

	export interface DescribeACLsResponse {
		ACLs?: Array<ACL>;
		NextToken?: string;
	}
	export interface DescribeACLsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeACLsResponseFormGroup() {
		return new FormGroup<DescribeACLsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeACLsRequest {
		ACLName?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeACLsRequestFormProperties {
		ACLName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeACLsRequestFormGroup() {
		return new FormGroup<DescribeACLsRequestFormProperties>({
			ACLName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClustersResponse {
		NextToken?: string;
		Clusters?: Array<Cluster>;
	}
	export interface DescribeClustersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClustersResponseFormGroup() {
		return new FormGroup<DescribeClustersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClustersRequest {
		ClusterName?: string;
		MaxResults?: number | null;
		NextToken?: string;
		ShowShardDetails?: boolean | null;
	}
	export interface DescribeClustersRequestFormProperties {
		ClusterName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ShowShardDetails: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeClustersRequestFormGroup() {
		return new FormGroup<DescribeClustersRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ShowShardDetails: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeEngineVersionsResponse {
		NextToken?: string;
		EngineVersions?: Array<EngineVersionInfo>;
	}
	export interface DescribeEngineVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEngineVersionsResponseFormGroup() {
		return new FormGroup<DescribeEngineVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details of the Redis engine version */
	export interface EngineVersionInfo {
		EngineVersion?: string;
		EnginePatchVersion?: string;
		ParameterGroupFamily?: string;
	}

	/** Provides details of the Redis engine version */
	export interface EngineVersionInfoFormProperties {
		EngineVersion: FormControl<string | null | undefined>,
		EnginePatchVersion: FormControl<string | null | undefined>,
		ParameterGroupFamily: FormControl<string | null | undefined>,
	}
	export function CreateEngineVersionInfoFormGroup() {
		return new FormGroup<EngineVersionInfoFormProperties>({
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			EnginePatchVersion: new FormControl<string | null | undefined>(undefined),
			ParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEngineVersionsRequest {
		EngineVersion?: string;
		ParameterGroupFamily?: string;
		MaxResults?: number | null;
		NextToken?: string;
		DefaultOnly?: boolean | null;
	}
	export interface DescribeEngineVersionsRequestFormProperties {
		EngineVersion: FormControl<string | null | undefined>,
		ParameterGroupFamily: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		DefaultOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeEngineVersionsRequestFormGroup() {
		return new FormGroup<DescribeEngineVersionsRequestFormProperties>({
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			ParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			DefaultOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsResponse {
		NextToken?: string;
		Events?: Array<Event>;
	}
	export interface DescribeEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsResponseFormGroup() {
		return new FormGroup<DescribeEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a node. */
	export interface Event {
		SourceName?: string;
		SourceType?: SourceType;
		Message?: string;
		Date?: Date;
	}

	/** Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a node. */
	export interface EventFormProperties {
		SourceName: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			SourceName: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SourceType { node = 0, 'parameter-group' = 1, 'subnet-group' = 2, cluster = 3, user = 4, acl = 5 }

	export interface DescribeEventsRequest {
		SourceName?: string;
		SourceType?: SourceType;
		StartTime?: Date;
		EndTime?: Date;
		Duration?: number | null;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeEventsRequestFormProperties {
		SourceName: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsRequestFormGroup() {
		return new FormGroup<DescribeEventsRequestFormProperties>({
			SourceName: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParameterGroupsResponse {
		NextToken?: string;
		ParameterGroups?: Array<ParameterGroup>;
	}
	export interface DescribeParameterGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParameterGroupsResponseFormGroup() {
		return new FormGroup<DescribeParameterGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParameterGroupsRequest {
		ParameterGroupName?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeParameterGroupsRequestFormProperties {
		ParameterGroupName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParameterGroupsRequestFormGroup() {
		return new FormGroup<DescribeParameterGroupsRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParametersResponse {
		NextToken?: string;
		Parameters?: Array<Parameter>;
	}
	export interface DescribeParametersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParametersResponseFormGroup() {
		return new FormGroup<DescribeParametersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an individual setting that controls some aspect of MemoryDB behavior. */
	export interface Parameter {
		Name?: string;
		Value?: string;
		Description?: string;
		DataType?: string;
		AllowedValues?: string;
		MinimumEngineVersion?: string;
	}

	/** Describes an individual setting that controls some aspect of MemoryDB behavior. */
	export interface ParameterFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		MinimumEngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			MinimumEngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParametersRequest {

		/** Required */
		ParameterGroupName: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeParametersRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParametersRequestFormGroup() {
		return new FormGroup<DescribeParametersRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReservedNodesResponse {
		NextToken?: string;
		ReservedNodes?: Array<ReservedNode>;
	}
	export interface DescribeReservedNodesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedNodesResponseFormGroup() {
		return new FormGroup<DescribeReservedNodesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>PurchaseReservedNodesOffering</code> operation. */
	export interface ReservedNode {
		ReservationId?: string;
		ReservedNodesOfferingId?: string;
		NodeType?: string;
		StartTime?: Date;
		Duration?: number | null;
		FixedPrice?: number | null;
		NodeCount?: number | null;
		OfferingType?: string;
		State?: string;
		RecurringCharges?: Array<RecurringCharge>;
		ARN?: string;
	}

	/** Represents the output of a <code>PurchaseReservedNodesOffering</code> operation. */
	export interface ReservedNodeFormProperties {
		ReservationId: FormControl<string | null | undefined>,
		ReservedNodesOfferingId: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		NodeCount: FormControl<number | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateReservedNodeFormGroup() {
		return new FormGroup<ReservedNodeFormProperties>({
			ReservationId: new FormControl<string | null | undefined>(undefined),
			ReservedNodesOfferingId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			NodeCount: new FormControl<number | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The recurring charge to run this reserved node. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string;
	}

	/** The recurring charge to run this reserved node. */
	export interface RecurringChargeFormProperties {
		RecurringChargeAmount: FormControl<number | null | undefined>,
		RecurringChargeFrequency: FormControl<string | null | undefined>,
	}
	export function CreateRecurringChargeFormGroup() {
		return new FormGroup<RecurringChargeFormProperties>({
			RecurringChargeAmount: new FormControl<number | null | undefined>(undefined),
			RecurringChargeFrequency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReservedNodesRequest {
		ReservationId?: string;
		ReservedNodesOfferingId?: string;
		NodeType?: string;
		Duration?: string;
		OfferingType?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeReservedNodesRequestFormProperties {
		ReservationId: FormControl<string | null | undefined>,
		ReservedNodesOfferingId: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		Duration: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedNodesRequestFormGroup() {
		return new FormGroup<DescribeReservedNodesRequestFormProperties>({
			ReservationId: new FormControl<string | null | undefined>(undefined),
			ReservedNodesOfferingId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservedNodeNotFoundFault {
	}
	export interface ReservedNodeNotFoundFaultFormProperties {
	}
	export function CreateReservedNodeNotFoundFaultFormGroup() {
		return new FormGroup<ReservedNodeNotFoundFaultFormProperties>({
		});

	}

	export interface DescribeReservedNodesOfferingsResponse {
		NextToken?: string;
		ReservedNodesOfferings?: Array<ReservedNodesOffering>;
	}
	export interface DescribeReservedNodesOfferingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedNodesOfferingsResponseFormGroup() {
		return new FormGroup<DescribeReservedNodesOfferingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The offering type of this node. */
	export interface ReservedNodesOffering {
		ReservedNodesOfferingId?: string;
		NodeType?: string;
		Duration?: number | null;
		FixedPrice?: number | null;
		OfferingType?: string;
		RecurringCharges?: Array<RecurringCharge>;
	}

	/** The offering type of this node. */
	export interface ReservedNodesOfferingFormProperties {
		ReservedNodesOfferingId: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
	}
	export function CreateReservedNodesOfferingFormGroup() {
		return new FormGroup<ReservedNodesOfferingFormProperties>({
			ReservedNodesOfferingId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReservedNodesOfferingsRequest {
		ReservedNodesOfferingId?: string;
		NodeType?: string;
		Duration?: string;
		OfferingType?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeReservedNodesOfferingsRequestFormProperties {
		ReservedNodesOfferingId: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		Duration: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedNodesOfferingsRequestFormGroup() {
		return new FormGroup<DescribeReservedNodesOfferingsRequestFormProperties>({
			ReservedNodesOfferingId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservedNodesOfferingNotFoundFault {
	}
	export interface ReservedNodesOfferingNotFoundFaultFormProperties {
	}
	export function CreateReservedNodesOfferingNotFoundFaultFormGroup() {
		return new FormGroup<ReservedNodesOfferingNotFoundFaultFormProperties>({
		});

	}

	export interface DescribeServiceUpdatesResponse {
		NextToken?: string;
		ServiceUpdates?: Array<ServiceUpdate>;
	}
	export interface DescribeServiceUpdatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceUpdatesResponseFormGroup() {
		return new FormGroup<DescribeServiceUpdatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update that you can apply to your MemoryDB clusters. */
	export interface ServiceUpdate {
		ClusterName?: string;
		ServiceUpdateName?: string;
		ReleaseDate?: Date;
		Description?: string;
		Status?: ServiceUpdateStatus;
		Type?: ServiceUpdateType;
		NodesUpdated?: string;
		AutoUpdateStartDate?: Date;
	}

	/** An update that you can apply to your MemoryDB clusters. */
	export interface ServiceUpdateFormProperties {
		ClusterName: FormControl<string | null | undefined>,
		ServiceUpdateName: FormControl<string | null | undefined>,
		ReleaseDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<ServiceUpdateStatus | null | undefined>,
		Type: FormControl<ServiceUpdateType | null | undefined>,
		NodesUpdated: FormControl<string | null | undefined>,
		AutoUpdateStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateServiceUpdateFormGroup() {
		return new FormGroup<ServiceUpdateFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined),
			ServiceUpdateName: new FormControl<string | null | undefined>(undefined),
			ReleaseDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ServiceUpdateStatus | null | undefined>(undefined),
			Type: new FormControl<ServiceUpdateType | null | undefined>(undefined),
			NodesUpdated: new FormControl<string | null | undefined>(undefined),
			AutoUpdateStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ServiceUpdateType { 'security-update' = 0 }

	export interface DescribeServiceUpdatesRequest {
		ServiceUpdateName?: string;
		ClusterNames?: Array<string>;
		Status?: Array<ServiceUpdateStatus>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeServiceUpdatesRequestFormProperties {
		ServiceUpdateName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceUpdatesRequestFormGroup() {
		return new FormGroup<DescribeServiceUpdatesRequestFormProperties>({
			ServiceUpdateName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSnapshotsResponse {
		NextToken?: string;
		Snapshots?: Array<Snapshot>;
	}
	export interface DescribeSnapshotsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotsResponseFormGroup() {
		return new FormGroup<DescribeSnapshotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSnapshotsRequest {
		ClusterName?: string;
		SnapshotName?: string;
		Source?: string;
		NextToken?: string;
		MaxResults?: number | null;
		ShowDetail?: boolean | null;
	}
	export interface DescribeSnapshotsRequestFormProperties {
		ClusterName: FormControl<string | null | undefined>,
		SnapshotName: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ShowDetail: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeSnapshotsRequestFormGroup() {
		return new FormGroup<DescribeSnapshotsRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined),
			SnapshotName: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ShowDetail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeSubnetGroupsResponse {
		NextToken?: string;
		SubnetGroups?: Array<SubnetGroup>;
	}
	export interface DescribeSubnetGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubnetGroupsResponseFormGroup() {
		return new FormGroup<DescribeSubnetGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSubnetGroupsRequest {
		SubnetGroupName?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeSubnetGroupsRequestFormProperties {
		SubnetGroupName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubnetGroupsRequestFormGroup() {
		return new FormGroup<DescribeSubnetGroupsRequestFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUsersResponse {
		Users?: Array<User>;
		NextToken?: string;
	}
	export interface DescribeUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsersResponseFormGroup() {
		return new FormGroup<DescribeUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUsersRequest {
		UserName?: string;
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeUsersRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsersRequestFormGroup() {
		return new FormGroup<DescribeUsersRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to streamline results of a search based on the property being filtered. */
	export interface Filter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** Used to streamline results of a search based on the property being filtered. */
	export interface FilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FailoverShardResponse {
		Cluster?: Cluster;
	}
	export interface FailoverShardResponseFormProperties {
	}
	export function CreateFailoverShardResponseFormGroup() {
		return new FormGroup<FailoverShardResponseFormProperties>({
		});

	}

	export interface FailoverShardRequest {

		/** Required */
		ClusterName: string;

		/** Required */
		ShardName: string;
	}
	export interface FailoverShardRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,

		/** Required */
		ShardName: FormControl<string | null | undefined>,
	}
	export function CreateFailoverShardRequestFormGroup() {
		return new FormGroup<FailoverShardRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShardName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface APICallRateForCustomerExceededFault {
	}
	export interface APICallRateForCustomerExceededFaultFormProperties {
	}
	export function CreateAPICallRateForCustomerExceededFaultFormGroup() {
		return new FormGroup<APICallRateForCustomerExceededFaultFormProperties>({
		});

	}

	export interface ShardNotFoundFault {
	}
	export interface ShardNotFoundFaultFormProperties {
	}
	export function CreateShardNotFoundFaultFormGroup() {
		return new FormGroup<ShardNotFoundFaultFormProperties>({
		});

	}

	export interface TestFailoverNotAvailableFault {
	}
	export interface TestFailoverNotAvailableFaultFormProperties {
	}
	export function CreateTestFailoverNotAvailableFaultFormGroup() {
		return new FormGroup<TestFailoverNotAvailableFaultFormProperties>({
		});

	}

	export interface InvalidKMSKeyFault {
	}
	export interface InvalidKMSKeyFaultFormProperties {
	}
	export function CreateInvalidKMSKeyFaultFormGroup() {
		return new FormGroup<InvalidKMSKeyFaultFormProperties>({
		});

	}

	export interface ListAllowedNodeTypeUpdatesResponse {
		ScaleUpNodeTypes?: Array<string>;
		ScaleDownNodeTypes?: Array<string>;
	}
	export interface ListAllowedNodeTypeUpdatesResponseFormProperties {
	}
	export function CreateListAllowedNodeTypeUpdatesResponseFormGroup() {
		return new FormGroup<ListAllowedNodeTypeUpdatesResponseFormProperties>({
		});

	}

	export interface ListAllowedNodeTypeUpdatesRequest {

		/** Required */
		ClusterName: string;
	}
	export interface ListAllowedNodeTypeUpdatesRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
	}
	export function CreateListAllowedNodeTypeUpdatesRequestFormGroup() {
		return new FormGroup<ListAllowedNodeTypeUpdatesRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsResponse {
		TagList?: Array<Tag>;
	}
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}

	export interface ListTagsRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidARNFault {
	}
	export interface InvalidARNFaultFormProperties {
	}
	export function CreateInvalidARNFaultFormGroup() {
		return new FormGroup<InvalidARNFaultFormProperties>({
		});

	}

	export interface PurchaseReservedNodesOfferingResponse {
		ReservedNode?: ReservedNode;
	}
	export interface PurchaseReservedNodesOfferingResponseFormProperties {
	}
	export function CreatePurchaseReservedNodesOfferingResponseFormGroup() {
		return new FormGroup<PurchaseReservedNodesOfferingResponseFormProperties>({
		});

	}

	export interface PurchaseReservedNodesOfferingRequest {

		/** Required */
		ReservedNodesOfferingId: string;
		ReservationId?: string;
		NodeCount?: number | null;
		Tags?: Array<Tag>;
	}
	export interface PurchaseReservedNodesOfferingRequestFormProperties {

		/** Required */
		ReservedNodesOfferingId: FormControl<string | null | undefined>,
		ReservationId: FormControl<string | null | undefined>,
		NodeCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseReservedNodesOfferingRequestFormGroup() {
		return new FormGroup<PurchaseReservedNodesOfferingRequestFormProperties>({
			ReservedNodesOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReservationId: new FormControl<string | null | undefined>(undefined),
			NodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReservedNodeAlreadyExistsFault {
	}
	export interface ReservedNodeAlreadyExistsFaultFormProperties {
	}
	export function CreateReservedNodeAlreadyExistsFaultFormGroup() {
		return new FormGroup<ReservedNodeAlreadyExistsFaultFormProperties>({
		});

	}

	export interface ReservedNodeQuotaExceededFault {
	}
	export interface ReservedNodeQuotaExceededFaultFormProperties {
	}
	export function CreateReservedNodeQuotaExceededFaultFormGroup() {
		return new FormGroup<ReservedNodeQuotaExceededFaultFormProperties>({
		});

	}

	export interface ResetParameterGroupResponse {
		ParameterGroup?: ParameterGroup;
	}
	export interface ResetParameterGroupResponseFormProperties {
	}
	export function CreateResetParameterGroupResponseFormGroup() {
		return new FormGroup<ResetParameterGroupResponseFormProperties>({
		});

	}

	export interface ResetParameterGroupRequest {

		/** Required */
		ParameterGroupName: string;
		AllParameters?: boolean | null;
		ParameterNames?: Array<string>;
	}
	export interface ResetParameterGroupRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
		AllParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateResetParameterGroupRequestFormGroup() {
		return new FormGroup<ResetParameterGroupRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
		TagList?: Array<Tag>;
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResponse {
		TagList?: Array<Tag>;
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagNotFoundFault {
	}
	export interface TagNotFoundFaultFormProperties {
	}
	export function CreateTagNotFoundFaultFormGroup() {
		return new FormGroup<TagNotFoundFaultFormProperties>({
		});

	}

	export interface UpdateACLResponse {
		ACL?: ACL;
	}
	export interface UpdateACLResponseFormProperties {
	}
	export function CreateUpdateACLResponseFormGroup() {
		return new FormGroup<UpdateACLResponseFormProperties>({
		});

	}

	export interface UpdateACLRequest {

		/** Required */
		ACLName: string;
		UserNamesToAdd?: Array<string>;
		UserNamesToRemove?: Array<string>;
	}
	export interface UpdateACLRequestFormProperties {

		/** Required */
		ACLName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateACLRequestFormGroup() {
		return new FormGroup<UpdateACLRequestFormProperties>({
			ACLName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterResponse {
		Cluster?: Cluster;
	}
	export interface UpdateClusterResponseFormProperties {
	}
	export function CreateUpdateClusterResponseFormGroup() {
		return new FormGroup<UpdateClusterResponseFormProperties>({
		});

	}

	export interface UpdateClusterRequest {

		/** Required */
		ClusterName: string;
		Description?: string;
		SecurityGroupIds?: Array<string>;
		MaintenanceWindow?: string;
		SnsTopicArn?: string;
		SnsTopicStatus?: string;
		ParameterGroupName?: string;
		SnapshotWindow?: string;
		SnapshotRetentionLimit?: number | null;
		NodeType?: string;
		EngineVersion?: string;
		ReplicaConfiguration?: ReplicaConfigurationRequest;
		ShardConfiguration?: ShardConfigurationRequest;
		ACLName?: string;
	}
	export interface UpdateClusterRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaintenanceWindow: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SnsTopicStatus: FormControl<string | null | undefined>,
		ParameterGroupName: FormControl<string | null | undefined>,
		SnapshotWindow: FormControl<string | null | undefined>,
		SnapshotRetentionLimit: FormControl<number | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		ACLName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterRequestFormGroup() {
		return new FormGroup<UpdateClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			MaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicStatus: new FormControl<string | null | undefined>(undefined),
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			SnapshotWindow: new FormControl<string | null | undefined>(undefined),
			SnapshotRetentionLimit: new FormControl<number | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			ACLName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to configure the number of replicas in a shard */
	export interface ReplicaConfigurationRequest {
		ReplicaCount?: number | null;
	}

	/** A request to configure the number of replicas in a shard */
	export interface ReplicaConfigurationRequestFormProperties {
		ReplicaCount: FormControl<number | null | undefined>,
	}
	export function CreateReplicaConfigurationRequestFormGroup() {
		return new FormGroup<ReplicaConfigurationRequestFormProperties>({
			ReplicaCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A request to configure the sharding properties of a cluster */
	export interface ShardConfigurationRequest {
		ShardCount?: number | null;
	}

	/** A request to configure the sharding properties of a cluster */
	export interface ShardConfigurationRequestFormProperties {
		ShardCount: FormControl<number | null | undefined>,
	}
	export function CreateShardConfigurationRequestFormGroup() {
		return new FormGroup<ShardConfigurationRequestFormProperties>({
			ShardCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidNodeStateFault {
	}
	export interface InvalidNodeStateFaultFormProperties {
	}
	export function CreateInvalidNodeStateFaultFormGroup() {
		return new FormGroup<InvalidNodeStateFaultFormProperties>({
		});

	}

	export interface NoOperationFault {
	}
	export interface NoOperationFaultFormProperties {
	}
	export function CreateNoOperationFaultFormGroup() {
		return new FormGroup<NoOperationFaultFormProperties>({
		});

	}

	export interface UpdateParameterGroupResponse {
		ParameterGroup?: ParameterGroup;
	}
	export interface UpdateParameterGroupResponseFormProperties {
	}
	export function CreateUpdateParameterGroupResponseFormGroup() {
		return new FormGroup<UpdateParameterGroupResponseFormProperties>({
		});

	}

	export interface UpdateParameterGroupRequest {

		/** Required */
		ParameterGroupName: string;

		/** Required */
		ParameterNameValues: Array<ParameterNameValue>;
	}
	export interface UpdateParameterGroupRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateParameterGroupRequestFormGroup() {
		return new FormGroup<UpdateParameterGroupRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a name-value pair that is used to update the value of a parameter. */
	export interface ParameterNameValue {
		ParameterName?: string;
		ParameterValue?: string;
	}

	/** Describes a name-value pair that is used to update the value of a parameter. */
	export interface ParameterNameValueFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateParameterNameValueFormGroup() {
		return new FormGroup<ParameterNameValueFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSubnetGroupResponse {
		SubnetGroup?: SubnetGroup;
	}
	export interface UpdateSubnetGroupResponseFormProperties {
	}
	export function CreateUpdateSubnetGroupResponseFormGroup() {
		return new FormGroup<UpdateSubnetGroupResponseFormProperties>({
		});

	}

	export interface UpdateSubnetGroupRequest {

		/** Required */
		SubnetGroupName: string;
		Description?: string;
		SubnetIds?: Array<string>;
	}
	export interface UpdateSubnetGroupRequestFormProperties {

		/** Required */
		SubnetGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubnetGroupRequestFormGroup() {
		return new FormGroup<UpdateSubnetGroupRequestFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubnetInUse {
	}
	export interface SubnetInUseFormProperties {
	}
	export function CreateSubnetInUseFormGroup() {
		return new FormGroup<SubnetInUseFormProperties>({
		});

	}

	export interface UpdateUserResponse {
		User?: User;
	}
	export interface UpdateUserResponseFormProperties {
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
		});

	}

	export interface UpdateUserRequest {

		/** Required */
		UserName: string;
		AuthenticationMode?: AuthenticationMode;
		AccessString?: string;
	}
	export interface UpdateUserRequestFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,
		AccessString: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessString: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
		 * Post #X-Amz-Target=AmazonMemoryDB.BatchUpdateCluster
		 * @return {BatchUpdateClusterResponse} Success
		 */
		BatchUpdateCluster(requestBody: BatchUpdateClusterRequest): Observable<BatchUpdateClusterResponse> {
			return this.http.post<BatchUpdateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.BatchUpdateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Makes a copy of an existing snapshot.
		 * Post #X-Amz-Target=AmazonMemoryDB.CopySnapshot
		 * @return {CopySnapshotResponse} Success
		 */
		CopySnapshot(requestBody: CopySnapshotRequest): Observable<CopySnapshotResponse> {
			return this.http.post<CopySnapshotResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.CopySnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
		 * Post #X-Amz-Target=AmazonMemoryDB.CreateACL
		 * @return {CreateACLResponse} Success
		 */
		CreateACL(requestBody: CreateACLRequest): Observable<CreateACLResponse> {
			return this.http.post<CreateACLResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.CreateACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
		 * Post #X-Amz-Target=AmazonMemoryDB.CreateCluster
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterRequest): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.CreateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>.
		 * Post #X-Amz-Target=AmazonMemoryDB.CreateParameterGroup
		 * @return {CreateParameterGroupResponse} Success
		 */
		CreateParameterGroup(requestBody: CreateParameterGroupRequest): Observable<CreateParameterGroupResponse> {
			return this.http.post<CreateParameterGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.CreateParameterGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a copy of an entire cluster at a specific moment in time.
		 * Post #X-Amz-Target=AmazonMemoryDB.CreateSnapshot
		 * @return {CreateSnapshotResponse} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotRequest): Observable<CreateSnapshotResponse> {
			return this.http.post<CreateSnapshotResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
		 * Post #X-Amz-Target=AmazonMemoryDB.CreateSubnetGroup
		 * @return {CreateSubnetGroupResponse} Success
		 */
		CreateSubnetGroup(requestBody: CreateSubnetGroupRequest): Observable<CreateSubnetGroupResponse> {
			return this.http.post<CreateSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.CreateSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
		 * Post #X-Amz-Target=AmazonMemoryDB.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
		 * Post #X-Amz-Target=AmazonMemoryDB.DeleteACL
		 * @return {DeleteACLResponse} Success
		 */
		DeleteACL(requestBody: DeleteACLRequest): Observable<DeleteACLResponse> {
			return this.http.post<DeleteACLResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DeleteACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a cluster. It also deletes all associated nodes and node endpoints
		 * Post #X-Amz-Target=AmazonMemoryDB.DeleteCluster
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(requestBody: DeleteClusterRequest): Observable<DeleteClusterResponse> {
			return this.http.post<DeleteClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DeleteCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
		 * Post #X-Amz-Target=AmazonMemoryDB.DeleteParameterGroup
		 * @return {DeleteParameterGroupResponse} Success
		 */
		DeleteParameterGroup(requestBody: DeleteParameterGroupRequest): Observable<DeleteParameterGroupResponse> {
			return this.http.post<DeleteParameterGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DeleteParameterGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
		 * Post #X-Amz-Target=AmazonMemoryDB.DeleteSnapshot
		 * @return {DeleteSnapshotResponse} Success
		 */
		DeleteSnapshot(requestBody: DeleteSnapshotRequest): Observable<DeleteSnapshotResponse> {
			return this.http.post<DeleteSnapshotResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DeleteSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
		 * Post #X-Amz-Target=AmazonMemoryDB.DeleteSubnetGroup
		 * @return {DeleteSubnetGroupResponse} Success
		 */
		DeleteSubnetGroup(requestBody: DeleteSubnetGroupRequest): Observable<DeleteSubnetGroupResponse> {
			return this.http.post<DeleteSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DeleteSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
		 * Post #X-Amz-Target=AmazonMemoryDB.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<DeleteUserResponse> {
			return this.http.post<DeleteUserResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of ACLs
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeACLs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeACLsResponse} Success
		 */
		DescribeACLs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeACLsRequest): Observable<DescribeACLsResponse> {
			return this.http.post<DescribeACLsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeACLs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeClusters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeClustersResponse} Success
		 */
		DescribeClusters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeClustersRequest): Observable<DescribeClustersResponse> {
			return this.http.post<DescribeClustersResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeClusters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the available Redis engine versions.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeEngineVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEngineVersionsResponse} Success
		 */
		DescribeEngineVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEngineVersionsRequest): Observable<DescribeEngineVersionsResponse> {
			return this.http.post<DescribeEngineVersionsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeEngineVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEventsRequest): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeParameterGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeParameterGroupsResponse} Success
		 */
		DescribeParameterGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeParameterGroupsRequest): Observable<DescribeParameterGroupsResponse> {
			return this.http.post<DescribeParameterGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeParameterGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the detailed parameter list for a particular parameter group.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeParameters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeParametersResponse} Success
		 */
		DescribeParameters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeParametersRequest): Observable<DescribeParametersResponse> {
			return this.http.post<DescribeParametersResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeParameters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about reserved nodes for this account, or about a specified reserved node.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeReservedNodes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedNodesResponse} Success
		 */
		DescribeReservedNodes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeReservedNodesRequest): Observable<DescribeReservedNodesResponse> {
			return this.http.post<DescribeReservedNodesResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeReservedNodes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists available reserved node offerings.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeReservedNodesOfferings
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedNodesOfferingsResponse} Success
		 */
		DescribeReservedNodesOfferings(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeReservedNodesOfferingsRequest): Observable<DescribeReservedNodesOfferingsResponse> {
			return this.http.post<DescribeReservedNodesOfferingsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeReservedNodesOfferings?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details of the service updates
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeServiceUpdates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeServiceUpdatesResponse} Success
		 */
		DescribeServiceUpdates(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeServiceUpdatesRequest): Observable<DescribeServiceUpdatesResponse> {
			return this.http.post<DescribeServiceUpdatesResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeServiceUpdates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeSnapshots
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSnapshotsResponse} Success
		 */
		DescribeSnapshots(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSnapshotsRequest): Observable<DescribeSnapshotsResponse> {
			return this.http.post<DescribeSnapshotsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeSnapshots?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeSubnetGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSubnetGroupsResponse} Success
		 */
		DescribeSubnetGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSubnetGroupsRequest): Observable<DescribeSubnetGroupsResponse> {
			return this.http.post<DescribeSubnetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeSubnetGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of users.
		 * Post #X-Amz-Target=AmazonMemoryDB.DescribeUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeUsersResponse} Success
		 */
		DescribeUsers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeUsersRequest): Observable<DescribeUsersResponse> {
			return this.http.post<DescribeUsersResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.DescribeUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API.
		 * Post #X-Amz-Target=AmazonMemoryDB.FailoverShard
		 * @return {FailoverShardResponse} Success
		 */
		FailoverShard(requestBody: FailoverShardRequest): Observable<FailoverShardResponse> {
			return this.http.post<FailoverShardResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.FailoverShard', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
		 * Post #X-Amz-Target=AmazonMemoryDB.ListAllowedNodeTypeUpdates
		 * @return {ListAllowedNodeTypeUpdatesResponse} Success
		 */
		ListAllowedNodeTypeUpdates(requestBody: ListAllowedNodeTypeUpdatesRequest): Observable<ListAllowedNodeTypeUpdatesResponse> {
			return this.http.post<ListAllowedNodeTypeUpdatesResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.ListAllowedNodeTypeUpdates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a>
		 * Post #X-Amz-Target=AmazonMemoryDB.ListTags
		 * @return {ListTagsResponse} Success
		 */
		ListTags(requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.ListTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
		 * Post #X-Amz-Target=AmazonMemoryDB.PurchaseReservedNodesOffering
		 * @return {PurchaseReservedNodesOfferingResponse} Success
		 */
		PurchaseReservedNodesOffering(requestBody: PurchaseReservedNodesOfferingRequest): Observable<PurchaseReservedNodesOfferingResponse> {
			return this.http.post<PurchaseReservedNodesOfferingResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.PurchaseReservedNodesOffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
		 * Post #X-Amz-Target=AmazonMemoryDB.ResetParameterGroup
		 * @return {ResetParameterGroupResponse} Success
		 */
		ResetParameterGroup(requestBody: ResetParameterGroupRequest): Observable<ResetParameterGroupResponse> {
			return this.http.post<ResetParameterGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.ResetParameterGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
		 * Post #X-Amz-Target=AmazonMemoryDB.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to remove tags on a resource
		 * Post #X-Amz-Target=AmazonMemoryDB.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the list of users that belong to the Access Control List.
		 * Post #X-Amz-Target=AmazonMemoryDB.UpdateACL
		 * @return {UpdateACLResponse} Success
		 */
		UpdateACL(requestBody: UpdateACLRequest): Observable<UpdateACLResponse> {
			return this.http.post<UpdateACLResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.UpdateACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
		 * Post #X-Amz-Target=AmazonMemoryDB.UpdateCluster
		 * @return {UpdateClusterResponse} Success
		 */
		UpdateCluster(requestBody: UpdateClusterRequest): Observable<UpdateClusterResponse> {
			return this.http.post<UpdateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.UpdateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
		 * Post #X-Amz-Target=AmazonMemoryDB.UpdateParameterGroup
		 * @return {UpdateParameterGroupResponse} Success
		 */
		UpdateParameterGroup(requestBody: UpdateParameterGroupRequest): Observable<UpdateParameterGroupResponse> {
			return this.http.post<UpdateParameterGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.UpdateParameterGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a>
		 * Post #X-Amz-Target=AmazonMemoryDB.UpdateSubnetGroup
		 * @return {UpdateSubnetGroupResponse} Success
		 */
		UpdateSubnetGroup(requestBody: UpdateSubnetGroupRequest): Observable<UpdateSubnetGroupResponse> {
			return this.http.post<UpdateSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.UpdateSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes user password(s) and/or access string.
		 * Post #X-Amz-Target=AmazonMemoryDB.UpdateUser
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(requestBody: UpdateUserRequest): Observable<UpdateUserResponse> {
			return this.http.post<UpdateUserResponse>(this.baseUri + '#X-Amz-Target=AmazonMemoryDB.UpdateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchUpdateClusterX_Amz_Target { 'AmazonMemoryDB.BatchUpdateCluster' = 0 }

	export enum CopySnapshotX_Amz_Target { 'AmazonMemoryDB.CopySnapshot' = 0 }

	export enum CreateACLX_Amz_Target { 'AmazonMemoryDB.CreateACL' = 0 }

	export enum CreateClusterX_Amz_Target { 'AmazonMemoryDB.CreateCluster' = 0 }

	export enum CreateParameterGroupX_Amz_Target { 'AmazonMemoryDB.CreateParameterGroup' = 0 }

	export enum CreateSnapshotX_Amz_Target { 'AmazonMemoryDB.CreateSnapshot' = 0 }

	export enum CreateSubnetGroupX_Amz_Target { 'AmazonMemoryDB.CreateSubnetGroup' = 0 }

	export enum CreateUserX_Amz_Target { 'AmazonMemoryDB.CreateUser' = 0 }

	export enum DeleteACLX_Amz_Target { 'AmazonMemoryDB.DeleteACL' = 0 }

	export enum DeleteClusterX_Amz_Target { 'AmazonMemoryDB.DeleteCluster' = 0 }

	export enum DeleteParameterGroupX_Amz_Target { 'AmazonMemoryDB.DeleteParameterGroup' = 0 }

	export enum DeleteSnapshotX_Amz_Target { 'AmazonMemoryDB.DeleteSnapshot' = 0 }

	export enum DeleteSubnetGroupX_Amz_Target { 'AmazonMemoryDB.DeleteSubnetGroup' = 0 }

	export enum DeleteUserX_Amz_Target { 'AmazonMemoryDB.DeleteUser' = 0 }

	export enum DescribeACLsX_Amz_Target { 'AmazonMemoryDB.DescribeACLs' = 0 }

	export enum DescribeClustersX_Amz_Target { 'AmazonMemoryDB.DescribeClusters' = 0 }

	export enum DescribeEngineVersionsX_Amz_Target { 'AmazonMemoryDB.DescribeEngineVersions' = 0 }

	export enum DescribeEventsX_Amz_Target { 'AmazonMemoryDB.DescribeEvents' = 0 }

	export enum DescribeParameterGroupsX_Amz_Target { 'AmazonMemoryDB.DescribeParameterGroups' = 0 }

	export enum DescribeParametersX_Amz_Target { 'AmazonMemoryDB.DescribeParameters' = 0 }

	export enum DescribeReservedNodesX_Amz_Target { 'AmazonMemoryDB.DescribeReservedNodes' = 0 }

	export enum DescribeReservedNodesOfferingsX_Amz_Target { 'AmazonMemoryDB.DescribeReservedNodesOfferings' = 0 }

	export enum DescribeServiceUpdatesX_Amz_Target { 'AmazonMemoryDB.DescribeServiceUpdates' = 0 }

	export enum DescribeSnapshotsX_Amz_Target { 'AmazonMemoryDB.DescribeSnapshots' = 0 }

	export enum DescribeSubnetGroupsX_Amz_Target { 'AmazonMemoryDB.DescribeSubnetGroups' = 0 }

	export enum DescribeUsersX_Amz_Target { 'AmazonMemoryDB.DescribeUsers' = 0 }

	export enum FailoverShardX_Amz_Target { 'AmazonMemoryDB.FailoverShard' = 0 }

	export enum ListAllowedNodeTypeUpdatesX_Amz_Target { 'AmazonMemoryDB.ListAllowedNodeTypeUpdates' = 0 }

	export enum ListTagsX_Amz_Target { 'AmazonMemoryDB.ListTags' = 0 }

	export enum PurchaseReservedNodesOfferingX_Amz_Target { 'AmazonMemoryDB.PurchaseReservedNodesOffering' = 0 }

	export enum ResetParameterGroupX_Amz_Target { 'AmazonMemoryDB.ResetParameterGroup' = 0 }

	export enum TagResourceX_Amz_Target { 'AmazonMemoryDB.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AmazonMemoryDB.UntagResource' = 0 }

	export enum UpdateACLX_Amz_Target { 'AmazonMemoryDB.UpdateACL' = 0 }

	export enum UpdateClusterX_Amz_Target { 'AmazonMemoryDB.UpdateCluster' = 0 }

	export enum UpdateParameterGroupX_Amz_Target { 'AmazonMemoryDB.UpdateParameterGroup' = 0 }

	export enum UpdateSubnetGroupX_Amz_Target { 'AmazonMemoryDB.UpdateSubnetGroup' = 0 }

	export enum UpdateUserX_Amz_Target { 'AmazonMemoryDB.UpdateUser' = 0 }

}

