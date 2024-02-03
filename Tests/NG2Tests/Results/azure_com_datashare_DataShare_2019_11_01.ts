import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An ADLS Gen 1 file data set. */
	export interface ADLSGen1FileDataSet {

		/**
		 * Properties of the ADLS Gen1 file data set.
		 * Required
		 */
		properties: ADLSGen1FileProperties;
	}

	/** An ADLS Gen 1 file data set. */
	export interface ADLSGen1FileDataSetFormProperties {
	}
	export function CreateADLSGen1FileDataSetFormGroup() {
		return new FormGroup<ADLSGen1FileDataSetFormProperties>({
		});

	}


	/** Properties of the ADLS Gen1 file data set. */
	export interface ADLSGen1FileProperties {

		/**
		 * The ADLS account name.
		 * Required
		 */
		accountName: string;

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * The file name in the ADLS account.
		 * Required
		 */
		fileName: string;

		/**
		 * The folder path within the ADLS account.
		 * Required
		 */
		folderPath: string;

		/**
		 * Resource group of ADLS account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Subscription id of ADLS account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the ADLS Gen1 file data set. */
	export interface ADLSGen1FilePropertiesFormProperties {

		/**
		 * The ADLS account name.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * The file name in the ADLS account.
		 * Required
		 */
		fileName: FormControl<string | null | undefined>,

		/**
		 * The folder path within the ADLS account.
		 * Required
		 */
		folderPath: FormControl<string | null | undefined>,

		/**
		 * Resource group of ADLS account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Subscription id of ADLS account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen1FilePropertiesFormGroup() {
		return new FormGroup<ADLSGen1FilePropertiesFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			folderPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An ADLS Gen 1 folder data set. */
	export interface ADLSGen1FolderDataSet {

		/**
		 * Properties of the ADLS Gen1 folder data set.
		 * Required
		 */
		properties: ADLSGen1FolderProperties;
	}

	/** An ADLS Gen 1 folder data set. */
	export interface ADLSGen1FolderDataSetFormProperties {
	}
	export function CreateADLSGen1FolderDataSetFormGroup() {
		return new FormGroup<ADLSGen1FolderDataSetFormProperties>({
		});

	}


	/** Properties of the ADLS Gen1 folder data set. */
	export interface ADLSGen1FolderProperties {

		/**
		 * The ADLS account name.
		 * Required
		 */
		accountName: string;

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * The folder path within the ADLS account.
		 * Required
		 */
		folderPath: string;

		/**
		 * Resource group of ADLS account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Subscription id of ADLS account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the ADLS Gen1 folder data set. */
	export interface ADLSGen1FolderPropertiesFormProperties {

		/**
		 * The ADLS account name.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * The folder path within the ADLS account.
		 * Required
		 */
		folderPath: FormControl<string | null | undefined>,

		/**
		 * Resource group of ADLS account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Subscription id of ADLS account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen1FolderPropertiesFormGroup() {
		return new FormGroup<ADLSGen1FolderPropertiesFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An ADLS Gen 2 file data set. */
	export interface ADLSGen2FileDataSet {

		/**
		 * Properties of the ADLS Gen2 file data set.
		 * Required
		 */
		properties: ADLSGen2FileProperties;
	}

	/** An ADLS Gen 2 file data set. */
	export interface ADLSGen2FileDataSetFormProperties {
	}
	export function CreateADLSGen2FileDataSetFormGroup() {
		return new FormGroup<ADLSGen2FileDataSetFormProperties>({
		});

	}


	/** Properties of the ADLS Gen2 file data set. */
	export interface ADLSGen2FileProperties {

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * File path within the file system.
		 * Required
		 */
		filePath: string;

		/**
		 * File system to which the file belongs.
		 * Required
		 */
		fileSystem: string;

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the ADLS Gen2 file data set. */
	export interface ADLSGen2FilePropertiesFormProperties {

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * File path within the file system.
		 * Required
		 */
		filePath: FormControl<string | null | undefined>,

		/**
		 * File system to which the file belongs.
		 * Required
		 */
		fileSystem: FormControl<string | null | undefined>,

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen2FilePropertiesFormGroup() {
		return new FormGroup<ADLSGen2FilePropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An ADLS Gen2 file data set mapping. */
	export interface ADLSGen2FileDataSetMapping {

		/**
		 * ADLS Gen 2 file data set mapping property bag.
		 * Required
		 */
		properties: ADLSGen2FileDataSetMappingProperties;
	}

	/** An ADLS Gen2 file data set mapping. */
	export interface ADLSGen2FileDataSetMappingFormProperties {
	}
	export function CreateADLSGen2FileDataSetMappingFormGroup() {
		return new FormGroup<ADLSGen2FileDataSetMappingFormProperties>({
		});

	}


	/** ADLS Gen 2 file data set mapping property bag. */
	export interface ADLSGen2FileDataSetMappingProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * File path within the file system.
		 * Required
		 */
		filePath: string;

		/**
		 * File system to which the file belongs.
		 * Required
		 */
		fileSystem: string;

		/** Type of output file */
		outputType?: ADLSGen2FileDataSetMappingPropertiesOutputType | null;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** ADLS Gen 2 file data set mapping property bag. */
	export interface ADLSGen2FileDataSetMappingPropertiesFormProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * File path within the file system.
		 * Required
		 */
		filePath: FormControl<string | null | undefined>,

		/**
		 * File system to which the file belongs.
		 * Required
		 */
		fileSystem: FormControl<string | null | undefined>,

		/** Type of output file */
		outputType: FormControl<ADLSGen2FileDataSetMappingPropertiesOutputType | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen2FileDataSetMappingPropertiesFormGroup() {
		return new FormGroup<ADLSGen2FileDataSetMappingPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputType: new FormControl<ADLSGen2FileDataSetMappingPropertiesOutputType | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus { Ok = 'Ok', Broken = 'Broken' }

	export enum ADLSGen2FileDataSetMappingPropertiesOutputType { Csv = 'Csv', Parquet = 'Parquet' }

	export enum ADLSGen2FileDataSetMappingPropertiesProvisioningState { Succeeded = 'Succeeded', Creating = 'Creating', Deleting = 'Deleting', Moving = 'Moving', Failed = 'Failed' }


	/** An ADLS Gen 2 file system data set. */
	export interface ADLSGen2FileSystemDataSet {

		/**
		 * Properties of the ADLS Gen2 file system data set.
		 * Required
		 */
		properties: ADLSGen2FileSystemProperties;
	}

	/** An ADLS Gen 2 file system data set. */
	export interface ADLSGen2FileSystemDataSetFormProperties {
	}
	export function CreateADLSGen2FileSystemDataSetFormGroup() {
		return new FormGroup<ADLSGen2FileSystemDataSetFormProperties>({
		});

	}


	/** Properties of the ADLS Gen2 file system data set. */
	export interface ADLSGen2FileSystemProperties {

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * The file system name.
		 * Required
		 */
		fileSystem: string;

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the ADLS Gen2 file system data set. */
	export interface ADLSGen2FileSystemPropertiesFormProperties {

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * The file system name.
		 * Required
		 */
		fileSystem: FormControl<string | null | undefined>,

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen2FileSystemPropertiesFormGroup() {
		return new FormGroup<ADLSGen2FileSystemPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			fileSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An ADLS Gen2 file system data set mapping. */
	export interface ADLSGen2FileSystemDataSetMapping {

		/**
		 * ADLS Gen 2 file system data set mapping property bag.
		 * Required
		 */
		properties: ADLSGen2FileSystemDataSetMappingProperties;
	}

	/** An ADLS Gen2 file system data set mapping. */
	export interface ADLSGen2FileSystemDataSetMappingFormProperties {
	}
	export function CreateADLSGen2FileSystemDataSetMappingFormGroup() {
		return new FormGroup<ADLSGen2FileSystemDataSetMappingFormProperties>({
		});

	}


	/** ADLS Gen 2 file system data set mapping property bag. */
	export interface ADLSGen2FileSystemDataSetMappingProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * The file system name.
		 * Required
		 */
		fileSystem: string;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** ADLS Gen 2 file system data set mapping property bag. */
	export interface ADLSGen2FileSystemDataSetMappingPropertiesFormProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * The file system name.
		 * Required
		 */
		fileSystem: FormControl<string | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen2FileSystemDataSetMappingPropertiesFormGroup() {
		return new FormGroup<ADLSGen2FileSystemDataSetMappingPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			fileSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An ADLS Gen 2 folder data set. */
	export interface ADLSGen2FolderDataSet {

		/**
		 * Properties of the ADLS Gen2 folder data set.
		 * Required
		 */
		properties: ADLSGen2FolderProperties;
	}

	/** An ADLS Gen 2 folder data set. */
	export interface ADLSGen2FolderDataSetFormProperties {
	}
	export function CreateADLSGen2FolderDataSetFormGroup() {
		return new FormGroup<ADLSGen2FolderDataSetFormProperties>({
		});

	}


	/** Properties of the ADLS Gen2 folder data set. */
	export interface ADLSGen2FolderProperties {

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * File system to which the folder belongs.
		 * Required
		 */
		fileSystem: string;

		/**
		 * Folder path within the file system.
		 * Required
		 */
		folderPath: string;

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the ADLS Gen2 folder data set. */
	export interface ADLSGen2FolderPropertiesFormProperties {

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * File system to which the folder belongs.
		 * Required
		 */
		fileSystem: FormControl<string | null | undefined>,

		/**
		 * Folder path within the file system.
		 * Required
		 */
		folderPath: FormControl<string | null | undefined>,

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen2FolderPropertiesFormGroup() {
		return new FormGroup<ADLSGen2FolderPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			fileSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			folderPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An ADLS Gen2 folder data set mapping. */
	export interface ADLSGen2FolderDataSetMapping {

		/**
		 * ADLS Gen 2 folder data set mapping property bag.
		 * Required
		 */
		properties: ADLSGen2FolderDataSetMappingProperties;
	}

	/** An ADLS Gen2 folder data set mapping. */
	export interface ADLSGen2FolderDataSetMappingFormProperties {
	}
	export function CreateADLSGen2FolderDataSetMappingFormGroup() {
		return new FormGroup<ADLSGen2FolderDataSetMappingFormProperties>({
		});

	}


	/** ADLS Gen 2 folder data set mapping property bag. */
	export interface ADLSGen2FolderDataSetMappingProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * File system to which the folder belongs.
		 * Required
		 */
		fileSystem: string;

		/**
		 * Folder path within the file system.
		 * Required
		 */
		folderPath: string;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** ADLS Gen 2 folder data set mapping property bag. */
	export interface ADLSGen2FolderDataSetMappingPropertiesFormProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * File system to which the folder belongs.
		 * Required
		 */
		fileSystem: FormControl<string | null | undefined>,

		/**
		 * Folder path within the file system.
		 * Required
		 */
		folderPath: FormControl<string | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateADLSGen2FolderDataSetMappingPropertiesFormGroup() {
		return new FormGroup<ADLSGen2FolderDataSetMappingPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			fileSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			folderPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An account data transfer object. */
	export interface Account {

		/**
		 * Identity of resource
		 * Required
		 */
		identity: Identity;

		/** Account property bag. */
		properties?: AccountProperties;
	}

	/** An account data transfer object. */
	export interface AccountFormProperties {
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
		});

	}


	/** Identity of resource */
	export interface Identity {

		/** service principal Id */
		principalId?: string | null;

		/** Tenant Id */
		tenantId?: string | null;

		/** Identity Type */
		type?: IdentityType | null;
	}

	/** Identity of resource */
	export interface IdentityFormProperties {

		/** service principal Id */
		principalId: FormControl<string | null | undefined>,

		/** Tenant Id */
		tenantId: FormControl<string | null | undefined>,

		/** Identity Type */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined),
		});

	}

	export enum IdentityType { SystemAssigned = 'SystemAssigned' }


	/** Account property bag. */
	export interface AccountProperties {

		/** Time at which the account was created. */
		createdAt?: Date | null;

		/** Provisioning state of the Account */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/** Email of the user who created the resource */
		userEmail?: string | null;

		/** Name of the user who created the resource */
		userName?: string | null;
	}

	/** Account property bag. */
	export interface AccountPropertiesFormProperties {

		/** Time at which the account was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Provisioning state of the Account */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/** Email of the user who created the resource */
		userEmail: FormControl<string | null | undefined>,

		/** Name of the user who created the resource */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateAccountPropertiesFormGroup() {
		return new FormGroup<AccountPropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List response for get Accounts. */
	export interface AccountList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<Account>;
	}

	/** List response for get Accounts. */
	export interface AccountListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAccountListFormGroup() {
		return new FormGroup<AccountListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update parameters for accounts */
	export interface AccountUpdateParameters {

		/** Tags on the azure resource. */
		tags?: {[id: string]: string };
	}

	/** Update parameters for accounts */
	export interface AccountUpdateParametersFormProperties {

		/** Tags on the azure resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAccountUpdateParametersFormGroup() {
		return new FormGroup<AccountUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** An Azure storage blob container data set. */
	export interface BlobContainerDataSet {

		/**
		 * Properties of the BLOB container data set.
		 * Required
		 */
		properties: BlobContainerProperties;
	}

	/** An Azure storage blob container data set. */
	export interface BlobContainerDataSetFormProperties {
	}
	export function CreateBlobContainerDataSetFormGroup() {
		return new FormGroup<BlobContainerDataSetFormProperties>({
		});

	}


	/** Properties of the BLOB container data set. */
	export interface BlobContainerProperties {

		/**
		 * BLOB Container name.
		 * Required
		 */
		containerName: string;

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the BLOB container data set. */
	export interface BlobContainerPropertiesFormProperties {

		/**
		 * BLOB Container name.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateBlobContainerPropertiesFormGroup() {
		return new FormGroup<BlobContainerPropertiesFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Blob container data set mapping. */
	export interface BlobContainerDataSetMapping {

		/**
		 * Azure storage Blob container data set mapping property bag.
		 * Required
		 */
		properties: BlobContainerMappingProperties;
	}

	/** A Blob container data set mapping. */
	export interface BlobContainerDataSetMappingFormProperties {
	}
	export function CreateBlobContainerDataSetMappingFormGroup() {
		return new FormGroup<BlobContainerDataSetMappingFormProperties>({
		});

	}


	/** Azure storage Blob container data set mapping property bag. */
	export interface BlobContainerMappingProperties {

		/**
		 * BLOB Container name.
		 * Required
		 */
		containerName: string;

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** Azure storage Blob container data set mapping property bag. */
	export interface BlobContainerMappingPropertiesFormProperties {

		/**
		 * BLOB Container name.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateBlobContainerMappingPropertiesFormGroup() {
		return new FormGroup<BlobContainerMappingPropertiesFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An Azure storage blob data set. */
	export interface BlobDataSet {

		/**
		 * Properties of the blob data set.
		 * Required
		 */
		properties: BlobProperties;
	}

	/** An Azure storage blob data set. */
	export interface BlobDataSetFormProperties {
	}
	export function CreateBlobDataSetFormGroup() {
		return new FormGroup<BlobDataSetFormProperties>({
		});

	}


	/** Properties of the blob data set. */
	export interface BlobProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: string;

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * File path within the source data set
		 * Required
		 */
		filePath: string;

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the blob data set. */
	export interface BlobPropertiesFormProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * File path within the source data set
		 * Required
		 */
		filePath: FormControl<string | null | undefined>,

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateBlobPropertiesFormGroup() {
		return new FormGroup<BlobPropertiesFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Blob data set mapping. */
	export interface BlobDataSetMapping {

		/**
		 * Azure storage Blob data set mapping property bag.
		 * Required
		 */
		properties: BlobMappingProperties;
	}

	/** A Blob data set mapping. */
	export interface BlobDataSetMappingFormProperties {
	}
	export function CreateBlobDataSetMappingFormGroup() {
		return new FormGroup<BlobDataSetMappingFormProperties>({
		});

	}


	/** Azure storage Blob data set mapping property bag. */
	export interface BlobMappingProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: string;

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * File path within the source data set
		 * Required
		 */
		filePath: string;

		/** File output type */
		outputType?: ADLSGen2FileDataSetMappingPropertiesOutputType | null;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** Azure storage Blob data set mapping property bag. */
	export interface BlobMappingPropertiesFormProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * File path within the source data set
		 * Required
		 */
		filePath: FormControl<string | null | undefined>,

		/** File output type */
		outputType: FormControl<ADLSGen2FileDataSetMappingPropertiesOutputType | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateBlobMappingPropertiesFormGroup() {
		return new FormGroup<BlobMappingPropertiesFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputType: new FormControl<ADLSGen2FileDataSetMappingPropertiesOutputType | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An Azure storage blob folder data set. */
	export interface BlobFolderDataSet {

		/**
		 * Properties of the blob folder data set.
		 * Required
		 */
		properties: BlobFolderProperties;
	}

	/** An Azure storage blob folder data set. */
	export interface BlobFolderDataSetFormProperties {
	}
	export function CreateBlobFolderDataSetFormGroup() {
		return new FormGroup<BlobFolderDataSetFormProperties>({
		});

	}


	/** Properties of the blob folder data set. */
	export interface BlobFolderProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: string;

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * Prefix for blob folder
		 * Required
		 */
		prefix: string;

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: string;
	}

	/** Properties of the blob folder data set. */
	export interface BlobFolderPropertiesFormProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * Prefix for blob folder
		 * Required
		 */
		prefix: FormControl<string | null | undefined>,

		/**
		 * Resource group of storage account
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateBlobFolderPropertiesFormGroup() {
		return new FormGroup<BlobFolderPropertiesFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Blob folder data set mapping. */
	export interface BlobFolderDataSetMapping {

		/**
		 * Azure storage Blob folder data set mapping property bag.
		 * Required
		 */
		properties: BlobFolderMappingProperties;
	}

	/** A Blob folder data set mapping. */
	export interface BlobFolderDataSetMappingFormProperties {
	}
	export function CreateBlobFolderDataSetMappingFormGroup() {
		return new FormGroup<BlobFolderDataSetMappingFormProperties>({
		});

	}


	/** Azure storage Blob folder data set mapping property bag. */
	export interface BlobFolderMappingProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: string;

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * Prefix for blob folder
		 * Required
		 */
		prefix: string;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: string;

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: string;
	}

	/** Azure storage Blob folder data set mapping property bag. */
	export interface BlobFolderMappingPropertiesFormProperties {

		/**
		 * Container that has the file path.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * Prefix for blob folder
		 * Required
		 */
		prefix: FormControl<string | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Resource group of storage account.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Storage account name of the source data set.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,

		/**
		 * Subscription id of storage account.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateBlobFolderMappingPropertiesFormGroup() {
		return new FormGroup<BlobFolderMappingPropertiesFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A consumer Invitation data transfer object. */
	export interface ConsumerInvitation {

		/**
		 * Properties of consumer invitation
		 * Required
		 */
		properties: ConsumerInvitationProperties;
	}

	/** A consumer Invitation data transfer object. */
	export interface ConsumerInvitationFormProperties {
	}
	export function CreateConsumerInvitationFormGroup() {
		return new FormGroup<ConsumerInvitationFormProperties>({
		});

	}


	/** Properties of consumer invitation */
	export interface ConsumerInvitationProperties {

		/** Number of data sets in a share */
		dataSetCount?: number | null;

		/** Description shared when the invitation was created */
		description?: string | null;

		/**
		 * Unique id of the invitation.
		 * Required
		 */
		invitationId: string;

		/** The status of the invitation. */
		invitationStatus?: ConsumerInvitationPropertiesInvitationStatus | null;

		/** invitation location */
		location?: string | null;

		/** Email of the provider who created the resource */
		providerEmail?: string | null;

		/** Name of the provider who created the resource */
		providerName?: string | null;

		/** Tenant name of the provider who created the resource */
		providerTenantName?: string | null;

		/** The time the recipient responded to the invitation. */
		respondedAt?: Date | null;

		/** Gets the time at which the invitation was sent. */
		sentAt?: Date | null;

		/** Gets the source share Name. */
		shareName?: string | null;

		/** Terms of use shared when the invitation was created */
		termsOfUse?: string | null;

		/** Email of the user who created the resource */
		userEmail?: string | null;

		/** Name of the user who created the resource */
		userName?: string | null;
	}

	/** Properties of consumer invitation */
	export interface ConsumerInvitationPropertiesFormProperties {

		/** Number of data sets in a share */
		dataSetCount: FormControl<number | null | undefined>,

		/** Description shared when the invitation was created */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique id of the invitation.
		 * Required
		 */
		invitationId: FormControl<string | null | undefined>,

		/** The status of the invitation. */
		invitationStatus: FormControl<ConsumerInvitationPropertiesInvitationStatus | null | undefined>,

		/** invitation location */
		location: FormControl<string | null | undefined>,

		/** Email of the provider who created the resource */
		providerEmail: FormControl<string | null | undefined>,

		/** Name of the provider who created the resource */
		providerName: FormControl<string | null | undefined>,

		/** Tenant name of the provider who created the resource */
		providerTenantName: FormControl<string | null | undefined>,

		/** The time the recipient responded to the invitation. */
		respondedAt: FormControl<Date | null | undefined>,

		/** Gets the time at which the invitation was sent. */
		sentAt: FormControl<Date | null | undefined>,

		/** Gets the source share Name. */
		shareName: FormControl<string | null | undefined>,

		/** Terms of use shared when the invitation was created */
		termsOfUse: FormControl<string | null | undefined>,

		/** Email of the user who created the resource */
		userEmail: FormControl<string | null | undefined>,

		/** Name of the user who created the resource */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateConsumerInvitationPropertiesFormGroup() {
		return new FormGroup<ConsumerInvitationPropertiesFormProperties>({
			dataSetCount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invitationStatus: new FormControl<ConsumerInvitationPropertiesInvitationStatus | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			providerEmail: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
			providerTenantName: new FormControl<string | null | undefined>(undefined),
			respondedAt: new FormControl<Date | null | undefined>(undefined),
			sentAt: new FormControl<Date | null | undefined>(undefined),
			shareName: new FormControl<string | null | undefined>(undefined),
			termsOfUse: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConsumerInvitationPropertiesInvitationStatus { Pending = 'Pending', Accepted = 'Accepted', Rejected = 'Rejected', Withdrawn = 'Withdrawn' }


	/** List response for get InvitationList */
	export interface ConsumerInvitationList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<ConsumerInvitation>;
	}

	/** List response for get InvitationList */
	export interface ConsumerInvitationListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConsumerInvitationListFormGroup() {
		return new FormGroup<ConsumerInvitationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A consumer side dataSet data transfer object. */
	export interface ConsumerSourceDataSet {

		/** Properties of consumer source dataSet */
		properties?: ConsumerSourceDataSetProperties;
	}

	/** A consumer side dataSet data transfer object. */
	export interface ConsumerSourceDataSetFormProperties {
	}
	export function CreateConsumerSourceDataSetFormGroup() {
		return new FormGroup<ConsumerSourceDataSetFormProperties>({
		});

	}


	/** Properties of consumer source dataSet */
	export interface ConsumerSourceDataSetProperties {

		/** DataSet Id */
		dataSetId?: string | null;

		/** Location of the data set. */
		dataSetLocation?: string | null;

		/** DataSet name */
		dataSetName?: string | null;

		/** DataSet path */
		dataSetPath?: string | null;

		/** Type of data set */
		dataSetType?: ConsumerSourceDataSetPropertiesDataSetType | null;
	}

	/** Properties of consumer source dataSet */
	export interface ConsumerSourceDataSetPropertiesFormProperties {

		/** DataSet Id */
		dataSetId: FormControl<string | null | undefined>,

		/** Location of the data set. */
		dataSetLocation: FormControl<string | null | undefined>,

		/** DataSet name */
		dataSetName: FormControl<string | null | undefined>,

		/** DataSet path */
		dataSetPath: FormControl<string | null | undefined>,

		/** Type of data set */
		dataSetType: FormControl<ConsumerSourceDataSetPropertiesDataSetType | null | undefined>,
	}
	export function CreateConsumerSourceDataSetPropertiesFormGroup() {
		return new FormGroup<ConsumerSourceDataSetPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			dataSetLocation: new FormControl<string | null | undefined>(undefined),
			dataSetName: new FormControl<string | null | undefined>(undefined),
			dataSetPath: new FormControl<string | null | undefined>(undefined),
			dataSetType: new FormControl<ConsumerSourceDataSetPropertiesDataSetType | null | undefined>(undefined),
		});

	}

	export enum ConsumerSourceDataSetPropertiesDataSetType { Blob = 'Blob', Container = 'Container', BlobFolder = 'BlobFolder', AdlsGen2FileSystem = 'AdlsGen2FileSystem', AdlsGen2Folder = 'AdlsGen2Folder', AdlsGen2File = 'AdlsGen2File', AdlsGen1Folder = 'AdlsGen1Folder', AdlsGen1File = 'AdlsGen1File', KustoCluster = 'KustoCluster', KustoDatabase = 'KustoDatabase', SqlDBTable = 'SqlDBTable', SqlDWTable = 'SqlDWTable' }


	/** A consumer side list of source dataSets */
	export interface ConsumerSourceDataSetList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<ConsumerSourceDataSet>;
	}

	/** A consumer side list of source dataSets */
	export interface ConsumerSourceDataSetListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConsumerSourceDataSetListFormGroup() {
		return new FormGroup<ConsumerSourceDataSetListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DataSet data transfer object. */
	export interface DataSet {

		/**
		 * Kind of data set.
		 * Required
		 */
		kind: ConsumerSourceDataSetPropertiesDataSetType;
	}

	/** A DataSet data transfer object. */
	export interface DataSetFormProperties {

		/**
		 * Kind of data set.
		 * Required
		 */
		kind: FormControl<ConsumerSourceDataSetPropertiesDataSetType | null | undefined>,
	}
	export function CreateDataSetFormGroup() {
		return new FormGroup<DataSetFormProperties>({
			kind: new FormControl<ConsumerSourceDataSetPropertiesDataSetType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List response for get DataSets */
	export interface DataSetList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<DataSet>;
	}

	/** List response for get DataSets */
	export interface DataSetListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataSetListFormGroup() {
		return new FormGroup<DataSetListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data set mapping data transfer object. */
	export interface DataSetMapping {

		/**
		 * Kind of data set mapping.
		 * Required
		 */
		kind: DataSetMappingKind;
	}

	/** A data set mapping data transfer object. */
	export interface DataSetMappingFormProperties {

		/**
		 * Kind of data set mapping.
		 * Required
		 */
		kind: FormControl<DataSetMappingKind | null | undefined>,
	}
	export function CreateDataSetMappingFormGroup() {
		return new FormGroup<DataSetMappingFormProperties>({
			kind: new FormControl<DataSetMappingKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataSetMappingKind { Blob = 'Blob', Container = 'Container', BlobFolder = 'BlobFolder', AdlsGen2FileSystem = 'AdlsGen2FileSystem', AdlsGen2Folder = 'AdlsGen2Folder', AdlsGen2File = 'AdlsGen2File', KustoCluster = 'KustoCluster', KustoDatabase = 'KustoDatabase', SqlDBTable = 'SqlDBTable', SqlDWTable = 'SqlDWTable' }


	/** List response for get DataSetMappings */
	export interface DataSetMappingList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<DataSetMapping>;
	}

	/** List response for get DataSetMappings */
	export interface DataSetMappingListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataSetMappingListFormGroup() {
		return new FormGroup<DataSetMappingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data share error model. */
	export interface DataShareError {

		/**
		 * The data share error body model.
		 * Required
		 */
		error: DataShareErrorInfo;
	}

	/** The data share error model. */
	export interface DataShareErrorFormProperties {
	}
	export function CreateDataShareErrorFormGroup() {
		return new FormGroup<DataShareErrorFormProperties>({
		});

	}


	/** The data share error body model. */
	export interface DataShareErrorInfo {

		/**
		 * Code of the error
		 * Required
		 */
		code: string;

		/** Nested details of the error model */
		details?: Array<DataShareErrorInfo>;

		/**
		 * Message of the error
		 * Required
		 */
		message: string;

		/** Target of the error */
		target?: string | null;
	}

	/** The data share error body model. */
	export interface DataShareErrorInfoFormProperties {

		/**
		 * Code of the error
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Message of the error
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Target of the error */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDataShareErrorInfoFormGroup() {
		return new FormGroup<DataShareErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base data transfer object implementation for default resources. */
	export interface DefaultDto {

		/** The resource id of the azure resource */
		id?: string | null;

		/** Location of the azure resource. */
		location?: string | null;

		/** Name of the azure resource */
		name?: string | null;

		/** Tags on the azure resource. */
		tags?: {[id: string]: string };

		/** Type of the azure resource */
		type?: string | null;
	}

	/** Base data transfer object implementation for default resources. */
	export interface DefaultDtoFormProperties {

		/** The resource id of the azure resource */
		id: FormControl<string | null | undefined>,

		/** Location of the azure resource. */
		location: FormControl<string | null | undefined>,

		/** Name of the azure resource */
		name: FormControl<string | null | undefined>,

		/** Tags on the azure resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of the azure resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDefaultDtoFormGroup() {
		return new FormGroup<DefaultDtoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** properties for dimension */
	export interface DimensionProperties {

		/** localized display name of the dimension to customer */
		displayName?: string | null;

		/** dimension name */
		name?: string | null;
	}

	/** properties for dimension */
	export interface DimensionPropertiesFormProperties {

		/** localized display name of the dimension to customer */
		displayName: FormControl<string | null | undefined>,

		/** dimension name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDimensionPropertiesFormGroup() {
		return new FormGroup<DimensionPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Invitation data transfer object. */
	export interface Invitation {

		/** Invitation property bag. */
		properties?: InvitationProperties;
	}

	/** A Invitation data transfer object. */
	export interface InvitationFormProperties {
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
		});

	}


	/** Invitation property bag. */
	export interface InvitationProperties {

		/** unique invitation id */
		invitationId?: string | null;

		/** The status of the invitation. */
		invitationStatus?: ConsumerInvitationPropertiesInvitationStatus | null;

		/** The time the recipient responded to the invitation. */
		respondedAt?: Date | null;

		/** Gets the time at which the invitation was sent. */
		sentAt?: Date | null;

		/** The target Azure AD Id. Can't be combined with email. */
		targetActiveDirectoryId?: string | null;

		/** The email the invitation is directed to. */
		targetEmail?: string | null;

		/**
		 * The target user or application Id that invitation is being sent to.
		 * Must be specified along TargetActiveDirectoryId. This enables sending
		 * invitations to specific users or applications in an AD tenant.
		 */
		targetObjectId?: string | null;

		/** Email of the user who created the resource */
		userEmail?: string | null;

		/** Name of the user who created the resource */
		userName?: string | null;
	}

	/** Invitation property bag. */
	export interface InvitationPropertiesFormProperties {

		/** unique invitation id */
		invitationId: FormControl<string | null | undefined>,

		/** The status of the invitation. */
		invitationStatus: FormControl<ConsumerInvitationPropertiesInvitationStatus | null | undefined>,

		/** The time the recipient responded to the invitation. */
		respondedAt: FormControl<Date | null | undefined>,

		/** Gets the time at which the invitation was sent. */
		sentAt: FormControl<Date | null | undefined>,

		/** The target Azure AD Id. Can't be combined with email. */
		targetActiveDirectoryId: FormControl<string | null | undefined>,

		/** The email the invitation is directed to. */
		targetEmail: FormControl<string | null | undefined>,

		/**
		 * The target user or application Id that invitation is being sent to.
		 * Must be specified along TargetActiveDirectoryId. This enables sending
		 * invitations to specific users or applications in an AD tenant.
		 */
		targetObjectId: FormControl<string | null | undefined>,

		/** Email of the user who created the resource */
		userEmail: FormControl<string | null | undefined>,

		/** Name of the user who created the resource */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateInvitationPropertiesFormGroup() {
		return new FormGroup<InvitationPropertiesFormProperties>({
			invitationId: new FormControl<string | null | undefined>(undefined),
			invitationStatus: new FormControl<ConsumerInvitationPropertiesInvitationStatus | null | undefined>(undefined),
			respondedAt: new FormControl<Date | null | undefined>(undefined),
			sentAt: new FormControl<Date | null | undefined>(undefined),
			targetActiveDirectoryId: new FormControl<string | null | undefined>(undefined),
			targetEmail: new FormControl<string | null | undefined>(undefined),
			targetObjectId: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List response for get InvitationList */
	export interface InvitationList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<Invitation>;
	}

	/** List response for get InvitationList */
	export interface InvitationListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInvitationListFormGroup() {
		return new FormGroup<InvitationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A kusto cluster data set. */
	export interface KustoClusterDataSet {

		/**
		 * Properties of the kusto cluster data set.
		 * Required
		 */
		properties: KustoClusterDataSetProperties;
	}

	/** A kusto cluster data set. */
	export interface KustoClusterDataSetFormProperties {
	}
	export function CreateKustoClusterDataSetFormGroup() {
		return new FormGroup<KustoClusterDataSetFormProperties>({
		});

	}


	/** Properties of the kusto cluster data set. */
	export interface KustoClusterDataSetProperties {

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * Resource id of the kusto cluster.
		 * Required
		 */
		kustoClusterResourceId: string;

		/** Location of the kusto cluster. */
		location?: string | null;

		/** Provisioning state of the kusto cluster data set. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;
	}

	/** Properties of the kusto cluster data set. */
	export interface KustoClusterDataSetPropertiesFormProperties {

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * Resource id of the kusto cluster.
		 * Required
		 */
		kustoClusterResourceId: FormControl<string | null | undefined>,

		/** Location of the kusto cluster. */
		location: FormControl<string | null | undefined>,

		/** Provisioning state of the kusto cluster data set. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,
	}
	export function CreateKustoClusterDataSetPropertiesFormGroup() {
		return new FormGroup<KustoClusterDataSetPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			kustoClusterResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** A Kusto cluster data set mapping */
	export interface KustoClusterDataSetMapping {

		/**
		 * Properties of the Kusto cluster data set mapping
		 * Required
		 */
		properties: KustoClusterDataSetMappingProperties;
	}

	/** A Kusto cluster data set mapping */
	export interface KustoClusterDataSetMappingFormProperties {
	}
	export function CreateKustoClusterDataSetMappingFormGroup() {
		return new FormGroup<KustoClusterDataSetMappingFormProperties>({
		});

	}


	/** Properties of the Kusto cluster data set mapping */
	export interface KustoClusterDataSetMappingProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * Resource id of the sink kusto cluster.
		 * Required
		 */
		kustoClusterResourceId: string;

		/** Location of the sink kusto cluster. */
		location?: string | null;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;
	}

	/** Properties of the Kusto cluster data set mapping */
	export interface KustoClusterDataSetMappingPropertiesFormProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * Resource id of the sink kusto cluster.
		 * Required
		 */
		kustoClusterResourceId: FormControl<string | null | undefined>,

		/** Location of the sink kusto cluster. */
		location: FormControl<string | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,
	}
	export function CreateKustoClusterDataSetMappingPropertiesFormGroup() {
		return new FormGroup<KustoClusterDataSetMappingPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			kustoClusterResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** A kusto database data set. */
	export interface KustoDatabaseDataSet {

		/**
		 * Properties of the kusto database data set.
		 * Required
		 */
		properties: KustoDatabaseDataSetProperties;
	}

	/** A kusto database data set. */
	export interface KustoDatabaseDataSetFormProperties {
	}
	export function CreateKustoDatabaseDataSetFormGroup() {
		return new FormGroup<KustoDatabaseDataSetFormProperties>({
		});

	}


	/** Properties of the kusto database data set. */
	export interface KustoDatabaseDataSetProperties {

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * Resource id of the kusto database.
		 * Required
		 */
		kustoDatabaseResourceId: string;

		/** Location of the kusto cluster. */
		location?: string | null;

		/** Provisioning state of the kusto database data set. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;
	}

	/** Properties of the kusto database data set. */
	export interface KustoDatabaseDataSetPropertiesFormProperties {

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * Resource id of the kusto database.
		 * Required
		 */
		kustoDatabaseResourceId: FormControl<string | null | undefined>,

		/** Location of the kusto cluster. */
		location: FormControl<string | null | undefined>,

		/** Provisioning state of the kusto database data set. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,
	}
	export function CreateKustoDatabaseDataSetPropertiesFormGroup() {
		return new FormGroup<KustoDatabaseDataSetPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			kustoDatabaseResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** A Kusto database data set mapping */
	export interface KustoDatabaseDataSetMapping {

		/**
		 * Properties of the Kusto database data set mapping
		 * Required
		 */
		properties: KustoDatabaseDataSetMappingProperties;
	}

	/** A Kusto database data set mapping */
	export interface KustoDatabaseDataSetMappingFormProperties {
	}
	export function CreateKustoDatabaseDataSetMappingFormGroup() {
		return new FormGroup<KustoDatabaseDataSetMappingFormProperties>({
		});

	}


	/** Properties of the Kusto database data set mapping */
	export interface KustoDatabaseDataSetMappingProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * Resource id of the sink kusto cluster.
		 * Required
		 */
		kustoClusterResourceId: string;

		/** Location of the sink kusto cluster. */
		location?: string | null;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;
	}

	/** Properties of the Kusto database data set mapping */
	export interface KustoDatabaseDataSetMappingPropertiesFormProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * Resource id of the sink kusto cluster.
		 * Required
		 */
		kustoClusterResourceId: FormControl<string | null | undefined>,

		/** Location of the sink kusto cluster. */
		location: FormControl<string | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,
	}
	export function CreateKustoDatabaseDataSetMappingPropertiesFormGroup() {
		return new FormGroup<KustoDatabaseDataSetMappingPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			kustoClusterResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** List response for get operations. */
	export interface OperationList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<OperationModel>;
	}

	/** List response for get operations. */
	export interface OperationListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for get operations */
	export interface OperationModel {

		/** Properties on operations */
		display?: OperationModelProperties;

		/** Operation name for display purposes */
		name?: string | null;

		/** origin of the operation */
		origin?: string | null;

		/** properties on meta info */
		properties?: OperationMetaPropertyInfo;
	}

	/** The response model for get operations */
	export interface OperationModelFormProperties {

		/** Operation name for display purposes */
		name: FormControl<string | null | undefined>,

		/** origin of the operation */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationModelFormGroup() {
		return new FormGroup<OperationModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties on operations */
	export interface OperationModelProperties {

		/** Description of the operation for display purposes */
		description?: string | null;

		/** Name of the operation for display purposes */
		operation?: string | null;

		/** Name of the provider for display purposes */
		provider?: string | null;

		/** Name of the resource type for display purposes */
		resource?: string | null;
	}

	/** Properties on operations */
	export interface OperationModelPropertiesFormProperties {

		/** Description of the operation for display purposes */
		description: FormControl<string | null | undefined>,

		/** Name of the operation for display purposes */
		operation: FormControl<string | null | undefined>,

		/** Name of the provider for display purposes */
		provider: FormControl<string | null | undefined>,

		/** Name of the resource type for display purposes */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationModelPropertiesFormGroup() {
		return new FormGroup<OperationModelPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** properties on meta info */
	export interface OperationMetaPropertyInfo {

		/** The operation meta service specification */
		serviceSpecification?: OperationMetaServiceSpecification;
	}

	/** properties on meta info */
	export interface OperationMetaPropertyInfoFormProperties {
	}
	export function CreateOperationMetaPropertyInfoFormGroup() {
		return new FormGroup<OperationMetaPropertyInfoFormProperties>({
		});

	}


	/** The operation meta service specification */
	export interface OperationMetaServiceSpecification {

		/** log specifications for the operation */
		logSpecifications?: Array<OperationMetaLogSpecification>;

		/** metric specifications for the operation */
		metricSpecifications?: Array<OperationMetaMetricSpecification>;
	}

	/** The operation meta service specification */
	export interface OperationMetaServiceSpecificationFormProperties {
	}
	export function CreateOperationMetaServiceSpecificationFormGroup() {
		return new FormGroup<OperationMetaServiceSpecificationFormProperties>({
		});

	}


	/** log specifications for operation api */
	export interface OperationMetaLogSpecification {

		/** blob duration of the log */
		blobDuration?: string | null;

		/** localized name of the log category */
		displayName?: string | null;

		/** name of the log category */
		name?: string | null;
	}

	/** log specifications for operation api */
	export interface OperationMetaLogSpecificationFormProperties {

		/** blob duration of the log */
		blobDuration: FormControl<string | null | undefined>,

		/** localized name of the log category */
		displayName: FormControl<string | null | undefined>,

		/** name of the log category */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetaLogSpecificationFormGroup() {
		return new FormGroup<OperationMetaLogSpecificationFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** metric specifications for the operation */
	export interface OperationMetaMetricSpecification {

		/** aggregation type of metric */
		aggregationType?: string | null;

		/** properties for dimension */
		dimensions?: Array<DimensionProperties>;

		/** description of the metric */
		displayDescription?: string | null;

		/** localized name of the metric */
		displayName?: string | null;

		/** enable regional mdm account */
		enableRegionalMdmAccount?: string | null;

		/** internal metric name */
		internalMetricName?: string | null;

		/** name of the metric */
		name?: string | null;

		/** dimension name use to replace resource id if specified */
		resourceIdDimensionNameOverride?: string | null;

		/** supported aggregation types */
		supportedAggregationTypes?: Array<string>;

		/** supported time grain types */
		supportedTimeGrainTypes?: Array<string>;

		/** units for the metric */
		unit?: string | null;
	}

	/** metric specifications for the operation */
	export interface OperationMetaMetricSpecificationFormProperties {

		/** aggregation type of metric */
		aggregationType: FormControl<string | null | undefined>,

		/** description of the metric */
		displayDescription: FormControl<string | null | undefined>,

		/** localized name of the metric */
		displayName: FormControl<string | null | undefined>,

		/** enable regional mdm account */
		enableRegionalMdmAccount: FormControl<string | null | undefined>,

		/** internal metric name */
		internalMetricName: FormControl<string | null | undefined>,

		/** name of the metric */
		name: FormControl<string | null | undefined>,

		/** dimension name use to replace resource id if specified */
		resourceIdDimensionNameOverride: FormControl<string | null | undefined>,

		/** units for the metric */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetaMetricSpecificationFormGroup() {
		return new FormGroup<OperationMetaMetricSpecificationFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableRegionalMdmAccount: new FormControl<string | null | undefined>(undefined),
			internalMetricName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceIdDimensionNameOverride: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for long running operation */
	export interface OperationResponse {

		/** start time */
		endTime?: Date | null;

		/** The data share error body model. */
		error?: DataShareErrorInfo;

		/** start time */
		startTime?: Date | null;

		/**
		 * Operation state of the long running operation.
		 * Required
		 */
		status: OperationResponseStatus;
	}

	/** Response for long running operation */
	export interface OperationResponseFormProperties {

		/** start time */
		endTime: FormControl<Date | null | undefined>,

		/** start time */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * Operation state of the long running operation.
		 * Required
		 */
		status: FormControl<OperationResponseStatus | null | undefined>,
	}
	export function CreateOperationResponseFormGroup() {
		return new FormGroup<OperationResponseFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<OperationResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OperationResponseStatus { Accepted = 'Accepted', InProgress = 'InProgress', TransientFailure = 'TransientFailure', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled' }


	/** A provider side share subscription data transfer object. */
	export interface ProviderShareSubscription {

		/** Provider share subscription properties */
		properties?: ProviderShareSubscriptionProperties;
	}

	/** A provider side share subscription data transfer object. */
	export interface ProviderShareSubscriptionFormProperties {
	}
	export function CreateProviderShareSubscriptionFormGroup() {
		return new FormGroup<ProviderShareSubscriptionFormProperties>({
		});

	}


	/** Provider share subscription properties */
	export interface ProviderShareSubscriptionProperties {

		/** Email of the consumer who created the share subscription */
		consumerEmail?: string | null;

		/** Name of the consumer who created the share subscription */
		consumerName?: string | null;

		/** Tenant name of the consumer who created the share subscription */
		consumerTenantName?: string | null;

		/** created at */
		createdAt?: Date | null;

		/** Email of the provider who created the share */
		providerEmail?: string | null;

		/** Name of the provider who created the share */
		providerName?: string | null;

		/** share Subscription Object Id */
		shareSubscriptionObjectId?: string | null;

		/** Gets the status of share subscription */
		shareSubscriptionStatus?: ProviderShareSubscriptionPropertiesShareSubscriptionStatus | null;

		/** Shared at */
		sharedAt?: Date | null;
	}

	/** Provider share subscription properties */
	export interface ProviderShareSubscriptionPropertiesFormProperties {

		/** Email of the consumer who created the share subscription */
		consumerEmail: FormControl<string | null | undefined>,

		/** Name of the consumer who created the share subscription */
		consumerName: FormControl<string | null | undefined>,

		/** Tenant name of the consumer who created the share subscription */
		consumerTenantName: FormControl<string | null | undefined>,

		/** created at */
		createdAt: FormControl<Date | null | undefined>,

		/** Email of the provider who created the share */
		providerEmail: FormControl<string | null | undefined>,

		/** Name of the provider who created the share */
		providerName: FormControl<string | null | undefined>,

		/** share Subscription Object Id */
		shareSubscriptionObjectId: FormControl<string | null | undefined>,

		/** Gets the status of share subscription */
		shareSubscriptionStatus: FormControl<ProviderShareSubscriptionPropertiesShareSubscriptionStatus | null | undefined>,

		/** Shared at */
		sharedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProviderShareSubscriptionPropertiesFormGroup() {
		return new FormGroup<ProviderShareSubscriptionPropertiesFormProperties>({
			consumerEmail: new FormControl<string | null | undefined>(undefined),
			consumerName: new FormControl<string | null | undefined>(undefined),
			consumerTenantName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			providerEmail: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
			shareSubscriptionObjectId: new FormControl<string | null | undefined>(undefined),
			shareSubscriptionStatus: new FormControl<ProviderShareSubscriptionPropertiesShareSubscriptionStatus | null | undefined>(undefined),
			sharedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ProviderShareSubscriptionPropertiesShareSubscriptionStatus { Active = 'Active', Revoked = 'Revoked', SourceDeleted = 'SourceDeleted', Revoking = 'Revoking' }


	/** List response for get ShareSubscription. */
	export interface ProviderShareSubscriptionList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<ProviderShareSubscription>;
	}

	/** List response for get ShareSubscription. */
	export interface ProviderShareSubscriptionListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProviderShareSubscriptionListFormGroup() {
		return new FormGroup<ProviderShareSubscriptionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base data transfer object implementation for proxy resources. */
	export interface ProxyDto {

		/** The resource id of the azure resource */
		id?: string | null;

		/** Name of the azure resource */
		name?: string | null;

		/** Type of the azure resource */
		type?: string | null;
	}

	/** Base data transfer object implementation for proxy resources. */
	export interface ProxyDtoFormProperties {

		/** The resource id of the azure resource */
		id: FormControl<string | null | undefined>,

		/** Name of the azure resource */
		name: FormControl<string | null | undefined>,

		/** Type of the azure resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyDtoFormGroup() {
		return new FormGroup<ProxyDtoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Scheduled source synchronization setting data transfer object. */
	export interface ScheduledSourceShareSynchronizationSettingProperties {

		/** Recurrence Interval */
		recurrenceInterval?: ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval | null;

		/** Synchronization time */
		synchronizationTime?: Date | null;
	}

	/** A Scheduled source synchronization setting data transfer object. */
	export interface ScheduledSourceShareSynchronizationSettingPropertiesFormProperties {

		/** Recurrence Interval */
		recurrenceInterval: FormControl<ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval | null | undefined>,

		/** Synchronization time */
		synchronizationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledSourceShareSynchronizationSettingPropertiesFormGroup() {
		return new FormGroup<ScheduledSourceShareSynchronizationSettingPropertiesFormProperties>({
			recurrenceInterval: new FormControl<ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval | null | undefined>(undefined),
			synchronizationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval { Hour = 'Hour', Day = 'Day' }


	/** A type of synchronization setting based on schedule */
	export interface ScheduledSourceSynchronizationSetting {

		/** A Scheduled source synchronization setting data transfer object. */
		properties?: ScheduledSourceShareSynchronizationSettingProperties;
	}

	/** A type of synchronization setting based on schedule */
	export interface ScheduledSourceSynchronizationSettingFormProperties {
	}
	export function CreateScheduledSourceSynchronizationSettingFormGroup() {
		return new FormGroup<ScheduledSourceSynchronizationSettingFormProperties>({
		});

	}


	/** A type of synchronization setting based on schedule */
	export interface ScheduledSynchronizationSetting {

		/**
		 * A Scheduled synchronization setting data transfer object.
		 * Required
		 */
		properties: ScheduledSynchronizationSettingProperties;
	}

	/** A type of synchronization setting based on schedule */
	export interface ScheduledSynchronizationSettingFormProperties {
	}
	export function CreateScheduledSynchronizationSettingFormGroup() {
		return new FormGroup<ScheduledSynchronizationSettingFormProperties>({
		});

	}


	/** A Scheduled synchronization setting data transfer object. */
	export interface ScheduledSynchronizationSettingProperties {

		/** Time at which the synchronization setting was created. */
		createdAt?: Date | null;

		/** Gets or sets the provisioning state */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Recurrence Interval
		 * Required
		 */
		recurrenceInterval: ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval;

		/**
		 * Synchronization time
		 * Required
		 */
		synchronizationTime: Date;

		/** Name of the user who created the synchronization setting. */
		userName?: string | null;
	}

	/** A Scheduled synchronization setting data transfer object. */
	export interface ScheduledSynchronizationSettingPropertiesFormProperties {

		/** Time at which the synchronization setting was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Gets or sets the provisioning state */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Recurrence Interval
		 * Required
		 */
		recurrenceInterval: FormControl<ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval | null | undefined>,

		/**
		 * Synchronization time
		 * Required
		 */
		synchronizationTime: FormControl<Date | null | undefined>,

		/** Name of the user who created the synchronization setting. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateScheduledSynchronizationSettingPropertiesFormGroup() {
		return new FormGroup<ScheduledSynchronizationSettingPropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			recurrenceInterval: new FormControl<ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval | null | undefined>(undefined, [Validators.required]),
			synchronizationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type of trigger based on schedule */
	export interface ScheduledTrigger {

		/**
		 * A Scheduled trigger data transfer object.
		 * Required
		 */
		properties: ScheduledTriggerProperties;
	}

	/** A type of trigger based on schedule */
	export interface ScheduledTriggerFormProperties {
	}
	export function CreateScheduledTriggerFormGroup() {
		return new FormGroup<ScheduledTriggerFormProperties>({
		});

	}


	/** A Scheduled trigger data transfer object. */
	export interface ScheduledTriggerProperties {

		/** Time at which the trigger was created. */
		createdAt?: Date | null;

		/** Gets the provisioning state */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Recurrence Interval
		 * Required
		 */
		recurrenceInterval: ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval;

		/** Synchronization mode */
		synchronizationMode?: ScheduledTriggerPropertiesSynchronizationMode | null;

		/**
		 * Synchronization time
		 * Required
		 */
		synchronizationTime: Date;

		/** Gets the trigger state */
		triggerStatus?: ScheduledTriggerPropertiesTriggerStatus | null;

		/** Name of the user who created the trigger. */
		userName?: string | null;
	}

	/** A Scheduled trigger data transfer object. */
	export interface ScheduledTriggerPropertiesFormProperties {

		/** Time at which the trigger was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Gets the provisioning state */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Recurrence Interval
		 * Required
		 */
		recurrenceInterval: FormControl<ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval | null | undefined>,

		/** Synchronization mode */
		synchronizationMode: FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>,

		/**
		 * Synchronization time
		 * Required
		 */
		synchronizationTime: FormControl<Date | null | undefined>,

		/** Gets the trigger state */
		triggerStatus: FormControl<ScheduledTriggerPropertiesTriggerStatus | null | undefined>,

		/** Name of the user who created the trigger. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateScheduledTriggerPropertiesFormGroup() {
		return new FormGroup<ScheduledTriggerPropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			recurrenceInterval: new FormControl<ScheduledSourceShareSynchronizationSettingPropertiesRecurrenceInterval | null | undefined>(undefined, [Validators.required]),
			synchronizationMode: new FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>(undefined),
			synchronizationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			triggerStatus: new FormControl<ScheduledTriggerPropertiesTriggerStatus | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduledTriggerPropertiesSynchronizationMode { Incremental = 'Incremental', FullSync = 'FullSync' }

	export enum ScheduledTriggerPropertiesTriggerStatus { Active = 'Active', Inactive = 'Inactive', SourceSynchronizationSettingDeleted = 'SourceSynchronizationSettingDeleted' }


	/** A share data transfer object. */
	export interface Share {

		/** Share property bag. */
		properties?: ShareProperties;
	}

	/** A share data transfer object. */
	export interface ShareFormProperties {
	}
	export function CreateShareFormGroup() {
		return new FormGroup<ShareFormProperties>({
		});

	}


	/** Share property bag. */
	export interface ShareProperties {

		/** Time at which the share was created. */
		createdAt?: Date | null;

		/** Share description. */
		description?: string | null;

		/** Gets or sets the provisioning state */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/** Share kind. */
		shareKind?: SharePropertiesShareKind | null;

		/** Share terms. */
		terms?: string | null;

		/** Email of the user who created the resource */
		userEmail?: string | null;

		/** Name of the user who created the resource */
		userName?: string | null;
	}

	/** Share property bag. */
	export interface SharePropertiesFormProperties {

		/** Time at which the share was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Share description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the provisioning state */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/** Share kind. */
		shareKind: FormControl<SharePropertiesShareKind | null | undefined>,

		/** Share terms. */
		terms: FormControl<string | null | undefined>,

		/** Email of the user who created the resource */
		userEmail: FormControl<string | null | undefined>,

		/** Name of the user who created the resource */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSharePropertiesFormGroup() {
		return new FormGroup<SharePropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			shareKind: new FormControl<SharePropertiesShareKind | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SharePropertiesShareKind { CopyBased = 'CopyBased', InPlace = 'InPlace' }


	/** List response for get Shares. */
	export interface ShareList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<Share>;
	}

	/** List response for get Shares. */
	export interface ShareListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateShareListFormGroup() {
		return new FormGroup<ShareListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A share subscription data transfer object. */
	export interface ShareSubscription {

		/**
		 * Share subscription property bag.
		 * Required
		 */
		properties: ShareSubscriptionProperties;
	}

	/** A share subscription data transfer object. */
	export interface ShareSubscriptionFormProperties {
	}
	export function CreateShareSubscriptionFormGroup() {
		return new FormGroup<ShareSubscriptionFormProperties>({
		});

	}


	/** Share subscription property bag. */
	export interface ShareSubscriptionProperties {

		/** Time at which the share subscription was created. */
		createdAt?: Date | null;

		/**
		 * The invitation id.
		 * Required
		 */
		invitationId: string;

		/** Email of the provider who created the resource */
		providerEmail?: string | null;

		/** Name of the provider who created the resource */
		providerName?: string | null;

		/** Tenant name of the provider who created the resource */
		providerTenantName?: string | null;

		/** Provisioning state of the share subscription */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/** Description of share */
		shareDescription?: string | null;

		/** Kind of share */
		shareKind?: SharePropertiesShareKind | null;

		/** Name of the share */
		shareName?: string | null;

		/** Gets the current status of share subscription. */
		shareSubscriptionStatus?: ProviderShareSubscriptionPropertiesShareSubscriptionStatus | null;

		/** Terms of a share */
		shareTerms?: string | null;

		/**
		 * Source share location.
		 * Required
		 */
		sourceShareLocation: string;

		/** Email of the user who created the resource */
		userEmail?: string | null;

		/** Name of the user who created the resource */
		userName?: string | null;
	}

	/** Share subscription property bag. */
	export interface ShareSubscriptionPropertiesFormProperties {

		/** Time at which the share subscription was created. */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * The invitation id.
		 * Required
		 */
		invitationId: FormControl<string | null | undefined>,

		/** Email of the provider who created the resource */
		providerEmail: FormControl<string | null | undefined>,

		/** Name of the provider who created the resource */
		providerName: FormControl<string | null | undefined>,

		/** Tenant name of the provider who created the resource */
		providerTenantName: FormControl<string | null | undefined>,

		/** Provisioning state of the share subscription */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/** Description of share */
		shareDescription: FormControl<string | null | undefined>,

		/** Kind of share */
		shareKind: FormControl<SharePropertiesShareKind | null | undefined>,

		/** Name of the share */
		shareName: FormControl<string | null | undefined>,

		/** Gets the current status of share subscription. */
		shareSubscriptionStatus: FormControl<ProviderShareSubscriptionPropertiesShareSubscriptionStatus | null | undefined>,

		/** Terms of a share */
		shareTerms: FormControl<string | null | undefined>,

		/**
		 * Source share location.
		 * Required
		 */
		sourceShareLocation: FormControl<string | null | undefined>,

		/** Email of the user who created the resource */
		userEmail: FormControl<string | null | undefined>,

		/** Name of the user who created the resource */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateShareSubscriptionPropertiesFormGroup() {
		return new FormGroup<ShareSubscriptionPropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerEmail: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
			providerTenantName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			shareDescription: new FormControl<string | null | undefined>(undefined),
			shareKind: new FormControl<SharePropertiesShareKind | null | undefined>(undefined),
			shareName: new FormControl<string | null | undefined>(undefined),
			shareSubscriptionStatus: new FormControl<ProviderShareSubscriptionPropertiesShareSubscriptionStatus | null | undefined>(undefined),
			shareTerms: new FormControl<string | null | undefined>(undefined),
			sourceShareLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List response for get ShareSubscription. */
	export interface ShareSubscriptionList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<ShareSubscription>;
	}

	/** List response for get ShareSubscription. */
	export interface ShareSubscriptionListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateShareSubscriptionListFormGroup() {
		return new FormGroup<ShareSubscriptionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ShareSubscriptionSynchronization data transfer object. */
	export interface ShareSubscriptionSynchronization {

		/** Synchronization duration */
		durationMs?: number | null;

		/** End time of synchronization */
		endTime?: Date | null;

		/** message of Synchronization */
		message?: string | null;

		/** start time of synchronization */
		startTime?: Date | null;

		/** Raw Status */
		status?: string | null;

		/**
		 * Synchronization id
		 * Required
		 */
		synchronizationId: string;

		/** Synchronization Mode */
		synchronizationMode?: ScheduledTriggerPropertiesSynchronizationMode | null;
	}

	/** A ShareSubscriptionSynchronization data transfer object. */
	export interface ShareSubscriptionSynchronizationFormProperties {

		/** Synchronization duration */
		durationMs: FormControl<number | null | undefined>,

		/** End time of synchronization */
		endTime: FormControl<Date | null | undefined>,

		/** message of Synchronization */
		message: FormControl<string | null | undefined>,

		/** start time of synchronization */
		startTime: FormControl<Date | null | undefined>,

		/** Raw Status */
		status: FormControl<string | null | undefined>,

		/**
		 * Synchronization id
		 * Required
		 */
		synchronizationId: FormControl<string | null | undefined>,

		/** Synchronization Mode */
		synchronizationMode: FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>,
	}
	export function CreateShareSubscriptionSynchronizationFormGroup() {
		return new FormGroup<ShareSubscriptionSynchronizationFormProperties>({
			durationMs: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			synchronizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			synchronizationMode: new FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>(undefined),
		});

	}


	/** A consumer side list of share subscription synchronizations */
	export interface ShareSubscriptionSynchronizationList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<ShareSubscriptionSynchronization>;
	}

	/** A consumer side list of share subscription synchronizations */
	export interface ShareSubscriptionSynchronizationListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateShareSubscriptionSynchronizationListFormGroup() {
		return new FormGroup<ShareSubscriptionSynchronizationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ShareSynchronization data transfer object. */
	export interface ShareSynchronization {

		/** Email of the user who created the synchronization */
		consumerEmail?: string | null;

		/** Name of the user who created the synchronization */
		consumerName?: string | null;

		/** Tenant name of the consumer who created the synchronization */
		consumerTenantName?: string | null;

		/** synchronization duration */
		durationMs?: number | null;

		/** End time of synchronization */
		endTime?: Date | null;

		/** message of synchronization */
		message?: string | null;

		/** start time of synchronization */
		startTime?: Date | null;

		/** Raw Status */
		status?: string | null;

		/** Synchronization id */
		synchronizationId?: string | null;

		/** Synchronization mode */
		synchronizationMode?: ScheduledTriggerPropertiesSynchronizationMode | null;
	}

	/** A ShareSynchronization data transfer object. */
	export interface ShareSynchronizationFormProperties {

		/** Email of the user who created the synchronization */
		consumerEmail: FormControl<string | null | undefined>,

		/** Name of the user who created the synchronization */
		consumerName: FormControl<string | null | undefined>,

		/** Tenant name of the consumer who created the synchronization */
		consumerTenantName: FormControl<string | null | undefined>,

		/** synchronization duration */
		durationMs: FormControl<number | null | undefined>,

		/** End time of synchronization */
		endTime: FormControl<Date | null | undefined>,

		/** message of synchronization */
		message: FormControl<string | null | undefined>,

		/** start time of synchronization */
		startTime: FormControl<Date | null | undefined>,

		/** Raw Status */
		status: FormControl<string | null | undefined>,

		/** Synchronization id */
		synchronizationId: FormControl<string | null | undefined>,

		/** Synchronization mode */
		synchronizationMode: FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>,
	}
	export function CreateShareSynchronizationFormGroup() {
		return new FormGroup<ShareSynchronizationFormProperties>({
			consumerEmail: new FormControl<string | null | undefined>(undefined),
			consumerName: new FormControl<string | null | undefined>(undefined),
			consumerTenantName: new FormControl<string | null | undefined>(undefined),
			durationMs: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			synchronizationId: new FormControl<string | null | undefined>(undefined),
			synchronizationMode: new FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>(undefined),
		});

	}


	/** List response for get ShareSynchronization. */
	export interface ShareSynchronizationList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<ShareSynchronization>;
	}

	/** List response for get ShareSynchronization. */
	export interface ShareSynchronizationListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateShareSynchronizationListFormGroup() {
		return new FormGroup<ShareSynchronizationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A view of synchronization setting added by the provider */
	export interface SourceShareSynchronizationSetting {

		/**
		 * Kind of synchronization
		 * Required
		 */
		kind: SourceShareSynchronizationSettingKind;
	}

	/** A view of synchronization setting added by the provider */
	export interface SourceShareSynchronizationSettingFormProperties {

		/**
		 * Kind of synchronization
		 * Required
		 */
		kind: FormControl<SourceShareSynchronizationSettingKind | null | undefined>,
	}
	export function CreateSourceShareSynchronizationSettingFormGroup() {
		return new FormGroup<SourceShareSynchronizationSettingFormProperties>({
			kind: new FormControl<SourceShareSynchronizationSettingKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SourceShareSynchronizationSettingKind { ScheduleBased = 'ScheduleBased' }


	/** List response for get source share Synchronization settings */
	export interface SourceShareSynchronizationSettingList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<SourceShareSynchronizationSetting>;
	}

	/** List response for get source share Synchronization settings */
	export interface SourceShareSynchronizationSettingListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSourceShareSynchronizationSettingListFormGroup() {
		return new FormGroup<SourceShareSynchronizationSettingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SQL DB table data set. */
	export interface SqlDBTableDataSet {

		/** Properties of the SQL DB table data set. */
		properties?: SqlDBTableProperties;
	}

	/** A SQL DB table data set. */
	export interface SqlDBTableDataSetFormProperties {
	}
	export function CreateSqlDBTableDataSetFormGroup() {
		return new FormGroup<SqlDBTableDataSetFormProperties>({
		});

	}


	/** Properties of the SQL DB table data set. */
	export interface SqlDBTableProperties {

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * Database name of the source data set
		 * Required
		 */
		databaseName: string;

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: string;

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: string;

		/**
		 * SQL DB table name.
		 * Required
		 */
		tableName: string;
	}

	/** Properties of the SQL DB table data set. */
	export interface SqlDBTablePropertiesFormProperties {

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * Database name of the source data set
		 * Required
		 */
		databaseName: FormControl<string | null | undefined>,

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: FormControl<string | null | undefined>,

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: FormControl<string | null | undefined>,

		/**
		 * SQL DB table name.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSqlDBTablePropertiesFormGroup() {
		return new FormGroup<SqlDBTablePropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sqlServerResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A SQL DB Table data set mapping. */
	export interface SqlDBTableDataSetMapping {

		/**
		 * Properties of the SQL DB table data set mapping.
		 * Required
		 */
		properties: SqlDBTableDataSetMappingProperties;
	}

	/** A SQL DB Table data set mapping. */
	export interface SqlDBTableDataSetMappingFormProperties {
	}
	export function CreateSqlDBTableDataSetMappingFormGroup() {
		return new FormGroup<SqlDBTableDataSetMappingFormProperties>({
		});

	}


	/** Properties of the SQL DB table data set mapping. */
	export interface SqlDBTableDataSetMappingProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * DatabaseName name of the sink data set
		 * Required
		 */
		databaseName: string;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: string;

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: string;

		/**
		 * SQL DB table name.
		 * Required
		 */
		tableName: string;
	}

	/** Properties of the SQL DB table data set mapping. */
	export interface SqlDBTableDataSetMappingPropertiesFormProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * DatabaseName name of the sink data set
		 * Required
		 */
		databaseName: FormControl<string | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: FormControl<string | null | undefined>,

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: FormControl<string | null | undefined>,

		/**
		 * SQL DB table name.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSqlDBTableDataSetMappingPropertiesFormGroup() {
		return new FormGroup<SqlDBTableDataSetMappingPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sqlServerResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A SQL DW table data set. */
	export interface SqlDWTableDataSet {

		/** Properties of the SQL DW table data set. */
		properties?: SqlDWTableProperties;
	}

	/** A SQL DW table data set. */
	export interface SqlDWTableDataSetFormProperties {
	}
	export function CreateSqlDWTableDataSetFormGroup() {
		return new FormGroup<SqlDWTableDataSetFormProperties>({
		});

	}


	/** Properties of the SQL DW table data set. */
	export interface SqlDWTableProperties {

		/** Unique id for identifying a data set resource */
		dataSetId?: string | null;

		/**
		 * DataWarehouse name of the source data set
		 * Required
		 */
		dataWarehouseName: string;

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: string;

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: string;

		/**
		 * SQL DW table name.
		 * Required
		 */
		tableName: string;
	}

	/** Properties of the SQL DW table data set. */
	export interface SqlDWTablePropertiesFormProperties {

		/** Unique id for identifying a data set resource */
		dataSetId: FormControl<string | null | undefined>,

		/**
		 * DataWarehouse name of the source data set
		 * Required
		 */
		dataWarehouseName: FormControl<string | null | undefined>,

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: FormControl<string | null | undefined>,

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: FormControl<string | null | undefined>,

		/**
		 * SQL DW table name.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSqlDWTablePropertiesFormGroup() {
		return new FormGroup<SqlDWTablePropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			dataWarehouseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sqlServerResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A SQL DW Table data set mapping. */
	export interface SqlDWTableDataSetMapping {

		/**
		 * Properties of the SQL DW table data set mapping.
		 * Required
		 */
		properties: SqlDWTableDataSetMappingProperties;
	}

	/** A SQL DW Table data set mapping. */
	export interface SqlDWTableDataSetMappingFormProperties {
	}
	export function CreateSqlDWTableDataSetMappingFormGroup() {
		return new FormGroup<SqlDWTableDataSetMappingFormProperties>({
		});

	}


	/** Properties of the SQL DW table data set mapping. */
	export interface SqlDWTableDataSetMappingProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: string;

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus?: ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null;

		/**
		 * DataWarehouse name of the source data set
		 * Required
		 */
		dataWarehouseName: string;

		/** Provisioning state of the data set mapping. */
		provisioningState?: ADLSGen2FileDataSetMappingPropertiesProvisioningState | null;

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: string;

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: string;

		/**
		 * SQL DW table name.
		 * Required
		 */
		tableName: string;
	}

	/** Properties of the SQL DW table data set mapping. */
	export interface SqlDWTableDataSetMappingPropertiesFormProperties {

		/**
		 * The id of the source data set.
		 * Required
		 */
		dataSetId: FormControl<string | null | undefined>,

		/** Gets the status of the data set mapping. */
		dataSetMappingStatus: FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>,

		/**
		 * DataWarehouse name of the source data set
		 * Required
		 */
		dataWarehouseName: FormControl<string | null | undefined>,

		/** Provisioning state of the data set mapping. */
		provisioningState: FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>,

		/**
		 * Schema of the table. Default value is dbo.
		 * Required
		 */
		schemaName: FormControl<string | null | undefined>,

		/**
		 * Resource id of SQL server
		 * Required
		 */
		sqlServerResourceId: FormControl<string | null | undefined>,

		/**
		 * SQL DW table name.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateSqlDWTableDataSetMappingPropertiesFormGroup() {
		return new FormGroup<SqlDWTableDataSetMappingPropertiesFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetMappingStatus: new FormControl<ADLSGen2FileDataSetMappingPropertiesDataSetMappingStatus | null | undefined>(undefined),
			dataWarehouseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<ADLSGen2FileDataSetMappingPropertiesProvisioningState | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sqlServerResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Synchronization details at data set level */
	export interface SynchronizationDetails {

		/** Id of data set */
		dataSetId?: string | null;

		/** Type of the data set */
		dataSetType?: ConsumerSourceDataSetPropertiesDataSetType | null;

		/** Duration of data set level copy */
		durationMs?: number | null;

		/** End time of data set level copy */
		endTime?: Date | null;

		/** The number of files read from the source data set */
		filesRead?: number | null;

		/** The number of files written into the sink data set */
		filesWritten?: number | null;

		/** Error message if any */
		message?: string | null;

		/** Name of the data set */
		name?: string | null;

		/** The number of files copied into the sink data set */
		rowsCopied?: number | null;

		/** The number of rows read from the source data set. */
		rowsRead?: number | null;

		/** The size of the data read from the source data set in bytes */
		sizeRead?: number | null;

		/** The size of the data written into the sink data set in bytes */
		sizeWritten?: number | null;

		/** Start time of data set level copy */
		startTime?: Date | null;

		/** Raw Status */
		status?: string | null;

		/** The vCore units consumed for the data set synchronization */
		vCore?: number | null;
	}

	/** Synchronization details at data set level */
	export interface SynchronizationDetailsFormProperties {

		/** Id of data set */
		dataSetId: FormControl<string | null | undefined>,

		/** Type of the data set */
		dataSetType: FormControl<ConsumerSourceDataSetPropertiesDataSetType | null | undefined>,

		/** Duration of data set level copy */
		durationMs: FormControl<number | null | undefined>,

		/** End time of data set level copy */
		endTime: FormControl<Date | null | undefined>,

		/** The number of files read from the source data set */
		filesRead: FormControl<number | null | undefined>,

		/** The number of files written into the sink data set */
		filesWritten: FormControl<number | null | undefined>,

		/** Error message if any */
		message: FormControl<string | null | undefined>,

		/** Name of the data set */
		name: FormControl<string | null | undefined>,

		/** The number of files copied into the sink data set */
		rowsCopied: FormControl<number | null | undefined>,

		/** The number of rows read from the source data set. */
		rowsRead: FormControl<number | null | undefined>,

		/** The size of the data read from the source data set in bytes */
		sizeRead: FormControl<number | null | undefined>,

		/** The size of the data written into the sink data set in bytes */
		sizeWritten: FormControl<number | null | undefined>,

		/** Start time of data set level copy */
		startTime: FormControl<Date | null | undefined>,

		/** Raw Status */
		status: FormControl<string | null | undefined>,

		/** The vCore units consumed for the data set synchronization */
		vCore: FormControl<number | null | undefined>,
	}
	export function CreateSynchronizationDetailsFormGroup() {
		return new FormGroup<SynchronizationDetailsFormProperties>({
			dataSetId: new FormControl<string | null | undefined>(undefined),
			dataSetType: new FormControl<ConsumerSourceDataSetPropertiesDataSetType | null | undefined>(undefined),
			durationMs: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			filesRead: new FormControl<number | null | undefined>(undefined),
			filesWritten: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rowsCopied: new FormControl<number | null | undefined>(undefined),
			rowsRead: new FormControl<number | null | undefined>(undefined),
			sizeRead: new FormControl<number | null | undefined>(undefined),
			sizeWritten: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			vCore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** details of synchronization */
	export interface SynchronizationDetailsList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<SynchronizationDetails>;
	}

	/** details of synchronization */
	export interface SynchronizationDetailsListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSynchronizationDetailsListFormGroup() {
		return new FormGroup<SynchronizationDetailsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Synchronization Setting data transfer object. */
	export interface SynchronizationSetting {

		/**
		 * Kind of synchronization
		 * Required
		 */
		kind: SourceShareSynchronizationSettingKind;
	}

	/** A Synchronization Setting data transfer object. */
	export interface SynchronizationSettingFormProperties {

		/**
		 * Kind of synchronization
		 * Required
		 */
		kind: FormControl<SourceShareSynchronizationSettingKind | null | undefined>,
	}
	export function CreateSynchronizationSettingFormGroup() {
		return new FormGroup<SynchronizationSettingFormProperties>({
			kind: new FormControl<SourceShareSynchronizationSettingKind | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List response for get Synchronization settings */
	export interface SynchronizationSettingList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<SynchronizationSetting>;
	}

	/** List response for get Synchronization settings */
	export interface SynchronizationSettingListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSynchronizationSettingListFormGroup() {
		return new FormGroup<SynchronizationSettingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload for the synchronizing the data. */
	export interface Synchronize {

		/** Mode of synchronization used in triggers and snapshot sync. Incremental by default */
		synchronizationMode?: ScheduledTriggerPropertiesSynchronizationMode | null;
	}

	/** Payload for the synchronizing the data. */
	export interface SynchronizeFormProperties {

		/** Mode of synchronization used in triggers and snapshot sync. Incremental by default */
		synchronizationMode: FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>,
	}
	export function CreateSynchronizeFormGroup() {
		return new FormGroup<SynchronizeFormProperties>({
			synchronizationMode: new FormControl<ScheduledTriggerPropertiesSynchronizationMode | null | undefined>(undefined),
		});

	}


	/** A Trigger data transfer object. */
	export interface Trigger {

		/**
		 * Kind of synchronization
		 * Required
		 */
		kind: SourceShareSynchronizationSettingKind;
	}

	/** A Trigger data transfer object. */
	export interface TriggerFormProperties {

		/**
		 * Kind of synchronization
		 * Required
		 */
		kind: FormControl<SourceShareSynchronizationSettingKind | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			kind: new FormControl<SourceShareSynchronizationSettingKind | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List response for get triggers */
	export interface TriggerList {

		/** The Url of next result page. */
		nextLink?: string | null;

		/**
		 * Collection of items of type DataTransferObjects.
		 * Required
		 */
		value: Array<Trigger>;
	}

	/** List response for get triggers */
	export interface TriggerListFormProperties {

		/** The Url of next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTriggerListFormGroup() {
		return new FormGroup<TriggerListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List the invitations
		 * Lists invitations
		 * Get providers/Microsoft.DataShare/ListInvitations
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken The continuation token
		 * @return {ConsumerInvitationList} Success
		 */
		ConsumerInvitations_ListInvitations(api_version: string, skipToken: string | null | undefined): Observable<ConsumerInvitationList> {
			return this.http.get<ConsumerInvitationList>(this.baseUri + 'providers/Microsoft.DataShare/ListInvitations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Rejects the invitation identified by invitationId
		 * Reject an invitation
		 * Post providers/Microsoft.DataShare/locations/{location}/RejectInvitation
		 * @param {string} location Location of the invitation
		 * @param {string} api_version The api version to use.
		 * @param {ConsumerInvitation} requestBody An invitation payload
		 * @return {ConsumerInvitation} Success
		 */
		ConsumerInvitations_RejectInvitation(location: string, api_version: string, requestBody: ConsumerInvitation): Observable<ConsumerInvitation> {
			return this.http.post<ConsumerInvitation>(this.baseUri + 'providers/Microsoft.DataShare/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/RejectInvitation&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the invitation identified by invitationId
		 * Get an invitation
		 * Get providers/Microsoft.DataShare/locations/{location}/consumerInvitations/{invitationId}
		 * @param {string} location Location of the invitation
		 * @param {string} invitationId An invitation id
		 * @param {string} api_version The api version to use.
		 * @return {ConsumerInvitation} Success
		 */
		ConsumerInvitations_Get(location: string, invitationId: string, api_version: string): Observable<ConsumerInvitation> {
			return this.http.get<ConsumerInvitation>(this.baseUri + 'providers/Microsoft.DataShare/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/consumerInvitations/' + (invitationId == null ? '' : encodeURIComponent(invitationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the available operations
		 * List of available operations
		 * Get providers/Microsoft.DataShare/operations
		 * @param {string} api_version The api version to use.
		 * @return {OperationList} Success
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.DataShare/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List Accounts in a subscription
		 * List Accounts in Subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataShare/accounts
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {AccountList} Success
		 */
		Accounts_ListBySubscription(subscriptionId: string, api_version: string, skipToken: string | null | undefined): Observable<AccountList> {
			return this.http.get<AccountList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataShare/accounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * List Accounts in a resource group
		 * List Accounts in ResourceGroup
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {AccountList} Success
		 */
		Accounts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, skipToken: string | null | undefined): Observable<AccountList> {
			return this.http.get<AccountList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get an account under a resource group
		 * Get an account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} api_version The api version to use.
		 * @return {Account} Success
		 */
		Accounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create an account in the given resource group
		 * Create an account
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} api_version The api version to use.
		 * @param {Account} requestBody The account payload.
		 * @return {Account} Success
		 */
		Accounts_Create(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an account
		 * DeleteAccount
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} api_version The api version to use.
		 * @return {OperationResponse} Success
		 */
		Accounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<OperationResponse> {
			return this.http.delete<OperationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Patch a given account
		 * Patch an account
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} api_version The api version to use.
		 * @param {AccountUpdateParameters} requestBody The account update parameters.
		 * @return {Account} Success
		 */
		Accounts_Update(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: AccountUpdateParameters): Observable<Account> {
			return this.http.patch<Account>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of available share subscriptions under an account.
		 * List share subscriptions in an account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation Token
		 * @return {ShareSubscriptionList} Success
		 */
		ShareSubscriptions_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, skipToken: string | null | undefined): Observable<ShareSubscriptionList> {
			return this.http.get<ShareSubscriptionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get shareSubscription in an account.
		 * Get a shareSubscription in an account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} api_version The api version to use.
		 * @return {ShareSubscription} Success
		 */
		ShareSubscriptions_Get(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string): Observable<ShareSubscription> {
			return this.http.get<ShareSubscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create shareSubscription in an account.
		 * Create a shareSubscription in an account
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} api_version The api version to use.
		 * @param {ShareSubscription} requestBody create parameters for shareSubscription
		 * @return {ShareSubscription} Success
		 */
		ShareSubscriptions_Create(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, requestBody: ShareSubscription): Observable<ShareSubscription> {
			return this.http.put<ShareSubscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete shareSubscription in an account.
		 * Delete a shareSubscription in an account
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} api_version The api version to use.
		 * @return {OperationResponse} Success
		 */
		ShareSubscriptions_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string): Observable<OperationResponse> {
			return this.http.delete<OperationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get source dataSets of a shareSubscription.
		 * Get source dataSets of a shareSubscription
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/ConsumerSourceDataSets
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {ConsumerSourceDataSetList} Success
		 */
		ConsumerSourceDataSets_ListByShareSubscription(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, skipToken: string | null | undefined): Observable<ConsumerSourceDataSetList> {
			return this.http.get<ConsumerSourceDataSetList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/ConsumerSourceDataSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Initiate an asynchronous data share job
		 * Initiate a copy
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/Synchronize
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of share subscription
		 * @param {string} api_version The api version to use.
		 * @param {Synchronize} requestBody Synchronize payload
		 * @return {ShareSubscriptionSynchronization} Success
		 */
		ShareSubscriptions_Synchronize(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, requestBody: Synchronize): Observable<ShareSubscriptionSynchronization> {
			return this.http.post<ShareSubscriptionSynchronization>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/Synchronize&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request cancellation of a data share snapshot
		 * Request to cancel a synchronization.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/cancelSynchronization
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} api_version The api version to use.
		 * @param {ShareSubscriptionSynchronization} requestBody Share Subscription Synchronization payload.
		 * @return {ShareSubscriptionSynchronization} Success
		 */
		ShareSubscriptions_CancelSynchronization(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, requestBody: ShareSubscriptionSynchronization): Observable<ShareSubscriptionSynchronization> {
			return this.http.post<ShareSubscriptionSynchronization>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/cancelSynchronization&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List DataSetMappings in a share subscription.
		 * List DataSetMappings in a share subscription
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the share subscription.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {DataSetMappingList} Success
		 */
		DataSetMappings_ListByShareSubscription(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, skipToken: string | null | undefined): Observable<DataSetMappingList> {
			return this.http.get<DataSetMappingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/dataSetMappings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get DataSetMapping in a shareSubscription.
		 * Get a DataSetMapping in a shareSubscription
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} dataSetMappingName The name of the dataSetMapping.
		 * @param {string} api_version The api version to use.
		 * @return {DataSetMapping} Success
		 */
		DataSetMappings_Get(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, api_version: string): Observable<DataSetMapping> {
			return this.http.get<DataSetMapping>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/dataSetMappings/' + (dataSetMappingName == null ? '' : encodeURIComponent(dataSetMappingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Maps a source data set in the source share to a sink data set in the share subscription.
		 * Enables copying the data set from source to destination.
		 * Create a DataSetMapping
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the share subscription which will hold the data set sink.
		 * @param {string} dataSetMappingName The name of the data set mapping to be created.
		 * @param {string} api_version The api version to use.
		 * @param {DataSetMapping} requestBody Destination data set configuration details.
		 * @return {DataSetMapping} Success
		 */
		DataSetMappings_Create(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, api_version: string, requestBody: DataSetMapping): Observable<DataSetMapping> {
			return this.http.put<DataSetMapping>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/dataSetMappings/' + (dataSetMappingName == null ? '' : encodeURIComponent(dataSetMappingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete DataSetMapping in a shareSubscription.
		 * Delete a DataSetMapping in a shareSubscription
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} dataSetMappingName The name of the dataSetMapping.
		 * @param {string} api_version The api version to use.
		 * @return {void} Success
		 */
		DataSetMappings_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/dataSetMappings/' + (dataSetMappingName == null ? '' : encodeURIComponent(dataSetMappingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get source share synchronization settings for a shareSubscription.
		 * Get synchronization settings set on a share
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSourceShareSynchronizationSettings
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {SourceShareSynchronizationSettingList} Success
		 */
		ShareSubscriptions_ListSourceShareSynchronizationSettings(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, skipToken: string | null | undefined): Observable<SourceShareSynchronizationSettingList> {
			return this.http.post<SourceShareSynchronizationSettingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/listSourceShareSynchronizationSettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), null, {});
		}

		/**
		 * List data set level details for a share subscription synchronization
		 * List synchronization details
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSynchronizationDetails
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the share subscription.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @param {ShareSubscriptionSynchronization} requestBody Share Subscription Synchronization payload.
		 * @return {SynchronizationDetailsList} Success
		 */
		ShareSubscriptions_ListSynchronizationDetails(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, skipToken: string | null | undefined, requestBody: ShareSubscriptionSynchronization): Observable<SynchronizationDetailsList> {
			return this.http.post<SynchronizationDetailsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/listSynchronizationDetails&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Synchronizations in a share subscription.
		 * List synchronizations of a share subscription
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSynchronizations
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the share subscription.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {ShareSubscriptionSynchronizationList} Success
		 */
		ShareSubscriptions_ListSynchronizations(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, skipToken: string | null | undefined): Observable<ShareSubscriptionSynchronizationList> {
			return this.http.post<ShareSubscriptionSynchronizationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/listSynchronizations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), null, {});
		}

		/**
		 * List Triggers in a share subscription.
		 * List Triggers in a share subscription
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the share subscription.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {TriggerList} Success
		 */
		Triggers_ListByShareSubscription(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, api_version: string, skipToken: string | null | undefined): Observable<TriggerList> {
			return this.http.get<TriggerList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/triggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get Trigger in a shareSubscription.
		 * Get a Trigger in a shareSubscription
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} triggerName The name of the trigger.
		 * @param {string} api_version The api version to use.
		 * @return {Trigger} Success
		 */
		Triggers_Get(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, triggerName: string, api_version: string): Observable<Trigger> {
			return this.http.get<Trigger>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * This method creates a trigger for a share subscription
		 * Create a Trigger
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the share subscription which will hold the data set sink.
		 * @param {string} triggerName The name of the trigger.
		 * @param {string} api_version The api version to use.
		 * @param {Trigger} requestBody Trigger details.
		 * @return {Trigger} Success
		 */
		Triggers_Create(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, triggerName: string, api_version: string, requestBody: Trigger): Observable<Trigger> {
			return this.http.put<Trigger>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Trigger in a shareSubscription.
		 * Delete a Trigger in a shareSubscription
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareSubscriptionName The name of the shareSubscription.
		 * @param {string} triggerName The name of the trigger.
		 * @param {string} api_version The api version to use.
		 * @return {OperationResponse} Success
		 */
		Triggers_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, shareSubscriptionName: string, triggerName: string, api_version: string): Observable<OperationResponse> {
			return this.http.delete<OperationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shareSubscriptions/' + (shareSubscriptionName == null ? '' : encodeURIComponent(shareSubscriptionName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List of available shares under an account.
		 * List shares in an account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation Token
		 * @return {ShareList} Success
		 */
		Shares_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, skipToken: string | null | undefined): Observable<ShareList> {
			return this.http.get<ShareList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get a specified share
		 * Get a share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share to retrieve.
		 * @param {string} api_version The api version to use.
		 * @return {Share} Success
		 */
		Shares_Get(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string): Observable<Share> {
			return this.http.get<Share>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a share in the given account.
		 * Create a share
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @param {Share} requestBody The share payload
		 * @return {Share} Success
		 */
		Shares_Create(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string, requestBody: Share): Observable<Share> {
			return this.http.put<Share>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a share
		 * Delete a share
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @return {OperationResponse} Success
		 */
		Shares_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string): Observable<OperationResponse> {
			return this.http.delete<OperationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List DataSets in a share.
		 * List DataSets in a share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken continuation token
		 * @return {DataSetList} Success
		 */
		DataSets_ListByShare(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string, skipToken: string | null | undefined): Observable<DataSetList> {
			return this.http.get<DataSetList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/dataSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get DataSet in a share.
		 * Get a DataSet in a share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} dataSetName The name of the dataSet.
		 * @param {string} api_version The api version to use.
		 * @return {DataSet} Success
		 */
		DataSets_Get(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, api_version: string): Observable<DataSet> {
			return this.http.get<DataSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/dataSets/' + (dataSetName == null ? '' : encodeURIComponent(dataSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a new data set to an existing share or updates it if existing.
		 * Create a DataSet
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share to add the data set to.
		 * @param {string} dataSetName The name of the dataSet.
		 * @param {string} api_version The api version to use.
		 * @param {DataSet} requestBody The new data set information.
		 * @return {DataSet} Success
		 */
		DataSets_Create(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, api_version: string, requestBody: DataSet): Observable<DataSet> {
			return this.http.put<DataSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/dataSets/' + (dataSetName == null ? '' : encodeURIComponent(dataSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete DataSet in a share.
		 * Delete a DataSet in a share
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} dataSetName The name of the dataSet.
		 * @param {string} api_version The api version to use.
		 * @return {void} Success
		 */
		DataSets_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/dataSets/' + (dataSetName == null ? '' : encodeURIComponent(dataSetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all Invitations in a share.
		 * List invitations in a share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken The continuation token
		 * @return {InvitationList} Success
		 */
		Invitations_ListByShare(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string, skipToken: string | null | undefined): Observable<InvitationList> {
			return this.http.get<InvitationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/invitations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get Invitation in a share.
		 * Get an invitation in a share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} invitationName The name of the invitation.
		 * @param {string} api_version The api version to use.
		 * @return {Invitation} Success
		 */
		Invitations_Get(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, invitationName: string, api_version: string): Observable<Invitation> {
			return this.http.get<Invitation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/invitations/' + (invitationName == null ? '' : encodeURIComponent(invitationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sends a new invitation to a recipient to access a share.
		 * Create an invitation
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share to send the invitation for.
		 * @param {string} invitationName The name of the invitation.
		 * @param {string} api_version The api version to use.
		 * @param {Invitation} requestBody Invitation details.
		 * @return {Invitation} Success
		 */
		Invitations_Create(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, invitationName: string, api_version: string, requestBody: Invitation): Observable<Invitation> {
			return this.http.put<Invitation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/invitations/' + (invitationName == null ? '' : encodeURIComponent(invitationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Invitation in a share.
		 * Delete an invitation in a share
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} invitationName The name of the invitation.
		 * @param {string} api_version The api version to use.
		 * @return {void} Success
		 */
		Invitations_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, invitationName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/invitations/' + (invitationName == null ? '' : encodeURIComponent(invitationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List data set level details for a share synchronization
		 * List synchronization details
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/listSynchronizationDetails
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @param {ShareSynchronization} requestBody Share Synchronization payload.
		 * @return {SynchronizationDetailsList} Success
		 */
		Shares_ListSynchronizationDetails(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string, skipToken: string | null | undefined, requestBody: ShareSynchronization): Observable<SynchronizationDetailsList> {
			return this.http.post<SynchronizationDetailsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/listSynchronizationDetails&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Synchronizations in a share
		 * List synchronizations of a share
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/listSynchronizations
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation token
		 * @return {ShareSynchronizationList} Success
		 */
		Shares_ListSynchronizations(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string, skipToken: string | null | undefined): Observable<ShareSynchronizationList> {
			return this.http.post<ShareSynchronizationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/listSynchronizations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), null, {});
		}

		/**
		 * List of available share subscriptions to a provider share.
		 * List share subscriptions in a provider share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken Continuation Token
		 * @return {ProviderShareSubscriptionList} Success
		 */
		ProviderShareSubscriptions_ListByShare(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string, skipToken: string | null | undefined): Observable<ProviderShareSubscriptionList> {
			return this.http.get<ProviderShareSubscriptionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/providerShareSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get share subscription in a provider share.
		 * Get share subscription in a provider share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} providerShareSubscriptionId To locate shareSubscription
		 * @param {string} api_version The api version to use.
		 * @return {ProviderShareSubscription} Success
		 */
		ProviderShareSubscriptions_GetByShare(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, api_version: string): Observable<ProviderShareSubscription> {
			return this.http.get<ProviderShareSubscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/providerShareSubscriptions/' + (providerShareSubscriptionId == null ? '' : encodeURIComponent(providerShareSubscriptionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Reinstate share subscription in a provider share.
		 * Reinstate share subscription in a provider share
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/reinstate
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} providerShareSubscriptionId To locate shareSubscription
		 * @param {string} api_version The api version to use.
		 * @return {ProviderShareSubscription} Success
		 */
		ProviderShareSubscriptions_Reinstate(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, api_version: string): Observable<ProviderShareSubscription> {
			return this.http.post<ProviderShareSubscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/providerShareSubscriptions/' + (providerShareSubscriptionId == null ? '' : encodeURIComponent(providerShareSubscriptionId)) + '/reinstate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Revoke share subscription in a provider share.
		 * Revoke share subscription in a provider share
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/revoke
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} providerShareSubscriptionId To locate shareSubscription
		 * @param {string} api_version The api version to use.
		 * @return {ProviderShareSubscription} Success
		 */
		ProviderShareSubscriptions_Revoke(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, api_version: string): Observable<ProviderShareSubscription> {
			return this.http.post<ProviderShareSubscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/providerShareSubscriptions/' + (providerShareSubscriptionId == null ? '' : encodeURIComponent(providerShareSubscriptionId)) + '/revoke&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * List synchronizationSettings in a share.
		 * List synchronizationSettings in a share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} api_version The api version to use.
		 * @param {string} skipToken continuation token
		 * @return {SynchronizationSettingList} Success
		 */
		SynchronizationSettings_ListByShare(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, api_version: string, skipToken: string | null | undefined): Observable<SynchronizationSettingList> {
			return this.http.get<SynchronizationSettingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/synchronizationSettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Get synchronizationSetting in a share.
		 * Get a synchronizationSetting in a share
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} synchronizationSettingName The name of the synchronizationSetting.
		 * @param {string} api_version The api version to use.
		 * @return {SynchronizationSetting} Success
		 */
		SynchronizationSettings_Get(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, api_version: string): Observable<SynchronizationSetting> {
			return this.http.get<SynchronizationSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/synchronizationSettings/' + (synchronizationSettingName == null ? '' : encodeURIComponent(synchronizationSettingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a new synchronization setting to an existing share or updates it if existing.
		 * Create or update a synchronizationSetting
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share to add the synchronization setting to.
		 * @param {string} synchronizationSettingName The name of the synchronizationSetting.
		 * @param {string} api_version The api version to use.
		 * @param {SynchronizationSetting} requestBody The new synchronization setting information.
		 * @return {SynchronizationSetting} Success
		 */
		SynchronizationSettings_Create(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, api_version: string, requestBody: SynchronizationSetting): Observable<SynchronizationSetting> {
			return this.http.put<SynchronizationSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/synchronizationSettings/' + (synchronizationSettingName == null ? '' : encodeURIComponent(synchronizationSettingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete synchronizationSetting in a share.
		 * Delete a synchronizationSetting in a share
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}
		 * @param {string} subscriptionId The subscription identifier
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} accountName The name of the share account.
		 * @param {string} shareName The name of the share.
		 * @param {string} synchronizationSettingName The name of the synchronizationSetting .
		 * @param {string} api_version The api version to use.
		 * @return {OperationResponse} Success
		 */
		SynchronizationSettings_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, api_version: string): Observable<OperationResponse> {
			return this.http.delete<OperationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataShare/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/synchronizationSettings/' + (synchronizationSettingName == null ? '' : encodeURIComponent(synchronizationSettingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

