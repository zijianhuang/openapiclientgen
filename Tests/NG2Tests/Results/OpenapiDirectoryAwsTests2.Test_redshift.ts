import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptReservedNodeExchangeOutputMessage {

		/** Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. */
		ExchangedReservedNode?: ReservedNode;
	}
	export interface AcceptReservedNodeExchangeOutputMessageFormProperties {
	}
	export function CreateAcceptReservedNodeExchangeOutputMessageFormGroup() {
		return new FormGroup<AcceptReservedNodeExchangeOutputMessageFormProperties>({
		});

	}


	/** Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.  */
	export interface ReservedNode {
		ReservedNodeId?: string | null;
		ReservedNodeOfferingId?: string | null;
		NodeType?: string | null;
		StartTime?: Date | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		NodeCount?: number | null;
		State?: string | null;
		OfferingType?: string | null;
		RecurringCharges?: Array<RecurringCharge>;
		ReservedNodeOfferingType?: ReservedNodeReservedNodeOfferingType | null;
	}

	/** Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.  */
	export interface ReservedNodeFormProperties {
		ReservedNodeId: FormControl<string | null | undefined>,
		ReservedNodeOfferingId: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		NodeCount: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		ReservedNodeOfferingType: FormControl<ReservedNodeReservedNodeOfferingType | null | undefined>,
	}
	export function CreateReservedNodeFormGroup() {
		return new FormGroup<ReservedNodeFormProperties>({
			ReservedNodeId: new FormControl<string | null | undefined>(undefined),
			ReservedNodeOfferingId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			NodeCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			ReservedNodeOfferingType: new FormControl<ReservedNodeReservedNodeOfferingType | null | undefined>(undefined),
		});

	}


	/** Describes a recurring charge. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string | null;
	}

	/** Describes a recurring charge. */
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

	export enum ReservedNodeReservedNodeOfferingType { Regular = 0, Upgradable = 1 }

	export interface ReservedNodeNotFoundFault {
	}
	export interface ReservedNodeNotFoundFaultFormProperties {
	}
	export function CreateReservedNodeNotFoundFaultFormGroup() {
		return new FormGroup<ReservedNodeNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidReservedNodeStateFault {
	}
	export interface InvalidReservedNodeStateFaultFormProperties {
	}
	export function CreateInvalidReservedNodeStateFaultFormGroup() {
		return new FormGroup<InvalidReservedNodeStateFaultFormProperties>({
		});

	}

	export interface ReservedNodeAlreadyMigratedFault {
	}
	export interface ReservedNodeAlreadyMigratedFaultFormProperties {
	}
	export function CreateReservedNodeAlreadyMigratedFaultFormGroup() {
		return new FormGroup<ReservedNodeAlreadyMigratedFaultFormProperties>({
		});

	}

	export interface ReservedNodeOfferingNotFoundFault {
	}
	export interface ReservedNodeOfferingNotFoundFaultFormProperties {
	}
	export function CreateReservedNodeOfferingNotFoundFaultFormGroup() {
		return new FormGroup<ReservedNodeOfferingNotFoundFaultFormProperties>({
		});

	}

	export interface UnsupportedOperationFault {
	}
	export interface UnsupportedOperationFaultFormProperties {
	}
	export function CreateUnsupportedOperationFaultFormGroup() {
		return new FormGroup<UnsupportedOperationFaultFormProperties>({
		});

	}

	export interface DependentServiceUnavailableFault {
	}
	export interface DependentServiceUnavailableFaultFormProperties {
	}
	export function CreateDependentServiceUnavailableFaultFormGroup() {
		return new FormGroup<DependentServiceUnavailableFaultFormProperties>({
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

	export interface AuthorizeClusterSecurityGroupIngressResult {

		/** Describes a security group. */
		ClusterSecurityGroup?: ClusterSecurityGroup;
	}
	export interface AuthorizeClusterSecurityGroupIngressResultFormProperties {
	}
	export function CreateAuthorizeClusterSecurityGroupIngressResultFormGroup() {
		return new FormGroup<AuthorizeClusterSecurityGroupIngressResultFormProperties>({
		});

	}


	/** Describes a security group. */
	export interface ClusterSecurityGroup {
		ClusterSecurityGroupName?: string | null;
		Description?: string | null;
		EC2SecurityGroups?: Array<EC2SecurityGroup>;
		IPRanges?: Array<IPRange>;
		Tags?: Array<Tag>;
	}

	/** Describes a security group. */
	export interface ClusterSecurityGroupFormProperties {
		ClusterSecurityGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateClusterSecurityGroupFormGroup() {
		return new FormGroup<ClusterSecurityGroupFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon EC2 security group. */
	export interface EC2SecurityGroup {
		Status?: string | null;
		EC2SecurityGroupName?: string | null;
		EC2SecurityGroupOwnerId?: string | null;
		Tags?: Array<Tag>;
	}

	/** Describes an Amazon EC2 security group. */
	export interface EC2SecurityGroupFormProperties {
		Status: FormControl<string | null | undefined>,
		EC2SecurityGroupName: FormControl<string | null | undefined>,
		EC2SecurityGroupOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateEC2SecurityGroupFormGroup() {
		return new FormGroup<EC2SecurityGroupFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupName: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupOwnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag consisting of a name/value pair for a resource. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** A tag consisting of a name/value pair for a resource. */
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


	/** Describes an IP range used in a security group. */
	export interface IPRange {
		Status?: string | null;
		CIDRIP?: string | null;
		Tags?: Array<Tag>;
	}

	/** Describes an IP range used in a security group. */
	export interface IPRangeFormProperties {
		Status: FormControl<string | null | undefined>,
		CIDRIP: FormControl<string | null | undefined>,
	}
	export function CreateIPRangeFormGroup() {
		return new FormGroup<IPRangeFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			CIDRIP: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterSecurityGroupNotFoundFault {
	}
	export interface ClusterSecurityGroupNotFoundFaultFormProperties {
	}
	export function CreateClusterSecurityGroupNotFoundFaultFormGroup() {
		return new FormGroup<ClusterSecurityGroupNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidClusterSecurityGroupStateFault {
	}
	export interface InvalidClusterSecurityGroupStateFaultFormProperties {
	}
	export function CreateInvalidClusterSecurityGroupStateFaultFormGroup() {
		return new FormGroup<InvalidClusterSecurityGroupStateFaultFormProperties>({
		});

	}

	export interface AuthorizationAlreadyExistsFault {
	}
	export interface AuthorizationAlreadyExistsFaultFormProperties {
	}
	export function CreateAuthorizationAlreadyExistsFaultFormGroup() {
		return new FormGroup<AuthorizationAlreadyExistsFaultFormProperties>({
		});

	}

	export interface AuthorizationQuotaExceededFault {
	}
	export interface AuthorizationQuotaExceededFaultFormProperties {
	}
	export function CreateAuthorizationQuotaExceededFaultFormGroup() {
		return new FormGroup<AuthorizationQuotaExceededFaultFormProperties>({
		});

	}

	export interface AuthorizeSnapshotAccessResult {

		/** Describes a snapshot. */
		Snapshot?: Snapshot;
	}
	export interface AuthorizeSnapshotAccessResultFormProperties {
	}
	export function CreateAuthorizeSnapshotAccessResultFormGroup() {
		return new FormGroup<AuthorizeSnapshotAccessResultFormProperties>({
		});

	}


	/** Describes a snapshot. */
	export interface Snapshot {
		SnapshotIdentifier?: string | null;
		ClusterIdentifier?: string | null;
		SnapshotCreateTime?: Date | null;
		Status?: string | null;
		Port?: number | null;
		AvailabilityZone?: string | null;
		ClusterCreateTime?: Date | null;
		MasterUsername?: string | null;
		ClusterVersion?: string | null;
		SnapshotType?: string | null;
		NodeType?: string | null;
		NumberOfNodes?: number | null;
		DBName?: string | null;
		VpcId?: string | null;
		Encrypted?: boolean | null;
		KmsKeyId?: string | null;
		EncryptedWithHSM?: boolean | null;
		AccountsWithRestoreAccess?: Array<AccountWithRestoreAccess>;
		OwnerAccount?: string | null;
		TotalBackupSizeInMegaBytes?: number | null;
		ActualIncrementalBackupSizeInMegaBytes?: number | null;
		BackupProgressInMegaBytes?: number | null;
		CurrentBackupRateInMegaBytesPerSecond?: number | null;
		EstimatedSecondsToCompletion?: number | null;
		ElapsedTimeInSeconds?: number | null;
		SourceRegion?: string | null;
		Tags?: Array<Tag>;
		RestorableNodeTypes?: Array<string>;
		EnhancedVpcRouting?: boolean | null;
		MaintenanceTrackName?: string | null;
		ManualSnapshotRetentionPeriod?: number | null;
		ManualSnapshotRemainingDays?: number | null;
		SnapshotRetentionStartTime?: Date | null;
	}

	/** Describes a snapshot. */
	export interface SnapshotFormProperties {
		SnapshotIdentifier: FormControl<string | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		SnapshotCreateTime: FormControl<Date | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<Date | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		ClusterVersion: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		EncryptedWithHSM: FormControl<boolean | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
		TotalBackupSizeInMegaBytes: FormControl<number | null | undefined>,
		ActualIncrementalBackupSizeInMegaBytes: FormControl<number | null | undefined>,
		BackupProgressInMegaBytes: FormControl<number | null | undefined>,
		CurrentBackupRateInMegaBytesPerSecond: FormControl<number | null | undefined>,
		EstimatedSecondsToCompletion: FormControl<number | null | undefined>,
		ElapsedTimeInSeconds: FormControl<number | null | undefined>,
		SourceRegion: FormControl<string | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ManualSnapshotRemainingDays: FormControl<number | null | undefined>,
		SnapshotRetentionStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotCreateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<Date | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			EncryptedWithHSM: new FormControl<boolean | null | undefined>(undefined),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
			TotalBackupSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
			ActualIncrementalBackupSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
			BackupProgressInMegaBytes: new FormControl<number | null | undefined>(undefined),
			CurrentBackupRateInMegaBytesPerSecond: new FormControl<number | null | undefined>(undefined),
			EstimatedSecondsToCompletion: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			SourceRegion: new FormControl<string | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotRemainingDays: new FormControl<number | null | undefined>(undefined),
			SnapshotRetentionStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes an AWS customer account authorized to restore a snapshot. */
	export interface AccountWithRestoreAccess {
		AccountId?: string | null;
		AccountAlias?: string | null;
	}

	/** Describes an AWS customer account authorized to restore a snapshot. */
	export interface AccountWithRestoreAccessFormProperties {
		AccountId: FormControl<string | null | undefined>,
		AccountAlias: FormControl<string | null | undefined>,
	}
	export function CreateAccountWithRestoreAccessFormGroup() {
		return new FormGroup<AccountWithRestoreAccessFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			AccountAlias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterSnapshotNotFoundFault {
	}
	export interface ClusterSnapshotNotFoundFaultFormProperties {
	}
	export function CreateClusterSnapshotNotFoundFaultFormGroup() {
		return new FormGroup<ClusterSnapshotNotFoundFaultFormProperties>({
		});

	}

	export interface DependentServiceRequestThrottlingFault {
	}
	export interface DependentServiceRequestThrottlingFaultFormProperties {
	}
	export function CreateDependentServiceRequestThrottlingFaultFormGroup() {
		return new FormGroup<DependentServiceRequestThrottlingFaultFormProperties>({
		});

	}

	export interface InvalidClusterSnapshotStateFault {
	}
	export interface InvalidClusterSnapshotStateFaultFormProperties {
	}
	export function CreateInvalidClusterSnapshotStateFaultFormGroup() {
		return new FormGroup<InvalidClusterSnapshotStateFaultFormProperties>({
		});

	}

	export interface LimitExceededFault {
	}
	export interface LimitExceededFaultFormProperties {
	}
	export function CreateLimitExceededFaultFormGroup() {
		return new FormGroup<LimitExceededFaultFormProperties>({
		});

	}

	export interface BatchDeleteClusterSnapshotsResult {
		Resources?: Array<string>;
		Errors?: Array<SnapshotErrorMessage>;
	}
	export interface BatchDeleteClusterSnapshotsResultFormProperties {
	}
	export function CreateBatchDeleteClusterSnapshotsResultFormGroup() {
		return new FormGroup<BatchDeleteClusterSnapshotsResultFormProperties>({
		});

	}


	/** Describes the errors returned by a snapshot. */
	export interface SnapshotErrorMessage {
		SnapshotIdentifier?: string | null;
		SnapshotClusterIdentifier?: string | null;
		FailureCode?: string | null;
		FailureReason?: string | null;
	}

	/** Describes the errors returned by a snapshot. */
	export interface SnapshotErrorMessageFormProperties {
		SnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotClusterIdentifier: FormControl<string | null | undefined>,
		FailureCode: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotErrorMessageFormGroup() {
		return new FormGroup<SnapshotErrorMessageFormProperties>({
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			FailureCode: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DeleteClusterSnapshotMessage {

		/** Required */
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string | null;
	}

	/** <p/> */
	export interface DeleteClusterSnapshotMessageFormProperties {

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterSnapshotMessageFormGroup() {
		return new FormGroup<DeleteClusterSnapshotMessageFormProperties>({
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotClusterIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteRequestSizeExceededFault {
	}
	export interface BatchDeleteRequestSizeExceededFaultFormProperties {
	}
	export function CreateBatchDeleteRequestSizeExceededFaultFormGroup() {
		return new FormGroup<BatchDeleteRequestSizeExceededFaultFormProperties>({
		});

	}

	export interface BatchModifyClusterSnapshotsOutputMessage {
		Resources?: Array<string>;
		Errors?: Array<SnapshotErrorMessage>;
	}
	export interface BatchModifyClusterSnapshotsOutputMessageFormProperties {
	}
	export function CreateBatchModifyClusterSnapshotsOutputMessageFormGroup() {
		return new FormGroup<BatchModifyClusterSnapshotsOutputMessageFormProperties>({
		});

	}

	export interface InvalidRetentionPeriodFault {
	}
	export interface InvalidRetentionPeriodFaultFormProperties {
	}
	export function CreateInvalidRetentionPeriodFaultFormGroup() {
		return new FormGroup<InvalidRetentionPeriodFaultFormProperties>({
		});

	}

	export interface BatchModifyClusterSnapshotsLimitExceededFault {
	}
	export interface BatchModifyClusterSnapshotsLimitExceededFaultFormProperties {
	}
	export function CreateBatchModifyClusterSnapshotsLimitExceededFaultFormGroup() {
		return new FormGroup<BatchModifyClusterSnapshotsLimitExceededFaultFormProperties>({
		});

	}


	/** Describes the result of a cluster resize operation. */
	export interface ResizeProgressMessage {
		TargetNodeType?: string | null;
		TargetNumberOfNodes?: number | null;
		TargetClusterType?: string | null;
		Status?: string | null;
		ImportTablesCompleted?: Array<string>;
		ImportTablesInProgress?: Array<string>;
		ImportTablesNotStarted?: Array<string>;
		AvgResizeRateInMegaBytesPerSecond?: number | null;
		TotalResizeDataInMegaBytes?: number | null;
		ProgressInMegaBytes?: number | null;
		ElapsedTimeInSeconds?: number | null;
		EstimatedTimeToCompletionInSeconds?: number | null;
		ResizeType?: string | null;
		Message?: string | null;
		TargetEncryptionType?: string | null;
		DataTransferProgressPercent?: number | null;
	}

	/** Describes the result of a cluster resize operation. */
	export interface ResizeProgressMessageFormProperties {
		TargetNodeType: FormControl<string | null | undefined>,
		TargetNumberOfNodes: FormControl<number | null | undefined>,
		TargetClusterType: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		AvgResizeRateInMegaBytesPerSecond: FormControl<number | null | undefined>,
		TotalResizeDataInMegaBytes: FormControl<number | null | undefined>,
		ProgressInMegaBytes: FormControl<number | null | undefined>,
		ElapsedTimeInSeconds: FormControl<number | null | undefined>,
		EstimatedTimeToCompletionInSeconds: FormControl<number | null | undefined>,
		ResizeType: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		TargetEncryptionType: FormControl<string | null | undefined>,
		DataTransferProgressPercent: FormControl<number | null | undefined>,
	}
	export function CreateResizeProgressMessageFormGroup() {
		return new FormGroup<ResizeProgressMessageFormProperties>({
			TargetNodeType: new FormControl<string | null | undefined>(undefined),
			TargetNumberOfNodes: new FormControl<number | null | undefined>(undefined),
			TargetClusterType: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			AvgResizeRateInMegaBytesPerSecond: new FormControl<number | null | undefined>(undefined),
			TotalResizeDataInMegaBytes: new FormControl<number | null | undefined>(undefined),
			ProgressInMegaBytes: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			EstimatedTimeToCompletionInSeconds: new FormControl<number | null | undefined>(undefined),
			ResizeType: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			TargetEncryptionType: new FormControl<string | null | undefined>(undefined),
			DataTransferProgressPercent: new FormControl<number | null | undefined>(undefined),
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

	export interface ResizeNotFoundFault {
	}
	export interface ResizeNotFoundFaultFormProperties {
	}
	export function CreateResizeNotFoundFaultFormGroup() {
		return new FormGroup<ResizeNotFoundFaultFormProperties>({
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

	export interface CopyClusterSnapshotResult {

		/** Describes a snapshot. */
		Snapshot?: Snapshot;
	}
	export interface CopyClusterSnapshotResultFormProperties {
	}
	export function CreateCopyClusterSnapshotResultFormGroup() {
		return new FormGroup<CopyClusterSnapshotResultFormProperties>({
		});

	}

	export interface ClusterSnapshotAlreadyExistsFault {
	}
	export interface ClusterSnapshotAlreadyExistsFaultFormProperties {
	}
	export function CreateClusterSnapshotAlreadyExistsFaultFormGroup() {
		return new FormGroup<ClusterSnapshotAlreadyExistsFaultFormProperties>({
		});

	}

	export interface ClusterSnapshotQuotaExceededFault {
	}
	export interface ClusterSnapshotQuotaExceededFaultFormProperties {
	}
	export function CreateClusterSnapshotQuotaExceededFaultFormGroup() {
		return new FormGroup<ClusterSnapshotQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateClusterResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface CreateClusterResultFormProperties {
	}
	export function CreateCreateClusterResultFormGroup() {
		return new FormGroup<CreateClusterResultFormProperties>({
		});

	}


	/** Describes a cluster. */
	export interface Cluster {
		ClusterIdentifier?: string | null;
		NodeType?: string | null;
		ClusterStatus?: string | null;
		ClusterAvailabilityStatus?: string | null;
		ModifyStatus?: string | null;
		MasterUsername?: string | null;
		DBName?: string | null;

		/** Describes a connection endpoint. */
		Endpoint?: Endpoint;
		ClusterCreateTime?: Date | null;
		AutomatedSnapshotRetentionPeriod?: number | null;
		ManualSnapshotRetentionPeriod?: number | null;
		ClusterSecurityGroups?: Array<ClusterSecurityGroupMembership>;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		ClusterParameterGroups?: Array<ClusterParameterGroupStatus>;
		ClusterSubnetGroupName?: string | null;
		VpcId?: string | null;
		AvailabilityZone?: string | null;
		PreferredMaintenanceWindow?: string | null;

		/** Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied. */
		PendingModifiedValues?: PendingModifiedValues;
		ClusterVersion?: string | null;
		AllowVersionUpgrade?: boolean | null;
		NumberOfNodes?: number | null;
		PubliclyAccessible?: boolean | null;
		Encrypted?: boolean | null;

		/** Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot. */
		RestoreStatus?: RestoreStatus;

		/** Describes the status of a cluster while it is in the process of resizing with an incremental resize. */
		DataTransferProgress?: DataTransferProgress;

		/** Describes the status of changes to HSM settings. */
		HsmStatus?: HsmStatus;

		/** Returns the destination region and retention period that are configured for cross-region snapshot copy. */
		ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;
		ClusterPublicKey?: string | null;
		ClusterNodes?: Array<ClusterNode>;

		/** Describes the status of the elastic IP (EIP) address. */
		ElasticIpStatus?: ElasticIpStatus;
		ClusterRevisionNumber?: string | null;
		Tags?: Array<Tag>;
		KmsKeyId?: string | null;
		EnhancedVpcRouting?: boolean | null;
		IamRoles?: Array<ClusterIamRole>;
		PendingActions?: Array<string>;
		MaintenanceTrackName?: string | null;
		ElasticResizeNumberOfNodeOptions?: string | null;
		DeferredMaintenanceWindows?: Array<DeferredMaintenanceWindow>;
		SnapshotScheduleIdentifier?: string | null;
		SnapshotScheduleState?: ClusterSnapshotScheduleState | null;
		ExpectedNextSnapshotScheduleTime?: Date | null;
		ExpectedNextSnapshotScheduleTimeStatus?: string | null;
		NextMaintenanceWindowStartTime?: Date | null;

		/** Describes a resize operation. */
		ResizeInfo?: ResizeInfo;
	}

	/** Describes a cluster. */
	export interface ClusterFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		ClusterStatus: FormControl<string | null | undefined>,
		ClusterAvailabilityStatus: FormControl<string | null | undefined>,
		ModifyStatus: FormControl<string | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		ClusterCreateTime: FormControl<Date | null | undefined>,
		AutomatedSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		ClusterVersion: FormControl<string | null | undefined>,
		AllowVersionUpgrade: FormControl<boolean | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		ClusterPublicKey: FormControl<string | null | undefined>,
		ClusterRevisionNumber: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		ElasticResizeNumberOfNodeOptions: FormControl<string | null | undefined>,
		SnapshotScheduleIdentifier: FormControl<string | null | undefined>,
		SnapshotScheduleState: FormControl<ClusterSnapshotScheduleState | null | undefined>,
		ExpectedNextSnapshotScheduleTime: FormControl<Date | null | undefined>,
		ExpectedNextSnapshotScheduleTimeStatus: FormControl<string | null | undefined>,
		NextMaintenanceWindowStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			ClusterStatus: new FormControl<string | null | undefined>(undefined),
			ClusterAvailabilityStatus: new FormControl<string | null | undefined>(undefined),
			ModifyStatus: new FormControl<string | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			ClusterCreateTime: new FormControl<Date | null | undefined>(undefined),
			AutomatedSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			AllowVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			ClusterPublicKey: new FormControl<string | null | undefined>(undefined),
			ClusterRevisionNumber: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			ElasticResizeNumberOfNodeOptions: new FormControl<string | null | undefined>(undefined),
			SnapshotScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotScheduleState: new FormControl<ClusterSnapshotScheduleState | null | undefined>(undefined),
			ExpectedNextSnapshotScheduleTime: new FormControl<Date | null | undefined>(undefined),
			ExpectedNextSnapshotScheduleTimeStatus: new FormControl<string | null | undefined>(undefined),
			NextMaintenanceWindowStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes a connection endpoint. */
	export interface Endpoint {
		Address?: string | null;
		Port?: number | null;
	}

	/** Describes a connection endpoint. */
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


	/** Describes a cluster security group. */
	export interface ClusterSecurityGroupMembership {
		ClusterSecurityGroupName?: string | null;
		Status?: string | null;
	}

	/** Describes a cluster security group. */
	export interface ClusterSecurityGroupMembershipFormProperties {
		ClusterSecurityGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateClusterSecurityGroupMembershipFormGroup() {
		return new FormGroup<ClusterSecurityGroupMembershipFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the members of a VPC security group. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string | null;
		Status?: string | null;
	}

	/** Describes the members of a VPC security group. */
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


	/** Describes the status of a parameter group. */
	export interface ClusterParameterGroupStatus {
		ParameterGroupName?: string | null;
		ParameterApplyStatus?: string | null;
		ClusterParameterStatusList?: Array<ClusterParameterStatus>;
	}

	/** Describes the status of a parameter group. */
	export interface ClusterParameterGroupStatusFormProperties {
		ParameterGroupName: FormControl<string | null | undefined>,
		ParameterApplyStatus: FormControl<string | null | undefined>,
	}
	export function CreateClusterParameterGroupStatusFormGroup() {
		return new FormGroup<ClusterParameterGroupStatusFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of a parameter group. */
	export interface ClusterParameterStatus {
		ParameterName?: string | null;
		ParameterApplyStatus?: string | null;
		ParameterApplyErrorDescription?: string | null;
	}

	/** Describes the status of a parameter group. */
	export interface ClusterParameterStatusFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterApplyStatus: FormControl<string | null | undefined>,
		ParameterApplyErrorDescription: FormControl<string | null | undefined>,
	}
	export function CreateClusterParameterStatusFormGroup() {
		return new FormGroup<ClusterParameterStatusFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
			ParameterApplyErrorDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied. */
	export interface PendingModifiedValues {
		MasterUserPassword?: string | null;
		NodeType?: string | null;
		NumberOfNodes?: number | null;
		ClusterType?: string | null;
		ClusterVersion?: string | null;
		AutomatedSnapshotRetentionPeriod?: number | null;
		ClusterIdentifier?: string | null;
		PubliclyAccessible?: boolean | null;
		EnhancedVpcRouting?: boolean | null;
		MaintenanceTrackName?: string | null;
		EncryptionType?: string | null;
	}

	/** Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied. */
	export interface PendingModifiedValuesFormProperties {
		MasterUserPassword: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		ClusterType: FormControl<string | null | undefined>,
		ClusterVersion: FormControl<string | null | undefined>,
		AutomatedSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		EncryptionType: FormControl<string | null | undefined>,
	}
	export function CreatePendingModifiedValuesFormGroup() {
		return new FormGroup<PendingModifiedValuesFormProperties>({
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			ClusterType: new FormControl<string | null | undefined>(undefined),
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			AutomatedSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			EncryptionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot. */
	export interface RestoreStatus {
		Status?: string | null;
		CurrentRestoreRateInMegaBytesPerSecond?: number | null;
		SnapshotSizeInMegaBytes?: number | null;
		ProgressInMegaBytes?: number | null;
		ElapsedTimeInSeconds?: number | null;
		EstimatedTimeToCompletionInSeconds?: number | null;
	}

	/** Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot. */
	export interface RestoreStatusFormProperties {
		Status: FormControl<string | null | undefined>,
		CurrentRestoreRateInMegaBytesPerSecond: FormControl<number | null | undefined>,
		SnapshotSizeInMegaBytes: FormControl<number | null | undefined>,
		ProgressInMegaBytes: FormControl<number | null | undefined>,
		ElapsedTimeInSeconds: FormControl<number | null | undefined>,
		EstimatedTimeToCompletionInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRestoreStatusFormGroup() {
		return new FormGroup<RestoreStatusFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			CurrentRestoreRateInMegaBytesPerSecond: new FormControl<number | null | undefined>(undefined),
			SnapshotSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
			ProgressInMegaBytes: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			EstimatedTimeToCompletionInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the status of a cluster while it is in the process of resizing with an incremental resize. */
	export interface DataTransferProgress {
		Status?: string | null;
		CurrentRateInMegaBytesPerSecond?: number | null;
		TotalDataInMegaBytes?: number | null;
		DataTransferredInMegaBytes?: number | null;
		EstimatedTimeToCompletionInSeconds?: number | null;
		ElapsedTimeInSeconds?: number | null;
	}

	/** Describes the status of a cluster while it is in the process of resizing with an incremental resize. */
	export interface DataTransferProgressFormProperties {
		Status: FormControl<string | null | undefined>,
		CurrentRateInMegaBytesPerSecond: FormControl<number | null | undefined>,
		TotalDataInMegaBytes: FormControl<number | null | undefined>,
		DataTransferredInMegaBytes: FormControl<number | null | undefined>,
		EstimatedTimeToCompletionInSeconds: FormControl<number | null | undefined>,
		ElapsedTimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDataTransferProgressFormGroup() {
		return new FormGroup<DataTransferProgressFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			CurrentRateInMegaBytesPerSecond: new FormControl<number | null | undefined>(undefined),
			TotalDataInMegaBytes: new FormControl<number | null | undefined>(undefined),
			DataTransferredInMegaBytes: new FormControl<number | null | undefined>(undefined),
			EstimatedTimeToCompletionInSeconds: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the status of changes to HSM settings. */
	export interface HsmStatus {
		HsmClientCertificateIdentifier?: string | null;
		HsmConfigurationIdentifier?: string | null;
		Status?: string | null;
	}

	/** Describes the status of changes to HSM settings. */
	export interface HsmStatusFormProperties {
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateHsmStatusFormGroup() {
		return new FormGroup<HsmStatusFormProperties>({
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the destination region and retention period that are configured for cross-region snapshot copy. */
	export interface ClusterSnapshotCopyStatus {
		DestinationRegion?: string | null;
		RetentionPeriod?: number | null;
		ManualSnapshotRetentionPeriod?: number | null;
		SnapshotCopyGrantName?: string | null;
	}

	/** Returns the destination region and retention period that are configured for cross-region snapshot copy. */
	export interface ClusterSnapshotCopyStatusFormProperties {
		DestinationRegion: FormControl<string | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		SnapshotCopyGrantName: FormControl<string | null | undefined>,
	}
	export function CreateClusterSnapshotCopyStatusFormGroup() {
		return new FormGroup<ClusterSnapshotCopyStatusFormProperties>({
			DestinationRegion: new FormControl<string | null | undefined>(undefined),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			SnapshotCopyGrantName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The identifier of a node in a cluster. */
	export interface ClusterNode {
		NodeRole?: string | null;
		PrivateIPAddress?: string | null;
		PublicIPAddress?: string | null;
	}

	/** The identifier of a node in a cluster. */
	export interface ClusterNodeFormProperties {
		NodeRole: FormControl<string | null | undefined>,
		PrivateIPAddress: FormControl<string | null | undefined>,
		PublicIPAddress: FormControl<string | null | undefined>,
	}
	export function CreateClusterNodeFormGroup() {
		return new FormGroup<ClusterNodeFormProperties>({
			NodeRole: new FormControl<string | null | undefined>(undefined),
			PrivateIPAddress: new FormControl<string | null | undefined>(undefined),
			PublicIPAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of the elastic IP (EIP) address. */
	export interface ElasticIpStatus {
		ElasticIp?: string | null;
		Status?: string | null;
	}

	/** Describes the status of the elastic IP (EIP) address. */
	export interface ElasticIpStatusFormProperties {
		ElasticIp: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateElasticIpStatusFormGroup() {
		return new FormGroup<ElasticIpStatusFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AWS Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other AWS services. */
	export interface ClusterIamRole {
		IamRoleArn?: string | null;
		ApplyStatus?: string | null;
	}

	/** An AWS Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other AWS services. */
	export interface ClusterIamRoleFormProperties {
		IamRoleArn: FormControl<string | null | undefined>,
		ApplyStatus: FormControl<string | null | undefined>,
	}
	export function CreateClusterIamRoleFormGroup() {
		return new FormGroup<ClusterIamRoleFormProperties>({
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ApplyStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a deferred maintenance window */
	export interface DeferredMaintenanceWindow {
		DeferMaintenanceIdentifier?: string | null;
		DeferMaintenanceStartTime?: Date | null;
		DeferMaintenanceEndTime?: Date | null;
	}

	/** Describes a deferred maintenance window */
	export interface DeferredMaintenanceWindowFormProperties {
		DeferMaintenanceIdentifier: FormControl<string | null | undefined>,
		DeferMaintenanceStartTime: FormControl<Date | null | undefined>,
		DeferMaintenanceEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeferredMaintenanceWindowFormGroup() {
		return new FormGroup<DeferredMaintenanceWindowFormProperties>({
			DeferMaintenanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DeferMaintenanceStartTime: new FormControl<Date | null | undefined>(undefined),
			DeferMaintenanceEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ClusterSnapshotScheduleState { MODIFYING = 0, ACTIVE = 1, FAILED = 2 }


	/** Describes a resize operation. */
	export interface ResizeInfo {
		ResizeType?: string | null;
		AllowCancelResize?: boolean | null;
	}

	/** Describes a resize operation. */
	export interface ResizeInfoFormProperties {
		ResizeType: FormControl<string | null | undefined>,
		AllowCancelResize: FormControl<boolean | null | undefined>,
	}
	export function CreateResizeInfoFormGroup() {
		return new FormGroup<ResizeInfoFormProperties>({
			ResizeType: new FormControl<string | null | undefined>(undefined),
			AllowCancelResize: new FormControl<boolean | null | undefined>(undefined),
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

	export interface InsufficientClusterCapacityFault {
	}
	export interface InsufficientClusterCapacityFaultFormProperties {
	}
	export function CreateInsufficientClusterCapacityFaultFormGroup() {
		return new FormGroup<InsufficientClusterCapacityFaultFormProperties>({
		});

	}

	export interface ClusterParameterGroupNotFoundFault {
	}
	export interface ClusterParameterGroupNotFoundFaultFormProperties {
	}
	export function CreateClusterParameterGroupNotFoundFaultFormGroup() {
		return new FormGroup<ClusterParameterGroupNotFoundFaultFormProperties>({
		});

	}

	export interface ClusterQuotaExceededFault {
	}
	export interface ClusterQuotaExceededFaultFormProperties {
	}
	export function CreateClusterQuotaExceededFaultFormGroup() {
		return new FormGroup<ClusterQuotaExceededFaultFormProperties>({
		});

	}

	export interface NumberOfNodesQuotaExceededFault {
	}
	export interface NumberOfNodesQuotaExceededFaultFormProperties {
	}
	export function CreateNumberOfNodesQuotaExceededFaultFormGroup() {
		return new FormGroup<NumberOfNodesQuotaExceededFaultFormProperties>({
		});

	}

	export interface NumberOfNodesPerClusterLimitExceededFault {
	}
	export interface NumberOfNodesPerClusterLimitExceededFaultFormProperties {
	}
	export function CreateNumberOfNodesPerClusterLimitExceededFaultFormGroup() {
		return new FormGroup<NumberOfNodesPerClusterLimitExceededFaultFormProperties>({
		});

	}

	export interface ClusterSubnetGroupNotFoundFault {
	}
	export interface ClusterSubnetGroupNotFoundFaultFormProperties {
	}
	export function CreateClusterSubnetGroupNotFoundFaultFormGroup() {
		return new FormGroup<ClusterSubnetGroupNotFoundFaultFormProperties>({
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

	export interface InvalidClusterSubnetGroupStateFault {
	}
	export interface InvalidClusterSubnetGroupStateFaultFormProperties {
	}
	export function CreateInvalidClusterSubnetGroupStateFaultFormGroup() {
		return new FormGroup<InvalidClusterSubnetGroupStateFaultFormProperties>({
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

	export interface UnauthorizedOperation {
	}
	export interface UnauthorizedOperationFormProperties {
	}
	export function CreateUnauthorizedOperationFormGroup() {
		return new FormGroup<UnauthorizedOperationFormProperties>({
		});

	}

	export interface HsmClientCertificateNotFoundFault {
	}
	export interface HsmClientCertificateNotFoundFaultFormProperties {
	}
	export function CreateHsmClientCertificateNotFoundFaultFormGroup() {
		return new FormGroup<HsmClientCertificateNotFoundFaultFormProperties>({
		});

	}

	export interface HsmConfigurationNotFoundFault {
	}
	export interface HsmConfigurationNotFoundFaultFormProperties {
	}
	export function CreateHsmConfigurationNotFoundFaultFormGroup() {
		return new FormGroup<HsmConfigurationNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidElasticIpFault {
	}
	export interface InvalidElasticIpFaultFormProperties {
	}
	export function CreateInvalidElasticIpFaultFormGroup() {
		return new FormGroup<InvalidElasticIpFaultFormProperties>({
		});

	}

	export interface TagLimitExceededFault {
	}
	export interface TagLimitExceededFaultFormProperties {
	}
	export function CreateTagLimitExceededFaultFormGroup() {
		return new FormGroup<TagLimitExceededFaultFormProperties>({
		});

	}

	export interface InvalidTagFault {
	}
	export interface InvalidTagFaultFormProperties {
	}
	export function CreateInvalidTagFaultFormGroup() {
		return new FormGroup<InvalidTagFaultFormProperties>({
		});

	}

	export interface InvalidClusterTrackFault {
	}
	export interface InvalidClusterTrackFaultFormProperties {
	}
	export function CreateInvalidClusterTrackFaultFormGroup() {
		return new FormGroup<InvalidClusterTrackFaultFormProperties>({
		});

	}

	export interface SnapshotScheduleNotFoundFault {
	}
	export interface SnapshotScheduleNotFoundFaultFormProperties {
	}
	export function CreateSnapshotScheduleNotFoundFaultFormGroup() {
		return new FormGroup<SnapshotScheduleNotFoundFaultFormProperties>({
		});

	}

	export interface CreateClusterParameterGroupResult {

		/** Describes a parameter group. */
		ClusterParameterGroup?: ClusterParameterGroup;
	}
	export interface CreateClusterParameterGroupResultFormProperties {
	}
	export function CreateCreateClusterParameterGroupResultFormGroup() {
		return new FormGroup<CreateClusterParameterGroupResultFormProperties>({
		});

	}


	/** Describes a parameter group. */
	export interface ClusterParameterGroup {
		ParameterGroupName?: string | null;
		ParameterGroupFamily?: string | null;
		Description?: string | null;
		Tags?: Array<Tag>;
	}

	/** Describes a parameter group. */
	export interface ClusterParameterGroupFormProperties {
		ParameterGroupName: FormControl<string | null | undefined>,
		ParameterGroupFamily: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateClusterParameterGroupFormGroup() {
		return new FormGroup<ClusterParameterGroupFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterParameterGroupQuotaExceededFault {
	}
	export interface ClusterParameterGroupQuotaExceededFaultFormProperties {
	}
	export function CreateClusterParameterGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<ClusterParameterGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface ClusterParameterGroupAlreadyExistsFault {
	}
	export interface ClusterParameterGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateClusterParameterGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<ClusterParameterGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface CreateClusterSecurityGroupResult {

		/** Describes a security group. */
		ClusterSecurityGroup?: ClusterSecurityGroup;
	}
	export interface CreateClusterSecurityGroupResultFormProperties {
	}
	export function CreateCreateClusterSecurityGroupResultFormGroup() {
		return new FormGroup<CreateClusterSecurityGroupResultFormProperties>({
		});

	}

	export interface ClusterSecurityGroupAlreadyExistsFault {
	}
	export interface ClusterSecurityGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateClusterSecurityGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<ClusterSecurityGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface ClusterSecurityGroupQuotaExceededFault {
	}
	export interface ClusterSecurityGroupQuotaExceededFaultFormProperties {
	}
	export function CreateClusterSecurityGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<ClusterSecurityGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateClusterSnapshotResult {

		/** Describes a snapshot. */
		Snapshot?: Snapshot;
	}
	export interface CreateClusterSnapshotResultFormProperties {
	}
	export function CreateCreateClusterSnapshotResultFormGroup() {
		return new FormGroup<CreateClusterSnapshotResultFormProperties>({
		});

	}

	export interface CreateClusterSubnetGroupResult {

		/** Describes a subnet group. */
		ClusterSubnetGroup?: ClusterSubnetGroup;
	}
	export interface CreateClusterSubnetGroupResultFormProperties {
	}
	export function CreateCreateClusterSubnetGroupResultFormGroup() {
		return new FormGroup<CreateClusterSubnetGroupResultFormProperties>({
		});

	}


	/** Describes a subnet group. */
	export interface ClusterSubnetGroup {
		ClusterSubnetGroupName?: string | null;
		Description?: string | null;
		VpcId?: string | null;
		SubnetGroupStatus?: string | null;
		Subnets?: Array<Subnet>;
		Tags?: Array<Tag>;
	}

	/** Describes a subnet group. */
	export interface ClusterSubnetGroupFormProperties {
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetGroupStatus: FormControl<string | null | undefined>,
	}
	export function CreateClusterSubnetGroupFormGroup() {
		return new FormGroup<ClusterSubnetGroupFormProperties>({
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetGroupStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a subnet. */
	export interface Subnet {
		SubnetIdentifier?: string | null;

		/** Describes an availability zone. */
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string | null;
	}

	/** Describes a subnet. */
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


	/** Describes an availability zone. */
	export interface AvailabilityZone {
		Name?: string | null;
		SupportedPlatforms?: Array<SupportedPlatform>;
	}

	/** Describes an availability zone. */
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of supported platforms for orderable clusters. */
	export interface SupportedPlatform {
		Name?: string | null;
	}

	/** A list of supported platforms for orderable clusters. */
	export interface SupportedPlatformFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSupportedPlatformFormGroup() {
		return new FormGroup<SupportedPlatformFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterSubnetGroupAlreadyExistsFault {
	}
	export interface ClusterSubnetGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateClusterSubnetGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<ClusterSubnetGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface ClusterSubnetGroupQuotaExceededFault {
	}
	export interface ClusterSubnetGroupQuotaExceededFaultFormProperties {
	}
	export function CreateClusterSubnetGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<ClusterSubnetGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface ClusterSubnetQuotaExceededFault {
	}
	export interface ClusterSubnetQuotaExceededFaultFormProperties {
	}
	export function CreateClusterSubnetQuotaExceededFaultFormGroup() {
		return new FormGroup<ClusterSubnetQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateEventSubscriptionResult {

		/** Describes event subscriptions. */
		EventSubscription?: EventSubscription;
	}
	export interface CreateEventSubscriptionResultFormProperties {
	}
	export function CreateCreateEventSubscriptionResultFormGroup() {
		return new FormGroup<CreateEventSubscriptionResultFormProperties>({
		});

	}


	/** Describes event subscriptions. */
	export interface EventSubscription {
		CustomerAwsId?: string | null;
		CustSubscriptionId?: string | null;
		SnsTopicArn?: string | null;
		Status?: string | null;
		SubscriptionCreationTime?: Date | null;
		SourceType?: string | null;
		SourceIdsList?: Array<string>;
		EventCategoriesList?: Array<string>;
		Severity?: string | null;
		Enabled?: boolean | null;
		Tags?: Array<Tag>;
	}

	/** Describes event subscriptions. */
	export interface EventSubscriptionFormProperties {
		CustomerAwsId: FormControl<string | null | undefined>,
		CustSubscriptionId: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubscriptionCreationTime: FormControl<Date | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			CustomerAwsId: new FormControl<string | null | undefined>(undefined),
			CustSubscriptionId: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubscriptionCreationTime: new FormControl<Date | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
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

	export interface SubscriptionEventIdNotFoundFault {
	}
	export interface SubscriptionEventIdNotFoundFaultFormProperties {
	}
	export function CreateSubscriptionEventIdNotFoundFaultFormGroup() {
		return new FormGroup<SubscriptionEventIdNotFoundFaultFormProperties>({
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

	export interface SubscriptionSeverityNotFoundFault {
	}
	export interface SubscriptionSeverityNotFoundFaultFormProperties {
	}
	export function CreateSubscriptionSeverityNotFoundFaultFormGroup() {
		return new FormGroup<SubscriptionSeverityNotFoundFaultFormProperties>({
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

	export interface CreateHsmClientCertificateResult {

		/** Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files. */
		HsmClientCertificate?: HsmClientCertificate;
	}
	export interface CreateHsmClientCertificateResultFormProperties {
	}
	export function CreateCreateHsmClientCertificateResultFormGroup() {
		return new FormGroup<CreateHsmClientCertificateResultFormProperties>({
		});

	}


	/** Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files. */
	export interface HsmClientCertificate {
		HsmClientCertificateIdentifier?: string | null;
		HsmClientCertificatePublicKey?: string | null;
		Tags?: Array<Tag>;
	}

	/** Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files. */
	export interface HsmClientCertificateFormProperties {
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
		HsmClientCertificatePublicKey: FormControl<string | null | undefined>,
	}
	export function CreateHsmClientCertificateFormGroup() {
		return new FormGroup<HsmClientCertificateFormProperties>({
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			HsmClientCertificatePublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HsmClientCertificateAlreadyExistsFault {
	}
	export interface HsmClientCertificateAlreadyExistsFaultFormProperties {
	}
	export function CreateHsmClientCertificateAlreadyExistsFaultFormGroup() {
		return new FormGroup<HsmClientCertificateAlreadyExistsFaultFormProperties>({
		});

	}

	export interface HsmClientCertificateQuotaExceededFault {
	}
	export interface HsmClientCertificateQuotaExceededFaultFormProperties {
	}
	export function CreateHsmClientCertificateQuotaExceededFaultFormGroup() {
		return new FormGroup<HsmClientCertificateQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateHsmConfigurationResult {

		/** Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys. */
		HsmConfiguration?: HsmConfiguration;
	}
	export interface CreateHsmConfigurationResultFormProperties {
	}
	export function CreateCreateHsmConfigurationResultFormGroup() {
		return new FormGroup<CreateHsmConfigurationResultFormProperties>({
		});

	}


	/** Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys. */
	export interface HsmConfiguration {
		HsmConfigurationIdentifier?: string | null;
		Description?: string | null;
		HsmIpAddress?: string | null;
		HsmPartitionName?: string | null;
		Tags?: Array<Tag>;
	}

	/** Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys. */
	export interface HsmConfigurationFormProperties {
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HsmIpAddress: FormControl<string | null | undefined>,
		HsmPartitionName: FormControl<string | null | undefined>,
	}
	export function CreateHsmConfigurationFormGroup() {
		return new FormGroup<HsmConfigurationFormProperties>({
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HsmIpAddress: new FormControl<string | null | undefined>(undefined),
			HsmPartitionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HsmConfigurationAlreadyExistsFault {
	}
	export interface HsmConfigurationAlreadyExistsFaultFormProperties {
	}
	export function CreateHsmConfigurationAlreadyExistsFaultFormGroup() {
		return new FormGroup<HsmConfigurationAlreadyExistsFaultFormProperties>({
		});

	}

	export interface HsmConfigurationQuotaExceededFault {
	}
	export interface HsmConfigurationQuotaExceededFaultFormProperties {
	}
	export function CreateHsmConfigurationQuotaExceededFaultFormGroup() {
		return new FormGroup<HsmConfigurationQuotaExceededFaultFormProperties>({
		});

	}


	/** Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>.  */
	export interface ScheduledAction {
		ScheduledActionName?: string | null;

		/** The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. */
		TargetAction?: ScheduledActionType;
		Schedule?: string | null;
		IamRole?: string | null;
		ScheduledActionDescription?: string | null;
		State?: ScheduledActionState | null;
		NextInvocations?: Array<string>;
		StartTime?: Date | null;
		EndTime?: Date | null;
	}

	/** Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>.  */
	export interface ScheduledActionFormProperties {
		ScheduledActionName: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		IamRole: FormControl<string | null | undefined>,
		ScheduledActionDescription: FormControl<string | null | undefined>,
		State: FormControl<ScheduledActionState | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledActionFormGroup() {
		return new FormGroup<ScheduledActionFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			IamRole: new FormControl<string | null | undefined>(undefined),
			ScheduledActionDescription: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ScheduledActionState | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.  */
	export interface ScheduledActionType {
		ResizeCluster?: ResizeClusterMessage;
		PauseCluster?: PauseClusterMessage;
		ResumeCluster?: ResumeClusterMessage;
	}

	/** The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.  */
	export interface ScheduledActionTypeFormProperties {
	}
	export function CreateScheduledActionTypeFormGroup() {
		return new FormGroup<ScheduledActionTypeFormProperties>({
		});

	}

	export interface ResizeClusterMessage {

		/** Required */
		ClusterIdentifier: string;
		ClusterType?: string | null;
		NodeType?: string | null;
		NumberOfNodes?: number | null;
		Classic?: boolean | null;
	}
	export interface ResizeClusterMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		ClusterType: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		Classic: FormControl<boolean | null | undefined>,
	}
	export function CreateResizeClusterMessageFormGroup() {
		return new FormGroup<ResizeClusterMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClusterType: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			Classic: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PauseClusterMessage {

		/** Required */
		ClusterIdentifier: string;
	}
	export interface PauseClusterMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreatePauseClusterMessageFormGroup() {
		return new FormGroup<PauseClusterMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResumeClusterMessage {

		/** Required */
		ClusterIdentifier: string;
	}
	export interface ResumeClusterMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateResumeClusterMessageFormGroup() {
		return new FormGroup<ResumeClusterMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduledActionState { ACTIVE = 0, DISABLED = 1 }

	export interface ScheduledActionAlreadyExistsFault {
	}
	export interface ScheduledActionAlreadyExistsFaultFormProperties {
	}
	export function CreateScheduledActionAlreadyExistsFaultFormGroup() {
		return new FormGroup<ScheduledActionAlreadyExistsFaultFormProperties>({
		});

	}

	export interface ScheduledActionQuotaExceededFault {
	}
	export interface ScheduledActionQuotaExceededFaultFormProperties {
	}
	export function CreateScheduledActionQuotaExceededFaultFormGroup() {
		return new FormGroup<ScheduledActionQuotaExceededFaultFormProperties>({
		});

	}

	export interface ScheduledActionTypeUnsupportedFault {
	}
	export interface ScheduledActionTypeUnsupportedFaultFormProperties {
	}
	export function CreateScheduledActionTypeUnsupportedFaultFormGroup() {
		return new FormGroup<ScheduledActionTypeUnsupportedFaultFormProperties>({
		});

	}

	export interface InvalidScheduleFault {
	}
	export interface InvalidScheduleFaultFormProperties {
	}
	export function CreateInvalidScheduleFaultFormGroup() {
		return new FormGroup<InvalidScheduleFaultFormProperties>({
		});

	}

	export interface InvalidScheduledActionFault {
	}
	export interface InvalidScheduledActionFaultFormProperties {
	}
	export function CreateInvalidScheduledActionFaultFormGroup() {
		return new FormGroup<InvalidScheduledActionFaultFormProperties>({
		});

	}

	export interface CreateSnapshotCopyGrantResult {

		/** <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> */
		SnapshotCopyGrant?: SnapshotCopyGrant;
	}
	export interface CreateSnapshotCopyGrantResultFormProperties {
	}
	export function CreateCreateSnapshotCopyGrantResultFormGroup() {
		return new FormGroup<CreateSnapshotCopyGrantResultFormProperties>({
		});

	}


	/** <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> */
	export interface SnapshotCopyGrant {
		SnapshotCopyGrantName?: string | null;
		KmsKeyId?: string | null;
		Tags?: Array<Tag>;
	}

	/** <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> */
	export interface SnapshotCopyGrantFormProperties {
		SnapshotCopyGrantName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotCopyGrantFormGroup() {
		return new FormGroup<SnapshotCopyGrantFormProperties>({
			SnapshotCopyGrantName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SnapshotCopyGrantAlreadyExistsFault {
	}
	export interface SnapshotCopyGrantAlreadyExistsFaultFormProperties {
	}
	export function CreateSnapshotCopyGrantAlreadyExistsFaultFormGroup() {
		return new FormGroup<SnapshotCopyGrantAlreadyExistsFaultFormProperties>({
		});

	}

	export interface SnapshotCopyGrantQuotaExceededFault {
	}
	export interface SnapshotCopyGrantQuotaExceededFaultFormProperties {
	}
	export function CreateSnapshotCopyGrantQuotaExceededFaultFormGroup() {
		return new FormGroup<SnapshotCopyGrantQuotaExceededFaultFormProperties>({
		});

	}


	/** Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.  */
	export interface SnapshotSchedule {
		ScheduleDefinitions?: Array<string>;
		ScheduleIdentifier?: string | null;
		ScheduleDescription?: string | null;
		Tags?: Array<Tag>;
		NextInvocations?: Array<string>;
		AssociatedClusterCount?: number | null;
		AssociatedClusters?: Array<ClusterAssociatedToSchedule>;
	}

	/** Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.  */
	export interface SnapshotScheduleFormProperties {
		ScheduleIdentifier: FormControl<string | null | undefined>,
		ScheduleDescription: FormControl<string | null | undefined>,
		AssociatedClusterCount: FormControl<number | null | undefined>,
	}
	export function CreateSnapshotScheduleFormGroup() {
		return new FormGroup<SnapshotScheduleFormProperties>({
			ScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
			ScheduleDescription: new FormControl<string | null | undefined>(undefined),
			AssociatedClusterCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ClusterAssociatedToSchedule {
		ClusterIdentifier?: string | null;
		ScheduleAssociationState?: ClusterSnapshotScheduleState | null;
	}

	/** <p/> */
	export interface ClusterAssociatedToScheduleFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		ScheduleAssociationState: FormControl<ClusterSnapshotScheduleState | null | undefined>,
	}
	export function CreateClusterAssociatedToScheduleFormGroup() {
		return new FormGroup<ClusterAssociatedToScheduleFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ScheduleAssociationState: new FormControl<ClusterSnapshotScheduleState | null | undefined>(undefined),
		});

	}

	export interface SnapshotScheduleAlreadyExistsFault {
	}
	export interface SnapshotScheduleAlreadyExistsFaultFormProperties {
	}
	export function CreateSnapshotScheduleAlreadyExistsFaultFormGroup() {
		return new FormGroup<SnapshotScheduleAlreadyExistsFaultFormProperties>({
		});

	}

	export interface SnapshotScheduleQuotaExceededFault {
	}
	export interface SnapshotScheduleQuotaExceededFaultFormProperties {
	}
	export function CreateSnapshotScheduleQuotaExceededFaultFormGroup() {
		return new FormGroup<SnapshotScheduleQuotaExceededFaultFormProperties>({
		});

	}

	export interface ScheduleDefinitionTypeUnsupportedFault {
	}
	export interface ScheduleDefinitionTypeUnsupportedFaultFormProperties {
	}
	export function CreateScheduleDefinitionTypeUnsupportedFaultFormGroup() {
		return new FormGroup<ScheduleDefinitionTypeUnsupportedFaultFormProperties>({
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


	/** Describes a usage limit object for a cluster.  */
	export interface UsageLimit {
		UsageLimitId?: string | null;
		ClusterIdentifier?: string | null;
		FeatureType?: UsageLimitFeatureType | null;
		LimitType?: UsageLimitLimitType | null;
		Amount?: number | null;
		Period?: UsageLimitPeriod | null;
		BreachAction?: UsageLimitBreachAction | null;
		Tags?: Array<Tag>;
	}

	/** Describes a usage limit object for a cluster.  */
	export interface UsageLimitFormProperties {
		UsageLimitId: FormControl<string | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		FeatureType: FormControl<UsageLimitFeatureType | null | undefined>,
		LimitType: FormControl<UsageLimitLimitType | null | undefined>,
		Amount: FormControl<number | null | undefined>,
		Period: FormControl<UsageLimitPeriod | null | undefined>,
		BreachAction: FormControl<UsageLimitBreachAction | null | undefined>,
	}
	export function CreateUsageLimitFormGroup() {
		return new FormGroup<UsageLimitFormProperties>({
			UsageLimitId: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			FeatureType: new FormControl<UsageLimitFeatureType | null | undefined>(undefined),
			LimitType: new FormControl<UsageLimitLimitType | null | undefined>(undefined),
			Amount: new FormControl<number | null | undefined>(undefined),
			Period: new FormControl<UsageLimitPeriod | null | undefined>(undefined),
			BreachAction: new FormControl<UsageLimitBreachAction | null | undefined>(undefined),
		});

	}

	export enum UsageLimitFeatureType { spectrum = 0, 'concurrency-scaling' = 1 }

	export enum UsageLimitLimitType { time = 0, 'data-scanned' = 1 }

	export enum UsageLimitPeriod { daily = 0, weekly = 1, monthly = 2 }

	export enum UsageLimitBreachAction { log = 0, 'emit-metric' = 1, disable = 2 }

	export interface UsageLimitAlreadyExistsFault {
	}
	export interface UsageLimitAlreadyExistsFaultFormProperties {
	}
	export function CreateUsageLimitAlreadyExistsFaultFormGroup() {
		return new FormGroup<UsageLimitAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InvalidUsageLimitFault {
	}
	export interface InvalidUsageLimitFaultFormProperties {
	}
	export function CreateInvalidUsageLimitFaultFormGroup() {
		return new FormGroup<InvalidUsageLimitFaultFormProperties>({
		});

	}

	export interface DeleteClusterResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface DeleteClusterResultFormProperties {
	}
	export function CreateDeleteClusterResultFormGroup() {
		return new FormGroup<DeleteClusterResultFormProperties>({
		});

	}

	export interface InvalidClusterParameterGroupStateFault {
	}
	export interface InvalidClusterParameterGroupStateFaultFormProperties {
	}
	export function CreateInvalidClusterParameterGroupStateFaultFormGroup() {
		return new FormGroup<InvalidClusterParameterGroupStateFaultFormProperties>({
		});

	}

	export interface DeleteClusterSnapshotResult {

		/** Describes a snapshot. */
		Snapshot?: Snapshot;
	}
	export interface DeleteClusterSnapshotResultFormProperties {
	}
	export function CreateDeleteClusterSnapshotResultFormGroup() {
		return new FormGroup<DeleteClusterSnapshotResultFormProperties>({
		});

	}

	export interface InvalidClusterSubnetStateFault {
	}
	export interface InvalidClusterSubnetStateFaultFormProperties {
	}
	export function CreateInvalidClusterSubnetStateFaultFormGroup() {
		return new FormGroup<InvalidClusterSubnetStateFaultFormProperties>({
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

	export interface InvalidSubscriptionStateFault {
	}
	export interface InvalidSubscriptionStateFaultFormProperties {
	}
	export function CreateInvalidSubscriptionStateFaultFormGroup() {
		return new FormGroup<InvalidSubscriptionStateFaultFormProperties>({
		});

	}

	export interface InvalidHsmClientCertificateStateFault {
	}
	export interface InvalidHsmClientCertificateStateFaultFormProperties {
	}
	export function CreateInvalidHsmClientCertificateStateFaultFormGroup() {
		return new FormGroup<InvalidHsmClientCertificateStateFaultFormProperties>({
		});

	}

	export interface InvalidHsmConfigurationStateFault {
	}
	export interface InvalidHsmConfigurationStateFaultFormProperties {
	}
	export function CreateInvalidHsmConfigurationStateFaultFormGroup() {
		return new FormGroup<InvalidHsmConfigurationStateFaultFormProperties>({
		});

	}

	export interface ScheduledActionNotFoundFault {
	}
	export interface ScheduledActionNotFoundFaultFormProperties {
	}
	export function CreateScheduledActionNotFoundFaultFormGroup() {
		return new FormGroup<ScheduledActionNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidSnapshotCopyGrantStateFault {
	}
	export interface InvalidSnapshotCopyGrantStateFaultFormProperties {
	}
	export function CreateInvalidSnapshotCopyGrantStateFaultFormGroup() {
		return new FormGroup<InvalidSnapshotCopyGrantStateFaultFormProperties>({
		});

	}

	export interface SnapshotCopyGrantNotFoundFault {
	}
	export interface SnapshotCopyGrantNotFoundFaultFormProperties {
	}
	export function CreateSnapshotCopyGrantNotFoundFaultFormGroup() {
		return new FormGroup<SnapshotCopyGrantNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidClusterSnapshotScheduleStateFault {
	}
	export interface InvalidClusterSnapshotScheduleStateFaultFormProperties {
	}
	export function CreateInvalidClusterSnapshotScheduleStateFaultFormGroup() {
		return new FormGroup<InvalidClusterSnapshotScheduleStateFaultFormProperties>({
		});

	}

	export interface UsageLimitNotFoundFault {
	}
	export interface UsageLimitNotFoundFaultFormProperties {
	}
	export function CreateUsageLimitNotFoundFaultFormGroup() {
		return new FormGroup<UsageLimitNotFoundFaultFormProperties>({
		});

	}

	export interface AccountAttributeList {
		AccountAttributes?: Array<AccountAttribute>;
	}
	export interface AccountAttributeListFormProperties {
	}
	export function CreateAccountAttributeListFormGroup() {
		return new FormGroup<AccountAttributeListFormProperties>({
		});

	}


	/** A name value pair that describes an aspect of an account.  */
	export interface AccountAttribute {
		AttributeName?: string | null;
		AttributeValues?: Array<AttributeValueTarget>;
	}

	/** A name value pair that describes an aspect of an account.  */
	export interface AccountAttributeFormProperties {
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateAccountAttributeFormGroup() {
		return new FormGroup<AccountAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an attribute value. */
	export interface AttributeValueTarget {
		AttributeValue?: string | null;
	}

	/** Describes an attribute value. */
	export interface AttributeValueTargetFormProperties {
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateAttributeValueTargetFormGroup() {
		return new FormGroup<AttributeValueTargetFormProperties>({
			AttributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterDbRevisionsMessage {
		Marker?: string | null;
		ClusterDbRevisions?: Array<ClusterDbRevision>;
	}
	export interface ClusterDbRevisionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateClusterDbRevisionsMessageFormGroup() {
		return new FormGroup<ClusterDbRevisionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a <code>ClusterDbRevision</code>. */
	export interface ClusterDbRevision {
		ClusterIdentifier?: string | null;
		CurrentDatabaseRevision?: string | null;
		DatabaseRevisionReleaseDate?: Date | null;
		RevisionTargets?: Array<RevisionTarget>;
	}

	/** Describes a <code>ClusterDbRevision</code>. */
	export interface ClusterDbRevisionFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		CurrentDatabaseRevision: FormControl<string | null | undefined>,
		DatabaseRevisionReleaseDate: FormControl<Date | null | undefined>,
	}
	export function CreateClusterDbRevisionFormGroup() {
		return new FormGroup<ClusterDbRevisionFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			CurrentDatabaseRevision: new FormControl<string | null | undefined>(undefined),
			DatabaseRevisionReleaseDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes a <code>RevisionTarget</code>. */
	export interface RevisionTarget {
		DatabaseRevision?: string | null;
		Description?: string | null;
		DatabaseRevisionReleaseDate?: Date | null;
	}

	/** Describes a <code>RevisionTarget</code>. */
	export interface RevisionTargetFormProperties {
		DatabaseRevision: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DatabaseRevisionReleaseDate: FormControl<Date | null | undefined>,
	}
	export function CreateRevisionTargetFormGroup() {
		return new FormGroup<RevisionTargetFormProperties>({
			DatabaseRevision: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DatabaseRevisionReleaseDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the output from the <a>DescribeClusterParameterGroups</a> action.  */
	export interface ClusterParameterGroupsMessage {
		Marker?: string | null;
		ParameterGroups?: Array<ClusterParameterGroup>;
	}

	/** Contains the output from the <a>DescribeClusterParameterGroups</a> action.  */
	export interface ClusterParameterGroupsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateClusterParameterGroupsMessageFormGroup() {
		return new FormGroup<ClusterParameterGroupsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output from the <a>DescribeClusterParameters</a> action.  */
	export interface ClusterParameterGroupDetails {
		Parameters?: Array<Parameter>;
		Marker?: string | null;
	}

	/** Contains the output from the <a>DescribeClusterParameters</a> action.  */
	export interface ClusterParameterGroupDetailsFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateClusterParameterGroupDetailsFormGroup() {
		return new FormGroup<ClusterParameterGroupDetailsFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a parameter in a cluster parameter group. */
	export interface Parameter {
		ParameterName?: string | null;
		ParameterValue?: string | null;
		Description?: string | null;
		Source?: string | null;
		DataType?: string | null;
		AllowedValues?: string | null;
		ApplyType?: ParameterApplyType | null;
		IsModifiable?: boolean | null;
		MinimumEngineVersion?: string | null;
	}

	/** Describes a parameter in a cluster parameter group. */
	export interface ParameterFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		ApplyType: FormControl<ParameterApplyType | null | undefined>,
		IsModifiable: FormControl<boolean | null | undefined>,
		MinimumEngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			ApplyType: new FormControl<ParameterApplyType | null | undefined>(undefined),
			IsModifiable: new FormControl<boolean | null | undefined>(undefined),
			MinimumEngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterApplyType { static = 0, dynamic = 1 }


	/** <p/> */
	export interface ClusterSecurityGroupMessage {
		Marker?: string | null;
		ClusterSecurityGroups?: Array<ClusterSecurityGroup>;
	}

	/** <p/> */
	export interface ClusterSecurityGroupMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateClusterSecurityGroupMessageFormGroup() {
		return new FormGroup<ClusterSecurityGroupMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output from the <a>DescribeClusterSnapshots</a> action.  */
	export interface SnapshotMessage {
		Marker?: string | null;
		Snapshots?: Array<Snapshot>;
	}

	/** Contains the output from the <a>DescribeClusterSnapshots</a> action.  */
	export interface SnapshotMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotMessageFormGroup() {
		return new FormGroup<SnapshotMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a sorting entity */
	export interface SnapshotSortingEntity {

		/** Required */
		Attribute: SnapshotSortingEntityAttribute;
		SortOrder?: SnapshotSortingEntitySortOrder | null;
	}

	/** Describes a sorting entity */
	export interface SnapshotSortingEntityFormProperties {

		/** Required */
		Attribute: FormControl<SnapshotSortingEntityAttribute | null | undefined>,
		SortOrder: FormControl<SnapshotSortingEntitySortOrder | null | undefined>,
	}
	export function CreateSnapshotSortingEntityFormGroup() {
		return new FormGroup<SnapshotSortingEntityFormProperties>({
			Attribute: new FormControl<SnapshotSortingEntityAttribute | null | undefined>(undefined, [Validators.required]),
			SortOrder: new FormControl<SnapshotSortingEntitySortOrder | null | undefined>(undefined),
		});

	}

	export enum SnapshotSortingEntityAttribute { SOURCE_TYPE = 0, TOTAL_SIZE = 1, CREATE_TIME = 2 }

	export enum SnapshotSortingEntitySortOrder { ASC = 0, DESC = 1 }


	/** Contains the output from the <a>DescribeClusterSubnetGroups</a> action.  */
	export interface ClusterSubnetGroupMessage {
		Marker?: string | null;
		ClusterSubnetGroups?: Array<ClusterSubnetGroup>;
	}

	/** Contains the output from the <a>DescribeClusterSubnetGroups</a> action.  */
	export interface ClusterSubnetGroupMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateClusterSubnetGroupMessageFormGroup() {
		return new FormGroup<ClusterSubnetGroupMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrackListMessage {
		MaintenanceTracks?: Array<MaintenanceTrack>;
		Marker?: string | null;
	}
	export interface TrackListMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateTrackListMessageFormGroup() {
		return new FormGroup<TrackListMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release.  */
	export interface MaintenanceTrack {
		MaintenanceTrackName?: string | null;
		DatabaseVersion?: string | null;
		UpdateTargets?: Array<UpdateTarget>;
	}

	/** Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release.  */
	export interface MaintenanceTrackFormProperties {
		MaintenanceTrackName: FormControl<string | null | undefined>,
		DatabaseVersion: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceTrackFormGroup() {
		return new FormGroup<MaintenanceTrackFormProperties>({
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			DatabaseVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A maintenance track that you can switch the current track to. */
	export interface UpdateTarget {
		MaintenanceTrackName?: string | null;
		DatabaseVersion?: string | null;
		SupportedOperations?: Array<SupportedOperation>;
	}

	/** A maintenance track that you can switch the current track to. */
	export interface UpdateTargetFormProperties {
		MaintenanceTrackName: FormControl<string | null | undefined>,
		DatabaseVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTargetFormGroup() {
		return new FormGroup<UpdateTargetFormProperties>({
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			DatabaseVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the operations that are allowed on a maintenance track. */
	export interface SupportedOperation {
		OperationName?: string | null;
	}

	/** Describes the operations that are allowed on a maintenance track. */
	export interface SupportedOperationFormProperties {
		OperationName: FormControl<string | null | undefined>,
	}
	export function CreateSupportedOperationFormGroup() {
		return new FormGroup<SupportedOperationFormProperties>({
			OperationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output from the <a>DescribeClusterVersions</a> action.  */
	export interface ClusterVersionsMessage {
		Marker?: string | null;
		ClusterVersions?: Array<ClusterVersion>;
	}

	/** Contains the output from the <a>DescribeClusterVersions</a> action.  */
	export interface ClusterVersionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateClusterVersionsMessageFormGroup() {
		return new FormGroup<ClusterVersionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a cluster version, including the parameter group family and description of the version. */
	export interface ClusterVersion {
		ClusterVersion1?: string | null;
		ClusterParameterGroupFamily?: string | null;
		Description?: string | null;
	}

	/** Describes a cluster version, including the parameter group family and description of the version. */
	export interface ClusterVersionFormProperties {
		ClusterVersion1: FormControl<string | null | undefined>,
		ClusterParameterGroupFamily: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateClusterVersionFormGroup() {
		return new FormGroup<ClusterVersionFormProperties>({
			ClusterVersion1: new FormControl<string | null | undefined>(undefined),
			ClusterParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output from the <a>DescribeClusters</a> action.  */
	export interface ClustersMessage {
		Marker?: string | null;
		Clusters?: Array<Cluster>;
	}

	/** Contains the output from the <a>DescribeClusters</a> action.  */
	export interface ClustersMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateClustersMessageFormGroup() {
		return new FormGroup<ClustersMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDefaultClusterParametersResult {

		/** Describes the default cluster parameters for a parameter group family. */
		DefaultClusterParameters?: DefaultClusterParameters;
	}
	export interface DescribeDefaultClusterParametersResultFormProperties {
	}
	export function CreateDescribeDefaultClusterParametersResultFormGroup() {
		return new FormGroup<DescribeDefaultClusterParametersResultFormProperties>({
		});

	}


	/** Describes the default cluster parameters for a parameter group family. */
	export interface DefaultClusterParameters {
		ParameterGroupFamily?: string | null;
		Marker?: string | null;
		Parameters?: Array<Parameter>;
	}

	/** Describes the default cluster parameters for a parameter group family. */
	export interface DefaultClusterParametersFormProperties {
		ParameterGroupFamily: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDefaultClusterParametersFormGroup() {
		return new FormGroup<DefaultClusterParametersFormProperties>({
			ParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface EventCategoriesMessage {
		EventCategoriesMapList?: Array<EventCategoriesMap>;
	}

	/** <p/> */
	export interface EventCategoriesMessageFormProperties {
	}
	export function CreateEventCategoriesMessageFormGroup() {
		return new FormGroup<EventCategoriesMessageFormProperties>({
		});

	}


	/** Describes event categories. */
	export interface EventCategoriesMap {
		SourceType?: string | null;
		Events?: Array<EventInfoMap>;
	}

	/** Describes event categories. */
	export interface EventCategoriesMapFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateEventCategoriesMapFormGroup() {
		return new FormGroup<EventCategoriesMapFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes event information. */
	export interface EventInfoMap {
		EventId?: string | null;
		EventCategories?: Array<string>;
		EventDescription?: string | null;
		Severity?: string | null;
	}

	/** Describes event information. */
	export interface EventInfoMapFormProperties {
		EventId: FormControl<string | null | undefined>,
		EventDescription: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
	}
	export function CreateEventInfoMapFormGroup() {
		return new FormGroup<EventInfoMapFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			EventDescription: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface EventSubscriptionsMessage {
		Marker?: string | null;
		EventSubscriptionsList?: Array<EventSubscription>;
	}

	/** <p/> */
	export interface EventSubscriptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsMessageFormGroup() {
		return new FormGroup<EventSubscriptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface EventsMessage {
		Marker?: string | null;
		Events?: Array<Event>;
	}

	/** <p/> */
	export interface EventsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEventsMessageFormGroup() {
		return new FormGroup<EventsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an event. */
	export interface Event {
		SourceIdentifier?: string | null;
		SourceType?: EventSourceType | null;
		Message?: string | null;
		EventCategories?: Array<string>;
		Severity?: string | null;
		Date?: Date | null;
		EventId?: string | null;
	}

	/** Describes an event. */
	export interface EventFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<EventSourceType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
		EventId: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<EventSourceType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			EventId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventSourceType { cluster = 0, 'cluster-parameter-group' = 1, 'cluster-security-group' = 2, 'cluster-snapshot' = 3, 'scheduled-action' = 4 }


	/** <p/> */
	export interface HsmClientCertificateMessage {
		Marker?: string | null;
		HsmClientCertificates?: Array<HsmClientCertificate>;
	}

	/** <p/> */
	export interface HsmClientCertificateMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateHsmClientCertificateMessageFormGroup() {
		return new FormGroup<HsmClientCertificateMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface HsmConfigurationMessage {
		Marker?: string | null;
		HsmConfigurations?: Array<HsmConfiguration>;
	}

	/** <p/> */
	export interface HsmConfigurationMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateHsmConfigurationMessageFormGroup() {
		return new FormGroup<HsmConfigurationMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of logging for a cluster. */
	export interface LoggingStatus {
		LoggingEnabled?: boolean | null;
		BucketName?: string | null;
		S3KeyPrefix?: string | null;
		LastSuccessfulDeliveryTime?: Date | null;
		LastFailureTime?: Date | null;
		LastFailureMessage?: string | null;
	}

	/** Describes the status of logging for a cluster. */
	export interface LoggingStatusFormProperties {
		LoggingEnabled: FormControl<boolean | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		LastSuccessfulDeliveryTime: FormControl<Date | null | undefined>,
		LastFailureTime: FormControl<Date | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateLoggingStatusFormGroup() {
		return new FormGroup<LoggingStatusFormProperties>({
			LoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			LastSuccessfulDeliveryTime: new FormControl<Date | null | undefined>(undefined),
			LastFailureTime: new FormControl<Date | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeConfigurationOptionsMessage {
		NodeConfigurationOptionList?: Array<NodeConfigurationOption>;
		Marker?: string | null;
	}
	export interface NodeConfigurationOptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateNodeConfigurationOptionsMessageFormGroup() {
		return new FormGroup<NodeConfigurationOptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of node configurations. */
	export interface NodeConfigurationOption {
		NodeType?: string | null;
		NumberOfNodes?: number | null;
		EstimatedDiskUtilizationPercent?: number | null;
		Mode?: NodeConfigurationOptionMode | null;
	}

	/** A list of node configurations. */
	export interface NodeConfigurationOptionFormProperties {
		NodeType: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		EstimatedDiskUtilizationPercent: FormControl<number | null | undefined>,
		Mode: FormControl<NodeConfigurationOptionMode | null | undefined>,
	}
	export function CreateNodeConfigurationOptionFormGroup() {
		return new FormGroup<NodeConfigurationOptionFormProperties>({
			NodeType: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			EstimatedDiskUtilizationPercent: new FormControl<number | null | undefined>(undefined),
			Mode: new FormControl<NodeConfigurationOptionMode | null | undefined>(undefined),
		});

	}

	export enum NodeConfigurationOptionMode { standard = 0, 'high-performance' = 1 }


	/** A set of elements to filter the returned node configurations. */
	export interface NodeConfigurationOptionsFilter {
		Name?: NodeConfigurationOptionsFilterName | null;
		Operator?: NodeConfigurationOptionsFilterOperator | null;
		Values?: Array<string>;
	}

	/** A set of elements to filter the returned node configurations. */
	export interface NodeConfigurationOptionsFilterFormProperties {
		Name: FormControl<NodeConfigurationOptionsFilterName | null | undefined>,
		Operator: FormControl<NodeConfigurationOptionsFilterOperator | null | undefined>,
	}
	export function CreateNodeConfigurationOptionsFilterFormGroup() {
		return new FormGroup<NodeConfigurationOptionsFilterFormProperties>({
			Name: new FormControl<NodeConfigurationOptionsFilterName | null | undefined>(undefined),
			Operator: new FormControl<NodeConfigurationOptionsFilterOperator | null | undefined>(undefined),
		});

	}

	export enum NodeConfigurationOptionsFilterName { NodeType = 0, NumberOfNodes = 1, EstimatedDiskUtilizationPercent = 2, Mode = 3 }

	export enum NodeConfigurationOptionsFilterOperator { eq = 0, lt = 1, gt = 2, le = 3, ge = 4, in = 5, between = 6 }

	export interface AccessToSnapshotDeniedFault {
	}
	export interface AccessToSnapshotDeniedFaultFormProperties {
	}
	export function CreateAccessToSnapshotDeniedFaultFormGroup() {
		return new FormGroup<AccessToSnapshotDeniedFaultFormProperties>({
		});

	}


	/** Contains the output from the <a>DescribeOrderableClusterOptions</a> action.  */
	export interface OrderableClusterOptionsMessage {
		OrderableClusterOptions?: Array<OrderableClusterOption>;
		Marker?: string | null;
	}

	/** Contains the output from the <a>DescribeOrderableClusterOptions</a> action.  */
	export interface OrderableClusterOptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateOrderableClusterOptionsMessageFormGroup() {
		return new FormGroup<OrderableClusterOptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an orderable cluster option. */
	export interface OrderableClusterOption {
		ClusterVersion?: string | null;
		ClusterType?: string | null;
		NodeType?: string | null;
		AvailabilityZones?: Array<AvailabilityZone>;
	}

	/** Describes an orderable cluster option. */
	export interface OrderableClusterOptionFormProperties {
		ClusterVersion: FormControl<string | null | undefined>,
		ClusterType: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
	}
	export function CreateOrderableClusterOptionFormGroup() {
		return new FormGroup<OrderableClusterOptionFormProperties>({
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			ClusterType: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ReservedNodeOfferingsMessage {
		Marker?: string | null;
		ReservedNodeOfferings?: Array<ReservedNodeOffering>;
	}

	/** <p/> */
	export interface ReservedNodeOfferingsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateReservedNodeOfferingsMessageFormGroup() {
		return new FormGroup<ReservedNodeOfferingsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a reserved node offering. */
	export interface ReservedNodeOffering {
		ReservedNodeOfferingId?: string | null;
		NodeType?: string | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		OfferingType?: string | null;
		RecurringCharges?: Array<RecurringCharge>;
		ReservedNodeOfferingType?: ReservedNodeReservedNodeOfferingType | null;
	}

	/** Describes a reserved node offering. */
	export interface ReservedNodeOfferingFormProperties {
		ReservedNodeOfferingId: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		ReservedNodeOfferingType: FormControl<ReservedNodeReservedNodeOfferingType | null | undefined>,
	}
	export function CreateReservedNodeOfferingFormGroup() {
		return new FormGroup<ReservedNodeOfferingFormProperties>({
			ReservedNodeOfferingId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			ReservedNodeOfferingType: new FormControl<ReservedNodeReservedNodeOfferingType | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ReservedNodesMessage {
		Marker?: string | null;
		ReservedNodes?: Array<ReservedNode>;
	}

	/** <p/> */
	export interface ReservedNodesMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateReservedNodesMessageFormGroup() {
		return new FormGroup<ReservedNodesMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledActionsMessage {
		Marker?: string | null;
		ScheduledActions?: Array<ScheduledAction>;
	}
	export interface ScheduledActionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateScheduledActionsMessageFormGroup() {
		return new FormGroup<ScheduledActionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of elements to filter the returned scheduled actions.  */
	export interface ScheduledActionFilter {

		/** Required */
		Name: ScheduledActionFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** A set of elements to filter the returned scheduled actions.  */
	export interface ScheduledActionFilterFormProperties {

		/** Required */
		Name: FormControl<ScheduledActionFilterName | null | undefined>,
	}
	export function CreateScheduledActionFilterFormGroup() {
		return new FormGroup<ScheduledActionFilterFormProperties>({
			Name: new FormControl<ScheduledActionFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduledActionFilterName { 'cluster-identifier' = 0, 'iam-role' = 1 }


	/** <p/> */
	export interface SnapshotCopyGrantMessage {
		Marker?: string | null;
		SnapshotCopyGrants?: Array<SnapshotCopyGrant>;
	}

	/** <p/> */
	export interface SnapshotCopyGrantMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotCopyGrantMessageFormGroup() {
		return new FormGroup<SnapshotCopyGrantMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSnapshotSchedulesOutputMessage {
		SnapshotSchedules?: Array<SnapshotSchedule>;
		Marker?: string | null;
	}
	export interface DescribeSnapshotSchedulesOutputMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotSchedulesOutputMessageFormGroup() {
		return new FormGroup<DescribeSnapshotSchedulesOutputMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerStorageMessage {
		TotalBackupSizeInMegaBytes?: number | null;
		TotalProvisionedStorageInMegaBytes?: number | null;
	}
	export interface CustomerStorageMessageFormProperties {
		TotalBackupSizeInMegaBytes: FormControl<number | null | undefined>,
		TotalProvisionedStorageInMegaBytes: FormControl<number | null | undefined>,
	}
	export function CreateCustomerStorageMessageFormGroup() {
		return new FormGroup<CustomerStorageMessageFormProperties>({
			TotalBackupSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
			TotalProvisionedStorageInMegaBytes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface TableRestoreStatusMessage {
		TableRestoreStatusDetails?: Array<TableRestoreStatus>;
		Marker?: string | null;
	}

	/** <p/> */
	export interface TableRestoreStatusMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateTableRestoreStatusMessageFormGroup() {
		return new FormGroup<TableRestoreStatusMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation. */
	export interface TableRestoreStatus {
		TableRestoreRequestId?: string | null;
		Status?: TableRestoreStatusStatus | null;
		Message?: string | null;
		RequestTime?: Date | null;
		ProgressInMegaBytes?: number | null;
		TotalDataInMegaBytes?: number | null;
		ClusterIdentifier?: string | null;
		SnapshotIdentifier?: string | null;
		SourceDatabaseName?: string | null;
		SourceSchemaName?: string | null;
		SourceTableName?: string | null;
		TargetDatabaseName?: string | null;
		TargetSchemaName?: string | null;
		NewTableName?: string | null;
	}

	/** Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation. */
	export interface TableRestoreStatusFormProperties {
		TableRestoreRequestId: FormControl<string | null | undefined>,
		Status: FormControl<TableRestoreStatusStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		RequestTime: FormControl<Date | null | undefined>,
		ProgressInMegaBytes: FormControl<number | null | undefined>,
		TotalDataInMegaBytes: FormControl<number | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		SnapshotIdentifier: FormControl<string | null | undefined>,
		SourceDatabaseName: FormControl<string | null | undefined>,
		SourceSchemaName: FormControl<string | null | undefined>,
		SourceTableName: FormControl<string | null | undefined>,
		TargetDatabaseName: FormControl<string | null | undefined>,
		TargetSchemaName: FormControl<string | null | undefined>,
		NewTableName: FormControl<string | null | undefined>,
	}
	export function CreateTableRestoreStatusFormGroup() {
		return new FormGroup<TableRestoreStatusFormProperties>({
			TableRestoreRequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TableRestoreStatusStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			RequestTime: new FormControl<Date | null | undefined>(undefined),
			ProgressInMegaBytes: new FormControl<number | null | undefined>(undefined),
			TotalDataInMegaBytes: new FormControl<number | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceDatabaseName: new FormControl<string | null | undefined>(undefined),
			SourceSchemaName: new FormControl<string | null | undefined>(undefined),
			SourceTableName: new FormControl<string | null | undefined>(undefined),
			TargetDatabaseName: new FormControl<string | null | undefined>(undefined),
			TargetSchemaName: new FormControl<string | null | undefined>(undefined),
			NewTableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TableRestoreStatusStatus { PENDING = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, CANCELED = 4 }

	export interface TableRestoreNotFoundFault {
	}
	export interface TableRestoreNotFoundFaultFormProperties {
	}
	export function CreateTableRestoreNotFoundFaultFormGroup() {
		return new FormGroup<TableRestoreNotFoundFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface TaggedResourceListMessage {
		TaggedResources?: Array<TaggedResource>;
		Marker?: string | null;
	}

	/** <p/> */
	export interface TaggedResourceListMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateTaggedResourceListMessageFormGroup() {
		return new FormGroup<TaggedResourceListMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag and its associated resource. */
	export interface TaggedResource {

		/** A tag consisting of a name/value pair for a resource. */
		Tag?: Tag;
		ResourceName?: string | null;
		ResourceType?: string | null;
	}

	/** A tag and its associated resource. */
	export interface TaggedResourceFormProperties {
		ResourceName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateTaggedResourceFormGroup() {
		return new FormGroup<TaggedResourceFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsageLimitList {
		UsageLimits?: Array<UsageLimit>;
		Marker?: string | null;
	}
	export interface UsageLimitListFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateUsageLimitListFormGroup() {
		return new FormGroup<UsageLimitListFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisableSnapshotCopyResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface DisableSnapshotCopyResultFormProperties {
	}
	export function CreateDisableSnapshotCopyResultFormGroup() {
		return new FormGroup<DisableSnapshotCopyResultFormProperties>({
		});

	}

	export interface SnapshotCopyAlreadyDisabledFault {
	}
	export interface SnapshotCopyAlreadyDisabledFaultFormProperties {
	}
	export function CreateSnapshotCopyAlreadyDisabledFaultFormGroup() {
		return new FormGroup<SnapshotCopyAlreadyDisabledFaultFormProperties>({
		});

	}

	export interface BucketNotFoundFault {
	}
	export interface BucketNotFoundFaultFormProperties {
	}
	export function CreateBucketNotFoundFaultFormGroup() {
		return new FormGroup<BucketNotFoundFaultFormProperties>({
		});

	}

	export interface InsufficientS3BucketPolicyFault {
	}
	export interface InsufficientS3BucketPolicyFaultFormProperties {
	}
	export function CreateInsufficientS3BucketPolicyFaultFormGroup() {
		return new FormGroup<InsufficientS3BucketPolicyFaultFormProperties>({
		});

	}

	export interface InvalidS3KeyPrefixFault {
	}
	export interface InvalidS3KeyPrefixFaultFormProperties {
	}
	export function CreateInvalidS3KeyPrefixFaultFormGroup() {
		return new FormGroup<InvalidS3KeyPrefixFaultFormProperties>({
		});

	}

	export interface InvalidS3BucketNameFault {
	}
	export interface InvalidS3BucketNameFaultFormProperties {
	}
	export function CreateInvalidS3BucketNameFaultFormGroup() {
		return new FormGroup<InvalidS3BucketNameFaultFormProperties>({
		});

	}

	export interface EnableSnapshotCopyResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface EnableSnapshotCopyResultFormProperties {
	}
	export function CreateEnableSnapshotCopyResultFormGroup() {
		return new FormGroup<EnableSnapshotCopyResultFormProperties>({
		});

	}

	export interface IncompatibleOrderableOptions {
	}
	export interface IncompatibleOrderableOptionsFormProperties {
	}
	export function CreateIncompatibleOrderableOptionsFormGroup() {
		return new FormGroup<IncompatibleOrderableOptionsFormProperties>({
		});

	}

	export interface CopyToRegionDisabledFault {
	}
	export interface CopyToRegionDisabledFaultFormProperties {
	}
	export function CreateCopyToRegionDisabledFaultFormGroup() {
		return new FormGroup<CopyToRegionDisabledFaultFormProperties>({
		});

	}

	export interface SnapshotCopyAlreadyEnabledFault {
	}
	export interface SnapshotCopyAlreadyEnabledFaultFormProperties {
	}
	export function CreateSnapshotCopyAlreadyEnabledFaultFormGroup() {
		return new FormGroup<SnapshotCopyAlreadyEnabledFaultFormProperties>({
		});

	}

	export interface UnknownSnapshotCopyRegionFault {
	}
	export interface UnknownSnapshotCopyRegionFaultFormProperties {
	}
	export function CreateUnknownSnapshotCopyRegionFaultFormGroup() {
		return new FormGroup<UnknownSnapshotCopyRegionFaultFormProperties>({
		});

	}


	/** Temporary credentials with authorization to log on to an Amazon Redshift database.  */
	export interface ClusterCredentials {
		DbUser?: string | null;
		DbPassword?: string | null;
		Expiration?: Date | null;
	}

	/** Temporary credentials with authorization to log on to an Amazon Redshift database.  */
	export interface ClusterCredentialsFormProperties {
		DbUser: FormControl<string | null | undefined>,
		DbPassword: FormControl<string | null | undefined>,
		Expiration: FormControl<Date | null | undefined>,
	}
	export function CreateClusterCredentialsFormGroup() {
		return new FormGroup<ClusterCredentialsFormProperties>({
			DbUser: new FormControl<string | null | undefined>(undefined),
			DbPassword: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetReservedNodeExchangeOfferingsOutputMessage {
		Marker?: string | null;
		ReservedNodeOfferings?: Array<ReservedNodeOffering>;
	}
	export interface GetReservedNodeExchangeOfferingsOutputMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetReservedNodeExchangeOfferingsOutputMessageFormGroup() {
		return new FormGroup<GetReservedNodeExchangeOfferingsOutputMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyClusterResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface ModifyClusterResultFormProperties {
	}
	export function CreateModifyClusterResultFormGroup() {
		return new FormGroup<ModifyClusterResultFormProperties>({
		});

	}

	export interface UnsupportedOptionFault {
	}
	export interface UnsupportedOptionFaultFormProperties {
	}
	export function CreateUnsupportedOptionFaultFormGroup() {
		return new FormGroup<UnsupportedOptionFaultFormProperties>({
		});

	}

	export interface TableLimitExceededFault {
	}
	export interface TableLimitExceededFaultFormProperties {
	}
	export function CreateTableLimitExceededFaultFormGroup() {
		return new FormGroup<TableLimitExceededFaultFormProperties>({
		});

	}

	export interface ModifyClusterDbRevisionResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface ModifyClusterDbRevisionResultFormProperties {
	}
	export function CreateModifyClusterDbRevisionResultFormGroup() {
		return new FormGroup<ModifyClusterDbRevisionResultFormProperties>({
		});

	}

	export interface ClusterOnLatestRevisionFault {
	}
	export interface ClusterOnLatestRevisionFaultFormProperties {
	}
	export function CreateClusterOnLatestRevisionFaultFormGroup() {
		return new FormGroup<ClusterOnLatestRevisionFaultFormProperties>({
		});

	}

	export interface ModifyClusterIamRolesResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface ModifyClusterIamRolesResultFormProperties {
	}
	export function CreateModifyClusterIamRolesResultFormGroup() {
		return new FormGroup<ModifyClusterIamRolesResultFormProperties>({
		});

	}

	export interface ModifyClusterMaintenanceResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface ModifyClusterMaintenanceResultFormProperties {
	}
	export function CreateModifyClusterMaintenanceResultFormGroup() {
		return new FormGroup<ModifyClusterMaintenanceResultFormProperties>({
		});

	}


	/** <p/> */
	export interface ClusterParameterGroupNameMessage {
		ParameterGroupName?: string | null;
		ParameterGroupStatus?: string | null;
	}

	/** <p/> */
	export interface ClusterParameterGroupNameMessageFormProperties {
		ParameterGroupName: FormControl<string | null | undefined>,
		ParameterGroupStatus: FormControl<string | null | undefined>,
	}
	export function CreateClusterParameterGroupNameMessageFormGroup() {
		return new FormGroup<ClusterParameterGroupNameMessageFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterGroupStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyClusterSnapshotResult {

		/** Describes a snapshot. */
		Snapshot?: Snapshot;
	}
	export interface ModifyClusterSnapshotResultFormProperties {
	}
	export function CreateModifyClusterSnapshotResultFormGroup() {
		return new FormGroup<ModifyClusterSnapshotResultFormProperties>({
		});

	}

	export interface ModifyClusterSubnetGroupResult {

		/** Describes a subnet group. */
		ClusterSubnetGroup?: ClusterSubnetGroup;
	}
	export interface ModifyClusterSubnetGroupResultFormProperties {
	}
	export function CreateModifyClusterSubnetGroupResultFormGroup() {
		return new FormGroup<ModifyClusterSubnetGroupResultFormProperties>({
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

		/** Describes event subscriptions. */
		EventSubscription?: EventSubscription;
	}
	export interface ModifyEventSubscriptionResultFormProperties {
	}
	export function CreateModifyEventSubscriptionResultFormGroup() {
		return new FormGroup<ModifyEventSubscriptionResultFormProperties>({
		});

	}

	export interface ModifySnapshotCopyRetentionPeriodResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface ModifySnapshotCopyRetentionPeriodResultFormProperties {
	}
	export function CreateModifySnapshotCopyRetentionPeriodResultFormGroup() {
		return new FormGroup<ModifySnapshotCopyRetentionPeriodResultFormProperties>({
		});

	}

	export interface SnapshotCopyDisabledFault {
	}
	export interface SnapshotCopyDisabledFaultFormProperties {
	}
	export function CreateSnapshotCopyDisabledFaultFormGroup() {
		return new FormGroup<SnapshotCopyDisabledFaultFormProperties>({
		});

	}

	export interface SnapshotScheduleUpdateInProgressFault {
	}
	export interface SnapshotScheduleUpdateInProgressFaultFormProperties {
	}
	export function CreateSnapshotScheduleUpdateInProgressFaultFormGroup() {
		return new FormGroup<SnapshotScheduleUpdateInProgressFaultFormProperties>({
		});

	}

	export interface PauseClusterResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface PauseClusterResultFormProperties {
	}
	export function CreatePauseClusterResultFormGroup() {
		return new FormGroup<PauseClusterResultFormProperties>({
		});

	}

	export interface PurchaseReservedNodeOfferingResult {

		/** Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. */
		ReservedNode?: ReservedNode;
	}
	export interface PurchaseReservedNodeOfferingResultFormProperties {
	}
	export function CreatePurchaseReservedNodeOfferingResultFormGroup() {
		return new FormGroup<PurchaseReservedNodeOfferingResultFormProperties>({
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

	export interface RebootClusterResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface RebootClusterResultFormProperties {
	}
	export function CreateRebootClusterResultFormGroup() {
		return new FormGroup<RebootClusterResultFormProperties>({
		});

	}

	export interface ResizeClusterResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface ResizeClusterResultFormProperties {
	}
	export function CreateResizeClusterResultFormGroup() {
		return new FormGroup<ResizeClusterResultFormProperties>({
		});

	}

	export interface RestoreFromClusterSnapshotResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface RestoreFromClusterSnapshotResultFormProperties {
	}
	export function CreateRestoreFromClusterSnapshotResultFormGroup() {
		return new FormGroup<RestoreFromClusterSnapshotResultFormProperties>({
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

	export interface RestoreTableFromClusterSnapshotResult {

		/** Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation. */
		TableRestoreStatus?: TableRestoreStatus;
	}
	export interface RestoreTableFromClusterSnapshotResultFormProperties {
	}
	export function CreateRestoreTableFromClusterSnapshotResultFormGroup() {
		return new FormGroup<RestoreTableFromClusterSnapshotResultFormProperties>({
		});

	}

	export interface InProgressTableRestoreQuotaExceededFault {
	}
	export interface InProgressTableRestoreQuotaExceededFaultFormProperties {
	}
	export function CreateInProgressTableRestoreQuotaExceededFaultFormGroup() {
		return new FormGroup<InProgressTableRestoreQuotaExceededFaultFormProperties>({
		});

	}

	export interface InvalidTableRestoreArgumentFault {
	}
	export interface InvalidTableRestoreArgumentFaultFormProperties {
	}
	export function CreateInvalidTableRestoreArgumentFaultFormGroup() {
		return new FormGroup<InvalidTableRestoreArgumentFaultFormProperties>({
		});

	}

	export interface ResumeClusterResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface ResumeClusterResultFormProperties {
	}
	export function CreateResumeClusterResultFormGroup() {
		return new FormGroup<ResumeClusterResultFormProperties>({
		});

	}

	export interface RevokeClusterSecurityGroupIngressResult {

		/** Describes a security group. */
		ClusterSecurityGroup?: ClusterSecurityGroup;
	}
	export interface RevokeClusterSecurityGroupIngressResultFormProperties {
	}
	export function CreateRevokeClusterSecurityGroupIngressResultFormGroup() {
		return new FormGroup<RevokeClusterSecurityGroupIngressResultFormProperties>({
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

	export interface RevokeSnapshotAccessResult {

		/** Describes a snapshot. */
		Snapshot?: Snapshot;
	}
	export interface RevokeSnapshotAccessResultFormProperties {
	}
	export function CreateRevokeSnapshotAccessResultFormGroup() {
		return new FormGroup<RevokeSnapshotAccessResultFormProperties>({
		});

	}

	export interface RotateEncryptionKeyResult {

		/** Describes a cluster. */
		Cluster?: Cluster;
	}
	export interface RotateEncryptionKeyResultFormProperties {
	}
	export function CreateRotateEncryptionKeyResultFormGroup() {
		return new FormGroup<RotateEncryptionKeyResultFormProperties>({
		});

	}

	export interface AcceptReservedNodeExchangeInputMessage {

		/** Required */
		ReservedNodeId: string;

		/** Required */
		TargetReservedNodeOfferingId: string;
	}
	export interface AcceptReservedNodeExchangeInputMessageFormProperties {

		/** Required */
		ReservedNodeId: FormControl<string | null | undefined>,

		/** Required */
		TargetReservedNodeOfferingId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptReservedNodeExchangeInputMessageFormGroup() {
		return new FormGroup<AcceptReservedNodeExchangeInputMessageFormProperties>({
			ReservedNodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetReservedNodeOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionType { 'restore-cluster' = 0, 'recommend-node-config' = 1, 'resize-cluster' = 2 }


	/** <p/> */
	export interface AuthorizeClusterSecurityGroupIngressMessage {

		/** Required */
		ClusterSecurityGroupName: string;
		CIDRIP?: string | null;
		EC2SecurityGroupName?: string | null;
		EC2SecurityGroupOwnerId?: string | null;
	}

	/** <p/> */
	export interface AuthorizeClusterSecurityGroupIngressMessageFormProperties {

		/** Required */
		ClusterSecurityGroupName: FormControl<string | null | undefined>,
		CIDRIP: FormControl<string | null | undefined>,
		EC2SecurityGroupName: FormControl<string | null | undefined>,
		EC2SecurityGroupOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeClusterSecurityGroupIngressMessageFormGroup() {
		return new FormGroup<AuthorizeClusterSecurityGroupIngressMessageFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CIDRIP: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupName: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupOwnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface AuthorizeSnapshotAccessMessage {

		/** Required */
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string | null;

		/** Required */
		AccountWithRestoreAccess: string;
	}

	/** <p/> */
	export interface AuthorizeSnapshotAccessMessageFormProperties {

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		AccountWithRestoreAccess: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeSnapshotAccessMessageFormGroup() {
		return new FormGroup<AuthorizeSnapshotAccessMessageFormProperties>({
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			AccountWithRestoreAccess: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDeleteClusterSnapshotsRequest {

		/** Required */
		Identifiers: Array<DeleteClusterSnapshotMessage>;
	}
	export interface BatchDeleteClusterSnapshotsRequestFormProperties {
	}
	export function CreateBatchDeleteClusterSnapshotsRequestFormGroup() {
		return new FormGroup<BatchDeleteClusterSnapshotsRequestFormProperties>({
		});

	}

	export interface BatchModifyClusterSnapshotsMessage {

		/** Required */
		SnapshotIdentifierList: Array<string>;
		ManualSnapshotRetentionPeriod?: number | null;
		Force?: boolean | null;
	}
	export interface BatchModifyClusterSnapshotsMessageFormProperties {
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchModifyClusterSnapshotsMessageFormGroup() {
		return new FormGroup<BatchModifyClusterSnapshotsMessageFormProperties>({
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CancelResizeMessage {

		/** Required */
		ClusterIdentifier: string;
	}
	export interface CancelResizeMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCancelResizeMessageFormGroup() {
		return new FormGroup<CancelResizeMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleState { MODIFYING = 0, ACTIVE = 1, FAILED = 2 }


	/** <p/> */
	export interface CopyClusterSnapshotMessage {

		/** Required */
		SourceSnapshotIdentifier: string;
		SourceSnapshotClusterIdentifier?: string | null;

		/** Required */
		TargetSnapshotIdentifier: string;
		ManualSnapshotRetentionPeriod?: number | null;
	}

	/** <p/> */
	export interface CopyClusterSnapshotMessageFormProperties {

		/** Required */
		SourceSnapshotIdentifier: FormControl<string | null | undefined>,
		SourceSnapshotClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetSnapshotIdentifier: FormControl<string | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
	}
	export function CreateCopyClusterSnapshotMessageFormGroup() {
		return new FormGroup<CopyClusterSnapshotMessageFormProperties>({
			SourceSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceSnapshotClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			TargetSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateClusterMessage {
		DBName?: string | null;

		/** Required */
		ClusterIdentifier: string;
		ClusterType?: string | null;

		/** Required */
		NodeType: string;

		/** Required */
		MasterUsername: string;

		/** Required */
		MasterUserPassword: string;
		ClusterSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		ClusterSubnetGroupName?: string | null;
		AvailabilityZone?: string | null;
		PreferredMaintenanceWindow?: string | null;
		ClusterParameterGroupName?: string | null;
		AutomatedSnapshotRetentionPeriod?: number | null;
		ManualSnapshotRetentionPeriod?: number | null;
		Port?: number | null;
		ClusterVersion?: string | null;
		AllowVersionUpgrade?: boolean | null;
		NumberOfNodes?: number | null;
		PubliclyAccessible?: boolean | null;
		Encrypted?: boolean | null;
		HsmClientCertificateIdentifier?: string | null;
		HsmConfigurationIdentifier?: string | null;
		ElasticIp?: string | null;
		Tags?: Array<Tag>;
		KmsKeyId?: string | null;
		EnhancedVpcRouting?: boolean | null;
		AdditionalInfo?: string | null;
		IamRoles?: Array<string>;
		MaintenanceTrackName?: string | null;
		SnapshotScheduleIdentifier?: string | null;
	}

	/** <p/> */
	export interface CreateClusterMessageFormProperties {
		DBName: FormControl<string | null | undefined>,

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		ClusterType: FormControl<string | null | undefined>,

		/** Required */
		NodeType: FormControl<string | null | undefined>,

		/** Required */
		MasterUsername: FormControl<string | null | undefined>,

		/** Required */
		MasterUserPassword: FormControl<string | null | undefined>,
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		ClusterParameterGroupName: FormControl<string | null | undefined>,
		AutomatedSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ClusterVersion: FormControl<string | null | undefined>,
		AllowVersionUpgrade: FormControl<boolean | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
		ElasticIp: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		AdditionalInfo: FormControl<string | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		SnapshotScheduleIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterMessageFormGroup() {
		return new FormGroup<CreateClusterMessageFormProperties>({
			DBName: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClusterType: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MasterUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			ClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			AutomatedSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			AllowVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			ElasticIp: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			AdditionalInfo: new FormControl<string | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			SnapshotScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateClusterParameterGroupMessage {

		/** Required */
		ParameterGroupName: string;

		/** Required */
		ParameterGroupFamily: string;

		/** Required */
		Description: string;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateClusterParameterGroupMessageFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,

		/** Required */
		ParameterGroupFamily: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterParameterGroupMessageFormGroup() {
		return new FormGroup<CreateClusterParameterGroupMessageFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateClusterSecurityGroupMessage {

		/** Required */
		ClusterSecurityGroupName: string;

		/** Required */
		Description: string;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateClusterSecurityGroupMessageFormProperties {

		/** Required */
		ClusterSecurityGroupName: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterSecurityGroupMessageFormGroup() {
		return new FormGroup<CreateClusterSecurityGroupMessageFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateClusterSnapshotMessage {

		/** Required */
		SnapshotIdentifier: string;

		/** Required */
		ClusterIdentifier: string;
		ManualSnapshotRetentionPeriod?: number | null;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateClusterSnapshotMessageFormProperties {

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
	}
	export function CreateCreateClusterSnapshotMessageFormGroup() {
		return new FormGroup<CreateClusterSnapshotMessageFormProperties>({
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateClusterSubnetGroupMessage {

		/** Required */
		ClusterSubnetGroupName: string;

		/** Required */
		Description: string;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateClusterSubnetGroupMessageFormProperties {

		/** Required */
		ClusterSubnetGroupName: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterSubnetGroupMessageFormGroup() {
		return new FormGroup<CreateClusterSubnetGroupMessageFormProperties>({
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SnsTopicArn: string;
		SourceType?: string | null;
		SourceIds?: Array<string>;
		EventCategories?: Array<string>;
		Severity?: string | null;
		Enabled?: boolean | null;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEventSubscriptionMessageFormGroup() {
		return new FormGroup<CreateEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateHsmClientCertificateMessage {

		/** Required */
		HsmClientCertificateIdentifier: string;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateHsmClientCertificateMessageFormProperties {

		/** Required */
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateHsmClientCertificateMessageFormGroup() {
		return new FormGroup<CreateHsmClientCertificateMessageFormProperties>({
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateHsmConfigurationMessage {

		/** Required */
		HsmConfigurationIdentifier: string;

		/** Required */
		Description: string;

		/** Required */
		HsmIpAddress: string;

		/** Required */
		HsmPartitionName: string;

		/** Required */
		HsmPartitionPassword: string;

		/** Required */
		HsmServerPublicCertificate: string;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateHsmConfigurationMessageFormProperties {

		/** Required */
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		HsmIpAddress: FormControl<string | null | undefined>,

		/** Required */
		HsmPartitionName: FormControl<string | null | undefined>,

		/** Required */
		HsmPartitionPassword: FormControl<string | null | undefined>,

		/** Required */
		HsmServerPublicCertificate: FormControl<string | null | undefined>,
	}
	export function CreateCreateHsmConfigurationMessageFormGroup() {
		return new FormGroup<CreateHsmConfigurationMessageFormProperties>({
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HsmIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HsmPartitionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HsmPartitionPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HsmServerPublicCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateScheduledActionMessage {

		/** Required */
		ScheduledActionName: string;

		/**
		 * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.
		 * Required
		 */
		TargetAction: ScheduledActionType;

		/** Required */
		Schedule: string;

		/** Required */
		IamRole: string;
		ScheduledActionDescription?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Enable?: boolean | null;
	}
	export interface CreateScheduledActionMessageFormProperties {

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,

		/** Required */
		Schedule: FormControl<string | null | undefined>,

		/** Required */
		IamRole: FormControl<string | null | undefined>,
		ScheduledActionDescription: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Enable: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateScheduledActionMessageFormGroup() {
		return new FormGroup<CreateScheduledActionMessageFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduledActionDescription: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Enable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of the <code>CreateSnapshotCopyGrant</code> action. */
	export interface CreateSnapshotCopyGrantMessage {

		/** Required */
		SnapshotCopyGrantName: string;
		KmsKeyId?: string | null;
		Tags?: Array<Tag>;
	}

	/** The result of the <code>CreateSnapshotCopyGrant</code> action. */
	export interface CreateSnapshotCopyGrantMessageFormProperties {

		/** Required */
		SnapshotCopyGrantName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotCopyGrantMessageFormGroup() {
		return new FormGroup<CreateSnapshotCopyGrantMessageFormProperties>({
			SnapshotCopyGrantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSnapshotScheduleMessage {
		ScheduleDefinitions?: Array<string>;
		ScheduleIdentifier?: string | null;
		ScheduleDescription?: string | null;
		Tags?: Array<Tag>;
		DryRun?: boolean | null;
		NextInvocations?: number | null;
	}
	export interface CreateSnapshotScheduleMessageFormProperties {
		ScheduleIdentifier: FormControl<string | null | undefined>,
		ScheduleDescription: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
		NextInvocations: FormControl<number | null | undefined>,
	}
	export function CreateCreateSnapshotScheduleMessageFormGroup() {
		return new FormGroup<CreateSnapshotScheduleMessageFormProperties>({
			ScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
			ScheduleDescription: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			NextInvocations: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the output from the <code>CreateTags</code> action.  */
	export interface CreateTagsMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** Contains the output from the <code>CreateTags</code> action.  */
	export interface CreateTagsMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTagsMessageFormGroup() {
		return new FormGroup<CreateTagsMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUsageLimitMessage {

		/** Required */
		ClusterIdentifier: string;

		/** Required */
		FeatureType: UsageLimitFeatureType;

		/** Required */
		LimitType: UsageLimitLimitType;

		/** Required */
		Amount: number;
		Period?: UsageLimitPeriod | null;
		BreachAction?: UsageLimitBreachAction | null;
		Tags?: Array<Tag>;
	}
	export interface CreateUsageLimitMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		FeatureType: FormControl<UsageLimitFeatureType | null | undefined>,

		/** Required */
		LimitType: FormControl<UsageLimitLimitType | null | undefined>,

		/** Required */
		Amount: FormControl<number | null | undefined>,
		Period: FormControl<UsageLimitPeriod | null | undefined>,
		BreachAction: FormControl<UsageLimitBreachAction | null | undefined>,
	}
	export function CreateCreateUsageLimitMessageFormGroup() {
		return new FormGroup<CreateUsageLimitMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeatureType: new FormControl<UsageLimitFeatureType | null | undefined>(undefined, [Validators.required]),
			LimitType: new FormControl<UsageLimitLimitType | null | undefined>(undefined, [Validators.required]),
			Amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Period: new FormControl<UsageLimitPeriod | null | undefined>(undefined),
			BreachAction: new FormControl<UsageLimitBreachAction | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DeleteClusterMessage {

		/** Required */
		ClusterIdentifier: string;
		SkipFinalClusterSnapshot?: boolean | null;
		FinalClusterSnapshotIdentifier?: string | null;
		FinalClusterSnapshotRetentionPeriod?: number | null;
	}

	/** <p/> */
	export interface DeleteClusterMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		SkipFinalClusterSnapshot: FormControl<boolean | null | undefined>,
		FinalClusterSnapshotIdentifier: FormControl<string | null | undefined>,
		FinalClusterSnapshotRetentionPeriod: FormControl<number | null | undefined>,
	}
	export function CreateDeleteClusterMessageFormGroup() {
		return new FormGroup<DeleteClusterMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkipFinalClusterSnapshot: new FormControl<boolean | null | undefined>(undefined),
			FinalClusterSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			FinalClusterSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DeleteClusterParameterGroupMessage {

		/** Required */
		ParameterGroupName: string;
	}

	/** <p/> */
	export interface DeleteClusterParameterGroupMessageFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterParameterGroupMessageFormGroup() {
		return new FormGroup<DeleteClusterParameterGroupMessageFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteClusterSecurityGroupMessage {

		/** Required */
		ClusterSecurityGroupName: string;
	}

	/** <p/> */
	export interface DeleteClusterSecurityGroupMessageFormProperties {

		/** Required */
		ClusterSecurityGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterSecurityGroupMessageFormGroup() {
		return new FormGroup<DeleteClusterSecurityGroupMessageFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteClusterSubnetGroupMessage {

		/** Required */
		ClusterSubnetGroupName: string;
	}

	/** <p/> */
	export interface DeleteClusterSubnetGroupMessageFormProperties {

		/** Required */
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterSubnetGroupMessageFormGroup() {
		return new FormGroup<DeleteClusterSubnetGroupMessageFormProperties>({
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
	}

	/** <p/> */
	export interface DeleteEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventSubscriptionMessageFormGroup() {
		return new FormGroup<DeleteEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteHsmClientCertificateMessage {

		/** Required */
		HsmClientCertificateIdentifier: string;
	}

	/** <p/> */
	export interface DeleteHsmClientCertificateMessageFormProperties {

		/** Required */
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHsmClientCertificateMessageFormGroup() {
		return new FormGroup<DeleteHsmClientCertificateMessageFormProperties>({
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteHsmConfigurationMessage {

		/** Required */
		HsmConfigurationIdentifier: string;
	}

	/** <p/> */
	export interface DeleteHsmConfigurationMessageFormProperties {

		/** Required */
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHsmConfigurationMessageFormGroup() {
		return new FormGroup<DeleteHsmConfigurationMessageFormProperties>({
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteScheduledActionMessage {

		/** Required */
		ScheduledActionName: string;
	}
	export interface DeleteScheduledActionMessageFormProperties {

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteScheduledActionMessageFormGroup() {
		return new FormGroup<DeleteScheduledActionMessageFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of the <code>DeleteSnapshotCopyGrant</code> action. */
	export interface DeleteSnapshotCopyGrantMessage {

		/** Required */
		SnapshotCopyGrantName: string;
	}

	/** The result of the <code>DeleteSnapshotCopyGrant</code> action. */
	export interface DeleteSnapshotCopyGrantMessageFormProperties {

		/** Required */
		SnapshotCopyGrantName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotCopyGrantMessageFormGroup() {
		return new FormGroup<DeleteSnapshotCopyGrantMessageFormProperties>({
			SnapshotCopyGrantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSnapshotScheduleMessage {

		/** Required */
		ScheduleIdentifier: string;
	}
	export interface DeleteSnapshotScheduleMessageFormProperties {

		/** Required */
		ScheduleIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotScheduleMessageFormGroup() {
		return new FormGroup<DeleteSnapshotScheduleMessageFormProperties>({
			ScheduleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the output from the <code>DeleteTags</code> action.  */
	export interface DeleteTagsMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** Contains the output from the <code>DeleteTags</code> action.  */
	export interface DeleteTagsMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagsMessageFormGroup() {
		return new FormGroup<DeleteTagsMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUsageLimitMessage {

		/** Required */
		UsageLimitId: string;
	}
	export interface DeleteUsageLimitMessageFormProperties {

		/** Required */
		UsageLimitId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUsageLimitMessageFormGroup() {
		return new FormGroup<DeleteUsageLimitMessageFormProperties>({
			UsageLimitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccountAttributesMessage {
		AttributeNames?: Array<string>;
	}
	export interface DescribeAccountAttributesMessageFormProperties {
	}
	export function CreateDescribeAccountAttributesMessageFormGroup() {
		return new FormGroup<DescribeAccountAttributesMessageFormProperties>({
		});

	}

	export interface DescribeClusterDbRevisionsMessage {
		ClusterIdentifier?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeClusterDbRevisionsMessageFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterDbRevisionsMessageFormGroup() {
		return new FormGroup<DescribeClusterDbRevisionsMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeClusterParameterGroupsMessage {
		ParameterGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
	export interface DescribeClusterParameterGroupsMessageFormProperties {
		ParameterGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterParameterGroupsMessageFormGroup() {
		return new FormGroup<DescribeClusterParameterGroupsMessageFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeClusterParametersMessage {

		/** Required */
		ParameterGroupName: string;
		Source?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeClusterParametersMessageFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterParametersMessageFormGroup() {
		return new FormGroup<DescribeClusterParametersMessageFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeClusterSecurityGroupsMessage {
		ClusterSecurityGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
	export interface DescribeClusterSecurityGroupsMessageFormProperties {
		ClusterSecurityGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterSecurityGroupsMessageFormGroup() {
		return new FormGroup<DescribeClusterSecurityGroupsMessageFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeClusterSnapshotsMessage {
		ClusterIdentifier?: string | null;
		SnapshotIdentifier?: string | null;
		SnapshotType?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		OwnerAccount?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
		ClusterExists?: boolean | null;
		SortingEntities?: Array<SnapshotSortingEntity>;
	}

	/** <p/> */
	export interface DescribeClusterSnapshotsMessageFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		SnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
		ClusterExists: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeClusterSnapshotsMessageFormGroup() {
		return new FormGroup<DescribeClusterSnapshotsMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
			ClusterExists: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeClusterSubnetGroupsMessage {
		ClusterSubnetGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
	export interface DescribeClusterSubnetGroupsMessageFormProperties {
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterSubnetGroupsMessageFormGroup() {
		return new FormGroup<DescribeClusterSubnetGroupsMessageFormProperties>({
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClusterTracksMessage {
		MaintenanceTrackName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeClusterTracksMessageFormProperties {
		MaintenanceTrackName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterTracksMessageFormGroup() {
		return new FormGroup<DescribeClusterTracksMessageFormProperties>({
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeClusterVersionsMessage {
		ClusterVersion?: string | null;
		ClusterParameterGroupFamily?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeClusterVersionsMessageFormProperties {
		ClusterVersion: FormControl<string | null | undefined>,
		ClusterParameterGroupFamily: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterVersionsMessageFormGroup() {
		return new FormGroup<DescribeClusterVersionsMessageFormProperties>({
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			ClusterParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeClustersMessage {
		ClusterIdentifier?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
	export interface DescribeClustersMessageFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClustersMessageFormGroup() {
		return new FormGroup<DescribeClustersMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeDefaultClusterParametersMessage {

		/** Required */
		ParameterGroupFamily: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeDefaultClusterParametersMessageFormProperties {

		/** Required */
		ParameterGroupFamily: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDefaultClusterParametersMessageFormGroup() {
		return new FormGroup<DescribeDefaultClusterParametersMessageFormProperties>({
			ParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string | null;
	}

	/** <p/> */
	export interface DescribeEventCategoriesMessageFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventCategoriesMessageFormGroup() {
		return new FormGroup<DescribeEventCategoriesMessageFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
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

	export enum SourceType { cluster = 0, 'cluster-parameter-group' = 1, 'cluster-security-group' = 2, 'cluster-snapshot' = 3, 'scheduled-action' = 4 }


	/** <p/> */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string | null;
		SourceType?: EventSourceType | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Duration?: number | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeEventsMessageFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<EventSourceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsMessageFormGroup() {
		return new FormGroup<DescribeEventsMessageFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<EventSourceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeHsmClientCertificatesMessage {
		HsmClientCertificateIdentifier?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
	export interface DescribeHsmClientCertificatesMessageFormProperties {
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHsmClientCertificatesMessageFormGroup() {
		return new FormGroup<DescribeHsmClientCertificatesMessageFormProperties>({
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeHsmConfigurationsMessage {
		HsmConfigurationIdentifier?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
	export interface DescribeHsmConfigurationsMessageFormProperties {
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHsmConfigurationsMessageFormGroup() {
		return new FormGroup<DescribeHsmConfigurationsMessageFormProperties>({
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeLoggingStatusMessage {

		/** Required */
		ClusterIdentifier: string;
	}

	/** <p/> */
	export interface DescribeLoggingStatusMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoggingStatusMessageFormGroup() {
		return new FormGroup<DescribeLoggingStatusMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeNodeConfigurationOptionsMessage {

		/** Required */
		ActionType: ActionType;
		ClusterIdentifier?: string | null;
		SnapshotIdentifier?: string | null;
		OwnerAccount?: string | null;
		Filters?: Array<NodeConfigurationOptionsFilter>;
		Marker?: string | null;
		MaxRecords?: number | null;
	}
	export interface DescribeNodeConfigurationOptionsMessageFormProperties {

		/** Required */
		ActionType: FormControl<ActionType | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		SnapshotIdentifier: FormControl<string | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeNodeConfigurationOptionsMessageFormGroup() {
		return new FormGroup<DescribeNodeConfigurationOptionsMessageFormProperties>({
			ActionType: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeOrderableClusterOptionsMessage {
		ClusterVersion?: string | null;
		NodeType?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeOrderableClusterOptionsMessageFormProperties {
		ClusterVersion: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrderableClusterOptionsMessageFormGroup() {
		return new FormGroup<DescribeOrderableClusterOptionsMessageFormProperties>({
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReservedNodeOfferingsMessage {
		ReservedNodeOfferingId?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeReservedNodeOfferingsMessageFormProperties {
		ReservedNodeOfferingId: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedNodeOfferingsMessageFormGroup() {
		return new FormGroup<DescribeReservedNodeOfferingsMessageFormProperties>({
			ReservedNodeOfferingId: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReservedNodesMessage {
		ReservedNodeId?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeReservedNodesMessageFormProperties {
		ReservedNodeId: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedNodesMessageFormGroup() {
		return new FormGroup<DescribeReservedNodesMessageFormProperties>({
			ReservedNodeId: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeResizeMessage {

		/** Required */
		ClusterIdentifier: string;
	}

	/** <p/> */
	export interface DescribeResizeMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResizeMessageFormGroup() {
		return new FormGroup<DescribeResizeMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduledActionTypeValues { ResizeCluster = 0, PauseCluster = 1, ResumeCluster = 2 }

	export interface DescribeScheduledActionsMessage {
		ScheduledActionName?: string | null;
		TargetActionType?: ScheduledActionTypeValues | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Active?: boolean | null;
		Filters?: Array<ScheduledActionFilter>;
		Marker?: string | null;
		MaxRecords?: number | null;
	}
	export interface DescribeScheduledActionsMessageFormProperties {
		ScheduledActionName: FormControl<string | null | undefined>,
		TargetActionType: FormControl<ScheduledActionTypeValues | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeScheduledActionsMessageFormGroup() {
		return new FormGroup<DescribeScheduledActionsMessageFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined),
			TargetActionType: new FormControl<ScheduledActionTypeValues | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Active: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of the <code>DescribeSnapshotCopyGrants</code> action. */
	export interface DescribeSnapshotCopyGrantsMessage {
		SnapshotCopyGrantName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** The result of the <code>DescribeSnapshotCopyGrants</code> action. */
	export interface DescribeSnapshotCopyGrantsMessageFormProperties {
		SnapshotCopyGrantName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotCopyGrantsMessageFormGroup() {
		return new FormGroup<DescribeSnapshotCopyGrantsMessageFormProperties>({
			SnapshotCopyGrantName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSnapshotSchedulesMessage {
		ClusterIdentifier?: string | null;
		ScheduleIdentifier?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
		Marker?: string | null;
		MaxRecords?: number | null;
	}
	export interface DescribeSnapshotSchedulesMessageFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		ScheduleIdentifier: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSnapshotSchedulesMessageFormGroup() {
		return new FormGroup<DescribeSnapshotSchedulesMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTableRestoreStatusMessage {
		ClusterIdentifier?: string | null;
		TableRestoreRequestId?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeTableRestoreStatusMessageFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		TableRestoreRequestId: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableRestoreStatusMessageFormGroup() {
		return new FormGroup<DescribeTableRestoreStatusMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			TableRestoreRequestId: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTagsMessage {
		ResourceName?: string | null;
		ResourceType?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}

	/** <p/> */
	export interface DescribeTagsMessageFormProperties {
		ResourceName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagsMessageFormGroup() {
		return new FormGroup<DescribeTagsMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUsageLimitsMessage {
		UsageLimitId?: string | null;
		ClusterIdentifier?: string | null;
		FeatureType?: UsageLimitFeatureType | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		TagKeys?: Array<string>;
		TagValues?: Array<string>;
	}
	export interface DescribeUsageLimitsMessageFormProperties {
		UsageLimitId: FormControl<string | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,
		FeatureType: FormControl<UsageLimitFeatureType | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsageLimitsMessageFormGroup() {
		return new FormGroup<DescribeUsageLimitsMessageFormProperties>({
			UsageLimitId: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			FeatureType: new FormControl<UsageLimitFeatureType | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DisableLoggingMessage {

		/** Required */
		ClusterIdentifier: string;
	}

	/** <p/> */
	export interface DisableLoggingMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDisableLoggingMessageFormGroup() {
		return new FormGroup<DisableLoggingMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DisableSnapshotCopyMessage {

		/** Required */
		ClusterIdentifier: string;
	}

	/** <p/> */
	export interface DisableSnapshotCopyMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDisableSnapshotCopyMessageFormGroup() {
		return new FormGroup<DisableSnapshotCopyMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface EnableLoggingMessage {

		/** Required */
		ClusterIdentifier: string;

		/** Required */
		BucketName: string;
		S3KeyPrefix?: string | null;
	}

	/** <p/> */
	export interface EnableLoggingMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateEnableLoggingMessageFormGroup() {
		return new FormGroup<EnableLoggingMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface EnableSnapshotCopyMessage {

		/** Required */
		ClusterIdentifier: string;

		/** Required */
		DestinationRegion: string;
		RetentionPeriod?: number | null;
		SnapshotCopyGrantName?: string | null;
		ManualSnapshotRetentionPeriod?: number | null;
	}

	/** <p/> */
	export interface EnableSnapshotCopyMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DestinationRegion: FormControl<string | null | undefined>,
		RetentionPeriod: FormControl<number | null | undefined>,
		SnapshotCopyGrantName: FormControl<string | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
	}
	export function CreateEnableSnapshotCopyMessageFormGroup() {
		return new FormGroup<EnableSnapshotCopyMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined),
			SnapshotCopyGrantName: new FormControl<string | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request parameters to get cluster credentials. */
	export interface GetClusterCredentialsMessage {

		/** Required */
		DbUser: string;
		DbName?: string | null;

		/** Required */
		ClusterIdentifier: string;
		DurationSeconds?: number | null;
		AutoCreate?: boolean | null;
		DbGroups?: Array<string>;
	}

	/** The request parameters to get cluster credentials. */
	export interface GetClusterCredentialsMessageFormProperties {

		/** Required */
		DbUser: FormControl<string | null | undefined>,
		DbName: FormControl<string | null | undefined>,

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		DurationSeconds: FormControl<number | null | undefined>,
		AutoCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateGetClusterCredentialsMessageFormGroup() {
		return new FormGroup<GetClusterCredentialsMessageFormProperties>({
			DbUser: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbName: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined),
			AutoCreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetReservedNodeExchangeOfferingsInputMessage {

		/** Required */
		ReservedNodeId: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface GetReservedNodeExchangeOfferingsInputMessageFormProperties {

		/** Required */
		ReservedNodeId: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetReservedNodeExchangeOfferingsInputMessageFormGroup() {
		return new FormGroup<GetReservedNodeExchangeOfferingsInputMessageFormProperties>({
			ReservedNodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Mode { standard = 0, 'high-performance' = 1 }

	export interface ModifyClusterDbRevisionMessage {

		/** Required */
		ClusterIdentifier: string;

		/** Required */
		RevisionTarget: string;
	}
	export interface ModifyClusterDbRevisionMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		RevisionTarget: FormControl<string | null | undefined>,
	}
	export function CreateModifyClusterDbRevisionMessageFormGroup() {
		return new FormGroup<ModifyClusterDbRevisionMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionTarget: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ModifyClusterIamRolesMessage {

		/** Required */
		ClusterIdentifier: string;
		AddIamRoles?: Array<string>;
		RemoveIamRoles?: Array<string>;
	}

	/** <p/> */
	export interface ModifyClusterIamRolesMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateModifyClusterIamRolesMessageFormGroup() {
		return new FormGroup<ModifyClusterIamRolesMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyClusterMaintenanceMessage {

		/** Required */
		ClusterIdentifier: string;
		DeferMaintenance?: boolean | null;
		DeferMaintenanceIdentifier?: string | null;
		DeferMaintenanceStartTime?: Date | null;
		DeferMaintenanceEndTime?: Date | null;
		DeferMaintenanceDuration?: number | null;
	}
	export interface ModifyClusterMaintenanceMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		DeferMaintenance: FormControl<boolean | null | undefined>,
		DeferMaintenanceIdentifier: FormControl<string | null | undefined>,
		DeferMaintenanceStartTime: FormControl<Date | null | undefined>,
		DeferMaintenanceEndTime: FormControl<Date | null | undefined>,
		DeferMaintenanceDuration: FormControl<number | null | undefined>,
	}
	export function CreateModifyClusterMaintenanceMessageFormGroup() {
		return new FormGroup<ModifyClusterMaintenanceMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeferMaintenance: new FormControl<boolean | null | undefined>(undefined),
			DeferMaintenanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DeferMaintenanceStartTime: new FormControl<Date | null | undefined>(undefined),
			DeferMaintenanceEndTime: new FormControl<Date | null | undefined>(undefined),
			DeferMaintenanceDuration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyClusterMessage {

		/** Required */
		ClusterIdentifier: string;
		ClusterType?: string | null;
		NodeType?: string | null;
		NumberOfNodes?: number | null;
		ClusterSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		MasterUserPassword?: string | null;
		ClusterParameterGroupName?: string | null;
		AutomatedSnapshotRetentionPeriod?: number | null;
		ManualSnapshotRetentionPeriod?: number | null;
		PreferredMaintenanceWindow?: string | null;
		ClusterVersion?: string | null;
		AllowVersionUpgrade?: boolean | null;
		HsmClientCertificateIdentifier?: string | null;
		HsmConfigurationIdentifier?: string | null;
		NewClusterIdentifier?: string | null;
		PubliclyAccessible?: boolean | null;
		ElasticIp?: string | null;
		EnhancedVpcRouting?: boolean | null;
		MaintenanceTrackName?: string | null;
		Encrypted?: boolean | null;
		KmsKeyId?: string | null;
	}

	/** <p/> */
	export interface ModifyClusterMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		ClusterType: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		ClusterParameterGroupName: FormControl<string | null | undefined>,
		AutomatedSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		ClusterVersion: FormControl<string | null | undefined>,
		AllowVersionUpgrade: FormControl<boolean | null | undefined>,
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
		NewClusterIdentifier: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		ElasticIp: FormControl<string | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateModifyClusterMessageFormGroup() {
		return new FormGroup<ModifyClusterMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClusterType: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			ClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			AutomatedSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			ClusterVersion: new FormControl<string | null | undefined>(undefined),
			AllowVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			NewClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			ElasticIp: new FormControl<string | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyClusterParameterGroupMessage {

		/** Required */
		ParameterGroupName: string;

		/** Required */
		Parameters: Array<Parameter>;
	}

	/** <p/> */
	export interface ModifyClusterParameterGroupMessageFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateModifyClusterParameterGroupMessageFormGroup() {
		return new FormGroup<ModifyClusterParameterGroupMessageFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyClusterSnapshotMessage {

		/** Required */
		SnapshotIdentifier: string;
		ManualSnapshotRetentionPeriod?: number | null;
		Force?: boolean | null;
	}
	export interface ModifyClusterSnapshotMessageFormProperties {

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyClusterSnapshotMessageFormGroup() {
		return new FormGroup<ModifyClusterSnapshotMessageFormProperties>({
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifyClusterSnapshotScheduleMessage {

		/** Required */
		ClusterIdentifier: string;
		ScheduleIdentifier?: string | null;
		DisassociateSchedule?: boolean | null;
	}
	export interface ModifyClusterSnapshotScheduleMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
		ScheduleIdentifier: FormControl<string | null | undefined>,
		DisassociateSchedule: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyClusterSnapshotScheduleMessageFormGroup() {
		return new FormGroup<ModifyClusterSnapshotScheduleMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
			DisassociateSchedule: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyClusterSubnetGroupMessage {

		/** Required */
		ClusterSubnetGroupName: string;
		Description?: string | null;

		/** Required */
		SubnetIds: Array<string>;
	}

	/** <p/> */
	export interface ModifyClusterSubnetGroupMessageFormProperties {

		/** Required */
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateModifyClusterSubnetGroupMessageFormGroup() {
		return new FormGroup<ModifyClusterSubnetGroupMessageFormProperties>({
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
		SnsTopicArn?: string | null;
		SourceType?: string | null;
		SourceIds?: Array<string>;
		EventCategories?: Array<string>;
		Severity?: string | null;
		Enabled?: boolean | null;
	}

	/** <p/> */
	export interface ModifyEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyEventSubscriptionMessageFormGroup() {
		return new FormGroup<ModifyEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifyScheduledActionMessage {

		/** Required */
		ScheduledActionName: string;

		/** The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. */
		TargetAction?: ScheduledActionType;
		Schedule?: string | null;
		IamRole?: string | null;
		ScheduledActionDescription?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Enable?: boolean | null;
	}
	export interface ModifyScheduledActionMessageFormProperties {

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		IamRole: FormControl<string | null | undefined>,
		ScheduledActionDescription: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Enable: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyScheduledActionMessageFormGroup() {
		return new FormGroup<ModifyScheduledActionMessageFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			IamRole: new FormControl<string | null | undefined>(undefined),
			ScheduledActionDescription: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Enable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifySnapshotCopyRetentionPeriodMessage {

		/** Required */
		ClusterIdentifier: string;

		/** Required */
		RetentionPeriod: number;
		Manual?: boolean | null;
	}

	/** <p/> */
	export interface ModifySnapshotCopyRetentionPeriodMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		RetentionPeriod: FormControl<number | null | undefined>,
		Manual: FormControl<boolean | null | undefined>,
	}
	export function CreateModifySnapshotCopyRetentionPeriodMessageFormGroup() {
		return new FormGroup<ModifySnapshotCopyRetentionPeriodMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetentionPeriod: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Manual: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifySnapshotScheduleMessage {

		/** Required */
		ScheduleIdentifier: string;

		/** Required */
		ScheduleDefinitions: Array<string>;
	}
	export interface ModifySnapshotScheduleMessageFormProperties {

		/** Required */
		ScheduleIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateModifySnapshotScheduleMessageFormGroup() {
		return new FormGroup<ModifySnapshotScheduleMessageFormProperties>({
			ScheduleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyUsageLimitMessage {

		/** Required */
		UsageLimitId: string;
		Amount?: number | null;
		BreachAction?: UsageLimitBreachAction | null;
	}
	export interface ModifyUsageLimitMessageFormProperties {

		/** Required */
		UsageLimitId: FormControl<string | null | undefined>,
		Amount: FormControl<number | null | undefined>,
		BreachAction: FormControl<UsageLimitBreachAction | null | undefined>,
	}
	export function CreateModifyUsageLimitMessageFormGroup() {
		return new FormGroup<ModifyUsageLimitMessageFormProperties>({
			UsageLimitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Amount: new FormControl<number | null | undefined>(undefined),
			BreachAction: new FormControl<UsageLimitBreachAction | null | undefined>(undefined),
		});

	}

	export enum OperatorType { eq = 0, lt = 1, gt = 2, le = 3, ge = 4, in = 5, between = 6 }


	/** <p/> */
	export interface PurchaseReservedNodeOfferingMessage {

		/** Required */
		ReservedNodeOfferingId: string;
		NodeCount?: number | null;
	}

	/** <p/> */
	export interface PurchaseReservedNodeOfferingMessageFormProperties {

		/** Required */
		ReservedNodeOfferingId: FormControl<string | null | undefined>,
		NodeCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseReservedNodeOfferingMessageFormGroup() {
		return new FormGroup<PurchaseReservedNodeOfferingMessageFormProperties>({
			ReservedNodeOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RebootClusterMessage {

		/** Required */
		ClusterIdentifier: string;
	}

	/** <p/> */
	export interface RebootClusterMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRebootClusterMessageFormGroup() {
		return new FormGroup<RebootClusterMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReservedNodeOfferingType { Regular = 0, Upgradable = 1 }


	/** <p/> */
	export interface ResetClusterParameterGroupMessage {

		/** Required */
		ParameterGroupName: string;
		ResetAllParameters?: boolean | null;
		Parameters?: Array<Parameter>;
	}

	/** <p/> */
	export interface ResetClusterParameterGroupMessageFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
		ResetAllParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateResetClusterParameterGroupMessageFormGroup() {
		return new FormGroup<ResetClusterParameterGroupMessageFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResetAllParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RestoreFromClusterSnapshotMessage {

		/** Required */
		ClusterIdentifier: string;

		/** Required */
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string | null;
		Port?: number | null;
		AvailabilityZone?: string | null;
		AllowVersionUpgrade?: boolean | null;
		ClusterSubnetGroupName?: string | null;
		PubliclyAccessible?: boolean | null;
		OwnerAccount?: string | null;
		HsmClientCertificateIdentifier?: string | null;
		HsmConfigurationIdentifier?: string | null;
		ElasticIp?: string | null;
		ClusterParameterGroupName?: string | null;
		ClusterSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		PreferredMaintenanceWindow?: string | null;
		AutomatedSnapshotRetentionPeriod?: number | null;
		ManualSnapshotRetentionPeriod?: number | null;
		KmsKeyId?: string | null;
		NodeType?: string | null;
		EnhancedVpcRouting?: boolean | null;
		AdditionalInfo?: string | null;
		IamRoles?: Array<string>;
		MaintenanceTrackName?: string | null;
		SnapshotScheduleIdentifier?: string | null;
		NumberOfNodes?: number | null;
	}

	/** <p/> */
	export interface RestoreFromClusterSnapshotMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotClusterIdentifier: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		AllowVersionUpgrade: FormControl<boolean | null | undefined>,
		ClusterSubnetGroupName: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
		HsmClientCertificateIdentifier: FormControl<string | null | undefined>,
		HsmConfigurationIdentifier: FormControl<string | null | undefined>,
		ElasticIp: FormControl<string | null | undefined>,
		ClusterParameterGroupName: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		AutomatedSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		ManualSnapshotRetentionPeriod: FormControl<number | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		EnhancedVpcRouting: FormControl<boolean | null | undefined>,
		AdditionalInfo: FormControl<string | null | undefined>,
		MaintenanceTrackName: FormControl<string | null | undefined>,
		SnapshotScheduleIdentifier: FormControl<string | null | undefined>,
		NumberOfNodes: FormControl<number | null | undefined>,
	}
	export function CreateRestoreFromClusterSnapshotMessageFormGroup() {
		return new FormGroup<RestoreFromClusterSnapshotMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			AllowVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			ClusterSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
			HsmClientCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			HsmConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			ElasticIp: new FormControl<string | null | undefined>(undefined),
			ClusterParameterGroupName: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			AutomatedSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			EnhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			AdditionalInfo: new FormControl<string | null | undefined>(undefined),
			MaintenanceTrackName: new FormControl<string | null | undefined>(undefined),
			SnapshotScheduleIdentifier: new FormControl<string | null | undefined>(undefined),
			NumberOfNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RestoreTableFromClusterSnapshotMessage {

		/** Required */
		ClusterIdentifier: string;

		/** Required */
		SnapshotIdentifier: string;

		/** Required */
		SourceDatabaseName: string;
		SourceSchemaName?: string | null;

		/** Required */
		SourceTableName: string;
		TargetDatabaseName?: string | null;
		TargetSchemaName?: string | null;

		/** Required */
		NewTableName: string;
	}

	/** <p/> */
	export interface RestoreTableFromClusterSnapshotMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SourceDatabaseName: FormControl<string | null | undefined>,
		SourceSchemaName: FormControl<string | null | undefined>,

		/** Required */
		SourceTableName: FormControl<string | null | undefined>,
		TargetDatabaseName: FormControl<string | null | undefined>,
		TargetSchemaName: FormControl<string | null | undefined>,

		/** Required */
		NewTableName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreTableFromClusterSnapshotMessageFormGroup() {
		return new FormGroup<RestoreTableFromClusterSnapshotMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceSchemaName: new FormControl<string | null | undefined>(undefined),
			SourceTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDatabaseName: new FormControl<string | null | undefined>(undefined),
			TargetSchemaName: new FormControl<string | null | undefined>(undefined),
			NewTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface RevokeClusterSecurityGroupIngressMessage {

		/** Required */
		ClusterSecurityGroupName: string;
		CIDRIP?: string | null;
		EC2SecurityGroupName?: string | null;
		EC2SecurityGroupOwnerId?: string | null;
	}

	/** <p/> */
	export interface RevokeClusterSecurityGroupIngressMessageFormProperties {

		/** Required */
		ClusterSecurityGroupName: FormControl<string | null | undefined>,
		CIDRIP: FormControl<string | null | undefined>,
		EC2SecurityGroupName: FormControl<string | null | undefined>,
		EC2SecurityGroupOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateRevokeClusterSecurityGroupIngressMessageFormGroup() {
		return new FormGroup<RevokeClusterSecurityGroupIngressMessageFormProperties>({
			ClusterSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CIDRIP: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupName: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupOwnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RevokeSnapshotAccessMessage {

		/** Required */
		SnapshotIdentifier: string;
		SnapshotClusterIdentifier?: string | null;

		/** Required */
		AccountWithRestoreAccess: string;
	}

	/** <p/> */
	export interface RevokeSnapshotAccessMessageFormProperties {

		/** Required */
		SnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		AccountWithRestoreAccess: FormControl<string | null | undefined>,
	}
	export function CreateRevokeSnapshotAccessMessageFormGroup() {
		return new FormGroup<RevokeSnapshotAccessMessageFormProperties>({
			SnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			AccountWithRestoreAccess: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface RotateEncryptionKeyMessage {

		/** Required */
		ClusterIdentifier: string;
	}

	/** <p/> */
	export interface RotateEncryptionKeyMessageFormProperties {

		/** Required */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRotateEncryptionKeyMessageFormGroup() {
		return new FormGroup<RotateEncryptionKeyMessageFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SnapshotAttributeToSortBy { SOURCE_TYPE = 0, TOTAL_SIZE = 1, CREATE_TIME = 2 }

	export enum SortByOrder { ASC = 0, DESC = 1 }

	export enum TableRestoreStatusType { PENDING = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, CANCELED = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.
		 * Get #Action=AcceptReservedNodeExchange
		 * @param {string} ReservedNodeId A string representing the node identifier of the DC1 Reserved Node to be exchanged.
		 * @param {string} TargetReservedNodeOfferingId The unique identifier of the DC2 Reserved Node offering to be used for the exchange. You can obtain the value for the parameter by calling <a>GetReservedNodeExchangeOfferings</a> 
		 * @return {void} Success
		 */
		GET_AcceptReservedNodeExchange(ReservedNodeId: string, TargetReservedNodeOfferingId: string, Action: GET_AcceptReservedNodeExchangeAction, Version: GET_AcceptReservedNodeExchangeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AcceptReservedNodeExchange?ReservedNodeId=' + (ReservedNodeId == null ? '' : encodeURIComponent(ReservedNodeId)) + '&TargetReservedNodeOfferingId=' + (TargetReservedNodeOfferingId == null ? '' : encodeURIComponent(TargetReservedNodeOfferingId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same AWS Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=AuthorizeClusterSecurityGroupIngress
		 * @param {string} ClusterSecurityGroupName The name of the security group to which the ingress rule is added.
		 * @param {string} CIDRIP The IP range to be added the Amazon Redshift security group.
		 * @param {string} EC2SecurityGroupName The EC2 security group to be added the Amazon Redshift security group.
		 * @param {string} EC2SecurityGroupOwnerId <p>The AWS account number of the owner of the security group specified by the <i>EC2SecurityGroupName</i> parameter. The AWS Access Key ID is not an acceptable value. </p> <p>Example: <code>111122223333</code> </p>
		 * @return {void} Success
		 */
		GET_AuthorizeClusterSecurityGroupIngress(ClusterSecurityGroupName: string, CIDRIP: string | null | undefined, EC2SecurityGroupName: string | null | undefined, EC2SecurityGroupOwnerId: string | null | undefined, Action: GET_AuthorizeClusterSecurityGroupIngressAction, Version: GET_AuthorizeClusterSecurityGroupIngressVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AuthorizeClusterSecurityGroupIngress?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Authorizes the specified AWS customer account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=AuthorizeSnapshotAccess
		 * @param {string} SnapshotIdentifier The identifier of the snapshot the account is authorized to restore.
		 * @param {string} SnapshotClusterIdentifier The identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
		 * @param {string} AccountWithRestoreAccess <p>The identifier of the AWS customer account authorized to restore the specified snapshot.</p> <p>To share a snapshot with AWS support, specify amazon-redshift-support.</p>
		 * @return {void} Success
		 */
		GET_AuthorizeSnapshotAccess(SnapshotIdentifier: string, SnapshotClusterIdentifier: string | null | undefined, AccountWithRestoreAccess: string, Action: GET_AuthorizeSnapshotAccessAction, Version: GET_AuthorizeSnapshotAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AuthorizeSnapshotAccess?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&AccountWithRestoreAccess=' + (AccountWithRestoreAccess == null ? '' : encodeURIComponent(AccountWithRestoreAccess)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a set of cluster snapshots.
		 * Get #Action=BatchDeleteClusterSnapshots
		 * @param {Array<DeleteClusterSnapshotMessage>} Identifiers A list of identifiers for the snapshots that you want to delete.
		 * @return {void} Success
		 */
		GET_BatchDeleteClusterSnapshots(Identifiers: Array<DeleteClusterSnapshotMessage>, Action: GET_BatchDeleteClusterSnapshotsAction, Version: GET_BatchDeleteClusterSnapshotsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchDeleteClusterSnapshots?' + Identifiers.map(z => `Identifiers=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the settings for a set of cluster snapshots.
		 * Get #Action=BatchModifyClusterSnapshots
		 * @param {Array<string>} SnapshotIdentifierList A list of snapshot identifiers you want to modify.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If you specify the value -1, the manual snapshot is retained indefinitely.</p> <p>The number must be either -1 or an integer between 1 and 3,653.</p> <p>If you decrease the manual snapshot retention period from its current value, existing manual snapshots that fall outside of the new retention period will return an error. If you want to suppress the errors and delete the snapshots, use the force option. </p>
		 * @param {boolean} Force A boolean value indicating whether to override an exception if the retention period has passed. 
		 * @return {void} Success
		 */
		GET_BatchModifyClusterSnapshots(SnapshotIdentifierList: Array<string>, ManualSnapshotRetentionPeriod: number | null | undefined, Force: boolean | null | undefined, Action: GET_BatchModifyClusterSnapshotsAction, Version: GET_BatchModifyClusterSnapshotsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchModifyClusterSnapshots?' + SnapshotIdentifierList.map(z => `SnapshotIdentifierList=${encodeURIComponent(z)}`).join('&') + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Force=' + Force + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a resize operation for a cluster.
		 * Get #Action=CancelResize
		 * @param {string} ClusterIdentifier The unique identifier for the cluster that you want to cancel a resize operation for.
		 * @return {void} Success
		 */
		GET_CancelResize(ClusterIdentifier: string, Action: GET_CancelResizeAction, Version: GET_CancelResizeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CancelResize?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=CopyClusterSnapshot
		 * @param {string} SourceSnapshotIdentifier <p>The identifier for the source snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must be the identifier for a valid automated snapshot whose state is <code>available</code>.</p> </li> </ul>
		 * @param {string} SourceSnapshotClusterIdentifier <p>The identifier of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.</p> <p>Constraints:</p> <ul> <li> <p>Must be the identifier for a valid cluster.</p> </li> </ul>
		 * @param {string} TargetSnapshotIdentifier <p>The identifier given to the new manual snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for the AWS account that is making the request.</p> </li> </ul>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. </p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @return {void} Success
		 */
		GET_CopyClusterSnapshot(SourceSnapshotIdentifier: string, SourceSnapshotClusterIdentifier: string | null | undefined, TargetSnapshotIdentifier: string, ManualSnapshotRetentionPeriod: number | null | undefined, Action: GET_CopyClusterSnapshotAction, Version: GET_CopyClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyClusterSnapshot?SourceSnapshotIdentifier=' + (SourceSnapshotIdentifier == null ? '' : encodeURIComponent(SourceSnapshotIdentifier)) + '&SourceSnapshotClusterIdentifier=' + (SourceSnapshotClusterIdentifier == null ? '' : encodeURIComponent(SourceSnapshotClusterIdentifier)) + '&TargetSnapshotIdentifier=' + (TargetSnapshotIdentifier == null ? '' : encodeURIComponent(TargetSnapshotIdentifier)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=CreateCluster
		 * @param {string} DBName <p>The name of the first database to be created when the cluster is created.</p> <p>To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html">Create a Database</a> in the Amazon Redshift Database Developer Guide. </p> <p>Default: <code>dev</code> </p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 alphanumeric characters.</p> </li> <li> <p>Must contain only lowercase letters.</p> </li> <li> <p>Cannot be a word that is reserved by the service. A list of reserved words can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide. </p> </li> </ul>
		 * @param {string} ClusterIdentifier <p>A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. The identifier also appears in the Amazon Redshift console.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul> <p>Example: <code>myexamplecluster</code> </p>
		 * @param {string} ClusterType <p>The type of the cluster. When cluster type is specified as</p> <ul> <li> <p> <code>single-node</code>, the <b>NumberOfNodes</b> parameter is not required.</p> </li> <li> <p> <code>multi-node</code>, the <b>NumberOfNodes</b> parameter is required.</p> </li> </ul> <p>Valid Values: <code>multi-node</code> | <code>single-node</code> </p> <p>Default: <code>multi-node</code> </p>
		 * @param {string} NodeType <p>The node type to be provisioned for the cluster. For information about node types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> | <code>dc1.large</code> | <code>dc1.8xlarge</code> | <code>dc2.large</code> | <code>dc2.8xlarge</code> | <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code> </p>
		 * @param {string} MasterUsername <p>The user name associated with the master user account for the cluster that is being created.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 - 128 alphanumeric characters. The user name can't be <code>PUBLIC</code>.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide. </p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password associated with the master user account for the cluster that is being created.</p> <p>Constraints:</p> <ul> <li> <p>Must be between 8 and 64 characters in length.</p> </li> <li> <p>Must contain at least one uppercase letter.</p> </li> <li> <p>Must contain at least one lowercase letter.</p> </li> <li> <p>Must contain one number.</p> </li> <li> <p>Can be any printable ASCII character (ASCII code 33 to 126) except ' (single quote), " (double quote), \, /, @, or space.</p> </li> </ul>
		 * @param {Array<string>} ClusterSecurityGroups <p>A list of security groups to be associated with this cluster.</p> <p>Default: The default cluster security group for Amazon Redshift.</p>
		 * @param {Array<string>} VpcSecurityGroupIds <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.</p> <p>Default: The default VPC security group is associated with the cluster.</p>
		 * @param {string} ClusterSubnetGroupName <p>The name of a cluster subnet group to be associated with this cluster.</p> <p>If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).</p>
		 * @param {string} AvailabilityZone <p>The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.</p> <p>Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint.</p> <p>Example: <code>us-east-2d</code> </p> <p>Constraint: The specified Availability Zone must be in the same region as the current endpoint.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which automated cluster maintenance can occur.</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. For more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide.</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} ClusterParameterGroupName <p>The name of the parameter group to be associated with this cluster.</p> <p>Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon Redshift Parameter Groups</a> </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {number} AutomatedSnapshotRetentionPeriod <p>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p> <p>Default: <code>1</code> </p> <p>Constraints: Must be a value from 0 to 35.</p>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @param {number} Port <p>The port number on which the cluster accepts incoming connections.</p> <p>The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections.</p> <p>Default: <code>5439</code> </p> <p>Valid Values: <code>1150-65535</code> </p>
		 * @param {string} ClusterVersion <p>The version of the Amazon Redshift engine software that you want to deploy on the cluster.</p> <p>The version selected runs on all the nodes in the cluster.</p> <p>Constraints: Only version 1.0 is currently available.</p> <p>Example: <code>1.0</code> </p>
		 * @param {boolean} AllowVersionUpgrade <p>If <code>true</code>, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.</p> <p>When a new major version of the Amazon Redshift engine is released, you can request that the service automatically apply upgrades during the maintenance window to the Amazon Redshift engine that is running on your cluster.</p> <p>Default: <code>true</code> </p>
		 * @param {number} NumberOfNodes <p>The number of compute nodes in the cluster. This parameter is required when the <b>ClusterType</b> parameter is specified as <code>multi-node</code>. </p> <p>For information about determining how many nodes you need, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p> <p>If you don't specify this parameter, you get a single-node cluster. When requesting a multi-node cluster, you must specify the number of nodes that you want in the cluster.</p> <p>Default: <code>1</code> </p> <p>Constraints: Value must be at least 1 and no more than 100.</p>
		 * @param {boolean} PubliclyAccessible If <code>true</code>, the cluster can be accessed from a public network. 
		 * @param {boolean} Encrypted <p>If <code>true</code>, the data in the cluster is encrypted at rest. </p> <p>Default: false</p>
		 * @param {string} HsmClientCertificateIdentifier Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
		 * @param {string} HsmConfigurationIdentifier Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
		 * @param {string} ElasticIp <p>The Elastic IP (EIP) address for the cluster.</p> <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. For more information about provisioning clusters in EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @param {string} KmsKeyId The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
		 * @param {boolean} EnhancedVpcRouting <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
		 * @param {string} AdditionalInfo Reserved.
		 * @param {Array<string>} IamRoles <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 10 IAM roles in a single request.</p> <p>A cluster can have up to 10 IAM roles associated with it at any time.</p>
		 * @param {string} MaintenanceTrackName An optional parameter for the name of the maintenance track for the cluster. If you don't provide a maintenance track name, the cluster is assigned to the <code>current</code> track.
		 * @param {string} SnapshotScheduleIdentifier A unique identifier for the snapshot schedule.
		 * @return {void} Success
		 */
		GET_CreateCluster(DBName: string | null | undefined, ClusterIdentifier: string, ClusterType: string | null | undefined, NodeType: string, MasterUsername: string, MasterUserPassword: string, ClusterSecurityGroups: Array<string> | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, ClusterSubnetGroupName: string | null | undefined, AvailabilityZone: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, ClusterParameterGroupName: string | null | undefined, AutomatedSnapshotRetentionPeriod: number | null | undefined, ManualSnapshotRetentionPeriod: number | null | undefined, Port: number | null | undefined, ClusterVersion: string | null | undefined, AllowVersionUpgrade: boolean | null | undefined, NumberOfNodes: number | null | undefined, PubliclyAccessible: boolean | null | undefined, Encrypted: boolean | null | undefined, HsmClientCertificateIdentifier: string | null | undefined, HsmConfigurationIdentifier: string | null | undefined, ElasticIp: string | null | undefined, Tags: Array<Tag> | null | undefined, KmsKeyId: string | null | undefined, EnhancedVpcRouting: boolean | null | undefined, AdditionalInfo: string | null | undefined, IamRoles: Array<string> | null | undefined, MaintenanceTrackName: string | null | undefined, SnapshotScheduleIdentifier: string | null | undefined, Action: GET_CreateClusterAction, Version: GET_CreateClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateCluster?DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ClusterType=' + (ClusterType == null ? '' : encodeURIComponent(ClusterType)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&' + ClusterSecurityGroups?.map(z => `ClusterSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&ClusterParameterGroupName=' + (ClusterParameterGroupName == null ? '' : encodeURIComponent(ClusterParameterGroupName)) + '&AutomatedSnapshotRetentionPeriod=' + AutomatedSnapshotRetentionPeriod + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Port=' + Port + '&ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&AllowVersionUpgrade=' + AllowVersionUpgrade + '&NumberOfNodes=' + NumberOfNodes + '&PubliclyAccessible=' + PubliclyAccessible + '&Encrypted=' + Encrypted + '&HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&ElasticIp=' + (ElasticIp == null ? '' : encodeURIComponent(ElasticIp)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnhancedVpcRouting=' + EnhancedVpcRouting + '&AdditionalInfo=' + (AdditionalInfo == null ? '' : encodeURIComponent(AdditionalInfo)) + '&' + IamRoles?.map(z => `IamRoles=${encodeURIComponent(z)}`).join('&') + '&MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&SnapshotScheduleIdentifier=' + (SnapshotScheduleIdentifier == null ? '' : encodeURIComponent(SnapshotScheduleIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=CreateClusterParameterGroup
		 * @param {string} ParameterGroupName <p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique withing your AWS account.</p> </li> </ul> <note> <p>This value is stored as a lower-case string.</p> </note>
		 * @param {string} ParameterGroupFamily <p>The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters.</p> <p>To get a list of valid parameter group family names, you can call <a>DescribeClusterParameterGroups</a>. By default, Amazon Redshift returns a list of all the parameter groups that are owned by your AWS account, including the default parameter groups for each Amazon Redshift engine version. The parameter group family names associated with the default parameter groups provide you the valid values. For example, a valid family name is "redshift-1.0". </p>
		 * @param {string} Description A description of the parameter group.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterParameterGroup(ParameterGroupName: string, ParameterGroupFamily: string, Description: string, Tags: Array<Tag> | null | undefined, Action: GET_CreateClusterParameterGroupAction, Version: GET_CreateClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&ParameterGroupFamily=' + (ParameterGroupFamily == null ? '' : encodeURIComponent(ParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=CreateClusterSecurityGroup
		 * @param {string} ClusterSecurityGroupName <p>The name for the security group. Amazon Redshift stores the value as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain no more than 255 alphanumeric characters or hyphens.</p> </li> <li> <p>Must not be "Default".</p> </li> <li> <p>Must be unique for all security groups that are created by your AWS account.</p> </li> </ul> <p>Example: <code>examplesecuritygroup</code> </p>
		 * @param {string} Description A description for the security group.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterSecurityGroup(ClusterSecurityGroupName: string, Description: string, Tags: Array<Tag> | null | undefined, Action: GET_CreateClusterSecurityGroupAction, Version: GET_CreateClusterSecurityGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateClusterSecurityGroup?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=CreateClusterSnapshot
		 * @param {string} SnapshotIdentifier <p>A unique identifier for the snapshot that you are requesting. This identifier must be unique for all snapshots within the AWS account.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} ClusterIdentifier The cluster identifier for which you want a snapshot.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. </p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterSnapshot(SnapshotIdentifier: string, ClusterIdentifier: string, ManualSnapshotRetentionPeriod: number | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateClusterSnapshotAction, Version: GET_CreateClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateClusterSnapshot?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=CreateClusterSubnetGroup
		 * @param {string} ClusterSubnetGroupName <p>The name for the subnet group. Amazon Redshift stores the value as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain no more than 255 alphanumeric characters or hyphens.</p> </li> <li> <p>Must not be "Default".</p> </li> <li> <p>Must be unique for all subnet groups that are created by your AWS account.</p> </li> </ul> <p>Example: <code>examplesubnetgroup</code> </p>
		 * @param {string} Description A description for the subnet group.
		 * @param {Array<string>} SubnetIds An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single request.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateClusterSubnetGroup(ClusterSubnetGroupName: string, Description: string, SubnetIds: Array<string>, Tags: Array<Tag> | null | undefined, Action: GET_CreateClusterSubnetGroupAction, Version: GET_CreateClusterSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateClusterSubnetGroup?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your AWS account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your AWS account. You must specify a source type if you specify a source ID.</p>
		 * Get #Action=CreateEventSubscription
		 * @param {string} SubscriptionName <p>The name of the event subscription to be created.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your AWS account. You must specify a source type in order to specify source IDs.</p> <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
		 * @param {Array<string>} SourceIds <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified.</p> <p>Example: my-cluster-1, my-cluster-2</p> <p>Example: my-snapshot-20131010</p>
		 * @param {Array<string>} EventCategories <p>Specifies the Amazon Redshift event categories to be published by the event notification subscription.</p> <p>Values: configuration, management, monitoring, security</p>
		 * @param {string} Severity <p>Specifies the Amazon Redshift event severity to be published by the event notification subscription.</p> <p>Values: ERROR, INFO</p>
		 * @param {boolean} Enabled A boolean value; set to <code>true</code> to activate the subscription, and set to <code>false</code> to create the subscription but not activate it. 
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string | null | undefined, SourceIds: Array<string> | null | undefined, EventCategories: Array<string> | null | undefined, Severity: string | null | undefined, Enabled: boolean | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateEventSubscriptionAction, Version: GET_CreateEventSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + SourceIds?.map(z => `SourceIds=${encodeURIComponent(z)}`).join('&') + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&Severity=' + (Severity == null ? '' : encodeURIComponent(Severity)) + '&Enabled=' + Enabled + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * Get #Action=CreateHsmClientCertificate
		 * @param {string} HsmClientCertificateIdentifier The identifier to be assigned to the new HSM client certificate that the cluster will use to connect to the HSM to use the database encryption keys.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateHsmClientCertificate(HsmClientCertificateIdentifier: string, Tags: Array<Tag> | null | undefined, Action: GET_CreateHsmClientCertificateAction, Version: GET_CreateHsmClientCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateHsmClientCertificate?HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * Get #Action=CreateHsmConfiguration
		 * @param {string} HsmConfigurationIdentifier The identifier to be assigned to the new Amazon Redshift HSM configuration.
		 * @param {string} Description A text description of the HSM configuration to be created.
		 * @param {string} HsmIpAddress The IP address that the Amazon Redshift cluster must use to access the HSM.
		 * @param {string} HsmPartitionName The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.
		 * @param {string} HsmPartitionPassword The password required to access the HSM partition.
		 * @param {string} HsmServerPublicCertificate The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateHsmConfiguration(HsmConfigurationIdentifier: string, Description: string, HsmIpAddress: string, HsmPartitionName: string, HsmPartitionPassword: string, HsmServerPublicCertificate: string, Tags: Array<Tag> | null | undefined, Action: GET_CreateHsmConfigurationAction, Version: GET_CreateHsmConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateHsmConfiguration?HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&HsmIpAddress=' + (HsmIpAddress == null ? '' : encodeURIComponent(HsmIpAddress)) + '&HsmPartitionName=' + (HsmPartitionName == null ? '' : encodeURIComponent(HsmPartitionName)) + '&HsmPartitionPassword=' + (HsmPartitionPassword == null ? '' : encodeURIComponent(HsmPartitionPassword)) + '&HsmServerPublicCertificate=' + (HsmServerPublicCertificate == null ? '' : encodeURIComponent(HsmServerPublicCertificate)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
		 * Get #Action=CreateScheduledAction
		 * @param {string} ScheduledActionName The name of the scheduled action. The name must be unique within an account. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {GET_CreateScheduledActionTargetAction} TargetAction A JSON format string of the Amazon Redshift API operation with input parameters. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {string} Schedule The schedule in <code>at( )</code> or <code>cron( )</code> format. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {string} IamRole The IAM role to assume to run the target action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {string} ScheduledActionDescription The description of the scheduled action. 
		 * @param {Date} StartTime The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {Date} EndTime The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {boolean} Enable If true, the schedule is enabled. If false, the scheduled action does not trigger. For more information about <code>state</code> of the scheduled action, see <a>ScheduledAction</a>. 
		 * @return {void} Success
		 */
		GET_CreateScheduledAction(ScheduledActionName: string, TargetAction: GET_CreateScheduledActionTargetAction, Schedule: string, IamRole: string, ScheduledActionDescription: string | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Enable: boolean | null | undefined, Action: GET_CreateScheduledActionAction, Version: GET_CreateScheduledActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateScheduledAction?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&TargetAction=' + TargetAction + '&Schedule=' + (Schedule == null ? '' : encodeURIComponent(Schedule)) + '&IamRole=' + (IamRole == null ? '' : encodeURIComponent(IamRole)) + '&ScheduledActionDescription=' + (ScheduledActionDescription == null ? '' : encodeURIComponent(ScheduledActionDescription)) + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Enable=' + Enable + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a snapshot copy grant that permits Amazon Redshift to use a customer master key (CMK) from AWS Key Management Service (AWS KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
		 * Get #Action=CreateSnapshotCopyGrant
		 * @param {string} SnapshotCopyGrantName <p>The name of the snapshot copy grant. This name must be unique in the region for the AWS account.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul>
		 * @param {string} KmsKeyId The unique identifier of the customer master key (CMK) to which to grant Amazon Redshift permission. If no key is specified, the default key is used.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateSnapshotCopyGrant(SnapshotCopyGrantName: string, KmsKeyId: string | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateSnapshotCopyGrantAction, Version: GET_CreateSnapshotCopyGrantVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateSnapshotCopyGrant?SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.
		 * Get #Action=CreateSnapshotSchedule
		 * @param {Array<string>} ScheduleDefinitions The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)". 
		 * @param {string} ScheduleIdentifier A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed for the identifier.
		 * @param {string} ScheduleDescription The description of the snapshot schedule.
		 * @param {Array<Tag>} Tags An optional set of tags you can use to search for the schedule.
		 * @param {boolean} DryRun <p/>
		 * @param {number} NextInvocations <p/>
		 * @return {void} Success
		 */
		GET_CreateSnapshotSchedule(ScheduleDefinitions: Array<string> | null | undefined, ScheduleIdentifier: string | null | undefined, ScheduleDescription: string | null | undefined, Tags: Array<Tag> | null | undefined, DryRun: boolean | null | undefined, NextInvocations: number | null | undefined, Action: GET_CreateSnapshotScheduleAction, Version: GET_CreateSnapshotScheduleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateSnapshotSchedule?' + ScheduleDefinitions?.map(z => `ScheduleDefinitions=${encodeURIComponent(z)}`).join('&') + '&ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&ScheduleDescription=' + (ScheduleDescription == null ? '' : encodeURIComponent(ScheduleDescription)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&DryRun=' + DryRun + '&NextInvocations=' + NextInvocations + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>
		 * Get #Action=CreateTags
		 * @param {string} ResourceName The Amazon Resource Name (ARN) to which you want to add the tag or tags. For example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. 
		 * @param {Array<Tag>} Tags One or more name/value pairs to add as tags to the specified resource. Each tag name is passed in with the parameter <code>Key</code> and the corresponding value is passed in with the parameter <code>Value</code>. The <code>Key</code> and <code>Value</code> parameters are separated by a comma (,). Separate multiple tags with a space. For example, <code>--tags "Key"="owner","Value"="admin" "Key"="environment","Value"="test" "Key"="version","Value"="1.0"</code>. 
		 * @return {void} Success
		 */
		GET_CreateTags(ResourceName: string, Tags: Array<Tag>, Action: GET_CreateTagsAction, Version: GET_CreateTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateTags?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
		 * Get #Action=CreateUsageLimit
		 * @param {string} ClusterIdentifier The identifier of the cluster that you want to limit usage.
		 * @param {GET_CreateUsageLimitFeatureType} FeatureType The Amazon Redshift feature that you want to limit.
		 * @param {GET_CreateUsageLimitLimitType} LimitType The type of limit. Depending on the feature type, this can be based on a time duration or data size. If <code>FeatureType</code> is <code>spectrum</code>, then <code>LimitType</code> must be <code>data-scanned</code>. If <code>FeatureType</code> is <code>concurrency-scaling</code>, then <code>LimitType</code> must be <code>time</code>. 
		 * @param {number} Amount The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number. 
		 * @param {UsageLimitPeriod} Period The time period that the amount applies to. A <code>weekly</code> period begins on Sunday. The default is <code>monthly</code>. 
		 * @param {GET_CreateUsageLimitBreachAction} BreachAction The action that Amazon Redshift takes when the limit is reached. The default is log. For more information about this parameter, see <a>UsageLimit</a>.
		 * @param {Array<Tag>} Tags A list of tag instances.
		 * @return {void} Success
		 */
		GET_CreateUsageLimit(ClusterIdentifier: string, FeatureType: GET_CreateUsageLimitFeatureType, LimitType: GET_CreateUsageLimitLimitType, Amount: number, Period: UsageLimitPeriod | null | undefined, BreachAction: GET_CreateUsageLimitBreachAction | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateUsageLimitAction, Version: GET_CreateUsageLimitVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateUsageLimit?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&FeatureType=' + FeatureType + '&LimitType=' + LimitType + '&Amount=' + Amount + '&Period=' + Period + '&BreachAction=' + BreachAction + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=DeleteCluster
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster to be deleted.</p> <p>Constraints:</p> <ul> <li> <p>Must contain lowercase characters.</p> </li> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {boolean} SkipFinalClusterSnapshot <p>Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If <code>true</code>, a final cluster snapshot is not created. If <code>false</code>, a final cluster snapshot is created before the cluster is deleted. </p> <note> <p>The <i>FinalClusterSnapshotIdentifier</i> parameter must be specified if <i>SkipFinalClusterSnapshot</i> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>
		 * @param {string} FinalClusterSnapshotIdentifier <p>The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, <i>SkipFinalClusterSnapshot</i> must be <code>false</code>. </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {number} FinalClusterSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @return {void} Success
		 */
		GET_DeleteCluster(ClusterIdentifier: string, SkipFinalClusterSnapshot: boolean | null | undefined, FinalClusterSnapshotIdentifier: string | null | undefined, FinalClusterSnapshotRetentionPeriod: number | null | undefined, Action: GET_DeleteClusterAction, Version: GET_DeleteClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SkipFinalClusterSnapshot=' + SkipFinalClusterSnapshot + '&FinalClusterSnapshotIdentifier=' + (FinalClusterSnapshotIdentifier == null ? '' : encodeURIComponent(FinalClusterSnapshotIdentifier)) + '&FinalClusterSnapshotRetentionPeriod=' + FinalClusterSnapshotRetentionPeriod + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
		 * Get #Action=DeleteClusterParameterGroup
		 * @param {string} ParameterGroupName <p>The name of the parameter group to be deleted.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing cluster parameter group.</p> </li> <li> <p>Cannot delete a default cluster parameter group.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteClusterParameterGroup(ParameterGroupName: string, Action: GET_DeleteClusterParameterGroupAction, Version: GET_DeleteClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=DeleteClusterSecurityGroup
		 * @param {string} ClusterSecurityGroupName The name of the cluster security group to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteClusterSecurityGroup(ClusterSecurityGroupName: string, Action: GET_DeleteClusterSecurityGroupAction, Version: GET_DeleteClusterSecurityGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteClusterSecurityGroup?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
		 * Get #Action=DeleteClusterSnapshot
		 * @param {string} SnapshotIdentifier <p>The unique identifier of the manual snapshot to be deleted.</p> <p>Constraints: Must be the name of an existing snapshot that is in the <code>available</code>, <code>failed</code>, or <code>cancelled</code> state.</p>
		 * @param {string} SnapshotClusterIdentifier <p>The unique identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.</p> <p>Constraints: Must be the name of valid cluster.</p>
		 * @return {void} Success
		 */
		GET_DeleteClusterSnapshot(SnapshotIdentifier: string, SnapshotClusterIdentifier: string | null | undefined, Action: GET_DeleteClusterSnapshotAction, Version: GET_DeleteClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteClusterSnapshot?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified cluster subnet group.
		 * Get #Action=DeleteClusterSubnetGroup
		 * @param {string} ClusterSubnetGroupName The name of the cluster subnet group name to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteClusterSubnetGroup(ClusterSubnetGroupName: string, Action: GET_DeleteClusterSubnetGroupAction, Version: GET_DeleteClusterSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteClusterSubnetGroup?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Amazon Redshift event notification subscription.
		 * Get #Action=DeleteEventSubscription
		 * @param {string} SubscriptionName The name of the Amazon Redshift event notification subscription to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteEventSubscription(SubscriptionName: string, Action: GET_DeleteEventSubscriptionAction, Version: GET_DeleteEventSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified HSM client certificate.
		 * Get #Action=DeleteHsmClientCertificate
		 * @param {string} HsmClientCertificateIdentifier The identifier of the HSM client certificate to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteHsmClientCertificate(HsmClientCertificateIdentifier: string, Action: GET_DeleteHsmClientCertificateAction, Version: GET_DeleteHsmClientCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteHsmClientCertificate?HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified Amazon Redshift HSM configuration.
		 * Get #Action=DeleteHsmConfiguration
		 * @param {string} HsmConfigurationIdentifier The identifier of the Amazon Redshift HSM configuration to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteHsmConfiguration(HsmConfigurationIdentifier: string, Action: GET_DeleteHsmConfigurationAction, Version: GET_DeleteHsmConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteHsmConfiguration?HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a scheduled action.
		 * Get #Action=DeleteScheduledAction
		 * @param {string} ScheduledActionName The name of the scheduled action to delete. 
		 * @return {void} Success
		 */
		GET_DeleteScheduledAction(ScheduledActionName: string, Action: GET_DeleteScheduledActionAction, Version: GET_DeleteScheduledActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteScheduledAction?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified snapshot copy grant.
		 * Get #Action=DeleteSnapshotCopyGrant
		 * @param {string} SnapshotCopyGrantName The name of the snapshot copy grant to delete.
		 * @return {void} Success
		 */
		GET_DeleteSnapshotCopyGrant(SnapshotCopyGrantName: string, Action: GET_DeleteSnapshotCopyGrantAction, Version: GET_DeleteSnapshotCopyGrantVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSnapshotCopyGrant?SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a snapshot schedule.
		 * Get #Action=DeleteSnapshotSchedule
		 * @param {string} ScheduleIdentifier A unique identifier of the snapshot schedule to delete.
		 * @return {void} Success
		 */
		GET_DeleteSnapshotSchedule(ScheduleIdentifier: string, Action: GET_DeleteSnapshotScheduleAction, Version: GET_DeleteSnapshotScheduleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSnapshotSchedule?ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
		 * Get #Action=DeleteTags
		 * @param {string} ResourceName The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. 
		 * @param {Array<string>} TagKeys The tag key that you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteTags(ResourceName: string, TagKeys: Array<string>, Action: GET_DeleteTagsAction, Version: GET_DeleteTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteTags?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a usage limit from a cluster.
		 * Get #Action=DeleteUsageLimit
		 * @param {string} UsageLimitId The identifier of the usage limit to delete.
		 * @return {void} Success
		 */
		GET_DeleteUsageLimit(UsageLimitId: string, Action: GET_DeleteUsageLimitAction, Version: GET_DeleteUsageLimitVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteUsageLimit?UsageLimitId=' + (UsageLimitId == null ? '' : encodeURIComponent(UsageLimitId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of attributes attached to an account
		 * Get #Action=DescribeAccountAttributes
		 * @param {Array<string>} AttributeNames A list of attribute names.
		 * @return {void} Success
		 */
		GET_DescribeAccountAttributes(AttributeNames: Array<string> | null | undefined, Action: GET_DescribeAccountAttributesAction, Version: GET_DescribeAccountAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountAttributes?' + AttributeNames?.map(z => `AttributeNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an array of <code>ClusterDbRevision</code> objects.
		 * Get #Action=DescribeClusterDbRevisions
		 * @param {string} ClusterIdentifier A unique identifier for a cluster whose <code>ClusterDbRevisions</code> you are requesting. This parameter is case sensitive. All clusters defined for an account are returned by default.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in the <code>marker</code> field of the response. You can retrieve the next set of response records by providing the returned <code>marker</code> value in the <code>marker</code> parameter and retrying the request. </p> <p>Default: 100</p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point for returning a set of response records. When the results of a <code>DescribeClusterDbRevisions</code> request exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the <code>marker</code> field of the response. You can retrieve the next set of response records by providing the returned <code>marker</code> value in the <code>marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <code>ClusterIdentifier</code> parameter, or the <code>marker</code> parameter, but not both.</p>
		 * @return {void} Success
		 */
		GET_DescribeClusterDbRevisions(ClusterIdentifier: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeClusterDbRevisionsAction, Version: GET_DescribeClusterDbRevisionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterDbRevisions?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeClusterParameterGroups
		 * @param {string} ParameterGroupName The name of a specific parameter group for which to return details. By default, details about all parameter groups and the default parameter group are returned.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterParameterGroups</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching cluster parameter groups that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching cluster parameter groups that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusterParameterGroups(ParameterGroupName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeClusterParameterGroupsAction, Version: GET_DescribeClusterParameterGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterParameterGroups?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=DescribeClusterParameters
		 * @param {string} ParameterGroupName The name of a cluster parameter group for which to return details.
		 * @param {string} Source <p>The parameter types to return. Specify <code>user</code> to show parameters that are different form the default. Similarly, specify <code>engine-default</code> to show parameters that are the same as the default parameter group. </p> <p>Default: All parameter types returned.</p> <p>Valid Values: <code>user</code> | <code>engine-default</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterParameters</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeClusterParameters(ParameterGroupName: string, Source: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeClusterParametersAction, Version: GET_DescribeClusterParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterParameters?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeClusterSecurityGroups
		 * @param {string} ClusterSecurityGroupName <p>The name of a cluster security group for which you are requesting details. You can specify either the <b>Marker</b> parameter or a <b>ClusterSecurityGroupName</b> parameter, but not both. </p> <p> Example: <code>securitygroup1</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterSecurityGroups</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <b>ClusterSecurityGroupName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching cluster security groups that are associated with the specified key or keys. For example, suppose that you have security groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching cluster security groups that are associated with the specified tag value or values. For example, suppose that you have security groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusterSecurityGroups(ClusterSecurityGroupName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeClusterSecurityGroupsAction, Version: GET_DescribeClusterSecurityGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterSecurityGroups?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by you AWS customer account. No information is returned for snapshots owned by inactive AWS customer accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeClusterSnapshots
		 * @param {string} ClusterIdentifier The identifier of the cluster which generated the requested snapshots.
		 * @param {string} SnapshotIdentifier The snapshot identifier of the snapshot about which to return information.
		 * @param {string} SnapshotType <p>The type of snapshots for which you are requesting information. By default, snapshots of all types are returned.</p> <p>Valid Values: <code>automated</code> | <code>manual</code> </p>
		 * @param {Date} StartTime <p>A value that requests only snapshots created at or after the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2012-07-16T18:00:00Z</code> </p>
		 * @param {Date} EndTime <p>A time value that requests only snapshots created at or before the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2012-07-16T18:00:00Z</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterSnapshots</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {string} OwnerAccount The AWS customer account used to create or copy the snapshot. Use this field to filter the results to snapshots owned by a particular account. To describe snapshots you own, either specify your AWS customer account, or do not specify the parameter.
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching cluster snapshots that are associated with the specified key or keys. For example, suppose that you have snapshots that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching cluster snapshots that are associated with the specified tag value or values. For example, suppose that you have snapshots that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag values associated with them.
		 * @param {boolean} ClusterExists <p>A value that indicates whether to return snapshots only for an existing cluster. You can perform table-level restore only by using a snapshot of an existing cluster, that is, a cluster that has not been deleted. Values for this parameter work as follows: </p> <ul> <li> <p>If <code>ClusterExists</code> is set to <code>true</code>, <code>ClusterIdentifier</code> is required.</p> </li> <li> <p>If <code>ClusterExists</code> is set to <code>false</code> and <code>ClusterIdentifier</code> isn't specified, all snapshots associated with deleted clusters (orphaned snapshots) are returned. </p> </li> <li> <p>If <code>ClusterExists</code> is set to <code>false</code> and <code>ClusterIdentifier</code> is specified for a deleted cluster, snapshots associated with that cluster are returned.</p> </li> <li> <p>If <code>ClusterExists</code> is set to <code>false</code> and <code>ClusterIdentifier</code> is specified for an existing cluster, no snapshots are returned. </p> </li> </ul>
		 * @param {Array<SnapshotSortingEntity>} SortingEntities <p/>
		 * @return {void} Success
		 */
		GET_DescribeClusterSnapshots(ClusterIdentifier: string | null | undefined, SnapshotIdentifier: string | null | undefined, SnapshotType: string | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, OwnerAccount: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, ClusterExists: boolean | null | undefined, SortingEntities: Array<SnapshotSortingEntity> | null | undefined, Action: GET_DescribeClusterSnapshotsAction, Version: GET_DescribeClusterSnapshotsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterSnapshots?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&ClusterExists=' + ClusterExists + '&' + SortingEntities?.map(z => `SortingEntities=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in you AWS account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeClusterSubnetGroups
		 * @param {string} ClusterSubnetGroupName The name of the cluster subnet group for which information is requested.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterSubnetGroups</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching cluster subnet groups that are associated with the specified key or keys. For example, suppose that you have subnet groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching cluster subnet groups that are associated with the specified tag value or values. For example, suppose that you have subnet groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusterSubnetGroups(ClusterSubnetGroupName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeClusterSubnetGroupsAction, Version: GET_DescribeClusterSubnetGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterSubnetGroups?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of all the available maintenance tracks.
		 * Get #Action=DescribeClusterTracks
		 * @param {string} MaintenanceTrackName The name of the maintenance track. 
		 * @param {number} MaxRecords An integer value for the maximum number of maintenance tracks to return.
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <code>DescribeClusterTracks</code> request exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeClusterTracks(MaintenanceTrackName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeClusterTracksAction, Version: GET_DescribeClusterTracksVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterTracks?MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get #Action=DescribeClusterVersions
		 * @param {string} ClusterVersion <p>The specific cluster version to return.</p> <p>Example: <code>1.0</code> </p>
		 * @param {string} ClusterParameterGroupFamily <p>The name of a specific cluster parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterVersions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeClusterVersions(ClusterVersion: string | null | undefined, ClusterParameterGroupFamily: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeClusterVersionsAction, Version: GET_DescribeClusterVersionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusterVersions?ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&ClusterParameterGroupFamily=' + (ClusterParameterGroupFamily == null ? '' : encodeURIComponent(ClusterParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeClusters
		 * @param {string} ClusterIdentifier <p>The unique identifier of a cluster whose properties you are requesting. This parameter is case sensitive.</p> <p>The default is that all clusters defined for an account are returned.</p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusters</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <b>ClusterIdentifier</b> parameter or the <b>Marker</b> parameter, but not both. </p>
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching clusters that are associated with the specified key or keys. For example, suppose that you have clusters that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching clusters that are associated with the specified tag value or values. For example, suppose that you have clusters that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeClusters(ClusterIdentifier: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeClustersAction, Version: GET_DescribeClustersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeClusters?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=DescribeDefaultClusterParameters
		 * @param {string} ParameterGroupFamily The name of the cluster parameter group family.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDefaultClusterParameters</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeDefaultClusterParameters(ParameterGroupFamily: string, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDefaultClusterParametersAction, Version: GET_DescribeDefaultClusterParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDefaultClusterParameters?ParameterGroupFamily=' + (ParameterGroupFamily == null ? '' : encodeURIComponent(ParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
		 * Get #Action=DescribeEventCategories
		 * @param {string} SourceType <p>The source type, such as cluster or parameter group, to which the described event categories apply.</p> <p>Valid values: cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, and scheduled-action.</p>
		 * @return {void} Success
		 */
		GET_DescribeEventCategories(SourceType: string | null | undefined, Action: GET_DescribeEventCategoriesAction, Version: GET_DescribeEventCategoriesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventCategories?SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeEventSubscriptions
		 * @param {string} SubscriptionName The name of the Amazon Redshift event notification subscription to be described.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeEventSubscriptions request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching event notification subscriptions that are associated with the specified key or keys. For example, suppose that you have subscriptions that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching event notification subscriptions that are associated with the specified tag value or values. For example, suppose that you have subscriptions that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeEventSubscriptions(SubscriptionName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeEventSubscriptionsAction, Version: GET_DescribeEventSubscriptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventSubscriptions?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
		 * Get #Action=DescribeEvents
		 * @param {string} SourceIdentifier <p>The identifier of the event source for which events will be returned. If this parameter is not specified, then all sources are included in the response.</p> <p>Constraints:</p> <p>If <i>SourceIdentifier</i> is supplied, <i>SourceType</i> must also be provided.</p> <ul> <li> <p>Specify a cluster identifier when <i>SourceType</i> is <code>cluster</code>.</p> </li> <li> <p>Specify a cluster security group name when <i>SourceType</i> is <code>cluster-security-group</code>.</p> </li> <li> <p>Specify a cluster parameter group name when <i>SourceType</i> is <code>cluster-parameter-group</code>.</p> </li> <li> <p>Specify a cluster snapshot identifier when <i>SourceType</i> is <code>cluster-snapshot</code>.</p> </li> </ul>
		 * @param {GET_DescribeEventsSourceType} SourceType <p>The event source to retrieve events for. If no value is specified, all events are returned.</p> <p>Constraints:</p> <p>If <i>SourceType</i> is supplied, <i>SourceIdentifier</i> must also be provided.</p> <ul> <li> <p>Specify <code>cluster</code> when <i>SourceIdentifier</i> is a cluster identifier.</p> </li> <li> <p>Specify <code>cluster-security-group</code> when <i>SourceIdentifier</i> is a cluster security group name.</p> </li> <li> <p>Specify <code>cluster-parameter-group</code> when <i>SourceIdentifier</i> is a cluster parameter group name.</p> </li> <li> <p>Specify <code>cluster-snapshot</code> when <i>SourceIdentifier</i> is a cluster snapshot identifier.</p> </li> </ul>
		 * @param {Date} StartTime <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2009-07-08T18:00Z</code> </p>
		 * @param {Date} EndTime <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: <code>2009-07-08T18:00Z</code> </p>
		 * @param {number} Duration <p>The number of minutes prior to the time of the request for which to retrieve events. For example, if the request is sent at 18:00 and you specify a duration of 60, then only events which have occurred after 17:00 will be returned.</p> <p>Default: <code>60</code> </p>
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeEvents</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string | null | undefined, SourceType: GET_DescribeEventsSourceType | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Duration: number | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEventsAction, Version: GET_DescribeEventsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Duration=' + Duration + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your AWS customer account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeHsmClientCertificates
		 * @param {string} HsmClientCertificateIdentifier The identifier of a specific HSM client certificate for which you want information. If no identifier is specified, information is returned for all HSM client certificates owned by your AWS customer account.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeHsmClientCertificates</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching HSM client certificates that are associated with the specified key or keys. For example, suppose that you have HSM client certificates that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching HSM client certificates that are associated with the specified tag value or values. For example, suppose that you have HSM client certificates that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeHsmClientCertificates(HsmClientCertificateIdentifier: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeHsmClientCertificatesAction, Version: GET_DescribeHsmClientCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeHsmClientCertificates?HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your AWS customer account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeHsmConfigurations
		 * @param {string} HsmConfigurationIdentifier The identifier of a specific Amazon Redshift HSM configuration to be described. If no identifier is specified, information is returned for all HSM configurations owned by your AWS customer account.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeHsmConfigurations</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching HSM configurations that are associated with the specified key or keys. For example, suppose that you have HSM configurations that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching HSM configurations that are associated with the specified tag value or values. For example, suppose that you have HSM configurations that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeHsmConfigurations(HsmConfigurationIdentifier: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeHsmConfigurationsAction, Version: GET_DescribeHsmConfigurationsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeHsmConfigurations?HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
		 * Get #Action=DescribeLoggingStatus
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster from which to get the logging status.</p> <p>Example: <code>examplecluster</code> </p>
		 * @return {void} Success
		 */
		GET_DescribeLoggingStatus(ClusterIdentifier: string, Action: GET_DescribeLoggingStatusAction, Version: GET_DescribeLoggingStatusVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoggingStatus?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.
		 * Get #Action=DescribeNodeConfigurationOptions
		 * @param {GET_DescribeNodeConfigurationOptionsActionType} ActionType The action type to evaluate for possible node configurations. Specify "restore-cluster" to get configuration combinations based on an existing snapshot. Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot. Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster. 
		 * @param {string} ClusterIdentifier The identifier of the cluster to evaluate for possible node configurations.
		 * @param {string} SnapshotIdentifier The identifier of the snapshot to evaluate for possible node configurations.
		 * @param {string} OwnerAccount The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
		 * @param {Array<NodeConfigurationOptionsFilter>} Filter A set of name, operator, and value items to filter the results.
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeNodeConfigurationOptions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>500</code> </p> <p>Constraints: minimum 100, maximum 500.</p>
		 * @return {void} Success
		 */
		GET_DescribeNodeConfigurationOptions(ActionType: GET_DescribeNodeConfigurationOptionsActionType, ClusterIdentifier: string | null | undefined, SnapshotIdentifier: string | null | undefined, OwnerAccount: string | null | undefined, Filter: Array<NodeConfigurationOptionsFilter> | null | undefined, Marker: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeNodeConfigurationOptionsAction, Version: GET_DescribeNodeConfigurationOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeNodeConfigurationOptions?ActionType=' + ActionType + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&' + Filter?.map(z => `Filter=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific AWS Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get #Action=DescribeOrderableClusterOptions
		 * @param {string} ClusterVersion <p>The version filter value. Specify this parameter to show only the available offerings matching the specified version.</p> <p>Default: All versions.</p> <p>Constraints: Must be one of the version returned from <a>DescribeClusterVersions</a>.</p>
		 * @param {string} NodeType The node type filter value. Specify this parameter to show only the available offerings matching the specified node type.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeOrderableClusterOptions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeOrderableClusterOptions(ClusterVersion: string | null | undefined, NodeType: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeOrderableClusterOptionsAction, Version: GET_DescribeOrderableClusterOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOrderableClusterOptions?ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=DescribeReservedNodeOfferings
		 * @param {string} ReservedNodeOfferingId The unique identifier for the offering.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeReservedNodeOfferings</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeReservedNodeOfferings(ReservedNodeOfferingId: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeReservedNodeOfferingsAction, Version: GET_DescribeReservedNodeOfferingsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReservedNodeOfferings?ReservedNodeOfferingId=' + (ReservedNodeOfferingId == null ? '' : encodeURIComponent(ReservedNodeOfferingId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the descriptions of the reserved nodes.
		 * Get #Action=DescribeReservedNodes
		 * @param {string} ReservedNodeId Identifier for the node reservation.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeReservedNodes</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @return {void} Success
		 */
		GET_DescribeReservedNodes(ReservedNodeId: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeReservedNodesAction, Version: GET_DescribeReservedNodesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReservedNodes?ReservedNodeId=' + (ReservedNodeId == null ? '' : encodeURIComponent(ReservedNodeId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
		 * Get #Action=DescribeResize
		 * @param {string} ClusterIdentifier <p>The unique identifier of a cluster whose resize progress you are requesting. This parameter is case-sensitive.</p> <p>By default, resize operations for all clusters defined for an AWS account are returned.</p>
		 * @return {void} Success
		 */
		GET_DescribeResize(ClusterIdentifier: string, Action: GET_DescribeResizeAction, Version: GET_DescribeResizeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeResize?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes properties of scheduled actions.
		 * Get #Action=DescribeScheduledActions
		 * @param {string} ScheduledActionName The name of the scheduled action to retrieve. 
		 * @param {ScheduledActionTypeValues} TargetActionType The type of the scheduled actions to retrieve. 
		 * @param {Date} StartTime The start time in UTC of the scheduled actions to retrieve. Only active scheduled actions that have invocations after this time are retrieved.
		 * @param {Date} EndTime The end time in UTC of the scheduled action to retrieve. Only active scheduled actions that have invocations before this time are retrieved.
		 * @param {boolean} Active If true, retrieve only active scheduled actions. If false, retrieve only disabled scheduled actions. 
		 * @param {Array<ScheduledActionFilter>} Filters List of scheduled action filters. 
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeScheduledActions</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribeScheduledActions(ScheduledActionName: string | null | undefined, TargetActionType: ScheduledActionTypeValues | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Active: boolean | null | undefined, Filters: Array<ScheduledActionFilter> | null | undefined, Marker: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeScheduledActionsAction, Version: GET_DescribeScheduledActionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScheduledActions?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&TargetActionType=' + TargetActionType + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Active=' + Active + '&' + Filters?.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of snapshot copy grants owned by the AWS account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
		 * Get #Action=DescribeSnapshotCopyGrants
		 * @param {string} SnapshotCopyGrantName The name of the snapshot copy grant.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p> <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeSnapshotCopyGrants(SnapshotCopyGrantName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeSnapshotCopyGrantsAction, Version: GET_DescribeSnapshotCopyGrantsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeSnapshotCopyGrants?SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of snapshot schedules.
		 * Get #Action=DescribeSnapshotSchedules
		 * @param {string} ClusterIdentifier The unique identifier for the cluster whose snapshot schedules you want to view.
		 * @param {string} ScheduleIdentifier A unique identifier for a snapshot schedule.
		 * @param {Array<string>} TagKeys The key value for a snapshot schedule tag.
		 * @param {Array<string>} TagValues The value corresponding to the key of the snapshot schedule tag.
		 * @param {string} Marker A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>marker</code> parameter and retrying the command. If the <code>marker</code> field is empty, all response records have been retrieved for the request.
		 * @param {number} MaxRecords The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned <code>marker</code> value.
		 * @return {void} Success
		 */
		GET_DescribeSnapshotSchedules(ClusterIdentifier: string | null | undefined, ScheduleIdentifier: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Marker: string | null | undefined, MaxRecords: number | null | undefined, Action: GET_DescribeSnapshotSchedulesAction, Version: GET_DescribeSnapshotSchedulesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeSnapshotSchedules?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns account level backups storage size and provisional storage.
		 * Get #Action=DescribeStorage
		 * @return {void} Success
		 */
		GET_DescribeStorage(Action: GET_DescribeStorageAction, Version: GET_DescribeStorageVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStorage?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns account level backups storage size and provisional storage.
		 * Post #Action=DescribeStorage
		 * @return {void} Success
		 */
		POST_DescribeStorage(Action: GET_DescribeStorageAction, Version: POST_DescribeStorageVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeStorage?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
		 * Get #Action=DescribeTableRestoreStatus
		 * @param {string} ClusterIdentifier The Amazon Redshift cluster that the table is being restored to.
		 * @param {string} TableRestoreRequestId The identifier of the table restore request to return status for. If you don't specify a <code>TableRestoreRequestId</code> value, then <code>DescribeTableRestoreStatus</code> returns the status of all in-progress table restore requests.
		 * @param {number} MaxRecords The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeTableRestoreStatus</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the <code>MaxRecords</code> parameter.
		 * @return {void} Success
		 */
		GET_DescribeTableRestoreStatus(ClusterIdentifier: string | null | undefined, TableRestoreRequestId: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeTableRestoreStatusAction, Version: GET_DescribeTableRestoreStatusVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTableRestoreStatus?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&TableRestoreRequestId=' + (TableRestoreRequestId == null ? '' : encodeURIComponent(TableRestoreRequestId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
		 * Get #Action=DescribeTags
		 * @param {string} ResourceName The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. 
		 * @param {string} ResourceType <p>The type of resource with which you want to view tags. Valid resource types are: </p> <ul> <li> <p>Cluster</p> </li> <li> <p>CIDR/IP</p> </li> <li> <p>EC2 security group</p> </li> <li> <p>Snapshot</p> </li> <li> <p>Cluster security group</p> </li> <li> <p>Subnet group</p> </li> <li> <p>HSM connection</p> </li> <li> <p>HSM certificate</p> </li> <li> <p>Parameter group</p> </li> <li> <p>Snapshot copy grant</p> </li> </ul> <p>For more information about Amazon Redshift resource types and constructing ARNs, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Specifying Policy Elements: Actions, Effects, Resources, and Principals</a> in the Amazon Redshift Cluster Management Guide. </p>
		 * @param {number} MaxRecords The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned <code>marker</code> value. 
		 * @param {string} Marker A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>marker</code> parameter and retrying the command. If the <code>marker</code> field is empty, all response records have been retrieved for the request. 
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeTags(ResourceName: string | null | undefined, ResourceType: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeTagsAction, Version: GET_DescribeTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTags?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&ResourceType=' + (ResourceType == null ? '' : encodeURIComponent(ResourceType)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
		 * Get #Action=DescribeUsageLimits
		 * @param {string} UsageLimitId The identifier of the usage limit to describe.
		 * @param {string} ClusterIdentifier The identifier of the cluster for which you want to describe usage limits.
		 * @param {GET_DescribeUsageLimitsFeatureType} FeatureType The feature type for which you want to describe usage limits.
		 * @param {number} MaxRecords <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeUsageLimits</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
		 * @param {Array<string>} TagKeys A tag key or keys for which you want to return all matching usage limit objects that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called <code>owner</code> and <code>environment</code>. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the usage limit objects have either or both of these tag keys associated with them.
		 * @param {Array<string>} TagValues A tag value or values for which you want to return all matching usage limit objects that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called <code>admin</code> and <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift returns a response with the usage limit objects that have either or both of these tag values associated with them.
		 * @return {void} Success
		 */
		GET_DescribeUsageLimits(UsageLimitId: string | null | undefined, ClusterIdentifier: string | null | undefined, FeatureType: GET_DescribeUsageLimitsFeatureType | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, TagKeys: Array<string> | null | undefined, TagValues: Array<string> | null | undefined, Action: GET_DescribeUsageLimitsAction, Version: GET_DescribeUsageLimitsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeUsageLimits?UsageLimitId=' + (UsageLimitId == null ? '' : encodeURIComponent(UsageLimitId)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&FeatureType=' + FeatureType + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&' + TagKeys?.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&' + TagValues?.map(z => `TagValues=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
		 * Get #Action=DisableLogging
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster on which logging is to be stopped.</p> <p>Example: <code>examplecluster</code> </p>
		 * @return {void} Success
		 */
		GET_DisableLogging(ClusterIdentifier: string, Action: GET_DisableLoggingAction, Version: GET_DisableLoggingVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisableLogging?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using a customer master key (CMK) from AWS KMS, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the CMK in the destination region. </p>
		 * Get #Action=DisableSnapshotCopy
		 * @param {string} ClusterIdentifier <p>The unique identifier of the source cluster that you want to disable copying of snapshots to a destination region.</p> <p>Constraints: Must be the valid name of an existing cluster that has cross-region snapshot copy enabled.</p>
		 * @return {void} Success
		 */
		GET_DisableSnapshotCopy(ClusterIdentifier: string, Action: GET_DisableSnapshotCopyAction, Version: GET_DisableSnapshotCopyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisableSnapshotCopy?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
		 * Get #Action=EnableLogging
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster on which logging is to be started.</p> <p>Example: <code>examplecluster</code> </p>
		 * @param {string} BucketName <p>The name of an existing S3 bucket where the log files are to be stored.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the same region as the cluster</p> </li> <li> <p>The cluster must have read bucket and put object permissions</p> </li> </ul>
		 * @param {string} S3KeyPrefix <p>The prefix applied to the log file names.</p> <p>Constraints:</p> <ul> <li> <p>Cannot exceed 512 characters</p> </li> <li> <p>Cannot contain spaces( ), double quotes ("), single quotes ('), a backslash (\), or control characters. The hexadecimal codes for invalid characters are: </p> <ul> <li> <p>x00 to x20</p> </li> <li> <p>x22</p> </li> <li> <p>x27</p> </li> <li> <p>x5c</p> </li> <li> <p>x7f or larger</p> </li> </ul> </li> </ul>
		 * @return {void} Success
		 */
		GET_EnableLogging(ClusterIdentifier: string, BucketName: string, S3KeyPrefix: string | null | undefined, Action: GET_EnableLoggingAction, Version: GET_EnableLoggingVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableLogging?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&BucketName=' + (BucketName == null ? '' : encodeURIComponent(BucketName)) + '&S3KeyPrefix=' + (S3KeyPrefix == null ? '' : encodeURIComponent(S3KeyPrefix)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the automatic copy of snapshots from one region to another region for a specified cluster.
		 * Get #Action=EnableSnapshotCopy
		 * @param {string} ClusterIdentifier <p>The unique identifier of the source cluster to copy snapshots from.</p> <p>Constraints: Must be the valid name of an existing cluster that does not already have cross-region snapshot copy enabled.</p>
		 * @param {string} DestinationRegion <p>The destination AWS Region that you want to copy snapshots to.</p> <p>Constraints: Must be the name of a valid AWS Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region">Regions and Endpoints</a> in the Amazon Web Services General Reference. </p>
		 * @param {number} RetentionPeriod <p>The number of days to retain automated snapshots in the destination region after they are copied from the source region.</p> <p>Default: 7.</p> <p>Constraints: Must be at least 1 and no more than 35.</p>
		 * @param {string} SnapshotCopyGrantName The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is -1, the manual snapshot is retained indefinitely. </p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @return {void} Success
		 */
		GET_EnableSnapshotCopy(ClusterIdentifier: string, DestinationRegion: string, RetentionPeriod: number | null | undefined, SnapshotCopyGrantName: string | null | undefined, ManualSnapshotRetentionPeriod: number | null | undefined, Action: GET_EnableSnapshotCopyAction, Version: GET_EnableSnapshotCopyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableSnapshotCopy?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&DestinationRegion=' + (DestinationRegion == null ? '' : encodeURIComponent(DestinationRegion)) + '&RetentionPeriod=' + RetentionPeriod + '&SnapshotCopyGrantName=' + (SnapshotCopyGrantName == null ? '' : encodeURIComponent(SnapshotCopyGrantName)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The AWS Identity and Access Management (IAM)user or role that executes GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> privilege.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
		 * Get #Action=GetClusterCredentials
		 * @param {string} DbUser <p>The name of a database user. If a user name matching <code>DbUser</code> exists in the database, the temporary user credentials have the same permissions as the existing user. If <code>DbUser</code> doesn't exist in the database and <code>Autocreate</code> is <code>True</code>, a new user is created using the value for <code>DbUser</code> with PUBLIC permissions. If a database user matching the value for <code>DbUser</code> doesn't exist and <code>Autocreate</code> is <code>False</code>, then the command succeeds but the connection attempt will fail because the user doesn't exist in the database.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">CREATE USER</a> in the Amazon Redshift Database Developer Guide. </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be <code>PUBLIC</code>.</p> </li> <li> <p>Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Must not contain a colon ( : ) or slash ( / ). </p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p> </li> </ul>
		 * @param {string} DbName <p>The name of a database that <code>DbUser</code> is authorized to log on to. If <code>DbName</code> is not specified, <code>DbUser</code> can log on to any existing database.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 64 alphanumeric characters or hyphens</p> </li> <li> <p>Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Must not contain a colon ( : ) or slash ( / ). </p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p> </li> </ul>
		 * @param {string} ClusterIdentifier The unique identifier of the cluster that contains the database for which your are requesting credentials. This parameter is case sensitive.
		 * @param {number} DurationSeconds <p>The number of seconds until the returned temporary password expires.</p> <p>Constraint: minimum 900, maximum 3600.</p> <p>Default: 900</p>
		 * @param {boolean} AutoCreate Create a database user with the name specified for the user named in <code>DbUser</code> if one does not exist.
		 * @param {Array<string>} DbGroups <p>A list of the names of existing database groups that the user named in <code>DbUser</code> will join for the current session, in addition to any group memberships for an existing user. If not specified, a new user is added only to PUBLIC.</p> <p>Database group name constraints</p> <ul> <li> <p>Must be 1 to 64 alphanumeric characters or hyphens</p> </li> <li> <p>Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Must not contain a colon ( : ) or slash ( / ). </p> </li> <li> <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_GetClusterCredentials(DbUser: string, DbName: string | null | undefined, ClusterIdentifier: string, DurationSeconds: number | null | undefined, AutoCreate: boolean | null | undefined, DbGroups: Array<string> | null | undefined, Action: GET_GetClusterCredentialsAction, Version: GET_GetClusterCredentialsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetClusterCredentials?DbUser=' + (DbUser == null ? '' : encodeURIComponent(DbUser)) + '&DbName=' + (DbName == null ? '' : encodeURIComponent(DbName)) + '&ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&DurationSeconds=' + DurationSeconds + '&AutoCreate=' + AutoCreate + '&' + DbGroups?.map(z => `DbGroups=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
		 * Get #Action=GetReservedNodeExchangeOfferings
		 * @param {string} ReservedNodeId A string representing the node identifier for the DC1 Reserved Node to be exchanged.
		 * @param {number} MaxRecords An integer setting the maximum number of ReservedNodeOfferings to retrieve.
		 * @param {string} Marker A value that indicates the starting point for the next set of ReservedNodeOfferings.
		 * @return {void} Success
		 */
		GET_GetReservedNodeExchangeOfferings(ReservedNodeId: string, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_GetReservedNodeExchangeOfferingsAction, Version: GET_GetReservedNodeExchangeOfferingsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetReservedNodeExchangeOfferings?ReservedNodeId=' + (ReservedNodeId == null ? '' : encodeURIComponent(ReservedNodeId)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the master user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=ModifyCluster
		 * @param {string} ClusterIdentifier <p>The unique identifier of the cluster to be modified.</p> <p>Example: <code>examplecluster</code> </p>
		 * @param {string} ClusterType <p>The new cluster type.</p> <p>When you submit your cluster resize request, your existing cluster goes into a read-only mode. After Amazon Redshift provisions a new cluster based on your resize requirements, there will be outage for a period while the old cluster is deleted and your connection is switched to the new cluster. You can use <a>DescribeResize</a> to track the progress of the resize request. </p> <p>Valid Values: <code> multi-node | single-node </code> </p>
		 * @param {string} NodeType <p>The new node type of the cluster. If you specify a new node type, you must also specify the number of nodes parameter.</p> <p> For more information about resizing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> | <code>dc1.large</code> | <code>dc1.8xlarge</code> | <code>dc2.large</code> | <code>dc2.8xlarge</code> | <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code> </p>
		 * @param {number} NumberOfNodes <p>The new number of nodes of the cluster. If you specify a new number of nodes, you must also specify the node type parameter.</p> <p> For more information about resizing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>Valid Values: Integer greater than <code>0</code>.</p>
		 * @param {Array<string>} ClusterSecurityGroups <p>A list of cluster security groups to be authorized on this cluster. This change is asynchronously applied as soon as possible.</p> <p>Security groups currently associated with the cluster, and not in the list of groups to apply, will be revoked from the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {Array<string>} VpcSecurityGroupIds A list of virtual private cloud (VPC) security groups to be associated with the cluster. This change is asynchronously applied as soon as possible.
		 * @param {string} MasterUserPassword <p>The new password for the cluster master user. This change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the <code>MasterUserPassword</code> element exists in the <code>PendingModifiedValues</code> element of the operation response. </p> <note> <p>Operations never return the password, so this operation provides a way to regain access to the master user account for a cluster if the password is lost.</p> </note> <p>Default: Uses existing setting.</p> <p>Constraints:</p> <ul> <li> <p>Must be between 8 and 64 characters in length.</p> </li> <li> <p>Must contain at least one uppercase letter.</p> </li> <li> <p>Must contain at least one lowercase letter.</p> </li> <li> <p>Must contain one number.</p> </li> <li> <p>Can be any printable ASCII character (ASCII code 33 to 126) except ' (single quote), " (double quote), \, /, @, or space.</p> </li> </ul>
		 * @param {string} ClusterParameterGroupName <p>The name of the cluster parameter group to apply to this cluster. This change is applied only after the cluster is rebooted. To reboot a cluster use <a>RebootCluster</a>. </p> <p>Default: Uses existing setting.</p> <p>Constraints: The cluster parameter group must be in the same parameter group family that matches the cluster version.</p>
		 * @param {number} AutomatedSnapshotRetentionPeriod <p>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p> <p>If you decrease the automated snapshot retention period from its current value, existing automated snapshots that fall outside of the new retention period will be immediately deleted.</p> <p>Default: Uses existing setting.</p> <p>Constraints: Must be a value from 0 to 35.</p>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The default for number of days that a newly created manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. This value doesn't retroactively change the retention periods of existing manual snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p> <p>The default value is -1.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which system maintenance can occur, if necessary. If system maintenance is necessary during the window, it may result in an outage.</p> <p>This maintenance window change is made immediately. If the new maintenance window indicates the current time, there must be at least 120 minutes between the current time and end of the window in order to ensure that pending changes are applied.</p> <p>Default: Uses existing setting.</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi, for example <code>wed:07:30-wed:08:00</code>.</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes.</p>
		 * @param {string} ClusterVersion <p>The new version number of the Amazon Redshift engine to upgrade to.</p> <p>For major version upgrades, if a non-default cluster parameter group is currently in use, a new cluster parameter group in the cluster parameter group family for the new version must be specified. The new cluster parameter group can be the default for that cluster parameter group family. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>Example: <code>1.0</code> </p>
		 * @param {boolean} AllowVersionUpgrade <p>If <code>true</code>, major version upgrades will be applied automatically to the cluster during the maintenance window. </p> <p>Default: <code>false</code> </p>
		 * @param {string} HsmClientCertificateIdentifier Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
		 * @param {string} HsmConfigurationIdentifier Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
		 * @param {string} NewClusterIdentifier <p>The new identifier for the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul> <p>Example: <code>examplecluster</code> </p>
		 * @param {boolean} PubliclyAccessible If <code>true</code>, the cluster can be accessed from a public network. Only clusters in VPCs can be set to be publicly available.
		 * @param {string} ElasticIp <p>The Elastic IP (EIP) address for the cluster.</p> <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. For more information about provisioning clusters in EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
		 * @param {boolean} EnhancedVpcRouting <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
		 * @param {string} MaintenanceTrackName The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the <code>PendingModifiedValues</code> for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.
		 * @param {boolean} Encrypted <p>Indicates whether the cluster is encrypted. If the value is encrypted (true) and you provide a value for the <code>KmsKeyId</code> parameter, we encrypt the cluster with the provided <code>KmsKeyId</code>. If you don't provide a <code>KmsKeyId</code>, we encrypt with the default key. In the China region we use legacy encryption if you specify that the cluster is encrypted.</p> <p>If the value is not encrypted (false), then the cluster is decrypted. </p>
		 * @param {string} KmsKeyId The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
		 * @return {void} Success
		 */
		GET_ModifyCluster(ClusterIdentifier: string, ClusterType: string | null | undefined, NodeType: string | null | undefined, NumberOfNodes: number | null | undefined, ClusterSecurityGroups: Array<string> | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, MasterUserPassword: string | null | undefined, ClusterParameterGroupName: string | null | undefined, AutomatedSnapshotRetentionPeriod: number | null | undefined, ManualSnapshotRetentionPeriod: number | null | undefined, PreferredMaintenanceWindow: string | null | undefined, ClusterVersion: string | null | undefined, AllowVersionUpgrade: boolean | null | undefined, HsmClientCertificateIdentifier: string | null | undefined, HsmConfigurationIdentifier: string | null | undefined, NewClusterIdentifier: string | null | undefined, PubliclyAccessible: boolean | null | undefined, ElasticIp: string | null | undefined, EnhancedVpcRouting: boolean | null | undefined, MaintenanceTrackName: string | null | undefined, Encrypted: boolean | null | undefined, KmsKeyId: string | null | undefined, Action: GET_ModifyClusterAction, Version: GET_ModifyClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ClusterType=' + (ClusterType == null ? '' : encodeURIComponent(ClusterType)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&NumberOfNodes=' + NumberOfNodes + '&' + ClusterSecurityGroups?.map(z => `ClusterSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&ClusterParameterGroupName=' + (ClusterParameterGroupName == null ? '' : encodeURIComponent(ClusterParameterGroupName)) + '&AutomatedSnapshotRetentionPeriod=' + AutomatedSnapshotRetentionPeriod + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&ClusterVersion=' + (ClusterVersion == null ? '' : encodeURIComponent(ClusterVersion)) + '&AllowVersionUpgrade=' + AllowVersionUpgrade + '&HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&NewClusterIdentifier=' + (NewClusterIdentifier == null ? '' : encodeURIComponent(NewClusterIdentifier)) + '&PubliclyAccessible=' + PubliclyAccessible + '&ElasticIp=' + (ElasticIp == null ? '' : encodeURIComponent(ElasticIp)) + '&EnhancedVpcRouting=' + EnhancedVpcRouting + '&MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&Encrypted=' + Encrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
		 * Get #Action=ModifyClusterDbRevision
		 * @param {string} ClusterIdentifier <p>The unique identifier of a cluster whose database revision you want to modify. </p> <p>Example: <code>examplecluster</code> </p>
		 * @param {string} RevisionTarget The identifier of the database revision. You can retrieve this value from the response to the <a>DescribeClusterDbRevisions</a> request.
		 * @return {void} Success
		 */
		GET_ModifyClusterDbRevision(ClusterIdentifier: string, RevisionTarget: string, Action: GET_ModifyClusterDbRevisionAction, Version: GET_ModifyClusterDbRevisionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyClusterDbRevision?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&RevisionTarget=' + (RevisionTarget == null ? '' : encodeURIComponent(RevisionTarget)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.</p> <p>A cluster can have up to 10 IAM roles associated at any time.</p>
		 * Get #Action=ModifyClusterIamRoles
		 * @param {string} ClusterIdentifier The unique identifier of the cluster for which you want to associate or disassociate IAM roles.
		 * @param {Array<string>} AddIamRoles Zero or more IAM roles to associate with the cluster. The roles must be in their Amazon Resource Name (ARN) format. You can associate up to 10 IAM roles with a single cluster in a single request.
		 * @param {Array<string>} RemoveIamRoles Zero or more IAM roles in ARN format to disassociate from the cluster. You can disassociate up to 10 IAM roles from a single cluster in a single request.
		 * @return {void} Success
		 */
		GET_ModifyClusterIamRoles(ClusterIdentifier: string, AddIamRoles: Array<string> | null | undefined, RemoveIamRoles: Array<string> | null | undefined, Action: GET_ModifyClusterIamRolesAction, Version: GET_ModifyClusterIamRolesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyClusterIamRoles?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&' + AddIamRoles?.map(z => `AddIamRoles=${encodeURIComponent(z)}`).join('&') + '&' + RemoveIamRoles?.map(z => `RemoveIamRoles=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the maintenance settings of a cluster.
		 * Get #Action=ModifyClusterMaintenance
		 * @param {string} ClusterIdentifier A unique identifier for the cluster.
		 * @param {boolean} DeferMaintenance A boolean indicating whether to enable the deferred maintenance window. 
		 * @param {string} DeferMaintenanceIdentifier A unique identifier for the deferred maintenance window.
		 * @param {Date} DeferMaintenanceStartTime A timestamp indicating the start time for the deferred maintenance window.
		 * @param {Date} DeferMaintenanceEndTime A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.
		 * @param {number} DeferMaintenanceDuration An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 45 days or less.
		 * @return {void} Success
		 */
		GET_ModifyClusterMaintenance(ClusterIdentifier: string, DeferMaintenance: boolean | null | undefined, DeferMaintenanceIdentifier: string | null | undefined, DeferMaintenanceStartTime: Date | null | undefined, DeferMaintenanceEndTime: Date | null | undefined, DeferMaintenanceDuration: number | null | undefined, Action: GET_ModifyClusterMaintenanceAction, Version: GET_ModifyClusterMaintenanceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyClusterMaintenance?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&DeferMaintenance=' + DeferMaintenance + '&DeferMaintenanceIdentifier=' + (DeferMaintenanceIdentifier == null ? '' : encodeURIComponent(DeferMaintenanceIdentifier)) + '&DeferMaintenanceStartTime=' + DeferMaintenanceStartTime?.toISOString() + '&DeferMaintenanceEndTime=' + DeferMaintenanceEndTime?.toISOString() + '&DeferMaintenanceDuration=' + DeferMaintenanceDuration + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the parameters of a parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=ModifyClusterParameterGroup
		 * @param {string} ParameterGroupName The name of the parameter group to be modified.
		 * @param {Array<Parameter>} Parameters <p>An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.</p> <p>For each parameter to be modified, you must supply at least the parameter name and parameter value; other name-value pairs of the parameter are optional.</p> <p>For the workload management (WLM) configuration, you must supply all the name-value pairs in the wlm_json_configuration parameter.</p>
		 * @return {void} Success
		 */
		GET_ModifyClusterParameterGroup(ParameterGroupName: string, Parameters: Array<Parameter>, Action: GET_ModifyClusterParameterGroupAction, Version: GET_ModifyClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
		 * Get #Action=ModifyClusterSnapshot
		 * @param {string} SnapshotIdentifier The identifier of the snapshot whose setting you want to modify.
		 * @param {number} ManualSnapshotRetentionPeriod <p>The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.</p> <p>If the manual snapshot falls outside of the new retention period, you can specify the force option to immediately delete the snapshot.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @param {boolean} Force A Boolean option to override an exception if the retention period has already passed.
		 * @return {void} Success
		 */
		GET_ModifyClusterSnapshot(SnapshotIdentifier: string, ManualSnapshotRetentionPeriod: number | null | undefined, Force: boolean | null | undefined, Action: GET_ModifyClusterSnapshotAction, Version: GET_ModifyClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyClusterSnapshot?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&Force=' + Force + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a snapshot schedule for a cluster.
		 * Get #Action=ModifyClusterSnapshotSchedule
		 * @param {string} ClusterIdentifier A unique identifier for the cluster whose snapshot schedule you want to modify. 
		 * @param {string} ScheduleIdentifier A unique alphanumeric identifier for the schedule that you want to associate with the cluster.
		 * @param {boolean} DisassociateSchedule A boolean to indicate whether to remove the assoiciation between the cluster and the schedule.
		 * @return {void} Success
		 */
		GET_ModifyClusterSnapshotSchedule(ClusterIdentifier: string, ScheduleIdentifier: string | null | undefined, DisassociateSchedule: boolean | null | undefined, Action: GET_ModifyClusterSnapshotScheduleAction, Version: GET_ModifyClusterSnapshotScheduleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyClusterSnapshotSchedule?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&DisassociateSchedule=' + DisassociateSchedule + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
		 * Get #Action=ModifyClusterSubnetGroup
		 * @param {string} ClusterSubnetGroupName The name of the subnet group to be modified.
		 * @param {string} Description A text description of the subnet group to be modified.
		 * @param {Array<string>} SubnetIds An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single request.
		 * @return {void} Success
		 */
		GET_ModifyClusterSubnetGroup(ClusterSubnetGroupName: string, Description: string | null | undefined, SubnetIds: Array<string>, Action: GET_ModifyClusterSubnetGroupAction, Version: GET_ModifyClusterSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyClusterSubnetGroup?ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing Amazon Redshift event notification subscription.
		 * Get #Action=ModifyEventSubscription
		 * @param {string} SubscriptionName The name of the modified Amazon Redshift event notification subscription.
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic to be used by the event notification subscription.
		 * @param {string} SourceType <p>The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your AWS account. You must specify a source type in order to specify source IDs.</p> <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
		 * @param {Array<string>} SourceIds <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified.</p> <p>Example: my-cluster-1, my-cluster-2</p> <p>Example: my-snapshot-20131010</p>
		 * @param {Array<string>} EventCategories <p>Specifies the Amazon Redshift event categories to be published by the event notification subscription.</p> <p>Values: configuration, management, monitoring, security</p>
		 * @param {string} Severity <p>Specifies the Amazon Redshift event severity to be published by the event notification subscription.</p> <p>Values: ERROR, INFO</p>
		 * @param {boolean} Enabled A Boolean value indicating if the subscription is enabled. <code>true</code> indicates the subscription is enabled 
		 * @return {void} Success
		 */
		GET_ModifyEventSubscription(SubscriptionName: string, SnsTopicArn: string | null | undefined, SourceType: string | null | undefined, SourceIds: Array<string> | null | undefined, EventCategories: Array<string> | null | undefined, Severity: string | null | undefined, Enabled: boolean | null | undefined, Action: GET_ModifyEventSubscriptionAction, Version: GET_ModifyEventSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + SourceIds?.map(z => `SourceIds=${encodeURIComponent(z)}`).join('&') + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&Severity=' + (Severity == null ? '' : encodeURIComponent(Severity)) + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a scheduled action.
		 * Get #Action=ModifyScheduledAction
		 * @param {string} ScheduledActionName The name of the scheduled action to modify. 
		 * @param {GET_ModifyScheduledActionTargetAction} TargetAction A modified JSON format of the scheduled action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {string} Schedule A modified schedule in either <code>at( )</code> or <code>cron( )</code> format. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {string} IamRole A different IAM role to assume to run the target action. For more information about this parameter, see <a>ScheduledAction</a>.
		 * @param {string} ScheduledActionDescription A modified description of the scheduled action. 
		 * @param {Date} StartTime A modified start time of the scheduled action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {Date} EndTime A modified end time of the scheduled action. For more information about this parameter, see <a>ScheduledAction</a>. 
		 * @param {boolean} Enable A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled. 
		 * @return {void} Success
		 */
		GET_ModifyScheduledAction(ScheduledActionName: string, TargetAction: GET_ModifyScheduledActionTargetAction | null | undefined, Schedule: string | null | undefined, IamRole: string | null | undefined, ScheduledActionDescription: string | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Enable: boolean | null | undefined, Action: GET_ModifyScheduledActionAction, Version: GET_ModifyScheduledActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyScheduledAction?ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&TargetAction=' + TargetAction + '&Schedule=' + (Schedule == null ? '' : encodeURIComponent(Schedule)) + '&IamRole=' + (IamRole == null ? '' : encodeURIComponent(IamRole)) + '&ScheduledActionDescription=' + (ScheduledActionDescription == null ? '' : encodeURIComponent(ScheduledActionDescription)) + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Enable=' + Enable + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.
		 * Get #Action=ModifySnapshotCopyRetentionPeriod
		 * @param {string} ClusterIdentifier <p>The unique identifier of the cluster for which you want to change the retention period for either automated or manual snapshots that are copied to a destination AWS Region.</p> <p>Constraints: Must be the valid name of an existing cluster that has cross-region snapshot copy enabled.</p>
		 * @param {number} RetentionPeriod <p>The number of days to retain automated snapshots in the destination AWS Region after they are copied from the source AWS Region.</p> <p>By default, this only changes the retention period of copied automated snapshots. </p> <p>If you decrease the retention period for automated snapshots that are copied to a destination AWS Region, Amazon Redshift deletes any existing automated snapshots that were copied to the destination AWS Region and that fall outside of the new retention period.</p> <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p> <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will have the new retention period. </p> <p>If you specify the value of -1 newly copied manual snapshots are retained indefinitely.</p> <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653 for manual snapshots.</p>
		 * @param {boolean} Manual Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
		 * @return {void} Success
		 */
		GET_ModifySnapshotCopyRetentionPeriod(ClusterIdentifier: string, RetentionPeriod: number, Manual: boolean | null | undefined, Action: GET_ModifySnapshotCopyRetentionPeriodAction, Version: GET_ModifySnapshotCopyRetentionPeriodVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifySnapshotCopyRetentionPeriod?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&RetentionPeriod=' + RetentionPeriod + '&Manual=' + Manual + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
		 * Get #Action=ModifySnapshotSchedule
		 * @param {string} ScheduleIdentifier A unique alphanumeric identifier of the schedule to modify.
		 * @param {Array<string>} ScheduleDefinitions An updated list of schedule definitions. A schedule definition is made up of schedule expressions, for example, "cron(30 12 *)" or "rate(12 hours)".
		 * @return {void} Success
		 */
		GET_ModifySnapshotSchedule(ScheduleIdentifier: string, ScheduleDefinitions: Array<string>, Action: GET_ModifySnapshotScheduleAction, Version: GET_ModifySnapshotScheduleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifySnapshotSchedule?ScheduleIdentifier=' + (ScheduleIdentifier == null ? '' : encodeURIComponent(ScheduleIdentifier)) + '&' + ScheduleDefinitions.map(z => `ScheduleDefinitions=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
		 * Get #Action=ModifyUsageLimit
		 * @param {string} UsageLimitId The identifier of the usage limit to modify.
		 * @param {number} Amount The new limit amount. For more information about this parameter, see <a>UsageLimit</a>. 
		 * @param {GET_ModifyUsageLimitBreachAction} BreachAction The new action that Amazon Redshift takes when the limit is reached. For more information about this parameter, see <a>UsageLimit</a>. 
		 * @return {void} Success
		 */
		GET_ModifyUsageLimit(UsageLimitId: string, Amount: number | null | undefined, BreachAction: GET_ModifyUsageLimitBreachAction | null | undefined, Action: GET_ModifyUsageLimitAction, Version: GET_ModifyUsageLimitVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyUsageLimit?UsageLimitId=' + (UsageLimitId == null ? '' : encodeURIComponent(UsageLimitId)) + '&Amount=' + Amount + '&BreachAction=' + BreachAction + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Pauses a cluster.
		 * Get #Action=PauseCluster
		 * @param {string} ClusterIdentifier The identifier of the cluster to be paused.
		 * @return {void} Success
		 */
		GET_PauseCluster(ClusterIdentifier: string, Action: GET_PauseClusterAction, Version: GET_PauseClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PauseCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=PurchaseReservedNodeOffering
		 * @param {string} ReservedNodeOfferingId The unique identifier of the reserved node offering you want to purchase.
		 * @param {number} NodeCount <p>The number of reserved nodes that you want to purchase.</p> <p>Default: <code>1</code> </p>
		 * @return {void} Success
		 */
		GET_PurchaseReservedNodeOffering(ReservedNodeOfferingId: string, NodeCount: number | null | undefined, Action: GET_PurchaseReservedNodeOfferingAction, Version: GET_PurchaseReservedNodeOfferingVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PurchaseReservedNodeOffering?ReservedNodeOfferingId=' + (ReservedNodeOfferingId == null ? '' : encodeURIComponent(ReservedNodeOfferingId)) + '&NodeCount=' + NodeCount + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get #Action=RebootCluster
		 * @param {string} ClusterIdentifier The cluster identifier.
		 * @return {void} Success
		 */
		GET_RebootCluster(ClusterIdentifier: string, Action: GET_RebootClusterAction, Version: GET_RebootClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebootCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters.
		 * Get #Action=ResetClusterParameterGroup
		 * @param {string} ParameterGroupName The name of the cluster parameter group to be reset.
		 * @param {boolean} ResetAllParameters <p>If <code>true</code>, all parameters in the specified parameter group will be reset to their default values. </p> <p>Default: <code>true</code> </p>
		 * @param {Array<Parameter>} Parameters <p>An array of names of parameters to be reset. If <i>ResetAllParameters</i> option is not used, then at least one parameter name must be supplied. </p> <p>Constraints: A maximum of 20 parameters can be reset in a single request.</p>
		 * @return {void} Success
		 */
		GET_ResetClusterParameterGroup(ParameterGroupName: string, ResetAllParameters: boolean | null | undefined, Parameters: Array<Parameter> | null | undefined, Action: GET_ResetClusterParameterGroupAction, Version: GET_ResetClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetClusterParameterGroup?ParameterGroupName=' + (ParameterGroupName == null ? '' : encodeURIComponent(ParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
		 * Get #Action=ResizeCluster
		 * @param {string} ClusterIdentifier The unique identifier for the cluster to resize.
		 * @param {string} ClusterType The new cluster type for the specified cluster.
		 * @param {string} NodeType The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.
		 * @param {number} NumberOfNodes The new number of nodes for the cluster.
		 * @param {boolean} Classic A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to <code>false</code>, the resize type is elastic. 
		 * @return {void} Success
		 */
		GET_ResizeCluster(ClusterIdentifier: string, ClusterType: string | null | undefined, NodeType: string | null | undefined, NumberOfNodes: number | null | undefined, Classic: boolean | null | undefined, Action: GET_ResizeClusterAction, Version: GET_ResizeClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResizeCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&ClusterType=' + (ClusterType == null ? '' : encodeURIComponent(ClusterType)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&NumberOfNodes=' + NumberOfNodes + '&Classic=' + Classic + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=RestoreFromClusterSnapshot
		 * @param {string} ClusterIdentifier <p>The identifier of the cluster that will be created from restoring the snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>Alphabetic characters must be lowercase.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Must be unique for all clusters within an AWS account.</p> </li> </ul>
		 * @param {string} SnapshotIdentifier <p>The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.</p> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} SnapshotClusterIdentifier The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
		 * @param {number} Port <p>The port number on which the cluster accepts connections.</p> <p>Default: The same port as the original cluster.</p> <p>Constraints: Must be between <code>1115</code> and <code>65535</code>.</p>
		 * @param {string} AvailabilityZone <p>The Amazon EC2 Availability Zone in which to restore the cluster.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Example: <code>us-east-2a</code> </p>
		 * @param {boolean} AllowVersionUpgrade <p>If <code>true</code>, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. </p> <p>Default: <code>true</code> </p>
		 * @param {string} ClusterSubnetGroupName <p>The name of the subnet group where you want to cluster restored.</p> <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must provide subnet group name where you want the cluster restored.</p>
		 * @param {boolean} PubliclyAccessible If <code>true</code>, the cluster can be accessed from a public network. 
		 * @param {string} OwnerAccount The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
		 * @param {string} HsmClientCertificateIdentifier Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
		 * @param {string} HsmConfigurationIdentifier Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
		 * @param {string} ElasticIp The elastic IP (EIP) address for the cluster.
		 * @param {string} ClusterParameterGroupName <p>The name of the parameter group to be associated with this cluster.</p> <p>Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon Redshift Parameter Groups</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {Array<string>} ClusterSecurityGroups <p>A list of security groups to be associated with this cluster.</p> <p>Default: The default cluster security group for Amazon Redshift.</p> <p>Cluster security groups only apply to clusters outside of VPCs.</p>
		 * @param {Array<string>} VpcSecurityGroupIds <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.</p> <p>Default: The default VPC security group is associated with the cluster.</p> <p>VPC security groups only apply to clusters in VPCs.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which automated cluster maintenance can occur.</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> Default: The value selected for the cluster from which the snapshot was taken. For more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {number} AutomatedSnapshotRetentionPeriod <p>The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p> <p>Default: The value selected for the cluster from which the snapshot was taken.</p> <p>Constraints: Must be a value from 0 to 35.</p>
		 * @param {number} ManualSnapshotRetentionPeriod <p>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
		 * @param {string} KmsKeyId The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster that you restore from a shared snapshot.
		 * @param {string} NodeType <p>The node type that the restored cluster will be provisioned with.</p> <p>Default: The node type of the cluster from which the snapshot was taken. You can modify this if you are using any DS node type. In that case, you can choose to restore into another DS node type of the same size. For example, you can restore ds1.8xlarge into ds2.8xlarge, or ds1.xlarge into ds2.xlarge. If you have a DC instance type, you must restore into that same instance type and size. In other words, you can only restore a dc1.large instance type into another dc1.large instance type or dc2.large instance type. You can't restore dc1.8xlarge to dc2.8xlarge. First restore to a dc1.8xlarge cluster, then resize to a dc2.8large cluster. For more information about node types, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes"> About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
		 * @param {boolean} EnhancedVpcRouting <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
		 * @param {string} AdditionalInfo Reserved.
		 * @param {Array<string>} IamRoles <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 10 IAM roles in a single request.</p> <p>A cluster can have up to 10 IAM roles associated at any time.</p>
		 * @param {string} MaintenanceTrackName The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks.
		 * @param {string} SnapshotScheduleIdentifier A unique identifier for the snapshot schedule.
		 * @param {number} NumberOfNodes The number of nodes specified when provisioning the restored cluster.
		 * @return {void} Success
		 */
		GET_RestoreFromClusterSnapshot(ClusterIdentifier: string, SnapshotIdentifier: string, SnapshotClusterIdentifier: string | null | undefined, Port: number | null | undefined, AvailabilityZone: string | null | undefined, AllowVersionUpgrade: boolean | null | undefined, ClusterSubnetGroupName: string | null | undefined, PubliclyAccessible: boolean | null | undefined, OwnerAccount: string | null | undefined, HsmClientCertificateIdentifier: string | null | undefined, HsmConfigurationIdentifier: string | null | undefined, ElasticIp: string | null | undefined, ClusterParameterGroupName: string | null | undefined, ClusterSecurityGroups: Array<string> | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, PreferredMaintenanceWindow: string | null | undefined, AutomatedSnapshotRetentionPeriod: number | null | undefined, ManualSnapshotRetentionPeriod: number | null | undefined, KmsKeyId: string | null | undefined, NodeType: string | null | undefined, EnhancedVpcRouting: boolean | null | undefined, AdditionalInfo: string | null | undefined, IamRoles: Array<string> | null | undefined, MaintenanceTrackName: string | null | undefined, SnapshotScheduleIdentifier: string | null | undefined, NumberOfNodes: number | null | undefined, Action: GET_RestoreFromClusterSnapshotAction, Version: GET_RestoreFromClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreFromClusterSnapshot?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&Port=' + Port + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&AllowVersionUpgrade=' + AllowVersionUpgrade + '&ClusterSubnetGroupName=' + (ClusterSubnetGroupName == null ? '' : encodeURIComponent(ClusterSubnetGroupName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&HsmClientCertificateIdentifier=' + (HsmClientCertificateIdentifier == null ? '' : encodeURIComponent(HsmClientCertificateIdentifier)) + '&HsmConfigurationIdentifier=' + (HsmConfigurationIdentifier == null ? '' : encodeURIComponent(HsmConfigurationIdentifier)) + '&ElasticIp=' + (ElasticIp == null ? '' : encodeURIComponent(ElasticIp)) + '&ClusterParameterGroupName=' + (ClusterParameterGroupName == null ? '' : encodeURIComponent(ClusterParameterGroupName)) + '&' + ClusterSecurityGroups?.map(z => `ClusterSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&AutomatedSnapshotRetentionPeriod=' + AutomatedSnapshotRetentionPeriod + '&ManualSnapshotRetentionPeriod=' + ManualSnapshotRetentionPeriod + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&NodeType=' + (NodeType == null ? '' : encodeURIComponent(NodeType)) + '&EnhancedVpcRouting=' + EnhancedVpcRouting + '&AdditionalInfo=' + (AdditionalInfo == null ? '' : encodeURIComponent(AdditionalInfo)) + '&' + IamRoles?.map(z => `IamRoles=${encodeURIComponent(z)}`).join('&') + '&MaintenanceTrackName=' + (MaintenanceTrackName == null ? '' : encodeURIComponent(MaintenanceTrackName)) + '&SnapshotScheduleIdentifier=' + (SnapshotScheduleIdentifier == null ? '' : encodeURIComponent(SnapshotScheduleIdentifier)) + '&NumberOfNodes=' + NumberOfNodes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p>
		 * Get #Action=RestoreTableFromClusterSnapshot
		 * @param {string} ClusterIdentifier The identifier of the Amazon Redshift cluster to restore the table to.
		 * @param {string} SnapshotIdentifier The identifier of the snapshot to restore the table from. This snapshot must have been created from the Amazon Redshift cluster specified by the <code>ClusterIdentifier</code> parameter.
		 * @param {string} SourceDatabaseName The name of the source database that contains the table to restore from.
		 * @param {string} SourceSchemaName The name of the source schema that contains the table to restore from. If you do not specify a <code>SourceSchemaName</code> value, the default is <code>public</code>.
		 * @param {string} SourceTableName The name of the source table to restore from.
		 * @param {string} TargetDatabaseName The name of the database to restore the table to.
		 * @param {string} TargetSchemaName The name of the schema to restore the table to.
		 * @param {string} NewTableName The name of the table to create as a result of the current request.
		 * @return {void} Success
		 */
		GET_RestoreTableFromClusterSnapshot(ClusterIdentifier: string, SnapshotIdentifier: string, SourceDatabaseName: string, SourceSchemaName: string | null | undefined, SourceTableName: string, TargetDatabaseName: string | null | undefined, TargetSchemaName: string | null | undefined, NewTableName: string, Action: GET_RestoreTableFromClusterSnapshotAction, Version: GET_RestoreTableFromClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreTableFromClusterSnapshot?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SourceDatabaseName=' + (SourceDatabaseName == null ? '' : encodeURIComponent(SourceDatabaseName)) + '&SourceSchemaName=' + (SourceSchemaName == null ? '' : encodeURIComponent(SourceSchemaName)) + '&SourceTableName=' + (SourceTableName == null ? '' : encodeURIComponent(SourceTableName)) + '&TargetDatabaseName=' + (TargetDatabaseName == null ? '' : encodeURIComponent(TargetDatabaseName)) + '&TargetSchemaName=' + (TargetSchemaName == null ? '' : encodeURIComponent(TargetSchemaName)) + '&NewTableName=' + (NewTableName == null ? '' : encodeURIComponent(NewTableName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resumes a paused cluster.
		 * Get #Action=ResumeCluster
		 * @param {string} ClusterIdentifier The identifier of the cluster to be resumed.
		 * @return {void} Success
		 */
		GET_ResumeCluster(ClusterIdentifier: string, Action: GET_ResumeClusterAction, Version: GET_ResumeClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResumeCluster?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
		 * Get #Action=RevokeClusterSecurityGroupIngress
		 * @param {string} ClusterSecurityGroupName The name of the security Group from which to revoke the ingress rule.
		 * @param {string} CIDRIP The IP range for which to revoke access. This range must be a valid Classless Inter-Domain Routing (CIDR) block of IP addresses. If <code>CIDRIP</code> is specified, <code>EC2SecurityGroupName</code> and <code>EC2SecurityGroupOwnerId</code> cannot be provided. 
		 * @param {string} EC2SecurityGroupName The name of the EC2 Security Group whose access is to be revoked. If <code>EC2SecurityGroupName</code> is specified, <code>EC2SecurityGroupOwnerId</code> must also be provided and <code>CIDRIP</code> cannot be provided. 
		 * @param {string} EC2SecurityGroupOwnerId <p>The AWS account number of the owner of the security group specified in the <code>EC2SecurityGroupName</code> parameter. The AWS access key ID is not an acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified, <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code> cannot be provided. </p> <p>Example: <code>111122223333</code> </p>
		 * @return {void} Success
		 */
		GET_RevokeClusterSecurityGroupIngress(ClusterSecurityGroupName: string, CIDRIP: string | null | undefined, EC2SecurityGroupName: string | null | undefined, EC2SecurityGroupOwnerId: string | null | undefined, Action: GET_RevokeClusterSecurityGroupIngressAction, Version: GET_RevokeClusterSecurityGroupIngressVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RevokeClusterSecurityGroupIngress?ClusterSecurityGroupName=' + (ClusterSecurityGroupName == null ? '' : encodeURIComponent(ClusterSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the ability of the specified AWS customer account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
		 * Get #Action=RevokeSnapshotAccess
		 * @param {string} SnapshotIdentifier The identifier of the snapshot that the account can no longer access.
		 * @param {string} SnapshotClusterIdentifier The identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
		 * @param {string} AccountWithRestoreAccess The identifier of the AWS customer account that can no longer restore the specified snapshot.
		 * @return {void} Success
		 */
		GET_RevokeSnapshotAccess(SnapshotIdentifier: string, SnapshotClusterIdentifier: string | null | undefined, AccountWithRestoreAccess: string, Action: GET_RevokeSnapshotAccessAction, Version: GET_RevokeSnapshotAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RevokeSnapshotAccess?SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&SnapshotClusterIdentifier=' + (SnapshotClusterIdentifier == null ? '' : encodeURIComponent(SnapshotClusterIdentifier)) + '&AccountWithRestoreAccess=' + (AccountWithRestoreAccess == null ? '' : encodeURIComponent(AccountWithRestoreAccess)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rotates the encryption keys for a cluster.
		 * Get #Action=RotateEncryptionKey
		 * @param {string} ClusterIdentifier <p>The unique identifier of the cluster that you want to rotate the encryption keys for.</p> <p>Constraints: Must be the name of valid cluster that has encryption enabled.</p>
		 * @return {void} Success
		 */
		GET_RotateEncryptionKey(ClusterIdentifier: string, Action: GET_RotateEncryptionKeyAction, Version: GET_RotateEncryptionKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RotateEncryptionKey?ClusterIdentifier=' + (ClusterIdentifier == null ? '' : encodeURIComponent(ClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AcceptReservedNodeExchangeAction { AcceptReservedNodeExchange = 0 }

	export enum GET_AcceptReservedNodeExchangeVersion { _2012_12_01 = 0 }

	export enum POST_AcceptReservedNodeExchangeVersion { _2012_12_01 = 0 }

	export enum GET_AuthorizeClusterSecurityGroupIngressAction { AuthorizeClusterSecurityGroupIngress = 0 }

	export enum GET_AuthorizeClusterSecurityGroupIngressVersion { _2012_12_01 = 0 }

	export enum POST_AuthorizeClusterSecurityGroupIngressVersion { _2012_12_01 = 0 }

	export enum GET_AuthorizeSnapshotAccessAction { AuthorizeSnapshotAccess = 0 }

	export enum GET_AuthorizeSnapshotAccessVersion { _2012_12_01 = 0 }

	export enum POST_AuthorizeSnapshotAccessVersion { _2012_12_01 = 0 }

	export enum GET_BatchDeleteClusterSnapshotsAction { BatchDeleteClusterSnapshots = 0 }

	export enum GET_BatchDeleteClusterSnapshotsVersion { _2012_12_01 = 0 }

	export enum POST_BatchDeleteClusterSnapshotsVersion { _2012_12_01 = 0 }

	export enum GET_BatchModifyClusterSnapshotsAction { BatchModifyClusterSnapshots = 0 }

	export enum GET_BatchModifyClusterSnapshotsVersion { _2012_12_01 = 0 }

	export enum POST_BatchModifyClusterSnapshotsVersion { _2012_12_01 = 0 }

	export enum GET_CancelResizeAction { CancelResize = 0 }

	export enum GET_CancelResizeVersion { _2012_12_01 = 0 }

	export enum POST_CancelResizeVersion { _2012_12_01 = 0 }

	export enum GET_CopyClusterSnapshotAction { CopyClusterSnapshot = 0 }

	export enum GET_CopyClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum POST_CopyClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum GET_CreateClusterAction { CreateCluster = 0 }

	export enum GET_CreateClusterVersion { _2012_12_01 = 0 }

	export enum POST_CreateClusterVersion { _2012_12_01 = 0 }

	export enum GET_CreateClusterParameterGroupAction { CreateClusterParameterGroup = 0 }

	export enum GET_CreateClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum POST_CreateClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum GET_CreateClusterSecurityGroupAction { CreateClusterSecurityGroup = 0 }

	export enum GET_CreateClusterSecurityGroupVersion { _2012_12_01 = 0 }

	export enum POST_CreateClusterSecurityGroupVersion { _2012_12_01 = 0 }

	export enum GET_CreateClusterSnapshotAction { CreateClusterSnapshot = 0 }

	export enum GET_CreateClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum POST_CreateClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum GET_CreateClusterSubnetGroupAction { CreateClusterSubnetGroup = 0 }

	export enum GET_CreateClusterSubnetGroupVersion { _2012_12_01 = 0 }

	export enum POST_CreateClusterSubnetGroupVersion { _2012_12_01 = 0 }

	export enum GET_CreateEventSubscriptionAction { CreateEventSubscription = 0 }

	export enum GET_CreateEventSubscriptionVersion { _2012_12_01 = 0 }

	export enum POST_CreateEventSubscriptionVersion { _2012_12_01 = 0 }

	export enum GET_CreateHsmClientCertificateAction { CreateHsmClientCertificate = 0 }

	export enum GET_CreateHsmClientCertificateVersion { _2012_12_01 = 0 }

	export enum POST_CreateHsmClientCertificateVersion { _2012_12_01 = 0 }

	export enum GET_CreateHsmConfigurationAction { CreateHsmConfiguration = 0 }

	export enum GET_CreateHsmConfigurationVersion { _2012_12_01 = 0 }

	export enum POST_CreateHsmConfigurationVersion { _2012_12_01 = 0 }

	export interface GET_CreateScheduledActionTargetAction {
		ResizeCluster?: ResizeClusterMessage;
		PauseCluster?: PauseClusterMessage;
		ResumeCluster?: ResumeClusterMessage;
	}
	export interface GET_CreateScheduledActionTargetActionFormProperties {
	}
	export function CreateGET_CreateScheduledActionTargetActionFormGroup() {
		return new FormGroup<GET_CreateScheduledActionTargetActionFormProperties>({
		});

	}

	export enum GET_CreateScheduledActionAction { CreateScheduledAction = 0 }

	export enum GET_CreateScheduledActionVersion { _2012_12_01 = 0 }

	export enum POST_CreateScheduledActionVersion { _2012_12_01 = 0 }

	export enum GET_CreateSnapshotCopyGrantAction { CreateSnapshotCopyGrant = 0 }

	export enum GET_CreateSnapshotCopyGrantVersion { _2012_12_01 = 0 }

	export enum POST_CreateSnapshotCopyGrantVersion { _2012_12_01 = 0 }

	export enum GET_CreateSnapshotScheduleAction { CreateSnapshotSchedule = 0 }

	export enum GET_CreateSnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum POST_CreateSnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum GET_CreateTagsAction { CreateTags = 0 }

	export enum GET_CreateTagsVersion { _2012_12_01 = 0 }

	export enum POST_CreateTagsVersion { _2012_12_01 = 0 }

	export enum GET_CreateUsageLimitFeatureType { spectrum = 0, 'concurrency-scaling' = 1 }

	export enum GET_CreateUsageLimitLimitType { time = 0, 'data-scanned' = 1 }

	export enum GET_CreateUsageLimitBreachAction { log = 0, 'emit-metric' = 1, disable = 2 }

	export enum GET_CreateUsageLimitAction { CreateUsageLimit = 0 }

	export enum GET_CreateUsageLimitVersion { _2012_12_01 = 0 }

	export enum POST_CreateUsageLimitVersion { _2012_12_01 = 0 }

	export enum GET_DeleteClusterAction { DeleteCluster = 0 }

	export enum GET_DeleteClusterVersion { _2012_12_01 = 0 }

	export enum POST_DeleteClusterVersion { _2012_12_01 = 0 }

	export enum GET_DeleteClusterParameterGroupAction { DeleteClusterParameterGroup = 0 }

	export enum GET_DeleteClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum POST_DeleteClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum GET_DeleteClusterSecurityGroupAction { DeleteClusterSecurityGroup = 0 }

	export enum GET_DeleteClusterSecurityGroupVersion { _2012_12_01 = 0 }

	export enum POST_DeleteClusterSecurityGroupVersion { _2012_12_01 = 0 }

	export enum GET_DeleteClusterSnapshotAction { DeleteClusterSnapshot = 0 }

	export enum GET_DeleteClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum POST_DeleteClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum GET_DeleteClusterSubnetGroupAction { DeleteClusterSubnetGroup = 0 }

	export enum GET_DeleteClusterSubnetGroupVersion { _2012_12_01 = 0 }

	export enum POST_DeleteClusterSubnetGroupVersion { _2012_12_01 = 0 }

	export enum GET_DeleteEventSubscriptionAction { DeleteEventSubscription = 0 }

	export enum GET_DeleteEventSubscriptionVersion { _2012_12_01 = 0 }

	export enum POST_DeleteEventSubscriptionVersion { _2012_12_01 = 0 }

	export enum GET_DeleteHsmClientCertificateAction { DeleteHsmClientCertificate = 0 }

	export enum GET_DeleteHsmClientCertificateVersion { _2012_12_01 = 0 }

	export enum POST_DeleteHsmClientCertificateVersion { _2012_12_01 = 0 }

	export enum GET_DeleteHsmConfigurationAction { DeleteHsmConfiguration = 0 }

	export enum GET_DeleteHsmConfigurationVersion { _2012_12_01 = 0 }

	export enum POST_DeleteHsmConfigurationVersion { _2012_12_01 = 0 }

	export enum GET_DeleteScheduledActionAction { DeleteScheduledAction = 0 }

	export enum GET_DeleteScheduledActionVersion { _2012_12_01 = 0 }

	export enum POST_DeleteScheduledActionVersion { _2012_12_01 = 0 }

	export enum GET_DeleteSnapshotCopyGrantAction { DeleteSnapshotCopyGrant = 0 }

	export enum GET_DeleteSnapshotCopyGrantVersion { _2012_12_01 = 0 }

	export enum POST_DeleteSnapshotCopyGrantVersion { _2012_12_01 = 0 }

	export enum GET_DeleteSnapshotScheduleAction { DeleteSnapshotSchedule = 0 }

	export enum GET_DeleteSnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum POST_DeleteSnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum GET_DeleteTagsAction { DeleteTags = 0 }

	export enum GET_DeleteTagsVersion { _2012_12_01 = 0 }

	export enum POST_DeleteTagsVersion { _2012_12_01 = 0 }

	export enum GET_DeleteUsageLimitAction { DeleteUsageLimit = 0 }

	export enum GET_DeleteUsageLimitVersion { _2012_12_01 = 0 }

	export enum POST_DeleteUsageLimitVersion { _2012_12_01 = 0 }

	export enum GET_DescribeAccountAttributesAction { DescribeAccountAttributes = 0 }

	export enum GET_DescribeAccountAttributesVersion { _2012_12_01 = 0 }

	export enum POST_DescribeAccountAttributesVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterDbRevisionsAction { DescribeClusterDbRevisions = 0 }

	export enum GET_DescribeClusterDbRevisionsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterDbRevisionsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterParameterGroupsAction { DescribeClusterParameterGroups = 0 }

	export enum GET_DescribeClusterParameterGroupsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterParameterGroupsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterParametersAction { DescribeClusterParameters = 0 }

	export enum GET_DescribeClusterParametersVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterParametersVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterSecurityGroupsAction { DescribeClusterSecurityGroups = 0 }

	export enum GET_DescribeClusterSecurityGroupsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterSecurityGroupsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterSnapshotsAction { DescribeClusterSnapshots = 0 }

	export enum GET_DescribeClusterSnapshotsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterSnapshotsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterSubnetGroupsAction { DescribeClusterSubnetGroups = 0 }

	export enum GET_DescribeClusterSubnetGroupsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterSubnetGroupsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterTracksAction { DescribeClusterTracks = 0 }

	export enum GET_DescribeClusterTracksVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterTracksVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClusterVersionsAction { DescribeClusterVersions = 0 }

	export enum GET_DescribeClusterVersionsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClusterVersionsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeClustersAction { DescribeClusters = 0 }

	export enum GET_DescribeClustersVersion { _2012_12_01 = 0 }

	export enum POST_DescribeClustersVersion { _2012_12_01 = 0 }

	export enum GET_DescribeDefaultClusterParametersAction { DescribeDefaultClusterParameters = 0 }

	export enum GET_DescribeDefaultClusterParametersVersion { _2012_12_01 = 0 }

	export enum POST_DescribeDefaultClusterParametersVersion { _2012_12_01 = 0 }

	export enum GET_DescribeEventCategoriesAction { DescribeEventCategories = 0 }

	export enum GET_DescribeEventCategoriesVersion { _2012_12_01 = 0 }

	export enum POST_DescribeEventCategoriesVersion { _2012_12_01 = 0 }

	export enum GET_DescribeEventSubscriptionsAction { DescribeEventSubscriptions = 0 }

	export enum GET_DescribeEventSubscriptionsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeEventSubscriptionsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeEventsSourceType { cluster = 0, 'cluster-parameter-group' = 1, 'cluster-security-group' = 2, 'cluster-snapshot' = 3, 'scheduled-action' = 4 }

	export enum GET_DescribeEventsAction { DescribeEvents = 0 }

	export enum GET_DescribeEventsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeEventsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeHsmClientCertificatesAction { DescribeHsmClientCertificates = 0 }

	export enum GET_DescribeHsmClientCertificatesVersion { _2012_12_01 = 0 }

	export enum POST_DescribeHsmClientCertificatesVersion { _2012_12_01 = 0 }

	export enum GET_DescribeHsmConfigurationsAction { DescribeHsmConfigurations = 0 }

	export enum GET_DescribeHsmConfigurationsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeHsmConfigurationsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeLoggingStatusAction { DescribeLoggingStatus = 0 }

	export enum GET_DescribeLoggingStatusVersion { _2012_12_01 = 0 }

	export enum POST_DescribeLoggingStatusVersion { _2012_12_01 = 0 }

	export enum GET_DescribeNodeConfigurationOptionsActionType { 'restore-cluster' = 0, 'recommend-node-config' = 1, 'resize-cluster' = 2 }

	export enum GET_DescribeNodeConfigurationOptionsAction { DescribeNodeConfigurationOptions = 0 }

	export enum GET_DescribeNodeConfigurationOptionsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeNodeConfigurationOptionsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeOrderableClusterOptionsAction { DescribeOrderableClusterOptions = 0 }

	export enum GET_DescribeOrderableClusterOptionsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeOrderableClusterOptionsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeReservedNodeOfferingsAction { DescribeReservedNodeOfferings = 0 }

	export enum GET_DescribeReservedNodeOfferingsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeReservedNodeOfferingsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeReservedNodesAction { DescribeReservedNodes = 0 }

	export enum GET_DescribeReservedNodesVersion { _2012_12_01 = 0 }

	export enum POST_DescribeReservedNodesVersion { _2012_12_01 = 0 }

	export enum GET_DescribeResizeAction { DescribeResize = 0 }

	export enum GET_DescribeResizeVersion { _2012_12_01 = 0 }

	export enum POST_DescribeResizeVersion { _2012_12_01 = 0 }

	export enum GET_DescribeScheduledActionsAction { DescribeScheduledActions = 0 }

	export enum GET_DescribeScheduledActionsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeScheduledActionsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeSnapshotCopyGrantsAction { DescribeSnapshotCopyGrants = 0 }

	export enum GET_DescribeSnapshotCopyGrantsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeSnapshotCopyGrantsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeSnapshotSchedulesAction { DescribeSnapshotSchedules = 0 }

	export enum GET_DescribeSnapshotSchedulesVersion { _2012_12_01 = 0 }

	export enum POST_DescribeSnapshotSchedulesVersion { _2012_12_01 = 0 }

	export enum GET_DescribeStorageAction { DescribeStorage = 0 }

	export enum GET_DescribeStorageVersion { _2012_12_01 = 0 }

	export enum POST_DescribeStorageVersion { _2012_12_01 = 0 }

	export enum GET_DescribeTableRestoreStatusAction { DescribeTableRestoreStatus = 0 }

	export enum GET_DescribeTableRestoreStatusVersion { _2012_12_01 = 0 }

	export enum POST_DescribeTableRestoreStatusVersion { _2012_12_01 = 0 }

	export enum GET_DescribeTagsAction { DescribeTags = 0 }

	export enum GET_DescribeTagsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeTagsVersion { _2012_12_01 = 0 }

	export enum GET_DescribeUsageLimitsFeatureType { spectrum = 0, 'concurrency-scaling' = 1 }

	export enum GET_DescribeUsageLimitsAction { DescribeUsageLimits = 0 }

	export enum GET_DescribeUsageLimitsVersion { _2012_12_01 = 0 }

	export enum POST_DescribeUsageLimitsVersion { _2012_12_01 = 0 }

	export enum GET_DisableLoggingAction { DisableLogging = 0 }

	export enum GET_DisableLoggingVersion { _2012_12_01 = 0 }

	export enum POST_DisableLoggingVersion { _2012_12_01 = 0 }

	export enum GET_DisableSnapshotCopyAction { DisableSnapshotCopy = 0 }

	export enum GET_DisableSnapshotCopyVersion { _2012_12_01 = 0 }

	export enum POST_DisableSnapshotCopyVersion { _2012_12_01 = 0 }

	export enum GET_EnableLoggingAction { EnableLogging = 0 }

	export enum GET_EnableLoggingVersion { _2012_12_01 = 0 }

	export enum POST_EnableLoggingVersion { _2012_12_01 = 0 }

	export enum GET_EnableSnapshotCopyAction { EnableSnapshotCopy = 0 }

	export enum GET_EnableSnapshotCopyVersion { _2012_12_01 = 0 }

	export enum POST_EnableSnapshotCopyVersion { _2012_12_01 = 0 }

	export enum GET_GetClusterCredentialsAction { GetClusterCredentials = 0 }

	export enum GET_GetClusterCredentialsVersion { _2012_12_01 = 0 }

	export enum POST_GetClusterCredentialsVersion { _2012_12_01 = 0 }

	export enum GET_GetReservedNodeExchangeOfferingsAction { GetReservedNodeExchangeOfferings = 0 }

	export enum GET_GetReservedNodeExchangeOfferingsVersion { _2012_12_01 = 0 }

	export enum POST_GetReservedNodeExchangeOfferingsVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterAction { ModifyCluster = 0 }

	export enum GET_ModifyClusterVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterDbRevisionAction { ModifyClusterDbRevision = 0 }

	export enum GET_ModifyClusterDbRevisionVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterDbRevisionVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterIamRolesAction { ModifyClusterIamRoles = 0 }

	export enum GET_ModifyClusterIamRolesVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterIamRolesVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterMaintenanceAction { ModifyClusterMaintenance = 0 }

	export enum GET_ModifyClusterMaintenanceVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterMaintenanceVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterParameterGroupAction { ModifyClusterParameterGroup = 0 }

	export enum GET_ModifyClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterSnapshotAction { ModifyClusterSnapshot = 0 }

	export enum GET_ModifyClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterSnapshotScheduleAction { ModifyClusterSnapshotSchedule = 0 }

	export enum GET_ModifyClusterSnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterSnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum GET_ModifyClusterSubnetGroupAction { ModifyClusterSubnetGroup = 0 }

	export enum GET_ModifyClusterSubnetGroupVersion { _2012_12_01 = 0 }

	export enum POST_ModifyClusterSubnetGroupVersion { _2012_12_01 = 0 }

	export enum GET_ModifyEventSubscriptionAction { ModifyEventSubscription = 0 }

	export enum GET_ModifyEventSubscriptionVersion { _2012_12_01 = 0 }

	export enum POST_ModifyEventSubscriptionVersion { _2012_12_01 = 0 }

	export interface GET_ModifyScheduledActionTargetAction {
		ResizeCluster?: ResizeClusterMessage;
		PauseCluster?: PauseClusterMessage;
		ResumeCluster?: ResumeClusterMessage;
	}
	export interface GET_ModifyScheduledActionTargetActionFormProperties {
	}
	export function CreateGET_ModifyScheduledActionTargetActionFormGroup() {
		return new FormGroup<GET_ModifyScheduledActionTargetActionFormProperties>({
		});

	}

	export enum GET_ModifyScheduledActionAction { ModifyScheduledAction = 0 }

	export enum GET_ModifyScheduledActionVersion { _2012_12_01 = 0 }

	export enum POST_ModifyScheduledActionVersion { _2012_12_01 = 0 }

	export enum GET_ModifySnapshotCopyRetentionPeriodAction { ModifySnapshotCopyRetentionPeriod = 0 }

	export enum GET_ModifySnapshotCopyRetentionPeriodVersion { _2012_12_01 = 0 }

	export enum POST_ModifySnapshotCopyRetentionPeriodVersion { _2012_12_01 = 0 }

	export enum GET_ModifySnapshotScheduleAction { ModifySnapshotSchedule = 0 }

	export enum GET_ModifySnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum POST_ModifySnapshotScheduleVersion { _2012_12_01 = 0 }

	export enum GET_ModifyUsageLimitBreachAction { log = 0, 'emit-metric' = 1, disable = 2 }

	export enum GET_ModifyUsageLimitAction { ModifyUsageLimit = 0 }

	export enum GET_ModifyUsageLimitVersion { _2012_12_01 = 0 }

	export enum POST_ModifyUsageLimitVersion { _2012_12_01 = 0 }

	export enum GET_PauseClusterAction { PauseCluster = 0 }

	export enum GET_PauseClusterVersion { _2012_12_01 = 0 }

	export enum POST_PauseClusterVersion { _2012_12_01 = 0 }

	export enum GET_PurchaseReservedNodeOfferingAction { PurchaseReservedNodeOffering = 0 }

	export enum GET_PurchaseReservedNodeOfferingVersion { _2012_12_01 = 0 }

	export enum POST_PurchaseReservedNodeOfferingVersion { _2012_12_01 = 0 }

	export enum GET_RebootClusterAction { RebootCluster = 0 }

	export enum GET_RebootClusterVersion { _2012_12_01 = 0 }

	export enum POST_RebootClusterVersion { _2012_12_01 = 0 }

	export enum GET_ResetClusterParameterGroupAction { ResetClusterParameterGroup = 0 }

	export enum GET_ResetClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum POST_ResetClusterParameterGroupVersion { _2012_12_01 = 0 }

	export enum GET_ResizeClusterAction { ResizeCluster = 0 }

	export enum GET_ResizeClusterVersion { _2012_12_01 = 0 }

	export enum POST_ResizeClusterVersion { _2012_12_01 = 0 }

	export enum GET_RestoreFromClusterSnapshotAction { RestoreFromClusterSnapshot = 0 }

	export enum GET_RestoreFromClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum POST_RestoreFromClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum GET_RestoreTableFromClusterSnapshotAction { RestoreTableFromClusterSnapshot = 0 }

	export enum GET_RestoreTableFromClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum POST_RestoreTableFromClusterSnapshotVersion { _2012_12_01 = 0 }

	export enum GET_ResumeClusterAction { ResumeCluster = 0 }

	export enum GET_ResumeClusterVersion { _2012_12_01 = 0 }

	export enum POST_ResumeClusterVersion { _2012_12_01 = 0 }

	export enum GET_RevokeClusterSecurityGroupIngressAction { RevokeClusterSecurityGroupIngress = 0 }

	export enum GET_RevokeClusterSecurityGroupIngressVersion { _2012_12_01 = 0 }

	export enum POST_RevokeClusterSecurityGroupIngressVersion { _2012_12_01 = 0 }

	export enum GET_RevokeSnapshotAccessAction { RevokeSnapshotAccess = 0 }

	export enum GET_RevokeSnapshotAccessVersion { _2012_12_01 = 0 }

	export enum POST_RevokeSnapshotAccessVersion { _2012_12_01 = 0 }

	export enum GET_RotateEncryptionKeyAction { RotateEncryptionKey = 0 }

	export enum GET_RotateEncryptionKeyVersion { _2012_12_01 = 0 }

	export enum POST_RotateEncryptionKeyVersion { _2012_12_01 = 0 }

}

