import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DBClusterNotFoundFault {
	}
	export interface DBClusterNotFoundFaultFormProperties {
	}
	export function CreateDBClusterNotFoundFaultFormGroup() {
		return new FormGroup<DBClusterNotFoundFaultFormProperties>({
		});

	}

	export interface DBClusterRoleAlreadyExistsFault {
	}
	export interface DBClusterRoleAlreadyExistsFaultFormProperties {
	}
	export function CreateDBClusterRoleAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBClusterRoleAlreadyExistsFaultFormProperties>({
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

	export interface DBClusterRoleQuotaExceededFault {
	}
	export interface DBClusterRoleQuotaExceededFaultFormProperties {
	}
	export function CreateDBClusterRoleQuotaExceededFaultFormGroup() {
		return new FormGroup<DBClusterRoleQuotaExceededFaultFormProperties>({
		});

	}

	export interface AddSourceIdentifierToSubscriptionResult {

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}
	export interface AddSourceIdentifierToSubscriptionResultFormProperties {
	}
	export function CreateAddSourceIdentifierToSubscriptionResultFormGroup() {
		return new FormGroup<AddSourceIdentifierToSubscriptionResultFormProperties>({
		});

	}


	/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
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

	/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
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


	/** Metadata assigned to an Amazon Neptune resource consisting of a key-value pair. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Metadata assigned to an Amazon Neptune resource consisting of a key-value pair. */
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

	export interface ApplyPendingMaintenanceActionResult {

		/** Describes the pending maintenance actions for a resource. */
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
	}
	export interface ApplyPendingMaintenanceActionResultFormProperties {
	}
	export function CreateApplyPendingMaintenanceActionResultFormGroup() {
		return new FormGroup<ApplyPendingMaintenanceActionResultFormProperties>({
		});

	}


	/** Describes the pending maintenance actions for a resource. */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string;
		PendingMaintenanceActionDetails?: Array<string>;
	}

	/** Describes the pending maintenance actions for a resource. */
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

	export interface CopyDBClusterParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p> */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}
	export interface CopyDBClusterParameterGroupResultFormProperties {
	}
	export function CreateCopyDBClusterParameterGroupResultFormGroup() {
		return new FormGroup<CopyDBClusterParameterGroupResultFormProperties>({
		});

	}


	/** <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p> */
	export interface DBClusterParameterGroup {
		DBClusterParameterGroupName?: string;
		DBParameterGroupFamily?: string;
		Description?: string;
		DBClusterParameterGroupArn?: string;
	}

	/** <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p> */
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

		/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}
	export interface CopyDBClusterSnapshotResultFormProperties {
	}
	export function CreateCopyDBClusterSnapshotResultFormGroup() {
		return new FormGroup<CopyDBClusterSnapshotResultFormProperties>({
		});

	}


	/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
	export interface DBClusterSnapshot {
		AvailabilityZones?: Array<string>;
		DBClusterSnapshotIdentifier?: string;
		DBClusterIdentifier?: string;
		SnapshotCreateTime?: Date;
		Engine?: string;
		AllocatedStorage?: number | null;
		Status?: string;
		Port?: number | null;
		VpcId?: string;
		ClusterCreateTime?: Date;
		MasterUsername?: string;
		EngineVersion?: string;
		LicenseModel?: string;
		SnapshotType?: string;
		PercentProgress?: number | null;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		DBClusterSnapshotArn?: string;
		SourceDBClusterSnapshotArn?: string;
		IAMDatabaseAuthenticationEnabled?: boolean | null;
	}

	/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
	export interface DBClusterSnapshotFormProperties {
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		SnapshotCreateTime: FormControl<Date | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<Date | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		PercentProgress: FormControl<number | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DBClusterSnapshotArn: FormControl<string | null | undefined>,
		SourceDBClusterSnapshotArn: FormControl<string | null | undefined>,
		IAMDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDBClusterSnapshotFormGroup() {
		return new FormGroup<DBClusterSnapshotFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotCreateTime: new FormControl<Date | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<Date | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			PercentProgress: new FormControl<number | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DBClusterSnapshotArn: new FormControl<string | null | undefined>(undefined),
			SourceDBClusterSnapshotArn: new FormControl<string | null | undefined>(undefined),
			IAMDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
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

	export interface CopyDBParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p> */
		DBParameterGroup?: DBParameterGroup;
	}
	export interface CopyDBParameterGroupResultFormProperties {
	}
	export function CreateCopyDBParameterGroupResultFormGroup() {
		return new FormGroup<CopyDBParameterGroupResultFormProperties>({
		});

	}


	/** <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p> */
	export interface DBParameterGroup {
		DBParameterGroupName?: string;
		DBParameterGroupFamily?: string;
		Description?: string;
		DBParameterGroupArn?: string;
	}

	/** <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p> */
	export interface DBParameterGroupFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DBParameterGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupFormGroup() {
		return new FormGroup<DBParameterGroupFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}
	export interface CreateDBClusterResultFormProperties {
	}
	export function CreateCreateDBClusterResultFormGroup() {
		return new FormGroup<CreateDBClusterResultFormProperties>({
		});

	}


	/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
	export interface DBCluster {
		AllocatedStorage?: number | null;
		AvailabilityZones?: Array<string>;
		BackupRetentionPeriod?: number | null;
		CharacterSetName?: string;
		DatabaseName?: string;
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
		DBClusterOptionGroupMemberships?: Array<string>;
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
		IAMDatabaseAuthenticationEnabled?: boolean | null;
		CloneGroupId?: string;
		ClusterCreateTime?: Date;
		CopyTagsToSnapshot?: boolean | null;
		EnabledCloudwatchLogsExports?: Array<string>;
		PendingModifiedValues?: ClusterPendingModifiedValues;
		DeletionProtection?: boolean | null;
		CrossAccountClone?: boolean | null;
		AutomaticRestartTime?: Date;

		/** <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
		ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
		GlobalClusterIdentifier?: string;
	}

	/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
	export interface DBClusterFormProperties {
		AllocatedStorage: FormControl<number | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		CharacterSetName: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
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
		IAMDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
		CloneGroupId: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<Date | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		CrossAccountClone: FormControl<boolean | null | undefined>,
		AutomaticRestartTime: FormControl<Date | null | undefined>,
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterFormGroup() {
		return new FormGroup<DBClusterFormProperties>({
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
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
			IAMDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloneGroupId: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<Date | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			CrossAccountClone: new FormControl<boolean | null | undefined>(undefined),
			AutomaticRestartTime: new FormControl<Date | null | undefined>(undefined),
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window. */
	export interface ClusterPendingModifiedValues {
		PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
		DBClusterIdentifier?: string;
		IAMDatabaseAuthenticationEnabled?: boolean | null;
		EngineVersion?: string;
		BackupRetentionPeriod?: number | null;
		AllocatedStorage?: number | null;
		Iops?: number | null;
	}

	/** This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window. */
	export interface ClusterPendingModifiedValuesFormProperties {
		DBClusterIdentifier: FormControl<string | null | undefined>,
		IAMDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
	}
	export function CreateClusterPendingModifiedValuesFormGroup() {
		return new FormGroup<ClusterPendingModifiedValuesFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			IAMDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated. */
	export interface PendingCloudwatchLogsExports {
		LogTypesToEnable?: Array<string>;
		LogTypesToDisable?: Array<string>;
	}

	/** A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated. */
	export interface PendingCloudwatchLogsExportsFormProperties {
	}
	export function CreatePendingCloudwatchLogsExportsFormGroup() {
		return new FormGroup<PendingCloudwatchLogsExportsFormProperties>({
		});

	}


	/** <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
	export interface ServerlessV2ScalingConfigurationInfo {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}

	/** <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
	export interface ServerlessV2ScalingConfigurationInfoFormProperties {
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateServerlessV2ScalingConfigurationInfoFormGroup() {
		return new FormGroup<ServerlessV2ScalingConfigurationInfoFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
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

	export interface InvalidDBInstanceStateFault {
	}
	export interface InvalidDBInstanceStateFaultFormProperties {
	}
	export function CreateInvalidDBInstanceStateFaultFormGroup() {
		return new FormGroup<InvalidDBInstanceStateFaultFormProperties>({
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


	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface CreateDBClusterEndpointOutput {
		DBClusterEndpointIdentifier?: string;
		DBClusterIdentifier?: string;
		DBClusterEndpointResourceIdentifier?: string;
		Endpoint?: string;
		Status?: string;
		EndpointType?: string;
		CustomEndpointType?: string;
		StaticMembers?: Array<string>;
		ExcludedMembers?: Array<string>;
		DBClusterEndpointArn?: string;
	}

	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface CreateDBClusterEndpointOutputFormProperties {
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterEndpointResourceIdentifier: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		EndpointType: FormControl<string | null | undefined>,
		CustomEndpointType: FormControl<string | null | undefined>,
		DBClusterEndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBClusterEndpointOutputFormGroup() {
		return new FormGroup<CreateDBClusterEndpointOutputFormProperties>({
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<string | null | undefined>(undefined),
			CustomEndpointType: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBClusterEndpointQuotaExceededFault {
	}
	export interface DBClusterEndpointQuotaExceededFaultFormProperties {
	}
	export function CreateDBClusterEndpointQuotaExceededFaultFormGroup() {
		return new FormGroup<DBClusterEndpointQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBClusterEndpointAlreadyExistsFault {
	}
	export interface DBClusterEndpointAlreadyExistsFaultFormProperties {
	}
	export function CreateDBClusterEndpointAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBClusterEndpointAlreadyExistsFaultFormProperties>({
		});

	}

	export interface CreateDBClusterParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p> */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}
	export interface CreateDBClusterParameterGroupResultFormProperties {
	}
	export function CreateCreateDBClusterParameterGroupResultFormGroup() {
		return new FormGroup<CreateDBClusterParameterGroupResultFormProperties>({
		});

	}

	export interface CreateDBClusterSnapshotResult {

		/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}
	export interface CreateDBClusterSnapshotResultFormProperties {
	}
	export function CreateCreateDBClusterSnapshotResultFormGroup() {
		return new FormGroup<CreateDBClusterSnapshotResultFormProperties>({
		});

	}

	export interface CreateDBInstanceResult {

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
		DBInstance?: DBInstance;
	}
	export interface CreateDBInstanceResultFormProperties {
	}
	export function CreateCreateDBInstanceResultFormGroup() {
		return new FormGroup<CreateDBInstanceResultFormProperties>({
		});

	}


	/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
	export interface DBInstance {
		DBInstanceIdentifier?: string;
		DBInstanceClass?: string;
		Engine?: string;
		DBInstanceStatus?: string;
		MasterUsername?: string;
		DBName?: string;
		Endpoint?: Endpoint;
		AllocatedStorage?: number | null;
		InstanceCreateTime?: Date;
		PreferredBackupWindow?: string;
		BackupRetentionPeriod?: number | null;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroups?: Array<string>;
		DBParameterGroups?: Array<string>;
		AvailabilityZone?: string;
		DBSubnetGroup?: DBSubnetGroup;
		PreferredMaintenanceWindow?: string;
		PendingModifiedValues?: PendingModifiedValues;
		LatestRestorableTime?: Date;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		ReadReplicaSourceDBInstanceIdentifier?: string;
		ReadReplicaDBInstanceIdentifiers?: Array<string>;
		ReadReplicaDBClusterIdentifiers?: Array<string>;
		LicenseModel?: string;
		Iops?: number | null;
		OptionGroupMemberships?: Array<string>;
		CharacterSetName?: string;
		SecondaryAvailabilityZone?: string;
		PubliclyAccessible?: boolean | null;
		StatusInfos?: Array<string>;
		StorageType?: string;
		TdeCredentialArn?: string;
		DbInstancePort?: number | null;
		DBClusterIdentifier?: string;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		DbiResourceId?: string;
		CACertificateIdentifier?: string;
		DomainMemberships?: Array<string>;
		CopyTagsToSnapshot?: boolean | null;
		MonitoringInterval?: number | null;
		EnhancedMonitoringResourceArn?: string;
		MonitoringRoleArn?: string;
		PromotionTier?: number | null;
		DBInstanceArn?: string;
		Timezone?: string;
		IAMDatabaseAuthenticationEnabled?: boolean | null;
		PerformanceInsightsEnabled?: boolean | null;
		PerformanceInsightsKMSKeyId?: string;
		EnabledCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean | null;
	}

	/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
	export interface DBInstanceFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		DBInstanceStatus: FormControl<string | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		InstanceCreateTime: FormControl<Date | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		LatestRestorableTime: FormControl<Date | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		ReadReplicaSourceDBInstanceIdentifier: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		CharacterSetName: FormControl<string | null | undefined>,
		SecondaryAvailabilityZone: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		TdeCredentialArn: FormControl<string | null | undefined>,
		DbInstancePort: FormControl<number | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		DbiResourceId: FormControl<string | null | undefined>,
		CACertificateIdentifier: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		MonitoringInterval: FormControl<number | null | undefined>,
		EnhancedMonitoringResourceArn: FormControl<string | null | undefined>,
		MonitoringRoleArn: FormControl<string | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		DBInstanceArn: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		IAMDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
		PerformanceInsightsEnabled: FormControl<boolean | null | undefined>,
		PerformanceInsightsKMSKeyId: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateDBInstanceFormGroup() {
		return new FormGroup<DBInstanceFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			DBInstanceStatus: new FormControl<string | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<Date | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			LatestRestorableTime: new FormControl<Date | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			ReadReplicaSourceDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			SecondaryAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			TdeCredentialArn: new FormControl<string | null | undefined>(undefined),
			DbInstancePort: new FormControl<number | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			DbiResourceId: new FormControl<string | null | undefined>(undefined),
			CACertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			MonitoringInterval: new FormControl<number | null | undefined>(undefined),
			EnhancedMonitoringResourceArn: new FormControl<string | null | undefined>(undefined),
			MonitoringRoleArn: new FormControl<string | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			DBInstanceArn: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			IAMDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
			PerformanceInsightsEnabled: new FormControl<boolean | null | undefined>(undefined),
			PerformanceInsightsKMSKeyId: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p> */
	export interface Endpoint {
		Address?: string;
		Port?: number | null;
		HostedZoneId?: string;
	}

	/** <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p> */
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


	/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
	export interface DBSubnetGroup {
		DBSubnetGroupName?: string;
		DBSubnetGroupDescription?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<string>;
		DBSubnetGroupArn?: string;
	}

	/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
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


	/**  This data type is used as a response element in the <a>ModifyDBInstance</a> action. */
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

	/**  This data type is used as a response element in the <a>ModifyDBInstance</a> action. */
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

	export interface ProvisionedIopsNotAvailableInAZFault {
	}
	export interface ProvisionedIopsNotAvailableInAZFaultFormProperties {
	}
	export function CreateProvisionedIopsNotAvailableInAZFaultFormGroup() {
		return new FormGroup<ProvisionedIopsNotAvailableInAZFaultFormProperties>({
		});

	}

	export interface OptionGroupNotFoundFault {
	}
	export interface OptionGroupNotFoundFaultFormProperties {
	}
	export function CreateOptionGroupNotFoundFaultFormGroup() {
		return new FormGroup<OptionGroupNotFoundFaultFormProperties>({
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

	export interface DomainNotFoundFault {
	}
	export interface DomainNotFoundFaultFormProperties {
	}
	export function CreateDomainNotFoundFaultFormGroup() {
		return new FormGroup<DomainNotFoundFaultFormProperties>({
		});

	}

	export interface CreateDBParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p> */
		DBParameterGroup?: DBParameterGroup;
	}
	export interface CreateDBParameterGroupResultFormProperties {
	}
	export function CreateCreateDBParameterGroupResultFormGroup() {
		return new FormGroup<CreateDBParameterGroupResultFormProperties>({
		});

	}

	export interface CreateDBSubnetGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
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

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
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

		/** <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p> */
		GlobalCluster?: GlobalCluster;
	}
	export interface CreateGlobalClusterResultFormProperties {
	}
	export function CreateCreateGlobalClusterResultFormGroup() {
		return new FormGroup<CreateGlobalClusterResultFormProperties>({
		});

	}


	/** <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p> */
	export interface GlobalCluster {
		GlobalClusterIdentifier?: string;
		GlobalClusterResourceId?: string;
		GlobalClusterArn?: string;
		Status?: string;
		Engine?: string;
		EngineVersion?: string;
		StorageEncrypted?: boolean | null;
		DeletionProtection?: boolean | null;
		GlobalClusterMembers?: Array<string>;
	}

	/** <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p> */
	export interface GlobalClusterFormProperties {
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
		GlobalClusterResourceId: FormControl<string | null | undefined>,
		GlobalClusterArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
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

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}
	export interface DeleteDBClusterResultFormProperties {
	}
	export function CreateDeleteDBClusterResultFormGroup() {
		return new FormGroup<DeleteDBClusterResultFormProperties>({
		});

	}


	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface DeleteDBClusterEndpointOutput {
		DBClusterEndpointIdentifier?: string;
		DBClusterIdentifier?: string;
		DBClusterEndpointResourceIdentifier?: string;
		Endpoint?: string;
		Status?: string;
		EndpointType?: string;
		CustomEndpointType?: string;
		StaticMembers?: Array<string>;
		ExcludedMembers?: Array<string>;
		DBClusterEndpointArn?: string;
	}

	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface DeleteDBClusterEndpointOutputFormProperties {
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterEndpointResourceIdentifier: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		EndpointType: FormControl<string | null | undefined>,
		CustomEndpointType: FormControl<string | null | undefined>,
		DBClusterEndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBClusterEndpointOutputFormGroup() {
		return new FormGroup<DeleteDBClusterEndpointOutputFormProperties>({
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<string | null | undefined>(undefined),
			CustomEndpointType: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidDBClusterEndpointStateFault {
	}
	export interface InvalidDBClusterEndpointStateFaultFormProperties {
	}
	export function CreateInvalidDBClusterEndpointStateFaultFormGroup() {
		return new FormGroup<InvalidDBClusterEndpointStateFaultFormProperties>({
		});

	}

	export interface DBClusterEndpointNotFoundFault {
	}
	export interface DBClusterEndpointNotFoundFaultFormProperties {
	}
	export function CreateDBClusterEndpointNotFoundFaultFormGroup() {
		return new FormGroup<DBClusterEndpointNotFoundFaultFormProperties>({
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

		/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}
	export interface DeleteDBClusterSnapshotResultFormProperties {
	}
	export function CreateDeleteDBClusterSnapshotResultFormGroup() {
		return new FormGroup<DeleteDBClusterSnapshotResultFormProperties>({
		});

	}

	export interface DeleteDBInstanceResult {

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
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

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
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

		/** <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p> */
		GlobalCluster?: GlobalCluster;
	}
	export interface DeleteGlobalClusterResultFormProperties {
	}
	export function CreateDeleteGlobalClusterResultFormGroup() {
		return new FormGroup<DeleteGlobalClusterResultFormProperties>({
		});

	}

	export interface DBClusterEndpointMessage {
		Marker?: string;
		DBClusterEndpoints?: Array<string>;
	}
	export interface DBClusterEndpointMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterEndpointMessageFormGroup() {
		return new FormGroup<DBClusterEndpointMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is not currently supported. */
	export interface Filter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** This type is not currently supported. */
	export interface FilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DBClusterParameterGroupsMessage {
		Marker?: string;
		DBClusterParameterGroups?: Array<string>;
	}
	export interface DBClusterParameterGroupsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterParameterGroupsMessageFormGroup() {
		return new FormGroup<DBClusterParameterGroupsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBClusterParameterGroupDetails {
		Parameters?: Array<string>;
		Marker?: string;
	}
	export interface DBClusterParameterGroupDetailsFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterParameterGroupDetailsFormGroup() {
		return new FormGroup<DBClusterParameterGroupDetailsFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBClusterSnapshotAttributesResult {

		/** <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
		DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
	}
	export interface DescribeDBClusterSnapshotAttributesResultFormProperties {
	}
	export function CreateDescribeDBClusterSnapshotAttributesResultFormGroup() {
		return new FormGroup<DescribeDBClusterSnapshotAttributesResultFormProperties>({
		});

	}


	/** <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
	export interface DBClusterSnapshotAttributesResult {
		DBClusterSnapshotIdentifier?: string;
		DBClusterSnapshotAttributes?: Array<string>;
	}

	/** <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
	export interface DBClusterSnapshotAttributesResultFormProperties {
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterSnapshotAttributesResultFormGroup() {
		return new FormGroup<DBClusterSnapshotAttributesResultFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBClusterSnapshotMessage {
		Marker?: string;
		DBClusterSnapshots?: Array<string>;
	}
	export interface DBClusterSnapshotMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterSnapshotMessageFormGroup() {
		return new FormGroup<DBClusterSnapshotMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBClusterMessage {
		Marker?: string;
		DBClusters?: Array<string>;
	}
	export interface DBClusterMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterMessageFormGroup() {
		return new FormGroup<DBClusterMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBEngineVersionMessage {
		Marker?: string;
		DBEngineVersions?: Array<string>;
	}
	export interface DBEngineVersionMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBEngineVersionMessageFormGroup() {
		return new FormGroup<DBEngineVersionMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBInstanceMessage {
		Marker?: string;
		DBInstances?: Array<string>;
	}
	export interface DBInstanceMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBInstanceMessageFormGroup() {
		return new FormGroup<DBInstanceMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBParameterGroupsMessage {
		Marker?: string;
		DBParameterGroups?: Array<string>;
	}
	export interface DBParameterGroupsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupsMessageFormGroup() {
		return new FormGroup<DBParameterGroupsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBParameterGroupDetails {
		Parameters?: Array<string>;
		Marker?: string;
	}
	export interface DBParameterGroupDetailsFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupDetailsFormGroup() {
		return new FormGroup<DBParameterGroupDetailsFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBSubnetGroupMessage {
		Marker?: string;
		DBSubnetGroups?: Array<string>;
	}
	export interface DBSubnetGroupMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBSubnetGroupMessageFormGroup() {
		return new FormGroup<DBSubnetGroupMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEngineDefaultClusterParametersResult {

		/** Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. */
		EngineDefaults?: EngineDefaults;
	}
	export interface DescribeEngineDefaultClusterParametersResultFormProperties {
	}
	export function CreateDescribeEngineDefaultClusterParametersResultFormGroup() {
		return new FormGroup<DescribeEngineDefaultClusterParametersResultFormProperties>({
		});

	}


	/**  Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. */
	export interface EngineDefaults {
		DBParameterGroupFamily?: string;
		Marker?: string;
		Parameters?: Array<string>;
	}

	/**  Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. */
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

	export interface DescribeEngineDefaultParametersResult {

		/** Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. */
		EngineDefaults?: EngineDefaults;
	}
	export interface DescribeEngineDefaultParametersResultFormProperties {
	}
	export function CreateDescribeEngineDefaultParametersResultFormGroup() {
		return new FormGroup<DescribeEngineDefaultParametersResultFormProperties>({
		});

	}

	export interface EventCategoriesMessage {
		EventCategoriesMapList?: Array<string>;
	}
	export interface EventCategoriesMessageFormProperties {
	}
	export function CreateEventCategoriesMessageFormGroup() {
		return new FormGroup<EventCategoriesMessageFormProperties>({
		});

	}

	export interface EventSubscriptionsMessage {
		Marker?: string;
		EventSubscriptionsList?: Array<string>;
	}
	export interface EventSubscriptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsMessageFormGroup() {
		return new FormGroup<EventSubscriptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventsMessage {
		Marker?: string;
		Events?: Array<string>;
	}
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

	export interface OrderableDBInstanceOptionsMessage {
		OrderableDBInstanceOptions?: Array<string>;
		Marker?: string;
	}
	export interface OrderableDBInstanceOptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateOrderableDBInstanceOptionsMessageFormGroup() {
		return new FormGroup<OrderableDBInstanceOptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PendingMaintenanceActionsMessage {
		PendingMaintenanceActions?: Array<string>;
		Marker?: string;
	}
	export interface PendingMaintenanceActionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreatePendingMaintenanceActionsMessageFormGroup() {
		return new FormGroup<PendingMaintenanceActionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeValidDBInstanceModificationsResult {

		/** Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. */
		ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
	}
	export interface DescribeValidDBInstanceModificationsResultFormProperties {
	}
	export function CreateDescribeValidDBInstanceModificationsResultFormGroup() {
		return new FormGroup<DescribeValidDBInstanceModificationsResultFormProperties>({
		});

	}


	/** Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>.  */
	export interface ValidDBInstanceModificationsMessage {
		Storage?: Array<string>;
	}

	/** Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>.  */
	export interface ValidDBInstanceModificationsMessageFormProperties {
	}
	export function CreateValidDBInstanceModificationsMessageFormGroup() {
		return new FormGroup<ValidDBInstanceModificationsMessageFormProperties>({
		});

	}

	export interface FailoverDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}
	export interface FailoverDBClusterResultFormProperties {
	}
	export function CreateFailoverDBClusterResultFormGroup() {
		return new FormGroup<FailoverDBClusterResultFormProperties>({
		});

	}

	export interface FailoverGlobalClusterResult {

		/** <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p> */
		GlobalCluster?: GlobalCluster;
	}
	export interface FailoverGlobalClusterResultFormProperties {
	}
	export function CreateFailoverGlobalClusterResultFormGroup() {
		return new FormGroup<FailoverGlobalClusterResultFormProperties>({
		});

	}

	export interface TagListMessage {
		TagList?: Array<string>;
	}
	export interface TagListMessageFormProperties {
	}
	export function CreateTagListMessageFormGroup() {
		return new FormGroup<TagListMessageFormProperties>({
		});

	}

	export interface ModifyDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
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


	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface ModifyDBClusterEndpointOutput {
		DBClusterEndpointIdentifier?: string;
		DBClusterIdentifier?: string;
		DBClusterEndpointResourceIdentifier?: string;
		Endpoint?: string;
		Status?: string;
		EndpointType?: string;
		CustomEndpointType?: string;
		StaticMembers?: Array<string>;
		ExcludedMembers?: Array<string>;
		DBClusterEndpointArn?: string;
	}

	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface ModifyDBClusterEndpointOutputFormProperties {
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterEndpointResourceIdentifier: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		EndpointType: FormControl<string | null | undefined>,
		CustomEndpointType: FormControl<string | null | undefined>,
		DBClusterEndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBClusterEndpointOutputFormGroup() {
		return new FormGroup<ModifyDBClusterEndpointOutputFormProperties>({
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<string | null | undefined>(undefined),
			CustomEndpointType: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBClusterParameterGroupNameMessage {
		DBClusterParameterGroupName?: string;
	}
	export interface DBClusterParameterGroupNameMessageFormProperties {
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterParameterGroupNameMessageFormGroup() {
		return new FormGroup<DBClusterParameterGroupNameMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a parameter. */
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

	/** Specifies a parameter. */
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

	export enum ApplyMethod { immediate = 'immediate', 'pending-reboot' = 'pending-reboot' }

	export interface ModifyDBClusterSnapshotAttributeResult {

		/** <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
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

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
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

	export interface CertificateNotFoundFault {
	}
	export interface CertificateNotFoundFaultFormProperties {
	}
	export function CreateCertificateNotFoundFaultFormGroup() {
		return new FormGroup<CertificateNotFoundFaultFormProperties>({
		});

	}

	export interface DBParameterGroupNameMessage {
		DBParameterGroupName?: string;
	}
	export interface DBParameterGroupNameMessageFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupNameMessageFormGroup() {
		return new FormGroup<DBParameterGroupNameMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyDBSubnetGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
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

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}
	export interface ModifyEventSubscriptionResultFormProperties {
	}
	export function CreateModifyEventSubscriptionResultFormGroup() {
		return new FormGroup<ModifyEventSubscriptionResultFormProperties>({
		});

	}

	export interface ModifyGlobalClusterResult {

		/** <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p> */
		GlobalCluster?: GlobalCluster;
	}
	export interface ModifyGlobalClusterResultFormProperties {
	}
	export function CreateModifyGlobalClusterResultFormGroup() {
		return new FormGroup<ModifyGlobalClusterResultFormProperties>({
		});

	}

	export interface PromoteReadReplicaDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}
	export interface PromoteReadReplicaDBClusterResultFormProperties {
	}
	export function CreatePromoteReadReplicaDBClusterResultFormGroup() {
		return new FormGroup<PromoteReadReplicaDBClusterResultFormProperties>({
		});

	}

	export interface RebootDBInstanceResult {

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
		DBInstance?: DBInstance;
	}
	export interface RebootDBInstanceResultFormProperties {
	}
	export function CreateRebootDBInstanceResultFormGroup() {
		return new FormGroup<RebootDBInstanceResultFormProperties>({
		});

	}

	export interface RemoveFromGlobalClusterResult {

		/** <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p> */
		GlobalCluster?: GlobalCluster;
	}
	export interface RemoveFromGlobalClusterResultFormProperties {
	}
	export function CreateRemoveFromGlobalClusterResultFormGroup() {
		return new FormGroup<RemoveFromGlobalClusterResultFormProperties>({
		});

	}

	export interface DBClusterRoleNotFoundFault {
	}
	export interface DBClusterRoleNotFoundFaultFormProperties {
	}
	export function CreateDBClusterRoleNotFoundFaultFormGroup() {
		return new FormGroup<DBClusterRoleNotFoundFaultFormProperties>({
		});

	}

	export interface RemoveSourceIdentifierFromSubscriptionResult {

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}
	export interface RemoveSourceIdentifierFromSubscriptionResultFormProperties {
	}
	export function CreateRemoveSourceIdentifierFromSubscriptionResultFormGroup() {
		return new FormGroup<RemoveSourceIdentifierFromSubscriptionResultFormProperties>({
		});

	}

	export interface RestoreDBClusterFromSnapshotResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
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

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}
	export interface RestoreDBClusterToPointInTimeResultFormProperties {
	}
	export function CreateRestoreDBClusterToPointInTimeResultFormGroup() {
		return new FormGroup<RestoreDBClusterToPointInTimeResultFormProperties>({
		});

	}

	export interface StartDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}
	export interface StartDBClusterResultFormProperties {
	}
	export function CreateStartDBClusterResultFormGroup() {
		return new FormGroup<StartDBClusterResultFormProperties>({
		});

	}

	export interface StopDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}
	export interface StopDBClusterResultFormProperties {
	}
	export function CreateStopDBClusterResultFormGroup() {
		return new FormGroup<StopDBClusterResultFormProperties>({
		});

	}

	export interface AddRoleToDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;

		/** Required */
		RoleArn: string;
		FeatureName?: string;
	}
	export interface AddRoleToDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		FeatureName: FormControl<string | null | undefined>,
	}
	export function CreateAddRoleToDBClusterMessageFormGroup() {
		return new FormGroup<AddRoleToDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeatureName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddSourceIdentifierToSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SourceIdentifier: string;
	}
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

	export interface AddTagsToResourceMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		Tags: Array<string>;
	}
	export interface AddTagsToResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceMessageFormGroup() {
		return new FormGroup<AddTagsToResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApplyPendingMaintenanceActionMessage {

		/** Required */
		ResourceIdentifier: string;

		/** Required */
		ApplyAction: string;

		/** Required */
		OptInType: string;
	}
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


	/** Specifies an Availability Zone. */
	export interface AvailabilityZone {
		Name?: string;
	}

	/** Specifies an Availability Zone. */
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a character set. */
	export interface CharacterSet {
		CharacterSetName?: string;
		CharacterSetDescription?: string;
	}

	/** Specifies a character set. */
	export interface CharacterSetFormProperties {
		CharacterSetName: FormControl<string | null | undefined>,
		CharacterSetDescription: FormControl<string | null | undefined>,
	}
	export function CreateCharacterSetFormGroup() {
		return new FormGroup<CharacterSetFormProperties>({
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			CharacterSetDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p> */
	export interface CloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<string>;
		DisableLogTypes?: Array<string>;
	}

	/** <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p> */
	export interface CloudwatchLogsExportConfigurationFormProperties {
	}
	export function CreateCloudwatchLogsExportConfigurationFormGroup() {
		return new FormGroup<CloudwatchLogsExportConfigurationFormProperties>({
		});

	}

	export interface CopyDBClusterParameterGroupMessage {

		/** Required */
		SourceDBClusterParameterGroupIdentifier: string;

		/** Required */
		TargetDBClusterParameterGroupIdentifier: string;

		/** Required */
		TargetDBClusterParameterGroupDescription: string;
		Tags?: Array<string>;
	}
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

	export interface CopyDBParameterGroupMessage {

		/** Required */
		SourceDBParameterGroupIdentifier: string;

		/** Required */
		TargetDBParameterGroupIdentifier: string;

		/** Required */
		TargetDBParameterGroupDescription: string;
		Tags?: Array<string>;
	}
	export interface CopyDBParameterGroupMessageFormProperties {

		/** Required */
		SourceDBParameterGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDBParameterGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDBParameterGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCopyDBParameterGroupMessageFormGroup() {
		return new FormGroup<CopyDBParameterGroupMessageFormProperties>({
			SourceDBParameterGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDBParameterGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDBParameterGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDBClusterEndpointMessage {

		/** Required */
		DBClusterIdentifier: string;

		/** Required */
		DBClusterEndpointIdentifier: string;

		/** Required */
		EndpointType: string;
		StaticMembers?: Array<string>;
		ExcludedMembers?: Array<string>;
		Tags?: Array<string>;
	}
	export interface CreateDBClusterEndpointMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,

		/** Required */
		EndpointType: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBClusterEndpointMessageFormGroup() {
		return new FormGroup<CreateDBClusterEndpointMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
	export interface ServerlessV2ScalingConfiguration {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}

	/** <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
	export interface ServerlessV2ScalingConfigurationFormProperties {
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateServerlessV2ScalingConfigurationFormGroup() {
		return new FormGroup<ServerlessV2ScalingConfigurationFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDBClusterMessage {
		AvailabilityZones?: Array<string>;
		BackupRetentionPeriod?: number | null;
		CharacterSetName?: string;
		CopyTagsToSnapshot?: boolean | null;
		DatabaseName?: string;

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
		OptionGroupName?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		ReplicationSourceIdentifier?: string;
		Tags?: Array<string>;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		EnableIAMDatabaseAuthentication?: boolean | null;
		EnableCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean | null;

		/** <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
		ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
		GlobalClusterIdentifier?: string;
	}
	export interface CreateDBClusterMessageFormProperties {
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		CharacterSetName: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,

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
		OptionGroupName: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		ReplicationSourceIdentifier: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PreSignedUrl: FormControl<string | null | undefined>,
		EnableIAMDatabaseAuthentication: FormControl<boolean | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBClusterMessageFormGroup() {
		return new FormGroup<CreateDBClusterMessageFormProperties>({
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			ReplicationSourceIdentifier: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PreSignedUrl: new FormControl<string | null | undefined>(undefined),
			EnableIAMDatabaseAuthentication: new FormControl<boolean | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;

		/** Required */
		DBParameterGroupFamily: string;

		/** Required */
		Description: string;
		Tags?: Array<string>;
	}
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

	export interface CreateDBClusterSnapshotMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;

		/** Required */
		DBClusterIdentifier: string;
		Tags?: Array<string>;
	}
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

	export interface CreateDBInstanceMessage {
		DBName?: string;

		/** Required */
		DBInstanceIdentifier: string;
		AllocatedStorage?: number | null;

		/** Required */
		DBInstanceClass: string;

		/** Required */
		Engine: string;
		MasterUsername?: string;
		MasterUserPassword?: string;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		AvailabilityZone?: string;
		DBSubnetGroupName?: string;
		PreferredMaintenanceWindow?: string;
		DBParameterGroupName?: string;
		BackupRetentionPeriod?: number | null;
		PreferredBackupWindow?: string;
		Port?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean | null;
		LicenseModel?: string;
		Iops?: number | null;
		OptionGroupName?: string;
		CharacterSetName?: string;
		PubliclyAccessible?: boolean | null;
		Tags?: Array<string>;

		/** Required */
		DBClusterIdentifier: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		StorageEncrypted?: boolean | null;
		KmsKeyId?: string;
		Domain?: string;
		CopyTagsToSnapshot?: boolean | null;
		MonitoringInterval?: number | null;
		MonitoringRoleArn?: string;
		DomainIAMRoleName?: string;
		PromotionTier?: number | null;
		Timezone?: string;
		EnableIAMDatabaseAuthentication?: boolean | null;
		EnablePerformanceInsights?: boolean | null;
		PerformanceInsightsKMSKeyId?: string;
		EnableCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean | null;
	}
	export interface CreateDBInstanceMessageFormProperties {
		DBName: FormControl<string | null | undefined>,

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,

		/** Required */
		DBInstanceClass: FormControl<string | null | undefined>,

		/** Required */
		Engine: FormControl<string | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		DBParameterGroupName: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		CharacterSetName: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		TdeCredentialArn: FormControl<string | null | undefined>,
		TdeCredentialPassword: FormControl<string | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		MonitoringInterval: FormControl<number | null | undefined>,
		MonitoringRoleArn: FormControl<string | null | undefined>,
		DomainIAMRoleName: FormControl<string | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		EnableIAMDatabaseAuthentication: FormControl<boolean | null | undefined>,
		EnablePerformanceInsights: FormControl<boolean | null | undefined>,
		PerformanceInsightsKMSKeyId: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDBInstanceMessageFormGroup() {
		return new FormGroup<CreateDBInstanceMessageFormProperties>({
			DBName: new FormControl<string | null | undefined>(undefined),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageType: new FormControl<string | null | undefined>(undefined),
			TdeCredentialArn: new FormControl<string | null | undefined>(undefined),
			TdeCredentialPassword: new FormControl<string | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			MonitoringInterval: new FormControl<number | null | undefined>(undefined),
			MonitoringRoleArn: new FormControl<string | null | undefined>(undefined),
			DomainIAMRoleName: new FormControl<string | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			EnableIAMDatabaseAuthentication: new FormControl<boolean | null | undefined>(undefined),
			EnablePerformanceInsights: new FormControl<boolean | null | undefined>(undefined),
			PerformanceInsightsKMSKeyId: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;

		/** Required */
		DBParameterGroupFamily: string;

		/** Required */
		Description: string;
		Tags?: Array<string>;
	}
	export interface CreateDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,

		/** Required */
		DBParameterGroupFamily: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBParameterGroupMessageFormGroup() {
		return new FormGroup<CreateDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;

		/** Required */
		DBSubnetGroupDescription: string;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Array<string>;
	}
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

	export interface CreateGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;
		SourceDBClusterIdentifier?: string;
		Engine?: string;
		EngineVersion?: string;
		DeletionProtection?: boolean | null;
		StorageEncrypted?: boolean | null;
	}
	export interface CreateGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
		SourceDBClusterIdentifier: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGlobalClusterMessageFormGroup() {
		return new FormGroup<CreateGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceDBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface DBClusterEndpoint {
		DBClusterEndpointIdentifier?: string;
		DBClusterIdentifier?: string;
		DBClusterEndpointResourceIdentifier?: string;
		Endpoint?: string;
		Status?: string;
		EndpointType?: string;
		CustomEndpointType?: string;
		StaticMembers?: Array<string>;
		ExcludedMembers?: Array<string>;
		DBClusterEndpointArn?: string;
	}

	/** <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p> */
	export interface DBClusterEndpointFormProperties {
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterEndpointResourceIdentifier: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		EndpointType: FormControl<string | null | undefined>,
		CustomEndpointType: FormControl<string | null | undefined>,
		DBClusterEndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterEndpointFormGroup() {
		return new FormGroup<DBClusterEndpointFormProperties>({
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<string | null | undefined>(undefined),
			CustomEndpointType: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an instance that is part of a DB cluster. */
	export interface DBClusterMember {
		DBInstanceIdentifier?: string;
		IsClusterWriter?: boolean | null;
		DBClusterParameterGroupStatus?: string;
		PromotionTier?: number | null;
	}

	/** Contains information about an instance that is part of a DB cluster. */
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


	/** Not supported by Neptune. */
	export interface DBClusterOptionGroupStatus {
		DBClusterOptionGroupName?: string;
		Status?: string;
	}

	/** Not supported by Neptune. */
	export interface DBClusterOptionGroupStatusFormProperties {
		DBClusterOptionGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterOptionGroupStatusFormGroup() {
		return new FormGroup<DBClusterOptionGroupStatusFormProperties>({
			DBClusterOptionGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster. */
	export interface DBClusterRole {
		RoleArn?: string;
		Status?: string;
		FeatureName?: string;
	}

	/** Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster. */
	export interface DBClusterRoleFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		FeatureName: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterRoleFormGroup() {
		return new FormGroup<DBClusterRoleFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			FeatureName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
	export interface DBClusterSnapshotAttribute {
		AttributeName?: string;
		AttributeValues?: Array<string>;
	}

	/** <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
	export interface DBClusterSnapshotAttributeFormProperties {
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateDBClusterSnapshotAttributeFormGroup() {
		return new FormGroup<DBClusterSnapshotAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. */
	export interface DBEngineVersion {
		Engine?: string;
		EngineVersion?: string;
		DBParameterGroupFamily?: string;
		DBEngineDescription?: string;
		DBEngineVersionDescription?: string;
		DefaultCharacterSet?: CharacterSet;
		SupportedCharacterSets?: Array<string>;
		ValidUpgradeTarget?: Array<string>;
		SupportedTimezones?: Array<string>;
		ExportableLogTypes?: Array<string>;
		SupportsLogExportsToCloudwatchLogs?: boolean | null;
		SupportsReadReplica?: boolean | null;
		SupportsGlobalDatabases?: boolean | null;
	}

	/**  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. */
	export interface DBEngineVersionFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		DBEngineDescription: FormControl<string | null | undefined>,
		DBEngineVersionDescription: FormControl<string | null | undefined>,
		SupportsLogExportsToCloudwatchLogs: FormControl<boolean | null | undefined>,
		SupportsReadReplica: FormControl<boolean | null | undefined>,
		SupportsGlobalDatabases: FormControl<boolean | null | undefined>,
	}
	export function CreateDBEngineVersionFormGroup() {
		return new FormGroup<DBEngineVersionFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			DBEngineDescription: new FormControl<string | null | undefined>(undefined),
			DBEngineVersionDescription: new FormControl<string | null | undefined>(undefined),
			SupportsLogExportsToCloudwatchLogs: new FormControl<boolean | null | undefined>(undefined),
			SupportsReadReplica: new FormControl<boolean | null | undefined>(undefined),
			SupportsGlobalDatabases: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides a list of status information for a DB instance. */
	export interface DBInstanceStatusInfo {
		StatusType?: string;
		Normal?: boolean | null;
		Status?: string;
		Message?: string;
	}

	/** Provides a list of status information for a DB instance. */
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


	/** <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul> */
	export interface DBParameterGroupStatus {
		DBParameterGroupName?: string;
		ParameterApplyStatus?: string;
	}

	/** <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul> */
	export interface DBParameterGroupStatusFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
		ParameterApplyStatus: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupStatusFormGroup() {
		return new FormGroup<DBParameterGroupStatusFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies membership in a designated DB security group. */
	export interface DBSecurityGroupMembership {
		DBSecurityGroupName?: string;
		Status?: string;
	}

	/** Specifies membership in a designated DB security group. */
	export interface DBSecurityGroupMembershipFormProperties {
		DBSecurityGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDBSecurityGroupMembershipFormGroup() {
		return new FormGroup<DBSecurityGroupMembershipFormProperties>({
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDBClusterEndpointMessage {

		/** Required */
		DBClusterEndpointIdentifier: string;
	}
	export interface DeleteDBClusterEndpointMessageFormProperties {

		/** Required */
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBClusterEndpointMessageFormGroup() {
		return new FormGroup<DeleteDBClusterEndpointMessageFormProperties>({
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;
		SkipFinalSnapshot?: boolean | null;
		FinalDBSnapshotIdentifier?: string;
	}
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

	export interface DeleteDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;
	}
	export interface DeleteDBClusterParameterGroupMessageFormProperties {

		/** Required */
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBClusterParameterGroupMessageFormGroup() {
		return new FormGroup<DeleteDBClusterParameterGroupMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDBClusterSnapshotMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;
	}
	export interface DeleteDBClusterSnapshotMessageFormProperties {

		/** Required */
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBClusterSnapshotMessageFormGroup() {
		return new FormGroup<DeleteDBClusterSnapshotMessageFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		SkipFinalSnapshot?: boolean | null;
		FinalDBSnapshotIdentifier?: string;
	}
	export interface DeleteDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		SkipFinalSnapshot: FormControl<boolean | null | undefined>,
		FinalDBSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBInstanceMessageFormGroup() {
		return new FormGroup<DeleteDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkipFinalSnapshot: new FormControl<boolean | null | undefined>(undefined),
			FinalDBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;
	}
	export interface DeleteDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBParameterGroupMessageFormGroup() {
		return new FormGroup<DeleteDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;
	}
	export interface DeleteDBSubnetGroupMessageFormProperties {

		/** Required */
		DBSubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBSubnetGroupMessageFormGroup() {
		return new FormGroup<DeleteDBSubnetGroupMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
	}
	export interface DeleteEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventSubscriptionMessageFormGroup() {
		return new FormGroup<DeleteEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;
	}
	export interface DeleteGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGlobalClusterMessageFormGroup() {
		return new FormGroup<DeleteGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDBClusterEndpointsMessage {
		DBClusterIdentifier?: string;
		DBClusterEndpointIdentifier?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeDBClusterEndpointsMessageFormProperties {
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBClusterEndpointsMessageFormGroup() {
		return new FormGroup<DescribeDBClusterEndpointsMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBClusterParameterGroupsMessage {
		DBClusterParameterGroupName?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
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

	export interface DescribeDBClusterParametersMessage {

		/** Required */
		DBClusterParameterGroupName: string;
		Source?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
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

	export interface DescribeDBClusterSnapshotAttributesMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;
	}
	export interface DescribeDBClusterSnapshotAttributesMessageFormProperties {

		/** Required */
		DBClusterSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBClusterSnapshotAttributesMessageFormGroup() {
		return new FormGroup<DescribeDBClusterSnapshotAttributesMessageFormProperties>({
			DBClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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

	export interface DescribeDBClustersMessage {
		DBClusterIdentifier?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
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

	export interface DescribeDBInstancesMessage {
		DBInstanceIdentifier?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
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

	export interface DescribeDBParameterGroupsMessage {
		DBParameterGroupName?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeDBParameterGroupsMessageFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBParameterGroupsMessageFormGroup() {
		return new FormGroup<DescribeDBParameterGroupsMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBParametersMessage {

		/** Required */
		DBParameterGroupName: string;
		Source?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeDBParametersMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBParametersMessageFormGroup() {
		return new FormGroup<DescribeDBParametersMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBSubnetGroupsMessage {
		DBSubnetGroupName?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
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

	export interface DescribeEngineDefaultClusterParametersMessage {

		/** Required */
		DBParameterGroupFamily: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
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

	export interface DescribeEngineDefaultParametersMessage {

		/** Required */
		DBParameterGroupFamily: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
	export interface DescribeEngineDefaultParametersMessageFormProperties {

		/** Required */
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEngineDefaultParametersMessageFormGroup() {
		return new FormGroup<DescribeEngineDefaultParametersMessageFormProperties>({
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventCategoriesMessage {
		SourceType?: string;
		Filters?: Array<string>;
	}
	export interface DescribeEventCategoriesMessageFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventCategoriesMessageFormGroup() {
		return new FormGroup<DescribeEventCategoriesMessageFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string;
		Filters?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string;
	}
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

	export enum SourceType { 'db-instance' = 'db-instance', 'db-parameter-group' = 'db-parameter-group', 'db-security-group' = 'db-security-group', 'db-snapshot' = 'db-snapshot', 'db-cluster' = 'db-cluster', 'db-cluster-snapshot' = 'db-cluster-snapshot' }

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

	export interface DescribePendingMaintenanceActionsMessage {
		ResourceIdentifier?: string;
		Filters?: Array<string>;
		Marker?: string;
		MaxRecords?: number | null;
	}
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

	export interface DescribeValidDBInstanceModificationsMessage {

		/** Required */
		DBInstanceIdentifier: string;
	}
	export interface DescribeValidDBInstanceModificationsMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeValidDBInstanceModificationsMessageFormGroup() {
		return new FormGroup<DescribeValidDBInstanceModificationsMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An Active Directory Domain membership record associated with a DB instance. */
	export interface DomainMembership {
		Domain?: string;
		Status?: string;
		FQDN?: string;
		IAMRoleName?: string;
	}

	/** An Active Directory Domain membership record associated with a DB instance. */
	export interface DomainMembershipFormProperties {
		Domain: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		FQDN: FormControl<string | null | undefined>,
		IAMRoleName: FormControl<string | null | undefined>,
	}
	export function CreateDomainMembershipFormGroup() {
		return new FormGroup<DomainMembershipFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			FQDN: new FormControl<string | null | undefined>(undefined),
			IAMRoleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A range of double values. */
	export interface DoubleRange {
		From?: number | null;
		To?: number | null;
	}

	/** A range of double values. */
	export interface DoubleRangeFormProperties {
		From: FormControl<number | null | undefined>,
		To: FormControl<number | null | undefined>,
	}
	export function CreateDoubleRangeFormGroup() {
		return new FormGroup<DoubleRangeFormProperties>({
			From: new FormControl<number | null | undefined>(undefined),
			To: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  This data type is used as a response element in the <a>DescribeEvents</a> action. */
	export interface Event {
		SourceIdentifier?: string;
		SourceType?: SourceType;
		Message?: string;
		EventCategories?: Array<string>;
		Date?: Date;
		SourceArn?: string;
	}

	/**  This data type is used as a response element in the <a>DescribeEvents</a> action. */
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


	/** Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action. */
	export interface EventCategoriesMap {
		SourceType?: string;
		EventCategories?: Array<string>;
	}

	/** Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action. */
	export interface EventCategoriesMapFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateEventCategoriesMapFormGroup() {
		return new FormGroup<EventCategoriesMapFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FailoverDBClusterMessage {
		DBClusterIdentifier?: string;
		TargetDBInstanceIdentifier?: string;
	}
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

	export interface FailoverGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;

		/** Required */
		TargetDbClusterIdentifier: string;
	}
	export interface FailoverGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDbClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateFailoverGlobalClusterMessageFormGroup() {
		return new FormGroup<FailoverGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDbClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A data structure with information about any primary and secondary clusters associated with an Neptune global database.  */
	export interface GlobalClusterMember {
		DBClusterArn?: string;
		Readers?: Array<string>;
		IsWriter?: boolean | null;
	}

	/**  A data structure with information about any primary and secondary clusters associated with an Neptune global database.  */
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

	export interface ListTagsForResourceMessage {

		/** Required */
		ResourceName: string;
		Filters?: Array<string>;
	}
	export interface ListTagsForResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceMessageFormGroup() {
		return new FormGroup<ListTagsForResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyDBClusterEndpointMessage {

		/** Required */
		DBClusterEndpointIdentifier: string;
		EndpointType?: string;
		StaticMembers?: Array<string>;
		ExcludedMembers?: Array<string>;
	}
	export interface ModifyDBClusterEndpointMessageFormProperties {

		/** Required */
		DBClusterEndpointIdentifier: FormControl<string | null | undefined>,
		EndpointType: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBClusterEndpointMessageFormGroup() {
		return new FormGroup<ModifyDBClusterEndpointMessageFormProperties>({
			DBClusterEndpointIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointType: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		OptionGroupName?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		EnableIAMDatabaseAuthentication?: boolean | null;
		CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean | null;
		DBInstanceParameterGroupName?: string;
		DeletionProtection?: boolean | null;
		CopyTagsToSnapshot?: boolean | null;

		/** <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
		ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
	}
	export interface ModifyDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
		NewDBClusterIdentifier: FormControl<string | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		EnableIAMDatabaseAuthentication: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AllowMajorVersionUpgrade: FormControl<boolean | null | undefined>,
		DBInstanceParameterGroupName: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
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
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			EnableIAMDatabaseAuthentication: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			DBInstanceParameterGroupName: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifyDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;

		/** Required */
		Parameters: Array<string>;
	}
	export interface ModifyDBClusterParameterGroupMessageFormProperties {

		/** Required */
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBClusterParameterGroupMessageFormGroup() {
		return new FormGroup<ModifyDBClusterParameterGroupMessageFormProperties>({
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyDBClusterSnapshotAttributeMessage {

		/** Required */
		DBClusterSnapshotIdentifier: string;

		/** Required */
		AttributeName: string;
		ValuesToAdd?: Array<string>;
		ValuesToRemove?: Array<string>;
	}
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

	export interface ModifyDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		AllocatedStorage?: number | null;
		DBInstanceClass?: string;
		DBSubnetGroupName?: string;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		ApplyImmediately?: boolean | null;
		MasterUserPassword?: string;
		DBParameterGroupName?: string;
		BackupRetentionPeriod?: number | null;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		MultiAZ?: boolean | null;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean | null;
		AutoMinorVersionUpgrade?: boolean | null;
		LicenseModel?: string;
		Iops?: number | null;
		OptionGroupName?: string;
		NewDBInstanceIdentifier?: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		CACertificateIdentifier?: string;
		Domain?: string;
		CopyTagsToSnapshot?: boolean | null;
		MonitoringInterval?: number | null;
		DBPortNumber?: number | null;
		PubliclyAccessible?: boolean | null;
		MonitoringRoleArn?: string;
		DomainIAMRoleName?: string;
		PromotionTier?: number | null;
		EnableIAMDatabaseAuthentication?: boolean | null;
		EnablePerformanceInsights?: boolean | null;
		PerformanceInsightsKMSKeyId?: string;
		CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
		DeletionProtection?: boolean | null;
	}
	export interface ModifyDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		DBParameterGroupName: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AllowMajorVersionUpgrade: FormControl<boolean | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		NewDBInstanceIdentifier: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		TdeCredentialArn: FormControl<string | null | undefined>,
		TdeCredentialPassword: FormControl<string | null | undefined>,
		CACertificateIdentifier: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
		MonitoringInterval: FormControl<number | null | undefined>,
		DBPortNumber: FormControl<number | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		MonitoringRoleArn: FormControl<string | null | undefined>,
		DomainIAMRoleName: FormControl<string | null | undefined>,
		PromotionTier: FormControl<number | null | undefined>,
		EnableIAMDatabaseAuthentication: FormControl<boolean | null | undefined>,
		EnablePerformanceInsights: FormControl<boolean | null | undefined>,
		PerformanceInsightsKMSKeyId: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyDBInstanceMessageFormGroup() {
		return new FormGroup<ModifyDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			ApplyImmediately: new FormControl<boolean | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			NewDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			TdeCredentialArn: new FormControl<string | null | undefined>(undefined),
			TdeCredentialPassword: new FormControl<string | null | undefined>(undefined),
			CACertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
			MonitoringInterval: new FormControl<number | null | undefined>(undefined),
			DBPortNumber: new FormControl<number | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			MonitoringRoleArn: new FormControl<string | null | undefined>(undefined),
			DomainIAMRoleName: new FormControl<string | null | undefined>(undefined),
			PromotionTier: new FormControl<number | null | undefined>(undefined),
			EnableIAMDatabaseAuthentication: new FormControl<boolean | null | undefined>(undefined),
			EnablePerformanceInsights: new FormControl<boolean | null | undefined>(undefined),
			PerformanceInsightsKMSKeyId: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifyDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;

		/** Required */
		Parameters: Array<string>;
	}
	export interface ModifyDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBParameterGroupMessageFormGroup() {
		return new FormGroup<ModifyDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;
		DBSubnetGroupDescription?: string;

		/** Required */
		SubnetIds: Array<string>;
	}
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

	export interface ModifyEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
		SnsTopicArn?: string;
		SourceType?: string;
		EventCategories?: Array<string>;
		Enabled?: boolean | null;
	}
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

	export interface ModifyGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;
		NewGlobalClusterIdentifier?: string;
		DeletionProtection?: boolean | null;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean | null;
	}
	export interface ModifyGlobalClusterMessageFormProperties {

		/** Required */
		GlobalClusterIdentifier: FormControl<string | null | undefined>,
		NewGlobalClusterIdentifier: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AllowMajorVersionUpgrade: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyGlobalClusterMessageFormGroup() {
		return new FormGroup<ModifyGlobalClusterMessageFormProperties>({
			GlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewGlobalClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Neptune. */
	export interface OptionGroupMembership {
		OptionGroupName?: string;
		Status?: string;
	}

	/** Not supported by Neptune. */
	export interface OptionGroupMembershipFormProperties {
		OptionGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateOptionGroupMembershipFormGroup() {
		return new FormGroup<OptionGroupMembershipFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p> */
	export interface OrderableDBInstanceOption {
		Engine?: string;
		EngineVersion?: string;
		DBInstanceClass?: string;
		LicenseModel?: string;
		AvailabilityZones?: Array<string>;
		MultiAZCapable?: boolean | null;
		ReadReplicaCapable?: boolean | null;
		Vpc?: boolean | null;
		SupportsStorageEncryption?: boolean | null;
		StorageType?: string;
		SupportsIops?: boolean | null;
		SupportsEnhancedMonitoring?: boolean | null;
		SupportsIAMDatabaseAuthentication?: boolean | null;
		SupportsPerformanceInsights?: boolean | null;
		MinStorageSize?: number | null;
		MaxStorageSize?: number | null;
		MinIopsPerDbInstance?: number | null;
		MaxIopsPerDbInstance?: number | null;
		MinIopsPerGib?: number | null;
		MaxIopsPerGib?: number | null;
		SupportsGlobalDatabases?: boolean | null;
	}

	/** <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p> */
	export interface OrderableDBInstanceOptionFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		MultiAZCapable: FormControl<boolean | null | undefined>,
		ReadReplicaCapable: FormControl<boolean | null | undefined>,
		Vpc: FormControl<boolean | null | undefined>,
		SupportsStorageEncryption: FormControl<boolean | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		SupportsIops: FormControl<boolean | null | undefined>,
		SupportsEnhancedMonitoring: FormControl<boolean | null | undefined>,
		SupportsIAMDatabaseAuthentication: FormControl<boolean | null | undefined>,
		SupportsPerformanceInsights: FormControl<boolean | null | undefined>,
		MinStorageSize: FormControl<number | null | undefined>,
		MaxStorageSize: FormControl<number | null | undefined>,
		MinIopsPerDbInstance: FormControl<number | null | undefined>,
		MaxIopsPerDbInstance: FormControl<number | null | undefined>,
		MinIopsPerGib: FormControl<number | null | undefined>,
		MaxIopsPerGib: FormControl<number | null | undefined>,
		SupportsGlobalDatabases: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderableDBInstanceOptionFormGroup() {
		return new FormGroup<OrderableDBInstanceOptionFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			MultiAZCapable: new FormControl<boolean | null | undefined>(undefined),
			ReadReplicaCapable: new FormControl<boolean | null | undefined>(undefined),
			Vpc: new FormControl<boolean | null | undefined>(undefined),
			SupportsStorageEncryption: new FormControl<boolean | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			SupportsIops: new FormControl<boolean | null | undefined>(undefined),
			SupportsEnhancedMonitoring: new FormControl<boolean | null | undefined>(undefined),
			SupportsIAMDatabaseAuthentication: new FormControl<boolean | null | undefined>(undefined),
			SupportsPerformanceInsights: new FormControl<boolean | null | undefined>(undefined),
			MinStorageSize: new FormControl<number | null | undefined>(undefined),
			MaxStorageSize: new FormControl<number | null | undefined>(undefined),
			MinIopsPerDbInstance: new FormControl<number | null | undefined>(undefined),
			MaxIopsPerDbInstance: new FormControl<number | null | undefined>(undefined),
			MinIopsPerGib: new FormControl<number | null | undefined>(undefined),
			MaxIopsPerGib: new FormControl<number | null | undefined>(undefined),
			SupportsGlobalDatabases: new FormControl<boolean | null | undefined>(undefined),
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

	export interface PromoteReadReplicaDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;
	}
	export interface PromoteReadReplicaDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreatePromoteReadReplicaDBClusterMessageFormGroup() {
		return new FormGroup<PromoteReadReplicaDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A range of integer values. */
	export interface Range {
		From?: number | null;
		To?: number | null;
		Step?: number | null;
	}

	/** A range of integer values. */
	export interface RangeFormProperties {
		From: FormControl<number | null | undefined>,
		To: FormControl<number | null | undefined>,
		Step: FormControl<number | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			From: new FormControl<number | null | undefined>(undefined),
			To: new FormControl<number | null | undefined>(undefined),
			Step: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RebootDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		ForceFailover?: boolean | null;
	}
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

	export interface RemoveFromGlobalClusterMessage {

		/** Required */
		GlobalClusterIdentifier: string;

		/** Required */
		DbClusterIdentifier: string;
	}
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

	export interface RemoveRoleFromDBClusterMessage {

		/** Required */
		DBClusterIdentifier: string;

		/** Required */
		RoleArn: string;
		FeatureName?: string;
	}
	export interface RemoveRoleFromDBClusterMessageFormProperties {

		/** Required */
		DBClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		FeatureName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveRoleFromDBClusterMessageFormGroup() {
		return new FormGroup<RemoveRoleFromDBClusterMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeatureName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveSourceIdentifierFromSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SourceIdentifier: string;
	}
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

	export interface RemoveTagsFromResourceMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface RemoveTagsFromResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceMessageFormGroup() {
		return new FormGroup<RemoveTagsFromResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResetDBClusterParameterGroupMessage {

		/** Required */
		DBClusterParameterGroupName: string;
		ResetAllParameters?: boolean | null;
		Parameters?: Array<string>;
	}
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

	export interface ResetDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;
		ResetAllParameters?: boolean | null;
		Parameters?: Array<string>;
	}
	export interface ResetDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
		ResetAllParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateResetDBParameterGroupMessageFormGroup() {
		return new FormGroup<ResetDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResetAllParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}

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
		DatabaseName?: string;
		OptionGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Tags?: Array<string>;
		KmsKeyId?: string;
		EnableIAMDatabaseAuthentication?: boolean | null;
		EnableCloudwatchLogsExports?: Array<string>;
		DBClusterParameterGroupName?: string;
		DeletionProtection?: boolean | null;
		CopyTagsToSnapshot?: boolean | null;

		/** <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
		ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
	}
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
		DatabaseName: FormControl<string | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		EnableIAMDatabaseAuthentication: FormControl<boolean | null | undefined>,
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		CopyTagsToSnapshot: FormControl<boolean | null | undefined>,
	}
	export function CreateRestoreDBClusterFromSnapshotMessageFormGroup() {
		return new FormGroup<RestoreDBClusterFromSnapshotMessageFormProperties>({
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			EnableIAMDatabaseAuthentication: new FormControl<boolean | null | undefined>(undefined),
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			CopyTagsToSnapshot: new FormControl<boolean | null | undefined>(undefined),
		});

	}

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
		OptionGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Tags?: Array<string>;
		KmsKeyId?: string;
		EnableIAMDatabaseAuthentication?: boolean | null;
		EnableCloudwatchLogsExports?: Array<string>;
		DBClusterParameterGroupName?: string;
		DeletionProtection?: boolean | null;

		/** <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p> */
		ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
	}
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
		OptionGroupName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		EnableIAMDatabaseAuthentication: FormControl<boolean | null | undefined>,
		DBClusterParameterGroupName: FormControl<string | null | undefined>,
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
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			EnableIAMDatabaseAuthentication: new FormControl<boolean | null | undefined>(undefined),
			DBClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
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


	/** <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
	export interface Subnet {
		SubnetIdentifier?: string;
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string;
	}

	/** <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
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


	/** A time zone associated with a <a>DBInstance</a>. */
	export interface Timezone {
		TimezoneName?: string;
	}

	/** A time zone associated with a <a>DBInstance</a>. */
	export interface TimezoneFormProperties {
		TimezoneName: FormControl<string | null | undefined>,
	}
	export function CreateTimezoneFormGroup() {
		return new FormGroup<TimezoneFormProperties>({
			TimezoneName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The version of the database engine that a DB instance can be upgraded to. */
	export interface UpgradeTarget {
		Engine?: string;
		EngineVersion?: string;
		Description?: string;
		AutoUpgrade?: boolean | null;
		IsMajorVersionUpgrade?: boolean | null;
		SupportsGlobalDatabases?: boolean | null;
	}

	/** The version of the database engine that a DB instance can be upgraded to. */
	export interface UpgradeTargetFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AutoUpgrade: FormControl<boolean | null | undefined>,
		IsMajorVersionUpgrade: FormControl<boolean | null | undefined>,
		SupportsGlobalDatabases: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeTargetFormGroup() {
		return new FormGroup<UpgradeTargetFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AutoUpgrade: new FormControl<boolean | null | undefined>(undefined),
			IsMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			SupportsGlobalDatabases: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p> */
	export interface ValidStorageOptions {
		StorageType?: string;
		StorageSize?: Array<string>;
		ProvisionedIops?: Array<string>;
		IopsToStorageRatio?: Array<string>;
	}

	/** <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p> */
	export interface ValidStorageOptionsFormProperties {
		StorageType: FormControl<string | null | undefined>,
	}
	export function CreateValidStorageOptionsFormGroup() {
		return new FormGroup<ValidStorageOptionsFormProperties>({
			StorageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is used as a response element for queries on VPC security group membership. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string;
		Status?: string;
	}

	/** This data type is used as a response element for queries on VPC security group membership. */
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
		 * Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.
		 * Get #Action=AddRoleToDBCluster
		 * @param {string} DBClusterIdentifier The name of the DB cluster to associate the IAM role with.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.
		 * @param {string} FeatureName The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a href="neptune/latest/userguide/api-other-apis.html#DBEngineVersion">DBEngineVersion</a>.
		 * @return {void} Success
		 */
		GET_AddRoleToDBCluster(DBClusterIdentifier: string, RoleArn: string, FeatureName: string | null | undefined, Action: GET_AddRoleToDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddRoleToDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&FeatureName=' + (FeatureName == null ? '' : encodeURIComponent(FeatureName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a source identifier to an existing event notification subscription.
		 * Get #Action=AddSourceIdentifierToSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription you want to add a source identifier to.
		 * @param {string} SourceIdentifier <p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_AddSourceIdentifierToSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_AddSourceIdentifierToSubscriptionAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddSourceIdentifierToSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.
		 * Get #Action=AddTagsToResource
		 * @param {string} ResourceName The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {Array<string>} Tags The tags to be assigned to the Amazon Neptune resource.
		 * @return {void} Success
		 */
		GET_AddTagsToResource(ResourceName: string, Tags: Array<string>, Action: GET_AddTagsToResourceAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddTagsToResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies a pending maintenance action to a resource (for example, to a DB instance).
		 * Get #Action=ApplyPendingMaintenanceAction
		 * @param {string} ResourceIdentifier The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {string} ApplyAction <p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>
		 * @param {string} OptInType <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ApplyPendingMaintenanceAction(ResourceIdentifier: string, ApplyAction: string, OptInType: string, Action: GET_ApplyPendingMaintenanceActionAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ApplyPendingMaintenanceAction?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&ApplyAction=' + (ApplyAction == null ? '' : encodeURIComponent(ApplyAction)) + '&OptInType=' + (OptInType == null ? '' : encodeURIComponent(OptInType)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies the specified DB cluster parameter group.
		 * Get #Action=CopyDBClusterParameterGroup
		 * @param {string} SourceDBClusterParameterGroupIdentifier <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same Amazon Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different Amazon Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>
		 * @param {string} TargetDBClusterParameterGroupIdentifier <p>The identifier for the copied DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>
		 * @param {string} TargetDBClusterParameterGroupDescription A description for the copied DB cluster parameter group.
		 * @param {Array<string>} Tags The tags to be assigned to the copied DB cluster parameter group.
		 * @return {void} Success
		 */
		GET_CopyDBClusterParameterGroup(SourceDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupDescription: string, Tags: Array<string> | null | undefined, Action: GET_CopyDBClusterParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBClusterParameterGroup?SourceDBClusterParameterGroupIdentifier=' + (SourceDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(SourceDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupIdentifier=' + (TargetDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupDescription=' + (TargetDBClusterParameterGroupDescription == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupDescription)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
		 * Get #Action=CopyDBClusterSnapshot
		 * @param {string} SourceDBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> <li> <p>Specify a valid DB snapshot identifier.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>
		 * @param {string} TargetDBClusterSnapshotIdentifier <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>
		 * @param {string} KmsKeyId <p>The Amazon Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p> <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then you must specify a value for <code>KmsKeyId</code>.</p> <p> KMS encryption keys are specific to the Amazon Region that they are created in, and you can't use encryption keys from one Amazon Region in another Amazon Region.</p> <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.</p>
		 * @param {string} PreSignedUrl Not currently supported.
		 * @param {boolean} CopyTags True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.
		 * @param {Array<string>} Tags The tags to assign to the new DB cluster snapshot copy.
		 * @return {void} Success
		 */
		GET_CopyDBClusterSnapshot(SourceDBClusterSnapshotIdentifier: string, TargetDBClusterSnapshotIdentifier: string, KmsKeyId: string | null | undefined, PreSignedUrl: string | null | undefined, CopyTags: boolean | null | undefined, Tags: Array<string> | null | undefined, Action: GET_CopyDBClusterSnapshotAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBClusterSnapshot?SourceDBClusterSnapshotIdentifier=' + (SourceDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(SourceDBClusterSnapshotIdentifier)) + '&TargetDBClusterSnapshotIdentifier=' + (TargetDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(TargetDBClusterSnapshotIdentifier)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&CopyTags=' + CopyTags + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies the specified DB parameter group.
		 * Get #Action=CopyDBParameterGroup
		 * @param {string} SourceDBParameterGroupIdentifier <p>The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>
		 * @param {string} TargetDBParameterGroupIdentifier <p>The identifier for the copied DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-db-parameter-group</code> </p>
		 * @param {string} TargetDBParameterGroupDescription A description for the copied DB parameter group.
		 * @param {Array<string>} Tags The tags to be assigned to the copied DB parameter group.
		 * @return {void} Success
		 */
		GET_CopyDBParameterGroup(SourceDBParameterGroupIdentifier: string, TargetDBParameterGroupIdentifier: string, TargetDBParameterGroupDescription: string, Tags: Array<string> | null | undefined, Action: GET_CopyDBParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBParameterGroup?SourceDBParameterGroupIdentifier=' + (SourceDBParameterGroupIdentifier == null ? '' : encodeURIComponent(SourceDBParameterGroupIdentifier)) + '&TargetDBParameterGroupIdentifier=' + (TargetDBParameterGroupIdentifier == null ? '' : encodeURIComponent(TargetDBParameterGroupIdentifier)) + '&TargetDBParameterGroupDescription=' + (TargetDBParameterGroupDescription == null ? '' : encodeURIComponent(TargetDBParameterGroupDescription)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
		 * Get #Action=CreateDBCluster
		 * @param {Array<string>} AvailabilityZones A list of EC2 Availability Zones that instances in the DB cluster can be created in.
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} CharacterSetName  <i>(Not supported by Neptune)</i> 
		 * @param {boolean} CopyTagsToSnapshot  <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> 
		 * @param {string} DatabaseName The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {string} DBClusterParameterGroupName <p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<string>} VpcSecurityGroupIds A list of EC2 VPC security groups to associate with this DB cluster.
		 * @param {string} DBSubnetGroupName <p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} Engine <p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>neptune</code> </p>
		 * @param {string} EngineVersion <p>The version number of the database engine to use for the new DB cluster.</p> <p>Example: <code>1.0.2.1</code> </p>
		 * @param {number} Port <p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>8182</code> </p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} MasterUsername Not supported by Neptune.
		 * @param {string} MasterUserPassword Not supported by Neptune.
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} ReplicationSourceIdentifier The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
		 * @param {Array<string>} Tags The tags to assign to the new DB cluster.
		 * @param {boolean} StorageEncrypted Specifies whether the DB cluster is encrypted.
		 * @param {string} KmsKeyId <p>The Amazon KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key.</p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is true and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use your default encryption key.</p> </li> </ul> <p>Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region.</p>
		 * @param {string} PreSignedUrl This parameter is not currently supported.
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>If set to <code>true</code>, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level).</p> <p>Default: <code>false</code>.</p>
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of log types that need to be enabled for exporting to CloudWatch Logs.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.
		 * @param {string} GlobalClusterIdentifier The ID of the Neptune global database to which this new DB cluster should be added.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_CreateDBCluster(AvailabilityZones: Array<string> | null | undefined, BackupRetentionPeriod: number | null | undefined, CharacterSetName: string | null | undefined, CopyTagsToSnapshot: boolean | null | undefined, DatabaseName: string | null | undefined, DBClusterIdentifier: string, DBClusterParameterGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, DBSubnetGroupName: string | null | undefined, Engine: string, EngineVersion: string | null | undefined, Port: number | null | undefined, MasterUsername: string | null | undefined, MasterUserPassword: string | null | undefined, OptionGroupName: string | null | undefined, PreferredBackupWindow: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, ReplicationSourceIdentifier: string | null | undefined, Tags: Array<string> | null | undefined, StorageEncrypted: boolean | null | undefined, KmsKeyId: string | null | undefined, PreSignedUrl: string | null | undefined, EnableIAMDatabaseAuthentication: boolean | null | undefined, EnableCloudwatchLogsExports: Array<string> | null | undefined, DeletionProtection: boolean | null | undefined, ServerlessV2ScalingConfiguration: GET_CreateDBClusterServerlessV2ScalingConfiguration | null | undefined, GlobalClusterIdentifier: string | null | undefined, Action: GET_CreateDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBCluster?' + AvailabilityZones?.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&ReplicationSourceIdentifier=' + (ReplicationSourceIdentifier == null ? '' : encodeURIComponent(ReplicationSourceIdentifier)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports?.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&ServerlessV2ScalingConfiguration=' + ServerlessV2ScalingConfiguration + '&GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.
		 * Get #Action=CreateDBClusterEndpoint
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
		 * @param {string} DBClusterEndpointIdentifier The identifier to use for the new endpoint. This parameter is stored as a lowercase string.
		 * @param {string} EndpointType The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.
		 * @param {Array<string>} StaticMembers List of DB instance identifiers that are part of the custom endpoint group.
		 * @param {Array<string>} ExcludedMembers List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
		 * @param {Array<string>} Tags The tags to be assigned to the Amazon Neptune resource.
		 * @return {void} Success
		 */
		GET_CreateDBClusterEndpoint(DBClusterIdentifier: string, DBClusterEndpointIdentifier: string, EndpointType: string, StaticMembers: Array<string> | null | undefined, ExcludedMembers: Array<string> | null | undefined, Tags: Array<string> | null | undefined, Action: GET_CreateDBClusterEndpointAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBClusterEndpoint?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&EndpointType=' + (EndpointType == null ? '' : encodeURIComponent(EndpointType)) + '&' + StaticMembers?.map(z => `StaticMembers=${encodeURIComponent(z)}`).join('&') + '&' + ExcludedMembers?.map(z => `ExcludedMembers=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
		 * Get #Action=CreateDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBClusterParameterGroup.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
		 * @param {string} DBParameterGroupFamily The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
		 * @param {string} Description The description for the DB cluster parameter group.
		 * @param {Array<string>} Tags The tags to be assigned to the new DB cluster parameter group.
		 * @return {void} Success
		 */
		GET_CreateDBClusterParameterGroup(DBClusterParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Tags: Array<string> | null | undefined, Action: GET_CreateDBClusterParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a snapshot of a DB cluster.
		 * Get #Action=CreateDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1-snapshot1</code> </p>
		 * @param {string} DBClusterIdentifier <p>The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {Array<string>} Tags The tags to be assigned to the DB cluster snapshot.
		 * @return {void} Success
		 */
		GET_CreateDBClusterSnapshot(DBClusterSnapshotIdentifier: string, DBClusterIdentifier: string, Tags: Array<string> | null | undefined, Action: GET_CreateDBClusterSnapshotAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new DB instance.
		 * Get #Action=CreateDBInstance
		 * @param {string} DBName Not supported.
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {number} AllocatedStorage Not supported by Neptune.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} DBInstanceClass The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.
		 * @param {string} Engine <p>The name of the database engine to be used for this instance.</p> <p>Valid Values: <code>neptune</code> </p>
		 * @param {string} MasterUsername Not supported by Neptune.
		 * @param {string} MasterUserPassword Not supported by Neptune.
		 * @param {Array<string>} DBSecurityGroups <p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>
		 * @param {Array<string>} VpcSecurityGroupIds <p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
		 * @param {string} AvailabilityZone <p> The EC2 Availability Zone that the DB instance is created in</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same Amazon Region as the current endpoint.</p>
		 * @param {string} DBSubnetGroupName <p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} PreferredBackupWindow <p> The daily time range during which automated backups are created.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
		 * @param {number} Port <p>The port number on which the database accepts connections.</p> <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> Default: <code>8182</code> </p> <p>Type: Integer</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} MultiAZ Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
		 * @param {string} EngineVersion The version number of the database engine to use. Currently, setting this parameter has no effect.
		 * @param {boolean} AutoMinorVersionUpgrade <p>Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.</p> <p>Default: <code>true</code> </p>
		 * @param {string} LicenseModel <p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
		 * @param {number} Iops The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {string} CharacterSetName  <i>(Not supported by Neptune)</i> 
		 * @param {boolean} PubliclyAccessible This flag should no longer be used.
		 * @param {Array<string>} Tags The tags to assign to the new instance.
		 * @param {string} DBClusterIdentifier <p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {boolean} StorageEncrypted <p>Specifies whether the DB instance is encrypted.</p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>
		 * @param {string} KmsKeyId <p>The Amazon KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p>
		 * @param {string} Domain Specify the Active Directory Domain to create the instance in.
		 * @param {boolean} CopyTagsToSnapshot True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {number} PromotionTier <p>A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Timezone The time zone of the DB instance.
		 * @param {boolean} EnableIAMDatabaseAuthentication Not supported by Neptune (ignored).
		 * @param {boolean} EnablePerformanceInsights  <i>(Not supported by Neptune)</i> 
		 * @param {string} PerformanceInsightsKMSKeyId  <i>(Not supported by Neptune)</i> 
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of log types that need to be enabled for exporting to CloudWatch Logs.
		 * @param {boolean} DeletionProtection <p>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.</p> <p>DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.</p>
		 * @return {void} Success
		 */
		GET_CreateDBInstance(DBName: string | null | undefined, DBInstanceIdentifier: string, AllocatedStorage: number | null | undefined, DBInstanceClass: string, Engine: string, MasterUsername: string | null | undefined, MasterUserPassword: string | null | undefined, DBSecurityGroups: Array<string> | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, AvailabilityZone: string | null | undefined, DBSubnetGroupName: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, DBParameterGroupName: string | null | undefined, BackupRetentionPeriod: number | null | undefined, PreferredBackupWindow: string | null | undefined, Port: number | null | undefined, MultiAZ: boolean | null | undefined, EngineVersion: string | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, LicenseModel: string | null | undefined, Iops: number | null | undefined, OptionGroupName: string | null | undefined, CharacterSetName: string | null | undefined, PubliclyAccessible: boolean | null | undefined, Tags: Array<string> | null | undefined, DBClusterIdentifier: string, StorageType: string | null | undefined, TdeCredentialArn: string | null | undefined, TdeCredentialPassword: string | null | undefined, StorageEncrypted: boolean | null | undefined, KmsKeyId: string | null | undefined, Domain: string | null | undefined, CopyTagsToSnapshot: boolean | null | undefined, MonitoringInterval: number | null | undefined, MonitoringRoleArn: string | null | undefined, DomainIAMRoleName: string | null | undefined, PromotionTier: number | null | undefined, Timezone: string | null | undefined, EnableIAMDatabaseAuthentication: boolean | null | undefined, EnablePerformanceInsights: boolean | null | undefined, PerformanceInsightsKMSKeyId: string | null | undefined, EnableCloudwatchLogsExports: Array<string> | null | undefined, DeletionProtection: boolean | null | undefined, Action: GET_CreateDBInstanceAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBInstance?DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&' + DBSecurityGroups?.map(z => `DBSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&Port=' + Port + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&PromotionTier=' + PromotionTier + '&Timezone=' + (Timezone == null ? '' : encodeURIComponent(Timezone)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&' + EnableCloudwatchLogsExports?.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
		 * Get #Action=CreateDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
		 * @param {string} DBParameterGroupFamily The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.
		 * @param {string} Description The description for the DB parameter group.
		 * @param {Array<string>} Tags The tags to be assigned to the new DB parameter group.
		 * @return {void} Success
		 */
		GET_CreateDBParameterGroup(DBParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Tags: Array<string> | null | undefined, Action: GET_CreateDBParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
		 * Get #Action=CreateDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the DB subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the DB subnet group.
		 * @param {Array<string>} SubnetIds The EC2 Subnet IDs for the DB subnet group.
		 * @param {Array<string>} Tags The tags to be assigned to the new DB subnet group.
		 * @return {void} Success
		 */
		GET_CreateDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string, SubnetIds: Array<string>, Tags: Array<string> | null | undefined, Action: GET_CreateDBSubnetGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>
		 * Get #Action=CreateEventSubscription
		 * @param {string} SubscriptionName <p>The name of the subscription.</p> <p>Constraints: The name must be less than 255 characters.</p>
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> </p>
		 * @param {Array<string>} EventCategories  A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.
		 * @param {Array<string>} SourceIds <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIds are supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>
		 * @param {boolean} Enabled  A Boolean value; set to <b>true</b> to activate the subscription, set to <b>false</b> to create the subscription but not active it.
		 * @param {Array<string>} Tags The tags to be applied to the new event subscription.
		 * @return {void} Success
		 */
		GET_CreateEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string | null | undefined, EventCategories: Array<string> | null | undefined, SourceIds: Array<string> | null | undefined, Enabled: boolean | null | undefined, Tags: Array<string> | null | undefined, Action: GET_CreateEventSubscriptionAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&' + SourceIds?.map(z => `SourceIds=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>
		 * Get #Action=CreateGlobalCluster
		 * @param {string} GlobalClusterIdentifier The cluster identifier of the new global database cluster.
		 *     Min length: 1    Max length: 255
		 * @param {string} SourceDBClusterIdentifier (<i>Optional</i>) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
		 * @param {string} Engine <p>The name of the database engine to be used in the global database.</p> <p>Valid values: <code>neptune</code> </p>
		 * @param {string} EngineVersion <p>The Neptune engine version to be used by the global database.</p> <p>Valid values: <code>1.2.0.0</code> or above.</p>
		 * @param {boolean} DeletionProtection The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
		 * @param {boolean} StorageEncrypted The storage encryption setting for the new global database cluster.
		 * @return {void} Success
		 */
		GET_CreateGlobalCluster(GlobalClusterIdentifier: string, SourceDBClusterIdentifier: string | null | undefined, Engine: string | null | undefined, EngineVersion: string | null | undefined, DeletionProtection: boolean | null | undefined, StorageEncrypted: boolean | null | undefined, Action: GET_CreateGlobalClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&SourceDBClusterIdentifier=' + (SourceDBClusterIdentifier == null ? '' : encodeURIComponent(SourceDBClusterIdentifier)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DeletionProtection=' + DeletionProtection + '&StorageEncrypted=' + StorageEncrypted + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
		 * Get #Action=DeleteDBCluster
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing DBClusterIdentifier.</p> </li> </ul>
		 * @param {boolean} SkipFinalSnapshot <p> Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is deleted.</p> <note> <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>
		 * @param {string} FinalDBSnapshotIdentifier <p> The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>.</p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBCluster(DBClusterIdentifier: string, SkipFinalSnapshot: boolean | null | undefined, FinalDBSnapshotIdentifier: string | null | undefined, Action: GET_DeleteDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
		 * Get #Action=DeleteDBClusterEndpoint
		 * @param {string} DBClusterEndpointIdentifier The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_DeleteDBClusterEndpoint(DBClusterEndpointIdentifier: string, Action: GET_DeleteDBClusterEndpointAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBClusterEndpoint?DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
		 * Get #Action=DeleteDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB cluster parameter group.</p> </li> <li> <p>You can't delete a default DB cluster parameter group.</p> </li> <li> <p>Cannot be associated with any DB clusters.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterParameterGroup(DBClusterParameterGroupName: string, Action: GET_DeleteDBClusterParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
		 * Get #Action=DeleteDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterSnapshot(DBClusterSnapshotIdentifier: string, Action: GET_DeleteDBClusterSnapshotAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
		 * Get #Action=DeleteDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>
		 * @param {boolean} SkipFinalSnapshot <p> Determines whether a final DB snapshot is created before the DB instance is deleted. If <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified, a DB snapshot is created before the DB instance is deleted.</p> <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to "true".</p> <p>Specify <code>true</code> when deleting a Read Replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>
		 * @param {string} FinalDBSnapshotIdentifier <p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to <code>false</code>.</p> <note> <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Cannot be specified when deleting a Read Replica.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBInstance(DBInstanceIdentifier: string, SkipFinalSnapshot: boolean | null | undefined, FinalDBSnapshotIdentifier: string | null | undefined, Action: GET_DeleteDBInstanceAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
		 * Get #Action=DeleteDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB parameter group</p> </li> <li> <p>You can't delete a default DB parameter group</p> </li> <li> <p>Cannot be associated with any DB instances</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBParameterGroup(DBParameterGroupName: string, Action: GET_DeleteDBParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
		 * Get #Action=DeleteDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @return {void} Success
		 */
		GET_DeleteDBSubnetGroup(DBSubnetGroupName: string, Action: GET_DeleteDBSubnetGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an event notification subscription.
		 * Get #Action=DeleteEventSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteEventSubscription(SubscriptionName: string, Action: GET_DeleteEventSubscriptionAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.
		 * Get #Action=DeleteGlobalCluster
		 * @param {string} GlobalClusterIdentifier The cluster identifier of the global database cluster being deleted.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		GET_DeleteGlobalCluster(GlobalClusterIdentifier: string, Action: GET_DeleteGlobalClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
		 * Get #Action=DescribeDBClusterEndpoints
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
		 * @param {string} DBClusterEndpointIdentifier The identifier of the endpoint to describe. This parameter is stored as a lowercase string.
		 * @param {Array<string>} Filters A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>. <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>. <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>. <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>. <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. 
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterEndpoints</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBClusterEndpoints(DBClusterIdentifier: string | null | undefined, DBClusterEndpointIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBClusterEndpointsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterEndpoints?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.
		 * Get #Action=DescribeDBClusterParameterGroups
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific DB cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameterGroups(DBClusterParameterGroupName: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBClusterParameterGroupsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterParameterGroups?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the detailed parameter list for a particular DB cluster parameter group.
		 * Get #Action=DescribeDBClusterParameters
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific DB cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {string} Source  A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameters(DBClusterParameterGroupName: string, Source: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBClusterParametersAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterParameters?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
		 * Get #Action=DescribeDBClusterSnapshotAttributes
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the DB cluster snapshot to describe the attributes for.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshotAttributes(DBClusterSnapshotIdentifier: string, Action: GET_DescribeDBClusterSnapshotAttributesAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterSnapshotAttributes?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about DB cluster snapshots. This API action supports pagination.
		 * Get #Action=DescribeDBClusterSnapshots
		 * @param {string} DBClusterIdentifier <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} DBClusterSnapshotIdentifier <p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>
		 * @param {string} SnapshotType <p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my Amazon account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my Amazon account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my Amazon account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public DB cluster snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {boolean} IncludeShared <p>True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is <code>false</code>.</p> <p>You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
		 * @param {boolean} IncludePublic <p>True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is <code>false</code>. The default is false.</p> <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshots(DBClusterIdentifier: string | null | undefined, DBClusterSnapshotIdentifier: string | null | undefined, SnapshotType: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, IncludeShared: boolean | null | undefined, IncludePublic: boolean | null | undefined, Action: GET_DescribeDBClusterSnapshotsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterSnapshots?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&IncludeShared=' + IncludeShared + '&IncludePublic=' + IncludePublic + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
		 * Get #Action=DescribeDBClusters
		 * @param {string} DBClusterIdentifier <p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>
		 * @param {Array<string>} Filters <p>A filter that specifies one or more DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB clusters created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB clusters are returned, you could use the following command:</p>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker An optional pagination token provided by a previous <a>DescribeDBClusters</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusters(DBClusterIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBClustersAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusters?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available DB engines.
		 * Get #Action=DescribeDBEngineVersions
		 * @param {string} Engine The database engine to return.
		 * @param {string} EngineVersion <p>The database engine version to return.</p> <p>Example: <code>5.1.49</code> </p>
		 * @param {string} DBParameterGroupFamily <p>The name of a specific DB parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBParameterGroupFamily.</p> </li> </ul>
		 * @param {Array<string>} Filters Not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {boolean} DefaultOnly Indicates that only the default version of the specified engine or engine and major version combination is returned.
		 * @param {boolean} ListSupportedCharacterSets If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version.
		 * @param {boolean} ListSupportedTimezones If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version.
		 * @return {void} Success
		 */
		GET_DescribeDBEngineVersions(Engine: string | null | undefined, EngineVersion: string | null | undefined, DBParameterGroupFamily: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, DefaultOnly: boolean | null | undefined, ListSupportedCharacterSets: boolean | null | undefined, ListSupportedTimezones: boolean | null | undefined, Action: GET_DescribeDBEngineVersionsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBEngineVersions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&DefaultOnly=' + DefaultOnly + '&ListSupportedCharacterSets=' + ListSupportedCharacterSets + '&ListSupportedTimezones=' + ListSupportedTimezones + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>
		 * Get #Action=DescribeDBInstances
		 * @param {string} DBInstanceIdentifier <p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {Array<string>} Filters <p>A filter that specifies one or more DB instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB instances created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:</p>
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBInstances</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBInstances(DBInstanceIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBInstancesAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBInstances?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
		 * Get #Action=DescribeDBParameterGroups
		 * @param {string} DBParameterGroupName <p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBParameterGroups(DBParameterGroupName: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBParameterGroupsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBParameterGroups?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the detailed parameter list for a particular DB parameter group.
		 * Get #Action=DescribeDBParameters
		 * @param {string} DBParameterGroupName <p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>
		 * @param {string} Source <p>The parameter types to return.</p> <p>Default: All parameter types returned</p> <p>Valid Values: <code>user | system | engine-default</code> </p>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBParameters(DBParameterGroupName: string, Source: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBParametersAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBParameters?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
		 * Get #Action=DescribeDBSubnetGroups
		 * @param {string} DBSubnetGroupName The name of the DB subnet group to return details for.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBSubnetGroups(DBSubnetGroupName: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBSubnetGroupsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBSubnetGroups?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default engine and system parameter information for the cluster database engine.
		 * Get #Action=DescribeEngineDefaultClusterParameters
		 * @param {string} DBParameterGroupFamily The name of the DB cluster parameter group family to return engine parameter information for.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultClusterParameters(DBParameterGroupFamily: string, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEngineDefaultClusterParametersAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEngineDefaultClusterParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default engine and system parameter information for the specified database engine.
		 * Get #Action=DescribeEngineDefaultParameters
		 * @param {string} DBParameterGroupFamily The name of the DB parameter group family.
		 * @param {Array<string>} Filters Not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultParameters(DBParameterGroupFamily: string, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEngineDefaultParametersAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEngineDefaultParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of categories for all event source types, or, if specified, for a specified source type.
		 * Get #Action=DescribeEventCategories
		 * @param {string} SourceType <p>The type of source that is generating the events.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @return {void} Success
		 */
		GET_DescribeEventCategories(SourceType: string | null | undefined, Filters: Array<string> | null | undefined, Action: GET_DescribeEventCategoriesAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventCategories?SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
		 * Get #Action=DescribeEventSubscriptions
		 * @param {string} SubscriptionName The name of the event notification subscription you want to describe.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .
		 * @return {void} Success
		 */
		GET_DescribeEventSubscriptions(SubscriptionName: string | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEventSubscriptionsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventSubscriptions?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
		 * Get #Action=DescribeEvents
		 * @param {string} SourceIdentifier <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIdentifier is supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {SourceType} SourceType The event source to retrieve events for. If no value is specified, all events are returned.
		 * @param {Date} StartTime <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {Date} EndTime <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {number} Duration <p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} EventCategories A list of event categories that trigger notifications for a event notification subscription.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string | null | undefined, SourceType: SourceType | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Duration: number | null | undefined, EventCategories: Array<string> | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEventsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Duration=' + Duration + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about Neptune global database clusters. This API supports pagination.
		 * Get #Action=DescribeGlobalClusters
		 * @param {string} GlobalClusterIdentifier <p>The user-supplied DB cluster identifier. If this parameter is specified, only information about the specified DB cluster is returned. This parameter is not case-sensitive.</p> <p>Constraints: If supplied, must match an existing DB cluster identifier.</p>
		 *     Min length: 1    Max length: 255
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination marker token is included in the response that you can use to retrieve the remaining results.</p> <p>Default: <code>100</code> </p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker (<i>Optional</i>) A pagination token returned by a previous call to <code>DescribeGlobalClusters</code>. If this parameter is specified, the response will only include records beyond the marker, up to the number specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeGlobalClusters(GlobalClusterIdentifier: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeGlobalClustersAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeGlobalClusters?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of orderable DB instance options for the specified engine.
		 * Get #Action=DescribeOrderableDBInstanceOptions
		 * @param {string} Engine The name of the engine to retrieve DB instance options for.
		 * @param {string} EngineVersion The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.
		 * @param {string} DBInstanceClass The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.
		 * @param {string} LicenseModel The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.
		 * @param {boolean} Vpc The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .
		 * @return {void} Success
		 */
		GET_DescribeOrderableDBInstanceOptions(Engine: string, EngineVersion: string | null | undefined, DBInstanceClass: string | null | undefined, LicenseModel: string | null | undefined, Vpc: boolean | null | undefined, Filters: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeOrderableDBInstanceOptionsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOrderableDBInstanceOptions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Vpc=' + Vpc + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
		 * Get #Action=DescribePendingMaintenanceActions
		 * @param {string} ResourceIdentifier The ARN of a resource to return pending maintenance actions for.
		 * @param {Array<string>} Filters <p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		GET_DescribePendingMaintenanceActions(ResourceIdentifier: string | null | undefined, Filters: Array<string> | null | undefined, Marker: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribePendingMaintenanceActionsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePendingMaintenanceActions?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
		 * Get #Action=DescribeValidDBInstanceModifications
		 * @param {string} DBInstanceIdentifier The customer identifier or the ARN of your DB instance.
		 * @return {void} Success
		 */
		GET_DescribeValidDBInstanceModifications(DBInstanceIdentifier: string, Action: GET_DescribeValidDBInstanceModificationsAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeValidDBInstanceModifications?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
		 * Get #Action=FailoverDBCluster
		 * @param {string} DBClusterIdentifier <p>A DB cluster identifier to force a failover for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} TargetDBInstanceIdentifier <p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Read Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>
		 * @return {void} Success
		 */
		GET_FailoverDBCluster(DBClusterIdentifier: string | null | undefined, TargetDBInstanceIdentifier: string | null | undefined, Action: GET_FailoverDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=FailoverDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&TargetDBInstanceIdentifier=' + (TargetDBInstanceIdentifier == null ? '' : encodeURIComponent(TargetDBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>
		 * Get #Action=FailoverGlobalCluster
		 * @param {string} GlobalClusterIdentifier <p>Identifier of the Neptune global database that should be failed over. The identifier is the unique key assigned by the user when the Neptune global database was created. In other words, it's the name of the global database that you want to fail over.</p> <p>Constraints: Must match the identifier of an existing Neptune global database.</p>
		 *     Min length: 1    Max length: 255
		 * @param {string} TargetDbClusterIdentifier The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database.
		 * @return {void} Success
		 */
		GET_FailoverGlobalCluster(GlobalClusterIdentifier: string, TargetDbClusterIdentifier: string, Action: GET_FailoverGlobalClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=FailoverGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&TargetDbClusterIdentifier=' + (TargetDbClusterIdentifier == null ? '' : encodeURIComponent(TargetDbClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all tags on an Amazon Neptune resource.
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceName The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {Array<string>} Filters This parameter is not currently supported.
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceName: string, Filters: Array<string> | null | undefined, Action: GET_ListTagsForResourceAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Filters?.map(z => `Filters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
		 * Get #Action=ModifyDBCluster
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} NewDBClusterIdentifier <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
		 * @param {boolean} ApplyImmediately <p>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set to <code>false</code>, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects <code>NewDBClusterIdentifier</code> values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to use for the DB cluster.
		 * @param {Array<string>} VpcSecurityGroupIds A list of VPC security groups that the DB cluster will belong to.
		 * @param {number} Port <p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} MasterUserPassword Not supported by Neptune.
		 * @param {string} OptionGroupName  <i>Not supported by Neptune.</i> 
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
		 * @param {GET_ModifyDBClusterCloudwatchLogsExportConfiguration} CloudwatchLogsExportConfiguration The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.
		 * @param {string} EngineVersion <p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to true.</p> <p>For a list of valid engine versions, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html">Engine Releases for Amazon Neptune</a>, or call <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.</p>
		 * @param {boolean} AllowMajorVersionUpgrade <p>A value that indicates whether upgrades between different major versions are allowed.</p> <p>Constraints: You must set the allow-major-version-upgrade flag when providing an <code>EngineVersion</code> parameter that uses a different major version than the DB cluster's current version.</p>
		 * @param {string} DBInstanceParameterGroupName <p>The name of the DB parameter group to apply to all instances of the DB cluster. </p> <note> <p>When you apply a parameter group using <code>DBInstanceParameterGroupName</code>, parameter changes aren't applied during the next maintenance window but instead are applied immediately.</p> </note> <p>Default: The existing name setting</p> <p>Constraints:</p> <ul> <li> <p>The DB parameter group must be in the same DB parameter group family as the target DB cluster version.</p> </li> <li> <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with the <code>AllowMajorVersionUpgrade</code> parameter.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
		 * @param {boolean} CopyTagsToSnapshot  <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> 
		 * @return {void} Success
		 */
		GET_ModifyDBCluster(DBClusterIdentifier: string, NewDBClusterIdentifier: string | null | undefined, ApplyImmediately: boolean | null | undefined, BackupRetentionPeriod: number | null | undefined, DBClusterParameterGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, Port: number | null | undefined, MasterUserPassword: string | null | undefined, OptionGroupName: string | null | undefined, PreferredBackupWindow: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, EnableIAMDatabaseAuthentication: boolean | null | undefined, CloudwatchLogsExportConfiguration: GET_ModifyDBClusterCloudwatchLogsExportConfiguration | null | undefined, EngineVersion: string | null | undefined, AllowMajorVersionUpgrade: boolean | null | undefined, DBInstanceParameterGroupName: string | null | undefined, DeletionProtection: boolean | null | undefined, CopyTagsToSnapshot: boolean | null | undefined, ServerlessV2ScalingConfiguration: GET_ModifyDBClusterServerlessV2ScalingConfiguration | null | undefined, Action: GET_ModifyDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&NewDBClusterIdentifier=' + (NewDBClusterIdentifier == null ? '' : encodeURIComponent(NewDBClusterIdentifier)) + '&ApplyImmediately=' + ApplyImmediately + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&Port=' + Port + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&CloudwatchLogsExportConfiguration=' + CloudwatchLogsExportConfiguration + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&DBInstanceParameterGroupName=' + (DBInstanceParameterGroupName == null ? '' : encodeURIComponent(DBInstanceParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&ServerlessV2ScalingConfiguration=' + ServerlessV2ScalingConfiguration + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
		 * Get #Action=ModifyDBClusterEndpoint
		 * @param {string} DBClusterEndpointIdentifier The identifier of the endpoint to modify. This parameter is stored as a lowercase string.
		 * @param {string} EndpointType The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.
		 * @param {Array<string>} StaticMembers List of DB instance identifiers that are part of the custom endpoint group.
		 * @param {Array<string>} ExcludedMembers List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
		 * @return {void} Success
		 */
		GET_ModifyDBClusterEndpoint(DBClusterEndpointIdentifier: string, EndpointType: string | null | undefined, StaticMembers: Array<string> | null | undefined, ExcludedMembers: Array<string> | null | undefined, Action: GET_ModifyDBClusterEndpointAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBClusterEndpoint?DBClusterEndpointIdentifier=' + (DBClusterEndpointIdentifier == null ? '' : encodeURIComponent(DBClusterEndpointIdentifier)) + '&EndpointType=' + (EndpointType == null ? '' : encodeURIComponent(EndpointType)) + '&' + StaticMembers?.map(z => `StaticMembers=${encodeURIComponent(z)}`).join('&') + '&' + ExcludedMembers?.map(z => `ExcludedMembers=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
		 * Get #Action=ModifyDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to modify.
		 * @param {Array<string>} Parameters A list of parameters in the DB cluster parameter group to modify.
		 * @return {void} Success
		 */
		GET_ModifyDBClusterParameterGroup(DBClusterParameterGroupName: string, Parameters: Array<string>, Action: GET_ModifyDBClusterParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
		 * Get #Action=ModifyDBClusterSnapshotAttribute
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the DB cluster snapshot to modify the attributes for.
		 * @param {string} AttributeName <p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p>
		 * @param {Array<string>} ValuesToAdd <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any Amazon account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts.</p>
		 * @param {Array<string>} ValuesToRemove <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account identifiers, or <code>all</code> to remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>
		 * @return {void} Success
		 */
		GET_ModifyDBClusterSnapshotAttribute(DBClusterSnapshotIdentifier: string, AttributeName: string, ValuesToAdd: Array<string> | null | undefined, ValuesToRemove: Array<string> | null | undefined, Action: GET_ModifyDBClusterSnapshotAttributeAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBClusterSnapshotAttribute?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&' + ValuesToAdd?.map(z => `ValuesToAdd=${encodeURIComponent(z)}`).join('&') + '&' + ValuesToRemove?.map(z => `ValuesToRemove=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
		 * Get #Action=ModifyDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {number} AllocatedStorage Not supported by Neptune.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} DBInstanceClass <p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.</p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>
		 * @param {string} DBSubnetGroupName <p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC.</p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify <code>true</code> for the <code>ApplyImmediately</code> parameter.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>
		 * @param {Array<string>} DBSecurityGroups <p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>
		 * @param {Array<string>} VpcSecurityGroupIds <p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>
		 * @param {boolean} ApplyImmediately <p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p> <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot.</p> <p>Default: <code>false</code> </p>
		 * @param {string} MasterUserPassword Not supported by Neptune.
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>
		 * @param {number} BackupRetentionPeriod <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: Uses existing setting</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} PreferredBackupWindow <p> The daily time range during which automated backups are created if automated backups are enabled.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>
		 * @param {boolean} MultiAZ Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.
		 * @param {string} EngineVersion The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the <a>ApplyPendingMaintenanceAction</a> API.
		 * @param {boolean} AllowMajorVersionUpgrade Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
		 * @param {boolean} AutoMinorVersionUpgrade  Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version.
		 * @param {string} LicenseModel Not supported by Neptune.
		 * @param {number} Iops <p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {string} NewDBInstanceIdentifier <p> The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set <code>Apply Immediately</code> to true, or will occur during the next maintenance window if <code>Apply Immediately</code> to false. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {string} StorageType Not supported.
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {string} CACertificateIdentifier Indicates the certificate that needs to be associated with the instance.
		 * @param {string} Domain Not supported.
		 * @param {boolean} CopyTagsToSnapshot True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} DBPortNumber <p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> Default: <code>8182</code> </p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} PubliclyAccessible This flag should no longer be used.
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
		 * @param {string} DomainIAMRoleName Not supported
		 * @param {number} PromotionTier <p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <p>Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: <code>false</code> </p>
		 * @param {boolean} EnablePerformanceInsights  <i>(Not supported by Neptune)</i> 
		 * @param {string} PerformanceInsightsKMSKeyId  <i>(Not supported by Neptune)</i> 
		 * @param {GET_ModifyDBInstanceCloudwatchLogsExportConfiguration} CloudwatchLogsExportConfiguration The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.
		 * @return {void} Success
		 */
		GET_ModifyDBInstance(DBInstanceIdentifier: string, AllocatedStorage: number | null | undefined, DBInstanceClass: string | null | undefined, DBSubnetGroupName: string | null | undefined, DBSecurityGroups: Array<string> | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, ApplyImmediately: boolean | null | undefined, MasterUserPassword: string | null | undefined, DBParameterGroupName: string | null | undefined, BackupRetentionPeriod: number | null | undefined, PreferredBackupWindow: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, MultiAZ: boolean | null | undefined, EngineVersion: string | null | undefined, AllowMajorVersionUpgrade: boolean | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, LicenseModel: string | null | undefined, Iops: number | null | undefined, OptionGroupName: string | null | undefined, NewDBInstanceIdentifier: string | null | undefined, StorageType: string | null | undefined, TdeCredentialArn: string | null | undefined, TdeCredentialPassword: string | null | undefined, CACertificateIdentifier: string | null | undefined, Domain: string | null | undefined, CopyTagsToSnapshot: boolean | null | undefined, MonitoringInterval: number | null | undefined, DBPortNumber: number | null | undefined, PubliclyAccessible: boolean | null | undefined, MonitoringRoleArn: string | null | undefined, DomainIAMRoleName: string | null | undefined, PromotionTier: number | null | undefined, EnableIAMDatabaseAuthentication: boolean | null | undefined, EnablePerformanceInsights: boolean | null | undefined, PerformanceInsightsKMSKeyId: string | null | undefined, CloudwatchLogsExportConfiguration: GET_ModifyDBInstanceCloudwatchLogsExportConfiguration | null | undefined, DeletionProtection: boolean | null | undefined, Action: GET_ModifyDBInstanceAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + DBSecurityGroups?.map(z => `DBSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&NewDBInstanceIdentifier=' + (NewDBInstanceIdentifier == null ? '' : encodeURIComponent(NewDBInstanceIdentifier)) + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&CACertificateIdentifier=' + (CACertificateIdentifier == null ? '' : encodeURIComponent(CACertificateIdentifier)) + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&DBPortNumber=' + DBPortNumber + '&PubliclyAccessible=' + PubliclyAccessible + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&PromotionTier=' + PromotionTier + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&CloudwatchLogsExportConfiguration=' + CloudwatchLogsExportConfiguration + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
		 * Get #Action=ModifyDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>
		 * @param {Array<string>} Parameters <p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for the application method): <code>immediate | pending-reboot</code> </p> <note> <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p> </note>
		 * @return {void} Success
		 */
		GET_ModifyDBParameterGroup(DBParameterGroupName: string, Parameters: Array<string>, Action: GET_ModifyDBParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
		 * Get #Action=ModifyDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the DB subnet group.
		 * @param {Array<string>} SubnetIds The EC2 subnet IDs for the DB subnet group.
		 * @return {void} Success
		 */
		GET_ModifyDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string | null | undefined, SubnetIds: Array<string>, Action: GET_ModifyDBSubnetGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
		 * Get #Action=ModifyEventSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription.
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
		 * @param {Array<string>} EventCategories  A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.
		 * @param {boolean} Enabled  A Boolean value; set to <b>true</b> to activate the subscription.
		 * @return {void} Success
		 */
		GET_ModifyEventSubscription(SubscriptionName: string, SnsTopicArn: string | null | undefined, SourceType: string | null | undefined, EventCategories: Array<string> | null | undefined, Enabled: boolean | null | undefined, Action: GET_ModifyEventSubscriptionAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.
		 * Get #Action=ModifyGlobalCluster
		 * @param {string} GlobalClusterIdentifier <p>The DB cluster identifier for the global cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints: Must match the identifier of an existing global database cluster.</p>
		 *     Min length: 1    Max length: 255
		 * @param {string} NewGlobalClusterIdentifier <p>A new cluster identifier to assign to the global database. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
		 *     Min length: 1    Max length: 255
		 * @param {boolean} DeletionProtection Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled.
		 * @param {string} EngineVersion <p>The version number of the database engine to which you want to upgrade. Changing this parameter will result in an outage. The change is applied during the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p> <p>To list all of the available Neptune engine versions, use the following command:</p>
		 * @param {boolean} AllowMajorVersionUpgrade <p>A value that indicates whether major version upgrades are allowed.</p> <p>Constraints: You must allow major version upgrades if you specify a value for the <code>EngineVersion</code> parameter that is a different major version than the DB cluster's current version.</p> <p>If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade.</p>
		 * @return {void} Success
		 */
		GET_ModifyGlobalCluster(GlobalClusterIdentifier: string, NewGlobalClusterIdentifier: string | null | undefined, DeletionProtection: boolean | null | undefined, EngineVersion: string | null | undefined, AllowMajorVersionUpgrade: boolean | null | undefined, Action: GET_ModifyGlobalClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&NewGlobalClusterIdentifier=' + (NewGlobalClusterIdentifier == null ? '' : encodeURIComponent(NewGlobalClusterIdentifier)) + '&DeletionProtection=' + DeletionProtection + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Not supported.
		 * Get #Action=PromoteReadReplicaDBCluster
		 * @param {string} DBClusterIdentifier Not supported.
		 * @return {void} Success
		 */
		GET_PromoteReadReplicaDBCluster(DBClusterIdentifier: string, Action: GET_PromoteReadReplicaDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PromoteReadReplicaDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
		 * Get #Action=RebootDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {boolean} ForceFailover <p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for MultiAZ.</p>
		 * @return {void} Success
		 */
		GET_RebootDBInstance(DBInstanceIdentifier: string, ForceFailover: boolean | null | undefined, Action: GET_RebootDBInstanceAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebootDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&ForceFailover=' + ForceFailover + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.
		 * Get #Action=RemoveFromGlobalCluster
		 * @param {string} GlobalClusterIdentifier The identifier of the Neptune global database from which to detach the specified Neptune DB cluster.
		 *     Min length: 1    Max length: 255
		 * @param {string} DbClusterIdentifier The Amazon Resource Name (ARN) identifying the cluster to be detached from the Neptune global database cluster.
		 * @return {void} Success
		 */
		GET_RemoveFromGlobalCluster(GlobalClusterIdentifier: string, DbClusterIdentifier: string, Action: GET_RemoveFromGlobalClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveFromGlobalCluster?GlobalClusterIdentifier=' + (GlobalClusterIdentifier == null ? '' : encodeURIComponent(GlobalClusterIdentifier)) + '&DbClusterIdentifier=' + (DbClusterIdentifier == null ? '' : encodeURIComponent(DbClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates an Identity and Access Management (IAM) role from a DB cluster.
		 * Get #Action=RemoveRoleFromDBCluster
		 * @param {string} DBClusterIdentifier The name of the DB cluster to disassociate the IAM role from.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.
		 * @param {string} FeatureName The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.
		 * @return {void} Success
		 */
		GET_RemoveRoleFromDBCluster(DBClusterIdentifier: string, RoleArn: string, FeatureName: string | null | undefined, Action: GET_RemoveRoleFromDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveRoleFromDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&FeatureName=' + (FeatureName == null ? '' : encodeURIComponent(FeatureName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a source identifier from an existing event notification subscription.
		 * Get #Action=RemoveSourceIdentifierFromSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription you want to remove a source identifier from.
		 * @param {string} SourceIdentifier  The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security group.
		 * @return {void} Success
		 */
		GET_RemoveSourceIdentifierFromSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_RemoveSourceIdentifierFromSubscriptionAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveSourceIdentifierFromSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes metadata tags from an Amazon Neptune resource.
		 * Get #Action=RemoveTagsFromResource
		 * @param {string} ResourceName The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {Array<string>} TagKeys The tag key (name) of the tag to be removed.
		 * @return {void} Success
		 */
		GET_RemoveTagsFromResource(ResourceName: string, TagKeys: Array<string>, Action: GET_RemoveTagsFromResourceAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveTagsFromResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
		 * Get #Action=ResetDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to reset.
		 * @param {boolean} ResetAllParameters A value that is set to <code>true</code> to reset all parameters in the DB cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.
		 * @param {Array<string>} Parameters A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.
		 * @return {void} Success
		 */
		GET_ResetDBClusterParameterGroup(DBClusterParameterGroupName: string, ResetAllParameters: boolean | null | undefined, Parameters: Array<string> | null | undefined, Action: GET_ResetDBClusterParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters?.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
		 * Get #Action=ResetDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBParameterGroup.</p> </li> </ul>
		 * @param {boolean} ResetAllParameters <p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters in the DB parameter group to default values.</p> <p>Default: <code>true</code> </p>
		 * @param {Array<string>} Parameters <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>
		 * @return {void} Success
		 */
		GET_ResetDBParameterGroup(DBParameterGroupName: string, ResetAllParameters: boolean | null | undefined, Parameters: Array<string> | null | undefined, Action: GET_ResetDBParameterGroupAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters?.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>
		 * Get #Action=RestoreDBClusterFromSnapshot
		 * @param {Array<string>} AvailabilityZones Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.
		 * @param {string} DBClusterIdentifier <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} SnapshotIdentifier <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>
		 * @param {string} Engine <p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>
		 * @param {string} EngineVersion The version of the database engine to use for the new DB cluster.
		 * @param {number} Port <p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} DBSubnetGroupName <p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DatabaseName Not supported.
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {Array<string>} VpcSecurityGroupIds A list of VPC security groups that the new DB cluster will belong to.
		 * @param {Array<string>} Tags The tags to be assigned to the restored DB cluster.
		 * @param {string} KmsKeyId <p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @param {boolean} CopyTagsToSnapshot  <i>If set to <code>true</code>, tags are copied to any snapshot of the restored DB cluster that is created.</i> 
		 * @return {void} Success
		 */
		GET_RestoreDBClusterFromSnapshot(AvailabilityZones: Array<string> | null | undefined, DBClusterIdentifier: string, SnapshotIdentifier: string, Engine: string, EngineVersion: string | null | undefined, Port: number | null | undefined, DBSubnetGroupName: string | null | undefined, DatabaseName: string | null | undefined, OptionGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, Tags: Array<string> | null | undefined, KmsKeyId: string | null | undefined, EnableIAMDatabaseAuthentication: boolean | null | undefined, EnableCloudwatchLogsExports: Array<string> | null | undefined, DBClusterParameterGroupName: string | null | undefined, DeletionProtection: boolean | null | undefined, CopyTagsToSnapshot: boolean | null | undefined, ServerlessV2ScalingConfiguration: GET_RestoreDBClusterFromSnapshotServerlessV2ScalingConfiguration | null | undefined, Action: GET_RestoreDBClusterFromSnapshotAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBClusterFromSnapshot?' + AvailabilityZones?.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports?.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&ServerlessV2ScalingConfiguration=' + ServerlessV2ScalingConfiguration + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>
		 * Get #Action=RestoreDBClusterToPointInTime
		 * @param {string} DBClusterIdentifier <p>The name of the new DB cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {string} RestoreType <p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>
		 * @param {string} SourceDBClusterIdentifier <p>The identifier of the source DB cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {Date} RestoreToTime <p>The date and time to restore the DB cluster to.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not provided</p> </li> <li> <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p> </li> <li> <p>Cannot be specified if <code>RestoreType</code> parameter is <code>copy-on-write</code> </p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>
		 * @param {boolean} UseLatestRestorableTime <p>A value that is set to <code>true</code> to restore the DB cluster to the latest restorable backup time, and <code>false</code> otherwise.</p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is provided.</p>
		 * @param {number} Port <p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} DBSubnetGroupName <p>The DB subnet group name to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {Array<string>} VpcSecurityGroupIds A list of VPC security groups that the new DB cluster belongs to.
		 * @param {Array<string>} Tags The tags to be applied to the restored DB cluster.
		 * @param {string} KmsKeyId <p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p> </li> <li> <p>If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the restore request is rejected.</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of logs that the restored DB cluster is to export to CloudWatch Logs.
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @return {void} Success
		 */
		GET_RestoreDBClusterToPointInTime(DBClusterIdentifier: string, RestoreType: string | null | undefined, SourceDBClusterIdentifier: string, RestoreToTime: Date | null | undefined, UseLatestRestorableTime: boolean | null | undefined, Port: number | null | undefined, DBSubnetGroupName: string | null | undefined, OptionGroupName: string | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, Tags: Array<string> | null | undefined, KmsKeyId: string | null | undefined, EnableIAMDatabaseAuthentication: boolean | null | undefined, EnableCloudwatchLogsExports: Array<string> | null | undefined, DBClusterParameterGroupName: string | null | undefined, DeletionProtection: boolean | null | undefined, ServerlessV2ScalingConfiguration: GET_RestoreDBClusterToPointInTimeServerlessV2ScalingConfiguration | null | undefined, Action: GET_RestoreDBClusterToPointInTimeAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBClusterToPointInTime?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RestoreType=' + (RestoreType == null ? '' : encodeURIComponent(RestoreType)) + '&SourceDBClusterIdentifier=' + (SourceDBClusterIdentifier == null ? '' : encodeURIComponent(SourceDBClusterIdentifier)) + '&RestoreToTime=' + RestoreToTime?.toISOString() + '&UseLatestRestorableTime=' + UseLatestRestorableTime + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports?.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&ServerlessV2ScalingConfiguration=' + ServerlessV2ScalingConfiguration + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
		 * Get #Action=StartDBCluster
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_StartDBCluster(DBClusterIdentifier: string, Action: GET_StartDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StartDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>
		 * Get #Action=StopDBCluster
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_StopDBCluster(DBClusterIdentifier: string, Action: GET_StopDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StopDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddRoleToDBClusterAction { AddRoleToDBCluster = 'AddRoleToDBCluster' }

	export enum GET_AddRoleToDBClusterVersion { '2014-10-31' = '2014-10-31' }

	export enum GET_AddSourceIdentifierToSubscriptionAction { AddSourceIdentifierToSubscription = 'AddSourceIdentifierToSubscription' }

	export enum GET_AddTagsToResourceAction { AddTagsToResource = 'AddTagsToResource' }

	export enum GET_ApplyPendingMaintenanceActionAction { ApplyPendingMaintenanceAction = 'ApplyPendingMaintenanceAction' }

	export enum GET_CopyDBClusterParameterGroupAction { CopyDBClusterParameterGroup = 'CopyDBClusterParameterGroup' }

	export enum GET_CopyDBClusterSnapshotAction { CopyDBClusterSnapshot = 'CopyDBClusterSnapshot' }

	export enum GET_CopyDBParameterGroupAction { CopyDBParameterGroup = 'CopyDBParameterGroup' }

	export interface GET_CreateDBClusterServerlessV2ScalingConfiguration {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}
	export interface GET_CreateDBClusterServerlessV2ScalingConfigurationFormProperties {
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateDBClusterServerlessV2ScalingConfigurationFormGroup() {
		return new FormGroup<GET_CreateDBClusterServerlessV2ScalingConfigurationFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_CreateDBClusterAction { CreateDBCluster = 'CreateDBCluster' }

	export enum GET_CreateDBClusterEndpointAction { CreateDBClusterEndpoint = 'CreateDBClusterEndpoint' }

	export enum GET_CreateDBClusterParameterGroupAction { CreateDBClusterParameterGroup = 'CreateDBClusterParameterGroup' }

	export enum GET_CreateDBClusterSnapshotAction { CreateDBClusterSnapshot = 'CreateDBClusterSnapshot' }

	export enum GET_CreateDBInstanceAction { CreateDBInstance = 'CreateDBInstance' }

	export enum GET_CreateDBParameterGroupAction { CreateDBParameterGroup = 'CreateDBParameterGroup' }

	export enum GET_CreateDBSubnetGroupAction { CreateDBSubnetGroup = 'CreateDBSubnetGroup' }

	export enum GET_CreateEventSubscriptionAction { CreateEventSubscription = 'CreateEventSubscription' }

	export enum GET_CreateGlobalClusterAction { CreateGlobalCluster = 'CreateGlobalCluster' }

	export enum GET_DeleteDBClusterAction { DeleteDBCluster = 'DeleteDBCluster' }

	export enum GET_DeleteDBClusterEndpointAction { DeleteDBClusterEndpoint = 'DeleteDBClusterEndpoint' }

	export enum GET_DeleteDBClusterParameterGroupAction { DeleteDBClusterParameterGroup = 'DeleteDBClusterParameterGroup' }

	export enum GET_DeleteDBClusterSnapshotAction { DeleteDBClusterSnapshot = 'DeleteDBClusterSnapshot' }

	export enum GET_DeleteDBInstanceAction { DeleteDBInstance = 'DeleteDBInstance' }

	export enum GET_DeleteDBParameterGroupAction { DeleteDBParameterGroup = 'DeleteDBParameterGroup' }

	export enum GET_DeleteDBSubnetGroupAction { DeleteDBSubnetGroup = 'DeleteDBSubnetGroup' }

	export enum GET_DeleteEventSubscriptionAction { DeleteEventSubscription = 'DeleteEventSubscription' }

	export enum GET_DeleteGlobalClusterAction { DeleteGlobalCluster = 'DeleteGlobalCluster' }

	export enum GET_DescribeDBClusterEndpointsAction { DescribeDBClusterEndpoints = 'DescribeDBClusterEndpoints' }

	export enum GET_DescribeDBClusterParameterGroupsAction { DescribeDBClusterParameterGroups = 'DescribeDBClusterParameterGroups' }

	export enum GET_DescribeDBClusterParametersAction { DescribeDBClusterParameters = 'DescribeDBClusterParameters' }

	export enum GET_DescribeDBClusterSnapshotAttributesAction { DescribeDBClusterSnapshotAttributes = 'DescribeDBClusterSnapshotAttributes' }

	export enum GET_DescribeDBClusterSnapshotsAction { DescribeDBClusterSnapshots = 'DescribeDBClusterSnapshots' }

	export enum GET_DescribeDBClustersAction { DescribeDBClusters = 'DescribeDBClusters' }

	export enum GET_DescribeDBEngineVersionsAction { DescribeDBEngineVersions = 'DescribeDBEngineVersions' }

	export enum GET_DescribeDBInstancesAction { DescribeDBInstances = 'DescribeDBInstances' }

	export enum GET_DescribeDBParameterGroupsAction { DescribeDBParameterGroups = 'DescribeDBParameterGroups' }

	export enum GET_DescribeDBParametersAction { DescribeDBParameters = 'DescribeDBParameters' }

	export enum GET_DescribeDBSubnetGroupsAction { DescribeDBSubnetGroups = 'DescribeDBSubnetGroups' }

	export enum GET_DescribeEngineDefaultClusterParametersAction { DescribeEngineDefaultClusterParameters = 'DescribeEngineDefaultClusterParameters' }

	export enum GET_DescribeEngineDefaultParametersAction { DescribeEngineDefaultParameters = 'DescribeEngineDefaultParameters' }

	export enum GET_DescribeEventCategoriesAction { DescribeEventCategories = 'DescribeEventCategories' }

	export enum GET_DescribeEventSubscriptionsAction { DescribeEventSubscriptions = 'DescribeEventSubscriptions' }

	export enum GET_DescribeEventsAction { DescribeEvents = 'DescribeEvents' }

	export enum GET_DescribeGlobalClustersAction { DescribeGlobalClusters = 'DescribeGlobalClusters' }

	export enum GET_DescribeOrderableDBInstanceOptionsAction { DescribeOrderableDBInstanceOptions = 'DescribeOrderableDBInstanceOptions' }

	export enum GET_DescribePendingMaintenanceActionsAction { DescribePendingMaintenanceActions = 'DescribePendingMaintenanceActions' }

	export enum GET_DescribeValidDBInstanceModificationsAction { DescribeValidDBInstanceModifications = 'DescribeValidDBInstanceModifications' }

	export enum GET_FailoverDBClusterAction { FailoverDBCluster = 'FailoverDBCluster' }

	export enum GET_FailoverGlobalClusterAction { FailoverGlobalCluster = 'FailoverGlobalCluster' }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 'ListTagsForResource' }

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

	export interface GET_ModifyDBClusterServerlessV2ScalingConfiguration {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}
	export interface GET_ModifyDBClusterServerlessV2ScalingConfigurationFormProperties {
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateGET_ModifyDBClusterServerlessV2ScalingConfigurationFormGroup() {
		return new FormGroup<GET_ModifyDBClusterServerlessV2ScalingConfigurationFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_ModifyDBClusterAction { ModifyDBCluster = 'ModifyDBCluster' }

	export enum GET_ModifyDBClusterEndpointAction { ModifyDBClusterEndpoint = 'ModifyDBClusterEndpoint' }

	export enum GET_ModifyDBClusterParameterGroupAction { ModifyDBClusterParameterGroup = 'ModifyDBClusterParameterGroup' }

	export enum GET_ModifyDBClusterSnapshotAttributeAction { ModifyDBClusterSnapshotAttribute = 'ModifyDBClusterSnapshotAttribute' }

	export interface GET_ModifyDBInstanceCloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<string>;
		DisableLogTypes?: Array<string>;
	}
	export interface GET_ModifyDBInstanceCloudwatchLogsExportConfigurationFormProperties {
	}
	export function CreateGET_ModifyDBInstanceCloudwatchLogsExportConfigurationFormGroup() {
		return new FormGroup<GET_ModifyDBInstanceCloudwatchLogsExportConfigurationFormProperties>({
		});

	}

	export enum GET_ModifyDBInstanceAction { ModifyDBInstance = 'ModifyDBInstance' }

	export enum GET_ModifyDBParameterGroupAction { ModifyDBParameterGroup = 'ModifyDBParameterGroup' }

	export enum GET_ModifyDBSubnetGroupAction { ModifyDBSubnetGroup = 'ModifyDBSubnetGroup' }

	export enum GET_ModifyEventSubscriptionAction { ModifyEventSubscription = 'ModifyEventSubscription' }

	export enum GET_ModifyGlobalClusterAction { ModifyGlobalCluster = 'ModifyGlobalCluster' }

	export enum GET_PromoteReadReplicaDBClusterAction { PromoteReadReplicaDBCluster = 'PromoteReadReplicaDBCluster' }

	export enum GET_RebootDBInstanceAction { RebootDBInstance = 'RebootDBInstance' }

	export enum GET_RemoveFromGlobalClusterAction { RemoveFromGlobalCluster = 'RemoveFromGlobalCluster' }

	export enum GET_RemoveRoleFromDBClusterAction { RemoveRoleFromDBCluster = 'RemoveRoleFromDBCluster' }

	export enum GET_RemoveSourceIdentifierFromSubscriptionAction { RemoveSourceIdentifierFromSubscription = 'RemoveSourceIdentifierFromSubscription' }

	export enum GET_RemoveTagsFromResourceAction { RemoveTagsFromResource = 'RemoveTagsFromResource' }

	export enum GET_ResetDBClusterParameterGroupAction { ResetDBClusterParameterGroup = 'ResetDBClusterParameterGroup' }

	export enum GET_ResetDBParameterGroupAction { ResetDBParameterGroup = 'ResetDBParameterGroup' }

	export interface GET_RestoreDBClusterFromSnapshotServerlessV2ScalingConfiguration {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}
	export interface GET_RestoreDBClusterFromSnapshotServerlessV2ScalingConfigurationFormProperties {
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateGET_RestoreDBClusterFromSnapshotServerlessV2ScalingConfigurationFormGroup() {
		return new FormGroup<GET_RestoreDBClusterFromSnapshotServerlessV2ScalingConfigurationFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_RestoreDBClusterFromSnapshotAction { RestoreDBClusterFromSnapshot = 'RestoreDBClusterFromSnapshot' }

	export interface GET_RestoreDBClusterToPointInTimeServerlessV2ScalingConfiguration {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}
	export interface GET_RestoreDBClusterToPointInTimeServerlessV2ScalingConfigurationFormProperties {
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateGET_RestoreDBClusterToPointInTimeServerlessV2ScalingConfigurationFormGroup() {
		return new FormGroup<GET_RestoreDBClusterToPointInTimeServerlessV2ScalingConfigurationFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_RestoreDBClusterToPointInTimeAction { RestoreDBClusterToPointInTime = 'RestoreDBClusterToPointInTime' }

	export enum GET_StartDBClusterAction { StartDBCluster = 'StartDBCluster' }

	export enum GET_StopDBClusterAction { StopDBCluster = 'StopDBCluster' }

}

