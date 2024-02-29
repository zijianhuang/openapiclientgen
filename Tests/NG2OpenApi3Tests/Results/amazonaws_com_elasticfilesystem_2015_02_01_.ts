import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Provides a description of an EFS file system access point. */
	export interface AccessPointDescription {
		ClientToken?: string;
		Name?: string;
		Tags?: Array<Tag>;
		AccessPointId?: string;
		AccessPointArn?: string;
		FileSystemId?: string;
		PosixUser?: PosixUser;
		RootDirectory?: RootDirectory;
		OwnerId?: string;
		LifeCycleState?: LifeCycleState;
	}

	/** Provides a description of an EFS file system access point. */
	export interface AccessPointDescriptionFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AccessPointId: FormControl<string | null | undefined>,
		AccessPointArn: FormControl<string | null | undefined>,
		FileSystemId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		LifeCycleState: FormControl<LifeCycleState | null | undefined>,
	}
	export function CreateAccessPointDescriptionFormGroup() {
		return new FormGroup<AccessPointDescriptionFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			AccessPointId: new FormControl<string | null | undefined>(undefined),
			AccessPointArn: new FormControl<string | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			LifeCycleState: new FormControl<LifeCycleState | null | undefined>(undefined),
		});

	}


	/** A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point. */
	export interface PosixUser {

		/** Required */
		Uid: number;

		/** Required */
		Gid: number;
		SecondaryGids?: Array<number> | null;
	}

	/** The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point. */
	export interface PosixUserFormProperties {

		/** Required */
		Uid: FormControl<number | null | undefined>,

		/** Required */
		Gid: FormControl<number | null | undefined>,
	}
	export function CreatePosixUserFormGroup() {
		return new FormGroup<PosixUserFormProperties>({
			Uid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Gid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories. */
	export interface RootDirectory {
		Path?: string;
		CreationInfo?: CreationInfo;
	}

	/** Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories. */
	export interface RootDirectoryFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreateRootDirectoryFormGroup() {
		return new FormGroup<RootDirectoryFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <p>Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.</p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important> */
	export interface CreationInfo {

		/** Required */
		OwnerUid: number;

		/** Required */
		OwnerGid: number;

		/** Required */
		Permissions: string;
	}

	/** <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <p>Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.</p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important> */
	export interface CreationInfoFormProperties {

		/** Required */
		OwnerUid: FormControl<number | null | undefined>,

		/** Required */
		OwnerGid: FormControl<number | null | undefined>,

		/** Required */
		Permissions: FormControl<string | null | undefined>,
	}
	export function CreateCreationInfoFormGroup() {
		return new FormGroup<CreationInfoFormProperties>({
			OwnerUid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OwnerGid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Permissions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LifeCycleState { creating = 'creating', available = 'available', updating = 'updating', deleting = 'deleting', deleted = 'deleted', error = 'error' }

	export interface BadRequest {
	}
	export interface BadRequestFormProperties {
	}
	export function CreateBadRequestFormGroup() {
		return new FormGroup<BadRequestFormProperties>({
		});

	}

	export interface AccessPointAlreadyExists {
	}
	export interface AccessPointAlreadyExistsFormProperties {
	}
	export function CreateAccessPointAlreadyExistsFormGroup() {
		return new FormGroup<AccessPointAlreadyExistsFormProperties>({
		});

	}

	export interface IncorrectFileSystemLifeCycleState {
	}
	export interface IncorrectFileSystemLifeCycleStateFormProperties {
	}
	export function CreateIncorrectFileSystemLifeCycleStateFormGroup() {
		return new FormGroup<IncorrectFileSystemLifeCycleStateFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface FileSystemNotFound {
	}
	export interface FileSystemNotFoundFormProperties {
	}
	export function CreateFileSystemNotFoundFormGroup() {
		return new FormGroup<FileSystemNotFoundFormProperties>({
		});

	}

	export interface AccessPointLimitExceeded {
	}
	export interface AccessPointLimitExceededFormProperties {
	}
	export function CreateAccessPointLimitExceededFormGroup() {
		return new FormGroup<AccessPointLimitExceededFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}


	/** A description of the file system. */
	export interface FileSystemDescription {

		/** Required */
		OwnerId: string;

		/** Required */
		CreationToken: string;

		/** Required */
		FileSystemId: string;
		FileSystemArn?: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		LifeCycleState: LifeCycleState;
		Name?: string;

		/** Required */
		NumberOfMountTargets: number;

		/** Required */
		SizeInBytes: FileSystemSize;

		/** Required */
		PerformanceMode: PerformanceMode;
		Encrypted?: boolean | null;
		KmsKeyId?: string;
		ThroughputMode?: ThroughputMode;
		ProvisionedThroughputInMibps?: number | null;
		AvailabilityZoneName?: string;
		AvailabilityZoneId?: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** A description of the file system. */
	export interface FileSystemDescriptionFormProperties {

		/** Required */
		OwnerId: FormControl<string | null | undefined>,

		/** Required */
		CreationToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
		FileSystemArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LifeCycleState: FormControl<LifeCycleState | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		NumberOfMountTargets: FormControl<number | null | undefined>,

		/** Required */
		PerformanceMode: FormControl<PerformanceMode | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ThroughputMode: FormControl<ThroughputMode | null | undefined>,
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
		AvailabilityZoneName: FormControl<string | null | undefined>,
		AvailabilityZoneId: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemDescriptionFormGroup() {
		return new FormGroup<FileSystemDescriptionFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileSystemArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LifeCycleState: new FormControl<LifeCycleState | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			NumberOfMountTargets: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PerformanceMode: new FormControl<PerformanceMode | null | undefined>(undefined, [Validators.required]),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ThroughputMode: new FormControl<ThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined),
			AvailabilityZoneName: new FormControl<string | null | undefined>(undefined),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time. */
	export interface FileSystemSize {

		/** Required */
		Value: number;
		Timestamp?: Date;
		ValueInIA?: number | null;
		ValueInStandard?: number | null;
	}

	/** The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time. */
	export interface FileSystemSizeFormProperties {

		/** Required */
		Value: FormControl<number | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		ValueInIA: FormControl<number | null | undefined>,
		ValueInStandard: FormControl<number | null | undefined>,
	}
	export function CreateFileSystemSizeFormGroup() {
		return new FormGroup<FileSystemSizeFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			ValueInIA: new FormControl<number | null | undefined>(undefined),
			ValueInStandard: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PerformanceMode { generalPurpose = 'generalPurpose', maxIO = 'maxIO' }

	export enum ThroughputMode { bursting = 'bursting', provisioned = 'provisioned', elastic = 'elastic' }

	export interface FileSystemAlreadyExists {
	}
	export interface FileSystemAlreadyExistsFormProperties {
	}
	export function CreateFileSystemAlreadyExistsFormGroup() {
		return new FormGroup<FileSystemAlreadyExistsFormProperties>({
		});

	}

	export interface FileSystemLimitExceeded {
	}
	export interface FileSystemLimitExceededFormProperties {
	}
	export function CreateFileSystemLimitExceededFormGroup() {
		return new FormGroup<FileSystemLimitExceededFormProperties>({
		});

	}

	export interface InsufficientThroughputCapacity {
	}
	export interface InsufficientThroughputCapacityFormProperties {
	}
	export function CreateInsufficientThroughputCapacityFormGroup() {
		return new FormGroup<InsufficientThroughputCapacityFormProperties>({
		});

	}

	export interface ThroughputLimitExceeded {
	}
	export interface ThroughputLimitExceededFormProperties {
	}
	export function CreateThroughputLimitExceededFormGroup() {
		return new FormGroup<ThroughputLimitExceededFormProperties>({
		});

	}

	export interface UnsupportedAvailabilityZone {
	}
	export interface UnsupportedAvailabilityZoneFormProperties {
	}
	export function CreateUnsupportedAvailabilityZoneFormGroup() {
		return new FormGroup<UnsupportedAvailabilityZoneFormProperties>({
		});

	}


	/** Provides a description of a mount target. */
	export interface MountTargetDescription {
		OwnerId?: string;

		/** Required */
		MountTargetId: string;

		/** Required */
		FileSystemId: string;

		/** Required */
		SubnetId: string;

		/** Required */
		LifeCycleState: LifeCycleState;
		IpAddress?: string;
		NetworkInterfaceId?: string;
		AvailabilityZoneId?: string;
		AvailabilityZoneName?: string;
		VpcId?: string;
	}

	/** Provides a description of a mount target. */
	export interface MountTargetDescriptionFormProperties {
		OwnerId: FormControl<string | null | undefined>,

		/** Required */
		MountTargetId: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,

		/** Required */
		LifeCycleState: FormControl<LifeCycleState | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		AvailabilityZoneId: FormControl<string | null | undefined>,
		AvailabilityZoneName: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateMountTargetDescriptionFormGroup() {
		return new FormGroup<MountTargetDescriptionFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			MountTargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifeCycleState: new FormControl<LifeCycleState | null | undefined>(undefined, [Validators.required]),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
			AvailabilityZoneName: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MountTargetConflict {
	}
	export interface MountTargetConflictFormProperties {
	}
	export function CreateMountTargetConflictFormGroup() {
		return new FormGroup<MountTargetConflictFormProperties>({
		});

	}

	export interface SubnetNotFound {
	}
	export interface SubnetNotFoundFormProperties {
	}
	export function CreateSubnetNotFoundFormGroup() {
		return new FormGroup<SubnetNotFoundFormProperties>({
		});

	}

	export interface NoFreeAddressesInSubnet {
	}
	export interface NoFreeAddressesInSubnetFormProperties {
	}
	export function CreateNoFreeAddressesInSubnetFormGroup() {
		return new FormGroup<NoFreeAddressesInSubnetFormProperties>({
		});

	}

	export interface IpAddressInUse {
	}
	export interface IpAddressInUseFormProperties {
	}
	export function CreateIpAddressInUseFormGroup() {
		return new FormGroup<IpAddressInUseFormProperties>({
		});

	}

	export interface NetworkInterfaceLimitExceeded {
	}
	export interface NetworkInterfaceLimitExceededFormProperties {
	}
	export function CreateNetworkInterfaceLimitExceededFormGroup() {
		return new FormGroup<NetworkInterfaceLimitExceededFormProperties>({
		});

	}

	export interface SecurityGroupLimitExceeded {
	}
	export interface SecurityGroupLimitExceededFormProperties {
	}
	export function CreateSecurityGroupLimitExceededFormGroup() {
		return new FormGroup<SecurityGroupLimitExceededFormProperties>({
		});

	}

	export interface SecurityGroupNotFound {
	}
	export interface SecurityGroupNotFoundFormProperties {
	}
	export function CreateSecurityGroupNotFoundFormGroup() {
		return new FormGroup<SecurityGroupNotFoundFormProperties>({
		});

	}

	export interface AvailabilityZonesMismatch {
	}
	export interface AvailabilityZonesMismatchFormProperties {
	}
	export function CreateAvailabilityZonesMismatchFormGroup() {
		return new FormGroup<AvailabilityZonesMismatchFormProperties>({
		});

	}

	export interface ReplicationConfigurationDescription {

		/** Required */
		SourceFileSystemId: string;

		/** Required */
		SourceFileSystemRegion: string;

		/** Required */
		SourceFileSystemArn: string;

		/** Required */
		OriginalSourceFileSystemArn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		Destinations: Array<Destination>;
	}
	export interface ReplicationConfigurationDescriptionFormProperties {

		/** Required */
		SourceFileSystemId: FormControl<string | null | undefined>,

		/** Required */
		SourceFileSystemRegion: FormControl<string | null | undefined>,

		/** Required */
		SourceFileSystemArn: FormControl<string | null | undefined>,

		/** Required */
		OriginalSourceFileSystemArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<ReplicationConfigurationDescriptionFormProperties>({
			SourceFileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceFileSystemRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceFileSystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginalSourceFileSystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the destination file system in the replication configuration. */
	export interface Destination {

		/** Required */
		Status: ReplicationStatus;

		/** Required */
		FileSystemId: string;

		/** Required */
		Region: string;
		LastReplicatedTimestamp?: Date;
	}

	/** Describes the destination file system in the replication configuration. */
	export interface DestinationFormProperties {

		/** Required */
		Status: FormControl<ReplicationStatus | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,

		/** Required */
		Region: FormControl<string | null | undefined>,
		LastReplicatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			Status: new FormControl<ReplicationStatus | null | undefined>(undefined, [Validators.required]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastReplicatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReplicationStatus { ENABLED = 'ENABLED', ENABLING = 'ENABLING', DELETING = 'DELETING', ERROR = 'ERROR', PAUSED = 'PAUSED', PAUSING = 'PAUSING' }


	/** Describes the destination file system to create in the replication configuration. */
	export interface DestinationToCreate {
		Region?: string;
		AvailabilityZoneName?: string;
		KmsKeyId?: string;
	}

	/** Describes the destination file system to create in the replication configuration. */
	export interface DestinationToCreateFormProperties {
		Region: FormControl<string | null | undefined>,
		AvailabilityZoneName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationToCreateFormGroup() {
		return new FormGroup<DestinationToCreateFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined),
			AvailabilityZoneName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ReplicationNotFound {
	}
	export interface ReplicationNotFoundFormProperties {
	}
	export function CreateReplicationNotFoundFormGroup() {
		return new FormGroup<ReplicationNotFoundFormProperties>({
		});

	}

	export interface AccessPointNotFound {
	}
	export interface AccessPointNotFoundFormProperties {
	}
	export function CreateAccessPointNotFoundFormGroup() {
		return new FormGroup<AccessPointNotFoundFormProperties>({
		});

	}

	export interface FileSystemInUse {
	}
	export interface FileSystemInUseFormProperties {
	}
	export function CreateFileSystemInUseFormGroup() {
		return new FormGroup<FileSystemInUseFormProperties>({
		});

	}

	export interface DependencyTimeout {
	}
	export interface DependencyTimeoutFormProperties {
	}
	export function CreateDependencyTimeoutFormGroup() {
		return new FormGroup<DependencyTimeoutFormProperties>({
		});

	}

	export interface MountTargetNotFound {
	}
	export interface MountTargetNotFoundFormProperties {
	}
	export function CreateMountTargetNotFoundFormGroup() {
		return new FormGroup<MountTargetNotFoundFormProperties>({
		});

	}

	export interface DescribeAccessPointsResponse {
		AccessPoints?: Array<AccessPointDescription>;
		NextToken?: string;
	}
	export interface DescribeAccessPointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccessPointsResponseFormGroup() {
		return new FormGroup<DescribeAccessPointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAccountPreferencesResponse {
		ResourceIdPreference?: ResourceIdPreference;
		NextToken?: string;
	}
	export interface DescribeAccountPreferencesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountPreferencesResponseFormGroup() {
		return new FormGroup<DescribeAccountPreferencesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region. */
	export interface ResourceIdPreference {
		ResourceIdType?: ResourceIdType;
		Resources?: Array<Resource>;
	}

	/** Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region. */
	export interface ResourceIdPreferenceFormProperties {
		ResourceIdType: FormControl<ResourceIdType | null | undefined>,
	}
	export function CreateResourceIdPreferenceFormGroup() {
		return new FormGroup<ResourceIdPreferenceFormProperties>({
			ResourceIdType: new FormControl<ResourceIdType | null | undefined>(undefined),
		});

	}


	/** A preference indicating a choice to use 63bit/32bit IDs for all applicable resources. */
	export enum ResourceIdType { LONG_ID = 'LONG_ID', SHORT_ID = 'SHORT_ID' }


	/** An EFS resource, for example a file system or a mount target. */
	export enum Resource { FILE_SYSTEM = 'FILE_SYSTEM', MOUNT_TARGET = 'MOUNT_TARGET' }

	export interface BackupPolicyDescription {
		BackupPolicy?: BackupPolicy;
	}
	export interface BackupPolicyDescriptionFormProperties {
	}
	export function CreateBackupPolicyDescriptionFormGroup() {
		return new FormGroup<BackupPolicyDescriptionFormProperties>({
		});

	}


	/** The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>. */
	export interface BackupPolicy {

		/** Required */
		Status: Status;
	}

	/** The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>. */
	export interface BackupPolicyFormProperties {

		/** Required */
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateBackupPolicyFormGroup() {
		return new FormGroup<BackupPolicyFormProperties>({
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Status { ENABLED = 'ENABLED', ENABLING = 'ENABLING', DISABLED = 'DISABLED', DISABLING = 'DISABLING' }

	export interface PolicyNotFound {
	}
	export interface PolicyNotFoundFormProperties {
	}
	export function CreatePolicyNotFoundFormGroup() {
		return new FormGroup<PolicyNotFoundFormProperties>({
		});

	}

	export interface FileSystemPolicyDescription {
		FileSystemId?: string;
		Policy?: string;
	}
	export interface FileSystemPolicyDescriptionFormProperties {
		FileSystemId: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemPolicyDescriptionFormGroup() {
		return new FormGroup<FileSystemPolicyDescriptionFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFileSystemsResponse {
		Marker?: string;
		FileSystems?: Array<FileSystemDescription>;
		NextMarker?: string;
	}
	export interface DescribeFileSystemsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileSystemsResponseFormGroup() {
		return new FormGroup<DescribeFileSystemsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LifecycleConfigurationDescription {
		LifecyclePolicies?: Array<LifecyclePolicy>;
	}
	export interface LifecycleConfigurationDescriptionFormProperties {
	}
	export function CreateLifecycleConfigurationDescriptionFormGroup() {
		return new FormGroup<LifecycleConfigurationDescriptionFormProperties>({
		});

	}


	/** <p>Describes a policy used by EFS lifecycle management and EFS Intelligent-Tiering that specifies when to transition files into and out of the file system's Infrequent Access (IA) storage class. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Intelligent‐Tiering and EFS Lifecycle Management</a>.</p> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. For more information, see the request examples in <a>PutLifecycleConfiguration</a>.</p> </note> */
	export interface LifecyclePolicy {
		TransitionToIA?: TransitionToIARules;
		TransitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRules;
	}

	/** <p>Describes a policy used by EFS lifecycle management and EFS Intelligent-Tiering that specifies when to transition files into and out of the file system's Infrequent Access (IA) storage class. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Intelligent‐Tiering and EFS Lifecycle Management</a>.</p> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. For more information, see the request examples in <a>PutLifecycleConfiguration</a>.</p> </note> */
	export interface LifecyclePolicyFormProperties {
		TransitionToIA: FormControl<TransitionToIARules | null | undefined>,
		TransitionToPrimaryStorageClass: FormControl<TransitionToPrimaryStorageClassRules | null | undefined>,
	}
	export function CreateLifecyclePolicyFormGroup() {
		return new FormGroup<LifecyclePolicyFormProperties>({
			TransitionToIA: new FormControl<TransitionToIARules | null | undefined>(undefined),
			TransitionToPrimaryStorageClass: new FormControl<TransitionToPrimaryStorageClassRules | null | undefined>(undefined),
		});

	}

	export enum TransitionToIARules { AFTER_7_DAYS = 'AFTER_7_DAYS', AFTER_14_DAYS = 'AFTER_14_DAYS', AFTER_30_DAYS = 'AFTER_30_DAYS', AFTER_60_DAYS = 'AFTER_60_DAYS', AFTER_90_DAYS = 'AFTER_90_DAYS', AFTER_1_DAY = 'AFTER_1_DAY' }

	export enum TransitionToPrimaryStorageClassRules { AFTER_1_ACCESS = 'AFTER_1_ACCESS' }

	export interface DescribeMountTargetSecurityGroupsResponse {

		/** Required */
		SecurityGroups: Array<string>;
	}
	export interface DescribeMountTargetSecurityGroupsResponseFormProperties {
	}
	export function CreateDescribeMountTargetSecurityGroupsResponseFormGroup() {
		return new FormGroup<DescribeMountTargetSecurityGroupsResponseFormProperties>({
		});

	}

	export interface IncorrectMountTargetState {
	}
	export interface IncorrectMountTargetStateFormProperties {
	}
	export function CreateIncorrectMountTargetStateFormGroup() {
		return new FormGroup<IncorrectMountTargetStateFormProperties>({
		});

	}


	/** <p/> */
	export interface DescribeMountTargetsResponse {
		Marker?: string;
		MountTargets?: Array<MountTargetDescription>;
		NextMarker?: string;
	}

	/** <p/> */
	export interface DescribeMountTargetsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMountTargetsResponseFormGroup() {
		return new FormGroup<DescribeMountTargetsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReplicationConfigurationsResponse {
		Replications?: Array<ReplicationConfigurationDescription>;
		NextToken?: string;
	}
	export interface DescribeReplicationConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationConfigurationsResponseFormGroup() {
		return new FormGroup<DescribeReplicationConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTagsResponse {
		Marker?: string;

		/** Required */
		Tags: Array<Tag>;
		NextMarker?: string;
	}

	/** <p/> */
	export interface DescribeTagsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagsResponseFormGroup() {
		return new FormGroup<DescribeTagsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAccountPreferencesResponse {

		/** Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region. */
		ResourceIdPreference?: ResourceIdPreference;
	}
	export interface PutAccountPreferencesResponseFormProperties {
	}
	export function CreatePutAccountPreferencesResponseFormGroup() {
		return new FormGroup<PutAccountPreferencesResponseFormProperties>({
		});

	}

	export interface InvalidPolicyException {
	}
	export interface InvalidPolicyExceptionFormProperties {
	}
	export function CreateInvalidPolicyExceptionFormGroup() {
		return new FormGroup<InvalidPolicyExceptionFormProperties>({
		});

	}

	export interface TooManyRequests {
	}
	export interface TooManyRequestsFormProperties {
	}
	export function CreateTooManyRequestsFormGroup() {
		return new FormGroup<TooManyRequestsFormProperties>({
		});

	}

	export interface CreateAccessPointRequest {

		/** Required */
		ClientToken: string;
		Tags?: Array<Tag>;

		/** Required */
		FileSystemId: string;
		PosixUser?: PosixUser;
		RootDirectory?: RootDirectory;
	}
	export interface CreateAccessPointRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointRequestFormGroup() {
		return new FormGroup<CreateAccessPointRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFileSystemRequest {

		/** Required */
		CreationToken: string;
		PerformanceMode?: PerformanceMode;
		Encrypted?: boolean | null;
		KmsKeyId?: string;
		ThroughputMode?: ThroughputMode;
		ProvisionedThroughputInMibps?: number | null;
		AvailabilityZoneName?: string;
		Backup?: boolean | null;
		Tags?: Array<Tag>;
	}
	export interface CreateFileSystemRequestFormProperties {

		/** Required */
		CreationToken: FormControl<string | null | undefined>,
		PerformanceMode: FormControl<PerformanceMode | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ThroughputMode: FormControl<ThroughputMode | null | undefined>,
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
		AvailabilityZoneName: FormControl<string | null | undefined>,
		Backup: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateFileSystemRequestFormGroup() {
		return new FormGroup<CreateFileSystemRequestFormProperties>({
			CreationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PerformanceMode: new FormControl<PerformanceMode | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ThroughputMode: new FormControl<ThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined),
			AvailabilityZoneName: new FormControl<string | null | undefined>(undefined),
			Backup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateMountTargetRequest {

		/** Required */
		FileSystemId: string;

		/** Required */
		SubnetId: string;
		IpAddress?: string;
		SecurityGroups?: Array<string>;
	}

	/** <p/> */
	export interface CreateMountTargetRequestFormProperties {

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateMountTargetRequestFormGroup() {
		return new FormGroup<CreateMountTargetRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReplicationConfigurationRequest {

		/** Required */
		Destinations: Array<DestinationToCreate>;
	}
	export interface CreateReplicationConfigurationRequestFormProperties {
	}
	export function CreateCreateReplicationConfigurationRequestFormGroup() {
		return new FormGroup<CreateReplicationConfigurationRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateTagsRequest {

		/** Required */
		Tags: Array<Tag>;
	}

	/** <p/> */
	export interface CreateTagsRequestFormProperties {
	}
	export function CreateCreateTagsRequestFormGroup() {
		return new FormGroup<CreateTagsRequestFormProperties>({
		});

	}

	export interface DeleteAccessPointRequest {
	}
	export interface DeleteAccessPointRequestFormProperties {
	}
	export function CreateDeleteAccessPointRequestFormGroup() {
		return new FormGroup<DeleteAccessPointRequestFormProperties>({
		});

	}

	export interface DeleteFileSystemPolicyRequest {
	}
	export interface DeleteFileSystemPolicyRequestFormProperties {
	}
	export function CreateDeleteFileSystemPolicyRequestFormGroup() {
		return new FormGroup<DeleteFileSystemPolicyRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteFileSystemRequest {
	}

	/** <p/> */
	export interface DeleteFileSystemRequestFormProperties {
	}
	export function CreateDeleteFileSystemRequestFormGroup() {
		return new FormGroup<DeleteFileSystemRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteMountTargetRequest {
	}

	/** <p/> */
	export interface DeleteMountTargetRequestFormProperties {
	}
	export function CreateDeleteMountTargetRequestFormGroup() {
		return new FormGroup<DeleteMountTargetRequestFormProperties>({
		});

	}

	export interface DeleteReplicationConfigurationRequest {
	}
	export interface DeleteReplicationConfigurationRequestFormProperties {
	}
	export function CreateDeleteReplicationConfigurationRequestFormGroup() {
		return new FormGroup<DeleteReplicationConfigurationRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteTagsRequest {

		/** Required */
		TagKeys: Array<string>;
	}

	/** <p/> */
	export interface DeleteTagsRequestFormProperties {
	}
	export function CreateDeleteTagsRequestFormGroup() {
		return new FormGroup<DeleteTagsRequestFormProperties>({
		});

	}

	export interface DescribeAccessPointsRequest {
	}
	export interface DescribeAccessPointsRequestFormProperties {
	}
	export function CreateDescribeAccessPointsRequestFormGroup() {
		return new FormGroup<DescribeAccessPointsRequestFormProperties>({
		});

	}

	export interface DescribeAccountPreferencesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeAccountPreferencesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccountPreferencesRequestFormGroup() {
		return new FormGroup<DescribeAccountPreferencesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeBackupPolicyRequest {
	}
	export interface DescribeBackupPolicyRequestFormProperties {
	}
	export function CreateDescribeBackupPolicyRequestFormGroup() {
		return new FormGroup<DescribeBackupPolicyRequestFormProperties>({
		});

	}

	export interface DescribeFileSystemPolicyRequest {
	}
	export interface DescribeFileSystemPolicyRequestFormProperties {
	}
	export function CreateDescribeFileSystemPolicyRequestFormGroup() {
		return new FormGroup<DescribeFileSystemPolicyRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DescribeFileSystemsRequest {
	}

	/** <p/> */
	export interface DescribeFileSystemsRequestFormProperties {
	}
	export function CreateDescribeFileSystemsRequestFormGroup() {
		return new FormGroup<DescribeFileSystemsRequestFormProperties>({
		});

	}

	export interface DescribeLifecycleConfigurationRequest {
	}
	export interface DescribeLifecycleConfigurationRequestFormProperties {
	}
	export function CreateDescribeLifecycleConfigurationRequestFormGroup() {
		return new FormGroup<DescribeLifecycleConfigurationRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DescribeMountTargetSecurityGroupsRequest {
	}

	/** <p/> */
	export interface DescribeMountTargetSecurityGroupsRequestFormProperties {
	}
	export function CreateDescribeMountTargetSecurityGroupsRequestFormGroup() {
		return new FormGroup<DescribeMountTargetSecurityGroupsRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DescribeMountTargetsRequest {
	}

	/** <p/> */
	export interface DescribeMountTargetsRequestFormProperties {
	}
	export function CreateDescribeMountTargetsRequestFormGroup() {
		return new FormGroup<DescribeMountTargetsRequestFormProperties>({
		});

	}

	export interface DescribeReplicationConfigurationsRequest {
	}
	export interface DescribeReplicationConfigurationsRequestFormProperties {
	}
	export function CreateDescribeReplicationConfigurationsRequestFormGroup() {
		return new FormGroup<DescribeReplicationConfigurationsRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DescribeTagsRequest {
	}

	/** <p/> */
	export interface DescribeTagsRequestFormProperties {
	}
	export function CreateDescribeTagsRequestFormGroup() {
		return new FormGroup<DescribeTagsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyMountTargetSecurityGroupsRequest {
		SecurityGroups?: Array<string>;
	}

	/** <p/> */
	export interface ModifyMountTargetSecurityGroupsRequestFormProperties {
	}
	export function CreateModifyMountTargetSecurityGroupsRequestFormGroup() {
		return new FormGroup<ModifyMountTargetSecurityGroupsRequestFormProperties>({
		});

	}

	export interface PutAccountPreferencesRequest {

		/** Required */
		ResourceIdType: ResourceIdType;
	}
	export interface PutAccountPreferencesRequestFormProperties {

		/** Required */
		ResourceIdType: FormControl<ResourceIdType | null | undefined>,
	}
	export function CreatePutAccountPreferencesRequestFormGroup() {
		return new FormGroup<PutAccountPreferencesRequestFormProperties>({
			ResourceIdType: new FormControl<ResourceIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutBackupPolicyRequest {

		/** Required */
		BackupPolicy: BackupPolicy;
	}
	export interface PutBackupPolicyRequestFormProperties {
	}
	export function CreatePutBackupPolicyRequestFormGroup() {
		return new FormGroup<PutBackupPolicyRequestFormProperties>({
		});

	}

	export interface PutFileSystemPolicyRequest {

		/** Required */
		Policy: string;
		BypassPolicyLockoutSafetyCheck?: boolean | null;
	}
	export interface PutFileSystemPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
	}
	export function CreatePutFileSystemPolicyRequestFormGroup() {
		return new FormGroup<PutFileSystemPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BypassPolicyLockoutSafetyCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutLifecycleConfigurationRequest {

		/** Required */
		LifecyclePolicies: Array<LifecyclePolicy>;
	}
	export interface PutLifecycleConfigurationRequestFormProperties {
	}
	export function CreatePutLifecycleConfigurationRequestFormGroup() {
		return new FormGroup<PutLifecycleConfigurationRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateFileSystemRequest {
		ThroughputMode?: ThroughputMode;
		ProvisionedThroughputInMibps?: number | null;
	}
	export interface UpdateFileSystemRequestFormProperties {
		ThroughputMode: FormControl<ThroughputMode | null | undefined>,
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemRequestFormGroup() {
		return new FormGroup<UpdateFileSystemRequestFormProperties>({
			ThroughputMode: new FormControl<ThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in the application's own directory and any subdirectories. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access points</a>.</p> <note> <p>If multiple requests to create access points on the same file system are sent in quick succession, and the file system is near the limit of 1,000 access points, you may experience a throttling response for these requests. This is to ensure that the file system does not exceed the stated access point limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p> <p>Access points can be tagged on creation. If tags are specified in the creation action, IAM performs additional authorization on the <code>elasticfilesystem:TagResource</code> action to verify if users have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>elasticfilesystem:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-tags-efs.html#supported-iam-actions-tagging.html">Granting permissions to tag resources during creation</a>.</p>
		 * Post 2015-02-01/access-points
		 * @return {AccessPointDescription} Success
		 */
		CreateAccessPoint(requestBody: CreateAccessPointPostBody): Observable<AccessPointDescription> {
			return this.http.post<AccessPointDescription>(this.baseUri + '2015-02-01/access-points', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided. If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system. You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
		 * Get 2015-02-01/access-points
		 * @param {number} MaxResults (Optional) When retrieving all access points for a file system, you can optionally specify the <code>MaxItems</code> parameter to limit the number of objects returned in a response. The default value is 100. 
		 *     Minimum: 1
		 * @param {string} NextToken  <code>NextToken</code> is present if the response is paginated. You can use <code>NextMarker</code> in the subsequent request to fetch the next page of access point descriptions.
		 *     Min length: 1    Max length: 128
		 * @param {string} AccessPointId (Optional) Specifies an EFS access point to describe in the response; mutually exclusive with <code>FileSystemId</code>.
		 *     Max length: 128
		 * @param {string} FileSystemId (Optional) If you provide a <code>FileSystemId</code>, EFS returns all access points for that file system; mutually exclusive with <code>AccessPointId</code>.
		 *     Max length: 128
		 * @return {DescribeAccessPointsResponse} Success
		 */
		DescribeAccessPoints(MaxResults: number | null | undefined, NextToken: string | null | undefined, AccessPointId: string | null | undefined, FileSystemId: string | null | undefined): Observable<DescribeAccessPointsResponse> {
			return this.http.get<DescribeAccessPointsResponse>(this.baseUri + '2015-02-01/access-points?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&AccessPointId=' + (AccessPointId == null ? '' : encodeURIComponent(AccessPointId)) + '&FileSystemId=' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), {});
		}

		/**
		 * <p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's Amazon Web Services account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance modes</a>.</p> <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code> parameter.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p>This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p> <p>File systems can be tagged on creation. If tags are specified in the creation action, IAM performs additional authorization on the <code>elasticfilesystem:TagResource</code> action to verify if users have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>elasticfilesystem:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-tags-efs.html#supported-iam-actions-tagging.html">Granting permissions to tag resources during creation</a>.</p>
		 * Post 2015-02-01/file-systems
		 * @return {void} 
		 */
		CreateFileSystem(requestBody: CreateFileSystemPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/file-systems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. This number is automatically set to 100. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
		 * Get 2015-02-01/file-systems
		 * @param {number} MaxItems (Optional) Specifies the maximum number of file systems to return in the response (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems. 
		 *     Minimum: 1
		 * @param {string} Marker (Optional) Opaque pagination token returned from a previous <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the list from where the returning call had left off. 
		 *     Min length: 1    Max length: 128
		 * @param {string} CreationToken (Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.
		 *     Min length: 1    Max length: 64
		 * @param {string} FileSystemId (Optional) ID of the file system whose description you want to retrieve (String).
		 *     Max length: 128
		 * @return {DescribeFileSystemsResponse} Success
		 */
		DescribeFileSystems(MaxItems: number | null | undefined, Marker: string | null | undefined, CreationToken: string | null | undefined, FileSystemId: string | null | undefined): Observable<DescribeFileSystemsResponse> {
			return this.http.get<DescribeFileSystemsResponse>(this.baseUri + '2015-02-01/file-systems?MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&CreationToken=' + (CreationToken == null ? '' : encodeURIComponent(CreationToken)) + '&FileSystemId=' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), {});
		}

		/**
		 * <p>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system.</p> <p>You can create only one mount target for an EFS file system using One Zone storage classes. You must create that mount target in the same Availability Zone in which the file system is located. Use the <code>AvailabilityZoneName</code> and <code>AvailabiltyZoneId</code> properties in the <a>DescribeFileSystems</a> response object to get this information. Use the <code>subnetId</code> associated with the file system's Availability Zone when creating the mount target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p>To create a mount target for a file system, the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, provide the following:</p> <ul> <li> <p>The file system ID for which you are creating the mount target.</p> </li> <li> <p>A subnet ID, which determines the following:</p> <ul> <li> <p>The VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>The Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>
		 * Post 2015-02-01/mount-targets
		 * @return {MountTargetDescription} Success
		 */
		CreateMountTarget(requestBody: CreateMountTargetPostBody): Observable<MountTargetDescription> {
			return this.http.post<MountTargetDescription>(this.baseUri + '2015-02-01/mount-targets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID that you specify in <code>FileSystemId</code>, or on the file system of the mount target that you specify in <code>MountTargetId</code>.</p>
		 * Get 2015-02-01/mount-targets
		 * @param {number} MaxItems (Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.
		 *     Minimum: 1
		 * @param {string} Marker (Optional) Opaque pagination token returned from a previous <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue the list from where the previous returning call left off.
		 *     Min length: 1    Max length: 128
		 * @param {string} FileSystemId (Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an <code>AccessPointId</code> or <code>MountTargetId</code> is not included. Accepts either a file system ID or ARN as input.
		 *     Max length: 128
		 * @param {string} MountTargetId (Optional) ID of the mount target that you want to have described (String). It must be included in your request if <code>FileSystemId</code> is not included. Accepts either a mount target ID or ARN as input.
		 *     Min length: 13    Max length: 45
		 * @param {string} AccessPointId (Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a <code>FileSystemId</code> or <code>MountTargetId</code> is not included in your request. Accepts either an access point ID or ARN as input.
		 *     Max length: 128
		 * @return {DescribeMountTargetsResponse} Success
		 */
		DescribeMountTargets(MaxItems: number | null | undefined, Marker: string | null | undefined, FileSystemId: string | null | undefined, MountTargetId: string | null | undefined, AccessPointId: string | null | undefined): Observable<DescribeMountTargetsResponse> {
			return this.http.get<DescribeMountTargetsResponse>(this.baseUri + '2015-02-01/mount-targets?MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&FileSystemId=' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '&MountTargetId=' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)) + '&AccessPointId=' + (AccessPointId == null ? '' : encodeURIComponent(AccessPointId)), {});
		}

		/**
		 * <p>Creates a replication configuration that replicates an existing EFS file system to a new, read-only file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>. The replication configuration specifies the following:</p> <ul> <li> <p> <b>Source file system</b> - An existing EFS file system that you want replicated. The source file system cannot be a destination file system in an existing replication configuration.</p> </li> <li> <p> <b>Destination file system configuration</b> - The configuration of the destination file system to which the source file system will be replicated. There can only be one destination file system in a replication configuration. The destination file system configuration consists of the following properties:</p> <ul> <li> <p> <b>Amazon Web Services Region</b> - The Amazon Web Services Region in which the destination file system is created. Amazon EFS replication is available in all Amazon Web Services Regions that Amazon EFS is available in, except Africa (Cape Town), Asia Pacific (Hong Kong), Asia Pacific (Jakarta), Europe (Milan), and Middle East (Bahrain).</p> </li> <li> <p> <b>Availability Zone</b> - If you want the destination file system to use EFS One Zone availability and durability, you must specify the Availability Zone to create the file system in. For more information about EFS storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html"> Amazon EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> </li> <li> <p> <b>Encryption</b> - All destination file systems are created with encryption at rest enabled. You can specify the Key Management Service (KMS) key that is used to encrypt the destination file system. If you don't specify a KMS key, your service-managed KMS key for Amazon EFS is used. </p> <note> <p>After the file system is created, you cannot change the KMS key.</p> </note> </li> </ul> </li> </ul> <p>The following properties are set by default:</p> <ul> <li> <p> <b>Performance mode</b> - The destination file system's performance mode matches that of the source file system, unless the destination file system uses EFS One Zone storage. In that case, the General Purpose performance mode is used. The performance mode cannot be changed.</p> </li> <li> <p> <b>Throughput mode</b> - The destination file system's throughput mode matches that of the source file system. After the file system is created, you can modify the throughput mode.</p> </li> </ul> <p>The following properties are turned off by default:</p> <ul> <li> <p> <b>Lifecycle management</b> - EFS lifecycle management and EFS Intelligent-Tiering are not enabled on the destination file system. After the destination file system is created, you can enable EFS lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p> <b>Automatic backups</b> - Automatic daily backups not enabled on the destination file system. After the file system is created, you can change this setting.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>.</p>
		 * Post 2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration
		 * @param {string} SourceFileSystemId Specifies the Amazon EFS file system that you want to replicate. This file system cannot already be a source or destination file system in another replication configuration.
		 *     Max length: 128
		 * @return {ReplicationConfigurationDescription} Success
		 */
		CreateReplicationConfiguration(SourceFileSystemId: string, requestBody: CreateReplicationConfigurationPostBody): Observable<ReplicationConfigurationDescription> {
			return this.http.post<ReplicationConfigurationDescription>(this.baseUri + '2015-02-01/file-systems/' + (SourceFileSystemId == null ? '' : encodeURIComponent(SourceFileSystemId)) + '/replication-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing replication configuration. To delete a replication configuration, you must make the request from the Amazon Web Services Region in which the destination file system is located. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system is no longer read-only. You can write to the destination file system after its status becomes <code>Writeable</code>.
		 * Delete 2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration
		 * @param {string} SourceFileSystemId The ID of the source file system in the replication configuration.
		 *     Max length: 128
		 * @return {void} 
		 */
		DeleteReplicationConfiguration(SourceFileSystemId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/file-systems/' + (SourceFileSystemId == null ? '' : encodeURIComponent(SourceFileSystemId)) + '/replication-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>DEPRECATED - <code>CreateTags</code> is deprecated and not maintained. To create tags for EFS resources, use the API action.</p> </note> <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p>
		 * Post 2015-02-01/create-tags/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.
		 *     Max length: 128
		 * @return {void} 
		 */
		CreateTags(FileSystemId: string, requestBody: CreateTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/create-tags/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>
		 * Delete 2015-02-01/access-points/{AccessPointId}
		 * @param {string} AccessPointId The ID of the access point that you want to delete.
		 *     Max length: 128
		 * @return {void} 
		 */
		DeleteAccessPoint(AccessPointId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/access-points/' + (AccessPointId == null ? '' : encodeURIComponent(AccessPointId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p>You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system.</p> <note> <p>You cannot delete a file system that is part of an EFS Replication configuration. You need to delete the replication configuration first.</p> </note> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>
		 * Delete 2015-02-01/file-systems/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system you want to delete.
		 *     Max length: 128
		 * @return {void} 
		 */
		DeleteFileSystem(FileSystemId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the throughput mode or the amount of provisioned throughput of an existing file system.
		 * Put 2015-02-01/file-systems/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system that you want to update.
		 *     Max length: 128
		 * @return {void} 
		 */
		UpdateFileSystem(FileSystemId: string, requestBody: UpdateFileSystemPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the <code>FileSystemPolicy</code> for the specified file system. The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>
		 * Delete 2015-02-01/file-systems/{FileSystemId}/policy
		 * @param {string} FileSystemId Specifies the EFS file system for which to delete the <code>FileSystemPolicy</code>.
		 *     Max length: 128
		 * @return {void} Success
		 */
		DeleteFileSystemPolicy(FileSystemId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/policy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
		 * Get 2015-02-01/file-systems/{FileSystemId}/policy
		 * @param {string} FileSystemId Specifies which EFS file system to retrieve the <code>FileSystemPolicy</code> for.
		 *     Max length: 128
		 * @return {FileSystemPolicyDescription} Success
		 */
		DescribeFileSystemPolicy(FileSystemId: string): Observable<FileSystemPolicyDescription> {
			return this.http.get<FileSystemPolicyDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/policy', {});
		}

		/**
		 * <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. EFS file system policies have a 20,000 character limit. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>. </p> <note> <p>EFS file system policies have a 20,000 character limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
		 * Put 2015-02-01/file-systems/{FileSystemId}/policy
		 * @param {string} FileSystemId The ID of the EFS file system that you want to create or update the <code>FileSystemPolicy</code> for.
		 *     Max length: 128
		 * @return {FileSystemPolicyDescription} Success
		 */
		PutFileSystemPolicy(FileSystemId: string, requestBody: PutFileSystemPolicyPutBody): Observable<FileSystemPolicyDescription> {
			return this.http.put<FileSystemPolicyDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>
		 * Delete 2015-02-01/mount-targets/{MountTargetId}
		 * @param {string} MountTargetId The ID of the mount target to delete (String).
		 *     Min length: 13    Max length: 45
		 * @return {void} 
		 */
		DeleteMountTarget(MountTargetId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/mount-targets/' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>DEPRECATED - <code>DeleteTags</code> is deprecated and not maintained. To remove tags from EFS resources, use the API action.</p> </note> <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p>
		 * Post 2015-02-01/delete-tags/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system whose tags you want to delete (String).
		 *     Max length: 128
		 * @return {void} 
		 */
		DeleteTags(FileSystemId: string, requestBody: DeleteTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/delete-tags/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region. For more information, see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.
		 * Get 2015-02-01/account-preferences
		 * @return {DescribeAccountPreferencesResponse} Success
		 */
		DescribeAccountPreferences(): Observable<DescribeAccountPreferencesResponse> {
			return this.http.get<DescribeAccountPreferencesResponse>(this.baseUri + '2015-02-01/account-preferences', {});
		}

		/**
		 * <p>Use this operation to set the account preference in the current Amazon Web Services Region to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for new EFS file system and mount target resources. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the opt-in period as EFS transitions to long resource IDs. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p> <note> <p>Starting in October, 2021, you will receive an error if you try to set the account preference to use the short 8 character format resource ID. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.</p> </note>
		 * Put 2015-02-01/account-preferences
		 * @return {PutAccountPreferencesResponse} Success
		 */
		PutAccountPreferences(requestBody: PutAccountPreferencesPutBody): Observable<PutAccountPreferencesResponse> {
			return this.http.put<PutAccountPreferencesResponse>(this.baseUri + '2015-02-01/account-preferences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the backup policy for the specified EFS file system.
		 * Get 2015-02-01/file-systems/{FileSystemId}/backup-policy
		 * @param {string} FileSystemId Specifies which EFS file system to retrieve the <code>BackupPolicy</code> for.
		 *     Max length: 128
		 * @return {BackupPolicyDescription} Success
		 */
		DescribeBackupPolicy(FileSystemId: string): Observable<BackupPolicyDescription> {
			return this.http.get<BackupPolicyDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/backup-policy', {});
		}

		/**
		 * Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system.
		 * Put 2015-02-01/file-systems/{FileSystemId}/backup-policy
		 * @param {string} FileSystemId Specifies which EFS file system to update the backup policy for.
		 *     Max length: 128
		 * @return {BackupPolicyDescription} Success
		 */
		PutBackupPolicy(FileSystemId: string, requestBody: PutBackupPolicyPutBody): Observable<BackupPolicyDescription> {
			return this.http.put<BackupPolicyDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/backup-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the response.</p> <p>When EFS Intelligent-Tiering is enabled, <code>TransitionToPrimaryStorageClass</code> has a value of <code>AFTER_1_ACCESS</code>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
		 * Get 2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration
		 * @param {string} FileSystemId The ID of the file system whose <code>LifecycleConfiguration</code> object you want to retrieve (String).
		 *     Max length: 128
		 * @return {LifecycleConfigurationDescription} Success
		 */
		DescribeLifecycleConfiguration(FileSystemId: string): Observable<LifecycleConfigurationDescription> {
			return this.http.get<LifecycleConfigurationDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/lifecycle-configuration', {});
		}

		/**
		 * <p>Use this action to manage EFS lifecycle management and EFS Intelligent-Tiering. A <code>LifecycleConfiguration</code> consists of one or more <code>LifecyclePolicy</code> objects that define the following:</p> <ul> <li> <p> <b>EFS Lifecycle management</b> - When Amazon EFS automatically transitions files in a file system into the lower-cost EFS Infrequent Access (IA) storage class.</p> <p>To enable EFS Lifecycle management, set the value of <code>TransitionToIA</code> to one of the available options.</p> </li> <li> <p> <b>EFS Intelligent-Tiering</b> - When Amazon EFS automatically transitions files from IA back into the file system's primary storage class (EFS Standard or EFS One Zone Standard).</p> <p>To enable EFS Intelligent-Tiering, set the value of <code>TransitionToPrimaryStorageClass</code> to <code>AFTER_1_ACCESS</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Lifecycle Management</a>.</p> <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a <code>LifecycleConfiguration</code> object already exists for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code> array in the request body deletes any existing <code>LifecycleConfiguration</code> and turns off lifecycle management and EFS Intelligent-Tiering for the file system.</p> <p>In the request, specify the following: </p> <ul> <li> <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that define when files are moved into IA storage, and when they are moved back to Standard storage.</p> <note> <p>Amazon EFS requires that each <code>LifecyclePolicy</code> object have only have a single transition, so the <code>LifecyclePolicies</code> array needs to be structured with separate <code>LifecyclePolicy</code> objects. See the example requests in the following section for more information.</p> </note> </li> </ul> <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p> <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.</p>
		 * Put 2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration
		 * @param {string} FileSystemId The ID of the file system for which you are creating the <code>LifecycleConfiguration</code> object (String).
		 *     Max length: 128
		 * @return {LifecycleConfigurationDescription} Success
		 */
		PutLifecycleConfiguration(FileSystemId: string, requestBody: PutLifecycleConfigurationPutBody): Observable<LifecycleConfigurationDescription> {
			return this.http.put<LifecycleConfigurationDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/lifecycle-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
		 * Get 2015-02-01/mount-targets/{MountTargetId}/security-groups
		 * @param {string} MountTargetId The ID of the mount target whose security groups you want to retrieve.
		 *     Min length: 13    Max length: 45
		 * @return {DescribeMountTargetSecurityGroupsResponse} Success
		 */
		DescribeMountTargetSecurityGroups(MountTargetId: string): Observable<DescribeMountTargetSecurityGroupsResponse> {
			return this.http.get<DescribeMountTargetSecurityGroupsResponse>(this.baseUri + '2015-02-01/mount-targets/' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)) + '/security-groups', {});
		}

		/**
		 * <p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
		 * Put 2015-02-01/mount-targets/{MountTargetId}/security-groups
		 * @param {string} MountTargetId The ID of the mount target whose security groups you want to modify.
		 *     Min length: 13    Max length: 45
		 * @return {void} 
		 */
		ModifyMountTargetSecurityGroups(MountTargetId: string, requestBody: ModifyMountTargetSecurityGroupsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2015-02-01/mount-targets/' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)) + '/security-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the replication configuration for a specific file system. If a file system is not specified, all of the replication configurations for the Amazon Web Services account in an Amazon Web Services Region are retrieved.
		 * Get 2015-02-01/file-systems/replication-configurations
		 * @param {string} FileSystemId You can retrieve the replication configuration for a specific file system by providing its file system ID.
		 *     Max length: 128
		 * @param {string} NextToken  <code>NextToken</code> is present if the response is paginated. You can use <code>NextToken</code> in a subsequent request to fetch the next page of output.
		 *     Min length: 1    Max length: 128
		 * @param {number} MaxResults (Optional) To limit the number of objects returned in a response, you can specify the <code>MaxItems</code> parameter. The default value is 100. 
		 *     Minimum: 1
		 * @return {DescribeReplicationConfigurationsResponse} Success
		 */
		DescribeReplicationConfigurations(FileSystemId: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<DescribeReplicationConfigurationsResponse> {
			return this.http.get<DescribeReplicationConfigurationsResponse>(this.baseUri + '2015-02-01/file-systems/replication-configurations?FileSystemId=' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * <note> <p>DEPRECATED - The <code>DescribeTags</code> action is deprecated and not maintained. To view tags associated with EFS resources, use the <code>ListTagsForResource</code> API action.</p> </note> <p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p>
		 * Get 2015-02-01/tags/{FileSystemId}/
		 * @param {number} MaxItems (Optional) The maximum number of file system tags to return in the response. Currently, this number is automatically set to 100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.
		 *     Minimum: 1
		 * @param {string} Marker (Optional) An opaque pagination token returned from a previous <code>DescribeTags</code> operation (String). If present, it specifies to continue the list from where the previous call left off.
		 *     Min length: 1    Max length: 128
		 * @param {string} FileSystemId The ID of the file system whose tag set you want to retrieve.
		 *     Max length: 128
		 * @return {DescribeTagsResponse} Success
		 */
		DescribeTags(MaxItems: number | null | undefined, Marker: string | null | undefined, FileSystemId: string): Observable<DescribeTagsResponse> {
			return this.http.get<DescribeTagsResponse>(this.baseUri + '2015-02-01/tags/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/?MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * <p>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
		 * Get 2015-02-01/resource-tags/{ResourceId}
		 * @param {string} ResourceId Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint.
		 *     Max length: 128
		 * @param {number} MaxResults (Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.
		 *     Minimum: 1
		 * @param {string} NextToken (Optional) You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.
		 *     Min length: 1    Max length: 128
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceId: string, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + '2015-02-01/resource-tags/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:TagResource</code> action.</p>
		 * Post 2015-02-01/resource-tags/{ResourceId}
		 * @param {string} ResourceId The ID specifying the EFS resource that you want to create a tag for.
		 *     Max length: 128
		 * @return {void} Success
		 */
		TagResource(ResourceId: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/resource-tags/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:UntagResource</code> action.</p>
		 * Delete 2015-02-01/resource-tags/{ResourceId}#tagKeys
		 * @param {string} ResourceId Specifies the EFS resource that you want to remove tags from.
		 *     Max length: 128
		 * @param {Array<string>} tagKeys The keys of the key-value tag pairs that you want to remove from the specified EFS resource.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {void} Success
		 */
		UntagResource(ResourceId: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/resource-tags/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateAccessPointPostBody {

		/**
		 * A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: string;

		/** Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>. */
		Tags?: Array<Tag>;

		/**
		 * The ID of the EFS file system that the access point provides access to.
		 * Required
		 * Max length: 128
		 */
		FileSystemId: string;

		/** The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point. */
		PosixUser?: CreateAccessPointPostBodyPosixUser;

		/** Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories. */
		RootDirectory?: CreateAccessPointPostBodyRootDirectory;
	}
	export interface CreateAccessPointPostBodyFormProperties {

		/**
		 * A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The ID of the EFS file system that the access point provides access to.
		 * Required
		 * Max length: 128
		 */
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointPostBodyFormGroup() {
		return new FormGroup<CreateAccessPointPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.+')]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$')]),
		});

	}

	export interface CreateAccessPointPostBodyPosixUser {
		Uid?: number | null;
		Gid?: number | null;
		SecondaryGids?: Array<number> | null;
	}
	export interface CreateAccessPointPostBodyPosixUserFormProperties {
		Uid: FormControl<number | null | undefined>,
		Gid: FormControl<number | null | undefined>,
	}
	export function CreateCreateAccessPointPostBodyPosixUserFormGroup() {
		return new FormGroup<CreateAccessPointPostBodyPosixUserFormProperties>({
			Uid: new FormControl<number | null | undefined>(undefined),
			Gid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateAccessPointPostBodyRootDirectory {
		Path?: string;
		CreationInfo?: CreationInfo;
	}
	export interface CreateAccessPointPostBodyRootDirectoryFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointPostBodyRootDirectoryFormGroup() {
		return new FormGroup<CreateAccessPointPostBodyRootDirectoryFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFileSystemPostBody {

		/**
		 * A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		CreationToken: string;

		/** <p>The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.</p> <note> <p>The <code>maxIO</code> mode is not supported on file systems using One Zone storage classes.</p> </note> */
		PerformanceMode?: PerformanceMode | null;

		/** A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key). If you don't specify a KMS key, then the default KMS key for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. */
		Encrypted?: boolean | null;

		/**
		 * <p>The ID of the KMS key that you want to use to protect the encrypted file system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If you use <code>KmsKeyId</code>, you must set the <a>CreateFileSystemRequest$Encrypted</a> parameter to true.</p> <important> <p>EFS accepts only symmetric KMS keys. You cannot use asymmetric KMS keys with Amazon EFS file systems.</p> </important>
		 * Max length: 2048
		 */
		KmsKeyId?: string | null;

		/** <p>Specifies the throughput mode for the file system. The mode can be <code>bursting</code>, <code>provisioned</code>, or <code>elastic</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. After you create the file system, you can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes, with certain time restrictions. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying throughput with provisioned mode</a> in the <i>Amazon EFS User Guide</i>. </p> <p>Default is <code>bursting</code>.</p> */
		ThroughputMode?: ThroughputMode | null;

		/**
		 * The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. To increase this limit, contact Amazon Web Services Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS quotas that you can increase</a> in the <i>Amazon EFS User Guide</i>.
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps?: number | null;

		/**
		 * <p>Used to create a file system that uses One Zone storage classes. It specifies the Amazon Web Services Availability Zone in which to create the file system. Use the format <code>us-east-1a</code> to specify the Availability Zone. For more information about One Zone storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">Using EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>One Zone storage classes are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.</p> </note>
		 * Min length: 1
		 * Max length: 64
		 */
		AvailabilityZoneName?: string | null;

		/** <p>Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to <code>true</code> to enable automatic backups. If you are creating a file system that uses One Zone storage classes, automatic backups are enabled by default. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a> in the <i>Amazon EFS User Guide</i>.</p> <p>Default is <code>false</code>. However, if you specify an <code>AvailabilityZoneName</code>, the default is <code>true</code>.</p> <note> <p>Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.</p> </note> */
		Backup?: boolean | null;

		/** Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a <code>"Key":"Name","Value":"{value}"</code> key-value pair. Each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>. */
		Tags?: Array<Tag>;
	}
	export interface CreateFileSystemPostBodyFormProperties {

		/**
		 * A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		CreationToken: FormControl<string | null | undefined>,

		/** <p>The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.</p> <note> <p>The <code>maxIO</code> mode is not supported on file systems using One Zone storage classes.</p> </note> */
		PerformanceMode: FormControl<PerformanceMode | null | undefined>,

		/** A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key). If you don't specify a KMS key, then the default KMS key for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. */
		Encrypted: FormControl<boolean | null | undefined>,

		/**
		 * <p>The ID of the KMS key that you want to use to protect the encrypted file system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If you use <code>KmsKeyId</code>, you must set the <a>CreateFileSystemRequest$Encrypted</a> parameter to true.</p> <important> <p>EFS accepts only symmetric KMS keys. You cannot use asymmetric KMS keys with Amazon EFS file systems.</p> </important>
		 * Max length: 2048
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/** <p>Specifies the throughput mode for the file system. The mode can be <code>bursting</code>, <code>provisioned</code>, or <code>elastic</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. After you create the file system, you can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes, with certain time restrictions. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying throughput with provisioned mode</a> in the <i>Amazon EFS User Guide</i>. </p> <p>Default is <code>bursting</code>.</p> */
		ThroughputMode: FormControl<ThroughputMode | null | undefined>,

		/**
		 * The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. To increase this limit, contact Amazon Web Services Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS quotas that you can increase</a> in the <i>Amazon EFS User Guide</i>.
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,

		/**
		 * <p>Used to create a file system that uses One Zone storage classes. It specifies the Amazon Web Services Availability Zone in which to create the file system. Use the format <code>us-east-1a</code> to specify the Availability Zone. For more information about One Zone storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">Using EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>One Zone storage classes are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.</p> </note>
		 * Min length: 1
		 * Max length: 64
		 */
		AvailabilityZoneName: FormControl<string | null | undefined>,

		/** <p>Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to <code>true</code> to enable automatic backups. If you are creating a file system that uses One Zone storage classes, automatic backups are enabled by default. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a> in the <i>Amazon EFS User Guide</i>.</p> <p>Default is <code>false</code>. However, if you specify an <code>AvailabilityZoneName</code>, the default is <code>true</code>.</p> <note> <p>Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.</p> </note> */
		Backup: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateFileSystemPostBodyFormGroup() {
		return new FormGroup<CreateFileSystemPostBodyFormProperties>({
			CreationToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.+')]),
			PerformanceMode: new FormControl<PerformanceMode | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|mrk-[0-9a-f]{32}|alias/[a-zA-Z0-9/_-]+|(arn:aws[-a-z]*:kms:[a-z0-9-]+:\d{12}:((key/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})|(key/mrk-[0-9a-f]{32})|(alias/[a-zA-Z0-9/_-]+))))$')]),
			ThroughputMode: new FormControl<ThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AvailabilityZoneName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.+')]),
			Backup: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateMountTargetPostBody {

		/**
		 * The ID of the file system for which to create the mount target.
		 * Required
		 * Max length: 128
		 */
		FileSystemId: string;

		/**
		 * The ID of the subnet to add the mount target in. For file systems that use One Zone storage classes, use the subnet that is associated with the file system's Availability Zone.
		 * Required
		 * Min length: 15
		 * Max length: 47
		 */
		SubnetId: string;

		/**
		 * Valid IPv4 address within the address range of the specified subnet.
		 * Min length: 7
		 * Max length: 15
		 */
		IpAddress?: string | null;

		/**
		 * Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.
		 * Maximum items: 100
		 */
		SecurityGroups?: Array<string>;
	}
	export interface CreateMountTargetPostBodyFormProperties {

		/**
		 * The ID of the file system for which to create the mount target.
		 * Required
		 * Max length: 128
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * The ID of the subnet to add the mount target in. For file systems that use One Zone storage classes, use the subnet that is associated with the file system's Availability Zone.
		 * Required
		 * Min length: 15
		 * Max length: 47
		 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * Valid IPv4 address within the address range of the specified subnet.
		 * Min length: 7
		 * Max length: 15
		 */
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateMountTargetPostBodyFormGroup() {
		return new FormGroup<CreateMountTargetPostBodyFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$')]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(15), Validators.maxLength(47), Validators.pattern('^subnet-[0-9a-f]{8,40}$')]),
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(15), Validators.pattern('^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$')]),
		});

	}

	export interface CreateReplicationConfigurationPostBody {

		/**
		 * An array of destination configuration objects. Only one destination configuration object is supported.
		 * Required
		 */
		Destinations: Array<DestinationToCreate>;
	}
	export interface CreateReplicationConfigurationPostBodyFormProperties {
	}
	export function CreateCreateReplicationConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateReplicationConfigurationPostBodyFormProperties>({
		});

	}

	export interface CreateTagsPostBody {

		/**
		 * An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface CreateTagsPostBodyFormProperties {
	}
	export function CreateCreateTagsPostBodyFormGroup() {
		return new FormGroup<CreateTagsPostBodyFormProperties>({
		});

	}

	export interface UpdateFileSystemPutBody {

		/** (Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. */
		ThroughputMode?: ThroughputMode | null;

		/**
		 * (Optional) Sets the amount of provisioned throughput, in MiB/s, for the file system. Valid values are 1-1024. If you are changing the throughput mode to provisioned, you must also provide the amount of provisioned throughput. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps?: number | null;
	}
	export interface UpdateFileSystemPutBodyFormProperties {

		/** (Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. */
		ThroughputMode: FormControl<ThroughputMode | null | undefined>,

		/**
		 * (Optional) Sets the amount of provisioned throughput, in MiB/s, for the file system. Valid values are 1-1024. If you are changing the throughput mode to provisioned, you must also provide the amount of provisioned throughput. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemPutBodyFormGroup() {
		return new FormGroup<UpdateFileSystemPutBodyFormProperties>({
			ThroughputMode: new FormControl<ThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PutFileSystemPolicyPutBody {

		/**
		 * The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>.
		 * Required
		 * Min length: 1
		 * Max length: 20000
		 */
		Policy: string;

		/** (Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system. The default value is <code>False</code>. */
		BypassPolicyLockoutSafetyCheck?: boolean | null;
	}
	export interface PutFileSystemPolicyPutBodyFormProperties {

		/**
		 * The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>.
		 * Required
		 * Min length: 1
		 * Max length: 20000
		 */
		Policy: FormControl<string | null | undefined>,

		/** (Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system. The default value is <code>False</code>. */
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
	}
	export function CreatePutFileSystemPolicyPutBodyFormGroup() {
		return new FormGroup<PutFileSystemPolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(20000), Validators.pattern('[\s\S]+')]),
			BypassPolicyLockoutSafetyCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteTagsPostBody {

		/**
		 * A list of tag keys to delete.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface DeleteTagsPostBodyFormProperties {
	}
	export function CreateDeleteTagsPostBodyFormGroup() {
		return new FormGroup<DeleteTagsPostBodyFormProperties>({
		});

	}

	export interface PutAccountPreferencesPutBody {

		/**
		 * A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.
		 * Required
		 */
		ResourceIdType: ResourceIdType;
	}
	export interface PutAccountPreferencesPutBodyFormProperties {

		/**
		 * A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.
		 * Required
		 */
		ResourceIdType: FormControl<ResourceIdType | null | undefined>,
	}
	export function CreatePutAccountPreferencesPutBodyFormGroup() {
		return new FormGroup<PutAccountPreferencesPutBodyFormProperties>({
			ResourceIdType: new FormControl<ResourceIdType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutBackupPolicyPutBody {

		/**
		 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
		 * Required
		 */
		BackupPolicy: PutBackupPolicyPutBodyBackupPolicy;
	}
	export interface PutBackupPolicyPutBodyFormProperties {
	}
	export function CreatePutBackupPolicyPutBodyFormGroup() {
		return new FormGroup<PutBackupPolicyPutBodyFormProperties>({
		});

	}

	export interface PutBackupPolicyPutBodyBackupPolicy {
		Status?: Status;
	}
	export interface PutBackupPolicyPutBodyBackupPolicyFormProperties {
		Status: FormControl<Status | null | undefined>,
	}
	export function CreatePutBackupPolicyPutBodyBackupPolicyFormGroup() {
		return new FormGroup<PutBackupPolicyPutBodyBackupPolicyFormProperties>({
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface PutLifecycleConfigurationPutBody {

		/**
		 * <p>An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object informs EFS lifecycle management and EFS Intelligent-Tiering of the following:</p> <ul> <li> <p>When to move files in the file system from primary storage to the IA storage class.</p> </li> <li> <p>When to move files that are in IA storage to primary storage.</p> </li> </ul> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. See the example requests in the following section for more information.</p> </note>
		 * Required
		 * Maximum items: 2
		 */
		LifecyclePolicies: Array<LifecyclePolicy>;
	}
	export interface PutLifecycleConfigurationPutBodyFormProperties {
	}
	export function CreatePutLifecycleConfigurationPutBodyFormGroup() {
		return new FormGroup<PutLifecycleConfigurationPutBodyFormProperties>({
		});

	}

	export interface ModifyMountTargetSecurityGroupsPutBody {

		/**
		 * An array of up to five VPC security group IDs.
		 * Maximum items: 100
		 */
		SecurityGroups?: Array<string>;
	}
	export interface ModifyMountTargetSecurityGroupsPutBodyFormProperties {
	}
	export function CreateModifyMountTargetSecurityGroupsPutBodyFormGroup() {
		return new FormGroup<ModifyMountTargetSecurityGroupsPutBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

}

