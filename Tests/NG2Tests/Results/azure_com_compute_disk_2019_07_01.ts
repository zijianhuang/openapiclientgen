import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A disk access SAS uri. */
	export interface AccessUri {

		/** A SAS uri for accessing a disk. */
		accessSAS?: string | null;
	}

	/** A disk access SAS uri. */
	export interface AccessUriFormProperties {

		/** A SAS uri for accessing a disk. */
		accessSAS: FormControl<string | null | undefined>,
	}
	export function CreateAccessUriFormGroup() {
		return new FormGroup<AccessUriFormProperties>({
			accessSAS: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Api error. */
	export interface ApiError {

		/** The error code. */
		code?: string | null;

		/** The Api error details */
		details?: Array<ApiErrorBase>;

		/** Inner error details. */
		innererror?: InnerError;

		/** The error message. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** Api error. */
	export interface ApiErrorFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorFormGroup() {
		return new FormGroup<ApiErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Api error base. */
	export interface ApiErrorBase {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** Api error base. */
	export interface ApiErrorBaseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorBaseFormGroup() {
		return new FormGroup<ApiErrorBaseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the Compute service. */
	export interface CloudError {

		/** Api error. */
		error?: ApiError;
	}

	/** An error response from the Compute service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Data used when creating a disk. */
	export interface CreationData {

		/**
		 * This enumerates the possible sources of a disk's creation.
		 * Required
		 */
		createOption: CreationDataCreateOption;

		/** The source image used for creating the disk. */
		imageReference?: ImageDiskReference;

		/** If createOption is Copy, this is the ARM id of the source snapshot or disk. */
		sourceResourceId?: string | null;

		/** If this field is set, this is the unique id identifying the source of this resource. */
		sourceUniqueId?: string | null;

		/** If createOption is Import, this is the URI of a blob to be imported into a managed disk. */
		sourceUri?: string | null;

		/** Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk. */
		storageAccountId?: string | null;

		/** If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). */
		uploadSizeBytes?: number | null;
	}

	/** Data used when creating a disk. */
	export interface CreationDataFormProperties {

		/**
		 * This enumerates the possible sources of a disk's creation.
		 * Required
		 */
		createOption: FormControl<CreationDataCreateOption | null | undefined>,

		/** If createOption is Copy, this is the ARM id of the source snapshot or disk. */
		sourceResourceId: FormControl<string | null | undefined>,

		/** If this field is set, this is the unique id identifying the source of this resource. */
		sourceUniqueId: FormControl<string | null | undefined>,

		/** If createOption is Import, this is the URI of a blob to be imported into a managed disk. */
		sourceUri: FormControl<string | null | undefined>,

		/** Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk. */
		storageAccountId: FormControl<string | null | undefined>,

		/** If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). */
		uploadSizeBytes: FormControl<number | null | undefined>,
	}
	export function CreateCreationDataFormGroup() {
		return new FormGroup<CreationDataFormProperties>({
			createOption: new FormControl<CreationDataCreateOption | null | undefined>(undefined, [Validators.required]),
			sourceResourceId: new FormControl<string | null | undefined>(undefined),
			sourceUniqueId: new FormControl<string | null | undefined>(undefined),
			sourceUri: new FormControl<string | null | undefined>(undefined),
			storageAccountId: new FormControl<string | null | undefined>(undefined),
			uploadSizeBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreationDataCreateOption { Empty = 'Empty', Attach = 'Attach', FromImage = 'FromImage', Import = 'Import', Copy = 'Copy', Restore = 'Restore', Upload = 'Upload' }


	/** Disk resource. */
	export interface Disk extends Resource {

		/** A relative URI containing the ID of the VM that has the disk attached. */
		managedBy?: string | null;

		/** Disk resource properties. */
		properties?: DiskProperties;

		/** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS. */
		sku?: DiskSku;

		/** The Logical zone list for Disk. */
		zones?: Array<string>;
	}

	/** Disk resource. */
	export interface DiskFormProperties extends ResourceFormProperties {

		/** A relative URI containing the ID of the VM that has the disk attached. */
		managedBy: FormControl<string | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** disk encryption set resource. */
	export interface DiskEncryptionSet extends Resource {

		/** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
		identity?: EncryptionSetIdentity;
		properties?: EncryptionSetProperties;
	}

	/** disk encryption set resource. */
	export interface DiskEncryptionSetFormProperties extends ResourceFormProperties {
	}
	export function CreateDiskEncryptionSetFormGroup() {
		return new FormGroup<DiskEncryptionSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List disk encryption set operation response. */
	export interface DiskEncryptionSetList {

		/** The uri to fetch the next page of disk encryption sets. Call ListNext() with this to fetch the next page of disk encryption sets. */
		nextLink?: string | null;

		/**
		 * A list of disk encryption sets.
		 * Required
		 */
		value: Array<DiskEncryptionSet>;
	}

	/** The List disk encryption set operation response. */
	export interface DiskEncryptionSetListFormProperties {

		/** The uri to fetch the next page of disk encryption sets. Call ListNext() with this to fetch the next page of disk encryption sets. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiskEncryptionSetListFormGroup() {
		return new FormGroup<DiskEncryptionSetListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** disk encryption set update resource. */
	export interface DiskEncryptionSetUpdate {

		/** disk encryption set resource update properties. */
		properties?: DiskEncryptionSetUpdateProperties;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** disk encryption set update resource. */
	export interface DiskEncryptionSetUpdateFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDiskEncryptionSetUpdateFormGroup() {
		return new FormGroup<DiskEncryptionSetUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** disk encryption set resource update properties. */
	export interface DiskEncryptionSetUpdateProperties {

		/** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
		activeKey?: KeyVaultAndKeyReference;
	}

	/** disk encryption set resource update properties. */
	export interface DiskEncryptionSetUpdatePropertiesFormProperties {
	}
	export function CreateDiskEncryptionSetUpdatePropertiesFormGroup() {
		return new FormGroup<DiskEncryptionSetUpdatePropertiesFormProperties>({
		});

	}


	/** The List Disks operation response. */
	export interface DiskList {

		/** The uri to fetch the next page of disks. Call ListNext() with this to fetch the next page of disks. */
		nextLink?: string | null;

		/**
		 * A list of disks.
		 * Required
		 */
		value: Array<Disk>;
	}

	/** The List Disks operation response. */
	export interface DiskListFormProperties {

		/** The uri to fetch the next page of disks. Call ListNext() with this to fetch the next page of disks. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiskListFormGroup() {
		return new FormGroup<DiskListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disk resource properties. */
	export interface DiskProperties {

		/**
		 * Data used when creating a disk.
		 * Required
		 */
		creationData: CreationData;

		/** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
		diskIOPSReadWrite?: number | null;

		/** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
		diskMBpsReadWrite?: number | null;

		/** The size of the disk in bytes. This field is read only. */
		diskSizeBytes?: number | null;

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB?: number | null;

		/** The state of the disk. */
		diskState?: DiskPropertiesDiskState | null;

		/** Encryption at rest settings for disk or snapshot */
		encryption?: Encryption;

		/** Encryption settings for disk or snapshot */
		encryptionSettingsCollection?: EncryptionSettingsCollection;

		/** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
		hyperVGeneration?: DiskPropertiesHyperVGeneration | null;

		/** The Operating System type. */
		osType?: DiskPropertiesOsType | null;

		/** The disk provisioning state. */
		provisioningState?: string | null;

		/** The time when the disk was created. */
		timeCreated?: Date | null;

		/** Unique Guid identifying the resource. */
		uniqueId?: string | null;
	}

	/** Disk resource properties. */
	export interface DiskPropertiesFormProperties {

		/** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
		diskIOPSReadWrite: FormControl<number | null | undefined>,

		/** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
		diskMBpsReadWrite: FormControl<number | null | undefined>,

		/** The size of the disk in bytes. This field is read only. */
		diskSizeBytes: FormControl<number | null | undefined>,

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB: FormControl<number | null | undefined>,

		/** The state of the disk. */
		diskState: FormControl<DiskPropertiesDiskState | null | undefined>,

		/** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
		hyperVGeneration: FormControl<DiskPropertiesHyperVGeneration | null | undefined>,

		/** The Operating System type. */
		osType: FormControl<DiskPropertiesOsType | null | undefined>,

		/** The disk provisioning state. */
		provisioningState: FormControl<string | null | undefined>,

		/** The time when the disk was created. */
		timeCreated: FormControl<Date | null | undefined>,

		/** Unique Guid identifying the resource. */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateDiskPropertiesFormGroup() {
		return new FormGroup<DiskPropertiesFormProperties>({
			diskIOPSReadWrite: new FormControl<number | null | undefined>(undefined),
			diskMBpsReadWrite: new FormControl<number | null | undefined>(undefined),
			diskSizeBytes: new FormControl<number | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			diskState: new FormControl<DiskPropertiesDiskState | null | undefined>(undefined),
			hyperVGeneration: new FormControl<DiskPropertiesHyperVGeneration | null | undefined>(undefined),
			osType: new FormControl<DiskPropertiesOsType | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			timeCreated: new FormControl<Date | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskPropertiesDiskState { Unattached = 'Unattached', Attached = 'Attached', Reserved = 'Reserved', ActiveSAS = 'ActiveSAS', ReadyToUpload = 'ReadyToUpload', ActiveUpload = 'ActiveUpload' }

	export enum DiskPropertiesHyperVGeneration { V1 = 'V1', V2 = 'V2' }

	export enum DiskPropertiesOsType { Windows = 'Windows', Linux = 'Linux' }


	/** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS. */
	export interface DiskSku {

		/** The sku name. */
		name?: DiskSkuName | null;

		/** The sku tier. */
		tier?: string | null;
	}

	/** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS. */
	export interface DiskSkuFormProperties {

		/** The sku name. */
		name: FormControl<DiskSkuName | null | undefined>,

		/** The sku tier. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateDiskSkuFormGroup() {
		return new FormGroup<DiskSkuFormProperties>({
			name: new FormControl<DiskSkuName | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskSkuName { Standard_LRS = 'Standard_LRS', Premium_LRS = 'Premium_LRS', StandardSSD_LRS = 'StandardSSD_LRS', UltraSSD_LRS = 'UltraSSD_LRS' }


	/** Disk update resource. */
	export interface DiskUpdate {

		/** Disk resource update properties. */
		properties?: DiskUpdateProperties;

		/** The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS. */
		sku?: DiskSku;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** Disk update resource. */
	export interface DiskUpdateFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDiskUpdateFormGroup() {
		return new FormGroup<DiskUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Disk resource update properties. */
	export interface DiskUpdateProperties {

		/** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
		diskIOPSReadWrite?: number | null;

		/** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
		diskMBpsReadWrite?: number | null;

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB?: number | null;

		/** Encryption at rest settings for disk or snapshot */
		encryption?: Encryption;

		/** Encryption settings for disk or snapshot */
		encryptionSettingsCollection?: EncryptionSettingsCollection;

		/** the Operating System type. */
		osType?: DiskPropertiesOsType | null;
	}

	/** Disk resource update properties. */
	export interface DiskUpdatePropertiesFormProperties {

		/** The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
		diskIOPSReadWrite: FormControl<number | null | undefined>,

		/** The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
		diskMBpsReadWrite: FormControl<number | null | undefined>,

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB: FormControl<number | null | undefined>,

		/** the Operating System type. */
		osType: FormControl<DiskPropertiesOsType | null | undefined>,
	}
	export function CreateDiskUpdatePropertiesFormGroup() {
		return new FormGroup<DiskUpdatePropertiesFormProperties>({
			diskIOPSReadWrite: new FormControl<number | null | undefined>(undefined),
			diskMBpsReadWrite: new FormControl<number | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			osType: new FormControl<DiskPropertiesOsType | null | undefined>(undefined),
		});

	}


	/** Encryption at rest settings for disk or snapshot */
	export interface Encryption {

		/** ResourceId of the disk encryption set to use for enabling encryption at rest. */
		diskEncryptionSetId?: string | null;

		/**
		 * The type of key used to encrypt the data of the disk.
		 * Required
		 */
		type: EncryptionType;
	}

	/** Encryption at rest settings for disk or snapshot */
	export interface EncryptionFormProperties {

		/** ResourceId of the disk encryption set to use for enabling encryption at rest. */
		diskEncryptionSetId: FormControl<string | null | undefined>,

		/**
		 * The type of key used to encrypt the data of the disk.
		 * Required
		 */
		type: FormControl<EncryptionType | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			diskEncryptionSetId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionType { EncryptionAtRestWithPlatformKey = 'EncryptionAtRestWithPlatformKey', EncryptionAtRestWithCustomerKey = 'EncryptionAtRestWithCustomerKey' }


	/** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
	export interface EncryptionSetIdentity {

		/** The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity */
		principalId?: string | null;

		/** The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity */
		tenantId?: string | null;

		/** The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported. */
		type?: EncryptionSetIdentityType | null;
	}

	/** The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. */
	export interface EncryptionSetIdentityFormProperties {

		/** The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity */
		principalId: FormControl<string | null | undefined>,

		/** The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity */
		tenantId: FormControl<string | null | undefined>,

		/** The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported. */
		type: FormControl<EncryptionSetIdentityType | null | undefined>,
	}
	export function CreateEncryptionSetIdentityFormGroup() {
		return new FormGroup<EncryptionSetIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EncryptionSetIdentityType | null | undefined>(undefined),
		});

	}

	export enum EncryptionSetIdentityType { SystemAssigned = 'SystemAssigned' }

	export interface EncryptionSetProperties {

		/** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
		activeKey?: KeyVaultAndKeyReference;

		/** A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation. */
		previousKeys?: Array<KeyVaultAndKeyReference>;

		/** The disk encryption set provisioning state. */
		provisioningState?: string | null;
	}
	export interface EncryptionSetPropertiesFormProperties {

		/** The disk encryption set provisioning state. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionSetPropertiesFormGroup() {
		return new FormGroup<EncryptionSetPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
	export interface KeyVaultAndKeyReference {

		/**
		 * Url pointing to a key or secret in KeyVault
		 * Required
		 */
		keyUrl: string;

		/**
		 * The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
		 * Required
		 */
		sourceVault: SourceVault;
	}

	/** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
	export interface KeyVaultAndKeyReferenceFormProperties {

		/**
		 * Url pointing to a key or secret in KeyVault
		 * Required
		 */
		keyUrl: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultAndKeyReferenceFormGroup() {
		return new FormGroup<KeyVaultAndKeyReferenceFormProperties>({
			keyUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Encryption settings for disk or snapshot */
	export interface EncryptionSettingsCollection {

		/**
		 * Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
		 * Required
		 */
		enabled: boolean;

		/** A collection of encryption settings, one for each disk volume. */
		encryptionSettings?: Array<EncryptionSettingsElement>;

		/** Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption. */
		encryptionSettingsVersion?: string | null;
	}

	/** Encryption settings for disk or snapshot */
	export interface EncryptionSettingsCollectionFormProperties {

		/**
		 * Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption. */
		encryptionSettingsVersion: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionSettingsCollectionFormGroup() {
		return new FormGroup<EncryptionSettingsCollectionFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			encryptionSettingsVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encryption settings for one disk volume. */
	export interface EncryptionSettingsElement {

		/** Key Vault Secret Url and vault id of the encryption key */
		diskEncryptionKey?: KeyVaultAndSecretReference;

		/** Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey */
		keyEncryptionKey?: KeyVaultAndKeyReference;
	}

	/** Encryption settings for one disk volume. */
	export interface EncryptionSettingsElementFormProperties {
	}
	export function CreateEncryptionSettingsElementFormGroup() {
		return new FormGroup<EncryptionSettingsElementFormProperties>({
		});

	}


	/** Data used for requesting a SAS. */
	export interface GrantAccessData {

		/** Required */
		access: GrantAccessDataAccess;

		/**
		 * Time duration in seconds until the SAS access expires.
		 * Required
		 */
		durationInSeconds: number;
	}

	/** Data used for requesting a SAS. */
	export interface GrantAccessDataFormProperties {

		/** Required */
		access: FormControl<GrantAccessDataAccess | null | undefined>,

		/**
		 * Time duration in seconds until the SAS access expires.
		 * Required
		 */
		durationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGrantAccessDataFormGroup() {
		return new FormGroup<GrantAccessDataFormProperties>({
			access: new FormControl<GrantAccessDataAccess | null | undefined>(undefined, [Validators.required]),
			durationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GrantAccessDataAccess { None = 'None', Read = 'Read', Write = 'Write' }


	/** The source image used for creating the disk. */
	export interface ImageDiskReference {

		/**
		 * A relative uri containing either a Platform Image Repository or user image reference.
		 * Required
		 */
		id: string;

		/** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
		lun?: number | null;
	}

	/** The source image used for creating the disk. */
	export interface ImageDiskReferenceFormProperties {

		/**
		 * A relative uri containing either a Platform Image Repository or user image reference.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
		lun: FormControl<number | null | undefined>,
	}
	export function CreateImageDiskReferenceFormGroup() {
		return new FormGroup<ImageDiskReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lun: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Inner error details. */
	export interface InnerError {

		/** The internal error message or exception dump. */
		errordetail?: string | null;

		/** The exception type. */
		exceptiontype?: string | null;
	}

	/** Inner error details. */
	export interface InnerErrorFormProperties {

		/** The internal error message or exception dump. */
		errordetail: FormControl<string | null | undefined>,

		/** The exception type. */
		exceptiontype: FormControl<string | null | undefined>,
	}
	export function CreateInnerErrorFormGroup() {
		return new FormGroup<InnerErrorFormProperties>({
			errordetail: new FormControl<string | null | undefined>(undefined),
			exceptiontype: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key Vault Secret Url and vault id of the encryption key  */
	export interface KeyVaultAndSecretReference {

		/**
		 * Url pointing to a key or secret in KeyVault
		 * Required
		 */
		secretUrl: string;

		/**
		 * The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
		 * Required
		 */
		sourceVault: SourceVault;
	}

	/** Key Vault Secret Url and vault id of the encryption key  */
	export interface KeyVaultAndSecretReferenceFormProperties {

		/**
		 * Url pointing to a key or secret in KeyVault
		 * Required
		 */
		secretUrl: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultAndSecretReferenceFormGroup() {
		return new FormGroup<KeyVaultAndSecretReferenceFormProperties>({
			secretUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Resource model definition. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The Resource model definition. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Snapshot resource. */
	export interface Snapshot extends Resource {

		/** Unused. Always Null. */
		managedBy?: string | null;

		/** Snapshot resource properties. */
		properties?: SnapshotProperties;

		/** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. */
		sku?: SnapshotSku;
	}

	/** Snapshot resource. */
	export interface SnapshotFormProperties extends ResourceFormProperties {

		/** Unused. Always Null. */
		managedBy: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Snapshots operation response. */
	export interface SnapshotList {

		/** The uri to fetch the next page of snapshots. Call ListNext() with this to fetch the next page of snapshots. */
		nextLink?: string | null;

		/**
		 * A list of snapshots.
		 * Required
		 */
		value: Array<Snapshot>;
	}

	/** The List Snapshots operation response. */
	export interface SnapshotListFormProperties {

		/** The uri to fetch the next page of snapshots. Call ListNext() with this to fetch the next page of snapshots. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotListFormGroup() {
		return new FormGroup<SnapshotListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Snapshot resource properties. */
	export interface SnapshotProperties {

		/**
		 * Data used when creating a disk.
		 * Required
		 */
		creationData: CreationData;

		/** The size of the disk in bytes. This field is read only. */
		diskSizeBytes?: number | null;

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB?: number | null;

		/** Encryption at rest settings for disk or snapshot */
		encryption?: Encryption;

		/** Encryption settings for disk or snapshot */
		encryptionSettingsCollection?: EncryptionSettingsCollection;

		/** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
		hyperVGeneration?: DiskPropertiesHyperVGeneration | null;

		/** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
		incremental?: boolean | null;

		/** The Operating System type. */
		osType?: DiskPropertiesOsType | null;

		/** The disk provisioning state. */
		provisioningState?: string | null;

		/** The time when the disk was created. */
		timeCreated?: Date | null;

		/** Unique Guid identifying the resource. */
		uniqueId?: string | null;
	}

	/** Snapshot resource properties. */
	export interface SnapshotPropertiesFormProperties {

		/** The size of the disk in bytes. This field is read only. */
		diskSizeBytes: FormControl<number | null | undefined>,

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB: FormControl<number | null | undefined>,

		/** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
		hyperVGeneration: FormControl<DiskPropertiesHyperVGeneration | null | undefined>,

		/** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
		incremental: FormControl<boolean | null | undefined>,

		/** The Operating System type. */
		osType: FormControl<DiskPropertiesOsType | null | undefined>,

		/** The disk provisioning state. */
		provisioningState: FormControl<string | null | undefined>,

		/** The time when the disk was created. */
		timeCreated: FormControl<Date | null | undefined>,

		/** Unique Guid identifying the resource. */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotPropertiesFormGroup() {
		return new FormGroup<SnapshotPropertiesFormProperties>({
			diskSizeBytes: new FormControl<number | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			hyperVGeneration: new FormControl<DiskPropertiesHyperVGeneration | null | undefined>(undefined),
			incremental: new FormControl<boolean | null | undefined>(undefined),
			osType: new FormControl<DiskPropertiesOsType | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			timeCreated: new FormControl<Date | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. */
	export interface SnapshotSku {

		/** The sku name. */
		name?: SnapshotSkuName | null;

		/** The sku tier. */
		tier?: string | null;
	}

	/** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. */
	export interface SnapshotSkuFormProperties {

		/** The sku name. */
		name: FormControl<SnapshotSkuName | null | undefined>,

		/** The sku tier. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotSkuFormGroup() {
		return new FormGroup<SnapshotSkuFormProperties>({
			name: new FormControl<SnapshotSkuName | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SnapshotSkuName { Standard_LRS = 'Standard_LRS', Premium_LRS = 'Premium_LRS', Standard_ZRS = 'Standard_ZRS' }


	/** Snapshot update resource. */
	export interface SnapshotUpdate {

		/** Snapshot resource update properties. */
		properties?: SnapshotUpdateProperties;

		/** The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. */
		sku?: SnapshotSku;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** Snapshot update resource. */
	export interface SnapshotUpdateFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSnapshotUpdateFormGroup() {
		return new FormGroup<SnapshotUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Snapshot resource update properties. */
	export interface SnapshotUpdateProperties {

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB?: number | null;

		/** Encryption at rest settings for disk or snapshot */
		encryption?: Encryption;

		/** Encryption settings for disk or snapshot */
		encryptionSettingsCollection?: EncryptionSettingsCollection;

		/** the Operating System type. */
		osType?: DiskPropertiesOsType | null;
	}

	/** Snapshot resource update properties. */
	export interface SnapshotUpdatePropertiesFormProperties {

		/** If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. */
		diskSizeGB: FormControl<number | null | undefined>,

		/** the Operating System type. */
		osType: FormControl<DiskPropertiesOsType | null | undefined>,
	}
	export function CreateSnapshotUpdatePropertiesFormGroup() {
		return new FormGroup<SnapshotUpdatePropertiesFormProperties>({
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			osType: new FormControl<DiskPropertiesOsType | null | undefined>(undefined),
		});

	}


	/** The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} */
	export interface SourceVault {

		/** Resource Id */
		id?: string | null;
	}

	/** The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName} */
	export interface SourceVaultFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSourceVaultFormGroup() {
		return new FormGroup<SourceVaultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the disk encryption sets under a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskEncryptionSets
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {DiskEncryptionSetList} OK
		 */
		DiskEncryptionSets_List(subscriptionId: string, api_version: string): Observable<DiskEncryptionSetList> {
			return this.http.get<DiskEncryptionSetList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/diskEncryptionSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the disks under a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {DiskList} OK
		 */
		Disks_List(subscriptionId: string, api_version: string): Observable<DiskList> {
			return this.http.get<DiskList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/disks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists snapshots under a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/snapshots
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SnapshotList} OK
		 */
		Snapshots_List(subscriptionId: string, api_version: string): Observable<SnapshotList> {
			return this.http.get<SnapshotList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/snapshots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the disk encryption sets under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @return {DiskEncryptionSetList} OK
		 */
		DiskEncryptionSets_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<DiskEncryptionSetList> {
			return this.http.get<DiskEncryptionSetList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/diskEncryptionSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about a disk encryption set.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskEncryptionSetName The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {DiskEncryptionSet} OK
		 */
		DiskEncryptionSets_Get(subscriptionId: string, resourceGroupName: string, diskEncryptionSetName: string, api_version: string): Observable<DiskEncryptionSet> {
			return this.http.get<DiskEncryptionSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/diskEncryptionSets/' + (diskEncryptionSetName == null ? '' : encodeURIComponent(diskEncryptionSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a disk encryption set
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskEncryptionSetName The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {DiskEncryptionSet} requestBody disk encryption set object supplied in the body of the Put disk encryption set operation.
		 * @return {DiskEncryptionSet} OK
		 */
		DiskEncryptionSets_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, diskEncryptionSetName: string, api_version: string, requestBody: DiskEncryptionSet): Observable<DiskEncryptionSet> {
			return this.http.put<DiskEncryptionSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/diskEncryptionSets/' + (diskEncryptionSetName == null ? '' : encodeURIComponent(diskEncryptionSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a disk encryption set.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskEncryptionSetName The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		DiskEncryptionSets_Delete(subscriptionId: string, resourceGroupName: string, diskEncryptionSetName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/diskEncryptionSets/' + (diskEncryptionSetName == null ? '' : encodeURIComponent(diskEncryptionSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates (patches) a disk encryption set.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskEncryptionSetName The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {DiskEncryptionSetUpdate} requestBody disk encryption set object supplied in the body of the Patch disk encryption set operation.
		 * @return {DiskEncryptionSet} OK
		 */
		DiskEncryptionSets_Update(subscriptionId: string, resourceGroupName: string, diskEncryptionSetName: string, api_version: string, requestBody: DiskEncryptionSetUpdate): Observable<DiskEncryptionSet> {
			return this.http.patch<DiskEncryptionSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/diskEncryptionSets/' + (diskEncryptionSetName == null ? '' : encodeURIComponent(diskEncryptionSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the disks under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @return {DiskList} OK
		 */
		Disks_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<DiskList> {
			return this.http.get<DiskList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/disks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about a disk.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskName The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {Disk} OK
		 */
		Disks_Get(subscriptionId: string, resourceGroupName: string, diskName: string, api_version: string): Observable<Disk> {
			return this.http.get<Disk>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/disks/' + (diskName == null ? '' : encodeURIComponent(diskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a disk.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskName The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {Disk} requestBody Disk object supplied in the body of the Put disk operation.
		 * @return {Disk} OK
		 */
		Disks_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, diskName: string, api_version: string, requestBody: Disk): Observable<Disk> {
			return this.http.put<Disk>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/disks/' + (diskName == null ? '' : encodeURIComponent(diskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a disk.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskName The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Disks_Delete(subscriptionId: string, resourceGroupName: string, diskName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/disks/' + (diskName == null ? '' : encodeURIComponent(diskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates (patches) a disk.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskName The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {DiskUpdate} requestBody Disk object supplied in the body of the Patch disk operation.
		 * @return {Disk} OK
		 */
		Disks_Update(subscriptionId: string, resourceGroupName: string, diskName: string, api_version: string, requestBody: DiskUpdate): Observable<Disk> {
			return this.http.patch<Disk>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/disks/' + (diskName == null ? '' : encodeURIComponent(diskName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants access to a disk.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/beginGetAccess
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskName The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {GrantAccessData} requestBody Access data object supplied in the body of the get disk access operation.
		 * @return {AccessUri} OK
		 */
		Disks_GrantAccess(subscriptionId: string, resourceGroupName: string, diskName: string, api_version: string, requestBody: GrantAccessData): Observable<AccessUri> {
			return this.http.post<AccessUri>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/disks/' + (diskName == null ? '' : encodeURIComponent(diskName)) + '/beginGetAccess&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes access to a disk.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} diskName The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Disks_RevokeAccess(subscriptionId: string, resourceGroupName: string, diskName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/disks/' + (diskName == null ? '' : encodeURIComponent(diskName)) + '/endGetAccess&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists snapshots under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @return {SnapshotList} OK
		 */
		Snapshots_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<SnapshotList> {
			return this.http.get<SnapshotList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/snapshots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about a snapshot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} snapshotName The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {Snapshot} OK
		 */
		Snapshots_Get(subscriptionId: string, resourceGroupName: string, snapshotName: string, api_version: string): Observable<Snapshot> {
			return this.http.get<Snapshot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a snapshot.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} snapshotName The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {Snapshot} requestBody Snapshot object supplied in the body of the Put disk operation.
		 * @return {Snapshot} OK
		 */
		Snapshots_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, snapshotName: string, api_version: string, requestBody: Snapshot): Observable<Snapshot> {
			return this.http.put<Snapshot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a snapshot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} snapshotName The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Snapshots_Delete(subscriptionId: string, resourceGroupName: string, snapshotName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates (patches) a snapshot.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} snapshotName The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {SnapshotUpdate} requestBody Snapshot object supplied in the body of the Patch snapshot operation.
		 * @return {Snapshot} OK
		 */
		Snapshots_Update(subscriptionId: string, resourceGroupName: string, snapshotName: string, api_version: string, requestBody: SnapshotUpdate): Observable<Snapshot> {
			return this.http.patch<Snapshot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants access to a snapshot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/beginGetAccess
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} snapshotName The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @param {GrantAccessData} requestBody Access data object supplied in the body of the get snapshot access operation.
		 * @return {AccessUri} OK
		 */
		Snapshots_GrantAccess(subscriptionId: string, resourceGroupName: string, snapshotName: string, api_version: string, requestBody: GrantAccessData): Observable<AccessUri> {
			return this.http.post<AccessUri>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '/beginGetAccess&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes access to a snapshot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/endGetAccess
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} snapshotName The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Snapshots_RevokeAccess(subscriptionId: string, resourceGroupName: string, snapshotName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Compute/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '/endGetAccess&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

