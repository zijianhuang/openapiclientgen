import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddSourceIdentifierToSubscriptionResult {

		/** Detailed information about an event to which you have subscribed. */
		EventSubscription?: EventSubscription;
	}
	export interface AddSourceIdentifierToSubscriptionResultFormProperties {
	}
	export function CreateAddSourceIdentifierToSubscriptionResultFormGroup() {
		return new FormGroup<AddSourceIdentifierToSubscriptionResultFormProperties>({
		});

	}


	/** Detailed information about an event to which you have subscribed. */
	export interface EventSubscription {
		CustomerAwsId?: string;
		CustSubscriptionId?: string;
		SnsTopicArn?: string;
		Status?: string;
		SubscriptionCreationTime?: string;
		SourceType?: string;
		SourceIdsList?: Array<string>;
		EventCategoriesList?: Array<string>;
		Enabled?: boolean | null;
		EventSubscriptionArn?: string;
	}

	/** Detailed information about an event to which you have subscribed. */
	export interface EventSubscriptionFormProperties {
		CustomerAwsId: FormControl<string | null | undefined>,
		CustSubscriptionId: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubscriptionCreationTime: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		EventSubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			CustomerAwsId: new FormControl<string | null | undefined>(undefined),
			CustSubscriptionId: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubscriptionCreationTime: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			EventSubscriptionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionNotFoundFault {
	}
	export interface SubscriptionNotFoundFaultFormProperties {
	}
	export function CreateSubscriptionNotFoundFaultFormGroup() {
		return new FormGroup<SubscriptionNotFoundFaultFormProperties>({
		});

	}

	export interface SourceNotFoundFault {
	}
	export interface SourceNotFoundFaultFormProperties {
	}
	export function CreateSourceNotFoundFaultFormGroup() {
		return new FormGroup<SourceNotFoundFaultFormProperties>({
		});

	}


	/** Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair. */
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

	export interface DBInstanceNotFoundFault {
	}
	export interface DBInstanceNotFoundFaultFormProperties {
	}
	export function CreateDBInstanceNotFoundFaultFormGroup() {
		return new FormGroup<DBInstanceNotFoundFaultFormProperties>({
		});

	}

	export interface DBSnapshotNotFoundFault {
	}
	export interface DBSnapshotNotFoundFaultFormProperties {
	}
	export function CreateDBSnapshotNotFoundFaultFormGroup() {
		return new FormGroup<DBSnapshotNotFoundFaultFormProperties>({
		});

	}

	export interface DBClusterNotFoundFault {
	}
	export interface DBClusterNotFoundFaultFormProperties {
	}
	export function CreateDBClusterNotFoundFaultFormGroup() {
		return new FormGroup<DBClusterNotFoundFaultFormProperties>({
		});

	}

	export interface ApplyPendingMaintenanceActionResult {

		/** Represents the output of <a>ApplyPendingMaintenanceAction</a>. */
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
	}
	export interface ApplyPendingMaintenanceActionResultFormProperties {
	}
	export function CreateApplyPendingMaintenanceActionResultFormGroup() {
		return new FormGroup<ApplyPendingMaintenanceActionResultFormProperties>({
		});

	}


	/** Represents the output of <a>ApplyPendingMaintenanceAction</a>.  */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string;
		PendingMaintenanceActionDetails?: Array<string>;
	}

	/** Represents the output of <a>ApplyPendingMaintenanceAction</a>.  */
	export interface ResourcePendingMaintenanceActionsFormProperties {
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateResourcePendingMaintenanceActionsFormGroup() {
		return new FormGroup<ResourcePendingMaintenanceActionsFormProperties>({
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundFault {
	}
	export interface ResourceNotFoundFaultFormProperties {
	}
	export function CreateResourceNotFoundFaultFormGroup() {
		return new FormGroup<ResourceNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidDBClusterStateFault {
	}
	export interface InvalidDBClusterStateFaultFormProperties {
	}
	export function CreateInvalidDBClusterStateFaultFormGroup() {
		return new FormGroup<InvalidDBClusterStateFaultFormProperties>({
		});

	}

	export interface InvalidDBInstanceStateFault {
	}
	export interface InvalidDBInstanceStateFaultFormProperties {
	}
	export function CreateInvalidDBInstanceStateFaultFormGroup() {
		return new FormGroup<InvalidDBInstanceStateFaultFormProperties>({
		});

	}

	export interface CopyDBClusterParameterGroupResult {

		/** Detailed information about a cluster parameter group. */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}
	export interface CopyDBClusterParameterGroupResultFormProperties {
	}
	export function CreateCopyDBClusterParameterGroupResultFormGroup() {
		return new FormGroup<CopyDBClusterParameterGroupResultFormProperties>({
		});

	}


	/** Detailed information about a cluster parameter group.  */
	export interface DBClusterParameterGroup {
		DBClusterParameterGroupName?: string;
		DBParameterGroupFamily?: string;
		Description?: string;
		DBClusterParameterGroupArn?: string;
	}

	/** Detailed information about a cluster parameter group.  */
	export interface DBClusterParameterGroupFormProperties {
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DBClusterParameterGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterParameterGroupFormGroup() {
		return new FormGroup<DBClusterParameterGroupFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DBClusterParameterGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBParameterGroupNotFoundFault {
	}
	export interface DBParameterGroupNotFoundFaultFormProperties {
	}
	export function CreateDBParameterGroupNotFoundFaultFormGroup() {
		return new FormGroup<DBParameterGroupNotFoundFaultFormProperties>({
		});

	}

	export interface DBParameterGroupQuotaExceededFault {
	}
	export interface DBParameterGroupQuotaExceededFaultFormProperties {
	}
	export function CreateDBParameterGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<DBParameterGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBParameterGroupAlreadyExistsFault {
	}
	export interface DBParameterGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateDBParameterGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBParameterGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface CopyDBClusterSnapshotResult {

		/** Detailed information about a cluster snapshot. */
		DBClusterSnapshot?: DBClusterSnapshot;
	}
	export interface CopyDBClusterSnapshotResultFormProperties {
	}
	export function CreateCopyDBClusterSnapshotResultFormGroup() {
		return new FormGroup<CopyDBClusterSnapshotResultFormProperties>({
		});

	}


	/** Detailed information about a cluster snapshot.  */
	export interface DBClusterSnapshot {
		AvailabilityZones?: Array<string>;
		DBClusterSnapshotIdentifier?: string;
		DBClusterIdentifier?: string;
		SnapshotCreateTime?: Date;
		Engine?: string;
		Status?: string;
		Port?: number | null;
		VpcId?: string;
		ClusterCreateTime?: Date;
		MasterUsername?: string;
		EngineVersion?: string;
		SnapshotType?: string;
		PercentProgress?: number | null;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		DBClusterSnapshotArn?: string;
		SourceDBClusterSnapshotArn?: string;
	}

	/** Detailed information about a cluster snapshot.  */
	export interface DBClusterSnapshotFormProperties {
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		SnapshotCreateTime: FormControl<Date | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<Date | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		PercentProgress: FormControl<number | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DBClusterSnapshotArn: FormControl<string | null | undefined>,
		SourceDBClusterSnapshotArn: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterSnapshotFormGroup() {
		return new FormGroup<DBClusterSnapshotFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotCreateTime: new FormControl<Date | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<Date | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			PercentProgress: new FormControl<number | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DBClusterSnapshotArn: new FormControl<string | null | undefined>(undefined),
			SourceDBClusterSnapshotArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBClusterSnapshotAlreadyExistsFault {
	}
	export interface DBClusterSnapshotAlreadyExistsFaultFormProperties {
	}
	export function CreateDBClusterSnapshotAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBClusterSnapshotAlreadyExistsFaultFormProperties>({
		});

	}

	export interface DBClusterSnapshotNotFoundFault {
	}
	export interface DBClusterSnapshotNotFoundFaultFormProperties {
	}
	export function CreateDBClusterSnapshotNotFoundFaultFormGroup() {
		return new FormGroup<DBClusterSnapshotNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidDBClusterSnapshotStateFault {
	}
	export interface InvalidDBClusterSnapshotStateFaultFormProperties {
	}
	export function CreateInvalidDBClusterSnapshotStateFaultFormGroup() {
		return new FormGroup<InvalidDBClusterSnapshotStateFaultFormProperties>({
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

	export interface KMSKeyNotAccessibleFault {
	}
	export interface KMSKeyNotAccessibleFaultFormProperties {
	}
	export function CreateKMSKeyNotAccessibleFaultFormGroup() {
		return new FormGroup<KMSKeyNotAccessibleFaultFormProperties>({
		});

	}

	export interface CreateDBClusterResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface CreateDBClusterResultFormProperties {
	}
	export function CreateCreateDBClusterResultFormGroup() {
		return new FormGroup<CreateDBClusterResultFormProperties>({
		});

	}


	/** Detailed information about a cluster.  */
	export interface DBCluster {
		AvailabilityZones?: Array<string>;
		BackupRetentionPeriod?: number | null;
		DBClusterIdentifier?: string;
		DBClusterParameterGroup?: string;
		DBSubnetGroup?: string;
		Status?: string;
		PercentProgress?: string;
		EarliestRestorableTime?: Date;
		Endpoint?: string;
		ReaderEndpoint?: string;
		MultiAZ?: boolean | null;
		Engine?: string;
		EngineVersion?: string;
		LatestRestorableTime?: Date;
		Port?: number | null;
		MasterUsername?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		ReplicationSourceIdentifier?: string;
		ReadReplicaIdentifiers?: Array<string>;
		DBClusterMembers?: Array<string>;
		VpcSecurityGroups?: Array<string>;
		HostedZoneId?: string;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		DbClusterResourceId?: string;
		DBClusterArn?: string;
		AssociatedRoles?: Array<string>;
		CloneGroupId?: string;
		ClusterCreateTime?: Date;
		EnabledCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean | null;
	}

	/** Detailed information about a cluster.  */
	export interface DBClusterFormProperties {
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterParameterGroup: FormControl<string | null | undefined>,
		DBSubnetGroup: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		PercentProgress: FormControl<string | null | undefined>,
		EarliestRestorableTime: FormControl<Date | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		ReaderEndpoint: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		LatestRestorableTime: FormControl<Date | null | undefined>,
		Port: FormControl<number | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		ReplicationSourceIdentifier: FormControl<string | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DbClusterResourceId: FormControl<string | null | undefined>,
		DBClusterArn: FormControl<string | null | undefined>,
		CloneGroupId: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<Date | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateDBClusterFormGroup() {
		return new FormGroup<DBClusterFormProperties>({
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterParameterGroup: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroup: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			PercentProgress: new FormControl<string | null | undefined>(undefined),
			EarliestRestorableTime: new FormControl<Date | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			ReaderEndpoint: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			LatestRestorableTime: new FormControl<Date | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			ReplicationSourceIdentifier: new FormControl<string | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DbClusterResourceId: new FormControl<string | null | undefined>(undefined),
			DBClusterArn: new FormControl<string | null | undefined>(undefined),
			CloneGroupId: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<Date | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DBClusterAlreadyExistsFault {
	}
	export interface DBClusterAlreadyExistsFaultFormProperties {
	}
	export function CreateDBClusterAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBClusterAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InsufficientStorageClusterCapacityFault {
	}
	export interface InsufficientStorageClusterCapacityFaultFormProperties {
	}
	export function CreateInsufficientStorageClusterCapacityFaultFormGroup() {
		return new FormGroup<InsufficientStorageClusterCapacityFaultFormProperties>({
		});

	}

	export interface DBClusterQuotaExceededFault {
	}
	export interface DBClusterQuotaExceededFaultFormProperties {
	}
	export function CreateDBClusterQuotaExceededFaultFormGroup() {
		return new FormGroup<DBClusterQuotaExceededFaultFormProperties>({
		});

	}

	export interface StorageQuotaExceededFault {
	}
	export interface StorageQuotaExceededFaultFormProperties {
	}
	export function CreateStorageQuotaExceededFaultFormGroup() {
		return new FormGroup<StorageQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBSubnetGroupNotFoundFault {
	}
	export interface DBSubnetGroupNotFoundFaultFormProperties {
	}
	export function CreateDBSubnetGroupNotFoundFaultFormGroup() {
		return new FormGroup<DBSubnetGroupNotFoundFaultFormProperties>({
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

	export interface InvalidDBSubnetGroupStateFault {
	}
	export interface InvalidDBSubnetGroupStateFaultFormProperties {
	}
	export function CreateInvalidDBSubnetGroupStateFaultFormGroup() {
		return new FormGroup<InvalidDBSubnetGroupStateFaultFormProperties>({
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

	export interface DBClusterParameterGroupNotFoundFault {
	}
	export interface DBClusterParameterGroupNotFoundFaultFormProperties {
	}
	export function CreateDBClusterParameterGroupNotFoundFaultFormGroup() {
		return new FormGroup<DBClusterParameterGroupNotFoundFaultFormProperties>({
		});

	}

	export interface DBSubnetGroupDoesNotCoverEnoughAZs {
	}
	export interface DBSubnetGroupDoesNotCoverEnoughAZsFormProperties {
	}
	export function CreateDBSubnetGroupDoesNotCoverEnoughAZsFormGroup() {
		return new FormGroup<DBSubnetGroupDoesNotCoverEnoughAZsFormProperties>({
		});

	}

	export interface GlobalClusterNotFoundFault {
	}
	export interface GlobalClusterNotFoundFaultFormProperties {
	}
	export function CreateGlobalClusterNotFoundFaultFormGroup() {
		return new FormGroup<GlobalClusterNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidGlobalClusterStateFault {
	}
	export interface InvalidGlobalClusterStateFaultFormProperties {
	}
	export function CreateInvalidGlobalClusterStateFaultFormGroup() {
		return new FormGroup<InvalidGlobalClusterStateFaultFormProperties>({
		});

	}

	export interface CreateDBClusterParameterGroupResult {

		/** Detailed information about a cluster parameter group. */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}
	export interface CreateDBClusterParameterGroupResultFormProperties {
	}
	export function CreateCreateDBClusterParameterGroupResultFormGroup() {
		return new FormGroup<CreateDBClusterParameterGroupResultFormProperties>({
		});

	}

	export interface CreateDBClusterSnapshotResult {

		/** Detailed information about a cluster snapshot. */
		DBClusterSnapshot?: DBClusterSnapshot;
	}
	export interface CreateDBClusterSnapshotResultFormProperties {
	}
	export function CreateCreateDBClusterSnapshotResultFormGroup() {
		return new FormGroup<CreateDBClusterSnapshotResultFormProperties>({
		});

	}

	export interface CreateDBInstanceResult {

		/** Detailed information about an instance. */
		DBInstance?: DBInstance;
	}
	export interface CreateDBInstanceResultFormProperties {
	}
	export function CreateCreateDBInstanceResultFormGroup() {
		return new FormGroup<CreateDBInstanceResultFormProperties>({
		});

	}


	/** Detailed information about an instance.  */
	export interface DBInstance {
		DBInstanceIdentifier?: string;
		DBInstanceClass?: string;
		Engine?: string;
		DBInstanceStatus?: string;
		Endpoint?: Endpoint;
		InstanceCreateTime?: Date;
		PreferredBackupWindow?: string;
		BackupRetentionPeriod?: number | null;
		VpcSecurityGroups?: Array<string>;
		AvailabilityZone?: string;
		DBSubnetGroup?: DBSubnetGroup;
		PreferredMaintenanceWindow?: string;
		PendingModifiedValues?: PendingModifiedValues;
		LatestRestorableTime?: Date;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		PubliclyAccessible?: boolean | null;
		StatusInfos?: Array<string>;
		DBClusterIdentifier?: string;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		DbiResourceId?: string;
		CACertificateIdentifier?: string;
		CopyTagsToSnapshot?: boolean | null;
		PromotionTier?: number | null;
		DBInstanceArn?: string;
		EnabledCloudwatchLogsExports?: Array<string>;
	}

	/** Detailed information about an instance.  */
	export interface DBInstanceFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		DBInstanceStatus: FormControl<string | null | undefined>,
		InstanceCreateTime: FormControl<Date | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		LatestRestorableTime: FormControl<Date | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DbiResourceId: FormControl<string | null | undefined>,
		CACertificateIdentifier: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		DBInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDBInstanceFormGroup() {
		return new FormGroup<DBInstanceFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			DBInstanceStatus: new FormControl<string | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<Date | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			LatestRestorableTime: new FormControl<Date | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DbiResourceId: new FormControl<string | null | undefined>(undefined),
			CACertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			DBInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources. */
	export interface Endpoint {
		Address?: string;
		Port?: number | null;
		HostedZoneId?: string;
	}

	/** Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources. */
	export interface EndpointFormProperties {
		Address: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information about a subnet group.  */
	export interface DBSubnetGroup {
		DBSubnetGroupName?: string;
		DBSubnetGroupDescription?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<string>;
		DBSubnetGroupArn?: string;
	}

	/** Detailed information about a subnet group.  */
	export interface DBSubnetGroupFormProperties {
		DBSubnetGroupName: FormControl<string | null | undefined>,
		DBSubnetGroupDescription: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetGroupStatus: FormControl<string | null | undefined>,
		DBSubnetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDBSubnetGroupFormGroup() {
		return new FormGroup<DBSubnetGroupFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetGroupStatus: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet. */
	export interface PendingModifiedValues {
		DBInstanceClass?: string;
		AllocatedStorage?: number | null;
		MasterUserPassword?: string;
		Port?: number | null;
		BackupRetentionPeriod?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		LicenseModel?: string;
		Iops?: number | null;
		DBInstanceIdentifier?: string;
		StorageType?: string;
		CACertificateIdentifier?: string;
		DBSubnetGroupName?: string;
		PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
	}

	/**  One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet. */
	export interface PendingModifiedValuesFormProperties {
		DBInstanceClass: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		CACertificateIdentifier: FormControl<string | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreatePendingModifiedValuesFormGroup() {
		return new FormGroup<PendingModifiedValuesFormProperties>({
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			CACertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated. */
	export interface PendingCloudwatchLogsExports {
		LogTypesToEnable?: Array<string>;
		LogTypesToDisable?: Array<string>;
	}

	/** A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated. */
	export interface PendingCloudwatchLogsExportsFormProperties {
	}
	export function CreatePendingCloudwatchLogsExportsFormGroup() {
		return new FormGroup<PendingCloudwatchLogsExportsFormProperties>({
		});

	}

	export interface DBInstanceAlreadyExistsFault {
	}
	export interface DBInstanceAlreadyExistsFaultFormProperties {
	}
	export function CreateDBInstanceAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBInstanceAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InsufficientDBInstanceCapacityFault {
	}
	export interface InsufficientDBInstanceCapacityFaultFormProperties {
	}
	export function CreateInsufficientDBInstanceCapacityFaultFormGroup() {
		return new FormGroup<InsufficientDBInstanceCapacityFaultFormProperties>({
		});

	}

	export interface DBSecurityGroupNotFoundFault {
	}
	export interface DBSecurityGroupNotFoundFaultFormProperties {
	}
	export function CreateDBSecurityGroupNotFoundFaultFormGroup() {
		return new FormGroup<DBSecurityGroupNotFoundFaultFormProperties>({
		});

	}

	export interface InstanceQuotaExceededFault {
	}
	export interface InstanceQuotaExceededFaultFormProperties {
	}
	export function CreateInstanceQuotaExceededFaultFormGroup() {
		return new FormGroup<InstanceQuotaExceededFaultFormProperties>({
		});

	}

	export interface StorageTypeNotSupportedFault {
	}
	export interface StorageTypeNotSupportedFaultFormProperties {
	}
	export function CreateStorageTypeNotSupportedFaultFormGroup() {
		return new FormGroup<StorageTypeNotSupportedFaultFormProperties>({
		});

	}

	export interface AuthorizationNotFoundFault {
	}
	export interface AuthorizationNotFoundFaultFormProperties {
	}
	export function CreateAuthorizationNotFoundFaultFormGroup() {
		return new FormGroup<AuthorizationNotFoundFaultFormProperties>({
		});

	}

	export interface CreateDBSubnetGroupResult {

		/** Detailed information about a subnet group. */
		DBSubnetGroup?: DBSubnetGroup;
	}
	export interface CreateDBSubnetGroupResultFormProperties {
	}
	export function CreateCreateDBSubnetGroupResultFormGroup() {
		return new FormGroup<CreateDBSubnetGroupResultFormProperties>({
		});

	}

	export interface DBSubnetGroupAlreadyExistsFault {
	}
	export interface DBSubnetGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateDBSubnetGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBSubnetGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface DBSubnetGroupQuotaExceededFault {
	}
	export interface DBSubnetGroupQuotaExceededFaultFormProperties {
	}
	export function CreateDBSubnetGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<DBSubnetGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBSubnetQuotaExceededFault {
	}
	export interface DBSubnetQuotaExceededFaultFormProperties {
	}
	export function CreateDBSubnetQuotaExceededFaultFormGroup() {
		return new FormGroup<DBSubnetQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateEventSubscriptionResult {

		/** Detailed information about an event to which you have subscribed. */
		EventSubscription?: EventSubscription;
	}
	export interface CreateEventSubscriptionResultFormProperties {
	}
	export function CreateCreateEventSubscriptionResultFormGroup() {
		return new FormGroup<CreateEventSubscriptionResultFormProperties>({
		});

	}

	export interface EventSubscriptionQuotaExceededFault {
	}
	export interface EventSubscriptionQuotaExceededFaultFormProperties {
	}
	export function CreateEventSubscriptionQuotaExceededFaultFormGroup() {
		return new FormGroup<EventSubscriptionQuotaExceededFaultFormProperties>({
		});

	}

	export interface SubscriptionAlreadyExistFault {
	}
	export interface SubscriptionAlreadyExistFaultFormProperties {
	}
	export function CreateSubscriptionAlreadyExistFaultFormGroup() {
		return new FormGroup<SubscriptionAlreadyExistFaultFormProperties>({
		});

	}

	export interface SNSInvalidTopicFault {
	}
	export interface SNSInvalidTopicFaultFormProperties {
	}
	export function CreateSNSInvalidTopicFaultFormGroup() {
		return new FormGroup<SNSInvalidTopicFaultFormProperties>({
		});

	}

	export interface SNSNoAuthorizationFault {
	}
	export interface SNSNoAuthorizationFaultFormProperties {
	}
	export function CreateSNSNoAuthorizationFaultFormGroup() {
		return new FormGroup<SNSNoAuthorizationFaultFormProperties>({
		});

	}

	export interface SNSTopicArnNotFoundFault {
	}
	export interface SNSTopicArnNotFoundFaultFormProperties {
	}
	export function CreateSNSTopicArnNotFoundFaultFormGroup() {
		return new FormGroup<SNSTopicArnNotFoundFaultFormProperties>({
		});

	}

	export interface SubscriptionCategoryNotFoundFault {
	}
	export interface SubscriptionCategoryNotFoundFaultFormProperties {
	}
	export function CreateSubscriptionCategoryNotFoundFaultFormGroup() {
		return new FormGroup<SubscriptionCategoryNotFoundFaultFormProperties>({
		});

	}

	export interface CreateGlobalClusterResult {

		/** A data type representing an Amazon DocumentDB global cluster. */
		GlobalCluster?: GlobalCluster;
	}
	export interface CreateGlobalClusterResultFormProperties {
	}
	export function CreateCreateGlobalClusterResultFormGroup() {
		return new FormGroup<CreateGlobalClusterResultFormProperties>({
		});

	}


	/** A data type representing an Amazon DocumentDB global cluster. */
	export interface GlobalCluster {
		GlobalClusterIdentifier?: string;
		GlobalClusterResourceId?: string;
		GlobalClusterArn?: string;
		Status?: string;
		Engine?: string;
		EngineVersion?: string;
		DatabaseName?: string;
		StorageEncrypted?: boolean | null;
		DeletionProtection?: boolean | null;
		GlobalClusterMembers?: Array<string>;
	}

	/** A data type representing an Amazon DocumentDB global cluster. */
	export interface GlobalClusterFormProperties {
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
		GlobalClusterResourceId: FormControl<string | null | undefined>,
		GlobalClusterArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateGlobalClusterFormGroup() {
		return new FormGroup<GlobalClusterFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			GlobalClusterResourceId: new FormControl<string | null | undefined>(undefined),
			GlobalClusterArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GlobalClusterAlreadyExistsFault {
	}
	export interface GlobalClusterAlreadyExistsFaultFormProperties {
	}
	export function CreateGlobalClusterAlreadyExistsFaultFormGroup() {
		return new FormGroup<GlobalClusterAlreadyExistsFaultFormProperties>({
		});

	}

	export interface GlobalClusterQuotaExceededFault {
	}
	export interface GlobalClusterQuotaExceededFaultFormProperties {
	}
	export function CreateGlobalClusterQuotaExceededFaultFormGroup() {
		return new FormGroup<GlobalClusterQuotaExceededFaultFormProperties>({
		});

	}

	export interface DeleteDBClusterResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface DeleteDBClusterResultFormProperties {
	}
	export function CreateDeleteDBClusterResultFormGroup() {
		return new FormGroup<DeleteDBClusterResultFormProperties>({
		});

	}

	export interface InvalidDBParameterGroupStateFault {
	}
	export interface InvalidDBParameterGroupStateFaultFormProperties {
	}
	export function CreateInvalidDBParameterGroupStateFaultFormGroup() {
		return new FormGroup<InvalidDBParameterGroupStateFaultFormProperties>({
		});

	}

	export interface DeleteDBClusterSnapshotResult {

		/** Detailed information about a cluster snapshot. */
		DBClusterSnapshot?: DBClusterSnapshot;
	}
	export interface DeleteDBClusterSnapshotResultFormProperties {
	}
	export function CreateDeleteDBClusterSnapshotResultFormGroup() {
		return new FormGroup<DeleteDBClusterSnapshotResultFormProperties>({
		});

	}

	export interface DeleteDBInstanceResult {

		/** Detailed information about an instance. */
		DBInstance?: DBInstance;
	}
	export interface DeleteDBInstanceResultFormProperties {
	}
	export function CreateDeleteDBInstanceResultFormGroup() {
		return new FormGroup<DeleteDBInstanceResultFormProperties>({
		});

	}

	export interface DBSnapshotAlreadyExistsFault {
	}
	export interface DBSnapshotAlreadyExistsFaultFormProperties {
	}
	export function CreateDBSnapshotAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBSnapshotAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InvalidDBSubnetStateFault {
	}
	export interface InvalidDBSubnetStateFaultFormProperties {
	}
	export function CreateInvalidDBSubnetStateFaultFormGroup() {
		return new FormGroup<InvalidDBSubnetStateFaultFormProperties>({
		});

	}

	export interface DeleteEventSubscriptionResult {

		/** Detailed information about an event to which you have subscribed. */
		EventSubscription?: EventSubscription;
	}
	export interface DeleteEventSubscriptionResultFormProperties {
	}
	export function CreateDeleteEventSubscriptionResultFormGroup() {
		return new FormGroup<DeleteEventSubscriptionResultFormProperties>({
		});

	}

	export interface InvalidEventSubscriptionStateFault {
	}
	export interface InvalidEventSubscriptionStateFaultFormProperties {
	}
	export function CreateInvalidEventSubscriptionStateFaultFormGroup() {
		return new FormGroup<InvalidEventSubscriptionStateFaultFormProperties>({
		});

	}

	export interface DeleteGlobalClusterResult {

		/** A data type representing an Amazon DocumentDB global cluster. */
		GlobalCluster?: GlobalCluster;
	}
	export interface DeleteGlobalClusterResultFormProperties {
	}
	export function CreateDeleteGlobalClusterResultFormGroup() {
		return new FormGroup<DeleteGlobalClusterResultFormProperties>({
		});

	}

	export interface CertificateMessage {
		Certificates?: Array<string>;
		Marker?: string;
	}
	export interface CertificateMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateCertificateMessageFormGroup() {
		return new FormGroup<CertificateMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.</p> <p>Wildcards are not supported in filters.</p> */
	export interface Filter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** <p>A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.</p> <p>Wildcards are not supported in filters.</p> */
	export interface FilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateNotFoundFault {
	}
	export interface CertificateNotFoundFaultFormProperties {
	}
	export function CreateCertificateNotFoundFaultFormGroup() {
		return new FormGroup<CertificateNotFoundFaultFormProperties>({
		});

	}


	/** Represents the output of <a>DBClusterParameterGroups</a>. */
	export interface DBClusterParameterGroupsMessage {
		Marker?: string;
		DBClusterParameterGroups?: Array<string>;
	}

	/** Represents the output of <a>DBClusterParameterGroups</a>. */
	export interface DBClusterParameterGroupsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterParameterGroupsMessageFormGroup() {
		return new FormGroup<DBClusterParameterGroupsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DBClusterParameterGroup</a>. */
	export interface DBClusterParameterGroupDetails {
		Parameters?: Array<string>;
		Marker?: string;
	}

	/** Represents the output of <a>DBClusterParameterGroup</a>. */
	export interface DBClusterParameterGroupDetailsFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterParameterGroupDetailsFormGroup() {
		return new FormGroup<DBClusterParameterGroupDetailsFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBClusterSnapshotAttributesResult {

		/** Detailed information about the attributes that are associated with a cluster snapshot. */
		DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
	}
	export interface DescribeDBClusterSnapshotAttributesResultFormProperties {
	}
	export function CreateDescribeDBClusterSnapshotAttributesResultFormGroup() {
		return new FormGroup<DescribeDBClusterSnapshotAttributesResultFormProperties>({
		});

	}


	/** Detailed information about the attributes that are associated with a cluster snapshot. */
	export interface DBClusterSnapshotAttributesResult {
		DBClusterSnapshotIdentifier?: string;
		DBClusterSnapshotAttributes?: Array<string>;
	}

	/** Detailed information about the attributes that are associated with a cluster snapshot. */
	export interface DBClusterSnapshotAttributesResultFormProperties {
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterSnapshotAttributesResultFormGroup() {
		return new FormGroup<DBClusterSnapshotAttributesResultFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeDBClusterSnapshots</a>. */
	export interface DBClusterSnapshotMessage {
		Marker?: string;
		DBClusterSnapshots?: Array<string>;
	}

	/** Represents the output of <a>DescribeDBClusterSnapshots</a>. */
	export interface DBClusterSnapshotMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterSnapshotMessageFormGroup() {
		return new FormGroup<DBClusterSnapshotMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeDBClusters</a>. */
	export interface DBClusterMessage {
		Marker?: string;
		DBClusters?: Array<string>;
	}

	/** Represents the output of <a>DescribeDBClusters</a>. */
	export interface DBClusterMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterMessageFormGroup() {
		return new FormGroup<DBClusterMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeDBEngineVersions</a>. */
	export interface DBEngineVersionMessage {
		Marker?: string;
		DBEngineVersions?: Array<string>;
	}

	/** Represents the output of <a>DescribeDBEngineVersions</a>. */
	export interface DBEngineVersionMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBEngineVersionMessageFormGroup() {
		return new FormGroup<DBEngineVersionMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeDBInstances</a>. */
	export interface DBInstanceMessage {
		Marker?: string;
		DBInstances?: Array<string>;
	}

	/** Represents the output of <a>DescribeDBInstances</a>. */
	export interface DBInstanceMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBInstanceMessageFormGroup() {
		return new FormGroup<DBInstanceMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeDBSubnetGroups</a>. */
	export interface DBSubnetGroupMessage {
		Marker?: string;
		DBSubnetGroups?: Array<string>;
	}

	/** Represents the output of <a>DescribeDBSubnetGroups</a>. */
	export interface DBSubnetGroupMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBSubnetGroupMessageFormGroup() {
		return new FormGroup<DBSubnetGroupMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEngineDefaultClusterParametersResult {

		/** Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation. */
		EngineDefaults?: EngineDefaults;
	}
	export interface DescribeEngineDefaultClusterParametersResultFormProperties {
	}
	export function CreateDescribeEngineDefaultClusterParametersResultFormGroup() {
		return new FormGroup<DescribeEngineDefaultClusterParametersResultFormProperties>({
		});

	}


	/** Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation.  */
	export interface EngineDefaults {
		DBParameterGroupFamily?: string;
		Marker?: string;
		Parameters?: Array<string>;
	}

	/** Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation.  */
	export interface EngineDefaultsFormProperties {
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEngineDefaultsFormGroup() {
		return new FormGroup<EngineDefaultsFormProperties>({
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeEventCategories</a>. */
	export interface EventCategoriesMessage {
		EventCategoriesMapList?: Array<string>;
	}

	/** Represents the output of <a>DescribeEventCategories</a>. */
	export interface EventCategoriesMessageFormProperties {
	}
	export function CreateEventCategoriesMessageFormGroup() {
		return new FormGroup<EventCategoriesMessageFormProperties>({
		});

	}


	/** Represents the output of <a>DescribeEventSubscriptions</a>. */
	export interface EventSubscriptionsMessage {
		Marker?: string;
		EventSubscriptionsList?: Array<string>;
	}

	/** Represents the output of <a>DescribeEventSubscriptions</a>. */
	export interface EventSubscriptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsMessageFormGroup() {
		return new FormGroup<EventSubscriptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeEvents</a>. */
	export interface EventsMessage {
		Marker?: string;
		Events?: Array<string>;
	}

	/** Represents the output of <a>DescribeEvents</a>. */
	export interface EventsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEventsMessageFormGroup() {
		return new FormGroup<EventsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlobalClustersMessage {
		Marker?: string;
		GlobalClusters?: Array<string>;
	}
	export interface GlobalClustersMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGlobalClustersMessageFormGroup() {
		return new FormGroup<GlobalClustersMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribeOrderableDBInstanceOptions</a>. */
	export interface OrderableDBInstanceOptionsMessage {
		OrderableDBInstanceOptions?: Array<string>;
		Marker?: string;
	}

	/** Represents the output of <a>DescribeOrderableDBInstanceOptions</a>. */
	export interface OrderableDBInstanceOptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateOrderableDBInstanceOptionsMessageFormGroup() {
		return new FormGroup<OrderableDBInstanceOptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of <a>DescribePendingMaintenanceActions</a>. */
	export interface PendingMaintenanceActionsMessage {
		PendingMaintenanceActions?: Array<string>;
		Marker?: string;
	}

	/** Represents the output of <a>DescribePendingMaintenanceActions</a>. */
	export interface PendingMaintenanceActionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreatePendingMaintenanceActionsMessageFormGroup() {
		return new FormGroup<PendingMaintenanceActionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FailoverDBClusterResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface FailoverDBClusterResultFormProperties {
	}
	export function CreateFailoverDBClusterResultFormGroup() {
		return new FormGroup<FailoverDBClusterResultFormProperties>({
		});

	}


	/** Represents the output of <a>ListTagsForResource</a>. */
	export interface TagListMessage {
		TagList?: Array<string>;
	}

	/** Represents the output of <a>ListTagsForResource</a>. */
	export interface TagListMessageFormProperties {
	}
	export function CreateTagListMessageFormGroup() {
		return new FormGroup<TagListMessageFormProperties>({
		});

	}

	export interface ModifyDBClusterResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface ModifyDBClusterResultFormProperties {
	}
	export function CreateModifyDBClusterResultFormGroup() {
		return new FormGroup<ModifyDBClusterResultFormProperties>({
		});

	}

	export interface InvalidDBSecurityGroupStateFault {
	}
	export interface InvalidDBSecurityGroupStateFaultFormProperties {
	}
	export function CreateInvalidDBSecurityGroupStateFaultFormGroup() {
		return new FormGroup<InvalidDBSecurityGroupStateFaultFormProperties>({
		});

	}


	/** Contains the name of a cluster parameter group. */
	export interface DBClusterParameterGroupNameMessage {
		DBClusterParameterGroupName?: string;
	}

	/** Contains the name of a cluster parameter group. */
	export interface DBClusterParameterGroupNameMessageFormProperties {
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterParameterGroupNameMessageFormGroup() {
		return new FormGroup<DBClusterParameterGroupNameMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information about an individual parameter. */
	export interface Parameter {
		ParameterName?: string;
		ParameterValue?: string;
		Description?: string;
		Source?: string;
		ApplyType?: string;
		DataType?: string;
		AllowedValues?: string;
		IsModifiable?: boolean | null;
		MinimumEngineVersion?: string;
		ApplyMethod?: ApplyMethod;
	}

	/** Detailed information about an individual parameter. */
	export interface ParameterFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		ApplyType: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		IsModifiable: FormControl<boolean | null | undefined>,
		MinimumEngineVersion: FormControl<string | null | undefined>,
		ApplyMethod: FormControl<ApplyMethod | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			ApplyType: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			IsModifiable: new FormControl<boolean | null | undefined>(undefined),
			MinimumEngineVersion: new FormControl<string | null | undefined>(undefined),
			ApplyMethod: new FormControl<ApplyMethod | null | undefined>(undefined),
		});

	}

	export enum ApplyMethod { immediate = 0, 'pending-reboot' = 1 }

	export interface ModifyDBClusterSnapshotAttributeResult {

		/** Detailed information about the attributes that are associated with a cluster snapshot. */
		DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
	}
	export interface ModifyDBClusterSnapshotAttributeResultFormProperties {
	}
	export function CreateModifyDBClusterSnapshotAttributeResultFormGroup() {
		return new FormGroup<ModifyDBClusterSnapshotAttributeResultFormProperties>({
		});

	}

	export interface SharedSnapshotQuotaExceededFault {
	}
	export interface SharedSnapshotQuotaExceededFaultFormProperties {
	}
	export function CreateSharedSnapshotQuotaExceededFaultFormGroup() {
		return new FormGroup<SharedSnapshotQuotaExceededFaultFormProperties>({
		});

	}

	export interface ModifyDBInstanceResult {

		/** Detailed information about an instance. */
		DBInstance?: DBInstance;
	}
	export interface ModifyDBInstanceResultFormProperties {
	}
	export function CreateModifyDBInstanceResultFormGroup() {
		return new FormGroup<ModifyDBInstanceResultFormProperties>({
		});

	}

	export interface DBUpgradeDependencyFailureFault {
	}
	export interface DBUpgradeDependencyFailureFaultFormProperties {
	}
	export function CreateDBUpgradeDependencyFailureFaultFormGroup() {
		return new FormGroup<DBUpgradeDependencyFailureFaultFormProperties>({
		});

	}

	export interface ModifyDBSubnetGroupResult {

		/** Detailed information about a subnet group. */
		DBSubnetGroup?: DBSubnetGroup;
	}
	export interface ModifyDBSubnetGroupResultFormProperties {
	}
	export function CreateModifyDBSubnetGroupResultFormGroup() {
		return new FormGroup<ModifyDBSubnetGroupResultFormProperties>({
		});

	}

	export interface SubnetAlreadyInUse {
	}
	export interface SubnetAlreadyInUseFormProperties {
	}
	export function CreateSubnetAlreadyInUseFormGroup() {
		return new FormGroup<SubnetAlreadyInUseFormProperties>({
		});

	}

	export interface ModifyEventSubscriptionResult {

		/** Detailed information about an event to which you have subscribed. */
		EventSubscription?: EventSubscription;
	}
	export interface ModifyEventSubscriptionResultFormProperties {
	}
	export function CreateModifyEventSubscriptionResultFormGroup() {
		return new FormGroup<ModifyEventSubscriptionResultFormProperties>({
		});

	}

	export interface ModifyGlobalClusterResult {

		/** A data type representing an Amazon DocumentDB global cluster. */
		GlobalCluster?: GlobalCluster;
	}
	export interface ModifyGlobalClusterResultFormProperties {
	}
	export function CreateModifyGlobalClusterResultFormGroup() {
		return new FormGroup<ModifyGlobalClusterResultFormProperties>({
		});

	}

	export interface RebootDBInstanceResult {

		/** Detailed information about an instance. */
		DBInstance?: DBInstance;
	}
	export interface RebootDBInstanceResultFormProperties {
	}
	export function CreateRebootDBInstanceResultFormGroup() {
		return new FormGroup<RebootDBInstanceResultFormProperties>({
		});

	}

	export interface RemoveFromGlobalClusterResult {

		/** A data type representing an Amazon DocumentDB global cluster. */
		GlobalCluster?: GlobalCluster;
	}
	export interface RemoveFromGlobalClusterResultFormProperties {
	}
	export function CreateRemoveFromGlobalClusterResultFormGroup() {
		return new FormGroup<RemoveFromGlobalClusterResultFormProperties>({
		});

	}

	export interface RemoveSourceIdentifierFromSubscriptionResult {

		/** Detailed information about an event to which you have subscribed. */
		EventSubscription?: EventSubscription;
	}
	export interface RemoveSourceIdentifierFromSubscriptionResultFormProperties {
	}
	export function CreateRemoveSourceIdentifierFromSubscriptionResultFormGroup() {
		return new FormGroup<RemoveSourceIdentifierFromSubscriptionResultFormProperties>({
		});

	}

	export interface RestoreDBClusterFromSnapshotResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface RestoreDBClusterFromSnapshotResultFormProperties {
	}
	export function CreateRestoreDBClusterFromSnapshotResultFormGroup() {
		return new FormGroup<RestoreDBClusterFromSnapshotResultFormProperties>({
		});

	}

	export interface InsufficientDBClusterCapacityFault {
	}
	export interface InsufficientDBClusterCapacityFaultFormProperties {
	}
	export function CreateInsufficientDBClusterCapacityFaultFormGroup() {
		return new FormGroup<InsufficientDBClusterCapacityFaultFormProperties>({
		});

	}

	export interface InvalidDBSnapshotStateFault {
	}
	export interface InvalidDBSnapshotStateFaultFormProperties {
	}
	export function CreateInvalidDBSnapshotStateFaultFormGroup() {
		return new FormGroup<InvalidDBSnapshotStateFaultFormProperties>({
		});

	}

	export interface InvalidRestoreFault {
	}
	export interface InvalidRestoreFaultFormProperties {
	}
	export function CreateInvalidRestoreFaultFormGroup() {
		return new FormGroup<InvalidRestoreFaultFormProperties>({
		});

	}

	export interface RestoreDBClusterToPointInTimeResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface RestoreDBClusterToPointInTimeResultFormProperties {
	}
	export function CreateRestoreDBClusterToPointInTimeResultFormGroup() {
		return new FormGroup<RestoreDBClusterToPointInTimeResultFormProperties>({
		});

	}

	export interface StartDBClusterResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface StartDBClusterResultFormProperties {
	}
	export function CreateStartDBClusterResultFormGroup() {
		return new FormGroup<StartDBClusterResultFormProperties>({
		});

	}

	export interface StopDBClusterResult {

		/** Detailed information about a cluster. */
		DBCluster?: DBCluster;
	}
	export interface StopDBClusterResultFormProperties {
	}
	export function CreateStopDBClusterResultFormGroup() {
		return new FormGroup<StopDBClusterResultFormProperties>({
		});

	}


	/** Represents the input to <a>AddSourceIdentifierToSubscription</a>.  */
	export interface AddSourceIdentifierToSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SourceIdentifier: string;
	}

	/** Represents the input to <a>AddSourceIdentifierToSubscription</a>.  */
	export interface AddSourceIdentifierToSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateAddSourceIdentifierToSubscriptionMessageFormGroup() {
		return new FormGroup<AddSourceIdentifierToSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>AddTagsToResource</a>.  */
	export interface AddTagsToResourceMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		Tags: Array<string>;
	}

	/** Represents the input to <a>AddTagsToResource</a>.  */
	export interface AddTagsToResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceMessageFormGroup() {
		return new FormGroup<AddTagsToResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>ApplyPendingMaintenanceAction</a>.  */
	export interface ApplyPendingMaintenanceActionMessage {

		/** Required */
		ResourceIdentifier: string;

		/** Required */
		ApplyAction: string;

		/** Required */
		OptInType: string;
	}

	/** Represents the input to <a>ApplyPendingMaintenanceAction</a>.  */
	export interface ApplyPendingMaintenanceActionMessageFormProperties {

		/** Required */
		ResourceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ApplyAction: FormControl<string | null | undefined>,

		/** Required */
		OptInType: FormControl<string | null | undefined>,
	}
	export function CreateApplyPendingMaintenanceActionMessageFormGroup() {
		return new FormGroup<ApplyPendingMaintenanceActionMessageFormProperties>({
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplyAction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptInType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about an Availability Zone. */
	export interface AvailabilityZone {
		Name?: string;
	}

	/** Information about an Availability Zone. */
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A certificate authority (CA) certificate for an Amazon Web Services account. */
	export interface Certificate {
		CertificateIdentifier?: string;
		CertificateType?: string;
		Thumbprint?: string;
		ValidFrom?: Date;
		ValidTill?: Date;
		CertificateArn?: string;
	}

	/** A certificate authority (CA) certificate for an Amazon Web Services account. */
	export interface CertificateFormProperties {
		CertificateIdentifier: FormControl<string | null | undefined>,
		CertificateType: FormControl<string | null | undefined>,
		Thumbprint: FormControl<string | null | undefined>,
		ValidFrom: FormControl<Date | null | undefined>,
		ValidTill: FormControl<Date | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			CertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			CertificateType: new FormControl<string | null | undefined>(undefined),
			Thumbprint: new FormControl<string | null | undefined>(undefined),
			ValidFrom: new FormControl<Date | null | undefined>(undefined),
			ValidTill: new FormControl<Date | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p> */
	export interface CloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<string>;
		DisableLogTypes?: Array<string>;
	}

	/** <p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p> */
	export interface CloudwatchLogsExportConfigurationFormProperties {
	}
	export function CreateCloudwatchLogsExportConfigurationFormGroup() {
		return new FormGroup<CloudwatchLogsExportConfigurationFormProperties>({
		});

	}


	/** Represents the input to <a>CopyDBClusterParameterGroup</a>.  */
	export interface CopyDBClusterParameterGroupMessage {

		/** Required */
		SourceDBClusterParameterGroupIdentifier: string;

		/** Required */
		TargetDBClusterParameterGroupIdentifier: string;

		/** Required */
		TargetDBClusterParameterGroupDescription: string;
		Tags?: Array<string>;
	}

	/** Represents the input to <a>CopyDBClusterParameterGroup</a>.  */
	export interface CopyDBClusterParameterGroupMessageFormProperties {

		/** Required */
		SourceDBClusterParameterGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDBClusterParameterGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDBClusterParameterGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCopyDBClusterParameterGroupMessageFormGroup() {
		return new FormGroup<CopyDBClusterParameterGroupMessageFormProperties>({
			SourceDBClusterParameterGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDBClusterParameterGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDBClusterParameterGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>CopyDBClusterSnapshot</a>.  */
	export interface CopyDBClusterSnapshotMessage {

		/** Required */
		SourceDBClusterSnapshotIdentifier: string;

		/** Required */
		TargetDBClusterSnapshotIdentifier: string;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		CopyTags?: boolean | null;
		Tags?: Array<string>;
	}

	/** Represents the input to <a>CopyDBClusterSnapshot</a>.  */
	export interface CopyDBClusterSnapshotMessageFormProperties {

		/** Required */
		SourceDBClusterSnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PreSignedUrl: FormControl<string | null | undefined>,
		CopyTags: FormControl<boolean | null | undefined>,
	}
	export function CreateCopyDBClusterSnapshotMessageFormGroup() {
		return new FormGroup<CopyDBClusterSnapshotMessageFormProperties>({
			SourceDBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PreSignedUrl: new FormControl<string | null | undefined>(undefined),
			CopyTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>CreateDBCluster</a>.  */
	export interface CreateDBClusterMessage {
		AvailabilityZones?: Array<string>;
		BackupRetentionPeriod?: number | null;

		/** Required */
		DBClusterIdentifier: string;
		DBClusterParameterGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		DBSubnetGroupName?: string;

		/** Required */
		Engine: string;
		EngineVersion?: string;
		Port?: number | null;
		MasterUsername?: string;
		MasterUserPassword?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		Tags?: Array<string>;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		EnableCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean | null;
		GlobalClusterIdentifier?: string;
	}

	/** Represents the input to <a>CreateDBCluster</a>.  */
	export interface CreateDBClusterMessageFormProperties {
		BackupRetentionPeriod: FormControl<number | null | undefined>,

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,

		/** Required */
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PreSignedUrl: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBClusterMessageFormGroup() {
		return new FormGroup<CreateDBClusterMessageFormProperties>({
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PreSignedUrl: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of <a>CreateDBClusterParameterGroup</a>. */
	export interface CreateDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;

		/** Required */
		DBParameterGroupFamily: string;

		/** Required */
		Description: string;
		Tags?: Array<string>;
	}

	/** Represents the input of <a>CreateDBClusterParameterGroup</a>. */
	export interface CreateDBClusterParameterGroupMessageFormProperties {

		/** Required */
		DBClusterParameterGroupName: FormControl<string | null | undefined>,

		/** Required */
		DBParameterGroupFamily: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBClusterParameterGroupMessageFormGroup() {
		return new FormGroup<CreateDBClusterParameterGroupMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of <a>CreateDBClusterSnapshot</a>. */
	export interface CreateDBClusterSnapshotMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;

		/** Required */
		DBClusterIdentifier: string;
		Tags?: Array<string>;
	}

	/** Represents the input of <a>CreateDBClusterSnapshot</a>. */
	export interface CreateDBClusterSnapshotMessageFormProperties {

		/** Required */
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBClusterSnapshotMessageFormGroup() {
		return new FormGroup<CreateDBClusterSnapshotMessageFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>CreateDBInstance</a>. */
	export interface CreateDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;

		/** Required */
		DBInstanceClass: string;

		/** Required */
		Engine: string;
		AvailabilityZone?: string;
		PreferredMaintenanceWindow?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		Tags?: Array<string>;

		/** Required */
		DBClusterIdentifier: string;
		CopyTagsToSnapshot?: boolean | null;
		PromotionTier?: number | null;
		EnablePerformanceInsights?: boolean | null;
		PerformanceInsightsKMSKeyId?: string;
	}

	/** Represents the input to <a>CreateDBInstance</a>. */
	export interface CreateDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DBInstanceClass: FormControl<string | null | undefined>,

		/** Required */
		Engine: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		EnablePerformanceInsights: FormControl<boolean | null | undefined>,
		PerformanceInsightsKMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBInstanceMessageFormGroup() {
		return new FormGroup<CreateDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			EnablePerformanceInsights: new FormControl<boolean | null | undefined>(undefined),
			PerformanceInsightsKMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>CreateDBSubnetGroup</a>. */
	export interface CreateDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;

		/** Required */
		DBSubnetGroupDescription: string;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Array<string>;
	}

	/** Represents the input to <a>CreateDBSubnetGroup</a>. */
	export interface CreateDBSubnetGroupMessageFormProperties {

		/** Required */
		DBSubnetGroupName: FormControl<string | null | undefined>,

		/** Required */
		DBSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBSubnetGroupMessageFormGroup() {
		return new FormGroup<CreateDBSubnetGroupMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBSubnetGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>CreateEventSubscription</a>. */
	export interface CreateEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SnsTopicArn: string;
		SourceType?: string;
		EventCategories?: Array<string>;
		SourceIds?: Array<string>;
		Enabled?: boolean | null;
		Tags?: Array<string>;
	}

	/** Represents the input to <a>CreateEventSubscription</a>. */
	export interface CreateEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEventSubscriptionMessageFormGroup() {
		return new FormGroup<CreateEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>CreateGlobalCluster</a>. */
	export interface CreateGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;
		SourceDBClusterIdentifier?: string;
		Engine?: string;
		EngineVersion?: string;
		DeletionProtection?: boolean | null;
		DatabaseName?: string;
		StorageEncrypted?: boolean | null;
	}

	/** Represents the input to <a>CreateGlobalCluster</a>. */
	export interface CreateGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
		SourceDBClusterIdentifier: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGlobalClusterMessageFormGroup() {
		return new FormGroup<CreateGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceDBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about an instance that is part of a cluster. */
	export interface DBClusterMember {
		DBInstanceIdentifier?: string;
		IsClusterWriter?: boolean | null;
		DBClusterParameterGroupStatus?: string;
		PromotionTier?: number | null;
	}

	/** Contains information about an instance that is part of a cluster. */
	export interface DBClusterMemberFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		IsClusterWriter: FormControl<boolean | null | undefined>,
		DBClusterParameterGroupStatus: FormControl<string | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
	}
	export function CreateDBClusterMemberFormGroup() {
		return new FormGroup<DBClusterMemberFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			IsClusterWriter: new FormControl<boolean | null | undefined>(undefined),
			DBClusterParameterGroupStatus: new FormControl<string | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes an Identity and Access Management (IAM) role that is associated with a cluster. */
	export interface DBClusterRole {
		RoleArn?: string;
		Status?: string;
	}

	/** Describes an Identity and Access Management (IAM) role that is associated with a cluster. */
	export interface DBClusterRoleFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterRoleFormGroup() {
		return new FormGroup<DBClusterRoleFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.</p> */
	export interface DBClusterSnapshotAttribute {
		AttributeName?: string;
		AttributeValues?: Array<string>;
	}

	/** <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.</p> */
	export interface DBClusterSnapshotAttributeFormProperties {
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterSnapshotAttributeFormGroup() {
		return new FormGroup<DBClusterSnapshotAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Detailed information about an engine version.  */
	export interface DBEngineVersion {
		Engine?: string;
		EngineVersion?: string;
		DBParameterGroupFamily?: string;
		DBEngineDescription?: string;
		DBEngineVersionDescription?: string;
		ValidUpgradeTarget?: Array<string>;
		ExportableLogTypes?: Array<string>;
		SupportsLogExportsToCloudwatchLogs?: boolean | null;
	}

	/**  Detailed information about an engine version.  */
	export interface DBEngineVersionFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		DBEngineDescription: FormControl<string | null | undefined>,
		DBEngineVersionDescription: FormControl<string | null | undefined>,
		SupportsLogExportsToCloudwatchLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateDBEngineVersionFormGroup() {
		return new FormGroup<DBEngineVersionFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			DBEngineDescription: new FormControl<string | null | undefined>(undefined),
			DBEngineVersionDescription: new FormControl<string | null | undefined>(undefined),
			SupportsLogExportsToCloudwatchLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides a list of status information for an instance. */
	export interface DBInstanceStatusInfo {
		StatusType?: string;
		Normal?: boolean | null;
		Status?: string;
		Message?: string;
	}

	/** Provides a list of status information for an instance. */
	export interface DBInstanceStatusInfoFormProperties {
		StatusType: FormControl<string | null | undefined>,
		Normal: FormControl<boolean | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDBInstanceStatusInfoFormGroup() {
		return new FormGroup<DBInstanceStatusInfoFormProperties>({
			StatusType: new FormControl<string | null | undefined>(undefined),
			Normal: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DeleteDBCluster</a>. */
	export interface DeleteDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;
		SkipFinalSnapshot?: boolean | null;
		FinalDBSnapshotIdentifier?: string;
	}

	/** Represents the input to <a>DeleteDBCluster</a>. */
	export interface DeleteDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
		SkipFinalSnapshot: FormControl<boolean | null | undefined>,
		FinalDBSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBClusterMessageFormGroup() {
		return new FormGroup<DeleteDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkipFinalSnapshot: new FormControl<boolean | null | undefined>(undefined),
			FinalDBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DeleteDBClusterParameterGroup</a>. */
	export interface DeleteDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;
	}

	/** Represents the input to <a>DeleteDBClusterParameterGroup</a>. */
	export interface DeleteDBClusterParameterGroupMessageFormProperties {

		/** Required */
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBClusterParameterGroupMessageFormGroup() {
		return new FormGroup<DeleteDBClusterParameterGroupMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>DeleteDBClusterSnapshot</a>. */
	export interface DeleteDBClusterSnapshotMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;
	}

	/** Represents the input to <a>DeleteDBClusterSnapshot</a>. */
	export interface DeleteDBClusterSnapshotMessageFormProperties {

		/** Required */
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBClusterSnapshotMessageFormGroup() {
		return new FormGroup<DeleteDBClusterSnapshotMessageFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>DeleteDBInstance</a>. */
	export interface DeleteDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
	}

	/** Represents the input to <a>DeleteDBInstance</a>. */
	export interface DeleteDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBInstanceMessageFormGroup() {
		return new FormGroup<DeleteDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>DeleteDBSubnetGroup</a>. */
	export interface DeleteDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;
	}

	/** Represents the input to <a>DeleteDBSubnetGroup</a>. */
	export interface DeleteDBSubnetGroupMessageFormProperties {

		/** Required */
		DBSubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBSubnetGroupMessageFormGroup() {
		return new FormGroup<DeleteDBSubnetGroupMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>DeleteEventSubscription</a>. */
	export interface DeleteEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
	}

	/** Represents the input to <a>DeleteEventSubscription</a>. */
	export interface DeleteEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventSubscriptionMessageFormGroup() {
		return new FormGroup<DeleteEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>DeleteGlobalCluster</a>. */
	export interface DeleteGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;
	}

	/** Represents the input to <a>DeleteGlobalCluster</a>. */
	export interface DeleteGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGlobalClusterMessageFormGroup() {
		return new FormGroup<DeleteGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCertificatesMessage {
		CertificateIdentifier?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeCertificatesMessageFormProperties {
		CertificateIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificatesMessageFormGroup() {
		return new FormGroup<DescribeCertificatesMessageFormProperties>({
			CertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeDBClusterParameterGroups</a>. */
	export interface DescribeDBClusterParameterGroupsMessage {
		DBClusterParameterGroupName?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeDBClusterParameterGroups</a>. */
	export interface DescribeDBClusterParameterGroupsMessageFormProperties {
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBClusterParameterGroupsMessageFormGroup() {
		return new FormGroup<DescribeDBClusterParameterGroupsMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeDBClusterParameters</a>. */
	export interface DescribeDBClusterParametersMessage {

		/** Required */
		DBClusterParameterGroupName: string;
		Source?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeDBClusterParameters</a>. */
	export interface DescribeDBClusterParametersMessageFormProperties {

		/** Required */
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBClusterParametersMessageFormGroup() {
		return new FormGroup<DescribeDBClusterParametersMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>. */
	export interface DescribeDBClusterSnapshotAttributesMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;
	}

	/** Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>. */
	export interface DescribeDBClusterSnapshotAttributesMessageFormProperties {

		/** Required */
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBClusterSnapshotAttributesMessageFormGroup() {
		return new FormGroup<DescribeDBClusterSnapshotAttributesMessageFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>DescribeDBClusterSnapshots</a>. */
	export interface DescribeDBClusterSnapshotsMessage {
		DBClusterIdentifier?: string;
		DBClusterSnapshotIdentifier?: string;
		SnapshotType?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
		IncludeShared?: boolean | null;
		IncludePublic?: boolean | null;
	}

	/** Represents the input to <a>DescribeDBClusterSnapshots</a>. */
	export interface DescribeDBClusterSnapshotsMessageFormProperties {
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		IncludeShared: FormControl<boolean | null | undefined>,
		IncludePublic: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeDBClusterSnapshotsMessageFormGroup() {
		return new FormGroup<DescribeDBClusterSnapshotsMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			IncludeShared: new FormControl<boolean | null | undefined>(undefined),
			IncludePublic: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeDBClusters</a>. */
	export interface DescribeDBClustersMessage {
		DBClusterIdentifier?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeDBClusters</a>. */
	export interface DescribeDBClustersMessageFormProperties {
		DBClusterIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBClustersMessageFormGroup() {
		return new FormGroup<DescribeDBClustersMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeDBEngineVersions</a>. */
	export interface DescribeDBEngineVersionsMessage {
		Engine?: string;
		EngineVersion?: string;
		DBParameterGroupFamily?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
		DefaultOnly?: boolean | null;
		ListSupportedCharacterSets?: boolean | null;
		ListSupportedTimezones?: boolean | null;
	}

	/** Represents the input to <a>DescribeDBEngineVersions</a>. */
	export interface DescribeDBEngineVersionsMessageFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		DefaultOnly: FormControl<boolean | null | undefined>,
		ListSupportedCharacterSets: FormControl<boolean | null | undefined>,
		ListSupportedTimezones: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeDBEngineVersionsMessageFormGroup() {
		return new FormGroup<DescribeDBEngineVersionsMessageFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			DefaultOnly: new FormControl<boolean | null | undefined>(undefined),
			ListSupportedCharacterSets: new FormControl<boolean | null | undefined>(undefined),
			ListSupportedTimezones: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeDBInstances</a>. */
	export interface DescribeDBInstancesMessage {
		DBInstanceIdentifier?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeDBInstances</a>. */
	export interface DescribeDBInstancesMessageFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBInstancesMessageFormGroup() {
		return new FormGroup<DescribeDBInstancesMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeDBSubnetGroups</a>. */
	export interface DescribeDBSubnetGroupsMessage {
		DBSubnetGroupName?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeDBSubnetGroups</a>. */
	export interface DescribeDBSubnetGroupsMessageFormProperties {
		DBSubnetGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBSubnetGroupsMessageFormGroup() {
		return new FormGroup<DescribeDBSubnetGroupsMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeEngineDefaultClusterParameters</a>. */
	export interface DescribeEngineDefaultClusterParametersMessage {

		/** Required */
		DBParameterGroupFamily: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeEngineDefaultClusterParameters</a>. */
	export interface DescribeEngineDefaultClusterParametersMessageFormProperties {

		/** Required */
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEngineDefaultClusterParametersMessageFormGroup() {
		return new FormGroup<DescribeEngineDefaultClusterParametersMessageFormProperties>({
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeEventCategories</a>. */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string;
		Filters?: Array<string>;
	}

	/** Represents the input to <a>DescribeEventCategories</a>. */
	export interface DescribeEventCategoriesMessageFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventCategoriesMessageFormGroup() {
		return new FormGroup<DescribeEventCategoriesMessageFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeEventSubscriptions</a>. */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeEventSubscriptions</a>. */
	export interface DescribeEventSubscriptionsMessageFormProperties {
		SubscriptionName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSubscriptionsMessageFormGroup() {
		return new FormGroup<DescribeEventSubscriptionsMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceType { 'db-instance' = 0, 'db-parameter-group' = 1, 'db-security-group' = 2, 'db-snapshot' = 3, 'db-cluster' = 4, 'db-cluster-snapshot' = 5 }


	/** Represents the input to <a>DescribeEvents</a>. */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string;
		SourceType?: SourceType;
		StartTime?: Date;
		EndTime?: Date;
		Duration?: number | null;
		EventCategories?: Array<string>;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeEvents</a>. */
	export interface DescribeEventsMessageFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsMessageFormGroup() {
		return new FormGroup<DescribeEventsMessageFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGlobalClustersMessage {
		GlobalClusterIdentifier?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeGlobalClustersMessageFormProperties {
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalClustersMessageFormGroup() {
		return new FormGroup<DescribeGlobalClustersMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribeOrderableDBInstanceOptions</a>. */
	export interface DescribeOrderableDBInstanceOptionsMessage {

		/** Required */
		Engine: string;
		EngineVersion?: string;
		DBInstanceClass?: string;
		LicenseModel?: string;
		Vpc?: boolean | null;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}

	/** Represents the input to <a>DescribeOrderableDBInstanceOptions</a>. */
	export interface DescribeOrderableDBInstanceOptionsMessageFormProperties {

		/** Required */
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Vpc: FormControl<boolean | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrderableDBInstanceOptionsMessageFormGroup() {
		return new FormGroup<DescribeOrderableDBInstanceOptionsMessageFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Vpc: new FormControl<boolean | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>DescribePendingMaintenanceActions</a>. */
	export interface DescribePendingMaintenanceActionsMessage {
		ResourceIdentifier?: string;
		Filters?: Array<string>;
		Marker?: string;
		MaxRecords?: number | null;
	}

	/** Represents the input to <a>DescribePendingMaintenanceActions</a>. */
	export interface DescribePendingMaintenanceActionsMessageFormProperties {
		ResourceIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribePendingMaintenanceActionsMessageFormGroup() {
		return new FormGroup<DescribePendingMaintenanceActionsMessageFormProperties>({
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detailed information about an event. */
	export interface Event {
		SourceIdentifier?: string;
		SourceType?: SourceType;
		Message?: string;
		EventCategories?: Array<string>;
		Date?: Date;
		SourceArn?: string;
	}

	/** Detailed information about an event. */
	export interface EventFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event source type, accompanied by one or more event category names. */
	export interface EventCategoriesMap {
		SourceType?: string;
		EventCategories?: Array<string>;
	}

	/** An event source type, accompanied by one or more event category names. */
	export interface EventCategoriesMapFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateEventCategoriesMapFormGroup() {
		return new FormGroup<EventCategoriesMapFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>FailoverDBCluster</a>. */
	export interface FailoverDBClusterMessage {
		DBClusterIdentifier?: string;
		TargetDBInstanceIdentifier?: string;
	}

	/** Represents the input to <a>FailoverDBCluster</a>. */
	export interface FailoverDBClusterMessageFormProperties {
		DBClusterIdentifier: FormControl<string | null | undefined>,
		TargetDBInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateFailoverDBClusterMessageFormGroup() {
		return new FormGroup<FailoverDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			TargetDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters.  */
	export interface GlobalClusterMember {
		DBClusterArn?: string;
		Readers?: Array<string>;
		IsWriter?: boolean | null;
	}

	/** A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters.  */
	export interface GlobalClusterMemberFormProperties {
		DBClusterArn: FormControl<string | null | undefined>,
		IsWriter: FormControl<boolean | null | undefined>,
	}
	export function CreateGlobalClusterMemberFormGroup() {
		return new FormGroup<GlobalClusterMemberFormProperties>({
			DBClusterArn: new FormControl<string | null | undefined>(undefined),
			IsWriter: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>ListTagsForResource</a>. */
	export interface ListTagsForResourceMessage {

		/** Required */
		ResourceName: string;
		Filters?: Array<string>;
	}

	/** Represents the input to <a>ListTagsForResource</a>. */
	export interface ListTagsForResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceMessageFormGroup() {
		return new FormGroup<ListTagsForResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>ModifyDBCluster</a>. */
	export interface ModifyDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;
		NewDBClusterIdentifier?: string;
		ApplyImmediately?: boolean | null;
		BackupRetentionPeriod?: number | null;
		DBClusterParameterGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Port?: number | null;
		MasterUserPassword?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean | null;
		DeletionProtection?: boolean | null;
	}

	/** Represents the input to <a>ModifyDBCluster</a>. */
	export interface ModifyDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
		NewDBClusterIdentifier: FormControl<string | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AllowMajorVersionUpgrade: FormControl<boolean | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyDBClusterMessageFormGroup() {
		return new FormGroup<ModifyDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewDBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ApplyImmediately: new FormControl<boolean | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>ModifyDBClusterParameterGroup</a>. */
	export interface ModifyDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;

		/** Required */
		Parameters: Array<string>;
	}

	/** Represents the input to <a>ModifyDBClusterParameterGroup</a>. */
	export interface ModifyDBClusterParameterGroupMessageFormProperties {

		/** Required */
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBClusterParameterGroupMessageFormGroup() {
		return new FormGroup<ModifyDBClusterParameterGroupMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>. */
	export interface ModifyDBClusterSnapshotAttributeMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;

		/** Required */
		AttributeName: string;
		ValuesToAdd?: Array<string>;
		ValuesToRemove?: Array<string>;
	}

	/** Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>. */
	export interface ModifyDBClusterSnapshotAttributeMessageFormProperties {

		/** Required */
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBClusterSnapshotAttributeMessageFormGroup() {
		return new FormGroup<ModifyDBClusterSnapshotAttributeMessageFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>ModifyDBInstance</a>. */
	export interface ModifyDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		DBInstanceClass?: string;
		ApplyImmediately?: boolean | null;
		PreferredMaintenanceWindow?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		NewDBInstanceIdentifier?: string;
		CACertificateIdentifier?: string;
		CopyTagsToSnapshot?: boolean | null;
		PromotionTier?: number | null;
		EnablePerformanceInsights?: boolean | null;
		PerformanceInsightsKMSKeyId?: string;
	}

	/** Represents the input to <a>ModifyDBInstance</a>. */
	export interface ModifyDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		NewDBInstanceIdentifier: FormControl<string | null | undefined>,
		CACertificateIdentifier: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		EnablePerformanceInsights: FormControl<boolean | null | undefined>,
		PerformanceInsightsKMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBInstanceMessageFormGroup() {
		return new FormGroup<ModifyDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			ApplyImmediately: new FormControl<boolean | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			NewDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			CACertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			EnablePerformanceInsights: new FormControl<boolean | null | undefined>(undefined),
			PerformanceInsightsKMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>ModifyDBSubnetGroup</a>. */
	export interface ModifyDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;
		DBSubnetGroupDescription?: string;

		/** Required */
		SubnetIds: Array<string>;
	}

	/** Represents the input to <a>ModifyDBSubnetGroup</a>. */
	export interface ModifyDBSubnetGroupMessageFormProperties {

		/** Required */
		DBSubnetGroupName: FormControl<string | null | undefined>,
		DBSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBSubnetGroupMessageFormGroup() {
		return new FormGroup<ModifyDBSubnetGroupMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>ModifyEventSubscription</a>. */
	export interface ModifyEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
		SnsTopicArn?: string;
		SourceType?: string;
		EventCategories?: Array<string>;
		Enabled?: boolean | null;
	}

	/** Represents the input to <a>ModifyEventSubscription</a>. */
	export interface ModifyEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyEventSubscriptionMessageFormGroup() {
		return new FormGroup<ModifyEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>ModifyGlobalCluster</a>. */
	export interface ModifyGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;
		NewGlobalClusterIdentifier?: string;
		DeletionProtection?: boolean | null;
	}

	/** Represents the input to <a>ModifyGlobalCluster</a>. */
	export interface ModifyGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
		NewGlobalClusterIdentifier: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyGlobalClusterMessageFormGroup() {
		return new FormGroup<ModifyGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewGlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The options that are available for an instance. */
	export interface OrderableDBInstanceOption {
		Engine?: string;
		EngineVersion?: string;
		DBInstanceClass?: string;
		LicenseModel?: string;
		AvailabilityZones?: Array<string>;
		Vpc?: boolean | null;
	}

	/** The options that are available for an instance. */
	export interface OrderableDBInstanceOptionFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Vpc: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderableDBInstanceOptionFormGroup() {
		return new FormGroup<OrderableDBInstanceOptionFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Vpc: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about a pending maintenance action for a resource. */
	export interface PendingMaintenanceAction {
		Action?: string;
		AutoAppliedAfterDate?: Date;
		ForcedApplyDate?: Date;
		OptInStatus?: string;
		CurrentApplyDate?: Date;
		Description?: string;
	}

	/** Provides information about a pending maintenance action for a resource. */
	export interface PendingMaintenanceActionFormProperties {
		Action: FormControl<string | null | undefined>,
		AutoAppliedAfterDate: FormControl<Date | null | undefined>,
		ForcedApplyDate: FormControl<Date | null | undefined>,
		OptInStatus: FormControl<string | null | undefined>,
		CurrentApplyDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePendingMaintenanceActionFormGroup() {
		return new FormGroup<PendingMaintenanceActionFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
			AutoAppliedAfterDate: new FormControl<Date | null | undefined>(undefined),
			ForcedApplyDate: new FormControl<Date | null | undefined>(undefined),
			OptInStatus: new FormControl<string | null | undefined>(undefined),
			CurrentApplyDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>RebootDBInstance</a>. */
	export interface RebootDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		ForceFailover?: boolean | null;
	}

	/** Represents the input to <a>RebootDBInstance</a>. */
	export interface RebootDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		ForceFailover: FormControl<boolean | null | undefined>,
	}
	export function CreateRebootDBInstanceMessageFormGroup() {
		return new FormGroup<RebootDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceFailover: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>RemoveFromGlobalCluster</a>. */
	export interface RemoveFromGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;

		/** Required */
		DbClusterIdentifier: string;
	}

	/** Represents the input to <a>RemoveFromGlobalCluster</a>. */
	export interface RemoveFromGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DbClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFromGlobalClusterMessageFormGroup() {
		return new FormGroup<RemoveFromGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>RemoveSourceIdentifierFromSubscription</a>. */
	export interface RemoveSourceIdentifierFromSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SourceIdentifier: string;
	}

	/** Represents the input to <a>RemoveSourceIdentifierFromSubscription</a>. */
	export interface RemoveSourceIdentifierFromSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRemoveSourceIdentifierFromSubscriptionMessageFormGroup() {
		return new FormGroup<RemoveSourceIdentifierFromSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>RemoveTagsFromResource</a>. */
	export interface RemoveTagsFromResourceMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** Represents the input to <a>RemoveTagsFromResource</a>. */
	export interface RemoveTagsFromResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceMessageFormGroup() {
		return new FormGroup<RemoveTagsFromResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input to <a>ResetDBClusterParameterGroup</a>. */
	export interface ResetDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;
		ResetAllParameters?: boolean | null;
		Parameters?: Array<string>;
	}

	/** Represents the input to <a>ResetDBClusterParameterGroup</a>. */
	export interface ResetDBClusterParameterGroupMessageFormProperties {

		/** Required */
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		ResetAllParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateResetDBClusterParameterGroupMessageFormGroup() {
		return new FormGroup<ResetDBClusterParameterGroupMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResetAllParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>RestoreDBClusterFromSnapshot</a>. */
	export interface RestoreDBClusterFromSnapshotMessage {
		AvailabilityZones?: Array<string>;

		/** Required */
		DBClusterIdentifier: string;

		/** Required */
		SnapshotIdentifier: string;

		/** Required */
		Engine: string;
		EngineVersion?: string;
		Port?: number | null;
		DBSubnetGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Tags?: Array<string>;
		KmsKeyId?: string;
		EnableCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean | null;
		DBClusterParameterGroupName?: string;
	}

	/** Represents the input to <a>RestoreDBClusterFromSnapshot</a>. */
	export interface RestoreDBClusterFromSnapshotMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDBClusterFromSnapshotMessageFormGroup() {
		return new FormGroup<RestoreDBClusterFromSnapshotMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input to <a>RestoreDBClusterToPointInTime</a>. */
	export interface RestoreDBClusterToPointInTimeMessage {

		/** Required */
		DBClusterIdentifier: string;
		RestoreType?: string;

		/** Required */
		SourceDBClusterIdentifier: string;
		RestoreToTime?: Date;
		UseLatestRestorableTime?: boolean | null;
		Port?: number | null;
		DBSubnetGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Tags?: Array<string>;
		KmsKeyId?: string;
		EnableCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean | null;
	}

	/** Represents the input to <a>RestoreDBClusterToPointInTime</a>. */
	export interface RestoreDBClusterToPointInTimeMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
		RestoreType: FormControl<string | null | undefined>,

		/** Required */
		SourceDBClusterIdentifier: FormControl<string | null | undefined>,
		RestoreToTime: FormControl<Date | null | undefined>,
		UseLatestRestorableTime: FormControl<boolean | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateRestoreDBClusterToPointInTimeMessageFormGroup() {
		return new FormGroup<RestoreDBClusterToPointInTimeMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RestoreType: new FormControl<string | null | undefined>(undefined),
			SourceDBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RestoreToTime: new FormControl<Date | null | undefined>(undefined),
			UseLatestRestorableTime: new FormControl<boolean | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;
	}
	export interface StartDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartDBClusterMessageFormGroup() {
		return new FormGroup<StartDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;
	}
	export interface StopDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStopDBClusterMessageFormGroup() {
		return new FormGroup<StopDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Detailed information about a subnet.  */
	export interface Subnet {
		SubnetIdentifier?: string;
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string;
	}

	/**  Detailed information about a subnet.  */
	export interface SubnetFormProperties {
		SubnetIdentifier: FormControl<string | null | undefined>,
		SubnetStatus: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			SubnetIdentifier: new FormControl<string | null | undefined>(undefined),
			SubnetStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The version of the database engine that an instance can be upgraded to. */
	export interface UpgradeTarget {
		Engine?: string;
		EngineVersion?: string;
		Description?: string;
		AutoUpgrade?: boolean | null;
		IsMajorVersionUpgrade?: boolean | null;
	}

	/** The version of the database engine that an instance can be upgraded to. */
	export interface UpgradeTargetFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AutoUpgrade: FormControl<boolean | null | undefined>,
		IsMajorVersionUpgrade: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeTargetFormGroup() {
		return new FormGroup<UpgradeTargetFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AutoUpgrade: new FormControl<boolean | null | undefined>(undefined),
			IsMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Used as a response element for queries on virtual private cloud (VPC) security group membership. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string;
		Status?: string;
	}

	/** Used as a response element for queries on virtual private cloud (VPC) security group membership. */
	export interface VpcSecurityGroupMembershipFormProperties {
		VpcSecurityGroupId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateVpcSecurityGroupMembershipFormGroup() {
		return new FormGroup<VpcSecurityGroupMembershipFormProperties>({
			VpcSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a source identifier to an existing event notification subscription.
		 * Get #Action=AddSourceIdentifierToSubscription
		 * @param {string} SubscriptionName The name of the Amazon DocumentDB event notification subscription that you want to add a source identifier to.
		 * @param {string} SourceIdentifier <p>The identifier of the event source to be added:</p> <ul> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_AddSourceIdentifierToSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_AddSourceIdentifierToSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddSourceIdentifierToSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.
		 * Get #Action=AddTagsToResource
		 * @param {string} ResourceName The Amazon DocumentDB resource that the tags are added to. This value is an Amazon Resource Name .
		 * @param {Array<string>} Tags The tags to be assigned to the Amazon DocumentDB resource.
		 * @return {void} Success
		 */
		GET_AddTagsToResource(ResourceName: string, Tags: Array<string>, Action: GET_AddTagsToResourceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddTagsToResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
		 * Get #Action=ApplyPendingMaintenanceAction
		 * @param {string} ResourceIdentifier The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to.
		 * @param {string} ApplyAction <p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>
		 * @param {string} OptInType <p>A value that specifies the type of opt-in request or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource. </p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ApplyPendingMaintenanceAction(ResourceIdentifier: string, ApplyAction: string, OptInType: string, Action: GET_ApplyPendingMaintenanceActionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ApplyPendingMaintenanceAction?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&ApplyAction=' + (ApplyAction == null ? '' : encodeURIComponent(ApplyAction)) + '&OptInType=' + (OptInType == null ? '' : encodeURIComponent(OptInType)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies the specified cluster parameter group.
		 * Get #Action=CopyDBClusterParameterGroup
		 * @param {string} SourceDBClusterParameterGroupIdentifier <p>The identifier or Amazon Resource Name (ARN) for the source cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid cluster parameter group.</p> </li> <li> <p>If the source cluster parameter group is in the same Amazon Web Services Region as the copy, specify a valid parameter group identifier; for example, <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source parameter group is in a different Amazon Web Services Region than the copy, specify a valid cluster parameter group ARN; for example, <code>arn:aws:rds:us-east-1:123456789012:sample-cluster:sample-parameter-group</code>.</p> </li> </ul>
		 * @param {string} TargetDBClusterParameterGroupIdentifier <p>The identifier for the copied cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>
		 * @param {string} TargetDBClusterParameterGroupDescription A description for the copied cluster parameter group.
		 * @param {Array<string>} Tags The tags that are to be assigned to the parameter group.
		 * @return {void} Success
		 */
		GET_CopyDBClusterParameterGroup(SourceDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupDescription: string, Tags: Array<string> | null | undefined, Action: GET_CopyDBClusterParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBClusterParameterGroup?SourceDBClusterParameterGroupIdentifier=' + (SourceDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(SourceDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupIdentifier=' + (TargetDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupDescription=' + (TargetDBClusterParameterGroupDescription == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupDescription)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>
		 * Get #Action=CopyDBClusterSnapshot
		 * @param {string} SourceDBClusterSnapshotIdentifier <p>The identifier of the cluster snapshot to copy. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the <i>available</i> state.</p> </li> <li> <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid snapshot identifier.</p> </li> <li> <p>If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid cluster snapshot ARN.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>
		 * @param {string} TargetDBClusterSnapshotIdentifier <p>The identifier of the new cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>
		 * @param {string} KmsKeyId <p>The KMS key ID for an encrypted cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the cluster snapshot is encrypted with the same KMS key as the source cluster snapshot.</p> <p>If you copy an encrypted cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p> <p>To copy an encrypted cluster snapshot to another Amazon Web Services Region, set <code>KmsKeyId</code> to the KMS key ID that you want to use to encrypt the copy of the cluster snapshot in the destination Region. KMS encryption keys are specific to the Amazon Web Services Region that they are created in, and you can't use encryption keys from one Amazon Web Services Region in another Amazon Web Services Region.</p> <p>If you copy an unencrypted cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>
		 * @param {string} PreSignedUrl <p>The URL that contains a Signature Version 4 signed request for the<code>CopyDBClusterSnapshot</code> API action in the Amazon Web Services Region that contains the source cluster snapshot to copy. You must use the <code>PreSignedUrl</code> parameter when copying a cluster snapshot from another Amazon Web Services Region.</p> <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region.</p> <p>The presigned URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source Amazon Web Services Region that contains the cluster snapshot to be copied. The presigned URL request must contain the following parameter values:</p> <ul> <li> <p> <code>SourceRegion</code> - The ID of the region that contains the snapshot to be copied.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The identifier for the the encrypted cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted cluster snapshot from the us-east-1 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks something like the following: <code>arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot</code>.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new cluster snapshot to be created. This parameter isn't case sensitive.</p> </li> </ul>
		 * @param {boolean} CopyTags Set to <code>true</code> to copy all tags from the source cluster snapshot to the target cluster snapshot, and otherwise <code>false</code>. The default is <code>false</code>.
		 * @param {Array<string>} Tags The tags to be assigned to the cluster snapshot.
		 * @return {void} Success
		 */
		GET_CopyDBClusterSnapshot(SourceDBClusterSnapshotIdentifier: string, TargetDBClusterSnapshotIdentifier: string, KmsKeyId: string | null | undefined, PreSignedUrl: string | null | undefined, CopyTags: boolean | null | undefined, Tags: Array<string> | null | undefined, Action: GET_CopyDBClusterSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBClusterSnapshot?SourceDBClusterSnapshotIdentifier=' + (SourceDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(SourceDBClusterSnapshotIdentifier)) + '&TargetDBClusterSnapshotIdentifier=' + (TargetDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(TargetDBClusterSnapshotIdentifier)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&CopyTags=' + CopyTags + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Amazon DocumentDB cluster.
		 * Get #Action=CreateDBCluster
		 * @param {Array<string>} AvailabilityZones A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>
		 * @param {string} DBClusterIdentifier <p>The cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster</code> </p>
		 * @param {string} DBClusterParameterGroupName The name of the cluster parameter group to associate with this cluster.
		 * @param {Array<string>} VpcSecurityGroupIds A list of EC2 VPC security groups to associate with this cluster. 
		 * @param {string} DBSubnetGroupName <p>A subnet group to associate with this cluster.</p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} Engine <p>The name of the database engine to be used for this cluster.</p> <p>Valid values: <code>docdb</code> </p>
		 * @param {string} EngineVersion The version number of the database engine to use. The <code>--engine-version</code> will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
		 * @param {number} Port The port number on which the instances in the cluster accept connections.
		 * @param {string} MasterUsername <p>The name of the master user for the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 63 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine. </p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window. </p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {Array<string>} Tags The tags to be assigned to the cluster.
		 * @param {boolean} StorageEncrypted Specifies whether the cluster is encrypted.
		 * @param {string} KmsKeyId <p>The KMS key identifier for an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>: </p> <ul> <li> <p>If the <code>StorageEncrypted</code> parameter is <code>true</code>, Amazon DocumentDB uses your default encryption key. </p> </li> </ul> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.</p>
		 * @param {string} PreSignedUrl Not currently supported. 
		 * @param {Array<string>} EnableCloudwatchLogsExports A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html"> Auditing Amazon DocumentDB Events</a> and <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html"> Profiling Amazon DocumentDB Operations</a>. 
		 * @param {boolean} DeletionProtection Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.
		 * @param {string} GlobalClusterIdentifier The cluster identifier of the new global cluster.
		 * @return {void} Success
		 */
		GET_CreateDBCluster(AvailabilityZones: Array<string> | null | undefined, BackupRetentionPeriod: number | null | undefined, DBClusterIdentifier: string, DBClusterParameterGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, DBSubnetGroupName: string | null | undefined, Engine: string, EngineVersion: string | null | undefined, Port: number | null | undefined, MasterUsername: string | null | undefined, MasterUserPassword: string | null | undefined, PreferredBackupWindow: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, Tags: Array<string> | null | undefined, StorageEncrypted: boolean | null | undefined, KmsKeyId: string | null | undefined, PreSignedUrl: string | null | undefined, EnableCloudwatchLogsExports: Array<string> | null | undefined, DeletionProtection: boolean | null | undefined, GlobalClusterIdentifier: string | null | undefined, Action: GET_CreateDBClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBCluster?' + AvailabilityZones?.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&' + EnableCloudwatchLogsExports?.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>
		 * Get #Action=CreateDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must not match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
		 * @param {string} DBParameterGroupFamily The cluster parameter group family name.
		 * @param {string} Description The description for the cluster parameter group.
		 * @param {Array<string>} Tags The tags to be assigned to the cluster parameter group.
		 * @return {void} Success
		 */
		GET_CreateDBClusterParameterGroup(DBClusterParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Tags: Array<string> | null | undefined, Action: GET_CreateDBClusterParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a snapshot of a cluster.
		 * Get #Action=CreateDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>
		 * @param {string} DBClusterIdentifier <p>The identifier of the cluster to create a snapshot for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul> <p>Example: <code>my-cluster</code> </p>
		 * @param {Array<string>} Tags The tags to be assigned to the cluster snapshot.
		 * @return {void} Success
		 */
		GET_CreateDBClusterSnapshot(DBClusterSnapshotIdentifier: string, DBClusterIdentifier: string, Tags: Array<string> | null | undefined, Action: GET_CreateDBClusterSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new instance.
		 * Get #Action=CreateDBInstance
		 * @param {string} DBInstanceIdentifier <p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {string} DBInstanceClass The compute and memory capacity of the instance; for example, <code>db.r5.large</code>. 
		 * @param {string} Engine <p>The name of the database engine to be used for this instance.</p> <p>Valid value: <code>docdb</code> </p>
		 * @param {string} AvailabilityZone <p>The Amazon EC2 Availability Zone that the instance is created in. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p> <p>Example: <code>us-east-1d</code> </p>
		 * @param {string} PreferredMaintenanceWindow <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {boolean} AutoMinorVersionUpgrade <p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p> <p>Default: <code>false</code> </p>
		 * @param {Array<string>} Tags The tags to be assigned to the instance. You can assign up to 10 tags to an instance.
		 * @param {string} DBClusterIdentifier The identifier of the cluster that the instance will belong to.
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
		 * @param {number} PromotionTier <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>
		 * @param {boolean} EnablePerformanceInsights A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.
		 * @param {string} PerformanceInsightsKMSKeyId <p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>
		 * @return {void} Success
		 */
		GET_CreateDBInstance(DBInstanceIdentifier: string, DBInstanceClass: string, Engine: string, AvailabilityZone: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, Tags: Array<string> | null | undefined, DBClusterIdentifier: string, CopyTagsToSnapshot: boolean | null | undefined, PromotionTier: number | null | undefined, EnablePerformanceInsights: boolean | null | undefined, PerformanceInsightsKMSKeyId: string | null | undefined, Action: GET_CreateDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&PromotionTier=' + PromotionTier + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
		 * Get #Action=CreateDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the subnet group.
		 * @param {Array<string>} SubnetIds The Amazon EC2 subnet IDs for the subnet group.
		 * @param {Array<string>} Tags The tags to be assigned to the subnet group.
		 * @return {void} Success
		 */
		GET_CreateDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string, SubnetIds: Array<string>, Tags: Array<string> | null | undefined, Action: GET_CreateDBSubnetGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
		 * Get #Action=CreateEventSubscription
		 * @param {string} SubscriptionName <p>The name of the subscription.</p> <p>Constraints: The name must be fewer than 255 characters.</p>
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, you would set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-cluster</code>, <code>db-parameter-group</code>, <code>db-security-group</code>, <code>db-cluster-snapshot</code> </p>
		 * @param {Array<string>} EventCategories  A list of event categories for a <code>SourceType</code> that you want to subscribe to. 
		 * @param {Array<string>} SourceIds <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIds</code> are provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>
		 * @param {boolean} Enabled  A Boolean value; set to <code>true</code> to activate the subscription, set to <code>false</code> to create the subscription but not active it. 
		 * @param {Array<string>} Tags The tags to be assigned to the event subscription.
		 * @return {void} Success
		 */
		GET_CreateEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string | null | undefined, EventCategories: Array<string> | null | undefined, SourceIds: Array<string> | null | undefined, Enabled: boolean | null | undefined, Tags: Array<string> | null | undefined, Action: GET_CreateEventSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&' + SourceIds?.map(z => `SourceIds=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
		 * Get #Action=CreateGlobalCluster
		 * @param {string} GlobalClusterIdentifier The cluster identifier of the new global cluster.
		 * @param {string} SourceDBClusterIdentifier The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.
		 * @param {string} Engine The name of the database engine to be used for this cluster.
		 * @param {string} EngineVersion The engine version of the global cluster.
		 * @param {boolean} DeletionProtection The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled. 
		 * @param {string} DatabaseName The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.
		 * @param {boolean} StorageEncrypted The storage encryption setting for the new global cluster. 
		 * @return {void} Success
		 */
		GET_CreateGlobalCluster(GlobalClusterIdentifier: string, SourceDBClusterIdentifier: string | null | undefined, Engine: string | null | undefined, EngineVersion: string | null | undefined, DeletionProtection: boolean | null | undefined, DatabaseName: string | null | undefined, StorageEncrypted: boolean | null | undefined, Action: GET_CreateGlobalClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&SourceDBClusterIdentifier=' + (SourceDBClusterIdentifier == null ? '' : encodeURIComponent(SourceDBClusterIdentifier)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DeletionProtection=' + DeletionProtection + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&StorageEncrypted=' + StorageEncrypted + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
		 * Get #Action=DeleteDBCluster
		 * @param {string} DBClusterIdentifier <p>The cluster identifier for the cluster to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>
		 * @param {boolean} SkipFinalSnapshot <p> Determines whether a final cluster snapshot is created before the cluster is deleted. If <code>true</code> is specified, no cluster snapshot is created. If <code>false</code> is specified, a cluster snapshot is created before the DB cluster is deleted. </p> <note> <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a <code>FinalDBSnapshotIdentifier</code> parameter.</p> </note> <p>Default: <code>false</code> </p>
		 * @param {string} FinalDBSnapshotIdentifier <p> The cluster snapshot identifier of the new cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>. </p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to <code>true</code> results in an error. </p> </note> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBCluster(DBClusterIdentifier: string, SkipFinalSnapshot: boolean | null | undefined, FinalDBSnapshotIdentifier: string | null | undefined, Action: GET_DeleteDBClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
		 * Get #Action=DeleteDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing cluster parameter group.</p> </li> <li> <p>You can't delete a default cluster parameter group.</p> </li> <li> <p>Cannot be associated with any clusters.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterParameterGroup(DBClusterParameterGroupName: string, Action: GET_DeleteDBClusterParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
		 * Get #Action=DeleteDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing cluster snapshot in the <code>available</code> state.</p>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterSnapshot(DBClusterSnapshotIdentifier: string, Action: GET_DeleteDBClusterSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a previously provisioned instance.
		 * Get #Action=DeleteDBInstance
		 * @param {string} DBInstanceIdentifier <p>The instance identifier for the instance to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing instance.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBInstance(DBInstanceIdentifier: string, Action: GET_DeleteDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
		 * Get #Action=DeleteDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @return {void} Success
		 */
		GET_DeleteDBSubnetGroup(DBSubnetGroupName: string, Action: GET_DeleteDBSubnetGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Amazon DocumentDB event notification subscription.
		 * Get #Action=DeleteEventSubscription
		 * @param {string} SubscriptionName The name of the Amazon DocumentDB event notification subscription that you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteEventSubscription(SubscriptionName: string, Action: GET_DeleteEventSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
		 * Get #Action=DeleteGlobalCluster
		 * @param {string} GlobalClusterIdentifier The cluster identifier of the global cluster being deleted.
		 * @return {void} Success
		 */
		GET_DeleteGlobalCluster(GlobalClusterIdentifier: string, Action: GET_DeleteGlobalClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.
		 * Get #Action=DescribeCertificates
		 * @param {string} CertificateIdentifier <p>The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to <code>MaxRecords</code> certificates is returned. This parameter is not case sensitive.</p> <p>Constraints</p> <ul> <li> <p>Must match an existing <code>CertificateIdentifier</code>.</p> </li> </ul>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints:</p> <ul> <li> <p>Minimum: 20</p> </li> <li> <p>Maximum: 100</p> </li> </ul>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeCertificates(CertificateIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeCertificatesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeCertificates?CertificateIdentifier=' + (CertificateIdentifier == null ? '' : encodeURIComponent(CertificateIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group.
		 * Get #Action=DescribeDBClusterParameterGroups
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameterGroups(DBClusterParameterGroupName: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBClusterParameterGroupsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterParameterGroups?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the detailed parameter list for a particular cluster parameter group.
		 * Get #Action=DescribeDBClusterParameters
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>
		 * @param {string} Source  A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>. 
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameters(DBClusterParameterGroupName: string, Source: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBClusterParametersAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterParameters?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
		 * Get #Action=DescribeDBClusterSnapshotAttributes
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the cluster snapshot to describe the attributes for.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshotAttributes(DBClusterSnapshotIdentifier: string, Action: GET_DescribeDBClusterSnapshotAttributesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterSnapshotAttributes?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about cluster snapshots. This API operation supports pagination.
		 * Get #Action=DescribeDBClusterSnapshots
		 * @param {string} DBClusterIdentifier <p>The ID of the cluster to retrieve the list of cluster snapshots for. This parameter can't be used with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>
		 * @param {string} DBClusterSnapshotIdentifier <p>A specific cluster snapshot identifier to describe. This parameter can't be used with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBClusterSnapshot</code>.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>
		 * @param {string} SnapshotType <p>The type of cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.</p> </li> <li> <p> <code>manual</code> - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</p> </li> <li> <p> <code>shared</code> - Return all manual cluster snapshots that have been shared to your Amazon Web Services account.</p> </li> <li> <p> <code>public</code> - Return all cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual cluster snapshots are returned. You can include shared cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public cluster snapshots with these results by setting the<code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {boolean} IncludeShared Set to <code>true</code> to include shared manual cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore, and otherwise <code>false</code>. The default is <code>false</code>.
		 * @param {boolean} IncludePublic Set to <code>true</code> to include manual cluster snapshots that are public and can be copied or restored by any Amazon Web Services account, and otherwise <code>false</code>. The default is <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshots(DBClusterIdentifier: string | null | undefined, DBClusterSnapshotIdentifier: string | null | undefined, SnapshotType: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, IncludeShared: boolean | null | undefined, IncludePublic: boolean | null | undefined, Action: GET_DescribeDBClusterSnapshotsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterSnapshots?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&IncludeShared=' + IncludeShared + '&IncludePublic=' + IncludePublic + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.
		 * Get #Action=DescribeDBClusters
		 * @param {string} DBClusterIdentifier <p>The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>
		 * @param {Array<string>} Filters <p>A filter that specifies one or more clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.</p> </li> </ul>
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusters(DBClusterIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBClustersAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusters?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available engines.
		 * Get #Action=DescribeDBEngineVersions
		 * @param {string} Engine The database engine to return.
		 * @param {string} EngineVersion <p>The database engine version to return.</p> <p>Example: <code>3.6.0</code> </p>
		 * @param {string} DBParameterGroupFamily <p>The name of a specific parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBParameterGroupFamily</code>.</p> </li> </ul>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {boolean} DefaultOnly Indicates that only the default version of the specified engine or engine and major version combination is returned.
		 * @param {boolean} ListSupportedCharacterSets If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. 
		 * @param {boolean} ListSupportedTimezones If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. 
		 * @return {void} Success
		 */
		GET_DescribeDBEngineVersions(Engine: string | null | undefined, EngineVersion: string | null | undefined, DBParameterGroupFamily: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, DefaultOnly: boolean | null | undefined, ListSupportedCharacterSets: boolean | null | undefined, ListSupportedTimezones: boolean | null | undefined, Action: GET_DescribeDBEngineVersionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBEngineVersions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&DefaultOnly=' + DefaultOnly + '&ListSupportedCharacterSets=' + ListSupportedCharacterSets + '&ListSupportedTimezones=' + ListSupportedTimezones + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
		 * Get #Action=DescribeDBInstances
		 * @param {string} DBInstanceIdentifier <p>The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>
		 * @param {Array<string>} Filters <p>A filter that specifies one or more instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only the information about the instances that are associated with the clusters that are identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only the information about the instances that are identified by these ARNs.</p> </li> </ul>
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBInstances(DBInstanceIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBInstancesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBInstances?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.
		 * Get #Action=DescribeDBSubnetGroups
		 * @param {string} DBSubnetGroupName The name of the subnet group to return details for.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBSubnetGroups(DBSubnetGroupName: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBSubnetGroupsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBSubnetGroups?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default engine and system parameter information for the cluster database engine.
		 * Get #Action=DescribeEngineDefaultClusterParameters
		 * @param {string} DBParameterGroupFamily The name of the cluster parameter group family to return the engine parameter information for.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultClusterParameters(DBParameterGroupFamily: string, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEngineDefaultClusterParametersAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEngineDefaultClusterParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of categories for all event source types, or, if specified, for a specified source type.
		 * Get #Action=DescribeEventCategories
		 * @param {string} SourceType <p>The type of source that is generating the events.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @return {void} Success
		 */
		GET_DescribeEventCategories(SourceType: string | null | undefined, Filters: Array<string> | null | undefined, Action: GET_DescribeEventCategoriesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventCategories?SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
		 * Get #Action=DescribeEventSubscriptions
		 * @param {string} SubscriptionName The name of the Amazon DocumentDB event notification subscription that you want to describe.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEventSubscriptions(SubscriptionName: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEventSubscriptionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventSubscriptions?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
		 * Get #Action=DescribeEvents
		 * @param {string} SourceIdentifier <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIdentifier</code> is provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {SourceType} SourceType The event source to retrieve events for. If no value is specified, all events are returned.
		 * @param {Date} StartTime <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {Date} EndTime <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {number} Duration <p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>
		 * @param {Array<string>} EventCategories A list of event categories that trigger notifications for an event notification subscription.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string | null | undefined, SourceType: SourceType | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Duration: number | null | undefined, EventCategories: Array<string> | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEventsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Duration=' + Duration + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
		 * Get #Action=DescribeGlobalClusters
		 * @param {string} GlobalClusterIdentifier The user-supplied cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.
		 * @param {Array<string>} Filters <p>A filter that specifies one or more global DB clusters to describe.</p> <p>Supported filters: <code>db-cluster-id</code> accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.</p>
		 * @param {number} MaxRecords The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. 
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeGlobalClusters(GlobalClusterIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeGlobalClustersAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeGlobalClusters?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of orderable instance options for the specified engine.
		 * Get #Action=DescribeOrderableDBInstanceOptions
		 * @param {string} Engine The name of the engine to retrieve instance options for.
		 * @param {string} EngineVersion The engine version filter value. Specify this parameter to show only the available offerings that match the specified engine version.
		 * @param {string} DBInstanceClass The instance class filter value. Specify this parameter to show only the available offerings that match the specified instance class.
		 * @param {string} LicenseModel The license model filter value. Specify this parameter to show only the available offerings that match the specified license model.
		 * @param {boolean} Vpc The virtual private cloud (VPC) filter value. Specify this parameter to show only the available VPC or non-VPC offerings.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeOrderableDBInstanceOptions(Engine: string, EngineVersion: string | null | undefined, DBInstanceClass: string | null | undefined, LicenseModel: string | null | undefined, Vpc: boolean | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeOrderableDBInstanceOptionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOrderableDBInstanceOptions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Vpc=' + Vpc + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of resources (for example, instances) that have at least one pending maintenance action.
		 * Get #Action=DescribePendingMaintenanceActions
		 * @param {string} ResourceIdentifier The ARN of a resource to return pending maintenance actions for.
		 * @param {Array<string>} Filters <p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only pending maintenance actions for the clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>
		 * @param {string} Marker An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribePendingMaintenanceActions(ResourceIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, Marker: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribePendingMaintenanceActionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePendingMaintenanceActions?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
		 * Get #Action=FailoverDBCluster
		 * @param {string} DBClusterIdentifier <p>A cluster identifier to force a failover for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>
		 * @param {string} TargetDBInstanceIdentifier <p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For example, <code>mydbcluster-replica1</code>.</p>
		 * @return {void} Success
		 */
		GET_FailoverDBCluster(DBClusterIdentifier: string | null | undefined, TargetDBInstanceIdentifier: string | null | undefined, Action: GET_FailoverDBClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=FailoverDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&TargetDBInstanceIdentifier=' + (TargetDBInstanceIdentifier == null ? '' : encodeURIComponent(TargetDBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all tags on an Amazon DocumentDB resource.
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceName The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceName: string, Filters: Array<string> | null | undefined, Action: GET_ListTagsForResourceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
		 * Get #Action=ModifyDBCluster
		 * @param {string} DBClusterIdentifier <p>The cluster identifier for the cluster that is being modified. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>
		 * @param {string} NewDBClusterIdentifier <p>The new cluster identifier for the cluster when renaming a cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
		 * @param {boolean} ApplyImmediately <p>A value that specifies whether the changes in this request and any pending changes are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster. If this parameter is set to <code>false</code>, changes to the cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter affects only the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If you set this parameter value to <code>false</code>, the changes to the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>
		 * @param {string} DBClusterParameterGroupName The name of the cluster parameter group to use for the cluster.
		 * @param {Array<string>} VpcSecurityGroupIds A list of virtual private cloud (VPC) security groups that the cluster will belong to.
		 * @param {number} Port <p>The port number on which the cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The same port as the original cluster.</p>
		 * @param {string} MasterUserPassword <p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {GET_ModifyDBClusterCloudwatchLogsExportConfiguration} CloudwatchLogsExportConfiguration The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster. The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs.
		 * @param {string} EngineVersion <p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p> <p>To list all of the available engine versions for Amazon DocumentDB use the following command:</p> <p> <code>aws docdb describe-db-engine-versions --engine docdb --query "DBEngineVersions[].EngineVersion"</code> </p>
		 * @param {boolean} AllowMajorVersionUpgrade <p>A value that indicates whether major version upgrades are allowed.</p> <p>Constraints: You must allow major version upgrades when specifying a value for the <code>EngineVersion</code> parameter that is a different major version than the DB cluster's current version.</p>
		 * @param {boolean} DeletionProtection Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.
		 * @return {void} Success
		 */
		GET_ModifyDBCluster(DBClusterIdentifier: string, NewDBClusterIdentifier: string | null | undefined, ApplyImmediately: boolean | null | undefined, BackupRetentionPeriod: number | null | undefined, DBClusterParameterGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, Port: number | null | undefined, MasterUserPassword: string | null | undefined, PreferredBackupWindow: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, CloudwatchLogsExportConfiguration: GET_ModifyDBClusterCloudwatchLogsExportConfiguration | null | undefined, EngineVersion: string | null | undefined, AllowMajorVersionUpgrade: boolean | null | undefined, DeletionProtection: boolean | null | undefined, Action: GET_ModifyDBClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&NewDBClusterIdentifier=' + (NewDBClusterIdentifier == null ? '' : encodeURIComponent(NewDBClusterIdentifier)) + '&ApplyImmediately=' + ApplyImmediately + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&Port=' + Port + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&CloudwatchLogsExportConfiguration=' + CloudwatchLogsExportConfiguration + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
		 * Get #Action=ModifyDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the cluster parameter group to modify.
		 * @param {Array<string>} Parameters A list of parameters in the cluster parameter group to modify.
		 * @return {void} Success
		 */
		GET_ModifyDBClusterParameterGroup(DBClusterParameterGroupName: string, Parameters: Array<string>, Action: GET_ModifyDBClusterParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
		 * Get #Action=ModifyDBClusterSnapshotAttribute
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the cluster snapshot to modify the attributes for.
		 * @param {string} AttributeName <p>The name of the cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this value to <code>restore</code>.</p>
		 * @param {Array<string>} ValuesToAdd <p>A list of cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account IDs. To make the manual cluster snapshot restorable by any Amazon Web Services account, set it to <code>all</code>. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want to be available to all Amazon Web Services accounts.</p>
		 * @param {Array<string>} ValuesToRemove <p>A list of cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account identifiers. To remove authorization for any Amazon Web Services account to copy or restore the cluster snapshot, set it to <code>all</code> . If you specify <code>all</code>, an Amazon Web Services account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual cluster snapshot.</p>
		 * @return {void} Success
		 */
		GET_ModifyDBClusterSnapshotAttribute(DBClusterSnapshotIdentifier: string, AttributeName: string, ValuesToAdd: Array<string> | null | undefined, ValuesToRemove: Array<string> | null | undefined, Action: GET_ModifyDBClusterSnapshotAttributeAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBClusterSnapshotAttribute?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&' + ValuesToAdd?.map(z => `ValuesToAdd=${encodeURIComponent(z)}`).join('&') + '&' + ValuesToRemove?.map(z => `ValuesToRemove=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
		 * Get #Action=ModifyDBInstance
		 * @param {string} DBInstanceIdentifier <p>The instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>
		 * @param {string} DBInstanceClass <p>The new compute and memory capacity of the instance; for example, <code>db.r5.large</code>. Not all instance classes are available in all Amazon Web Services Regions. </p> <p>If you modify the instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request. </p> <p>Default: Uses existing setting.</p>
		 * @param {boolean} ApplyImmediately <p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the instance. </p> <p> If this parameter is set to <code>false</code>, changes to the instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next reboot.</p> <p>Default: <code>false</code> </p>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, changing this parameter causes a reboot of the instance. If you are moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure that pending changes are applied.</p> <p>Default: Uses existing setting.</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Must be at least 30 minutes.</p>
		 * @param {boolean} AutoMinorVersionUpgrade This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.
		 * @param {string} NewDBInstanceIdentifier <p> The new instance identifier for the instance when renaming an instance. When you change the instance identifier, an instance reboot occurs immediately if you set <code>Apply Immediately</code> to <code>true</code>. It occurs during the next maintenance window if you set <code>Apply Immediately</code> to <code>false</code>. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {string} CACertificateIdentifier Indicates the certificate that needs to be associated with the instance.
		 * @param {boolean} CopyTagsToSnapshot A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
		 * @param {number} PromotionTier <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>
		 * @param {boolean} EnablePerformanceInsights A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.
		 * @param {string} PerformanceInsightsKMSKeyId <p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>
		 * @return {void} Success
		 */
		GET_ModifyDBInstance(DBInstanceIdentifier: string, DBInstanceClass: string | null | undefined, ApplyImmediately: boolean | null | undefined, PreferredMaintenanceWindow: string | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, NewDBInstanceIdentifier: string | null | undefined, CACertificateIdentifier: string | null | undefined, CopyTagsToSnapshot: boolean | null | undefined, PromotionTier: number | null | undefined, EnablePerformanceInsights: boolean | null | undefined, PerformanceInsightsKMSKeyId: string | null | undefined, Action: GET_ModifyDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&ApplyImmediately=' + ApplyImmediately + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&NewDBInstanceIdentifier=' + (NewDBInstanceIdentifier == null ? '' : encodeURIComponent(NewDBInstanceIdentifier)) + '&CACertificateIdentifier=' + (CACertificateIdentifier == null ? '' : encodeURIComponent(CACertificateIdentifier)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&PromotionTier=' + PromotionTier + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
		 * Get #Action=ModifyDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the subnet group.
		 * @param {Array<string>} SubnetIds The Amazon EC2 subnet IDs for the subnet group.
		 * @return {void} Success
		 */
		GET_ModifyDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string | null | undefined, SubnetIds: Array<string>, Action: GET_ModifyDBSubnetGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing Amazon DocumentDB event notification subscription.
		 * Get #Action=ModifyEventSubscription
		 * @param {string} SubscriptionName The name of the Amazon DocumentDB event notification subscription.
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>
		 * @param {Array<string>} EventCategories  A list of event categories for a <code>SourceType</code> that you want to subscribe to.
		 * @param {boolean} Enabled  A Boolean value; set to <code>true</code> to activate the subscription. 
		 * @return {void} Success
		 */
		GET_ModifyEventSubscription(SubscriptionName: string, SnsTopicArn: string | null | undefined, SourceType: string | null | undefined, EventCategories: Array<string> | null | undefined, Enabled: boolean | null | undefined, Action: GET_ModifyEventSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
		 * Get #Action=ModifyGlobalCluster
		 * @param {string} GlobalClusterIdentifier <p>The identifier for the global cluster being modified. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing global cluster.</p> </li> </ul>
		 * @param {string} NewGlobalClusterIdentifier <p>The new identifier for a global cluster when you modify a global cluster. This value is stored as a lowercase string.</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> <p>The first character must be a letter</p> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
		 * @param {boolean} DeletionProtection Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled. 
		 * @return {void} Success
		 */
		GET_ModifyGlobalCluster(GlobalClusterIdentifier: string, NewGlobalClusterIdentifier: string | null | undefined, DeletionProtection: boolean | null | undefined, Action: GET_ModifyGlobalClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&NewGlobalClusterIdentifier=' + (NewGlobalClusterIdentifier == null ? '' : encodeURIComponent(NewGlobalClusterIdentifier)) + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
		 * Get #Action=RebootDBInstance
		 * @param {string} DBInstanceIdentifier <p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>
		 * @param {boolean} ForceFailover <p> When <code>true</code>, the reboot is conducted through a Multi-AZ failover. </p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for Multi-AZ.</p>
		 * @return {void} Success
		 */
		GET_RebootDBInstance(DBInstanceIdentifier: string, ForceFailover: boolean | null | undefined, Action: GET_RebootDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebootDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&ForceFailover=' + ForceFailover + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
		 * Get #Action=RemoveFromGlobalCluster
		 * @param {string} GlobalClusterIdentifier The cluster identifier to detach from the Amazon DocumentDB global cluster. 
		 * @param {string} DbClusterIdentifier The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster. 
		 * @return {void} Success
		 */
		GET_RemoveFromGlobalCluster(GlobalClusterIdentifier: string, DbClusterIdentifier: string, Action: GET_RemoveFromGlobalClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveFromGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&DbClusterIdentifier=' + (DbClusterIdentifier == null ? '' : encodeURIComponent(DbClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
		 * Get #Action=RemoveSourceIdentifierFromSubscription
		 * @param {string} SubscriptionName The name of the Amazon DocumentDB event notification subscription that you want to remove a source identifier from.
		 * @param {string} SourceIdentifier  The source identifier to be removed from the subscription, such as the instance identifier for an instance, or the name of a security group. 
		 * @return {void} Success
		 */
		GET_RemoveSourceIdentifierFromSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_RemoveSourceIdentifierFromSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveSourceIdentifierFromSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes metadata tags from an Amazon DocumentDB resource.
		 * Get #Action=RemoveTagsFromResource
		 * @param {string} ResourceName The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource Name (ARN).
		 * @param {Array<string>} TagKeys The tag key (name) of the tag to be removed.
		 * @return {void} Success
		 */
		GET_RemoveTagsFromResource(ResourceName: string, TagKeys: Array<string>, Action: GET_RemoveTagsFromResourceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveTagsFromResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
		 * Get #Action=ResetDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the cluster parameter group to reset.
		 * @param {boolean} ResetAllParameters A value that is set to <code>true</code> to reset all parameters in the cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.
		 * @param {Array<string>} Parameters A list of parameter names in the cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.
		 * @return {void} Success
		 */
		GET_ResetDBClusterParameterGroup(DBClusterParameterGroupName: string, ResetAllParameters: boolean | null | undefined, Parameters: Array<string> | null | undefined, Action: GET_ResetDBClusterParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters?.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
		 * Get #Action=RestoreDBClusterFromSnapshot
		 * @param {Array<string>} AvailabilityZones Provides the list of Amazon EC2 Availability Zones that instances in the restored DB cluster can be created in.
		 * @param {string} DBClusterIdentifier <p>The name of the cluster to create from the snapshot or cluster snapshot. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} SnapshotIdentifier <p>The identifier for the snapshot or cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing snapshot.</p> </li> </ul>
		 * @param {string} Engine <p>The database engine to use for the new cluster.</p> <p>Default: The same as source.</p> <p>Constraint: Must be compatible with the engine of the source.</p>
		 * @param {string} EngineVersion The version of the database engine to use for the new cluster.
		 * @param {number} Port <p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p> <p>Default: The same port as the original cluster.</p>
		 * @param {string} DBSubnetGroupName <p>The name of the subnet group to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {Array<string>} VpcSecurityGroupIds A list of virtual private cloud (VPC) security groups that the new cluster will belong to.
		 * @param {Array<string>} Tags The tags to be assigned to the restored cluster.
		 * @param {string} KmsKeyId <p>The KMS key identifier to use when restoring an encrypted cluster from a DB snapshot or cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the snapshot or cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the snapshot or the cluster snapshot.</p> </li> <li> <p>If the snapshot or the cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>
		 * @param {Array<string>} EnableCloudwatchLogsExports A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.
		 * @param {boolean} DeletionProtection Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with this DB cluster.</p> <p> <i>Type:</i> String.       <i>Required:</i> No.</p> <p>If this argument is omitted, the default DB cluster parameter group is used. If supplied, must match the name of an existing default DB cluster parameter group. The string must consist of from 1 to 255 letters, numbers or hyphens. Its first character must be a letter, and it cannot end with a hyphen or contain two consecutive hyphens.</p>
		 * @return {void} Success
		 */
		GET_RestoreDBClusterFromSnapshot(AvailabilityZones: Array<string> | null | undefined, DBClusterIdentifier: string, SnapshotIdentifier: string, Engine: string, EngineVersion: string | null | undefined, Port: number | null | undefined, DBSubnetGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, Tags: Array<string> | null | undefined, KmsKeyId: string | null | undefined, EnableCloudwatchLogsExports: Array<string> | null | undefined, DeletionProtection: boolean | null | undefined, DBClusterParameterGroupName: string | null | undefined, Action: GET_RestoreDBClusterFromSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBClusterFromSnapshot?' + AvailabilityZones?.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&' + EnableCloudwatchLogsExports?.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group.
		 * Get #Action=RestoreDBClusterToPointInTime
		 * @param {string} DBClusterIdentifier <p>The name of the new cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {string} RestoreType <p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>
		 * @param {string} SourceDBClusterIdentifier <p>The identifier of the source cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>
		 * @param {Date} RestoreToTime <p>The date and time to restore the cluster to.</p> <p>Valid values: A time in Universal Coordinated Time (UTC) format.</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the instance.</p> </li> <li> <p>Must be specified if the <code>UseLatestRestorableTime</code> parameter is not provided.</p> </li> <li> <p>Cannot be specified if the <code>UseLatestRestorableTime</code> parameter is <code>true</code>.</p> </li> <li> <p>Cannot be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>.</p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>
		 * @param {boolean} UseLatestRestorableTime <p>A value that is set to <code>true</code> to restore the cluster to the latest restorable backup time, and <code>false</code> otherwise. </p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is provided.</p>
		 * @param {number} Port <p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The default port for the engine.</p>
		 * @param {string} DBSubnetGroupName <p>The subnet group name to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {Array<string>} VpcSecurityGroupIds A list of VPC security groups that the new cluster belongs to.
		 * @param {Array<string>} Tags The tags to be assigned to the restored cluster.
		 * @param {string} KmsKeyId <p>The KMS key identifier to use when restoring an encrypted cluster from an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new cluster and encrypt the new cluster with an KMS key that is different from the KMS key used to encrypt the source cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the cluster is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the source cluster.</p> </li> <li> <p>If the cluster is not encrypted, then the restored cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a cluster that is not encrypted, then the restore request is rejected.</p>
		 * @param {Array<string>} EnableCloudwatchLogsExports A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.
		 * @param {boolean} DeletionProtection Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.
		 * @return {void} Success
		 */
		GET_RestoreDBClusterToPointInTime(DBClusterIdentifier: string, RestoreType: string | null | undefined, SourceDBClusterIdentifier: string, RestoreToTime: Date | null | undefined, UseLatestRestorableTime: boolean | null | undefined, Port: number | null | undefined, DBSubnetGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, Tags: Array<string> | null | undefined, KmsKeyId: string | null | undefined, EnableCloudwatchLogsExports: Array<string> | null | undefined, DeletionProtection: boolean | null | undefined, Action: GET_RestoreDBClusterToPointInTimeAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBClusterToPointInTime?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RestoreType=' + (RestoreType == null ? '' : encodeURIComponent(RestoreType)) + '&SourceDBClusterIdentifier=' + (SourceDBClusterIdentifier == null ? '' : encodeURIComponent(SourceDBClusterIdentifier)) + '&RestoreToTime=' + RestoreToTime?.toISOString() + '&UseLatestRestorableTime=' + UseLatestRestorableTime + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&' + EnableCloudwatchLogsExports?.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
		 * Get #Action=StartDBCluster
		 * @param {string} DBClusterIdentifier The identifier of the cluster to restart. Example: <code>docdb-2019-05-28-15-24-52</code> 
		 * @return {void} Success
		 */
		GET_StartDBCluster(DBClusterIdentifier: string, Action: GET_StartDBClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StartDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
		 * Get #Action=StopDBCluster
		 * @param {string} DBClusterIdentifier The identifier of the cluster to stop. Example: <code>docdb-2019-05-28-15-24-52</code> 
		 * @return {void} Success
		 */
		GET_StopDBCluster(DBClusterIdentifier: string, Action: GET_StopDBClusterAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StopDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddSourceIdentifierToSubscriptionAction { AddSourceIdentifierToSubscription = 0 }

	export enum GET_AddSourceIdentifierToSubscriptionVersion { '2014-10-31' = 0 }

	export enum GET_AddTagsToResourceAction { AddTagsToResource = 0 }

	export enum GET_ApplyPendingMaintenanceActionAction { ApplyPendingMaintenanceAction = 0 }

	export enum GET_CopyDBClusterParameterGroupAction { CopyDBClusterParameterGroup = 0 }

	export enum GET_CopyDBClusterSnapshotAction { CopyDBClusterSnapshot = 0 }

	export enum GET_CreateDBClusterAction { CreateDBCluster = 0 }

	export enum GET_CreateDBClusterParameterGroupAction { CreateDBClusterParameterGroup = 0 }

	export enum GET_CreateDBClusterSnapshotAction { CreateDBClusterSnapshot = 0 }

	export enum GET_CreateDBInstanceAction { CreateDBInstance = 0 }

	export enum GET_CreateDBSubnetGroupAction { CreateDBSubnetGroup = 0 }

	export enum GET_CreateEventSubscriptionAction { CreateEventSubscription = 0 }

	export enum GET_CreateGlobalClusterAction { CreateGlobalCluster = 0 }

	export enum GET_DeleteDBClusterAction { DeleteDBCluster = 0 }

	export enum GET_DeleteDBClusterParameterGroupAction { DeleteDBClusterParameterGroup = 0 }

	export enum GET_DeleteDBClusterSnapshotAction { DeleteDBClusterSnapshot = 0 }

	export enum GET_DeleteDBInstanceAction { DeleteDBInstance = 0 }

	export enum GET_DeleteDBSubnetGroupAction { DeleteDBSubnetGroup = 0 }

	export enum GET_DeleteEventSubscriptionAction { DeleteEventSubscription = 0 }

	export enum GET_DeleteGlobalClusterAction { DeleteGlobalCluster = 0 }

	export enum GET_DescribeCertificatesAction { DescribeCertificates = 0 }

	export enum GET_DescribeDBClusterParameterGroupsAction { DescribeDBClusterParameterGroups = 0 }

	export enum GET_DescribeDBClusterParametersAction { DescribeDBClusterParameters = 0 }

	export enum GET_DescribeDBClusterSnapshotAttributesAction { DescribeDBClusterSnapshotAttributes = 0 }

	export enum GET_DescribeDBClusterSnapshotsAction { DescribeDBClusterSnapshots = 0 }

	export enum GET_DescribeDBClustersAction { DescribeDBClusters = 0 }

	export enum GET_DescribeDBEngineVersionsAction { DescribeDBEngineVersions = 0 }

	export enum GET_DescribeDBInstancesAction { DescribeDBInstances = 0 }

	export enum GET_DescribeDBSubnetGroupsAction { DescribeDBSubnetGroups = 0 }

	export enum GET_DescribeEngineDefaultClusterParametersAction { DescribeEngineDefaultClusterParameters = 0 }

	export enum GET_DescribeEventCategoriesAction { DescribeEventCategories = 0 }

	export enum GET_DescribeEventSubscriptionsAction { DescribeEventSubscriptions = 0 }

	export enum GET_DescribeEventsAction { DescribeEvents = 0 }

	export enum GET_DescribeGlobalClustersAction { DescribeGlobalClusters = 0 }

	export enum GET_DescribeOrderableDBInstanceOptionsAction { DescribeOrderableDBInstanceOptions = 0 }

	export enum GET_DescribePendingMaintenanceActionsAction { DescribePendingMaintenanceActions = 0 }

	export enum GET_FailoverDBClusterAction { FailoverDBCluster = 0 }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 0 }

	export interface GET_ModifyDBClusterCloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<string>;
		DisableLogTypes?: Array<string>;
	}
	export interface GET_ModifyDBClusterCloudwatchLogsExportConfigurationFormProperties {
	}
	export function CreateGET_ModifyDBClusterCloudwatchLogsExportConfigurationFormGroup() {
		return new FormGroup<GET_ModifyDBClusterCloudwatchLogsExportConfigurationFormProperties>({
		});

	}

	export enum GET_ModifyDBClusterAction { ModifyDBCluster = 0 }

	export enum GET_ModifyDBClusterParameterGroupAction { ModifyDBClusterParameterGroup = 0 }

	export enum GET_ModifyDBClusterSnapshotAttributeAction { ModifyDBClusterSnapshotAttribute = 0 }

	export enum GET_ModifyDBInstanceAction { ModifyDBInstance = 0 }

	export enum GET_ModifyDBSubnetGroupAction { ModifyDBSubnetGroup = 0 }

	export enum GET_ModifyEventSubscriptionAction { ModifyEventSubscription = 0 }

	export enum GET_ModifyGlobalClusterAction { ModifyGlobalCluster = 0 }

	export enum GET_RebootDBInstanceAction { RebootDBInstance = 0 }

	export enum GET_RemoveFromGlobalClusterAction { RemoveFromGlobalCluster = 0 }

	export enum GET_RemoveSourceIdentifierFromSubscriptionAction { RemoveSourceIdentifierFromSubscription = 0 }

	export enum GET_RemoveTagsFromResourceAction { RemoveTagsFromResource = 0 }

	export enum GET_ResetDBClusterParameterGroupAction { ResetDBClusterParameterGroup = 0 }

	export enum GET_RestoreDBClusterFromSnapshotAction { RestoreDBClusterFromSnapshot = 0 }

	export enum GET_RestoreDBClusterToPointInTimeAction { RestoreDBClusterToPointInTime = 0 }

	export enum GET_StartDBClusterAction { StartDBCluster = 0 }

	export enum GET_StopDBClusterAction { StopDBCluster = 0 }

}

