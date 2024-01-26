import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message describing AWS Credentials using access key id and secret. */
	export interface AccessKeyCredentials {

		/** AWS access key ID. */
		accessKeyId?: string | null;

		/** Input only. AWS secret access key. */
		secretAccessKey?: string | null;

		/** Input only. AWS session token. Used only when AWS security token service (STS) is responsible for creating the temporary credentials. */
		sessionToken?: string | null;
	}

	/** Message describing AWS Credentials using access key id and secret. */
	export interface AccessKeyCredentialsFormProperties {

		/** AWS access key ID. */
		accessKeyId: FormControl<string | null | undefined>,

		/** Input only. AWS secret access key. */
		secretAccessKey: FormControl<string | null | undefined>,

		/** Input only. AWS session token. Used only when AWS security token service (STS) is responsible for creating the temporary credentials. */
		sessionToken: FormControl<string | null | undefined>,
	}
	export function CreateAccessKeyCredentialsFormGroup() {
		return new FormGroup<AccessKeyCredentialsFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined),
			sessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AdaptingOSStep contains specific step details. */
	export interface AdaptingOSStep {
	}

	/** AdaptingOSStep contains specific step details. */
	export interface AdaptingOSStepFormProperties {
	}
	export function CreateAdaptingOSStepFormGroup() {
		return new FormGroup<AdaptingOSStepFormProperties>({
		});

	}


	/** Request message for 'AddGroupMigration' request. */
	export interface AddGroupMigrationRequest {

		/** The full path name of the MigratingVm to add. */
		migratingVm?: string | null;
	}

	/** Request message for 'AddGroupMigration' request. */
	export interface AddGroupMigrationRequestFormProperties {

		/** The full path name of the MigratingVm to add. */
		migratingVm: FormControl<string | null | undefined>,
	}
	export function CreateAddGroupMigrationRequestFormGroup() {
		return new FormGroup<AddGroupMigrationRequestFormProperties>({
			migratingVm: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an appliance version. */
	export interface ApplianceVersion {

		/** Determine whether it's critical to upgrade the appliance to this version. */
		critical?: boolean | null;

		/** Link to a page that contains the version release notes. */
		releaseNotesUri?: string | null;

		/** A link for downloading the version. */
		uri?: string | null;

		/** The appliance version. */
		version?: string | null;
	}

	/** Describes an appliance version. */
	export interface ApplianceVersionFormProperties {

		/** Determine whether it's critical to upgrade the appliance to this version. */
		critical: FormControl<boolean | null | undefined>,

		/** Link to a page that contains the version release notes. */
		releaseNotesUri: FormControl<string | null | undefined>,

		/** A link for downloading the version. */
		uri: FormControl<string | null | undefined>,

		/** The appliance version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplianceVersionFormGroup() {
		return new FormGroup<ApplianceVersionFormProperties>({
			critical: new FormControl<boolean | null | undefined>(undefined),
			releaseNotesUri: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AppliedLicense holds the license data returned by adaptation module report. */
	export interface AppliedLicense {

		/** The OS license returned from the adaptation module's report. */
		osLicense?: string | null;

		/** The license type that was used in OS adaptation. */
		type?: AppliedLicenseType | null;
	}

	/** AppliedLicense holds the license data returned by adaptation module report. */
	export interface AppliedLicenseFormProperties {

		/** The OS license returned from the adaptation module's report. */
		osLicense: FormControl<string | null | undefined>,

		/** The license type that was used in OS adaptation. */
		type: FormControl<AppliedLicenseType | null | undefined>,
	}
	export function CreateAppliedLicenseFormGroup() {
		return new FormGroup<AppliedLicenseFormProperties>({
			osLicense: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AppliedLicenseType | null | undefined>(undefined),
		});

	}

	export enum AppliedLicenseType { TYPE_UNSPECIFIED = 0, NONE = 1, PAYG = 2, BYOL = 3 }


	/** Holds informatiom about the available versions for upgrade. */
	export interface AvailableUpdates {

		/** Describes an appliance version. */
		inPlaceUpdate?: ApplianceVersion;

		/** Describes an appliance version. */
		newDeployableAppliance?: ApplianceVersion;
	}

	/** Holds informatiom about the available versions for upgrade. */
	export interface AvailableUpdatesFormProperties {
	}
	export function CreateAvailableUpdatesFormGroup() {
		return new FormGroup<AvailableUpdatesFormProperties>({
		});

	}


	/** The details of an AWS instance disk. */
	export interface AwsDiskDetails {

		/** The ordinal number of the disk. */
		diskNumber?: number | null;

		/** Size in GB. */
		sizeGb?: string | null;

		/** AWS volume ID. */
		volumeId?: string | null;
	}

	/** The details of an AWS instance disk. */
	export interface AwsDiskDetailsFormProperties {

		/** The ordinal number of the disk. */
		diskNumber: FormControl<number | null | undefined>,

		/** Size in GB. */
		sizeGb: FormControl<string | null | undefined>,

		/** AWS volume ID. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateAwsDiskDetailsFormGroup() {
		return new FormGroup<AwsDiskDetailsFormProperties>({
			diskNumber: new FormControl<number | null | undefined>(undefined),
			sizeGb: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AwsSecurityGroup describes a security group of an AWS VM. */
	export interface AwsSecurityGroup {

		/** The AWS security group id. */
		id?: string | null;

		/** The AWS security group name. */
		name?: string | null;
	}

	/** AwsSecurityGroup describes a security group of an AWS VM. */
	export interface AwsSecurityGroupFormProperties {

		/** The AWS security group id. */
		id: FormControl<string | null | undefined>,

		/** The AWS security group name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAwsSecurityGroupFormGroup() {
		return new FormGroup<AwsSecurityGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AwsSourceDetails message describes a specific source details for the AWS source type. */
	export interface AwsSourceDetails {

		/** Message describing AWS Credentials using access key id and secret. */
		accessKeyCreds?: AccessKeyCredentials;

		/** Immutable. The AWS region that the source VMs will be migrated from. */
		awsRegion?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** AWS security group names to limit the scope of the source inventory. */
		inventorySecurityGroupNames?: Array<string>;

		/** AWS resource tags to limit the scope of the source inventory. */
		inventoryTagList?: Array<Tag>;

		/** User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`. */
		migrationResourcesUserTags?: {[id: string]: string };

		/** Output only. The source's public IP. All communication initiated by this source will originate from this IP. */
		publicIp?: string | null;

		/** Output only. State of the source as determined by the health check. */
		state?: AwsSourceDetailsState | null;
	}

	/** AwsSourceDetails message describes a specific source details for the AWS source type. */
	export interface AwsSourceDetailsFormProperties {

		/** Immutable. The AWS region that the source VMs will be migrated from. */
		awsRegion: FormControl<string | null | undefined>,

		/** User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`. */
		migrationResourcesUserTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The source's public IP. All communication initiated by this source will originate from this IP. */
		publicIp: FormControl<string | null | undefined>,

		/** Output only. State of the source as determined by the health check. */
		state: FormControl<AwsSourceDetailsState | null | undefined>,
	}
	export function CreateAwsSourceDetailsFormGroup() {
		return new FormGroup<AwsSourceDetailsFormProperties>({
			awsRegion: new FormControl<string | null | undefined>(undefined),
			migrationResourcesUserTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			publicIp: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AwsSourceDetailsState | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tag is an AWS tag representation. */
	export interface Tag {

		/** Key of tag. */
		key?: string | null;

		/** Value of tag. */
		value?: string | null;
	}

	/** Tag is an AWS tag representation. */
	export interface TagFormProperties {

		/** Key of tag. */
		key: FormControl<string | null | undefined>,

		/** Value of tag. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AwsSourceDetailsState { STATE_UNSPECIFIED = 0, PENDING = 1, FAILED = 2, ACTIVE = 3 }


	/** Represent the source AWS VM details. */
	export interface AwsSourceVmDetails {

		/** The total size of the disks being migrated in bytes. */
		committedStorageBytes?: string | null;

		/** The disks attached to the source VM. */
		disks?: Array<AwsDiskDetails>;

		/** The firmware type of the source VM. */
		firmware?: AwsSourceVmDetailsFirmware | null;

		/** Migrating VM source information about the VM capabilities needed for some Compute Engine features. */
		vmCapabilitiesInfo?: VmCapabilities;
	}

	/** Represent the source AWS VM details. */
	export interface AwsSourceVmDetailsFormProperties {

		/** The total size of the disks being migrated in bytes. */
		committedStorageBytes: FormControl<string | null | undefined>,

		/** The firmware type of the source VM. */
		firmware: FormControl<AwsSourceVmDetailsFirmware | null | undefined>,
	}
	export function CreateAwsSourceVmDetailsFormGroup() {
		return new FormGroup<AwsSourceVmDetailsFormProperties>({
			committedStorageBytes: new FormControl<string | null | undefined>(undefined),
			firmware: new FormControl<AwsSourceVmDetailsFirmware | null | undefined>(undefined),
		});

	}

	export enum AwsSourceVmDetailsFirmware { FIRMWARE_UNSPECIFIED = 0, EFI = 1, BIOS = 2 }


	/** Migrating VM source information about the VM capabilities needed for some Compute Engine features. */
	export interface VmCapabilities {

		/** Output only. The last time OS capabilities list was updated. */
		lastOsCapabilitiesUpdateTime?: string | null;

		/** Output only. Unordered list. List of certain VM OS capabilities needed for some Compute Engine features. */
		osCapabilities?: Array<string>;
	}

	/** Migrating VM source information about the VM capabilities needed for some Compute Engine features. */
	export interface VmCapabilitiesFormProperties {

		/** Output only. The last time OS capabilities list was updated. */
		lastOsCapabilitiesUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateVmCapabilitiesFormGroup() {
		return new FormGroup<VmCapabilitiesFormProperties>({
			lastOsCapabilitiesUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AwsVmDetails describes a VM in AWS. */
	export interface AwsVmDetails {

		/** The CPU architecture. */
		architecture?: AwsVmDetailsArchitecture | null;

		/** The VM Boot Option. */
		bootOption?: AwsVmDetailsBootOption | null;

		/** The total size of the storage allocated to the VM in MB. */
		committedStorageMb?: string | null;

		/** The number of cpus the VM has. */
		cpuCount?: number | null;

		/** The number of disks the VM has. */
		diskCount?: number | null;

		/** The display name of the VM. Note that this value is not necessarily unique. */
		displayName?: string | null;

		/** The instance type of the VM. */
		instanceType?: string | null;

		/** The memory size of the VM in MB. */
		memoryMb?: number | null;

		/** The VM's OS. */
		osDescription?: string | null;

		/** Output only. The power state of the VM at the moment list was taken. */
		powerState?: AwsVmDetailsPowerState | null;

		/** The security groups the VM belongs to. */
		securityGroups?: Array<AwsSecurityGroup>;

		/** The descriptive name of the AWS's source this VM is connected to. */
		sourceDescription?: string | null;

		/** The id of the AWS's source this VM is connected to. */
		sourceId?: string | null;

		/** The tags of the VM. */
		tags?: {[id: string]: string };

		/** The virtualization type. */
		virtualizationType?: AwsVmDetailsVirtualizationType | null;

		/** The VM ID in AWS. */
		vmId?: string | null;

		/** The VPC ID the VM belongs to. */
		vpcId?: string | null;

		/** The AWS zone of the VM. */
		zone?: string | null;
	}

	/** AwsVmDetails describes a VM in AWS. */
	export interface AwsVmDetailsFormProperties {

		/** The CPU architecture. */
		architecture: FormControl<AwsVmDetailsArchitecture | null | undefined>,

		/** The VM Boot Option. */
		bootOption: FormControl<AwsVmDetailsBootOption | null | undefined>,

		/** The total size of the storage allocated to the VM in MB. */
		committedStorageMb: FormControl<string | null | undefined>,

		/** The number of cpus the VM has. */
		cpuCount: FormControl<number | null | undefined>,

		/** The number of disks the VM has. */
		diskCount: FormControl<number | null | undefined>,

		/** The display name of the VM. Note that this value is not necessarily unique. */
		displayName: FormControl<string | null | undefined>,

		/** The instance type of the VM. */
		instanceType: FormControl<string | null | undefined>,

		/** The memory size of the VM in MB. */
		memoryMb: FormControl<number | null | undefined>,

		/** The VM's OS. */
		osDescription: FormControl<string | null | undefined>,

		/** Output only. The power state of the VM at the moment list was taken. */
		powerState: FormControl<AwsVmDetailsPowerState | null | undefined>,

		/** The descriptive name of the AWS's source this VM is connected to. */
		sourceDescription: FormControl<string | null | undefined>,

		/** The id of the AWS's source this VM is connected to. */
		sourceId: FormControl<string | null | undefined>,

		/** The tags of the VM. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The virtualization type. */
		virtualizationType: FormControl<AwsVmDetailsVirtualizationType | null | undefined>,

		/** The VM ID in AWS. */
		vmId: FormControl<string | null | undefined>,

		/** The VPC ID the VM belongs to. */
		vpcId: FormControl<string | null | undefined>,

		/** The AWS zone of the VM. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateAwsVmDetailsFormGroup() {
		return new FormGroup<AwsVmDetailsFormProperties>({
			architecture: new FormControl<AwsVmDetailsArchitecture | null | undefined>(undefined),
			bootOption: new FormControl<AwsVmDetailsBootOption | null | undefined>(undefined),
			committedStorageMb: new FormControl<string | null | undefined>(undefined),
			cpuCount: new FormControl<number | null | undefined>(undefined),
			diskCount: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			memoryMb: new FormControl<number | null | undefined>(undefined),
			osDescription: new FormControl<string | null | undefined>(undefined),
			powerState: new FormControl<AwsVmDetailsPowerState | null | undefined>(undefined),
			sourceDescription: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			virtualizationType: new FormControl<AwsVmDetailsVirtualizationType | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AwsVmDetailsArchitecture { VM_ARCHITECTURE_UNSPECIFIED = 0, I386 = 1, X86_64 = 2, ARM64 = 3, X86_64_MAC = 4 }

	export enum AwsVmDetailsBootOption { BOOT_OPTION_UNSPECIFIED = 0, EFI = 1, BIOS = 2 }

	export enum AwsVmDetailsPowerState { POWER_STATE_UNSPECIFIED = 0, ON = 1, OFF = 2, SUSPENDED = 3, PENDING = 4 }

	export enum AwsVmDetailsVirtualizationType { VM_VIRTUALIZATION_TYPE_UNSPECIFIED = 0, HVM = 1, PARAVIRTUAL = 2 }


	/** AWSVmsDetails describes VMs in AWS. */
	export interface AwsVmsDetails {

		/** The details of the AWS VMs. */
		details?: Array<AwsVmDetails>;
	}

	/** AWSVmsDetails describes VMs in AWS. */
	export interface AwsVmsDetailsFormProperties {
	}
	export function CreateAwsVmsDetailsFormGroup() {
		return new FormGroup<AwsVmsDetailsFormProperties>({
		});

	}


	/** The details of an Azure VM disk. */
	export interface AzureDiskDetails {

		/** Azure disk ID. */
		diskId?: string | null;

		/** The ordinal number of the disk. */
		diskNumber?: number | null;

		/** Size in GB. */
		sizeGb?: string | null;
	}

	/** The details of an Azure VM disk. */
	export interface AzureDiskDetailsFormProperties {

		/** Azure disk ID. */
		diskId: FormControl<string | null | undefined>,

		/** The ordinal number of the disk. */
		diskNumber: FormControl<number | null | undefined>,

		/** Size in GB. */
		sizeGb: FormControl<string | null | undefined>,
	}
	export function CreateAzureDiskDetailsFormGroup() {
		return new FormGroup<AzureDiskDetailsFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			diskNumber: new FormControl<number | null | undefined>(undefined),
			sizeGb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AzureSourceDetails message describes a specific source details for the Azure source type. */
	export interface AzureSourceDetails {

		/** Immutable. The Azure location (region) that the source VMs will be migrated from. */
		azureLocation?: string | null;

		/** Message describing Azure Credentials using tenant ID, client ID and secret. */
		clientSecretCreds?: ClientSecretCredentials;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** User specified tags to add to every M2VM generated resource in Azure. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m4ce` or `m2vm`. */
		migrationResourcesUserTags?: {[id: string]: string };

		/** Output only. The ID of the Azure resource group that contains all resources related to the migration process of this source. */
		resourceGroupId?: string | null;

		/** Output only. State of the source as determined by the health check. */
		state?: AwsSourceDetailsState | null;

		/** Immutable. Azure subscription ID. */
		subscriptionId?: string | null;
	}

	/** AzureSourceDetails message describes a specific source details for the Azure source type. */
	export interface AzureSourceDetailsFormProperties {

		/** Immutable. The Azure location (region) that the source VMs will be migrated from. */
		azureLocation: FormControl<string | null | undefined>,

		/** User specified tags to add to every M2VM generated resource in Azure. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m4ce` or `m2vm`. */
		migrationResourcesUserTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The ID of the Azure resource group that contains all resources related to the migration process of this source. */
		resourceGroupId: FormControl<string | null | undefined>,

		/** Output only. State of the source as determined by the health check. */
		state: FormControl<AwsSourceDetailsState | null | undefined>,

		/** Immutable. Azure subscription ID. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateAzureSourceDetailsFormGroup() {
		return new FormGroup<AzureSourceDetailsFormProperties>({
			azureLocation: new FormControl<string | null | undefined>(undefined),
			migrationResourcesUserTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AwsSourceDetailsState | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing Azure Credentials using tenant ID, client ID and secret. */
	export interface ClientSecretCredentials {

		/** Azure client ID. */
		clientId?: string | null;

		/** Input only. Azure client secret. */
		clientSecret?: string | null;

		/** Azure tenant ID. */
		tenantId?: string | null;
	}

	/** Message describing Azure Credentials using tenant ID, client ID and secret. */
	export interface ClientSecretCredentialsFormProperties {

		/** Azure client ID. */
		clientId: FormControl<string | null | undefined>,

		/** Input only. Azure client secret. */
		clientSecret: FormControl<string | null | undefined>,

		/** Azure tenant ID. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateClientSecretCredentialsFormGroup() {
		return new FormGroup<ClientSecretCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represent the source Azure VM details. */
	export interface AzureSourceVmDetails {

		/** The total size of the disks being migrated in bytes. */
		committedStorageBytes?: string | null;

		/** The disks attached to the source VM. */
		disks?: Array<AzureDiskDetails>;

		/** The firmware type of the source VM. */
		firmware?: AwsSourceVmDetailsFirmware | null;

		/** Migrating VM source information about the VM capabilities needed for some Compute Engine features. */
		vmCapabilitiesInfo?: VmCapabilities;
	}

	/** Represent the source Azure VM details. */
	export interface AzureSourceVmDetailsFormProperties {

		/** The total size of the disks being migrated in bytes. */
		committedStorageBytes: FormControl<string | null | undefined>,

		/** The firmware type of the source VM. */
		firmware: FormControl<AwsSourceVmDetailsFirmware | null | undefined>,
	}
	export function CreateAzureSourceVmDetailsFormGroup() {
		return new FormGroup<AzureSourceVmDetailsFormProperties>({
			committedStorageBytes: new FormControl<string | null | undefined>(undefined),
			firmware: new FormControl<AwsSourceVmDetailsFirmware | null | undefined>(undefined),
		});

	}


	/** AwsVmDetails describes a VM in AWS. */
	export interface AzureVmDetails {

		/** The VM Boot Option. */
		bootOption?: AwsVmDetailsBootOption | null;

		/** The total size of the storage allocated to the VM in MB. */
		committedStorageMb?: string | null;

		/** The VM's ComputerName. */
		computerName?: string | null;

		/** The number of cpus the VM has. */
		cpuCount?: number | null;

		/** The number of disks the VM has, including OS disk. */
		diskCount?: number | null;

		/** Description of the data disks. */
		disks?: Array<Disk>;

		/** The memory size of the VM in MB. */
		memoryMb?: number | null;

		/** A message describing the VM's OS. Including OS, Publisher, Offer and Plan if applicable. */
		osDescription?: OSDescription;

		/** A message describing the OS disk. */
		osDisk?: OSDisk;

		/** The power state of the VM at the moment list was taken. */
		powerState?: AzureVmDetailsPowerState | null;

		/** The tags of the VM. */
		tags?: {[id: string]: string };

		/** The VM full path in Azure. */
		vmId?: string | null;

		/** VM size as configured in Azure. Determines the VM's hardware spec. */
		vmSize?: string | null;
	}

	/** AwsVmDetails describes a VM in AWS. */
	export interface AzureVmDetailsFormProperties {

		/** The VM Boot Option. */
		bootOption: FormControl<AwsVmDetailsBootOption | null | undefined>,

		/** The total size of the storage allocated to the VM in MB. */
		committedStorageMb: FormControl<string | null | undefined>,

		/** The VM's ComputerName. */
		computerName: FormControl<string | null | undefined>,

		/** The number of cpus the VM has. */
		cpuCount: FormControl<number | null | undefined>,

		/** The number of disks the VM has, including OS disk. */
		diskCount: FormControl<number | null | undefined>,

		/** The memory size of the VM in MB. */
		memoryMb: FormControl<number | null | undefined>,

		/** The power state of the VM at the moment list was taken. */
		powerState: FormControl<AzureVmDetailsPowerState | null | undefined>,

		/** The tags of the VM. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The VM full path in Azure. */
		vmId: FormControl<string | null | undefined>,

		/** VM size as configured in Azure. Determines the VM's hardware spec. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateAzureVmDetailsFormGroup() {
		return new FormGroup<AzureVmDetailsFormProperties>({
			bootOption: new FormControl<AwsVmDetailsBootOption | null | undefined>(undefined),
			committedStorageMb: new FormControl<string | null | undefined>(undefined),
			computerName: new FormControl<string | null | undefined>(undefined),
			cpuCount: new FormControl<number | null | undefined>(undefined),
			diskCount: new FormControl<number | null | undefined>(undefined),
			memoryMb: new FormControl<number | null | undefined>(undefined),
			powerState: new FormControl<AzureVmDetailsPowerState | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message describing a data disk. */
	export interface Disk {

		/** The disk's Logical Unit Number (LUN). */
		lun?: number | null;

		/** The disk name. */
		name?: string | null;

		/** The disk size in GB. */
		sizeGb?: number | null;
	}

	/** A message describing a data disk. */
	export interface DiskFormProperties {

		/** The disk's Logical Unit Number (LUN). */
		lun: FormControl<number | null | undefined>,

		/** The disk name. */
		name: FormControl<string | null | undefined>,

		/** The disk size in GB. */
		sizeGb: FormControl<number | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			lun: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A message describing the VM's OS. Including OS, Publisher, Offer and Plan if applicable. */
	export interface OSDescription {

		/** OS offer. */
		offer?: string | null;

		/** OS plan. */
		plan?: string | null;

		/** OS publisher. */
		publisher?: string | null;

		/** OS type. */
		type?: string | null;
	}

	/** A message describing the VM's OS. Including OS, Publisher, Offer and Plan if applicable. */
	export interface OSDescriptionFormProperties {

		/** OS offer. */
		offer: FormControl<string | null | undefined>,

		/** OS plan. */
		plan: FormControl<string | null | undefined>,

		/** OS publisher. */
		publisher: FormControl<string | null | undefined>,

		/** OS type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOSDescriptionFormGroup() {
		return new FormGroup<OSDescriptionFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined),
			plan: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message describing the OS disk. */
	export interface OSDisk {

		/** The disk's full name. */
		name?: string | null;

		/** The disk's size in GB. */
		sizeGb?: number | null;

		/** The disk's type. */
		type?: string | null;
	}

	/** A message describing the OS disk. */
	export interface OSDiskFormProperties {

		/** The disk's full name. */
		name: FormControl<string | null | undefined>,

		/** The disk's size in GB. */
		sizeGb: FormControl<number | null | undefined>,

		/** The disk's type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOSDiskFormGroup() {
		return new FormGroup<OSDiskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AzureVmDetailsPowerState { POWER_STATE_UNSPECIFIED = 0, STARTING = 1, RUNNING = 2, STOPPING = 3, STOPPED = 4, DEALLOCATING = 5, DEALLOCATED = 6, UNKNOWN = 7 }


	/** AzureVmsDetails describes VMs in Azure. */
	export interface AzureVmsDetails {

		/** The details of the Azure VMs. */
		details?: Array<AzureVmDetails>;
	}

	/** AzureVmsDetails describes VMs in Azure. */
	export interface AzureVmsDetailsFormProperties {
	}
	export function CreateAzureVmsDetailsFormGroup() {
		return new FormGroup<AzureVmsDetailsFormProperties>({
		});

	}


	/** BootDiskDefaults hold information about the boot disk of a VM. */
	export interface BootDiskDefaults {

		/** Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
		deviceName?: string | null;

		/** Optional. The name of the disk. */
		diskName?: string | null;

		/** Optional. The type of disk provisioning to use for the VM. */
		diskType?: BootDiskDefaultsDiskType | null;

		/** Encryption message describes the details of the applied encryption. */
		encryption?: Encryption;

		/** Contains details about the image source used to create the disk. */
		image?: DiskImageDefaults;
	}

	/** BootDiskDefaults hold information about the boot disk of a VM. */
	export interface BootDiskDefaultsFormProperties {

		/** Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
		deviceName: FormControl<string | null | undefined>,

		/** Optional. The name of the disk. */
		diskName: FormControl<string | null | undefined>,

		/** Optional. The type of disk provisioning to use for the VM. */
		diskType: FormControl<BootDiskDefaultsDiskType | null | undefined>,
	}
	export function CreateBootDiskDefaultsFormGroup() {
		return new FormGroup<BootDiskDefaultsFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			diskName: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<BootDiskDefaultsDiskType | null | undefined>(undefined),
		});

	}

	export enum BootDiskDefaultsDiskType { COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED = 0, COMPUTE_ENGINE_DISK_TYPE_STANDARD = 1, COMPUTE_ENGINE_DISK_TYPE_SSD = 2, COMPUTE_ENGINE_DISK_TYPE_BALANCED = 3 }


	/** Encryption message describes the details of the applied encryption. */
	export interface Encryption {

		/** Required. The name of the encryption key that is stored in Google Cloud KMS. */
		kmsKey?: string | null;
	}

	/** Encryption message describes the details of the applied encryption. */
	export interface EncryptionFormProperties {

		/** Required. The name of the encryption key that is stored in Google Cloud KMS. */
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the image source used to create the disk. */
	export interface DiskImageDefaults {

		/** Required. The Image resource used when creating the disk. */
		sourceImage?: string | null;
	}

	/** Contains details about the image source used to create the disk. */
	export interface DiskImageDefaultsFormProperties {

		/** Required. The Image resource used when creating the disk. */
		sourceImage: FormControl<string | null | undefined>,
	}
	export function CreateDiskImageDefaultsFormGroup() {
		return new FormGroup<DiskImageDefaultsFormProperties>({
			sourceImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for 'CancelCloneJob' request. */
	export interface CancelCloneJobRequest {
	}

	/** Request message for 'CancelCloneJob' request. */
	export interface CancelCloneJobRequestFormProperties {
	}
	export function CreateCancelCloneJobRequestFormGroup() {
		return new FormGroup<CancelCloneJobRequestFormProperties>({
		});

	}


	/** Request message for 'CancelCutoverJob' request. */
	export interface CancelCutoverJobRequest {
	}

	/** Request message for 'CancelCutoverJob' request. */
	export interface CancelCutoverJobRequestFormProperties {
	}
	export function CreateCancelCutoverJobRequestFormGroup() {
		return new FormGroup<CancelCutoverJobRequestFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone. */
	export interface CloneJob {

		/** ComputeEngineDisksTargetDetails is a collection of created Persistent Disks details. */
		computeEngineDisksTargetDetails?: ComputeEngineDisksTargetDetails;

		/** ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project. */
		computeEngineTargetDetails?: ComputeEngineTargetDetails;

		/** Output only. The time the clone job was created (as an API call, not when it was actually created in the target). */
		createTime?: string | null;

		/** Output only. The time the clone job was ended. */
		endTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Output only. The name of the clone. */
		name?: string | null;

		/** Output only. State of the clone job. */
		state?: CloneJobState | null;

		/** Output only. The time the state was last updated. */
		stateTime?: string | null;

		/** Output only. The clone steps list representing its progress. */
		steps?: Array<CloneStep>;
	}

	/** CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone. */
	export interface CloneJobFormProperties {

		/** Output only. The time the clone job was created (as an API call, not when it was actually created in the target). */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the clone job was ended. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The name of the clone. */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the clone job. */
		state: FormControl<CloneJobState | null | undefined>,

		/** Output only. The time the state was last updated. */
		stateTime: FormControl<string | null | undefined>,
	}
	export function CreateCloneJobFormGroup() {
		return new FormGroup<CloneJobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CloneJobState | null | undefined>(undefined),
			stateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ComputeEngineDisksTargetDetails is a collection of created Persistent Disks details. */
	export interface ComputeEngineDisksTargetDetails {

		/** The details of each created Persistent Disk. */
		disks?: Array<PersistentDisk>;

		/** Details for a disks-only migration. */
		disksTargetDetails?: DisksMigrationDisksTargetDetails;

		/** Details for the VM created VM as part of disks migration. */
		vmTargetDetails?: DisksMigrationVmTargetDetails;
	}

	/** ComputeEngineDisksTargetDetails is a collection of created Persistent Disks details. */
	export interface ComputeEngineDisksTargetDetailsFormProperties {
	}
	export function CreateComputeEngineDisksTargetDetailsFormGroup() {
		return new FormGroup<ComputeEngineDisksTargetDetailsFormProperties>({
		});

	}


	/** Details of a created Persistent Disk. */
	export interface PersistentDisk {

		/** The URI of the Persistent Disk. */
		diskUri?: string | null;

		/** The ordinal number of the source VM disk. */
		sourceDiskNumber?: number | null;
	}

	/** Details of a created Persistent Disk. */
	export interface PersistentDiskFormProperties {

		/** The URI of the Persistent Disk. */
		diskUri: FormControl<string | null | undefined>,

		/** The ordinal number of the source VM disk. */
		sourceDiskNumber: FormControl<number | null | undefined>,
	}
	export function CreatePersistentDiskFormGroup() {
		return new FormGroup<PersistentDiskFormProperties>({
			diskUri: new FormControl<string | null | undefined>(undefined),
			sourceDiskNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details for a disks-only migration. */
	export interface DisksMigrationDisksTargetDetails {
	}

	/** Details for a disks-only migration. */
	export interface DisksMigrationDisksTargetDetailsFormProperties {
	}
	export function CreateDisksMigrationDisksTargetDetailsFormGroup() {
		return new FormGroup<DisksMigrationDisksTargetDetailsFormProperties>({
		});

	}


	/** Details for the VM created VM as part of disks migration. */
	export interface DisksMigrationVmTargetDetails {

		/** Output only. The URI of the Compute Engine VM. */
		vmUri?: string | null;
	}

	/** Details for the VM created VM as part of disks migration. */
	export interface DisksMigrationVmTargetDetailsFormProperties {

		/** Output only. The URI of the Compute Engine VM. */
		vmUri: FormControl<string | null | undefined>,
	}
	export function CreateDisksMigrationVmTargetDetailsFormGroup() {
		return new FormGroup<DisksMigrationVmTargetDetailsFormProperties>({
			vmUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project. */
	export interface ComputeEngineTargetDetails {

		/** Additional licenses to assign to the VM. */
		additionalLicenses?: Array<string>;

		/** AppliedLicense holds the license data returned by adaptation module report. */
		appliedLicense?: AppliedLicense;

		/** The VM Boot Option, as set in the source VM. */
		bootOption?: ComputeEngineTargetDetailsBootOption | null;

		/** Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes. */
		computeScheduling?: ComputeScheduling;

		/** The disk type to use in the VM. */
		diskType?: BootDiskDefaultsDiskType | null;

		/** Encryption message describes the details of the applied encryption. */
		encryption?: Encryption;

		/** The hostname to assign to the VM. */
		hostname?: string | null;

		/** A map of labels to associate with the VM. */
		labels?: {[id: string]: string };

		/** The license type to use in OS adaptation. */
		licenseType?: ComputeEngineTargetDetailsLicenseType | null;

		/** The machine type to create the VM with. */
		machineType?: string | null;

		/** The machine type series to create the VM with. */
		machineTypeSeries?: string | null;

		/** The metadata key/value pairs to assign to the VM. */
		metadata?: {[id: string]: string };

		/** List of NICs connected to this VM. */
		networkInterfaces?: Array<NetworkInterface>;

		/** A list of network tags to associate with the VM. */
		networkTags?: Array<string>;

		/** The Google Cloud target project ID or project name. */
		project?: string | null;

		/** Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
		secureBoot?: boolean | null;

		/** The service account to associate the VM with. */
		serviceAccount?: string | null;

		/** The name of the VM to create. */
		vmName?: string | null;

		/** The zone in which to create the VM. */
		zone?: string | null;
	}

	/** ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project. */
	export interface ComputeEngineTargetDetailsFormProperties {

		/** The VM Boot Option, as set in the source VM. */
		bootOption: FormControl<ComputeEngineTargetDetailsBootOption | null | undefined>,

		/** The disk type to use in the VM. */
		diskType: FormControl<BootDiskDefaultsDiskType | null | undefined>,

		/** The hostname to assign to the VM. */
		hostname: FormControl<string | null | undefined>,

		/** A map of labels to associate with the VM. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The license type to use in OS adaptation. */
		licenseType: FormControl<ComputeEngineTargetDetailsLicenseType | null | undefined>,

		/** The machine type to create the VM with. */
		machineType: FormControl<string | null | undefined>,

		/** The machine type series to create the VM with. */
		machineTypeSeries: FormControl<string | null | undefined>,

		/** The metadata key/value pairs to assign to the VM. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The Google Cloud target project ID or project name. */
		project: FormControl<string | null | undefined>,

		/** Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
		secureBoot: FormControl<boolean | null | undefined>,

		/** The service account to associate the VM with. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The name of the VM to create. */
		vmName: FormControl<string | null | undefined>,

		/** The zone in which to create the VM. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateComputeEngineTargetDetailsFormGroup() {
		return new FormGroup<ComputeEngineTargetDetailsFormProperties>({
			bootOption: new FormControl<ComputeEngineTargetDetailsBootOption | null | undefined>(undefined),
			diskType: new FormControl<BootDiskDefaultsDiskType | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			licenseType: new FormControl<ComputeEngineTargetDetailsLicenseType | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			machineTypeSeries: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			secureBoot: new FormControl<boolean | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComputeEngineTargetDetailsBootOption { COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED = 0, COMPUTE_ENGINE_BOOT_OPTION_EFI = 1, COMPUTE_ENGINE_BOOT_OPTION_BIOS = 2 }


	/** Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes. */
	export interface ComputeScheduling {

		/** The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured. */
		minNodeCpus?: number | null;

		/** A set of node affinity and anti-affinity configurations for sole tenant nodes. */
		nodeAffinities?: Array<SchedulingNodeAffinity>;

		/** How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance. */
		onHostMaintenance?: ComputeSchedulingOnHostMaintenance | null;

		/** Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart. */
		restartType?: ComputeSchedulingRestartType | null;
	}

	/** Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes. */
	export interface ComputeSchedulingFormProperties {

		/** The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured. */
		minNodeCpus: FormControl<number | null | undefined>,

		/** How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance. */
		onHostMaintenance: FormControl<ComputeSchedulingOnHostMaintenance | null | undefined>,

		/** Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart. */
		restartType: FormControl<ComputeSchedulingRestartType | null | undefined>,
	}
	export function CreateComputeSchedulingFormGroup() {
		return new FormGroup<ComputeSchedulingFormProperties>({
			minNodeCpus: new FormControl<number | null | undefined>(undefined),
			onHostMaintenance: new FormControl<ComputeSchedulingOnHostMaintenance | null | undefined>(undefined),
			restartType: new FormControl<ComputeSchedulingRestartType | null | undefined>(undefined),
		});

	}


	/** Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling */
	export interface SchedulingNodeAffinity {

		/** The label key of Node resource to reference. */
		key?: string | null;

		/** The operator to use for the node resources specified in the `values` parameter. */
		operator?: SchedulingNodeAffinityOperator | null;

		/** Corresponds to the label values of Node resource. */
		values?: Array<string>;
	}

	/** Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling */
	export interface SchedulingNodeAffinityFormProperties {

		/** The label key of Node resource to reference. */
		key: FormControl<string | null | undefined>,

		/** The operator to use for the node resources specified in the `values` parameter. */
		operator: FormControl<SchedulingNodeAffinityOperator | null | undefined>,
	}
	export function CreateSchedulingNodeAffinityFormGroup() {
		return new FormGroup<SchedulingNodeAffinityFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<SchedulingNodeAffinityOperator | null | undefined>(undefined),
		});

	}

	export enum SchedulingNodeAffinityOperator { OPERATOR_UNSPECIFIED = 0, IN = 1, NOT_IN = 2 }

	export enum ComputeSchedulingOnHostMaintenance { ON_HOST_MAINTENANCE_UNSPECIFIED = 0, TERMINATE = 1, MIGRATE = 2 }

	export enum ComputeSchedulingRestartType { RESTART_TYPE_UNSPECIFIED = 0, AUTOMATIC_RESTART = 1, NO_AUTOMATIC_RESTART = 2 }

	export enum ComputeEngineTargetDetailsLicenseType { COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT = 0, COMPUTE_ENGINE_LICENSE_TYPE_PAYG = 1, COMPUTE_ENGINE_LICENSE_TYPE_BYOL = 2 }


	/** NetworkInterface represents a NIC of a VM. */
	export interface NetworkInterface {

		/** The external IP to define in the NIC. */
		externalIp?: string | null;

		/** The internal IP to define in the NIC. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path. */
		internalIp?: string | null;

		/** The network to connect the NIC to. */
		network?: string | null;

		/** The subnetwork to connect the NIC to. */
		subnetwork?: string | null;
	}

	/** NetworkInterface represents a NIC of a VM. */
	export interface NetworkInterfaceFormProperties {

		/** The external IP to define in the NIC. */
		externalIp: FormControl<string | null | undefined>,

		/** The internal IP to define in the NIC. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path. */
		internalIp: FormControl<string | null | undefined>,

		/** The network to connect the NIC to. */
		network: FormControl<string | null | undefined>,

		/** The subnetwork to connect the NIC to. */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			externalIp: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloneJobState { STATE_UNSPECIFIED = 0, PENDING = 1, ACTIVE = 2, FAILED = 3, SUCCEEDED = 4, CANCELLED = 5, CANCELLING = 6, ADAPTING_OS = 7 }


	/** CloneStep holds information about the clone step progress. */
	export interface CloneStep {

		/** AdaptingOSStep contains specific step details. */
		adaptingOs?: AdaptingOSStep;

		/** The time the step has ended. */
		endTime?: string | null;

		/** InstantiatingMigratedVMStep contains specific step details. */
		instantiatingMigratedVm?: InstantiatingMigratedVMStep;

		/** PreparingVMDisksStep contains specific step details. */
		preparingVmDisks?: PreparingVMDisksStep;

		/** The time the step has started. */
		startTime?: string | null;
	}

	/** CloneStep holds information about the clone step progress. */
	export interface CloneStepFormProperties {

		/** The time the step has ended. */
		endTime: FormControl<string | null | undefined>,

		/** The time the step has started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCloneStepFormGroup() {
		return new FormGroup<CloneStepFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** InstantiatingMigratedVMStep contains specific step details. */
	export interface InstantiatingMigratedVMStep {
	}

	/** InstantiatingMigratedVMStep contains specific step details. */
	export interface InstantiatingMigratedVMStepFormProperties {
	}
	export function CreateInstantiatingMigratedVMStepFormGroup() {
		return new FormGroup<InstantiatingMigratedVMStepFormProperties>({
		});

	}


	/** PreparingVMDisksStep contains specific step details. */
	export interface PreparingVMDisksStep {
	}

	/** PreparingVMDisksStep contains specific step details. */
	export interface PreparingVMDisksStepFormProperties {
	}
	export function CreatePreparingVMDisksStepFormGroup() {
		return new FormGroup<PreparingVMDisksStepFormProperties>({
		});

	}


	/** ComputeEngineDisksTargetDefaults is a collection of details for creating Persistent Disks in a target Compute Engine project. */
	export interface ComputeEngineDisksTargetDefaults {

		/** The details of each Persistent Disk to create. */
		disks?: Array<PersistentDiskDefaults>;

		/** Details for a disk only migration. */
		disksTargetDefaults?: DisksMigrationDisksTargetDefaults;

		/** The full path of the resource of type TargetProject which represents the Compute Engine project in which to create the Persistent Disks. */
		targetProject?: string | null;

		/** Details for creation of a VM that migrated data disks will be attached to. */
		vmTargetDefaults?: DisksMigrationVmTargetDefaults;

		/** The zone in which to create the Persistent Disks. */
		zone?: string | null;
	}

	/** ComputeEngineDisksTargetDefaults is a collection of details for creating Persistent Disks in a target Compute Engine project. */
	export interface ComputeEngineDisksTargetDefaultsFormProperties {

		/** The full path of the resource of type TargetProject which represents the Compute Engine project in which to create the Persistent Disks. */
		targetProject: FormControl<string | null | undefined>,

		/** The zone in which to create the Persistent Disks. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateComputeEngineDisksTargetDefaultsFormGroup() {
		return new FormGroup<ComputeEngineDisksTargetDefaultsFormProperties>({
			targetProject: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for creation of a Persistent Disk. */
	export interface PersistentDiskDefaults {

		/** A map of labels to associate with the Persistent Disk. */
		additionalLabels?: {[id: string]: string };

		/** Optional. The name of the Persistent Disk to create. */
		diskName?: string | null;

		/** The disk type to use. */
		diskType?: BootDiskDefaultsDiskType | null;

		/** Encryption message describes the details of the applied encryption. */
		encryption?: Encryption;

		/** Required. The ordinal number of the source VM disk. */
		sourceDiskNumber?: number | null;

		/** Details for attachment of the disk to a VM. */
		vmAttachmentDetails?: VmAttachmentDetails;
	}

	/** Details for creation of a Persistent Disk. */
	export interface PersistentDiskDefaultsFormProperties {

		/** A map of labels to associate with the Persistent Disk. */
		additionalLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The name of the Persistent Disk to create. */
		diskName: FormControl<string | null | undefined>,

		/** The disk type to use. */
		diskType: FormControl<BootDiskDefaultsDiskType | null | undefined>,

		/** Required. The ordinal number of the source VM disk. */
		sourceDiskNumber: FormControl<number | null | undefined>,
	}
	export function CreatePersistentDiskDefaultsFormGroup() {
		return new FormGroup<PersistentDiskDefaultsFormProperties>({
			additionalLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			diskName: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<BootDiskDefaultsDiskType | null | undefined>(undefined),
			sourceDiskNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details for attachment of the disk to a VM. */
	export interface VmAttachmentDetails {

		/** Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
		deviceName?: string | null;
	}

	/** Details for attachment of the disk to a VM. */
	export interface VmAttachmentDetailsFormProperties {

		/** Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
		deviceName: FormControl<string | null | undefined>,
	}
	export function CreateVmAttachmentDetailsFormGroup() {
		return new FormGroup<VmAttachmentDetailsFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a disk only migration. */
	export interface DisksMigrationDisksTargetDefaults {
	}

	/** Details for a disk only migration. */
	export interface DisksMigrationDisksTargetDefaultsFormProperties {
	}
	export function CreateDisksMigrationDisksTargetDefaultsFormGroup() {
		return new FormGroup<DisksMigrationDisksTargetDefaultsFormProperties>({
		});

	}


	/** Details for creation of a VM that migrated data disks will be attached to. */
	export interface DisksMigrationVmTargetDefaults {

		/** Optional. Additional licenses to assign to the VM. */
		additionalLicenses?: Array<string>;

		/** BootDiskDefaults hold information about the boot disk of a VM. */
		bootDiskDefaults?: BootDiskDefaults;

		/** Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes. */
		computeScheduling?: ComputeScheduling;

		/** Encryption message describes the details of the applied encryption. */
		encryption?: Encryption;

		/** Optional. The hostname to assign to the VM. */
		hostname?: string | null;

		/** Optional. A map of labels to associate with the VM. */
		labels?: {[id: string]: string };

		/** Required. The machine type to create the VM with. */
		machineType?: string | null;

		/** Optional. The machine type series to create the VM with. For presentation only. */
		machineTypeSeries?: string | null;

		/** Optional. The metadata key/value pairs to assign to the VM. */
		metadata?: {[id: string]: string };

		/** Optional. NICs to attach to the VM. */
		networkInterfaces?: Array<NetworkInterface>;

		/** Optional. A list of network tags to associate with the VM. */
		networkTags?: Array<string>;

		/** Optional. Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
		secureBoot?: boolean | null;

		/** Optional. The service account to associate the VM with. */
		serviceAccount?: string | null;

		/** Required. The name of the VM to create. */
		vmName?: string | null;
	}

	/** Details for creation of a VM that migrated data disks will be attached to. */
	export interface DisksMigrationVmTargetDefaultsFormProperties {

		/** Optional. The hostname to assign to the VM. */
		hostname: FormControl<string | null | undefined>,

		/** Optional. A map of labels to associate with the VM. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The machine type to create the VM with. */
		machineType: FormControl<string | null | undefined>,

		/** Optional. The machine type series to create the VM with. For presentation only. */
		machineTypeSeries: FormControl<string | null | undefined>,

		/** Optional. The metadata key/value pairs to assign to the VM. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
		secureBoot: FormControl<boolean | null | undefined>,

		/** Optional. The service account to associate the VM with. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Required. The name of the VM to create. */
		vmName: FormControl<string | null | undefined>,
	}
	export function CreateDisksMigrationVmTargetDefaultsFormGroup() {
		return new FormGroup<DisksMigrationVmTargetDefaultsFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			machineTypeSeries: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			secureBoot: new FormControl<boolean | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project. */
	export interface ComputeEngineTargetDefaults {

		/** Additional licenses to assign to the VM. */
		additionalLicenses?: Array<string>;

		/** AppliedLicense holds the license data returned by adaptation module report. */
		appliedLicense?: AppliedLicense;

		/** Output only. The VM Boot Option, as set in the source VM. */
		bootOption?: ComputeEngineTargetDetailsBootOption | null;

		/** Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes. */
		computeScheduling?: ComputeScheduling;

		/** The disk type to use in the VM. */
		diskType?: BootDiskDefaultsDiskType | null;

		/** Encryption message describes the details of the applied encryption. */
		encryption?: Encryption;

		/** The hostname to assign to the VM. */
		hostname?: string | null;

		/** A map of labels to associate with the VM. */
		labels?: {[id: string]: string };

		/** The license type to use in OS adaptation. */
		licenseType?: ComputeEngineTargetDetailsLicenseType | null;

		/** The machine type to create the VM with. */
		machineType?: string | null;

		/** The machine type series to create the VM with. */
		machineTypeSeries?: string | null;

		/** The metadata key/value pairs to assign to the VM. */
		metadata?: {[id: string]: string };

		/** List of NICs connected to this VM. */
		networkInterfaces?: Array<NetworkInterface>;

		/** A list of network tags to associate with the VM. */
		networkTags?: Array<string>;

		/** Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
		secureBoot?: boolean | null;

		/** The service account to associate the VM with. */
		serviceAccount?: string | null;

		/** The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM. */
		targetProject?: string | null;

		/** The name of the VM to create. */
		vmName?: string | null;

		/** The zone in which to create the VM. */
		zone?: string | null;
	}

	/** ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project. */
	export interface ComputeEngineTargetDefaultsFormProperties {

		/** Output only. The VM Boot Option, as set in the source VM. */
		bootOption: FormControl<ComputeEngineTargetDetailsBootOption | null | undefined>,

		/** The disk type to use in the VM. */
		diskType: FormControl<BootDiskDefaultsDiskType | null | undefined>,

		/** The hostname to assign to the VM. */
		hostname: FormControl<string | null | undefined>,

		/** A map of labels to associate with the VM. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The license type to use in OS adaptation. */
		licenseType: FormControl<ComputeEngineTargetDetailsLicenseType | null | undefined>,

		/** The machine type to create the VM with. */
		machineType: FormControl<string | null | undefined>,

		/** The machine type series to create the VM with. */
		machineTypeSeries: FormControl<string | null | undefined>,

		/** The metadata key/value pairs to assign to the VM. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
		secureBoot: FormControl<boolean | null | undefined>,

		/** The service account to associate the VM with. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM. */
		targetProject: FormControl<string | null | undefined>,

		/** The name of the VM to create. */
		vmName: FormControl<string | null | undefined>,

		/** The zone in which to create the VM. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateComputeEngineTargetDefaultsFormGroup() {
		return new FormGroup<ComputeEngineTargetDefaultsFormProperties>({
			bootOption: new FormControl<ComputeEngineTargetDetailsBootOption | null | undefined>(undefined),
			diskType: new FormControl<BootDiskDefaultsDiskType | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			licenseType: new FormControl<ComputeEngineTargetDetailsLicenseType | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			machineTypeSeries: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			secureBoot: new FormControl<boolean | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			targetProject: new FormControl<string | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CutoverForecast holds information about future CutoverJobs of a MigratingVm. */
	export interface CutoverForecast {

		/** Output only. Estimation of the CutoverJob duration. */
		estimatedCutoverJobDuration?: string | null;
	}

	/** CutoverForecast holds information about future CutoverJobs of a MigratingVm. */
	export interface CutoverForecastFormProperties {

		/** Output only. Estimation of the CutoverJob duration. */
		estimatedCutoverJobDuration: FormControl<string | null | undefined>,
	}
	export function CreateCutoverForecastFormGroup() {
		return new FormGroup<CutoverForecastFormProperties>({
			estimatedCutoverJobDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot. */
	export interface CutoverJob {

		/** ComputeEngineDisksTargetDetails is a collection of created Persistent Disks details. */
		computeEngineDisksTargetDetails?: ComputeEngineDisksTargetDetails;

		/** ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project. */
		computeEngineTargetDetails?: ComputeEngineTargetDetails;

		/** Output only. The time the cutover job was created (as an API call, not when it was actually created in the target). */
		createTime?: string | null;

		/** Output only. The time the cutover job had finished. */
		endTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Output only. The name of the cutover job. */
		name?: string | null;

		/** Output only. The current progress in percentage of the cutover job. */
		progressPercent?: number | null;

		/** Output only. State of the cutover job. */
		state?: CutoverJobState | null;

		/** Output only. A message providing possible extra details about the current state. */
		stateMessage?: string | null;

		/** Output only. The time the state was last updated. */
		stateTime?: string | null;

		/** Output only. The cutover steps list representing its progress. */
		steps?: Array<CutoverStep>;
	}

	/** CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot. */
	export interface CutoverJobFormProperties {

		/** Output only. The time the cutover job was created (as an API call, not when it was actually created in the target). */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the cutover job had finished. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The name of the cutover job. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current progress in percentage of the cutover job. */
		progressPercent: FormControl<number | null | undefined>,

		/** Output only. State of the cutover job. */
		state: FormControl<CutoverJobState | null | undefined>,

		/** Output only. A message providing possible extra details about the current state. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The time the state was last updated. */
		stateTime: FormControl<string | null | undefined>,
	}
	export function CreateCutoverJobFormGroup() {
		return new FormGroup<CutoverJobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<CutoverJobState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			stateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CutoverJobState { STATE_UNSPECIFIED = 0, PENDING = 1, FAILED = 2, SUCCEEDED = 3, CANCELLED = 4, CANCELLING = 5, ACTIVE = 6, ADAPTING_OS = 7 }


	/** CutoverStep holds information about the cutover step progress. */
	export interface CutoverStep {

		/** The time the step has ended. */
		endTime?: string | null;

		/** ReplicationCycle contains information about the current replication cycle status. */
		finalSync?: ReplicationCycle;

		/** InstantiatingMigratedVMStep contains specific step details. */
		instantiatingMigratedVm?: InstantiatingMigratedVMStep;

		/** PreparingVMDisksStep contains specific step details. */
		preparingVmDisks?: PreparingVMDisksStep;

		/** ReplicationCycle contains information about the current replication cycle status. */
		previousReplicationCycle?: ReplicationCycle;

		/** ShuttingDownSourceVMStep contains specific step details. */
		shuttingDownSourceVm?: ShuttingDownSourceVMStep;

		/** The time the step has started. */
		startTime?: string | null;
	}

	/** CutoverStep holds information about the cutover step progress. */
	export interface CutoverStepFormProperties {

		/** The time the step has ended. */
		endTime: FormControl<string | null | undefined>,

		/** The time the step has started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCutoverStepFormGroup() {
		return new FormGroup<CutoverStepFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ReplicationCycle contains information about the current replication cycle status. */
	export interface ReplicationCycle {

		/** The cycle's ordinal number. */
		cycleNumber?: number | null;

		/** The time the replication cycle has ended. */
		endTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The identifier of the ReplicationCycle. */
		name?: string | null;

		/** The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately. */
		progressPercent?: number | null;

		/** The time the replication cycle has started. */
		startTime?: string | null;

		/** State of the ReplicationCycle. */
		state?: ReplicationCycleState | null;

		/** The cycle's steps list representing its progress. */
		steps?: Array<CycleStep>;

		/** The accumulated duration the replication cycle was paused. */
		totalPauseDuration?: string | null;

		/** Output only. Warnings that occurred during the cycle. */
		warnings?: Array<MigrationWarning>;
	}

	/** ReplicationCycle contains information about the current replication cycle status. */
	export interface ReplicationCycleFormProperties {

		/** The cycle's ordinal number. */
		cycleNumber: FormControl<number | null | undefined>,

		/** The time the replication cycle has ended. */
		endTime: FormControl<string | null | undefined>,

		/** The identifier of the ReplicationCycle. */
		name: FormControl<string | null | undefined>,

		/** The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately. */
		progressPercent: FormControl<number | null | undefined>,

		/** The time the replication cycle has started. */
		startTime: FormControl<string | null | undefined>,

		/** State of the ReplicationCycle. */
		state: FormControl<ReplicationCycleState | null | undefined>,

		/** The accumulated duration the replication cycle was paused. */
		totalPauseDuration: FormControl<string | null | undefined>,
	}
	export function CreateReplicationCycleFormGroup() {
		return new FormGroup<ReplicationCycleFormProperties>({
			cycleNumber: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ReplicationCycleState | null | undefined>(undefined),
			totalPauseDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationCycleState { STATE_UNSPECIFIED = 0, RUNNING = 1, PAUSED = 2, FAILED = 3, SUCCEEDED = 4 }


	/** CycleStep holds information about a step progress. */
	export interface CycleStep {

		/** The time the cycle step has ended. */
		endTime?: string | null;

		/** InitializingReplicationStep contains specific step details. */
		initializingReplication?: InitializingReplicationStep;

		/** PostProcessingStep contains specific step details. */
		postProcessing?: PostProcessingStep;

		/** ReplicatingStep contains specific step details. */
		replicating?: ReplicatingStep;

		/** The time the cycle step has started. */
		startTime?: string | null;
	}

	/** CycleStep holds information about a step progress. */
	export interface CycleStepFormProperties {

		/** The time the cycle step has ended. */
		endTime: FormControl<string | null | undefined>,

		/** The time the cycle step has started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCycleStepFormGroup() {
		return new FormGroup<CycleStepFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** InitializingReplicationStep contains specific step details. */
	export interface InitializingReplicationStep {
	}

	/** InitializingReplicationStep contains specific step details. */
	export interface InitializingReplicationStepFormProperties {
	}
	export function CreateInitializingReplicationStepFormGroup() {
		return new FormGroup<InitializingReplicationStepFormProperties>({
		});

	}


	/** PostProcessingStep contains specific step details. */
	export interface PostProcessingStep {
	}

	/** PostProcessingStep contains specific step details. */
	export interface PostProcessingStepFormProperties {
	}
	export function CreatePostProcessingStepFormGroup() {
		return new FormGroup<PostProcessingStepFormProperties>({
		});

	}


	/** ReplicatingStep contains specific step details. */
	export interface ReplicatingStep {

		/** The source disks replication rate for the last 30 minutes in bytes per second. */
		lastThirtyMinutesAverageBytesPerSecond?: string | null;

		/** The source disks replication rate for the last 2 minutes in bytes per second. */
		lastTwoMinutesAverageBytesPerSecond?: string | null;

		/** Replicated bytes in the step. */
		replicatedBytes?: string | null;

		/** Total bytes to be handled in the step. */
		totalBytes?: string | null;
	}

	/** ReplicatingStep contains specific step details. */
	export interface ReplicatingStepFormProperties {

		/** The source disks replication rate for the last 30 minutes in bytes per second. */
		lastThirtyMinutesAverageBytesPerSecond: FormControl<string | null | undefined>,

		/** The source disks replication rate for the last 2 minutes in bytes per second. */
		lastTwoMinutesAverageBytesPerSecond: FormControl<string | null | undefined>,

		/** Replicated bytes in the step. */
		replicatedBytes: FormControl<string | null | undefined>,

		/** Total bytes to be handled in the step. */
		totalBytes: FormControl<string | null | undefined>,
	}
	export function CreateReplicatingStepFormGroup() {
		return new FormGroup<ReplicatingStepFormProperties>({
			lastThirtyMinutesAverageBytesPerSecond: new FormControl<string | null | undefined>(undefined),
			lastTwoMinutesAverageBytesPerSecond: new FormControl<string | null | undefined>(undefined),
			replicatedBytes: new FormControl<string | null | undefined>(undefined),
			totalBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents migration resource warning information that can be used with google.rpc.Status message. MigrationWarning is used to present the user with warning information in migration operations. */
	export interface MigrationWarning {

		/** Provides a localized error message that is safe to return to the user which can be attached to an RPC error. */
		actionItem?: LocalizedMessage;

		/** The warning code. */
		code?: MigrationWarningCode | null;

		/** URL(s) pointing to additional information on handling the current warning. */
		helpLinks?: Array<Link>;

		/** Provides a localized error message that is safe to return to the user which can be attached to an RPC error. */
		warningMessage?: LocalizedMessage;

		/** The time the warning occurred. */
		warningTime?: string | null;
	}

	/** Represents migration resource warning information that can be used with google.rpc.Status message. MigrationWarning is used to present the user with warning information in migration operations. */
	export interface MigrationWarningFormProperties {

		/** The warning code. */
		code: FormControl<MigrationWarningCode | null | undefined>,

		/** The time the warning occurred. */
		warningTime: FormControl<string | null | undefined>,
	}
	export function CreateMigrationWarningFormGroup() {
		return new FormGroup<MigrationWarningFormProperties>({
			code: new FormControl<MigrationWarningCode | null | undefined>(undefined),
			warningTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a localized error message that is safe to return to the user which can be attached to an RPC error. */
	export interface LocalizedMessage {

		/** The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX" */
		locale?: string | null;

		/** The localized error message in the above locale. */
		message?: string | null;
	}

	/** Provides a localized error message that is safe to return to the user which can be attached to an RPC error. */
	export interface LocalizedMessageFormProperties {

		/** The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX" */
		locale: FormControl<string | null | undefined>,

		/** The localized error message in the above locale. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedMessageFormGroup() {
		return new FormGroup<LocalizedMessageFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MigrationWarningCode { WARNING_CODE_UNSPECIFIED = 0, ADAPTATION_WARNING = 1 }


	/** Describes a URL link. */
	export interface Link {

		/** Describes what the link offers. */
		description?: string | null;

		/** The URL of the link. */
		url?: string | null;
	}

	/** Describes a URL link. */
	export interface LinkFormProperties {

		/** Describes what the link offers. */
		description: FormControl<string | null | undefined>,

		/** The URL of the link. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ShuttingDownSourceVMStep contains specific step details. */
	export interface ShuttingDownSourceVMStep {
	}

	/** ShuttingDownSourceVMStep contains specific step details. */
	export interface ShuttingDownSourceVMStepFormProperties {
	}
	export function CreateShuttingDownSourceVMStepFormGroup() {
		return new FormGroup<ShuttingDownSourceVMStepFormProperties>({
		});

	}


	/** DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer. */
	export interface DatacenterConnector {

		/** Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance. */
		applianceInfrastructureVersion?: string | null;

		/** Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance. */
		applianceSoftwareVersion?: string | null;

		/** Holds informatiom about the available versions for upgrade. */
		availableVersions?: AvailableUpdates;

		/** Output only. The communication channel between the datacenter connector and Google Cloud. */
		bucket?: string | null;

		/** Output only. The time the connector was created (as an API call, not when it was actually installed). */
		createTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Output only. The connector's name. */
		name?: string | null;

		/** Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified. */
		registrationId?: string | null;

		/** The service account to use in the connector when communicating with the cloud. */
		serviceAccount?: string | null;

		/** Output only. State of the DatacenterConnector, as determined by the health checks. */
		state?: DatacenterConnectorState | null;

		/** Output only. The time the state was last set. */
		stateTime?: string | null;

		/** Output only. The last time the connector was updated with an API call. */
		updateTime?: string | null;

		/** UpgradeStatus contains information about upgradeAppliance operation. */
		upgradeStatus?: UpgradeStatus;

		/** The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified. */
		version?: string | null;
	}

	/** DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer. */
	export interface DatacenterConnectorFormProperties {

		/** Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance. */
		applianceInfrastructureVersion: FormControl<string | null | undefined>,

		/** Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance. */
		applianceSoftwareVersion: FormControl<string | null | undefined>,

		/** Output only. The communication channel between the datacenter connector and Google Cloud. */
		bucket: FormControl<string | null | undefined>,

		/** Output only. The time the connector was created (as an API call, not when it was actually installed). */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The connector's name. */
		name: FormControl<string | null | undefined>,

		/** Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified. */
		registrationId: FormControl<string | null | undefined>,

		/** The service account to use in the connector when communicating with the cloud. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. State of the DatacenterConnector, as determined by the health checks. */
		state: FormControl<DatacenterConnectorState | null | undefined>,

		/** Output only. The time the state was last set. */
		stateTime: FormControl<string | null | undefined>,

		/** Output only. The last time the connector was updated with an API call. */
		updateTime: FormControl<string | null | undefined>,

		/** The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDatacenterConnectorFormGroup() {
		return new FormGroup<DatacenterConnectorFormProperties>({
			applianceInfrastructureVersion: new FormControl<string | null | undefined>(undefined),
			applianceSoftwareVersion: new FormControl<string | null | undefined>(undefined),
			bucket: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			registrationId: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DatacenterConnectorState | null | undefined>(undefined),
			stateTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatacenterConnectorState { STATE_UNSPECIFIED = 0, PENDING = 1, OFFLINE = 2, FAILED = 3, ACTIVE = 4 }


	/** UpgradeStatus contains information about upgradeAppliance operation. */
	export interface UpgradeStatus {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The version from which we upgraded. */
		previousVersion?: string | null;

		/** The time the operation was started. */
		startTime?: string | null;

		/** The state of the upgradeAppliance operation. */
		state?: UpgradeStatusState | null;

		/** The version to upgrade to. */
		version?: string | null;
	}

	/** UpgradeStatus contains information about upgradeAppliance operation. */
	export interface UpgradeStatusFormProperties {

		/** The version from which we upgraded. */
		previousVersion: FormControl<string | null | undefined>,

		/** The time the operation was started. */
		startTime: FormControl<string | null | undefined>,

		/** The state of the upgradeAppliance operation. */
		state: FormControl<UpgradeStatusState | null | undefined>,

		/** The version to upgrade to. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeStatusFormGroup() {
		return new FormGroup<UpgradeStatusFormProperties>({
			previousVersion: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<UpgradeStatusState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpgradeStatusState { STATE_UNSPECIFIED = 0, RUNNING = 1, FAILED = 2, SUCCEEDED = 3 }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Response message for fetchInventory. */
	export interface FetchInventoryResponse {

		/** AWSVmsDetails describes VMs in AWS. */
		awsVms?: AwsVmsDetails;

		/** AzureVmsDetails describes VMs in Azure. */
		azureVms?: AzureVmsDetails;

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. The timestamp when the source was last queried (if the result is from the cache). */
		updateTime?: string | null;

		/** VmwareVmsDetails describes VMs in vCenter. */
		vmwareVms?: VmwareVmsDetails;
	}

	/** Response message for fetchInventory. */
	export interface FetchInventoryResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the source was last queried (if the result is from the cache). */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateFetchInventoryResponseFormGroup() {
		return new FormGroup<FetchInventoryResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareVmsDetails describes VMs in vCenter. */
	export interface VmwareVmsDetails {

		/** The details of the vmware VMs. */
		details?: Array<VmwareVmDetails>;
	}

	/** VmwareVmsDetails describes VMs in vCenter. */
	export interface VmwareVmsDetailsFormProperties {
	}
	export function CreateVmwareVmsDetailsFormGroup() {
		return new FormGroup<VmwareVmsDetailsFormProperties>({
		});

	}


	/** VmwareVmDetails describes a VM in vCenter. */
	export interface VmwareVmDetails {

		/** Output only. The VM Boot Option. */
		bootOption?: AwsVmDetailsBootOption | null;

		/** The total size of the storage allocated to the VM in MB. */
		committedStorageMb?: string | null;

		/** The number of cpus in the VM. */
		cpuCount?: number | null;

		/** The descriptive name of the vCenter's datacenter this VM is contained in. */
		datacenterDescription?: string | null;

		/** The id of the vCenter's datacenter this VM is contained in. */
		datacenterId?: string | null;

		/** The number of disks the VM has. */
		diskCount?: number | null;

		/** The display name of the VM. Note that this is not necessarily unique. */
		displayName?: string | null;

		/** The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold. */
		guestDescription?: string | null;

		/** The size of the memory of the VM in MB. */
		memoryMb?: number | null;

		/** The power state of the VM at the moment list was taken. */
		powerState?: VmwareVmDetailsPowerState | null;

		/** The unique identifier of the VM in vCenter. */
		uuid?: string | null;

		/** The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM. */
		vmId?: string | null;
	}

	/** VmwareVmDetails describes a VM in vCenter. */
	export interface VmwareVmDetailsFormProperties {

		/** Output only. The VM Boot Option. */
		bootOption: FormControl<AwsVmDetailsBootOption | null | undefined>,

		/** The total size of the storage allocated to the VM in MB. */
		committedStorageMb: FormControl<string | null | undefined>,

		/** The number of cpus in the VM. */
		cpuCount: FormControl<number | null | undefined>,

		/** The descriptive name of the vCenter's datacenter this VM is contained in. */
		datacenterDescription: FormControl<string | null | undefined>,

		/** The id of the vCenter's datacenter this VM is contained in. */
		datacenterId: FormControl<string | null | undefined>,

		/** The number of disks the VM has. */
		diskCount: FormControl<number | null | undefined>,

		/** The display name of the VM. Note that this is not necessarily unique. */
		displayName: FormControl<string | null | undefined>,

		/** The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold. */
		guestDescription: FormControl<string | null | undefined>,

		/** The size of the memory of the VM in MB. */
		memoryMb: FormControl<number | null | undefined>,

		/** The power state of the VM at the moment list was taken. */
		powerState: FormControl<VmwareVmDetailsPowerState | null | undefined>,

		/** The unique identifier of the VM in vCenter. */
		uuid: FormControl<string | null | undefined>,

		/** The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM. */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateVmwareVmDetailsFormGroup() {
		return new FormGroup<VmwareVmDetailsFormProperties>({
			bootOption: new FormControl<AwsVmDetailsBootOption | null | undefined>(undefined),
			committedStorageMb: new FormControl<string | null | undefined>(undefined),
			cpuCount: new FormControl<number | null | undefined>(undefined),
			datacenterDescription: new FormControl<string | null | undefined>(undefined),
			datacenterId: new FormControl<string | null | undefined>(undefined),
			diskCount: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			guestDescription: new FormControl<string | null | undefined>(undefined),
			memoryMb: new FormControl<number | null | undefined>(undefined),
			powerState: new FormControl<VmwareVmDetailsPowerState | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VmwareVmDetailsPowerState { POWER_STATE_UNSPECIFIED = 0, ON = 1, OFF = 2, SUSPENDED = 3 }


	/** Request message for 'FinalizeMigration' request. */
	export interface FinalizeMigrationRequest {
	}

	/** Request message for 'FinalizeMigration' request. */
	export interface FinalizeMigrationRequestFormProperties {
	}
	export function CreateFinalizeMigrationRequestFormGroup() {
		return new FormGroup<FinalizeMigrationRequestFormProperties>({
		});

	}


	/** Describes message for 'Group' resource. The Group is a collections of several MigratingVms. */
	export interface Group {

		/** Output only. The create time timestamp. */
		createTime?: string | null;

		/** User-provided description of the group. */
		description?: string | null;

		/** Display name is a user defined name for this group which can be updated. */
		displayName?: string | null;

		/** Immutable. The target type of this group. */
		migrationTargetType?: GroupMigrationTargetType | null;

		/** Output only. The Group name. */
		name?: string | null;

		/** Output only. The update time timestamp. */
		updateTime?: string | null;
	}

	/** Describes message for 'Group' resource. The Group is a collections of several MigratingVms. */
	export interface GroupFormProperties {

		/** Output only. The create time timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided description of the group. */
		description: FormControl<string | null | undefined>,

		/** Display name is a user defined name for this group which can be updated. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The target type of this group. */
		migrationTargetType: FormControl<GroupMigrationTargetType | null | undefined>,

		/** Output only. The Group name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The update time timestamp. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			migrationTargetType: new FormControl<GroupMigrationTargetType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GroupMigrationTargetType { MIGRATION_TARGET_TYPE_UNSPECIFIED = 0, MIGRATION_TARGET_TYPE_GCE = 1, MIGRATION_TARGET_TYPE_DISKS = 2 }


	/** Response message for 'ListCloneJobs' request. */
	export interface ListCloneJobsResponse {

		/** Output only. The list of clone jobs response. */
		cloneJobs?: Array<CloneJob>;

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListCloneJobs' request. */
	export interface ListCloneJobsResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCloneJobsResponseFormGroup() {
		return new FormGroup<ListCloneJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListCutoverJobs' request. */
	export interface ListCutoverJobsResponse {

		/** Output only. The list of cutover jobs response. */
		cutoverJobs?: Array<CutoverJob>;

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListCutoverJobs' request. */
	export interface ListCutoverJobsResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCutoverJobsResponseFormGroup() {
		return new FormGroup<ListCutoverJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListDatacenterConnectors' request. */
	export interface ListDatacenterConnectorsResponse {

		/** Output only. The list of sources response. */
		datacenterConnectors?: Array<DatacenterConnector>;

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListDatacenterConnectors' request. */
	export interface ListDatacenterConnectorsResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatacenterConnectorsResponseFormGroup() {
		return new FormGroup<ListDatacenterConnectorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListGroups' request. */
	export interface ListGroupsResponse {

		/** Output only. The list of groups response. */
		groups?: Array<Group>;

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListGroups' request. */
	export interface ListGroupsResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListMigratingVms' request. */
	export interface ListMigratingVmsResponse {

		/** Output only. The list of Migrating VMs response. */
		migratingVms?: Array<MigratingVm>;

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListMigratingVms' request. */
	export interface ListMigratingVmsResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMigratingVmsResponseFormGroup() {
		return new FormGroup<ListMigratingVmsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MigratingVm describes the VM that will be migrated from a Source environment and its replication state. */
	export interface MigratingVm {

		/** Represent the source AWS VM details. */
		awsSourceVmDetails?: AwsSourceVmDetails;

		/** Represent the source Azure VM details. */
		azureSourceVmDetails?: AzureSourceVmDetails;

		/** ComputeEngineDisksTargetDefaults is a collection of details for creating Persistent Disks in a target Compute Engine project. */
		computeEngineDisksTargetDefaults?: ComputeEngineDisksTargetDefaults;

		/** ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project. */
		computeEngineTargetDefaults?: ComputeEngineTargetDefaults;

		/** Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source). */
		createTime?: string | null;

		/** ReplicationCycle contains information about the current replication cycle status. */
		currentSyncInfo?: ReplicationCycle;

		/** CutoverForecast holds information about future CutoverJobs of a MigratingVm. */
		cutoverForecast?: CutoverForecast;

		/** The description attached to the migrating VM by the user. */
		description?: string | null;

		/** The display name attached to the MigratingVm by the user. */
		displayName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource. */
		group?: string | null;

		/** The labels of the migrating VM. */
		labels?: {[id: string]: string };

		/** ReplicationCycle contains information about the current replication cycle status. */
		lastReplicationCycle?: ReplicationCycle;

		/** ReplicationSync contain information about the last replica sync to the cloud. */
		lastSync?: ReplicationSync;

		/** Output only. The identifier of the MigratingVm. */
		name?: string | null;

		/** A policy for scheduling replications. */
		policy?: SchedulePolicy;

		/** Output only. The recent clone jobs performed on the migrating VM. This field holds the vm's last completed clone job and the vm's running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request. */
		recentCloneJobs?: Array<CloneJob>;

		/** Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm's last completed cutover job and the vm's running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request. */
		recentCutoverJobs?: Array<CutoverJob>;

		/** The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-. */
		sourceVmId?: string | null;

		/** Output only. State of the MigratingVm. */
		state?: MigratingVmState | null;

		/** Output only. The last time the migrating VM state was updated. */
		stateTime?: string | null;

		/** Output only. The last time the migrating VM resource was updated. */
		updateTime?: string | null;

		/** Represent the source Vmware VM details. */
		vmwareSourceVmDetails?: VmwareSourceVmDetails;
	}

	/** MigratingVm describes the VM that will be migrated from a Source environment and its replication state. */
	export interface MigratingVmFormProperties {

		/** Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source). */
		createTime: FormControl<string | null | undefined>,

		/** The description attached to the migrating VM by the user. */
		description: FormControl<string | null | undefined>,

		/** The display name attached to the MigratingVm by the user. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource. */
		group: FormControl<string | null | undefined>,

		/** The labels of the migrating VM. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The identifier of the MigratingVm. */
		name: FormControl<string | null | undefined>,

		/** The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-. */
		sourceVmId: FormControl<string | null | undefined>,

		/** Output only. State of the MigratingVm. */
		state: FormControl<MigratingVmState | null | undefined>,

		/** Output only. The last time the migrating VM state was updated. */
		stateTime: FormControl<string | null | undefined>,

		/** Output only. The last time the migrating VM resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMigratingVmFormGroup() {
		return new FormGroup<MigratingVmFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceVmId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MigratingVmState | null | undefined>(undefined),
			stateTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ReplicationSync contain information about the last replica sync to the cloud. */
	export interface ReplicationSync {

		/** The most updated snapshot created time in the source that finished replication. */
		lastSyncTime?: string | null;
	}

	/** ReplicationSync contain information about the last replica sync to the cloud. */
	export interface ReplicationSyncFormProperties {

		/** The most updated snapshot created time in the source that finished replication. */
		lastSyncTime: FormControl<string | null | undefined>,
	}
	export function CreateReplicationSyncFormGroup() {
		return new FormGroup<ReplicationSyncFormProperties>({
			lastSyncTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A policy for scheduling replications. */
	export interface SchedulePolicy {

		/** The idle duration between replication stages. */
		idleDuration?: string | null;

		/** A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM's operating system undergoes changes and adaptations to fully function on Compute Engine. */
		skipOsAdaptation?: boolean | null;
	}

	/** A policy for scheduling replications. */
	export interface SchedulePolicyFormProperties {

		/** The idle duration between replication stages. */
		idleDuration: FormControl<string | null | undefined>,

		/** A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM's operating system undergoes changes and adaptations to fully function on Compute Engine. */
		skipOsAdaptation: FormControl<boolean | null | undefined>,
	}
	export function CreateSchedulePolicyFormGroup() {
		return new FormGroup<SchedulePolicyFormProperties>({
			idleDuration: new FormControl<string | null | undefined>(undefined),
			skipOsAdaptation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MigratingVmState { STATE_UNSPECIFIED = 0, PENDING = 1, READY = 2, FIRST_SYNC = 3, ACTIVE = 4, CUTTING_OVER = 5, CUTOVER = 6, FINAL_SYNC = 7, PAUSED = 8, FINALIZING = 9, FINALIZED = 10, ERROR = 11 }


	/** Represent the source Vmware VM details. */
	export interface VmwareSourceVmDetails {

		/** The total size of the disks being migrated in bytes. */
		committedStorageBytes?: string | null;

		/** The disks attached to the source VM. */
		disks?: Array<VmwareDiskDetails>;

		/** The firmware type of the source VM. */
		firmware?: AwsSourceVmDetailsFirmware | null;

		/** Migrating VM source information about the VM capabilities needed for some Compute Engine features. */
		vmCapabilitiesInfo?: VmCapabilities;
	}

	/** Represent the source Vmware VM details. */
	export interface VmwareSourceVmDetailsFormProperties {

		/** The total size of the disks being migrated in bytes. */
		committedStorageBytes: FormControl<string | null | undefined>,

		/** The firmware type of the source VM. */
		firmware: FormControl<AwsSourceVmDetailsFirmware | null | undefined>,
	}
	export function CreateVmwareSourceVmDetailsFormGroup() {
		return new FormGroup<VmwareSourceVmDetailsFormProperties>({
			committedStorageBytes: new FormControl<string | null | undefined>(undefined),
			firmware: new FormControl<AwsSourceVmDetailsFirmware | null | undefined>(undefined),
		});

	}


	/** The details of a Vmware VM disk. */
	export interface VmwareDiskDetails {

		/** The ordinal number of the disk. */
		diskNumber?: number | null;

		/** The disk label. */
		label?: string | null;

		/** Size in GB. */
		sizeGb?: string | null;
	}

	/** The details of a Vmware VM disk. */
	export interface VmwareDiskDetailsFormProperties {

		/** The ordinal number of the disk. */
		diskNumber: FormControl<number | null | undefined>,

		/** The disk label. */
		label: FormControl<string | null | undefined>,

		/** Size in GB. */
		sizeGb: FormControl<string | null | undefined>,
	}
	export function CreateVmwareDiskDetailsFormGroup() {
		return new FormGroup<VmwareDiskDetailsFormProperties>({
			diskNumber: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			sizeGb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListReplicationCycles' request. */
	export interface ListReplicationCyclesResponse {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. The list of replication cycles response. */
		replicationCycles?: Array<ReplicationCycle>;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListReplicationCycles' request. */
	export interface ListReplicationCyclesResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReplicationCyclesResponseFormGroup() {
		return new FormGroup<ListReplicationCyclesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListSources' request. */
	export interface ListSourcesResponse {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. The list of sources response. */
		sources?: Array<Source>;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListSources' request. */
	export interface ListSourcesResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSourcesResponseFormGroup() {
		return new FormGroup<ListSourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source message describes a specific vm migration Source resource. It contains the source environment information. */
	export interface Source {

		/** AwsSourceDetails message describes a specific source details for the AWS source type. */
		aws?: AwsSourceDetails;

		/** AzureSourceDetails message describes a specific source details for the Azure source type. */
		azure?: AzureSourceDetails;

		/** Output only. The create time timestamp. */
		createTime?: string | null;

		/** User-provided description of the source. */
		description?: string | null;

		/** Encryption message describes the details of the applied encryption. */
		encryption?: Encryption;

		/** The labels of the source. */
		labels?: {[id: string]: string };

		/** Output only. The Source name. */
		name?: string | null;

		/** Output only. The update time timestamp. */
		updateTime?: string | null;

		/** VmwareSourceDetails message describes a specific source details for the vmware source type. */
		vmware?: VmwareSourceDetails;
	}

	/** Source message describes a specific vm migration Source resource. It contains the source environment information. */
	export interface SourceFormProperties {

		/** Output only. The create time timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided description of the source. */
		description: FormControl<string | null | undefined>,

		/** The labels of the source. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The Source name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The update time timestamp. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VmwareSourceDetails message describes a specific source details for the vmware source type. */
	export interface VmwareSourceDetails {

		/** Input only. The credentials password. This is write only and can not be read in a GET operation. */
		password?: string | null;

		/** The hostname of the vcenter. */
		resolvedVcenterHost?: string | null;

		/** The thumbprint representing the certificate for the vcenter. */
		thumbprint?: string | null;

		/** The credentials username. */
		username?: string | null;

		/** The ip address of the vcenter this Source represents. */
		vcenterIp?: string | null;
	}

	/** VmwareSourceDetails message describes a specific source details for the vmware source type. */
	export interface VmwareSourceDetailsFormProperties {

		/** Input only. The credentials password. This is write only and can not be read in a GET operation. */
		password: FormControl<string | null | undefined>,

		/** The hostname of the vcenter. */
		resolvedVcenterHost: FormControl<string | null | undefined>,

		/** The thumbprint representing the certificate for the vcenter. */
		thumbprint: FormControl<string | null | undefined>,

		/** The credentials username. */
		username: FormControl<string | null | undefined>,

		/** The ip address of the vcenter this Source represents. */
		vcenterIp: FormControl<string | null | undefined>,
	}
	export function CreateVmwareSourceDetailsFormGroup() {
		return new FormGroup<VmwareSourceDetailsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			resolvedVcenterHost: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			vcenterIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListTargetProjects' call. */
	export interface ListTargetProjectsResponse {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. The list of target response. */
		targetProjects?: Array<TargetProject>;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListTargetProjects' call. */
	export interface ListTargetProjectsResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetProjectsResponseFormGroup() {
		return new FormGroup<ListTargetProjectsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TargetProject message represents a target Compute Engine project for a migration or a clone. */
	export interface TargetProject {

		/** Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created). */
		createTime?: string | null;

		/** The target project's description. */
		description?: string | null;

		/** Output only. The name of the target project. */
		name?: string | null;

		/** Required. The target project ID (number) or project name. */
		project?: string | null;

		/** Output only. The last time the target project resource was updated. */
		updateTime?: string | null;
	}

	/** TargetProject message represents a target Compute Engine project for a migration or a clone. */
	export interface TargetProjectFormProperties {

		/** Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created). */
		createTime: FormControl<string | null | undefined>,

		/** The target project's description. */
		description: FormControl<string | null | undefined>,

		/** Output only. The name of the target project. */
		name: FormControl<string | null | undefined>,

		/** Required. The target project ID (number) or project name. */
		project: FormControl<string | null | undefined>,

		/** Output only. The last time the target project resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTargetProjectFormGroup() {
		return new FormGroup<TargetProjectFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListUtilizationReports' request. */
	export interface ListUtilizationReportsResponse {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Output only. Locations that could not be reached. */
		unreachable?: Array<string>;

		/** Output only. The list of reports. */
		utilizationReports?: Array<UtilizationReport>;
	}

	/** Response message for 'ListUtilizationReports' request. */
	export interface ListUtilizationReportsResponseFormProperties {

		/** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUtilizationReportsResponseFormGroup() {
		return new FormGroup<ListUtilizationReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Utilization report details the utilization (CPU, memory, etc.) of selected source VMs. */
	export interface UtilizationReport {

		/** Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed). */
		createTime?: string | null;

		/** The report display name, as assigned by the user. */
		displayName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14. */
		frameEndTime?: string | null;

		/** Output only. The report unique name. */
		name?: string | null;

		/** Output only. Current state of the report. */
		state?: UtilizationReportState | null;

		/** Output only. The time the state was last set. */
		stateTime?: string | null;

		/** Time frame of the report. */
		timeFrame?: UtilizationReportTimeFrame | null;

		/** Output only. Total number of VMs included in the report. */
		vmCount?: number | null;

		/** List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored. */
		vms?: Array<VmUtilizationInfo>;
	}

	/** Utilization report details the utilization (CPU, memory, etc.) of selected source VMs. */
	export interface UtilizationReportFormProperties {

		/** Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed). */
		createTime: FormControl<string | null | undefined>,

		/** The report display name, as assigned by the user. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14. */
		frameEndTime: FormControl<string | null | undefined>,

		/** Output only. The report unique name. */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the report. */
		state: FormControl<UtilizationReportState | null | undefined>,

		/** Output only. The time the state was last set. */
		stateTime: FormControl<string | null | undefined>,

		/** Time frame of the report. */
		timeFrame: FormControl<UtilizationReportTimeFrame | null | undefined>,

		/** Output only. Total number of VMs included in the report. */
		vmCount: FormControl<number | null | undefined>,
	}
	export function CreateUtilizationReportFormGroup() {
		return new FormGroup<UtilizationReportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			frameEndTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<UtilizationReportState | null | undefined>(undefined),
			stateTime: new FormControl<string | null | undefined>(undefined),
			timeFrame: new FormControl<UtilizationReportTimeFrame | null | undefined>(undefined),
			vmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UtilizationReportState { STATE_UNSPECIFIED = 0, CREATING = 1, SUCCEEDED = 2, FAILED = 3 }

	export enum UtilizationReportTimeFrame { TIME_FRAME_UNSPECIFIED = 0, WEEK = 1, MONTH = 2, YEAR = 3 }


	/** Utilization information of a single VM. */
	export interface VmUtilizationInfo {

		/** Utilization metrics values for a single VM. */
		utilization?: VmUtilizationMetrics;

		/** The VM's ID in the source. */
		vmId?: string | null;

		/** VmwareVmDetails describes a VM in vCenter. */
		vmwareVmDetails?: VmwareVmDetails;
	}

	/** Utilization information of a single VM. */
	export interface VmUtilizationInfoFormProperties {

		/** The VM's ID in the source. */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateVmUtilizationInfoFormGroup() {
		return new FormGroup<VmUtilizationInfoFormProperties>({
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Utilization metrics values for a single VM. */
	export interface VmUtilizationMetrics {

		/** Average CPU usage, percent. */
		cpuAveragePercent?: number | null;

		/** Max CPU usage, percent. */
		cpuMaxPercent?: number | null;

		/** Average disk IO rate, in kilobytes per second. */
		diskIoRateAverageKbps?: string | null;

		/** Max disk IO rate, in kilobytes per second. */
		diskIoRateMaxKbps?: string | null;

		/** Average memory usage, percent. */
		memoryAveragePercent?: number | null;

		/** Max memory usage, percent. */
		memoryMaxPercent?: number | null;

		/** Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
		networkThroughputAverageKbps?: string | null;

		/** Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
		networkThroughputMaxKbps?: string | null;
	}

	/** Utilization metrics values for a single VM. */
	export interface VmUtilizationMetricsFormProperties {

		/** Average CPU usage, percent. */
		cpuAveragePercent: FormControl<number | null | undefined>,

		/** Max CPU usage, percent. */
		cpuMaxPercent: FormControl<number | null | undefined>,

		/** Average disk IO rate, in kilobytes per second. */
		diskIoRateAverageKbps: FormControl<string | null | undefined>,

		/** Max disk IO rate, in kilobytes per second. */
		diskIoRateMaxKbps: FormControl<string | null | undefined>,

		/** Average memory usage, percent. */
		memoryAveragePercent: FormControl<number | null | undefined>,

		/** Max memory usage, percent. */
		memoryMaxPercent: FormControl<number | null | undefined>,

		/** Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
		networkThroughputAverageKbps: FormControl<string | null | undefined>,

		/** Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
		networkThroughputMaxKbps: FormControl<string | null | undefined>,
	}
	export function CreateVmUtilizationMetricsFormGroup() {
		return new FormGroup<VmUtilizationMetricsFormProperties>({
			cpuAveragePercent: new FormControl<number | null | undefined>(undefined),
			cpuMaxPercent: new FormControl<number | null | undefined>(undefined),
			diskIoRateAverageKbps: new FormControl<string | null | undefined>(undefined),
			diskIoRateMaxKbps: new FormControl<string | null | undefined>(undefined),
			memoryAveragePercent: new FormControl<number | null | undefined>(undefined),
			memoryMaxPercent: new FormControl<number | null | undefined>(undefined),
			networkThroughputAverageKbps: new FormControl<string | null | undefined>(undefined),
			networkThroughputMaxKbps: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents migration resource error information that can be used with google.rpc.Status message. MigrationError is used to present the user with error information in migration operations. */
	export interface MigrationError {

		/** Provides a localized error message that is safe to return to the user which can be attached to an RPC error. */
		actionItem?: LocalizedMessage;

		/** Output only. The error code. */
		code?: MigrationErrorCode | null;

		/** Provides a localized error message that is safe to return to the user which can be attached to an RPC error. */
		errorMessage?: LocalizedMessage;

		/** Output only. The time the error occurred. */
		errorTime?: string | null;

		/** Output only. URL(s) pointing to additional information on handling the current error. */
		helpLinks?: Array<Link>;
	}

	/** Represents migration resource error information that can be used with google.rpc.Status message. MigrationError is used to present the user with error information in migration operations. */
	export interface MigrationErrorFormProperties {

		/** Output only. The error code. */
		code: FormControl<MigrationErrorCode | null | undefined>,

		/** Output only. The time the error occurred. */
		errorTime: FormControl<string | null | undefined>,
	}
	export function CreateMigrationErrorFormGroup() {
		return new FormGroup<MigrationErrorFormProperties>({
			code: new FormControl<MigrationErrorCode | null | undefined>(undefined),
			errorTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MigrationErrorCode { ERROR_CODE_UNSPECIFIED = 0, UNKNOWN_ERROR = 1, SOURCE_VALIDATION_ERROR = 2, SOURCE_REPLICATION_ERROR = 3, TARGET_REPLICATION_ERROR = 4, OS_ADAPTATION_ERROR = 5, CLONE_ERROR = 6, CUTOVER_ERROR = 7, UTILIZATION_REPORT_ERROR = 8, APPLIANCE_UPGRADE_ERROR = 9 }


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for 'PauseMigration' request. */
	export interface PauseMigrationRequest {
	}

	/** Request message for 'PauseMigration' request. */
	export interface PauseMigrationRequestFormProperties {
	}
	export function CreatePauseMigrationRequestFormGroup() {
		return new FormGroup<PauseMigrationRequestFormProperties>({
		});

	}


	/** Request message for 'RemoveMigration' request. */
	export interface RemoveGroupMigrationRequest {

		/** The MigratingVm to remove. */
		migratingVm?: string | null;
	}

	/** Request message for 'RemoveMigration' request. */
	export interface RemoveGroupMigrationRequestFormProperties {

		/** The MigratingVm to remove. */
		migratingVm: FormControl<string | null | undefined>,
	}
	export function CreateRemoveGroupMigrationRequestFormGroup() {
		return new FormGroup<RemoveGroupMigrationRequestFormProperties>({
			migratingVm: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for 'ResumeMigration' request. */
	export interface ResumeMigrationRequest {
	}

	/** Request message for 'ResumeMigration' request. */
	export interface ResumeMigrationRequestFormProperties {
	}
	export function CreateResumeMigrationRequestFormGroup() {
		return new FormGroup<ResumeMigrationRequestFormProperties>({
		});

	}


	/** Request message for 'StartMigrationRequest' request. */
	export interface StartMigrationRequest {
	}

	/** Request message for 'StartMigrationRequest' request. */
	export interface StartMigrationRequestFormProperties {
	}
	export function CreateStartMigrationRequestFormGroup() {
		return new FormGroup<StartMigrationRequestFormProperties>({
		});

	}


	/** Request message for 'UpgradeAppliance' request. */
	export interface UpgradeApplianceRequest {

		/** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for 'UpgradeAppliance' request. */
	export interface UpgradeApplianceRequestFormProperties {

		/** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeApplianceRequestFormGroup() {
		return new FormGroup<UpgradeApplianceRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
		 * Post v1/{datacenterConnector}:upgradeAppliance
		 * @param {string} datacenterConnector Required. The DatacenterConnector name.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_datacenterConnectors_upgradeAppliance(datacenterConnector: string, requestBody: UpgradeApplianceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (datacenterConnector == null ? '' : encodeURIComponent(datacenterConnector)) + ':upgradeAppliance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a MigratingVm to a Group.
		 * Post v1/{group}:addGroupMigration
		 * @param {string} group Required. The full path name of the Group to add to.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_groups_addGroupMigration(group: string, requestBody: AddGroupMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (group == null ? '' : encodeURIComponent(group)) + ':addGroupMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a MigratingVm from a Group.
		 * Post v1/{group}:removeGroupMigration
		 * @param {string} group Required. The name of the Group.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_groups_removeGroupMigration(group: string, requestBody: RemoveGroupMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (group == null ? '' : encodeURIComponent(group)) + ':removeGroupMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
		 * Post v1/{migratingVm}:finalizeMigration
		 * @param {string} migratingVm Required. The name of the MigratingVm.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_finalizeMigration(migratingVm: string, requestBody: FinalizeMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (migratingVm == null ? '' : encodeURIComponent(migratingVm)) + ':finalizeMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
		 * Post v1/{migratingVm}:pauseMigration
		 * @param {string} migratingVm Required. The name of the MigratingVm.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_pauseMigration(migratingVm: string, requestBody: PauseMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (migratingVm == null ? '' : encodeURIComponent(migratingVm)) + ':pauseMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
		 * Post v1/{migratingVm}:resumeMigration
		 * @param {string} migratingVm Required. The name of the MigratingVm.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_resumeMigration(migratingVm: string, requestBody: ResumeMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (migratingVm == null ? '' : encodeURIComponent(migratingVm)) + ':resumeMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
		 * Post v1/{migratingVm}:startMigration
		 * @param {string} migratingVm Required. The name of the MigratingVm.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_startMigration(migratingVm: string, requestBody: StartMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (migratingVm == null ? '' : encodeURIComponent(migratingVm)) + ':startMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
		 * Delete v1/{name}
		 * @param {string} name Required. The TargetProject name.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_targetProjects_delete(name: string, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
		 * Get v1/{name}
		 * @param {string} name Required. The TargetProject name.
		 * @param {Vmmigration_projects_locations_targetProjects_getView} view Optional. The level of details of the report. Defaults to FULL
		 * @return {TargetProject} Successful response
		 */
		Vmmigration_projects_locations_targetProjects_get(name: string, view: Vmmigration_projects_locations_targetProjects_getView | null | undefined): Observable<TargetProject> {
			return this.http.get<TargetProject>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
		 * Patch v1/{name}
		 * @param {string} name Output only. The name of the target project.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_targetProjects_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: TargetProject): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Vmmigration_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Vmmigration_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Initiates the cancellation of a running cutover job.
		 * Post v1/{name}:cancel
		 * @param {string} name Required. The cutover job id
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_cutoverJobs_cancel(name: string, requestBody: CancelCutoverJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the CloneJobs of a migrating VM. Only 25 most recent CloneJobs are listed.
		 * Get v1/{parent}/cloneJobs
		 * @param {string} parent Required. The parent, which owns this collection of source VMs.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token.
		 * @return {ListCloneJobsResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_cloneJobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCloneJobsResponse> {
			return this.http.get<ListCloneJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cloneJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Initiates a Clone of a specific migrating VM.
		 * Post v1/{parent}/cloneJobs
		 * @param {string} parent Required. The Clone's parent.
		 * @param {string} cloneJobId Required. The clone job identifier.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_cloneJobs_create(parent: string, cloneJobId: string | null | undefined, requestId: string | null | undefined, requestBody: CloneJob): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cloneJobs&cloneJobId=' + (cloneJobId == null ? '' : encodeURIComponent(cloneJobId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the CutoverJobs of a migrating VM. Only 25 most recent CutoverJobs are listed.
		 * Get v1/{parent}/cutoverJobs
		 * @param {string} parent Required. The parent, which owns this collection of migrating VMs.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token.
		 * @return {ListCutoverJobsResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_cutoverJobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCutoverJobsResponse> {
			return this.http.get<ListCutoverJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cutoverJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
		 * Post v1/{parent}/cutoverJobs
		 * @param {string} parent Required. The Cutover's parent.
		 * @param {string} cutoverJobId Required. The cutover job identifier.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_cutoverJobs_create(parent: string, cutoverJobId: string | null | undefined, requestId: string | null | undefined, requestBody: CutoverJob): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cutoverJobs&cutoverJobId=' + (cutoverJobId == null ? '' : encodeURIComponent(cutoverJobId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DatacenterConnectors in a given Source.
		 * Get v1/{parent}/datacenterConnectors
		 * @param {string} parent Required. The parent, which owns this collection of connectors.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token.
		 * @return {ListDatacenterConnectorsResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_datacenterConnectors_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatacenterConnectorsResponse> {
			return this.http.get<ListDatacenterConnectorsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datacenterConnectors&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new DatacenterConnector in a given Source.
		 * Post v1/{parent}/datacenterConnectors
		 * @param {string} parent Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source`
		 * @param {string} datacenterConnectorId Required. The datacenterConnector identifier.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_datacenterConnectors_create(parent: string, datacenterConnectorId: string | null | undefined, requestId: string | null | undefined, requestBody: DatacenterConnector): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datacenterConnectors&datacenterConnectorId=' + (datacenterConnectorId == null ? '' : encodeURIComponent(datacenterConnectorId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Groups in a given project and location.
		 * Get v1/{parent}/groups
		 * @param {string} parent Required. The parent, which owns this collection of groups.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.
		 * @return {ListGroupsResponse} Successful response
		 */
		Vmmigration_projects_locations_groups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/groups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Group in a given project and location.
		 * Post v1/{parent}/groups
		 * @param {string} parent Required. The Group's parent.
		 * @param {string} groupId Required. The group identifier.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_groups_create(parent: string, groupId: string | null | undefined, requestId: string | null | undefined, requestBody: Group): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/groups&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists MigratingVms in a given Source.
		 * Get v1/{parent}/migratingVms
		 * @param {string} parent Required. The parent, which owns this collection of MigratingVms.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token.
		 * @param {Vmmigration_projects_locations_sources_migratingVms_listView} view Optional. The level of details of each migrating VM.
		 * @return {ListMigratingVmsResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Vmmigration_projects_locations_sources_migratingVms_listView | null | undefined): Observable<ListMigratingVmsResponse> {
			return this.http.get<ListMigratingVmsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/migratingVms&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new MigratingVm in a given Source.
		 * Post v1/{parent}/migratingVms
		 * @param {string} parent Required. The MigratingVm's parent.
		 * @param {string} migratingVmId Required. The migratingVm identifier.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_create(parent: string, migratingVmId: string | null | undefined, requestId: string | null | undefined, requestBody: MigratingVm): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/migratingVms&migratingVmId=' + (migratingVmId == null ? '' : encodeURIComponent(migratingVmId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ReplicationCycles in a given MigratingVM.
		 * Get v1/{parent}/replicationCycles
		 * @param {string} parent Required. The parent, which owns this collection of ReplicationCycles.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token.
		 * @return {ListReplicationCyclesResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_migratingVms_replicationCycles_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReplicationCyclesResponse> {
			return this.http.get<ListReplicationCyclesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/replicationCycles&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Sources in a given project and location.
		 * Get v1/{parent}/sources
		 * @param {string} parent Required. The parent, which owns this collection of sources.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token.
		 * @return {ListSourcesResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSourcesResponse> {
			return this.http.get<ListSourcesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sources&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Source in a given project and location.
		 * Post v1/{parent}/sources
		 * @param {string} parent Required. The Source's parent.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} sourceId Required. The source identifier.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_create(parent: string, requestId: string | null | undefined, sourceId: string | null | undefined, requestBody: Source): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sources&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&sourceId=' + (sourceId == null ? '' : encodeURIComponent(sourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
		 * Get v1/{parent}/targetProjects
		 * @param {string} parent Required. The parent, which owns this collection of targets.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token.
		 * @return {ListTargetProjectsResponse} Successful response
		 */
		Vmmigration_projects_locations_targetProjects_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTargetProjectsResponse> {
			return this.http.get<ListTargetProjectsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/targetProjects&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
		 * Post v1/{parent}/targetProjects
		 * @param {string} parent Required. The TargetProject's parent.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} targetProjectId Required. The target_project identifier.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_targetProjects_create(parent: string, requestId: string | null | undefined, targetProjectId: string | null | undefined, requestBody: TargetProject): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/targetProjects&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&targetProjectId=' + (targetProjectId == null ? '' : encodeURIComponent(targetProjectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Utilization Reports of the given Source.
		 * Get v1/{parent}/utilizationReports
		 * @param {string} parent Required. The Utilization Reports parent.
		 * @param {string} filter Optional. The filter request.
		 * @param {string} orderBy Optional. the order by fields for the result.
		 * @param {number} pageSize Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token.
		 * @param {Vmmigration_projects_locations_targetProjects_getView} view Optional. The level of details of each report. Defaults to BASIC.
		 * @return {ListUtilizationReportsResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_utilizationReports_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Vmmigration_projects_locations_targetProjects_getView | null | undefined): Observable<ListUtilizationReportsResponse> {
			return this.http.get<ListUtilizationReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/utilizationReports&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new UtilizationReport.
		 * Post v1/{parent}/utilizationReports
		 * @param {string} parent Required. The Utilization Report's parent.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} utilizationReportId Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen.
		 * @return {Operation} Successful response
		 */
		Vmmigration_projects_locations_sources_utilizationReports_create(parent: string, requestId: string | null | undefined, utilizationReportId: string | null | undefined, requestBody: UtilizationReport): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/utilizationReports&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&utilizationReportId=' + (utilizationReportId == null ? '' : encodeURIComponent(utilizationReportId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
		 * Get v1/{source}:fetchInventory
		 * @param {string} source Required. The name of the Source.
		 * @param {boolean} forceRefresh If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower.
		 * @param {number} pageSize The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value.
		 * @param {string} pageToken A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token.
		 * @return {FetchInventoryResponse} Successful response
		 */
		Vmmigration_projects_locations_sources_fetchInventory(source: string, forceRefresh: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FetchInventoryResponse> {
			return this.http.get<FetchInventoryResponse>(this.baseUri + 'v1/' + (source == null ? '' : encodeURIComponent(source)) + ':fetchInventory&forceRefresh=' + forceRefresh + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

	export enum Vmmigration_projects_locations_targetProjects_getView { UTILIZATION_REPORT_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

	export enum Vmmigration_projects_locations_sources_migratingVms_listView { MIGRATING_VM_VIEW_UNSPECIFIED = 0, MIGRATING_VM_VIEW_BASIC = 1, MIGRATING_VM_VIEW_FULL = 2 }

}

