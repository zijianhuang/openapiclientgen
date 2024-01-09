import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Provides a description of an EFS file system access point. */
	export interface AccessPointDescription {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;
		Name?: string | null;
		Tags?: Array<Tag>;
		AccessPointId?: string | null;
		AccessPointArn?: string | null;
		FileSystemId?: string | null;

		/** The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point. */
		PosixUser?: PosixUser;

		/** Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories. */
		RootDirectory?: RootDirectory;
		OwnerId?: string | null;
		LifeCycleState?: AccessPointDescriptionLifeCycleState | null;
	}

	/** Provides a description of an EFS file system access point. */
	export interface AccessPointDescriptionFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AccessPointId: FormControl<string | null | undefined>,
		AccessPointArn: FormControl<string | null | undefined>,
		FileSystemId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		LifeCycleState: FormControl<AccessPointDescriptionLifeCycleState | null | undefined>,
	}
	export function CreateAccessPointDescriptionFormGroup() {
		return new FormGroup<AccessPointDescriptionFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined),
			AccessPointId: new FormControl<string | null | undefined>(undefined),
			AccessPointArn: new FormControl<string | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			LifeCycleState: new FormControl<AccessPointDescriptionLifeCycleState | null | undefined>(undefined),
		});

	}


	/** A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>  */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 */
		Value: string;
	}

	/** A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>  */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}


	/** The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point. */
	export interface PosixUser {

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Uid: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Gid: number;

		/**
		 * Minimum items: 0
		 * Maximum items: 16
		 */
		SecondaryGids?: Array<number>;
	}

	/** The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point. */
	export interface PosixUserFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Uid: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Gid: FormControl<number | null | undefined>,
	}
	export function CreatePosixUserFormGroup() {
		return new FormGroup<PosixUserFormProperties>({
			Uid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4294967295)]),
			Gid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4294967295)]),
		});

	}


	/** Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories. */
	export interface RootDirectory {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Path?: string | null;

		/** <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important> */
		CreationInfo?: CreationInfo;
	}

	/** Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories. */
	export interface RootDirectoryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Path: FormControl<string | null | undefined>,
	}
	export function CreateRootDirectoryFormGroup() {
		return new FormGroup<RootDirectoryFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}


	/** <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important> */
	export interface CreationInfo {

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		OwnerUid: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		OwnerGid: number;

		/** Required */
		Permissions: string;
	}

	/** <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important> */
	export interface CreationInfoFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		OwnerUid: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		OwnerGid: FormControl<number | null | undefined>,

		/** Required */
		Permissions: FormControl<string | null | undefined>,
	}
	export function CreateCreationInfoFormGroup() {
		return new FormGroup<CreationInfoFormProperties>({
			OwnerUid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4294967295)]),
			OwnerGid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4294967295)]),
			Permissions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccessPointDescriptionLifeCycleState { creating = 0, available = 1, updating = 2, deleting = 3, deleted = 4 }

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


	/** A description of the file system. */
	export interface FileSystemDescription {

		/** Required */
		OwnerId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CreationToken: string;

		/** Required */
		FileSystemId: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		LifeCycleState: AccessPointDescriptionLifeCycleState;

		/** Max length: 256 */
		Name?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		NumberOfMountTargets: number;

		/**
		 * The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.
		 * Required
		 */
		SizeInBytes: FileSystemSize;

		/** Required */
		PerformanceMode: FileSystemDescriptionPerformanceMode;
		Encrypted?: boolean | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
		ThroughputMode?: FileSystemDescriptionThroughputMode | null;

		/** Minimum: 1 */
		ProvisionedThroughputInMibps?: number | null;

		/** Required */
		Tags: Array<Tag>;
	}

	/** A description of the file system. */
	export interface FileSystemDescriptionFormProperties {

		/** Required */
		OwnerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CreationToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LifeCycleState: FormControl<AccessPointDescriptionLifeCycleState | null | undefined>,

		/** Max length: 256 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		NumberOfMountTargets: FormControl<number | null | undefined>,

		/** Required */
		PerformanceMode: FormControl<FileSystemDescriptionPerformanceMode | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
		ThroughputMode: FormControl<FileSystemDescriptionThroughputMode | null | undefined>,

		/** Minimum: 1 */
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
	}
	export function CreateFileSystemDescriptionFormGroup() {
		return new FormGroup<FileSystemDescriptionFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LifeCycleState: new FormControl<AccessPointDescriptionLifeCycleState | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			NumberOfMountTargets: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			PerformanceMode: new FormControl<FileSystemDescriptionPerformanceMode | null | undefined>(undefined, [Validators.required]),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ThroughputMode: new FormControl<FileSystemDescriptionThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time. */
	export interface FileSystemSize {

		/**
		 * Required
		 * Minimum: 0
		 */
		Value: number;
		Timestamp?: Date | null;

		/** Minimum: 0 */
		ValueInIA?: number | null;

		/** Minimum: 0 */
		ValueInStandard?: number | null;
	}

	/** The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time. */
	export interface FileSystemSizeFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		Value: FormControl<number | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,

		/** Minimum: 0 */
		ValueInIA: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		ValueInStandard: FormControl<number | null | undefined>,
	}
	export function CreateFileSystemSizeFormGroup() {
		return new FormGroup<FileSystemSizeFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			ValueInIA: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ValueInStandard: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum FileSystemDescriptionPerformanceMode { generalPurpose = 0, maxIO = 1 }

	export enum FileSystemDescriptionThroughputMode { bursting = 0, provisioned = 1 }

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


	/** Provides a description of a mount target. */
	export interface MountTargetDescription {
		OwnerId?: string | null;

		/** Required */
		MountTargetId: string;

		/** Required */
		FileSystemId: string;

		/** Required */
		SubnetId: string;

		/** Required */
		LifeCycleState: AccessPointDescriptionLifeCycleState;
		IpAddress?: string | null;
		NetworkInterfaceId?: string | null;
		AvailabilityZoneId?: string | null;
		AvailabilityZoneName?: string | null;
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
		LifeCycleState: FormControl<AccessPointDescriptionLifeCycleState | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		AvailabilityZoneId: FormControl<string | null | undefined>,
		AvailabilityZoneName: FormControl<string | null | undefined>,
	}
	export function CreateMountTargetDescriptionFormGroup() {
		return new FormGroup<MountTargetDescriptionFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			MountTargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifeCycleState: new FormControl<AccessPointDescriptionLifeCycleState | null | undefined>(undefined, [Validators.required]),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
			AvailabilityZoneName: new FormControl<string | null | undefined>(undefined),
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

	export interface UnsupportedAvailabilityZone {
	}
	export interface UnsupportedAvailabilityZoneFormProperties {
	}
	export function CreateUnsupportedAvailabilityZoneFormGroup() {
		return new FormGroup<UnsupportedAvailabilityZoneFormProperties>({
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
		NextToken?: string | null;
	}
	export interface DescribeAccessPointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccessPointsResponseFormGroup() {
		return new FormGroup<DescribeAccessPointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileSystemPolicyDescription {
		FileSystemId?: string | null;
		Policy?: string | null;
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

	export interface PolicyNotFound {
	}
	export interface PolicyNotFoundFormProperties {
	}
	export function CreatePolicyNotFoundFormGroup() {
		return new FormGroup<PolicyNotFoundFormProperties>({
		});

	}

	export interface DescribeFileSystemsResponse {
		Marker?: string | null;
		FileSystems?: Array<FileSystemDescription>;
		NextMarker?: string | null;
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


	/** Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class. */
	export interface LifecyclePolicy {
		TransitionToIA?: LifecyclePolicyTransitionToIA | null;
	}

	/** Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class. */
	export interface LifecyclePolicyFormProperties {
		TransitionToIA: FormControl<LifecyclePolicyTransitionToIA | null | undefined>,
	}
	export function CreateLifecyclePolicyFormGroup() {
		return new FormGroup<LifecyclePolicyFormProperties>({
			TransitionToIA: new FormControl<LifecyclePolicyTransitionToIA | null | undefined>(undefined),
		});

	}

	export enum LifecyclePolicyTransitionToIA { AFTER_7_DAYS = 0, AFTER_14_DAYS = 1, AFTER_30_DAYS = 2, AFTER_60_DAYS = 3, AFTER_90_DAYS = 4 }

	export interface DescribeMountTargetSecurityGroupsResponse {

		/**
		 * Required
		 * Maximum items: 5
		 */
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
		Marker?: string | null;
		MountTargets?: Array<MountTargetDescription>;
		NextMarker?: string | null;
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


	/** <p/> */
	export interface DescribeTagsResponse {
		Marker?: string | null;

		/** Required */
		Tags: Array<Tag>;
		NextMarker?: string | null;
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
		NextToken?: string | null;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export enum LifeCycleState { creating = 0, available = 1, updating = 2, deleting = 3, deleted = 4 }

	export interface CreateAccessPointRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: string;
		Tags?: Array<Tag>;

		/** Required */
		FileSystemId: string;

		/** The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point. */
		PosixUser?: PosixUser;

		/** Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories. */
		RootDirectory?: RootDirectory;
	}
	export interface CreateAccessPointRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointRequestFormGroup() {
		return new FormGroup<CreateAccessPointRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PerformanceMode { generalPurpose = 0, maxIO = 1 }

	export enum ThroughputMode { bursting = 0, provisioned = 1 }

	export interface CreateFileSystemRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CreationToken: string;
		PerformanceMode?: FileSystemDescriptionPerformanceMode | null;
		Encrypted?: boolean | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
		ThroughputMode?: FileSystemDescriptionThroughputMode | null;

		/** Minimum: 1 */
		ProvisionedThroughputInMibps?: number | null;
		Tags?: Array<Tag>;
	}
	export interface CreateFileSystemRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CreationToken: FormControl<string | null | undefined>,
		PerformanceMode: FormControl<FileSystemDescriptionPerformanceMode | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
		ThroughputMode: FormControl<FileSystemDescriptionThroughputMode | null | undefined>,

		/** Minimum: 1 */
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
	}
	export function CreateCreateFileSystemRequestFormGroup() {
		return new FormGroup<CreateFileSystemRequestFormProperties>({
			CreationToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			PerformanceMode: new FormControl<FileSystemDescriptionPerformanceMode | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ThroughputMode: new FormControl<FileSystemDescriptionThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** <p/> */
	export interface CreateMountTargetRequest {

		/** Required */
		FileSystemId: string;

		/** Required */
		SubnetId: string;
		IpAddress?: string | null;

		/** Maximum items: 5 */
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


	/** <p/> */
	export interface DeleteTagsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
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

	export enum TransitionToIARules { AFTER_7_DAYS = 0, AFTER_14_DAYS = 1, AFTER_30_DAYS = 2, AFTER_60_DAYS = 3, AFTER_90_DAYS = 4 }

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

		/** Maximum items: 5 */
		SecurityGroups?: Array<string>;
	}

	/** <p/> */
	export interface ModifyMountTargetSecurityGroupsRequestFormProperties {
	}
	export function CreateModifyMountTargetSecurityGroupsRequestFormGroup() {
		return new FormGroup<ModifyMountTargetSecurityGroupsRequestFormProperties>({
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
		ThroughputMode?: FileSystemDescriptionThroughputMode | null;

		/** Minimum: 1 */
		ProvisionedThroughputInMibps?: number | null;
	}
	export interface UpdateFileSystemRequestFormProperties {
		ThroughputMode: FormControl<FileSystemDescriptionThroughputMode | null | undefined>,

		/** Minimum: 1 */
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemRequestFormGroup() {
		return new FormGroup<UpdateFileSystemRequestFormProperties>({
			ThroughputMode: new FormControl<FileSystemDescriptionThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a File System Using EFS Access Points</a>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
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
		 * @param {string} NextToken  <code>NextToken</code> is present if the response is paginated. You can use <code>NextMarker</code> in the subsequent request to fetch the next page of access point descriptions.
		 * @param {string} AccessPointId (Optional) Specifies an EFS access point to describe in the response; mutually exclusive with <code>FileSystemId</code>.
		 * @param {string} FileSystemId (Optional) If you provide a <code>FileSystemId</code>, EFS returns all access points for that file system; mutually exclusive with <code>AccessPointId</code>.
		 * @return {DescribeAccessPointsResponse} Success
		 */
		DescribeAccessPoints(MaxResults: number | null | undefined, NextToken: string | null | undefined, AccessPointId: string | null | undefined, FileSystemId: string | null | undefined): Observable<DescribeAccessPointsResponse> {
			return this.http.get<DescribeAccessPointsResponse>(this.baseUri + '2015-02-01/access-points?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&AccessPointId=' + (AccessPointId == null ? '' : encodeURIComponent(AccessPointId)) + '&FileSystemId=' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), {});
		}

		/**
		 * <p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation also takes an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS: Performance Modes</a>.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p> This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p>
		 * Post 2015-02-01/file-systems
		 * @return {void} 
		 */
		CreateFileSystem(requestBody: CreateFileSystemPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/file-systems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. Currently, this number is automatically set to 10. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
		 * Get 2015-02-01/file-systems
		 * @param {number} MaxItems (Optional) Specifies the maximum number of file systems to return in the response (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems. 
		 * @param {string} Marker (Optional) Opaque pagination token returned from a previous <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the list from where the returning call had left off. 
		 * @param {string} CreationToken (Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.
		 * @param {string} FileSystemId (Optional) ID of the file system whose description you want to retrieve (String).
		 * @return {DescribeFileSystemsResponse} Success
		 */
		DescribeFileSystems(MaxItems: number | null | undefined, Marker: string | null | undefined, CreationToken: string | null | undefined, FileSystemId: string | null | undefined): Observable<DescribeFileSystemsResponse> {
			return this.http.get<DescribeFileSystemsResponse>(this.baseUri + '2015-02-01/file-systems?MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&CreationToken=' + (CreationToken == null ? '' : encodeURIComponent(CreationToken)) + '&FileSystemId=' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), {});
		}

		/**
		 * <p>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p>In the request, you also specify a file system ID for which you are creating the mount target and the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, you also provide a subnet ID, which determines the following:</p> <ul> <li> <p>VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>
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
		 * @param {string} Marker (Optional) Opaque pagination token returned from a previous <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue the list from where the previous returning call left off.
		 * @param {string} FileSystemId (Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an <code>AccessPointId</code> or <code>MountTargetId</code> is not included. Accepts either a file system ID or ARN as input.
		 * @param {string} MountTargetId (Optional) ID of the mount target that you want to have described (String). It must be included in your request if <code>FileSystemId</code> is not included. Accepts either a mount target ID or ARN as input.
		 * @param {string} AccessPointId (Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a <code>FileSystemId</code> or <code>MountTargetId</code> is not included in your request. Accepts either an access point ID or ARN as input.
		 * @return {DescribeMountTargetsResponse} Success
		 */
		DescribeMountTargets(MaxItems: number | null | undefined, Marker: string | null | undefined, FileSystemId: string | null | undefined, MountTargetId: string | null | undefined, AccessPointId: string | null | undefined): Observable<DescribeMountTargetsResponse> {
			return this.http.get<DescribeMountTargetsResponse>(this.baseUri + '2015-02-01/mount-targets?MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&FileSystemId=' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '&MountTargetId=' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)) + '&AccessPointId=' + (AccessPointId == null ? '' : encodeURIComponent(AccessPointId)), {});
		}

		/**
		 * <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p>
		 * Post 2015-02-01/create-tags/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.
		 * @return {void} 
		 */
		CreateTags(FileSystemId: string, requestBody: CreateTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/create-tags/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>
		 * Delete 2015-02-01/access-points/{AccessPointId}
		 * @param {string} AccessPointId The ID of the access point that you want to delete.
		 * @return {void} 
		 */
		DeleteAccessPoint(AccessPointId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/access-points/' + (AccessPointId == null ? '' : encodeURIComponent(AccessPointId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>
		 * Delete 2015-02-01/file-systems/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system you want to delete.
		 * @return {void} 
		 */
		DeleteFileSystem(FileSystemId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the throughput mode or the amount of provisioned throughput of an existing file system.
		 * Put 2015-02-01/file-systems/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system that you want to update.
		 * @return {void} 
		 */
		UpdateFileSystem(FileSystemId: string, requestBody: UpdateFileSystemPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the <code>FileSystemPolicy</code> for the specified file system. The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>
		 * Delete 2015-02-01/file-systems/{FileSystemId}/policy
		 * @param {string} FileSystemId Specifies the EFS file system for which to delete the <code>FileSystemPolicy</code>.
		 * @return {void} Success
		 */
		DeleteFileSystemPolicy(FileSystemId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/policy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
		 * Get 2015-02-01/file-systems/{FileSystemId}/policy
		 * @param {string} FileSystemId Specifies which EFS file system to retrieve the <code>FileSystemPolicy</code> for.
		 * @return {FileSystemPolicyDescription} Success
		 */
		DescribeFileSystemPolicy(FileSystemId: string): Observable<FileSystemPolicyDescription> {
			return this.http.get<FileSystemPolicyDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/policy', {});
		}

		/**
		 * <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>. </p> <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
		 * Put 2015-02-01/file-systems/{FileSystemId}/policy
		 * @param {string} FileSystemId The ID of the EFS file system that you want to create or update the <code>FileSystemPolicy</code> for.
		 * @return {FileSystemPolicyDescription} Success
		 */
		PutFileSystemPolicy(FileSystemId: string, requestBody: PutFileSystemPolicyPutBody): Observable<FileSystemPolicyDescription> {
			return this.http.put<FileSystemPolicyDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>
		 * Delete 2015-02-01/mount-targets/{MountTargetId}
		 * @param {string} MountTargetId The ID of the mount target to delete (String).
		 * @return {void} 
		 */
		DeleteMountTarget(MountTargetId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-02-01/mount-targets/' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p>
		 * Post 2015-02-01/delete-tags/{FileSystemId}
		 * @param {string} FileSystemId The ID of the file system whose tags you want to delete (String).
		 * @return {void} 
		 */
		DeleteTags(FileSystemId: string, requestBody: DeleteTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/delete-tags/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the response.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
		 * Get 2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration
		 * @param {string} FileSystemId The ID of the file system whose <code>LifecycleConfiguration</code> object you want to retrieve (String).
		 * @return {LifecycleConfigurationDescription} Success
		 */
		DescribeLifecycleConfiguration(FileSystemId: string): Observable<LifecycleConfigurationDescription> {
			return this.http.get<LifecycleConfigurationDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/lifecycle-configuration', {});
		}

		/**
		 * <p>Enables lifecycle management by creating a new <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A <code>LifecycleConfiguration</code> applies to all files in a file system.</p> <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a <code>LifecycleConfiguration</code> object already exists for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code> array in the request body deletes any existing <code>LifecycleConfiguration</code> and disables lifecycle management.</p> <p>In the request, specify the following: </p> <ul> <li> <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.</p> </li> <li> <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that define when files are moved to the IA storage class. The array can contain only one <code>LifecyclePolicy</code> item.</p> </li> </ul> <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p> <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you need the same AWS Key Management Service (AWS KMS) permissions as when you created the encrypted file system. </p>
		 * Put 2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration
		 * @param {string} FileSystemId The ID of the file system for which you are creating the <code>LifecycleConfiguration</code> object (String).
		 * @return {LifecycleConfigurationDescription} Success
		 */
		PutLifecycleConfiguration(FileSystemId: string, requestBody: PutLifecycleConfigurationPutBody): Observable<LifecycleConfigurationDescription> {
			return this.http.put<LifecycleConfigurationDescription>(this.baseUri + '2015-02-01/file-systems/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/lifecycle-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
		 * Get 2015-02-01/mount-targets/{MountTargetId}/security-groups
		 * @param {string} MountTargetId The ID of the mount target whose security groups you want to retrieve.
		 * @return {DescribeMountTargetSecurityGroupsResponse} Success
		 */
		DescribeMountTargetSecurityGroups(MountTargetId: string): Observable<DescribeMountTargetSecurityGroupsResponse> {
			return this.http.get<DescribeMountTargetSecurityGroupsResponse>(this.baseUri + '2015-02-01/mount-targets/' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)) + '/security-groups', {});
		}

		/**
		 * <p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
		 * Put 2015-02-01/mount-targets/{MountTargetId}/security-groups
		 * @param {string} MountTargetId The ID of the mount target whose security groups you want to modify.
		 * @return {void} 
		 */
		ModifyMountTargetSecurityGroups(MountTargetId: string, requestBody: ModifyMountTargetSecurityGroupsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2015-02-01/mount-targets/' + (MountTargetId == null ? '' : encodeURIComponent(MountTargetId)) + '/security-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p>
		 * Get 2015-02-01/tags/{FileSystemId}/
		 * @param {number} MaxItems (Optional) The maximum number of file system tags to return in the response. Currently, this number is automatically set to 100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.
		 * @param {string} Marker (Optional) An opaque pagination token returned from a previous <code>DescribeTags</code> operation (String). If present, it specifies to continue the list from where the previous call left off.
		 * @param {string} FileSystemId The ID of the file system whose tag set you want to retrieve.
		 * @return {DescribeTagsResponse} Success
		 */
		DescribeTags(MaxItems: number | null | undefined, Marker: string | null | undefined, FileSystemId: string): Observable<DescribeTagsResponse> {
			return this.http.get<DescribeTagsResponse>(this.baseUri + '2015-02-01/tags/' + (FileSystemId == null ? '' : encodeURIComponent(FileSystemId)) + '/?MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * <p>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
		 * Get 2015-02-01/resource-tags/{ResourceId}
		 * @param {string} ResourceId Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint.
		 * @param {number} MaxResults (Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.
		 * @param {string} NextToken You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceId: string, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + '2015-02-01/resource-tags/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:TagResource</code> action.</p>
		 * Post 2015-02-01/resource-tags/{ResourceId}
		 * @param {string} ResourceId The ID specifying the EFS resource that you want to create a tag for. 
		 * @return {void} Success
		 */
		TagResource(ResourceId: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-02-01/resource-tags/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:UntagResource</code> action.</p>
		 * Delete 2015-02-01/resource-tags/{ResourceId}#tagKeys
		 * @param {string} ResourceId Specifies the EFS resource that you want to remove tags from.
		 * @param {Array<string>} tagKeys The keys of the key:value tag pairs that you want to remove from the specified EFS resource.
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
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: string;

		/** Creates tags associated with the access point. Each tag is a key-value pair. */
		Tags?: Array<Tag>;

		/**
		 * The ID of the EFS file system that the access point provides access to.
		 * Required
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
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The ID of the EFS file system that the access point provides access to.
		 * Required
		 */
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointPostBodyFormGroup() {
		return new FormGroup<CreateAccessPointPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccessPointPostBodyPosixUser {

		/**
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Uid?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Gid?: number | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 16
		 */
		SecondaryGids?: Array<number>;
	}
	export interface CreateAccessPointPostBodyPosixUserFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Uid: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		Gid: FormControl<number | null | undefined>,
	}
	export function CreateCreateAccessPointPostBodyPosixUserFormGroup() {
		return new FormGroup<CreateAccessPointPostBodyPosixUserFormProperties>({
			Uid: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4294967295)]),
			Gid: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4294967295)]),
		});

	}

	export interface CreateAccessPointPostBodyRootDirectory {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Path?: string | null;

		/** <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important> */
		CreationInfo?: CreationInfo;
	}
	export interface CreateAccessPointPostBodyRootDirectoryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Path: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointPostBodyRootDirectoryFormGroup() {
		return new FormGroup<CreateAccessPointPostBodyRootDirectoryFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export interface CreateFileSystemPostBody {

		/**
		 * A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CreationToken: string;

		/** The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. */
		PerformanceMode?: FileSystemDescriptionPerformanceMode | null;

		/** A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying <a>CreateFileSystemRequest$KmsKeyId</a> for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. */
		Encrypted?: boolean | null;

		/**
		 * <p>The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. This ID can be in one of the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If <code>KmsKeyId</code> is specified, the <a>CreateFileSystemRequest$Encrypted</a> parameter must be set to true.</p> <important> <p>EFS accepts only symmetric CMKs. You cannot use asymmetric CMKs with EFS file systems.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;

		/** The throughput mode for the file system to be created. There are two throughput modes to choose from for your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. For more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying Throughput with Provisioned Mode</a> in the <i>Amazon EFS User Guide.</i> */
		ThroughputMode?: FileSystemDescriptionThroughputMode | null;

		/**
		 * The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. You can get this limit increased by contacting AWS Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a> in the <i>Amazon EFS User Guide.</i>
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps?: number | null;

		/** A value that specifies to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a <code>"Key":"Name","Value":"{value}"</code> key-value pair. */
		Tags?: Array<Tag>;
	}
	export interface CreateFileSystemPostBodyFormProperties {

		/**
		 * A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CreationToken: FormControl<string | null | undefined>,

		/** The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. */
		PerformanceMode: FormControl<FileSystemDescriptionPerformanceMode | null | undefined>,

		/** A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying <a>CreateFileSystemRequest$KmsKeyId</a> for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. */
		Encrypted: FormControl<boolean | null | undefined>,

		/**
		 * <p>The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. This ID can be in one of the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If <code>KmsKeyId</code> is specified, the <a>CreateFileSystemRequest$Encrypted</a> parameter must be set to true.</p> <important> <p>EFS accepts only symmetric CMKs. You cannot use asymmetric CMKs with EFS file systems.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/** The throughput mode for the file system to be created. There are two throughput modes to choose from for your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. For more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying Throughput with Provisioned Mode</a> in the <i>Amazon EFS User Guide.</i> */
		ThroughputMode: FormControl<FileSystemDescriptionThroughputMode | null | undefined>,

		/**
		 * The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. You can get this limit increased by contacting AWS Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a> in the <i>Amazon EFS User Guide.</i>
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
	}
	export function CreateCreateFileSystemPostBodyFormGroup() {
		return new FormGroup<CreateFileSystemPostBodyFormProperties>({
			CreationToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			PerformanceMode: new FormControl<FileSystemDescriptionPerformanceMode | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ThroughputMode: new FormControl<FileSystemDescriptionThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface CreateMountTargetPostBody {

		/**
		 * The ID of the file system for which to create the mount target.
		 * Required
		 */
		FileSystemId: string;

		/**
		 * The ID of the subnet to add the mount target in.
		 * Required
		 */
		SubnetId: string;

		/** Valid IPv4 address within the address range of the specified subnet. */
		IpAddress?: string | null;

		/**
		 * Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.
		 * Maximum items: 5
		 */
		SecurityGroups?: Array<string>;
	}
	export interface CreateMountTargetPostBodyFormProperties {

		/**
		 * The ID of the file system for which to create the mount target.
		 * Required
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * The ID of the subnet to add the mount target in.
		 * Required
		 */
		SubnetId: FormControl<string | null | undefined>,

		/** Valid IPv4 address within the address range of the specified subnet. */
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateMountTargetPostBodyFormGroup() {
		return new FormGroup<CreateMountTargetPostBodyFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddress: new FormControl<string | null | undefined>(undefined),
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

		/** (Optional) The throughput mode that you want your file system to use. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. */
		ThroughputMode?: FileSystemDescriptionThroughputMode | null;

		/**
		 * (Optional) The amount of throughput, in MiB/s, that you want to provision for your file system. Valid values are 1-1024. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update. If you're not updating the amount of provisioned throughput for your file system, you don't need to provide this value in your request.
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps?: number | null;
	}
	export interface UpdateFileSystemPutBodyFormProperties {

		/** (Optional) The throughput mode that you want your file system to use. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. */
		ThroughputMode: FormControl<FileSystemDescriptionThroughputMode | null | undefined>,

		/**
		 * (Optional) The amount of throughput, in MiB/s, that you want to provision for your file system. Valid values are 1-1024. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update. If you're not updating the amount of provisioned throughput for your file system, you don't need to provide this value in your request.
		 * Minimum: 1
		 */
		ProvisionedThroughputInMibps: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemPutBodyFormGroup() {
		return new FormGroup<UpdateFileSystemPutBodyFormProperties>({
			ThroughputMode: new FormControl<FileSystemDescriptionThroughputMode | null | undefined>(undefined),
			ProvisionedThroughputInMibps: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PutFileSystemPolicyPutBody {

		/**
		 * The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>.
		 * Required
		 */
		Policy: string;

		/** (Optional) A flag to indicate whether to bypass the <code>FileSystemPolicy</code> lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request will be locked out from making future <code>PutFileSystemPolicy</code> requests on the file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the principal that is making the request from making a subsequent <code>PutFileSystemPolicy</code> request on the file system. The default value is False. */
		BypassPolicyLockoutSafetyCheck?: boolean | null;
	}
	export interface PutFileSystemPolicyPutBodyFormProperties {

		/**
		 * The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>.
		 * Required
		 */
		Policy: FormControl<string | null | undefined>,

		/** (Optional) A flag to indicate whether to bypass the <code>FileSystemPolicy</code> lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request will be locked out from making future <code>PutFileSystemPolicy</code> requests on the file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the principal that is making the request from making a subsequent <code>PutFileSystemPolicy</code> request on the file system. The default value is False. */
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
	}
	export function CreatePutFileSystemPolicyPutBodyFormGroup() {
		return new FormGroup<PutFileSystemPolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface PutLifecycleConfigurationPutBody {

		/**
		 * An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object tells lifecycle management when to transition files from the Standard storage class to the Infrequent Access storage class.
		 * Required
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
		 * Maximum items: 5
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
		 * <p/>
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

