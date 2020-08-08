import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** <p>AWS Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and AWS Region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note> */
	export interface ActivateGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> </ul> */
	export interface ActivateGatewayInput {
		ActivationKey: string;

		/**
		 * The name you configured for your gateway.
		 * Max length: 255
		 * Min length: 2
		 * Pattern: ^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$
		 */
		GatewayName: string;
		GatewayTimezone: string;
		GatewayRegion: string;
		GatewayType?: string;
		TapeDriveType?: string;
		MediumChangerType?: string;
		Tags?: Array<Tag>;
	}


	/** A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : / */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface InvalidGatewayRequestException {
	}

	export interface InternalServerError {
	}

	export interface AddCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export interface AddCacheInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		DiskIds: Array<string>;
	}


	/** AddTagsToResourceOutput */
	export interface AddTagsToResourceOutput {
		ResourceARN?: string;
	}


	/** AddTagsToResourceInput */
	export interface AddTagsToResourceInput {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface AddUploadBufferOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export interface AddUploadBufferInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		DiskIds: Array<string>;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working storage was configured. */
	export interface AddWorkingStorageOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul> */
	export interface AddWorkingStorageInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		DiskIds: Array<string>;
	}

	export interface AssignTapePoolOutput {
		TapeARN?: string;
	}

	export interface AssignTapePoolInput {
		TapeARN: string;
		PoolId: string;
	}


	/** AttachVolumeOutput */
	export interface AttachVolumeOutput {
		VolumeARN?: string;
		TargetARN?: string;
	}


	/** AttachVolumeInput */
	export interface AttachVolumeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		TargetName?: string;
		VolumeARN: string;
		NetworkInterfaceId: string;
		DiskId?: string;
	}


	/** CancelArchivalOutput */
	export interface CancelArchivalOutput {
		TapeARN?: string;
	}


	/** CancelArchivalInput */
	export interface CancelArchivalInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		TapeARN: string;
	}


	/** CancelRetrievalOutput */
	export interface CancelRetrievalOutput {
		TapeARN?: string;
	}


	/** CancelRetrievalInput */
	export interface CancelRetrievalInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		TapeARN: string;
	}

	export interface CreateCachediSCSIVolumeOutput {
		VolumeARN?: string;
		TargetARN?: string;
	}

	export interface CreateCachediSCSIVolumeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		VolumeSizeInBytes: number;
		SnapshotId?: string;
		TargetName: string;
		SourceVolumeARN?: string;
		NetworkInterfaceId: string;
		ClientToken: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		Tags?: Array<Tag>;
	}


	/** CreateNFSFileShareOutput */
	export interface CreateNFSFileShareOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;
	}


	/** CreateNFSFileShareInput */
	export interface CreateNFSFileShareInput {
		ClientToken: string;

		/** Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways. */
		NFSFileShareDefaults?: NFSFileShareDefaults;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;

		/**
		 * The ARN of the IAM role that file gateway assumes when it accesses the underlying storage.
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: string;

		/**
		 * The ARN of the backend storage used for storing file data.
		 * Max length: 310
		 * Min length: 16
		 */
		LocationARN: string;

		/**
		 * <p/>
		 * Max length: 50
		 * Min length: 5
		 */
		DefaultStorageClass?: string;

		/** A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private". */
		ObjectACL?: CreateNFSFileShareInputObjectACL;

		/**
		 * The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ClientList?: Array<string>;

		/**
		 * <p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p> <code>RootSquash</code> - Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code> - No one is mapped to anonymous user</p> </li> <li> <p> <code>AllSquash</code> - Everyone is mapped to anonymous user.</p> </li> </ul>
		 * Max length: 15
		 * Min length: 5
		 */
		Squash?: string;
		ReadOnly?: boolean;
		GuessMIMETypeEnabled?: boolean;
		RequesterPays?: boolean;
		Tags?: Array<Tag>;
	}


	/** Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways. */
	export interface NFSFileShareDefaults {
		FileMode?: string;
		DirectoryMode?: string;
		GroupId?: number;
		OwnerId?: number;
	}

	export enum CreateNFSFileShareInputObjectACL { _private = 0, public_read = 1, public_read_write = 2, authenticated_read = 3, bucket_owner_read = 4, bucket_owner_full_control = 5, aws_exec_read = 6 }


	/** CreateSMBFileShareOutput */
	export interface CreateSMBFileShareOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;
	}


	/** CreateSMBFileShareInput */
	export interface CreateSMBFileShareInput {
		ClientToken: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;

		/**
		 * The ARN of the IAM role that file gateway assumes when it accesses the underlying storage.
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: string;

		/**
		 * The ARN of the backend storage used for storing file data.
		 * Max length: 310
		 * Min length: 16
		 */
		LocationARN: string;

		/**
		 * <p/>
		 * Max length: 50
		 * Min length: 5
		 */
		DefaultStorageClass?: string;

		/** A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private". */
		ObjectACL?: CreateSMBFileShareInputObjectACL;
		ReadOnly?: boolean;
		GuessMIMETypeEnabled?: boolean;
		RequesterPays?: boolean;
		SMBACLEnabled?: boolean;
		AdminUserList?: Array<string>;
		ValidUserList?: Array<string>;
		InvalidUserList?: Array<string>;
		AuditDestinationARN?: string;

		/**
		 * <p>The authentication method of the file share.</p> <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The default is <code>ActiveDirectory</code>.</p>
		 * Max length: 15
		 * Min length: 5
		 */
		Authentication?: string;
		Tags?: Array<Tag>;
	}

	export enum CreateSMBFileShareInputObjectACL { _private = 0, public_read = 1, public_read_write = 2, authenticated_read = 3, bucket_owner_read = 4, bucket_owner_full_control = 5, aws_exec_read = 6 }


	/** A JSON object containing the following fields: */
	export interface CreateSnapshotOutput {
		VolumeARN?: string;
		SnapshotId?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul> */
	export interface CreateSnapshotInput {
		VolumeARN: string;
		SnapshotDescription: string;
		Tags?: Array<Tag>;
	}

	export interface ServiceUnavailableError {
	}

	export interface CreateSnapshotFromVolumeRecoveryPointOutput {
		SnapshotId?: string;
		VolumeARN?: string;
		VolumeRecoveryPointTime?: string;
	}

	export interface CreateSnapshotFromVolumeRecoveryPointInput {
		VolumeARN: string;
		SnapshotDescription: string;
		Tags?: Array<Tag>;
	}


	/** A JSON object containing the following fields: */
	export interface CreateStorediSCSIVolumeOutput {
		VolumeARN?: string;
		VolumeSizeInBytes?: number;
		TargetARN?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul> */
	export interface CreateStorediSCSIVolumeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		DiskId: string;
		SnapshotId?: string;
		PreserveExistingData: boolean;
		TargetName: string;
		NetworkInterfaceId: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		Tags?: Array<Tag>;
	}


	/** CreateTapeOutput */
	export interface CreateTapeWithBarcodeOutput {
		TapeARN?: string;
	}


	/** CreateTapeWithBarcodeInput */
	export interface CreateTapeWithBarcodeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		TapeSizeInBytes: number;
		TapeBarcode: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		PoolId?: string;
		Tags?: Array<Tag>;
	}


	/** CreateTapeOutput */
	export interface CreateTapesOutput {

		/** The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS. */
		TapeARNs?: Array<string>;
	}


	/** CreateTapesInput */
	export interface CreateTapesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		TapeSizeInBytes: number;
		ClientToken: string;
		NumTapesToCreate: number;
		TapeBarcodePrefix: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		PoolId?: string;
		Tags?: Array<Tag>;
	}

	export interface DeleteAutomaticTapeCreationPolicyOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export interface DeleteAutomaticTapeCreationPolicyInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth rate information was deleted. */
	export interface DeleteBandwidthRateLimitOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul> */
	export interface DeleteBandwidthRateLimitInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		BandwidthType: string;
	}


	/** A JSON object containing the following fields: */
	export interface DeleteChapCredentialsOutput {
		TargetARN?: string;
		InitiatorName?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul> */
	export interface DeleteChapCredentialsInput {
		TargetARN: string;
		InitiatorName: string;
	}


	/** DeleteFileShareOutput */
	export interface DeleteFileShareOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;
	}


	/** DeleteFileShareInput */
	export interface DeleteFileShareInput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN: string;
		ForceDelete?: boolean;
	}


	/** A JSON object containing the ID of the deleted gateway. */
	export interface DeleteGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** A JSON object containing the ID of the gateway to delete. */
	export interface DeleteGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}

	export interface DeleteSnapshotScheduleOutput {
		VolumeARN?: string;
	}

	export interface DeleteSnapshotScheduleInput {
		VolumeARN: string;
	}


	/** DeleteTapeOutput */
	export interface DeleteTapeOutput {
		TapeARN?: string;
	}


	/** DeleteTapeInput */
	export interface DeleteTapeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		TapeARN: string;
	}


	/** DeleteTapeArchiveOutput */
	export interface DeleteTapeArchiveOutput {
		TapeARN?: string;
	}


	/** DeleteTapeArchiveInput */
	export interface DeleteTapeArchiveInput {
		TapeARN: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was deleted */
	export interface DeleteVolumeOutput {
		VolumeARN?: string;
	}


	/** A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete. */
	export interface DeleteVolumeInput {
		VolumeARN: string;
	}

	export interface DescribeAvailabilityMonitorTestOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		Status?: DescribeAvailabilityMonitorTestOutputStatus;
		StartTime?: Date;
	}

	export enum DescribeAvailabilityMonitorTestOutputStatus { COMPLETE = 0, FAILED = 1, PENDING = 2 }

	export interface DescribeAvailabilityMonitorTestInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** A JSON object containing the following fields: */
	export interface DescribeBandwidthRateLimitOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		AverageUploadRateLimitInBitsPerSec?: number;
		AverageDownloadRateLimitInBitsPerSec?: number;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeBandwidthRateLimitInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}

	export interface DescribeCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		DiskIds?: Array<string>;
		CacheAllocatedInBytes?: number;
		CacheUsedPercentage?: number;
		CacheDirtyPercentage?: number;
		CacheHitPercentage?: number;
		CacheMissPercentage?: number;
	}

	export interface DescribeCacheInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** A JSON object containing the following fields: */
	export interface DescribeCachediSCSIVolumesOutput {
		CachediSCSIVolumes?: Array<CachediSCSIVolume>;
	}


	/** Describes an iSCSI cached volume. */
	export interface CachediSCSIVolume {
		VolumeARN?: string;
		VolumeId?: string;
		VolumeType?: string;
		VolumeStatus?: string;
		VolumeAttachmentStatus?: string;
		VolumeSizeInBytes?: number;
		VolumeProgress?: number;
		SourceSnapshotId?: string;

		/** Lists iSCSI information about a volume. */
		VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
		CreatedDate?: Date;
		VolumeUsedInBytes?: number;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		TargetName?: string;
	}


	/** Lists iSCSI information about a volume. */
	export interface VolumeiSCSIAttributes {
		TargetARN?: string;
		NetworkInterfaceId?: string;
		NetworkInterfacePort?: number;
		LunNumber?: number;
		ChapEnabled?: boolean;
	}

	export interface DescribeCachediSCSIVolumesInput {
		VolumeARNs: Array<string>;
	}


	/** A JSON object containing a . */
	export interface DescribeChapCredentialsOutput {
		ChapCredentials?: Array<ChapInfo>;
	}


	/** Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators. */
	export interface ChapInfo {
		TargetARN?: string;
		SecretToAuthenticateInitiator?: string;
		InitiatorName?: string;
		SecretToAuthenticateTarget?: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target. */
	export interface DescribeChapCredentialsInput {
		TargetARN: string;
	}


	/** A JSON object containing the following fields: */
	export interface DescribeGatewayInformationOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		GatewayId?: string;
		GatewayName?: string;
		GatewayTimezone?: string;
		GatewayState?: string;
		GatewayNetworkInterfaces?: Array<NetworkInterface>;
		GatewayType?: string;
		NextUpdateAvailabilityDate?: string;
		LastSoftwareUpdate?: string;
		Ec2InstanceId?: string;
		Ec2InstanceRegion?: string;
		Tags?: Array<Tag>;
		VPCEndpoint?: string;
		CloudWatchLogGroupARN?: string;
		HostEnvironment?: DescribeGatewayInformationOutputHostEnvironment;
	}


	/** Describes a gateway's network interface. */
	export interface NetworkInterface {
		Ipv4Address?: string;
		MacAddress?: string;
		Ipv6Address?: string;
	}

	export enum DescribeGatewayInformationOutputHostEnvironment { VMWARE = 0, HYPER_V = 1, EC2 = 2, KVM = 3, OTHER = 4 }


	/** A JSON object containing the ID of the gateway. */
	export interface DescribeGatewayInformationInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfMonth</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul> */
	export interface DescribeMaintenanceStartTimeOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		HourOfDay?: number;
		MinuteOfHour?: number;
		DayOfWeek?: number;
		DayOfMonth?: number;
		Timezone?: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeMaintenanceStartTimeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** DescribeNFSFileSharesOutput */
	export interface DescribeNFSFileSharesOutput {
		NFSFileShareInfoList?: Array<NFSFileShareInfo>;
	}


	/** The Unix file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported in file gateways. */
	export interface NFSFileShareInfo {

		/** Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways. */
		NFSFileShareDefaults?: NFSFileShareDefaults;

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;

		/**
		 * The ID of the file share.
		 * Max length: 30
		 * Min length: 12
		 */
		FileShareId?: string;

		/**
		 * The status of the file share. Possible values are <code>CREATING</code>, <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>.
		 * Max length: 50
		 * Min length: 3
		 */
		FileShareStatus?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;

		/** The file share path used by the NFS client to identify the mount point. */
		Path?: string;

		/**
		 * The ARN of the IAM role that file gateway assumes when it accesses the underlying storage.
		 * Max length: 2048
		 * Min length: 20
		 */
		Role?: string;

		/**
		 * The ARN of the backend storage used for storing file data.
		 * Max length: 310
		 * Min length: 16
		 */
		LocationARN?: string;

		/**
		 * <p/>
		 * Max length: 50
		 * Min length: 5
		 */
		DefaultStorageClass?: string;

		/** A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private". */
		ObjectACL?: NFSFileShareInfoObjectACL;

		/**
		 * The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ClientList?: Array<string>;

		/**
		 * <p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p> <code>RootSquash</code> - Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code> - No one is mapped to anonymous user</p> </li> <li> <p> <code>AllSquash</code> - Everyone is mapped to anonymous user.</p> </li> </ul>
		 * Max length: 15
		 * Min length: 5
		 */
		Squash?: string;
		ReadOnly?: boolean;
		GuessMIMETypeEnabled?: boolean;
		RequesterPays?: boolean;
		Tags?: Array<Tag>;
	}

	export enum NFSFileShareInfoObjectACL { _private = 0, public_read = 1, public_read_write = 2, authenticated_read = 3, bucket_owner_read = 4, bucket_owner_full_control = 5, aws_exec_read = 6 }


	/** DescribeNFSFileSharesInput */
	export interface DescribeNFSFileSharesInput {
		FileShareARNList: Array<string>;
	}


	/** DescribeSMBFileSharesOutput */
	export interface DescribeSMBFileSharesOutput {
		SMBFileShareInfoList?: Array<SMBFileShareInfo>;
	}


	/** The Windows file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported for file gateways. */
	export interface SMBFileShareInfo {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;

		/**
		 * The ID of the file share.
		 * Max length: 30
		 * Min length: 12
		 */
		FileShareId?: string;

		/**
		 * The status of the file share. Possible values are <code>CREATING</code>, <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>.
		 * Max length: 50
		 * Min length: 3
		 */
		FileShareStatus?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;

		/** The file share path used by the NFS client to identify the mount point. */
		Path?: string;

		/**
		 * The ARN of the IAM role that file gateway assumes when it accesses the underlying storage.
		 * Max length: 2048
		 * Min length: 20
		 */
		Role?: string;

		/**
		 * The ARN of the backend storage used for storing file data.
		 * Max length: 310
		 * Min length: 16
		 */
		LocationARN?: string;

		/**
		 * <p/>
		 * Max length: 50
		 * Min length: 5
		 */
		DefaultStorageClass?: string;

		/** A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private". */
		ObjectACL?: SMBFileShareInfoObjectACL;
		ReadOnly?: boolean;
		GuessMIMETypeEnabled?: boolean;
		RequesterPays?: boolean;
		SMBACLEnabled?: boolean;
		AdminUserList?: Array<string>;
		ValidUserList?: Array<string>;
		InvalidUserList?: Array<string>;
		AuditDestinationARN?: string;

		/**
		 * <p>The authentication method of the file share.</p> <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The default is <code>ActiveDirectory</code>.</p>
		 * Max length: 15
		 * Min length: 5
		 */
		Authentication?: string;
		Tags?: Array<Tag>;
	}

	export enum SMBFileShareInfoObjectACL { _private = 0, public_read = 1, public_read_write = 2, authenticated_read = 3, bucket_owner_read = 4, bucket_owner_full_control = 5, aws_exec_read = 6 }


	/** DescribeSMBFileSharesInput */
	export interface DescribeSMBFileSharesInput {
		FileShareARNList: Array<string>;
	}

	export interface DescribeSMBSettingsOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		DomainName?: string;
		ActiveDirectoryStatus?: DescribeSMBSettingsOutputActiveDirectoryStatus;
		SMBGuestPasswordSet?: boolean;
		SMBSecurityStrategy?: DescribeSMBSettingsOutputSMBSecurityStrategy;
	}

	export enum DescribeSMBSettingsOutputActiveDirectoryStatus { ACCESS_DENIED = 0, DETACHED = 1, JOINED = 2, JOINING = 3, NETWORK_ERROR = 4, TIMEOUT = 5, UNKNOWN_ERROR = 6 }

	export enum DescribeSMBSettingsOutputSMBSecurityStrategy { ClientSpecified = 0, MandatorySigning = 1, MandatoryEncryption = 2 }

	export interface DescribeSMBSettingsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}

	export interface DescribeSnapshotScheduleOutput {
		VolumeARN?: string;
		StartAt?: number;
		RecurrenceInHours?: number;
		Description?: string;
		Timezone?: string;
		Tags?: Array<Tag>;
	}


	/** A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume. */
	export interface DescribeSnapshotScheduleInput {
		VolumeARN: string;
	}

	export interface DescribeStorediSCSIVolumesOutput {
		StorediSCSIVolumes?: Array<StorediSCSIVolume>;
	}


	/** Describes an iSCSI stored volume. */
	export interface StorediSCSIVolume {
		VolumeARN?: string;
		VolumeId?: string;
		VolumeType?: string;
		VolumeStatus?: string;
		VolumeAttachmentStatus?: string;
		VolumeSizeInBytes?: number;
		VolumeProgress?: number;
		VolumeDiskId?: string;
		SourceSnapshotId?: string;
		PreservedExistingData?: boolean;

		/** Lists iSCSI information about a volume. */
		VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
		CreatedDate?: Date;
		VolumeUsedInBytes?: number;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		TargetName?: string;
	}


	/** A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>. */
	export interface DescribeStorediSCSIVolumesInput {
		VolumeARNs: Array<string>;
	}


	/** DescribeTapeArchivesOutput */
	export interface DescribeTapeArchivesOutput {
		TapeArchives?: Array<TapeArchive>;
		Marker?: string;
	}


	/** Represents a virtual tape that is archived in the virtual tape shelf (VTS). */
	export interface TapeArchive {
		TapeARN?: string;
		TapeBarcode?: string;
		TapeCreatedDate?: Date;
		TapeSizeInBytes?: number;
		CompletionTime?: Date;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		RetrievedTo?: string;
		TapeStatus?: string;
		TapeUsedInBytes?: number;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		PoolId?: string;
	}


	/** DescribeTapeArchivesInput */
	export interface DescribeTapeArchivesInput {

		/** The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS. */
		TapeARNs?: Array<string>;
		Marker?: string;
		Limit?: number;
	}


	/** DescribeTapeRecoveryPointsOutput */
	export interface DescribeTapeRecoveryPointsOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		TapeRecoveryPointInfos?: Array<TapeRecoveryPointInfo>;
		Marker?: string;
	}


	/** Describes a recovery point. */
	export interface TapeRecoveryPointInfo {
		TapeARN?: string;
		TapeRecoveryPointTime?: Date;
		TapeSizeInBytes?: number;
		TapeStatus?: string;
	}


	/** DescribeTapeRecoveryPointsInput */
	export interface DescribeTapeRecoveryPointsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		Marker?: string;
		Limit?: number;
	}


	/** DescribeTapesOutput */
	export interface DescribeTapesOutput {
		Tapes?: Array<Tape>;
		Marker?: string;
	}


	/** Describes a virtual tape object. */
	export interface Tape {
		TapeARN?: string;
		TapeBarcode?: string;
		TapeCreatedDate?: Date;
		TapeSizeInBytes?: number;
		TapeStatus?: string;
		VTLDevice?: string;
		Progress?: number;
		TapeUsedInBytes?: number;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;
		PoolId?: string;
	}


	/** DescribeTapesInput */
	export interface DescribeTapesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;

		/** The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS. */
		TapeARNs?: Array<string>;
		Marker?: string;
		Limit?: number;
	}

	export interface DescribeUploadBufferOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		DiskIds?: Array<string>;
		UploadBufferUsedInBytes?: number;
		UploadBufferAllocatedInBytes?: number;
	}

	export interface DescribeUploadBufferInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** DescribeVTLDevicesOutput */
	export interface DescribeVTLDevicesOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		VTLDevices?: Array<VTLDevice>;
		Marker?: string;
	}


	/** Represents a device object associated with a tape gateway. */
	export interface VTLDevice {
		VTLDeviceARN?: string;
		VTLDeviceType?: string;
		VTLDeviceVendor?: string;
		VTLDeviceProductIdentifier?: string;

		/** Lists iSCSI information about a VTL device. */
		DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
	}


	/** Lists iSCSI information about a VTL device. */
	export interface DeviceiSCSIAttributes {
		TargetARN?: string;
		NetworkInterfaceId?: string;
		NetworkInterfacePort?: number;
		ChapEnabled?: boolean;
	}


	/** DescribeVTLDevicesInput */
	export interface DescribeVTLDevicesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		VTLDeviceARNs?: Array<string>;
		Marker?: string;
		Limit?: number;
	}


	/** A JSON object containing the following fields: */
	export interface DescribeWorkingStorageOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		DiskIds?: Array<string>;
		WorkingStorageUsedInBytes?: number;
		WorkingStorageAllocatedInBytes?: number;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface DescribeWorkingStorageInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** AttachVolumeOutput */
	export interface DetachVolumeOutput {
		VolumeARN?: string;
	}


	/** AttachVolumeInput */
	export interface DetachVolumeInput {
		VolumeARN: string;
		ForceDetach?: boolean;
	}


	/** DisableGatewayOutput */
	export interface DisableGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** DisableGatewayInput */
	export interface DisableGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** JoinDomainOutput */
	export interface JoinDomainOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		ActiveDirectoryStatus?: DescribeSMBSettingsOutputActiveDirectoryStatus;
	}


	/** JoinDomainInput */
	export interface JoinDomainInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		DomainName: string;
		OrganizationalUnit?: string;
		DomainControllers?: Array<string>;
		TimeoutInSeconds?: number;
		UserName: string;
		Password: string;
	}

	export interface ListAutomaticTapeCreationPoliciesOutput {
		AutomaticTapeCreationPolicyInfos?: Array<AutomaticTapeCreationPolicyInfo>;
	}


	/** Information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies. */
	export interface AutomaticTapeCreationPolicyInfo {
		AutomaticTapeCreationRules?: Array<AutomaticTapeCreationRule>;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** An automatic tape creation policy consists of automatic tape creation rules where each rule defines when and how to create new tapes. */
	export interface AutomaticTapeCreationRule {
		TapeBarcodePrefix: string;
		PoolId: string;
		TapeSizeInBytes: number;
		MinimumNumTapes: number;
	}

	export interface ListAutomaticTapeCreationPoliciesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** ListFileShareOutput */
	export interface ListFileSharesOutput {
		Marker?: string;
		NextMarker?: string;
		FileShareInfoList?: Array<FileShareInfo>;
	}


	/** Describes a file share. */
	export interface FileShareInfo {

		/** The type of the file share. */
		FileShareType?: FileShareInfoFileShareType;

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;

		/**
		 * The ID of the file share.
		 * Max length: 30
		 * Min length: 12
		 */
		FileShareId?: string;

		/**
		 * The status of the file share. Possible values are <code>CREATING</code>, <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>.
		 * Max length: 50
		 * Min length: 3
		 */
		FileShareStatus?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export enum FileShareInfoFileShareType { NFS = 0, SMB = 1 }


	/** ListFileShareInput */
	export interface ListFileSharesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		Limit?: number;
		Marker?: string;
	}

	export interface ListGatewaysOutput {
		Gateways?: Array<GatewayInfo>;
		Marker?: string;
	}


	/** Describes a gateway object. */
	export interface GatewayInfo {
		GatewayId?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		GatewayType?: string;
		GatewayOperationalState?: string;
		GatewayName?: string;
		Ec2InstanceId?: string;
		Ec2InstanceRegion?: string;
	}


	/** <p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul> */
	export interface ListGatewaysInput {
		Marker?: string;
		Limit?: number;
	}

	export interface ListLocalDisksOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		Disks?: Array<Disk>;
	}


	/** Represents a gateway's local disk. */
	export interface Disk {
		DiskId?: string;
		DiskPath?: string;
		DiskNode?: string;
		DiskStatus?: string;
		DiskSizeInBytes?: number;

		/**
		 * One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used. Valid values: <code>UPLOAD_BUFFER</code>, <code>CACHE_STORAGE</code>
		 * Max length: 100
		 * Min length: 3
		 */
		DiskAllocationType?: string;
		DiskAllocationResource?: string;

		/**
		 * A list of values that represents attributes of a local disk.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		DiskAttributeList?: Array<string>;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway. */
	export interface ListLocalDisksInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** ListTagsForResourceOutput */
	export interface ListTagsForResourceOutput {
		ResourceARN?: string;
		Marker?: string;
		Tags?: Array<Tag>;
	}


	/** ListTagsForResourceInput */
	export interface ListTagsForResourceInput {
		ResourceARN: string;
		Marker?: string;
		Limit?: number;
	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul> */
	export interface ListTapesOutput {

		/** An array of <a>TapeInfo</a> objects, where each object describes a single tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array. */
		TapeInfos?: Array<TapeInfo>;
		Marker?: string;
	}


	/** Describes a virtual tape. */
	export interface TapeInfo {
		TapeARN?: string;
		TapeBarcode?: string;
		TapeSizeInBytes?: number;
		TapeStatus?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		PoolId?: string;
	}


	/** <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul> */
	export interface ListTapesInput {

		/** The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS. */
		TapeARNs?: Array<string>;
		Marker?: string;
		Limit?: number;
	}


	/** ListVolumeInitiatorsOutput */
	export interface ListVolumeInitiatorsOutput {
		Initiators?: Array<string>;
	}


	/** ListVolumeInitiatorsInput */
	export interface ListVolumeInitiatorsInput {
		VolumeARN: string;
	}

	export interface ListVolumeRecoveryPointsOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		VolumeRecoveryPointInfos?: Array<VolumeRecoveryPointInfo>;
	}


	/** Describes a storage volume recovery point object. */
	export interface VolumeRecoveryPointInfo {
		VolumeARN?: string;
		VolumeSizeInBytes?: number;
		VolumeUsageInBytes?: number;
		VolumeRecoveryPointTime?: string;
	}

	export interface ListVolumeRecoveryPointsInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListVolumesOutput$Marker</a> </p> </li> <li> <p> <a>ListVolumesOutput$VolumeInfos</a> </p> </li> </ul> */
	export interface ListVolumesOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		Marker?: string;
		VolumeInfos?: Array<VolumeInfo>;
	}


	/** Describes a storage volume object. */
	export interface VolumeInfo {
		VolumeARN?: string;
		VolumeId?: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		GatewayId?: string;
		VolumeType?: string;
		VolumeSizeInBytes?: number;
		VolumeAttachmentStatus?: string;
	}


	/** <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul> */
	export interface ListVolumesInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		Marker?: string;
		Limit?: number;
	}

	export interface NotifyWhenUploadedOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;

		/**
		 * The randomly generated ID of the notification that was sent. This ID is in UUID format.
		 * Max length: 2048
		 * Min length: 1
		 */
		NotificationId?: string;
	}

	export interface NotifyWhenUploadedInput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN: string;
	}


	/** RefreshCacheOutput */
	export interface RefreshCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;

		/**
		 * The randomly generated ID of the notification that was sent. This ID is in UUID format.
		 * Max length: 2048
		 * Min length: 1
		 */
		NotificationId?: string;
	}


	/** RefreshCacheInput */
	export interface RefreshCacheInput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN: string;
		FolderList?: Array<string>;
		Recursive?: boolean;
	}


	/** RemoveTagsFromResourceOutput */
	export interface RemoveTagsFromResourceOutput {
		ResourceARN?: string;
	}


	/** RemoveTagsFromResourceInput */
	export interface RemoveTagsFromResourceInput {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface ResetCacheOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export interface ResetCacheInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** RetrieveTapeArchiveOutput */
	export interface RetrieveTapeArchiveOutput {
		TapeARN?: string;
	}


	/** RetrieveTapeArchiveInput */
	export interface RetrieveTapeArchiveInput {
		TapeARN: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** RetrieveTapeRecoveryPointOutput */
	export interface RetrieveTapeRecoveryPointOutput {
		TapeARN?: string;
	}


	/** RetrieveTapeRecoveryPointInput */
	export interface RetrieveTapeRecoveryPointInput {
		TapeARN: string;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}

	export interface SetLocalConsolePasswordOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** SetLocalConsolePasswordInput */
	export interface SetLocalConsolePasswordInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		LocalConsolePassword: string;
	}

	export interface SetSMBGuestPasswordOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** SetSMBGuestPasswordInput */
	export interface SetSMBGuestPasswordInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		Password: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut down. */
	export interface ShutdownGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut down. */
	export interface ShutdownGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}

	export interface StartAvailabilityMonitorTestOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export interface StartAvailabilityMonitorTestInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was restarted. */
	export interface StartGatewayOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to start. */
	export interface StartGatewayInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}

	export interface UpdateAutomaticTapeCreationPolicyOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export interface UpdateAutomaticTapeCreationPolicyInput {
		AutomaticTapeCreationRules: Array<AutomaticTapeCreationRule>;

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle information was updated. */
	export interface UpdateBandwidthRateLimitOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul> */
	export interface UpdateBandwidthRateLimitInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		AverageUploadRateLimitInBitsPerSec?: number;
		AverageDownloadRateLimitInBitsPerSec?: number;
	}


	/** A JSON object containing the following fields: */
	export interface UpdateChapCredentialsOutput {
		TargetARN?: string;
		InitiatorName?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul> */
	export interface UpdateChapCredentialsInput {
		TargetARN: string;
		SecretToAuthenticateInitiator: string;
		InitiatorName: string;
		SecretToAuthenticateTarget?: string;
	}


	/** A JSON object containing the ARN of the gateway that was updated. */
	export interface UpdateGatewayInformationOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
		GatewayName?: string;
	}

	export interface UpdateGatewayInformationInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;

		/**
		 * The name you configured for your gateway.
		 * Max length: 255
		 * Min length: 2
		 * Pattern: ^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$
		 */
		GatewayName?: string;
		GatewayTimezone?: string;
		CloudWatchLogGroupARN?: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated. */
	export interface UpdateGatewaySoftwareNowOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway to update. */
	export interface UpdateGatewaySoftwareNowInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance start time is updated. */
	export interface UpdateMaintenanceStartTimeOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}


	/** <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfMonth</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul> */
	export interface UpdateMaintenanceStartTimeInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		HourOfDay: number;
		MinuteOfHour: number;
		DayOfWeek?: number;
		DayOfMonth?: number;
	}


	/** UpdateNFSFileShareOutput */
	export interface UpdateNFSFileShareOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;
	}


	/** UpdateNFSFileShareInput */
	export interface UpdateNFSFileShareInput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;

		/** Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways. */
		NFSFileShareDefaults?: NFSFileShareDefaults;

		/**
		 * <p/>
		 * Max length: 50
		 * Min length: 5
		 */
		DefaultStorageClass?: string;

		/** A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private". */
		ObjectACL?: UpdateNFSFileShareInputObjectACL;

		/**
		 * The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ClientList?: Array<string>;

		/**
		 * <p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p> <code>RootSquash</code> - Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code> - No one is mapped to anonymous user</p> </li> <li> <p> <code>AllSquash</code> - Everyone is mapped to anonymous user.</p> </li> </ul>
		 * Max length: 15
		 * Min length: 5
		 */
		Squash?: string;
		ReadOnly?: boolean;
		GuessMIMETypeEnabled?: boolean;
		RequesterPays?: boolean;
	}

	export enum UpdateNFSFileShareInputObjectACL { _private = 0, public_read = 1, public_read_write = 2, authenticated_read = 3, bucket_owner_read = 4, bucket_owner_full_control = 5, aws_exec_read = 6 }


	/** UpdateSMBFileShareOutput */
	export interface UpdateSMBFileShareOutput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN?: string;
	}


	/** UpdateSMBFileShareInput */
	export interface UpdateSMBFileShareInput {

		/**
		 * The Amazon Resource Name (ARN) of the file share.
		 * Max length: 500
		 * Min length: 50
		 */
		FileShareARN: string;
		KMSEncrypted?: boolean;

		/**
		 * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server-side encryption. This value can only be set when KMSEncrypted is true. Optional.
		 * Max length: 2048
		 * Min length: 7
		 */
		KMSKey?: string;

		/**
		 * <p/>
		 * Max length: 50
		 * Min length: 5
		 */
		DefaultStorageClass?: string;

		/** A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private". */
		ObjectACL?: UpdateSMBFileShareInputObjectACL;
		ReadOnly?: boolean;
		GuessMIMETypeEnabled?: boolean;
		RequesterPays?: boolean;
		SMBACLEnabled?: boolean;
		AdminUserList?: Array<string>;
		ValidUserList?: Array<string>;
		InvalidUserList?: Array<string>;
		AuditDestinationARN?: string;
	}

	export enum UpdateSMBFileShareInputObjectACL { _private = 0, public_read = 1, public_read_write = 2, authenticated_read = 3, bucket_owner_read = 4, bucket_owner_full_control = 5, aws_exec_read = 6 }

	export interface UpdateSMBSecurityStrategyOutput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN?: string;
	}

	export interface UpdateSMBSecurityStrategyInput {

		/**
		 * The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.
		 * Max length: 500
		 * Min length: 50
		 */
		GatewayARN: string;
		SMBSecurityStrategy: DescribeSMBSettingsOutputSMBSecurityStrategy;
	}


	/** A JSON object containing the Amazon Resource Name (ARN) of the updated storage volume. */
	export interface UpdateSnapshotScheduleOutput {
		VolumeARN?: string;
	}


	/** <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul> */
	export interface UpdateSnapshotScheduleInput {
		VolumeARN: string;
		StartAt: number;
		RecurrenceInHours: number;
		Description?: string;
		Tags?: Array<Tag>;
	}


	/** UpdateVTLDeviceTypeOutput */
	export interface UpdateVTLDeviceTypeOutput {
		VTLDeviceARN?: string;
	}

	export interface UpdateVTLDeviceTypeInput {
		VTLDeviceARN: string;
		DeviceType: string;
	}

	export enum ActiveDirectoryStatus { ACCESS_DENIED = 0, DETACHED = 1, JOINED = 2, JOINING = 3, NETWORK_ERROR = 4, TIMEOUT = 5, UNKNOWN_ERROR = 6 }

	export enum AvailabilityMonitorTestStatus { COMPLETE = 0, FAILED = 1, PENDING = 2 }


	/** A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private". */
	export enum ObjectACL { _private = 0, public_read = 1, public_read_write = 2, authenticated_read = 3, bucket_owner_read = 4, bucket_owner_full_control = 5, aws_exec_read = 6 }

	export enum HostEnvironment { VMWARE = 0, HYPER_V = 1, EC2 = 2, KVM = 3, OTHER = 4 }

	export enum SMBSecurityStrategy { ClientSpecified = 0, MandatorySigning = 1, MandatoryEncryption = 2 }


	/** The type of the file share. */
	export enum FileShareType { NFS = 0, SMB = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the AWS Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account; for more information, see <a>UpdateGatewayInformation</a>.</p> <note> <p>You must turn on the gateway VM before you can activate your gateway.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.ActivateGateway
		 * @return {ActivateGatewayOutput} Success
		 */
		ActivateGateway(requestBody: ActivateGatewayInput): Observable<ActivateGatewayOutput> {
			return this.http.post<ActivateGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ActivateGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">Storage Gateway Concepts</a>).</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddCache
		 * @return {AddCacheOutput} Success
		 */
		AddCache(requestBody: AddCacheInput): Observable<AddCacheOutput> {
			return this.http.post<AddCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following AWS Storage Gateway resources:</p> <ul> <li> <p>Storage gateways of all types</p> </li> <li> <p>Storage volumes</p> </li> <li> <p>Virtual tapes</p> </li> <li> <p>NFS and SMB file shares</p> </li> </ul> <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddTagsToResource
		 * @return {AddTagsToResourceOutput} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceInput): Observable<AddTagsToResourceOutput> {
			return this.http.post<AddTagsToResourceOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume and tape gateway types.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddUploadBuffer
		 * @return {AddUploadBufferOutput} Success
		 */
		AddUploadBuffer(requestBody: AddUploadBufferInput): Observable<AddUploadBufferOutput> {
			return this.http.post<AddUploadBufferOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use <a>AddUploadBuffer</a> instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume gateway.</p> </note> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AddWorkingStorage
		 * @return {AddWorkingStorageOutput} Success
		 */
		AddWorkingStorage(requestBody: AddWorkingStorageInput): Observable<AddWorkingStorageOutput> {
			return this.http.post<AddWorkingStorageOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</p> <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.AssignTapePool
		 * @return {AssignTapePoolOutput} Success
		 */
		AssignTapePool(requestBody: AssignTapePoolInput): Observable<AssignTapePoolOutput> {
			return this.http.post<AssignTapePoolOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AssignTapePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
		 * Post #X-Amz-Target=StorageGateway_20130630.AttachVolume
		 * @return {AttachVolumeOutput} Success
		 */
		AttachVolume(requestBody: AttachVolumeInput): Observable<AttachVolumeOutput> {
			return this.http.post<AttachVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.AttachVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.CancelArchival
		 * @return {CancelArchivalOutput} Success
		 */
		CancelArchival(requestBody: CancelArchivalInput): Observable<CancelArchivalOutput> {
			return this.http.post<CancelArchivalOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CancelArchival', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.CancelRetrieval
		 * @return {CancelRetrievalOutput} Success
		 */
		CancelRetrieval(requestBody: CancelRetrievalInput): Observable<CancelRetrievalOutput> {
			return this.http.post<CancelRetrievalOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CancelRetrieval', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a cached volume. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note> <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p> <p>Optionally, you can provide the ARN for an existing volume as the <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be equal to or larger than the size of the copied volume, in bytes.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume
		 * @return {CreateCachediSCSIVolumeOutput} Success
		 */
		CreateCachediSCSIVolume(requestBody: CreateCachediSCSIVolumeInput): Observable<CreateCachediSCSIVolumeOutput> {
			return this.http.post<CreateCachediSCSIVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Network File System (NFS) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for file gateways.</p> <important> <p>File gateway requires AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in the AWS Region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide. </p> <p>File gateway does not support creating hard or symbolic links on a file share.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare
		 * @return {CreateNFSFileShareOutput} Success
		 */
		CreateNFSFileShare(requestBody: CreateNFSFileShareInput): Observable<CreateNFSFileShareOutput> {
			return this.http.post<CreateNFSFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Server Message Block (SMB) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway expose file shares using an SMB interface. This operation is only supported for file gateways.</p> <important> <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide.</i> </p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare
		 * @return {CreateSMBFileShareOutput} Success
		 */
		CreateSMBFileShare(requestBody: CreateSMBFileShareInput): Observable<CreateSMBFileShareOutput> {
			return this.http.post<CreateSMBFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a snapshot of a volume.</p> <p>AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage Service (Amazon S3) for durable off-site recovery, as well as import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a Snapshot Schedule</a>.</p> <p>In the CreateSnapshot request you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the AWS Storage Gateway Console. In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html">EC2 API reference</a>.</p> </note> <important> <p>Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateSnapshot
		 * @return {CreateSnapshotOutput} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotInput): Observable<CreateSnapshotOutput> {
			return this.http.post<CreateSnapshotOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type.</p> <p>A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p> <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the AWS Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, in <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint
		 * @return {CreateSnapshotFromVolumeRecoveryPointOutput} Success
		 */
		CreateSnapshotFromVolumeRecoveryPoint(requestBody: CreateSnapshotFromVolumeRecoveryPointInput): Observable<CreateSnapshotFromVolumeRecoveryPointOutput> {
			return this.http.post<CreateSnapshotFromVolumeRecoveryPointOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.</p> <p>The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased.</p> <p>In the request you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume
		 * @return {CreateStorediSCSIVolumeOutput} Success
		 */
		CreateStorediSCSIVolume(requestBody: CreateStorediSCSIVolumeInput): Observable<CreateStorediSCSIVolumeOutput> {
			return this.http.post<CreateStorediSCSIVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a virtual tape. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode
		 * @return {CreateTapeWithBarcodeOutput} Success
		 */
		CreateTapeWithBarcode(requestBody: CreateTapeWithBarcodeInput): Observable<CreateTapeWithBarcodeOutput> {
			return this.http.post<CreateTapeWithBarcodeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create virtual tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.CreateTapes
		 * @return {CreateTapesOutput} Success
		 */
		CreateTapes(requestBody: CreateTapesInput): Observable<CreateTapesOutput> {
			return this.http.post<CreateTapesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.CreateTapes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy
		 * @return {DeleteAutomaticTapeCreationPolicyOutput} Success
		 */
		DeleteAutomaticTapeCreationPolicy(requestBody: DeleteAutomaticTapeCreationPolicyInput): Observable<DeleteAutomaticTapeCreationPolicyOutput> {
			return this.http.post<DeleteAutomaticTapeCreationPolicyOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported for the stored volume, cached volume and tape gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit
		 * @return {DeleteBandwidthRateLimitOutput} Success
		 */
		DeleteBandwidthRateLimit(requestBody: DeleteBandwidthRateLimitInput): Observable<DeleteBandwidthRateLimitOutput> {
			return this.http.post<DeleteBandwidthRateLimitOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials
		 * @return {DeleteChapCredentialsOutput} Success
		 */
		DeleteChapCredentials(requestBody: DeleteChapCredentialsInput): Observable<DeleteChapCredentialsOutput> {
			return this.http.post<DeleteChapCredentialsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a file share from a file gateway. This operation is only supported for file gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteFileShare
		 * @return {DeleteFileShareOutput} Success
		 */
		DeleteFileShare(requestBody: DeleteFileShareInput): Observable<DeleteFileShareOutput> {
			return this.http.post<DeleteFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer.</p> <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.</p> <important> <p>You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the <a href="http://aws.amazon.com/storagegateway"> AWS Storage Gateway Detail Page</a>. </p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteGateway
		 * @return {DeleteGatewayOutput} Success
		 */
		DeleteGateway(requestBody: DeleteGatewayInput): Observable<DeleteGatewayOutput> {
			return this.http.post<DeleteGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a snapshot of a volume.</p> <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html">Working with Snapshots</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported in stored and cached volume gateway types.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule
		 * @return {DeleteSnapshotScheduleOutput} Success
		 */
		DeleteSnapshotSchedule(requestBody: DeleteSnapshotScheduleInput): Observable<DeleteSnapshotScheduleOutput> {
			return this.http.post<DeleteSnapshotScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified virtual tape. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteTape
		 * @return {DeleteTapeOutput} Success
		 */
		DeleteTape(requestBody: DeleteTapeInput): Observable<DeleteTapeOutput> {
			return this.http.post<DeleteTapeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteTape', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive
		 * @return {DeleteTapeArchiveOutput} Success
		 */
		DeleteTapeArchive(requestBody: DeleteTapeArchiveInput): Observable<DeleteTapeArchiveOutput> {
			return this.http.post<DeleteTapeArchiveOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. </p> <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DeleteVolume
		 * @return {DeleteVolumeOutput} Success
		 */
		DeleteVolume(requestBody: DeleteVolumeInput): Observable<DeleteVolumeOutput> {
			return this.http.post<DeleteVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DeleteVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the most recent High Availability monitoring test that was performed on the host in a cluster. If a test isn't performed, the status and start time in the response would be null.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest
		 * @return {DescribeAvailabilityMonitorTestOutput} Success
		 */
		DescribeAvailabilityMonitorTest(requestBody: DescribeAvailabilityMonitorTestInput): Observable<DescribeAvailabilityMonitorTestOutput> {
			return this.http.post<DescribeAvailabilityMonitorTestOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported for the stored volume, cached volume and tape gateway types.'</p> <p>This operation only returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit
		 * @return {DescribeBandwidthRateLimitOutput} Success
		 */
		DescribeBandwidthRateLimit(requestBody: DescribeBandwidthRateLimitInput): Observable<DescribeBandwidthRateLimitOutput> {
			return this.http.post<DescribeBandwidthRateLimitOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types.</p> <p>The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeCache
		 * @return {DescribeCacheOutput} Success
		 */
		DescribeCache(requestBody: DescribeCacheInput): Observable<DescribeCacheOutput> {
			return this.http.post<DescribeCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types.</p> <p>The list of gateway volumes in the request must be from one gateway. In the response, AWS Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes
		 * @return {DescribeCachediSCSIVolumesOutput} Success
		 */
		DescribeCachediSCSIVolumes(requestBody: DescribeCachediSCSIVolumesInput): Observable<DescribeCachediSCSIVolumesOutput> {
			return this.http.post<DescribeCachediSCSIVolumesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials
		 * @return {DescribeChapCredentialsOutput} Success
		 */
		DescribeChapCredentials(requestBody: DescribeChapCredentialsInput): Observable<DescribeChapCredentialsOutput> {
			return this.http.post<DescribeChapCredentialsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation
		 * @return {DescribeGatewayInformationOutput} Success
		 */
		DescribeGatewayInformation(requestBody: DescribeGatewayInformationInput): Observable<DescribeGatewayInformationOutput> {
			return this.http.post<DescribeGatewayInformationOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime
		 * @return {DescribeMaintenanceStartTimeOutput} Success
		 */
		DescribeMaintenanceStartTime(requestBody: DescribeMaintenanceStartTimeInput): Observable<DescribeMaintenanceStartTimeOutput> {
			return this.http.post<DescribeMaintenanceStartTimeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a description for one or more Network File System (NFS) file shares from a file gateway. This operation is only supported for file gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares
		 * @return {DescribeNFSFileSharesOutput} Success
		 */
		DescribeNFSFileShares(requestBody: DescribeNFSFileSharesInput): Observable<DescribeNFSFileSharesOutput> {
			return this.http.post<DescribeNFSFileSharesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a description for one or more Server Message Block (SMB) file shares from a file gateway. This operation is only supported for file gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares
		 * @return {DescribeSMBFileSharesOutput} Success
		 */
		DescribeSMBFileShares(requestBody: DescribeSMBFileSharesInput): Observable<DescribeSMBFileSharesOutput> {
			return this.http.post<DescribeSMBFileSharesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings
		 * @return {DescribeSMBSettingsOutput} Success
		 */
		DescribeSMBSettings(requestBody: DescribeSMBSettingsInput): Observable<DescribeSMBSettingsOutput> {
			return this.http.post<DescribeSMBSettingsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule
		 * @return {DescribeSnapshotScheduleOutput} Success
		 */
		DescribeSnapshotSchedule(requestBody: DescribeSnapshotScheduleInput): Observable<DescribeSnapshotScheduleOutput> {
			return this.http.post<DescribeSnapshotScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response AWS Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes
		 * @return {DescribeStorediSCSIVolumesOutput} Success
		 */
		DescribeStorediSCSIVolumes(requestBody: DescribeStorediSCSIVolumesInput): Observable<DescribeStorediSCSIVolumesOutput> {
			return this.http.post<DescribeStorediSCSIVolumesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p> <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTapeArchivesOutput} Success
		 */
		DescribeTapeArchives(Limit: string, Marker: string, requestBody: DescribeTapeArchivesInput): Observable<DescribeTapeArchivesOutput> {
			return this.http.post<DescribeTapeArchivesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of virtual tape recovery points that are available for the specified tape gateway.</p> <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTapeRecoveryPointsOutput} Success
		 */
		DescribeTapeRecoveryPoints(Limit: string, Marker: string, requestBody: DescribeTapeRecoveryPointsInput): Observable<DescribeTapeRecoveryPointsOutput> {
			return this.http.post<DescribeTapeRecoveryPointsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeTapes
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTapesOutput} Success
		 */
		DescribeTapes(Limit: string, Marker: string, requestBody: DescribeTapesInput): Observable<DescribeTapesOutput> {
			return this.http.post<DescribeTapesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeTapes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume and tape gateway types.</p> <p>The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer
		 * @return {DescribeUploadBufferOutput} Success
		 */
		DescribeUploadBuffer(requestBody: DescribeUploadBufferInput): Observable<DescribeUploadBufferOutput> {
			return this.http.post<DescribeUploadBufferOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, AWS Storage Gateway returns VTL device information.</p> <p>This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeVTLDevicesOutput} Success
		 */
		DescribeVTLDevices(Limit: string, Marker: string, requestBody: DescribeVTLDevicesInput): Observable<DescribeVTLDevicesOutput> {
			return this.http.post<DescribeVTLDevicesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p> </note> <p>The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage
		 * @return {DescribeWorkingStorageOutput} Success
		 */
		DescribeWorkingStorage(requestBody: DescribeWorkingStorageInput): Observable<DescribeWorkingStorageOutput> {
			return this.http.post<DescribeWorkingStorageOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.DetachVolume
		 * @return {DetachVolumeOutput} Success
		 */
		DetachVolume(requestBody: DetachVolumeInput): Observable<DetachVolumeOutput> {
			return this.http.post<DetachVolumeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DetachVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p> <p>Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.</p> <important> <p>After a gateway is disabled, it cannot be enabled.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.DisableGateway
		 * @return {DisableGatewayOutput} Success
		 */
		DisableGateway(requestBody: DisableGatewayInput): Observable<DisableGatewayOutput> {
			return this.http.post<DisableGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.DisableGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.
		 * Post #X-Amz-Target=StorageGateway_20130630.JoinDomain
		 * @return {JoinDomainOutput} Success
		 */
		JoinDomain(requestBody: JoinDomainInput): Observable<JoinDomainOutput> {
			return this.http.post<JoinDomainOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.JoinDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list. </p> <p>This operation is only supported for tape gateways.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies
		 * @return {ListAutomaticTapeCreationPoliciesOutput} Success
		 */
		ListAutomaticTapeCreationPolicies(requestBody: ListAutomaticTapeCreationPoliciesInput): Observable<ListAutomaticTapeCreationPoliciesOutput> {
			return this.http.post<ListAutomaticTapeCreationPoliciesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account. This operation is only supported for file gateways.
		 * Post #X-Amz-Target=StorageGateway_20130630.ListFileShares
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListFileSharesOutput} Success
		 */
		ListFileShares(Limit: string, Marker: string, requestBody: ListFileSharesInput): Observable<ListFileSharesOutput> {
			return this.http.post<ListFileSharesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListFileShares?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists gateways owned by an AWS account in an AWS Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).</p> <p>By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response.</p> <p>If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListGateways
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListGatewaysOutput} Success
		 */
		ListGateways(Limit: string, Marker: string, requestBody: ListGatewaysInput): Observable<ListGatewaysOutput> {
			return this.http.post<ListGatewaysOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListGateways?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p> <p>The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a <code>DiskStatus</code> field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListLocalDisks
		 * @return {ListLocalDisksOutput} Success
		 */
		ListLocalDisks(requestBody: ListLocalDisksInput): Observable<ListLocalDisksOutput> {
			return this.http.post<ListLocalDisksOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListLocalDisks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags that have been added to the specified resource. This operation is supported in storage gateways of all types.
		 * Post #X-Amz-Target=StorageGateway_20130630.ListTagsForResource
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(Limit: string, Marker: string, requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListTagsForResource?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS.</p> <p>This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListTapes
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListTapesOutput} Success
		 */
		ListTapes(Limit: string, Marker: string, requestBody: ListTapesInput): Observable<ListTapesOutput> {
			return this.http.post<ListTapesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListTapes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.
		 * Post #X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators
		 * @return {ListVolumeInitiatorsOutput} Success
		 */
		ListVolumeInitiators(requestBody: ListVolumeInitiatorsInput): Observable<ListVolumeInitiatorsOutput> {
			return this.http.post<ListVolumeInitiatorsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type.</p> <p>Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints
		 * @return {ListVolumeRecoveryPointsOutput} Success
		 */
		ListVolumeRecoveryPoints(requestBody: ListVolumeRecoveryPointsInput): Observable<ListVolumeRecoveryPointsOutput> {
			return this.http.post<ListVolumeRecoveryPointsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p> <p>The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ListVolumes
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListVolumesOutput} Success
		 */
		ListVolumes(Limit: string, Marker: string, requestBody: ListVolumesInput): Observable<ListVolumesOutput> {
			return this.http.post<ListVolumesOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ListVolumes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends you notification through CloudWatch Events when all files written to your file share have been uploaded to Amazon S3.</p> <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or AWS Lambda function. This operation is only supported for file gateways.</p> <p>For more information, see Getting File Upload Notification in the Storage Gateway User Guide (https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification). </p>
		 * Post #X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded
		 * @return {NotifyWhenUploadedOutput} Success
		 */
		NotifyWhenUploaded(requestBody: NotifyWhenUploadedInput): Observable<NotifyWhenUploadedOutput> {
			return this.http.post<NotifyWhenUploadedOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Refreshes the cache for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed or replaced since the gateway last listed the bucket's contents and cached the results. This operation is only supported in the file gateway type. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting Notified About File Operations</a>.</p> <p>When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through an CloudWatch event when your <code>RefreshCache</code> operation completes. </p> <p>Throttle limit: This API is asynchronous so the gateway will accept no more than two refreshes at any time. We recommend using the refresh-complete CloudWatch event notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting Notified About File Operations</a>.</p> <p>If you invoke the RefreshCache API when two requests are already being processed, any new request will cause an <code>InvalidGatewayRequestException</code> error because too many requests were sent to the server.</p> <p>For more information, see "https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification".</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.RefreshCache
		 * @return {RefreshCacheOutput} Success
		 */
		RefreshCache(requestBody: RefreshCacheInput): Observable<RefreshCacheOutput> {
			return this.http.post<RefreshCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RefreshCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified resource. This operation is supported in storage gateways of all types.
		 * Post #X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceOutput} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceInput): Observable<RemoveTagsFromResourceOutput> {
			return this.http.post<RemoveTagsFromResourceOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.</p> <important> <p>If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.ResetCache
		 * @return {ResetCacheOutput} Success
		 */
		ResetCache(requestBody: ResetCacheInput): Observable<ResetCacheOutput> {
			return this.http.post<ResetCacheOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ResetCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type.</p> <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive
		 * @return {RetrieveTapeArchiveOutput} Success
		 */
		RetrieveTapeArchive(requestBody: RetrieveTapeArchiveInput): Observable<RetrieveTapeArchiveOutput> {
			return this.http.post<RetrieveTapeArchiveOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type.</p> <p>A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.</p> <note> <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint
		 * @return {RetrieveTapeRecoveryPointOutput} Success
		 */
		RetrieveTapeRecoveryPoint(requestBody: RetrieveTapeRecoveryPointInput): Observable<RetrieveTapeRecoveryPointOutput> {
			return this.http.post<RetrieveTapeRecoveryPointOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.
		 * Post #X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword
		 * @return {SetLocalConsolePasswordOutput} Success
		 */
		SetLocalConsolePassword(requestBody: SetLocalConsolePasswordInput): Observable<SetLocalConsolePasswordOutput> {
			return this.http.post<SetLocalConsolePasswordOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code> user is the user when the authentication method for the file share is set to <code>GuestAccess</code>.
		 * Post #X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword
		 * @return {SetSMBGuestPasswordOutput} Success
		 */
		SetSMBGuestPassword(requestBody: SetSMBGuestPasswordInput): Observable<SetSMBGuestPasswordOutput> {
			return this.http.post<SetSMBGuestPasswordOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.</p> <p>The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.</p> <note> <p>If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.</p> </note> <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a> and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.</p> <note> <p>When you make a shutdown request, you will get a <code>200 OK</code> success response immediately. However, it might take some time for the gateway to shut down. You can call the <a>DescribeGatewayInformation</a> API to check the status. For more information, see <a>ActivateGateway</a>.</p> </note> <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the gateway.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.ShutdownGateway
		 * @return {ShutdownGatewayOutput} Success
		 */
		ShutdownGateway(requestBody: ShutdownGatewayInput): Observable<ShutdownGatewayOutput> {
			return this.http.post<ShutdownGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.ShutdownGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the <code>DescribeAvailabilityMonitorTest</code> API. </p> <note> <p>Starting this test will cause your gateway to go offline for a brief period.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest
		 * @return {StartAvailabilityMonitorTestOutput} Success
		 */
		StartAvailabilityMonitorTest(requestBody: StartAvailabilityMonitorTestInput): Observable<StartAvailabilityMonitorTestOutput> {
			return this.http.post<StartAvailabilityMonitorTestOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.</p> <note> <p>When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any additional API calls. For more information, see <a>ActivateGateway</a>.</p> </note> <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.StartGateway
		 * @return {StartGatewayOutput} Success
		 */
		StartGateway(requestBody: StartGatewayInput): Observable<StartGatewayOutput> {
			return this.http.post<StartGatewayOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.StartGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways.</p> <p>By default, there is no automatic tape creation policy.</p> <note> <p>A gateway can have only one automatic tape creation policy.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy
		 * @return {UpdateAutomaticTapeCreationPolicyOutput} Success
		 */
		UpdateAutomaticTapeCreationPolicy(requestBody: UpdateAutomaticTapeCreationPolicyInput): Observable<UpdateAutomaticTapeCreationPolicyOutput> {
			return this.http.post<UpdateAutomaticTapeCreationPolicyOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported for the stored volume, cached volume and tape gateway types.'</p> <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth.</p> <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit
		 * @return {UpdateBandwidthRateLimitOutput} Success
		 */
		UpdateBandwidthRateLimit(requestBody: UpdateBandwidthRateLimitInput): Observable<UpdateBandwidthRateLimitOutput> {
			return this.http.post<UpdateBandwidthRateLimitOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types.</p> <important> <p>When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials
		 * @return {UpdateChapCredentialsOutput} Success
		 */
		UpdateChapCredentials(requestBody: UpdateChapCredentialsInput): Observable<UpdateChapCredentialsOutput> {
			return this.http.post<UpdateChapCredentialsOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p> <note> <p>For Gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation
		 * @return {UpdateGatewayInformationOutput} Success
		 */
		UpdateGatewayInformation(requestBody: UpdateGatewayInformationInput): Observable<UpdateGatewayInformationOutput> {
			return this.http.post<UpdateGatewayInformationOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete. You can call <a>DescribeGatewayInformation</a> to verify the gateway is in the <code>STATE_RUNNING</code> state.</p> </note> <important> <p>A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing Your Windows iSCSI Settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing Your Linux iSCSI Settings</a>, respectively.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow
		 * @return {UpdateGatewaySoftwareNowOutput} Success
		 */
		UpdateGatewaySoftwareNow(requestBody: UpdateGatewaySoftwareNowInput): Observable<UpdateGatewaySoftwareNowOutput> {
			return this.http.post<UpdateGatewaySoftwareNowOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime
		 * @return {UpdateMaintenanceStartTimeOutput} Success
		 */
		UpdateMaintenanceStartTime(requestBody: UpdateMaintenanceStartTimeInput): Observable<UpdateMaintenanceStartTimeOutput> {
			return this.http.post<UpdateMaintenanceStartTimeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a Network File System (NFS) file share. This operation is only supported in the file gateway type.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <p>Updates the following file share setting:</p> <ul> <li> <p>Default storage class for your S3 bucket</p> </li> <li> <p>Metadata defaults for your S3 bucket</p> </li> <li> <p>Allowed NFS clients for your file share</p> </li> <li> <p>Squash settings</p> </li> <li> <p>Write status of your file share</p> </li> </ul> <note> <p>To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported in file gateways.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare
		 * @return {UpdateNFSFileShareOutput} Success
		 */
		UpdateNFSFileShare(requestBody: UpdateNFSFileShareInput): Observable<UpdateNFSFileShareOutput> {
			return this.http.post<UpdateNFSFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a Server Message Block (SMB) file share.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported for file gateways.</p> </note> <important> <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide.</i> </p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare
		 * @return {UpdateSMBFileShareOutput} Success
		 */
		UpdateSMBFileShare(requestBody: UpdateSMBFileShareInput): Observable<UpdateSMBFileShareOutput> {
			return this.http.post<UpdateSMBFileShareOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.</p> <note> <p>This API is called Security level in the User Guide.</p> <p>A higher security level can affect performance of the gateway.</p> </note>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy
		 * @return {UpdateSMBSecurityStrategyOutput} Success
		 */
		UpdateSMBSecurityStrategy(requestBody: UpdateSMBSecurityStrategyInput): Observable<UpdateSMBSecurityStrategyOutput> {
			return this.http.post<UpdateSMBSecurityStrategyOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types.</p> <p>The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume.</p> <p>In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</p>
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule
		 * @return {UpdateSnapshotScheduleOutput} Success
		 */
		UpdateSnapshotSchedule(requestBody: UpdateSnapshotScheduleInput): Observable<UpdateSnapshotScheduleOutput> {
			return this.http.post<UpdateSnapshotScheduleOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.
		 * Post #X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType
		 * @return {UpdateVTLDeviceTypeOutput} Success
		 */
		UpdateVTLDeviceType(requestBody: UpdateVTLDeviceTypeInput): Observable<UpdateVTLDeviceTypeOutput> {
			return this.http.post<UpdateVTLDeviceTypeOutput>(this.baseUri + '#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ActivateGatewayX_Amz_Target { StorageGateway_20130630_ActivateGateway = 0 }

	export enum AddCacheX_Amz_Target { StorageGateway_20130630_AddCache = 0 }

	export enum AddTagsToResourceX_Amz_Target { StorageGateway_20130630_AddTagsToResource = 0 }

	export enum AddUploadBufferX_Amz_Target { StorageGateway_20130630_AddUploadBuffer = 0 }

	export enum AddWorkingStorageX_Amz_Target { StorageGateway_20130630_AddWorkingStorage = 0 }

	export enum AssignTapePoolX_Amz_Target { StorageGateway_20130630_AssignTapePool = 0 }

	export enum AttachVolumeX_Amz_Target { StorageGateway_20130630_AttachVolume = 0 }

	export enum CancelArchivalX_Amz_Target { StorageGateway_20130630_CancelArchival = 0 }

	export enum CancelRetrievalX_Amz_Target { StorageGateway_20130630_CancelRetrieval = 0 }

	export enum CreateCachediSCSIVolumeX_Amz_Target { StorageGateway_20130630_CreateCachediSCSIVolume = 0 }

	export enum CreateNFSFileShareX_Amz_Target { StorageGateway_20130630_CreateNFSFileShare = 0 }

	export enum CreateSMBFileShareX_Amz_Target { StorageGateway_20130630_CreateSMBFileShare = 0 }

	export enum CreateSnapshotX_Amz_Target { StorageGateway_20130630_CreateSnapshot = 0 }

	export enum CreateSnapshotFromVolumeRecoveryPointX_Amz_Target { StorageGateway_20130630_CreateSnapshotFromVolumeRecoveryPoint = 0 }

	export enum CreateStorediSCSIVolumeX_Amz_Target { StorageGateway_20130630_CreateStorediSCSIVolume = 0 }

	export enum CreateTapeWithBarcodeX_Amz_Target { StorageGateway_20130630_CreateTapeWithBarcode = 0 }

	export enum CreateTapesX_Amz_Target { StorageGateway_20130630_CreateTapes = 0 }

	export enum DeleteAutomaticTapeCreationPolicyX_Amz_Target { StorageGateway_20130630_DeleteAutomaticTapeCreationPolicy = 0 }

	export enum DeleteBandwidthRateLimitX_Amz_Target { StorageGateway_20130630_DeleteBandwidthRateLimit = 0 }

	export enum DeleteChapCredentialsX_Amz_Target { StorageGateway_20130630_DeleteChapCredentials = 0 }

	export enum DeleteFileShareX_Amz_Target { StorageGateway_20130630_DeleteFileShare = 0 }

	export enum DeleteGatewayX_Amz_Target { StorageGateway_20130630_DeleteGateway = 0 }

	export enum DeleteSnapshotScheduleX_Amz_Target { StorageGateway_20130630_DeleteSnapshotSchedule = 0 }

	export enum DeleteTapeX_Amz_Target { StorageGateway_20130630_DeleteTape = 0 }

	export enum DeleteTapeArchiveX_Amz_Target { StorageGateway_20130630_DeleteTapeArchive = 0 }

	export enum DeleteVolumeX_Amz_Target { StorageGateway_20130630_DeleteVolume = 0 }

	export enum DescribeAvailabilityMonitorTestX_Amz_Target { StorageGateway_20130630_DescribeAvailabilityMonitorTest = 0 }

	export enum DescribeBandwidthRateLimitX_Amz_Target { StorageGateway_20130630_DescribeBandwidthRateLimit = 0 }

	export enum DescribeCacheX_Amz_Target { StorageGateway_20130630_DescribeCache = 0 }

	export enum DescribeCachediSCSIVolumesX_Amz_Target { StorageGateway_20130630_DescribeCachediSCSIVolumes = 0 }

	export enum DescribeChapCredentialsX_Amz_Target { StorageGateway_20130630_DescribeChapCredentials = 0 }

	export enum DescribeGatewayInformationX_Amz_Target { StorageGateway_20130630_DescribeGatewayInformation = 0 }

	export enum DescribeMaintenanceStartTimeX_Amz_Target { StorageGateway_20130630_DescribeMaintenanceStartTime = 0 }

	export enum DescribeNFSFileSharesX_Amz_Target { StorageGateway_20130630_DescribeNFSFileShares = 0 }

	export enum DescribeSMBFileSharesX_Amz_Target { StorageGateway_20130630_DescribeSMBFileShares = 0 }

	export enum DescribeSMBSettingsX_Amz_Target { StorageGateway_20130630_DescribeSMBSettings = 0 }

	export enum DescribeSnapshotScheduleX_Amz_Target { StorageGateway_20130630_DescribeSnapshotSchedule = 0 }

	export enum DescribeStorediSCSIVolumesX_Amz_Target { StorageGateway_20130630_DescribeStorediSCSIVolumes = 0 }

	export enum DescribeTapeArchivesX_Amz_Target { StorageGateway_20130630_DescribeTapeArchives = 0 }

	export enum DescribeTapeRecoveryPointsX_Amz_Target { StorageGateway_20130630_DescribeTapeRecoveryPoints = 0 }

	export enum DescribeTapesX_Amz_Target { StorageGateway_20130630_DescribeTapes = 0 }

	export enum DescribeUploadBufferX_Amz_Target { StorageGateway_20130630_DescribeUploadBuffer = 0 }

	export enum DescribeVTLDevicesX_Amz_Target { StorageGateway_20130630_DescribeVTLDevices = 0 }

	export enum DescribeWorkingStorageX_Amz_Target { StorageGateway_20130630_DescribeWorkingStorage = 0 }

	export enum DetachVolumeX_Amz_Target { StorageGateway_20130630_DetachVolume = 0 }

	export enum DisableGatewayX_Amz_Target { StorageGateway_20130630_DisableGateway = 0 }

	export enum JoinDomainX_Amz_Target { StorageGateway_20130630_JoinDomain = 0 }

	export enum ListAutomaticTapeCreationPoliciesX_Amz_Target { StorageGateway_20130630_ListAutomaticTapeCreationPolicies = 0 }

	export enum ListFileSharesX_Amz_Target { StorageGateway_20130630_ListFileShares = 0 }

	export enum ListGatewaysX_Amz_Target { StorageGateway_20130630_ListGateways = 0 }

	export enum ListLocalDisksX_Amz_Target { StorageGateway_20130630_ListLocalDisks = 0 }

	export enum ListTagsForResourceX_Amz_Target { StorageGateway_20130630_ListTagsForResource = 0 }

	export enum ListTapesX_Amz_Target { StorageGateway_20130630_ListTapes = 0 }

	export enum ListVolumeInitiatorsX_Amz_Target { StorageGateway_20130630_ListVolumeInitiators = 0 }

	export enum ListVolumeRecoveryPointsX_Amz_Target { StorageGateway_20130630_ListVolumeRecoveryPoints = 0 }

	export enum ListVolumesX_Amz_Target { StorageGateway_20130630_ListVolumes = 0 }

	export enum NotifyWhenUploadedX_Amz_Target { StorageGateway_20130630_NotifyWhenUploaded = 0 }

	export enum RefreshCacheX_Amz_Target { StorageGateway_20130630_RefreshCache = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { StorageGateway_20130630_RemoveTagsFromResource = 0 }

	export enum ResetCacheX_Amz_Target { StorageGateway_20130630_ResetCache = 0 }

	export enum RetrieveTapeArchiveX_Amz_Target { StorageGateway_20130630_RetrieveTapeArchive = 0 }

	export enum RetrieveTapeRecoveryPointX_Amz_Target { StorageGateway_20130630_RetrieveTapeRecoveryPoint = 0 }

	export enum SetLocalConsolePasswordX_Amz_Target { StorageGateway_20130630_SetLocalConsolePassword = 0 }

	export enum SetSMBGuestPasswordX_Amz_Target { StorageGateway_20130630_SetSMBGuestPassword = 0 }

	export enum ShutdownGatewayX_Amz_Target { StorageGateway_20130630_ShutdownGateway = 0 }

	export enum StartAvailabilityMonitorTestX_Amz_Target { StorageGateway_20130630_StartAvailabilityMonitorTest = 0 }

	export enum StartGatewayX_Amz_Target { StorageGateway_20130630_StartGateway = 0 }

	export enum UpdateAutomaticTapeCreationPolicyX_Amz_Target { StorageGateway_20130630_UpdateAutomaticTapeCreationPolicy = 0 }

	export enum UpdateBandwidthRateLimitX_Amz_Target { StorageGateway_20130630_UpdateBandwidthRateLimit = 0 }

	export enum UpdateChapCredentialsX_Amz_Target { StorageGateway_20130630_UpdateChapCredentials = 0 }

	export enum UpdateGatewayInformationX_Amz_Target { StorageGateway_20130630_UpdateGatewayInformation = 0 }

	export enum UpdateGatewaySoftwareNowX_Amz_Target { StorageGateway_20130630_UpdateGatewaySoftwareNow = 0 }

	export enum UpdateMaintenanceStartTimeX_Amz_Target { StorageGateway_20130630_UpdateMaintenanceStartTime = 0 }

	export enum UpdateNFSFileShareX_Amz_Target { StorageGateway_20130630_UpdateNFSFileShare = 0 }

	export enum UpdateSMBFileShareX_Amz_Target { StorageGateway_20130630_UpdateSMBFileShare = 0 }

	export enum UpdateSMBSecurityStrategyX_Amz_Target { StorageGateway_20130630_UpdateSMBSecurityStrategy = 0 }

	export enum UpdateSnapshotScheduleX_Amz_Target { StorageGateway_20130630_UpdateSnapshotSchedule = 0 }

	export enum UpdateVTLDeviceTypeX_Amz_Target { StorageGateway_20130630_UpdateVTLDeviceType = 0 }

}

