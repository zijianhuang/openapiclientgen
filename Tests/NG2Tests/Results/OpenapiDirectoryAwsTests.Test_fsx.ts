import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelDataRepositoryTaskResponse {
		Lifecycle?: CancelDataRepositoryTaskResponseLifecycle | null;
		TaskId?: string | null;
	}
	export interface CancelDataRepositoryTaskResponseFormProperties {
		Lifecycle: FormControl<CancelDataRepositoryTaskResponseLifecycle | null | undefined>,
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDataRepositoryTaskResponseFormGroup() {
		return new FormGroup<CancelDataRepositoryTaskResponseFormProperties>({
			Lifecycle: new FormControl<CancelDataRepositoryTaskResponseLifecycle | null | undefined>(undefined),
			TaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CancelDataRepositoryTaskResponseLifecycle { PENDING = 0, EXECUTING = 1, FAILED = 2, SUCCEEDED = 3, CANCELED = 4, CANCELING = 5 }


	/** Cancels a data repository task. */
	export interface CancelDataRepositoryTaskRequest {
		TaskId: string;
	}

	/** Cancels a data repository task. */
	export interface CancelDataRepositoryTaskRequestFormProperties {
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDataRepositoryTaskRequestFormGroup() {
		return new FormGroup<CancelDataRepositoryTaskRequestFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BadRequest {
	}
	export interface BadRequestFormProperties {
	}
	export function CreateBadRequestFormGroup() {
		return new FormGroup<BadRequestFormProperties>({
		});

	}

	export interface UnsupportedOperation {
	}
	export interface UnsupportedOperationFormProperties {
	}
	export function CreateUnsupportedOperationFormGroup() {
		return new FormGroup<UnsupportedOperationFormProperties>({
		});

	}

	export interface DataRepositoryTaskNotFound {
	}
	export interface DataRepositoryTaskNotFoundFormProperties {
	}
	export function CreateDataRepositoryTaskNotFoundFormGroup() {
		return new FormGroup<DataRepositoryTaskNotFoundFormProperties>({
		});

	}

	export interface DataRepositoryTaskEnded {
	}
	export interface DataRepositoryTaskEndedFormProperties {
	}
	export function CreateDataRepositoryTaskEndedFormGroup() {
		return new FormGroup<DataRepositoryTaskEndedFormProperties>({
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


	/** The response object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupResponse {

		/** A backup of an Amazon FSx for Windows File Server file system. You can create a new file system from a backup to protect against data loss. */
		Backup?: Backup;
	}

	/** The response object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupResponseFormProperties {
	}
	export function CreateCreateBackupResponseFormGroup() {
		return new FormGroup<CreateBackupResponseFormProperties>({
		});

	}


	/** A backup of an Amazon FSx for Windows File Server file system. You can create a new file system from a backup to protect against data loss. */
	export interface Backup {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId: string;

		/**
		 * The lifecycle status of the backup.
		 * Required
		 */
		Lifecycle: BackupLifecycle;

		/** If backup creation fails, this structure contains the details of that failure. */
		FailureDetails?: BackupFailureDetails;

		/**
		 * The type of the backup.
		 * Required
		 */
		Type: BackupType;

		/**
		 * The current percent of progress of an asynchronous task.
		 * Minimum: 0
		 * Maximum: 100
		 */
		ProgressPercent?: number | null;

		/**
		 * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
		 * Required
		 */
		CreationTime: Date;

		/**
		 * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^.{1,2048}$
		 */
		KmsKeyId?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * A description of a specific Amazon FSx file system.
		 * Required
		 */
		FileSystem: FileSystem;

		/** The Microsoft AD attributes of the Amazon FSx for Windows File Server file system. */
		DirectoryInformation?: ActiveDirectoryBackupAttributes;
	}

	/** A backup of an Amazon FSx for Windows File Server file system. You can create a new file system from a backup to protect against data loss. */
	export interface BackupFormProperties {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId: FormControl<string | null | undefined>,

		/**
		 * The lifecycle status of the backup.
		 * Required
		 */
		Lifecycle: FormControl<BackupLifecycle | null | undefined>,

		/**
		 * The type of the backup.
		 * Required
		 */
		Type: FormControl<BackupType | null | undefined>,

		/**
		 * The current percent of progress of an asynchronous task.
		 * Minimum: 0
		 * Maximum: 100
		 */
		ProgressPercent: FormControl<number | null | undefined>,

		/**
		 * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
		 * Required
		 */
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^.{1,2048}$
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<BackupLifecycle | null | undefined>(undefined),
			Type: new FormControl<BackupType | null | undefined>(undefined),
			ProgressPercent: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupLifecycle { AVAILABLE = 0, CREATING = 1, DELETED = 2, FAILED = 3 }


	/** If backup creation fails, this structure contains the details of that failure. */
	export interface BackupFailureDetails {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message?: string | null;
	}

	/** If backup creation fails, this structure contains the details of that failure. */
	export interface BackupFailureDetailsFormProperties {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBackupFailureDetailsFormGroup() {
		return new FormGroup<BackupFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupType { AUTOMATIC = 0, USER_INITIATED = 1 }


	/** Specifies a key-value pair for a resource tag. */
	export interface Tag {

		/**
		 * A string of 1 to 128 characters that specifies the key for a tag. Tag keys must be unique for the resource to which they are attached.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Key?: string | null;

		/**
		 * A string of 0 to 256 characters that specifies the value for a tag. Tag values can be null and don't have to be unique in a tag set.
		 * Max length: 256
		 * Min length: 0
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Value?: string | null;
	}

	/** Specifies a key-value pair for a resource tag. */
	export interface TagFormProperties {

		/**
		 * A string of 1 to 128 characters that specifies the key for a tag. Tag keys must be unique for the resource to which they are attached.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * A string of 0 to 256 characters that specifies the value for a tag. Tag values can be null and don't have to be unique in a tag set.
		 * Max length: 256
		 * Min length: 0
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a specific Amazon FSx file system. */
	export interface FileSystem {

		/**
		 * An AWS account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^\d{12}$
		 */
		OwnerId?: string | null;

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime?: Date | null;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId?: string | null;

		/** The type of file system. */
		FileSystemType?: FileSystemFileSystemType | null;

		/** The lifecycle status of the file system. */
		Lifecycle?: FileSystemLifecycle | null;

		/** A structure providing details of any failures that occur when creating the file system has failed. */
		FailureDetails?: FileSystemFailureDetails;

		/**
		 * The storage capacity for your Amazon FSx file system, in gibibytes.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		StorageCapacity?: number | null;

		/** The storage type for your Amazon FSx file system. */
		StorageType?: FileSystemStorageType | null;

		/**
		 * The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide</i>.
		 * Max length: 21
		 * Min length: 12
		 * Pattern: ^(vpc-[0-9a-f]{8,})$
		 */
		VpcId?: string | null;

		/**
		 * A list of subnet IDs. Currently, you can specify only one subnet ID in a call to the <code>CreateFileSystem</code> operation.
		 * Maximum items: 50
		 */
		SubnetIds?: Array<string>;

		/**
		 * A list of network interface IDs.
		 * Maximum items: 50
		 */
		NetworkInterfaceIds?: Array<string>;

		/**
		 * The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 * Pattern: ^(fsi?-[0-9a-f]{8,}\..{4,253})$
		 */
		DNSName?: string | null;

		/**
		 * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^.{1,2048}$
		 */
		KmsKeyId?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** The configuration for this Microsoft Windows file system. */
		WindowsConfiguration?: WindowsFileSystemConfiguration;

		/** The configuration for the Amazon FSx for Lustre file system. */
		LustreConfiguration?: LustreFileSystemConfiguration;
		AdministrativeActions?: Array<AdministrativeAction>;
	}

	/** A description of a specific Amazon FSx file system. */
	export interface FileSystemFormProperties {

		/**
		 * An AWS account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^\d{12}$
		 */
		OwnerId: FormControl<string | null | undefined>,

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/** The type of file system. */
		FileSystemType: FormControl<FileSystemFileSystemType | null | undefined>,

		/** The lifecycle status of the file system. */
		Lifecycle: FormControl<FileSystemLifecycle | null | undefined>,

		/**
		 * The storage capacity for your Amazon FSx file system, in gibibytes.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		StorageCapacity: FormControl<number | null | undefined>,

		/** The storage type for your Amazon FSx file system. */
		StorageType: FormControl<FileSystemStorageType | null | undefined>,

		/**
		 * The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide</i>.
		 * Max length: 21
		 * Min length: 12
		 * Pattern: ^(vpc-[0-9a-f]{8,})$
		 */
		VpcId: FormControl<string | null | undefined>,

		/**
		 * The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 * Pattern: ^(fsi?-[0-9a-f]{8,}\..{4,253})$
		 */
		DNSName: FormControl<string | null | undefined>,

		/**
		 * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^.{1,2048}$
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemFormGroup() {
		return new FormGroup<FileSystemFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			FileSystemType: new FormControl<FileSystemFileSystemType | null | undefined>(undefined),
			Lifecycle: new FormControl<FileSystemLifecycle | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
			StorageType: new FormControl<FileSystemStorageType | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			DNSName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileSystemFileSystemType { WINDOWS = 0, LUSTRE = 1 }

	export enum FileSystemLifecycle { AVAILABLE = 0, CREATING = 1, FAILED = 2, DELETING = 3, MISCONFIGURED = 4, UPDATING = 5 }


	/** A structure providing details of any failures that occur when creating the file system has failed. */
	export interface FileSystemFailureDetails {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message?: string | null;
	}

	/** A structure providing details of any failures that occur when creating the file system has failed. */
	export interface FileSystemFailureDetailsFormProperties {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemFailureDetailsFormGroup() {
		return new FormGroup<FileSystemFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileSystemStorageType { SSD = 0, HDD = 1 }


	/** The configuration for this Microsoft Windows file system. */
	export interface WindowsFileSystemConfiguration {
		ActiveDirectoryId?: string | null;

		/** The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server instance is joined. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
		DeploymentType?: WindowsFileSystemConfigurationDeploymentType | null;

		/**
		 * The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 * Pattern: ^(fsi?-[0-9a-f]{8,}\..{4,253})$
		 */
		RemoteAdministrationEndpoint?: string | null;

		/**
		 * The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide.</i>
		 * Max length: 24
		 * Min length: 15
		 * Pattern: ^(subnet-[0-9a-f]{8,})$
		 */
		PreferredSubnetId?: string | null;
		PreferredFileServerIp?: string | null;

		/**
		 * Sustained throughput of an Amazon FSx file system in MBps.
		 * Minimum: 8
		 * Maximum: 2048
		 */
		ThroughputCapacity?: number | null;

		/**
		 * A list of maintenance operations.
		 * Maximum items: 20
		 */
		MaintenanceOperationsInProgress?: Array<FileSystemMaintenanceOperation>;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 * Pattern: ^([01]\d|2[0-3]):?([0-5]\d)$
		 */
		DailyAutomaticBackupStartTime?: string | null;

		/**
		 * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
		 * Minimum: 0
		 * Maximum: 35
		 */
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
	}

	/** The configuration for this Microsoft Windows file system. */
	export interface WindowsFileSystemConfigurationFormProperties {
		ActiveDirectoryId: FormControl<string | null | undefined>,
		DeploymentType: FormControl<WindowsFileSystemConfigurationDeploymentType | null | undefined>,

		/**
		 * The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 * Pattern: ^(fsi?-[0-9a-f]{8,}\..{4,253})$
		 */
		RemoteAdministrationEndpoint: FormControl<string | null | undefined>,

		/**
		 * The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide.</i>
		 * Max length: 24
		 * Min length: 15
		 * Pattern: ^(subnet-[0-9a-f]{8,})$
		 */
		PreferredSubnetId: FormControl<string | null | undefined>,
		PreferredFileServerIp: FormControl<string | null | undefined>,

		/**
		 * Sustained throughput of an Amazon FSx file system in MBps.
		 * Minimum: 8
		 * Maximum: 2048
		 */
		ThroughputCapacity: FormControl<number | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 * Pattern: ^([01]\d|2[0-3]):?([0-5]\d)$
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,

		/**
		 * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
		 * Minimum: 0
		 * Maximum: 35
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
	}
	export function CreateWindowsFileSystemConfigurationFormGroup() {
		return new FormGroup<WindowsFileSystemConfigurationFormProperties>({
			ActiveDirectoryId: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<WindowsFileSystemConfigurationDeploymentType | null | undefined>(undefined),
			RemoteAdministrationEndpoint: new FormControl<string | null | undefined>(undefined),
			PreferredSubnetId: new FormControl<string | null | undefined>(undefined),
			PreferredFileServerIp: new FormControl<string | null | undefined>(undefined),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined),
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server instance is joined. */
	export interface SelfManagedActiveDirectoryAttributes {
		DomainName?: string | null;
		OrganizationalUnitDistinguishedName?: string | null;
		FileSystemAdministratorsGroup?: string | null;
		UserName?: string | null;
		DnsIps?: Array<string>;
	}

	/** The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server instance is joined. */
	export interface SelfManagedActiveDirectoryAttributesFormProperties {
		DomainName: FormControl<string | null | undefined>,
		OrganizationalUnitDistinguishedName: FormControl<string | null | undefined>,
		FileSystemAdministratorsGroup: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedActiveDirectoryAttributesFormGroup() {
		return new FormGroup<SelfManagedActiveDirectoryAttributesFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
			FileSystemAdministratorsGroup: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WindowsFileSystemConfigurationDeploymentType { MULTI_AZ_1 = 0, SINGLE_AZ_1 = 1, SINGLE_AZ_2 = 2 }


	/** An enumeration specifying the currently ongoing maintenance operation. */
	export enum FileSystemMaintenanceOperation { PATCHING = 0, BACKING_UP = 1 }


	/** The configuration for the Amazon FSx for Lustre file system. */
	export interface LustreFileSystemConfiguration {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/** The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation. */
		DataRepositoryConfiguration?: DataRepositoryConfiguration;
		DeploymentType?: LustreFileSystemConfigurationDeploymentType | null;
		PerUnitStorageThroughput?: number | null;
		MountName?: string | null;
	}

	/** The configuration for the Amazon FSx for Lustre file system. */
	export interface LustreFileSystemConfigurationFormProperties {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		DeploymentType: FormControl<LustreFileSystemConfigurationDeploymentType | null | undefined>,
		PerUnitStorageThroughput: FormControl<number | null | undefined>,
		MountName: FormControl<string | null | undefined>,
	}
	export function CreateLustreFileSystemConfigurationFormGroup() {
		return new FormGroup<LustreFileSystemConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<LustreFileSystemConfigurationDeploymentType | null | undefined>(undefined),
			PerUnitStorageThroughput: new FormControl<number | null | undefined>(undefined),
			MountName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation. */
	export interface DataRepositoryConfiguration {
		ImportPath?: string | null;
		ExportPath?: string | null;
		ImportedFileChunkSize?: number | null;
	}

	/** The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation. */
	export interface DataRepositoryConfigurationFormProperties {
		ImportPath: FormControl<string | null | undefined>,
		ExportPath: FormControl<string | null | undefined>,
		ImportedFileChunkSize: FormControl<number | null | undefined>,
	}
	export function CreateDataRepositoryConfigurationFormGroup() {
		return new FormGroup<DataRepositoryConfigurationFormProperties>({
			ImportPath: new FormControl<string | null | undefined>(undefined),
			ExportPath: new FormControl<string | null | undefined>(undefined),
			ImportedFileChunkSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LustreFileSystemConfigurationDeploymentType { SCRATCH_1 = 0, SCRATCH_2 = 1, PERSISTENT_1 = 2 }


	/** Describes a specific Amazon FSx Administrative Action for the current Windows file system. */
	export interface AdministrativeAction {

		/** <p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated by the user from the Amazon FSx console, API (UpdateFileSystem), or CLI (update-file-system). A</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - Once the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity completes successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. Storage optimization is the process of migrating the file system data to the new, larger disks. You can track the storage migration progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> completes successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing Storage Capacity</a>. </p> </li> </ul> */
		AdministrativeActionType?: AdministrativeActionAdministrativeActionType | null;

		/**
		 * The current percent of progress of an asynchronous task.
		 * Minimum: 0
		 * Maximum: 100
		 */
		ProgressPercent?: number | null;
		RequestTime?: Date | null;
		Status?: AdministrativeActionStatus | null;

		/** A description of a specific Amazon FSx file system. */
		TargetFileSystemValues?: FileSystem;

		/** Provides information about a failed administrative action. */
		FailureDetails?: AdministrativeActionFailureDetails;
	}

	/** Describes a specific Amazon FSx Administrative Action for the current Windows file system. */
	export interface AdministrativeActionFormProperties {

		/** <p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated by the user from the Amazon FSx console, API (UpdateFileSystem), or CLI (update-file-system). A</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - Once the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity completes successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. Storage optimization is the process of migrating the file system data to the new, larger disks. You can track the storage migration progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> completes successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing Storage Capacity</a>. </p> </li> </ul> */
		AdministrativeActionType: FormControl<AdministrativeActionAdministrativeActionType | null | undefined>,

		/**
		 * The current percent of progress of an asynchronous task.
		 * Minimum: 0
		 * Maximum: 100
		 */
		ProgressPercent: FormControl<number | null | undefined>,
		RequestTime: FormControl<Date | null | undefined>,
		Status: FormControl<AdministrativeActionStatus | null | undefined>,
	}
	export function CreateAdministrativeActionFormGroup() {
		return new FormGroup<AdministrativeActionFormProperties>({
			AdministrativeActionType: new FormControl<AdministrativeActionAdministrativeActionType | null | undefined>(undefined),
			ProgressPercent: new FormControl<number | null | undefined>(undefined),
			RequestTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<AdministrativeActionStatus | null | undefined>(undefined),
		});

	}

	export enum AdministrativeActionAdministrativeActionType { FILE_SYSTEM_UPDATE = 0, STORAGE_OPTIMIZATION = 1 }

	export enum AdministrativeActionStatus { FAILED = 0, IN_PROGRESS = 1, PENDING = 2, COMPLETED = 3, UPDATED_OPTIMIZING = 4 }


	/** Provides information about a failed administrative action. */
	export interface AdministrativeActionFailureDetails {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message?: string | null;
	}

	/** Provides information about a failed administrative action. */
	export interface AdministrativeActionFailureDetailsFormProperties {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAdministrativeActionFailureDetailsFormGroup() {
		return new FormGroup<AdministrativeActionFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Microsoft AD attributes of the Amazon FSx for Windows File Server file system. */
	export interface ActiveDirectoryBackupAttributes {
		DomainName?: string | null;
		ActiveDirectoryId?: string | null;
	}

	/** The Microsoft AD attributes of the Amazon FSx for Windows File Server file system. */
	export interface ActiveDirectoryBackupAttributesFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ActiveDirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateActiveDirectoryBackupAttributesFormGroup() {
		return new FormGroup<ActiveDirectoryBackupAttributesFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			ActiveDirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupRequest {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}

	/** The request object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupRequestFormProperties {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupRequestFormGroup() {
		return new FormGroup<CreateBackupRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
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

	export interface BackupInProgress {
	}
	export interface BackupInProgressFormProperties {
	}
	export function CreateBackupInProgressFormGroup() {
		return new FormGroup<BackupInProgressFormProperties>({
		});

	}

	export interface IncompatibleParameterError {
	}
	export interface IncompatibleParameterErrorFormProperties {
	}
	export function CreateIncompatibleParameterErrorFormGroup() {
		return new FormGroup<IncompatibleParameterErrorFormProperties>({
		});

	}

	export interface ServiceLimitExceeded {
	}
	export interface ServiceLimitExceededFormProperties {
	}
	export function CreateServiceLimitExceededFormGroup() {
		return new FormGroup<ServiceLimitExceededFormProperties>({
		});

	}

	export interface CreateDataRepositoryTaskResponse {

		/** A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository. */
		DataRepositoryTask?: DataRepositoryTask;
	}
	export interface CreateDataRepositoryTaskResponseFormProperties {
	}
	export function CreateCreateDataRepositoryTaskResponseFormGroup() {
		return new FormGroup<CreateDataRepositoryTaskResponseFormProperties>({
		});

	}


	/** A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository. */
	export interface DataRepositoryTask {
		TaskId: string;
		Lifecycle: CancelDataRepositoryTaskResponseLifecycle;
		Type: DataRepositoryTaskType;

		/**
		 * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
		 * Required
		 */
		CreationTime: Date;
		StartTime?: Date | null;
		EndTime?: Date | null;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: string;
		Paths?: Array<string>;

		/** Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>. */
		FailureDetails?: DataRepositoryTaskFailureDetails;

		/** Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process. */
		Status?: DataRepositoryTaskStatus;

		/** Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter. */
		Report?: CompletionReport;
	}

	/** A description of the data repository task. You use data repository tasks to perform bulk transfer operations between your Amazon FSx file system and its linked data repository. */
	export interface DataRepositoryTaskFormProperties {
		TaskId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<CancelDataRepositoryTaskResponseLifecycle | null | undefined>,
		Type: FormControl<DataRepositoryTaskType | null | undefined>,

		/**
		 * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
		 * Required
		 */
		CreationTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateDataRepositoryTaskFormGroup() {
		return new FormGroup<DataRepositoryTaskFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<CancelDataRepositoryTaskResponseLifecycle | null | undefined>(undefined),
			Type: new FormControl<DataRepositoryTaskType | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataRepositoryTaskType { EXPORT_TO_REPOSITORY = 0 }


	/** Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>. */
	export interface DataRepositoryTaskFailureDetails {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message?: string | null;
	}

	/** Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>. */
	export interface DataRepositoryTaskFailureDetailsFormProperties {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDataRepositoryTaskFailureDetailsFormGroup() {
		return new FormGroup<DataRepositoryTaskFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process. */
	export interface DataRepositoryTaskStatus {
		TotalCount?: number | null;
		SucceededCount?: number | null;
		FailedCount?: number | null;
		LastUpdatedTime?: Date | null;
	}

	/** Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process. */
	export interface DataRepositoryTaskStatusFormProperties {
		TotalCount: FormControl<number | null | undefined>,
		SucceededCount: FormControl<number | null | undefined>,
		FailedCount: FormControl<number | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDataRepositoryTaskStatusFormGroup() {
		return new FormGroup<DataRepositoryTaskStatusFormProperties>({
			TotalCount: new FormControl<number | null | undefined>(undefined),
			SucceededCount: new FormControl<number | null | undefined>(undefined),
			FailedCount: new FormControl<number | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter. */
	export interface CompletionReport {
		Enabled: boolean;
		Path?: string | null;
		Format?: CompletionReportFormat | null;
		Scope?: CompletionReportScope | null;
	}

	/** Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter. */
	export interface CompletionReportFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Format: FormControl<CompletionReportFormat | null | undefined>,
		Scope: FormControl<CompletionReportScope | null | undefined>,
	}
	export function CreateCompletionReportFormGroup() {
		return new FormGroup<CompletionReportFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<CompletionReportFormat | null | undefined>(undefined),
			Scope: new FormControl<CompletionReportScope | null | undefined>(undefined),
		});

	}

	export enum CompletionReportFormat { REPORT_CSV_20191124 = 0 }

	export enum CompletionReportScope { FAILED_FILES_ONLY = 0 }

	export interface CreateDataRepositoryTaskRequest {
		Type: DataRepositoryTaskType;
		Paths?: Array<string>;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: string;

		/**
		 * Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.
		 * Required
		 */
		Report: CompletionReport;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDataRepositoryTaskRequestFormProperties {
		Type: FormControl<DataRepositoryTaskType | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataRepositoryTaskRequestFormGroup() {
		return new FormGroup<CreateDataRepositoryTaskRequestFormProperties>({
			Type: new FormControl<DataRepositoryTaskType | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataRepositoryTaskExecuting {
	}
	export interface DataRepositoryTaskExecutingFormProperties {
	}
	export function CreateDataRepositoryTaskExecutingFormGroup() {
		return new FormGroup<DataRepositoryTaskExecutingFormProperties>({
		});

	}


	/** The response object returned after the file system is created. */
	export interface CreateFileSystemResponse {

		/** A description of a specific Amazon FSx file system. */
		FileSystem?: FileSystem;
	}

	/** The response object returned after the file system is created. */
	export interface CreateFileSystemResponseFormProperties {
	}
	export function CreateCreateFileSystemResponseFormGroup() {
		return new FormGroup<CreateFileSystemResponseFormProperties>({
		});

	}


	/** The request object used to create a new Amazon FSx file system. */
	export interface CreateFileSystemRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken?: string | null;

		/**
		 * The type of file system.
		 * Required
		 */
		FileSystemType: FileSystemFileSystemType;

		/**
		 * The storage capacity for your Amazon FSx file system, in gibibytes.
		 * Required
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		StorageCapacity: number;

		/** The storage type for your Amazon FSx file system. */
		StorageType?: FileSystemStorageType | null;

		/**
		 * A list of subnet IDs. Currently, you can specify only one subnet ID in a call to the <code>CreateFileSystem</code> operation.
		 * Required
		 * Maximum items: 50
		 */
		SubnetIds: Array<string>;

		/**
		 * A list of security group IDs.
		 * Maximum items: 50
		 */
		SecurityGroupIds?: Array<string>;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^.{1,2048}$
		 */
		KmsKeyId?: string | null;

		/** The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations. */
		WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

		/** The Lustre configuration for the file system being created. */
		LustreConfiguration?: CreateFileSystemLustreConfiguration;
	}

	/** The request object used to create a new Amazon FSx file system. */
	export interface CreateFileSystemRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The type of file system.
		 * Required
		 */
		FileSystemType: FormControl<FileSystemFileSystemType | null | undefined>,

		/**
		 * The storage capacity for your Amazon FSx file system, in gibibytes.
		 * Required
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		StorageCapacity: FormControl<number | null | undefined>,

		/** The storage type for your Amazon FSx file system. */
		StorageType: FormControl<FileSystemStorageType | null | undefined>,

		/**
		 * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. In either case, if not specified, the Amazon FSx managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^.{1,2048}$
		 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileSystemRequestFormGroup() {
		return new FormGroup<CreateFileSystemRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			FileSystemType: new FormControl<FileSystemFileSystemType | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
			StorageType: new FormControl<FileSystemStorageType | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations. */
	export interface CreateFileSystemWindowsConfiguration {
		ActiveDirectoryId?: string | null;

		/** The configuration that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
		DeploymentType?: WindowsFileSystemConfigurationDeploymentType | null;

		/**
		 * The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide.</i>
		 * Max length: 24
		 * Min length: 15
		 * Pattern: ^(subnet-[0-9a-f]{8,})$
		 */
		PreferredSubnetId?: string | null;

		/**
		 * Sustained throughput of an Amazon FSx file system in MBps.
		 * Required
		 * Minimum: 8
		 * Maximum: 2048
		 */
		ThroughputCapacity: number;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 * Pattern: ^([01]\d|2[0-3]):?([0-5]\d)$
		 */
		DailyAutomaticBackupStartTime?: string | null;

		/**
		 * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
		 * Minimum: 0
		 * Maximum: 35
		 */
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
	}

	/** The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations. */
	export interface CreateFileSystemWindowsConfigurationFormProperties {
		ActiveDirectoryId: FormControl<string | null | undefined>,
		DeploymentType: FormControl<WindowsFileSystemConfigurationDeploymentType | null | undefined>,

		/**
		 * The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide.</i>
		 * Max length: 24
		 * Min length: 15
		 * Pattern: ^(subnet-[0-9a-f]{8,})$
		 */
		PreferredSubnetId: FormControl<string | null | undefined>,

		/**
		 * Sustained throughput of an Amazon FSx file system in MBps.
		 * Required
		 * Minimum: 8
		 * Maximum: 2048
		 */
		ThroughputCapacity: FormControl<number | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 * Pattern: ^([01]\d|2[0-3]):?([0-5]\d)$
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,

		/**
		 * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
		 * Minimum: 0
		 * Maximum: 35
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateFileSystemWindowsConfigurationFormGroup() {
		return new FormGroup<CreateFileSystemWindowsConfigurationFormProperties>({
			ActiveDirectoryId: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<WindowsFileSystemConfigurationDeploymentType | null | undefined>(undefined),
			PreferredSubnetId: new FormControl<string | null | undefined>(undefined),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined),
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. */
	export interface SelfManagedActiveDirectoryConfiguration {
		DomainName: string;
		OrganizationalUnitDistinguishedName?: string | null;
		FileSystemAdministratorsGroup?: string | null;
		UserName: string;
		Password: string;
		DnsIps: Array<string>;
	}

	/** The configuration that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. */
	export interface SelfManagedActiveDirectoryConfigurationFormProperties {
		DomainName: FormControl<string | null | undefined>,
		OrganizationalUnitDistinguishedName: FormControl<string | null | undefined>,
		FileSystemAdministratorsGroup: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedActiveDirectoryConfigurationFormGroup() {
		return new FormGroup<SelfManagedActiveDirectoryConfigurationFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
			FileSystemAdministratorsGroup: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Lustre configuration for the file system being created.  */
	export interface CreateFileSystemLustreConfiguration {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime?: string | null;
		ImportPath?: string | null;
		ExportPath?: string | null;
		ImportedFileChunkSize?: number | null;
		DeploymentType?: LustreFileSystemConfigurationDeploymentType | null;
		PerUnitStorageThroughput?: number | null;
	}

	/** The Lustre configuration for the file system being created.  */
	export interface CreateFileSystemLustreConfigurationFormProperties {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		ImportPath: FormControl<string | null | undefined>,
		ExportPath: FormControl<string | null | undefined>,
		ImportedFileChunkSize: FormControl<number | null | undefined>,
		DeploymentType: FormControl<LustreFileSystemConfigurationDeploymentType | null | undefined>,
		PerUnitStorageThroughput: FormControl<number | null | undefined>,
	}
	export function CreateCreateFileSystemLustreConfigurationFormGroup() {
		return new FormGroup<CreateFileSystemLustreConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			ImportPath: new FormControl<string | null | undefined>(undefined),
			ExportPath: new FormControl<string | null | undefined>(undefined),
			ImportedFileChunkSize: new FormControl<number | null | undefined>(undefined),
			DeploymentType: new FormControl<LustreFileSystemConfigurationDeploymentType | null | undefined>(undefined),
			PerUnitStorageThroughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActiveDirectoryError {
	}
	export interface ActiveDirectoryErrorFormProperties {
	}
	export function CreateActiveDirectoryErrorFormGroup() {
		return new FormGroup<ActiveDirectoryErrorFormProperties>({
		});

	}

	export interface InvalidImportPath {
	}
	export interface InvalidImportPathFormProperties {
	}
	export function CreateInvalidImportPathFormGroup() {
		return new FormGroup<InvalidImportPathFormProperties>({
		});

	}

	export interface InvalidExportPath {
	}
	export interface InvalidExportPathFormProperties {
	}
	export function CreateInvalidExportPathFormGroup() {
		return new FormGroup<InvalidExportPathFormProperties>({
		});

	}

	export interface InvalidNetworkSettings {
	}
	export interface InvalidNetworkSettingsFormProperties {
	}
	export function CreateInvalidNetworkSettingsFormGroup() {
		return new FormGroup<InvalidNetworkSettingsFormProperties>({
		});

	}

	export interface InvalidPerUnitStorageThroughput {
	}
	export interface InvalidPerUnitStorageThroughputFormProperties {
	}
	export function CreateInvalidPerUnitStorageThroughputFormGroup() {
		return new FormGroup<InvalidPerUnitStorageThroughputFormProperties>({
		});

	}

	export interface MissingFileSystemConfiguration {
	}
	export interface MissingFileSystemConfigurationFormProperties {
	}
	export function CreateMissingFileSystemConfigurationFormGroup() {
		return new FormGroup<MissingFileSystemConfigurationFormProperties>({
		});

	}


	/** The response object for the <code>CreateFileSystemFromBackup</code> operation. */
	export interface CreateFileSystemFromBackupResponse {

		/** A description of a specific Amazon FSx file system. */
		FileSystem?: FileSystem;
	}

	/** The response object for the <code>CreateFileSystemFromBackup</code> operation. */
	export interface CreateFileSystemFromBackupResponseFormProperties {
	}
	export function CreateCreateFileSystemFromBackupResponseFormGroup() {
		return new FormGroup<CreateFileSystemFromBackupResponseFormProperties>({
		});

	}


	/** The request object for the <code>CreateFileSystemFromBackup</code> operation. */
	export interface CreateFileSystemFromBackupRequest {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken?: string | null;

		/**
		 * A list of subnet IDs. Currently, you can specify only one subnet ID in a call to the <code>CreateFileSystem</code> operation.
		 * Required
		 * Maximum items: 50
		 */
		SubnetIds: Array<string>;

		/**
		 * A list of security group IDs.
		 * Maximum items: 50
		 */
		SecurityGroupIds?: Array<string>;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations. */
		WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

		/** The storage type for your Amazon FSx file system. */
		StorageType?: FileSystemStorageType | null;
	}

	/** The request object for the <code>CreateFileSystemFromBackup</code> operation. */
	export interface CreateFileSystemFromBackupRequestFormProperties {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** The storage type for your Amazon FSx file system. */
		StorageType: FormControl<FileSystemStorageType | null | undefined>,
	}
	export function CreateCreateFileSystemFromBackupRequestFormGroup() {
		return new FormGroup<CreateFileSystemFromBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<FileSystemStorageType | null | undefined>(undefined),
		});

	}

	export interface BackupNotFound {
	}
	export interface BackupNotFoundFormProperties {
	}
	export function CreateBackupNotFoundFormGroup() {
		return new FormGroup<BackupNotFoundFormProperties>({
		});

	}


	/** The response object for <code>DeleteBackup</code> operation. */
	export interface DeleteBackupResponse {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId?: string | null;

		/** The lifecycle status of the backup. */
		Lifecycle?: BackupLifecycle | null;
	}

	/** The response object for <code>DeleteBackup</code> operation. */
	export interface DeleteBackupResponseFormProperties {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId: FormControl<string | null | undefined>,

		/** The lifecycle status of the backup. */
		Lifecycle: FormControl<BackupLifecycle | null | undefined>,
	}
	export function CreateDeleteBackupResponseFormGroup() {
		return new FormGroup<DeleteBackupResponseFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<BackupLifecycle | null | undefined>(undefined),
		});

	}


	/** The request object for <code>DeleteBackup</code> operation. */
	export interface DeleteBackupRequest {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken?: string | null;
	}

	/** The request object for <code>DeleteBackup</code> operation. */
	export interface DeleteBackupRequestFormProperties {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		BackupId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupRequestFormGroup() {
		return new FormGroup<DeleteBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BackupRestoring {
	}
	export interface BackupRestoringFormProperties {
	}
	export function CreateBackupRestoringFormGroup() {
		return new FormGroup<BackupRestoringFormProperties>({
		});

	}


	/** The response object for the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemResponse {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId?: string | null;

		/** The lifecycle status of the file system. */
		Lifecycle?: FileSystemLifecycle | null;

		/** The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
		WindowsResponse?: DeleteFileSystemWindowsResponse;
	}

	/** The response object for the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemResponseFormProperties {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/** The lifecycle status of the file system. */
		Lifecycle: FormControl<FileSystemLifecycle | null | undefined>,
	}
	export function CreateDeleteFileSystemResponseFormGroup() {
		return new FormGroup<DeleteFileSystemResponseFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<FileSystemLifecycle | null | undefined>(undefined),
		});

	}


	/** The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemWindowsResponse {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		FinalBackupId?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		FinalBackupTags?: Array<Tag>;
	}

	/** The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemWindowsResponseFormProperties {

		/**
		 * The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.
		 * Max length: 128
		 * Min length: 12
		 * Pattern: ^(backup-[0-9a-f]{8,})$
		 */
		FinalBackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileSystemWindowsResponseFormGroup() {
		return new FormGroup<DeleteFileSystemWindowsResponseFormProperties>({
			FinalBackupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemRequest {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken?: string | null;

		/** The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
		WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;
	}

	/** The request object for <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemRequestFormProperties {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileSystemRequestFormGroup() {
		return new FormGroup<DeleteFileSystemRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemWindowsConfiguration {
		SkipFinalBackup?: boolean | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		FinalBackupTags?: Array<Tag>;
	}

	/** The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemWindowsConfigurationFormProperties {
		SkipFinalBackup: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteFileSystemWindowsConfigurationFormGroup() {
		return new FormGroup<DeleteFileSystemWindowsConfigurationFormProperties>({
			SkipFinalBackup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response object for <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsResponse {

		/**
		 * A list of backups.
		 * Maximum items: 50
		 */
		Backups?: Array<Backup>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}

	/** Response object for <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupsResponseFormGroup() {
		return new FormGroup<DescribeBackupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsRequest {

		/**
		 * A list of backup IDs.
		 * Maximum items: 50
		 */
		BackupIds?: Array<string>;

		/**
		 * A list of <code>Filter</code> elements.
		 * Maximum items: 10
		 */
		Filters?: Array<Filter>;

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults?: number | null;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}

	/** The request object for <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsRequestFormProperties {

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupsRequestFormGroup() {
		return new FormGroup<DescribeBackupsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements. */
	export interface Filter {

		/** The name for a filter. */
		Name?: FilterName | null;

		/**
		 * A list of filter values.
		 * Maximum items: 20
		 */
		Values?: Array<string>;
	}

	/** A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements. */
	export interface FilterFormProperties {

		/** The name for a filter. */
		Name: FormControl<FilterName | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<FilterName | null | undefined>(undefined),
		});

	}

	export enum FilterName { file_system_id = 0, backup_type = 1 }

	export interface DescribeDataRepositoryTasksResponse {
		DataRepositoryTasks?: Array<DataRepositoryTask>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}
	export interface DescribeDataRepositoryTasksResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataRepositoryTasksResponseFormGroup() {
		return new FormGroup<DescribeDataRepositoryTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDataRepositoryTasksRequest {
		TaskIds?: Array<string>;
		Filters?: Array<DataRepositoryTaskFilter>;

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults?: number | null;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}
	export interface DescribeDataRepositoryTasksRequestFormProperties {

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataRepositoryTasksRequestFormGroup() {
		return new FormGroup<DescribeDataRepositoryTasksRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter. */
	export interface DataRepositoryTaskFilter {
		Name?: DataRepositoryTaskFilterName | null;
		Values?: Array<string>;
	}

	/** (Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter. */
	export interface DataRepositoryTaskFilterFormProperties {
		Name: FormControl<DataRepositoryTaskFilterName | null | undefined>,
	}
	export function CreateDataRepositoryTaskFilterFormGroup() {
		return new FormGroup<DataRepositoryTaskFilterFormProperties>({
			Name: new FormControl<DataRepositoryTaskFilterName | null | undefined>(undefined),
		});

	}

	export enum DataRepositoryTaskFilterName { file_system_id = 0, task_lifecycle = 1 }


	/** The response object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsResponse {

		/**
		 * A list of file systems.
		 * Maximum items: 50
		 */
		FileSystems?: Array<FileSystem>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}

	/** The response object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileSystemsResponseFormGroup() {
		return new FormGroup<DescribeFileSystemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsRequest {

		/**
		 * A list of <code>FileSystemId</code>s.
		 * Maximum items: 50
		 */
		FileSystemIds?: Array<string>;

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults?: number | null;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}

	/** The request object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsRequestFormProperties {

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileSystemsRequestFormGroup() {
		return new FormGroup<DescribeFileSystemsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceResponse {

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}

	/** The response object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceRequest {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: string;

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults?: number | null;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken?: string | null;
	}

	/** The request object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * The maximum number of resources to return in the response. This value must be an integer greater than zero.
		 * Minimum: 1
		 * Maximum: 2147483647
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFound {
	}
	export interface ResourceNotFoundFormProperties {
	}
	export function CreateResourceNotFoundFormGroup() {
		return new FormGroup<ResourceNotFoundFormProperties>({
		});

	}

	export interface NotServiceResourceError {
	}
	export interface NotServiceResourceErrorFormProperties {
	}
	export function CreateNotServiceResourceErrorFormGroup() {
		return new FormGroup<NotServiceResourceErrorFormProperties>({
		});

	}

	export interface ResourceDoesNotSupportTagging {
	}
	export interface ResourceDoesNotSupportTaggingFormProperties {
	}
	export function CreateResourceDoesNotSupportTaggingFormGroup() {
		return new FormGroup<ResourceDoesNotSupportTaggingFormProperties>({
		});

	}


	/** The response object for the <code>TagResource</code> operation. */
	export interface TagResourceResponse {
	}

	/** The response object for the <code>TagResource</code> operation. */
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/** The request object for the <code>TagResource</code> operation. */
	export interface TagResourceRequest {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: string;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}

	/** The request object for the <code>TagResource</code> operation. */
	export interface TagResourceRequestFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object for <code>UntagResource</code> action. */
	export interface UntagResourceResponse {
	}

	/** The response object for <code>UntagResource</code> action. */
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}


	/** The request object for <code>UntagResource</code> action. */
	export interface UntagResourceRequest {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: string;

		/**
		 * A list of <code>TagKey</code> values, with a maximum of 50 elements.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}

	/** The request object for <code>UntagResource</code> action. */
	export interface UntagResourceRequestFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 * Pattern: ^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object for the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemResponse {

		/** A description of a specific Amazon FSx file system. */
		FileSystem?: FileSystem;
	}

	/** The response object for the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemResponseFormProperties {
	}
	export function CreateUpdateFileSystemResponseFormGroup() {
		return new FormGroup<UpdateFileSystemResponseFormProperties>({
		});

	}


	/** The request object for the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemRequest {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken?: string | null;

		/**
		 * The storage capacity for your Amazon FSx file system, in gibibytes.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		StorageCapacity?: number | null;

		/** Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request. */
		WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;

		/** The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation. */
		LustreConfiguration?: UpdateFileSystemLustreConfiguration;
	}

	/** The request object for the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemRequestFormProperties {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 * Pattern: ^(fs-[0-9a-f]{8,})$
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [A-za-z0-9_.-]{0,63}$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The storage capacity for your Amazon FSx file system, in gibibytes.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		StorageCapacity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemRequestFormGroup() {
		return new FormGroup<UpdateFileSystemRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request. */
	export interface UpdateFileSystemWindowsConfiguration {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 * Pattern: ^([01]\d|2[0-3]):?([0-5]\d)$
		 */
		DailyAutomaticBackupStartTime?: string | null;

		/**
		 * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
		 * Minimum: 0
		 * Maximum: 35
		 */
		AutomaticBackupRetentionDays?: number | null;

		/**
		 * Sustained throughput of an Amazon FSx file system in MBps.
		 * Minimum: 8
		 * Maximum: 2048
		 */
		ThroughputCapacity?: number | null;

		/** The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
	}

	/** Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request. */
	export interface UpdateFileSystemWindowsConfigurationFormProperties {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 * Pattern: ^([01]\d|2[0-3]):?([0-5]\d)$
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,

		/**
		 * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
		 * Minimum: 0
		 * Maximum: 35
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,

		/**
		 * Sustained throughput of an Amazon FSx file system in MBps.
		 * Minimum: 8
		 * Maximum: 2048
		 */
		ThroughputCapacity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemWindowsConfigurationFormGroup() {
		return new FormGroup<UpdateFileSystemWindowsConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined),
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory. */
	export interface SelfManagedActiveDirectoryConfigurationUpdates {
		UserName?: string | null;
		Password?: string | null;
		DnsIps?: Array<string>;
	}

	/** The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory. */
	export interface SelfManagedActiveDirectoryConfigurationUpdatesFormProperties {
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedActiveDirectoryConfigurationUpdatesFormGroup() {
		return new FormGroup<SelfManagedActiveDirectoryConfigurationUpdatesFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemLustreConfiguration {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime?: string | null;
	}

	/** The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemLustreConfigurationFormProperties {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 * Pattern: ^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFileSystemLustreConfigurationFormGroup() {
		return new FormGroup<UpdateFileSystemLustreConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated by the user from the Amazon FSx console, API (UpdateFileSystem), or CLI (update-file-system). A</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - Once the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity completes successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. Storage optimization is the process of migrating the file system data to the new, larger disks. You can track the storage migration progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> completes successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing Storage Capacity</a>. </p> </li> </ul> */
	export enum AdministrativeActionType { FILE_SYSTEM_UPDATE = 0, STORAGE_OPTIMIZATION = 1 }

	export enum Status { FAILED = 0, IN_PROGRESS = 1, PENDING = 2, COMPLETED = 3, UPDATED_OPTIMIZING = 4 }

	export enum DataRepositoryTaskLifecycle { PENDING = 0, EXECUTING = 1, FAILED = 2, SUCCEEDED = 3, CANCELED = 4, CANCELING = 5 }

	export enum ReportFormat { REPORT_CSV_20191124 = 0 }

	export enum ReportScope { FAILED_FILES_ONLY = 0 }


	/** The storage type for your Amazon FSx file system. */
	export enum StorageType { SSD = 0, HDD = 1 }

	export enum LustreDeploymentType { SCRATCH_1 = 0, SCRATCH_2 = 1, PERSISTENT_1 = 2 }


	/** The type of file system. */
	export enum FileSystemType { WINDOWS = 0, LUSTRE = 1 }

	export enum WindowsDeploymentType { MULTI_AZ_1 = 0, SINGLE_AZ_1 = 1, SINGLE_AZ_2 = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask
		 * @return {CancelDataRepositoryTaskResponse} Success
		 */
		CancelDataRepositoryTask(requestBody: CancelDataRepositoryTaskRequest): Observable<CancelDataRepositoryTaskResponse> {
			return this.http.post<CancelDataRepositoryTaskResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a backup of an existing Amazon FSx for Windows File Server file system. Creating regular backups for your file system is a best practice that complements the replication that Amazon FSx for Windows File Server performs for your file system. It also enables you to restore from user modification of data.</p> <p>If a backup with the specified client request token exists, and the parameters match, this operation returns the description of the existing backup. If a backup specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateFileSystem</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the file system creation status by calling the <a>DescribeBackups</a> operation, which returns the backup state along with other information.</p> <note> <p/> </note>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup
		 * @return {CreateBackupResponse} Success
		 */
		CreateBackup(requestBody: CreateBackupRequest): Observable<CreateBackupResponse> {
			return this.http.post<CreateBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repository. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Using Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/export-data-repository.html#export-prefix">Setting the Export Prefix</a>.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask
		 * @return {CreateDataRepositoryTaskResponse} Success
		 */
		CreateDataRepositoryTask(requestBody: CreateDataRepositoryTaskRequest): Observable<CreateDataRepositoryTaskResponse> {
			return this.http.post<CreateDataRepositoryTaskResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new, empty Amazon FSx file system.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a>DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem
		 * @return {CreateFileSystemResponse} Success
		 */
		CreateFileSystem(requestBody: CreateFileSystemRequest): Observable<CreateFileSystemResponse> {
			return this.http.post<CreateFileSystemResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon FSx file system from an existing Amazon FSx for Windows File Server backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a client request token specified by the file system exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a>DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup
		 * @return {CreateFileSystemFromBackupResponse} Success
		 */
		CreateFileSystemFromBackup(requestBody: CreateFileSystemFromBackupRequest): Observable<CreateFileSystemFromBackupResponse> {
			return this.http.post<CreateFileSystemFromBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon FSx for Windows File Server backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup will not show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup
		 * @return {DeleteBackupResponse} Success
		 */
		DeleteBackup(requestBody: DeleteBackupRequest): Observable<DeleteBackupResponse> {
			return this.http.post<DeleteBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a file system, deleting its contents. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups will also be deleted.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup is not subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> action returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> action, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <a>DescribeFileSystems</a> returns a <code>FileSystemNotFound</code> error.</p> <note> <p>Deleting an Amazon FSx for Lustre file system will fail with a 400 BadRequest if a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state.</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem
		 * @return {DeleteFileSystemResponse} Success
		 */
		DeleteFileSystem(requestBody: DeleteFileSystemRequest): Observable<DeleteFileSystemResponse> {
			return this.http.post<DeleteFileSystemResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of specific Amazon FSx for Windows File Server backups, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of backups returned in the response of one <code>DescribeBackups</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBackupsResponse} Success
		 */
		DescribeBackups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBackupsRequest): Observable<DescribeBackupsResponse> {
			return this.http.post<DescribeBackupsResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of specific Amazon FSx for Lustre data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your AWS account in the AWS Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDataRepositoryTasksResponse} Success
		 */
		DescribeDataRepositoryTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeDataRepositoryTasksRequest): Observable<DescribeDataRepositoryTasksResponse> {
			return this.http.post<DescribeDataRepositoryTasksResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFileSystemsResponse} Success
		 */
		DescribeFileSystems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFileSystemsRequest): Observable<DescribeFileSystemsResponse> {
			return this.http.post<DescribeFileSystemsResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for Windows File Server.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tags an Amazon FSx resource.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action removes a tag from an Amazon FSx resource.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Use this operation to update the configuration of an existing Amazon FSx file system. For an Amazon FSx for Lustre file system, you can update only the WeeklyMaintenanceStartTime. For an Amazon for Windows File Server file system, you can update the following properties:</p> <ul> <li> <p>AutomaticBackupRetentionDays</p> </li> <li> <p>DailyAutomaticBackupStartTime</p> </li> <li> <p>SelfManagedActiveDirectoryConfiguration</p> </li> <li> <p>StorageCapacity</p> </li> <li> <p>ThroughputCapacity</p> </li> <li> <p>WeeklyMaintenanceStartTime</p> </li> </ul> <p>You can update multiple properties in a single request.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem
		 * @return {UpdateFileSystemResponse} Success
		 */
		UpdateFileSystem(requestBody: UpdateFileSystemRequest): Observable<UpdateFileSystemResponse> {
			return this.http.post<UpdateFileSystemResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelDataRepositoryTaskX_Amz_Target { AWSSimbaAPIService_v20180301_CancelDataRepositoryTask = 0 }

	export enum CreateBackupX_Amz_Target { AWSSimbaAPIService_v20180301_CreateBackup = 0 }

	export enum CreateDataRepositoryTaskX_Amz_Target { AWSSimbaAPIService_v20180301_CreateDataRepositoryTask = 0 }

	export enum CreateFileSystemX_Amz_Target { AWSSimbaAPIService_v20180301_CreateFileSystem = 0 }

	export enum CreateFileSystemFromBackupX_Amz_Target { AWSSimbaAPIService_v20180301_CreateFileSystemFromBackup = 0 }

	export enum DeleteBackupX_Amz_Target { AWSSimbaAPIService_v20180301_DeleteBackup = 0 }

	export enum DeleteFileSystemX_Amz_Target { AWSSimbaAPIService_v20180301_DeleteFileSystem = 0 }

	export enum DescribeBackupsX_Amz_Target { AWSSimbaAPIService_v20180301_DescribeBackups = 0 }

	export enum DescribeDataRepositoryTasksX_Amz_Target { AWSSimbaAPIService_v20180301_DescribeDataRepositoryTasks = 0 }

	export enum DescribeFileSystemsX_Amz_Target { AWSSimbaAPIService_v20180301_DescribeFileSystems = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSSimbaAPIService_v20180301_ListTagsForResource = 0 }

	export enum TagResourceX_Amz_Target { AWSSimbaAPIService_v20180301_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSSimbaAPIService_v20180301_UntagResource = 0 }

	export enum UpdateFileSystemX_Amz_Target { AWSSimbaAPIService_v20180301_UpdateFileSystem = 0 }

}

