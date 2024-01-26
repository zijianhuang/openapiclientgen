import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>.  */
	export interface AssociateFileSystemAliasesResponse {
		Aliases?: Array<Alias>;
	}

	/** The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>.  */
	export interface AssociateFileSystemAliasesResponseFormProperties {
	}
	export function CreateAssociateFileSystemAliasesResponseFormGroup() {
		return new FormGroup<AssociateFileSystemAliasesResponseFormProperties>({
		});

	}


	/** A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>. */
	export interface Alias {
		Name?: string;
		Lifecycle?: AliasLifecycle;
	}

	/** A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>. */
	export interface AliasFormProperties {
		Name: FormControl<string | null | undefined>,
		Lifecycle: FormControl<AliasLifecycle | null | undefined>,
	}
	export function CreateAliasFormGroup() {
		return new FormGroup<AliasFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<AliasLifecycle | null | undefined>(undefined),
		});

	}

	export enum AliasLifecycle { AVAILABLE = 0, CREATING = 1, DELETING = 2, CREATE_FAILED = 3, DELETE_FAILED = 4 }


	/** The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system. */
	export interface AssociateFileSystemAliasesRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		FileSystemId: string;

		/** Required */
		Aliases: Array<string>;
	}

	/** The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system. */
	export interface AssociateFileSystemAliasesRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFileSystemAliasesRequestFormGroup() {
		return new FormGroup<AssociateFileSystemAliasesRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface FileSystemNotFound {
	}
	export interface FileSystemNotFoundFormProperties {
	}
	export function CreateFileSystemNotFoundFormGroup() {
		return new FormGroup<FileSystemNotFoundFormProperties>({
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

	export interface CancelDataRepositoryTaskResponse {
		Lifecycle?: DataRepositoryTaskLifecycle;
		TaskId?: string;
	}
	export interface CancelDataRepositoryTaskResponseFormProperties {
		Lifecycle: FormControl<DataRepositoryTaskLifecycle | null | undefined>,
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDataRepositoryTaskResponseFormGroup() {
		return new FormGroup<CancelDataRepositoryTaskResponseFormProperties>({
			Lifecycle: new FormControl<DataRepositoryTaskLifecycle | null | undefined>(undefined),
			TaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataRepositoryTaskLifecycle { PENDING = 0, EXECUTING = 1, FAILED = 2, SUCCEEDED = 3, CANCELED = 4, CANCELING = 5 }


	/** Cancels a data repository task. */
	export interface CancelDataRepositoryTaskRequest {

		/** Required */
		TaskId: string;
	}

	/** Cancels a data repository task. */
	export interface CancelDataRepositoryTaskRequestFormProperties {

		/** Required */
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDataRepositoryTaskRequestFormGroup() {
		return new FormGroup<CancelDataRepositoryTaskRequestFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CopyBackupResponse {

		/** A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. */
		Backup?: Backup;
	}
	export interface CopyBackupResponseFormProperties {
	}
	export function CreateCopyBackupResponseFormGroup() {
		return new FormGroup<CopyBackupResponseFormProperties>({
		});

	}


	/** A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. */
	export interface Backup {

		/** Required */
		BackupId: string;

		/** Required */
		Lifecycle: BackupLifecycle;
		FailureDetails?: BackupFailureDetails;

		/** Required */
		Type: BackupType;

		/**
		 * Displays the current percent of progress of an asynchronous task.
		 * Minimum: 0
		 * Maximum: 100
		 */
		ProgressPercent?: number | null;

		/** Required */
		CreationTime: Date;
		KmsKeyId?: string;
		ResourceARN?: string;
		Tags?: Array<Tag>;

		/** Required */
		FileSystem: FileSystem;
		DirectoryInformation?: ActiveDirectoryBackupAttributes;

		/**
		 * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId?: string | null;

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Max length: 128
		 * Min length: 12
		 */
		SourceBackupId?: string | null;
		SourceBackupRegion?: string;
		ResourceType?: ResourceType;

		/** Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume. */
		Volume?: Volume;
	}

	/** A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. */
	export interface BackupFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,

		/** Required */
		Lifecycle: FormControl<BackupLifecycle | null | undefined>,

		/** Required */
		Type: FormControl<BackupType | null | undefined>,

		/**
		 * Displays the current percent of progress of an asynchronous task.
		 * Minimum: 0
		 * Maximum: 100
		 */
		ProgressPercent: FormControl<number | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Max length: 128
		 * Min length: 12
		 */
		SourceBackupId: FormControl<string | null | undefined>,
		SourceBackupRegion: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Lifecycle: new FormControl<BackupLifecycle | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<BackupType | null | undefined>(undefined, [Validators.required]),
			ProgressPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
			SourceBackupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(128), Validators.pattern('^(backup-[0-9a-f]{8,})$')]),
			SourceBackupRegion: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}


	/** <p>The lifecycle status of the backup.</p> <ul> <li> <p> <code>AVAILABLE</code> - The backup is fully available.</p> </li> <li> <p> <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new user-initiated backup.</p> </li> <li> <p> <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is backing up the file system.</p> </li> <li> <p> <code>COPYING</code> - Amazon FSx is copying the backup.</p> </li> <li> <p> <code>DELETED</code> - Amazon FSx deleted the backup and it's no longer available.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx couldn't finish the backup.</p> </li> </ul> */
	export enum BackupLifecycle { AVAILABLE = 0, CREATING = 1, TRANSFERRING = 2, DELETED = 3, FAILED = 4, PENDING = 5, COPYING = 6 }


	/** If backup creation fails, this structure contains the details of that failure. */
	export interface BackupFailureDetails {
		Message?: string;
	}

	/** If backup creation fails, this structure contains the details of that failure. */
	export interface BackupFailureDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBackupFailureDetailsFormGroup() {
		return new FormGroup<BackupFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of the backup. */
	export enum BackupType { AUTOMATIC = 0, USER_INITIATED = 1, AWS_BACKUP = 2 }


	/** Specifies a key-value pair for a resource tag. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Specifies a key-value pair for a resource tag. */
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


	/** A description of a specific Amazon FSx file system. */
	export interface FileSystem {
		OwnerId?: string;
		CreationTime?: Date;
		FileSystemId?: string;
		FileSystemType?: FileSystemType;
		Lifecycle?: FileSystemLifecycle;

		/** A structure providing details of any failures that occurred. */
		FailureDetails?: FileSystemFailureDetails;
		StorageCapacity?: number | null;
		StorageType?: StorageType;
		VpcId?: string;
		SubnetIds?: Array<string>;
		NetworkInterfaceIds?: Array<string>;
		DNSName?: string;
		KmsKeyId?: string;
		ResourceARN?: string;
		Tags?: Array<Tag>;
		WindowsConfiguration?: WindowsFileSystemConfiguration;

		/** The configuration for the Amazon FSx for Lustre file system. */
		LustreConfiguration?: LustreFileSystemConfiguration;
		AdministrativeActions?: Array<AdministrativeAction>;
		OntapConfiguration?: OntapFileSystemConfiguration;
		FileSystemTypeVersion?: string;
		OpenZFSConfiguration?: OpenZFSFileSystemConfiguration;
	}

	/** A description of a specific Amazon FSx file system. */
	export interface FileSystemFormProperties {
		OwnerId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		FileSystemId: FormControl<string | null | undefined>,
		FileSystemType: FormControl<FileSystemType | null | undefined>,
		Lifecycle: FormControl<FileSystemLifecycle | null | undefined>,
		StorageCapacity: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ResourceARN: FormControl<string | null | undefined>,
		FileSystemTypeVersion: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemFormGroup() {
		return new FormGroup<FileSystemFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			FileSystemType: new FormControl<FileSystemType | null | undefined>(undefined),
			Lifecycle: new FormControl<FileSystemLifecycle | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			DNSName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			FileSystemTypeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of file system. */
	export enum FileSystemType { WINDOWS = 0, LUSTRE = 1, ONTAP = 2, OPENZFS = 3 }


	/** The lifecycle status of the file system. */
	export enum FileSystemLifecycle { AVAILABLE = 0, CREATING = 1, FAILED = 2, DELETING = 3, MISCONFIGURED = 4, UPDATING = 5, MISCONFIGURED_UNAVAILABLE = 6 }


	/** A structure providing details of any failures that occurred. */
	export interface FileSystemFailureDetails {
		Message?: string;
	}

	/** A structure providing details of any failures that occurred. */
	export interface FileSystemFailureDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemFailureDetailsFormGroup() {
		return new FormGroup<FileSystemFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the file system's storage type. */
	export enum StorageType { SSD = 0, HDD = 1 }


	/** The configuration for this Microsoft Windows file system. */
	export interface WindowsFileSystemConfiguration {
		ActiveDirectoryId?: string;

		/** The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
		DeploymentType?: WindowsDeploymentType;
		RemoteAdministrationEndpoint?: string;
		PreferredSubnetId?: string;
		PreferredFileServerIp?: string;
		ThroughputCapacity?: number | null;
		MaintenanceOperationsInProgress?: Array<FileSystemMaintenanceOperation>;
		WeeklyMaintenanceStartTime?: string;
		DailyAutomaticBackupStartTime?: string;
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;

		/**
		 * An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>.
		 * Maximum items: 50
		 */
		Aliases?: Array<Alias>;
		AuditLogConfiguration?: WindowsAuditLogConfiguration;
	}

	/** The configuration for this Microsoft Windows file system. */
	export interface WindowsFileSystemConfigurationFormProperties {
		ActiveDirectoryId: FormControl<string | null | undefined>,
		DeploymentType: FormControl<WindowsDeploymentType | null | undefined>,
		RemoteAdministrationEndpoint: FormControl<string | null | undefined>,
		PreferredSubnetId: FormControl<string | null | undefined>,
		PreferredFileServerIp: FormControl<string | null | undefined>,
		ThroughputCapacity: FormControl<number | null | undefined>,
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
	}
	export function CreateWindowsFileSystemConfigurationFormGroup() {
		return new FormGroup<WindowsFileSystemConfigurationFormProperties>({
			ActiveDirectoryId: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<WindowsDeploymentType | null | undefined>(undefined),
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


	/** The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined. */
	export interface SelfManagedActiveDirectoryAttributes {
		DomainName?: string;
		OrganizationalUnitDistinguishedName?: string;
		FileSystemAdministratorsGroup?: string;
		UserName?: string;
		DnsIps?: Array<string>;
	}

	/** The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined. */
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

	export enum WindowsDeploymentType { MULTI_AZ_1 = 0, SINGLE_AZ_1 = 1, SINGLE_AZ_2 = 2 }


	/** An enumeration specifying the currently ongoing maintenance operation. */
	export enum FileSystemMaintenanceOperation { PATCHING = 0, BACKING_UP = 1 }


	/** The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html"> File access auditing</a>. */
	export interface WindowsAuditLogConfiguration {

		/** Required */
		FileAccessAuditLogLevel: WindowsAccessAuditLogLevel;

		/** Required */
		FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel;
		AuditLogDestination?: string;
	}

	/** The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html"> File access auditing</a>. */
	export interface WindowsAuditLogConfigurationFormProperties {

		/** Required */
		FileAccessAuditLogLevel: FormControl<WindowsAccessAuditLogLevel | null | undefined>,

		/** Required */
		FileShareAccessAuditLogLevel: FormControl<WindowsAccessAuditLogLevel | null | undefined>,
		AuditLogDestination: FormControl<string | null | undefined>,
	}
	export function CreateWindowsAuditLogConfigurationFormGroup() {
		return new FormGroup<WindowsAuditLogConfigurationFormProperties>({
			FileAccessAuditLogLevel: new FormControl<WindowsAccessAuditLogLevel | null | undefined>(undefined, [Validators.required]),
			FileShareAccessAuditLogLevel: new FormControl<WindowsAccessAuditLogLevel | null | undefined>(undefined, [Validators.required]),
			AuditLogDestination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WindowsAccessAuditLogLevel { DISABLED = 0, SUCCESS_ONLY = 1, FAILURE_ONLY = 2, SUCCESS_AND_FAILURE = 3 }


	/** The configuration for the Amazon FSx for Lustre file system. */
	export interface LustreFileSystemConfiguration {
		WeeklyMaintenanceStartTime?: string;

		/** <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .</p> */
		DataRepositoryConfiguration?: DataRepositoryConfiguration;
		DeploymentType?: LustreDeploymentType;
		PerUnitStorageThroughput?: number | null;
		MountName?: string;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
		DriveCacheType?: DriveCacheType;
		DataCompressionType?: DataCompressionType;
		LogConfiguration?: LustreLogConfiguration;
		RootSquashConfiguration?: LustreRootSquashConfiguration;
	}

	/** The configuration for the Amazon FSx for Lustre file system. */
	export interface LustreFileSystemConfigurationFormProperties {
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		DeploymentType: FormControl<LustreDeploymentType | null | undefined>,
		PerUnitStorageThroughput: FormControl<number | null | undefined>,
		MountName: FormControl<string | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
		DriveCacheType: FormControl<DriveCacheType | null | undefined>,
		DataCompressionType: FormControl<DataCompressionType | null | undefined>,
	}
	export function CreateLustreFileSystemConfigurationFormGroup() {
		return new FormGroup<LustreFileSystemConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<LustreDeploymentType | null | undefined>(undefined),
			PerUnitStorageThroughput: new FormControl<number | null | undefined>(undefined),
			MountName: new FormControl<string | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(90)]),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
			DriveCacheType: new FormControl<DriveCacheType | null | undefined>(undefined),
			DataCompressionType: new FormControl<DataCompressionType | null | undefined>(undefined),
		});

	}


	/** <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .</p> */
	export interface DataRepositoryConfiguration {
		Lifecycle?: DataRepositoryLifecycle;
		ImportPath?: string;
		ExportPath?: string;
		ImportedFileChunkSize?: number | null;
		AutoImportPolicy?: AutoImportPolicyType;

		/** Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>. */
		FailureDetails?: DataRepositoryFailureDetails;
	}

	/** <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .</p> */
	export interface DataRepositoryConfigurationFormProperties {
		Lifecycle: FormControl<DataRepositoryLifecycle | null | undefined>,
		ImportPath: FormControl<string | null | undefined>,
		ExportPath: FormControl<string | null | undefined>,
		ImportedFileChunkSize: FormControl<number | null | undefined>,
		AutoImportPolicy: FormControl<AutoImportPolicyType | null | undefined>,
	}
	export function CreateDataRepositoryConfigurationFormGroup() {
		return new FormGroup<DataRepositoryConfigurationFormProperties>({
			Lifecycle: new FormControl<DataRepositoryLifecycle | null | undefined>(undefined),
			ImportPath: new FormControl<string | null | undefined>(undefined),
			ExportPath: new FormControl<string | null | undefined>(undefined),
			ImportedFileChunkSize: new FormControl<number | null | undefined>(undefined),
			AutoImportPolicy: new FormControl<AutoImportPolicyType | null | undefined>(undefined),
		});

	}

	export enum DataRepositoryLifecycle { CREATING = 0, AVAILABLE = 1, MISCONFIGURED = 2, UPDATING = 3, DELETING = 4, FAILED = 5 }

	export enum AutoImportPolicyType { NONE = 0, NEW = 1, NEW_CHANGED = 2, NEW_CHANGED_DELETED = 3 }


	/** Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>. */
	export interface DataRepositoryFailureDetails {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message?: string | null;
	}

	/** Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>. */
	export interface DataRepositoryFailureDetailsFormProperties {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDataRepositoryFailureDetailsFormGroup() {
		return new FormGroup<DataRepositoryFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export enum LustreDeploymentType { SCRATCH_1 = 0, SCRATCH_2 = 1, PERSISTENT_1 = 2, PERSISTENT_2 = 3 }

	export enum DriveCacheType { NONE = 0, READ = 1 }

	export enum DataCompressionType { NONE = 0, LZ4 = 1 }


	/** The configuration for Lustre logging used to write the enabled logging events for your Amazon FSx for Lustre file system or Amazon File Cache resource to Amazon CloudWatch Logs. */
	export interface LustreLogConfiguration {

		/** Required */
		Level: LustreAccessAuditLogLevel;
		Destination?: string;
	}

	/** The configuration for Lustre logging used to write the enabled logging events for your Amazon FSx for Lustre file system or Amazon File Cache resource to Amazon CloudWatch Logs. */
	export interface LustreLogConfigurationFormProperties {

		/** Required */
		Level: FormControl<LustreAccessAuditLogLevel | null | undefined>,
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateLustreLogConfigurationFormGroup() {
		return new FormGroup<LustreLogConfigurationFormProperties>({
			Level: new FormControl<LustreAccessAuditLogLevel | null | undefined>(undefined, [Validators.required]),
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LustreAccessAuditLogLevel { DISABLED = 0, WARN_ONLY = 1, ERROR_ONLY = 2, WARN_ERROR = 3 }


	/** <p>The configuration for Lustre root squash used to restrict root-level access from clients that try to access your FSx for Lustre file system as root. Use the <code>RootSquash</code> parameter to enable root squash. To learn more about Lustre root squash, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/root-squash.html">Lustre root squash</a>.</p> <p>You can also use the <code>NoSquashNids</code> parameter to provide an array of clients who are not affected by the root squash setting. These clients will access the file system as root, with unrestricted privileges.</p> */
	export interface LustreRootSquashConfiguration {
		RootSquash?: string;
		NoSquashNids?: Array<string>;
	}

	/** <p>The configuration for Lustre root squash used to restrict root-level access from clients that try to access your FSx for Lustre file system as root. Use the <code>RootSquash</code> parameter to enable root squash. To learn more about Lustre root squash, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/root-squash.html">Lustre root squash</a>.</p> <p>You can also use the <code>NoSquashNids</code> parameter to provide an array of clients who are not affected by the root squash setting. These clients will access the file system as root, with unrestricted privileges.</p> */
	export interface LustreRootSquashConfigurationFormProperties {
		RootSquash: FormControl<string | null | undefined>,
	}
	export function CreateLustreRootSquashConfigurationFormGroup() {
		return new FormGroup<LustreRootSquashConfigurationFormProperties>({
			RootSquash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a specific Amazon FSx administrative action for the current Windows, Lustre, or OpenZFS file system. */
	export interface AdministrativeAction {

		/** <p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated from the Amazon FSx console, API (<code>UpdateFileSystem</code>), or CLI (<code>update-file-system</code>).</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity has been completed successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p> <ul> <li> <p>For Windows and ONTAP, storage optimization is the process of migrating the file system data to newer larger disks.</p> </li> <li> <p>For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.</p> </li> </ul> <p>You can track the storage-optimization progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> has been completed successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new Domain Name System (DNS) alias with the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html"> AssociateFileSystemAliases</a>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html">DisassociateFileSystemAliases</a>.</p> </li> <li> <p> <code>VOLUME_UPDATE</code> - A volume update to an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateVolume</code>), or CLI (<code>update-volume</code>).</p> </li> <li> <p> <code>VOLUME_RESTORE</code> - An Amazon FSx for OpenZFS volume is returned to the state saved by the specified snapshot, initiated from an API (<code>RestoreVolumeFromSnapshot</code>) or CLI (<code>restore-volume-from-snapshot</code>).</p> </li> <li> <p> <code>SNAPSHOT_UPDATE</code> - A snapshot update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateSnapshot</code>), or CLI (<code>update-snapshot</code>).</p> </li> <li> <p> <code>RELEASE_NFS_V3_LOCKS</code> - Tracks the release of Network File System (NFS) V3 locks on an Amazon FSx for OpenZFS file system.</p> </li> </ul> */
		AdministrativeActionType?: AdministrativeActionAdministrativeActionType | null;
		ProgressPercent?: number | null;
		RequestTime?: Date;
		Status?: Status;
		TargetFileSystemValues?: FileSystem;

		/** Provides information about a failed administrative action. */
		FailureDetails?: AdministrativeActionFailureDetails;

		/** Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume. */
		TargetVolumeValues?: Volume;

		/** A snapshot of an Amazon FSx for OpenZFS volume. */
		TargetSnapshotValues?: Snapshot;
	}

	/** Describes a specific Amazon FSx administrative action for the current Windows, Lustre, or OpenZFS file system. */
	export interface AdministrativeActionFormProperties {

		/** <p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated from the Amazon FSx console, API (<code>UpdateFileSystem</code>), or CLI (<code>update-file-system</code>).</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity has been completed successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p> <ul> <li> <p>For Windows and ONTAP, storage optimization is the process of migrating the file system data to newer larger disks.</p> </li> <li> <p>For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.</p> </li> </ul> <p>You can track the storage-optimization progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> has been completed successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new Domain Name System (DNS) alias with the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html"> AssociateFileSystemAliases</a>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html">DisassociateFileSystemAliases</a>.</p> </li> <li> <p> <code>VOLUME_UPDATE</code> - A volume update to an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateVolume</code>), or CLI (<code>update-volume</code>).</p> </li> <li> <p> <code>VOLUME_RESTORE</code> - An Amazon FSx for OpenZFS volume is returned to the state saved by the specified snapshot, initiated from an API (<code>RestoreVolumeFromSnapshot</code>) or CLI (<code>restore-volume-from-snapshot</code>).</p> </li> <li> <p> <code>SNAPSHOT_UPDATE</code> - A snapshot update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateSnapshot</code>), or CLI (<code>update-snapshot</code>).</p> </li> <li> <p> <code>RELEASE_NFS_V3_LOCKS</code> - Tracks the release of Network File System (NFS) V3 locks on an Amazon FSx for OpenZFS file system.</p> </li> </ul> */
		AdministrativeActionType: FormControl<AdministrativeActionAdministrativeActionType | null | undefined>,
		ProgressPercent: FormControl<number | null | undefined>,
		RequestTime: FormControl<Date | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateAdministrativeActionFormGroup() {
		return new FormGroup<AdministrativeActionFormProperties>({
			AdministrativeActionType: new FormControl<AdministrativeActionAdministrativeActionType | null | undefined>(undefined),
			ProgressPercent: new FormControl<number | null | undefined>(undefined),
			RequestTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export enum AdministrativeActionAdministrativeActionType { FILE_SYSTEM_UPDATE = 0, STORAGE_OPTIMIZATION = 1, FILE_SYSTEM_ALIAS_ASSOCIATION = 2, FILE_SYSTEM_ALIAS_DISASSOCIATION = 3, VOLUME_UPDATE = 4, SNAPSHOT_UPDATE = 5, RELEASE_NFS_V3_LOCKS = 6, VOLUME_RESTORE = 7 }

	export enum Status { FAILED = 0, IN_PROGRESS = 1, PENDING = 2, COMPLETED = 3, UPDATED_OPTIMIZING = 4 }


	/** Provides information about a failed administrative action. */
	export interface AdministrativeActionFailureDetails {
		Message?: string;
	}

	/** Provides information about a failed administrative action. */
	export interface AdministrativeActionFailureDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAdministrativeActionFailureDetailsFormGroup() {
		return new FormGroup<AdministrativeActionFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume. */
	export interface Volume {

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime?: Date | null;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId?: string | null;
		Lifecycle?: VolumeLifecycle;
		Name?: string;

		/** The configuration of an Amazon FSx for NetApp ONTAP volume. */
		OntapConfiguration?: OntapVolumeConfiguration;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		VolumeId?: string;
		VolumeType?: VolumeType;
		LifecycleTransitionReason?: LifecycleTransitionReason;
		AdministrativeActions?: Array<AdministrativeAction>;
		OpenZFSConfiguration?: OpenZFSVolumeConfiguration;
	}

	/** Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume. */
	export interface VolumeFormProperties {

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<VolumeLifecycle | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,
		VolumeType: FormControl<VolumeType | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(21), Validators.pattern('^(fs-[0-9a-f]{8,})$')]),
			Lifecycle: new FormControl<VolumeLifecycle | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			VolumeId: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined),
		});

	}

	export enum VolumeLifecycle { CREATING = 0, CREATED = 1, DELETING = 2, FAILED = 3, MISCONFIGURED = 4, PENDING = 5, AVAILABLE = 6 }


	/** The configuration of an Amazon FSx for NetApp ONTAP volume. */
	export interface OntapVolumeConfiguration {
		FlexCacheEndpointType?: FlexCacheEndpointType;
		JunctionPath?: string;
		SecurityStyle?: SecurityStyle;
		SizeInMegabytes?: number | null;
		StorageEfficiencyEnabled?: boolean | null;
		StorageVirtualMachineId?: string;
		StorageVirtualMachineRoot?: boolean | null;
		TieringPolicy?: TieringPolicy;
		UUID?: string;
		OntapVolumeType?: OntapVolumeType;
		SnapshotPolicy?: string;
		CopyTagsToBackups?: boolean | null;
		SnaplockConfiguration?: SnaplockConfiguration;
	}

	/** The configuration of an Amazon FSx for NetApp ONTAP volume. */
	export interface OntapVolumeConfigurationFormProperties {
		FlexCacheEndpointType: FormControl<FlexCacheEndpointType | null | undefined>,
		JunctionPath: FormControl<string | null | undefined>,
		SecurityStyle: FormControl<SecurityStyle | null | undefined>,
		SizeInMegabytes: FormControl<number | null | undefined>,
		StorageEfficiencyEnabled: FormControl<boolean | null | undefined>,
		StorageVirtualMachineId: FormControl<string | null | undefined>,
		StorageVirtualMachineRoot: FormControl<boolean | null | undefined>,
		UUID: FormControl<string | null | undefined>,
		OntapVolumeType: FormControl<OntapVolumeType | null | undefined>,
		SnapshotPolicy: FormControl<string | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
	}
	export function CreateOntapVolumeConfigurationFormGroup() {
		return new FormGroup<OntapVolumeConfigurationFormProperties>({
			FlexCacheEndpointType: new FormControl<FlexCacheEndpointType | null | undefined>(undefined),
			JunctionPath: new FormControl<string | null | undefined>(undefined),
			SecurityStyle: new FormControl<SecurityStyle | null | undefined>(undefined),
			SizeInMegabytes: new FormControl<number | null | undefined>(undefined),
			StorageEfficiencyEnabled: new FormControl<boolean | null | undefined>(undefined),
			StorageVirtualMachineId: new FormControl<string | null | undefined>(undefined),
			StorageVirtualMachineRoot: new FormControl<boolean | null | undefined>(undefined),
			UUID: new FormControl<string | null | undefined>(undefined),
			OntapVolumeType: new FormControl<OntapVolumeType | null | undefined>(undefined),
			SnapshotPolicy: new FormControl<string | null | undefined>(undefined),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FlexCacheEndpointType { NONE = 0, ORIGIN = 1, CACHE = 2 }

	export enum SecurityStyle { UNIX = 0, NTFS = 1, MIXED = 2 }


	/** <p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul> */
	export interface TieringPolicy {
		CoolingPeriod?: number | null;
		Name?: TieringPolicyName;
	}

	/** <p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul> */
	export interface TieringPolicyFormProperties {
		CoolingPeriod: FormControl<number | null | undefined>,
		Name: FormControl<TieringPolicyName | null | undefined>,
	}
	export function CreateTieringPolicyFormGroup() {
		return new FormGroup<TieringPolicyFormProperties>({
			CoolingPeriod: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<TieringPolicyName | null | undefined>(undefined),
		});

	}

	export enum TieringPolicyName { SNAPSHOT_ONLY = 0, AUTO = 1, ALL = 2, NONE = 3 }

	export enum OntapVolumeType { RW = 0, DP = 1, LS = 2 }


	/** Specifies the SnapLock configuration for an FSx for ONTAP SnapLock volume.  */
	export interface SnaplockConfiguration {
		AuditLogVolume?: boolean | null;
		AutocommitPeriod?: AutocommitPeriod;
		PrivilegedDelete?: PrivilegedDelete;
		RetentionPeriod?: SnaplockRetentionPeriod;
		SnaplockType?: SnaplockType;
		VolumeAppendModeEnabled?: boolean | null;
	}

	/** Specifies the SnapLock configuration for an FSx for ONTAP SnapLock volume.  */
	export interface SnaplockConfigurationFormProperties {
		AuditLogVolume: FormControl<boolean | null | undefined>,
		PrivilegedDelete: FormControl<PrivilegedDelete | null | undefined>,
		SnaplockType: FormControl<SnaplockType | null | undefined>,
		VolumeAppendModeEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSnaplockConfigurationFormGroup() {
		return new FormGroup<SnaplockConfigurationFormProperties>({
			AuditLogVolume: new FormControl<boolean | null | undefined>(undefined),
			PrivilegedDelete: new FormControl<PrivilegedDelete | null | undefined>(undefined),
			SnaplockType: new FormControl<SnaplockType | null | undefined>(undefined),
			VolumeAppendModeEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Sets the autocommit period of files in an FSx for ONTAP SnapLock volume, which determines how long the files must remain unmodified before they're automatically transitioned to the write once, read many (WORM) state. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-autocommit">Autocommit</a>. </p> */
	export interface AutocommitPeriod {

		/** Required */
		Type: AutocommitPeriodType;
		Value?: number | null;
	}

	/** <p>Sets the autocommit period of files in an FSx for ONTAP SnapLock volume, which determines how long the files must remain unmodified before they're automatically transitioned to the write once, read many (WORM) state. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-autocommit">Autocommit</a>. </p> */
	export interface AutocommitPeriodFormProperties {

		/** Required */
		Type: FormControl<AutocommitPeriodType | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateAutocommitPeriodFormGroup() {
		return new FormGroup<AutocommitPeriodFormProperties>({
			Type: new FormControl<AutocommitPeriodType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AutocommitPeriodType { MINUTES = 0, HOURS = 1, DAYS = 2, MONTHS = 3, YEARS = 4, NONE = 5 }

	export enum PrivilegedDelete { DISABLED = 0, ENABLED = 1, PERMANENTLY_DISABLED = 2 }


	/** The configuration to set the retention period of an FSx for ONTAP SnapLock volume. The retention period includes default, maximum, and minimum settings. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html">Working with the retention period in SnapLock</a>.  */
	export interface SnaplockRetentionPeriod {

		/** Required */
		DefaultRetention: RetentionPeriod;

		/** Required */
		MinimumRetention: RetentionPeriod;

		/** Required */
		MaximumRetention: RetentionPeriod;
	}

	/** The configuration to set the retention period of an FSx for ONTAP SnapLock volume. The retention period includes default, maximum, and minimum settings. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html">Working with the retention period in SnapLock</a>.  */
	export interface SnaplockRetentionPeriodFormProperties {
	}
	export function CreateSnaplockRetentionPeriodFormGroup() {
		return new FormGroup<SnaplockRetentionPeriodFormProperties>({
		});

	}


	/** <p>Specifies the retention period of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. Files can't be deleted or modified during the retention period. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html">Working with the retention period in SnapLock</a>. </p> */
	export interface RetentionPeriod {

		/** Required */
		Type: RetentionPeriodType;
		Value?: number | null;
	}

	/** <p>Specifies the retention period of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. Files can't be deleted or modified during the retention period. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html">Working with the retention period in SnapLock</a>. </p> */
	export interface RetentionPeriodFormProperties {

		/** Required */
		Type: FormControl<RetentionPeriodType | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateRetentionPeriodFormGroup() {
		return new FormGroup<RetentionPeriodFormProperties>({
			Type: new FormControl<RetentionPeriodType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RetentionPeriodType { SECONDS = 0, MINUTES = 1, HOURS = 2, DAYS = 3, MONTHS = 4, YEARS = 5, INFINITE = 6, UNSPECIFIED = 7 }

	export enum SnaplockType { COMPLIANCE = 0, ENTERPRISE = 1 }

	export enum VolumeType { ONTAP = 0, OPENZFS = 1 }


	/** Describes why a resource lifecycle state changed. */
	export interface LifecycleTransitionReason {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message?: string | null;
	}

	/** Describes why a resource lifecycle state changed. */
	export interface LifecycleTransitionReasonFormProperties {

		/**
		 * A detailed error message.
		 * Max length: 256
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateLifecycleTransitionReasonFormGroup() {
		return new FormGroup<LifecycleTransitionReasonFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}


	/** The configuration of an Amazon FSx for OpenZFS volume. */
	export interface OpenZFSVolumeConfiguration {
		ParentVolumeId?: string;
		VolumePath?: string;
		StorageCapacityReservationGiB?: number | null;
		StorageCapacityQuotaGiB?: number | null;
		RecordSizeKiB?: number | null;
		DataCompressionType?: OpenZFSDataCompressionType;
		CopyTagsToSnapshots?: boolean | null;
		OriginSnapshot?: OpenZFSOriginSnapshotConfiguration;
		ReadOnly?: boolean | null;
		NfsExports?: Array<OpenZFSNfsExport>;
		UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
		RestoreToSnapshot?: string;
		DeleteIntermediateSnaphots?: boolean | null;
		DeleteClonedVolumes?: boolean | null;
	}

	/** The configuration of an Amazon FSx for OpenZFS volume. */
	export interface OpenZFSVolumeConfigurationFormProperties {
		ParentVolumeId: FormControl<string | null | undefined>,
		VolumePath: FormControl<string | null | undefined>,
		StorageCapacityReservationGiB: FormControl<number | null | undefined>,
		StorageCapacityQuotaGiB: FormControl<number | null | undefined>,
		RecordSizeKiB: FormControl<number | null | undefined>,
		DataCompressionType: FormControl<OpenZFSDataCompressionType | null | undefined>,
		CopyTagsToSnapshots: FormControl<boolean | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
		RestoreToSnapshot: FormControl<string | null | undefined>,
		DeleteIntermediateSnaphots: FormControl<boolean | null | undefined>,
		DeleteClonedVolumes: FormControl<boolean | null | undefined>,
	}
	export function CreateOpenZFSVolumeConfigurationFormGroup() {
		return new FormGroup<OpenZFSVolumeConfigurationFormProperties>({
			ParentVolumeId: new FormControl<string | null | undefined>(undefined),
			VolumePath: new FormControl<string | null | undefined>(undefined),
			StorageCapacityReservationGiB: new FormControl<number | null | undefined>(undefined),
			StorageCapacityQuotaGiB: new FormControl<number | null | undefined>(undefined),
			RecordSizeKiB: new FormControl<number | null | undefined>(undefined),
			DataCompressionType: new FormControl<OpenZFSDataCompressionType | null | undefined>(undefined),
			CopyTagsToSnapshots: new FormControl<boolean | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
			RestoreToSnapshot: new FormControl<string | null | undefined>(undefined),
			DeleteIntermediateSnaphots: new FormControl<boolean | null | undefined>(undefined),
			DeleteClonedVolumes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OpenZFSDataCompressionType { NONE = 0, ZSTD = 1, LZ4 = 2 }


	/** The snapshot configuration to use when creating an OpenZFS volume from a snapshot. */
	export interface OpenZFSOriginSnapshotConfiguration {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		SnapshotARN?: string | null;
		CopyStrategy?: OpenZFSCopyStrategy;
	}

	/** The snapshot configuration to use when creating an OpenZFS volume from a snapshot. */
	export interface OpenZFSOriginSnapshotConfigurationFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		SnapshotARN: FormControl<string | null | undefined>,
		CopyStrategy: FormControl<OpenZFSCopyStrategy | null | undefined>,
	}
	export function CreateOpenZFSOriginSnapshotConfigurationFormGroup() {
		return new FormGroup<OpenZFSOriginSnapshotConfigurationFormProperties>({
			SnapshotARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			CopyStrategy: new FormControl<OpenZFSCopyStrategy | null | undefined>(undefined),
		});

	}

	export enum OpenZFSCopyStrategy { CLONE = 0, FULL_COPY = 1 }


	/** The Network File System (NFS) configurations for mounting an Amazon FSx for OpenZFS file system.  */
	export interface OpenZFSNfsExport {

		/** Required */
		ClientConfigurations: Array<OpenZFSClientConfiguration>;
	}

	/** The Network File System (NFS) configurations for mounting an Amazon FSx for OpenZFS file system.  */
	export interface OpenZFSNfsExportFormProperties {
	}
	export function CreateOpenZFSNfsExportFormGroup() {
		return new FormGroup<OpenZFSNfsExportFormProperties>({
		});

	}


	/** Specifies who can mount an OpenZFS file system and the options available while mounting the file system. */
	export interface OpenZFSClientConfiguration {

		/** Required */
		Clients: string;

		/** Required */
		Options: Array<string>;
	}

	/** Specifies who can mount an OpenZFS file system and the options available while mounting the file system. */
	export interface OpenZFSClientConfigurationFormProperties {

		/** Required */
		Clients: FormControl<string | null | undefined>,
	}
	export function CreateOpenZFSClientConfigurationFormGroup() {
		return new FormGroup<OpenZFSClientConfigurationFormProperties>({
			Clients: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for how much storage a user or group can use on the volume.  */
	export interface OpenZFSUserOrGroupQuota {

		/** Required */
		Type: OpenZFSQuotaType;

		/** Required */
		Id: number;

		/** Required */
		StorageCapacityQuotaGiB: number;
	}

	/** The configuration for how much storage a user or group can use on the volume.  */
	export interface OpenZFSUserOrGroupQuotaFormProperties {

		/** Required */
		Type: FormControl<OpenZFSQuotaType | null | undefined>,

		/** Required */
		Id: FormControl<number | null | undefined>,

		/** Required */
		StorageCapacityQuotaGiB: FormControl<number | null | undefined>,
	}
	export function CreateOpenZFSUserOrGroupQuotaFormGroup() {
		return new FormGroup<OpenZFSUserOrGroupQuotaFormProperties>({
			Type: new FormControl<OpenZFSQuotaType | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StorageCapacityQuotaGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OpenZFSQuotaType { USER = 0, GROUP = 1 }


	/** A snapshot of an Amazon FSx for OpenZFS volume. */
	export interface Snapshot {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;
		SnapshotId?: string;
		Name?: string;
		VolumeId?: string;

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime?: Date | null;
		Lifecycle?: SnapshotLifecycle;

		/** Describes why a resource lifecycle state changed. */
		LifecycleTransitionReason?: LifecycleTransitionReason;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		AdministrativeActions?: Array<AdministrativeAction>;
	}

	/** A snapshot of an Amazon FSx for OpenZFS volume. */
	export interface SnapshotFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime: FormControl<Date | null | undefined>,
		Lifecycle: FormControl<SnapshotLifecycle | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VolumeId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Lifecycle: new FormControl<SnapshotLifecycle | null | undefined>(undefined),
		});

	}

	export enum SnapshotLifecycle { PENDING = 0, CREATING = 1, DELETING = 2, AVAILABLE = 3 }


	/** Configuration for the FSx for NetApp ONTAP file system. */
	export interface OntapFileSystemConfiguration {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays?: number | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;
		DeploymentType?: OntapDeploymentType;
		EndpointIpAddressRange?: string;
		Endpoints?: FileSystemEndpoints;
		DiskIopsConfiguration?: DiskIopsConfiguration;

		/**
		 * The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide.</i>
		 * Max length: 24
		 * Min length: 15
		 */
		PreferredSubnetId?: string | null;
		RouteTableIds?: Array<string>;

		/**
		 * The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).
		 * Minimum: 8
		 * Maximum: 100000
		 */
		ThroughputCapacity?: number | null;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;
		FsxAdminPassword?: string;
	}

	/** Configuration for the FSx for NetApp ONTAP file system. */
	export interface OntapFileSystemConfigurationFormProperties {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		DeploymentType: FormControl<OntapDeploymentType | null | undefined>,
		EndpointIpAddressRange: FormControl<string | null | undefined>,

		/**
		 * The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide.</i>
		 * Max length: 24
		 * Min length: 15
		 */
		PreferredSubnetId: FormControl<string | null | undefined>,

		/**
		 * The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).
		 * Minimum: 8
		 * Maximum: 100000
		 */
		ThroughputCapacity: FormControl<number | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		FsxAdminPassword: FormControl<string | null | undefined>,
	}
	export function CreateOntapFileSystemConfigurationFormGroup() {
		return new FormGroup<OntapFileSystemConfigurationFormProperties>({
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(90)]),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			DeploymentType: new FormControl<OntapDeploymentType | null | undefined>(undefined),
			EndpointIpAddressRange: new FormControl<string | null | undefined>(undefined),
			PreferredSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(15), Validators.maxLength(24), Validators.pattern('^(subnet-[0-9a-f]{8,})$')]),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined, [Validators.min(8), Validators.max(100000)]),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
			FsxAdminPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OntapDeploymentType { MULTI_AZ_1 = 0, SINGLE_AZ_1 = 1 }


	/** An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. */
	export interface FileSystemEndpoints {
		Intercluster?: FileSystemEndpoint;
		Management?: FileSystemEndpoint;
	}

	/** An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. */
	export interface FileSystemEndpointsFormProperties {
	}
	export function CreateFileSystemEndpointsFormGroup() {
		return new FormGroup<FileSystemEndpointsFormProperties>({
		});

	}


	/** An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints. */
	export interface FileSystemEndpoint {

		/**
		 * The file system's DNS name. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 */
		DNSName?: string | null;
		IpAddresses?: Array<string>;
	}

	/** An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints. */
	export interface FileSystemEndpointFormProperties {

		/**
		 * The file system's DNS name. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 */
		DNSName: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemEndpointFormGroup() {
		return new FormGroup<FileSystemEndpointFormProperties>({
			DNSName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(16), Validators.maxLength(275), Validators.pattern('^((fs|fc)i?-[0-9a-f]{8,}\..{4,253})$')]),
		});

	}


	/** The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx). */
	export interface DiskIopsConfiguration {
		Mode?: DiskIopsConfigurationMode;
		Iops?: number | null;
	}

	/** The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx). */
	export interface DiskIopsConfigurationFormProperties {
		Mode: FormControl<DiskIopsConfigurationMode | null | undefined>,
		Iops: FormControl<number | null | undefined>,
	}
	export function CreateDiskIopsConfigurationFormGroup() {
		return new FormGroup<DiskIopsConfigurationFormProperties>({
			Mode: new FormControl<DiskIopsConfigurationMode | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DiskIopsConfigurationMode { AUTOMATIC = 0, USER_PROVISIONED = 1 }


	/** The configuration for the Amazon FSx for OpenZFS file system.  */
	export interface OpenZFSFileSystemConfiguration {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
		CopyTagsToVolumes?: boolean | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;
		DeploymentType?: OpenZFSDeploymentType;
		ThroughputCapacity?: number | null;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/** The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx). */
		DiskIopsConfiguration?: DiskIopsConfiguration;
		RootVolumeId?: string;
	}

	/** The configuration for the Amazon FSx for OpenZFS file system.  */
	export interface OpenZFSFileSystemConfigurationFormProperties {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
		CopyTagsToVolumes: FormControl<boolean | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		DeploymentType: FormControl<OpenZFSDeploymentType | null | undefined>,
		ThroughputCapacity: FormControl<number | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		RootVolumeId: FormControl<string | null | undefined>,
	}
	export function CreateOpenZFSFileSystemConfigurationFormGroup() {
		return new FormGroup<OpenZFSFileSystemConfigurationFormProperties>({
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(90)]),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
			CopyTagsToVolumes: new FormControl<boolean | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			DeploymentType: new FormControl<OpenZFSDeploymentType | null | undefined>(undefined),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
			RootVolumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OpenZFSDeploymentType { SINGLE_AZ_1 = 0, SINGLE_AZ_2 = 1 }


	/** The Microsoft Active Directory attributes of the Amazon FSx for Windows File Server file system. */
	export interface ActiveDirectoryBackupAttributes {
		DomainName?: string;
		ActiveDirectoryId?: string;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;
	}

	/** The Microsoft Active Directory attributes of the Amazon FSx for Windows File Server file system. */
	export interface ActiveDirectoryBackupAttributesFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ActiveDirectoryId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateActiveDirectoryBackupAttributesFormGroup() {
		return new FormGroup<ActiveDirectoryBackupAttributesFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			ActiveDirectoryId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
		});

	}

	export enum ResourceType { FILE_SYSTEM = 0, VOLUME = 1 }

	export interface CopyBackupRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		SourceBackupId: string;
		SourceRegion?: string;

		/**
		 * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
		CopyTags?: boolean | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CopyBackupRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		SourceBackupId: FormControl<string | null | undefined>,
		SourceRegion: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
		CopyTags: FormControl<boolean | null | undefined>,
	}
	export function CreateCopyBackupRequestFormGroup() {
		return new FormGroup<CopyBackupRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			SourceBackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceRegion: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^.{1,2048}$')]),
			CopyTags: new FormControl<boolean | null | undefined>(undefined),
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

	export interface ServiceLimitExceeded {
	}
	export interface ServiceLimitExceededFormProperties {
	}
	export function CreateServiceLimitExceededFormGroup() {
		return new FormGroup<ServiceLimitExceededFormProperties>({
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

	export interface InvalidSourceKmsKey {
	}
	export interface InvalidSourceKmsKeyFormProperties {
	}
	export function CreateInvalidSourceKmsKeyFormGroup() {
		return new FormGroup<InvalidSourceKmsKeyFormProperties>({
		});

	}

	export interface InvalidDestinationKmsKey {
	}
	export interface InvalidDestinationKmsKeyFormProperties {
	}
	export function CreateInvalidDestinationKmsKeyFormGroup() {
		return new FormGroup<InvalidDestinationKmsKeyFormProperties>({
		});

	}

	export interface InvalidRegion {
	}
	export interface InvalidRegionFormProperties {
	}
	export function CreateInvalidRegionFormGroup() {
		return new FormGroup<InvalidRegionFormProperties>({
		});

	}

	export interface SourceBackupUnavailable {
	}
	export interface SourceBackupUnavailableFormProperties {
	}
	export function CreateSourceBackupUnavailableFormGroup() {
		return new FormGroup<SourceBackupUnavailableFormProperties>({
		});

	}

	export interface IncompatibleRegionForMultiAZ {
	}
	export interface IncompatibleRegionForMultiAZFormProperties {
	}
	export function CreateIncompatibleRegionForMultiAZFormGroup() {
		return new FormGroup<IncompatibleRegionForMultiAZFormProperties>({
		});

	}


	/** The response object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupResponse {
		Backup?: Backup;
	}

	/** The response object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupResponseFormProperties {
	}
	export function CreateCreateBackupResponseFormGroup() {
		return new FormGroup<CreateBackupResponseFormProperties>({
		});

	}


	/** The request object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupRequest {
		FileSystemId?: string;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
		VolumeId?: string;
	}

	/** The request object for the <code>CreateBackup</code> operation. */
	export interface CreateBackupRequestFormProperties {
		FileSystemId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupRequestFormGroup() {
		return new FormGroup<CreateBackupRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeNotFound {
	}
	export interface VolumeNotFoundFormProperties {
	}
	export function CreateVolumeNotFoundFormGroup() {
		return new FormGroup<VolumeNotFoundFormProperties>({
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

	export interface CreateDataRepositoryAssociationResponse {
		Association?: DataRepositoryAssociation;
	}
	export interface CreateDataRepositoryAssociationResponseFormProperties {
	}
	export function CreateCreateDataRepositoryAssociationResponseFormGroup() {
		return new FormGroup<CreateDataRepositoryAssociationResponseFormProperties>({
		});

	}


	/** <p>The configuration of a data repository association that links an Amazon FSx for Lustre file system to an Amazon S3 bucket or an Amazon File Cache resource to an Amazon S3 bucket or an NFS file system. The data repository association configuration object is returned in the response of the following operations:</p> <ul> <li> <p> <code>CreateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>UpdateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>DescribeDataRepositoryAssociations</code> </p> </li> </ul> <p>Data repository associations are supported on Amazon File Cache resources and all FSx for Lustre 2.12 and newer file systems, excluding <code>scratch_1</code> deployment type.</p> */
	export interface DataRepositoryAssociation {
		AssociationId?: string;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId?: string | null;
		Lifecycle?: DataRepositoryLifecycle;

		/** Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>. */
		FailureDetails?: DataRepositoryFailureDetails;
		FileSystemPath?: string;
		DataRepositoryPath?: string;
		BatchImportMetaDataOnCreate?: boolean | null;
		ImportedFileChunkSize?: number | null;
		S3?: S3DataRepositoryConfiguration;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime?: Date | null;
		FileCacheId?: string;
		FileCachePath?: string;
		DataRepositorySubdirectories?: Array<string>;
		NFS?: NFSDataRepositoryConfiguration;
	}

	/** <p>The configuration of a data repository association that links an Amazon FSx for Lustre file system to an Amazon S3 bucket or an Amazon File Cache resource to an Amazon S3 bucket or an NFS file system. The data repository association configuration object is returned in the response of the following operations:</p> <ul> <li> <p> <code>CreateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>UpdateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>DescribeDataRepositoryAssociations</code> </p> </li> </ul> <p>Data repository associations are supported on Amazon File Cache resources and all FSx for Lustre 2.12 and newer file systems, excluding <code>scratch_1</code> deployment type.</p> */
	export interface DataRepositoryAssociationFormProperties {
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<DataRepositoryLifecycle | null | undefined>,
		FileSystemPath: FormControl<string | null | undefined>,
		DataRepositoryPath: FormControl<string | null | undefined>,
		BatchImportMetaDataOnCreate: FormControl<boolean | null | undefined>,
		ImportedFileChunkSize: FormControl<number | null | undefined>,

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime: FormControl<Date | null | undefined>,
		FileCacheId: FormControl<string | null | undefined>,
		FileCachePath: FormControl<string | null | undefined>,
	}
	export function CreateDataRepositoryAssociationFormGroup() {
		return new FormGroup<DataRepositoryAssociationFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(21), Validators.pattern('^(fs-[0-9a-f]{8,})$')]),
			Lifecycle: new FormControl<DataRepositoryLifecycle | null | undefined>(undefined),
			FileSystemPath: new FormControl<string | null | undefined>(undefined),
			DataRepositoryPath: new FormControl<string | null | undefined>(undefined),
			BatchImportMetaDataOnCreate: new FormControl<boolean | null | undefined>(undefined),
			ImportedFileChunkSize: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FileCacheId: new FormControl<string | null | undefined>(undefined),
			FileCachePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association. The configuration consists of an <code>AutoImportPolicy</code> that defines which file events on the data repository are automatically imported to the file system and an <code>AutoExportPolicy</code> that defines which file events on the file system are automatically exported to the data repository. File events are when files or directories are added, changed, or deleted on the file system or the data repository.</p> <note> <p>Data repository associations on Amazon File Cache don't use <code>S3DataRepositoryConfiguration</code> because they don't support automatic import or automatic export.</p> </note> */
	export interface S3DataRepositoryConfiguration {
		AutoImportPolicy?: AutoImportPolicy;
		AutoExportPolicy?: AutoExportPolicy;
	}

	/** <p>The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association. The configuration consists of an <code>AutoImportPolicy</code> that defines which file events on the data repository are automatically imported to the file system and an <code>AutoExportPolicy</code> that defines which file events on the file system are automatically exported to the data repository. File events are when files or directories are added, changed, or deleted on the file system or the data repository.</p> <note> <p>Data repository associations on Amazon File Cache don't use <code>S3DataRepositoryConfiguration</code> because they don't support automatic import or automatic export.</p> </note> */
	export interface S3DataRepositoryConfigurationFormProperties {
	}
	export function CreateS3DataRepositoryConfigurationFormGroup() {
		return new FormGroup<S3DataRepositoryConfigurationFormProperties>({
		});

	}


	/** <p>Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.</p> <p>The <code>AutoImportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p> */
	export interface AutoImportPolicy {
		Events?: Array<EventType>;
	}

	/** <p>Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.</p> <p>The <code>AutoImportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p> */
	export interface AutoImportPolicyFormProperties {
	}
	export function CreateAutoImportPolicyFormGroup() {
		return new FormGroup<AutoImportPolicyFormProperties>({
		});

	}

	export enum EventType { NEW = 0, CHANGED = 1, DELETED = 2 }


	/** <p>Describes a data repository association's automatic export policy. The <code>AutoExportPolicy</code> defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.</p> <p>The <code>AutoExportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p> */
	export interface AutoExportPolicy {
		Events?: Array<EventType>;
	}

	/** <p>Describes a data repository association's automatic export policy. The <code>AutoExportPolicy</code> defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.</p> <p>The <code>AutoExportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p> */
	export interface AutoExportPolicyFormProperties {
	}
	export function CreateAutoExportPolicyFormGroup() {
		return new FormGroup<AutoExportPolicyFormProperties>({
		});

	}


	/** The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository. */
	export interface NFSDataRepositoryConfiguration {

		/** Required */
		Version: NfsVersion;
		DnsIps?: Array<string>;
		AutoExportPolicy?: AutoExportPolicy;
	}

	/** The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository. */
	export interface NFSDataRepositoryConfigurationFormProperties {

		/** Required */
		Version: FormControl<NfsVersion | null | undefined>,
	}
	export function CreateNFSDataRepositoryConfigurationFormGroup() {
		return new FormGroup<NFSDataRepositoryConfigurationFormProperties>({
			Version: new FormControl<NfsVersion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NfsVersion { NFS3 = 0 }

	export interface CreateDataRepositoryAssociationRequest {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: string;
		FileSystemPath?: string;

		/** Required */
		DataRepositoryPath: string;
		BatchImportMetaDataOnCreate?: boolean | null;
		ImportedFileChunkSize?: number | null;
		S3?: S3DataRepositoryConfiguration;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDataRepositoryAssociationRequestFormProperties {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,
		FileSystemPath: FormControl<string | null | undefined>,

		/** Required */
		DataRepositoryPath: FormControl<string | null | undefined>,
		BatchImportMetaDataOnCreate: FormControl<boolean | null | undefined>,
		ImportedFileChunkSize: FormControl<number | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataRepositoryAssociationRequestFormGroup() {
		return new FormGroup<CreateDataRepositoryAssociationRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(21), Validators.pattern('^(fs-[0-9a-f]{8,})$')]),
			FileSystemPath: new FormControl<string | null | undefined>(undefined),
			DataRepositoryPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BatchImportMetaDataOnCreate: new FormControl<boolean | null | undefined>(undefined),
			ImportedFileChunkSize: new FormControl<number | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
		});

	}

	export interface CreateDataRepositoryTaskResponse {
		DataRepositoryTask?: DataRepositoryTask;
	}
	export interface CreateDataRepositoryTaskResponseFormProperties {
	}
	export function CreateCreateDataRepositoryTaskResponseFormGroup() {
		return new FormGroup<CreateDataRepositoryTaskResponseFormProperties>({
		});

	}


	/** A description of the data repository task. You use data repository tasks to perform bulk transfer operations between an Amazon FSx for Lustre file system and a linked data repository. An Amazon File Cache resource uses a task to automatically release files from the cache. */
	export interface DataRepositoryTask {

		/** Required */
		TaskId: string;

		/** Required */
		Lifecycle: DataRepositoryTaskLifecycle;

		/** Required */
		Type: DataRepositoryTaskType;

		/**
		 * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
		 * Required
		 */
		CreationTime: Date;
		StartTime?: Date;
		EndTime?: Date;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		FileSystemId?: string;
		Paths?: Array<string>;
		FailureDetails?: DataRepositoryTaskFailureDetails;
		Status?: DataRepositoryTaskStatus;

		/** Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter. */
		Report?: CompletionReport;
		CapacityToRelease?: number | null;
		FileCacheId?: string;
	}

	/** A description of the data repository task. You use data repository tasks to perform bulk transfer operations between an Amazon FSx for Lustre file system and a linked data repository. An Amazon File Cache resource uses a task to automatically release files from the cache. */
	export interface DataRepositoryTaskFormProperties {

		/** Required */
		TaskId: FormControl<string | null | undefined>,

		/** Required */
		Lifecycle: FormControl<DataRepositoryTaskLifecycle | null | undefined>,

		/** Required */
		Type: FormControl<DataRepositoryTaskType | null | undefined>,

		/**
		 * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
		 * Required
		 */
		CreationTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,
		FileSystemId: FormControl<string | null | undefined>,
		CapacityToRelease: FormControl<number | null | undefined>,
		FileCacheId: FormControl<string | null | undefined>,
	}
	export function CreateDataRepositoryTaskFormGroup() {
		return new FormGroup<DataRepositoryTaskFormProperties>({
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Lifecycle: new FormControl<DataRepositoryTaskLifecycle | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DataRepositoryTaskType | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			CapacityToRelease: new FormControl<number | null | undefined>(undefined),
			FileCacheId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataRepositoryTaskType { EXPORT_TO_REPOSITORY = 0, IMPORT_METADATA_FROM_REPOSITORY = 1, RELEASE_DATA_FROM_FILESYSTEM = 2, AUTO_RELEASE_DATA = 3 }


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
			Message: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}


	/** Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process. */
	export interface DataRepositoryTaskStatus {
		TotalCount?: number | null;
		SucceededCount?: number | null;
		FailedCount?: number | null;
		LastUpdatedTime?: Date;
		ReleasedCapacity?: number | null;
	}

	/** Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process. */
	export interface DataRepositoryTaskStatusFormProperties {
		TotalCount: FormControl<number | null | undefined>,
		SucceededCount: FormControl<number | null | undefined>,
		FailedCount: FormControl<number | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		ReleasedCapacity: FormControl<number | null | undefined>,
	}
	export function CreateDataRepositoryTaskStatusFormGroup() {
		return new FormGroup<DataRepositoryTaskStatusFormProperties>({
			TotalCount: new FormControl<number | null | undefined>(undefined),
			SucceededCount: new FormControl<number | null | undefined>(undefined),
			FailedCount: new FormControl<number | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ReleasedCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter. */
	export interface CompletionReport {

		/** Required */
		Enabled: boolean;
		Path?: string;
		Format?: ReportFormat;
		Scope?: ReportScope;
	}

	/** Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter. */
	export interface CompletionReportFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Format: FormControl<ReportFormat | null | undefined>,
		Scope: FormControl<ReportScope | null | undefined>,
	}
	export function CreateCompletionReportFormGroup() {
		return new FormGroup<CompletionReportFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<ReportFormat | null | undefined>(undefined),
			Scope: new FormControl<ReportScope | null | undefined>(undefined),
		});

	}

	export enum ReportFormat { REPORT_CSV_20191124 = 0 }

	export enum ReportScope { FAILED_FILES_ONLY = 0 }

	export interface CreateDataRepositoryTaskRequest {

		/** Required */
		Type: DataRepositoryTaskType;
		Paths?: Array<string>;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: string;

		/** Required */
		Report: CompletionReport;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		CapacityToRelease?: number | null;
	}
	export interface CreateDataRepositoryTaskRequestFormProperties {

		/** Required */
		Type: FormControl<DataRepositoryTaskType | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
		CapacityToRelease: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataRepositoryTaskRequestFormGroup() {
		return new FormGroup<CreateDataRepositoryTaskRequestFormProperties>({
			Type: new FormControl<DataRepositoryTaskType | null | undefined>(undefined, [Validators.required]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(21), Validators.pattern('^(fs-[0-9a-f]{8,})$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			CapacityToRelease: new FormControl<number | null | undefined>(undefined),
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

	export interface CreateFileCacheResponse {
		FileCache?: FileCacheCreating;
	}
	export interface CreateFileCacheResponseFormProperties {
	}
	export function CreateCreateFileCacheResponseFormGroup() {
		return new FormGroup<CreateFileCacheResponseFormProperties>({
		});

	}


	/** The response object for the Amazon File Cache resource being created in the <code>CreateFileCache</code> operation. */
	export interface FileCacheCreating {

		/**
		 * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId?: string | null;

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime?: Date | null;
		FileCacheId?: string;
		FileCacheType?: FileCacheType;
		FileCacheTypeVersion?: string;
		Lifecycle?: FileCacheLifecycle;
		FailureDetails?: FileCacheFailureDetails;
		StorageCapacity?: number | null;

		/**
		 * The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId?: string | null;

		/**
		 * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.
		 * Maximum items: 50
		 */
		SubnetIds?: Array<string>;

		/**
		 * A list of network interface IDs.
		 * Maximum items: 50
		 */
		NetworkInterfaceIds?: Array<string>;
		DNSName?: string;
		KmsKeyId?: string;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		CopyTagsToDataRepositoryAssociations?: boolean | null;
		LustreConfiguration?: FileCacheLustreConfiguration;
		DataRepositoryAssociationIds?: Array<string>;
	}

	/** The response object for the Amazon File Cache resource being created in the <code>CreateFileCache</code> operation. */
	export interface FileCacheCreatingFormProperties {

		/**
		 * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime: FormControl<Date | null | undefined>,
		FileCacheId: FormControl<string | null | undefined>,
		FileCacheType: FormControl<FileCacheType | null | undefined>,
		FileCacheTypeVersion: FormControl<string | null | undefined>,
		Lifecycle: FormControl<FileCacheLifecycle | null | undefined>,
		StorageCapacity: FormControl<number | null | undefined>,

		/**
		 * The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,
		CopyTagsToDataRepositoryAssociations: FormControl<boolean | null | undefined>,
	}
	export function CreateFileCacheCreatingFormGroup() {
		return new FormGroup<FileCacheCreatingFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FileCacheId: new FormControl<string | null | undefined>(undefined),
			FileCacheType: new FormControl<FileCacheType | null | undefined>(undefined),
			FileCacheTypeVersion: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<FileCacheLifecycle | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(21), Validators.pattern('^(vpc-[0-9a-f]{8,})$')]),
			DNSName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			CopyTagsToDataRepositoryAssociations: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FileCacheType { LUSTRE = 0 }

	export enum FileCacheLifecycle { AVAILABLE = 0, CREATING = 1, DELETING = 2, UPDATING = 3, FAILED = 4 }


	/** A structure providing details of any failures that occurred. */
	export interface FileCacheFailureDetails {
		Message?: string;
	}

	/** A structure providing details of any failures that occurred. */
	export interface FileCacheFailureDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFileCacheFailureDetailsFormGroup() {
		return new FormGroup<FileCacheFailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for the Amazon File Cache resource. */
	export interface FileCacheLustreConfiguration {
		PerUnitStorageThroughput?: number | null;
		DeploymentType?: FileCacheLustreDeploymentType;
		MountName?: string;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;
		MetadataConfiguration?: FileCacheLustreMetadataConfiguration;
		LogConfiguration?: LustreLogConfiguration;
	}

	/** The configuration for the Amazon File Cache resource. */
	export interface FileCacheLustreConfigurationFormProperties {
		PerUnitStorageThroughput: FormControl<number | null | undefined>,
		DeploymentType: FormControl<FileCacheLustreDeploymentType | null | undefined>,
		MountName: FormControl<string | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateFileCacheLustreConfigurationFormGroup() {
		return new FormGroup<FileCacheLustreConfigurationFormProperties>({
			PerUnitStorageThroughput: new FormControl<number | null | undefined>(undefined),
			DeploymentType: new FormControl<FileCacheLustreDeploymentType | null | undefined>(undefined),
			MountName: new FormControl<string | null | undefined>(undefined),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
		});

	}

	export enum FileCacheLustreDeploymentType { CACHE_1 = 0 }


	/** The configuration for a Lustre MDT (Metadata Target) storage volume. The metadata on Amazon File Cache is managed by a Lustre Metadata Server (MDS) while the actual metadata is persisted on an MDT. */
	export interface FileCacheLustreMetadataConfiguration {

		/** Required */
		StorageCapacity: number;
	}

	/** The configuration for a Lustre MDT (Metadata Target) storage volume. The metadata on Amazon File Cache is managed by a Lustre Metadata Server (MDS) while the actual metadata is persisted on an MDT. */
	export interface FileCacheLustreMetadataConfigurationFormProperties {

		/** Required */
		StorageCapacity: FormControl<number | null | undefined>,
	}
	export function CreateFileCacheLustreMetadataConfigurationFormGroup() {
		return new FormGroup<FileCacheLustreMetadataConfigurationFormProperties>({
			StorageCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFileCacheRequest {
		ClientRequestToken?: string;

		/** Required */
		FileCacheType: FileCacheType;

		/** Required */
		FileCacheTypeVersion: string;

		/** Required */
		StorageCapacity: number;

		/**
		 * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.
		 * Required
		 * Maximum items: 50
		 */
		SubnetIds: Array<string>;
		SecurityGroupIds?: Array<string>;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		CopyTagsToDataRepositoryAssociations?: boolean | null;
		KmsKeyId?: string;
		LustreConfiguration?: CreateFileCacheLustreConfiguration;
		DataRepositoryAssociations?: Array<FileCacheDataRepositoryAssociation>;
	}
	export interface CreateFileCacheRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		FileCacheType: FormControl<FileCacheType | null | undefined>,

		/** Required */
		FileCacheTypeVersion: FormControl<string | null | undefined>,

		/** Required */
		StorageCapacity: FormControl<number | null | undefined>,
		CopyTagsToDataRepositoryAssociations: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileCacheRequestFormGroup() {
		return new FormGroup<CreateFileCacheRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			FileCacheType: new FormControl<FileCacheType | null | undefined>(undefined, [Validators.required]),
			FileCacheTypeVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CopyTagsToDataRepositoryAssociations: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon File Cache configuration for the cache that you are creating. */
	export interface CreateFileCacheLustreConfiguration {

		/** Required */
		PerUnitStorageThroughput: number;

		/** Required */
		DeploymentType: FileCacheLustreDeploymentType;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/** Required */
		MetadataConfiguration: FileCacheLustreMetadataConfiguration;
	}

	/** The Amazon File Cache configuration for the cache that you are creating. */
	export interface CreateFileCacheLustreConfigurationFormProperties {

		/** Required */
		PerUnitStorageThroughput: FormControl<number | null | undefined>,

		/** Required */
		DeploymentType: FormControl<FileCacheLustreDeploymentType | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileCacheLustreConfigurationFormGroup() {
		return new FormGroup<CreateFileCacheLustreConfigurationFormProperties>({
			PerUnitStorageThroughput: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DeploymentType: new FormControl<FileCacheLustreDeploymentType | null | undefined>(undefined, [Validators.required]),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
		});

	}


	/** <p>The configuration for a data repository association (DRA) to be created during the Amazon File Cache resource creation. The DRA links the cache to either an Amazon S3 bucket or prefix, or a Network File System (NFS) data repository that supports the NFSv3 protocol.</p> <p>The DRA does not support automatic import or automatic export.</p> */
	export interface FileCacheDataRepositoryAssociation {

		/** Required */
		FileCachePath: string;

		/** Required */
		DataRepositoryPath: string;
		DataRepositorySubdirectories?: Array<string>;
		NFS?: FileCacheNFSConfiguration;
	}

	/** <p>The configuration for a data repository association (DRA) to be created during the Amazon File Cache resource creation. The DRA links the cache to either an Amazon S3 bucket or prefix, or a Network File System (NFS) data repository that supports the NFSv3 protocol.</p> <p>The DRA does not support automatic import or automatic export.</p> */
	export interface FileCacheDataRepositoryAssociationFormProperties {

		/** Required */
		FileCachePath: FormControl<string | null | undefined>,

		/** Required */
		DataRepositoryPath: FormControl<string | null | undefined>,
	}
	export function CreateFileCacheDataRepositoryAssociationFormGroup() {
		return new FormGroup<FileCacheDataRepositoryAssociationFormProperties>({
			FileCachePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataRepositoryPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for an NFS data repository association (DRA) created during the creation of the Amazon File Cache resource. */
	export interface FileCacheNFSConfiguration {

		/** Required */
		Version: NfsVersion;
		DnsIps?: Array<string>;
	}

	/** The configuration for an NFS data repository association (DRA) created during the creation of the Amazon File Cache resource. */
	export interface FileCacheNFSConfigurationFormProperties {

		/** Required */
		Version: FormControl<NfsVersion | null | undefined>,
	}
	export function CreateFileCacheNFSConfigurationFormGroup() {
		return new FormGroup<FileCacheNFSConfigurationFormProperties>({
			Version: new FormControl<NfsVersion | null | undefined>(undefined, [Validators.required]),
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

	export interface MissingFileCacheConfiguration {
	}
	export interface MissingFileCacheConfigurationFormProperties {
	}
	export function CreateMissingFileCacheConfigurationFormGroup() {
		return new FormGroup<MissingFileCacheConfigurationFormProperties>({
		});

	}


	/** The response object returned after the file system is created. */
	export interface CreateFileSystemResponse {
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
		ClientRequestToken?: string;

		/** Required */
		FileSystemType: FileSystemType;

		/** Required */
		StorageCapacity: number;
		StorageType?: StorageType;

		/** Required */
		SubnetIds: Array<string>;
		SecurityGroupIds?: Array<string>;
		Tags?: Array<Tag>;

		/**
		 * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
		WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

		/** <p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note> */
		LustreConfiguration?: CreateFileSystemLustreConfiguration;

		/** The ONTAP configuration properties of the FSx for ONTAP file system that you are creating. */
		OntapConfiguration?: CreateFileSystemOntapConfiguration;
		FileSystemTypeVersion?: string;
		OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
	}

	/** The request object used to create a new Amazon FSx file system. */
	export interface CreateFileSystemRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemType: FormControl<FileSystemType | null | undefined>,

		/** Required */
		StorageCapacity: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,

		/**
		 * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
		FileSystemTypeVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileSystemRequestFormGroup() {
		return new FormGroup<CreateFileSystemRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			FileSystemType: new FormControl<FileSystemType | null | undefined>(undefined, [Validators.required]),
			StorageCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^.{1,2048}$')]),
			FileSystemTypeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations. */
	export interface CreateFileSystemWindowsConfiguration {
		ActiveDirectoryId?: string;

		/** The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx for Windows with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP SVMs</a>. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
		DeploymentType?: WindowsDeploymentType;
		PreferredSubnetId?: string;

		/** Required */
		ThroughputCapacity: number;
		WeeklyMaintenanceStartTime?: string;
		DailyAutomaticBackupStartTime?: string;
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
		Aliases?: Array<string>;
		AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
	}

	/** The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations. */
	export interface CreateFileSystemWindowsConfigurationFormProperties {
		ActiveDirectoryId: FormControl<string | null | undefined>,
		DeploymentType: FormControl<WindowsDeploymentType | null | undefined>,
		PreferredSubnetId: FormControl<string | null | undefined>,

		/** Required */
		ThroughputCapacity: FormControl<number | null | undefined>,
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateFileSystemWindowsConfigurationFormGroup() {
		return new FormGroup<CreateFileSystemWindowsConfigurationFormProperties>({
			ActiveDirectoryId: new FormControl<string | null | undefined>(undefined),
			DeploymentType: new FormControl<WindowsDeploymentType | null | undefined>(undefined),
			PreferredSubnetId: new FormControl<string | null | undefined>(undefined),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined),
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx for Windows with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP SVMs</a>. */
	export interface SelfManagedActiveDirectoryConfiguration {

		/** Required */
		DomainName: string;
		OrganizationalUnitDistinguishedName?: string;
		FileSystemAdministratorsGroup?: string;

		/** Required */
		UserName: string;

		/** Required */
		Password: string;

		/** Required */
		DnsIps: Array<string>;
	}

	/** The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx for Windows with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP SVMs</a>. */
	export interface SelfManagedActiveDirectoryConfigurationFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		OrganizationalUnitDistinguishedName: FormControl<string | null | undefined>,
		FileSystemAdministratorsGroup: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedActiveDirectoryConfigurationFormGroup() {
		return new FormGroup<SelfManagedActiveDirectoryConfigurationFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
			FileSystemAdministratorsGroup: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system. */
	export interface WindowsAuditLogCreateConfiguration {

		/** Required */
		FileAccessAuditLogLevel: WindowsAccessAuditLogLevel;

		/** Required */
		FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel;
		AuditLogDestination?: string;
	}

	/** The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system. */
	export interface WindowsAuditLogCreateConfigurationFormProperties {

		/** Required */
		FileAccessAuditLogLevel: FormControl<WindowsAccessAuditLogLevel | null | undefined>,

		/** Required */
		FileShareAccessAuditLogLevel: FormControl<WindowsAccessAuditLogLevel | null | undefined>,
		AuditLogDestination: FormControl<string | null | undefined>,
	}
	export function CreateWindowsAuditLogCreateConfigurationFormGroup() {
		return new FormGroup<WindowsAuditLogCreateConfigurationFormProperties>({
			FileAccessAuditLogLevel: new FormControl<WindowsAccessAuditLogLevel | null | undefined>(undefined, [Validators.required]),
			FileShareAccessAuditLogLevel: new FormControl<WindowsAccessAuditLogLevel | null | undefined>(undefined, [Validators.required]),
			AuditLogDestination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note> */
	export interface CreateFileSystemLustreConfiguration {
		WeeklyMaintenanceStartTime?: string;
		ImportPath?: string;
		ExportPath?: string;
		ImportedFileChunkSize?: number | null;
		DeploymentType?: LustreDeploymentType;
		AutoImportPolicy?: AutoImportPolicyType;
		PerUnitStorageThroughput?: number | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
		DriveCacheType?: DriveCacheType;
		DataCompressionType?: DataCompressionType;
		LogConfiguration?: LustreLogCreateConfiguration;
		RootSquashConfiguration?: LustreRootSquashConfiguration;
	}

	/** <p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note> */
	export interface CreateFileSystemLustreConfigurationFormProperties {
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		ImportPath: FormControl<string | null | undefined>,
		ExportPath: FormControl<string | null | undefined>,
		ImportedFileChunkSize: FormControl<number | null | undefined>,
		DeploymentType: FormControl<LustreDeploymentType | null | undefined>,
		AutoImportPolicy: FormControl<AutoImportPolicyType | null | undefined>,
		PerUnitStorageThroughput: FormControl<number | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
		DriveCacheType: FormControl<DriveCacheType | null | undefined>,
		DataCompressionType: FormControl<DataCompressionType | null | undefined>,
	}
	export function CreateCreateFileSystemLustreConfigurationFormGroup() {
		return new FormGroup<CreateFileSystemLustreConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			ImportPath: new FormControl<string | null | undefined>(undefined),
			ExportPath: new FormControl<string | null | undefined>(undefined),
			ImportedFileChunkSize: new FormControl<number | null | undefined>(undefined),
			DeploymentType: new FormControl<LustreDeploymentType | null | undefined>(undefined),
			AutoImportPolicy: new FormControl<AutoImportPolicyType | null | undefined>(undefined),
			PerUnitStorageThroughput: new FormControl<number | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
			DriveCacheType: new FormControl<DriveCacheType | null | undefined>(undefined),
			DataCompressionType: new FormControl<DataCompressionType | null | undefined>(undefined),
		});

	}


	/** <p>The Lustre logging configuration used when creating or updating an Amazon FSx for Lustre file system. An Amazon File Cache is created with Lustre logging enabled by default, with a setting of <code>WARN_ERROR</code> for the logging events. which can't be changed.</p> <p>Lustre logging writes the enabled logging events for your file system or cache to Amazon CloudWatch Logs.</p> */
	export interface LustreLogCreateConfiguration {

		/** Required */
		Level: LustreAccessAuditLogLevel;
		Destination?: string;
	}

	/** <p>The Lustre logging configuration used when creating or updating an Amazon FSx for Lustre file system. An Amazon File Cache is created with Lustre logging enabled by default, with a setting of <code>WARN_ERROR</code> for the logging events. which can't be changed.</p> <p>Lustre logging writes the enabled logging events for your file system or cache to Amazon CloudWatch Logs.</p> */
	export interface LustreLogCreateConfigurationFormProperties {

		/** Required */
		Level: FormControl<LustreAccessAuditLogLevel | null | undefined>,
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateLustreLogCreateConfigurationFormGroup() {
		return new FormGroup<LustreLogCreateConfigurationFormProperties>({
			Level: new FormControl<LustreAccessAuditLogLevel | null | undefined>(undefined, [Validators.required]),
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ONTAP configuration properties of the FSx for ONTAP file system that you are creating. */
	export interface CreateFileSystemOntapConfiguration {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays?: number | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;

		/** Required */
		DeploymentType: OntapDeploymentType;
		EndpointIpAddressRange?: string;
		FsxAdminPassword?: string;
		DiskIopsConfiguration?: DiskIopsConfiguration;
		PreferredSubnetId?: string;
		RouteTableIds?: Array<string>;

		/** Required */
		ThroughputCapacity: number;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;
	}

	/** The ONTAP configuration properties of the FSx for ONTAP file system that you are creating. */
	export interface CreateFileSystemOntapConfigurationFormProperties {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,

		/** Required */
		DeploymentType: FormControl<OntapDeploymentType | null | undefined>,
		EndpointIpAddressRange: FormControl<string | null | undefined>,
		FsxAdminPassword: FormControl<string | null | undefined>,
		PreferredSubnetId: FormControl<string | null | undefined>,

		/** Required */
		ThroughputCapacity: FormControl<number | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileSystemOntapConfigurationFormGroup() {
		return new FormGroup<CreateFileSystemOntapConfigurationFormProperties>({
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(90)]),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			DeploymentType: new FormControl<OntapDeploymentType | null | undefined>(undefined, [Validators.required]),
			EndpointIpAddressRange: new FormControl<string | null | undefined>(undefined),
			FsxAdminPassword: new FormControl<string | null | undefined>(undefined),
			PreferredSubnetId: new FormControl<string | null | undefined>(undefined),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
		});

	}


	/** The Amazon FSx for OpenZFS configuration properties for the file system that you are creating. */
	export interface CreateFileSystemOpenZFSConfiguration {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
		CopyTagsToVolumes?: boolean | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;

		/** Required */
		DeploymentType: OpenZFSDeploymentType;

		/** Required */
		ThroughputCapacity: number;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/** The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx). */
		DiskIopsConfiguration?: DiskIopsConfiguration;
		RootVolumeConfiguration?: OpenZFSCreateRootVolumeConfiguration;
	}

	/** The Amazon FSx for OpenZFS configuration properties for the file system that you are creating. */
	export interface CreateFileSystemOpenZFSConfigurationFormProperties {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
		CopyTagsToVolumes: FormControl<boolean | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,

		/** Required */
		DeploymentType: FormControl<OpenZFSDeploymentType | null | undefined>,

		/** Required */
		ThroughputCapacity: FormControl<number | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileSystemOpenZFSConfigurationFormGroup() {
		return new FormGroup<CreateFileSystemOpenZFSConfigurationFormProperties>({
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(90)]),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
			CopyTagsToVolumes: new FormControl<boolean | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			DeploymentType: new FormControl<OpenZFSDeploymentType | null | undefined>(undefined, [Validators.required]),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
		});

	}


	/** The configuration of an Amazon FSx for OpenZFS root volume. */
	export interface OpenZFSCreateRootVolumeConfiguration {
		RecordSizeKiB?: number | null;
		DataCompressionType?: OpenZFSDataCompressionType;
		NfsExports?: Array<OpenZFSNfsExport>;
		UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
		CopyTagsToSnapshots?: boolean | null;
		ReadOnly?: boolean | null;
	}

	/** The configuration of an Amazon FSx for OpenZFS root volume. */
	export interface OpenZFSCreateRootVolumeConfigurationFormProperties {
		RecordSizeKiB: FormControl<number | null | undefined>,
		DataCompressionType: FormControl<OpenZFSDataCompressionType | null | undefined>,
		CopyTagsToSnapshots: FormControl<boolean | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateOpenZFSCreateRootVolumeConfigurationFormGroup() {
		return new FormGroup<OpenZFSCreateRootVolumeConfigurationFormProperties>({
			RecordSizeKiB: new FormControl<number | null | undefined>(undefined),
			DataCompressionType: new FormControl<OpenZFSDataCompressionType | null | undefined>(undefined),
			CopyTagsToSnapshots: new FormControl<boolean | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
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
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 */
		BackupId: string;
		ClientRequestToken?: string;

		/** Required */
		SubnetIds: Array<string>;
		SecurityGroupIds?: Array<string>;
		Tags?: Array<Tag>;
		WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

		/** <p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note> */
		LustreConfiguration?: CreateFileSystemLustreConfiguration;
		StorageType?: StorageType;

		/**
		 * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
		FileSystemTypeVersion?: string;
		OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
		StorageCapacity?: number | null;
	}

	/** The request object for the <code>CreateFileSystemFromBackup</code> operation. */
	export interface CreateFileSystemFromBackupRequestFormProperties {

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 */
		BackupId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,

		/**
		 * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
		FileSystemTypeVersion: FormControl<string | null | undefined>,
		StorageCapacity: FormControl<number | null | undefined>,
	}
	export function CreateCreateFileSystemFromBackupRequestFormGroup() {
		return new FormGroup<CreateFileSystemFromBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(128), Validators.pattern('^(backup-[0-9a-f]{8,})$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^.{1,2048}$')]),
			FileSystemTypeVersion: new FormControl<string | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
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

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		Name: string;

		/** Required */
		VolumeId: string;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateSnapshotRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		VolumeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotRequestFormGroup() {
		return new FormGroup<CreateSnapshotRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStorageVirtualMachineResponse {
		StorageVirtualMachine?: StorageVirtualMachine;
	}
	export interface CreateStorageVirtualMachineResponseFormProperties {
	}
	export function CreateCreateStorageVirtualMachineResponseFormGroup() {
		return new FormGroup<CreateStorageVirtualMachineResponseFormProperties>({
		});

	}


	/** Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration. */
	export interface StorageVirtualMachine {
		ActiveDirectoryConfiguration?: SvmActiveDirectoryConfiguration;

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime?: Date | null;
		Endpoints?: SvmEndpoints;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId?: string | null;
		Lifecycle?: StorageVirtualMachineLifecycle;
		Name?: string;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;
		StorageVirtualMachineId?: string;
		Subtype?: StorageVirtualMachineSubtype;
		UUID?: string;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		LifecycleTransitionReason?: LifecycleTransitionReason;
		RootVolumeSecurityStyle?: SecurityStyle;
	}

	/** Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration. */
	export interface StorageVirtualMachineFormProperties {

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<StorageVirtualMachineLifecycle | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,
		StorageVirtualMachineId: FormControl<string | null | undefined>,
		Subtype: FormControl<StorageVirtualMachineSubtype | null | undefined>,
		UUID: FormControl<string | null | undefined>,
		RootVolumeSecurityStyle: FormControl<SecurityStyle | null | undefined>,
	}
	export function CreateStorageVirtualMachineFormGroup() {
		return new FormGroup<StorageVirtualMachineFormProperties>({
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(21), Validators.pattern('^(fs-[0-9a-f]{8,})$')]),
			Lifecycle: new FormControl<StorageVirtualMachineLifecycle | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			StorageVirtualMachineId: new FormControl<string | null | undefined>(undefined),
			Subtype: new FormControl<StorageVirtualMachineSubtype | null | undefined>(undefined),
			UUID: new FormControl<string | null | undefined>(undefined),
			RootVolumeSecurityStyle: new FormControl<SecurityStyle | null | undefined>(undefined),
		});

	}


	/** Describes the Microsoft Active Directory (AD) directory configuration to which the FSx for ONTAP storage virtual machine (SVM) is joined. Note that account credentials are not returned in the response payload. */
	export interface SvmActiveDirectoryConfiguration {
		NetBiosName?: string;

		/** The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
	}

	/** Describes the Microsoft Active Directory (AD) directory configuration to which the FSx for ONTAP storage virtual machine (SVM) is joined. Note that account credentials are not returned in the response payload. */
	export interface SvmActiveDirectoryConfigurationFormProperties {
		NetBiosName: FormControl<string | null | undefined>,
	}
	export function CreateSvmActiveDirectoryConfigurationFormGroup() {
		return new FormGroup<SvmActiveDirectoryConfigurationFormProperties>({
			NetBiosName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. */
	export interface SvmEndpoints {
		Iscsi?: SvmEndpoint;
		Management?: SvmEndpoint;
		Nfs?: SvmEndpoint;
		Smb?: SvmEndpoint;
	}

	/** An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. */
	export interface SvmEndpointsFormProperties {
	}
	export function CreateSvmEndpointsFormGroup() {
		return new FormGroup<SvmEndpointsFormProperties>({
		});

	}


	/** An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints. */
	export interface SvmEndpoint {

		/**
		 * The file system's DNS name. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 */
		DNSName?: string | null;
		IpAddresses?: Array<string>;
	}

	/** An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints. */
	export interface SvmEndpointFormProperties {

		/**
		 * The file system's DNS name. You can mount your file system using its DNS name.
		 * Max length: 275
		 * Min length: 16
		 */
		DNSName: FormControl<string | null | undefined>,
	}
	export function CreateSvmEndpointFormGroup() {
		return new FormGroup<SvmEndpointFormProperties>({
			DNSName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(16), Validators.maxLength(275), Validators.pattern('^((fs|fc)i?-[0-9a-f]{8,}\..{4,253})$')]),
		});

	}

	export enum StorageVirtualMachineLifecycle { CREATED = 0, CREATING = 1, DELETING = 2, FAILED = 3, MISCONFIGURED = 4, PENDING = 5 }

	export enum StorageVirtualMachineSubtype { DEFAULT = 0, DP_DESTINATION = 1, SYNC_DESTINATION = 2, SYNC_SOURCE = 3 }

	export interface CreateStorageVirtualMachineRequest {
		ActiveDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: string;

		/** Required */
		Name: string;
		SvmAdminPassword?: string;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		RootVolumeSecurityStyle?: SecurityStyle;
	}
	export interface CreateStorageVirtualMachineRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		SvmAdminPassword: FormControl<string | null | undefined>,
		RootVolumeSecurityStyle: FormControl<SecurityStyle | null | undefined>,
	}
	export function CreateCreateStorageVirtualMachineRequestFormGroup() {
		return new FormGroup<CreateStorageVirtualMachineRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(21), Validators.pattern('^(fs-[0-9a-f]{8,})$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SvmAdminPassword: new FormControl<string | null | undefined>(undefined),
			RootVolumeSecurityStyle: new FormControl<SecurityStyle | null | undefined>(undefined),
		});

	}


	/** The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. */
	export interface CreateSvmActiveDirectoryConfiguration {

		/** Required */
		NetBiosName: string;

		/** The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx for Windows with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP SVMs</a>. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
	}

	/** The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. */
	export interface CreateSvmActiveDirectoryConfigurationFormProperties {

		/** Required */
		NetBiosName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSvmActiveDirectoryConfigurationFormGroup() {
		return new FormGroup<CreateSvmActiveDirectoryConfigurationFormProperties>({
			NetBiosName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVolumeResponse {
		Volume?: Volume;
	}
	export interface CreateVolumeResponseFormProperties {
	}
	export function CreateCreateVolumeResponseFormGroup() {
		return new FormGroup<CreateVolumeResponseFormProperties>({
		});

	}

	export interface CreateVolumeRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		VolumeType: VolumeType;

		/** Required */
		Name: string;
		OntapConfiguration?: CreateOntapVolumeConfiguration;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		OpenZFSConfiguration?: CreateOpenZFSVolumeConfiguration;
	}
	export interface CreateVolumeRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		VolumeType: FormControl<VolumeType | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVolumeRequestFormGroup() {
		return new FormGroup<CreateVolumeRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the configuration of the ONTAP volume that you are creating. */
	export interface CreateOntapVolumeConfiguration {
		JunctionPath?: string;
		SecurityStyle?: SecurityStyle;

		/** Required */
		SizeInMegabytes: number;
		StorageEfficiencyEnabled?: boolean | null;

		/** Required */
		StorageVirtualMachineId: string;

		/** <p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul> */
		TieringPolicy?: TieringPolicy;
		OntapVolumeType?: InputOntapVolumeType;
		SnapshotPolicy?: string;
		CopyTagsToBackups?: boolean | null;
		SnaplockConfiguration?: CreateSnaplockConfiguration;
	}

	/** Specifies the configuration of the ONTAP volume that you are creating. */
	export interface CreateOntapVolumeConfigurationFormProperties {
		JunctionPath: FormControl<string | null | undefined>,
		SecurityStyle: FormControl<SecurityStyle | null | undefined>,

		/** Required */
		SizeInMegabytes: FormControl<number | null | undefined>,
		StorageEfficiencyEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		StorageVirtualMachineId: FormControl<string | null | undefined>,
		OntapVolumeType: FormControl<InputOntapVolumeType | null | undefined>,
		SnapshotPolicy: FormControl<string | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOntapVolumeConfigurationFormGroup() {
		return new FormGroup<CreateOntapVolumeConfigurationFormProperties>({
			JunctionPath: new FormControl<string | null | undefined>(undefined),
			SecurityStyle: new FormControl<SecurityStyle | null | undefined>(undefined),
			SizeInMegabytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StorageEfficiencyEnabled: new FormControl<boolean | null | undefined>(undefined),
			StorageVirtualMachineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OntapVolumeType: new FormControl<InputOntapVolumeType | null | undefined>(undefined),
			SnapshotPolicy: new FormControl<string | null | undefined>(undefined),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum InputOntapVolumeType { RW = 0, DP = 1 }


	/** Defines the SnapLock configuration when creating an FSx for ONTAP SnapLock volume.  */
	export interface CreateSnaplockConfiguration {
		AuditLogVolume?: boolean | null;
		AutocommitPeriod?: AutocommitPeriod;
		PrivilegedDelete?: PrivilegedDelete;
		RetentionPeriod?: SnaplockRetentionPeriod;

		/** Required */
		SnaplockType: SnaplockType;
		VolumeAppendModeEnabled?: boolean | null;
	}

	/** Defines the SnapLock configuration when creating an FSx for ONTAP SnapLock volume.  */
	export interface CreateSnaplockConfigurationFormProperties {
		AuditLogVolume: FormControl<boolean | null | undefined>,
		PrivilegedDelete: FormControl<PrivilegedDelete | null | undefined>,

		/** Required */
		SnaplockType: FormControl<SnaplockType | null | undefined>,
		VolumeAppendModeEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSnaplockConfigurationFormGroup() {
		return new FormGroup<CreateSnaplockConfigurationFormProperties>({
			AuditLogVolume: new FormControl<boolean | null | undefined>(undefined),
			PrivilegedDelete: new FormControl<PrivilegedDelete | null | undefined>(undefined),
			SnaplockType: new FormControl<SnaplockType | null | undefined>(undefined, [Validators.required]),
			VolumeAppendModeEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating. */
	export interface CreateOpenZFSVolumeConfiguration {

		/** Required */
		ParentVolumeId: string;
		StorageCapacityReservationGiB?: number | null;
		StorageCapacityQuotaGiB?: number | null;
		RecordSizeKiB?: number | null;
		DataCompressionType?: OpenZFSDataCompressionType;
		CopyTagsToSnapshots?: boolean | null;
		OriginSnapshot?: CreateOpenZFSOriginSnapshotConfiguration;
		ReadOnly?: boolean | null;
		NfsExports?: Array<OpenZFSNfsExport>;
		UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
	}

	/** Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating. */
	export interface CreateOpenZFSVolumeConfigurationFormProperties {

		/** Required */
		ParentVolumeId: FormControl<string | null | undefined>,
		StorageCapacityReservationGiB: FormControl<number | null | undefined>,
		StorageCapacityQuotaGiB: FormControl<number | null | undefined>,
		RecordSizeKiB: FormControl<number | null | undefined>,
		DataCompressionType: FormControl<OpenZFSDataCompressionType | null | undefined>,
		CopyTagsToSnapshots: FormControl<boolean | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOpenZFSVolumeConfigurationFormGroup() {
		return new FormGroup<CreateOpenZFSVolumeConfigurationFormProperties>({
			ParentVolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageCapacityReservationGiB: new FormControl<number | null | undefined>(undefined),
			StorageCapacityQuotaGiB: new FormControl<number | null | undefined>(undefined),
			RecordSizeKiB: new FormControl<number | null | undefined>(undefined),
			DataCompressionType: new FormControl<OpenZFSDataCompressionType | null | undefined>(undefined),
			CopyTagsToSnapshots: new FormControl<boolean | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The snapshot configuration to use when creating an OpenZFS volume from a snapshot.  */
	export interface CreateOpenZFSOriginSnapshotConfiguration {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 */
		SnapshotARN: string;

		/** Required */
		CopyStrategy: OpenZFSCopyStrategy;
	}

	/** The snapshot configuration to use when creating an OpenZFS volume from a snapshot.  */
	export interface CreateOpenZFSOriginSnapshotConfigurationFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Required
		 * Max length: 512
		 * Min length: 8
		 */
		SnapshotARN: FormControl<string | null | undefined>,

		/** Required */
		CopyStrategy: FormControl<OpenZFSCopyStrategy | null | undefined>,
	}
	export function CreateCreateOpenZFSOriginSnapshotConfigurationFormGroup() {
		return new FormGroup<CreateOpenZFSOriginSnapshotConfigurationFormProperties>({
			SnapshotARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
			CopyStrategy: new FormControl<OpenZFSCopyStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MissingVolumeConfiguration {
	}
	export interface MissingVolumeConfigurationFormProperties {
	}
	export function CreateMissingVolumeConfigurationFormGroup() {
		return new FormGroup<MissingVolumeConfigurationFormProperties>({
		});

	}

	export interface StorageVirtualMachineNotFound {
	}
	export interface StorageVirtualMachineNotFoundFormProperties {
	}
	export function CreateStorageVirtualMachineNotFoundFormGroup() {
		return new FormGroup<StorageVirtualMachineNotFoundFormProperties>({
		});

	}

	export interface CreateVolumeFromBackupResponse {
		Volume?: Volume;
	}
	export interface CreateVolumeFromBackupResponseFormProperties {
	}
	export function CreateCreateVolumeFromBackupResponseFormGroup() {
		return new FormGroup<CreateVolumeFromBackupResponseFormProperties>({
		});

	}

	export interface CreateVolumeFromBackupRequest {

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 */
		BackupId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		Name: string;
		OntapConfiguration?: CreateOntapVolumeConfiguration;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateVolumeFromBackupRequestFormProperties {

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Required
		 * Max length: 128
		 * Min length: 12
		 */
		BackupId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVolumeFromBackupRequestFormGroup() {
		return new FormGroup<CreateVolumeFromBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(128), Validators.pattern('^(backup-[0-9a-f]{8,})$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response object for the <code>DeleteBackup</code> operation. */
	export interface DeleteBackupResponse {
		BackupId?: string;
		Lifecycle?: BackupLifecycle;
	}

	/** The response object for the <code>DeleteBackup</code> operation. */
	export interface DeleteBackupResponseFormProperties {
		BackupId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<BackupLifecycle | null | undefined>,
	}
	export function CreateDeleteBackupResponseFormGroup() {
		return new FormGroup<DeleteBackupResponseFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<BackupLifecycle | null | undefined>(undefined),
		});

	}


	/** The request object for the <code>DeleteBackup</code> operation. */
	export interface DeleteBackupRequest {

		/** Required */
		BackupId: string;
		ClientRequestToken?: string;
	}

	/** The request object for the <code>DeleteBackup</code> operation. */
	export interface DeleteBackupRequestFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupRequestFormGroup() {
		return new FormGroup<DeleteBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface BackupBeingCopied {
	}
	export interface BackupBeingCopiedFormProperties {
	}
	export function CreateBackupBeingCopiedFormGroup() {
		return new FormGroup<BackupBeingCopiedFormProperties>({
		});

	}

	export interface DeleteDataRepositoryAssociationResponse {
		AssociationId?: string;
		Lifecycle?: DataRepositoryLifecycle;
		DeleteDataInFileSystem?: boolean | null;
	}
	export interface DeleteDataRepositoryAssociationResponseFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<DataRepositoryLifecycle | null | undefined>,
		DeleteDataInFileSystem: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteDataRepositoryAssociationResponseFormGroup() {
		return new FormGroup<DeleteDataRepositoryAssociationResponseFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<DataRepositoryLifecycle | null | undefined>(undefined),
			DeleteDataInFileSystem: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteDataRepositoryAssociationRequest {

		/** Required */
		AssociationId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
		DeleteDataInFileSystem?: boolean | null;
	}
	export interface DeleteDataRepositoryAssociationRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
		DeleteDataInFileSystem: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteDataRepositoryAssociationRequestFormGroup() {
		return new FormGroup<DeleteDataRepositoryAssociationRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			DeleteDataInFileSystem: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DataRepositoryAssociationNotFound {
	}
	export interface DataRepositoryAssociationNotFoundFormProperties {
	}
	export function CreateDataRepositoryAssociationNotFoundFormGroup() {
		return new FormGroup<DataRepositoryAssociationNotFoundFormProperties>({
		});

	}

	export interface DeleteFileCacheResponse {
		FileCacheId?: string;
		Lifecycle?: FileCacheLifecycle;
	}
	export interface DeleteFileCacheResponseFormProperties {
		FileCacheId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<FileCacheLifecycle | null | undefined>,
	}
	export function CreateDeleteFileCacheResponseFormGroup() {
		return new FormGroup<DeleteFileCacheResponseFormProperties>({
			FileCacheId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<FileCacheLifecycle | null | undefined>(undefined),
		});

	}

	export interface DeleteFileCacheRequest {

		/** Required */
		FileCacheId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface DeleteFileCacheRequestFormProperties {

		/** Required */
		FileCacheId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileCacheRequestFormGroup() {
		return new FormGroup<DeleteFileCacheRequestFormProperties>({
			FileCacheId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
		});

	}

	export interface FileCacheNotFound {
	}
	export interface FileCacheNotFoundFormProperties {
	}
	export function CreateFileCacheNotFoundFormGroup() {
		return new FormGroup<FileCacheNotFoundFormProperties>({
		});

	}


	/** The response object for the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemResponse {
		FileSystemId?: string;
		Lifecycle?: FileSystemLifecycle;

		/** The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
		WindowsResponse?: DeleteFileSystemWindowsResponse;

		/** The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation. */
		LustreResponse?: DeleteFileSystemLustreResponse;
		OpenZFSResponse?: DeleteFileSystemOpenZFSResponse;
	}

	/** The response object for the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemResponseFormProperties {
		FileSystemId: FormControl<string | null | undefined>,
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
		FinalBackupId?: string;
		FinalBackupTags?: Array<Tag>;
	}

	/** The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemWindowsResponseFormProperties {
		FinalBackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileSystemWindowsResponseFormGroup() {
		return new FormGroup<DeleteFileSystemWindowsResponseFormProperties>({
			FinalBackupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemLustreResponse {
		FinalBackupId?: string;
		FinalBackupTags?: Array<Tag>;
	}

	/** The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemLustreResponseFormProperties {
		FinalBackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileSystemLustreResponseFormGroup() {
		return new FormGroup<DeleteFileSystemLustreResponseFormProperties>({
			FinalBackupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object for the Amazon FSx for OpenZFS file system that's being deleted in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemOpenZFSResponse {

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Max length: 128
		 * Min length: 12
		 */
		FinalBackupId?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		FinalBackupTags?: Array<Tag>;
	}

	/** The response object for the Amazon FSx for OpenZFS file system that's being deleted in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemOpenZFSResponseFormProperties {

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Max length: 128
		 * Min length: 12
		 */
		FinalBackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileSystemOpenZFSResponseFormGroup() {
		return new FormGroup<DeleteFileSystemOpenZFSResponseFormProperties>({
			FinalBackupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(128), Validators.pattern('^(backup-[0-9a-f]{8,})$')]),
		});

	}


	/** The request object for <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemRequest {

		/** Required */
		FileSystemId: string;
		ClientRequestToken?: string;

		/** The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
		WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;

		/** The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation. */
		LustreConfiguration?: DeleteFileSystemLustreConfiguration;
		OpenZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration;
	}

	/** The request object for <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemRequestFormProperties {

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileSystemRequestFormGroup() {
		return new FormGroup<DeleteFileSystemRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemWindowsConfiguration {
		SkipFinalBackup?: boolean | null;
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


	/** The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemLustreConfiguration {
		SkipFinalBackup?: boolean | null;
		FinalBackupTags?: Array<Tag>;
	}

	/** The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemLustreConfigurationFormProperties {
		SkipFinalBackup: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteFileSystemLustreConfigurationFormGroup() {
		return new FormGroup<DeleteFileSystemLustreConfigurationFormProperties>({
			SkipFinalBackup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration object for the Amazon FSx for OpenZFS file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemOpenZFSConfiguration {
		SkipFinalBackup?: boolean | null;
		FinalBackupTags?: Array<Tag>;
		Options?: Array<DeleteFileSystemOpenZFSOption>;
	}

	/** The configuration object for the Amazon FSx for OpenZFS file system used in the <code>DeleteFileSystem</code> operation. */
	export interface DeleteFileSystemOpenZFSConfigurationFormProperties {
		SkipFinalBackup: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteFileSystemOpenZFSConfigurationFormGroup() {
		return new FormGroup<DeleteFileSystemOpenZFSConfigurationFormProperties>({
			SkipFinalBackup: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DeleteFileSystemOpenZFSOption { DELETE_CHILD_VOLUMES_AND_SNAPSHOTS = 0 }

	export interface DeleteSnapshotResponse {
		SnapshotId?: string;
		Lifecycle?: SnapshotLifecycle;
	}
	export interface DeleteSnapshotResponseFormProperties {
		SnapshotId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<SnapshotLifecycle | null | undefined>,
	}
	export function CreateDeleteSnapshotResponseFormGroup() {
		return new FormGroup<DeleteSnapshotResponseFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<SnapshotLifecycle | null | undefined>(undefined),
		});

	}

	export interface DeleteSnapshotRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		SnapshotId: string;
	}
	export interface DeleteSnapshotRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotRequestFormGroup() {
		return new FormGroup<DeleteSnapshotRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SnapshotNotFound {
	}
	export interface SnapshotNotFoundFormProperties {
	}
	export function CreateSnapshotNotFoundFormGroup() {
		return new FormGroup<SnapshotNotFoundFormProperties>({
		});

	}

	export interface DeleteStorageVirtualMachineResponse {
		StorageVirtualMachineId?: string;
		Lifecycle?: StorageVirtualMachineLifecycle;
	}
	export interface DeleteStorageVirtualMachineResponseFormProperties {
		StorageVirtualMachineId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<StorageVirtualMachineLifecycle | null | undefined>,
	}
	export function CreateDeleteStorageVirtualMachineResponseFormGroup() {
		return new FormGroup<DeleteStorageVirtualMachineResponseFormProperties>({
			StorageVirtualMachineId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<StorageVirtualMachineLifecycle | null | undefined>(undefined),
		});

	}

	export interface DeleteStorageVirtualMachineRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		StorageVirtualMachineId: string;
	}
	export interface DeleteStorageVirtualMachineRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		StorageVirtualMachineId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStorageVirtualMachineRequestFormGroup() {
		return new FormGroup<DeleteStorageVirtualMachineRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			StorageVirtualMachineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVolumeResponse {
		VolumeId?: string;
		Lifecycle?: VolumeLifecycle;
		OntapResponse?: DeleteVolumeOntapResponse;
	}
	export interface DeleteVolumeResponseFormProperties {
		VolumeId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<VolumeLifecycle | null | undefined>,
	}
	export function CreateDeleteVolumeResponseFormGroup() {
		return new FormGroup<DeleteVolumeResponseFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<VolumeLifecycle | null | undefined>(undefined),
		});

	}


	/** The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation. */
	export interface DeleteVolumeOntapResponse {

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Max length: 128
		 * Min length: 12
		 */
		FinalBackupId?: string | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		FinalBackupTags?: Array<Tag>;
	}

	/** The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation. */
	export interface DeleteVolumeOntapResponseFormProperties {

		/**
		 * The ID of the source backup. Specifies the backup that you are copying.
		 * Max length: 128
		 * Min length: 12
		 */
		FinalBackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVolumeOntapResponseFormGroup() {
		return new FormGroup<DeleteVolumeOntapResponseFormProperties>({
			FinalBackupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(128), Validators.pattern('^(backup-[0-9a-f]{8,})$')]),
		});

	}

	export interface DeleteVolumeRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		VolumeId: string;
		OntapConfiguration?: DeleteVolumeOntapConfiguration;
		OpenZFSConfiguration?: DeleteVolumeOpenZFSConfiguration;
	}
	export interface DeleteVolumeRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		VolumeId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVolumeRequestFormGroup() {
		return new FormGroup<DeleteVolumeRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Use to specify skipping a final backup, adding tags to a final backup, or bypassing the retention period of an FSx for ONTAP SnapLock Enterprise volume when deleting an FSx for ONTAP volume.  */
	export interface DeleteVolumeOntapConfiguration {
		SkipFinalBackup?: boolean | null;

		/**
		 * A list of <code>Tag</code> values, with a maximum of 50 elements.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		FinalBackupTags?: Array<Tag>;
		BypassSnaplockEnterpriseRetention?: boolean | null;
	}

	/** Use to specify skipping a final backup, adding tags to a final backup, or bypassing the retention period of an FSx for ONTAP SnapLock Enterprise volume when deleting an FSx for ONTAP volume.  */
	export interface DeleteVolumeOntapConfigurationFormProperties {
		SkipFinalBackup: FormControl<boolean | null | undefined>,
		BypassSnaplockEnterpriseRetention: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteVolumeOntapConfigurationFormGroup() {
		return new FormGroup<DeleteVolumeOntapConfigurationFormProperties>({
			SkipFinalBackup: new FormControl<boolean | null | undefined>(undefined),
			BypassSnaplockEnterpriseRetention: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A value that specifies whether to delete all child volumes and snapshots.  */
	export interface DeleteVolumeOpenZFSConfiguration {
		Options?: Array<DeleteOpenZFSVolumeOption>;
	}

	/** A value that specifies whether to delete all child volumes and snapshots.  */
	export interface DeleteVolumeOpenZFSConfigurationFormProperties {
	}
	export function CreateDeleteVolumeOpenZFSConfigurationFormGroup() {
		return new FormGroup<DeleteVolumeOpenZFSConfigurationFormProperties>({
		});

	}

	export enum DeleteOpenZFSVolumeOption { DELETE_CHILD_VOLUMES_AND_SNAPSHOTS = 0 }


	/** Response object for the <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsResponse {
		Backups?: Array<Backup>;
		NextToken?: string;
	}

	/** Response object for the <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupsResponseFormGroup() {
		return new FormGroup<DescribeBackupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for the <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsRequest {
		BackupIds?: Array<string>;
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** The request object for the <code>DescribeBackups</code> operation. */
	export interface DescribeBackupsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
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
		Name?: FilterName;
		Values?: Array<string>;
	}

	/** A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements. */
	export interface FilterFormProperties {
		Name: FormControl<FilterName | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<FilterName | null | undefined>(undefined),
		});

	}


	/** The name for a filter. */
	export enum FilterName { 'file-system-id' = 0, 'backup-type' = 1, 'file-system-type' = 2, 'volume-id' = 3, 'data-repository-type' = 4, 'file-cache-id' = 5, 'file-cache-type' = 6 }

	export interface DescribeDataRepositoryAssociationsResponse {
		Associations?: Array<DataRepositoryAssociation>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeDataRepositoryAssociationsResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataRepositoryAssociationsResponseFormGroup() {
		return new FormGroup<DescribeDataRepositoryAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}

	export interface DescribeDataRepositoryAssociationsRequest {
		AssociationIds?: Array<string>;

		/**
		 * A list of <code>Filter</code> elements.
		 * Maximum items: 10
		 */
		Filters?: Array<Filter>;
		MaxResults?: number | null;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeDataRepositoryAssociationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataRepositoryAssociationsRequestFormGroup() {
		return new FormGroup<DescribeDataRepositoryAssociationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}

	export interface InvalidDataRepositoryType {
	}
	export interface InvalidDataRepositoryTypeFormProperties {
	}
	export function CreateInvalidDataRepositoryTypeFormGroup() {
		return new FormGroup<InvalidDataRepositoryTypeFormProperties>({
		});

	}

	export interface DescribeDataRepositoryTasksResponse {
		DataRepositoryTasks?: Array<DataRepositoryTask>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeDataRepositoryTasksResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataRepositoryTasksResponseFormGroup() {
		return new FormGroup<DescribeDataRepositoryTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
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
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataRepositoryTasksRequestFormGroup() {
		return new FormGroup<DescribeDataRepositoryTasksRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2147483647)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}


	/** (Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter. */
	export interface DataRepositoryTaskFilter {
		Name?: DataRepositoryTaskFilterName;
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

	export enum DataRepositoryTaskFilterName { 'file-system-id' = 0, 'task-lifecycle' = 1, 'data-repository-association-id' = 2, 'file-cache-id' = 3 }

	export interface DescribeFileCachesResponse {
		FileCaches?: Array<FileCache>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeFileCachesResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileCachesResponseFormGroup() {
		return new FormGroup<DescribeFileCachesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}


	/** A description of a specific Amazon File Cache resource, which is a response object from the <code>DescribeFileCaches</code> operation. */
	export interface FileCache {

		/**
		 * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId?: string | null;

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime?: Date | null;
		FileCacheId?: string;
		FileCacheType?: FileCacheType;
		FileCacheTypeVersion?: string;
		Lifecycle?: FileCacheLifecycle;
		FailureDetails?: FileCacheFailureDetails;
		StorageCapacity?: number | null;

		/**
		 * The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId?: string | null;

		/**
		 * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.
		 * Maximum items: 50
		 */
		SubnetIds?: Array<string>;

		/**
		 * A list of network interface IDs.
		 * Maximum items: 50
		 */
		NetworkInterfaceIds?: Array<string>;
		DNSName?: string;
		KmsKeyId?: string;

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN?: string | null;
		LustreConfiguration?: FileCacheLustreConfiguration;
		DataRepositoryAssociationIds?: Array<string>;
	}

	/** A description of a specific Amazon File Cache resource, which is a response object from the <code>DescribeFileCaches</code> operation. */
	export interface FileCacheFormProperties {

		/**
		 * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,

		/** The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time. */
		CreationTime: FormControl<Date | null | undefined>,
		FileCacheId: FormControl<string | null | undefined>,
		FileCacheType: FormControl<FileCacheType | null | undefined>,
		FileCacheTypeVersion: FormControl<string | null | undefined>,
		Lifecycle: FormControl<FileCacheLifecycle | null | undefined>,
		StorageCapacity: FormControl<number | null | undefined>,

		/**
		 * The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 * Max length: 512
		 * Min length: 8
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateFileCacheFormGroup() {
		return new FormGroup<FileCacheFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FileCacheId: new FormControl<string | null | undefined>(undefined),
			FileCacheType: new FormControl<FileCacheType | null | undefined>(undefined),
			FileCacheTypeVersion: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<FileCacheLifecycle | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(21), Validators.pattern('^(vpc-[0-9a-f]{8,})$')]),
			DNSName: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(512), Validators.pattern('^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!/).{0,1024}$')]),
		});

	}

	export interface DescribeFileCachesRequest {
		FileCacheIds?: Array<string>;

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
		 */
		NextToken?: string | null;
	}
	export interface DescribeFileCachesRequestFormProperties {

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
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileCachesRequestFormGroup() {
		return new FormGroup<DescribeFileCachesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2147483647)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}


	/** The response object for <code>DescribeFileSystemAliases</code> operation. */
	export interface DescribeFileSystemAliasesResponse {
		Aliases?: Array<Alias>;
		NextToken?: string;
	}

	/** The response object for <code>DescribeFileSystemAliases</code> operation. */
	export interface DescribeFileSystemAliasesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileSystemAliasesResponseFormGroup() {
		return new FormGroup<DescribeFileSystemAliasesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for <code>DescribeFileSystemAliases</code> operation. */
	export interface DescribeFileSystemAliasesRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		FileSystemId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** The request object for <code>DescribeFileSystemAliases</code> operation. */
	export interface DescribeFileSystemAliasesRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileSystemAliasesRequestFormGroup() {
		return new FormGroup<DescribeFileSystemAliasesRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsResponse {
		FileSystems?: Array<FileSystem>;
		NextToken?: string;
	}

	/** The response object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileSystemsResponseFormGroup() {
		return new FormGroup<DescribeFileSystemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsRequest {
		FileSystemIds?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** The request object for <code>DescribeFileSystems</code> operation. */
	export interface DescribeFileSystemsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFileSystemsRequestFormGroup() {
		return new FormGroup<DescribeFileSystemsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSnapshotsResponse {
		Snapshots?: Array<Snapshot>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeSnapshotsResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotsResponseFormGroup() {
		return new FormGroup<DescribeSnapshotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}

	export interface DescribeSnapshotsRequest {
		SnapshotIds?: Array<string>;
		Filters?: Array<SnapshotFilter>;

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
		 */
		NextToken?: string | null;
	}
	export interface DescribeSnapshotsRequestFormProperties {

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
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotsRequestFormGroup() {
		return new FormGroup<DescribeSnapshotsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2147483647)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}


	/** A filter used to restrict the results of <code>DescribeSnapshots</code> calls. You can use multiple filters to return results that meet all applied filter requirements. */
	export interface SnapshotFilter {
		Name?: SnapshotFilterName;
		Values?: Array<string>;
	}

	/** A filter used to restrict the results of <code>DescribeSnapshots</code> calls. You can use multiple filters to return results that meet all applied filter requirements. */
	export interface SnapshotFilterFormProperties {
		Name: FormControl<SnapshotFilterName | null | undefined>,
	}
	export function CreateSnapshotFilterFormGroup() {
		return new FormGroup<SnapshotFilterFormProperties>({
			Name: new FormControl<SnapshotFilterName | null | undefined>(undefined),
		});

	}

	export enum SnapshotFilterName { 'file-system-id' = 0, 'volume-id' = 1 }

	export interface DescribeStorageVirtualMachinesResponse {
		StorageVirtualMachines?: Array<StorageVirtualMachine>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeStorageVirtualMachinesResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageVirtualMachinesResponseFormGroup() {
		return new FormGroup<DescribeStorageVirtualMachinesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}

	export interface DescribeStorageVirtualMachinesRequest {
		StorageVirtualMachineIds?: Array<string>;
		Filters?: Array<StorageVirtualMachineFilter>;

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
		 */
		NextToken?: string | null;
	}
	export interface DescribeStorageVirtualMachinesRequestFormProperties {

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
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageVirtualMachinesRequestFormGroup() {
		return new FormGroup<DescribeStorageVirtualMachinesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2147483647)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}


	/** A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements. */
	export interface StorageVirtualMachineFilter {
		Name?: StorageVirtualMachineFilterName;
		Values?: Array<string>;
	}

	/** A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements. */
	export interface StorageVirtualMachineFilterFormProperties {
		Name: FormControl<StorageVirtualMachineFilterName | null | undefined>,
	}
	export function CreateStorageVirtualMachineFilterFormGroup() {
		return new FormGroup<StorageVirtualMachineFilterFormProperties>({
			Name: new FormControl<StorageVirtualMachineFilterName | null | undefined>(undefined),
		});

	}

	export enum StorageVirtualMachineFilterName { 'file-system-id' = 0 }

	export interface DescribeVolumesResponse {
		Volumes?: Array<Volume>;

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeVolumesResponseFormProperties {

		/**
		 * (Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVolumesResponseFormGroup() {
		return new FormGroup<DescribeVolumesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}

	export interface DescribeVolumesRequest {
		VolumeIds?: Array<string>;
		Filters?: Array<VolumeFilter>;

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
		 */
		NextToken?: string | null;
	}
	export interface DescribeVolumesRequestFormProperties {

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
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVolumesRequestFormGroup() {
		return new FormGroup<DescribeVolumesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(2147483647)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$')]),
		});

	}


	/** A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes. You can use multiple filters to return results that meet all applied filter requirements. */
	export interface VolumeFilter {
		Name?: VolumeFilterName;
		Values?: Array<string>;
	}

	/** A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes. You can use multiple filters to return results that meet all applied filter requirements. */
	export interface VolumeFilterFormProperties {
		Name: FormControl<VolumeFilterName | null | undefined>,
	}
	export function CreateVolumeFilterFormGroup() {
		return new FormGroup<VolumeFilterFormProperties>({
			Name: new FormControl<VolumeFilterName | null | undefined>(undefined),
		});

	}

	export enum VolumeFilterName { 'file-system-id' = 0, 'storage-virtual-machine-id' = 1 }


	/** The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system. */
	export interface DisassociateFileSystemAliasesResponse {
		Aliases?: Array<Alias>;
	}

	/** The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system. */
	export interface DisassociateFileSystemAliasesResponseFormProperties {
	}
	export function CreateDisassociateFileSystemAliasesResponseFormGroup() {
		return new FormGroup<DisassociateFileSystemAliasesResponseFormProperties>({
		});

	}


	/** The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system. */
	export interface DisassociateFileSystemAliasesRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		FileSystemId: string;

		/** Required */
		Aliases: Array<string>;
	}

	/** The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system. */
	export interface DisassociateFileSystemAliasesRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateFileSystemAliasesRequestFormGroup() {
		return new FormGroup<DisassociateFileSystemAliasesRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	/** The response object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** The request object for <code>ListTagsForResource</code> operation. */
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ReleaseFileSystemNfsV3LocksResponse {

		/** A description of a specific Amazon FSx file system. */
		FileSystem?: FileSystem;
	}
	export interface ReleaseFileSystemNfsV3LocksResponseFormProperties {
	}
	export function CreateReleaseFileSystemNfsV3LocksResponseFormGroup() {
		return new FormGroup<ReleaseFileSystemNfsV3LocksResponseFormProperties>({
		});

	}

	export interface ReleaseFileSystemNfsV3LocksRequest {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface ReleaseFileSystemNfsV3LocksRequestFormProperties {

		/**
		 * The globally unique ID of the file system, assigned by Amazon FSx.
		 * Required
		 * Max length: 21
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateReleaseFileSystemNfsV3LocksRequestFormGroup() {
		return new FormGroup<ReleaseFileSystemNfsV3LocksRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(21), Validators.pattern('^(fs-[0-9a-f]{8,})$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
		});

	}

	export interface RestoreVolumeFromSnapshotResponse {
		VolumeId?: string;
		Lifecycle?: VolumeLifecycle;
		AdministrativeActions?: Array<AdministrativeAction>;
	}
	export interface RestoreVolumeFromSnapshotResponseFormProperties {
		VolumeId: FormControl<string | null | undefined>,
		Lifecycle: FormControl<VolumeLifecycle | null | undefined>,
	}
	export function CreateRestoreVolumeFromSnapshotResponseFormGroup() {
		return new FormGroup<RestoreVolumeFromSnapshotResponseFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined),
			Lifecycle: new FormControl<VolumeLifecycle | null | undefined>(undefined),
		});

	}

	export interface RestoreVolumeFromSnapshotRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		VolumeId: string;

		/** Required */
		SnapshotId: string;
		Options?: Array<RestoreOpenZFSVolumeOption>;
	}
	export interface RestoreVolumeFromSnapshotRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		VolumeId: FormControl<string | null | undefined>,

		/** Required */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreVolumeFromSnapshotRequestFormGroup() {
		return new FormGroup<RestoreVolumeFromSnapshotRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RestoreOpenZFSVolumeOption { DELETE_INTERMEDIATE_SNAPSHOTS = 0, DELETE_CLONED_VOLUMES = 1 }


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

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** The request object for the <code>TagResource</code> operation. */
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** The request object for <code>UntagResource</code> action. */
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDataRepositoryAssociationResponse {
		Association?: DataRepositoryAssociation;
	}
	export interface UpdateDataRepositoryAssociationResponseFormProperties {
	}
	export function CreateUpdateDataRepositoryAssociationResponseFormGroup() {
		return new FormGroup<UpdateDataRepositoryAssociationResponseFormProperties>({
		});

	}

	export interface UpdateDataRepositoryAssociationRequest {

		/** Required */
		AssociationId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
		ImportedFileChunkSize?: number | null;
		S3?: S3DataRepositoryConfiguration;
	}
	export interface UpdateDataRepositoryAssociationRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
		ImportedFileChunkSize: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataRepositoryAssociationRequestFormGroup() {
		return new FormGroup<UpdateDataRepositoryAssociationRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			ImportedFileChunkSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFileCacheResponse {
		FileCache?: FileCache;
	}
	export interface UpdateFileCacheResponseFormProperties {
	}
	export function CreateUpdateFileCacheResponseFormGroup() {
		return new FormGroup<UpdateFileCacheResponseFormProperties>({
		});

	}

	export interface UpdateFileCacheRequest {

		/** Required */
		FileCacheId: string;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
		LustreConfiguration?: UpdateFileCacheLustreConfiguration;
	}
	export interface UpdateFileCacheRequestFormProperties {

		/** Required */
		FileCacheId: FormControl<string | null | undefined>,

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFileCacheRequestFormGroup() {
		return new FormGroup<UpdateFileCacheRequestFormProperties>({
			FileCacheId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
		});

	}


	/** The configuration update for an Amazon File Cache resource. */
	export interface UpdateFileCacheLustreConfiguration {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;
	}

	/** The configuration update for an Amazon File Cache resource. */
	export interface UpdateFileCacheLustreConfigurationFormProperties {

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFileCacheLustreConfigurationFormGroup() {
		return new FormGroup<UpdateFileCacheLustreConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
		});

	}


	/** The response object for the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemResponse {
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

		/** Required */
		FileSystemId: string;
		ClientRequestToken?: string;
		StorageCapacity?: number | null;
		WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;

		/** The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation. */
		LustreConfiguration?: UpdateFileSystemLustreConfiguration;

		/** The configuration updates for an Amazon FSx for NetApp ONTAP file system. */
		OntapConfiguration?: UpdateFileSystemOntapConfiguration;
		OpenZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration;
	}

	/** The request object for the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemRequestFormProperties {

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		StorageCapacity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemRequestFormGroup() {
		return new FormGroup<UpdateFileSystemRequestFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			StorageCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request. */
	export interface UpdateFileSystemWindowsConfiguration {
		WeeklyMaintenanceStartTime?: string;
		DailyAutomaticBackupStartTime?: string;
		AutomaticBackupRetentionDays?: number | null;
		ThroughputCapacity?: number | null;
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
		AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
	}

	/** Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request. */
	export interface UpdateFileSystemWindowsConfigurationFormProperties {
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
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


	/** Specifies changes you are making to the self-managed Microsoft Active Directory (AD) configuration to which an FSx for Windows File Server file system or an FSx for ONTAP SVM is joined. */
	export interface SelfManagedActiveDirectoryConfigurationUpdates {
		UserName?: string;
		Password?: string;
		DnsIps?: Array<string>;
		DomainName?: string;
		OrganizationalUnitDistinguishedName?: string;
		FileSystemAdministratorsGroup?: string;
	}

	/** Specifies changes you are making to the self-managed Microsoft Active Directory (AD) configuration to which an FSx for Windows File Server file system or an FSx for ONTAP SVM is joined. */
	export interface SelfManagedActiveDirectoryConfigurationUpdatesFormProperties {
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		OrganizationalUnitDistinguishedName: FormControl<string | null | undefined>,
		FileSystemAdministratorsGroup: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedActiveDirectoryConfigurationUpdatesFormGroup() {
		return new FormGroup<SelfManagedActiveDirectoryConfigurationUpdatesFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
			FileSystemAdministratorsGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemLustreConfiguration {
		WeeklyMaintenanceStartTime?: string;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;
		AutomaticBackupRetentionDays?: number | null;
		AutoImportPolicy?: AutoImportPolicyType;
		DataCompressionType?: DataCompressionType;
		LogConfiguration?: LustreLogCreateConfiguration;
		RootSquashConfiguration?: LustreRootSquashConfiguration;
	}

	/** The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation. */
	export interface UpdateFileSystemLustreConfigurationFormProperties {
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		AutoImportPolicy: FormControl<AutoImportPolicyType | null | undefined>,
		DataCompressionType: FormControl<DataCompressionType | null | undefined>,
	}
	export function CreateUpdateFileSystemLustreConfigurationFormGroup() {
		return new FormGroup<UpdateFileSystemLustreConfigurationFormProperties>({
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined),
			AutoImportPolicy: new FormControl<AutoImportPolicyType | null | undefined>(undefined),
			DataCompressionType: new FormControl<DataCompressionType | null | undefined>(undefined),
		});

	}


	/** The configuration updates for an Amazon FSx for NetApp ONTAP file system. */
	export interface UpdateFileSystemOntapConfiguration {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays?: number | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;
		FsxAdminPassword?: string;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;
		DiskIopsConfiguration?: DiskIopsConfiguration;
		ThroughputCapacity?: number | null;
		AddRouteTableIds?: Array<string>;
		RemoveRouteTableIds?: Array<string>;
	}

	/** The configuration updates for an Amazon FSx for NetApp ONTAP file system. */
	export interface UpdateFileSystemOntapConfigurationFormProperties {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		FsxAdminPassword: FormControl<string | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
		ThroughputCapacity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileSystemOntapConfigurationFormGroup() {
		return new FormGroup<UpdateFileSystemOntapConfigurationFormProperties>({
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(90)]),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			FsxAdminPassword: new FormControl<string | null | undefined>(undefined),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration updates for an Amazon FSx for OpenZFS file system. */
	export interface UpdateFileSystemOpenZFSConfiguration {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays?: number | null;
		CopyTagsToBackups?: boolean | null;
		CopyTagsToVolumes?: boolean | null;

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime?: string | null;
		ThroughputCapacity?: number | null;

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime?: string | null;

		/** The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx). */
		DiskIopsConfiguration?: DiskIopsConfiguration;
	}

	/** The configuration updates for an Amazon FSx for OpenZFS file system. */
	export interface UpdateFileSystemOpenZFSConfigurationFormProperties {

		/**
		 * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>30</code>.
		 * Minimum: 0
		 * Maximum: 90
		 */
		AutomaticBackupRetentionDays: FormControl<number | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
		CopyTagsToVolumes: FormControl<boolean | null | undefined>,

		/**
		 * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
		 * Max length: 5
		 * Min length: 5
		 */
		DailyAutomaticBackupStartTime: FormControl<string | null | undefined>,
		ThroughputCapacity: FormControl<number | null | undefined>,

		/**
		 * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
		 * Max length: 7
		 * Min length: 7
		 */
		WeeklyMaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFileSystemOpenZFSConfigurationFormGroup() {
		return new FormGroup<UpdateFileSystemOpenZFSConfigurationFormProperties>({
			AutomaticBackupRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(90)]),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
			CopyTagsToVolumes: new FormControl<boolean | null | undefined>(undefined),
			DailyAutomaticBackupStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^([01]\d|2[0-3]):?([0-5]\d)$')]),
			ThroughputCapacity: new FormControl<number | null | undefined>(undefined),
			WeeklyMaintenanceStartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$')]),
		});

	}

	export interface UpdateSnapshotResponse {
		Snapshot?: Snapshot;
	}
	export interface UpdateSnapshotResponseFormProperties {
	}
	export function CreateUpdateSnapshotResponseFormGroup() {
		return new FormGroup<UpdateSnapshotResponseFormProperties>({
		});

	}

	export interface UpdateSnapshotRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		Name: string;

		/** Required */
		SnapshotId: string;
	}
	export interface UpdateSnapshotRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotRequestFormGroup() {
		return new FormGroup<UpdateSnapshotRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStorageVirtualMachineResponse {

		/** Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration. */
		StorageVirtualMachine?: StorageVirtualMachine;
	}
	export interface UpdateStorageVirtualMachineResponseFormProperties {
	}
	export function CreateUpdateStorageVirtualMachineResponseFormGroup() {
		return new FormGroup<UpdateStorageVirtualMachineResponseFormProperties>({
		});

	}

	export interface UpdateStorageVirtualMachineRequest {
		ActiveDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		StorageVirtualMachineId: string;
		SvmAdminPassword?: string;
	}
	export interface UpdateStorageVirtualMachineRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		StorageVirtualMachineId: FormControl<string | null | undefined>,
		SvmAdminPassword: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStorageVirtualMachineRequestFormGroup() {
		return new FormGroup<UpdateStorageVirtualMachineRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			StorageVirtualMachineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SvmAdminPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies updates to an FSx for ONTAP storage virtual machine's (SVM) Microsoft Active Directory (AD) configuration. Note that account credentials are not returned in the response payload. */
	export interface UpdateSvmActiveDirectoryConfiguration {

		/** Specifies changes you are making to the self-managed Microsoft Active Directory (AD) configuration to which an FSx for Windows File Server file system or an FSx for ONTAP SVM is joined. */
		SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
		NetBiosName?: string;
	}

	/** Specifies updates to an FSx for ONTAP storage virtual machine's (SVM) Microsoft Active Directory (AD) configuration. Note that account credentials are not returned in the response payload. */
	export interface UpdateSvmActiveDirectoryConfigurationFormProperties {
		NetBiosName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSvmActiveDirectoryConfigurationFormGroup() {
		return new FormGroup<UpdateSvmActiveDirectoryConfigurationFormProperties>({
			NetBiosName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVolumeResponse {
		Volume?: Volume;
	}
	export interface UpdateVolumeResponseFormProperties {
	}
	export function CreateUpdateVolumeResponseFormGroup() {
		return new FormGroup<UpdateVolumeResponseFormProperties>({
		});

	}

	export interface UpdateVolumeRequest {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** Required */
		VolumeId: string;
		OntapConfiguration?: UpdateOntapVolumeConfiguration;
		Name?: string;
		OpenZFSConfiguration?: UpdateOpenZFSVolumeConfiguration;
	}
	export interface UpdateVolumeRequestFormProperties {

		/**
		 * (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
		 * Max length: 63
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		VolumeId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVolumeRequestFormGroup() {
		return new FormGroup<UpdateVolumeRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[A-za-z0-9_.-]{0,63}$')]),
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to specify changes to the ONTAP configuration for the volume you are updating. */
	export interface UpdateOntapVolumeConfiguration {
		JunctionPath?: string;
		SecurityStyle?: SecurityStyle;
		SizeInMegabytes?: number | null;
		StorageEfficiencyEnabled?: boolean | null;
		TieringPolicy?: TieringPolicy;
		SnapshotPolicy?: string;
		CopyTagsToBackups?: boolean | null;
		SnaplockConfiguration?: UpdateSnaplockConfiguration;
	}

	/** Used to specify changes to the ONTAP configuration for the volume you are updating. */
	export interface UpdateOntapVolumeConfigurationFormProperties {
		JunctionPath: FormControl<string | null | undefined>,
		SecurityStyle: FormControl<SecurityStyle | null | undefined>,
		SizeInMegabytes: FormControl<number | null | undefined>,
		StorageEfficiencyEnabled: FormControl<boolean | null | undefined>,
		SnapshotPolicy: FormControl<string | null | undefined>,
		CopyTagsToBackups: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOntapVolumeConfigurationFormGroup() {
		return new FormGroup<UpdateOntapVolumeConfigurationFormProperties>({
			JunctionPath: new FormControl<string | null | undefined>(undefined),
			SecurityStyle: new FormControl<SecurityStyle | null | undefined>(undefined),
			SizeInMegabytes: new FormControl<number | null | undefined>(undefined),
			StorageEfficiencyEnabled: new FormControl<boolean | null | undefined>(undefined),
			SnapshotPolicy: new FormControl<string | null | undefined>(undefined),
			CopyTagsToBackups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates the SnapLock configuration for an existing FSx for ONTAP volume.  */
	export interface UpdateSnaplockConfiguration {
		AuditLogVolume?: boolean | null;
		AutocommitPeriod?: AutocommitPeriod;
		PrivilegedDelete?: PrivilegedDelete;
		RetentionPeriod?: SnaplockRetentionPeriod;
		VolumeAppendModeEnabled?: boolean | null;
	}

	/** Updates the SnapLock configuration for an existing FSx for ONTAP volume.  */
	export interface UpdateSnaplockConfigurationFormProperties {
		AuditLogVolume: FormControl<boolean | null | undefined>,
		PrivilegedDelete: FormControl<PrivilegedDelete | null | undefined>,
		VolumeAppendModeEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSnaplockConfigurationFormGroup() {
		return new FormGroup<UpdateSnaplockConfigurationFormProperties>({
			AuditLogVolume: new FormControl<boolean | null | undefined>(undefined),
			PrivilegedDelete: new FormControl<PrivilegedDelete | null | undefined>(undefined),
			VolumeAppendModeEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Used to specify changes to the OpenZFS configuration for the volume that you are updating. */
	export interface UpdateOpenZFSVolumeConfiguration {
		StorageCapacityReservationGiB?: number | null;
		StorageCapacityQuotaGiB?: number | null;
		RecordSizeKiB?: number | null;
		DataCompressionType?: OpenZFSDataCompressionType;
		NfsExports?: Array<OpenZFSNfsExport>;
		UserAndGroupQuotas?: Array<OpenZFSUserOrGroupQuota>;
		ReadOnly?: boolean | null;
	}

	/** Used to specify changes to the OpenZFS configuration for the volume that you are updating. */
	export interface UpdateOpenZFSVolumeConfigurationFormProperties {
		StorageCapacityReservationGiB: FormControl<number | null | undefined>,
		StorageCapacityQuotaGiB: FormControl<number | null | undefined>,
		RecordSizeKiB: FormControl<number | null | undefined>,
		DataCompressionType: FormControl<OpenZFSDataCompressionType | null | undefined>,
		ReadOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOpenZFSVolumeConfigurationFormGroup() {
		return new FormGroup<UpdateOpenZFSVolumeConfigurationFormProperties>({
			StorageCapacityReservationGiB: new FormControl<number | null | undefined>(undefined),
			StorageCapacityQuotaGiB: new FormControl<number | null | undefined>(undefined),
			RecordSizeKiB: new FormControl<number | null | undefined>(undefined),
			DataCompressionType: new FormControl<OpenZFSDataCompressionType | null | undefined>(undefined),
			ReadOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated from the Amazon FSx console, API (<code>UpdateFileSystem</code>), or CLI (<code>update-file-system</code>).</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system's storage capacity has been completed successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p> <ul> <li> <p>For Windows and ONTAP, storage optimization is the process of migrating the file system data to newer larger disks.</p> </li> <li> <p>For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.</p> </li> </ul> <p>You can track the storage-optimization progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> has been completed successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new Domain Name System (DNS) alias with the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html"> AssociateFileSystemAliases</a>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html">DisassociateFileSystemAliases</a>.</p> </li> <li> <p> <code>VOLUME_UPDATE</code> - A volume update to an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateVolume</code>), or CLI (<code>update-volume</code>).</p> </li> <li> <p> <code>VOLUME_RESTORE</code> - An Amazon FSx for OpenZFS volume is returned to the state saved by the specified snapshot, initiated from an API (<code>RestoreVolumeFromSnapshot</code>) or CLI (<code>restore-volume-from-snapshot</code>).</p> </li> <li> <p> <code>SNAPSHOT_UPDATE</code> - A snapshot update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateSnapshot</code>), or CLI (<code>update-snapshot</code>).</p> </li> <li> <p> <code>RELEASE_NFS_V3_LOCKS</code> - Tracks the release of Network File System (NFS) V3 locks on an Amazon FSx for OpenZFS file system.</p> </li> </ul> */
	export enum AdministrativeActionType { FILE_SYSTEM_UPDATE = 0, STORAGE_OPTIMIZATION = 1, FILE_SYSTEM_ALIAS_ASSOCIATION = 2, FILE_SYSTEM_ALIAS_DISASSOCIATION = 3, VOLUME_UPDATE = 4, SNAPSHOT_UPDATE = 5, RELEASE_NFS_V3_LOCKS = 6, VOLUME_RESTORE = 7 }

	export enum StorageVirtualMachineRootVolumeSecurityStyle { UNIX = 0, NTFS = 1, MIXED = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases
		 * @return {AssociateFileSystemAliasesResponse} Success
		 */
		AssociateFileSystemAliases(requestBody: AssociateFileSystemAliasesRequest): Observable<AssociateFileSystemAliasesResponse> {
			return this.http.post<AssociateFileSystemAliasesResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup
		 * @return {CopyBackupResponse} Success
		 */
		CopyBackup(requestBody: CopyBackupRequest): Observable<CopyBackupResponse> {
			return this.http.post<CopyBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup
		 * @return {CreateBackupResponse} Success
		 */
		CreateBackup(requestBody: CreateBackupRequest): Observable<CreateBackupResponse> {
			return this.http.post<CreateBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported on all FSx for Lustre 2.12 and newer file systems, excluding <code>scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation
		 * @return {CreateDataRepositoryAssociationResponse} Success
		 */
		CreateDataRepositoryAssociation(requestBody: CreateDataRepositoryAssociationRequest): Observable<CreateDataRepositoryAssociationResponse> {
			return this.http.post<CreateDataRepositoryAssociationResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask
		 * @return {CreateDataRepositoryTaskResponse} Success
		 */
		CreateDataRepositoryTask(requestBody: CreateDataRepositoryTaskRequest): Observable<CreateDataRepositoryTaskResponse> {
			return this.http.post<CreateDataRepositoryTaskResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache
		 * @return {CreateFileCacheResponse} Success
		 */
		CreateFileCache(requestBody: CreateFileCacheRequest): Observable<CreateFileCacheResponse> {
			return this.http.post<CreateFileCacheResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem
		 * @return {CreateFileSystemResponse} Success
		 */
		CreateFileSystem(requestBody: CreateFileSystemRequest): Observable<CreateFileSystemResponse> {
			return this.http.post<CreateFileSystemResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup
		 * @return {CreateFileSystemFromBackupResponse} Success
		 */
		CreateFileSystemFromBackup(requestBody: CreateFileSystemFromBackupRequest): Observable<CreateFileSystemFromBackupResponse> {
			return this.http.post<CreateFileSystemFromBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot
		 * @return {CreateSnapshotResponse} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotRequest): Observable<CreateSnapshotResponse> {
			return this.http.post<CreateSnapshotResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine
		 * @return {CreateStorageVirtualMachineResponse} Success
		 */
		CreateStorageVirtualMachine(requestBody: CreateStorageVirtualMachineRequest): Observable<CreateStorageVirtualMachineResponse> {
			return this.http.post<CreateStorageVirtualMachineResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume
		 * @return {CreateVolumeResponse} Success
		 */
		CreateVolume(requestBody: CreateVolumeRequest): Observable<CreateVolumeResponse> {
			return this.http.post<CreateVolumeResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup
		 * @return {CreateVolumeFromBackupResponse} Success
		 */
		CreateVolumeFromBackup(requestBody: CreateVolumeFromBackupRequest): Observable<CreateVolumeFromBackupResponse> {
			return this.http.post<CreateVolumeFromBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup
		 * @return {DeleteBackupResponse} Success
		 */
		DeleteBackup(requestBody: DeleteBackupRequest): Observable<DeleteBackupResponse> {
			return this.http.post<DeleteBackupResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported on all FSx for Lustre 2.12 and newer file systems, excluding <code>scratch_1</code> deployment type.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation
		 * @return {DeleteDataRepositoryAssociationResponse} Success
		 */
		DeleteDataRepositoryAssociation(requestBody: DeleteDataRepositoryAssociationRequest): Observable<DeleteDataRepositoryAssociationResponse> {
			return this.http.post<DeleteDataRepositoryAssociationResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can't be recovered by any means.</p> </important>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache
		 * @return {DeleteFileCacheResponse} Success
		 */
		DeleteFileCache(requestBody: DeleteFileCacheRequest): Observable<DeleteFileCacheResponse> {
			return this.http.post<DeleteFileCacheResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem
		 * @return {DeleteFileSystemResponse} Success
		 */
		DeleteFileSystem(requestBody: DeleteFileSystemRequest): Observable<DeleteFileSystemResponse> {
			return this.http.post<DeleteFileSystemResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot
		 * @return {DeleteSnapshotResponse} Success
		 */
		DeleteSnapshot(requestBody: DeleteSnapshotRequest): Observable<DeleteSnapshotResponse> {
			return this.http.post<DeleteSnapshotResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine
		 * @return {DeleteStorageVirtualMachineResponse} Success
		 */
		DeleteStorageVirtualMachine(requestBody: DeleteStorageVirtualMachineRequest): Observable<DeleteStorageVirtualMachineResponse> {
			return this.http.post<DeleteStorageVirtualMachineResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume
		 * @return {DeleteVolumeResponse} Success
		 */
		DeleteVolume(requestBody: DeleteVolumeRequest): Observable<DeleteVolumeResponse> {
			return this.http.post<DeleteVolumeResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBackupsResponse} Success
		 */
		DescribeBackups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBackupsRequest): Observable<DescribeBackupsResponse> {
			return this.http.post<DescribeBackupsResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all FSx for Lustre 2.12 and newer file systems, excluding <code>scratch_1</code> deployment type.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDataRepositoryAssociationsResponse} Success
		 */
		DescribeDataRepositoryAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeDataRepositoryAssociationsRequest): Observable<DescribeDataRepositoryAssociationsResponse> {
			return this.http.post<DescribeDataRepositoryAssociationsResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDataRepositoryTasksResponse} Success
		 */
		DescribeDataRepositoryTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeDataRepositoryTasksRequest): Observable<DescribeDataRepositoryTasksResponse> {
			return this.http.post<DescribeDataRepositoryTasksResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFileCachesResponse} Success
		 */
		DescribeFileCaches(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFileCachesRequest): Observable<DescribeFileCachesResponse> {
			return this.http.post<DescribeFileCachesResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFileSystemAliasesResponse} Success
		 */
		DescribeFileSystemAliases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFileSystemAliasesRequest): Observable<DescribeFileSystemAliasesResponse> {
			return this.http.post<DescribeFileSystemAliasesResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFileSystemsResponse} Success
		 */
		DescribeFileSystems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFileSystemsRequest): Observable<DescribeFileSystemsResponse> {
			return this.http.post<DescribeFileSystemsResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSnapshotsResponse} Success
		 */
		DescribeSnapshots(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSnapshotsRequest): Observable<DescribeSnapshotsResponse> {
			return this.http.post<DescribeSnapshotsResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeStorageVirtualMachinesResponse} Success
		 */
		DescribeStorageVirtualMachines(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeStorageVirtualMachinesRequest): Observable<DescribeStorageVirtualMachinesResponse> {
			return this.http.post<DescribeStorageVirtualMachinesResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeVolumesResponse} Success
		 */
		DescribeVolumes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeVolumesRequest): Observable<DescribeVolumesResponse> {
			return this.http.post<DescribeVolumesResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases
		 * @return {DisassociateFileSystemAliasesResponse} Success
		 */
		DisassociateFileSystemAliases(requestBody: DisassociateFileSystemAliasesRequest): Observable<DisassociateFileSystemAliasesResponse> {
			return this.http.post<DisassociateFileSystemAliasesResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Releases the file system lock from an Amazon FSx for OpenZFS file system.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks
		 * @return {ReleaseFileSystemNfsV3LocksResponse} Success
		 */
		ReleaseFileSystemNfsV3Locks(requestBody: ReleaseFileSystemNfsV3LocksRequest): Observable<ReleaseFileSystemNfsV3LocksResponse> {
			return this.http.post<ReleaseFileSystemNfsV3LocksResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot
		 * @return {RestoreVolumeFromSnapshotResponse} Success
		 */
		RestoreVolumeFromSnapshot(requestBody: RestoreVolumeFromSnapshotRequest): Observable<RestoreVolumeFromSnapshotResponse> {
			return this.http.post<RestoreVolumeFromSnapshotResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported on all FSx for Lustre 2.12 and newer file systems, excluding <code>scratch_1</code> deployment type.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation
		 * @return {UpdateDataRepositoryAssociationResponse} Success
		 */
		UpdateDataRepositoryAssociation(requestBody: UpdateDataRepositoryAssociationRequest): Observable<UpdateDataRepositoryAssociationResponse> {
			return this.http.post<UpdateDataRepositoryAssociationResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache
		 * @return {UpdateFileCacheResponse} Success
		 */
		UpdateFileCache(requestBody: UpdateFileCacheRequest): Observable<UpdateFileCacheResponse> {
			return this.http.post<UpdateFileCacheResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LogConfiguration</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem
		 * @return {UpdateFileSystemResponse} Success
		 */
		UpdateFileSystem(requestBody: UpdateFileSystemRequest): Observable<UpdateFileSystemResponse> {
			return this.http.post<UpdateFileSystemResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the name of an Amazon FSx for OpenZFS snapshot.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot
		 * @return {UpdateSnapshotResponse} Success
		 */
		UpdateSnapshot(requestBody: UpdateSnapshotRequest): Observable<UpdateSnapshotResponse> {
			return this.http.post<UpdateSnapshotResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an FSx for ONTAP storage virtual machine (SVM).
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine
		 * @return {UpdateStorageVirtualMachineResponse} Success
		 */
		UpdateStorageVirtualMachine(requestBody: UpdateStorageVirtualMachineRequest): Observable<UpdateStorageVirtualMachineResponse> {
			return this.http.post<UpdateStorageVirtualMachineResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
		 * Post #X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume
		 * @return {UpdateVolumeResponse} Success
		 */
		UpdateVolume(requestBody: UpdateVolumeRequest): Observable<UpdateVolumeResponse> {
			return this.http.post<UpdateVolumeResponse>(this.baseUri + '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateFileSystemAliasesX_Amz_Target { 'AWSSimbaAPIService_v20180301.AssociateFileSystemAliases' = 0 }

	export enum CancelDataRepositoryTaskX_Amz_Target { 'AWSSimbaAPIService_v20180301.CancelDataRepositoryTask' = 0 }

	export enum CopyBackupX_Amz_Target { 'AWSSimbaAPIService_v20180301.CopyBackup' = 0 }

	export enum CreateBackupX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateBackup' = 0 }

	export enum CreateDataRepositoryAssociationX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation' = 0 }

	export enum CreateDataRepositoryTaskX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateDataRepositoryTask' = 0 }

	export enum CreateFileCacheX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateFileCache' = 0 }

	export enum CreateFileSystemX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateFileSystem' = 0 }

	export enum CreateFileSystemFromBackupX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup' = 0 }

	export enum CreateSnapshotX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateSnapshot' = 0 }

	export enum CreateStorageVirtualMachineX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine' = 0 }

	export enum CreateVolumeX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateVolume' = 0 }

	export enum CreateVolumeFromBackupX_Amz_Target { 'AWSSimbaAPIService_v20180301.CreateVolumeFromBackup' = 0 }

	export enum DeleteBackupX_Amz_Target { 'AWSSimbaAPIService_v20180301.DeleteBackup' = 0 }

	export enum DeleteDataRepositoryAssociationX_Amz_Target { 'AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation' = 0 }

	export enum DeleteFileCacheX_Amz_Target { 'AWSSimbaAPIService_v20180301.DeleteFileCache' = 0 }

	export enum DeleteFileSystemX_Amz_Target { 'AWSSimbaAPIService_v20180301.DeleteFileSystem' = 0 }

	export enum DeleteSnapshotX_Amz_Target { 'AWSSimbaAPIService_v20180301.DeleteSnapshot' = 0 }

	export enum DeleteStorageVirtualMachineX_Amz_Target { 'AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine' = 0 }

	export enum DeleteVolumeX_Amz_Target { 'AWSSimbaAPIService_v20180301.DeleteVolume' = 0 }

	export enum DescribeBackupsX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeBackups' = 0 }

	export enum DescribeDataRepositoryAssociationsX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations' = 0 }

	export enum DescribeDataRepositoryTasksX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks' = 0 }

	export enum DescribeFileCachesX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeFileCaches' = 0 }

	export enum DescribeFileSystemAliasesX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeFileSystemAliases' = 0 }

	export enum DescribeFileSystemsX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeFileSystems' = 0 }

	export enum DescribeSnapshotsX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeSnapshots' = 0 }

	export enum DescribeStorageVirtualMachinesX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines' = 0 }

	export enum DescribeVolumesX_Amz_Target { 'AWSSimbaAPIService_v20180301.DescribeVolumes' = 0 }

	export enum DisassociateFileSystemAliasesX_Amz_Target { 'AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSSimbaAPIService_v20180301.ListTagsForResource' = 0 }

	export enum ReleaseFileSystemNfsV3LocksX_Amz_Target { 'AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks' = 0 }

	export enum RestoreVolumeFromSnapshotX_Amz_Target { 'AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSSimbaAPIService_v20180301.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSSimbaAPIService_v20180301.UntagResource' = 0 }

	export enum UpdateDataRepositoryAssociationX_Amz_Target { 'AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation' = 0 }

	export enum UpdateFileCacheX_Amz_Target { 'AWSSimbaAPIService_v20180301.UpdateFileCache' = 0 }

	export enum UpdateFileSystemX_Amz_Target { 'AWSSimbaAPIService_v20180301.UpdateFileSystem' = 0 }

	export enum UpdateSnapshotX_Amz_Target { 'AWSSimbaAPIService_v20180301.UpdateSnapshot' = 0 }

	export enum UpdateStorageVirtualMachineX_Amz_Target { 'AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine' = 0 }

	export enum UpdateVolumeX_Amz_Target { 'AWSSimbaAPIService_v20180301.UpdateVolume' = 0 }

}

